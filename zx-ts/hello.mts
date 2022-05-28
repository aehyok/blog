import { $ } from "zx";
import { add } from './ts.mjs'

console.log(add(6,7))
void (async function () {
  await $`ls`;
})();
