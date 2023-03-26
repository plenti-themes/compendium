import{SvelteComponent,append,attr,children,claim_element,claim_space,claim_text,destroy_each,detach,element,empty,init,insert,noop,safe_not_equal,space,text}from"../../web_modules/svelte/internal/index.mjs";function get_each_context(e,t,n){const s=e.slice();return s[5]=t[n],s[7]=n,s}function create_else_block_2(){let t,s,i,n,o;return{c(){t=element("button"),s=element("i"),i=space(),n=element("button"),o=element("i"),this.h()},l(e){t=claim_element(e,"BUTTON",{class:!0,"aria-label":!0});var a,r=children(t);s=claim_element(r,"I",{class:!0}),children(s).forEach(detach),r.forEach(detach),i=claim_space(e),n=claim_element(e,"BUTTON",{class:!0,"aria-label":!0}),a=children(n),o=claim_element(a,"I",{class:!0}),children(o).forEach(detach),a.forEach(detach),this.h()},h(){attr(s,"class","las la-angle-double-left font-black svelte-1dj33wt"),attr(t,"class","btn-round-inactive m-0.5"),attr(t,"aria-label","First"),attr(o,"class","las la-angle-left font-black svelte-1dj33wt"),attr(n,"class","btn-round-inactive m-0.5"),attr(n,"aria-label","Previous")},m(e,a){insert(e,t,a),append(t,s),insert(e,i,a),insert(e,n,a),append(n,o)},p:noop,d(e){e&&detach(t),e&&detach(i),e&&detach(n)}}}function create_if_block_2(e){let t,s,i,a,n,o,r;return{c(){t=element("a"),s=element("i"),a=space(),n=element("a"),o=element("i"),this.h()},l(e){t=claim_element(e,"A",{href:!0,class:!0,"aria-label":!0});var i,r=children(t);s=claim_element(r,"I",{class:!0}),children(s).forEach(detach),r.forEach(detach),a=claim_space(e),n=claim_element(e,"A",{href:!0,class:!0,"aria-label":!0}),i=children(n),o=claim_element(i,"I",{class:!0}),children(o).forEach(detach),i.forEach(detach),this.h()},h(){attr(s,"class","las la-angle-double-left font-black svelte-1dj33wt"),attr(t,"href",i=""+(e[0]+"1")),attr(t,"class","btn-round m-0.5"),attr(t,"aria-label","First"),attr(o,"class","las la-angle-left font-black svelte-1dj33wt"),attr(n,"href",r=""+(e[0]+Math.max(e[1]-1,1))),attr(n,"class","btn-round m-0.5"),attr(n,"aria-label","Previous")},m(e,i){insert(e,t,i),append(t,s),insert(e,a,i),insert(e,n,i),append(n,o)},p(e,s){s&1&&i!==(i=""+(e[0]+"1"))&&attr(t,"href",i),s&3&&r!==(r=""+(e[0]+Math.max(e[1]-1,1)))&&attr(n,"href",r)},d(e){e&&detach(t),e&&detach(a),e&&detach(n)}}}function create_else_block_1(e){let t,o=e[7]+1+"",s,n;return{c(){t=element("a"),s=text(o),this.h()},l(e){t=claim_element(e,"A",{class:!0,href:!0});var n=children(t);s=claim_text(n,o),n.forEach(detach),this.h()},h(){attr(t,"class","btn-round m-0.5"),attr(t,"href",n=""+(e[0]+(e[7]+1)))},m(e,n){insert(e,t,n),append(t,s)},p(e,s){s&1&&n!==(n=""+(e[0]+(e[7]+1)))&&attr(t,"href",n)},d(e){e&&detach(t)}}}function create_if_block_1(e){let t,s=e[7]+1+"",n;return{c(){t=element("button"),n=text(s),this.h()},l(e){t=claim_element(e,"BUTTON",{class:!0});var o=children(t);n=claim_text(o,s),o.forEach(detach),this.h()},h(){attr(t,"class","btn-round-active m-0.5")},m(e,s){insert(e,t,s),append(t,n)},p:noop,d(e){e&&detach(t)}}}function create_each_block(e){let n;function o(e){return e[1]==e[7]+1?create_if_block_1:create_else_block_1}let s=o(e,-1),t=s(e);return{c(){t.c(),n=empty()},l(e){t.l(e),n=empty()},m(e,s){t.m(e,s),insert(e,n,s)},p(e,i){s===(s=o(e,i))&&t?t.p(e,i):(t.d(1),t=s(e),t&&(t.c(),t.m(n.parentNode,n)))},d(e){t.d(e),e&&detach(n)}}}function create_else_block(){let t,s,i,n,o;return{c(){t=element("button"),s=element("i"),i=space(),n=element("button"),o=element("i"),this.h()},l(e){t=claim_element(e,"BUTTON",{class:!0,"aria-label":!0});var a,r=children(t);s=claim_element(r,"I",{class:!0}),children(s).forEach(detach),r.forEach(detach),i=claim_space(e),n=claim_element(e,"BUTTON",{class:!0,"aria-label":!0}),a=children(n),o=claim_element(a,"I",{class:!0}),children(o).forEach(detach),a.forEach(detach),this.h()},h(){attr(s,"class","las la-angle-right font-black svelte-1dj33wt"),attr(t,"class","btn-round-inactive m-0.5"),attr(t,"aria-label","Next"),attr(o,"class","las la-angle-double-right font-black svelte-1dj33wt"),attr(n,"class","btn-round-inactive m-0.5"),attr(n,"aria-label","Last")},m(e,a){insert(e,t,a),append(t,s),insert(e,i,a),insert(e,n,a),append(n,o)},p:noop,d(e){e&&detach(t),e&&detach(i),e&&detach(n)}}}function create_if_block(e){let t,s,i,a,n,o,r;return{c(){t=element("a"),s=element("i"),a=space(),n=element("a"),o=element("i"),this.h()},l(e){t=claim_element(e,"A",{href:!0,class:!0,"aria-label":!0});var i,r=children(t);s=claim_element(r,"I",{class:!0}),children(s).forEach(detach),r.forEach(detach),a=claim_space(e),n=claim_element(e,"A",{href:!0,class:!0,"aria-label":!0}),i=children(n),o=claim_element(i,"I",{class:!0}),children(o).forEach(detach),i.forEach(detach),this.h()},h(){attr(s,"class","las la-angle-right font-black svelte-1dj33wt"),attr(t,"href",i=""+(e[0]+Math.min(e[1]+1,e[2]))),attr(t,"class","btn-round m-0.5"),attr(t,"aria-label","Next"),attr(o,"class","las la-angle-double-right font-black svelte-1dj33wt"),attr(n,"href",r=""+(e[0]+e[2])),attr(n,"class","btn-round m-0.5"),attr(n,"aria-label","Last")},m(e,i){insert(e,t,i),append(t,s),insert(e,a,i),insert(e,n,i),append(n,o)},p(e,s){s&7&&i!==(i=""+(e[0]+Math.min(e[1]+1,e[2])))&&attr(t,"href",i),s&5&&r!==(r=""+(e[0]+e[2]))&&attr(n,"href",r)},d(e){e&&detach(t),e&&detach(a),e&&detach(n)}}}function create_fragment(e){let n,c,a;function u(e){return e[1]-1>0?create_if_block_2:create_else_block_2}let l=u(e,-1),o=l(e),i=Array(e[2]),t=[];for(let n=0;n<i.length;n+=1)t[n]=create_each_block(get_each_context(e,i,n));function d(e){return e[1]+1<=e[2]?create_if_block:create_else_block}let r=d(e,-1),s=r(e);return{c(){n=element("div"),o.c(),c=space();for(let e=0;e<t.length;e+=1)t[e].c();a=space(),s.c(),this.h()},l(e){n=claim_element(e,"DIV",{class:!0,role:!0});var i=children(n);o.l(i),c=claim_space(i);for(let e=0;e<t.length;e+=1)t[e].l(i);a=claim_space(i),s.l(i),i.forEach(detach),this.h()},h(){attr(n,"class","flex pagination text-center justify-center"),attr(n,"role","navigation")},m(e,i){insert(e,n,i),o.m(n,null),append(n,c);for(let e=0;e<t.length;e+=1)t[e].m(n,null);append(n,a),s.m(n,null)},p(e,[h]){if(l===(l=u(e,h))&&o?o.p(e,h):(o.d(1),o=l(e),o&&(o.c(),o.m(n,c))),h&7){i=Array(e[2]);let s;for(s=0;s<i.length;s+=1){const o=get_each_context(e,i,s);t[s]?t[s].p(o,h):(t[s]=create_each_block(o),t[s].c(),t[s].m(n,a))}for(;s<t.length;s+=1)t[s].d(1);t.length=i.length}r===(r=d(e,h))&&s?s.p(e,h):(s.d(1),s=r(e),s&&(s.c(),s.m(n,null)))},i:noop,o:noop,d(e){e&&detach(n),o.d(),destroy_each(t,e),s.d()}}}function instance(e,t,n){let{content:s}=t,{currentPage:a}=t,{totalPages:r}=t,{baseurl:o}=t,{pagePath:i}=t;return i=(o+s.path).replace("//","")+"/",e.$$set=e=>{"content"in e&&n(3,s=e.content),"currentPage"in e&&n(1,a=e.currentPage),"totalPages"in e&&n(2,r=e.totalPages),"baseurl"in e&&n(4,o=e.baseurl),"pagePath"in e&&n(0,i=e.pagePath)},[i,a,r,s,o]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{content:3,currentPage:1,totalPages:2,baseurl:4,pagePath:0})}}export default Component