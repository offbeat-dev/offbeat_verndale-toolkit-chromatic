import{c as y,R as h,_ as g}from"./vendor-a689a0cd.js";/* empty css             */const E="modulepreload",L=function(n){return"/"+n},u={},a=function(s,r,o){if(!r||r.length===0)return s();const t=document.getElementsByTagName("link");return Promise.all(r.map(e=>{if(e=L(e),e in u)return;u[e]=!0;const i=e.endsWith(".css"),p=i?'[rel="stylesheet"]':"";if(!!o)for(let c=t.length-1;c>=0;c--){const d=t[c];if(d.href===e&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${p}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":E,i||(l.as="script",l.crossOrigin=""),l.href=e,document.head.appendChild(l),i)return new Promise((c,d)=>{l.addEventListener("load",c),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s())};(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();const _=[],v=(n,s)=>s.forEach(r=>y(r).render(h.createElement(n,{...r.dataset}))),w=[{name:"accordion",loader:()=>a(()=>import("./accordion-c74cb5a3.js"),["scripts/accordion-c74cb5a3.js","scripts/vendor-a689a0cd.js","css/accordion-9a52495e.css"])},{name:"mockApi",styles:()=>a(()=>Promise.resolve({}),["css/mock-api-0785295b.css"]),loader:()=>a(()=>import("./mockApi-47ab3de9.js"),["scripts/mockApi-47ab3de9.js","scripts/vendor-a689a0cd.js"]),render:v}],R=[..._,...w],b=n=>{let s,r;if(n&&n.filename&&(s=n.filename),!s)return;let o=new XMLHttpRequest;typeof XMLHttpRequest<"u"&&(o=new XMLHttpRequest),typeof r>"u"&&(typeof r<"u"?r=window.baseUrl:r=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""));const t=(r+"/"+s).replace(/([^:]\/)\/+/g,"$1");o.open("GET",t,!0),o.onprogress=function(){},o.onload=function(){if(o.status<200||o.status>=300)return;if(!o.responseText||o.responseText.substr(0,5)!=="<?xml")throw Error("Invalid SVG Response");const e=document.createElement("div");e.innerHTML=o.responseText,e.style.maxBlockSize="0",O(()=>{document.body.insertBefore(e,document.body.childNodes[0])})},o.send()},O=n=>{document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.scroll?n():document.addEventListener("DOMContentLoaded",n)},m=!!document.getElementById("storybook-root"),f=document.querySelector("body");m||b({filename:"/images/svgsheet.svg"});document.addEventListener("DOMContentLoaded",async()=>{(!f.dataset.modulesLoaded||m)&&g(R).then(()=>{f.dataset.modulesLoaded="true"})},!1);
//# sourceMappingURL=main.bundle.js.map
