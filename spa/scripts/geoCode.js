import{SvelteComponent,init,safe_not_equal}from"../web_modules/svelte/internal/index.mjs";function geo(){const e=fetch("https://jsonip.com",{mode:"cors"}).then(e=>e.json()).then(e=>e.ip);return e}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,null,safe_not_equal,{})}}export default Component;export{geo}