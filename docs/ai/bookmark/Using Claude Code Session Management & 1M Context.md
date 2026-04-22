---
type: "inbox"
status : "pending"
source: "web-clipper"
url: "https://x.com/trq212/status/2044548257058328723"
created: 2026-04-17
---
![图像](https://pbs.twimg.com/media/HF-p1RUbEAIH-6t?format=jpg&name=large)

In my recent calls with Claude Code users, one theme keeps coming up: the 1M token context window is a double-edged sword.

It lets Claude Code operate autonomously for longer and handle tasks more reliably, but it also opens the door to context pollution if you're not deliberate about managing your sessions.

Session management matters more than ever and there seem to be a lot of questions about it. Do you keep one session open in a terminal, or two? Start fresh with every prompt? When should you use compact, rewind, or subagents? What causes a bad compact?

There’s a surprising amount of detail here that can really shape your experience with Claude Code and almost all of it comes from managing your context window.

## A Quick Primer on Context, Compaction & Context Rot

![图像](https://pbs.twimg.com/media/HF-nqWCbEAE3Oan?format=jpg&name=large)

The context window is everything the model can "see" at once when generating its next response. It includes your system prompt, the conversation so far, every tool call and its output, and every file that's been read. Claude Code has a context window of one million tokens.

Unfortunately using context has a slight cost, which is often called context rot. Context rot is the observation that model performance degrades as context grows because attention gets spread across more tokens, and older, irrelevant content starts to distract from the current task. For our 1MM context model, we see some level of context rot happen around ~300-400k tokens, but it is highly dependent on the task- not a fast rule.

Context windows are a hard cutoff, so when you’re nearing the end of the context window, you will need to summarize the task you’ve been working on into a smaller description and continue the work in a new context window, we call this compaction. You can also trigger compaction yourself.

![图像](https://pbs.twimg.com/media/HF-ntaxboAAZuCm?format=jpg&name=large)

# Every Turn Is a Branching Point

Say you've just asked Claude to do something and it's finished, you’ve now got some information in your context (tool calls, tool outputs, your instructions) and you have a surprising number of options for what to do next:

- **Continue** — send another message in the same session
- **/rewind (esc esc)** — jump back to a previous message and try again from there
- **/clear** — start a new session, usually with a brief you've distilled from what you just learned
- **Compact** — summarize the session so far and keep going on top of the summary
- **Subagents** — delegate the next chunk of work to an agent with its own clean context, and only pull its result back in

While the most natural is just to continue, the other four options exist to help manage your context.

![图像](https://pbs.twimg.com/media/HF-n6mMbEAEImhv?format=jpg&name=large)

## When to Start a New Session

The new 1M context windows means that you can now do longer tasks more reliably, for example to have it build a full-stack app from scratch. But just because your model hasn't run out of context, it doesn't mean you shouldn't start a new session.

Our general rule of thumb is when you start a new task, you should also start a new session.

A grey area is when you may want to do related tasks where some of the context is still necessary, but not all.

For example, writing the documentation for a feature you just implemented. While you could start a new session, Claude would have to reread the files that you just implemented, which would be slower and more expensive. Since documentation may not be a highly intelligence sensitive task, the extra context is probably worth the efficiency gain of not having to re-read the relevant files again.

## Rewinding Instead of Correcting

![图像](https://pbs.twimg.com/media/HF-oDqjbEAI94h5?format=jpg&name=large)

If I had to pick one habit that signals good context management, it’s rewind.

In Claude Code, double-tapping Esc(or running /rewind) lets you jump back to any previous message and re-prompt from there. The messages after that point are dropped from the context.

Rewind is often the better approach to correction. For example, Claude reads five files, tries an approach, and it doesn't work. Your instinct may be to type "that didn't work, try X instead." but the better move is to rewind to just after the file reads, and re-prompt with what you learned. "Don't use approach A, the foo module doesn't expose that — go straight to B."

You can also use “summarize from here” to have Claude summarize its learnings and create a handoff message, kind of like a message to the previous iteration of Claude from its future self that tried something and it didn’t work.

![图像](https://pbs.twimg.com/media/HF-oKwBbEAAdb6I?format=jpg&name=large)

## Compacting vs. Fresh Sessions

Once a session gets long, you have two ways to shed weight: /compact or /clear (and start fresh). They feel similar but behave very differently.

**Compact** asks the model to summarize the conversation so far, then replaces the history with that summary. It's lossy, you're trusting Claude to decide what mattered, but you didn't have to write anything yourself and Claude might be more thorough in including important learnings or files. You can also steer it by passing instructions (/compact focus on the auth refactor, drop the test debugging).

![图像](https://pbs.twimg.com/media/HF-oPtxaAAAUKMr?format=jpg&name=large)

With /clear you write down what matters ("we're refactoring the auth middleware, the constraint is X, the files that matter are A and B, we've ruled out approach Y") and start clean. It's more work, but the resulting context is what you decided was relevant.

## What Causes a Bad Compact?

![图像](https://pbs.twimg.com/media/HF-oy22bEAE_Jd8?format=jpg&name=large)

If you run a lot of long running sessions, you might have noticed times in which compacting might be particularly bad. In this case we’ve often found that bad compacts can happen when the model can’t predict the direction your work is going.

For example autocompact fires after a long debugging session and summarizes the investigation and your next message is "now fix that other warning we saw in [bar.ts](http://bar.ts/)."

But because the session was focused on debugging, the other warning might have been dropped from the summary.

This is particularly difficult, because due to context rot, the model is at its least intelligent point when compacting. With one million context, you have more time to /compact proactively with a description of what you want to do.

## Subagents & Fresh Context Windows

![图像](https://pbs.twimg.com/media/HF-o6v1bQAA7pS6?format=jpg&name=large)

Subagents are a form of context management, useful for when you know in advance that a chunk of work will produce a lot of intermediate output you won't need again.

When Claude spawns a subagent via the Agent tool, that subagent gets its own fresh context window. It can do as much work as it needs to, and then synthesize its results so only the final report comes back to the parent.

The mental test we use: will I need this tool output again, or just the conclusion?

While Claude Code will automatically call subagents, you may want to tell it to explicitly do this. For example, you may want to tell it to:

- “Spin up a subagent to verify the result of this work based on the following spec file”
- “Spin off a subagent to read through this other codebase and summarize how it implemented the auth flow, then implement it yourself in the same way”
- “Spin off a subagent to write the docs on this feature based on my git changes”

# Summary

In summary, when Claude has ended a turn and you’re about to send a new message, you have a decision point.

Overtime we expect that Claude will help you handle this itself, but for now this is one of the ways you can guide Claude's output.

![图像](https://pbs.twimg.com/media/HF-qwt9bEAEa1eq?format=jpg&name=large)