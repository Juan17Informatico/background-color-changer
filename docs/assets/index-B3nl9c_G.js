(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();const C=`<p>© 2024 Juan Campuzano. Todos los derechos reservados.</p>\r
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
            <img src="./../img/copy.svg" alt="copy"   width="18px" class="cursor" id="copyRgb1">\r
            <img src="./../img/check.svg" alt="check" width="18px" class="display-none" id="checkRgb1">\r
                  \r
        </p>\r
        <div class="loader">\r
            <img src="./../loading.png" alt="Loading" id="loadingRgb1" class="display-none" />\r
        </div>  \r
    </div>\r
    <div class="resultados-inside">\r
        <p class="resultado-hexa">Hexa: \r
            <span id="result-hexa-span-1"></span>\r
            <img src="./../img/copy.svg" alt="copy"   width="18px"  class="cursor" id="copyHex1">\r
            <img src="./../img/check.svg" alt="check" width="18px" class="display-none" id="checkHex1">\r
            <div class="loader">\r
                <img src="./../loading.png" alt="Loading" id="loadingHex1" class="display-none" />\r
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
      <img src="./public/img/copy.svg" alt="copy" width="18px" class="cursor" id="copyRgb2">\r
      <img src="./public/img/check.svg" alt="check" width="18px" class="display-none" id="checkRgb2" >\r
\r
    </p>\r
    <div class="loader">\r
      <img src="./public/loading.png" alt="Loading" id="loadingRgb2" class="display-none" />\r
    </div>\r
  </div>\r
  <div class="resultados-inside">\r
    <p class="resultado-hexa">\r
      Hexa: <span id="result-hexa-span-2"></span>\r
      <img src="./public/img/copy.svg" alt="copy" width="18px" class="cursor" id="copyHex2">\r
      <img src="./public/img/check.svg" alt="check" width="18px" class="display-none" id="checkHex2" >\r
    </p>\r
    <div class="loader">\r
      <img src="./public/loading.png" alt="Loading" id="loadingHex2" class="display-none" />\r
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
      <img src="./public/img/copy.svg" alt="copy" width="18px" class="cursor" id="copyRgb3">\r
      <img src="./public/img/check.svg" alt="check" width="18px" class="display-none" id="checkRgb3">\r
\r
    </p>\r
\r
    <div class="loader">\r
      <img src="./public/loading.png" alt="Loading" class="display-none" id="loadingRgb3" />\r
    </div>\r
  </div>\r
  <div class="resultados-inside">\r
\r
    <p class="resultado-hexa">\r
      Hexa:\r
      <span id="result-hexa-span-3"></span>\r
      <img src="./public/img/copy.svg" alt="copy" width="18px" class="cursor" id="copyHex3">\r
      <img src="./public/img/check.svg" alt="check" width="18px" class="display-none" id="checkHex3">\r
\r
    </p>\r
    <div class="loader">\r
      <img src="./public/loading.png" alt="Loading" class="display-none" id="loadingHex3" />\r
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
            <img src="./public/img/copy.svg" alt="copy"   width="18px" class="cursor" id="copyRgb4" >\r
            <img src="./public/img/check.svg" alt="check" width="18px" class="display-none" id="checkRgb4" >\r
            <div class="loader">\r
                <img src="./public/loading.png" alt="Loading"  class="display-none" id="loadingRgb4" />\r
            </div> \r
        </p>\r
    </div>\r
    <div class="resultados-inside">\r
        <p class="resultado-hexa">\r
            Hexa: <span id="result-hexa-span-4"></span>\r
            <img src="./public/img/copy.svg" alt="copy"   width="18px" class="cursor" id="copyHex4">\r
            <img src="./public/img/check.svg" alt="check" width="18px" class="display-none" id="checkHex4"> \r
            \r
        </p>\r
        <div class="loader">\r
            <img src="./public/loading.png" alt="Loading" class="display-none" id="loadingHex4"  />\r
        </div> \r
    </div>\r
    \r
</div>`,a=(c,t="",r="")=>{const e=document.createElement(c);return e.setAttribute("id",r),e.setAttribute("class",t),e},S=[T,B,w,I],q=c=>{const t=a("nav","nav"),r=a("main","main"),e=a("footer","footer");let n=[];for(let s=0;s<4;s++)n.push(a("section",`section section-${s+1}`,`section${s+1}`));t.innerHTML=E,e.innerHTML=C,n.forEach((s,i)=>{s.innerHTML=S[i]}),c.append(t),c.append(r),n.forEach(s=>{r.append(s)}),c.append(e)},f=()=>({r:u(),g:u(),b:u()}),H=(c,t,r,e)=>{let n=`rgb(${c},${t},${r})`;e.style.backgroundColor=n},u=()=>Math.floor(Math.random()*256);function g(c,t){t.innerText=c}function R(c){const t=Object.keys(c),r=Object.values(c),e=[];for(let n=0;n<t.length;n++)e.push(r[n]);return e}function L(c){const t=i=>Math.max(0,Math.min(255,i)),r=t(c.r),e=t(c.g),n=t(c.b);return`#${((1<<24)+(r<<16)+(e<<8)+n).toString(16).slice(1).toUpperCase()}`}const d=(c,t,r)=>{let e=f();const n=document.getElementById(c);H(e.r,e.g,e.b,n);let s=L(e);g(s,t);let i=R(e);g(i,r)},p=(c,t,r)=>{const e=document.getElementById(c);let n=f();H(n.r,n.g,n.b,e);let s=R(n);g(s,r);let i=L(n);g(i,t)},k=(c,t,r,e)=>{const n=document.querySelector(`#${e}`),s=document.querySelector(`#${r}`),i=document.querySelector(`#${c}`),l=document.querySelector(`#${t}`);i.addEventListener("click",()=>{i.classList.add("display-none"),n.classList.remove("display-none"),setTimeout(()=>{n.classList.add("display-none"),s.classList.remove("display-none"),setTimeout(()=>{i.classList.remove("display-none"),s.classList.add("display-none"),navigator.clipboard.writeText(l.textContent),console.log("llegue")},250)},750)})},$=[{copyBtn:"copyRgb1",resultText:"result-rgb-span-1",check:"checkRgb1",loadingId:"loadingRgb1"},{copyBtn:"copyRgb2",resultText:"result-rgb-span-2",check:"checkRgb2",loadingId:"loadingRgb2"},{copyBtn:"copyRgb3",resultText:"result-rgb-span-3",check:"checkRgb3",loadingId:"loadingRgb3"},{copyBtn:"copyRgb4",resultText:"result-rgb-span-4",check:"checkRgb4",loadingId:"loadingRgb4"}],M=[{copyBtn:"copyHex1",resultText:"result-hexa-span-1",check:"checkHex1",loadingId:"loadingHex1"},{copyBtn:"copyHex2",resultText:"result-hexa-span-2",check:"checkHex2",loadingId:"loadingHex2"},{copyBtn:"copyHex3",resultText:"result-hexa-span-3",check:"checkHex3",loadingId:"loadingHex3"},{copyBtn:"copyHex4",resultText:"result-hexa-span-4",check:"checkHex4",loadingId:"loadingHex4"}],O=c=>{q(c);const t=document.getElementById("btnClick1"),r=document.getElementById("btnClick2"),e=document.getElementById("btnClick3"),n=document.getElementById("btnClick4"),s=document.getElementById("random"),i=document.querySelector("#result-hexa-span-1"),l=document.querySelector("#result-hexa-span-2"),b=document.querySelector("#result-hexa-span-3"),y=document.querySelector("#result-hexa-span-4"),m=document.querySelector("#result-rgb-span-1"),h=document.querySelector("#result-rgb-span-2"),x=document.querySelector("#result-rgb-span-3"),v=document.querySelector("#result-rgb-span-4");s.addEventListener("click",()=>{d("section1",i,m),d("section2",l,h),d("section3",b,x),d("section4",y,v)}),t.addEventListener("click",()=>{p("section1",i,m)}),r.addEventListener("click",()=>{p("section2",l,h)}),e.addEventListener("click",()=>{p("section3",b,x)}),n.addEventListener("click",()=>{p("section4",y,v)}),$.forEach(o=>{k(o.copyBtn,o.resultText,o==null?void 0:o.check,o.loadingId)}),M.forEach(o=>{k(o.copyBtn,o.resultText,o==null?void 0:o.check,o.loadingId)})},A=document.querySelector(".content");O(A);
