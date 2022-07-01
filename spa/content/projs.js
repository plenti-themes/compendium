import{SvelteComponent,append,attr,children,claim_component,claim_element,claim_space,create_component,destroy_component,detach,element,init,insert,mount_component,safe_not_equal,space,transition_in,transition_out}from"../web_modules/svelte/internal/index.mjs";import Aside from"../components/aside.js";import Cards from"../components/cards_projs.js";import Pagination from"../components/paginate.js";function create_fragment(e){let r,t,m,v,c,n,i,l,o,b,d,s,p,u,a,g,h,f;return o=new Cards({props:{projList:e[9],projRangeHigh:e[6],projRangeLow:e[7],catgPosts:e[2],tagsPosts:e[3]}}),s=new Pagination({props:{content:e[1],currentPage:e[5],totalPages:e[10],baseurl:e[4]}}),a=new Aside({props:{allPosts:e[0],socialLinks:e[8],catgPosts:e[2],tagsPosts:e[3]}}),{c(){r=element("div"),t=element("section"),m=element("div"),v=space(),c=element("div"),n=element("div"),i=element("div"),l=element("div"),create_component(o.$$.fragment),b=space(),d=element("div"),create_component(s.$$.fragment),p=space(),u=element("div"),create_component(a.$$.fragment),g=space(),h=element("div"),this.h()},l(e){r=claim_element(e,"DIV",{class:!0});var f,j,y,_,w,O,x,C=children(r);t=claim_element(C,"SECTION",{class:!0}),f=children(t),m=claim_element(f,"DIV",{class:!0}),children(m).forEach(detach),v=claim_space(f),c=claim_element(f,"DIV",{class:!0}),w=children(c),n=claim_element(w,"DIV",{class:!0}),j=children(n),i=claim_element(j,"DIV",{class:!0}),y=children(i),l=claim_element(y,"DIV",{class:!0}),O=children(l),claim_component(o.$$.fragment,O),O.forEach(detach),b=claim_space(y),d=claim_element(y,"DIV",{class:!0}),_=children(d),claim_component(s.$$.fragment,_),_.forEach(detach),y.forEach(detach),p=claim_space(j),u=claim_element(j,"DIV",{class:!0}),x=children(u),claim_component(a.$$.fragment,x),x.forEach(detach),j.forEach(detach),w.forEach(detach),g=claim_space(f),h=claim_element(f,"DIV",{class:!0}),children(h).forEach(detach),f.forEach(detach),C.forEach(detach),this.h()},h(){attr(m,"class","w-0 md:w-1/12 xl:w-2/12"),attr(l,"class","grid grid-cols-1 gap-6 md:pr-10"),attr(d,"class","row mt-8 md:pr-10 mb-6 sm:mb-0"),attr(i,"class","w-full md:w-9/12 mb-lg-0 px-0"),attr(u,"class","w-full md:w-3/12 mb-lg-0 px-0"),attr(n,"class","row md:flex md:flex-wrap"),attr(c,"class","w-full md:w-10/12 xl:w-8/12 px-2 md:px-0"),attr(h,"class","w-0 md:w-1/12 xl:w-2/12"),attr(t,"class","w-full flex flex-wrap items-center justify-between"),attr(r,"class","w-full py-6 sm:py-16")},m(e,j){insert(e,r,j),append(r,t),append(t,m),append(t,v),append(t,c),append(c,n),append(n,i),append(i,l),mount_component(o,l,null),append(i,b),append(i,d),mount_component(s,d,null),append(n,p),append(n,u),mount_component(a,u,null),append(t,g),append(t,h),f=!0},p(e,[t]){const n={};t&64&&(n.projRangeHigh=e[6]),t&128&&(n.projRangeLow=e[7]),t&4&&(n.catgPosts=e[2]),t&8&&(n.tagsPosts=e[3]),o.$set(n);const i={};t&2&&(i.content=e[1]),t&32&&(i.currentPage=e[5]),t&16&&(i.baseurl=e[4]),s.$set(i);const r={};t&1&&(r.allPosts=e[0]),t&4&&(r.catgPosts=e[2]),t&8&&(r.tagsPosts=e[3]),a.$set(r)},i(e){if(f)return;transition_in(o.$$.fragment,e),transition_in(s.$$.fragment,e),transition_in(a.$$.fragment,e),f=!0},o(e){transition_out(o.$$.fragment,e),transition_out(s.$$.fragment,e),transition_out(a.$$.fragment,e),f=!1},d(e){e&&detach(r),destroy_component(o),destroy_component(s),destroy_component(a)}}}function instance(e,t,n){let l,i,m,{idxContent:s}=t,{allPosts:r}=t,{content:c}=t,{catgPosts:h}=t,{tagsPosts:d}=t,{baseurl:u}=t,b=s.socialLinks,a=s.theme.projsPerPage,f=s.theme.projsSort,p=r.filter(e=>e.fields?.postsGroup!=""),g=[...new Set(p.map(e=>e.fields?.postsGroup))],o=[];g.forEach(e=>{let t=p.filter(t=>t.fields.postsGroup==e);f=="Date"?t.sort((e,t)=>e.path.localeCompare(t.path)):t.sort((e,t)=>new Date(t.modified)-new Date(e.modified));let n=[...new Set(t.map(e=>e.fields.dateModified))].reduce(function(e,t){return e>t?e:t}),s={name:e,modified:n,posts:t};o.push(s)}),f=="Date"?o.sort((e,t)=>new Date(t.modified)-new Date(e.modified)):o.sort((e,t)=>e.name.localeCompare(t.name));let j=g.length,v=Math.ceil(j/a),y=v;return e.$$set=e=>{"idxContent"in e&&n(11,s=e.idxContent),"allPosts"in e&&n(0,r=e.allPosts),"content"in e&&n(1,c=e.content),"catgPosts"in e&&n(2,h=e.catgPosts),"tagsPosts"in e&&n(3,d=e.tagsPosts),"baseurl"in e&&n(4,u=e.baseurl)},e.$$.update=()=>{if(e.$$.dirty&2)$:n(5,l=c.pager);if(e.$$.dirty&32)$:n(6,i=l*a);if(e.$$.dirty&64)$:n(7,m=i-a)},[r,c,h,d,u,l,i,m,b,o,v,s]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{idxContent:11,allPosts:0,content:1,catgPosts:2,tagsPosts:3,baseurl:4})}}export default Component