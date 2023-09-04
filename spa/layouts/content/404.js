import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,set_data,set_style,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function create_if_block(e){let t,n=e[2].citation+"";return{c(){t=element("cite"),this.h()},l(e){t=claim_element(e,"CITE",{class:!0});var n=children(t);n.forEach(detach),this.h()},h(){attr(t,"class","text-meta")},m(e,s){insert_hydration(e,t,s),t.innerHTML=n},p(e,s){s&4&&n!==(n=e[2].citation+"")&&(t.innerHTML=n)},d(e){e&&detach(t)}}}function create_fragment(e){let t,h,j,d,s,n,f,g,O,o,a,m,b,r,p,w,l,c,v,y,_,u,i=e[3]&&create_if_block(e);return{c(){t=element("section"),h=element("div"),j=space(),d=element("div"),s=element("div"),n=element("img"),O=space(),o=element("div"),a=element("h2"),m=element("i"),b=space(),r=element("span"),p=text(e[0]),w=space(),l=element("div"),c=element("i"),v=text(e[1]),y=space(),i&&i.c(),_=space(),u=element("div"),this.h()},l(f){t=claim_element(f,"SECTION",{class:!0});var g,C,E,k,A,S,M,x=children(t);h=claim_element(x,"DIV",{class:!0}),children(h).forEach(detach),j=claim_space(x),d=claim_element(x,"DIV",{class:!0}),k=children(d),s=claim_element(k,"DIV",{class:!0}),g=children(s),n=claim_element(g,"IMG",{class:!0,style:!0,src:!0,alt:!0}),O=claim_space(g),o=claim_element(g,"DIV",{class:!0,style:!0}),C=children(o),a=claim_element(C,"H2",{class:!0}),E=children(a),m=claim_element(E,"I",{class:!0}),children(m).forEach(detach),b=claim_space(E),r=claim_element(E,"SPAN",{class:!0}),A=children(r),p=claim_text(A,e[0]),A.forEach(detach),E.forEach(detach),w=claim_space(C),l=claim_element(C,"DIV",{class:!0}),S=children(l),c=claim_element(S,"I",{class:!0}),M=children(c),v=claim_text(M,e[1]),M.forEach(detach),S.forEach(detach),C.forEach(detach),y=claim_space(g),i&&i.l(g),g.forEach(detach),k.forEach(detach),_=claim_space(x),u=claim_element(x,"DIV",{class:!0}),children(u).forEach(detach),x.forEach(detach),this.h()},h(){attr(h,"class","w-0 md:w-1/12 xl:w-2/12"),attr(n,"class","w-full object-cover rounded-lg overflow-hidden h-screen-60"),set_style(n,"filter","brightness(60%)"),src_url_equal(n.src,f="media/pages/"+e[2].src)||attr(n,"src",f),attr(n,"alt",g=e[2].alt),attr(m,"class","text-2xl md:text-3xl lg:text-4xl accent las la-directions"),attr(r,"class","text-base md:text-xl lg:text-2xl text-white"),attr(a,"class","header"),attr(c,"class","text-sm md:text-lg lg:text-xl text-white"),attr(l,"class","pl-8 md:pl-9 lg:pl-10"),attr(o,"class","absolute pl-2 md:pl-6"),set_style(o,"bottom","10%"),attr(s,"class","w-full relative"),attr(d,"class","w-full md:w-10/12 xl:w-8/12 px-2 md:px-0"),attr(u,"class","w-0 md:w-1/12 xl:w-2/12"),attr(t,"class","w-full section flex flex-wrap items-center justify-between py-6 sm:py-16")},m(e,f){insert_hydration(e,t,f),append_hydration(t,h),append_hydration(t,j),append_hydration(t,d),append_hydration(d,s),append_hydration(s,n),append_hydration(s,O),append_hydration(s,o),append_hydration(o,a),append_hydration(a,m),append_hydration(a,b),append_hydration(a,r),append_hydration(r,p),append_hydration(o,w),append_hydration(o,l),append_hydration(l,c),append_hydration(c,v),append_hydration(s,y),i&&i.m(s,null),append_hydration(t,_),append_hydration(t,u)},p(e,[t]){t&4&&!src_url_equal(n.src,f="media/pages/"+e[2].src)&&attr(n,"src",f),t&4&&g!==(g=e[2].alt)&&attr(n,"alt",g),t&1&&set_data(p,e[0]),t&2&&set_data(v,e[1]),e[3]&&i.p(e,t)},i:noop,o:noop,d(e){e&&detach(t),i&&i.d()}}}function instance(e,t,n){let{title:o,articleBody:i,image:s}=t,a=s.citation!==void 0;return e.$$set=e=>{"title"in e&&n(0,o=e.title),"articleBody"in e&&n(1,i=e.articleBody),"image"in e&&n(2,s=e.image)},[o,i,s,a]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,articleBody:1,image:2})}}export default Component