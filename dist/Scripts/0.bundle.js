"use strict";(self.webpackChunk_verndale_toolkit=self.webpackChunk_verndale_toolkit||[]).push([[0],{68e3:(a,o,i)=>{i.r(o),i.d(o,{default:()=>r});var l=i(39551),c=i.n(l);class s extends l.Component{setupDefaults(){this.dom={triggers:this.el.querySelectorAll(".accordion__item-trigger"),panels:this.el.querySelectorAll(".accordion__item-panel")},this.initAccordion()}addListeners(){this.dom.triggers.forEach(t=>t.addEventListener("click",this.handleClick.bind(this)))}initAccordion(){this.dom.triggers.forEach(t=>{t.getAttribute("aria-expanded")==="true"&&this.openItem(t)})}handleClick(t){const e=t.currentTarget;e.getAttribute("aria-expanded")==="true"?this.closeItem(e):this.openItem(e)}openItem(t){t.setAttribute("aria-expanded","true");const e=document.getElementById(t.getAttribute("aria-controls"));if(e){const n=e.querySelector(".accordion__item-content");e.style.height=`${n?.offsetHeight}px`,setTimeout(()=>e.style.height="auto",250)}}closeItem(t){t.setAttribute("aria-expanded","false");const e=document.getElementById(t.getAttribute("aria-controls"));if(e){const n=e.querySelector(".accordion__item-content");e.style.height=`${n?.offsetHeight}px`,setTimeout(()=>e.style.height="0px")}}}const r=s}}]);

//# sourceMappingURL=0.bundle.js.map