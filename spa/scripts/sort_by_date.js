import{SvelteComponent,init,safe_not_equal}from"../web_modules/svelte/internal/index.mjs";const sortByDate=(e,t,n)=>{var t=typeof t!="undefined"?n:"created",n=typeof n!="undefined"?n:"newest";return e.sort((e,s)=>{if(t=="modified"){let t=new Date(e?.fields?.dateModified),o=new Date(s?.fields?.dateModified);return n=="oldest"?t-o:o-t}let o=new Date(e?.fields?.dateCreated),i=new Date(s?.fields?.dateCreated);return n=="oldest"?o-i:i-o}),e};class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,null,safe_not_equal,{})}}export default Component;export{sortByDate}