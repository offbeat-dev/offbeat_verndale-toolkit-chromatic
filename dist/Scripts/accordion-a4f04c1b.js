import{C as o}from"./vendor-d9b1b00d.js";class c extends o{setupDefaults(){this.dom={triggers:this.el.querySelectorAll(".accordion__item-trigger"),panels:this.el.querySelectorAll(".accordion__item-panel")},this.initAccordion()}addListeners(){this.dom.triggers.forEach(t=>t.addEventListener("click",this.handleClick.bind(this)))}initAccordion(){this.dom.triggers.forEach(t=>{t.getAttribute("aria-expanded")==="true"&&this.openItem(t)})}handleClick(t){const e=t.currentTarget;e.getAttribute("aria-expanded")==="true"?this.closeItem(e):this.openItem(e)}openItem(t){t.setAttribute("aria-expanded","true");const e=document.getElementById(t.getAttribute("aria-controls"));if(e){const i=e.querySelector(".accordion__item-content");e.style.height=`${i==null?void 0:i.offsetHeight}px`,setTimeout(()=>e.style.height="auto",250)}}closeItem(t){t.setAttribute("aria-expanded","false");const e=document.getElementById(t.getAttribute("aria-controls"));if(e){const i=e.querySelector(".accordion__item-content");e.style.height=`${i==null?void 0:i.offsetHeight}px`,setTimeout(()=>e.style.height="0px")}}}export{c as default};
//# sourceMappingURL=accordion-a4f04c1b.js.map
