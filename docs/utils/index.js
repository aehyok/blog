// 方法2: 获取单个参数值
export function getUrlParam(paramName, url = window.location.href) {
  try {
      const urlObj = new URL(url);
      const params = new URLSearchParams(urlObj.search);
      return params.get(paramName);
  } catch (error) {
      console.error('URL解析错误:', error);
      return null;
  }
}