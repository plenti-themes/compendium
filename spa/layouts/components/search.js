import{SvelteComponent,append_hydration,attr,check_outros,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,destroy_each,detach,element,empty,group_outros,init,insert_hydration,listen,mount_component,safe_not_equal,set_data,set_input_value,space,src_url_equal,text,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import PostMeta from"./post_meta.js";function get_each_context(e,t,n){const s=e.slice();return s[4]=t[n],s[6]=n,s}function create_if_block(e){let s,o,n=e[0],t=[];for(let s=0;s<n.length;s+=1)t[s]=create_each_block(get_each_context(e,n,s));const i=e=>transition_out(t[e],1,1,()=>{t[e]=null});return{c(){for(let e=0;e<t.length;e+=1)t[e].c();s=empty()},l(e){for(let n=0;n<t.length;n+=1)t[n].l(e);s=empty()},m(e,n){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,n);insert_hydration(e,s,n),o=!0},p(e,o){if(o&7){n=e[0];let a;for(a=0;a<n.length;a+=1){const i=get_each_context(e,n,a);t[a]?(t[a].p(i,o),transition_in(t[a],1)):(t[a]=create_each_block(i),t[a].c(),transition_in(t[a],1),t[a].m(s.parentNode,s))}group_outros();for(a=n.length;a<t.length;a+=1)i(a);check_outros()}},i(){if(o)return;for(let e=0;e<n.length;e+=1)transition_in(t[e]);o=!0},o(){t=t.filter(Boolean);for(let e=0;e<t.length;e+=1)transition_out(t[e]);o=!1},d(e){destroy_each(t,e),e&&detach(s)}}}function create_if_block_1(e){let n,t,h,d,f,s,c,r,l=e[4].fields.title+"",m,u,p,a,o,g,i;return o=new PostMeta({props:{post:e[4],pm:e[2]}}),{c(){n=element("div"),t=element("img"),f=space(),s=element("div"),c=element("h5"),r=element("a"),m=text(l),p=space(),a=element("div"),create_component(o.$$.fragment),g=space(),this.h()},l(e){n=claim_element(e,"DIV",{class:!0});var d,u,h,v,i=children(n);t=claim_element(i,"IMG",{class:!0,src:!0,alt:!0}),f=claim_space(i),s=claim_element(i,"DIV",{class:!0}),d=children(s),c=claim_element(d,"H5",{class:!0}),u=children(c),r=claim_element(u,"A",{href:!0}),h=children(r),m=claim_text(h,l),h.forEach(detach),u.forEach(detach),p=claim_space(d),a=claim_element(d,"DIV",{class:!0,role:!0}),v=children(a),claim_component(o.$$.fragment,v),v.forEach(detach),d.forEach(detach),g=claim_space(i),i.forEach(detach),this.h()},h(){attr(t,"class","inline-block object-cover rounded-full w-16 h-16"),src_url_equal(t.src,h="media/posts/"+e[4].fields.image.src)||attr(t,"src",h),attr(t,"alt",d=e[4].fields.image.alt),attr(r,"href",u=e[4].path),attr(c,"class","header mt-0 mb-1"),attr(a,"class","text-meta flex flex-wrap"),attr(a,"role","complementary"),attr(s,"class","inline-block ml-2"),attr(n,"class","flex items-center mb-5")},m(e,l){insert_hydration(e,n,l),append_hydration(n,t),append_hydration(n,f),append_hydration(n,s),append_hydration(s,c),append_hydration(c,r),append_hydration(r,m),append_hydration(s,p),append_hydration(s,a),mount_component(o,a,null),append_hydration(n,g),i=!0},p(e,n){(!i||n&1&&!src_url_equal(t.src,h="media/posts/"+e[4].fields.image.src))&&attr(t,"src",h),(!i||n&1&&d!==(d=e[4].fields.image.alt))&&attr(t,"alt",d),(!i||n&1)&&l!==(l=e[4].fields.title+"")&&set_data(m,l),(!i||n&1&&u!==(u=e[4].path))&&attr(r,"href",u);const s={};n&1&&(s.post=e[4]),o.$set(s)},i(e){if(i)return;transition_in(o.$$.fragment,e),i=!0},o(e){transition_out(o.$$.fragment,e),i=!1},d(e){e&&detach(n),destroy_component(o)}}}function create_each_block(e){let o=e[4].fields.articleBody.toLowerCase().includes(e[1].toLowerCase())||e[4].fields.title.toLowerCase().includes(e[1].toLowerCase()),n,s,t=o&&create_if_block_1(e);return{c(){t&&t.c(),n=empty()},l(e){t&&t.l(e),n=empty()},m(e,o){t&&t.m(e,o),insert_hydration(e,n,o),s=!0},p(e,s){s&3&&(o=e[4].fields.articleBody.toLowerCase().includes(e[1].toLowerCase())||e[4].fields.title.toLowerCase().includes(e[1].toLowerCase())),o?t?(t.p(e,s),s&3&&transition_in(t,1)):(t=create_if_block_1(e),t.c(),transition_in(t,1),t.m(n.parentNode,n)):t&&(group_outros(),transition_out(t,1,1,()=>{t=null}),check_outros())},i(){if(s)return;transition_in(t),s=!0},o(){transition_out(t),s=!1},d(e){t&&t.d(e),e&&detach(n)}}}function create_fragment(e){let s,a,r,u,l,i,n,d,o,c,h,m,t=e[1].length>=3&&create_if_block(e);return{c(){s=element("div"),a=element("h4"),r=element("span"),u=text("Search"),l=space(),i=element("span"),n=element("input"),d=space(),o=element("div"),t&&t.c(),this.h()},l(e){s=claim_element(e,"DIV",{class:!0});var h,m,f,p,c=children(s);a=claim_element(c,"H4",{class:!0}),h=children(a),r=claim_element(h,"SPAN",{}),m=children(r),u=claim_text(m,"Search"),m.forEach(detach),h.forEach(detach),l=claim_space(c),i=claim_element(c,"SPAN",{class:!0,role:!0}),f=children(i),n=claim_element(f,"INPUT",{class:!0,id:!0,role:!0,placeholder:!0}),f.forEach(detach),d=claim_space(c),o=claim_element(c,"DIV",{class:!0}),p=children(o),t&&t.l(p),p.forEach(detach),c.forEach(detach),this.h()},h(){attr(a,"class","header mt-0"),attr(n,"class","appearance-none block w-full bg-gray-100 border text-gray-700 border-gray-400 mb-5 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"),attr(n,"id","search"),attr(n,"role","searchbox"),attr(n,"placeholder","Search articles..."),attr(i,"class","flex flex-wrap items-center"),attr(i,"role","search"),attr(o,"class","row"),attr(s,"class","row")},m(f,p){insert_hydration(f,s,p),append_hydration(s,a),append_hydration(a,r),append_hydration(r,u),append_hydration(s,l),append_hydration(s,i),append_hydration(i,n),set_input_value(n,e[1]),append_hydration(s,d),append_hydration(s,o),t&&t.m(o,null),c=!0,h||(m=listen(n,"input",e[3]),h=!0)},p(e,[s]){s&2&&n.value!==e[1]&&set_input_value(n,e[1]),e[1].length>=3?t?(t.p(e,s),s&2&&transition_in(t,1)):(t=create_if_block(e),t.c(),transition_in(t,1),t.m(o,null)):t&&(group_outros(),transition_out(t,1,1,()=>{t=null}),check_outros())},i(){if(c)return;transition_in(t),c=!0},o(){transition_out(t),c=!1},d(e){e&&detach(s),t&&t.d(),h=!1,m()}}}function instance(e,t,n){let{allPosts:o}=t;const i={author:!1,date_modified:!0,date_created:!1,description:!1,catg_tags:!1,continue:!1};let s="";function a(){s=this.value,n(1,s)}return e.$$set=e=>{"allPosts"in e&&n(0,o=e.allPosts)},[o,s,i,a]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{allPosts:0})}}export default Component