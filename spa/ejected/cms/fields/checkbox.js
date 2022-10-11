import{SvelteComponent,append,attr,children,claim_element,claim_space,claim_text,destroy_each,detach,element,empty,init,insert,listen,noop,safe_not_equal,set_data,space,text}from"../../../web_modules/svelte/internal/index.mjs";function get_each_context(e,t,n){const s=e.slice();return s[4]=t[n],s}function create_each_block(e){let n,s,t,i,a,c,o=e[4]+"",r,l,d,u;function h(){return e[3](e[4])}return{c(){n=element("div"),s=element("label"),t=element("input"),c=space(),r=text(o),l=space(),this.h()},l(e){n=claim_element(e,"DIV",{class:!0});var i,a=children(n);s=claim_element(a,"LABEL",{}),i=children(s),t=claim_element(i,"INPUT",{id:!0,type:!0}),c=claim_space(i),r=claim_text(i,o),i.forEach(detach),l=claim_space(a),a.forEach(detach),this.h()},h(){attr(t,"id",i=e[4]),attr(t,"type","checkbox"),t.checked=a=e[0].includes(e[4]),attr(n,"class","checkbox")},m(e,o){insert(e,n,o),append(n,s),append(s,t),append(s,c),append(s,r),append(n,l),d||(u=listen(t,"click",h),d=!0)},p(n,s){e=n,s&6&&i!==(i=e[4])&&attr(t,"id",i),s&7&&a!==(a=e[0].includes(e[4]))&&(t.checked=a),s&6&&o!==(o=e[4]+"")&&set_data(r,o)},d(e){e&&detach(n),d=!1,u()}}}function create_fragment(e){let n,s=e[1][e[2]].options,t=[];for(let n=0;n<s.length;n+=1)t[n]=create_each_block(get_each_context(e,s,n));return{c(){for(let e=0;e<t.length;e+=1)t[e].c();n=empty()},l(e){for(let n=0;n<t.length;n+=1)t[n].l(e);n=empty()},m(e,s){for(let n=0;n<t.length;n+=1)t[n].m(e,s);insert(e,n,s)},p(e,[o]){if(o&7){s=e[1][e[2]].options;let i;for(i=0;i<s.length;i+=1){const a=get_each_context(e,s,i);t[i]?t[i].p(a,o):(t[i]=create_each_block(a),t[i].c(),t[i].m(n.parentNode,n))}for(;i<t.length;i+=1)t[i].d(1);t.length=s.length}},i:noop,o:noop,d(e){destroy_each(t,e),e&&detach(n)}}}function instance(e,t,n){let{schema:o}=t,{parentKeys:i}=t,{field:s}=t;const a=e=>{s.includes(e)?n(0,s=s.filter(t=>t!=e)):n(0,s=[...s,e])};return e.$$set=e=>{"schema"in e&&n(1,o=e.schema),"parentKeys"in e&&n(2,i=e.parentKeys),"field"in e&&n(0,s=e.field)},[s,o,i,a]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{schema:1,parentKeys:2,field:0})}}export default Component