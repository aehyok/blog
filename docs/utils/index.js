// 方法2: 获取单个参数值
export function getUrlParam(paramName, url) {
  let href = url;
  if (!href && typeof window !== "undefined") {
    href = window.location.href;
  }
  if (!href) {
    return null;
  }
  try {
      const urlObj = new URL(href);
      const params = new URLSearchParams(urlObj.search);
      return params.get(paramName);
  } catch (error) {
      console.error('URL解析错误:', error);
      return null;
  }
}
