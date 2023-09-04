import{SvelteComponent,attr,claim_element,claim_space,detach,element,init,insert_hydration,noop,safe_not_equal,space}from"../../web_modules/svelte/internal/index.mjs";function create_if_block_1(e){let t;return{c(){t=element("meta"),this.h()},l(e){t=claim_element(e,"META",{name:!0,content:!0}),this.h()},h(){attr(t,"name","twitter:image"),attr(t,"content",e[1])},m(e,n){insert_hydration(e,t,n)},p(e,n){n&2&&attr(t,"content",e[1])},d(e){e&&detach(t)}}}function create_if_block(e){let t,s,n;return{c(){t=element("meta"),s=space(),n=element("meta"),this.h()},l(e){t=claim_element(e,"META",{name:!0,content:!0}),s=claim_space(e),n=claim_element(e,"META",{name:!0,content:!0}),this.h()},h(){attr(t,"name","twitter:creator"),attr(t,"content",e[2]),attr(n,"name","twitter:site"),attr(n,"content",e[2])},m(e,o){insert_hydration(e,t,o),insert_hydration(e,s,o),insert_hydration(e,n,o)},p(e,s){s&4&&attr(t,"content",e[2]),s&4&&attr(n,"content",e[2])},d(e){e&&detach(t),e&&detach(s),e&&detach(n)}}}function create_fragment(e){let a,l,r,o,i,c,s,t=e[1]&&create_if_block_1(e),n=e[2]&&create_if_block(e);return{c(){a=element("meta"),l=space(),t&&t.c(),r=space(),n&&n.c(),o=space(),i=element("meta"),c=space(),s=element("meta"),this.h()},l(e){a=claim_element(e,"META",{name:!0,content:!0}),l=claim_space(e),t&&t.l(e),r=claim_space(e),n&&n.l(e),o=claim_space(e),i=claim_element(e,"META",{name:!0,content:!0}),c=claim_space(e),s=claim_element(e,"META",{name:!0,content:!0}),this.h()},h(){attr(a,"name","twitter:card"),attr(a,"content",cardType),attr(i,"name","twitter:label1"),attr(i,"content","Written by"),attr(s,"name","twitter:data1"),attr(s,"content",e[0])},m(e,d){insert_hydration(e,a,d),insert_hydration(e,l,d),t&&t.m(e,d),insert_hydration(e,r,d),n&&n.m(e,d),insert_hydration(e,o,d),insert_hydration(e,i,d),insert_hydration(e,c,d),insert_hydration(e,s,d)},p(e,[i]){e[1]?t?t.p(e,i):(t=create_if_block_1(e),t.c(),t.m(r.parentNode,r)):t&&(t.d(1),t=null),e[2]?n?n.p(e,i):(n=create_if_block(e),n.c(),n.m(o.parentNode,o)):n&&(n.d(1),n=null),i&1&&attr(s,"content",e[0])},i:noop,o:noop,d(e){e&&detach(a),e&&detach(l),t&&t.d(e),e&&detach(r),n&&n.d(e),e&&detach(o),e&&detach(i),e&&detach(c),e&&detach(s)}}}let cardType="summary";function instance(e,t,n){let{author:s,image_url:o,twitterUsername:i}=t;return e.$$set=e=>{"author"in e&&n(0,s=e.author),"image_url"in e&&n(1,o=e.image_url),"twitterUsername"in e&&n(2,i=e.twitterUsername)},[s,o,i]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{author:0,image_url:1,twitterUsername:2})}}export default Component