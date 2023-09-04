import{SvelteComponent,append_hydration,attr,check_outros,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,destroy_each,detach,element,empty,group_outros,init,insert_hydration,mount_component,noop,safe_not_equal,set_data,space,src_url_equal,text,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import PostMeta from"./post_meta.js";function get_each_context(e,t,n){const s=e.slice();return s[4]=t[n],s}function create_each_block(e){let n,t,h,d,f,s,c,r,l=e[4].title+"",m,u,p,a,o,g,i;return o=new PostMeta({props:{post:e[4],catgPosts:e[1],tagsPosts:e[2],pm:e[3]}}),{c(){n=element("div"),t=element("img"),f=space(),s=element("div"),c=element("h3"),r=element("a"),m=text(l),p=space(),a=element("div"),create_component(o.$$.fragment),g=space(),this.h()},l(e){n=claim_element(e,"DIV",{class:!0});var d,u,h,v,i=children(n);t=claim_element(i,"IMG",{class:!0,src:!0,alt:!0}),f=claim_space(i),s=claim_element(i,"DIV",{class:!0}),d=children(s),c=claim_element(d,"H3",{class:!0}),u=children(c),r=claim_element(u,"A",{href:!0}),h=children(r),m=claim_text(h,l),h.forEach(detach),u.forEach(detach),p=claim_space(d),a=claim_element(d,"DIV",{class:!0,role:!0}),v=children(a),claim_component(o.$$.fragment,v),v.forEach(detach),d.forEach(detach),g=claim_space(i),i.forEach(detach),this.h()},h(){attr(t,"class","inline-block object-cover rounded-md w-28 h-28"),src_url_equal(t.src,h="media/posts/"+e[4].img_src)||attr(t,"src",h),attr(t,"alt",d=e[4].img_alt),attr(r,"href",u=e[4].path),attr(c,"class","header my-0 text-xl md:text-2xl"),attr(a,"class","text-meta flex flex-wrap"),attr(a,"role","complementary"),attr(s,"class","inline-block ml-2"),attr(n,"class","flex items-center my-4")},m(e,l){insert_hydration(e,n,l),append_hydration(n,t),append_hydration(n,f),append_hydration(n,s),append_hydration(s,c),append_hydration(c,r),append_hydration(r,m),append_hydration(s,p),append_hydration(s,a),mount_component(o,a,null),append_hydration(n,g),i=!0},p(e,n){(!i||n&1&&!src_url_equal(t.src,h="media/posts/"+e[4].img_src))&&attr(t,"src",h),(!i||n&1&&d!==(d=e[4].img_alt))&&attr(t,"alt",d),(!i||n&1)&&l!==(l=e[4].title+"")&&set_data(m,l),(!i||n&1&&u!==(u=e[4].path))&&attr(r,"href",u);const s={};n&1&&(s.post=e[4]),n&2&&(s.catgPosts=e[1]),n&4&&(s.tagsPosts=e[2]),o.$set(s)},i(e){if(i)return;transition_in(o.$$.fragment,e),i=!0},o(e){transition_out(o.$$.fragment,e),i=!1},d(e){e&&detach(n),destroy_component(o)}}}function create_key_block(e){let n,o,d,u,r=e[0].name+"",c,l,i,a,s=Object(e[0].posts),t=[];for(let n=0;n<s.length;n+=1)t[n]=create_each_block(get_each_context(e,s,n));const h=e=>transition_out(t[e],1,1,()=>{t[e]=null});return{c(){n=element("h2"),o=element("span"),d=text("Tag:"),u=space(),c=text(r),l=space();for(let e=0;e<t.length;e+=1)t[e].c();i=empty(),this.h()},l(e){n=claim_element(e,"H2",{class:!0});var a,s=children(n);o=claim_element(s,"SPAN",{class:!0}),a=children(o),d=claim_text(a,"Tag:"),a.forEach(detach),u=claim_space(s),c=claim_text(s,r),s.forEach(detach),l=claim_space(e);for(let n=0;n<t.length;n+=1)t[n].l(e);i=empty(),this.h()},h(){attr(o,"class","accent"),attr(n,"class","header text-xl md:text-2xl lg:text-3xl my-5")},m(e,s){insert_hydration(e,n,s),append_hydration(n,o),append_hydration(o,d),append_hydration(n,u),append_hydration(n,c),insert_hydration(e,l,s);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(e,s);insert_hydration(e,i,s),a=!0},p(e,n){if((!a||n&1)&&r!==(r=e[0].name+"")&&set_data(c,r),n&15){s=Object(e[0].posts);let o;for(o=0;o<s.length;o+=1){const a=get_each_context(e,s,o);t[o]?(t[o].p(a,n),transition_in(t[o],1)):(t[o]=create_each_block(a),t[o].c(),transition_in(t[o],1),t[o].m(i.parentNode,i))}group_outros();for(o=s.length;o<t.length;o+=1)h(o);check_outros()}},i(){if(a)return;for(let e=0;e<s.length;e+=1)transition_in(t[e]);a=!0},o(){t=t.filter(Boolean);for(let e=0;e<t.length;e+=1)transition_out(t[e]);a=!1},d(e){e&&detach(n),e&&detach(l),destroy_each(t,e),e&&detach(i)}}}function create_fragment(e){let n,o,s,a=e[0],i,t=create_key_block(e);return{c(){n=element("div"),o=element("div"),s=element("div"),t.c(),this.h()},l(e){n=claim_element(e,"DIV",{class:!0});var i,a,r=children(n);o=claim_element(r,"DIV",{class:!0}),i=children(o),s=claim_element(i,"DIV",{class:!0}),a=children(s),t.l(a),a.forEach(detach),i.forEach(detach),r.forEach(detach),this.h()},h(){attr(s,"class","mx-2 md:mx-6 my-1"),attr(o,"class","flex-none lg:flex"),attr(n,"class","rounded-xl overflow-hidden shadow-md bg-secondary mb-6")},m(e,a){insert_hydration(e,n,a),append_hydration(n,o),append_hydration(o,s),t.m(s,null),i=!0},p(e,[n]){n&1&&safe_not_equal(a,a=e[0])?(group_outros(),transition_out(t,1,1,noop),check_outros(),t=create_key_block(e),t.c(),transition_in(t,1),t.m(s,null)):t.p(e,n)},i(){if(i)return;transition_in(t),i=!0},o(){transition_out(t),i=!1},d(e){e&&detach(n),t.d(e)}}}function instance(e,t,n){let{tag:s,catgPosts:o,tagsPosts:i}=t;const a={author:!1,date_modified:!0,date_created:!0,description:!1,catg_tags:!0,continue:!1};return e.$$set=e=>{"tag"in e&&n(0,s=e.tag),"catgPosts"in e&&n(1,o=e.catgPosts),"tagsPosts"in e&&n(2,i=e.tagsPosts)},[s,o,i,a]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{tag:0,catgPosts:1,tagsPosts:2})}}export default Component