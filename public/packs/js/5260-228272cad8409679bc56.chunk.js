(self.webpackChunkprsdigg=self.webpackChunkprsdigg||[]).push([[5260],{38272:function(e,t,n){"use strict";n.d(t,{ZM:function(){return x},ZP:function(){return C}});var a=n(85061),r=n(22122),s=n(96156),c=n(28481),l=n(90484),o=n(67294),i=n(94184),m=n.n(i),u=n(11382),d=n(25378),f=n(24308),j=n(65632),p=n(80746),v=n(92820),y=n(21584),g=n(96159),h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},E=function(e){var t,n=e.prefixCls,a=e.children,c=e.actions,l=e.extra,i=e.className,u=e.colStyle,d=h(e,["prefixCls","children","actions","extra","className","colStyle"]),f=o.useContext(x),p=f.grid,v=f.itemLayout,E=o.useContext(j.E_).getPrefixCls,b=E("list",n),Z=c&&c.length>0&&o.createElement("ul",{className:"".concat(b,"-item-action"),key:"actions"},c.map((function(e,t){return o.createElement("li",{key:"".concat(b,"-item-action-").concat(t)},e,t!==c.length-1&&o.createElement("em",{className:"".concat(b,"-item-action-split")}))}))),k=p?"div":"li",C=o.createElement(k,(0,r.Z)({},d,{className:m()("".concat(b,"-item"),(0,s.Z)({},"".concat(b,"-item-no-flex"),!("vertical"===v?l:(o.Children.forEach(a,(function(e){"string"===typeof e&&(t=!0)})),!(t&&o.Children.count(a)>1)))),i)}),"vertical"===v&&l?[o.createElement("div",{className:"".concat(b,"-item-main"),key:"content"},a,Z),o.createElement("div",{className:"".concat(b,"-item-extra"),key:"extra"},l)]:[a,Z,(0,g.Tm)(l,{key:"extra"})]);return p?o.createElement(y.Z,{flex:1,style:u},C):C};E.Meta=function(e){var t=e.prefixCls,n=e.className,a=e.avatar,s=e.title,c=e.description,l=h(e,["prefixCls","className","avatar","title","description"]),i=(0,o.useContext(j.E_).getPrefixCls)("list",t),u=m()("".concat(i,"-item-meta"),n),d=o.createElement("div",{className:"".concat(i,"-item-meta-content")},s&&o.createElement("h4",{className:"".concat(i,"-item-meta-title")},s),c&&o.createElement("div",{className:"".concat(i,"-item-meta-description")},c));return o.createElement("div",(0,r.Z)({},l,{className:u}),a&&o.createElement("div",{className:"".concat(i,"-item-meta-avatar")},a),(s||c)&&d)};var b=E,Z=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},x=o.createContext({});x.Consumer;function k(e){var t,n=e.pagination,i=void 0!==n&&n,y=e.prefixCls,g=e.bordered,h=void 0!==g&&g,E=e.split,b=void 0===E||E,k=e.className,C=e.children,O=e.itemLayout,z=e.loadMore,N=e.grid,w=e.dataSource,S=void 0===w?[]:w,P=e.size,_=e.header,I=e.footer,T=e.loading,M=void 0!==T&&T,U=e.rowKey,D=e.renderItem,L=e.locale,K=Z(e,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),$=i&&"object"===(0,l.Z)(i)?i:{},F=o.useState($.defaultCurrent||1),R=(0,c.Z)(F,2),Y=R[0],A=R[1],H=o.useState($.defaultPageSize||10),q=(0,c.Z)(H,2),J=q[0],B=q[1],G=o.useContext(j.E_),W=G.getPrefixCls,Q=G.renderEmpty,V=G.direction,X={},ee=function(e){return function(t,n){A(t),B(n),i&&i[e]&&i[e](t,n)}},te=ee("onChange"),ne=ee("onShowSizeChange"),ae=W("list",y),re=M;"boolean"===typeof re&&(re={spinning:re});var se=re&&re.spinning,ce="";switch(P){case"large":ce="lg";break;case"small":ce="sm"}var le=m()(ae,(t={},(0,s.Z)(t,"".concat(ae,"-vertical"),"vertical"===O),(0,s.Z)(t,"".concat(ae,"-").concat(ce),ce),(0,s.Z)(t,"".concat(ae,"-split"),b),(0,s.Z)(t,"".concat(ae,"-bordered"),h),(0,s.Z)(t,"".concat(ae,"-loading"),se),(0,s.Z)(t,"".concat(ae,"-grid"),!!N),(0,s.Z)(t,"".concat(ae,"-something-after-last-item"),!!(z||i||I)),(0,s.Z)(t,"".concat(ae,"-rtl"),"rtl"===V),t),k),oe=(0,r.Z)((0,r.Z)((0,r.Z)({},{current:1,total:0}),{total:S.length,current:Y,pageSize:J}),i||{}),ie=Math.ceil(oe.total/oe.pageSize);oe.current>ie&&(oe.current=ie);var me=i?o.createElement("div",{className:"".concat(ae,"-pagination")},o.createElement(p.Z,(0,r.Z)({},oe,{onChange:te,onShowSizeChange:ne}))):null,ue=(0,a.Z)(S);i&&S.length>(oe.current-1)*oe.pageSize&&(ue=(0,a.Z)(S).splice((oe.current-1)*oe.pageSize,oe.pageSize));var de=(0,d.Z)(),fe=o.useMemo((function(){for(var e=0;e<f.c4.length;e+=1){var t=f.c4[e];if(de[t])return t}}),[de]),je=o.useMemo((function(){if(N){var e=fe&&N[fe]?N[fe]:N.column;return e?{width:"".concat(100/e,"%"),maxWidth:"".concat(100/e,"%")}:void 0}}),[null===N||void 0===N?void 0:N.column,fe]),pe=se&&o.createElement("div",{style:{minHeight:53}});if(ue.length>0){var ve=ue.map((function(e,t){return function(e,t){return D?((n="function"===typeof U?U(e):"string"===typeof U?e[U]:e.key)||(n="list-item-".concat(t)),X[t]=n,D(e,t)):null;var n}(e,t)})),ye=o.Children.map(ve,(function(e,t){return o.createElement("div",{key:X[t],style:je},e)}));pe=N?o.createElement(v.Z,{gutter:N.gutter},ye):o.createElement("ul",{className:"".concat(ae,"-items")},ve)}else C||se||(pe=function(e,t){return o.createElement("div",{className:"".concat(e,"-empty-text")},L&&L.emptyText||t("List"))}(ae,Q));var ge=oe.position||"bottom";return o.createElement(x.Provider,{value:{grid:N,itemLayout:O}},o.createElement("div",(0,r.Z)({className:le},K),("top"===ge||"both"===ge)&&me,_&&o.createElement("div",{className:"".concat(ae,"-header")},_),o.createElement(u.Z,re,pe,C),I&&o.createElement("div",{className:"".concat(ae,"-footer")},I),z||("bottom"===ge||"both"===ge)&&me))}k.Item=b;var C=k},51350:function(e,t,n){"use strict";n(39992),n(34892),n(96498),n(66192),n(38528)},60331:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var a=n(96156),r=n(22122),s=n(28481),c=n(67294),l=n(94184),o=n.n(l),i=n(10366),m=n(54549),u=n(65632),d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},f=function(e){var t,n=e.prefixCls,s=e.className,l=e.checked,i=e.onChange,m=e.onClick,f=d(e,["prefixCls","className","checked","onChange","onClick"]),j=(0,c.useContext(u.E_).getPrefixCls)("tag",n),p=o()(j,(t={},(0,a.Z)(t,"".concat(j,"-checkable"),!0),(0,a.Z)(t,"".concat(j,"-checkable-checked"),l),t),s);return c.createElement("span",(0,r.Z)({},f,{className:p,onClick:function(e){null===i||void 0===i||i(!l),null===m||void 0===m||m(e)}}))},j=n(98787),p=n(69304),v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},y=new RegExp("^(".concat(j.Y.join("|"),")(-inverse)?$")),g=new RegExp("^(".concat(j.E.join("|"),")$")),h=function(e,t){var n,l=e.prefixCls,d=e.className,f=e.style,j=e.children,h=e.icon,E=e.color,b=e.onClose,Z=e.closeIcon,x=e.closable,k=void 0!==x&&x,C=v(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),O=c.useContext(u.E_),z=O.getPrefixCls,N=O.direction,w=c.useState(!0),S=(0,s.Z)(w,2),P=S[0],_=S[1];c.useEffect((function(){"visible"in C&&_(C.visible)}),[C.visible]);var I=function(){return!!E&&(y.test(E)||g.test(E))},T=(0,r.Z)({backgroundColor:E&&!I()?E:void 0},f),M=I(),U=z("tag",l),D=o()(U,(n={},(0,a.Z)(n,"".concat(U,"-").concat(E),M),(0,a.Z)(n,"".concat(U,"-has-color"),E&&!M),(0,a.Z)(n,"".concat(U,"-hidden"),!P),(0,a.Z)(n,"".concat(U,"-rtl"),"rtl"===N),n),d),L=function(e){e.stopPropagation(),null===b||void 0===b||b(e),e.defaultPrevented||"visible"in C||_(!1)},K="onClick"in C||j&&"a"===j.type,$=(0,i.Z)(C,["visible"]),F=h||null,R=F?c.createElement(c.Fragment,null,F,c.createElement("span",null,j)):j,Y=c.createElement("span",(0,r.Z)({},$,{ref:t,className:D,style:T}),R,k?Z?c.createElement("span",{className:"".concat(U,"-close-icon"),onClick:L},Z):c.createElement(m.Z,{className:"".concat(U,"-close-icon"),onClick:L}):null);return K?c.createElement(p.Z,null,Y):Y},E=c.forwardRef(h);E.displayName="Tag",E.CheckableTag=f;var b=E},3829:function(e,t,n){"use strict";n(39992)},36515:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});n(51350);var a=n(38272),r=(n(3829),n(60331)),s=(n(75257),n(51890)),c=(n(67167),n(71577)),l=(n(19793),n(7495)),o=(n(13062),n(71230)),i=(n(89032),n(15746)),m=(n(53315),n(89588)),u=n(39387),d=n(30381),f=n.n(d),j=n(67294),p=n(8134),v=n(29009),y=n(20085),g=n(3023),h=n(75358),E=n(14195),b=n(99307),Z=n(90827),x=n(96019);function k(){var e=(0,p.$)().t,t=(0,u.yFU)(),n=t.data;if(t.loading)return j.createElement(x.Z,null);var a=n.statistics,r=a.usersCount,s=a.articlesCount,c=a.authorRevenueTotal,d=a.readerRevenueTotal;return j.createElement("div",null,j.createElement(o.Z,{style:{padding:20,textAlign:"center"},gutter:16,justify:"space-around"},j.createElement(i.Z,{span:12},j.createElement(m.Z,{title:e("users_count"),value:r})),j.createElement(i.Z,{span:12},j.createElement(m.Z,{title:e("articles_count"),value:s})),j.createElement(i.Z,{span:12},j.createElement(m.Z,{title:e("author_revenue_total"),value:c.toFixed(2),suffix:" USD"})),j.createElement(i.Z,{span:12},j.createElement(m.Z,{title:e("reader_revenue_total"),value:d.toFixed(2),suffix:" USD"}))),j.createElement(l.Z,{defaultActiveKey:"revenue"},j.createElement(l.Z.TabPane,{tab:e("platform_revenue"),key:"revenue"},j.createElement(C,null)),j.createElement(l.Z.TabPane,{tab:e("transactions"),key:"transfers"},j.createElement(O,null))))}function C(){var e=(0,u.Jfc)(),t=e.data,n=e.loading,a=(0,p.$)().t;if(n)return j.createElement(x.Z,null);var r=t.revenueChart;try{r=JSON.parse(r)}catch(s){r=[]}return j.createElement("div",null,j.createElement("h3",null,a("revenue_chart")),j.createElement(v.h,{height:250},j.createElement(y.T,{data:r,margin:{top:10,right:30,left:0,bottom:0}},j.createElement("defs",null,j.createElement("linearGradient",{id:"colorUser",x1:"0",y1:"0",x2:"0",y2:"1"},j.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),j.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0}))),j.createElement(g.K,{dataKey:"name"}),j.createElement(h.B,null),j.createElement(E.q,{strokeDasharray:"3 3"}),j.createElement(b.u,null),j.createElement(Z.u,{type:"monotone",dataKey:"value",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUser)"}))))}function O(){var e=(0,p.$)().t,t=(0,u.w$P)(),n=t.data,l=t.loading,m=t.fetchMore;if(l)return j.createElement(x.Z,null);var d=n.transferConnection,v=d.nodes,y=d.pageInfo,g=y.hasNextPage,h=y.endCursor;return j.createElement(a.ZP,{size:"small",itemLayout:"vertical",dataSource:v,loadMore:g&&j.createElement("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"}},j.createElement(c.Z,{loading:l,onClick:function(){m({variables:{after:h}})}},e("load_more"))),renderItem:function(t){var n;return j.createElement(a.ZP.Item,{key:t.traceId},j.createElement(o.Z,{justify:"space-around"},j.createElement(i.Z,{xs:4,sm:4,md:2},j.createElement(s.C,{size:"small",src:null==(n=t.currency)?void 0:n.iconUrl})),j.createElement(i.Z,{xs:0,sm:0,md:8},f()(t.createdAt).format("YYYY-MM-DD HH:mm:SS")),j.createElement(i.Z,{xs:8,sm:8,md:6},t.amount),j.createElement(i.Z,{xs:6,sm:6,md:4},j.createElement(r.Z,{color:"payment_refund"===t.transferType?"magenta":"author_revenue"===t.transferType?"green":"cyan"},e("transfer.transfer_type."+t.transferType))),j.createElement(i.Z,{xs:6,sm:6,md:4},t.snapshotId?j.createElement("a",{href:"https://mixin.one/snapshots/"+t.snapshotId,target:"_blank"},e("transfer.snapshot")):j.createElement("span",null,e("transfer.processing")))))}})}},18446:function(e,t,n){var a=n(90939);e.exports=function(e,t){return a(e,t)}},46700:function(e,t,n){var a={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":15596,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":15596,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=46700}}]);
//# sourceMappingURL=5260-228272cad8409679bc56.chunk.js.map