## 快速入门指南 
本教程让您快速了解如何使用 LangChain 构建端到端语言模型应用程序。

## 安装
首先，使用以下命令安装 LangChain：
```
pip install langchain
# or
conda install langchain -c conda-forge
```
## 环境设置
使用 LangChain 通常需要与一个或多个模型提供者、数据存储、api 等集成。
对于这个例子，我们将使用 OpenAI 的 API，所以我们首先需要安装他们的 SDK：
```
pip install openai
```
然后我们需要在终端中设置环境变量。
```
export OPENAI_API_KEY="..."
```
或者，您可以从 Jupyter notebook（或 Python 脚本）中执行此操作：

```
import os
os.environ["OPENAI_API_KEY"] = "..."
```
## 构建语言模型应用程序：LLMs 
现在我们已经安装了 LangChain 并设置了我们的环境，我们可以开始构建我们的语言模型应用程序了。
LangChain 提供了很多可以用来构建语言模型应用的模块。模块可以组合起来创建更复杂的应用程序，或者单独用于简单的应用程序。
## 从语言模型中获取预测
LangChain 最基本的构建块是在某些输入上调用 LLM。让我们通过一个简单的例子来说明如何做到这一点。为此，假设我们正在构建一项服务，该服务会根据公司的产品生成公司名称。
为此，我们首先需要导入 LLM 包装器。

```
from langchain.llms import OpenAI
```

然后我们可以用任何参数初始化包装器。在此示例中，我们可能希望输出更加随机，因此我们将使用高温对其进行初始化。

```
llm = OpenAI(temperature=0.9)
```

我们现在可以根据一些输入调用它！

```
text = "What would be a good company name for a company that makes colorful socks?"
print(llm(text))
```

有关如何在 LangChain 中使用 LLM 的更多详细信息，请参阅 LLM 入门指南。

## 提示模板：管理 LLMs 的提示 
调用一个LLM大模型是重要的第一步，但这仅仅是个开始。通常，当您在应用程序中使用 LLM 时，您不会将用户输入直接发送到 LLM。相反，您可能正在接受用户输入并构建提示，然后将其发送给 LLM。