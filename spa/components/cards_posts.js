import{SvelteComponent,append,attr,check_outros,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,destroy_each,detach,element,empty,group_outros,init,insert,mount_component,safe_not_equal,set_data,space,text,transition_in,transition_out}from"../web_modules/svelte/internal/index.mjs";import{sortByDate}from"../scripts/sort_by_date.js";import PostMeta from"./post_meta.js";function get_each_context(e,t,n){const s=e.slice();return s[6]=t[n],s[8]=n,s}function create_if_block(e){let n,t,h,d,f,s,c,r,l=e[6].fields.title+"",m,u,p,a,o,g,i;return o=new PostMeta({props:{post:e[6],catgPosts:e[3],tagsPosts:e[4],pm:e[5]}}),{c(){n=element("div"),t=element("img"),f=space(),s=element("div"),c=element("h3"),r=element("a"),m=text(l),p=space(),a=element("div"),create_component(o.$$.fragment),g=space(),this.h()},l(e){n=claim_element(e,"DIV",{class:!0});var d,u,h,v,i=children(n);t=claim_element(i,"IMG",{class:!0,src:!0,alt:!0}),f=claim_space(i),s=claim_element(i,"DIV",{class:!0}),d=children(s),c=claim_element(d,"H3",{class:!0}),u=children(c),r=claim_element(u,"A",{href:!0}),h=children(r),m=claim_text(h,l),h.forEach(detach),u.forEach(detach),p=claim_space(d),a=claim_element(d,"DIV",{class:!0,role:!0}),v=children(a),claim_component(o.$$.fragment,v),v.forEach(detach),d.forEach(detach),g=claim_space(i),i.forEach(detach),this.h()},h(){attr(t,"class","w-full md:h-52 lg:h-60 object-cover"),t.src!==(h="assets/posts/"+e[6].fields.image.src)&&attr(t,"src",h),attr(t,"alt",d=e[6].fields.image.alt),attr(r,"href",u=e[6].path),attr(c,"class","header mt-0 mb-1 text-xl md:text-2xl"),attr(a,"class","text-meta flex flex-wrap"),attr(a,"role","complementary"),attr(s,"class","px-5 py-4"),attr(n,"class","rounded-lg overflow-hidden shadow-md bg-secondary")},m(e,l){insert(e,n,l),append(n,t),append(n,f),append(n,s),append(s,c),append(c,r),append(r,m),append(s,p),append(s,a),mount_component(o,a,null),append(n,g),i=!0},p(e,n){(!i||n&1&&t.src!==(h="assets/posts/"+e[6].fields.image.src))&&attr(t,"src",h),(!i||n&1&&d!==(d=e[6].fields.image.alt))&&attr(t,"alt",d),(!i||n&1)&&l!==(l=e[6].fields.title+"")&&set_data(m,l),(!i||n&1&&u!==(u=e[6].path))&&attr(r,"href",u);const s={};n&1&&(s.post=e[6]),n&8&&(s.catgPosts=e[3]),n&16&&(s.tagsPosts=e[4]),o.$set(s)},i(e){if(i)return;transition_in(o.$$.fragment,e),i=!0},o(e){transition_out(o.$$.fragment,e),i=!1},d(e){e&&detach(n),destroy_component(o)}}}function create_each_block(e){let n,s,t=e[8]>=e[2]&&e[8]<e[1]&&create_if_block(e);return{c(){t&&t.c(),n=empty()},l(e){t&&t.l(e),n=empty()},m(e,o){t&&t.m(e,o),insert(e,n,o),s=!0},p(e,s){e[8]>=e[2]&&e[8]<e[1]?t?(t.p(e,s),s&6&&transition_in(t,1)):(t=create_if_block(e),t.c(),transition_in(t,1),t.m(n.parentNode,n)):t&&(group_outros(),transition_out(t,1,1,()=>{t=null}),check_outros())},i(){if(s)return;transition_in(t),s=!0},o(){transition_out(t),s=!1},d(e){t&&t.d(e),e&&detach(n)}}}function create_fragment(e){let s,o,n=sortByDate(e[0],"modified"),t=[];for(let s=0;s<n.length;s+=1)t[s]=create_each_block(get_each_context(e,n,s));const i=e=>transition_out(t[e],1,1,()=>{t[e]=null});return{c(){for(let e=0;e<t.length;e+=1)t[e].c();s=empty()},l(e){for(let n=0;n<t.length;n+=1)t[n].l(e);s=empty()},m(e,n){for(let s=0;s<t.length;s+=1)t[s].m(e,n);insert(e,s,n),o=!0},p(e,[o]){if(o&63){n=sortByDate(e[0],"modified");let a;for(a=0;a<n.length;a+=1){const i=get_each_context(e,n,a);t[a]?(t[a].p(i,o),transition_in(t[a],1)):(t[a]=create_each_block(i),t[a].c(),transition_in(t[a],1),t[a].m(s.parentNode,s))}group_outros();for(a=n.length;a<t.length;a+=1)i(a);check_outros()}},i(){if(o)return;for(let e=0;e<n.length;e+=1)transition_in(t[e]);o=!0},o(){t=t.filter(Boolean);for(let e=0;e<t.length;e+=1)transition_out(t[e]);o=!1},d(e){destroy_each(t,e),e&&detach(s)}}}function instance(e,t,n){const c={author:!1,date_modified:!0,date_created:!0,description:!0,catg_tags:!0,continue:!0};let{allPosts:s}=t,{postRangeHigh:o}=t,{postRangeLow:i}=t,{catgPosts:a}=t,{tagsPosts:r}=t;return e.$$set=e=>{"allPosts"in e&&n(0,s=e.allPosts),"postRangeHigh"in e&&n(1,o=e.postRangeHigh),"postRangeLow"in e&&n(2,i=e.postRangeLow),"catgPosts"in e&&n(3,a=e.catgPosts),"tagsPosts"in e&&n(4,r=e.tagsPosts)},[s,o,i,a,r,c]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{allPosts:0,postRangeHigh:1,postRangeLow:2,catgPosts:3,tagsPosts:4})}}export default Component