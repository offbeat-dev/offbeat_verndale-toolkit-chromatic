import{_ as m}from"./vendor-d9b1b00d.js";/* empty css             */const y="modulepreload",h=function(d){return"/"+d},u={},p=function(n,s,c){if(!s||s.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=h(e),e in u)return;u[e]=!0;const r=e.endsWith(".css"),f=r?'[rel="stylesheet"]':"";if(!!c)for(let i=t.length-1;i>=0;i--){const l=t[i];if(l.href===e&&(!r||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${f}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":y,r||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),r)return new Promise((i,l)=>{o.addEventListener("load",i),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n())};(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const g=[],L=[{name:"accordion",loader:()=>p(()=>import("./accordion-ff244a16.js"),["scripts/accordion-ff244a16.js","scripts/vendor-d9b1b00d.js","css/accordion-9a52495e.css"])}],E=[...g,...L],v=!!document.getElementById("storybook-root"),a=document.querySelector("body");document.addEventListener("DOMContentLoaded",async()=>{(!a.dataset.modulesLoaded||v)&&m(E).then(()=>{a.dataset.modulesLoaded="true"})},!1);
//# sourceMappingURL=main.bundle.js.map
