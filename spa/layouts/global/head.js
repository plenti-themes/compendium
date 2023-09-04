import{SvelteComponent,append_hydration,attr,check_outros,children,claim_component,claim_element,claim_space,create_component,destroy_component,detach,element,group_outros,init,insert_hydration,mount_component,noop,safe_not_equal,space,src_url_equal,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import SEO from"../scripts/SEO.js";function create_key_block(e){let t,n;return t=new SEO({props:{idxContent:e[0],content:e[1],baseurl:e[2]}}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},p(e,n){const s={};n&1&&(s.idxContent=e[0]),n&2&&(s.content=e[1]),n&4&&(s.baseurl=e[2]),t.$set(s)},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_if_block_1(){let t;return{c(){t=element("link"),this.h()},l(e){t=claim_element(e,"LINK",{rel:!0,href:!0}),this.h()},h(){attr(t,"rel","stylesheet"),attr(t,"href","prism.css")},m(e,n){insert_hydration(e,t,n)},d(e){e&&detach(t)}}}function create_if_block(){let t;return{c(){t=element("link"),this.h()},l(e){t=claim_element(e,"LINK",{rel:!0,href:!0}),this.h()},h(){attr(t,"rel","stylesheet"),attr(t,"href","katex.min.css")},m(e,n){insert_hydration(e,t,n)},d(e){e&&detach(t)}}}function create_fragment(e){let t,h,b,d,y,O=e[3],p,r,j,i,w,_,a,g,u,v,m,f,c,l,o=create_key_block(e),n=e[0].theme.codeHighlighting&&create_if_block_1(e),s=e[0].theme.mathTypesetting&&create_if_block(e);return{c(){t=element("head"),h=element("meta"),b=space(),d=element("meta"),y=space(),o.c(),p=space(),r=element("base"),j=space(),i=element("script"),_=space(),a=element("link"),g=space(),u=element("link"),v=space(),n&&n.c(),m=space(),s&&s.c(),f=space(),c=element("link"),this.h()},l(e){t=claim_element(e,"HEAD",{});var w,l=children(t);h=claim_element(l,"META",{charset:!0}),b=claim_space(l),d=claim_element(l,"META",{name:!0,content:!0}),y=claim_space(l),o.l(l),p=claim_space(l),r=claim_element(l,"BASE",{href:!0}),j=claim_space(l),i=claim_element(l,"SCRIPT",{type:!0,src:!0}),w=children(i),w.forEach(detach),_=claim_space(l),a=claim_element(l,"LINK",{rel:!0,type:!0,href:!0}),g=claim_space(l),u=claim_element(l,"LINK",{rel:!0,href:!0}),v=claim_space(l),n&&n.l(l),m=claim_space(l),s&&s.l(l),f=claim_space(l),c=claim_element(l,"LINK",{rel:!0,href:!0}),l.forEach(detach),this.h()},h(){attr(h,"charset","utf-8"),attr(d,"name","viewport"),attr(d,"content","width=device-width,initial-scale=1"),attr(r,"href",e[2]),attr(i,"type","module"),src_url_equal(i.src,w="spa/core/main.js")||attr(i,"src",w),attr(a,"rel","icon"),attr(a,"type","image/svg+xml"),attr(a,"href","logo.svg"),attr(u,"rel","stylesheet"),attr(u,"href","tailwind.global.css"),attr(c,"rel","stylesheet"),attr(c,"href","spa/bundle.css")},m(e,w){insert_hydration(e,t,w),append_hydration(t,h),append_hydration(t,b),append_hydration(t,d),append_hydration(t,y),o.m(t,null),append_hydration(t,p),append_hydration(t,r),append_hydration(t,j),append_hydration(t,i),append_hydration(t,_),append_hydration(t,a),append_hydration(t,g),append_hydration(t,u),append_hydration(t,v),n&&n.m(t,null),append_hydration(t,m),s&&s.m(t,null),append_hydration(t,f),append_hydration(t,c),l=!0},p(e,[i]){i&8&&safe_not_equal(O,O=e[3])?(group_outros(),transition_out(o,1,1,noop),check_outros(),o=create_key_block(e),o.c(),transition_in(o,1),o.m(t,p)):o.p(e,i),(!l||i&4)&&attr(r,"href",e[2]),e[0].theme.codeHighlighting?n||(n=create_if_block_1(e),n.c(),n.m(t,m)):n&&(n.d(1),n=null),e[0].theme.mathTypesetting?s||(s=create_if_block(e),s.c(),s.m(t,f)):s&&(s.d(1),s=null)},i(){if(l)return;transition_in(o),l=!0},o(){transition_out(o),l=!1},d(e){e&&detach(t),o.d(e),n&&n.d(),s&&s.d()}}}function instance(e,t,n){let{idxContent:o,content:s,baseurl:i}=t,a;return e.$$set=e=>{"idxContent"in e&&n(0,o=e.idxContent),"content"in e&&n(1,s=e.content),"baseurl"in e&&n(2,i=e.baseurl)},e.$$.update=()=>{if(e.$$.dirty&2)$:n(3,a=s.type==="posts")},[o,s,i,a]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{idxContent:0,content:1,baseurl:2})}}export default Component