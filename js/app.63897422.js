(function(e){function t(t){for(var r,a,l=t[0],u=t[1],s=t[2],d=0,p=[];d<l.length;d++)a=l[d],i[a]&&p.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==i[u]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1987:function(e,t,n){"use strict";var r=n("5a27"),i=n.n(r);i.a},"45db":function(e,t,n){"use strict";var r=n("95ac"),i=n.n(r);i.a},"4dcb":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.IsRouterAlive?n("router-view"):e._e()],1)},o=[],a={name:"app",provide:function(){return{reload:this.reload}},data:function(){return{IsRouterAlive:!0}},methods:{reload:function(){this.IsRouterAlive=!1,this.$nextTick(function(){this.IsRouterAlive=!0})}}},l=a,u=n("2877"),s=Object(u["a"])(l,i,o,!1,null,null,null),c=s.exports,d=(n("4dcb"),n("a7fe"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("swiper",{attrs:{options:e.swiperOption}},[n("swiper-slide",[n("Hello")],1),n("swiper-slide",[e._v("I'm Slide 2")]),n("swiper-slide",[e._v("I'm Slide 3")]),n("swiper-slide",[e._v("I'm Slide 4")]),n("swiper-slide",[e._v("I'm Slide 5")]),n("swiper-slide",[e._v("I'm Slide 6")]),n("swiper-slide",[e._v("I'm Slide 7")])],1)},f=[],v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello-div"},[n("div",{staticClass:"hello"},[e._v("\n        Hello!\n    ")]),n("div",{staticClass:"face"},[n("div",{staticClass:"eyes"})])])}],m={name:"hello"},w=m,b=(n("1987"),Object(u["a"])(w,v,h,!1,null,"fc6c1fa6",null)),_=b.exports,y=(n("dfa4"),n("7212")),O={name:"index",components:{Hello:_,swiper:y["swiper"],swiperSlide:y["swiperSlide"]},data:function(){return{swiperOption:{direction:"vertical"}}}},S=O,g=(n("45db"),Object(u["a"])(S,p,f,!1,null,null,null)),x=g.exports;r["a"].use(d["a"]);var j=new d["a"]({routes:[{path:"/",name:"Index",component:x}]});r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(c)},router:j}).$mount("#app")},"5a27":function(e,t,n){},"95ac":function(e,t,n){},a7fe:function(e,t){var n=function(){var e=document.documentElement,t=document.querySelector("#app").clientWidth;t&&(e.style.fontSize=t/750*100+"px")};if(document.addEventListener){var r="orientationchange"in window?"orientationchange":"resize";window.addEventListener(r,n,!1),document.addEventListener("DOMContentLoaded",n,!1),n()}}});
//# sourceMappingURL=app.63897422.js.map