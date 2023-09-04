import{SvelteComponent,append_hydration,attr,children,claim_component,claim_element,claim_space,create_component,destroy_component,detach,element,init,insert_hydration,mount_component,safe_not_equal,space,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import Aside from"../components/aside.js";import PostList from"../components/list_catgs.js";function create_fragment(e){let i,t,d,f,r,o,c,l,n,m,a,s,p,u,h;return n=new PostList({props:{catg:e[3],catgPosts:e[1],tagsPosts:e[2]}}),s=new Aside({props:{allPosts:e[0],catgPosts:e[1],tagsPosts:e[2],socialLinks:e[4],catg:e[3]}}),{c(){i=element("div"),t=element("section"),d=element("div"),f=space(),r=element("div"),o=element("div"),c=element("div"),l=element("div"),create_component(n.$$.fragment),m=space(),a=element("div"),create_component(s.$$.fragment),p=space(),u=element("div"),this.h()},l(e){i=claim_element(e,"DIV",{class:!0});var h,g,v,b,j,y,_=children(i);t=claim_element(_,"SECTION",{class:!0}),h=children(t),d=claim_element(h,"DIV",{class:!0}),children(d).forEach(detach),f=claim_space(h),r=claim_element(h,"DIV",{class:!0}),b=children(r),o=claim_element(b,"DIV",{class:!0}),g=children(o),c=claim_element(g,"DIV",{class:!0}),j=children(c),l=claim_element(j,"DIV",{class:!0}),y=children(l),claim_component(n.$$.fragment,y),y.forEach(detach),j.forEach(detach),m=claim_space(g),a=claim_element(g,"DIV",{class:!0}),v=children(a),claim_component(s.$$.fragment,v),v.forEach(detach),g.forEach(detach),b.forEach(detach),p=claim_space(h),u=claim_element(h,"DIV",{class:!0}),children(u).forEach(detach),h.forEach(detach),_.forEach(detach),this.h()},h(){attr(d,"class","w-0 md:w-1/12 xl:w-2/12"),attr(l,"class","grid grid-cols-1 gap-6 md:pr-10"),attr(c,"class","w-full md:w-9/12 mb-lg-0 px-0"),attr(a,"class","w-full md:w-3/12 mb-lg-0 px-0"),attr(o,"class","row md:flex md:flex-wrap"),attr(r,"class","w-full md:w-10/12 xl:w-8/12 px-2 md:px-0"),attr(u,"class","w-0 md:w-1/12 xl:w-2/12"),attr(t,"class","w-full flex flex-wrap items-center justify-between"),attr(i,"class","w-full py-6 sm:py-16")},m(e,g){insert_hydration(e,i,g),append_hydration(i,t),append_hydration(t,d),append_hydration(t,f),append_hydration(t,r),append_hydration(r,o),append_hydration(o,c),append_hydration(c,l),mount_component(n,l,null),append_hydration(o,m),append_hydration(o,a),mount_component(s,a,null),append_hydration(t,p),append_hydration(t,u),h=!0},p(e,[t]){const i={};t&8&&(i.catg=e[3]),t&2&&(i.catgPosts=e[1]),t&4&&(i.tagsPosts=e[2]),n.$set(i);const o={};t&1&&(o.allPosts=e[0]),t&2&&(o.catgPosts=e[1]),t&4&&(o.tagsPosts=e[2]),t&8&&(o.catg=e[3]),s.$set(o)},i(e){if(h)return;transition_in(n.$$.fragment,e),transition_in(s.$$.fragment,e),h=!0},o(e){transition_out(n.$$.fragment,e),transition_out(s.$$.fragment,e),h=!1},d(e){e&&detach(i),destroy_component(n),destroy_component(s)}}}function instance(e,t,n){let a,{idxContent:o,allPosts:r,content:s,catgPosts:i,tagsPosts:c}=t,l=o.socialLinks;return e.$$set=e=>{"idxContent"in e&&n(5,o=e.idxContent),"allPosts"in e&&n(0,r=e.allPosts),"content"in e&&n(6,s=e.content),"catgPosts"in e&&n(1,i=e.catgPosts),"tagsPosts"in e&&n(2,c=e.tagsPosts)},e.$$.update=()=>{if(e.$$.dirty&66)$:n(3,a={name:s.fields.name,route:s.fields.route,posts:Object(i.filter(e=>e.name==s.fields.name)[0]).posts})},[r,i,c,a,l,o,s]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{idxContent:5,allPosts:0,content:6,catgPosts:1,tagsPosts:2})}}export default Component