(function(e){function t(t){for(var r,s,o=t[0],c=t[1],l=t[2],m=0,d=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},i=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/api-mercado-libre/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"212f":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("v-app",[a("v-app-bar",{attrs:{absolute:"",color:"blue lighten-1",dark:"",app:""}},[a("v-app-bar-nav-icon"),a("v-toolbar-title",{staticClass:"text-h4"},[e._v("La tienda de Angie")])],1),a("v-main",[a("router-view")],1)],1)],1)},i=[],s={name:"App",components:{},data:function(){return{}}},o=s,c=a("2877"),l=a("6544"),u=a.n(l),m=a("7496"),d=a("40dc"),f=a("5bc1"),p=a("f6c4"),v=a("2a7f"),h=Object(c["a"])(o,n,i,!1,null,null,null),b=h.exports;u()(h,{VApp:m["a"],VAppBar:d["a"],VAppBarNavIcon:f["a"],VMain:p["a"],VToolbarTitle:v["a"]});var g=a("5530"),_=a("8c4f"),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("Search",{on:{searchResult:e.searchResult}}),a("ItemList",{attrs:{items:e.items}})],1)},C=[],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-container",{staticClass:"d-flex justify-center pa-5 ma-3"},[a("v-text-field",{staticClass:"shrink",attrs:{"hide-details":"","single-line":""},model:{value:e.itemName,callback:function(t){e.itemName=t},expression:"itemName"}}),a("v-btn",{attrs:{color:"blue lighten-1",fab:"",dark:"",small:""},on:{click:e.resetAndSearch}},[a("v-icon",[e._v("mdi-magnify")])],1)],1),a("v-container",{staticClass:"d-flex justify-center pa-3"},[a("v-btn",{attrs:{color:"blue lighten-1 ma-4",fab:"",dark:"",small:""},on:{click:e.backwardItems}},[a("v-icon",[e._v("mdi-minus")])],1),a("v-btn",{attrs:{color:"blue lighten-1 ma-4",fab:"",dark:"",small:""},on:{click:e.forwardItems}},[a("v-icon",[e._v("mdi-plus")])],1)],1)],1)},I=[],V=a("bc3a"),k=a.n(V),x={name:"Search",data:function(){return{itemName:"",limit:50,offset:0,totalItems:0}},methods:{searchItem:function(){var e=this;k.a.get("https://api.mercadolibre.com/sites/MCO/search?q="+this.itemName+"&offset="+this.offset).then((function(t){return e.emitResponse(t)}))},resetAndSearch:function(){this.offset=0,this.searchItem()},emitResponse:function(e){0!=e.data.results.length&&(this.totalItems=e.data.paging.total,this.$emit("searchResult",e))},forwardItems:function(){this.offset+this.limit<this.totalItems&&(this.offset+=this.limit,this.searchItem())},backwardItems:function(){0!=this.offset&&(this.offset-=this.limit,this.searchItem())}}},j=x,O=(a("677f"),a("8336")),N=a("a523"),S=a("132d"),A=a("8654"),T=Object(c["a"])(j,y,I,!1,null,"77d3ea62",null),$=T.exports;u()(T,{VBtn:O["a"],VContainer:N["a"],VIcon:S["a"],VTextField:A["a"]});var R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",e._l(e.items,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",sm:"3"}},[a("ItemCard",{attrs:{item:e}})],1)})),1)],1)},E=[],P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{class:e.hover,on:{click:e.details,mouseover:function(t){e.hover="cardHover"},mouseleave:function(t){e.hover="card"}}},[a("div",{staticClass:"card-col"},[a("div",{staticClass:"card-row"},[a("v-img",{staticClass:"item-image",attrs:{src:e.item.thumbnail}})],1),a("div",{staticClass:"card-row"},[a("v-card-title",[e._v(e._s(e.item.title))])],1),a("div",{staticClass:"card-row"},[a("v-card-subtitle",[e._v(e._s(e.item.address.state_name))])],1),a("div",{staticClass:"card-row"},[a("v-card-text",[e._v(e._s(e.item.price))])],1)])])},H=[],M={name:"ItemCard",props:["item"],methods:{details:function(){this.$router.push({name:"Details",params:{itemId:this.item.id}})}},data:function(){return{hover:"card"}}},B=M,D=(a("f067"),a("b0af")),L=a("99d9"),q=a("adda"),F=Object(c["a"])(B,P,H,!1,null,"66f21a3b",null),J=F.exports;u()(F,{VCard:D["a"],VCardSubtitle:L["a"],VCardText:L["b"],VCardTitle:L["c"],VImg:q["a"]});var z={name:"ItemList",components:{ItemCard:J},props:["items"]},G=z,K=a("62ad"),Q=a("0fd9"),U=Object(c["a"])(G,R,E,!1,null,null,null),W=U.exports;u()(U,{VCol:K["a"],VContainer:N["a"],VRow:Q["a"]});var X={name:"Home",components:{Search:$,ItemList:W},methods:{searchResult:function(e){this.items=e.data.results,this.itemName=e.data.query}},data:function(){return{itemName:"",items:[]}}},Y=X,Z=Object(c["a"])(Y,w,C,!1,null,null,null),ee=Z.exports;u()(Z,{VContainer:N["a"]});var te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"d-flex justify-center pa-5 ma-3"},[a("v-col",[a("v-row",[a("v-img",{attrs:{contain:"",src:this.picture,height:"400px"}})],1)],1),a("v-col",[a("v-card-title",{staticClass:"ma-5"},[e._v(e._s(e.item.price))]),a("v-card-subtitle",[e._v(e._s(e.item.title))]),a("v-card-subtitle",[e._v(e._s(e.seller.nickname))])],1)],1)},ae=[],re={name:"Details",props:["itemId"],data:function(){return{item:[],seller:"",picture:""}},methods:{sellerName:function(e){var t=this;k.a.get("https://api.mercadolibre.com/users/"+e).then((function(e){return t.seller=e.data}))}},mounted:function(){var e=this;k.a.get("https://api.mercadolibre.com/items/"+this.itemId).then((function(t){e.item=t.data,e.sellerName(e.item.seller_id),e.picture=e.item.pictures[0].url}))}},ne=re,ie=Object(c["a"])(ne,te,ae,!1,null,null,null),se=ie.exports;u()(ie,{VCard:D["a"],VCardSubtitle:L["a"],VCardTitle:L["c"],VCol:K["a"],VImg:q["a"],VRow:Q["a"]}),r["a"].use(_["a"]);var oe=new _["a"]({routes:[{path:"*",redirect:"/Home"},{path:"/",redirect:"/Home"},{path:"/Home",name:"Home",component:ee},{path:"/Details",name:"Details",component:se,props:function(e){return Object(g["a"])({},e.params)}}]}),ce=a("f309");r["a"].use(ce["a"]);var le=new ce["a"]({}),ue=a("9483");Object(ue["a"])("".concat("/api-mercado-libre/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({vuetify:le,router:oe,render:function(e){return e(b)}}).$mount("#app")},"677f":function(e,t,a){"use strict";var r=a("212f"),n=a.n(r);n.a},"942c":function(e,t,a){},f067:function(e,t,a){"use strict";var r=a("942c"),n=a.n(r);n.a}});
//# sourceMappingURL=app.bbd0bad3.js.map