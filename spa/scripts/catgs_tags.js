import{SvelteComponent,init,safe_not_equal}from"../web_modules/svelte/internal/index.mjs";function catgs_tags(e,t){let s=[],o=[],n=0,i=t.filter(e=>e.type=="catgs"),a=t.filter(e=>e.type=="tags");e.forEach(e=>{const t={path:e.path,img_src:e.fields.image.src,img_alt:e.fields.image.alt,title:e.fields.title,author_url:e.fields.author.url,author_name:e.fields.author.name,dateCreated:e.fields.dateCreated,dateModified:e.fields.dateModified,tags:e.fields.tags,catgs:e.fields.categories};e.fields.tags.forEach(e=>{s[e]=s[e]||[],s[e].push(t)}),e.fields.categories.forEach(e=>{o[e]=o[e]||[],o[e].push(t)})});let r=[];for(n=0;n<a.length;n++){let e={name:a[n].fields.name,path:a[n].path,posts:s[a[n].fields.name]?Object.values(s[a[n].fields.name]):null,length:s[a[n].fields.name]?Object.keys(s[a[n].fields.name]).length:null};r.push(e)}let c=[];for(n=0;n<i.length;n++){let e={name:i[n].fields.name,path:i[n].path,posts:o[i[n].fields.name]?Object.values(o[i[n].fields.name]):null,length:o[i[n].fields.name]?Object.keys(o[i[n].fields.name]).length:null};c.push(e)}return{tags:r,catgs:c}}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,null,safe_not_equal,{})}}export default Component;export{catgs_tags}