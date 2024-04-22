(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const C=`<p>© 2024 Juan Campuzano. Todos los derechos reservados.</p>\r
`,E=`<section class="section-aleatorio">\r
  <button class="btn-click-aleatorio" id="random">\r
    Random\r
  </button>\r
</section>`,T=`<div class="btn-containers">\r
    <button class="btn-clicks" id="btnClick1">\r
        Click me\r
    </button>\r
</div>\r
<div class="resultados">\r
    <div class="resultados-inside">\r
        <p class="resultado-rgb">\r
            RGB: <span id="result-rgb-span-1"></span>\r
            <img src="./src/assets/img/copy.svg" alt="copy"   width="18px" class="cursor" id="copyRgb1">\r
            <img src="./src/assets/img/check.svg" alt="check" width="18px" class="display-none" id="checkRgb1">\r
                  \r
        </p>\r
        <div class="loader">\r
            <img src="/public/loading.png" alt="Loading" id="loadingRgb1" class="display-none" />\r
        </div>  \r
    </div>\r
    <div class="resultados-inside">\r
        <p class="resultado-hexa">Hexa: \r
            <span id="result-hexa-span-1"></span>\r
            <img src="./src/assets/img/copy.svg" alt="copy"   width="18px"  class="cursor" id="copyHex1">\r
            <img src="./src/assets/img/check.svg" alt="check" width="18px" class="display-none" id="checkHex1">\r
            <div class="loader">\r
                <img src="/public/loading.png" alt="Loading" id="loadingHex1" class="display-none" />\r
            </div> \r
        </p>\r
    </div>\r
\r
</div>`,B=`<div class="btn-containers">\r
  <button class="btn-clicks" id="btnClick2">\r
    Click me\r
  </button>\r
</div>\r
<div class="resultados">\r
  <div class="resultados-inside">\r
    <p class="resultado-rgb">\r
      RGB: <span id="result-rgb-span-2"></span>\r
      <img src="./src/assets/img/copy.svg" alt="copy" width="18px" class="cursor" id="copyRgb2">\r
      <img src="./src/assets/img/check.svg" alt="check" width="18px" class="display-none" id="checkRgb2" >\r
\r
    </p>\r
    <div class="loader">\r
      <img src="/public/loading.png" alt="Loading" id="loadingRgb2" class="display-none" />\r
    </div>\r
  </div>\r
  <div class="resultados-inside">\r
    <p class="resultado-hexa">\r
      Hexa: <span id="result-hexa-span-2"></span>\r
      <img src="./src/assets/img/copy.svg" alt="copy" width="18px" class="cursor" id="copyHex2">\r
      <img src="./src/assets/img/check.svg" alt="check" width="18px" class="display-none" id="checkHex2" >\r
    </p>\r
    <div class="loader">\r
      <img src="/public/loading.png" alt="Loading" id="loadingHex2" class="display-none" />\r
    </div>\r
  </div>\r
\r
</div>`,w=`<div class="btn-containers">\r
  <button class="btn-clicks" id="btnClick3">\r
    Click me\r
  </button>\r
</div>\r
\r
</button>\r
<div class="resultados">\r
  <div class="resultados-inside">\r
\r
    <p class="resultado-rgb">RGB:\r
      <span id="result-rgb-span-3"></span>\r
      <img src="./src/assets/img/copy.svg" alt="copy" width="18px" class="cursor" id="copyRgb3">\r
      <img src="./src/assets/img/check.svg" alt="check" width="18px" class="display-none" id="checkRgb3">\r
\r
    </p>\r
\r
    <div class="loader">\r
      <img src="/public/loading.png" alt="Loading" class="display-none" id="loadingRgb3" />\r
    </div>\r
  </div>\r
  <div class="resultados-inside">\r
\r
    <p class="resultado-hexa">\r
      Hexa:\r
      <span id="result-hexa-span-3"></span>\r
      <img src="./src/assets/img/copy.svg" alt="copy" width="18px" class="cursor" id="copyHex3">\r
      <img src="./src/assets/img/check.svg" alt="check" width="18px" class="display-none" id="checkHex3">\r
\r
    </p>\r
    <div class="loader">\r
      <img src="/public/loading.png" alt="Loading" class="display-none" id="loadingHex3" />\r
    </div>\r
  </div>\r
\r
</div>`,I=`<div class="btn-containers">\r
    <button class="btn-clicks" id="btnClick4">\r
        Click me\r
    </button>\r
</div>\r
<div class="resultados">\r
    <div class="resultados-inside">\r
        <p class="resultado-rgb">RGB: \r
            <span id="result-rgb-span-4"></span>\r
            <img src="./src/assets/img/copy.svg" alt="copy"   width="18px" class="cursor" id="copyRgb4" >\r
            <img src="./src/assets/img/check.svg" alt="check" width="18px" class="display-none" id="checkRgb4" >\r
            <div class="loader">\r
                <img src="/public/loading.png" alt="Loading"  class="display-none" id="loadingRgb4" />\r
            </div> \r
        </p>\r
    </div>\r
    <div class="resultados-inside">\r
        <p class="resultado-hexa">\r
            Hexa: <span id="result-hexa-span-4"></span>\r
            <img src="./src/assets/img/copy.svg" alt="copy"   width="18px" class="cursor" id="copyHex4">\r
            <img src="./src/assets/img/check.svg" alt="check" width="18px" class="display-none" id="checkHex4"> \r
            \r
        </p>\r
        <div class="loader">\r
            <img src="/public/loading.png" alt="Loading" class="display-none" id="loadingHex4"  />\r
        </div> \r
    </div>\r
    \r
</div>`,l=(c,t="",r="")=>{const e=document.createElement(c);return e.setAttribute("id",r),e.setAttribute("class",t),e},S=[T,B,w,I],q=c=>{const t=l("nav","nav"),r=l("main","main"),e=l("footer","footer");let s=[];for(let n=0;n<4;n++)s.push(l("section",`section section-${n+1}`,`section${n+1}`));t.innerHTML=E,e.innerHTML=C,s.forEach((n,o)=>{n.innerHTML=S[o]}),c.append(t),c.append(r),s.forEach(n=>{r.append(n)}),c.append(e)},f=()=>({r:u(),g:u(),b:u()}),H=(c,t,r,e)=>{let s=`rgb(${c},${t},${r})`;e.style.backgroundColor=s},u=()=>Math.floor(Math.random()*256);function p(c,t){t.innerText=c}function R(c){const t=Object.keys(c),r=Object.values(c),e=[];for(let s=0;s<t.length;s++)e.push(r[s]);return e}function L(c){const t=o=>Math.max(0,Math.min(255,o)),r=t(c.r),e=t(c.g),s=t(c.b);return`#${((1<<24)+(r<<16)+(e<<8)+s).toString(16).slice(1).toUpperCase()}`}const d=(c,t,r)=>{let e=f();const s=document.getElementById(c);H(e.r,e.g,e.b,s);let n=L(e);p(n,t);let o=R(e);p(o,r)},g=(c,t,r)=>{const e=document.getElementById(c);let s=f();H(s.r,s.g,s.b,e);let n=R(s);p(n,r);let o=L(s);p(o,t)},k=(c,t,r,e)=>{const s=document.querySelector(`#${e}`),n=document.querySelector(`#${r}`),o=document.querySelector(`#${c}`),a=document.querySelector(`#${t}`);o.addEventListener("click",()=>{o.classList.add("display-none"),s.classList.remove("display-none"),setTimeout(()=>{s.classList.add("display-none"),n.classList.remove("display-none"),setTimeout(()=>{o.classList.remove("display-none"),n.classList.add("display-none"),navigator.clipboard.writeText(a.textContent),console.log("llegue")},250)},750)})},$=[{copyBtn:"copyRgb1",resultText:"result-rgb-span-1",check:"checkRgb1",loadingId:"loadingRgb1"},{copyBtn:"copyRgb2",resultText:"result-rgb-span-2",check:"checkRgb2",loadingId:"loadingRgb2"},{copyBtn:"copyRgb3",resultText:"result-rgb-span-3",check:"checkRgb3",loadingId:"loadingRgb3"},{copyBtn:"copyRgb4",resultText:"result-rgb-span-4",check:"checkRgb4",loadingId:"loadingRgb4"}],M=[{copyBtn:"copyHex1",resultText:"result-hexa-span-1",check:"checkHex1",loadingId:"loadingHex1"},{copyBtn:"copyHex2",resultText:"result-hexa-span-2",check:"checkHex2",loadingId:"loadingHex2"},{copyBtn:"copyHex3",resultText:"result-hexa-span-3",check:"checkHex3",loadingId:"loadingHex3"},{copyBtn:"copyHex4",resultText:"result-hexa-span-4",check:"checkHex4",loadingId:"loadingHex4"}],O=c=>{q(c);const t=document.getElementById("btnClick1"),r=document.getElementById("btnClick2"),e=document.getElementById("btnClick3"),s=document.getElementById("btnClick4"),n=document.getElementById("random"),o=document.querySelector("#result-hexa-span-1"),a=document.querySelector("#result-hexa-span-2"),b=document.querySelector("#result-hexa-span-3"),y=document.querySelector("#result-hexa-span-4"),m=document.querySelector("#result-rgb-span-1"),h=document.querySelector("#result-rgb-span-2"),x=document.querySelector("#result-rgb-span-3"),v=document.querySelector("#result-rgb-span-4");n.addEventListener("click",()=>{d("section1",o,m),d("section2",a,h),d("section3",b,x),d("section4",y,v)}),t.addEventListener("click",()=>{g("section1",o,m)}),r.addEventListener("click",()=>{g("section2",a,h)}),e.addEventListener("click",()=>{g("section3",b,x)}),s.addEventListener("click",()=>{g("section4",y,v)}),$.forEach(i=>{k(i.copyBtn,i.resultText,i==null?void 0:i.check,i.loadingId)}),M.forEach(i=>{k(i.copyBtn,i.resultText,i==null?void 0:i.check,i.loadingId)})},A=document.querySelector(".content");O(A);
