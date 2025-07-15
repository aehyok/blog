function o(a,e=window.location.href){try{const r=new URL(e);return new URLSearchParams(r.search).get(a)}catch(r){return console.error("URL解析错误:",r),null}}export{o as g};
