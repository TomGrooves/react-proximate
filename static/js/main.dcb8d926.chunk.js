(this["webpackJsonpproximate-app"]=this["webpackJsonpproximate-app"]||[]).push([[0],{1:function(e,t,a){e.exports={topSection:"content_topSection__1HDm7",topNav:"content_topNav__qZBKs",contentContainer:"content_contentContainer__2MRzX",contentHeading:"content_contentHeading__lIt-u",aLink:"content_aLink__3G1ik",aLinkLeft:"content_aLinkLeft__ymbvd",iconRound:"content_iconRound__2YTJw",iconContainer:"content_iconContainer__35sDu",icon:"content_icon__2zkkj",cycleContainer:"content_cycleContainer__y_N1P",iconRoundLeft:"content_iconRoundLeft__1QVht",iconRoundRight:"content_iconRoundRight__2Smr9",modal:"content_modal__NS969",labelLeft:"content_labelLeft__13qWl",labelRight:"content_labelRight__2dPRu",bottomSection:"content_bottomSection__1hQKw",bottomRange:"content_bottomRange__36hxO",bottomButton:"content_bottomButton__30Cqf",mainLogo:"content_mainLogo__3XNOU",aboutContainer:"content_aboutContainer__3OXGE",aboutHeading:"content_aboutHeading__1o71u",aboutContent:"content_aboutContent__2NDOf",aboutList:"content_aboutList__2qJ8B"}},16:function(e,t,a){e.exports={container:"modal_container__2qZdF",overlay:"modal_overlay__18yj7",fadeIn:"modal_fadeIn__1UCin",dialog:"modal_dialog__28t_i",movein:"modal_movein__PraGP",icon:"modal_icon__1tHuv",fadein:"modal_fadein__2P2iF"}},31:function(e,t,a){e.exports=a.p+"static/media/proximate-side-white.c26aa9a9.png"},33:function(e,t,a){e.exports=a(50)},38:function(e,t,a){},40:function(e,t,a){},47:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(13),r=a.n(c),i=(a(38),a(10)),l=a.n(i),s=a(15),m=a(9),u=(a(40),a(32)),p=a(12),h=a(16),d=a.n(h),g=a(11),f=o.a.createContext();function b(e){var t=e.children,a=Object(n.useRef)(),c=Object(n.useState)(),r=Object(m.a)(c,2),i=r[0],l=r[1];return Object(n.useEffect)((function(){l(a.current)}),[]),o.a.createElement("div",{className:d.a.container},o.a.createElement(f.Provider,{value:i},t),o.a.createElement("div",{ref:a}))}function v(e){var t=e.onClose,a=e.children,c=Object(u.a)(e,["onClose","children"]),i=Object(n.useContext)(f);return i?r.a.createPortal(o.a.createElement("div",{className:d.a.overlay},o.a.createElement("div",Object.assign({className:d.a.dialog},c),o.a.createElement(g.a,{className:d.a.icon,icon:p.d,onClick:t}),a)),i):null}var _=a(1),E=a.n(_),w=a(23),N=a(29),y=a(55),k=a(57),j=a(52),x=a(53),C=a(54),O=a(56),L=a(6),R=a.n(L),S=(a(46),a(47),a(25)),P=a.n(S),M=a(26),q=a.n(M);var W=function(e){console.log(e);var t=e.myPos,a=e.targetPos,n=t.lat,c=t.lon,r=a.lat,i=a.lon,l=e.myLocation,s=e.targetLocation,m=R.a.icon({iconUrl:P.a,shadowUrl:q.a,iconAnchor:[12,40],shadowSize:[28,55],shadowAnchor:[10,50]});function u(e){return e*(Math.PI/180)}R.a.Marker.prototype.options.icon=m;var p=Math.round(function(e,t,a,n){var o=u(a-e),c=u(n-t),r=Math.sin(o/2)*Math.sin(o/2)+Math.cos(u(e))*Math.cos(u(a))*Math.sin(c/2)*Math.sin(c/2);return 6371*(2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r)))}(n,c,r,i));return o.a.createElement(y.a,{center:t,zoom:13},o.a.createElement(k.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),o.a.createElement(j.a,{position:t},o.a.createElement(x.a,{permanent:!0},l),o.a.createElement(C.a,null,"From ",l," to ",s," there are roughly ",p," km ")),o.a.createElement(j.a,{position:a},o.a.createElement(x.a,{permanent:!0},s),o.a.createElement(C.a,null,"From ",s," to ",l," there are roughly ",p," km")),o.a.createElement(O.a,{key:"polyline",positions:[[n,c],[r,i]],color:"green",weight:"3"}))};var A=function(e){console.log(e);var t=[],a=Object(n.useState)(0),c=Object(m.a)(a,2),r=c[0],i=c[1],u=Object(n.useState)(!1),h=Object(m.a)(u,2),d=h[0],f=h[1],_=Object(n.useState)(),y=Object(m.a)(_,2),k=y[0],j=y[1],x=Object(n.useState)(),C=Object(m.a)(x,2),O=C[0],L=C[1],R={lat:e.myLat,lon:e.myLon},S=e.area.road+" - "+e.area.city+", "+e.area.suburb;function P(e){-1===e&&(0===r?console.log("Reached the bottom"):i(r+e)),1===e&&(r<t.length-1?i(r+e):console.log("Reached the top"))}var M=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n,c,r,i,s,m;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=coordinates&format=json&titles=".concat(t),e.prev=1,e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,r=Object.entries(c),i=Object.entries(r[1][1].pages),s=i[0][1].coordinates[0].lat,m=i[0][1].coordinates[0].lon,L({lat:s,lon:m}),console.log(i),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),console.log(e.t0);case 20:j(o.a.createElement(W,null)),f(!0);case 22:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n,o,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&format=json&exintro=&pageids=".concat(t),e.prev=1,e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:o=e.sent,c=Object.entries(o),r=Object.entries(c[2][1].pages),i={extract:r[0][1].extract,title:r[0][1].title},j(i),f(!0),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return e.apiData&&e.apiData.query&&e.apiData.query.pages&&(t=Object.entries(e.apiData.query.pages).reduce((function(e,t){return t[1].thumbnail&&t[1].thumbnail.width>=2e3&&e.push(o.a.createElement(b,null,o.a.createElement("div",{className:E.a.contentContainer,key:t[1].pageid,style:{backgroundImage:"url( ".concat(t[1].thumbnail.source,")")}},o.a.createElement("div",{className:E.a.contentNavigator},o.a.createElement("h2",{className:E.a.contentHeading}," ",t[1].title," "),o.a.createElement("div",{className:E.a.iconContainer},o.a.createElement("div",{onClick:function(){return function(){var e={about:o.a.createElement("div",{className:E.a.aboutContainer},o.a.createElement("h3",{className:E.a.aboutHeading},"About"),o.a.createElement("p",null,"Proximate can help you find nearby points of interest, within a 10 km range. Browse through high quality images of all the places near you, and when something peaks your interest, you can get a quick exempt of the place or go straight to the wikipedia site for more info"),o.a.createElement("p",{className:E.a.aboutContent},"This app would not have been possible without all the awesome work made by:"),o.a.createElement("div",{className:E.a.aboutContent},o.a.createElement("ul",null,o.a.createElement("li",{className:E.a.aboutList},"Nominatim: ",o.a.createElement("a",{href:"http://nominatim.org/"},"http://nominatim.org/")),o.a.createElement("li",{className:E.a.aboutList},"Wikidata: ",o.a.createElement("a",{href:"https://www.wikidata.org/wiki/Wikidata:Main_Page"},"https://www.wikidata.org/")),o.a.createElement("li",{className:E.a.aboutList},"OpenStreetMap: ",o.a.createElement("a",{href:"https://www.openstreetmap.org/copyright"},"https://www.openstreetmap.org/")),o.a.createElement("li",{className:E.a.aboutList},"React-leaflet: ",o.a.createElement("a",{href:"https://react-leaflet.js.org/"},"https://react-leaflet.js.org/")),o.a.createElement("li",{className:E.a.aboutList},"Leaflet: ",o.a.createElement("a",{href:"https://leafletjs.com/"},"https://leafletjs.com/")),o.a.createElement("li",{className:E.a.aboutList},"FontAwesome: ",o.a.createElement("a",{href:"https://fontawesome.com/"},"https://fontawesome.com/")))))};j(e),f(!0)}()},className:E.a.iconRound},o.a.createElement(g.a,{className:E.a.icon,icon:w.b})),o.a.createElement("div",{onClick:function(){return M(t[1].title)},className:E.a.iconRound},o.a.createElement(g.a,{className:E.a.icon,icon:w.a})),o.a.createElement("div",{onClick:function(){return q(t[1].pageid)},className:E.a.iconRound},o.a.createElement(g.a,{className:E.a.icon,icon:p.c})),k&&d&&o.a.createElement(v,{onClose:function(){return f(!1)}},!k.about&&!k.extract&&o.a.createElement(W,{myPos:R,targetPos:O,myLocation:S,targetLocation:t[1].title}),!k.about&&k.extract&&o.a.createElement(N.a,{content:k.extract}),k.about),o.a.createElement("a",{href:"/react-proximate",className:E.a.iconRound},o.a.createElement(g.a,{className:E.a.icon,icon:p.e}))),o.a.createElement("div",{className:E.a.linkContainer},o.a.createElement("a",{key:t[1].pageid+1,className:E.a.aLinkLeft,href:"http://en.wikipedia.org/?curid="+t[1].pageid},"Read more |"),o.a.createElement("p",{key:t[1].pageid+2,className:E.a.aLink,onClick:function(){return M(t[1].title)},curser:"pointer"}," Get directions")),o.a.createElement("div",{className:E.a.cycleContainer},o.a.createElement("div",{onClick:function(){return P(-1)},className:E.a.iconRoundLeft},o.a.createElement(g.a,{className:E.a.icon,icon:p.a})),o.a.createElement("div",{onClick:function(){return P(1)},className:E.a.iconRoundRight},o.a.createElement(g.a,{className:E.a.icon,icon:p.b}))))))),e}),[])),t[r]},B=a(31),D=a.n(B);var H=function(e){return e.area?o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:E.a.topSection},o.a.createElement("nav",{className:E.a.topNav},o.a.createElement("img",{className:E.a.mainLogo,alt:"white-proxmate-logo",src:D.a}),o.a.createElement("div",{className:E.a.topIcons})),o.a.createElement("h2",null,e.area.city),o.a.createElement("h4",null,"Within ",e.range," km of you is")),o.a.createElement("form",{className:E.a.bottomSection},o.a.createElement("input",{onChange:e.stateChange,value:e.range,id:"rangeSlider",className:E.a.bottomRange,type:"range",min:"1",max:"10"}),o.a.createElement("div",{className:E.a.labelContainer},o.a.createElement("label",{className:E.a.labelLeft},"1 Km"),o.a.createElement("label",{className:E.a.labelRight},"10 Km")),o.a.createElement("button",{onClick:e.fetchAll,className:E.a.bottomButton,value:"Search",type:"button"},"Search"))):o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:E.a.topSection},o.a.createElement("nav",{className:E.a.topNav},o.a.createElement("div",{className:E.a.topIcons})),o.a.createElement("h4",null,"Within ",e.range," km of you is")),o.a.createElement("form",{className:E.a.bottomSection},o.a.createElement("input",{onChange:e.stateChange,value:e.range,id:"rangeSlider",className:E.a.bottomRange,type:"range",min:"1",max:"10"}),o.a.createElement("div",{className:E.a.labelContainer},o.a.createElement("label",{className:E.a.labelLeft},"1 Km"),o.a.createElement("label",{className:E.a.labelRight},"10 Km")),o.a.createElement("button",{onClick:e.fetchAll,className:E.a.bottomButton,value:"Search",type:"button"},"Search")))};var I=function(){var e=null,t=null,a=Object(n.useState)(10),c=Object(m.a)(a,2),r=c[0],i=c[1],u=Object(n.useState)(null),p=Object(m.a)(u,2),h=p[0],d=p[1],g=Object(n.useState)(null),f=Object(m.a)(g,2),b=f[0],v=f[1],_=Object(n.useState)(null),E=Object(m.a)(_,2),w=E[0],N=E[1],y=Object(n.useState)(null),k=Object(m.a)(y,2),j=k[0],x=k[1],C=function(){var a=Object(s.a)(l.a.mark((function a(){var n,o,c,r;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n="https://nominatim.openstreetmap.org/reverse?lat=".concat(t,"&lon=").concat(e,"&format=json"),a.prev=1,a.next=4,fetch(n);case 4:return o=a.sent,a.next=7,o.json();case 7:return c=a.sent,r={city:c.address.city,suburb:c.address.suburb,road:c.address.road},a.next=11,v(r);case 11:console.log(c),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(1),console.log(a.t0);case 17:case"end":return a.stop()}}),a,null,[[1,14]])})));return function(){return a.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://en.wikipedia.org/w/api.php?&format=json&origin=*&action=query&generator=geosearch&prop=coordinates|pageimages&piprop=thumbnail&pithumbsize=2000&ggscoord=".concat(w,"|").concat(j,"&ggsradius=").concat(1e3*r,"&ggslimit=50"),e.prev=1,e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,d(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return null!==w&&void 0!==w&&""!==w||navigator.geolocation.getCurrentPosition((function(a){var n=a.coords;t=n.latitude,e=n.longitude,console.log("lat is "+t+"long is "+e);var o=e;N(t),x(o),C()}),(function(e){console.log(e)})),null===h||void 0===h?o.a.createElement(H,{area:b,stateChange:function(e){i(e.target.value),console.log(r)},range:r,fetchAll:function(){O()}}):o.a.createElement(A,{apiData:h,area:b,myLon:j,myLat:w})},F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(I,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-proximate",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-proximate","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):U(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):U(t,e)}))}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.dcb8d926.chunk.js.map