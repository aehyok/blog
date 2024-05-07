/*
 * @Date: 2024-02-27 15:33:57
 * @LastEditors: aardpro
 * @LastEditTime: 2024-05-07 10:43:30
 * @Description: 动态载入javascript
 * import loadJs from "@pkgs/helpers/load-javascript.js";
 * ---
 * await loadJs("https://cdn.bootcss.com/jquery/3.3.1/jquery.js");
 */
const dynamicJavascript = Symbol('dynamic-javascript');

function loadJs(src, extra = {}) {
  if (!window[dynamicJavascript]) {
    window[dynamicJavascript] = {};
  }
  return new Promise((resolve) => {
    if (window[dynamicJavascript][src]) {
      resolve(true);
      return;
    }
    const js = document.createElement('script');
    js.src = src;
    js.type = 'text/javascript';
    Object.assign(js, extra);
    js.onload = () => {
      window[dynamicJavascript][src] = true;
      resolve(true);
    };
    js.onerror = (err) => {
      console.error(err);
      resolve(false);
    };
    document.head.appendChild(js);
  });
}
export default loadJs;
