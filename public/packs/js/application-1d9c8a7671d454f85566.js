"use strict";(self.webpackChunkprsdigg=self.webpackChunkprsdigg||[]).push([[1034],{96019:function(e,t,n){n.d(t,{Z:function(){return l}});n(96498);var r=n(11382),a=n(67294);function l(){return a.createElement("div",{style:{width:"100%",padding:"2rem",textAlign:"center"}},a.createElement(r.Z,null))}},74669:function(e,t,n){n.d(t,{Z:function(){return m}});n(945);var r=n(3785),a=(n(96498),n(11382)),l=n(6799),c=n(67294),i=n(8134);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(o){i=!0,a=o}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e){var t=e.children,n=(0,i.$)().t,u=o((0,c.useState)(!1),2),m=u[0],s=u[1],f=o((0,c.useState)(!1),2),d=f[0],E=f[1],g=(0,l.kU)().messenger;return c.createElement(c.Fragment,null,c.cloneElement(t,{onClick:function(){return s(!0)}}),c.createElement(r.Z,{title:n("connect_wallet"),centered:!0,maskClosable:!0,visible:m,onCancel:function(){s(!1),E(!1)},footer:null},c.createElement(a.Z,{spinning:d},c.createElement("div",{className:"flex items-center justify-center w-full py-2 text-lg bg-gray-100 cursor-pointer rounded-md space-x-2",onClick:function(){E(!0),location.replace("/login?return_to="+encodeURIComponent(location.href))}},"mixin"===g?c.createElement(c.Fragment,null,c.createElement("img",{className:"w-10 h-10",src:(0,l.hp)("mixin-logo.png")}),c.createElement("span",null,"Mixin Messenger")):c.createElement("img",{className:"h-10",src:(0,l.hp)("links-logo.png")})))))}},62436:function(e,t,n){n.d(t,{cm:function(){return C},Kj:function(){return c},HF:function(){return a},aQ:function(){return i},E8:function(){return l},sE:function(){return r},yL:function(){return Z}});var r="https://github.com/baizhiheizi/prsdigg",a="https://mixin-images.zeromesh.net/bFHtb9v2QQTgAFrZiDzNQgo7mbaFoRhnOcRf0pCU_CFCGgYMNSbi8E3D0NVW5u1AxZD2kI1MtmLLb2tqE4P4jw=s256",l="\u9876\u74dc\u74dc\uff08PRSDigg\uff09\u5b98\u65b9\u4e2d\u6587\u793e\u533a\uff0c\u6b22\u8fce\u52a0\u5165\u8ba8\u8bba\u4efb\u4f55\u9876\u74dc\u74dc\u76f8\u5173\u7684\u4e8b\u60c5",c="74c6a598-345b-46ca-891f-b15c3139557b",i="d9c39065-5021-454b-b2f5-bd95116e906d",o=(n(70909),n(13013)),u=(n(10995),n(99210)),m=(n(58481),n(48086)),s=n(33182),f=n(99165),d=n(6799),E=n(20640),g=n.n(E),p=n(44276),h=n(67294),y=n(8134),b=n(46616),k=n(87385),v=n(16573),x=n(1020),Z=function(e,t,n,r){var a=location.origin+"/tags/"+e.id,l={action:a,app_id:n,description:"x "+e.articlesCount,icon_url:""+(0,d.hp)(r||"logo.png"),title:"#"+e.name};w(a,l,t)},w=function(e,t,n){n?location.replace("mixin://send?category=app_card&data="+encodeURIComponent((0,p.cv)(JSON.stringify(t)))):(g()(e),m.ZP.success("Copied"))};function C(e){var t=(0,d.FS)().mixinEnv,n=(0,y.$)().t,r=(0,d.kU)(),a=r.logoFile,l=r.twitterAccount,c=r.appName,i=r.appId,E=e.article,Z=e.children,w=location.origin+"/articles/"+E.uuid;return h.createElement(o.Z,{trigger:["click","hover"],overlay:h.createElement(u.Z,null,t&&h.createElement(u.Z.Item,{key:"mixin",onClick:function(){!function(e,t,n){var r={action:location.origin+"/articles/"+e.uuid,app_id:t,description:""+e.author.name,icon_url:""+(0,d.hp)(n||"logo.png"),title:e.title.slice(0,36)};location.replace("mixin://send?category=app_card&data="+encodeURIComponent((0,p.cv)(JSON.stringify(r))))}(E,i,a)}},h.createElement("div",{className:"flex items-center space-x-2"},h.createElement(s.Z,null),h.createElement("span",null,n("mixin_contact")))),h.createElement(u.Z.Item,{key:"twittier"},h.createElement(b.Z,{url:w,title:E.title,hashtags:E.tagNames,via:l},h.createElement("div",{className:"flex items-center space-x-2"},h.createElement(k.Z,{size:16,round:!0}),h.createElement("span",null,"Twitter")))),h.createElement(u.Z.Item,{key:"facebook"},h.createElement(v.Z,{url:w,quote:E.title,hashtag:c},h.createElement("div",{className:"flex items-center space-x-2"},h.createElement(x.Z,{size:16,round:!0}),h.createElement("span",null,"Facebook")))),h.createElement(u.Z.Item,{key:"url",onClick:function(){g()(w),m.ZP.success(n("copied"))}},h.createElement("div",{className:"flex items-center space-x-2"},h.createElement(f.Z,null),h.createElement("span",null,n("copy_url")))))},Z)}},17447:function(e,t,n){var r=n(98196),a=n.n(r),l=(n(43586),n(97183)),c=(n(41539),n(88674),n(17727),n(78783),n(8628),n(97314),n(96290),n(77479),n(33948),n(6799)),i=n(32215),o=n(67294),u=n(73727),m=(n(88989),n(97532)),s=(n(67167),n(71577)),f=n(42762),d=n(60604),E=n(39387),g=n(8134),p=n(5977),h=(n(13062),n(71230)),y=(n(1792),n(79166)),b=(n(10995),n(99210)),k=(n(89032),n(15746)),v=n(78874),x=n(24557),Z=n(47438),w=n(62436),C=n(74669);function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(o){i=!0,a=o}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function I(e){var t=(0,c.xJ)().currentUser,n=(0,c.kU)().logoFile,r=e.mode,a=e.setDrawerVisible,l=(0,g.$)(),i=l.t,m=l.i18n,s=N((0,E.uwN)({update:function(e,t){var n=t.data.createArticle.uuid;location.replace("/dashboard/articles/"+n+"/edit")}}),1)[0],f=function(){a&&a(!1)};return o.createElement(h.Z,{justify:"center",style:"horizontal"===r?{flexWrap:"nowrap"}:{flexDirection:"column",textAlign:"center"}},o.createElement(k.Z,null,t&&"vertical"===r?o.createElement("a",{className:"flex items-center justify-center block h-full m-4",href:"/dashboard"},o.createElement("img",{className:"w-10 h-10 rounded-full",src:t.avatar})):o.createElement(u.rU,{className:"flex items-center justify-center h-full mx-4",to:"/",replace:!0},o.createElement("img",{className:"w-10 h-10",src:(0,c.hp)(n)}))),o.createElement(k.Z,{flex:1},o.createElement(b.Z,{theme:"light",mode:r,selectable:!1},o.createElement(b.Z.Item,{key:"read",onClick:f},o.createElement(u.rU,{to:"/",replace:!0},i("read"))),o.createElement(b.Z.Item,{key:"write",onClick:f},t?o.createElement("a",{onClick:function(){return s()}},i("write")):o.createElement(C.Z,null,o.createElement("a",null,i("write")))),o.createElement(b.Z.Item,{key:"search",onClick:f},o.createElement(u.rU,{to:"/search",replace:!0},i("search"))),o.createElement(b.Z.Item,{key:"rules",onClick:f},o.createElement(u.rU,{to:"/rules",replace:!0},i("rules"))),o.createElement(b.Z.Item,{key:"fair",onClick:f},o.createElement(u.rU,{to:"/fair",replace:!0},i("fair"))),o.createElement(b.Z.Item,{key:"open_source",onClick:f},o.createElement("a",{href:w.sE,target:"_blank"},o.createElement(v.Z,{className:"mr-2"}),i("open_source"))))),o.createElement(k.Z,{flex:1},o.createElement(b.Z,{theme:"light",mode:r,selectable:!1},m.languages.length>1&&o.createElement(o.Fragment,null,o.createElement(b.Z.SubMenu,{className:"ml-auto",key:"global",title:"horizontal"===r?o.createElement(x.Z,null):m.language.includes("en")?"Language":m.language.includes("ja")?"\u8a00\u8a9e":"\u8bed\u8a00"},m.languages.map((function(e){return e.includes("CN")?o.createElement(b.Z.Item,{key:e},o.createElement("a",{onClick:function(){return m.changeLanguage("zh-CN")}},"\u4e2d\u6587")):e.includes("en")?o.createElement(b.Z.Item,{key:e},o.createElement("a",{onClick:function(){return m.changeLanguage("en")}},"EN")):e.includes("ja")?o.createElement(b.Z.Item,{key:e},o.createElement("a",{onClick:function(){return m.changeLanguage("ja")}},"\u65e5\u672c\u8a9e")):void 0})))),t?o.createElement(o.Fragment,null,o.createElement(b.Z.Item,{className:m.languages.length<2&&"ml-auto",key:"notifications",onClick:f},o.createElement(y.Z,{dot:t.unreadNotificationsCount>0},o.createElement("a",{href:"/dashboard/notifications"},"horizontal"===r?o.createElement(Z.Z,null):i("notifications_manage")))),o.createElement(b.Z.Item,{key:"dashboard",onClick:f},o.createElement("a",{href:"/dashboard",target:"_blank"},i("dashboard"))),o.createElement(b.Z.Item,{key:"logout",onClick:f},o.createElement("a",{href:"/logout"},i("logout")))):o.createElement(b.Z.Item,{key:"login",onClick:f},o.createElement(C.Z,null,o.createElement("a",null,i("connect_wallet")))))))}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(o){i=!0,a=o}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j(){var e=(0,p.TH)(),t=(0,c.xJ)().currentUser,n=(0,g.$)().i18n,r=S((0,E.IwS)(),1)[0],a=(0,p.k6)(),i=(0,c.kU)(),u=i.appName,h=i.logoFile,y=(0,c.FS)().mixinEnv,b=S((0,o.useState)(!1),2),k=b[0],v=b[1],x=S((0,o.useState)("/"!==e.pathname),2),Z=x[0],w=x[1];return(0,o.useEffect)((function(){w("/"!==e.pathname)}),[e.pathname]),(0,o.useEffect)((function(){t&&(t.locale!==n.language&&r({variables:{input:{locale:n.language}}}),n.on("languageChanged",(function(e){r({variables:{input:{locale:e}}})})))}),[]),o.createElement(o.Fragment,null,o.createElement("div",{className:"sticky top-0 z-50 flex items-center px-2 py-1 bg-white md:hidden shadow-sm"},Z&&o.createElement(d.Z,{className:"text-gray-500",size:"1.5rem",onClick:function(){a.length<=1?a.replace("/"):a.goBack()}}),o.createElement("div",{className:"flex items-center",onClick:function(){return a.replace("/")}},o.createElement("img",{className:"w-8 h-8 mx-2",src:(0,c.hp)(h)}),o.createElement("span",{className:"text-lg font-semibold"},u)),o.createElement(s.Z,{className:"ml-auto text-gray-500",type:"link",size:"large",onClick:function(){return v(!0)},icon:o.createElement(f.Z,null)}),o.createElement("div",{className:y&&"w-24"})),o.createElement(m.Z,{bodyStyle:{padding:0},visible:k,closable:!1,onClose:function(){return v(!1)},placement:"right"},o.createElement("div",{className:"mt-12"},o.createElement(I,{mode:"vertical",setDrawerVisible:v}))),o.createElement(l.Z.Header,{className:"hidden md:block",style:{WebkitBoxShadow:"0 2px 8px #f0f1f2",background:"#fff",boxShadow:"0 2px 8px #f0f1f2",padding:0,zIndex:10}},o.createElement(I,{mode:"horizontal"})))}var U=n(96019),F=o.lazy((function(){return Promise.all([n.e(2161),n.e(2235),n.e(1762),n.e(6581),n.e(1404),n.e(477),n.e(7375),n.e(5077),n.e(4871),n.e(3013),n.e(2737),n.e(3222),n.e(1614),n.e(1773)]).then(n.bind(n,78428))})),_=o.lazy((function(){return Promise.all([n.e(2161),n.e(2235),n.e(1762),n.e(6581),n.e(1404),n.e(477),n.e(7375),n.e(4871),n.e(466),n.e(2525)]).then(n.bind(n,67013))})),O=o.lazy((function(){return Promise.all([n.e(2161),n.e(2235),n.e(1762),n.e(6581),n.e(1404),n.e(5077),n.e(1786),n.e(5315),n.e(5260)]).then(n.bind(n,36515))})),P=o.lazy((function(){return Promise.all([n.e(2161),n.e(2235),n.e(1762),n.e(6581),n.e(1404),n.e(477),n.e(7375),n.e(8720),n.e(466),n.e(7582)]).then(n.bind(n,67582))})),W=o.lazy((function(){return Promise.all([n.e(3013),n.e(2123)]).then(n.bind(n,14103))})),L=o.lazy((function(){return n.e(3748).then(n.bind(n,83748))})),M=o.lazy((function(){return Promise.all([n.e(2161),n.e(2235),n.e(1762),n.e(6581),n.e(477),n.e(7375),n.e(813),n.e(466),n.e(4533)]).then(n.bind(n,35132))})),D=o.lazy((function(){return Promise.all([n.e(2161),n.e(2235),n.e(1762),n.e(6581),n.e(1404),n.e(477),n.e(7375),n.e(5077),n.e(4467),n.e(2240)]).then(n.bind(n,21419))}));function T(){return o.createElement(o.Fragment,null,o.createElement(o.Suspense,{fallback:o.createElement(U.Z,null)},o.createElement(p.rs,null,o.createElement(p.AW,{path:"/",exact:!0},o.createElement(P,null)),o.createElement(p.AW,{path:"/articles/:uuid",exact:!0},o.createElement(F,null)),o.createElement(p.AW,{path:"/articles",exact:!0},o.createElement(_,null)),o.createElement(p.AW,{path:"/users/:mixinId",exact:!0},o.createElement(D,null)),o.createElement(p.AW,{path:"/search",exact:!0},o.createElement(M,null)),o.createElement(p.AW,{path:"/rules",exact:!0},o.createElement(L,null)),o.createElement(p.AW,{path:"/fair",exact:!0},o.createElement(O,null)),o.createElement(p.AW,null,o.createElement(W,null)))))}a().register({ApplicationApp:function(e){return(0,i.T)(e.availableLocales),o.createElement(c.m1,e,o.createElement(u.VK,null,o.createElement(l.Z,null,o.createElement(j,null),o.createElement(l.Z.Content,{className:"p-4 bg-white"},o.createElement("div",{className:"flex justify-center"},o.createElement("div",{className:"w-full xl:max-w-5xl"},o.createElement(T,null)))))))}})}},function(e){e.O(0,[8892,4512,5191,2324,2909,2215],(function(){return t=17447,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=application-1d9c8a7671d454f85566.js.map