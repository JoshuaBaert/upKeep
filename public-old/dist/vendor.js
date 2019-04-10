(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~app"],{

/***/ "./node_modules/core-js/client/shim.min.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/client/shim.min.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * core-js 2.6.5
 * https://github.com/zloirock/core-js
 * License: http://rock.mit-license.org
 * © 2019 Denis Pushkarev
 */
!function(e,i,Jt){"use strict";!function(r){var e={};function __webpack_require__(t){if(e[t])return e[t].exports;var n=e[t]={i:t,l:!1,exports:{}};return r[t].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=r,__webpack_require__.c=e,__webpack_require__.d=function(t,n,r){__webpack_require__.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},__webpack_require__.n=function(t){var n=t&&t.__esModule?function getDefault(){return t["default"]}:function getModuleExports(){return t};return __webpack_require__.d(n,"a",n),n},__webpack_require__.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=129)}([function(t,n,r){var v=r(2),g=r(26),y=r(11),d=r(12),b=r(18),_="prototype",S=function(t,n,r){var e,i,o,u,c=t&S.F,a=t&S.G,f=t&S.P,s=t&S.B,l=a?v:t&S.S?v[n]||(v[n]={}):(v[n]||{})[_],h=a?g:g[n]||(g[n]={}),p=h[_]||(h[_]={});for(e in a&&(r=n),r)o=((i=!c&&l&&l[e]!==Jt)?l:r)[e],u=s&&i?b(o,v):f&&"function"==typeof o?b(Function.call,o):o,l&&d(l,e,o,t&S.U),h[e]!=o&&y(h,e,u),f&&p[e]!=o&&(p[e]=o)};v.core=g,S.F=1,S.G=2,S.S=4,S.P=8,S.B=16,S.W=32,S.U=64,S.R=128,t.exports=S},function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof i&&(i=r)},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(47)("wks"),i=r(33),o=r(2).Symbol,u="function"==typeof o;(t.exports=function(t){return e[t]||(e[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=e},function(t,n,r){var e=r(20),i=Math.min;t.exports=function(t){return 0<t?i(e(t),9007199254740991):0}},function(t,n,r){t.exports=!r(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,r){var i=r(1),o=r(93),u=r(22),c=Object.defineProperty;n.f=r(7)?Object.defineProperty:function defineProperty(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(23);t.exports=function(t){return Object(e(t))}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){var e=r(8),i=r(32);t.exports=r(7)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var o=r(2),u=r(11),c=r(14),a=r(33)("src"),e=r(131),i="toString",f=(""+e).split(i);r(26).inspectSource=function(t){return e.call(t)},(t.exports=function(t,n,r,e){var i="function"==typeof r;i&&(c(r,"name")||u(r,"name",n)),t[n]!==r&&(i&&(c(r,a)||u(r,a,t[n]?""+t[n]:f.join(String(n)))),t===o?t[n]=r:e?t[n]?t[n]=r:u(t,n,r):(delete t[n],u(t,n,r)))})(Function.prototype,i,function toString(){return"function"==typeof this&&this[a]||e.call(this)})},function(t,n,r){var e=r(0),i=r(3),u=r(23),c=/"/g,o=function(t,n,r,e){var i=String(u(t)),o="<"+n;return""!==r&&(o+=" "+r+'="'+String(e).replace(c,"&quot;")+'"'),o+">"+i+"</"+n+">"};t.exports=function(n,t){var r={};r[n]=t(o),e(e.P+e.F*i(function(){var t=""[n]('"');return t!==t.toLowerCase()||3<t.split('"').length}),"String",r)}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(48),i=r(23);t.exports=function(t){return e(i(t))}},function(t,n,r){var e=r(49),i=r(32),o=r(15),u=r(22),c=r(14),a=r(93),f=Object.getOwnPropertyDescriptor;n.f=r(7)?f:function getOwnPropertyDescriptor(t,n){if(t=o(t),n=u(n,!0),a)try{return f(t,n)}catch(r){}if(c(t,n))return i(!e.f.call(t,n),t[n])}},function(t,n,r){var e=r(14),i=r(9),o=r(68)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),e(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,r){var o=r(10);t.exports=function(e,i,t){if(o(e),i===Jt)return e;switch(t){case 1:return function(t){return e.call(i,t)};case 2:return function(t,n){return e.call(i,t,n)};case 3:return function(t,n,r){return e.call(i,t,n,r)}}return function(){return e.apply(i,arguments)}}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?e:r)(t)}},function(t,n,r){var e=r(3);t.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},function(t,n,r){var i=r(4);t.exports=function(t,n){if(!i(t))return t;var r,e;if(n&&"function"==typeof(r=t.toString)&&!i(e=r.call(t)))return e;if("function"==typeof(r=t.valueOf)&&!i(e=r.call(t)))return e;if(!n&&"function"==typeof(r=t.toString)&&!i(e=r.call(t)))return e;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t){if(t==Jt)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){var i=r(0),o=r(26),u=r(3);t.exports=function(t,n){var r=(o.Object||{})[t]||Object[t],e={};e[t]=n(r),i(i.S+i.F*u(function(){r(1)}),"Object",e)}},function(t,n,r){var _=r(18),S=r(48),x=r(9),m=r(6),e=r(84);t.exports=function(l,t){var h=1==l,p=2==l,v=3==l,g=4==l,y=6==l,d=5==l||y,b=t||e;return function(t,n,r){for(var e,i,o=x(t),u=S(o),c=_(n,r,3),a=m(u.length),f=0,s=h?b(t,a):p?b(t,0):Jt;f<a;f++)if((d||f in u)&&(i=c(e=u[f],f,o),l))if(h)s[f]=i;else if(i)switch(l){case 3:return!0;case 5:return e;case 6:return f;case 2:s.push(e)}else if(g)return!1;return y?-1:v||g?g:s}}},function(t,n){var r=t.exports={version:"2.6.5"};"number"==typeof e&&(e=r)},function(t,n,r){if(r(7)){var y=r(29),d=r(2),b=r(3),_=r(0),S=r(62),e=r(92),h=r(18),x=r(39),i=r(32),m=r(11),o=r(41),u=r(20),w=r(6),E=r(122),c=r(35),a=r(22),f=r(14),O=r(44),M=r(4),p=r(9),v=r(81),I=r(36),P=r(17),F=r(37).f,g=r(83),s=r(33),l=r(5),A=r(25),k=r(52),N=r(51),j=r(86),R=r(46),T=r(57),L=r(38),D=r(85),C=r(110),U=r(8),W=r(16),G=U.f,V=W.f,B=d.RangeError,z=d.TypeError,q=d.Uint8Array,K="ArrayBuffer",J="Shared"+K,Y="BYTES_PER_ELEMENT",$="prototype",X=Array[$],H=e.ArrayBuffer,Z=e.DataView,Q=A(0),tt=A(2),nt=A(3),rt=A(4),et=A(5),it=A(6),ot=k(!0),ut=k(!1),ct=j.values,at=j.keys,ft=j.entries,st=X.lastIndexOf,lt=X.reduce,ht=X.reduceRight,pt=X.join,vt=X.sort,gt=X.slice,yt=X.toString,dt=X.toLocaleString,bt=l("iterator"),_t=l("toStringTag"),St=s("typed_constructor"),xt=s("def_constructor"),mt=S.CONSTR,wt=S.TYPED,Et=S.VIEW,Ot="Wrong length!",Mt=A(1,function(t,n){return kt(N(t,t[xt]),n)}),It=b(function(){return 1===new q(new Uint16Array([1]).buffer)[0]}),Pt=!!q&&!!q[$].set&&b(function(){new q(1).set({})}),Ft=function(t,n){var r=u(t);if(r<0||r%n)throw B("Wrong offset!");return r},At=function(t){if(M(t)&&wt in t)return t;throw z(t+" is not a typed array!")},kt=function(t,n){if(!(M(t)&&St in t))throw z("It is not a typed array constructor!");return new t(n)},Nt=function(t,n){return jt(N(t,t[xt]),n)},jt=function(t,n){for(var r=0,e=n.length,i=kt(t,e);r<e;)i[r]=n[r++];return i},Rt=function(t,n,r){G(t,n,{get:function(){return this._d[r]}})},Tt=function from(t){var n,r,e,i,o,u,c=p(t),a=arguments.length,f=1<a?arguments[1]:Jt,s=f!==Jt,l=g(c);if(l!=Jt&&!v(l)){for(u=l.call(c),e=[],n=0;!(o=u.next()).done;n++)e.push(o.value);c=e}for(s&&2<a&&(f=h(f,arguments[2],2)),n=0,r=w(c.length),i=kt(this,r);n<r;n++)i[n]=s?f(c[n],n):c[n];return i},Lt=function of(){for(var t=0,n=arguments.length,r=kt(this,n);t<n;)r[t]=arguments[t++];return r},Dt=!!q&&b(function(){dt.call(new q(1))}),Ct=function toLocaleString(){return dt.apply(Dt?gt.call(At(this)):At(this),arguments)},Ut={copyWithin:function copyWithin(t,n){return C.call(At(this),t,n,2<arguments.length?arguments[2]:Jt)},every:function every(t){return rt(At(this),t,1<arguments.length?arguments[1]:Jt)},fill:function fill(t){return D.apply(At(this),arguments)},filter:function filter(t){return Nt(this,tt(At(this),t,1<arguments.length?arguments[1]:Jt))},find:function find(t){return et(At(this),t,1<arguments.length?arguments[1]:Jt)},findIndex:function findIndex(t){return it(At(this),t,1<arguments.length?arguments[1]:Jt)},forEach:function forEach(t){Q(At(this),t,1<arguments.length?arguments[1]:Jt)},indexOf:function indexOf(t){return ut(At(this),t,1<arguments.length?arguments[1]:Jt)},includes:function includes(t){return ot(At(this),t,1<arguments.length?arguments[1]:Jt)},join:function join(t){return pt.apply(At(this),arguments)},lastIndexOf:function lastIndexOf(t){return st.apply(At(this),arguments)},map:function map(t){return Mt(At(this),t,1<arguments.length?arguments[1]:Jt)},reduce:function reduce(t){return lt.apply(At(this),arguments)},reduceRight:function reduceRight(t){return ht.apply(At(this),arguments)},reverse:function reverse(){for(var t,n=this,r=At(n).length,e=Math.floor(r/2),i=0;i<e;)t=n[i],n[i++]=n[--r],n[r]=t;return n},some:function some(t){return nt(At(this),t,1<arguments.length?arguments[1]:Jt)},sort:function sort(t){return vt.call(At(this),t)},subarray:function subarray(t,n){var r=At(this),e=r.length,i=c(t,e);return new(N(r,r[xt]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,w((n===Jt?e:c(n,e))-i))}},Wt=function slice(t,n){return Nt(this,gt.call(At(this),t,n))},Gt=function set(t){At(this);var n=Ft(arguments[1],1),r=this.length,e=p(t),i=w(e.length),o=0;if(r<i+n)throw B(Ot);for(;o<i;)this[n+o]=e[o++]},Vt={entries:function entries(){return ft.call(At(this))},keys:function keys(){return at.call(At(this))},values:function values(){return ct.call(At(this))}},Bt=function(t,n){return M(t)&&t[wt]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},zt=function getOwnPropertyDescriptor(t,n){return Bt(t,n=a(n,!0))?i(2,t[n]):V(t,n)},qt=function defineProperty(t,n,r){return!(Bt(t,n=a(n,!0))&&M(r)&&f(r,"value"))||f(r,"get")||f(r,"set")||r.configurable||f(r,"writable")&&!r.writable||f(r,"enumerable")&&!r.enumerable?G(t,n,r):(t[n]=r.value,t)};mt||(W.f=zt,U.f=qt),_(_.S+_.F*!mt,"Object",{getOwnPropertyDescriptor:zt,defineProperty:qt}),b(function(){yt.call({})})&&(yt=dt=function toString(){return pt.call(this)});var Kt=o({},Ut);o(Kt,Vt),m(Kt,bt,Vt.values),o(Kt,{slice:Wt,set:Gt,constructor:function(){},toString:yt,toLocaleString:Ct}),Rt(Kt,"buffer","b"),Rt(Kt,"byteOffset","o"),Rt(Kt,"byteLength","l"),Rt(Kt,"length","e"),G(Kt,_t,{get:function(){return this[wt]}}),t.exports=function(t,l,n,o){var h=t+((o=!!o)?"Clamped":"")+"Array",r="get"+t,u="set"+t,p=d[h],c=p||{},e=p&&P(p),i={},a=p&&p[$],v=function(t,i){G(t,i,{get:function(){return(t=this._d).v[r](i*l+t.o,It);var t},set:function(t){return n=i,r=t,e=this._d,o&&(r=(r=Math.round(r))<0?0:255<r?255:255&r),void e.v[u](n*l+e.o,r,It);var n,r,e},enumerable:!0})};!p||!S.ABV?(p=n(function(t,n,r,e){x(t,p,h,"_d");var i,o,u,c,a=0,f=0;if(M(n)){if(!(n instanceof H||(c=O(n))==K||c==J))return wt in n?jt(p,n):Tt.call(p,n);i=n,f=Ft(r,l);var s=n.byteLength;if(e===Jt){if(s%l)throw B(Ot);if((o=s-f)<0)throw B(Ot)}else if(s<(o=w(e)*l)+f)throw B(Ot);u=o/l}else u=E(n),i=new H(o=u*l);for(m(t,"_d",{b:i,o:f,l:o,e:u,v:new Z(i)});a<u;)v(t,a++)}),a=p[$]=I(Kt),m(a,"constructor",p)):b(function(){p(1)})&&b(function(){new p(-1)})&&T(function(t){new p,new p(null),new p(1.5),new p(t)},!0)||(p=n(function(t,n,r,e){var i;return x(t,p,h),M(n)?n instanceof H||(i=O(n))==K||i==J?e!==Jt?new c(n,Ft(r,l),e):r!==Jt?new c(n,Ft(r,l)):new c(n):wt in n?jt(p,n):Tt.call(p,n):new c(E(n))}),Q(e!==Function.prototype?F(c).concat(F(e)):F(c),function(t){t in p||m(p,t,c[t])}),p[$]=a,y||(a.constructor=p));var f=a[bt],s=!!f&&("values"==f.name||f.name==Jt),g=Vt.values;m(p,St,!0),m(a,wt,h),m(a,Et,!0),m(a,xt,p),(o?new p(1)[_t]==h:_t in a)||G(a,_t,{get:function(){return h}}),_(_.G+_.W+_.F*((i[h]=p)!=c),i),_(_.S,h,{BYTES_PER_ELEMENT:l}),_(_.S+_.F*b(function(){c.of.call(p,1)}),h,{from:Tt,of:Lt}),Y in a||m(a,Y,l),_(_.P,h,Ut),L(h),_(_.P+_.F*Pt,h,{set:Gt}),_(_.P+_.F*!s,h,Vt),y||a.toString==yt||(a.toString=yt),_(_.P+_.F*b(function(){new p(1).slice()}),h,{slice:Wt}),_(_.P+_.F*(b(function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()})||!b(function(){a.toLocaleString.call([1,2])})),h,{toLocaleString:Ct}),R[h]=s?f:g,y||s||m(a,bt,g)}}else t.exports=function(){}},function(t,n,r){var o=r(116),e=r(0),i=r(47)("metadata"),u=i.store||(i.store=new(r(119))),c=function(t,n,r){var e=u.get(t);if(!e){if(!r)return Jt;u.set(t,e=new o)}var i=e.get(n);if(!i){if(!r)return Jt;e.set(n,i=new o)}return i};t.exports={store:u,map:c,has:function(t,n,r){var e=c(n,r,!1);return e!==Jt&&e.has(t)},get:function(t,n,r){var e=c(n,r,!1);return e===Jt?Jt:e.get(t)},set:function(t,n,r,e){c(r,e,!0).set(t,n)},keys:function(t,n){var r=c(t,n,!1),e=[];return r&&r.forEach(function(t,n){e.push(n)}),e},key:function(t){return t===Jt||"symbol"==typeof t?t:String(t)},exp:function(t){e(e.S,"Reflect",t)}}},function(t,n){t.exports=!1},function(t,n,r){var e=r(33)("meta"),i=r(4),o=r(14),u=r(8).f,c=0,a=Object.isExtensible||function(){return!0},f=!r(3)(function(){return a(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,e)){if(!a(t))return"F";if(!n)return"E";s(t)}return t[e].i},getWeak:function(t,n){if(!o(t,e)){if(!a(t))return!0;if(!n)return!1;s(t)}return t[e].w},onFreeze:function(t){return f&&l.NEED&&a(t)&&!o(t,e)&&s(t),t}}},function(t,n,r){var e=r(5)("unscopables"),i=Array.prototype;i[e]==Jt&&r(11)(i,e,{}),t.exports=function(t){i[e][t]=!0}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(t===Jt?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(95),i=r(69);t.exports=Object.keys||function keys(t){return e(t,i)}},function(t,n,r){var e=r(20),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=e(t))<0?i(t+n,0):o(t,n)}},function(t,n,e){var i=e(1),o=e(96),u=e(69),c=e(68)("IE_PROTO"),a=function(){},f="prototype",s=function(){var t,n=e(66)("iframe"),r=u.length;for(n.style.display="none",e(70).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s[f][u[r]];return s()};t.exports=Object.create||function create(t,n){var r;return null!==t?(a[f]=i(t),r=new a,a[f]=null,r[c]=t):r=s(),n===Jt?r:o(r,n)}},function(t,n,r){var e=r(95),i=r(69).concat("length","prototype");n.f=Object.getOwnPropertyNames||function getOwnPropertyNames(t){return e(t,i)}},function(t,n,r){var e=r(2),i=r(8),o=r(7),u=r(5)("species");t.exports=function(t){var n=e[t];o&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,r,e){if(!(t instanceof n)||e!==Jt&&e in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,n,r){var h=r(18),p=r(108),v=r(81),g=r(1),y=r(6),d=r(83),b={},_={};(n=t.exports=function(t,n,r,e,i){var o,u,c,a,f=i?function(){return t}:d(t),s=h(r,e,n?2:1),l=0;if("function"!=typeof f)throw TypeError(t+" is not iterable!");if(v(f)){for(o=y(t.length);l<o;l++)if((a=n?s(g(u=t[l])[0],u[1]):s(t[l]))===b||a===_)return a}else for(c=f.call(t);!(u=c.next()).done;)if((a=p(c,s,u.value,n))===b||a===_)return a}).BREAK=b,n.RETURN=_},function(t,n,r){var i=r(12);t.exports=function(t,n,r){for(var e in n)i(t,e,n[e],r);return t}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n,r){var e=r(8).f,i=r(14),o=r(5)("toStringTag");t.exports=function(t,n,r){t&&!i(t=r?t:t.prototype,o)&&e(t,o,{configurable:!0,value:n})}},function(t,n,r){var i=r(19),o=r(5)("toStringTag"),u="Arguments"==i(function(){return arguments}());t.exports=function(t){var n,r,e;return t===Jt?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(r){}}(n=Object(t),o))?r:u?i(n):"Object"==(e=i(n))&&"function"==typeof n.callee?"Arguments":e}},function(t,n,r){var u=r(0),e=r(23),c=r(3),a=r(73),i="["+a+"]",o=RegExp("^"+i+i+"*"),f=RegExp(i+i+"*$"),s=function(t,n,r){var e={},i=c(function(){return!!a[t]()||"​"!="​"[t]()}),o=e[t]=i?n(l):a[t];r&&(e[r]=o),u(u.P+u.F*i,"String",e)},l=s.trim=function(t,n){return t=String(e(t)),1&n&&(t=t.replace(o,"")),2&n&&(t=t.replace(f,"")),t};t.exports=s},function(t,n){t.exports={}},function(t,n,r){var e=r(26),i=r(2),o="__core-js_shared__",u=i[o]||(i[o]={});(t.exports=function(t,n){return u[t]||(u[t]=n!==Jt?n:{})})("versions",[]).push({version:e.version,mode:r(29)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(19);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,r){var e=r(1);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){var i=r(1),o=r(10),u=r(5)("species");t.exports=function(t,n){var r,e=i(t).constructor;return e===Jt||(r=i(e)[u])==Jt?n:o(r)}},function(t,n,r){var a=r(15),f=r(6),s=r(35);t.exports=function(c){return function(t,n,r){var e,i=a(t),o=f(i.length),u=s(r,o);if(c&&n!=n){for(;u<o;)if((e=i[u++])!=e)return!0}else for(;u<o;u++)if((c||u in i)&&i[u]===n)return c||u||0;return!c&&-1}}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(19);t.exports=Array.isArray||function isArray(t){return"Array"==e(t)}},function(t,n,r){var a=r(20),f=r(23);t.exports=function(c){return function(t,n){var r,e,i=String(f(t)),o=a(n),u=i.length;return o<0||u<=o?c?"":Jt:(r=i.charCodeAt(o))<55296||56319<r||o+1===u||(e=i.charCodeAt(o+1))<56320||57343<e?c?i.charAt(o):r:c?i.slice(o,o+2):e-56320+(r-55296<<10)+65536}}},function(t,n,r){var e=r(4),i=r(19),o=r(5)("match");t.exports=function(t){var n;return e(t)&&((n=t[o])!==Jt?!!n:"RegExp"==i(t))}},function(t,n,r){var o=r(5)("iterator"),u=!1;try{var e=[7][o]();e["return"]=function(){u=!0},Array.from(e,function(){throw 2})}catch(c){}t.exports=function(t,n){if(!n&&!u)return!1;var r=!1;try{var e=[7],i=e[o]();i.next=function(){return{done:r=!0}},e[o]=function(){return i},t(e)}catch(c){}return r}},function(t,n,r){var i=r(44),o=RegExp.prototype.exec;t.exports=function(t,n){var r=t.exec;if("function"==typeof r){var e=r.call(t,n);if("object"!=typeof e)throw new TypeError("RegExp exec method returned something other than an Object or null");return e}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,r){r(112);var f=r(12),s=r(11),l=r(3),h=r(23),p=r(5),v=r(87),g=p("species"),y=!l(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(r,t,n){var e=p(r),o=!l(function(){var t={};return t[e]=function(){return 7},7!=""[r](t)}),i=o?!l(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===r&&(n.constructor={},n.constructor[g]=function(){return n}),n[e](""),!t}):Jt;if(!o||!i||"replace"===r&&!y||"split"===r&&!d){var u=/./[e],c=n(h,e,""[r],function maybeCallNative(t,n,r,e,i){return n.exec===v?o&&!i?{done:!0,value:u.call(n,r,e)}:{done:!0,value:t.call(r,n,e)}:{done:!1}}),a=c[1];f(String.prototype,r,c[0]),s(RegExp.prototype,e,2==t?function(t,n){return a.call(t,this,n)}:function(t){return a.call(t,this)})}}},function(t,n,r){var e=r(2).navigator;t.exports=e&&e.userAgent||""},function(t,n,r){var d=r(2),b=r(0),_=r(12),S=r(41),x=r(30),m=r(40),w=r(39),E=r(4),O=r(3),M=r(57),I=r(43),P=r(72);t.exports=function(e,t,n,r,i,o){var u=d[e],c=u,a=i?"set":"add",f=c&&c.prototype,s={},l=function(t){var r=f[t];_(f,t,"delete"==t?function(t){return!(o&&!E(t))&&r.call(this,0===t?0:t)}:"has"==t?function has(t){return!(o&&!E(t))&&r.call(this,0===t?0:t)}:"get"==t?function get(t){return o&&!E(t)?Jt:r.call(this,0===t?0:t)}:"add"==t?function add(t){return r.call(this,0===t?0:t),this}:function set(t,n){return r.call(this,0===t?0:t,n),this})};if("function"==typeof c&&(o||f.forEach&&!O(function(){(new c).entries().next()}))){var h=new c,p=h[a](o?{}:-0,1)!=h,v=O(function(){h.has(1)}),g=M(function(t){new c(t)}),y=!o&&O(function(){for(var t=new c,n=5;n--;)t[a](n,n);return!t.has(-0)});g||(((c=t(function(t,n){w(t,c,e);var r=P(new u,t,c);return n!=Jt&&m(n,i,r[a],r),r})).prototype=f).constructor=c),(v||y)&&(l("delete"),l("has"),i&&l("get")),(y||p)&&l(a),o&&f.clear&&delete f.clear}else c=r.getConstructor(t,e,i,a),S(c.prototype,n),x.NEED=!0;return I(c,e),b(b.G+b.W+b.F*((s[e]=c)!=u),s),o||r.setStrong(c,e,i),c}},function(t,n,r){for(var e,i=r(2),o=r(11),u=r(33),c=u("typed_array"),a=u("view"),f=!(!i.ArrayBuffer||!i.DataView),s=f,l=0,h="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<9;)(e=i[h[l++]])?(o(e.prototype,c,!0),o(e.prototype,a,!0)):s=!1;t.exports={ABV:f,CONSTR:s,TYPED:c,VIEW:a}},function(t,n,r){t.exports=r(29)||!r(3)(function(){var t=Math.random();__defineSetter__.call(null,t,function(){}),delete r(2)[t]})},function(t,n,r){var e=r(0);t.exports=function(t){e(e.S,t,{of:function of(){for(var t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return new this(n)}})}},function(t,n,r){var e=r(0),u=r(10),c=r(18),a=r(40);t.exports=function(t){e(e.S,t,{from:function from(t){var n,r,e,i,o=arguments[1];return u(this),(n=o!==Jt)&&u(o),t==Jt?new this:(r=[],n?(e=0,i=c(o,arguments[2],2),a(t,!1,function(t){r.push(i(t,e++))})):a(t,!1,r.push,r),new this(r))}})}},function(t,n,r){var e=r(4),i=r(2).document,o=e(i)&&e(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,r){var e=r(2),i=r(26),o=r(29),u=r(94),c=r(8).f;t.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,r){var e=r(47)("keys"),i=r(33);t.exports=function(t){return e[t]||(e[t]=i(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,r){var e=r(2).document;t.exports=e&&e.documentElement},function(t,n,i){var r=i(4),e=i(1),o=function(t,n){if(e(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,e){try{(e=i(18)(Function.call,i(16).f(Object.prototype,"__proto__").set,2))(t,[]),r=!(t instanceof Array)}catch(n){r=!0}return function setPrototypeOf(t,n){return o(t,n),r?t.__proto__=n:e(t,n),t}}({},!1):Jt),check:o}},function(t,n,r){var o=r(4),u=r(71).set;t.exports=function(t,n,r){var e,i=n.constructor;return i!==r&&"function"==typeof i&&(e=i.prototype)!==r.prototype&&o(e)&&u&&u(t,e),t}},function(t,n){t.exports="\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,n,r){var i=r(20),o=r(23);t.exports=function repeat(t){var n=String(o(this)),r="",e=i(t);if(e<0||e==Infinity)throw RangeError("Count can't be negative");for(;0<e;(e>>>=1)&&(n+=n))1&e&&(r+=n);return r}},function(t,n){t.exports=Math.sign||function sign(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,n){var r=Math.expm1;t.exports=!r||22025.465794806718<r(10)||r(10)<22025.465794806718||-2e-17!=r(-2e-17)?function expm1(t){return 0==(t=+t)?t:-1e-6<t&&t<1e-6?t+t*t/2:Math.exp(t)-1}:r},function(t,n,r){var e=r(56),i=r(23);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},function(t,n,r){var i=r(5)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[i]=!1,!"/./"[t](n)}catch(e){}}return!0}},function(t,n,r){var _=r(29),S=r(0),x=r(12),m=r(11),w=r(46),E=r(80),O=r(43),M=r(17),I=r(5)("iterator"),P=!([].keys&&"next"in[].keys()),F="values",A=function(){return this};t.exports=function(t,n,r,e,i,o,u){E(r,n,e);var c,a,f,s=function(t){if(!P&&t in v)return v[t];switch(t){case"keys":return function keys(){return new r(this,t)};case F:return function values(){return new r(this,t)}}return function entries(){return new r(this,t)}},l=n+" Iterator",h=i==F,p=!1,v=t.prototype,g=v[I]||v["@@iterator"]||i&&v[i],y=g||s(i),d=i?h?s("entries"):y:Jt,b="Array"==n&&v.entries||g;if(b&&(f=M(b.call(new t)))!==Object.prototype&&f.next&&(O(f,l,!0),_||"function"==typeof f[I]||m(f,I,A)),h&&g&&g.name!==F&&(p=!0,y=function values(){return g.call(this)}),_&&!u||!P&&!p&&v[I]||m(v,I,y),w[n]=y,w[l]=A,i)if(c={values:h?y:s(F),keys:o?y:s("keys"),entries:d},u)for(a in c)a in v||x(v,a,c[a]);else S(S.P+S.F*(P||p),n,c);return c}},function(t,n,r){var e=r(36),i=r(32),o=r(43),u={};r(11)(u,r(5)("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=e(u,{next:i(1,r)}),o(t,n+" Iterator")}},function(t,n,r){var e=r(46),i=r(5)("iterator"),o=Array.prototype;t.exports=function(t){return t!==Jt&&(e.Array===t||o[i]===t)}},function(t,n,r){var e=r(8),i=r(32);t.exports=function(t,n,r){n in t?e.f(t,n,i(0,r)):t[n]=r}},function(t,n,r){var e=r(44),i=r(5)("iterator"),o=r(46);t.exports=r(26).getIteratorMethod=function(t){if(t!=Jt)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){var e=r(213);t.exports=function(t,n){return new(e(t))(n)}},function(t,n,r){var c=r(9),a=r(35),f=r(6);t.exports=function fill(t){for(var n=c(this),r=f(n.length),e=arguments.length,i=a(1<e?arguments[1]:Jt,r),o=2<e?arguments[2]:Jt,u=o===Jt?r:a(o,r);i<u;)n[i++]=t;return n}},function(t,n,r){var e=r(31),i=r(111),o=r(46),u=r(15);t.exports=r(79)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||t.length<=r?(this._t=Jt,i(1)):i(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])},"values"),o.Arguments=o.Array,e("keys"),e("values"),e("entries")},function(t,n,r){var e,i,u=r(50),c=RegExp.prototype.exec,a=String.prototype.replace,o=c,f="lastIndex",s=(i=/b*/g,c.call(e=/a/,"a"),c.call(i,"a"),0!==e[f]||0!==i[f]),l=/()??/.exec("")[1]!==Jt;(s||l)&&(o=function exec(t){var n,r,e,i,o=this;return l&&(r=new RegExp("^"+o.source+"$(?!\\s)",u.call(o))),s&&(n=o[f]),e=c.call(o,t),s&&e&&(o[f]=o.global?e.index+e[0].length:n),l&&e&&1<e.length&&a.call(e[0],r,function(){for(i=1;i<arguments.length-2;i++)arguments[i]===Jt&&(e[i]=Jt)}),e}),t.exports=o},function(t,n,r){var e=r(55)(!0);t.exports=function(t,n,r){return n+(r?e(t,n).length:1)}},function(t,n,r){var e,i,o,u=r(18),c=r(101),a=r(70),f=r(66),s=r(2),l=s.process,h=s.setImmediate,p=s.clearImmediate,v=s.MessageChannel,g=s.Dispatch,y=0,d={},b="onreadystatechange",_=function(){var t=+this;if(d.hasOwnProperty(t)){var n=d[t];delete d[t],n()}},S=function(t){_.call(t.data)};h&&p||(h=function setImmediate(t){for(var n=[],r=1;r<arguments.length;)n.push(arguments[r++]);return d[++y]=function(){c("function"==typeof t?t:Function(t),n)},e(y),y},p=function clearImmediate(t){delete d[t]},"process"==r(19)(l)?e=function(t){l.nextTick(u(_,t,1))}:g&&g.now?e=function(t){g.now(u(_,t,1))}:v?(o=(i=new v).port2,i.port1.onmessage=S,e=u(o.postMessage,o,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(e=function(t){s.postMessage(t+"","*")},s.addEventListener("message",S,!1)):e=b in f("script")?function(t){a.appendChild(f("script"))[b]=function(){a.removeChild(this),_.call(t)}}:function(t){setTimeout(u(_,t,1),0)}),t.exports={set:h,clear:p}},function(t,n,r){var c=r(2),a=r(89).set,f=c.MutationObserver||c.WebKitMutationObserver,s=c.process,l=c.Promise,h="process"==r(19)(s);t.exports=function(){var e,i,o,t=function(){var t,n;for(h&&(t=s.domain)&&t.exit();e;){n=e.fn,e=e.next;try{n()}catch(r){throw e?o():i=Jt,r}}i=Jt,t&&t.enter()};if(h)o=function(){s.nextTick(t)};else if(!f||c.navigator&&c.navigator.standalone)if(l&&l.resolve){var n=l.resolve(Jt);o=function(){n.then(t)}}else o=function(){a.call(c,t)};else{var r=!0,u=document.createTextNode("");new f(t).observe(u,{characterData:!0}),o=function(){u.data=r=!r}}return function(t){var n={fn:t,next:Jt};i&&(i.next=n),e||(e=n,o()),i=n}}},function(t,n,r){var i=r(10);function PromiseCapability(t){var r,e;this.promise=new t(function(t,n){if(r!==Jt||e!==Jt)throw TypeError("Bad Promise constructor");r=t,e=n}),this.resolve=i(r),this.reject=i(e)}t.exports.f=function(t){return new PromiseCapability(t)}},function(t,n,r){var e=r(2),i=r(7),o=r(29),u=r(62),c=r(11),a=r(41),f=r(3),s=r(39),l=r(20),h=r(6),p=r(122),v=r(37).f,g=r(8).f,y=r(85),d=r(43),b="ArrayBuffer",_="DataView",S="prototype",x="Wrong index!",m=e[b],w=e[_],E=e.Math,O=e.RangeError,M=e.Infinity,I=m,P=E.abs,F=E.pow,A=E.floor,k=E.log,N=E.LN2,j="byteLength",R="byteOffset",T=i?"_b":"buffer",L=i?"_l":j,D=i?"_o":R;function packIEEE754(t,n,r){var e,i,o,u=new Array(r),c=8*r-n-1,a=(1<<c)-1,f=a>>1,s=23===n?F(2,-24)-F(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for((t=P(t))!=t||t===M?(i=t!=t?1:0,e=a):(e=A(k(t)/N),t*(o=F(2,-e))<1&&(e--,o*=2),2<=(t+=1<=e+f?s/o:s*F(2,1-f))*o&&(e++,o/=2),a<=e+f?(i=0,e=a):1<=e+f?(i=(t*o-1)*F(2,n),e+=f):(i=t*F(2,f-1)*F(2,n),e=0));8<=n;u[l++]=255&i,i/=256,n-=8);for(e=e<<n|i,c+=n;0<c;u[l++]=255&e,e/=256,c-=8);return u[--l]|=128*h,u}function unpackIEEE754(t,n,r){var e,i=8*r-n-1,o=(1<<i)-1,u=o>>1,c=i-7,a=r-1,f=t[a--],s=127&f;for(f>>=7;0<c;s=256*s+t[a],a--,c-=8);for(e=s&(1<<-c)-1,s>>=-c,c+=n;0<c;e=256*e+t[a],a--,c-=8);if(0===s)s=1-u;else{if(s===o)return e?NaN:f?-M:M;e+=F(2,n),s-=u}return(f?-1:1)*e*F(2,s-n)}function unpackI32(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function packI8(t){return[255&t]}function packI16(t){return[255&t,t>>8&255]}function packI32(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function packF64(t){return packIEEE754(t,52,8)}function packF32(t){return packIEEE754(t,23,4)}function addGetter(t,n,r){g(t[S],n,{get:function(){return this[r]}})}function get(t,n,r,e){var i=p(+r);if(t[L]<i+n)throw O(x);var o=i+t[D],u=t[T]._b.slice(o,o+n);return e?u:u.reverse()}function set(t,n,r,e,i,o){var u=p(+r);if(t[L]<u+n)throw O(x);for(var c=t[T]._b,a=u+t[D],f=e(+i),s=0;s<n;s++)c[a+s]=f[o?s:n-s-1]}if(u.ABV){if(!f(function(){m(1)})||!f(function(){new m(-1)})||f(function(){return new m,new m(1.5),new m(NaN),m.name!=b})){for(var C,U=(m=function ArrayBuffer(t){return s(this,m),new I(p(t))})[S]=I[S],W=v(I),G=0;G<W.length;)(C=W[G++])in m||c(m,C,I[C]);o||(U.constructor=m)}var V=new w(new m(2)),B=w[S].setInt8;V.setInt8(0,2147483648),V.setInt8(1,2147483649),!V.getInt8(0)&&V.getInt8(1)||a(w[S],{setInt8:function setInt8(t,n){B.call(this,t,n<<24>>24)},setUint8:function setUint8(t,n){B.call(this,t,n<<24>>24)}},!0)}else m=function ArrayBuffer(t){s(this,m,b);var n=p(t);this._b=y.call(new Array(n),0),this[L]=n},w=function DataView(t,n,r){s(this,w,_),s(t,m,_);var e=t[L],i=l(n);if(i<0||e<i)throw O("Wrong offset!");if(e<i+(r=r===Jt?e-i:h(r)))throw O("Wrong length!");this[T]=t,this[D]=i,this[L]=r},i&&(addGetter(m,j,"_l"),addGetter(w,"buffer","_b"),addGetter(w,j,"_l"),addGetter(w,R,"_o")),a(w[S],{getInt8:function getInt8(t){return get(this,1,t)[0]<<24>>24},getUint8:function getUint8(t){return get(this,1,t)[0]},getInt16:function getInt16(t){var n=get(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function getUint16(t){var n=get(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function getInt32(t){return unpackI32(get(this,4,t,arguments[1]))},getUint32:function getUint32(t){return unpackI32(get(this,4,t,arguments[1]))>>>0},getFloat32:function getFloat32(t){return unpackIEEE754(get(this,4,t,arguments[1]),23,4)},getFloat64:function getFloat64(t){return unpackIEEE754(get(this,8,t,arguments[1]),52,8)},setInt8:function setInt8(t,n){set(this,1,t,packI8,n)},setUint8:function setUint8(t,n){set(this,1,t,packI8,n)},setInt16:function setInt16(t,n){set(this,2,t,packI16,n,arguments[2])},setUint16:function setUint16(t,n){set(this,2,t,packI16,n,arguments[2])},setInt32:function setInt32(t,n){set(this,4,t,packI32,n,arguments[2])},setUint32:function setUint32(t,n){set(this,4,t,packI32,n,arguments[2])},setFloat32:function setFloat32(t,n){set(this,4,t,packF32,n,arguments[2])},
setFloat64:function setFloat64(t,n){set(this,8,t,packF64,n,arguments[2])}});d(m,b),d(w,_),c(w[S],u.VIEW,!0),n[b]=m,n[_]=w},function(t,n,r){t.exports=!r(7)&&!r(3)(function(){return 7!=Object.defineProperty(r(66)("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){n.f=r(5)},function(t,n,r){var u=r(14),c=r(15),a=r(52)(!1),f=r(68)("IE_PROTO");t.exports=function(t,n){var r,e=c(t),i=0,o=[];for(r in e)r!=f&&u(e,r)&&o.push(r);for(;i<n.length;)u(e,r=n[i++])&&(~a(o,r)||o.push(r));return o}},function(t,n,r){var u=r(8),c=r(1),a=r(34);t.exports=r(7)?Object.defineProperties:function defineProperties(t,n){c(t);for(var r,e=a(n),i=e.length,o=0;o<i;)u.f(t,r=e[o++],n[r]);return t}},function(t,n,r){var e=r(15),i=r(37).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function getOwnPropertyNames(t){return u&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(n){return u.slice()}}(t):i(e(t))}},function(t,n,r){var h=r(34),p=r(53),v=r(49),g=r(9),y=r(48),i=Object.assign;t.exports=!i||r(3)(function(){var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach(function(t){n[t]=t}),7!=i({},t)[r]||Object.keys(i({},n)).join("")!=e})?function assign(t,n){for(var r=g(t),e=arguments.length,i=1,o=p.f,u=v.f;i<e;)for(var c,a=y(arguments[i++]),f=o?h(a).concat(o(a)):h(a),s=f.length,l=0;l<s;)u.call(a,c=f[l++])&&(r[c]=a[c]);return r}:i},function(t,n){t.exports=Object.is||function is(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},function(t,n,r){var o=r(10),u=r(4),c=r(101),a=[].slice,f={};t.exports=Function.bind||function bind(n){var r=o(this),e=a.call(arguments,1),i=function(){var t=e.concat(a.call(arguments));return this instanceof i?function(t,n,r){if(!(n in f)){for(var e=[],i=0;i<n;i++)e[i]="a["+i+"]";f[n]=Function("F,a","return new F("+e.join(",")+")")}return f[n](t,r)}(r,t.length,t):c(r,t,n)};return u(r.prototype)&&(i.prototype=r.prototype),i}},function(t,n){t.exports=function(t,n,r){var e=r===Jt;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}},function(t,n,r){var e=r(19);t.exports=function(t,n){if("number"!=typeof t&&"Number"!=e(t))throw TypeError(n);return+t}},function(t,n,r){var e=r(4),i=Math.floor;t.exports=function isInteger(t){return!e(t)&&isFinite(t)&&i(t)===t}},function(t,n,r){var e=r(2).parseFloat,i=r(45).trim;t.exports=1/e(r(73)+"-0")!=-Infinity?function parseFloat(t){var n=i(String(t),3),r=e(n);return 0===r&&"-"==n.charAt(0)?-0:r}:e},function(t,n,r){var e=r(2).parseInt,i=r(45).trim,o=r(73),u=/^[-+]?0[xX]/;t.exports=8!==e(o+"08")||22!==e(o+"0x16")?function parseInt(t,n){var r=i(String(t),3);return e(r,n>>>0||(u.test(r)?16:10))}:e},function(t,n){t.exports=Math.log1p||function log1p(t){return-1e-8<(t=+t)&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,n,r){var o=r(75),e=Math.pow,u=e(2,-52),c=e(2,-23),a=e(2,127)*(2-c),f=e(2,-126);t.exports=Math.fround||function fround(t){var n,r,e=Math.abs(t),i=o(t);return e<f?i*(e/f/c+1/u-1/u)*f*c:a<(r=(n=(1+c/u)*e)-(n-e))||r!=r?i*Infinity:i*r}},function(t,n,r){var u=r(1);t.exports=function(t,n,r,e){try{return e?n(u(r)[0],r[1]):n(r)}catch(o){var i=t["return"];throw i!==Jt&&u(i.call(t)),o}}},function(t,n,r){var s=r(10),l=r(9),h=r(48),p=r(6);t.exports=function(t,n,r,e,i){s(n);var o=l(t),u=h(o),c=p(o.length),a=i?c-1:0,f=i?-1:1;if(r<2)for(;;){if(a in u){e=u[a],a+=f;break}if(a+=f,i?a<0:c<=a)throw TypeError("Reduce of empty array with no initial value")}for(;i?0<=a:a<c;a+=f)a in u&&(e=n(e,u[a],a,o));return e}},function(t,n,r){var f=r(9),s=r(35),l=r(6);t.exports=[].copyWithin||function copyWithin(t,n){var r=f(this),e=l(r.length),i=s(t,e),o=s(n,e),u=2<arguments.length?arguments[2]:Jt,c=Math.min((u===Jt?e:s(u,e))-o,e-i),a=1;for(o<i&&i<o+c&&(a=-1,o+=c-1,i+=c-1);0<c--;)o in r?r[i]=r[o]:delete r[i],i+=a,o+=a;return r}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,r){var e=r(87);r(0)({target:"RegExp",proto:!0,forced:e!==/./.exec},{exec:e})},function(t,n,r){r(7)&&"g"!=/./g.flags&&r(8).f(RegExp.prototype,"flags",{configurable:!0,get:r(50)})},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(n){return{e:!0,v:n}}}},function(t,n,r){var e=r(1),i=r(4),o=r(91);t.exports=function(t,n){if(e(t),i(n)&&n.constructor===t)return n;var r=o.f(t);return(0,r.resolve)(n),r.promise}},function(t,n,r){var e=r(117),i=r(42);t.exports=r(61)("Map",function(t){return function Map(){return t(this,0<arguments.length?arguments[0]:Jt)}},{get:function get(t){var n=e.getEntry(i(this,"Map"),t);return n&&n.v},set:function set(t,n){return e.def(i(this,"Map"),0===t?0:t,n)}},e,!0)},function(t,n,r){var u=r(8).f,c=r(36),a=r(41),f=r(18),s=r(39),l=r(40),e=r(79),i=r(111),o=r(38),h=r(7),p=r(30).fastKey,v=r(42),g=h?"_s":"size",y=function(t,n){var r,e=p(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};t.exports={getConstructor:function(t,o,r,e){var i=t(function(t,n){s(t,i,o,"_i"),t._t=o,t._i=c(null),t._f=Jt,t._l=Jt,t[g]=0,n!=Jt&&l(n,r,t[e],t)});return a(i.prototype,{clear:function clear(){for(var t=v(this,o),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=Jt),delete n[r.i];t._f=t._l=Jt,t[g]=0},"delete":function(t){var n=v(this,o),r=y(n,t);if(r){var e=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=e),e&&(e.p=i),n._f==r&&(n._f=e),n._l==r&&(n._l=i),n[g]--}return!!r},forEach:function forEach(t){v(this,o);for(var n,r=f(t,1<arguments.length?arguments[1]:Jt,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function has(t){return!!y(v(this,o),t)}}),h&&u(i.prototype,"size",{get:function(){return v(this,o)[g]}}),i},def:function(t,n,r){var e,i,o=y(t,n);return o?o.v=r:(t._l=o={i:i=p(n,!0),k:n,v:r,p:e=t._l,n:Jt,r:!1},t._f||(t._f=o),e&&(e.n=o),t[g]++,"F"!==i&&(t._i[i]=o)),t},getEntry:y,setStrong:function(t,r,n){e(t,r,function(t,n){this._t=v(t,r),this._k=n,this._l=Jt},function(){for(var t=this,n=t._k,r=t._l;r&&r.r;)r=r.p;return t._t&&(t._l=r=r?r.n:t._t._f)?i(0,"keys"==n?r.k:"values"==n?r.v:[r.k,r.v]):(t._t=Jt,i(1))},n?"entries":"values",!n,!0),o(r)}}},function(t,n,r){var e=r(117),i=r(42);t.exports=r(61)("Set",function(t){return function Set(){return t(this,0<arguments.length?arguments[0]:Jt)}},{add:function add(t){return e.def(i(this,"Set"),t=0===t?0:t,t)}},e)},function(t,n,r){var o,e=r(2),i=r(25)(0),u=r(12),c=r(30),a=r(98),f=r(120),s=r(4),l=r(42),h=r(42),p=!e.ActiveXObject&&"ActiveXObject"in e,v="WeakMap",g=c.getWeak,y=Object.isExtensible,d=f.ufstore,b=function(t){return function WeakMap(){return t(this,0<arguments.length?arguments[0]:Jt)}},_={get:function get(t){if(s(t)){var n=g(t);return!0===n?d(l(this,v)).get(t):n?n[this._i]:Jt}},set:function set(t,n){return f.def(l(this,v),t,n)}},S=t.exports=r(61)(v,b,_,f,!0,!0);h&&p&&(a((o=f.getConstructor(b,v)).prototype,_),c.NEED=!0,i(["delete","has","get","set"],function(e){var t=S.prototype,i=t[e];u(t,e,function(t,n){if(s(t)&&!y(t)){this._f||(this._f=new o);var r=this._f[e](t,n);return"set"==e?this:r}return i.call(this,t,n)})}))},function(t,n,r){var u=r(41),c=r(30).getWeak,i=r(1),a=r(4),f=r(39),s=r(40),e=r(25),l=r(14),h=r(42),o=e(5),p=e(6),v=0,g=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},d=function(t,n){return o(t.a,function(t){return t[0]===n})};y.prototype={get:function(t){var n=d(this,t);if(n)return n[1]},has:function(t){return!!d(this,t)},set:function(t,n){var r=d(this,t);r?r[1]=n:this.a.push([t,n])},"delete":function(n){var t=p(this.a,function(t){return t[0]===n});return~t&&this.a.splice(t,1),!!~t}},t.exports={getConstructor:function(t,r,e,i){var o=t(function(t,n){f(t,o,r,"_i"),t._t=r,t._i=v++,n!=(t._l=Jt)&&s(n,e,t[i],t)});return u(o.prototype,{"delete":function(t){if(!a(t))return!1;var n=c(t);return!0===n?g(h(this,r))["delete"](t):n&&l(n,this._i)&&delete n[this._i]},has:function has(t){if(!a(t))return!1;var n=c(t);return!0===n?g(h(this,r)).has(t):n&&l(n,this._i)}}),o},def:function(t,n,r){var e=c(i(n),!0);return!0===e?g(t).set(n,r):e[t._i]=r,t},ufstore:g}},function(t,n,r){var e=r(37),i=r(53),o=r(1),u=r(2).Reflect;t.exports=u&&u.ownKeys||function ownKeys(t){var n=e.f(o(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(20),i=r(6);t.exports=function(t){if(t===Jt)return 0;var n=e(t),r=i(n);if(n!==r)throw RangeError("Wrong length!");return r}},function(t,n,r){var p=r(54),v=r(4),g=r(6),y=r(18),d=r(5)("isConcatSpreadable");t.exports=function flattenIntoArray(t,n,r,e,i,o,u,c){for(var a,f,s=i,l=0,h=!!u&&y(u,c,3);l<e;){if(l in r){if(a=h?h(r[l],l,n):r[l],f=!1,v(a)&&(f=(f=a[d])!==Jt?!!f:p(a)),f&&0<o)s=flattenIntoArray(t,n,a,g(a.length),s,o-1)-1;else{if(9007199254740991<=s)throw TypeError();t[s]=a}s++}l++}return s}},function(t,n,r){var s=r(6),l=r(74),h=r(23);t.exports=function(t,n,r,e){var i=String(h(t)),o=i.length,u=r===Jt?" ":String(r),c=s(n);if(c<=o||""==u)return i;var a=c-o,f=l.call(u,Math.ceil(a/u.length));return a<f.length&&(f=f.slice(0,a)),e?f+i:i+f}},function(t,n,r){var a=r(34),f=r(15),s=r(49).f;t.exports=function(c){return function(t){for(var n,r=f(t),e=a(r),i=e.length,o=0,u=[];o<i;)s.call(r,n=e[o++])&&u.push(c?[n,r[n]]:r[n]);return u}}},function(t,n,r){var e=r(44),i=r(127);t.exports=function(t){return function toJSON(){if(e(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},function(t,n,r){var e=r(40);t.exports=function(t,n){var r=[];return e(t,!1,r.push,r,n),r}},function(t,n){t.exports=Math.scale||function scale(t,n,r,e,i){return 0===arguments.length||t!=t||n!=n||r!=r||e!=e||i!=i?NaN:t===Infinity||t===-Infinity?t:(t-n)*(i-e)/(r-n)+e}},function(t,n,r){r(130),r(133),r(134),r(135),r(136),r(137),r(138),r(139),r(140),r(141),r(142),r(143),r(144),r(145),r(146),r(147),r(148),r(149),r(150),r(151),r(152),r(153),r(154),r(155),r(156),r(157),r(158),r(159),r(160),r(161),r(162),r(163),r(164),r(165),r(166),r(167),r(168),r(169),r(170),r(171),r(172),r(173),r(174),r(175),r(176),r(177),r(178),r(179),r(180),r(181),r(182),r(183),r(184),r(185),r(186),r(187),r(188),r(189),r(190),r(191),r(192),r(193),r(194),r(195),r(196),r(197),r(198),r(199),r(200),r(201),r(202),r(203),r(204),r(205),r(206),r(207),r(208),r(209),r(210),r(211),r(212),r(214),r(215),r(216),r(217),r(218),r(219),r(220),r(221),r(222),r(223),r(224),r(225),r(86),r(226),r(227),r(112),r(228),r(113),r(229),r(230),r(231),r(232),r(233),r(116),r(118),r(119),r(234),r(235),r(236),r(237),r(238),r(239),r(240),r(241),r(242),r(243),r(244),r(245),r(246),r(247),r(248),r(249),r(250),r(251),r(253),r(254),r(256),r(257),r(258),r(259),r(260),r(261),r(262),r(263),r(264),r(265),r(266),r(267),r(268),r(269),r(270),r(271),r(272),r(273),r(274),r(275),r(276),r(277),r(278),r(279),r(280),r(281),r(282),r(283),r(284),r(285),r(286),r(287),r(288),r(289),r(290),r(291),r(292),r(293),r(294),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(306),r(307),r(308),r(309),r(310),r(311),r(312),r(313),r(314),r(315),r(316),r(317),r(318),r(319),r(320),r(321),r(322),r(323),r(324),t.exports=r(325)},function(t,n,r){var e=r(2),u=r(14),i=r(7),o=r(0),c=r(12),a=r(30).KEY,f=r(3),s=r(47),l=r(43),h=r(33),p=r(5),v=r(94),g=r(67),y=r(132),d=r(54),b=r(1),_=r(4),S=r(15),x=r(22),m=r(32),w=r(36),E=r(97),O=r(16),M=r(8),I=r(34),P=O.f,F=M.f,A=E.f,k=e.Symbol,N=e.JSON,j=N&&N.stringify,R="prototype",T=p("_hidden"),L=p("toPrimitive"),D={}.propertyIsEnumerable,C=s("symbol-registry"),U=s("symbols"),W=s("op-symbols"),G=Object[R],V="function"==typeof k,B=e.QObject,z=!B||!B[R]||!B[R].findChild,q=i&&f(function(){return 7!=w(F({},"a",{get:function(){return F(this,"a",{value:7}).a}})).a})?function(t,n,r){var e=P(G,n);e&&delete G[n],F(t,n,r),e&&t!==G&&F(G,n,e)}:F,K=function(t){var n=U[t]=w(k[R]);return n._k=t,n},J=V&&"symbol"==typeof k.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof k},Y=function defineProperty(t,n,r){return t===G&&Y(W,n,r),b(t),n=x(n,!0),b(r),u(U,n)?(r.enumerable?(u(t,T)&&t[T][n]&&(t[T][n]=!1),r=w(r,{enumerable:m(0,!1)})):(u(t,T)||F(t,T,m(1,{})),t[T][n]=!0),q(t,n,r)):F(t,n,r)},$=function defineProperties(t,n){b(t);for(var r,e=y(n=S(n)),i=0,o=e.length;i<o;)Y(t,r=e[i++],n[r]);return t},X=function propertyIsEnumerable(t){var n=D.call(this,t=x(t,!0));return!(this===G&&u(U,t)&&!u(W,t))&&(!(n||!u(this,t)||!u(U,t)||u(this,T)&&this[T][t])||n)},H=function getOwnPropertyDescriptor(t,n){if(t=S(t),n=x(n,!0),t!==G||!u(U,n)||u(W,n)){var r=P(t,n);return!r||!u(U,n)||u(t,T)&&t[T][n]||(r.enumerable=!0),r}},Z=function getOwnPropertyNames(t){for(var n,r=A(S(t)),e=[],i=0;i<r.length;)u(U,n=r[i++])||n==T||n==a||e.push(n);return e},Q=function getOwnPropertySymbols(t){for(var n,r=t===G,e=A(r?W:S(t)),i=[],o=0;o<e.length;)!u(U,n=e[o++])||r&&!u(G,n)||i.push(U[n]);return i};V||(c((k=function Symbol(){if(this instanceof k)throw TypeError("Symbol is not a constructor!");var n=h(0<arguments.length?arguments[0]:Jt),r=function(t){this===G&&r.call(W,t),u(this,T)&&u(this[T],n)&&(this[T][n]=!1),q(this,n,m(1,t))};return i&&z&&q(G,n,{configurable:!0,set:r}),K(n)})[R],"toString",function toString(){return this._k}),O.f=H,M.f=Y,r(37).f=E.f=Z,r(49).f=X,r(53).f=Q,i&&!r(29)&&c(G,"propertyIsEnumerable",X,!0),v.f=function(t){return K(p(t))}),o(o.G+o.W+o.F*!V,{Symbol:k});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;nt<tt.length;)p(tt[nt++]);for(var rt=I(p.store),et=0;et<rt.length;)g(rt[et++]);o(o.S+o.F*!V,"Symbol",{"for":function(t){return u(C,t+="")?C[t]:C[t]=k(t)},keyFor:function keyFor(t){if(!J(t))throw TypeError(t+" is not a symbol!");for(var n in C)if(C[n]===t)return n},useSetter:function(){z=!0},useSimple:function(){z=!1}}),o(o.S+o.F*!V,"Object",{create:function create(t,n){return n===Jt?w(t):$(w(t),n)},defineProperty:Y,defineProperties:$,getOwnPropertyDescriptor:H,getOwnPropertyNames:Z,getOwnPropertySymbols:Q}),N&&o(o.S+o.F*(!V||f(function(){var t=k();return"[null]"!=j([t])||"{}"!=j({a:t})||"{}"!=j(Object(t))})),"JSON",{stringify:function stringify(t){for(var n,r,e=[t],i=1;i<arguments.length;)e.push(arguments[i++]);if(r=n=e[1],(_(n)||t!==Jt)&&!J(t))return d(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!J(n))return n}),e[1]=n,j.apply(N,e)}}),k[R][L]||r(11)(k[R],L,k[R].valueOf),l(k,"Symbol"),l(Math,"Math",!0),l(e.JSON,"JSON",!0)},function(t,n,r){t.exports=r(47)("native-function-to-string",Function.toString)},function(t,n,r){var c=r(34),a=r(53),f=r(49);t.exports=function(t){var n=c(t),r=a.f;if(r)for(var e,i=r(t),o=f.f,u=0;u<i.length;)o.call(t,e=i[u++])&&n.push(e);return n}},function(t,n,r){var e=r(0);e(e.S+e.F*!r(7),"Object",{defineProperty:r(8).f})},function(t,n,r){var e=r(0);e(e.S+e.F*!r(7),"Object",{defineProperties:r(96)})},function(t,n,r){var e=r(15),i=r(16).f;r(24)("getOwnPropertyDescriptor",function(){return function getOwnPropertyDescriptor(t,n){return i(e(t),n)}})},function(t,n,r){var e=r(0);e(e.S,"Object",{create:r(36)})},function(t,n,r){var e=r(9),i=r(17);r(24)("getPrototypeOf",function(){return function getPrototypeOf(t){return i(e(t))}})},function(t,n,r){var e=r(9),i=r(34);r(24)("keys",function(){return function keys(t){return i(e(t))}})},function(t,n,r){r(24)("getOwnPropertyNames",function(){return r(97).f})},function(t,n,r){var e=r(4),i=r(30).onFreeze;r(24)("freeze",function(n){return function freeze(t){return n&&e(t)?n(i(t)):t}})},function(t,n,r){var e=r(4),i=r(30).onFreeze;r(24)("seal",function(n){return function seal(t){return n&&e(t)?n(i(t)):t}})},function(t,n,r){var e=r(4),i=r(30).onFreeze;r(24)("preventExtensions",function(n){return function preventExtensions(t){return n&&e(t)?n(i(t)):t}})},function(t,n,r){var e=r(4);r(24)("isFrozen",function(n){return function isFrozen(t){return!e(t)||!!n&&n(t)}})},function(t,n,r){var e=r(4);r(24)("isSealed",function(n){return function isSealed(t){return!e(t)||!!n&&n(t)}})},function(t,n,r){var e=r(4);r(24)("isExtensible",function(n){return function isExtensible(t){return!!e(t)&&(!n||n(t))}})},function(t,n,r){var e=r(0);e(e.S+e.F,"Object",{assign:r(98)})},function(t,n,r){var e=r(0);e(e.S,"Object",{is:r(99)})},function(t,n,r){var e=r(0);e(e.S,"Object",{setPrototypeOf:r(71).set})},function(t,n,r){var e=r(44),i={};i[r(5)("toStringTag")]="z",i+""!="[object z]"&&r(12)(Object.prototype,"toString",function toString(){return"[object "+e(this)+"]"},!0)},function(t,n,r){var e=r(0);e(e.P,"Function",{bind:r(100)})},function(t,n,r){var e=r(8).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||r(7)&&e(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},function(t,n,r){var e=r(4),i=r(17),o=r(5)("hasInstance"),u=Function.prototype;o in u||r(8).f(u,o,{value:function(t){if("function"!=typeof this||!e(t))return!1;if(!e(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,n,r){var e=r(2),i=r(14),o=r(19),u=r(72),s=r(22),c=r(3),a=r(37).f,f=r(16).f,l=r(8).f,h=r(45).trim,p="Number",v=e[p],g=v,y=v.prototype,d=o(r(36)(y))==p,b="trim"in String.prototype,_=function(t){var n=s(t,!1);if("string"==typeof n&&2<n.length){var r,e,i,o=(n=b?n.trim():h(n,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=n.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+n}for(var u,c=n.slice(2),a=0,f=c.length;a<f;a++)if((u=c.charCodeAt(a))<48||i<u)return NaN;return parseInt(c,e)}}return+n};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function Number(t){var n=arguments.length<1?0:t,r=this;return r instanceof v&&(d?c(function(){y.valueOf.call(r)}):o(r)!=p)?u(new g(_(n)),r,v):_(n)};for(var S,x=r(7)?a(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),m=0;m<x.length;m++)i(g,S=x[m])&&!i(v,S)&&l(v,S,f(g,S));(v.prototype=y).constructor=v,r(12)(e,p,v)}},function(t,n,r){var e=r(0),f=r(20),s=r(102),l=r(74),i=1..toFixed,o=Math.floor,u=[0,0,0,0,0,0],h="Number.toFixed: incorrect invocation!",p=function(t,n){for(var r=-1,e=n;++r<6;)u[r]=(e+=t*u[r])%1e7,e=o(e/1e7)},v=function(t){for(var n=6,r=0;0<=--n;)u[n]=o((r+=u[n])/t),r=r%t*1e7},g=function(){for(var t=6,n="";0<=--t;)if(""!==n||0===t||0!==u[t]){var r=String(u[t]);n=""===n?r:n+l.call("0",7-r.length)+r}return n},y=function(t,n,r){return 0===n?r:n%2==1?y(t,n-1,r*t):y(t*t,n/2,r)};e(e.P+e.F*(!!i&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r(3)(function(){i.call({})})),"Number",{toFixed:function toFixed(t){var n,r,e,i,o=s(this,h),u=f(t),c="",a="0";if(u<0||20<u)throw RangeError(h);if(o!=o)return"NaN";if(o<=-1e21||1e21<=o)return String(o);if(o<0&&(c="-",o=-o),1e-21<o)if(r=(n=function(t){for(var n=0,r=t;4096<=r;)n+=12,r/=4096;for(;2<=r;)n+=1,r/=2;return n}(o*y(2,69,1))-69)<0?o*y(2,-n,1):o/y(2,n,1),r*=4503599627370496,0<(n=52-n)){for(p(0,r),e=u;7<=e;)p(1e7,0),e-=7;for(p(y(10,e,1),0),e=n-1;23<=e;)v(1<<23),e-=23;v(1<<e),p(1,1),v(2),a=g()}else p(0,r),p(1<<-n,0),a=g()+l.call("0",u);return a=0<u?c+((i=a.length)<=u?"0."+l.call("0",u-i)+a:a.slice(0,i-u)+"."+a.slice(i-u)):c+a}})},function(t,n,r){var e=r(0),i=r(3),o=r(102),u=1..toPrecision;e(e.P+e.F*(i(function(){return"1"!==u.call(1,Jt)})||!i(function(){u.call({})})),"Number",{toPrecision:function toPrecision(t){var n=o(this,"Number#toPrecision: incorrect invocation!");return t===Jt?u.call(n):u.call(n,t)}})},function(t,n,r){var e=r(0);e(e.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,n,r){var e=r(0),i=r(2).isFinite;e(e.S,"Number",{isFinite:function isFinite(t){return"number"==typeof t&&i(t)}})},function(t,n,r){var e=r(0);e(e.S,"Number",{isInteger:r(103)})},function(t,n,r){var e=r(0);e(e.S,"Number",{isNaN:function isNaN(t){return t!=t}})},function(t,n,r){var e=r(0),i=r(103),o=Math.abs;e(e.S,"Number",{isSafeInteger:function isSafeInteger(t){return i(t)&&o(t)<=9007199254740991}})},function(t,n,r){var e=r(0);e(e.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,n,r){var e=r(0);e(e.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,n,r){var e=r(0),i=r(104);e(e.S+e.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},function(t,n,r){var e=r(0),i=r(105);e(e.S+e.F*(Number.parseInt!=i),"Number",{parseInt:i})},function(t,n,r){var e=r(0),i=r(105);e(e.G+e.F*(parseInt!=i),{parseInt:i})},function(t,n,r){var e=r(0),i=r(104);e(e.G+e.F*(parseFloat!=i),{parseFloat:i})},function(t,n,r){var e=r(0),i=r(106),o=Math.sqrt,u=Math.acosh;e(e.S+e.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))&&u(Infinity)==Infinity),"Math",{acosh:function acosh(t){return(t=+t)<1?NaN:94906265.62425156<t?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},function(t,n,r){var e=r(0),i=Math.asinh;e(e.S+e.F*!(i&&0<1/i(0)),"Math",{asinh:function asinh(t){return isFinite(t=+t)&&0!=t?t<0?-asinh(-t):Math.log(t+Math.sqrt(t*t+1)):t}})},function(t,n,r){var e=r(0),i=Math.atanh;e(e.S+e.F*!(i&&1/i(-0)<0),"Math",{atanh:function atanh(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,n,r){var e=r(0),i=r(75);e(e.S,"Math",{cbrt:function cbrt(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{clz32:function clz32(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,n,r){var e=r(0),i=Math.exp;e(e.S,"Math",{cosh:function cosh(t){return(i(t=+t)+i(-t))/2}})},function(t,n,r){var e=r(0),i=r(76);e(e.S+e.F*(i!=Math.expm1),"Math",{expm1:i})},function(t,n,r){var e=r(0);e(e.S,"Math",{fround:r(107)})},function(t,n,r){var e=r(0),a=Math.abs;e(e.S,"Math",{hypot:function hypot(t,n){for(var r,e,i=0,o=0,u=arguments.length,c=0;o<u;)c<(r=a(arguments[o++]))?(i=i*(e=c/r)*e+1,c=r):i+=0<r?(e=r/c)*e:r;return c===Infinity?Infinity:c*Math.sqrt(i)}})},function(t,n,r){var e=r(0),i=Math.imul;e(e.S+e.F*r(3)(function(){return-5!=i(4294967295,5)||2!=i.length}),"Math",{imul:function imul(t,n){var r=65535,e=+t,i=+n,o=r&e,u=r&i;return 0|o*u+((r&e>>>16)*u+o*(r&i>>>16)<<16>>>0)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{log10:function log10(t){return Math.log(t)*Math.LOG10E}})},function(t,n,r){var e=r(0);e(e.S,"Math",{log1p:r(106)})},function(t,n,r){var e=r(0);e(e.S,"Math",{log2:function log2(t){return Math.log(t)/Math.LN2}})},function(t,n,r){var e=r(0);e(e.S,"Math",{sign:r(75)})},function(t,n,r){var e=r(0),i=r(76),o=Math.exp;e(e.S+e.F*r(3)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function sinh(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},function(t,n,r){var e=r(0),i=r(76),o=Math.exp;e(e.S,"Math",{tanh:function tanh(t){var n=i(t=+t),r=i(-t);return n==Infinity?1:r==Infinity?-1:(n-r)/(o(t)+o(-t))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{trunc:function trunc(t){return(0<t?Math.floor:Math.ceil)(t)}})},function(t,n,r){var e=r(0),o=r(35),u=String.fromCharCode,i=String.fromCodePoint;e(e.S+e.F*(!!i&&1!=i.length),"String",{fromCodePoint:function fromCodePoint(t){for(var n,r=[],e=arguments.length,i=0;i<e;){if(n=+arguments[i++],o(n,1114111)!==n)throw RangeError(n+" is not a valid code point");r.push(n<65536?u(n):u(55296+((n-=65536)>>10),n%1024+56320))}return r.join("")}})},function(t,n,r){var e=r(0),u=r(15),c=r(6);e(e.S,"String",{raw:function raw(t){for(var n=u(t.raw),r=c(n.length),e=arguments.length,i=[],o=0;o<r;)i.push(String(n[o++])),o<e&&i.push(String(arguments[o]));return i.join("")}})},function(t,n,r){r(45)("trim",function(t){return function trim(){return t(this,3)}})},function(t,n,r){var e=r(0),i=r(55)(!1);e(e.P,"String",{codePointAt:function codePointAt(t){return i(this,t)}})},function(t,n,r){var e=r(0),u=r(6),c=r(77),a="endsWith",f=""[a];e(e.P+e.F*r(78)(a),"String",{endsWith:function endsWith(t){var n=c(this,t,a),r=1<arguments.length?arguments[1]:Jt,e=u(n.length),i=r===Jt?e:Math.min(u(r),e),o=String(t);return f?f.call(n,o,i):n.slice(i-o.length,i)===o}})},function(t,n,r){var e=r(0),i=r(77),o="includes";e(e.P+e.F*r(78)(o),"String",{includes:function includes(t){return!!~i(this,t,o).indexOf(t,1<arguments.length?arguments[1]:Jt)}})},function(t,n,r){var e=r(0);e(e.P,"String",{repeat:r(74)})},function(t,n,r){var e=r(0),i=r(6),o=r(77),u="startsWith",c=""[u];e(e.P+e.F*r(78)(u),"String",{startsWith:function startsWith(t){var n=o(this,t,u),r=i(Math.min(1<arguments.length?arguments[1]:Jt,n.length)),e=String(t);return c?c.call(n,e,r):n.slice(r,r+e.length)===e}})},function(t,n,r){var e=r(55)(!0);r(79)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return n.length<=r?{value:Jt,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},function(t,n,r){r(13)("anchor",function(n){return function anchor(t){return n(this,"a","name",t)}})},function(t,n,r){r(13)("big",function(t){return function big(){return t(this,"big","","")}})},function(t,n,r){r(13)("blink",function(t){return function blink(){return t(this,"blink","","")}})},function(t,n,r){r(13)("bold",function(t){return function bold(){return t(this,"b","","")}})},function(t,n,r){r(13)("fixed",function(t){return function fixed(){return t(this,"tt","","")}})},function(t,n,r){r(13)("fontcolor",function(n){return function fontcolor(t){return n(this,"font","color",t)}})},function(t,n,r){r(13)("fontsize",function(n){return function fontsize(t){return n(this,"font","size",t)}})},function(t,n,r){r(13)("italics",function(t){return function italics(){return t(this,"i","","")}})},function(t,n,r){r(13)("link",function(n){return function link(t){return n(this,"a","href",t)}})},function(t,n,r){r(13)("small",function(t){return function small(){return t(this,"small","","")}})},function(t,n,r){r(13)("strike",function(t){return function strike(){return t(this,"strike","","")}})},function(t,n,r){r(13)("sub",function(t){return function sub(){return t(this,"sub","","")}})},function(t,n,r){r(13)("sup",function(t){return function sup(){return t(this,"sup","","")}})},function(t,n,r){var e=r(0);e(e.S,"Array",{isArray:r(54)})},function(t,n,r){var h=r(18),e=r(0),p=r(9),v=r(108),g=r(81),y=r(6),d=r(82),b=r(83);e(e.S+e.F*!r(57)(function(t){Array.from(t)}),"Array",{from:function from(t){var n,r,e,i,o=p(t),u="function"==typeof this?this:Array,c=arguments.length,a=1<c?arguments[1]:Jt,f=a!==Jt,s=0,l=b(o);if(f&&(a=h(a,2<c?arguments[2]:Jt,2)),l==Jt||u==Array&&g(l))for(r=new u(n=y(o.length));s<n;s++)d(r,s,f?a(o[s],s):o[s]);else for(i=l.call(o),r=new u;!(e=i.next()).done;s++)d(r,s,f?v(i,a,[e.value,s],!0):e.value);return r.length=s,r}})},function(t,n,r){var e=r(0),i=r(82);e(e.S+e.F*r(3)(function(){function F(){}return!(Array.of.call(F)instanceof F)}),"Array",{of:function of(){for(var t=0,n=arguments.length,r=new("function"==typeof this?this:Array)(n);t<n;)i(r,t,arguments[t++]);return r.length=n,r}})},function(t,n,r){var e=r(0),i=r(15),o=[].join;e(e.P+e.F*(r(48)!=Object||!r(21)(o)),"Array",{join:function join(t){return o.call(i(this),t===Jt?",":t)}})},function(t,n,r){var e=r(0),i=r(70),f=r(19),s=r(35),l=r(6),h=[].slice;e(e.P+e.F*r(3)(function(){i&&h.call(i)}),"Array",{slice:function slice(t,n){var r=l(this.length),e=f(this);if(n=n===Jt?r:n,"Array"==e)return h.call(this,t,n);for(var i=s(t,r),o=s(n,r),u=l(o-i),c=new Array(u),a=0;a<u;a++)c[a]="String"==e?this.charAt(i+a):this[i+a];return c}})},function(t,n,r){var e=r(0),i=r(10),o=r(9),u=r(3),c=[].sort,a=[1,2,3];e(e.P+e.F*(u(function(){a.sort(Jt)})||!u(function(){a.sort(null)})||!r(21)(c)),"Array",{sort:function sort(t){return t===Jt?c.call(o(this)):c.call(o(this),i(t))}})},function(t,n,r){var e=r(0),i=r(25)(0),o=r(21)([].forEach,!0);e(e.P+e.F*!o,"Array",{forEach:function forEach(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(4),i=r(54),o=r(5)("species");t.exports=function(t){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)||(n=Jt),e(n)&&null===(n=n[o])&&(n=Jt)),n===Jt?Array:n}},function(t,n,r){var e=r(0),i=r(25)(1);e(e.P+e.F*!r(21)([].map,!0),"Array",{map:function map(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(25)(2);e(e.P+e.F*!r(21)([].filter,!0),"Array",{filter:function filter(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(25)(3);e(e.P+e.F*!r(21)([].some,!0),"Array",{some:function some(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(25)(4);e(e.P+e.F*!r(21)([].every,!0),"Array",{every:function every(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(109);e(e.P+e.F*!r(21)([].reduce,!0),"Array",{reduce:function reduce(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,n,r){var e=r(0),i=r(109);e(e.P+e.F*!r(21)([].reduceRight,!0),"Array",{reduceRight:function reduceRight(t){return i(this,t,arguments.length,arguments[1],!0)}})},function(t,n,r){var e=r(0),i=r(52)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;e(e.P+e.F*(u||!r(21)(o)),"Array",{indexOf:function indexOf(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(15),o=r(20),u=r(6),c=[].lastIndexOf,a=!!c&&1/[1].lastIndexOf(1,-0)<0;e(e.P+e.F*(a||!r(21)(c)),"Array",{lastIndexOf:function lastIndexOf(t){if(a)return c.apply(this,arguments)||0;var n=i(this),r=u(n.length),e=r-1;for(1<arguments.length&&(e=Math.min(e,o(arguments[1]))),e<0&&(e=r+e);0<=e;e--)if(e in n&&n[e]===t)return e||0;return-1}})},function(t,n,r){var e=r(0);e(e.P,"Array",{copyWithin:r(110)}),r(31)("copyWithin")},function(t,n,r){var e=r(0);e(e.P,"Array",{fill:r(85)}),r(31)("fill")},function(t,n,r){var e=r(0),i=r(25)(5),o="find",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{find:function find(t){return i(this,t,1<arguments.length?arguments[1]:Jt)}}),r(31)(o)},function(t,n,r){var e=r(0),i=r(25)(6),o="findIndex",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{findIndex:function findIndex(t){return i(this,t,1<arguments.length?arguments[1]:Jt)}}),r(31)(o)},function(t,n,r){r(38)("Array")},function(t,n,r){var e=r(2),o=r(72),i=r(8).f,u=r(37).f,c=r(56),a=r(50),f=e.RegExp,s=f,l=f.prototype,h=/a/g,p=/a/g,v=new f(h)!==h;if(r(7)&&(!v||r(3)(function(){return p[r(5)("match")]=!1,f(h)!=h||f(p)==p||"/a/i"!=f(h,"i")}))){f=function RegExp(t,n){var r=this instanceof f,e=c(t),i=n===Jt;return!r&&e&&t.constructor===f&&i?t:o(v?new s(e&&!i?t.source:t,n):s((e=t instanceof f)?t.source:t,e&&i?a.call(t):n),r?this:l,f)};for(var g=function(n){n in f||i(f,n,{configurable:!0,get:function(){return s[n]},set:function(t){s[n]=t}})},y=u(s),d=0;d<y.length;)g(y[d++]);(l.constructor=f).prototype=l,r(12)(e,"RegExp",f)}r(38)("RegExp")},function(t,n,r){r(113);var e=r(1),i=r(50),o=r(7),u="toString",c=/./[u],a=function(t){r(12)(RegExp.prototype,u,t,!0)};r(3)(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?a(function toString(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):Jt)}):c.name!=u&&a(function toString(){return c.call(this)})},function(t,n,r){var l=r(1),h=r(6),p=r(88),v=r(58);r(59)("match",1,function(e,i,f,s){return[function match(t){var n=e(this),r=t==Jt?Jt:t[i];return r!==Jt?r.call(t,n):new RegExp(t)[i](String(n))},function(t){var n=s(f,t,this);if(n.done)return n.value;var r=l(t),e=String(this);if(!r.global)return v(r,e);for(var i,o=r.unicode,u=[],c=r.lastIndex=0;null!==(i=v(r,e));){var a=String(i[0]);""===(u[c]=a)&&(r.lastIndex=p(e,h(r.lastIndex),o)),c++}return 0===c?null:u}]})},function(t,n,r){var w=r(1),e=r(9),E=r(6),O=r(20),M=r(88),I=r(58),P=Math.max,F=Math.min,h=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g;r(59)("replace",2,function(i,o,x,m){return[function replace(t,n){var r=i(this),e=t==Jt?Jt:t[o];return e!==Jt?e.call(t,r,n):x.call(String(r),t,n)},function(t,n){var r=m(x,t,this,n);if(r.done)return r.value;var e=w(t),i=String(this),o="function"==typeof n;o||(n=String(n));var u=e.global;if(u){var c=e.unicode;e.lastIndex=0}for(var a=[];;){var f=I(e,i);if(null===f)break;if(a.push(f),!u)break;""===String(f[0])&&(e.lastIndex=M(i,E(e.lastIndex),c))}for(var s,l="",h=0,p=0;p<a.length;p++){f=a[p];for(var v=String(f[0]),g=P(F(O(f.index),
i.length),0),y=[],d=1;d<f.length;d++)y.push((s=f[d])===Jt?s:String(s));var b=f.groups;if(o){var _=[v].concat(y,g,i);b!==Jt&&_.push(b);var S=String(n.apply(Jt,_))}else S=getSubstitution(v,i,g,y,b,n);h<=g&&(l+=i.slice(h,g)+S,h=g+v.length)}return l+i.slice(h)}];function getSubstitution(o,u,c,a,f,t){var s=c+o.length,l=a.length,n=v;return f!==Jt&&(f=e(f),n=p),x.call(t,n,function(t,n){var r;switch(n.charAt(0)){case"$":return"$";case"&":return o;case"`":return u.slice(0,c);case"'":return u.slice(s);case"<":r=f[n.slice(1,-1)];break;default:var e=+n;if(0===e)return t;if(l<e){var i=h(e/10);return 0===i?t:i<=l?a[i-1]===Jt?n.charAt(1):a[i-1]+n.charAt(1):t}r=a[e-1]}return r===Jt?"":r})}})},function(t,n,r){var a=r(1),f=r(99),s=r(58);r(59)("search",1,function(e,i,u,c){return[function search(t){var n=e(this),r=t==Jt?Jt:t[i];return r!==Jt?r.call(t,n):new RegExp(t)[i](String(n))},function(t){var n=c(u,t,this);if(n.done)return n.value;var r=a(t),e=String(this),i=r.lastIndex;f(i,0)||(r.lastIndex=0);var o=s(r,e);return f(r.lastIndex,i)||(r.lastIndex=i),null===o?-1:o.index}]})},function(t,n,r){var s=r(56),b=r(1),_=r(51),S=r(88),x=r(6),m=r(58),l=r(87),e=r(3),w=Math.min,h=[].push,u="split",p="length",v="lastIndex",E=4294967295,O=!e(function(){RegExp(E,"y")});r(59)("split",2,function(i,o,g,y){var d;return d="c"=="abbc"[u](/(b)*/)[1]||4!="test"[u](/(?:)/,-1)[p]||2!="ab"[u](/(?:ab)*/)[p]||4!="."[u](/(.?)(.?)/)[p]||1<"."[u](/()()/)[p]||""[u](/.?/)[p]?function(t,n){var r=String(this);if(t===Jt&&0===n)return[];if(!s(t))return g.call(r,t,n);for(var e,i,o,u=[],c=0,a=n===Jt?E:n>>>0,f=new RegExp(t.source,(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":"")+"g");(e=l.call(f,r))&&!(c<(i=f[v])&&(u.push(r.slice(c,e.index)),1<e[p]&&e.index<r[p]&&h.apply(u,e.slice(1)),o=e[0][p],c=i,a<=u[p]));)f[v]===e.index&&f[v]++;return c===r[p]?!o&&f.test("")||u.push(""):u.push(r.slice(c)),a<u[p]?u.slice(0,a):u}:"0"[u](Jt,0)[p]?function(t,n){return t===Jt&&0===n?[]:g.call(this,t,n)}:g,[function split(t,n){var r=i(this),e=t==Jt?Jt:t[o];return e!==Jt?e.call(t,r,n):d.call(String(r),t,n)},function(t,n){var r=y(d,t,this,n,d!==g);if(r.done)return r.value;var e=b(t),i=String(this),o=_(e,RegExp),u=e.unicode,c=new o(O?e:"^(?:"+e.source+")",(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(O?"y":"g")),a=n===Jt?E:n>>>0;if(0===a)return[];if(0===i.length)return null===m(c,i)?[i]:[];for(var f=0,s=0,l=[];s<i.length;){c.lastIndex=O?s:0;var h,p=m(c,O?i:i.slice(s));if(null===p||(h=w(x(c.lastIndex+(O?0:s)),i.length))===f)s=S(i,s,u);else{if(l.push(i.slice(f,s)),l.length===a)return l;for(var v=1;v<=p.length-1;v++)if(l.push(p[v]),l.length===a)return l;s=f=h}}return l.push(i.slice(f)),l}]})},function(t,n,e){var r,i,o,u,c=e(29),a=e(2),f=e(18),s=e(44),l=e(0),h=e(4),p=e(10),v=e(39),g=e(40),y=e(51),d=e(89).set,b=e(90)(),_=e(91),S=e(114),x=e(60),m=e(115),w="Promise",E=a.TypeError,O=a.process,M=O&&O.versions,I=M&&M.v8||"",P=a[w],F="process"==s(O),A=function(){},k=i=_.f,N=!!function(){try{var t=P.resolve(1),n=(t.constructor={})[e(5)("species")]=function(t){t(A,A)};return(F||"function"==typeof PromiseRejectionEvent)&&t.then(A)instanceof n&&0!==I.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(r){}}(),j=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},R=function(l,r){if(!l._n){l._n=!0;var e=l._c;b(function(){for(var f=l._v,s=1==l._s,t=0,n=function(t){var n,r,e,i=s?t.ok:t.fail,o=t.resolve,u=t.reject,c=t.domain;try{i?(s||(2==l._h&&D(l),l._h=1),!0===i?n=f:(c&&c.enter(),n=i(f),c&&(c.exit(),e=!0)),n===t.promise?u(E("Promise-chain cycle")):(r=j(n))?r.call(n,o,u):o(n)):u(f)}catch(a){c&&!e&&c.exit(),u(a)}};t<e.length;)n(e[t++]);l._c=[],l._n=!1,r&&!l._h&&T(l)})}},T=function(o){d.call(a,function(){var t,n,r,e=o._v,i=L(o);if(i&&(t=S(function(){F?O.emit("unhandledRejection",e,o):(n=a.onunhandledrejection)?n({promise:o,reason:e}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",e)}),o._h=F||L(o)?2:1),o._a=Jt,i&&t.e)throw t.v})},L=function(t){return 1!==t._h&&0===(t._a||t._c).length},D=function(n){d.call(a,function(){var t;F?O.emit("rejectionHandled",n):(t=a.onrejectionhandled)&&t({promise:n,reason:n._v})})},C=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),R(n,!0))},U=function(r){var e,i=this;if(!i._d){i._d=!0,i=i._w||i;try{if(i===r)throw E("Promise can't be resolved itself");(e=j(r))?b(function(){var t={_w:i,_d:!1};try{e.call(r,f(U,t,1),f(C,t,1))}catch(n){C.call(t,n)}}):(i._v=r,i._s=1,R(i,!1))}catch(t){C.call({_w:i,_d:!1},t)}}};N||(P=function Promise(t){v(this,P,w,"_h"),p(t),r.call(this);try{t(f(U,this,1),f(C,this,1))}catch(n){C.call(this,n)}},(r=function Promise(t){this._c=[],this._a=Jt,this._s=0,this._d=!1,this._v=Jt,this._h=0,this._n=!1}).prototype=e(41)(P.prototype,{then:function then(t,n){var r=k(y(this,P));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=F?O.domain:Jt,this._c.push(r),this._a&&this._a.push(r),this._s&&R(this,!1),r.promise},"catch":function(t){return this.then(Jt,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=f(U,t,1),this.reject=f(C,t,1)},_.f=k=function(t){return t===P||t===u?new o(t):i(t)}),l(l.G+l.W+l.F*!N,{Promise:P}),e(43)(P,w),e(38)(w),u=e(26)[w],l(l.S+l.F*!N,w,{reject:function reject(t){var n=k(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!N),w,{resolve:function resolve(t){return m(c&&this===u?P:this,t)}}),l(l.S+l.F*!(N&&e(57)(function(t){P.all(t)["catch"](A)})),w,{all:function all(t){var u=this,n=k(u),c=n.resolve,a=n.reject,r=S(function(){var e=[],i=0,o=1;g(t,!1,function(t){var n=i++,r=!1;e.push(Jt),o++,u.resolve(t).then(function(t){r||(r=!0,e[n]=t,--o||c(e))},a)}),--o||c(e)});return r.e&&a(r.v),n.promise},race:function race(t){var n=this,r=k(n),e=r.reject,i=S(function(){g(t,!1,function(t){n.resolve(t).then(r.resolve,e)})});return i.e&&e(i.v),r.promise}})},function(t,n,r){var e=r(120),i=r(42),o="WeakSet";r(61)(o,function(t){return function WeakSet(){return t(this,0<arguments.length?arguments[0]:Jt)}},{add:function add(t){return e.def(i(this,o),t,!0)}},e,!1,!0)},function(t,n,r){var e=r(0),o=r(10),u=r(1),c=(r(2).Reflect||{}).apply,a=Function.apply;e(e.S+e.F*!r(3)(function(){c(function(){})}),"Reflect",{apply:function apply(t,n,r){var e=o(t),i=u(r);return c?c(e,n,i):a.call(e,n,i)}})},function(t,n,r){var e=r(0),c=r(36),a=r(10),f=r(1),s=r(4),i=r(3),l=r(100),h=(r(2).Reflect||{}).construct,p=i(function(){function F(){}return!(h(function(){},[],F)instanceof F)}),v=!i(function(){h(function(){})});e(e.S+e.F*(p||v),"Reflect",{construct:function construct(t,n){a(t),f(n);var r=arguments.length<3?t:a(arguments[2]);if(v&&!p)return h(t,n,r);if(t==r){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var e=[null];return e.push.apply(e,n),new(l.apply(t,e))}var i=r.prototype,o=c(s(i)?i:Object.prototype),u=Function.apply.call(t,o,n);return s(u)?u:o}})},function(t,n,r){var i=r(8),e=r(0),o=r(1),u=r(22);e(e.S+e.F*r(3)(function(){Reflect.defineProperty(i.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function defineProperty(t,n,r){o(t),n=u(n,!0),o(r);try{return i.f(t,n,r),!0}catch(e){return!1}}})},function(t,n,r){var e=r(0),i=r(16).f,o=r(1);e(e.S,"Reflect",{deleteProperty:function deleteProperty(t,n){var r=i(o(t),n);return!(r&&!r.configurable)&&delete t[n]}})},function(t,n,r){var e=r(0),i=r(1),o=function(t){this._t=i(t),this._i=0;var n,r=this._k=[];for(n in t)r.push(n)};r(80)(o,"Object",function(){var t,n=this._k;do{if(n.length<=this._i)return{value:Jt,done:!0}}while(!((t=n[this._i++])in this._t));return{value:t,done:!1}}),e(e.S,"Reflect",{enumerate:function enumerate(t){return new o(t)}})},function(t,n,r){var o=r(16),u=r(17),c=r(14),e=r(0),a=r(4),f=r(1);e(e.S,"Reflect",{get:function get(t,n){var r,e,i=arguments.length<3?t:arguments[2];return f(t)===i?t[n]:(r=o.f(t,n))?c(r,"value")?r.value:r.get!==Jt?r.get.call(i):Jt:a(e=u(t))?get(e,n,i):void 0}})},function(t,n,r){var e=r(16),i=r(0),o=r(1);i(i.S,"Reflect",{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(t,n){return e.f(o(t),n)}})},function(t,n,r){var e=r(0),i=r(17),o=r(1);e(e.S,"Reflect",{getPrototypeOf:function getPrototypeOf(t){return i(o(t))}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{has:function has(t,n){return n in t}})},function(t,n,r){var e=r(0),i=r(1),o=Object.isExtensible;e(e.S,"Reflect",{isExtensible:function isExtensible(t){return i(t),!o||o(t)}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{ownKeys:r(121)})},function(t,n,r){var e=r(0),i=r(1),o=Object.preventExtensions;e(e.S,"Reflect",{preventExtensions:function preventExtensions(t){i(t);try{return o&&o(t),!0}catch(n){return!1}}})},function(t,n,r){var c=r(8),a=r(16),f=r(17),s=r(14),e=r(0),l=r(32),h=r(1),p=r(4);e(e.S,"Reflect",{set:function set(t,n,r){var e,i,o=arguments.length<4?t:arguments[3],u=a.f(h(t),n);if(!u){if(p(i=f(t)))return set(i,n,r,o);u=l(0)}if(s(u,"value")){if(!1===u.writable||!p(o))return!1;if(e=a.f(o,n)){if(e.get||e.set||!1===e.writable)return!1;e.value=r,c.f(o,n,e)}else c.f(o,n,l(0,r));return!0}return u.set!==Jt&&(u.set.call(o,r),!0)}})},function(t,n,r){var e=r(0),i=r(71);i&&e(e.S,"Reflect",{setPrototypeOf:function setPrototypeOf(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(r){return!1}}})},function(t,n,r){var e=r(0);e(e.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,n,r){var e=r(0),i=r(9),o=r(22);e(e.P+e.F*r(3)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function toJSON(t){var n=i(this),r=o(n);return"number"!=typeof r||isFinite(r)?n.toISOString():null}})},function(t,n,r){var e=r(0),i=r(252);e(e.P+e.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},function(t,n,r){var e=r(3),i=Date.prototype.getTime,o=Date.prototype.toISOString,u=function(t){return 9<t?t:"0"+t};t.exports=e(function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))})||!e(function(){o.call(new Date(NaN))})?function toISOString(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),r=t.getUTCMilliseconds(),e=n<0?"-":9999<n?"+":"";return e+("00000"+Math.abs(n)).slice(e?-6:-4)+"-"+u(t.getUTCMonth()+1)+"-"+u(t.getUTCDate())+"T"+u(t.getUTCHours())+":"+u(t.getUTCMinutes())+":"+u(t.getUTCSeconds())+"."+(99<r?r:"0"+u(r))+"Z"}:o},function(t,n,r){var e=Date.prototype,i="Invalid Date",o="toString",u=e[o],c=e.getTime;new Date(NaN)+""!=i&&r(12)(e,o,function toString(){var t=c.call(this);return t==t?u.call(this):i})},function(t,n,r){var e=r(5)("toPrimitive"),i=Date.prototype;e in i||r(11)(i,e,r(255))},function(t,n,r){var e=r(1),i=r(22);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return i(e(this),"number"!=t)}},function(t,n,r){var e=r(0),i=r(62),o=r(92),f=r(1),s=r(35),l=r(6),u=r(4),c=r(2).ArrayBuffer,h=r(51),p=o.ArrayBuffer,v=o.DataView,a=i.ABV&&c.isView,g=p.prototype.slice,y=i.VIEW,d="ArrayBuffer";e(e.G+e.W+e.F*(c!==p),{ArrayBuffer:p}),e(e.S+e.F*!i.CONSTR,d,{isView:function isView(t){return a&&a(t)||u(t)&&y in t}}),e(e.P+e.U+e.F*r(3)(function(){return!new p(2).slice(1,Jt).byteLength}),d,{slice:function slice(t,n){if(g!==Jt&&n===Jt)return g.call(f(this),t);for(var r=f(this).byteLength,e=s(t,r),i=s(n===Jt?r:n,r),o=new(h(this,p))(l(i-e)),u=new v(this),c=new v(o),a=0;e<i;)c.setUint8(a++,u.getUint8(e++));return o}}),r(38)(d)},function(t,n,r){var e=r(0);e(e.G+e.W+e.F*!r(62).ABV,{DataView:r(92).DataView})},function(t,n,r){r(27)("Int8",1,function(e){return function Int8Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Uint8",1,function(e){return function Uint8Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Uint8",1,function(e){return function Uint8ClampedArray(t,n,r){return e(this,t,n,r)}},!0)},function(t,n,r){r(27)("Int16",2,function(e){return function Int16Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Uint16",2,function(e){return function Uint16Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Int32",4,function(e){return function Int32Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Uint32",4,function(e){return function Uint32Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Float32",4,function(e){return function Float32Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Float64",8,function(e){return function Float64Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){var e=r(0),i=r(52)(!0);e(e.P,"Array",{includes:function includes(t){return i(this,t,1<arguments.length?arguments[1]:Jt)}}),r(31)("includes")},function(t,n,r){var e=r(0),i=r(123),o=r(9),u=r(6),c=r(10),a=r(84);e(e.P,"Array",{flatMap:function flatMap(t){var n,r,e=o(this);return c(t),n=u(e.length),r=a(e,0),i(r,e,e,n,0,1,t,arguments[1]),r}}),r(31)("flatMap")},function(t,n,r){var e=r(0),i=r(123),o=r(9),u=r(6),c=r(20),a=r(84);e(e.P,"Array",{flatten:function flatten(){var t=arguments[0],n=o(this),r=u(n.length),e=a(n,0);return i(e,n,n,r,0,t===Jt?1:c(t)),e}}),r(31)("flatten")},function(t,n,r){var e=r(0),i=r(55)(!0);e(e.P,"String",{at:function at(t){return i(this,t)}})},function(t,n,r){var e=r(0),i=r(124),o=r(60),u=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);e(e.P+e.F*u,"String",{padStart:function padStart(t){return i(this,t,1<arguments.length?arguments[1]:Jt,!0)}})},function(t,n,r){var e=r(0),i=r(124),o=r(60),u=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);e(e.P+e.F*u,"String",{padEnd:function padEnd(t){return i(this,t,1<arguments.length?arguments[1]:Jt,!1)}})},function(t,n,r){r(45)("trimLeft",function(t){return function trimLeft(){return t(this,1)}},"trimStart")},function(t,n,r){r(45)("trimRight",function(t){return function trimRight(){return t(this,2)}},"trimEnd")},function(t,n,r){var e=r(0),i=r(23),o=r(6),u=r(56),c=r(50),a=RegExp.prototype,f=function(t,n){this._r=t,this._s=n};r(80)(f,"RegExp String",function next(){var t=this._r.exec(this._s);return{value:t,done:null===t}}),e(e.P,"String",{matchAll:function matchAll(t){if(i(this),!u(t))throw TypeError(t+" is not a regexp!");var n=String(this),r="flags"in a?String(t.flags):c.call(t),e=new RegExp(t.source,~r.indexOf("g")?r:"g"+r);return e.lastIndex=o(t.lastIndex),new f(e,n)}})},function(t,n,r){r(67)("asyncIterator")},function(t,n,r){r(67)("observable")},function(t,n,r){var e=r(0),a=r(121),f=r(15),s=r(16),l=r(82);e(e.S,"Object",{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(t){for(var n,r,e=f(t),i=s.f,o=a(e),u={},c=0;c<o.length;)(r=i(e,n=o[c++]))!==Jt&&l(u,n,r);return u}})},function(t,n,r){var e=r(0),i=r(125)(!1);e(e.S,"Object",{values:function values(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(125)(!0);e(e.S,"Object",{entries:function entries(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(9),o=r(10),u=r(8);r(7)&&e(e.P+r(63),"Object",{__defineGetter__:function __defineGetter__(t,n){u.f(i(this),t,{get:o(n),enumerable:!0,configurable:!0})}})},function(t,n,r){var e=r(0),i=r(9),o=r(10),u=r(8);r(7)&&e(e.P+r(63),"Object",{__defineSetter__:function __defineSetter__(t,n){u.f(i(this),t,{set:o(n),enumerable:!0,configurable:!0})}})},function(t,n,r){var e=r(0),i=r(9),o=r(22),u=r(17),c=r(16).f;r(7)&&e(e.P+r(63),"Object",{__lookupGetter__:function __lookupGetter__(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.get}while(r=u(r))}})},function(t,n,r){var e=r(0),i=r(9),o=r(22),u=r(17),c=r(16).f;r(7)&&e(e.P+r(63),"Object",{__lookupSetter__:function __lookupSetter__(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.set}while(r=u(r))}})},function(t,n,r){var e=r(0);e(e.P+e.R,"Map",{toJSON:r(126)("Map")})},function(t,n,r){var e=r(0);e(e.P+e.R,"Set",{toJSON:r(126)("Set")})},function(t,n,r){r(64)("Map")},function(t,n,r){r(64)("Set")},function(t,n,r){r(64)("WeakMap")},function(t,n,r){r(64)("WeakSet")},function(t,n,r){r(65)("Map")},function(t,n,r){r(65)("Set")},function(t,n,r){r(65)("WeakMap")},function(t,n,r){r(65)("WeakSet")},function(t,n,r){var e=r(0);e(e.G,{global:r(2)})},function(t,n,r){var e=r(0);e(e.S,"System",{global:r(2)})},function(t,n,r){var e=r(0),i=r(19);e(e.S,"Error",{isError:function isError(t){return"Error"===i(t)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{clamp:function clamp(t,n,r){return Math.min(r,Math.max(n,t))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{DEG_PER_RAD:Math.PI/180})},function(t,n,r){var e=r(0),i=180/Math.PI;e(e.S,"Math",{degrees:function degrees(t){return t*i}})},function(t,n,r){var e=r(0),o=r(128),u=r(107);e(e.S,"Math",{fscale:function fscale(t,n,r,e,i){return u(o(t,n,r,e,i))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{iaddh:function iaddh(t,n,r,e){var i=t>>>0,o=r>>>0;return(n>>>0)+(e>>>0)+((i&o|(i|o)&~(i+o>>>0))>>>31)|0}})},function(t,n,r){var e=r(0);e(e.S,"Math",{isubh:function isubh(t,n,r,e){var i=t>>>0,o=r>>>0;return(n>>>0)-(e>>>0)-((~i&o|~(i^o)&i-o>>>0)>>>31)|0}})},function(t,n,r){var e=r(0);e(e.S,"Math",{imulh:function imulh(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>16,c=e>>16,a=(u*o>>>0)+(i*o>>>16);return u*c+(a>>16)+((i*c>>>0)+(65535&a)>>16)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{RAD_PER_DEG:180/Math.PI})},function(t,n,r){var e=r(0),i=Math.PI/180;e(e.S,"Math",{radians:function radians(t){return t*i}})},function(t,n,r){var e=r(0);e(e.S,"Math",{scale:r(128)})},function(t,n,r){var e=r(0);e(e.S,"Math",{umulh:function umulh(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>>16,c=e>>>16,a=(u*o>>>0)+(i*o>>>16);return u*c+(a>>>16)+((i*c>>>0)+(65535&a)>>>16)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{signbit:function signbit(t){return(t=+t)!=t?t:0==t?1/t==Infinity:0<t}})},function(t,n,r){var e=r(0),i=r(26),o=r(2),u=r(51),c=r(115);e(e.P+e.R,"Promise",{"finally":function(n){var r=u(this,i.Promise||o.Promise),t="function"==typeof n;return this.then(t?function(t){return c(r,n()).then(function(){return t})}:n,t?function(t){return c(r,n()).then(function(){throw t})}:n)}})},function(t,n,r){var e=r(0),i=r(91),o=r(114);e(e.S,"Promise",{"try":function(t){var n=i.f(this),r=o(t);return(r.e?n.reject:n.resolve)(r.v),n.promise}})},function(t,n,r){var e=r(28),i=r(1),o=e.key,u=e.set;e.exp({defineMetadata:function defineMetadata(t,n,r,e){u(t,n,i(r),o(e))}})},function(t,n,r){var e=r(28),o=r(1),u=e.key,c=e.map,a=e.store;e.exp({deleteMetadata:function deleteMetadata(t,n){var r=arguments.length<3?Jt:u(arguments[2]),e=c(o(n),r,!1);if(e===Jt||!e["delete"](t))return!1;if(e.size)return!0;var i=a.get(n);return i["delete"](r),!!i.size||a["delete"](n)}})},function(t,n,r){var e=r(28),i=r(1),o=r(17),u=e.has,c=e.get,a=e.key,f=function(t,n,r){if(u(t,n,r))return c(t,n,r);var e=o(n);return null!==e?f(t,e,r):Jt};e.exp({getMetadata:function getMetadata(t,n){return f(t,i(n),arguments.length<3?Jt:a(arguments[2]))}})},function(t,n,r){var o=r(118),u=r(127),e=r(28),i=r(1),c=r(17),a=e.keys,f=e.key,s=function(t,n){var r=a(t,n),e=c(t);if(null===e)return r;var i=s(e,n);return i.length?r.length?u(new o(r.concat(i))):i:r};e.exp({getMetadataKeys:function getMetadataKeys(t){return s(i(t),arguments.length<2?Jt:f(arguments[1]))}})},function(t,n,r){var e=r(28),i=r(1),o=e.get,u=e.key;e.exp({getOwnMetadata:function getOwnMetadata(t,n){return o(t,i(n),arguments.length<3?Jt:u(arguments[2]))}})},function(t,n,r){var e=r(28),i=r(1),o=e.keys,u=e.key;e.exp({getOwnMetadataKeys:function getOwnMetadataKeys(t){return o(i(t),arguments.length<2?Jt:u(arguments[1]))}})},function(t,n,r){var e=r(28),i=r(1),o=r(17),u=e.has,c=e.key,a=function(t,n,r){if(u(t,n,r))return!0;var e=o(n);return null!==e&&a(t,e,r)};e.exp({hasMetadata:function hasMetadata(t,n){return a(t,i(n),arguments.length<3?Jt:c(arguments[2]))}})},function(t,n,r){var e=r(28),i=r(1),o=e.has,u=e.key;e.exp({hasOwnMetadata:function hasOwnMetadata(t,n){return o(t,i(n),arguments.length<3?Jt:u(arguments[2]))}})},function(t,n,r){var e=r(28),i=r(1),o=r(10),u=e.key,c=e.set;e.exp({metadata:function metadata(r,e){return function decorator(t,n){c(r,e,(n!==Jt?i:o)(t),u(n))}}})},function(t,n,r){var e=r(0),i=r(90)(),o=r(2).process,u="process"==r(19)(o);e(e.G,{asap:function asap(t){var n=u&&o.domain;i(n?n.bind(t):t)}})},function(t,n,r){var e=r(0),o=r(2),u=r(26),i=r(90)(),c=r(5)("observable"),a=r(10),f=r(1),s=r(39),l=r(41),h=r(11),p=r(40),v=p.RETURN,g=function(t){return null==t?Jt:a(t)},y=function(t){var n=t._c;n&&(t._c=Jt,n())},d=function(t){return t._o===Jt},b=function(t){d(t)||(t._o=Jt,y(t))},_=function(t,n){f(t),this._c=Jt,this._o=t,t=new S(this);try{var r=n(t),e=r;null!=r&&("function"==typeof r.unsubscribe?r=function(){e.unsubscribe()}:a(r),this._c=r)}catch(i){return void t.error(i)}d(this)&&y(this)};_.prototype=l({},{unsubscribe:function unsubscribe(){b(this)}});var S=function(t){this._s=t};S.prototype=l({},{next:function next(t){var n=this._s;if(!d(n)){var r=n._o;try{var e=g(r.next);if(e)return e.call(r,t)}catch(i){try{b(n)}finally{throw i}}}},error:function error(t){var n=this._s;if(d(n))throw t;var r=n._o;n._o=Jt;try{var e=g(r.error);if(!e)throw t;t=e.call(r,t)}catch(i){try{y(n)}finally{throw i}}return y(n),t},complete:function complete(t){var n=this._s;if(!d(n)){var r=n._o;n._o=Jt;try{var e=g(r.complete);t=e?e.call(r,t):Jt}catch(i){try{y(n)}finally{throw i}}return y(n),t}}});var x=function Observable(t){s(this,x,"Observable","_f")._f=a(t)};l(x.prototype,{subscribe:function subscribe(t){return new _(t,this._f)},forEach:function forEach(i){var n=this;return new(u.Promise||o.Promise)(function(t,r){a(i);var e=n.subscribe({next:function(t){try{return i(t)}catch(n){r(n),e.unsubscribe()}},error:r,complete:t})})}}),l(x,{from:function from(e){var t="function"==typeof this?this:x,n=g(f(e)[c]);if(n){var r=f(n.call(e));return r.constructor===t?r:new t(function(t){return r.subscribe(t)})}return new t(function(n){var r=!1;return i(function(){if(!r){try{if(p(e,!1,function(t){if(n.next(t),r)return v})===v)return}catch(t){if(r)throw t;return void n.error(t)}n.complete()}}),function(){r=!0}})},of:function of(){for(var t=0,n=arguments.length,e=new Array(n);t<n;)e[t]=arguments[t++];return new("function"==typeof this?this:x)(function(n){var r=!1;return i(function(){if(!r){for(var t=0;t<e.length;++t)if(n.next(e[t]),r)return;n.complete()}}),function(){r=!0}})}}),h(x.prototype,c,function(){return this}),e(e.G,{Observable:x}),r(38)("Observable")},function(t,n,r){var e=r(0),i=r(89);e(e.G+e.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,n,r){for(var e=r(86),i=r(34),o=r(12),u=r(2),c=r(11),a=r(46),f=r(5),s=f("iterator"),l=f("toStringTag"),h=a.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(p),g=0;g<v.length;g++){var y,d=v[g],b=p[d],_=u[d],S=_&&_.prototype;if(S&&(S[s]||c(S,s,h),S[l]||c(S,l,d),a[d]=h,b))for(y in e)S[y]||o(S,y,e[y],!0)}},function(t,n,r){var e=r(2),i=r(0),o=r(60),u=[].slice,c=/MSIE .\./.test(o),a=function(i){return function(t,n){var r=2<arguments.length,e=!!r&&u.call(arguments,2);return i(r?function(){("function"==typeof t?t:Function(t)).apply(this,e)}:t,n)}};i(i.G+i.B+i.F*c,{setTimeout:a(e.setTimeout),setInterval:a(e.setInterval)})}]), true&&module.exports?module.exports=e: true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return e}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(1,1);
//# sourceMappingURL=shim.min.js.map

/***/ }),

/***/ "./node_modules/systemjs/dist/system.js":
/*!**********************************************!*\
  !*** ./node_modules/systemjs/dist/system.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, System) {/*
* SystemJS 3.1.1
*/
(function () {
  const hasSelf = typeof self !== 'undefined';

  const envGlobal = hasSelf ? self : global;

  let baseUrl;
  if (typeof location !== 'undefined') {
    baseUrl = location.href.split('#')[0].split('?')[0];
    const lastSepIndex = baseUrl.lastIndexOf('/');
    if (lastSepIndex !== -1)
      baseUrl = baseUrl.slice(0, lastSepIndex + 1);
  }

  const backslashRegEx = /\\/g;
  function resolveIfNotPlainOrUrl (relUrl, parentUrl) {
    if (relUrl.indexOf('\\') !== -1)
      relUrl = relUrl.replace(backslashRegEx, '/');
    // protocol-relative
    if (relUrl[0] === '/' && relUrl[1] === '/') {
      return parentUrl.slice(0, parentUrl.indexOf(':') + 1) + relUrl;
    }
    // relative-url
    else if (relUrl[0] === '.' && (relUrl[1] === '/' || relUrl[1] === '.' && (relUrl[2] === '/' || relUrl.length === 2 && (relUrl += '/')) ||
        relUrl.length === 1  && (relUrl += '/')) ||
        relUrl[0] === '/') {
      const parentProtocol = parentUrl.slice(0, parentUrl.indexOf(':') + 1);
      // Disabled, but these cases will give inconsistent results for deep backtracking
      //if (parentUrl[parentProtocol.length] !== '/')
      //  throw new Error('Cannot resolve');
      // read pathname from parent URL
      // pathname taken to be part after leading "/"
      let pathname;
      if (parentUrl[parentProtocol.length + 1] === '/') {
        // resolving to a :// so we need to read out the auth and host
        if (parentProtocol !== 'file:') {
          pathname = parentUrl.slice(parentProtocol.length + 2);
          pathname = pathname.slice(pathname.indexOf('/') + 1);
        }
        else {
          pathname = parentUrl.slice(8);
        }
      }
      else {
        // resolving to :/ so pathname is the /... part
        pathname = parentUrl.slice(parentProtocol.length + (parentUrl[parentProtocol.length] === '/'));
      }

      if (relUrl[0] === '/')
        return parentUrl.slice(0, parentUrl.length - pathname.length - 1) + relUrl;

      // join together and split for removal of .. and . segments
      // looping the string instead of anything fancy for perf reasons
      // '../../../../../z' resolved to 'x/y' is just 'z'
      const segmented = pathname.slice(0, pathname.lastIndexOf('/') + 1) + relUrl;

      const output = [];
      let segmentIndex = -1;
      for (let i = 0; i < segmented.length; i++) {
        // busy reading a segment - only terminate on '/'
        if (segmentIndex !== -1) {
          if (segmented[i] === '/') {
            output.push(segmented.slice(segmentIndex, i + 1));
            segmentIndex = -1;
          }
        }

        // new segment - check if it is relative
        else if (segmented[i] === '.') {
          // ../ segment
          if (segmented[i + 1] === '.' && (segmented[i + 2] === '/' || i + 2 === segmented.length)) {
            output.pop();
            i += 2;
          }
          // ./ segment
          else if (segmented[i + 1] === '/' || i + 1 === segmented.length) {
            i += 1;
          }
          else {
            // the start of a new segment as below
            segmentIndex = i;
          }
        }
        // it is the start of a new segment
        else {
          segmentIndex = i;
        }
      }
      // finish reading out the last segment
      if (segmentIndex !== -1)
        output.push(segmented.slice(segmentIndex));
      return parentUrl.slice(0, parentUrl.length - pathname.length) + output.join('');
    }
  }

  /*
   * Import maps implementation
   * 
   * To make lookups fast we pre-resolve the entire import map
   * and then match based on backtracked hash lookups
   * 
   */

  function resolveUrl (relUrl, parentUrl) {
    return resolveIfNotPlainOrUrl(relUrl, parentUrl) ||
        relUrl.indexOf(':') !== -1 && relUrl ||
        resolveIfNotPlainOrUrl('./' + relUrl, parentUrl);
  }

  function resolvePackages(pkgs, baseUrl) {
    var outPkgs = {};
    for (var p in pkgs) {
      var value = pkgs[p];
      // TODO package fallback support
      if (typeof value !== 'string')
        continue;
      outPkgs[resolveIfNotPlainOrUrl(p, baseUrl) || p] = resolveUrl(value, baseUrl);
    }
    return outPkgs;
  }

  function parseImportMap (json, baseUrl) {
    const imports = resolvePackages(json.imports, baseUrl) || {};
    const scopes = {};
    if (json.scopes) {
      for (let scopeName in json.scopes) {
        const scope = json.scopes[scopeName];
        let resolvedScopeName = resolveUrl(scopeName, baseUrl);
        if (resolvedScopeName[resolvedScopeName.length - 1] !== '/')
          resolvedScopeName += '/';
        scopes[resolvedScopeName] = resolvePackages(scope, resolvedScopeName) || {};
      }
    }

    return { imports: imports, scopes: scopes };
  }

  function getMatch (path, matchObj) {
    if (matchObj[path])
      return path;
    let sepIndex = path.length;
    do {
      const segment = path.slice(0, sepIndex + 1);
      if (segment in matchObj)
        return segment;
    } while ((sepIndex = path.lastIndexOf('/', sepIndex - 1)) !== -1)
  }

  function applyPackages (id, packages) {
    const pkgName = getMatch(id, packages);
    if (pkgName) {
      const pkg = packages[pkgName];
      if (pkg === null)

      if (id.length > pkgName.length && pkg[pkg.length - 1] !== '/')
        console.warn("Invalid package target " + pkg + " for '" + pkgName + "' should have a trailing '/'.");
      return pkg + id.slice(pkgName.length);
    }
  }

  function resolveImportMap (id, parentUrl, importMap) {
    const urlResolved = resolveIfNotPlainOrUrl(id, parentUrl) || id.indexOf(':') !== -1 && id;
    if (urlResolved)
      id = urlResolved;
    const scopeName = getMatch(parentUrl, importMap.scopes);
    if (scopeName) {
      const scopePackages = importMap.scopes[scopeName];
      const packageResolution = applyPackages(id, scopePackages);
      if (packageResolution)
        return packageResolution;
    }
    return applyPackages(id, importMap.imports) || urlResolved || throwBare(id, parentUrl);
  }

  function throwBare (id, parentUrl) {
    throw new Error('Unable to resolve bare specifier "' + id + (parentUrl ? '" from ' + parentUrl : '"'));
  }

  /*
   * SystemJS Core
   * 
   * Provides
   * - System.import
   * - System.register support for
   *     live bindings, function hoisting through circular references,
   *     reexports, dynamic import, import.meta.url, top-level await
   * - System.getRegister to get the registration
   * - Symbol.toStringTag support in Module objects
   * - Hookable System.createContext to customize import.meta
   * - System.onload(id, err?) handler for tracing / hot-reloading
   * 
   * Core comes with no System.prototype.resolve or
   * System.prototype.instantiate implementations
   */

  const hasSymbol = typeof Symbol !== 'undefined';
  const toStringTag = hasSymbol && Symbol.toStringTag;
  const REGISTRY = hasSymbol ? Symbol() : '@';

  function SystemJS () {
    this[REGISTRY] = {};
  }

  const systemJSPrototype = SystemJS.prototype;
  systemJSPrototype.import = function (id, parentUrl) {
    const loader = this;
    return Promise.resolve(loader.resolve(id, parentUrl))
    .then(function (id) {
      const load = getOrCreateLoad(loader, id);
      return load.C || topLevelLoad(loader, load);
    });
  };

  // Hookable createContext function -> allowing eg custom import meta
  systemJSPrototype.createContext = function (parentId) {
    return {
      url: parentId
    };
  };

  // onLoad(id, err) provided for tracing / hot-reloading
  systemJSPrototype.onload = function () {};

  let lastRegister;
  systemJSPrototype.register = function (deps, declare) {
    lastRegister = [deps, declare];
  };

  /*
   * getRegister provides the last anonymous System.register call
   */
  systemJSPrototype.getRegister = function () {
    const _lastRegister = lastRegister;
    lastRegister = undefined;
    return _lastRegister;
  };

  function getOrCreateLoad (loader, id, firstParentUrl) {
    let load = loader[REGISTRY][id];
    if (load)
      return load;

    const importerSetters = [];
    const ns = Object.create(null);
    if (toStringTag)
      Object.defineProperty(ns, toStringTag, { value: 'Module' });
    
    let instantiatePromise = Promise.resolve()
    .then(function () {
      return loader.instantiate(id, firstParentUrl);
    })
    .then(function (registration) {
      if (!registration)
        throw new Error('Module ' + id + ' did not instantiate');
      function _export (name, value) {
        // note if we have hoisted exports (including reexports)
        load.h = true;
        let changed = false;
        if (typeof name !== 'object') {
          if (!(name in ns) || ns[name] !== value) {
            ns[name] = value;
            changed = true;
          }
        }
        else {
          for (let p in name) {
            let value = name[p];
            if (!(p in ns) || ns[p] !== value) {
              ns[p] = value;
              changed = true;
            }
          }
        }
        if (changed)
          for (let i = 0; i < importerSetters.length; i++)
            importerSetters[i](ns);
        return value;
      }
      const declared = registration[1](_export, registration[1].length === 2 ? {
        import: function (importId) {
          return loader.import(importId, id);
        },
        meta: loader.createContext(id)
      } : undefined);
      load.e = declared.execute || function () {};
      return [registration[0], declared.setters || []];
    });

    instantiatePromise = instantiatePromise.catch(function (err) {
        loader.onload(load.id, err);
        throw err;
      });

    const linkPromise = instantiatePromise
    .then(function (instantiation) {
      return Promise.all(instantiation[0].map(function (dep, i) {
        const setter = instantiation[1][i];
        return Promise.resolve(loader.resolve(dep, id))
        .then(function (depId) {
          const depLoad = getOrCreateLoad(loader, depId, id);
          // depLoad.I may be undefined for already-evaluated
          return Promise.resolve(depLoad.I)
          .then(function () {
            if (setter) {
              depLoad.i.push(setter);
              // only run early setters when there are hoisted exports of that module
              // the timing works here as pending hoisted export calls will trigger through importerSetters
              if (depLoad.h || !depLoad.I)
                setter(depLoad.n);
            }
            return depLoad;
          });
        })
      }))
      .then(function (depLoads) {
        load.d = depLoads;
      });
    });

    linkPromise.catch(function (err) {
      load.e = null;
      load.er = err;
    });

    // Captial letter = a promise function
    return load = loader[REGISTRY][id] = {
      id: id,
      // importerSetters, the setters functions registered to this dependency
      // we retain this to add more later
      i: importerSetters,
      // module namespace object
      n: ns,

      // instantiate
      I: instantiatePromise,
      // link
      L: linkPromise,
      // whether it has hoisted exports
      h: false,

      // On instantiate completion we have populated:
      // dependency load records
      d: undefined,
      // execution function
      // set to NULL immediately after execution (or on any failure) to indicate execution has happened
      // in such a case, pC should be used, and pLo, pLi will be emptied
      e: undefined,

      // On execution we have populated:
      // the execution error if any
      er: undefined,
      // in the case of TLA, the execution promise
      E: undefined,

      // On execution, pLi, pLo, e cleared

      // Promise for top-level completion
      C: undefined
    };
  }

  function instantiateAll (loader, load, loaded) {
    if (!loaded[load.id]) {
      loaded[load.id] = true;
      // load.L may be undefined for already-instantiated
      return Promise.resolve(load.L)
      .then(function () {
        return Promise.all(load.d.map(function (dep) {
          return instantiateAll(loader, dep, loaded);
        }));
      })
    }
  }

  function topLevelLoad (loader, load) {
    return load.C = instantiateAll(loader, load, {})
    .then(function () {
      return postOrderExec(loader, load, {});
    })
    .then(function () {
      return load.n;
    });
  }

  // the closest we can get to call(undefined)
  const nullContext = Object.freeze(Object.create(null));

  // returns a promise if and only if a top-level await subgraph
  // throws on sync errors
  function postOrderExec (loader, load, seen) {
    if (seen[load.id])
      return;
    seen[load.id] = true;

    if (!load.e) {
      if (load.er)
        throw load.er;
      if (load.E)
        return load.E;
      return;
    }

    // deps execute first, unless circular
    let depLoadPromises;
    load.d.forEach(function (depLoad) {
      {
        try {
          const depLoadPromise = postOrderExec(loader, depLoad, seen);
          if (depLoadPromise)
            (depLoadPromises = depLoadPromises || []).push(depLoadPromise);
        }
        catch (err) {
          loader.onload(load.id, err);
          throw err;
        }
      }
    });
    if (depLoadPromises) {
      return Promise.all(depLoadPromises)
        .then(doExec)
        .catch(function (err) {
          loader.onload(load.id, err);
          throw err;
        });
    }

    return doExec();

    function doExec () {
      try {
        let execPromise = load.e.call(nullContext);
        if (execPromise) {
          execPromise = execPromise.then(function () {
              load.C = load.n;
              load.E = null; // indicates completion
              loader.onload(load.id, null);
            }, function (err) {
              loader.onload(load.id, err);
              throw err;
            });
          return load.E = load.E || execPromise;
        }
        // (should be a promise, but a minify optimization to leave out Promise.resolve)
        load.C = load.n;
        loader.onload(load.id, null);
      }
      catch (err) {
        loader.onload(load.id, err);
        load.er = err;
        throw err;
      }
      finally {
        load.L = load.I = undefined;
        load.e = null;
      }
    }
  }

  envGlobal.System = new SystemJS();

  /*
   * Supports loading System.register via script tag injection
   */

  let err;
  if (typeof window !== 'undefined')
    window.addEventListener('error', function (e) {
      err = e.error;
    });

  const systemRegister = systemJSPrototype.register;
  systemJSPrototype.register = function (deps, declare) {
    err = undefined;
    systemRegister.call(this, deps, declare);
  };

  systemJSPrototype.instantiate = function (url, firstParentUrl) {
    const loader = this;
    return new Promise(function (resolve, reject) {
      const script = document.createElement('script');
      script.charset = 'utf-8';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.addEventListener('error', function () {
        reject(new Error('Error loading ' + url + (firstParentUrl ? ' from ' + firstParentUrl : '')));
      });
      script.addEventListener('load', function () {
        document.head.removeChild(script);
        // Note URL normalization issues are going to be a careful concern here
        if (err) {
          reject(err);
          return err = undefined;
        }
        else {
          resolve(loader.getRegister());
        }
      });
      script.src = url;
      document.head.appendChild(script);
    });
  };

  /*
   * Supports loading System.register in workers
   */

  if (hasSelf && typeof importScripts === 'function')
    systemJSPrototype.instantiate = function (url) {
      const loader = this;
      return new Promise(function (resolve, reject) {
        try {
          importScripts(url);
        }
        catch (e) {
          reject(e);
        }
        resolve(loader.getRegister());
      });
    };

  /*
   * SystemJS global script loading support
   * Extra for the s.js build only
   * (Included by default in system.js build)
   */
  (function (global) {

  const systemJSPrototype = System.constructor.prototype;

  // safari unpredictably lists some new globals first or second in object order
  let firstGlobalProp, secondGlobalProp, lastGlobalProp;
  function getGlobalProp () {
    let cnt = 0;
    let lastProp;
    for (let p in global) {
      if (!global.hasOwnProperty(p))
        continue;
      if (cnt === 0 && p !== firstGlobalProp || cnt === 1 && p !== secondGlobalProp)
        return p;
      cnt++;
      lastProp = p;
    }
    if (lastProp !== lastGlobalProp)
      return lastProp;
  }

  function noteGlobalProps () {
    // alternatively Object.keys(global).pop()
    // but this may be faster (pending benchmarks)
    firstGlobalProp = secondGlobalProp = undefined;
    for (let p in global) {
      if (!global.hasOwnProperty(p))
        continue;
      if (!firstGlobalProp)
        firstGlobalProp = p;
      else if (!secondGlobalProp)
        secondGlobalProp = p;
      lastGlobalProp = p;
    }
    return lastGlobalProp;
  }

  const impt = systemJSPrototype.import;
  systemJSPrototype.import = function (id, parentUrl) {
    noteGlobalProps();
    return impt.call(this, id, parentUrl);
  };

  const emptyInstantiation = [[], function () { return {} }];

  const getRegister = systemJSPrototype.getRegister;
  systemJSPrototype.getRegister = function () {
    const lastRegister = getRegister.call(this);
    if (lastRegister)
      return lastRegister;
    
    // no registration -> attempt a global detection as difference from snapshot
    // when multiple globals, we take the global value to be the last defined new global object property
    // for performance, this will not support multi-version / global collisions as previous SystemJS versions did
    // note in Edge, deleting and re-adding a global does not change its ordering
    const globalProp = getGlobalProp();
    if (!globalProp)
      return emptyInstantiation;
    
    let globalExport;
    try {
      globalExport = global[globalProp];
    }
    catch (e) {
      return emptyInstantiation;
    }

    return [[], function (_export) {
      return { execute: function () { _export('default', globalExport); } };
    }];
  };

  })(typeof self !== 'undefined' ? self : global);

  /*
   * Loads WASM based on file extension detection
   * Assumes successive instantiate will handle other files
   */
  const instantiate = systemJSPrototype.instantiate;
  systemJSPrototype.instantiate = function (url, parent) {
    if (url.slice(-5) !== '.wasm')
      return instantiate.call(this, url, parent);
    
    return fetch(url)
    .then(function (res) {
      if (!res.ok)
        throw new Error(res.status + ' ' + res.statusText + ' ' + res.url + (parent ? ' loading from ' + parent : ''));

      if (WebAssembly.compileStreaming)
        return WebAssembly.compileStreaming(res);
      
      return res.arrayBuffer()
      .then(function (buf) {
        return WebAssembly.compile(buf);
      });
    })
    .then(function (module) {
      const deps = [];
      const setters = [];
      const importObj = {};

      // we can only set imports if supported (eg early Safari doesnt support)
      if (WebAssembly.Module.imports)
        WebAssembly.Module.imports(module).forEach(function (impt) {
          const key = impt.module;
          setters.push(function (m) {
            importObj[key] = m;
          });
          if (deps.indexOf(key) === -1)
            deps.push(key);
        });

      return [deps, function (_export) {
        return {
          setters: setters,
          execute: function () {
            return WebAssembly.instantiate(module, importObj)
            .then(function (instance) {
              _export(instance.exports);
            });
          }
        };
      }];
    });
  };

  /*
   * Import map support for SystemJS
   * 
   * <script type="systemjs-importmap">{}</script>
   * OR
   * <script type="systemjs-importmap" src=package.json></script>
   * 
   * Only those import maps available at the time of SystemJS initialization will be loaded
   * and they will be loaded in DOM order.
   * 
   * There is no support for dynamic import maps injection currently.
   */

  const baseMap = Object.create(null);
  baseMap.imports = Object.create(null);
  baseMap.scopes = Object.create(null);
  let importMapPromise = Promise.resolve(baseMap);
  let acquiringImportMaps = typeof document !== 'undefined';

  if (acquiringImportMaps) {
    document.querySelectorAll('script[type="systemjs-importmap"][src]').forEach(function (script) {
      script._j = fetch(script.src).then(function (resp) {
        return resp.json();
      });
    });
  }

  function mergeImportMap(originalMap, newMap) {
    for (let i in newMap.imports) {
      originalMap.imports[i] = newMap.imports[i];
    }
    for (let i in newMap.scopes) {
      originalMap.scopes[i] = newMap.scopes[i];
    }
    return originalMap;
  }

  systemJSPrototype.resolve = function (id, parentUrl) {
    parentUrl = parentUrl || baseUrl;

    if (acquiringImportMaps) {
      acquiringImportMaps = false;
      document.querySelectorAll('script[type="systemjs-importmap"]').forEach(function (script) {
        importMapPromise = importMapPromise.then(function (map) {
          return (script._j || script.src && fetch(script.src).then(function (resp) {return resp.json()}) || Promise.resolve(JSON.parse(script.innerHTML)))
          .then(function (json) {
            return mergeImportMap(map, parseImportMap(json, script.src || baseUrl));
          });
        });
      });
    }

    return importMapPromise
    .then(function (importMap) {
      return resolveImportMap(id, parentUrl, importMap);
    });
  };

  const toStringTag$1 = typeof Symbol !== 'undefined' && Symbol.toStringTag;

  systemJSPrototype.get = function (id) {
    const load = this[REGISTRY][id];
    if (load && load.e === null && !load.E) {
      if (load.er)
        return null;
      return load.n;
    }
  };

  systemJSPrototype.set = function (id, module) {
    let ns;
    if (toStringTag$1 && module[toStringTag$1] === 'Module') {
      ns = module;
    }
    else {
      ns = Object.assign(Object.create(null), module);
      if (toStringTag$1)
        Object.defineProperty(ns, toStringTag$1, { value: 'Module' });
    }
    const done = Promise.resolve(ns);
    this.delete(id);
    this[REGISTRY][id] = {
      id: id,
      i: [],
      n: ns,
      I: done,
      L: done,
      h: false,
      d: [],
      e: null,
      er: undefined,
      E: undefined,
      C: done
    };
    return ns;
  };

  systemJSPrototype.has = function (id) {
    const load = this[REGISTRY][id];
    return load && load.e === null && !load.E;
  };

  // Delete function provided for hot-reloading use cases
  systemJSPrototype.delete = function (id) {
    const load = this.get(id);
    if (load === undefined)
      return false;
    // remove from importerSetters
    // (release for gc)
    if (load && load.d)
      load.d.forEach(function (depLoad) {
        const importerIndex = depLoad.i.indexOf(load);
        if (importerIndex !== -1)
          depLoad.i.splice(importerIndex, 1);
      });
    return delete this[REGISTRY][id];
  };

  const iterator = typeof Symbol !== 'undefined' && Symbol.iterator;

  systemJSPrototype.entries = function () {
    const loader = this, keys = Object.keys(loader[REGISTRY]);
    let index = 0, ns, key;
    return {
      next () {
        while (
          (key = keys[index++]) !== undefined && 
          (ns = loader.get(key)) === undefined
        );
        return {
          done: key === undefined,
          value: key !== undefined && [key, ns]
        };
      },
      [iterator]: function() { return this }
    };
  };

}());

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/system.js */ "./node_modules/webpack/buildin/system.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/system.js":
/*!***********************************!*\
  !*** (webpack)/buildin/system.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Provide a "System" global.
module.exports = {
	// Make sure import is only used as "System.import"
	import: function() {
		throw new Error("System.import cannot be used indirectly");
	}
};


/***/ }),

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    var checkDuplicate = global[('__zone_symbol__forceDuplicateZoneCheck')] === true;
    if (global['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
        }
        else {
            return global['Zone'];
        }
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                    throw Error('Already loaded patch: ' + name);
                }
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = undefined;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) { return delegate.hasTask(target, hasTaskState); },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
        },
        onCancelTask: function (delegate, _, target, task) { return delegate.cancelTask(target, task); }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec &&
                (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ? ' or \'' + fromState2 + '\'' : '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                var nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                if (!nativeThen) {
                    // native Promise is not patchable, we need to use `then` directly
                    // issue 1078
                    nativeThen = nativeMicroTaskQueuePromise['then'];
                }
                nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return []; },
        patchThen: function () { return noop; },
        patchMacroTask: function () { return noop; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
        patchEventPrototype: function () { return noop; },
        isIEOrEdge: function () { return false; },
        getGlobalObjects: function () { return undefined; },
        ObjectDefineProperty: function () { return noop; },
        ObjectGetOwnPropertyDescriptor: function () { return undefined; },
        ObjectCreate: function () { return undefined; },
        ArraySlice: function () { return []; },
        patchClass: function () { return noop; },
        wrapWithCurrentZone: function () { return noop; },
        filterProperties: function () { return []; },
        attachOriginToPatched: function () { return noop; },
        _redefineProperty: function () { return noop; },
        patchCallbacks: function () { return noop; }
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                    [] :
                    [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var e_1, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                resolve(value);
            }
            function onReject(error) {
                reject(error);
            }
            try {
                for (var values_1 = __values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                    var value = values_1_1.value;
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    value.then(onResolve, onReject);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var e_2, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            // Start at 2 to prevent prematurely resolving if .then is called immediately.
            var unresolvedCount = 2;
            var valueIndex = 0;
            var resolvedValues = [];
            var _loop_2 = function (value) {
                if (!isThenable(value)) {
                    value = this_1.resolve(value);
                }
                var curValueIndex = valueIndex;
                value.then(function (value) {
                    resolvedValues[curValueIndex] = value;
                    unresolvedCount--;
                    if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                    }
                }, reject);
                unresolvedCount++;
                valueIndex++;
            };
            var this_1 = this;
            try {
                for (var values_2 = __values(values), values_2_1 = values_2.next(); !values_2_1.done; values_2_1 = values_2.next()) {
                    var value = values_2_1.value;
                    _loop_2(value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (values_2_1 && !values_2_1.done && (_a = values_2.return)) _a.call(values_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // Make the unresolvedCount zero-based again.
            unresolvedCount -= 2;
            if (unresolvedCount === 0) {
                resolve(resolvedValues);
            }
            return promise;
        };
        Object.defineProperty(ZoneAwarePromise.prototype, Symbol.toStringTag, {
            get: function () {
                return 'Promise';
            },
            enumerable: true,
            configurable: true
        });
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    function zoneify(fn) {
        return function () {
            var resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            var ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        var fetch_1 = global['fetch'];
        if (typeof fetch_1 == 'function') {
            global[api.symbol('fetch')] = fetch_1;
            global['fetch'] = zoneify(fetch_1);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result;
    if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        var errorEvent = event;
        result = listener &&
            listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
        if (result === true) {
            event.preventDefault();
        }
    }
    else {
        result = listener && listener.apply(this, arguments);
        if (result != undefined && !result) {
            event.preventDefault();
        }
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function copySymbolProperties(src, dest) {
    if (typeof Object.getOwnPropertySymbols !== 'function') {
        return;
    }
    var symbols = Object.getOwnPropertySymbols(src);
    symbols.forEach(function (symbol) {
        var desc = Object.getOwnPropertyDescriptor(src, symbol);
        Object.defineProperty(dest, symbol, {
            get: function () {
                return src[symbol];
            },
            set: function (value) {
                if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                    // if src[symbol] is not writable or not have a setter, just return
                    return;
                }
                src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
        });
    });
}
var shouldCopySymbolProperties = false;

function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate = null;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
            if (shouldCopySymbolProperties) {
                copySymbolProperties(delegate, proto[name]);
            }
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIE() {
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
        }
    }
    catch (error) {
    }
    return false;
}
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
    }
    catch (error) {
    }
    return ieOrEdge;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.call(originalDelegate);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.call(nativePromise);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.call(nativeError);
                }
            }
        }
        return originalFunctionToString.call(this);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.call(this);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        var eventNameToString = patchOptions && patchOptions.eventNameToString;
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        function checkIsPassive(task) {
            if (!passiveSupported && typeof taskData.options !== 'boolean' &&
                typeof taskData.options !== 'undefined' && taskData.options !== null) {
                // options is a non-null non-undefined object
                // passive is not supported
                // don't pass options as object
                // just pass capture as a boolean
                task.options = !!taskData.options.capture;
                taskData.options = task.options;
            }
        }
        var customScheduleGlobal = function (task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var eventName = arguments[0];
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                if (isNode && eventName === 'uncaughtException') {
                    // don't patch uncaughtException of nodejs to prevent endless loop
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
                    var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource +
                        (eventNameToString ? eventNameToString(eventName) : eventName);
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                if (!(!passiveSupported && typeof task.options === 'boolean')) {
                    // if not support passive, and we pass an option object
                    // to addEventListener, we should save the options to task
                    task.options = options;
                }
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCallbacks(api, target, targetName, method, callbacks) {
    var symbol = Zone.__symbol__(method);
    if (target[symbol]) {
        return;
    }
    var nativeDelegate = target[symbol] = target[method];
    target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = targetName + "." + method + "::" + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                        api._redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return nativeDelegate.call(target, name, opts, options);
    };
    api.attachOriginToPatched(target[method], nativeDelegate);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var zoneSymbol$1 = Zone.__symbol__;
var _defineProperty = Object[zoneSymbol$1('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol$1('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol$1('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (desc && isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange', 'resume'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    if (Zone[api.symbol('patchEvents')]) {
        // events are already been patched by legacy patch.
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    var ignoreProperties = _global['__Zone_ignore_on_properties'];
    // for browsers that we can patch the descriptor:  Chrome & Firefox
    if (isBrowser) {
        var internalWindow = window;
        var ignoreErrorProperties = isIE ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
        // in IE/Edge, onProp not exist in window object, but in WindowPrototype
        // so we need to pass WindowPrototype to check onProp exist or not
        patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
        patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
        if (typeof internalWindow['SVGElement'] !== 'undefined') {
            patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
        }
        patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
        patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
        patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
        var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
        if (HTMLMarqueeElement_1) {
            patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
        }
        var Worker_1 = internalWindow['Worker'];
        if (Worker_1) {
            patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
        }
    }
    patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
    var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget) {
        patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }
    if (typeof IDBIndex !== 'undefined') {
        patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
    }
    if (supportsWebSocket) {
        patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask;
    // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
    // define which events will not be patched by `Zone.js`.
    // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
    // the name consistent with angular repo.
    // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
    // backwards compatibility.
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
    if (global[SYMBOL_UNPATCHED_EVENTS]) {
        global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
    }
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] =
            global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = _redefineProperty;
    api.patchCallbacks = patchCallbacks;
    api.getGlobalObjects = function () { return ({
        globalSources: globalSources,
        zoneSymbolEventNames: zoneSymbolEventNames$1,
        eventNames: eventNames,
        isBrowser: isBrowser,
        isMix: isMix,
        isNode: isNode,
        TRUE_STR: TRUE_STR,
        FALSE_STR: FALSE_STR,
        ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
        ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
        REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
    }); };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetLegacyPatch(_global, api) {
    var _a = api.getGlobalObjects(), eventNames = _a.eventNames, globalSources = _a.globalSources, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        // EventTarget is already patched in browser.ts
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = api.isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    api.patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    return true;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var _a = api.getGlobalObjects(), ADD_EVENT_LISTENER_STR = _a.ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR = _a.REMOVE_EVENT_LISTENER_STR;
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        api.patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = api.ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = api.ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = api.ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        api.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
function propertyDescriptorLegacyPatch(api, _global) {
    var _a = api.getGlobalObjects(), isNode = _a.isNode, isMix = _a.isMix;
    if (isNode && !isMix) {
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    if (!canPatchViaPropertyDescriptor(api)) {
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents(api);
        api.patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
        Zone[api.symbol('patchEvents')] = true;
    }
}
function canPatchViaPropertyDescriptor(api) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((isBrowser || isMix) &&
        !api.ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = api.ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = api.ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = api.symbol('fake');
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents(api) {
    var eventNames = api.getGlobalObjects().eventNames;
    var unboundKey = api.symbol('unbound');
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = api.wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function registerElementPatch(_global, api) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, document, 'Document', 'registerElement', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
(function (_global) {
    _global['__zone_symbol__legacyPatch'] = function () {
        var Zone = _global['Zone'];
        Zone.__load_patch('registerElement', function (global, Zone, api) {
            registerElementPatch(global, api);
        });
        Zone.__load_patch('EventTargetLegacy', function (global, Zone, api) {
            eventTargetLegacyPatch(global, api);
            propertyDescriptorLegacyPatch(api, global);
        });
    };
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                        undefined,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCustomElements(_global, api) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((!isBrowser && !isMix) || !('customElements' in _global)) {
        return;
    }
    var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    var _a = api.getGlobalObjects(), eventNames = _a.eventNames, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    var EVENT_TARGET = _global['EventTarget'];
    if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
        return;
    }
    api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
    return true;
}
function patchEvent$1(global, api) {
    api.patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('legacy', function (global) {
    var legacyPatch = global[Zone.__symbol__('legacyPatch')];
    if (legacyPatch) {
        legacyPatch();
    }
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    patchEvent$1(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
});
Zone.__load_patch('customElements', function (global, Zone, api) {
    patchCustomElements(global, api);
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
    function patchXHR(window) {
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget_1) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            var data = task.data;
            var target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        // check whether the xhr has registered onload listener
                        // if that is the case, the task should invoke after all
                        // onload listeners finish.
                        var loadTasks = target['__zone_symbol__loadfalse'];
                        if (loadTasks && loadTasks.length > 0) {
                            var oriInvoke_1 = task.invoke;
                            task.invoke = function () {
                                // need to load the tasks again, because in other
                                // load listener, they may remove themselves
                                var loadTasks = target['__zone_symbol__loadfalse'];
                                for (var i = 0; i < loadTasks.length; i++) {
                                    if (loadTasks[i] === task) {
                                        loadTasks.splice(i, 1);
                                    }
                                }
                                if (!data.aborted && task.state === SCHEDULED) {
                                    oriInvoke_1.call(task);
                                }
                            };
                            loadTasks.push(task);
                        }
                        else {
                            task.invoke();
                        }
                    }
                    else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                        // error occurs when xhr.send()
                        target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
            }
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                    task.state === SCHEDULED) {
                    // xhr request throw error when send
                    // we should invoke task instead of leaving a scheduled
                    // pending macroTask
                    task.invoke();
                }
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self, args) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9jbGllbnQvc2hpbS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5c3RlbWpzL2Rpc3Qvc3lzdGVtLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL3N5c3RlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvem9uZS5qcy9kaXN0L3pvbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGFBQWEsYUFBYSxTQUFTLGdDQUFnQyw0QkFBNEIsWUFBWSxxQkFBcUIsNkVBQTZFLHNGQUFzRix1REFBdUQsb0NBQW9DLEVBQUUsbUNBQW1DLDRDQUE0QyxvQkFBb0IsNkJBQTZCLFVBQVUsd0NBQXdDLHFDQUFxQyxpREFBaUQseUVBQXlFLGtCQUFrQiwyRUFBMkUsc0VBQXNFLFdBQVcseUJBQXlCLGtCQUFrQixFQUFFLHlLQUF5SywwRUFBMEUsaUJBQWlCLFdBQVcsc0JBQXNCLGlEQUFpRCxVQUFVLGVBQWUsOElBQThJLDBCQUEwQixlQUFlLHNCQUFzQixJQUFJLFlBQVksU0FBUyxXQUFXLGVBQWUsc0JBQXNCLHdEQUF3RCxpQkFBaUIsZ0VBQWdFLHVCQUF1QixrREFBa0QsVUFBVSxpQkFBaUIsdUJBQXVCLHNCQUFzQix1Q0FBdUMsaUJBQWlCLDJCQUEyQixrQ0FBa0MsTUFBTSxlQUFlLFVBQVUsSUFBSSxFQUFFLGlCQUFpQixtREFBbUQsOERBQThELDZCQUE2QixnQkFBZ0IsVUFBVSxvRUFBb0UscUNBQXFDLGlCQUFpQixZQUFZLHNCQUFzQixxQkFBcUIsZUFBZSxzQkFBc0IsaUVBQWlFLFVBQVUsaUJBQWlCLG1CQUFtQiwrQkFBK0IsdUJBQXVCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGtGQUFrRixn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O0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxrQkFBa0I7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRCQUE0QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQSwyQ0FBMkM7QUFDM0MsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtDQUErQyxVQUFVLEVBQUU7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLHVCQUF1QixrQ0FBa0MsRUFBRTtBQUN6RSxLQUFLO0FBQ0w7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Q1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxrQkFBa0I7QUFDekQsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlFQUFpRSwrQ0FBK0MsRUFBRTtBQUNsSDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNERBQTRELDBDQUEwQztBQUN0RztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxFQUFFO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxFQUFFO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLG9DQUFvQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0JBQXNCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHNCQUFzQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsc0JBQXNCO0FBQ2hFLHFDQUFxQyxpQkFBaUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDhCQUE4QjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QywwQkFBMEI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwwQkFBMEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGlCQUFpQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHdCQUF3QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyx3QkFBd0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxFQUFFO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsMEJBQTBCLEVBQUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsNkJBQTZCLEVBQUU7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsa0RBQWtELEVBQUU7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxzREFBc0Q7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELCtCQUErQixFQUFFO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsZ0JBQWdCO0FBQ3JGO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLDZCQUE2QjtBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDhGQUE4RjtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxFQUFFO0FBQ1o7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEVBQUU7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHNCQUFzQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLFVBQVUsRUFBRTtBQUNaO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsRUFBRTtBQUNaLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEVBQUU7QUFDWjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLDBDQUEwQztBQUM1RztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMiLCJmaWxlIjoidmVuZG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBjb3JlLWpzIDIuNi41XG4gKiBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qc1xuICogTGljZW5zZTogaHR0cDovL3JvY2subWl0LWxpY2Vuc2Uub3JnXG4gKiDCqSAyMDE5IERlbmlzIFB1c2hrYXJldlxuICovXG4hZnVuY3Rpb24oZSxpLEp0KXtcInVzZSBzdHJpY3RcIjshZnVuY3Rpb24ocil7dmFyIGU9e307ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyh0KXtpZihlW3RdKXJldHVybiBlW3RdLmV4cG9ydHM7dmFyIG49ZVt0XT17aTp0LGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHJbdF0uY2FsbChuLmV4cG9ydHMsbixuLmV4cG9ydHMsX193ZWJwYWNrX3JlcXVpcmVfXyksbi5sPSEwLG4uZXhwb3J0c31fX3dlYnBhY2tfcmVxdWlyZV9fLm09cixfX3dlYnBhY2tfcmVxdWlyZV9fLmM9ZSxfX3dlYnBhY2tfcmVxdWlyZV9fLmQ9ZnVuY3Rpb24odCxuLHIpe19fd2VicGFja19yZXF1aXJlX18ubyh0LG4pfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxfX3dlYnBhY2tfcmVxdWlyZV9fLm49ZnVuY3Rpb24odCl7dmFyIG49dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uIGdldERlZmF1bHQoKXtyZXR1cm4gdFtcImRlZmF1bHRcIl19OmZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKXtyZXR1cm4gdH07cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZChuLFwiYVwiLG4pLG59LF9fd2VicGFja19yZXF1aXJlX18ubz1mdW5jdGlvbih0LG4pe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxuKX0sX193ZWJwYWNrX3JlcXVpcmVfXy5wPVwiXCIsX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnM9MTI5KX0oW2Z1bmN0aW9uKHQsbixyKXt2YXIgdj1yKDIpLGc9cigyNikseT1yKDExKSxkPXIoMTIpLGI9cigxOCksXz1cInByb3RvdHlwZVwiLFM9ZnVuY3Rpb24odCxuLHIpe3ZhciBlLGksbyx1LGM9dCZTLkYsYT10JlMuRyxmPXQmUy5QLHM9dCZTLkIsbD1hP3Y6dCZTLlM/dltuXXx8KHZbbl09e30pOih2W25dfHx7fSlbX10saD1hP2c6Z1tuXXx8KGdbbl09e30pLHA9aFtfXXx8KGhbX109e30pO2ZvcihlIGluIGEmJihyPW4pLHIpbz0oKGk9IWMmJmwmJmxbZV0hPT1KdCk/bDpyKVtlXSx1PXMmJmk/YihvLHYpOmYmJlwiZnVuY3Rpb25cIj09dHlwZW9mIG8/YihGdW5jdGlvbi5jYWxsLG8pOm8sbCYmZChsLGUsbyx0JlMuVSksaFtlXSE9byYmeShoLGUsdSksZiYmcFtlXSE9byYmKHBbZV09byl9O3YuY29yZT1nLFMuRj0xLFMuRz0yLFMuUz00LFMuUD04LFMuQj0xNixTLlc9MzIsUy5VPTY0LFMuUj0xMjgsdC5leHBvcnRzPVN9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDQpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtpZighZSh0KSl0aHJvdyBUeXBlRXJyb3IodCtcIiBpcyBub3QgYW4gb2JqZWN0IVwiKTtyZXR1cm4gdH19LGZ1bmN0aW9uKHQsbil7dmFyIHI9dC5leHBvcnRzPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5NYXRoPT1NYXRoP3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZi5NYXRoPT1NYXRoP3NlbGY6RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1wibnVtYmVyXCI9PXR5cGVvZiBpJiYoaT1yKX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dHJ5e3JldHVybiEhdCgpfWNhdGNoKG4pe3JldHVybiEwfX19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiB0P251bGwhPT10OlwiZnVuY3Rpb25cIj09dHlwZW9mIHR9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cig0NykoXCJ3a3NcIiksaT1yKDMzKSxvPXIoMikuU3ltYm9sLHU9XCJmdW5jdGlvblwiPT10eXBlb2YgbzsodC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfHwoZVt0XT11JiZvW3RdfHwodT9vOmkpKFwiU3ltYm9sLlwiK3QpKX0pLnN0b3JlPWV9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDIwKSxpPU1hdGgubWluO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gMDx0P2koZSh0KSw5MDA3MTk5MjU0NzQwOTkxKTowfX0sZnVuY3Rpb24odCxuLHIpe3QuZXhwb3J0cz0hcigzKShmdW5jdGlvbigpe3JldHVybiA3IT1PYmplY3QuZGVmaW5lUHJvcGVydHkoe30sXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiA3fX0pLmF9KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBpPXIoMSksbz1yKDkzKSx1PXIoMjIpLGM9T2JqZWN0LmRlZmluZVByb3BlcnR5O24uZj1yKDcpP09iamVjdC5kZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eSh0LG4scil7aWYoaSh0KSxuPXUobiwhMCksaShyKSxvKXRyeXtyZXR1cm4gYyh0LG4scil9Y2F0Y2goZSl7fWlmKFwiZ2V0XCJpbiByfHxcInNldFwiaW4gcil0aHJvdyBUeXBlRXJyb3IoXCJBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCFcIik7cmV0dXJuXCJ2YWx1ZVwiaW4gciYmKHRbbl09ci52YWx1ZSksdH19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDIzKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdChlKHQpKX19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGEgZnVuY3Rpb24hXCIpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoOCksaT1yKDMyKTt0LmV4cG9ydHM9cig3KT9mdW5jdGlvbih0LG4scil7cmV0dXJuIGUuZih0LG4saSgxLHIpKX06ZnVuY3Rpb24odCxuLHIpe3JldHVybiB0W25dPXIsdH19LGZ1bmN0aW9uKHQsbixyKXt2YXIgbz1yKDIpLHU9cigxMSksYz1yKDE0KSxhPXIoMzMpKFwic3JjXCIpLGU9cigxMzEpLGk9XCJ0b1N0cmluZ1wiLGY9KFwiXCIrZSkuc3BsaXQoaSk7cigyNikuaW5zcGVjdFNvdXJjZT1mdW5jdGlvbih0KXtyZXR1cm4gZS5jYWxsKHQpfSwodC5leHBvcnRzPWZ1bmN0aW9uKHQsbixyLGUpe3ZhciBpPVwiZnVuY3Rpb25cIj09dHlwZW9mIHI7aSYmKGMocixcIm5hbWVcIil8fHUocixcIm5hbWVcIixuKSksdFtuXSE9PXImJihpJiYoYyhyLGEpfHx1KHIsYSx0W25dP1wiXCIrdFtuXTpmLmpvaW4oU3RyaW5nKG4pKSkpLHQ9PT1vP3Rbbl09cjplP3Rbbl0/dFtuXT1yOnUodCxuLHIpOihkZWxldGUgdFtuXSx1KHQsbixyKSkpfSkoRnVuY3Rpb24ucHJvdG90eXBlLGksZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzJiZ0aGlzW2FdfHxlLmNhbGwodGhpcyl9KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksaT1yKDMpLHU9cigyMyksYz0vXCIvZyxvPWZ1bmN0aW9uKHQsbixyLGUpe3ZhciBpPVN0cmluZyh1KHQpKSxvPVwiPFwiK247cmV0dXJuXCJcIiE9PXImJihvKz1cIiBcIityKyc9XCInK1N0cmluZyhlKS5yZXBsYWNlKGMsXCImcXVvdDtcIikrJ1wiJyksbytcIj5cIitpK1wiPC9cIituK1wiPlwifTt0LmV4cG9ydHM9ZnVuY3Rpb24obix0KXt2YXIgcj17fTtyW25dPXQobyksZShlLlArZS5GKmkoZnVuY3Rpb24oKXt2YXIgdD1cIlwiW25dKCdcIicpO3JldHVybiB0IT09dC50b0xvd2VyQ2FzZSgpfHwzPHQuc3BsaXQoJ1wiJykubGVuZ3RofSksXCJTdHJpbmdcIixyKX19LGZ1bmN0aW9uKHQsbil7dmFyIHI9e30uaGFzT3duUHJvcGVydHk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHIuY2FsbCh0LG4pfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoNDgpLGk9cigyMyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBlKGkodCkpfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoNDkpLGk9cigzMiksbz1yKDE1KSx1PXIoMjIpLGM9cigxNCksYT1yKDkzKSxmPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7bi5mPXIoNyk/ZjpmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxuKXtpZih0PW8odCksbj11KG4sITApLGEpdHJ5e3JldHVybiBmKHQsbil9Y2F0Y2gocil7fWlmKGModCxuKSlyZXR1cm4gaSghZS5mLmNhbGwodCxuKSx0W25dKX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDE0KSxpPXIoOSksbz1yKDY4KShcIklFX1BST1RPXCIpLHU9T2JqZWN0LnByb3RvdHlwZTt0LmV4cG9ydHM9T2JqZWN0LmdldFByb3RvdHlwZU9mfHxmdW5jdGlvbih0KXtyZXR1cm4gdD1pKHQpLGUodCxvKT90W29dOlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuY29uc3RydWN0b3ImJnQgaW5zdGFuY2VvZiB0LmNvbnN0cnVjdG9yP3QuY29uc3RydWN0b3IucHJvdG90eXBlOnQgaW5zdGFuY2VvZiBPYmplY3Q/dTpudWxsfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBvPXIoMTApO3QuZXhwb3J0cz1mdW5jdGlvbihlLGksdCl7aWYobyhlKSxpPT09SnQpcmV0dXJuIGU7c3dpdGNoKHQpe2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIGUuY2FsbChpLHQpfTtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKHQsbil7cmV0dXJuIGUuY2FsbChpLHQsbil9O2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24odCxuLHIpe3JldHVybiBlLmNhbGwoaSx0LG4scil9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBlLmFwcGx5KGksYXJndW1lbnRzKX19fSxmdW5jdGlvbih0LG4pe3ZhciByPXt9LnRvU3RyaW5nO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gci5jYWxsKHQpLnNsaWNlKDgsLTEpfX0sZnVuY3Rpb24odCxuKXt2YXIgcj1NYXRoLmNlaWwsZT1NYXRoLmZsb29yO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gaXNOYU4odD0rdCk/MDooMDx0P2U6cikodCl9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigzKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtyZXR1cm4hIXQmJmUoZnVuY3Rpb24oKXtuP3QuY2FsbChudWxsLGZ1bmN0aW9uKCl7fSwxKTp0LmNhbGwobnVsbCl9KX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgaT1yKDQpO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe2lmKCFpKHQpKXJldHVybiB0O3ZhciByLGU7aWYobiYmXCJmdW5jdGlvblwiPT10eXBlb2Yocj10LnRvU3RyaW5nKSYmIWkoZT1yLmNhbGwodCkpKXJldHVybiBlO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mKHI9dC52YWx1ZU9mKSYmIWkoZT1yLmNhbGwodCkpKXJldHVybiBlO2lmKCFuJiZcImZ1bmN0aW9uXCI9PXR5cGVvZihyPXQudG9TdHJpbmcpJiYhaShlPXIuY2FsbCh0KSkpcmV0dXJuIGU7dGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpfX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aWYodD09SnQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiK3QpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuLHIpe3ZhciBpPXIoMCksbz1yKDI2KSx1PXIoMyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7dmFyIHI9KG8uT2JqZWN0fHx7fSlbdF18fE9iamVjdFt0XSxlPXt9O2VbdF09bihyKSxpKGkuUytpLkYqdShmdW5jdGlvbigpe3IoMSl9KSxcIk9iamVjdFwiLGUpfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBfPXIoMTgpLFM9cig0OCkseD1yKDkpLG09cig2KSxlPXIoODQpO3QuZXhwb3J0cz1mdW5jdGlvbihsLHQpe3ZhciBoPTE9PWwscD0yPT1sLHY9Mz09bCxnPTQ9PWwseT02PT1sLGQ9NT09bHx8eSxiPXR8fGU7cmV0dXJuIGZ1bmN0aW9uKHQsbixyKXtmb3IodmFyIGUsaSxvPXgodCksdT1TKG8pLGM9XyhuLHIsMyksYT1tKHUubGVuZ3RoKSxmPTAscz1oP2IodCxhKTpwP2IodCwwKTpKdDtmPGE7ZisrKWlmKChkfHxmIGluIHUpJiYoaT1jKGU9dVtmXSxmLG8pLGwpKWlmKGgpc1tmXT1pO2Vsc2UgaWYoaSlzd2l0Y2gobCl7Y2FzZSAzOnJldHVybiEwO2Nhc2UgNTpyZXR1cm4gZTtjYXNlIDY6cmV0dXJuIGY7Y2FzZSAyOnMucHVzaChlKX1lbHNlIGlmKGcpcmV0dXJuITE7cmV0dXJuIHk/LTE6dnx8Zz9nOnN9fX0sZnVuY3Rpb24odCxuKXt2YXIgcj10LmV4cG9ydHM9e3ZlcnNpb246XCIyLjYuNVwifTtcIm51bWJlclwiPT10eXBlb2YgZSYmKGU9cil9LGZ1bmN0aW9uKHQsbixyKXtpZihyKDcpKXt2YXIgeT1yKDI5KSxkPXIoMiksYj1yKDMpLF89cigwKSxTPXIoNjIpLGU9cig5MiksaD1yKDE4KSx4PXIoMzkpLGk9cigzMiksbT1yKDExKSxvPXIoNDEpLHU9cigyMCksdz1yKDYpLEU9cigxMjIpLGM9cigzNSksYT1yKDIyKSxmPXIoMTQpLE89cig0NCksTT1yKDQpLHA9cig5KSx2PXIoODEpLEk9cigzNiksUD1yKDE3KSxGPXIoMzcpLmYsZz1yKDgzKSxzPXIoMzMpLGw9cig1KSxBPXIoMjUpLGs9cig1MiksTj1yKDUxKSxqPXIoODYpLFI9cig0NiksVD1yKDU3KSxMPXIoMzgpLEQ9cig4NSksQz1yKDExMCksVT1yKDgpLFc9cigxNiksRz1VLmYsVj1XLmYsQj1kLlJhbmdlRXJyb3Isej1kLlR5cGVFcnJvcixxPWQuVWludDhBcnJheSxLPVwiQXJyYXlCdWZmZXJcIixKPVwiU2hhcmVkXCIrSyxZPVwiQllURVNfUEVSX0VMRU1FTlRcIiwkPVwicHJvdG90eXBlXCIsWD1BcnJheVskXSxIPWUuQXJyYXlCdWZmZXIsWj1lLkRhdGFWaWV3LFE9QSgwKSx0dD1BKDIpLG50PUEoMykscnQ9QSg0KSxldD1BKDUpLGl0PUEoNiksb3Q9ayghMCksdXQ9ayghMSksY3Q9ai52YWx1ZXMsYXQ9ai5rZXlzLGZ0PWouZW50cmllcyxzdD1YLmxhc3RJbmRleE9mLGx0PVgucmVkdWNlLGh0PVgucmVkdWNlUmlnaHQscHQ9WC5qb2luLHZ0PVguc29ydCxndD1YLnNsaWNlLHl0PVgudG9TdHJpbmcsZHQ9WC50b0xvY2FsZVN0cmluZyxidD1sKFwiaXRlcmF0b3JcIiksX3Q9bChcInRvU3RyaW5nVGFnXCIpLFN0PXMoXCJ0eXBlZF9jb25zdHJ1Y3RvclwiKSx4dD1zKFwiZGVmX2NvbnN0cnVjdG9yXCIpLG10PVMuQ09OU1RSLHd0PVMuVFlQRUQsRXQ9Uy5WSUVXLE90PVwiV3JvbmcgbGVuZ3RoIVwiLE10PUEoMSxmdW5jdGlvbih0LG4pe3JldHVybiBrdChOKHQsdFt4dF0pLG4pfSksSXQ9YihmdW5jdGlvbigpe3JldHVybiAxPT09bmV3IHEobmV3IFVpbnQxNkFycmF5KFsxXSkuYnVmZmVyKVswXX0pLFB0PSEhcSYmISFxWyRdLnNldCYmYihmdW5jdGlvbigpe25ldyBxKDEpLnNldCh7fSl9KSxGdD1mdW5jdGlvbih0LG4pe3ZhciByPXUodCk7aWYocjwwfHxyJW4pdGhyb3cgQihcIldyb25nIG9mZnNldCFcIik7cmV0dXJuIHJ9LEF0PWZ1bmN0aW9uKHQpe2lmKE0odCkmJnd0IGluIHQpcmV0dXJuIHQ7dGhyb3cgeih0K1wiIGlzIG5vdCBhIHR5cGVkIGFycmF5IVwiKX0sa3Q9ZnVuY3Rpb24odCxuKXtpZighKE0odCkmJlN0IGluIHQpKXRocm93IHooXCJJdCBpcyBub3QgYSB0eXBlZCBhcnJheSBjb25zdHJ1Y3RvciFcIik7cmV0dXJuIG5ldyB0KG4pfSxOdD1mdW5jdGlvbih0LG4pe3JldHVybiBqdChOKHQsdFt4dF0pLG4pfSxqdD1mdW5jdGlvbih0LG4pe2Zvcih2YXIgcj0wLGU9bi5sZW5ndGgsaT1rdCh0LGUpO3I8ZTspaVtyXT1uW3IrK107cmV0dXJuIGl9LFJ0PWZ1bmN0aW9uKHQsbixyKXtHKHQsbix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2Rbcl19fSl9LFR0PWZ1bmN0aW9uIGZyb20odCl7dmFyIG4scixlLGksbyx1LGM9cCh0KSxhPWFyZ3VtZW50cy5sZW5ndGgsZj0xPGE/YXJndW1lbnRzWzFdOkp0LHM9ZiE9PUp0LGw9ZyhjKTtpZihsIT1KdCYmIXYobCkpe2Zvcih1PWwuY2FsbChjKSxlPVtdLG49MDshKG89dS5uZXh0KCkpLmRvbmU7bisrKWUucHVzaChvLnZhbHVlKTtjPWV9Zm9yKHMmJjI8YSYmKGY9aChmLGFyZ3VtZW50c1syXSwyKSksbj0wLHI9dyhjLmxlbmd0aCksaT1rdCh0aGlzLHIpO248cjtuKyspaVtuXT1zP2YoY1tuXSxuKTpjW25dO3JldHVybiBpfSxMdD1mdW5jdGlvbiBvZigpe2Zvcih2YXIgdD0wLG49YXJndW1lbnRzLmxlbmd0aCxyPWt0KHRoaXMsbik7dDxuOylyW3RdPWFyZ3VtZW50c1t0KytdO3JldHVybiByfSxEdD0hIXEmJmIoZnVuY3Rpb24oKXtkdC5jYWxsKG5ldyBxKDEpKX0pLEN0PWZ1bmN0aW9uIHRvTG9jYWxlU3RyaW5nKCl7cmV0dXJuIGR0LmFwcGx5KER0P2d0LmNhbGwoQXQodGhpcykpOkF0KHRoaXMpLGFyZ3VtZW50cyl9LFV0PXtjb3B5V2l0aGluOmZ1bmN0aW9uIGNvcHlXaXRoaW4odCxuKXtyZXR1cm4gQy5jYWxsKEF0KHRoaXMpLHQsbiwyPGFyZ3VtZW50cy5sZW5ndGg/YXJndW1lbnRzWzJdOkp0KX0sZXZlcnk6ZnVuY3Rpb24gZXZlcnkodCl7cmV0dXJuIHJ0KEF0KHRoaXMpLHQsMTxhcmd1bWVudHMubGVuZ3RoP2FyZ3VtZW50c1sxXTpKdCl9LGZpbGw6ZnVuY3Rpb24gZmlsbCh0KXtyZXR1cm4gRC5hcHBseShBdCh0aGlzKSxhcmd1bWVudHMpfSxmaWx0ZXI6ZnVuY3Rpb24gZmlsdGVyKHQpe3JldHVybiBOdCh0aGlzLHR0KEF0KHRoaXMpLHQsMTxhcmd1bWVudHMubGVuZ3RoP2FyZ3VtZW50c1sxXTpKdCkpfSxmaW5kOmZ1bmN0aW9uIGZpbmQodCl7cmV0dXJuIGV0KEF0KHRoaXMpLHQsMTxhcmd1bWVudHMubGVuZ3RoP2FyZ3VtZW50c1sxXTpKdCl9LGZpbmRJbmRleDpmdW5jdGlvbiBmaW5kSW5kZXgodCl7cmV0dXJuIGl0KEF0KHRoaXMpLHQsMTxhcmd1bWVudHMubGVuZ3RoP2FyZ3VtZW50c1sxXTpKdCl9LGZvckVhY2g6ZnVuY3Rpb24gZm9yRWFjaCh0KXtRKEF0KHRoaXMpLHQsMTxhcmd1bWVudHMubGVuZ3RoP2FyZ3VtZW50c1sxXTpKdCl9LGluZGV4T2Y6ZnVuY3Rpb24gaW5kZXhPZih0KXtyZXR1cm4gdXQoQXQodGhpcyksdCwxPGFyZ3VtZW50cy5sZW5ndGg/YXJndW1lbnRzWzFdOkp0KX0saW5jbHVkZXM6ZnVuY3Rpb24gaW5jbHVkZXModCl7cmV0dXJuIG90KEF0KHRoaXMpLHQsMTxhcmd1bWVudHMubGVuZ3RoP2FyZ3VtZW50c1sxXTpKdCl9LGpvaW46ZnVuY3Rpb24gam9pbih0KXtyZXR1cm4gcHQuYXBwbHkoQXQodGhpcyksYXJndW1lbnRzKX0sbGFzdEluZGV4T2Y6ZnVuY3Rpb24gbGFzdEluZGV4T2YodCl7cmV0dXJuIHN0LmFwcGx5KEF0KHRoaXMpLGFyZ3VtZW50cyl9LG1hcDpmdW5jdGlvbiBtYXAodCl7cmV0dXJuIE10KEF0KHRoaXMpLHQsMTxhcmd1bWVudHMubGVuZ3RoP2FyZ3VtZW50c1sxXTpKdCl9LHJlZHVjZTpmdW5jdGlvbiByZWR1Y2UodCl7cmV0dXJuIGx0LmFwcGx5KEF0KHRoaXMpLGFyZ3VtZW50cyl9LHJlZHVjZVJpZ2h0OmZ1bmN0aW9uIHJlZHVjZVJpZ2h0KHQpe3JldHVybiBodC5hcHBseShBdCh0aGlzKSxhcmd1bWVudHMpfSxyZXZlcnNlOmZ1bmN0aW9uIHJldmVyc2UoKXtmb3IodmFyIHQsbj10aGlzLHI9QXQobikubGVuZ3RoLGU9TWF0aC5mbG9vcihyLzIpLGk9MDtpPGU7KXQ9bltpXSxuW2krK109blstLXJdLG5bcl09dDtyZXR1cm4gbn0sc29tZTpmdW5jdGlvbiBzb21lKHQpe3JldHVybiBudChBdCh0aGlzKSx0LDE8YXJndW1lbnRzLmxlbmd0aD9hcmd1bWVudHNbMV06SnQpfSxzb3J0OmZ1bmN0aW9uIHNvcnQodCl7cmV0dXJuIHZ0LmNhbGwoQXQodGhpcyksdCl9LHN1YmFycmF5OmZ1bmN0aW9uIHN1YmFycmF5KHQsbil7dmFyIHI9QXQodGhpcyksZT1yLmxlbmd0aCxpPWModCxlKTtyZXR1cm4gbmV3KE4ocixyW3h0XSkpKHIuYnVmZmVyLHIuYnl0ZU9mZnNldCtpKnIuQllURVNfUEVSX0VMRU1FTlQsdygobj09PUp0P2U6YyhuLGUpKS1pKSl9fSxXdD1mdW5jdGlvbiBzbGljZSh0LG4pe3JldHVybiBOdCh0aGlzLGd0LmNhbGwoQXQodGhpcyksdCxuKSl9LEd0PWZ1bmN0aW9uIHNldCh0KXtBdCh0aGlzKTt2YXIgbj1GdChhcmd1bWVudHNbMV0sMSkscj10aGlzLmxlbmd0aCxlPXAodCksaT13KGUubGVuZ3RoKSxvPTA7aWYocjxpK24pdGhyb3cgQihPdCk7Zm9yKDtvPGk7KXRoaXNbbitvXT1lW28rK119LFZ0PXtlbnRyaWVzOmZ1bmN0aW9uIGVudHJpZXMoKXtyZXR1cm4gZnQuY2FsbChBdCh0aGlzKSl9LGtleXM6ZnVuY3Rpb24ga2V5cygpe3JldHVybiBhdC5jYWxsKEF0KHRoaXMpKX0sdmFsdWVzOmZ1bmN0aW9uIHZhbHVlcygpe3JldHVybiBjdC5jYWxsKEF0KHRoaXMpKX19LEJ0PWZ1bmN0aW9uKHQsbil7cmV0dXJuIE0odCkmJnRbd3RdJiZcInN5bWJvbFwiIT10eXBlb2YgbiYmbiBpbiB0JiZTdHJpbmcoK24pPT1TdHJpbmcobil9LHp0PWZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LG4pe3JldHVybiBCdCh0LG49YShuLCEwKSk/aSgyLHRbbl0pOlYodCxuKX0scXQ9ZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkodCxuLHIpe3JldHVybiEoQnQodCxuPWEobiwhMCkpJiZNKHIpJiZmKHIsXCJ2YWx1ZVwiKSl8fGYocixcImdldFwiKXx8ZihyLFwic2V0XCIpfHxyLmNvbmZpZ3VyYWJsZXx8ZihyLFwid3JpdGFibGVcIikmJiFyLndyaXRhYmxlfHxmKHIsXCJlbnVtZXJhYmxlXCIpJiYhci5lbnVtZXJhYmxlP0codCxuLHIpOih0W25dPXIudmFsdWUsdCl9O210fHwoVy5mPXp0LFUuZj1xdCksXyhfLlMrXy5GKiFtdCxcIk9iamVjdFwiLHtnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6enQsZGVmaW5lUHJvcGVydHk6cXR9KSxiKGZ1bmN0aW9uKCl7eXQuY2FsbCh7fSl9KSYmKHl0PWR0PWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHB0LmNhbGwodGhpcyl9KTt2YXIgS3Q9byh7fSxVdCk7byhLdCxWdCksbShLdCxidCxWdC52YWx1ZXMpLG8oS3Qse3NsaWNlOld0LHNldDpHdCxjb25zdHJ1Y3RvcjpmdW5jdGlvbigpe30sdG9TdHJpbmc6eXQsdG9Mb2NhbGVTdHJpbmc6Q3R9KSxSdChLdCxcImJ1ZmZlclwiLFwiYlwiKSxSdChLdCxcImJ5dGVPZmZzZXRcIixcIm9cIiksUnQoS3QsXCJieXRlTGVuZ3RoXCIsXCJsXCIpLFJ0KEt0LFwibGVuZ3RoXCIsXCJlXCIpLEcoS3QsX3Qse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzW3d0XX19KSx0LmV4cG9ydHM9ZnVuY3Rpb24odCxsLG4sbyl7dmFyIGg9dCsoKG89ISFvKT9cIkNsYW1wZWRcIjpcIlwiKStcIkFycmF5XCIscj1cImdldFwiK3QsdT1cInNldFwiK3QscD1kW2hdLGM9cHx8e30sZT1wJiZQKHApLGk9e30sYT1wJiZwWyRdLHY9ZnVuY3Rpb24odCxpKXtHKHQsaSx7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuKHQ9dGhpcy5fZCkudltyXShpKmwrdC5vLEl0KTt2YXIgdH0sc2V0OmZ1bmN0aW9uKHQpe3JldHVybiBuPWkscj10LGU9dGhpcy5fZCxvJiYocj0ocj1NYXRoLnJvdW5kKHIpKTwwPzA6MjU1PHI/MjU1OjI1NSZyKSx2b2lkIGUudlt1XShuKmwrZS5vLHIsSXQpO3ZhciBuLHIsZX0sZW51bWVyYWJsZTohMH0pfTshcHx8IVMuQUJWPyhwPW4oZnVuY3Rpb24odCxuLHIsZSl7eCh0LHAsaCxcIl9kXCIpO3ZhciBpLG8sdSxjLGE9MCxmPTA7aWYoTShuKSl7aWYoIShuIGluc3RhbmNlb2YgSHx8KGM9TyhuKSk9PUt8fGM9PUopKXJldHVybiB3dCBpbiBuP2p0KHAsbik6VHQuY2FsbChwLG4pO2k9bixmPUZ0KHIsbCk7dmFyIHM9bi5ieXRlTGVuZ3RoO2lmKGU9PT1KdCl7aWYocyVsKXRocm93IEIoT3QpO2lmKChvPXMtZik8MCl0aHJvdyBCKE90KX1lbHNlIGlmKHM8KG89dyhlKSpsKStmKXRocm93IEIoT3QpO3U9by9sfWVsc2UgdT1FKG4pLGk9bmV3IEgobz11KmwpO2ZvcihtKHQsXCJfZFwiLHtiOmksbzpmLGw6byxlOnUsdjpuZXcgWihpKX0pO2E8dTspdih0LGErKyl9KSxhPXBbJF09SShLdCksbShhLFwiY29uc3RydWN0b3JcIixwKSk6YihmdW5jdGlvbigpe3AoMSl9KSYmYihmdW5jdGlvbigpe25ldyBwKC0xKX0pJiZUKGZ1bmN0aW9uKHQpe25ldyBwLG5ldyBwKG51bGwpLG5ldyBwKDEuNSksbmV3IHAodCl9LCEwKXx8KHA9bihmdW5jdGlvbih0LG4scixlKXt2YXIgaTtyZXR1cm4geCh0LHAsaCksTShuKT9uIGluc3RhbmNlb2YgSHx8KGk9TyhuKSk9PUt8fGk9PUo/ZSE9PUp0P25ldyBjKG4sRnQocixsKSxlKTpyIT09SnQ/bmV3IGMobixGdChyLGwpKTpuZXcgYyhuKTp3dCBpbiBuP2p0KHAsbik6VHQuY2FsbChwLG4pOm5ldyBjKEUobikpfSksUShlIT09RnVuY3Rpb24ucHJvdG90eXBlP0YoYykuY29uY2F0KEYoZSkpOkYoYyksZnVuY3Rpb24odCl7dCBpbiBwfHxtKHAsdCxjW3RdKX0pLHBbJF09YSx5fHwoYS5jb25zdHJ1Y3Rvcj1wKSk7dmFyIGY9YVtidF0scz0hIWYmJihcInZhbHVlc1wiPT1mLm5hbWV8fGYubmFtZT09SnQpLGc9VnQudmFsdWVzO20ocCxTdCwhMCksbShhLHd0LGgpLG0oYSxFdCwhMCksbShhLHh0LHApLChvP25ldyBwKDEpW190XT09aDpfdCBpbiBhKXx8RyhhLF90LHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gaH19KSxfKF8uRytfLlcrXy5GKigoaVtoXT1wKSE9YyksaSksXyhfLlMsaCx7QllURVNfUEVSX0VMRU1FTlQ6bH0pLF8oXy5TK18uRipiKGZ1bmN0aW9uKCl7Yy5vZi5jYWxsKHAsMSl9KSxoLHtmcm9tOlR0LG9mOkx0fSksWSBpbiBhfHxtKGEsWSxsKSxfKF8uUCxoLFV0KSxMKGgpLF8oXy5QK18uRipQdCxoLHtzZXQ6R3R9KSxfKF8uUCtfLkYqIXMsaCxWdCkseXx8YS50b1N0cmluZz09eXR8fChhLnRvU3RyaW5nPXl0KSxfKF8uUCtfLkYqYihmdW5jdGlvbigpe25ldyBwKDEpLnNsaWNlKCl9KSxoLHtzbGljZTpXdH0pLF8oXy5QK18uRiooYihmdW5jdGlvbigpe3JldHVyblsxLDJdLnRvTG9jYWxlU3RyaW5nKCkhPW5ldyBwKFsxLDJdKS50b0xvY2FsZVN0cmluZygpfSl8fCFiKGZ1bmN0aW9uKCl7YS50b0xvY2FsZVN0cmluZy5jYWxsKFsxLDJdKX0pKSxoLHt0b0xvY2FsZVN0cmluZzpDdH0pLFJbaF09cz9mOmcseXx8c3x8bShhLGJ0LGcpfX1lbHNlIHQuZXhwb3J0cz1mdW5jdGlvbigpe319LGZ1bmN0aW9uKHQsbixyKXt2YXIgbz1yKDExNiksZT1yKDApLGk9cig0NykoXCJtZXRhZGF0YVwiKSx1PWkuc3RvcmV8fChpLnN0b3JlPW5ldyhyKDExOSkpKSxjPWZ1bmN0aW9uKHQsbixyKXt2YXIgZT11LmdldCh0KTtpZighZSl7aWYoIXIpcmV0dXJuIEp0O3Uuc2V0KHQsZT1uZXcgbyl9dmFyIGk9ZS5nZXQobik7aWYoIWkpe2lmKCFyKXJldHVybiBKdDtlLnNldChuLGk9bmV3IG8pfXJldHVybiBpfTt0LmV4cG9ydHM9e3N0b3JlOnUsbWFwOmMsaGFzOmZ1bmN0aW9uKHQsbixyKXt2YXIgZT1jKG4sciwhMSk7cmV0dXJuIGUhPT1KdCYmZS5oYXModCl9LGdldDpmdW5jdGlvbih0LG4scil7dmFyIGU9YyhuLHIsITEpO3JldHVybiBlPT09SnQ/SnQ6ZS5nZXQodCl9LHNldDpmdW5jdGlvbih0LG4scixlKXtjKHIsZSwhMCkuc2V0KHQsbil9LGtleXM6ZnVuY3Rpb24odCxuKXt2YXIgcj1jKHQsbiwhMSksZT1bXTtyZXR1cm4gciYmci5mb3JFYWNoKGZ1bmN0aW9uKHQsbil7ZS5wdXNoKG4pfSksZX0sa2V5OmZ1bmN0aW9uKHQpe3JldHVybiB0PT09SnR8fFwic3ltYm9sXCI9PXR5cGVvZiB0P3Q6U3RyaW5nKHQpfSxleHA6ZnVuY3Rpb24odCl7ZShlLlMsXCJSZWZsZWN0XCIsdCl9fX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ITF9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDMzKShcIm1ldGFcIiksaT1yKDQpLG89cigxNCksdT1yKDgpLmYsYz0wLGE9T2JqZWN0LmlzRXh0ZW5zaWJsZXx8ZnVuY3Rpb24oKXtyZXR1cm4hMH0sZj0hcigzKShmdW5jdGlvbigpe3JldHVybiBhKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpfSkscz1mdW5jdGlvbih0KXt1KHQsZSx7dmFsdWU6e2k6XCJPXCIrICsrYyx3Ont9fX0pfSxsPXQuZXhwb3J0cz17S0VZOmUsTkVFRDohMSxmYXN0S2V5OmZ1bmN0aW9uKHQsbil7aWYoIWkodCkpcmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHQ/dDooXCJzdHJpbmdcIj09dHlwZW9mIHQ/XCJTXCI6XCJQXCIpK3Q7aWYoIW8odCxlKSl7aWYoIWEodCkpcmV0dXJuXCJGXCI7aWYoIW4pcmV0dXJuXCJFXCI7cyh0KX1yZXR1cm4gdFtlXS5pfSxnZXRXZWFrOmZ1bmN0aW9uKHQsbil7aWYoIW8odCxlKSl7aWYoIWEodCkpcmV0dXJuITA7aWYoIW4pcmV0dXJuITE7cyh0KX1yZXR1cm4gdFtlXS53fSxvbkZyZWV6ZTpmdW5jdGlvbih0KXtyZXR1cm4gZiYmbC5ORUVEJiZhKHQpJiYhbyh0LGUpJiZzKHQpLHR9fX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoNSkoXCJ1bnNjb3BhYmxlc1wiKSxpPUFycmF5LnByb3RvdHlwZTtpW2VdPT1KdCYmcigxMSkoaSxlLHt9KSx0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aVtlXVt0XT0hMH19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7cmV0dXJue2VudW1lcmFibGU6ISgxJnQpLGNvbmZpZ3VyYWJsZTohKDImdCksd3JpdGFibGU6ISg0JnQpLHZhbHVlOm59fX0sZnVuY3Rpb24odCxuKXt2YXIgcj0wLGU9TWF0aC5yYW5kb20oKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuXCJTeW1ib2woXCIuY29uY2F0KHQ9PT1KdD9cIlwiOnQsXCIpX1wiLCgrK3IrZSkudG9TdHJpbmcoMzYpKX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDk1KSxpPXIoNjkpO3QuZXhwb3J0cz1PYmplY3Qua2V5c3x8ZnVuY3Rpb24ga2V5cyh0KXtyZXR1cm4gZSh0LGkpfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMjApLGk9TWF0aC5tYXgsbz1NYXRoLm1pbjt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtyZXR1cm4odD1lKHQpKTwwP2kodCtuLDApOm8odCxuKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgaT1lKDEpLG89ZSg5NiksdT1lKDY5KSxjPWUoNjgpKFwiSUVfUFJPVE9cIiksYT1mdW5jdGlvbigpe30sZj1cInByb3RvdHlwZVwiLHM9ZnVuY3Rpb24oKXt2YXIgdCxuPWUoNjYpKFwiaWZyYW1lXCIpLHI9dS5sZW5ndGg7Zm9yKG4uc3R5bGUuZGlzcGxheT1cIm5vbmVcIixlKDcwKS5hcHBlbmRDaGlsZChuKSxuLnNyYz1cImphdmFzY3JpcHQ6XCIsKHQ9bi5jb250ZW50V2luZG93LmRvY3VtZW50KS5vcGVuKCksdC53cml0ZShcIjxzY3JpcHQ+ZG9jdW1lbnQuRj1PYmplY3Q8XFwvc2NyaXB0PlwiKSx0LmNsb3NlKCkscz10LkY7ci0tOylkZWxldGUgc1tmXVt1W3JdXTtyZXR1cm4gcygpfTt0LmV4cG9ydHM9T2JqZWN0LmNyZWF0ZXx8ZnVuY3Rpb24gY3JlYXRlKHQsbil7dmFyIHI7cmV0dXJuIG51bGwhPT10PyhhW2ZdPWkodCkscj1uZXcgYSxhW2ZdPW51bGwscltjXT10KTpyPXMoKSxuPT09SnQ/cjpvKHIsbil9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cig5NSksaT1yKDY5KS5jb25jYXQoXCJsZW5ndGhcIixcInByb3RvdHlwZVwiKTtuLmY9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXN8fGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXModCl7cmV0dXJuIGUodCxpKX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDIpLGk9cig4KSxvPXIoNyksdT1yKDUpKFwic3BlY2llc1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIG49ZVt0XTtvJiZuJiYhblt1XSYmaS5mKG4sdSx7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzfX0pfX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLHIsZSl7aWYoISh0IGluc3RhbmNlb2Ygbil8fGUhPT1KdCYmZSBpbiB0KXRocm93IFR5cGVFcnJvcihyK1wiOiBpbmNvcnJlY3QgaW52b2NhdGlvbiFcIik7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4scil7dmFyIGg9cigxOCkscD1yKDEwOCksdj1yKDgxKSxnPXIoMSkseT1yKDYpLGQ9cig4MyksYj17fSxfPXt9OyhuPXQuZXhwb3J0cz1mdW5jdGlvbih0LG4scixlLGkpe3ZhciBvLHUsYyxhLGY9aT9mdW5jdGlvbigpe3JldHVybiB0fTpkKHQpLHM9aChyLGUsbj8yOjEpLGw9MDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBmKXRocm93IFR5cGVFcnJvcih0K1wiIGlzIG5vdCBpdGVyYWJsZSFcIik7aWYodihmKSl7Zm9yKG89eSh0Lmxlbmd0aCk7bDxvO2wrKylpZigoYT1uP3MoZyh1PXRbbF0pWzBdLHVbMV0pOnModFtsXSkpPT09Ynx8YT09PV8pcmV0dXJuIGF9ZWxzZSBmb3IoYz1mLmNhbGwodCk7ISh1PWMubmV4dCgpKS5kb25lOylpZigoYT1wKGMscyx1LnZhbHVlLG4pKT09PWJ8fGE9PT1fKXJldHVybiBhfSkuQlJFQUs9YixuLlJFVFVSTj1ffSxmdW5jdGlvbih0LG4scil7dmFyIGk9cigxMik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixyKXtmb3IodmFyIGUgaW4gbilpKHQsZSxuW2VdLHIpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoNCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7aWYoIWUodCl8fHQuX3QhPT1uKXRocm93IFR5cGVFcnJvcihcIkluY29tcGF0aWJsZSByZWNlaXZlciwgXCIrbitcIiByZXF1aXJlZCFcIik7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cig4KS5mLGk9cigxNCksbz1yKDUpKFwidG9TdHJpbmdUYWdcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixyKXt0JiYhaSh0PXI/dDp0LnByb3RvdHlwZSxvKSYmZSh0LG8se2NvbmZpZ3VyYWJsZTohMCx2YWx1ZTpufSl9fSxmdW5jdGlvbih0LG4scil7dmFyIGk9cigxOSksbz1yKDUpKFwidG9TdHJpbmdUYWdcIiksdT1cIkFyZ3VtZW50c1wiPT1pKGZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c30oKSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBuLHIsZTtyZXR1cm4gdD09PUp0P1wiVW5kZWZpbmVkXCI6bnVsbD09PXQ/XCJOdWxsXCI6XCJzdHJpbmdcIj09dHlwZW9mKHI9ZnVuY3Rpb24odCxuKXt0cnl7cmV0dXJuIHRbbl19Y2F0Y2gocil7fX0obj1PYmplY3QodCksbykpP3I6dT9pKG4pOlwiT2JqZWN0XCI9PShlPWkobikpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLmNhbGxlZT9cIkFyZ3VtZW50c1wiOmV9fSxmdW5jdGlvbih0LG4scil7dmFyIHU9cigwKSxlPXIoMjMpLGM9cigzKSxhPXIoNzMpLGk9XCJbXCIrYStcIl1cIixvPVJlZ0V4cChcIl5cIitpK2krXCIqXCIpLGY9UmVnRXhwKGkraStcIiokXCIpLHM9ZnVuY3Rpb24odCxuLHIpe3ZhciBlPXt9LGk9YyhmdW5jdGlvbigpe3JldHVybiEhYVt0XSgpfHxcIuKAi8KFXCIhPVwi4oCLwoVcIlt0XSgpfSksbz1lW3RdPWk/bihsKTphW3RdO3ImJihlW3JdPW8pLHUodS5QK3UuRippLFwiU3RyaW5nXCIsZSl9LGw9cy50cmltPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQ9U3RyaW5nKGUodCkpLDEmbiYmKHQ9dC5yZXBsYWNlKG8sXCJcIikpLDImbiYmKHQ9dC5yZXBsYWNlKGYsXCJcIikpLHR9O3QuZXhwb3J0cz1zfSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz17fX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMjYpLGk9cigyKSxvPVwiX19jb3JlLWpzX3NoYXJlZF9fXCIsdT1pW29dfHwoaVtvXT17fSk7KHQuZXhwb3J0cz1mdW5jdGlvbih0LG4pe3JldHVybiB1W3RdfHwodVt0XT1uIT09SnQ/bjp7fSl9KShcInZlcnNpb25zXCIsW10pLnB1c2goe3ZlcnNpb246ZS52ZXJzaW9uLG1vZGU6cigyOSk/XCJwdXJlXCI6XCJnbG9iYWxcIixjb3B5cmlnaHQ6XCLCqSAyMDE5IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpXCJ9KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMTkpO3QuZXhwb3J0cz1PYmplY3QoXCJ6XCIpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApP09iamVjdDpmdW5jdGlvbih0KXtyZXR1cm5cIlN0cmluZ1wiPT1lKHQpP3Quc3BsaXQoXCJcIik6T2JqZWN0KHQpfX0sZnVuY3Rpb24odCxuKXtuLmY9e30ucHJvcGVydHlJc0VudW1lcmFibGV9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDEpO3QuZXhwb3J0cz1mdW5jdGlvbigpe3ZhciB0PWUodGhpcyksbj1cIlwiO3JldHVybiB0Lmdsb2JhbCYmKG4rPVwiZ1wiKSx0Lmlnbm9yZUNhc2UmJihuKz1cImlcIiksdC5tdWx0aWxpbmUmJihuKz1cIm1cIiksdC51bmljb2RlJiYobis9XCJ1XCIpLHQuc3RpY2t5JiYobis9XCJ5XCIpLG59fSxmdW5jdGlvbih0LG4scil7dmFyIGk9cigxKSxvPXIoMTApLHU9cig1KShcInNwZWNpZXNcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7dmFyIHIsZT1pKHQpLmNvbnN0cnVjdG9yO3JldHVybiBlPT09SnR8fChyPWkoZSlbdV0pPT1KdD9uOm8ocil9fSxmdW5jdGlvbih0LG4scil7dmFyIGE9cigxNSksZj1yKDYpLHM9cigzNSk7dC5leHBvcnRzPWZ1bmN0aW9uKGMpe3JldHVybiBmdW5jdGlvbih0LG4scil7dmFyIGUsaT1hKHQpLG89ZihpLmxlbmd0aCksdT1zKHIsbyk7aWYoYyYmbiE9bil7Zm9yKDt1PG87KWlmKChlPWlbdSsrXSkhPWUpcmV0dXJuITB9ZWxzZSBmb3IoO3U8bzt1KyspaWYoKGN8fHUgaW4gaSkmJmlbdV09PT1uKXJldHVybiBjfHx1fHwwO3JldHVybiFjJiYtMX19fSxmdW5jdGlvbih0LG4pe24uZj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigxOSk7dC5leHBvcnRzPUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uIGlzQXJyYXkodCl7cmV0dXJuXCJBcnJheVwiPT1lKHQpfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBhPXIoMjApLGY9cigyMyk7dC5leHBvcnRzPWZ1bmN0aW9uKGMpe3JldHVybiBmdW5jdGlvbih0LG4pe3ZhciByLGUsaT1TdHJpbmcoZih0KSksbz1hKG4pLHU9aS5sZW5ndGg7cmV0dXJuIG88MHx8dTw9bz9jP1wiXCI6SnQ6KHI9aS5jaGFyQ29kZUF0KG8pKTw1NTI5Nnx8NTYzMTk8cnx8bysxPT09dXx8KGU9aS5jaGFyQ29kZUF0KG8rMSkpPDU2MzIwfHw1NzM0MzxlP2M/aS5jaGFyQXQobyk6cjpjP2kuc2xpY2UobyxvKzIpOmUtNTYzMjArKHItNTUyOTY8PDEwKSs2NTUzNn19fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cig0KSxpPXIoMTkpLG89cig1KShcIm1hdGNoXCIpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgbjtyZXR1cm4gZSh0KSYmKChuPXRbb10pIT09SnQ/ISFuOlwiUmVnRXhwXCI9PWkodCkpfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBvPXIoNSkoXCJpdGVyYXRvclwiKSx1PSExO3RyeXt2YXIgZT1bN11bb10oKTtlW1wicmV0dXJuXCJdPWZ1bmN0aW9uKCl7dT0hMH0sQXJyYXkuZnJvbShlLGZ1bmN0aW9uKCl7dGhyb3cgMn0pfWNhdGNoKGMpe310LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtpZighbiYmIXUpcmV0dXJuITE7dmFyIHI9ITE7dHJ5e3ZhciBlPVs3XSxpPWVbb10oKTtpLm5leHQ9ZnVuY3Rpb24oKXtyZXR1cm57ZG9uZTpyPSEwfX0sZVtvXT1mdW5jdGlvbigpe3JldHVybiBpfSx0KGUpfWNhdGNoKGMpe31yZXR1cm4gcn19LGZ1bmN0aW9uKHQsbixyKXt2YXIgaT1yKDQ0KSxvPVJlZ0V4cC5wcm90b3R5cGUuZXhlYzt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXt2YXIgcj10LmV4ZWM7aWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygcil7dmFyIGU9ci5jYWxsKHQsbik7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlJlZ0V4cCBleGVjIG1ldGhvZCByZXR1cm5lZCBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBPYmplY3Qgb3IgbnVsbFwiKTtyZXR1cm4gZX1pZihcIlJlZ0V4cFwiIT09aSh0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlclwiKTtyZXR1cm4gby5jYWxsKHQsbil9fSxmdW5jdGlvbih0LG4scil7cigxMTIpO3ZhciBmPXIoMTIpLHM9cigxMSksbD1yKDMpLGg9cigyMykscD1yKDUpLHY9cig4NyksZz1wKFwic3BlY2llc1wiKSx5PSFsKGZ1bmN0aW9uKCl7dmFyIHQ9Ly4vO3JldHVybiB0LmV4ZWM9ZnVuY3Rpb24oKXt2YXIgdD1bXTtyZXR1cm4gdC5ncm91cHM9e2E6XCI3XCJ9LHR9LFwiN1wiIT09XCJcIi5yZXBsYWNlKHQsXCIkPGE+XCIpfSksZD1mdW5jdGlvbigpe3ZhciB0PS8oPzopLyxuPXQuZXhlYzt0LmV4ZWM9ZnVuY3Rpb24oKXtyZXR1cm4gbi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O3ZhciByPVwiYWJcIi5zcGxpdCh0KTtyZXR1cm4gMj09PXIubGVuZ3RoJiZcImFcIj09PXJbMF0mJlwiYlwiPT09clsxXX0oKTt0LmV4cG9ydHM9ZnVuY3Rpb24ocix0LG4pe3ZhciBlPXAociksbz0hbChmdW5jdGlvbigpe3ZhciB0PXt9O3JldHVybiB0W2VdPWZ1bmN0aW9uKCl7cmV0dXJuIDd9LDchPVwiXCJbcl0odCl9KSxpPW8/IWwoZnVuY3Rpb24oKXt2YXIgdD0hMSxuPS9hLztyZXR1cm4gbi5leGVjPWZ1bmN0aW9uKCl7cmV0dXJuIHQ9ITAsbnVsbH0sXCJzcGxpdFwiPT09ciYmKG4uY29uc3RydWN0b3I9e30sbi5jb25zdHJ1Y3RvcltnXT1mdW5jdGlvbigpe3JldHVybiBufSksbltlXShcIlwiKSwhdH0pOkp0O2lmKCFvfHwhaXx8XCJyZXBsYWNlXCI9PT1yJiYheXx8XCJzcGxpdFwiPT09ciYmIWQpe3ZhciB1PS8uL1tlXSxjPW4oaCxlLFwiXCJbcl0sZnVuY3Rpb24gbWF5YmVDYWxsTmF0aXZlKHQsbixyLGUsaSl7cmV0dXJuIG4uZXhlYz09PXY/byYmIWk/e2RvbmU6ITAsdmFsdWU6dS5jYWxsKG4scixlKX06e2RvbmU6ITAsdmFsdWU6dC5jYWxsKHIsbixlKX06e2RvbmU6ITF9fSksYT1jWzFdO2YoU3RyaW5nLnByb3RvdHlwZSxyLGNbMF0pLHMoUmVnRXhwLnByb3RvdHlwZSxlLDI9PXQ/ZnVuY3Rpb24odCxuKXtyZXR1cm4gYS5jYWxsKHQsdGhpcyxuKX06ZnVuY3Rpb24odCl7cmV0dXJuIGEuY2FsbCh0LHRoaXMpfSl9fX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMikubmF2aWdhdG9yO3QuZXhwb3J0cz1lJiZlLnVzZXJBZ2VudHx8XCJcIn0sZnVuY3Rpb24odCxuLHIpe3ZhciBkPXIoMiksYj1yKDApLF89cigxMiksUz1yKDQxKSx4PXIoMzApLG09cig0MCksdz1yKDM5KSxFPXIoNCksTz1yKDMpLE09cig1NyksST1yKDQzKSxQPXIoNzIpO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQsbixyLGksbyl7dmFyIHU9ZFtlXSxjPXUsYT1pP1wic2V0XCI6XCJhZGRcIixmPWMmJmMucHJvdG90eXBlLHM9e30sbD1mdW5jdGlvbih0KXt2YXIgcj1mW3RdO18oZix0LFwiZGVsZXRlXCI9PXQ/ZnVuY3Rpb24odCl7cmV0dXJuIShvJiYhRSh0KSkmJnIuY2FsbCh0aGlzLDA9PT10PzA6dCl9OlwiaGFzXCI9PXQ/ZnVuY3Rpb24gaGFzKHQpe3JldHVybiEobyYmIUUodCkpJiZyLmNhbGwodGhpcywwPT09dD8wOnQpfTpcImdldFwiPT10P2Z1bmN0aW9uIGdldCh0KXtyZXR1cm4gbyYmIUUodCk/SnQ6ci5jYWxsKHRoaXMsMD09PXQ/MDp0KX06XCJhZGRcIj09dD9mdW5jdGlvbiBhZGQodCl7cmV0dXJuIHIuY2FsbCh0aGlzLDA9PT10PzA6dCksdGhpc306ZnVuY3Rpb24gc2V0KHQsbil7cmV0dXJuIHIuY2FsbCh0aGlzLDA9PT10PzA6dCxuKSx0aGlzfSl9O2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGMmJihvfHxmLmZvckVhY2gmJiFPKGZ1bmN0aW9uKCl7KG5ldyBjKS5lbnRyaWVzKCkubmV4dCgpfSkpKXt2YXIgaD1uZXcgYyxwPWhbYV0obz97fTotMCwxKSE9aCx2PU8oZnVuY3Rpb24oKXtoLmhhcygxKX0pLGc9TShmdW5jdGlvbih0KXtuZXcgYyh0KX0pLHk9IW8mJk8oZnVuY3Rpb24oKXtmb3IodmFyIHQ9bmV3IGMsbj01O24tLTspdFthXShuLG4pO3JldHVybiF0LmhhcygtMCl9KTtnfHwoKChjPXQoZnVuY3Rpb24odCxuKXt3KHQsYyxlKTt2YXIgcj1QKG5ldyB1LHQsYyk7cmV0dXJuIG4hPUp0JiZtKG4saSxyW2FdLHIpLHJ9KSkucHJvdG90eXBlPWYpLmNvbnN0cnVjdG9yPWMpLCh2fHx5KSYmKGwoXCJkZWxldGVcIiksbChcImhhc1wiKSxpJiZsKFwiZ2V0XCIpKSwoeXx8cCkmJmwoYSksbyYmZi5jbGVhciYmZGVsZXRlIGYuY2xlYXJ9ZWxzZSBjPXIuZ2V0Q29uc3RydWN0b3IodCxlLGksYSksUyhjLnByb3RvdHlwZSxuKSx4Lk5FRUQ9ITA7cmV0dXJuIEkoYyxlKSxiKGIuRytiLlcrYi5GKigoc1tlXT1jKSE9dSkscyksb3x8ci5zZXRTdHJvbmcoYyxlLGkpLGN9fSxmdW5jdGlvbih0LG4scil7Zm9yKHZhciBlLGk9cigyKSxvPXIoMTEpLHU9cigzMyksYz11KFwidHlwZWRfYXJyYXlcIiksYT11KFwidmlld1wiKSxmPSEoIWkuQXJyYXlCdWZmZXJ8fCFpLkRhdGFWaWV3KSxzPWYsbD0wLGg9XCJJbnQ4QXJyYXksVWludDhBcnJheSxVaW50OENsYW1wZWRBcnJheSxJbnQxNkFycmF5LFVpbnQxNkFycmF5LEludDMyQXJyYXksVWludDMyQXJyYXksRmxvYXQzMkFycmF5LEZsb2F0NjRBcnJheVwiLnNwbGl0KFwiLFwiKTtsPDk7KShlPWlbaFtsKytdXSk/KG8oZS5wcm90b3R5cGUsYywhMCksbyhlLnByb3RvdHlwZSxhLCEwKSk6cz0hMTt0LmV4cG9ydHM9e0FCVjpmLENPTlNUUjpzLFRZUEVEOmMsVklFVzphfX0sZnVuY3Rpb24odCxuLHIpe3QuZXhwb3J0cz1yKDI5KXx8IXIoMykoZnVuY3Rpb24oKXt2YXIgdD1NYXRoLnJhbmRvbSgpO19fZGVmaW5lU2V0dGVyX18uY2FsbChudWxsLHQsZnVuY3Rpb24oKXt9KSxkZWxldGUgcigyKVt0XX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7ZShlLlMsdCx7b2Y6ZnVuY3Rpb24gb2YoKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheSh0KTt0LS07KW5bdF09YXJndW1lbnRzW3RdO3JldHVybiBuZXcgdGhpcyhuKX19KX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLHU9cigxMCksYz1yKDE4KSxhPXIoNDApO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtlKGUuUyx0LHtmcm9tOmZ1bmN0aW9uIGZyb20odCl7dmFyIG4scixlLGksbz1hcmd1bWVudHNbMV07cmV0dXJuIHUodGhpcyksKG49byE9PUp0KSYmdShvKSx0PT1KdD9uZXcgdGhpczoocj1bXSxuPyhlPTAsaT1jKG8sYXJndW1lbnRzWzJdLDIpLGEodCwhMSxmdW5jdGlvbih0KXtyLnB1c2goaSh0LGUrKykpfSkpOmEodCwhMSxyLnB1c2gsciksbmV3IHRoaXMocikpfX0pfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoNCksaT1yKDIpLmRvY3VtZW50LG89ZShpKSYmZShpLmNyZWF0ZUVsZW1lbnQpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gbz9pLmNyZWF0ZUVsZW1lbnQodCk6e319fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyKSxpPXIoMjYpLG89cigyOSksdT1yKDk0KSxjPXIoOCkuZjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIG49aS5TeW1ib2x8fChpLlN5bWJvbD1vP3t9OmUuU3ltYm9sfHx7fSk7XCJfXCI9PXQuY2hhckF0KDApfHx0IGluIG58fGMobix0LHt2YWx1ZTp1LmYodCl9KX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDQ3KShcImtleXNcIiksaT1yKDMzKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGVbdF18fChlW3RdPWkodCkpfX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9XCJjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2ZcIi5zcGxpdChcIixcIil9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDIpLmRvY3VtZW50O3QuZXhwb3J0cz1lJiZlLmRvY3VtZW50RWxlbWVudH0sZnVuY3Rpb24odCxuLGkpe3ZhciByPWkoNCksZT1pKDEpLG89ZnVuY3Rpb24odCxuKXtpZihlKHQpLCFyKG4pJiZudWxsIT09bil0aHJvdyBUeXBlRXJyb3IobitcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIil9O3QuZXhwb3J0cz17c2V0Ok9iamVjdC5zZXRQcm90b3R5cGVPZnx8KFwiX19wcm90b19fXCJpbnt9P2Z1bmN0aW9uKHQscixlKXt0cnl7KGU9aSgxOCkoRnVuY3Rpb24uY2FsbCxpKDE2KS5mKE9iamVjdC5wcm90b3R5cGUsXCJfX3Byb3RvX19cIikuc2V0LDIpKSh0LFtdKSxyPSEodCBpbnN0YW5jZW9mIEFycmF5KX1jYXRjaChuKXtyPSEwfXJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZih0LG4pe3JldHVybiBvKHQsbikscj90Ll9fcHJvdG9fXz1uOmUodCxuKSx0fX0oe30sITEpOkp0KSxjaGVjazpvfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBvPXIoNCksdT1yKDcxKS5zZXQ7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixyKXt2YXIgZSxpPW4uY29uc3RydWN0b3I7cmV0dXJuIGkhPT1yJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiYoZT1pLnByb3RvdHlwZSkhPT1yLnByb3RvdHlwZSYmbyhlKSYmdSYmdSh0LGUpLHR9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1cIlxcdFxcblxceDBCXFxmXFxyIMKg4ZqA4aCO4oCA4oCB4oCC4oCD4oCE4oCF4oCG4oCH4oCI4oCJ4oCK4oCv4oGf44CAXFx1MjAyOFxcdTIwMjlcXHVmZWZmXCJ9LGZ1bmN0aW9uKHQsbixyKXt2YXIgaT1yKDIwKSxvPXIoMjMpO3QuZXhwb3J0cz1mdW5jdGlvbiByZXBlYXQodCl7dmFyIG49U3RyaW5nKG8odGhpcykpLHI9XCJcIixlPWkodCk7aWYoZTwwfHxlPT1JbmZpbml0eSl0aHJvdyBSYW5nZUVycm9yKFwiQ291bnQgY2FuJ3QgYmUgbmVnYXRpdmVcIik7Zm9yKDswPGU7KGU+Pj49MSkmJihuKz1uKSkxJmUmJihyKz1uKTtyZXR1cm4gcn19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPU1hdGguc2lnbnx8ZnVuY3Rpb24gc2lnbih0KXtyZXR1cm4gMD09KHQ9K3QpfHx0IT10P3Q6dDwwPy0xOjF9fSxmdW5jdGlvbih0LG4pe3ZhciByPU1hdGguZXhwbTE7dC5leHBvcnRzPSFyfHwyMjAyNS40NjU3OTQ4MDY3MTg8cigxMCl8fHIoMTApPDIyMDI1LjQ2NTc5NDgwNjcxOHx8LTJlLTE3IT1yKC0yZS0xNyk/ZnVuY3Rpb24gZXhwbTEodCl7cmV0dXJuIDA9PSh0PSt0KT90Oi0xZS02PHQmJnQ8MWUtNj90K3QqdC8yOk1hdGguZXhwKHQpLTF9OnJ9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDU2KSxpPXIoMjMpO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4scil7aWYoZShuKSl0aHJvdyBUeXBlRXJyb3IoXCJTdHJpbmcjXCIrcitcIiBkb2Vzbid0IGFjY2VwdCByZWdleCFcIik7cmV0dXJuIFN0cmluZyhpKHQpKX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgaT1yKDUpKFwibWF0Y2hcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBuPS8uLzt0cnl7XCIvLi9cIlt0XShuKX1jYXRjaChyKXt0cnl7cmV0dXJuIG5baV09ITEsIVwiLy4vXCJbdF0obil9Y2F0Y2goZSl7fX1yZXR1cm4hMH19LGZ1bmN0aW9uKHQsbixyKXt2YXIgXz1yKDI5KSxTPXIoMCkseD1yKDEyKSxtPXIoMTEpLHc9cig0NiksRT1yKDgwKSxPPXIoNDMpLE09cigxNyksST1yKDUpKFwiaXRlcmF0b3JcIiksUD0hKFtdLmtleXMmJlwibmV4dFwiaW5bXS5rZXlzKCkpLEY9XCJ2YWx1ZXNcIixBPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O3QuZXhwb3J0cz1mdW5jdGlvbih0LG4scixlLGksbyx1KXtFKHIsbixlKTt2YXIgYyxhLGYscz1mdW5jdGlvbih0KXtpZighUCYmdCBpbiB2KXJldHVybiB2W3RdO3N3aXRjaCh0KXtjYXNlXCJrZXlzXCI6cmV0dXJuIGZ1bmN0aW9uIGtleXMoKXtyZXR1cm4gbmV3IHIodGhpcyx0KX07Y2FzZSBGOnJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXtyZXR1cm4gbmV3IHIodGhpcyx0KX19cmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXtyZXR1cm4gbmV3IHIodGhpcyx0KX19LGw9bitcIiBJdGVyYXRvclwiLGg9aT09RixwPSExLHY9dC5wcm90b3R5cGUsZz12W0ldfHx2W1wiQEBpdGVyYXRvclwiXXx8aSYmdltpXSx5PWd8fHMoaSksZD1pP2g/cyhcImVudHJpZXNcIik6eTpKdCxiPVwiQXJyYXlcIj09biYmdi5lbnRyaWVzfHxnO2lmKGImJihmPU0oYi5jYWxsKG5ldyB0KSkpIT09T2JqZWN0LnByb3RvdHlwZSYmZi5uZXh0JiYoTyhmLGwsITApLF98fFwiZnVuY3Rpb25cIj09dHlwZW9mIGZbSV18fG0oZixJLEEpKSxoJiZnJiZnLm5hbWUhPT1GJiYocD0hMCx5PWZ1bmN0aW9uIHZhbHVlcygpe3JldHVybiBnLmNhbGwodGhpcyl9KSxfJiYhdXx8IVAmJiFwJiZ2W0ldfHxtKHYsSSx5KSx3W25dPXksd1tsXT1BLGkpaWYoYz17dmFsdWVzOmg/eTpzKEYpLGtleXM6bz95OnMoXCJrZXlzXCIpLGVudHJpZXM6ZH0sdSlmb3IoYSBpbiBjKWEgaW4gdnx8eCh2LGEsY1thXSk7ZWxzZSBTKFMuUCtTLkYqKFB8fHApLG4sYyk7cmV0dXJuIGN9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigzNiksaT1yKDMyKSxvPXIoNDMpLHU9e307cigxMSkodSxyKDUpKFwiaXRlcmF0b3JcIiksZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pLHQuZXhwb3J0cz1mdW5jdGlvbih0LG4scil7dC5wcm90b3R5cGU9ZSh1LHtuZXh0OmkoMSxyKX0pLG8odCxuK1wiIEl0ZXJhdG9yXCIpfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoNDYpLGk9cig1KShcIml0ZXJhdG9yXCIpLG89QXJyYXkucHJvdG90eXBlO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gdCE9PUp0JiYoZS5BcnJheT09PXR8fG9baV09PT10KX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDgpLGk9cigzMik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixyKXtuIGluIHQ/ZS5mKHQsbixpKDAscikpOnRbbl09cn19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDQ0KSxpPXIoNSkoXCJpdGVyYXRvclwiKSxvPXIoNDYpO3QuZXhwb3J0cz1yKDI2KS5nZXRJdGVyYXRvck1ldGhvZD1mdW5jdGlvbih0KXtpZih0IT1KdClyZXR1cm4gdFtpXXx8dFtcIkBAaXRlcmF0b3JcIl18fG9bZSh0KV19fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyMTMpO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe3JldHVybiBuZXcoZSh0KSkobil9fSxmdW5jdGlvbih0LG4scil7dmFyIGM9cig5KSxhPXIoMzUpLGY9cig2KTt0LmV4cG9ydHM9ZnVuY3Rpb24gZmlsbCh0KXtmb3IodmFyIG49Yyh0aGlzKSxyPWYobi5sZW5ndGgpLGU9YXJndW1lbnRzLmxlbmd0aCxpPWEoMTxlP2FyZ3VtZW50c1sxXTpKdCxyKSxvPTI8ZT9hcmd1bWVudHNbMl06SnQsdT1vPT09SnQ/cjphKG8scik7aTx1OyluW2krK109dDtyZXR1cm4gbn19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDMxKSxpPXIoMTExKSxvPXIoNDYpLHU9cigxNSk7dC5leHBvcnRzPXIoNzkpKEFycmF5LFwiQXJyYXlcIixmdW5jdGlvbih0LG4pe3RoaXMuX3Q9dSh0KSx0aGlzLl9pPTAsdGhpcy5faz1ufSxmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3Qsbj10aGlzLl9rLHI9dGhpcy5faSsrO3JldHVybiF0fHx0Lmxlbmd0aDw9cj8odGhpcy5fdD1KdCxpKDEpKTppKDAsXCJrZXlzXCI9PW4/cjpcInZhbHVlc1wiPT1uP3Rbcl06W3IsdFtyXV0pfSxcInZhbHVlc1wiKSxvLkFyZ3VtZW50cz1vLkFycmF5LGUoXCJrZXlzXCIpLGUoXCJ2YWx1ZXNcIiksZShcImVudHJpZXNcIil9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZSxpLHU9cig1MCksYz1SZWdFeHAucHJvdG90eXBlLmV4ZWMsYT1TdHJpbmcucHJvdG90eXBlLnJlcGxhY2Usbz1jLGY9XCJsYXN0SW5kZXhcIixzPShpPS9iKi9nLGMuY2FsbChlPS9hLyxcImFcIiksYy5jYWxsKGksXCJhXCIpLDAhPT1lW2ZdfHwwIT09aVtmXSksbD0vKCk/Py8uZXhlYyhcIlwiKVsxXSE9PUp0OyhzfHxsKSYmKG89ZnVuY3Rpb24gZXhlYyh0KXt2YXIgbixyLGUsaSxvPXRoaXM7cmV0dXJuIGwmJihyPW5ldyBSZWdFeHAoXCJeXCIrby5zb3VyY2UrXCIkKD8hXFxcXHMpXCIsdS5jYWxsKG8pKSkscyYmKG49b1tmXSksZT1jLmNhbGwobyx0KSxzJiZlJiYob1tmXT1vLmdsb2JhbD9lLmluZGV4K2VbMF0ubGVuZ3RoOm4pLGwmJmUmJjE8ZS5sZW5ndGgmJmEuY2FsbChlWzBdLHIsZnVuY3Rpb24oKXtmb3IoaT0xO2k8YXJndW1lbnRzLmxlbmd0aC0yO2krKylhcmd1bWVudHNbaV09PT1KdCYmKGVbaV09SnQpfSksZX0pLHQuZXhwb3J0cz1vfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cig1NSkoITApO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4scil7cmV0dXJuIG4rKHI/ZSh0LG4pLmxlbmd0aDoxKX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZSxpLG8sdT1yKDE4KSxjPXIoMTAxKSxhPXIoNzApLGY9cig2Nikscz1yKDIpLGw9cy5wcm9jZXNzLGg9cy5zZXRJbW1lZGlhdGUscD1zLmNsZWFySW1tZWRpYXRlLHY9cy5NZXNzYWdlQ2hhbm5lbCxnPXMuRGlzcGF0Y2gseT0wLGQ9e30sYj1cIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLF89ZnVuY3Rpb24oKXt2YXIgdD0rdGhpcztpZihkLmhhc093blByb3BlcnR5KHQpKXt2YXIgbj1kW3RdO2RlbGV0ZSBkW3RdLG4oKX19LFM9ZnVuY3Rpb24odCl7Xy5jYWxsKHQuZGF0YSl9O2gmJnB8fChoPWZ1bmN0aW9uIHNldEltbWVkaWF0ZSh0KXtmb3IodmFyIG49W10scj0xO3I8YXJndW1lbnRzLmxlbmd0aDspbi5wdXNoKGFyZ3VtZW50c1tyKytdKTtyZXR1cm4gZFsrK3ldPWZ1bmN0aW9uKCl7YyhcImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6RnVuY3Rpb24odCksbil9LGUoeSkseX0scD1mdW5jdGlvbiBjbGVhckltbWVkaWF0ZSh0KXtkZWxldGUgZFt0XX0sXCJwcm9jZXNzXCI9PXIoMTkpKGwpP2U9ZnVuY3Rpb24odCl7bC5uZXh0VGljayh1KF8sdCwxKSl9OmcmJmcubm93P2U9ZnVuY3Rpb24odCl7Zy5ub3codShfLHQsMSkpfTp2PyhvPShpPW5ldyB2KS5wb3J0MixpLnBvcnQxLm9ubWVzc2FnZT1TLGU9dShvLnBvc3RNZXNzYWdlLG8sMSkpOnMuYWRkRXZlbnRMaXN0ZW5lciYmXCJmdW5jdGlvblwiPT10eXBlb2YgcG9zdE1lc3NhZ2UmJiFzLmltcG9ydFNjcmlwdHM/KGU9ZnVuY3Rpb24odCl7cy5wb3N0TWVzc2FnZSh0K1wiXCIsXCIqXCIpfSxzLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsUywhMSkpOmU9YiBpbiBmKFwic2NyaXB0XCIpP2Z1bmN0aW9uKHQpe2EuYXBwZW5kQ2hpbGQoZihcInNjcmlwdFwiKSlbYl09ZnVuY3Rpb24oKXthLnJlbW92ZUNoaWxkKHRoaXMpLF8uY2FsbCh0KX19OmZ1bmN0aW9uKHQpe3NldFRpbWVvdXQodShfLHQsMSksMCl9KSx0LmV4cG9ydHM9e3NldDpoLGNsZWFyOnB9fSxmdW5jdGlvbih0LG4scil7dmFyIGM9cigyKSxhPXIoODkpLnNldCxmPWMuTXV0YXRpb25PYnNlcnZlcnx8Yy5XZWJLaXRNdXRhdGlvbk9ic2VydmVyLHM9Yy5wcm9jZXNzLGw9Yy5Qcm9taXNlLGg9XCJwcm9jZXNzXCI9PXIoMTkpKHMpO3QuZXhwb3J0cz1mdW5jdGlvbigpe3ZhciBlLGksbyx0PWZ1bmN0aW9uKCl7dmFyIHQsbjtmb3IoaCYmKHQ9cy5kb21haW4pJiZ0LmV4aXQoKTtlOyl7bj1lLmZuLGU9ZS5uZXh0O3RyeXtuKCl9Y2F0Y2gocil7dGhyb3cgZT9vKCk6aT1KdCxyfX1pPUp0LHQmJnQuZW50ZXIoKX07aWYoaClvPWZ1bmN0aW9uKCl7cy5uZXh0VGljayh0KX07ZWxzZSBpZighZnx8Yy5uYXZpZ2F0b3ImJmMubmF2aWdhdG9yLnN0YW5kYWxvbmUpaWYobCYmbC5yZXNvbHZlKXt2YXIgbj1sLnJlc29sdmUoSnQpO289ZnVuY3Rpb24oKXtuLnRoZW4odCl9fWVsc2Ugbz1mdW5jdGlvbigpe2EuY2FsbChjLHQpfTtlbHNle3ZhciByPSEwLHU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7bmV3IGYodCkub2JzZXJ2ZSh1LHtjaGFyYWN0ZXJEYXRhOiEwfSksbz1mdW5jdGlvbigpe3UuZGF0YT1yPSFyfX1yZXR1cm4gZnVuY3Rpb24odCl7dmFyIG49e2ZuOnQsbmV4dDpKdH07aSYmKGkubmV4dD1uKSxlfHwoZT1uLG8oKSksaT1ufX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgaT1yKDEwKTtmdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eSh0KXt2YXIgcixlO3RoaXMucHJvbWlzZT1uZXcgdChmdW5jdGlvbih0LG4pe2lmKHIhPT1KdHx8ZSE9PUp0KXRocm93IFR5cGVFcnJvcihcIkJhZCBQcm9taXNlIGNvbnN0cnVjdG9yXCIpO3I9dCxlPW59KSx0aGlzLnJlc29sdmU9aShyKSx0aGlzLnJlamVjdD1pKGUpfXQuZXhwb3J0cy5mPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkodCl9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyKSxpPXIoNyksbz1yKDI5KSx1PXIoNjIpLGM9cigxMSksYT1yKDQxKSxmPXIoMykscz1yKDM5KSxsPXIoMjApLGg9cig2KSxwPXIoMTIyKSx2PXIoMzcpLmYsZz1yKDgpLmYseT1yKDg1KSxkPXIoNDMpLGI9XCJBcnJheUJ1ZmZlclwiLF89XCJEYXRhVmlld1wiLFM9XCJwcm90b3R5cGVcIix4PVwiV3JvbmcgaW5kZXghXCIsbT1lW2JdLHc9ZVtfXSxFPWUuTWF0aCxPPWUuUmFuZ2VFcnJvcixNPWUuSW5maW5pdHksST1tLFA9RS5hYnMsRj1FLnBvdyxBPUUuZmxvb3Isaz1FLmxvZyxOPUUuTE4yLGo9XCJieXRlTGVuZ3RoXCIsUj1cImJ5dGVPZmZzZXRcIixUPWk/XCJfYlwiOlwiYnVmZmVyXCIsTD1pP1wiX2xcIjpqLEQ9aT9cIl9vXCI6UjtmdW5jdGlvbiBwYWNrSUVFRTc1NCh0LG4scil7dmFyIGUsaSxvLHU9bmV3IEFycmF5KHIpLGM9OCpyLW4tMSxhPSgxPDxjKS0xLGY9YT4+MSxzPTIzPT09bj9GKDIsLTI0KS1GKDIsLTc3KTowLGw9MCxoPXQ8MHx8MD09PXQmJjEvdDwwPzE6MDtmb3IoKHQ9UCh0KSkhPXR8fHQ9PT1NPyhpPXQhPXQ/MTowLGU9YSk6KGU9QShrKHQpL04pLHQqKG89RigyLC1lKSk8MSYmKGUtLSxvKj0yKSwyPD0odCs9MTw9ZStmP3MvbzpzKkYoMiwxLWYpKSpvJiYoZSsrLG8vPTIpLGE8PWUrZj8oaT0wLGU9YSk6MTw9ZStmPyhpPSh0Km8tMSkqRigyLG4pLGUrPWYpOihpPXQqRigyLGYtMSkqRigyLG4pLGU9MCkpOzg8PW47dVtsKytdPTI1NSZpLGkvPTI1NixuLT04KTtmb3IoZT1lPDxufGksYys9bjswPGM7dVtsKytdPTI1NSZlLGUvPTI1NixjLT04KTtyZXR1cm4gdVstLWxdfD0xMjgqaCx1fWZ1bmN0aW9uIHVucGFja0lFRUU3NTQodCxuLHIpe3ZhciBlLGk9OCpyLW4tMSxvPSgxPDxpKS0xLHU9bz4+MSxjPWktNyxhPXItMSxmPXRbYS0tXSxzPTEyNyZmO2ZvcihmPj49NzswPGM7cz0yNTYqcyt0W2FdLGEtLSxjLT04KTtmb3IoZT1zJigxPDwtYyktMSxzPj49LWMsYys9bjswPGM7ZT0yNTYqZSt0W2FdLGEtLSxjLT04KTtpZigwPT09cylzPTEtdTtlbHNle2lmKHM9PT1vKXJldHVybiBlP05hTjpmPy1NOk07ZSs9RigyLG4pLHMtPXV9cmV0dXJuKGY/LTE6MSkqZSpGKDIscy1uKX1mdW5jdGlvbiB1bnBhY2tJMzIodCl7cmV0dXJuIHRbM108PDI0fHRbMl08PDE2fHRbMV08PDh8dFswXX1mdW5jdGlvbiBwYWNrSTgodCl7cmV0dXJuWzI1NSZ0XX1mdW5jdGlvbiBwYWNrSTE2KHQpe3JldHVyblsyNTUmdCx0Pj44JjI1NV19ZnVuY3Rpb24gcGFja0kzMih0KXtyZXR1cm5bMjU1JnQsdD4+OCYyNTUsdD4+MTYmMjU1LHQ+PjI0JjI1NV19ZnVuY3Rpb24gcGFja0Y2NCh0KXtyZXR1cm4gcGFja0lFRUU3NTQodCw1Miw4KX1mdW5jdGlvbiBwYWNrRjMyKHQpe3JldHVybiBwYWNrSUVFRTc1NCh0LDIzLDQpfWZ1bmN0aW9uIGFkZEdldHRlcih0LG4scil7Zyh0W1NdLG4se2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzW3JdfX0pfWZ1bmN0aW9uIGdldCh0LG4scixlKXt2YXIgaT1wKCtyKTtpZih0W0xdPGkrbil0aHJvdyBPKHgpO3ZhciBvPWkrdFtEXSx1PXRbVF0uX2Iuc2xpY2UobyxvK24pO3JldHVybiBlP3U6dS5yZXZlcnNlKCl9ZnVuY3Rpb24gc2V0KHQsbixyLGUsaSxvKXt2YXIgdT1wKCtyKTtpZih0W0xdPHUrbil0aHJvdyBPKHgpO2Zvcih2YXIgYz10W1RdLl9iLGE9dSt0W0RdLGY9ZSgraSkscz0wO3M8bjtzKyspY1thK3NdPWZbbz9zOm4tcy0xXX1pZih1LkFCVil7aWYoIWYoZnVuY3Rpb24oKXttKDEpfSl8fCFmKGZ1bmN0aW9uKCl7bmV3IG0oLTEpfSl8fGYoZnVuY3Rpb24oKXtyZXR1cm4gbmV3IG0sbmV3IG0oMS41KSxuZXcgbShOYU4pLG0ubmFtZSE9Yn0pKXtmb3IodmFyIEMsVT0obT1mdW5jdGlvbiBBcnJheUJ1ZmZlcih0KXtyZXR1cm4gcyh0aGlzLG0pLG5ldyBJKHAodCkpfSlbU109SVtTXSxXPXYoSSksRz0wO0c8Vy5sZW5ndGg7KShDPVdbRysrXSlpbiBtfHxjKG0sQyxJW0NdKTtvfHwoVS5jb25zdHJ1Y3Rvcj1tKX12YXIgVj1uZXcgdyhuZXcgbSgyKSksQj13W1NdLnNldEludDg7Vi5zZXRJbnQ4KDAsMjE0NzQ4MzY0OCksVi5zZXRJbnQ4KDEsMjE0NzQ4MzY0OSksIVYuZ2V0SW50OCgwKSYmVi5nZXRJbnQ4KDEpfHxhKHdbU10se3NldEludDg6ZnVuY3Rpb24gc2V0SW50OCh0LG4pe0IuY2FsbCh0aGlzLHQsbjw8MjQ+PjI0KX0sc2V0VWludDg6ZnVuY3Rpb24gc2V0VWludDgodCxuKXtCLmNhbGwodGhpcyx0LG48PDI0Pj4yNCl9fSwhMCl9ZWxzZSBtPWZ1bmN0aW9uIEFycmF5QnVmZmVyKHQpe3ModGhpcyxtLGIpO3ZhciBuPXAodCk7dGhpcy5fYj15LmNhbGwobmV3IEFycmF5KG4pLDApLHRoaXNbTF09bn0sdz1mdW5jdGlvbiBEYXRhVmlldyh0LG4scil7cyh0aGlzLHcsXykscyh0LG0sXyk7dmFyIGU9dFtMXSxpPWwobik7aWYoaTwwfHxlPGkpdGhyb3cgTyhcIldyb25nIG9mZnNldCFcIik7aWYoZTxpKyhyPXI9PT1KdD9lLWk6aChyKSkpdGhyb3cgTyhcIldyb25nIGxlbmd0aCFcIik7dGhpc1tUXT10LHRoaXNbRF09aSx0aGlzW0xdPXJ9LGkmJihhZGRHZXR0ZXIobSxqLFwiX2xcIiksYWRkR2V0dGVyKHcsXCJidWZmZXJcIixcIl9iXCIpLGFkZEdldHRlcih3LGosXCJfbFwiKSxhZGRHZXR0ZXIodyxSLFwiX29cIikpLGEod1tTXSx7Z2V0SW50ODpmdW5jdGlvbiBnZXRJbnQ4KHQpe3JldHVybiBnZXQodGhpcywxLHQpWzBdPDwyND4+MjR9LGdldFVpbnQ4OmZ1bmN0aW9uIGdldFVpbnQ4KHQpe3JldHVybiBnZXQodGhpcywxLHQpWzBdfSxnZXRJbnQxNjpmdW5jdGlvbiBnZXRJbnQxNih0KXt2YXIgbj1nZXQodGhpcywyLHQsYXJndW1lbnRzWzFdKTtyZXR1cm4oblsxXTw8OHxuWzBdKTw8MTY+PjE2fSxnZXRVaW50MTY6ZnVuY3Rpb24gZ2V0VWludDE2KHQpe3ZhciBuPWdldCh0aGlzLDIsdCxhcmd1bWVudHNbMV0pO3JldHVybiBuWzFdPDw4fG5bMF19LGdldEludDMyOmZ1bmN0aW9uIGdldEludDMyKHQpe3JldHVybiB1bnBhY2tJMzIoZ2V0KHRoaXMsNCx0LGFyZ3VtZW50c1sxXSkpfSxnZXRVaW50MzI6ZnVuY3Rpb24gZ2V0VWludDMyKHQpe3JldHVybiB1bnBhY2tJMzIoZ2V0KHRoaXMsNCx0LGFyZ3VtZW50c1sxXSkpPj4+MH0sZ2V0RmxvYXQzMjpmdW5jdGlvbiBnZXRGbG9hdDMyKHQpe3JldHVybiB1bnBhY2tJRUVFNzU0KGdldCh0aGlzLDQsdCxhcmd1bWVudHNbMV0pLDIzLDQpfSxnZXRGbG9hdDY0OmZ1bmN0aW9uIGdldEZsb2F0NjQodCl7cmV0dXJuIHVucGFja0lFRUU3NTQoZ2V0KHRoaXMsOCx0LGFyZ3VtZW50c1sxXSksNTIsOCl9LHNldEludDg6ZnVuY3Rpb24gc2V0SW50OCh0LG4pe3NldCh0aGlzLDEsdCxwYWNrSTgsbil9LHNldFVpbnQ4OmZ1bmN0aW9uIHNldFVpbnQ4KHQsbil7c2V0KHRoaXMsMSx0LHBhY2tJOCxuKX0sc2V0SW50MTY6ZnVuY3Rpb24gc2V0SW50MTYodCxuKXtzZXQodGhpcywyLHQscGFja0kxNixuLGFyZ3VtZW50c1syXSl9LHNldFVpbnQxNjpmdW5jdGlvbiBzZXRVaW50MTYodCxuKXtzZXQodGhpcywyLHQscGFja0kxNixuLGFyZ3VtZW50c1syXSl9LHNldEludDMyOmZ1bmN0aW9uIHNldEludDMyKHQsbil7c2V0KHRoaXMsNCx0LHBhY2tJMzIsbixhcmd1bWVudHNbMl0pfSxzZXRVaW50MzI6ZnVuY3Rpb24gc2V0VWludDMyKHQsbil7c2V0KHRoaXMsNCx0LHBhY2tJMzIsbixhcmd1bWVudHNbMl0pfSxzZXRGbG9hdDMyOmZ1bmN0aW9uIHNldEZsb2F0MzIodCxuKXtzZXQodGhpcyw0LHQscGFja0YzMixuLGFyZ3VtZW50c1syXSl9LFxuc2V0RmxvYXQ2NDpmdW5jdGlvbiBzZXRGbG9hdDY0KHQsbil7c2V0KHRoaXMsOCx0LHBhY2tGNjQsbixhcmd1bWVudHNbMl0pfX0pO2QobSxiKSxkKHcsXyksYyh3W1NdLHUuVklFVywhMCksbltiXT1tLG5bX109d30sZnVuY3Rpb24odCxuLHIpe3QuZXhwb3J0cz0hcig3KSYmIXIoMykoZnVuY3Rpb24oKXtyZXR1cm4gNyE9T2JqZWN0LmRlZmluZVByb3BlcnR5KHIoNjYpKFwiZGl2XCIpLFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gN319KS5hfSl9LGZ1bmN0aW9uKHQsbixyKXtuLmY9cig1KX0sZnVuY3Rpb24odCxuLHIpe3ZhciB1PXIoMTQpLGM9cigxNSksYT1yKDUyKSghMSksZj1yKDY4KShcIklFX1BST1RPXCIpO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe3ZhciByLGU9Yyh0KSxpPTAsbz1bXTtmb3IociBpbiBlKXIhPWYmJnUoZSxyKSYmby5wdXNoKHIpO2Zvcig7aTxuLmxlbmd0aDspdShlLHI9bltpKytdKSYmKH5hKG8scil8fG8ucHVzaChyKSk7cmV0dXJuIG99fSxmdW5jdGlvbih0LG4scil7dmFyIHU9cig4KSxjPXIoMSksYT1yKDM0KTt0LmV4cG9ydHM9cig3KT9PYmplY3QuZGVmaW5lUHJvcGVydGllczpmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHQsbil7Yyh0KTtmb3IodmFyIHIsZT1hKG4pLGk9ZS5sZW5ndGgsbz0wO288aTspdS5mKHQscj1lW28rK10sbltyXSk7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigxNSksaT1yKDM3KS5mLG89e30udG9TdHJpbmcsdT1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzP09iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdyk6W107dC5leHBvcnRzLmY9ZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyh0KXtyZXR1cm4gdSYmXCJbb2JqZWN0IFdpbmRvd11cIj09by5jYWxsKHQpP2Z1bmN0aW9uKHQpe3RyeXtyZXR1cm4gaSh0KX1jYXRjaChuKXtyZXR1cm4gdS5zbGljZSgpfX0odCk6aShlKHQpKX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgaD1yKDM0KSxwPXIoNTMpLHY9cig0OSksZz1yKDkpLHk9cig0OCksaT1PYmplY3QuYXNzaWduO3QuZXhwb3J0cz0haXx8cigzKShmdW5jdGlvbigpe3ZhciB0PXt9LG49e30scj1TeW1ib2woKSxlPVwiYWJjZGVmZ2hpamtsbW5vcHFyc3RcIjtyZXR1cm4gdFtyXT03LGUuc3BsaXQoXCJcIikuZm9yRWFjaChmdW5jdGlvbih0KXtuW3RdPXR9KSw3IT1pKHt9LHQpW3JdfHxPYmplY3Qua2V5cyhpKHt9LG4pKS5qb2luKFwiXCIpIT1lfSk/ZnVuY3Rpb24gYXNzaWduKHQsbil7Zm9yKHZhciByPWcodCksZT1hcmd1bWVudHMubGVuZ3RoLGk9MSxvPXAuZix1PXYuZjtpPGU7KWZvcih2YXIgYyxhPXkoYXJndW1lbnRzW2krK10pLGY9bz9oKGEpLmNvbmNhdChvKGEpKTpoKGEpLHM9Zi5sZW5ndGgsbD0wO2w8czspdS5jYWxsKGEsYz1mW2wrK10pJiYocltjXT1hW2NdKTtyZXR1cm4gcn06aX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9T2JqZWN0LmlzfHxmdW5jdGlvbiBpcyh0LG4pe3JldHVybiB0PT09bj8wIT09dHx8MS90PT0xL246dCE9dCYmbiE9bn19LGZ1bmN0aW9uKHQsbixyKXt2YXIgbz1yKDEwKSx1PXIoNCksYz1yKDEwMSksYT1bXS5zbGljZSxmPXt9O3QuZXhwb3J0cz1GdW5jdGlvbi5iaW5kfHxmdW5jdGlvbiBiaW5kKG4pe3ZhciByPW8odGhpcyksZT1hLmNhbGwoYXJndW1lbnRzLDEpLGk9ZnVuY3Rpb24oKXt2YXIgdD1lLmNvbmNhdChhLmNhbGwoYXJndW1lbnRzKSk7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBpP2Z1bmN0aW9uKHQsbixyKXtpZighKG4gaW4gZikpe2Zvcih2YXIgZT1bXSxpPTA7aTxuO2krKyllW2ldPVwiYVtcIitpK1wiXVwiO2Zbbl09RnVuY3Rpb24oXCJGLGFcIixcInJldHVybiBuZXcgRihcIitlLmpvaW4oXCIsXCIpK1wiKVwiKX1yZXR1cm4gZltuXSh0LHIpfShyLHQubGVuZ3RoLHQpOmMocix0LG4pfTtyZXR1cm4gdShyLnByb3RvdHlwZSkmJihpLnByb3RvdHlwZT1yLnByb3RvdHlwZSksaX19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yPT09SnQ7c3dpdGNoKG4ubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIGU/dCgpOnQuY2FsbChyKTtjYXNlIDE6cmV0dXJuIGU/dChuWzBdKTp0LmNhbGwocixuWzBdKTtjYXNlIDI6cmV0dXJuIGU/dChuWzBdLG5bMV0pOnQuY2FsbChyLG5bMF0sblsxXSk7Y2FzZSAzOnJldHVybiBlP3QoblswXSxuWzFdLG5bMl0pOnQuY2FsbChyLG5bMF0sblsxXSxuWzJdKTtjYXNlIDQ6cmV0dXJuIGU/dChuWzBdLG5bMV0sblsyXSxuWzNdKTp0LmNhbGwocixuWzBdLG5bMV0sblsyXSxuWzNdKX1yZXR1cm4gdC5hcHBseShyLG4pfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMTkpO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe2lmKFwibnVtYmVyXCIhPXR5cGVvZiB0JiZcIk51bWJlclwiIT1lKHQpKXRocm93IFR5cGVFcnJvcihuKTtyZXR1cm4rdH19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDQpLGk9TWF0aC5mbG9vcjt0LmV4cG9ydHM9ZnVuY3Rpb24gaXNJbnRlZ2VyKHQpe3JldHVybiFlKHQpJiZpc0Zpbml0ZSh0KSYmaSh0KT09PXR9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyKS5wYXJzZUZsb2F0LGk9cig0NSkudHJpbTt0LmV4cG9ydHM9MS9lKHIoNzMpK1wiLTBcIikhPS1JbmZpbml0eT9mdW5jdGlvbiBwYXJzZUZsb2F0KHQpe3ZhciBuPWkoU3RyaW5nKHQpLDMpLHI9ZShuKTtyZXR1cm4gMD09PXImJlwiLVwiPT1uLmNoYXJBdCgwKT8tMDpyfTplfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyKS5wYXJzZUludCxpPXIoNDUpLnRyaW0sbz1yKDczKSx1PS9eWy0rXT8wW3hYXS87dC5leHBvcnRzPTghPT1lKG8rXCIwOFwiKXx8MjIhPT1lKG8rXCIweDE2XCIpP2Z1bmN0aW9uIHBhcnNlSW50KHQsbil7dmFyIHI9aShTdHJpbmcodCksMyk7cmV0dXJuIGUocixuPj4+MHx8KHUudGVzdChyKT8xNjoxMCkpfTplfSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1NYXRoLmxvZzFwfHxmdW5jdGlvbiBsb2cxcCh0KXtyZXR1cm4tMWUtODwodD0rdCkmJnQ8MWUtOD90LXQqdC8yOk1hdGgubG9nKDErdCl9fSxmdW5jdGlvbih0LG4scil7dmFyIG89cig3NSksZT1NYXRoLnBvdyx1PWUoMiwtNTIpLGM9ZSgyLC0yMyksYT1lKDIsMTI3KSooMi1jKSxmPWUoMiwtMTI2KTt0LmV4cG9ydHM9TWF0aC5mcm91bmR8fGZ1bmN0aW9uIGZyb3VuZCh0KXt2YXIgbixyLGU9TWF0aC5hYnModCksaT1vKHQpO3JldHVybiBlPGY/aSooZS9mL2MrMS91LTEvdSkqZipjOmE8KHI9KG49KDErYy91KSplKS0obi1lKSl8fHIhPXI/aSpJbmZpbml0eTppKnJ9fSxmdW5jdGlvbih0LG4scil7dmFyIHU9cigxKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLHIsZSl7dHJ5e3JldHVybiBlP24odShyKVswXSxyWzFdKTpuKHIpfWNhdGNoKG8pe3ZhciBpPXRbXCJyZXR1cm5cIl07dGhyb3cgaSE9PUp0JiZ1KGkuY2FsbCh0KSksb319fSxmdW5jdGlvbih0LG4scil7dmFyIHM9cigxMCksbD1yKDkpLGg9cig0OCkscD1yKDYpO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4scixlLGkpe3Mobik7dmFyIG89bCh0KSx1PWgobyksYz1wKG8ubGVuZ3RoKSxhPWk/Yy0xOjAsZj1pPy0xOjE7aWYocjwyKWZvcig7Oyl7aWYoYSBpbiB1KXtlPXVbYV0sYSs9ZjticmVha31pZihhKz1mLGk/YTwwOmM8PWEpdGhyb3cgVHlwZUVycm9yKFwiUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZVwiKX1mb3IoO2k/MDw9YTphPGM7YSs9ZilhIGluIHUmJihlPW4oZSx1W2FdLGEsbykpO3JldHVybiBlfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBmPXIoOSkscz1yKDM1KSxsPXIoNik7dC5leHBvcnRzPVtdLmNvcHlXaXRoaW58fGZ1bmN0aW9uIGNvcHlXaXRoaW4odCxuKXt2YXIgcj1mKHRoaXMpLGU9bChyLmxlbmd0aCksaT1zKHQsZSksbz1zKG4sZSksdT0yPGFyZ3VtZW50cy5sZW5ndGg/YXJndW1lbnRzWzJdOkp0LGM9TWF0aC5taW4oKHU9PT1KdD9lOnModSxlKSktbyxlLWkpLGE9MTtmb3IobzxpJiZpPG8rYyYmKGE9LTEsbys9Yy0xLGkrPWMtMSk7MDxjLS07KW8gaW4gcj9yW2ldPXJbb106ZGVsZXRlIHJbaV0saSs9YSxvKz1hO3JldHVybiByfX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtyZXR1cm57dmFsdWU6bixkb25lOiEhdH19fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cig4Nyk7cigwKSh7dGFyZ2V0OlwiUmVnRXhwXCIscHJvdG86ITAsZm9yY2VkOmUhPT0vLi8uZXhlY30se2V4ZWM6ZX0pfSxmdW5jdGlvbih0LG4scil7cig3KSYmXCJnXCIhPS8uL2cuZmxhZ3MmJnIoOCkuZihSZWdFeHAucHJvdG90eXBlLFwiZmxhZ3NcIix7Y29uZmlndXJhYmxlOiEwLGdldDpyKDUwKX0pfSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXt0cnl7cmV0dXJue2U6ITEsdjp0KCl9fWNhdGNoKG4pe3JldHVybntlOiEwLHY6bn19fX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMSksaT1yKDQpLG89cig5MSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7aWYoZSh0KSxpKG4pJiZuLmNvbnN0cnVjdG9yPT09dClyZXR1cm4gbjt2YXIgcj1vLmYodCk7cmV0dXJuKDAsci5yZXNvbHZlKShuKSxyLnByb21pc2V9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigxMTcpLGk9cig0Mik7dC5leHBvcnRzPXIoNjEpKFwiTWFwXCIsZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uIE1hcCgpe3JldHVybiB0KHRoaXMsMDxhcmd1bWVudHMubGVuZ3RoP2FyZ3VtZW50c1swXTpKdCl9fSx7Z2V0OmZ1bmN0aW9uIGdldCh0KXt2YXIgbj1lLmdldEVudHJ5KGkodGhpcyxcIk1hcFwiKSx0KTtyZXR1cm4gbiYmbi52fSxzZXQ6ZnVuY3Rpb24gc2V0KHQsbil7cmV0dXJuIGUuZGVmKGkodGhpcyxcIk1hcFwiKSwwPT09dD8wOnQsbil9fSxlLCEwKX0sZnVuY3Rpb24odCxuLHIpe3ZhciB1PXIoOCkuZixjPXIoMzYpLGE9cig0MSksZj1yKDE4KSxzPXIoMzkpLGw9cig0MCksZT1yKDc5KSxpPXIoMTExKSxvPXIoMzgpLGg9cig3KSxwPXIoMzApLmZhc3RLZXksdj1yKDQyKSxnPWg/XCJfc1wiOlwic2l6ZVwiLHk9ZnVuY3Rpb24odCxuKXt2YXIgcixlPXAobik7aWYoXCJGXCIhPT1lKXJldHVybiB0Ll9pW2VdO2ZvcihyPXQuX2Y7cjtyPXIubilpZihyLms9PW4pcmV0dXJuIHJ9O3QuZXhwb3J0cz17Z2V0Q29uc3RydWN0b3I6ZnVuY3Rpb24odCxvLHIsZSl7dmFyIGk9dChmdW5jdGlvbih0LG4pe3ModCxpLG8sXCJfaVwiKSx0Ll90PW8sdC5faT1jKG51bGwpLHQuX2Y9SnQsdC5fbD1KdCx0W2ddPTAsbiE9SnQmJmwobixyLHRbZV0sdCl9KTtyZXR1cm4gYShpLnByb3RvdHlwZSx7Y2xlYXI6ZnVuY3Rpb24gY2xlYXIoKXtmb3IodmFyIHQ9dih0aGlzLG8pLG49dC5faSxyPXQuX2Y7cjtyPXIubilyLnI9ITAsci5wJiYoci5wPXIucC5uPUp0KSxkZWxldGUgbltyLmldO3QuX2Y9dC5fbD1KdCx0W2ddPTB9LFwiZGVsZXRlXCI6ZnVuY3Rpb24odCl7dmFyIG49dih0aGlzLG8pLHI9eShuLHQpO2lmKHIpe3ZhciBlPXIubixpPXIucDtkZWxldGUgbi5faVtyLmldLHIucj0hMCxpJiYoaS5uPWUpLGUmJihlLnA9aSksbi5fZj09ciYmKG4uX2Y9ZSksbi5fbD09ciYmKG4uX2w9aSksbltnXS0tfXJldHVybiEhcn0sZm9yRWFjaDpmdW5jdGlvbiBmb3JFYWNoKHQpe3YodGhpcyxvKTtmb3IodmFyIG4scj1mKHQsMTxhcmd1bWVudHMubGVuZ3RoP2FyZ3VtZW50c1sxXTpKdCwzKTtuPW4/bi5uOnRoaXMuX2Y7KWZvcihyKG4udixuLmssdGhpcyk7biYmbi5yOyluPW4ucH0saGFzOmZ1bmN0aW9uIGhhcyh0KXtyZXR1cm4hIXkodih0aGlzLG8pLHQpfX0pLGgmJnUoaS5wcm90b3R5cGUsXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB2KHRoaXMsbylbZ119fSksaX0sZGVmOmZ1bmN0aW9uKHQsbixyKXt2YXIgZSxpLG89eSh0LG4pO3JldHVybiBvP28udj1yOih0Ll9sPW89e2k6aT1wKG4sITApLGs6bix2OnIscDplPXQuX2wsbjpKdCxyOiExfSx0Ll9mfHwodC5fZj1vKSxlJiYoZS5uPW8pLHRbZ10rKyxcIkZcIiE9PWkmJih0Ll9pW2ldPW8pKSx0fSxnZXRFbnRyeTp5LHNldFN0cm9uZzpmdW5jdGlvbih0LHIsbil7ZSh0LHIsZnVuY3Rpb24odCxuKXt0aGlzLl90PXYodCxyKSx0aGlzLl9rPW4sdGhpcy5fbD1KdH0sZnVuY3Rpb24oKXtmb3IodmFyIHQ9dGhpcyxuPXQuX2sscj10Ll9sO3ImJnIucjspcj1yLnA7cmV0dXJuIHQuX3QmJih0Ll9sPXI9cj9yLm46dC5fdC5fZik/aSgwLFwia2V5c1wiPT1uP3IuazpcInZhbHVlc1wiPT1uP3Iudjpbci5rLHIudl0pOih0Ll90PUp0LGkoMSkpfSxuP1wiZW50cmllc1wiOlwidmFsdWVzXCIsIW4sITApLG8ocil9fX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMTE3KSxpPXIoNDIpO3QuZXhwb3J0cz1yKDYxKShcIlNldFwiLGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbiBTZXQoKXtyZXR1cm4gdCh0aGlzLDA8YXJndW1lbnRzLmxlbmd0aD9hcmd1bWVudHNbMF06SnQpfX0se2FkZDpmdW5jdGlvbiBhZGQodCl7cmV0dXJuIGUuZGVmKGkodGhpcyxcIlNldFwiKSx0PTA9PT10PzA6dCx0KX19LGUpfSxmdW5jdGlvbih0LG4scil7dmFyIG8sZT1yKDIpLGk9cigyNSkoMCksdT1yKDEyKSxjPXIoMzApLGE9cig5OCksZj1yKDEyMCkscz1yKDQpLGw9cig0MiksaD1yKDQyKSxwPSFlLkFjdGl2ZVhPYmplY3QmJlwiQWN0aXZlWE9iamVjdFwiaW4gZSx2PVwiV2Vha01hcFwiLGc9Yy5nZXRXZWFrLHk9T2JqZWN0LmlzRXh0ZW5zaWJsZSxkPWYudWZzdG9yZSxiPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbiBXZWFrTWFwKCl7cmV0dXJuIHQodGhpcywwPGFyZ3VtZW50cy5sZW5ndGg/YXJndW1lbnRzWzBdOkp0KX19LF89e2dldDpmdW5jdGlvbiBnZXQodCl7aWYocyh0KSl7dmFyIG49Zyh0KTtyZXR1cm4hMD09PW4/ZChsKHRoaXMsdikpLmdldCh0KTpuP25bdGhpcy5faV06SnR9fSxzZXQ6ZnVuY3Rpb24gc2V0KHQsbil7cmV0dXJuIGYuZGVmKGwodGhpcyx2KSx0LG4pfX0sUz10LmV4cG9ydHM9cig2MSkodixiLF8sZiwhMCwhMCk7aCYmcCYmKGEoKG89Zi5nZXRDb25zdHJ1Y3RvcihiLHYpKS5wcm90b3R5cGUsXyksYy5ORUVEPSEwLGkoW1wiZGVsZXRlXCIsXCJoYXNcIixcImdldFwiLFwic2V0XCJdLGZ1bmN0aW9uKGUpe3ZhciB0PVMucHJvdG90eXBlLGk9dFtlXTt1KHQsZSxmdW5jdGlvbih0LG4pe2lmKHModCkmJiF5KHQpKXt0aGlzLl9mfHwodGhpcy5fZj1uZXcgbyk7dmFyIHI9dGhpcy5fZltlXSh0LG4pO3JldHVyblwic2V0XCI9PWU/dGhpczpyfXJldHVybiBpLmNhbGwodGhpcyx0LG4pfSl9KSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgdT1yKDQxKSxjPXIoMzApLmdldFdlYWssaT1yKDEpLGE9cig0KSxmPXIoMzkpLHM9cig0MCksZT1yKDI1KSxsPXIoMTQpLGg9cig0Miksbz1lKDUpLHA9ZSg2KSx2PTAsZz1mdW5jdGlvbih0KXtyZXR1cm4gdC5fbHx8KHQuX2w9bmV3IHkpfSx5PWZ1bmN0aW9uKCl7dGhpcy5hPVtdfSxkPWZ1bmN0aW9uKHQsbil7cmV0dXJuIG8odC5hLGZ1bmN0aW9uKHQpe3JldHVybiB0WzBdPT09bn0pfTt5LnByb3RvdHlwZT17Z2V0OmZ1bmN0aW9uKHQpe3ZhciBuPWQodGhpcyx0KTtpZihuKXJldHVybiBuWzFdfSxoYXM6ZnVuY3Rpb24odCl7cmV0dXJuISFkKHRoaXMsdCl9LHNldDpmdW5jdGlvbih0LG4pe3ZhciByPWQodGhpcyx0KTtyP3JbMV09bjp0aGlzLmEucHVzaChbdCxuXSl9LFwiZGVsZXRlXCI6ZnVuY3Rpb24obil7dmFyIHQ9cCh0aGlzLmEsZnVuY3Rpb24odCl7cmV0dXJuIHRbMF09PT1ufSk7cmV0dXJufnQmJnRoaXMuYS5zcGxpY2UodCwxKSwhIX50fX0sdC5leHBvcnRzPXtnZXRDb25zdHJ1Y3RvcjpmdW5jdGlvbih0LHIsZSxpKXt2YXIgbz10KGZ1bmN0aW9uKHQsbil7Zih0LG8scixcIl9pXCIpLHQuX3Q9cix0Ll9pPXYrKyxuIT0odC5fbD1KdCkmJnMobixlLHRbaV0sdCl9KTtyZXR1cm4gdShvLnByb3RvdHlwZSx7XCJkZWxldGVcIjpmdW5jdGlvbih0KXtpZighYSh0KSlyZXR1cm4hMTt2YXIgbj1jKHQpO3JldHVybiEwPT09bj9nKGgodGhpcyxyKSlbXCJkZWxldGVcIl0odCk6biYmbChuLHRoaXMuX2kpJiZkZWxldGUgblt0aGlzLl9pXX0saGFzOmZ1bmN0aW9uIGhhcyh0KXtpZighYSh0KSlyZXR1cm4hMTt2YXIgbj1jKHQpO3JldHVybiEwPT09bj9nKGgodGhpcyxyKSkuaGFzKHQpOm4mJmwobix0aGlzLl9pKX19KSxvfSxkZWY6ZnVuY3Rpb24odCxuLHIpe3ZhciBlPWMoaShuKSwhMCk7cmV0dXJuITA9PT1lP2codCkuc2V0KG4scik6ZVt0Ll9pXT1yLHR9LHVmc3RvcmU6Z319LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDM3KSxpPXIoNTMpLG89cigxKSx1PXIoMikuUmVmbGVjdDt0LmV4cG9ydHM9dSYmdS5vd25LZXlzfHxmdW5jdGlvbiBvd25LZXlzKHQpe3ZhciBuPWUuZihvKHQpKSxyPWkuZjtyZXR1cm4gcj9uLmNvbmNhdChyKHQpKTpufX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMjApLGk9cig2KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aWYodD09PUp0KXJldHVybiAwO3ZhciBuPWUodCkscj1pKG4pO2lmKG4hPT1yKXRocm93IFJhbmdlRXJyb3IoXCJXcm9uZyBsZW5ndGghXCIpO3JldHVybiByfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBwPXIoNTQpLHY9cig0KSxnPXIoNikseT1yKDE4KSxkPXIoNSkoXCJpc0NvbmNhdFNwcmVhZGFibGVcIik7dC5leHBvcnRzPWZ1bmN0aW9uIGZsYXR0ZW5JbnRvQXJyYXkodCxuLHIsZSxpLG8sdSxjKXtmb3IodmFyIGEsZixzPWksbD0wLGg9ISF1JiZ5KHUsYywzKTtsPGU7KXtpZihsIGluIHIpe2lmKGE9aD9oKHJbbF0sbCxuKTpyW2xdLGY9ITEsdihhKSYmKGY9KGY9YVtkXSkhPT1KdD8hIWY6cChhKSksZiYmMDxvKXM9ZmxhdHRlbkludG9BcnJheSh0LG4sYSxnKGEubGVuZ3RoKSxzLG8tMSktMTtlbHNle2lmKDkwMDcxOTkyNTQ3NDA5OTE8PXMpdGhyb3cgVHlwZUVycm9yKCk7dFtzXT1hfXMrK31sKyt9cmV0dXJuIHN9fSxmdW5jdGlvbih0LG4scil7dmFyIHM9cig2KSxsPXIoNzQpLGg9cigyMyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixyLGUpe3ZhciBpPVN0cmluZyhoKHQpKSxvPWkubGVuZ3RoLHU9cj09PUp0P1wiIFwiOlN0cmluZyhyKSxjPXMobik7aWYoYzw9b3x8XCJcIj09dSlyZXR1cm4gaTt2YXIgYT1jLW8sZj1sLmNhbGwodSxNYXRoLmNlaWwoYS91Lmxlbmd0aCkpO3JldHVybiBhPGYubGVuZ3RoJiYoZj1mLnNsaWNlKDAsYSkpLGU/ZitpOmkrZn19LGZ1bmN0aW9uKHQsbixyKXt2YXIgYT1yKDM0KSxmPXIoMTUpLHM9cig0OSkuZjt0LmV4cG9ydHM9ZnVuY3Rpb24oYyl7cmV0dXJuIGZ1bmN0aW9uKHQpe2Zvcih2YXIgbixyPWYodCksZT1hKHIpLGk9ZS5sZW5ndGgsbz0wLHU9W107bzxpOylzLmNhbGwocixuPWVbbysrXSkmJnUucHVzaChjP1tuLHJbbl1dOnJbbl0pO3JldHVybiB1fX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDQ0KSxpPXIoMTI3KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uIHRvSlNPTigpe2lmKGUodGhpcykhPXQpdGhyb3cgVHlwZUVycm9yKHQrXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7cmV0dXJuIGkodGhpcyl9fX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoNDApO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe3ZhciByPVtdO3JldHVybiBlKHQsITEsci5wdXNoLHIsbikscn19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPU1hdGguc2NhbGV8fGZ1bmN0aW9uIHNjYWxlKHQsbixyLGUsaSl7cmV0dXJuIDA9PT1hcmd1bWVudHMubGVuZ3RofHx0IT10fHxuIT1ufHxyIT1yfHxlIT1lfHxpIT1pP05hTjp0PT09SW5maW5pdHl8fHQ9PT0tSW5maW5pdHk/dDoodC1uKSooaS1lKS8oci1uKStlfX0sZnVuY3Rpb24odCxuLHIpe3IoMTMwKSxyKDEzMykscigxMzQpLHIoMTM1KSxyKDEzNikscigxMzcpLHIoMTM4KSxyKDEzOSkscigxNDApLHIoMTQxKSxyKDE0MikscigxNDMpLHIoMTQ0KSxyKDE0NSkscigxNDYpLHIoMTQ3KSxyKDE0OCkscigxNDkpLHIoMTUwKSxyKDE1MSkscigxNTIpLHIoMTUzKSxyKDE1NCkscigxNTUpLHIoMTU2KSxyKDE1NykscigxNTgpLHIoMTU5KSxyKDE2MCkscigxNjEpLHIoMTYyKSxyKDE2MykscigxNjQpLHIoMTY1KSxyKDE2NikscigxNjcpLHIoMTY4KSxyKDE2OSkscigxNzApLHIoMTcxKSxyKDE3MikscigxNzMpLHIoMTc0KSxyKDE3NSkscigxNzYpLHIoMTc3KSxyKDE3OCkscigxNzkpLHIoMTgwKSxyKDE4MSkscigxODIpLHIoMTgzKSxyKDE4NCkscigxODUpLHIoMTg2KSxyKDE4NykscigxODgpLHIoMTg5KSxyKDE5MCkscigxOTEpLHIoMTkyKSxyKDE5MykscigxOTQpLHIoMTk1KSxyKDE5NikscigxOTcpLHIoMTk4KSxyKDE5OSkscigyMDApLHIoMjAxKSxyKDIwMikscigyMDMpLHIoMjA0KSxyKDIwNSkscigyMDYpLHIoMjA3KSxyKDIwOCkscigyMDkpLHIoMjEwKSxyKDIxMSkscigyMTIpLHIoMjE0KSxyKDIxNSkscigyMTYpLHIoMjE3KSxyKDIxOCkscigyMTkpLHIoMjIwKSxyKDIyMSkscigyMjIpLHIoMjIzKSxyKDIyNCkscigyMjUpLHIoODYpLHIoMjI2KSxyKDIyNykscigxMTIpLHIoMjI4KSxyKDExMykscigyMjkpLHIoMjMwKSxyKDIzMSkscigyMzIpLHIoMjMzKSxyKDExNikscigxMTgpLHIoMTE5KSxyKDIzNCkscigyMzUpLHIoMjM2KSxyKDIzNykscigyMzgpLHIoMjM5KSxyKDI0MCkscigyNDEpLHIoMjQyKSxyKDI0MykscigyNDQpLHIoMjQ1KSxyKDI0NikscigyNDcpLHIoMjQ4KSxyKDI0OSkscigyNTApLHIoMjUxKSxyKDI1MykscigyNTQpLHIoMjU2KSxyKDI1NykscigyNTgpLHIoMjU5KSxyKDI2MCkscigyNjEpLHIoMjYyKSxyKDI2MykscigyNjQpLHIoMjY1KSxyKDI2NikscigyNjcpLHIoMjY4KSxyKDI2OSkscigyNzApLHIoMjcxKSxyKDI3MikscigyNzMpLHIoMjc0KSxyKDI3NSkscigyNzYpLHIoMjc3KSxyKDI3OCkscigyNzkpLHIoMjgwKSxyKDI4MSkscigyODIpLHIoMjgzKSxyKDI4NCkscigyODUpLHIoMjg2KSxyKDI4NykscigyODgpLHIoMjg5KSxyKDI5MCkscigyOTEpLHIoMjkyKSxyKDI5MykscigyOTQpLHIoMjk1KSxyKDI5NikscigyOTcpLHIoMjk4KSxyKDI5OSkscigzMDApLHIoMzAxKSxyKDMwMikscigzMDMpLHIoMzA0KSxyKDMwNSkscigzMDYpLHIoMzA3KSxyKDMwOCkscigzMDkpLHIoMzEwKSxyKDMxMSkscigzMTIpLHIoMzEzKSxyKDMxNCkscigzMTUpLHIoMzE2KSxyKDMxNykscigzMTgpLHIoMzE5KSxyKDMyMCkscigzMjEpLHIoMzIyKSxyKDMyMykscigzMjQpLHQuZXhwb3J0cz1yKDMyNSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDIpLHU9cigxNCksaT1yKDcpLG89cigwKSxjPXIoMTIpLGE9cigzMCkuS0VZLGY9cigzKSxzPXIoNDcpLGw9cig0MyksaD1yKDMzKSxwPXIoNSksdj1yKDk0KSxnPXIoNjcpLHk9cigxMzIpLGQ9cig1NCksYj1yKDEpLF89cig0KSxTPXIoMTUpLHg9cigyMiksbT1yKDMyKSx3PXIoMzYpLEU9cig5NyksTz1yKDE2KSxNPXIoOCksST1yKDM0KSxQPU8uZixGPU0uZixBPUUuZixrPWUuU3ltYm9sLE49ZS5KU09OLGo9TiYmTi5zdHJpbmdpZnksUj1cInByb3RvdHlwZVwiLFQ9cChcIl9oaWRkZW5cIiksTD1wKFwidG9QcmltaXRpdmVcIiksRD17fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxDPXMoXCJzeW1ib2wtcmVnaXN0cnlcIiksVT1zKFwic3ltYm9sc1wiKSxXPXMoXCJvcC1zeW1ib2xzXCIpLEc9T2JqZWN0W1JdLFY9XCJmdW5jdGlvblwiPT10eXBlb2YgayxCPWUuUU9iamVjdCx6PSFCfHwhQltSXXx8IUJbUl0uZmluZENoaWxkLHE9aSYmZihmdW5jdGlvbigpe3JldHVybiA3IT13KEYoe30sXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBGKHRoaXMsXCJhXCIse3ZhbHVlOjd9KS5hfX0pKS5hfSk/ZnVuY3Rpb24odCxuLHIpe3ZhciBlPVAoRyxuKTtlJiZkZWxldGUgR1tuXSxGKHQsbixyKSxlJiZ0IT09RyYmRihHLG4sZSl9OkYsSz1mdW5jdGlvbih0KXt2YXIgbj1VW3RdPXcoa1tSXSk7cmV0dXJuIG4uX2s9dCxufSxKPVYmJlwic3ltYm9sXCI9PXR5cGVvZiBrLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIGt9LFk9ZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkodCxuLHIpe3JldHVybiB0PT09RyYmWShXLG4sciksYih0KSxuPXgobiwhMCksYihyKSx1KFUsbik/KHIuZW51bWVyYWJsZT8odSh0LFQpJiZ0W1RdW25dJiYodFtUXVtuXT0hMSkscj13KHIse2VudW1lcmFibGU6bSgwLCExKX0pKToodSh0LFQpfHxGKHQsVCxtKDEse30pKSx0W1RdW25dPSEwKSxxKHQsbixyKSk6Rih0LG4scil9LCQ9ZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0LG4pe2IodCk7Zm9yKHZhciByLGU9eShuPVMobikpLGk9MCxvPWUubGVuZ3RoO2k8bzspWSh0LHI9ZVtpKytdLG5bcl0pO3JldHVybiB0fSxYPWZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKHQpe3ZhciBuPUQuY2FsbCh0aGlzLHQ9eCh0LCEwKSk7cmV0dXJuISh0aGlzPT09RyYmdShVLHQpJiYhdShXLHQpKSYmKCEobnx8IXUodGhpcyx0KXx8IXUoVSx0KXx8dSh0aGlzLFQpJiZ0aGlzW1RdW3RdKXx8bil9LEg9ZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsbil7aWYodD1TKHQpLG49eChuLCEwKSx0IT09R3x8IXUoVSxuKXx8dShXLG4pKXt2YXIgcj1QKHQsbik7cmV0dXJuIXJ8fCF1KFUsbil8fHUodCxUKSYmdFtUXVtuXXx8KHIuZW51bWVyYWJsZT0hMCkscn19LFo9ZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyh0KXtmb3IodmFyIG4scj1BKFModCkpLGU9W10saT0wO2k8ci5sZW5ndGg7KXUoVSxuPXJbaSsrXSl8fG49PVR8fG49PWF8fGUucHVzaChuKTtyZXR1cm4gZX0sUT1mdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHModCl7Zm9yKHZhciBuLHI9dD09PUcsZT1BKHI/VzpTKHQpKSxpPVtdLG89MDtvPGUubGVuZ3RoOykhdShVLG49ZVtvKytdKXx8ciYmIXUoRyxuKXx8aS5wdXNoKFVbbl0pO3JldHVybiBpfTtWfHwoYygoaz1mdW5jdGlvbiBTeW1ib2woKXtpZih0aGlzIGluc3RhbmNlb2Ygayl0aHJvdyBUeXBlRXJyb3IoXCJTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhXCIpO3ZhciBuPWgoMDxhcmd1bWVudHMubGVuZ3RoP2FyZ3VtZW50c1swXTpKdCkscj1mdW5jdGlvbih0KXt0aGlzPT09RyYmci5jYWxsKFcsdCksdSh0aGlzLFQpJiZ1KHRoaXNbVF0sbikmJih0aGlzW1RdW25dPSExKSxxKHRoaXMsbixtKDEsdCkpfTtyZXR1cm4gaSYmeiYmcShHLG4se2NvbmZpZ3VyYWJsZTohMCxzZXQ6cn0pLEsobil9KVtSXSxcInRvU3RyaW5nXCIsZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5fa30pLE8uZj1ILE0uZj1ZLHIoMzcpLmY9RS5mPVoscig0OSkuZj1YLHIoNTMpLmY9USxpJiYhcigyOSkmJmMoRyxcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIsWCwhMCksdi5mPWZ1bmN0aW9uKHQpe3JldHVybiBLKHAodCkpfSksbyhvLkcrby5XK28uRiohVix7U3ltYm9sOmt9KTtmb3IodmFyIHR0PVwiaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXNcIi5zcGxpdChcIixcIiksbnQ9MDtudDx0dC5sZW5ndGg7KXAodHRbbnQrK10pO2Zvcih2YXIgcnQ9SShwLnN0b3JlKSxldD0wO2V0PHJ0Lmxlbmd0aDspZyhydFtldCsrXSk7byhvLlMrby5GKiFWLFwiU3ltYm9sXCIse1wiZm9yXCI6ZnVuY3Rpb24odCl7cmV0dXJuIHUoQyx0Kz1cIlwiKT9DW3RdOkNbdF09ayh0KX0sa2V5Rm9yOmZ1bmN0aW9uIGtleUZvcih0KXtpZighSih0KSl0aHJvdyBUeXBlRXJyb3IodCtcIiBpcyBub3QgYSBzeW1ib2whXCIpO2Zvcih2YXIgbiBpbiBDKWlmKENbbl09PT10KXJldHVybiBufSx1c2VTZXR0ZXI6ZnVuY3Rpb24oKXt6PSEwfSx1c2VTaW1wbGU6ZnVuY3Rpb24oKXt6PSExfX0pLG8oby5TK28uRiohVixcIk9iamVjdFwiLHtjcmVhdGU6ZnVuY3Rpb24gY3JlYXRlKHQsbil7cmV0dXJuIG49PT1KdD93KHQpOiQodyh0KSxuKX0sZGVmaW5lUHJvcGVydHk6WSxkZWZpbmVQcm9wZXJ0aWVzOiQsZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOkgsZ2V0T3duUHJvcGVydHlOYW1lczpaLGdldE93blByb3BlcnR5U3ltYm9sczpRfSksTiYmbyhvLlMrby5GKighVnx8ZihmdW5jdGlvbigpe3ZhciB0PWsoKTtyZXR1cm5cIltudWxsXVwiIT1qKFt0XSl8fFwie31cIiE9aih7YTp0fSl8fFwie31cIiE9aihPYmplY3QodCkpfSkpLFwiSlNPTlwiLHtzdHJpbmdpZnk6ZnVuY3Rpb24gc3RyaW5naWZ5KHQpe2Zvcih2YXIgbixyLGU9W3RdLGk9MTtpPGFyZ3VtZW50cy5sZW5ndGg7KWUucHVzaChhcmd1bWVudHNbaSsrXSk7aWYocj1uPWVbMV0sKF8obil8fHQhPT1KdCkmJiFKKHQpKXJldHVybiBkKG4pfHwobj1mdW5jdGlvbih0LG4pe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHImJihuPXIuY2FsbCh0aGlzLHQsbikpLCFKKG4pKXJldHVybiBufSksZVsxXT1uLGouYXBwbHkoTixlKX19KSxrW1JdW0xdfHxyKDExKShrW1JdLEwsa1tSXS52YWx1ZU9mKSxsKGssXCJTeW1ib2xcIiksbChNYXRoLFwiTWF0aFwiLCEwKSxsKGUuSlNPTixcIkpTT05cIiwhMCl9LGZ1bmN0aW9uKHQsbixyKXt0LmV4cG9ydHM9cig0NykoXCJuYXRpdmUtZnVuY3Rpb24tdG8tc3RyaW5nXCIsRnVuY3Rpb24udG9TdHJpbmcpfSxmdW5jdGlvbih0LG4scil7dmFyIGM9cigzNCksYT1yKDUzKSxmPXIoNDkpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgbj1jKHQpLHI9YS5mO2lmKHIpZm9yKHZhciBlLGk9cih0KSxvPWYuZix1PTA7dTxpLmxlbmd0aDspby5jYWxsKHQsZT1pW3UrK10pJiZuLnB1c2goZSk7cmV0dXJuIG59fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKTtlKGUuUytlLkYqIXIoNyksXCJPYmplY3RcIix7ZGVmaW5lUHJvcGVydHk6cig4KS5mfSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApO2UoZS5TK2UuRiohcig3KSxcIk9iamVjdFwiLHtkZWZpbmVQcm9wZXJ0aWVzOnIoOTYpfSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDE1KSxpPXIoMTYpLmY7cigyNCkoXCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JcIixmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxuKXtyZXR1cm4gaShlKHQpLG4pfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKTtlKGUuUyxcIk9iamVjdFwiLHtjcmVhdGU6cigzNil9KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoOSksaT1yKDE3KTtyKDI0KShcImdldFByb3RvdHlwZU9mXCIsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YodCl7cmV0dXJuIGkoZSh0KSl9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDkpLGk9cigzNCk7cigyNCkoXCJrZXlzXCIsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24ga2V5cyh0KXtyZXR1cm4gaShlKHQpKX19KX0sZnVuY3Rpb24odCxuLHIpe3IoMjQpKFwiZ2V0T3duUHJvcGVydHlOYW1lc1wiLGZ1bmN0aW9uKCl7cmV0dXJuIHIoOTcpLmZ9KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoNCksaT1yKDMwKS5vbkZyZWV6ZTtyKDI0KShcImZyZWV6ZVwiLGZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbiBmcmVlemUodCl7cmV0dXJuIG4mJmUodCk/bihpKHQpKTp0fX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cig0KSxpPXIoMzApLm9uRnJlZXplO3IoMjQpKFwic2VhbFwiLGZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbiBzZWFsKHQpe3JldHVybiBuJiZlKHQpP24oaSh0KSk6dH19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoNCksaT1yKDMwKS5vbkZyZWV6ZTtyKDI0KShcInByZXZlbnRFeHRlbnNpb25zXCIsZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKHQpe3JldHVybiBuJiZlKHQpP24oaSh0KSk6dH19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoNCk7cigyNCkoXCJpc0Zyb3plblwiLGZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbiBpc0Zyb3plbih0KXtyZXR1cm4hZSh0KXx8ISFuJiZuKHQpfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cig0KTtyKDI0KShcImlzU2VhbGVkXCIsZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uIGlzU2VhbGVkKHQpe3JldHVybiFlKHQpfHwhIW4mJm4odCl9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDQpO3IoMjQpKFwiaXNFeHRlbnNpYmxlXCIsZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZSh0KXtyZXR1cm4hIWUodCkmJighbnx8bih0KSl9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApO2UoZS5TK2UuRixcIk9iamVjdFwiLHthc3NpZ246cig5OCl9KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCk7ZShlLlMsXCJPYmplY3RcIix7aXM6cig5OSl9KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCk7ZShlLlMsXCJPYmplY3RcIix7c2V0UHJvdG90eXBlT2Y6cig3MSkuc2V0fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDQ0KSxpPXt9O2lbcig1KShcInRvU3RyaW5nVGFnXCIpXT1cInpcIixpK1wiXCIhPVwiW29iamVjdCB6XVwiJiZyKDEyKShPYmplY3QucHJvdG90eXBlLFwidG9TdHJpbmdcIixmdW5jdGlvbiB0b1N0cmluZygpe3JldHVyblwiW29iamVjdCBcIitlKHRoaXMpK1wiXVwifSwhMCl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApO2UoZS5QLFwiRnVuY3Rpb25cIix7YmluZDpyKDEwMCl9KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoOCkuZixpPUZ1bmN0aW9uLnByb3RvdHlwZSxvPS9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcIm5hbWVcImluIGl8fHIoNykmJmUoaSxcIm5hbWVcIix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3RyeXtyZXR1cm4oXCJcIit0aGlzKS5tYXRjaChvKVsxXX1jYXRjaCh0KXtyZXR1cm5cIlwifX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoNCksaT1yKDE3KSxvPXIoNSkoXCJoYXNJbnN0YW5jZVwiKSx1PUZ1bmN0aW9uLnByb3RvdHlwZTtvIGluIHV8fHIoOCkuZih1LG8se3ZhbHVlOmZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHRoaXN8fCFlKHQpKXJldHVybiExO2lmKCFlKHRoaXMucHJvdG90eXBlKSlyZXR1cm4gdCBpbnN0YW5jZW9mIHRoaXM7Zm9yKDt0PWkodCk7KWlmKHRoaXMucHJvdG90eXBlPT09dClyZXR1cm4hMDtyZXR1cm4hMX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMiksaT1yKDE0KSxvPXIoMTkpLHU9cig3Mikscz1yKDIyKSxjPXIoMyksYT1yKDM3KS5mLGY9cigxNikuZixsPXIoOCkuZixoPXIoNDUpLnRyaW0scD1cIk51bWJlclwiLHY9ZVtwXSxnPXYseT12LnByb3RvdHlwZSxkPW8ocigzNikoeSkpPT1wLGI9XCJ0cmltXCJpbiBTdHJpbmcucHJvdG90eXBlLF89ZnVuY3Rpb24odCl7dmFyIG49cyh0LCExKTtpZihcInN0cmluZ1wiPT10eXBlb2YgbiYmMjxuLmxlbmd0aCl7dmFyIHIsZSxpLG89KG49Yj9uLnRyaW0oKTpoKG4sMykpLmNoYXJDb2RlQXQoMCk7aWYoNDM9PT1vfHw0NT09PW8pe2lmKDg4PT09KHI9bi5jaGFyQ29kZUF0KDIpKXx8MTIwPT09cilyZXR1cm4gTmFOfWVsc2UgaWYoNDg9PT1vKXtzd2l0Y2gobi5jaGFyQ29kZUF0KDEpKXtjYXNlIDY2OmNhc2UgOTg6ZT0yLGk9NDk7YnJlYWs7Y2FzZSA3OTpjYXNlIDExMTplPTgsaT01NTticmVhaztkZWZhdWx0OnJldHVybitufWZvcih2YXIgdSxjPW4uc2xpY2UoMiksYT0wLGY9Yy5sZW5ndGg7YTxmO2ErKylpZigodT1jLmNoYXJDb2RlQXQoYSkpPDQ4fHxpPHUpcmV0dXJuIE5hTjtyZXR1cm4gcGFyc2VJbnQoYyxlKX19cmV0dXJuK259O2lmKCF2KFwiIDBvMVwiKXx8IXYoXCIwYjFcIil8fHYoXCIrMHgxXCIpKXt2PWZ1bmN0aW9uIE51bWJlcih0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPDE/MDp0LHI9dGhpcztyZXR1cm4gciBpbnN0YW5jZW9mIHYmJihkP2MoZnVuY3Rpb24oKXt5LnZhbHVlT2YuY2FsbChyKX0pOm8ocikhPXApP3UobmV3IGcoXyhuKSkscix2KTpfKG4pfTtmb3IodmFyIFMseD1yKDcpP2EoZyk6XCJNQVhfVkFMVUUsTUlOX1ZBTFVFLE5hTixORUdBVElWRV9JTkZJTklUWSxQT1NJVElWRV9JTkZJTklUWSxFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsTUlOX1NBRkVfSU5URUdFUixwYXJzZUZsb2F0LHBhcnNlSW50LGlzSW50ZWdlclwiLnNwbGl0KFwiLFwiKSxtPTA7bTx4Lmxlbmd0aDttKyspaShnLFM9eFttXSkmJiFpKHYsUykmJmwodixTLGYoZyxTKSk7KHYucHJvdG90eXBlPXkpLmNvbnN0cnVjdG9yPXYscigxMikoZSxwLHYpfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksZj1yKDIwKSxzPXIoMTAyKSxsPXIoNzQpLGk9MS4udG9GaXhlZCxvPU1hdGguZmxvb3IsdT1bMCwwLDAsMCwwLDBdLGg9XCJOdW1iZXIudG9GaXhlZDogaW5jb3JyZWN0IGludm9jYXRpb24hXCIscD1mdW5jdGlvbih0LG4pe2Zvcih2YXIgcj0tMSxlPW47KytyPDY7KXVbcl09KGUrPXQqdVtyXSklMWU3LGU9byhlLzFlNyl9LHY9ZnVuY3Rpb24odCl7Zm9yKHZhciBuPTYscj0wOzA8PS0tbjspdVtuXT1vKChyKz11W25dKS90KSxyPXIldCoxZTd9LGc9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9NixuPVwiXCI7MDw9LS10OylpZihcIlwiIT09bnx8MD09PXR8fDAhPT11W3RdKXt2YXIgcj1TdHJpbmcodVt0XSk7bj1cIlwiPT09bj9yOm4rbC5jYWxsKFwiMFwiLDctci5sZW5ndGgpK3J9cmV0dXJuIG59LHk9ZnVuY3Rpb24odCxuLHIpe3JldHVybiAwPT09bj9yOm4lMj09MT95KHQsbi0xLHIqdCk6eSh0KnQsbi8yLHIpfTtlKGUuUCtlLkYqKCEhaSYmKFwiMC4wMDBcIiE9PThlLTUudG9GaXhlZCgzKXx8XCIxXCIhPT0uOS50b0ZpeGVkKDApfHxcIjEuMjVcIiE9PTEuMjU1LnRvRml4ZWQoMil8fFwiMTAwMDAwMDAwMDAwMDAwMDEyOFwiIT09KDB4ZGUwYjZiM2E3NjQwMDgwKS50b0ZpeGVkKDApKXx8IXIoMykoZnVuY3Rpb24oKXtpLmNhbGwoe30pfSkpLFwiTnVtYmVyXCIse3RvRml4ZWQ6ZnVuY3Rpb24gdG9GaXhlZCh0KXt2YXIgbixyLGUsaSxvPXModGhpcyxoKSx1PWYodCksYz1cIlwiLGE9XCIwXCI7aWYodTwwfHwyMDx1KXRocm93IFJhbmdlRXJyb3IoaCk7aWYobyE9bylyZXR1cm5cIk5hTlwiO2lmKG88PS0xZTIxfHwxZTIxPD1vKXJldHVybiBTdHJpbmcobyk7aWYobzwwJiYoYz1cIi1cIixvPS1vKSwxZS0yMTxvKWlmKHI9KG49ZnVuY3Rpb24odCl7Zm9yKHZhciBuPTAscj10OzQwOTY8PXI7KW4rPTEyLHIvPTQwOTY7Zm9yKDsyPD1yOyluKz0xLHIvPTI7cmV0dXJuIG59KG8qeSgyLDY5LDEpKS02OSk8MD9vKnkoMiwtbiwxKTpvL3koMixuLDEpLHIqPTQ1MDM1OTk2MjczNzA0OTYsMDwobj01Mi1uKSl7Zm9yKHAoMCxyKSxlPXU7Nzw9ZTspcCgxZTcsMCksZS09Nztmb3IocCh5KDEwLGUsMSksMCksZT1uLTE7MjM8PWU7KXYoMTw8MjMpLGUtPTIzO3YoMTw8ZSkscCgxLDEpLHYoMiksYT1nKCl9ZWxzZSBwKDAscikscCgxPDwtbiwwKSxhPWcoKStsLmNhbGwoXCIwXCIsdSk7cmV0dXJuIGE9MDx1P2MrKChpPWEubGVuZ3RoKTw9dT9cIjAuXCIrbC5jYWxsKFwiMFwiLHUtaSkrYTphLnNsaWNlKDAsaS11KStcIi5cIithLnNsaWNlKGktdSkpOmMrYX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksaT1yKDMpLG89cigxMDIpLHU9MS4udG9QcmVjaXNpb247ZShlLlArZS5GKihpKGZ1bmN0aW9uKCl7cmV0dXJuXCIxXCIhPT11LmNhbGwoMSxKdCl9KXx8IWkoZnVuY3Rpb24oKXt1LmNhbGwoe30pfSkpLFwiTnVtYmVyXCIse3RvUHJlY2lzaW9uOmZ1bmN0aW9uIHRvUHJlY2lzaW9uKHQpe3ZhciBuPW8odGhpcyxcIk51bWJlciN0b1ByZWNpc2lvbjogaW5jb3JyZWN0IGludm9jYXRpb24hXCIpO3JldHVybiB0PT09SnQ/dS5jYWxsKG4pOnUuY2FsbChuLHQpfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKTtlKGUuUyxcIk51bWJlclwiLHtFUFNJTE9OOk1hdGgucG93KDIsLTUyKX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxpPXIoMikuaXNGaW5pdGU7ZShlLlMsXCJOdW1iZXJcIix7aXNGaW5pdGU6ZnVuY3Rpb24gaXNGaW5pdGUodCl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHQmJmkodCl9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApO2UoZS5TLFwiTnVtYmVyXCIse2lzSW50ZWdlcjpyKDEwMyl9KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCk7ZShlLlMsXCJOdW1iZXJcIix7aXNOYU46ZnVuY3Rpb24gaXNOYU4odCl7cmV0dXJuIHQhPXR9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGk9cigxMDMpLG89TWF0aC5hYnM7ZShlLlMsXCJOdW1iZXJcIix7aXNTYWZlSW50ZWdlcjpmdW5jdGlvbiBpc1NhZmVJbnRlZ2VyKHQpe3JldHVybiBpKHQpJiZvKHQpPD05MDA3MTk5MjU0NzQwOTkxfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKTtlKGUuUyxcIk51bWJlclwiLHtNQVhfU0FGRV9JTlRFR0VSOjkwMDcxOTkyNTQ3NDA5OTF9KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCk7ZShlLlMsXCJOdW1iZXJcIix7TUlOX1NBRkVfSU5URUdFUjotOTAwNzE5OTI1NDc0MDk5MX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxpPXIoMTA0KTtlKGUuUytlLkYqKE51bWJlci5wYXJzZUZsb2F0IT1pKSxcIk51bWJlclwiLHtwYXJzZUZsb2F0Oml9KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksaT1yKDEwNSk7ZShlLlMrZS5GKihOdW1iZXIucGFyc2VJbnQhPWkpLFwiTnVtYmVyXCIse3BhcnNlSW50Oml9KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksaT1yKDEwNSk7ZShlLkcrZS5GKihwYXJzZUludCE9aSkse3BhcnNlSW50Oml9KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksaT1yKDEwNCk7ZShlLkcrZS5GKihwYXJzZUZsb2F0IT1pKSx7cGFyc2VGbG9hdDppfSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGk9cigxMDYpLG89TWF0aC5zcXJ0LHU9TWF0aC5hY29zaDtlKGUuUytlLkYqISh1JiY3MTA9PU1hdGguZmxvb3IodShOdW1iZXIuTUFYX1ZBTFVFKSkmJnUoSW5maW5pdHkpPT1JbmZpbml0eSksXCJNYXRoXCIse2Fjb3NoOmZ1bmN0aW9uIGFjb3NoKHQpe3JldHVybih0PSt0KTwxP05hTjo5NDkwNjI2NS42MjQyNTE1Njx0P01hdGgubG9nKHQpK01hdGguTE4yOmkodC0xK28odC0xKSpvKHQrMSkpfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxpPU1hdGguYXNpbmg7ZShlLlMrZS5GKiEoaSYmMDwxL2koMCkpLFwiTWF0aFwiLHthc2luaDpmdW5jdGlvbiBhc2luaCh0KXtyZXR1cm4gaXNGaW5pdGUodD0rdCkmJjAhPXQ/dDwwPy1hc2luaCgtdCk6TWF0aC5sb2codCtNYXRoLnNxcnQodCp0KzEpKTp0fX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxpPU1hdGguYXRhbmg7ZShlLlMrZS5GKiEoaSYmMS9pKC0wKTwwKSxcIk1hdGhcIix7YXRhbmg6ZnVuY3Rpb24gYXRhbmgodCl7cmV0dXJuIDA9PSh0PSt0KT90Ok1hdGgubG9nKCgxK3QpLygxLXQpKS8yfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxpPXIoNzUpO2UoZS5TLFwiTWF0aFwiLHtjYnJ0OmZ1bmN0aW9uIGNicnQodCl7cmV0dXJuIGkodD0rdCkqTWF0aC5wb3coTWF0aC5hYnModCksMS8zKX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCk7ZShlLlMsXCJNYXRoXCIse2NsejMyOmZ1bmN0aW9uIGNsejMyKHQpe3JldHVybih0Pj4+PTApPzMxLU1hdGguZmxvb3IoTWF0aC5sb2codCsuNSkqTWF0aC5MT0cyRSk6MzJ9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGk9TWF0aC5leHA7ZShlLlMsXCJNYXRoXCIse2Nvc2g6ZnVuY3Rpb24gY29zaCh0KXtyZXR1cm4oaSh0PSt0KStpKC10KSkvMn19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksaT1yKDc2KTtlKGUuUytlLkYqKGkhPU1hdGguZXhwbTEpLFwiTWF0aFwiLHtleHBtMTppfSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApO2UoZS5TLFwiTWF0aFwiLHtmcm91bmQ6cigxMDcpfSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGE9TWF0aC5hYnM7ZShlLlMsXCJNYXRoXCIse2h5cG90OmZ1bmN0aW9uIGh5cG90KHQsbil7Zm9yKHZhciByLGUsaT0wLG89MCx1PWFyZ3VtZW50cy5sZW5ndGgsYz0wO288dTspYzwocj1hKGFyZ3VtZW50c1tvKytdKSk/KGk9aSooZT1jL3IpKmUrMSxjPXIpOmkrPTA8cj8oZT1yL2MpKmU6cjtyZXR1cm4gYz09PUluZmluaXR5P0luZmluaXR5OmMqTWF0aC5zcXJ0KGkpfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxpPU1hdGguaW11bDtlKGUuUytlLkYqcigzKShmdW5jdGlvbigpe3JldHVybi01IT1pKDQyOTQ5NjcyOTUsNSl8fDIhPWkubGVuZ3RofSksXCJNYXRoXCIse2ltdWw6ZnVuY3Rpb24gaW11bCh0LG4pe3ZhciByPTY1NTM1LGU9K3QsaT0rbixvPXImZSx1PXImaTtyZXR1cm4gMHxvKnUrKChyJmU+Pj4xNikqdStvKihyJmk+Pj4xNik8PDE2Pj4+MCl9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApO2UoZS5TLFwiTWF0aFwiLHtsb2cxMDpmdW5jdGlvbiBsb2cxMCh0KXtyZXR1cm4gTWF0aC5sb2codCkqTWF0aC5MT0cxMEV9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApO2UoZS5TLFwiTWF0aFwiLHtsb2cxcDpyKDEwNil9KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCk7ZShlLlMsXCJNYXRoXCIse2xvZzI6ZnVuY3Rpb24gbG9nMih0KXtyZXR1cm4gTWF0aC5sb2codCkvTWF0aC5MTjJ9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApO2UoZS5TLFwiTWF0aFwiLHtzaWduOnIoNzUpfSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGk9cig3Niksbz1NYXRoLmV4cDtlKGUuUytlLkYqcigzKShmdW5jdGlvbigpe3JldHVybi0yZS0xNyE9IU1hdGguc2luaCgtMmUtMTcpfSksXCJNYXRoXCIse3Npbmg6ZnVuY3Rpb24gc2luaCh0KXtyZXR1cm4gTWF0aC5hYnModD0rdCk8MT8oaSh0KS1pKC10KSkvMjoobyh0LTEpLW8oLXQtMSkpKihNYXRoLkUvMil9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGk9cig3Niksbz1NYXRoLmV4cDtlKGUuUyxcIk1hdGhcIix7dGFuaDpmdW5jdGlvbiB0YW5oKHQpe3ZhciBuPWkodD0rdCkscj1pKC10KTtyZXR1cm4gbj09SW5maW5pdHk/MTpyPT1JbmZpbml0eT8tMToobi1yKS8obyh0KStvKC10KSl9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApO2UoZS5TLFwiTWF0aFwiLHt0cnVuYzpmdW5jdGlvbiB0cnVuYyh0KXtyZXR1cm4oMDx0P01hdGguZmxvb3I6TWF0aC5jZWlsKSh0KX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksbz1yKDM1KSx1PVN0cmluZy5mcm9tQ2hhckNvZGUsaT1TdHJpbmcuZnJvbUNvZGVQb2ludDtlKGUuUytlLkYqKCEhaSYmMSE9aS5sZW5ndGgpLFwiU3RyaW5nXCIse2Zyb21Db2RlUG9pbnQ6ZnVuY3Rpb24gZnJvbUNvZGVQb2ludCh0KXtmb3IodmFyIG4scj1bXSxlPWFyZ3VtZW50cy5sZW5ndGgsaT0wO2k8ZTspe2lmKG49K2FyZ3VtZW50c1tpKytdLG8obiwxMTE0MTExKSE9PW4pdGhyb3cgUmFuZ2VFcnJvcihuK1wiIGlzIG5vdCBhIHZhbGlkIGNvZGUgcG9pbnRcIik7ci5wdXNoKG48NjU1MzY/dShuKTp1KDU1Mjk2Kygobi09NjU1MzYpPj4xMCksbiUxMDI0KzU2MzIwKSl9cmV0dXJuIHIuam9pbihcIlwiKX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksdT1yKDE1KSxjPXIoNik7ZShlLlMsXCJTdHJpbmdcIix7cmF3OmZ1bmN0aW9uIHJhdyh0KXtmb3IodmFyIG49dSh0LnJhdykscj1jKG4ubGVuZ3RoKSxlPWFyZ3VtZW50cy5sZW5ndGgsaT1bXSxvPTA7bzxyOylpLnB1c2goU3RyaW5nKG5bbysrXSkpLG88ZSYmaS5wdXNoKFN0cmluZyhhcmd1bWVudHNbb10pKTtyZXR1cm4gaS5qb2luKFwiXCIpfX0pfSxmdW5jdGlvbih0LG4scil7cig0NSkoXCJ0cmltXCIsZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uIHRyaW0oKXtyZXR1cm4gdCh0aGlzLDMpfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxpPXIoNTUpKCExKTtlKGUuUCxcIlN0cmluZ1wiLHtjb2RlUG9pbnRBdDpmdW5jdGlvbiBjb2RlUG9pbnRBdCh0KXtyZXR1cm4gaSh0aGlzLHQpfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSx1PXIoNiksYz1yKDc3KSxhPVwiZW5kc1dpdGhcIixmPVwiXCJbYV07ZShlLlArZS5GKnIoNzgpKGEpLFwiU3RyaW5nXCIse2VuZHNXaXRoOmZ1bmN0aW9uIGVuZHNXaXRoKHQpe3ZhciBuPWModGhpcyx0LGEpLHI9MTxhcmd1bWVudHMubGVuZ3RoP2FyZ3VtZW50c1sxXTpKdCxlPXUobi5sZW5ndGgpLGk9cj09PUp0P2U6TWF0aC5taW4odShyKSxlKSxvPVN0cmluZyh0KTtyZXR1cm4gZj9mLmNhbGwobixvLGkpOm4uc2xpY2UoaS1vLmxlbmd0aCxpKT09PW99fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGk9cig3Nyksbz1cImluY2x1ZGVzXCI7ZShlLlArZS5GKnIoNzgpKG8pLFwiU3RyaW5nXCIse2luY2x1ZGVzOmZ1bmN0aW9uIGluY2x1ZGVzKHQpe3JldHVybiEhfmkodGhpcyx0LG8pLmluZGV4T2YodCwxPGFyZ3VtZW50cy5sZW5ndGg/YXJndW1lbnRzWzFdOkp0KX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCk7ZShlLlAsXCJTdHJpbmdcIix7cmVwZWF0OnIoNzQpfSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGk9cig2KSxvPXIoNzcpLHU9XCJzdGFydHNXaXRoXCIsYz1cIlwiW3VdO2UoZS5QK2UuRipyKDc4KSh1KSxcIlN0cmluZ1wiLHtzdGFydHNXaXRoOmZ1bmN0aW9uIHN0YXJ0c1dpdGgodCl7dmFyIG49byh0aGlzLHQsdSkscj1pKE1hdGgubWluKDE8YXJndW1lbnRzLmxlbmd0aD9hcmd1bWVudHNbMV06SnQsbi5sZW5ndGgpKSxlPVN0cmluZyh0KTtyZXR1cm4gYz9jLmNhbGwobixlLHIpOm4uc2xpY2UocixyK2UubGVuZ3RoKT09PWV9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDU1KSghMCk7cig3OSkoU3RyaW5nLFwiU3RyaW5nXCIsZnVuY3Rpb24odCl7dGhpcy5fdD1TdHJpbmcodCksdGhpcy5faT0wfSxmdW5jdGlvbigpe3ZhciB0LG49dGhpcy5fdCxyPXRoaXMuX2k7cmV0dXJuIG4ubGVuZ3RoPD1yP3t2YWx1ZTpKdCxkb25lOiEwfToodD1lKG4sciksdGhpcy5faSs9dC5sZW5ndGgse3ZhbHVlOnQsZG9uZTohMX0pfSl9LGZ1bmN0aW9uKHQsbixyKXtyKDEzKShcImFuY2hvclwiLGZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbiBhbmNob3IodCl7cmV0dXJuIG4odGhpcyxcImFcIixcIm5hbWVcIix0KX19KX0sZnVuY3Rpb24odCxuLHIpe3IoMTMpKFwiYmlnXCIsZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uIGJpZygpe3JldHVybiB0KHRoaXMsXCJiaWdcIixcIlwiLFwiXCIpfX0pfSxmdW5jdGlvbih0LG4scil7cigxMykoXCJibGlua1wiLGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbiBibGluaygpe3JldHVybiB0KHRoaXMsXCJibGlua1wiLFwiXCIsXCJcIil9fSl9LGZ1bmN0aW9uKHQsbixyKXtyKDEzKShcImJvbGRcIixmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24gYm9sZCgpe3JldHVybiB0KHRoaXMsXCJiXCIsXCJcIixcIlwiKX19KX0sZnVuY3Rpb24odCxuLHIpe3IoMTMpKFwiZml4ZWRcIixmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24gZml4ZWQoKXtyZXR1cm4gdCh0aGlzLFwidHRcIixcIlwiLFwiXCIpfX0pfSxmdW5jdGlvbih0LG4scil7cigxMykoXCJmb250Y29sb3JcIixmdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24gZm9udGNvbG9yKHQpe3JldHVybiBuKHRoaXMsXCJmb250XCIsXCJjb2xvclwiLHQpfX0pfSxmdW5jdGlvbih0LG4scil7cigxMykoXCJmb250c2l6ZVwiLGZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbiBmb250c2l6ZSh0KXtyZXR1cm4gbih0aGlzLFwiZm9udFwiLFwic2l6ZVwiLHQpfX0pfSxmdW5jdGlvbih0LG4scil7cigxMykoXCJpdGFsaWNzXCIsZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uIGl0YWxpY3MoKXtyZXR1cm4gdCh0aGlzLFwiaVwiLFwiXCIsXCJcIil9fSl9LGZ1bmN0aW9uKHQsbixyKXtyKDEzKShcImxpbmtcIixmdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24gbGluayh0KXtyZXR1cm4gbih0aGlzLFwiYVwiLFwiaHJlZlwiLHQpfX0pfSxmdW5jdGlvbih0LG4scil7cigxMykoXCJzbWFsbFwiLGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbiBzbWFsbCgpe3JldHVybiB0KHRoaXMsXCJzbWFsbFwiLFwiXCIsXCJcIil9fSl9LGZ1bmN0aW9uKHQsbixyKXtyKDEzKShcInN0cmlrZVwiLGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbiBzdHJpa2UoKXtyZXR1cm4gdCh0aGlzLFwic3RyaWtlXCIsXCJcIixcIlwiKX19KX0sZnVuY3Rpb24odCxuLHIpe3IoMTMpKFwic3ViXCIsZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uIHN1Yigpe3JldHVybiB0KHRoaXMsXCJzdWJcIixcIlwiLFwiXCIpfX0pfSxmdW5jdGlvbih0LG4scil7cigxMykoXCJzdXBcIixmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24gc3VwKCl7cmV0dXJuIHQodGhpcyxcInN1cFwiLFwiXCIsXCJcIil9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApO2UoZS5TLFwiQXJyYXlcIix7aXNBcnJheTpyKDU0KX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGg9cigxOCksZT1yKDApLHA9cig5KSx2PXIoMTA4KSxnPXIoODEpLHk9cig2KSxkPXIoODIpLGI9cig4Myk7ZShlLlMrZS5GKiFyKDU3KShmdW5jdGlvbih0KXtBcnJheS5mcm9tKHQpfSksXCJBcnJheVwiLHtmcm9tOmZ1bmN0aW9uIGZyb20odCl7dmFyIG4scixlLGksbz1wKHQpLHU9XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcz90aGlzOkFycmF5LGM9YXJndW1lbnRzLmxlbmd0aCxhPTE8Yz9hcmd1bWVudHNbMV06SnQsZj1hIT09SnQscz0wLGw9YihvKTtpZihmJiYoYT1oKGEsMjxjP2FyZ3VtZW50c1syXTpKdCwyKSksbD09SnR8fHU9PUFycmF5JiZnKGwpKWZvcihyPW5ldyB1KG49eShvLmxlbmd0aCkpO3M8bjtzKyspZChyLHMsZj9hKG9bc10scyk6b1tzXSk7ZWxzZSBmb3IoaT1sLmNhbGwobykscj1uZXcgdTshKGU9aS5uZXh0KCkpLmRvbmU7cysrKWQocixzLGY/dihpLGEsW2UudmFsdWUsc10sITApOmUudmFsdWUpO3JldHVybiByLmxlbmd0aD1zLHJ9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGk9cig4Mik7ZShlLlMrZS5GKnIoMykoZnVuY3Rpb24oKXtmdW5jdGlvbiBGKCl7fXJldHVybiEoQXJyYXkub2YuY2FsbChGKWluc3RhbmNlb2YgRil9KSxcIkFycmF5XCIse29mOmZ1bmN0aW9uIG9mKCl7Zm9yKHZhciB0PTAsbj1hcmd1bWVudHMubGVuZ3RoLHI9bmV3KFwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXM/dGhpczpBcnJheSkobik7dDxuOylpKHIsdCxhcmd1bWVudHNbdCsrXSk7cmV0dXJuIHIubGVuZ3RoPW4scn19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksaT1yKDE1KSxvPVtdLmpvaW47ZShlLlArZS5GKihyKDQ4KSE9T2JqZWN0fHwhcigyMSkobykpLFwiQXJyYXlcIix7am9pbjpmdW5jdGlvbiBqb2luKHQpe3JldHVybiBvLmNhbGwoaSh0aGlzKSx0PT09SnQ/XCIsXCI6dCl9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGk9cig3MCksZj1yKDE5KSxzPXIoMzUpLGw9cig2KSxoPVtdLnNsaWNlO2UoZS5QK2UuRipyKDMpKGZ1bmN0aW9uKCl7aSYmaC5jYWxsKGkpfSksXCJBcnJheVwiLHtzbGljZTpmdW5jdGlvbiBzbGljZSh0LG4pe3ZhciByPWwodGhpcy5sZW5ndGgpLGU9Zih0aGlzKTtpZihuPW49PT1KdD9yOm4sXCJBcnJheVwiPT1lKXJldHVybiBoLmNhbGwodGhpcyx0LG4pO2Zvcih2YXIgaT1zKHQsciksbz1zKG4sciksdT1sKG8taSksYz1uZXcgQXJyYXkodSksYT0wO2E8dTthKyspY1thXT1cIlN0cmluZ1wiPT1lP3RoaXMuY2hhckF0KGkrYSk6dGhpc1tpK2FdO3JldHVybiBjfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxpPXIoMTApLG89cig5KSx1PXIoMyksYz1bXS5zb3J0LGE9WzEsMiwzXTtlKGUuUCtlLkYqKHUoZnVuY3Rpb24oKXthLnNvcnQoSnQpfSl8fCF1KGZ1bmN0aW9uKCl7YS5zb3J0KG51bGwpfSl8fCFyKDIxKShjKSksXCJBcnJheVwiLHtzb3J0OmZ1bmN0aW9uIHNvcnQodCl7cmV0dXJuIHQ9PT1KdD9jLmNhbGwobyh0aGlzKSk6Yy5jYWxsKG8odGhpcyksaSh0KSl9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGk9cigyNSkoMCksbz1yKDIxKShbXS5mb3JFYWNoLCEwKTtlKGUuUCtlLkYqIW8sXCJBcnJheVwiLHtmb3JFYWNoOmZ1bmN0aW9uIGZvckVhY2godCl7cmV0dXJuIGkodGhpcyx0LGFyZ3VtZW50c1sxXSl9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDQpLGk9cig1NCksbz1yKDUpKFwic3BlY2llc1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIG47cmV0dXJuIGkodCkmJihcImZ1bmN0aW9uXCIhPXR5cGVvZihuPXQuY29uc3RydWN0b3IpfHxuIT09QXJyYXkmJiFpKG4ucHJvdG90eXBlKXx8KG49SnQpLGUobikmJm51bGw9PT0obj1uW29dKSYmKG49SnQpKSxuPT09SnQ/QXJyYXk6bn19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGk9cigyNSkoMSk7ZShlLlArZS5GKiFyKDIxKShbXS5tYXAsITApLFwiQXJyYXlcIix7bWFwOmZ1bmN0aW9uIG1hcCh0KXtyZXR1cm4gaSh0aGlzLHQsYXJndW1lbnRzWzFdKX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksaT1yKDI1KSgyKTtlKGUuUCtlLkYqIXIoMjEpKFtdLmZpbHRlciwhMCksXCJBcnJheVwiLHtmaWx0ZXI6ZnVuY3Rpb24gZmlsdGVyKHQpe3JldHVybiBpKHRoaXMsdCxhcmd1bWVudHNbMV0pfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxpPXIoMjUpKDMpO2UoZS5QK2UuRiohcigyMSkoW10uc29tZSwhMCksXCJBcnJheVwiLHtzb21lOmZ1bmN0aW9uIHNvbWUodCl7cmV0dXJuIGkodGhpcyx0LGFyZ3VtZW50c1sxXSl9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGk9cigyNSkoNCk7ZShlLlArZS5GKiFyKDIxKShbXS5ldmVyeSwhMCksXCJBcnJheVwiLHtldmVyeTpmdW5jdGlvbiBldmVyeSh0KXtyZXR1cm4gaSh0aGlzLHQsYXJndW1lbnRzWzFdKX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksaT1yKDEwOSk7ZShlLlArZS5GKiFyKDIxKShbXS5yZWR1Y2UsITApLFwiQXJyYXlcIix7cmVkdWNlOmZ1bmN0aW9uIHJlZHVjZSh0KXtyZXR1cm4gaSh0aGlzLHQsYXJndW1lbnRzLmxlbmd0aCxhcmd1bWVudHNbMV0sITEpfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxpPXIoMTA5KTtlKGUuUCtlLkYqIXIoMjEpKFtdLnJlZHVjZVJpZ2h0LCEwKSxcIkFycmF5XCIse3JlZHVjZVJpZ2h0OmZ1bmN0aW9uIHJlZHVjZVJpZ2h0KHQpe3JldHVybiBpKHRoaXMsdCxhcmd1bWVudHMubGVuZ3RoLGFyZ3VtZW50c1sxXSwhMCl9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGk9cig1MikoITEpLG89W10uaW5kZXhPZix1PSEhbyYmMS9bMV0uaW5kZXhPZigxLC0wKTwwO2UoZS5QK2UuRioodXx8IXIoMjEpKG8pKSxcIkFycmF5XCIse2luZGV4T2Y6ZnVuY3Rpb24gaW5kZXhPZih0KXtyZXR1cm4gdT9vLmFwcGx5KHRoaXMsYXJndW1lbnRzKXx8MDppKHRoaXMsdCxhcmd1bWVudHNbMV0pfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxpPXIoMTUpLG89cigyMCksdT1yKDYpLGM9W10ubGFzdEluZGV4T2YsYT0hIWMmJjEvWzFdLmxhc3RJbmRleE9mKDEsLTApPDA7ZShlLlArZS5GKihhfHwhcigyMSkoYykpLFwiQXJyYXlcIix7bGFzdEluZGV4T2Y6ZnVuY3Rpb24gbGFzdEluZGV4T2YodCl7aWYoYSlyZXR1cm4gYy5hcHBseSh0aGlzLGFyZ3VtZW50cyl8fDA7dmFyIG49aSh0aGlzKSxyPXUobi5sZW5ndGgpLGU9ci0xO2ZvcigxPGFyZ3VtZW50cy5sZW5ndGgmJihlPU1hdGgubWluKGUsbyhhcmd1bWVudHNbMV0pKSksZTwwJiYoZT1yK2UpOzA8PWU7ZS0tKWlmKGUgaW4gbiYmbltlXT09PXQpcmV0dXJuIGV8fDA7cmV0dXJuLTF9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApO2UoZS5QLFwiQXJyYXlcIix7Y29weVdpdGhpbjpyKDExMCl9KSxyKDMxKShcImNvcHlXaXRoaW5cIil9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApO2UoZS5QLFwiQXJyYXlcIix7ZmlsbDpyKDg1KX0pLHIoMzEpKFwiZmlsbFwiKX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksaT1yKDI1KSg1KSxvPVwiZmluZFwiLHU9ITA7byBpbltdJiZBcnJheSgxKVtvXShmdW5jdGlvbigpe3U9ITF9KSxlKGUuUCtlLkYqdSxcIkFycmF5XCIse2ZpbmQ6ZnVuY3Rpb24gZmluZCh0KXtyZXR1cm4gaSh0aGlzLHQsMTxhcmd1bWVudHMubGVuZ3RoP2FyZ3VtZW50c1sxXTpKdCl9fSkscigzMSkobyl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGk9cigyNSkoNiksbz1cImZpbmRJbmRleFwiLHU9ITA7byBpbltdJiZBcnJheSgxKVtvXShmdW5jdGlvbigpe3U9ITF9KSxlKGUuUCtlLkYqdSxcIkFycmF5XCIse2ZpbmRJbmRleDpmdW5jdGlvbiBmaW5kSW5kZXgodCl7cmV0dXJuIGkodGhpcyx0LDE8YXJndW1lbnRzLmxlbmd0aD9hcmd1bWVudHNbMV06SnQpfX0pLHIoMzEpKG8pfSxmdW5jdGlvbih0LG4scil7cigzOCkoXCJBcnJheVwiKX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMiksbz1yKDcyKSxpPXIoOCkuZix1PXIoMzcpLmYsYz1yKDU2KSxhPXIoNTApLGY9ZS5SZWdFeHAscz1mLGw9Zi5wcm90b3R5cGUsaD0vYS9nLHA9L2EvZyx2PW5ldyBmKGgpIT09aDtpZihyKDcpJiYoIXZ8fHIoMykoZnVuY3Rpb24oKXtyZXR1cm4gcFtyKDUpKFwibWF0Y2hcIildPSExLGYoaCkhPWh8fGYocCk9PXB8fFwiL2EvaVwiIT1mKGgsXCJpXCIpfSkpKXtmPWZ1bmN0aW9uIFJlZ0V4cCh0LG4pe3ZhciByPXRoaXMgaW5zdGFuY2VvZiBmLGU9Yyh0KSxpPW49PT1KdDtyZXR1cm4hciYmZSYmdC5jb25zdHJ1Y3Rvcj09PWYmJmk/dDpvKHY/bmV3IHMoZSYmIWk/dC5zb3VyY2U6dCxuKTpzKChlPXQgaW5zdGFuY2VvZiBmKT90LnNvdXJjZTp0LGUmJmk/YS5jYWxsKHQpOm4pLHI/dGhpczpsLGYpfTtmb3IodmFyIGc9ZnVuY3Rpb24obil7biBpbiBmfHxpKGYsbix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBzW25dfSxzZXQ6ZnVuY3Rpb24odCl7c1tuXT10fX0pfSx5PXUocyksZD0wO2Q8eS5sZW5ndGg7KWcoeVtkKytdKTsobC5jb25zdHJ1Y3Rvcj1mKS5wcm90b3R5cGU9bCxyKDEyKShlLFwiUmVnRXhwXCIsZil9cigzOCkoXCJSZWdFeHBcIil9LGZ1bmN0aW9uKHQsbixyKXtyKDExMyk7dmFyIGU9cigxKSxpPXIoNTApLG89cig3KSx1PVwidG9TdHJpbmdcIixjPS8uL1t1XSxhPWZ1bmN0aW9uKHQpe3IoMTIpKFJlZ0V4cC5wcm90b3R5cGUsdSx0LCEwKX07cigzKShmdW5jdGlvbigpe3JldHVyblwiL2EvYlwiIT1jLmNhbGwoe3NvdXJjZTpcImFcIixmbGFnczpcImJcIn0pfSk/YShmdW5jdGlvbiB0b1N0cmluZygpe3ZhciB0PWUodGhpcyk7cmV0dXJuXCIvXCIuY29uY2F0KHQuc291cmNlLFwiL1wiLFwiZmxhZ3NcImluIHQ/dC5mbGFnczohbyYmdCBpbnN0YW5jZW9mIFJlZ0V4cD9pLmNhbGwodCk6SnQpfSk6Yy5uYW1lIT11JiZhKGZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIGMuY2FsbCh0aGlzKX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGw9cigxKSxoPXIoNikscD1yKDg4KSx2PXIoNTgpO3IoNTkpKFwibWF0Y2hcIiwxLGZ1bmN0aW9uKGUsaSxmLHMpe3JldHVybltmdW5jdGlvbiBtYXRjaCh0KXt2YXIgbj1lKHRoaXMpLHI9dD09SnQ/SnQ6dFtpXTtyZXR1cm4gciE9PUp0P3IuY2FsbCh0LG4pOm5ldyBSZWdFeHAodClbaV0oU3RyaW5nKG4pKX0sZnVuY3Rpb24odCl7dmFyIG49cyhmLHQsdGhpcyk7aWYobi5kb25lKXJldHVybiBuLnZhbHVlO3ZhciByPWwodCksZT1TdHJpbmcodGhpcyk7aWYoIXIuZ2xvYmFsKXJldHVybiB2KHIsZSk7Zm9yKHZhciBpLG89ci51bmljb2RlLHU9W10sYz1yLmxhc3RJbmRleD0wO251bGwhPT0oaT12KHIsZSkpOyl7dmFyIGE9U3RyaW5nKGlbMF0pO1wiXCI9PT0odVtjXT1hKSYmKHIubGFzdEluZGV4PXAoZSxoKHIubGFzdEluZGV4KSxvKSksYysrfXJldHVybiAwPT09Yz9udWxsOnV9XX0pfSxmdW5jdGlvbih0LG4scil7dmFyIHc9cigxKSxlPXIoOSksRT1yKDYpLE89cigyMCksTT1yKDg4KSxJPXIoNTgpLFA9TWF0aC5tYXgsRj1NYXRoLm1pbixoPU1hdGguZmxvb3IscD0vXFwkKFskJmAnXXxcXGRcXGQ/fDxbXj5dKj4pL2csdj0vXFwkKFskJmAnXXxcXGRcXGQ/KS9nO3IoNTkpKFwicmVwbGFjZVwiLDIsZnVuY3Rpb24oaSxvLHgsbSl7cmV0dXJuW2Z1bmN0aW9uIHJlcGxhY2UodCxuKXt2YXIgcj1pKHRoaXMpLGU9dD09SnQ/SnQ6dFtvXTtyZXR1cm4gZSE9PUp0P2UuY2FsbCh0LHIsbik6eC5jYWxsKFN0cmluZyhyKSx0LG4pfSxmdW5jdGlvbih0LG4pe3ZhciByPW0oeCx0LHRoaXMsbik7aWYoci5kb25lKXJldHVybiByLnZhbHVlO3ZhciBlPXcodCksaT1TdHJpbmcodGhpcyksbz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBuO298fChuPVN0cmluZyhuKSk7dmFyIHU9ZS5nbG9iYWw7aWYodSl7dmFyIGM9ZS51bmljb2RlO2UubGFzdEluZGV4PTB9Zm9yKHZhciBhPVtdOzspe3ZhciBmPUkoZSxpKTtpZihudWxsPT09ZilicmVhaztpZihhLnB1c2goZiksIXUpYnJlYWs7XCJcIj09PVN0cmluZyhmWzBdKSYmKGUubGFzdEluZGV4PU0oaSxFKGUubGFzdEluZGV4KSxjKSl9Zm9yKHZhciBzLGw9XCJcIixoPTAscD0wO3A8YS5sZW5ndGg7cCsrKXtmPWFbcF07Zm9yKHZhciB2PVN0cmluZyhmWzBdKSxnPVAoRihPKGYuaW5kZXgpLFxuaS5sZW5ndGgpLDApLHk9W10sZD0xO2Q8Zi5sZW5ndGg7ZCsrKXkucHVzaCgocz1mW2RdKT09PUp0P3M6U3RyaW5nKHMpKTt2YXIgYj1mLmdyb3VwcztpZihvKXt2YXIgXz1bdl0uY29uY2F0KHksZyxpKTtiIT09SnQmJl8ucHVzaChiKTt2YXIgUz1TdHJpbmcobi5hcHBseShKdCxfKSl9ZWxzZSBTPWdldFN1YnN0aXR1dGlvbih2LGksZyx5LGIsbik7aDw9ZyYmKGwrPWkuc2xpY2UoaCxnKStTLGg9Zyt2Lmxlbmd0aCl9cmV0dXJuIGwraS5zbGljZShoKX1dO2Z1bmN0aW9uIGdldFN1YnN0aXR1dGlvbihvLHUsYyxhLGYsdCl7dmFyIHM9YytvLmxlbmd0aCxsPWEubGVuZ3RoLG49djtyZXR1cm4gZiE9PUp0JiYoZj1lKGYpLG49cCkseC5jYWxsKHQsbixmdW5jdGlvbih0LG4pe3ZhciByO3N3aXRjaChuLmNoYXJBdCgwKSl7Y2FzZVwiJFwiOnJldHVyblwiJFwiO2Nhc2VcIiZcIjpyZXR1cm4gbztjYXNlXCJgXCI6cmV0dXJuIHUuc2xpY2UoMCxjKTtjYXNlXCInXCI6cmV0dXJuIHUuc2xpY2Uocyk7Y2FzZVwiPFwiOnI9ZltuLnNsaWNlKDEsLTEpXTticmVhaztkZWZhdWx0OnZhciBlPStuO2lmKDA9PT1lKXJldHVybiB0O2lmKGw8ZSl7dmFyIGk9aChlLzEwKTtyZXR1cm4gMD09PWk/dDppPD1sP2FbaS0xXT09PUp0P24uY2hhckF0KDEpOmFbaS0xXStuLmNoYXJBdCgxKTp0fXI9YVtlLTFdfXJldHVybiByPT09SnQ/XCJcIjpyfSl9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgYT1yKDEpLGY9cig5OSkscz1yKDU4KTtyKDU5KShcInNlYXJjaFwiLDEsZnVuY3Rpb24oZSxpLHUsYyl7cmV0dXJuW2Z1bmN0aW9uIHNlYXJjaCh0KXt2YXIgbj1lKHRoaXMpLHI9dD09SnQ/SnQ6dFtpXTtyZXR1cm4gciE9PUp0P3IuY2FsbCh0LG4pOm5ldyBSZWdFeHAodClbaV0oU3RyaW5nKG4pKX0sZnVuY3Rpb24odCl7dmFyIG49Yyh1LHQsdGhpcyk7aWYobi5kb25lKXJldHVybiBuLnZhbHVlO3ZhciByPWEodCksZT1TdHJpbmcodGhpcyksaT1yLmxhc3RJbmRleDtmKGksMCl8fChyLmxhc3RJbmRleD0wKTt2YXIgbz1zKHIsZSk7cmV0dXJuIGYoci5sYXN0SW5kZXgsaSl8fChyLmxhc3RJbmRleD1pKSxudWxsPT09bz8tMTpvLmluZGV4fV19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBzPXIoNTYpLGI9cigxKSxfPXIoNTEpLFM9cig4OCkseD1yKDYpLG09cig1OCksbD1yKDg3KSxlPXIoMyksdz1NYXRoLm1pbixoPVtdLnB1c2gsdT1cInNwbGl0XCIscD1cImxlbmd0aFwiLHY9XCJsYXN0SW5kZXhcIixFPTQyOTQ5NjcyOTUsTz0hZShmdW5jdGlvbigpe1JlZ0V4cChFLFwieVwiKX0pO3IoNTkpKFwic3BsaXRcIiwyLGZ1bmN0aW9uKGksbyxnLHkpe3ZhciBkO3JldHVybiBkPVwiY1wiPT1cImFiYmNcIlt1XSgvKGIpKi8pWzFdfHw0IT1cInRlc3RcIlt1XSgvKD86KS8sLTEpW3BdfHwyIT1cImFiXCJbdV0oLyg/OmFiKSovKVtwXXx8NCE9XCIuXCJbdV0oLyguPykoLj8pLylbcF18fDE8XCIuXCJbdV0oLygpKCkvKVtwXXx8XCJcIlt1XSgvLj8vKVtwXT9mdW5jdGlvbih0LG4pe3ZhciByPVN0cmluZyh0aGlzKTtpZih0PT09SnQmJjA9PT1uKXJldHVybltdO2lmKCFzKHQpKXJldHVybiBnLmNhbGwocix0LG4pO2Zvcih2YXIgZSxpLG8sdT1bXSxjPTAsYT1uPT09SnQ/RTpuPj4+MCxmPW5ldyBSZWdFeHAodC5zb3VyY2UsKHQuaWdub3JlQ2FzZT9cImlcIjpcIlwiKSsodC5tdWx0aWxpbmU/XCJtXCI6XCJcIikrKHQudW5pY29kZT9cInVcIjpcIlwiKSsodC5zdGlja3k/XCJ5XCI6XCJcIikrXCJnXCIpOyhlPWwuY2FsbChmLHIpKSYmIShjPChpPWZbdl0pJiYodS5wdXNoKHIuc2xpY2UoYyxlLmluZGV4KSksMTxlW3BdJiZlLmluZGV4PHJbcF0mJmguYXBwbHkodSxlLnNsaWNlKDEpKSxvPWVbMF1bcF0sYz1pLGE8PXVbcF0pKTspZlt2XT09PWUuaW5kZXgmJmZbdl0rKztyZXR1cm4gYz09PXJbcF0/IW8mJmYudGVzdChcIlwiKXx8dS5wdXNoKFwiXCIpOnUucHVzaChyLnNsaWNlKGMpKSxhPHVbcF0/dS5zbGljZSgwLGEpOnV9OlwiMFwiW3VdKEp0LDApW3BdP2Z1bmN0aW9uKHQsbil7cmV0dXJuIHQ9PT1KdCYmMD09PW4/W106Zy5jYWxsKHRoaXMsdCxuKX06ZyxbZnVuY3Rpb24gc3BsaXQodCxuKXt2YXIgcj1pKHRoaXMpLGU9dD09SnQ/SnQ6dFtvXTtyZXR1cm4gZSE9PUp0P2UuY2FsbCh0LHIsbik6ZC5jYWxsKFN0cmluZyhyKSx0LG4pfSxmdW5jdGlvbih0LG4pe3ZhciByPXkoZCx0LHRoaXMsbixkIT09Zyk7aWYoci5kb25lKXJldHVybiByLnZhbHVlO3ZhciBlPWIodCksaT1TdHJpbmcodGhpcyksbz1fKGUsUmVnRXhwKSx1PWUudW5pY29kZSxjPW5ldyBvKE8/ZTpcIl4oPzpcIitlLnNvdXJjZStcIilcIiwoZS5pZ25vcmVDYXNlP1wiaVwiOlwiXCIpKyhlLm11bHRpbGluZT9cIm1cIjpcIlwiKSsoZS51bmljb2RlP1widVwiOlwiXCIpKyhPP1wieVwiOlwiZ1wiKSksYT1uPT09SnQ/RTpuPj4+MDtpZigwPT09YSlyZXR1cm5bXTtpZigwPT09aS5sZW5ndGgpcmV0dXJuIG51bGw9PT1tKGMsaSk/W2ldOltdO2Zvcih2YXIgZj0wLHM9MCxsPVtdO3M8aS5sZW5ndGg7KXtjLmxhc3RJbmRleD1PP3M6MDt2YXIgaCxwPW0oYyxPP2k6aS5zbGljZShzKSk7aWYobnVsbD09PXB8fChoPXcoeChjLmxhc3RJbmRleCsoTz8wOnMpKSxpLmxlbmd0aCkpPT09ZilzPVMoaSxzLHUpO2Vsc2V7aWYobC5wdXNoKGkuc2xpY2UoZixzKSksbC5sZW5ndGg9PT1hKXJldHVybiBsO2Zvcih2YXIgdj0xO3Y8PXAubGVuZ3RoLTE7disrKWlmKGwucHVzaChwW3ZdKSxsLmxlbmd0aD09PWEpcmV0dXJuIGw7cz1mPWh9fXJldHVybiBsLnB1c2goaS5zbGljZShmKSksbH1dfSl9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcixpLG8sdSxjPWUoMjkpLGE9ZSgyKSxmPWUoMTgpLHM9ZSg0NCksbD1lKDApLGg9ZSg0KSxwPWUoMTApLHY9ZSgzOSksZz1lKDQwKSx5PWUoNTEpLGQ9ZSg4OSkuc2V0LGI9ZSg5MCkoKSxfPWUoOTEpLFM9ZSgxMTQpLHg9ZSg2MCksbT1lKDExNSksdz1cIlByb21pc2VcIixFPWEuVHlwZUVycm9yLE89YS5wcm9jZXNzLE09TyYmTy52ZXJzaW9ucyxJPU0mJk0udjh8fFwiXCIsUD1hW3ddLEY9XCJwcm9jZXNzXCI9PXMoTyksQT1mdW5jdGlvbigpe30saz1pPV8uZixOPSEhZnVuY3Rpb24oKXt0cnl7dmFyIHQ9UC5yZXNvbHZlKDEpLG49KHQuY29uc3RydWN0b3I9e30pW2UoNSkoXCJzcGVjaWVzXCIpXT1mdW5jdGlvbih0KXt0KEEsQSl9O3JldHVybihGfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQpJiZ0LnRoZW4oQSlpbnN0YW5jZW9mIG4mJjAhPT1JLmluZGV4T2YoXCI2LjZcIikmJi0xPT09eC5pbmRleE9mKFwiQ2hyb21lLzY2XCIpfWNhdGNoKHIpe319KCksaj1mdW5jdGlvbih0KXt2YXIgbjtyZXR1cm4hKCFoKHQpfHxcImZ1bmN0aW9uXCIhPXR5cGVvZihuPXQudGhlbikpJiZufSxSPWZ1bmN0aW9uKGwscil7aWYoIWwuX24pe2wuX249ITA7dmFyIGU9bC5fYztiKGZ1bmN0aW9uKCl7Zm9yKHZhciBmPWwuX3Yscz0xPT1sLl9zLHQ9MCxuPWZ1bmN0aW9uKHQpe3ZhciBuLHIsZSxpPXM/dC5vazp0LmZhaWwsbz10LnJlc29sdmUsdT10LnJlamVjdCxjPXQuZG9tYWluO3RyeXtpPyhzfHwoMj09bC5faCYmRChsKSxsLl9oPTEpLCEwPT09aT9uPWY6KGMmJmMuZW50ZXIoKSxuPWkoZiksYyYmKGMuZXhpdCgpLGU9ITApKSxuPT09dC5wcm9taXNlP3UoRShcIlByb21pc2UtY2hhaW4gY3ljbGVcIikpOihyPWoobikpP3IuY2FsbChuLG8sdSk6byhuKSk6dShmKX1jYXRjaChhKXtjJiYhZSYmYy5leGl0KCksdShhKX19O3Q8ZS5sZW5ndGg7KW4oZVt0KytdKTtsLl9jPVtdLGwuX249ITEsciYmIWwuX2gmJlQobCl9KX19LFQ9ZnVuY3Rpb24obyl7ZC5jYWxsKGEsZnVuY3Rpb24oKXt2YXIgdCxuLHIsZT1vLl92LGk9TChvKTtpZihpJiYodD1TKGZ1bmN0aW9uKCl7Rj9PLmVtaXQoXCJ1bmhhbmRsZWRSZWplY3Rpb25cIixlLG8pOihuPWEub251bmhhbmRsZWRyZWplY3Rpb24pP24oe3Byb21pc2U6byxyZWFzb246ZX0pOihyPWEuY29uc29sZSkmJnIuZXJyb3ImJnIuZXJyb3IoXCJVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb25cIixlKX0pLG8uX2g9Rnx8TChvKT8yOjEpLG8uX2E9SnQsaSYmdC5lKXRocm93IHQudn0pfSxMPWZ1bmN0aW9uKHQpe3JldHVybiAxIT09dC5faCYmMD09PSh0Ll9hfHx0Ll9jKS5sZW5ndGh9LEQ9ZnVuY3Rpb24obil7ZC5jYWxsKGEsZnVuY3Rpb24oKXt2YXIgdDtGP08uZW1pdChcInJlamVjdGlvbkhhbmRsZWRcIixuKToodD1hLm9ucmVqZWN0aW9uaGFuZGxlZCkmJnQoe3Byb21pc2U6bixyZWFzb246bi5fdn0pfSl9LEM9ZnVuY3Rpb24odCl7dmFyIG49dGhpcztuLl9kfHwobi5fZD0hMCwobj1uLl93fHxuKS5fdj10LG4uX3M9MixuLl9hfHwobi5fYT1uLl9jLnNsaWNlKCkpLFIobiwhMCkpfSxVPWZ1bmN0aW9uKHIpe3ZhciBlLGk9dGhpcztpZighaS5fZCl7aS5fZD0hMCxpPWkuX3d8fGk7dHJ5e2lmKGk9PT1yKXRocm93IEUoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTsoZT1qKHIpKT9iKGZ1bmN0aW9uKCl7dmFyIHQ9e193OmksX2Q6ITF9O3RyeXtlLmNhbGwocixmKFUsdCwxKSxmKEMsdCwxKSl9Y2F0Y2gobil7Qy5jYWxsKHQsbil9fSk6KGkuX3Y9cixpLl9zPTEsUihpLCExKSl9Y2F0Y2godCl7Qy5jYWxsKHtfdzppLF9kOiExfSx0KX19fTtOfHwoUD1mdW5jdGlvbiBQcm9taXNlKHQpe3YodGhpcyxQLHcsXCJfaFwiKSxwKHQpLHIuY2FsbCh0aGlzKTt0cnl7dChmKFUsdGhpcywxKSxmKEMsdGhpcywxKSl9Y2F0Y2gobil7Qy5jYWxsKHRoaXMsbil9fSwocj1mdW5jdGlvbiBQcm9taXNlKHQpe3RoaXMuX2M9W10sdGhpcy5fYT1KdCx0aGlzLl9zPTAsdGhpcy5fZD0hMSx0aGlzLl92PUp0LHRoaXMuX2g9MCx0aGlzLl9uPSExfSkucHJvdG90eXBlPWUoNDEpKFAucHJvdG90eXBlLHt0aGVuOmZ1bmN0aW9uIHRoZW4odCxuKXt2YXIgcj1rKHkodGhpcyxQKSk7cmV0dXJuIHIub2s9XCJmdW5jdGlvblwiIT10eXBlb2YgdHx8dCxyLmZhaWw9XCJmdW5jdGlvblwiPT10eXBlb2YgbiYmbixyLmRvbWFpbj1GP08uZG9tYWluOkp0LHRoaXMuX2MucHVzaChyKSx0aGlzLl9hJiZ0aGlzLl9hLnB1c2gociksdGhpcy5fcyYmUih0aGlzLCExKSxyLnByb21pc2V9LFwiY2F0Y2hcIjpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50aGVuKEp0LHQpfX0pLG89ZnVuY3Rpb24oKXt2YXIgdD1uZXcgcjt0aGlzLnByb21pc2U9dCx0aGlzLnJlc29sdmU9ZihVLHQsMSksdGhpcy5yZWplY3Q9ZihDLHQsMSl9LF8uZj1rPWZ1bmN0aW9uKHQpe3JldHVybiB0PT09UHx8dD09PXU/bmV3IG8odCk6aSh0KX0pLGwobC5HK2wuVytsLkYqIU4se1Byb21pc2U6UH0pLGUoNDMpKFAsdyksZSgzOCkodyksdT1lKDI2KVt3XSxsKGwuUytsLkYqIU4sdyx7cmVqZWN0OmZ1bmN0aW9uIHJlamVjdCh0KXt2YXIgbj1rKHRoaXMpO3JldHVybigwLG4ucmVqZWN0KSh0KSxuLnByb21pc2V9fSksbChsLlMrbC5GKihjfHwhTiksdyx7cmVzb2x2ZTpmdW5jdGlvbiByZXNvbHZlKHQpe3JldHVybiBtKGMmJnRoaXM9PT11P1A6dGhpcyx0KX19KSxsKGwuUytsLkYqIShOJiZlKDU3KShmdW5jdGlvbih0KXtQLmFsbCh0KVtcImNhdGNoXCJdKEEpfSkpLHcse2FsbDpmdW5jdGlvbiBhbGwodCl7dmFyIHU9dGhpcyxuPWsodSksYz1uLnJlc29sdmUsYT1uLnJlamVjdCxyPVMoZnVuY3Rpb24oKXt2YXIgZT1bXSxpPTAsbz0xO2codCwhMSxmdW5jdGlvbih0KXt2YXIgbj1pKysscj0hMTtlLnB1c2goSnQpLG8rKyx1LnJlc29sdmUodCkudGhlbihmdW5jdGlvbih0KXtyfHwocj0hMCxlW25dPXQsLS1vfHxjKGUpKX0sYSl9KSwtLW98fGMoZSl9KTtyZXR1cm4gci5lJiZhKHIudiksbi5wcm9taXNlfSxyYWNlOmZ1bmN0aW9uIHJhY2UodCl7dmFyIG49dGhpcyxyPWsobiksZT1yLnJlamVjdCxpPVMoZnVuY3Rpb24oKXtnKHQsITEsZnVuY3Rpb24odCl7bi5yZXNvbHZlKHQpLnRoZW4oci5yZXNvbHZlLGUpfSl9KTtyZXR1cm4gaS5lJiZlKGkudiksci5wcm9taXNlfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigxMjApLGk9cig0Miksbz1cIldlYWtTZXRcIjtyKDYxKShvLGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbiBXZWFrU2V0KCl7cmV0dXJuIHQodGhpcywwPGFyZ3VtZW50cy5sZW5ndGg/YXJndW1lbnRzWzBdOkp0KX19LHthZGQ6ZnVuY3Rpb24gYWRkKHQpe3JldHVybiBlLmRlZihpKHRoaXMsbyksdCwhMCl9fSxlLCExLCEwKX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksbz1yKDEwKSx1PXIoMSksYz0ocigyKS5SZWZsZWN0fHx7fSkuYXBwbHksYT1GdW5jdGlvbi5hcHBseTtlKGUuUytlLkYqIXIoMykoZnVuY3Rpb24oKXtjKGZ1bmN0aW9uKCl7fSl9KSxcIlJlZmxlY3RcIix7YXBwbHk6ZnVuY3Rpb24gYXBwbHkodCxuLHIpe3ZhciBlPW8odCksaT11KHIpO3JldHVybiBjP2MoZSxuLGkpOmEuY2FsbChlLG4saSl9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGM9cigzNiksYT1yKDEwKSxmPXIoMSkscz1yKDQpLGk9cigzKSxsPXIoMTAwKSxoPShyKDIpLlJlZmxlY3R8fHt9KS5jb25zdHJ1Y3QscD1pKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gRigpe31yZXR1cm4hKGgoZnVuY3Rpb24oKXt9LFtdLEYpaW5zdGFuY2VvZiBGKX0pLHY9IWkoZnVuY3Rpb24oKXtoKGZ1bmN0aW9uKCl7fSl9KTtlKGUuUytlLkYqKHB8fHYpLFwiUmVmbGVjdFwiLHtjb25zdHJ1Y3Q6ZnVuY3Rpb24gY29uc3RydWN0KHQsbil7YSh0KSxmKG4pO3ZhciByPWFyZ3VtZW50cy5sZW5ndGg8Mz90OmEoYXJndW1lbnRzWzJdKTtpZih2JiYhcClyZXR1cm4gaCh0LG4scik7aWYodD09cil7c3dpdGNoKG4ubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIG5ldyB0O2Nhc2UgMTpyZXR1cm4gbmV3IHQoblswXSk7Y2FzZSAyOnJldHVybiBuZXcgdChuWzBdLG5bMV0pO2Nhc2UgMzpyZXR1cm4gbmV3IHQoblswXSxuWzFdLG5bMl0pO2Nhc2UgNDpyZXR1cm4gbmV3IHQoblswXSxuWzFdLG5bMl0sblszXSl9dmFyIGU9W251bGxdO3JldHVybiBlLnB1c2guYXBwbHkoZSxuKSxuZXcobC5hcHBseSh0LGUpKX12YXIgaT1yLnByb3RvdHlwZSxvPWMocyhpKT9pOk9iamVjdC5wcm90b3R5cGUpLHU9RnVuY3Rpb24uYXBwbHkuY2FsbCh0LG8sbik7cmV0dXJuIHModSk/dTpvfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGk9cig4KSxlPXIoMCksbz1yKDEpLHU9cigyMik7ZShlLlMrZS5GKnIoMykoZnVuY3Rpb24oKXtSZWZsZWN0LmRlZmluZVByb3BlcnR5KGkuZih7fSwxLHt2YWx1ZToxfSksMSx7dmFsdWU6Mn0pfSksXCJSZWZsZWN0XCIse2RlZmluZVByb3BlcnR5OmZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KHQsbixyKXtvKHQpLG49dShuLCEwKSxvKHIpO3RyeXtyZXR1cm4gaS5mKHQsbixyKSwhMH1jYXRjaChlKXtyZXR1cm4hMX19fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGk9cigxNikuZixvPXIoMSk7ZShlLlMsXCJSZWZsZWN0XCIse2RlbGV0ZVByb3BlcnR5OmZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KHQsbil7dmFyIHI9aShvKHQpLG4pO3JldHVybiEociYmIXIuY29uZmlndXJhYmxlKSYmZGVsZXRlIHRbbl19fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGk9cigxKSxvPWZ1bmN0aW9uKHQpe3RoaXMuX3Q9aSh0KSx0aGlzLl9pPTA7dmFyIG4scj10aGlzLl9rPVtdO2ZvcihuIGluIHQpci5wdXNoKG4pfTtyKDgwKShvLFwiT2JqZWN0XCIsZnVuY3Rpb24oKXt2YXIgdCxuPXRoaXMuX2s7ZG97aWYobi5sZW5ndGg8PXRoaXMuX2kpcmV0dXJue3ZhbHVlOkp0LGRvbmU6ITB9fXdoaWxlKCEoKHQ9blt0aGlzLl9pKytdKWluIHRoaXMuX3QpKTtyZXR1cm57dmFsdWU6dCxkb25lOiExfX0pLGUoZS5TLFwiUmVmbGVjdFwiLHtlbnVtZXJhdGU6ZnVuY3Rpb24gZW51bWVyYXRlKHQpe3JldHVybiBuZXcgbyh0KX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBvPXIoMTYpLHU9cigxNyksYz1yKDE0KSxlPXIoMCksYT1yKDQpLGY9cigxKTtlKGUuUyxcIlJlZmxlY3RcIix7Z2V0OmZ1bmN0aW9uIGdldCh0LG4pe3ZhciByLGUsaT1hcmd1bWVudHMubGVuZ3RoPDM/dDphcmd1bWVudHNbMl07cmV0dXJuIGYodCk9PT1pP3Rbbl06KHI9by5mKHQsbikpP2MocixcInZhbHVlXCIpP3IudmFsdWU6ci5nZXQhPT1KdD9yLmdldC5jYWxsKGkpOkp0OmEoZT11KHQpKT9nZXQoZSxuLGkpOnZvaWQgMH19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMTYpLGk9cigwKSxvPXIoMSk7aShpLlMsXCJSZWZsZWN0XCIse2dldE93blByb3BlcnR5RGVzY3JpcHRvcjpmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxuKXtyZXR1cm4gZS5mKG8odCksbil9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGk9cigxNyksbz1yKDEpO2UoZS5TLFwiUmVmbGVjdFwiLHtnZXRQcm90b3R5cGVPZjpmdW5jdGlvbiBnZXRQcm90b3R5cGVPZih0KXtyZXR1cm4gaShvKHQpKX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCk7ZShlLlMsXCJSZWZsZWN0XCIse2hhczpmdW5jdGlvbiBoYXModCxuKXtyZXR1cm4gbiBpbiB0fX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxpPXIoMSksbz1PYmplY3QuaXNFeHRlbnNpYmxlO2UoZS5TLFwiUmVmbGVjdFwiLHtpc0V4dGVuc2libGU6ZnVuY3Rpb24gaXNFeHRlbnNpYmxlKHQpe3JldHVybiBpKHQpLCFvfHxvKHQpfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKTtlKGUuUyxcIlJlZmxlY3RcIix7b3duS2V5czpyKDEyMSl9KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksaT1yKDEpLG89T2JqZWN0LnByZXZlbnRFeHRlbnNpb25zO2UoZS5TLFwiUmVmbGVjdFwiLHtwcmV2ZW50RXh0ZW5zaW9uczpmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyh0KXtpKHQpO3RyeXtyZXR1cm4gbyYmbyh0KSwhMH1jYXRjaChuKXtyZXR1cm4hMX19fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgYz1yKDgpLGE9cigxNiksZj1yKDE3KSxzPXIoMTQpLGU9cigwKSxsPXIoMzIpLGg9cigxKSxwPXIoNCk7ZShlLlMsXCJSZWZsZWN0XCIse3NldDpmdW5jdGlvbiBzZXQodCxuLHIpe3ZhciBlLGksbz1hcmd1bWVudHMubGVuZ3RoPDQ/dDphcmd1bWVudHNbM10sdT1hLmYoaCh0KSxuKTtpZighdSl7aWYocChpPWYodCkpKXJldHVybiBzZXQoaSxuLHIsbyk7dT1sKDApfWlmKHModSxcInZhbHVlXCIpKXtpZighMT09PXUud3JpdGFibGV8fCFwKG8pKXJldHVybiExO2lmKGU9YS5mKG8sbikpe2lmKGUuZ2V0fHxlLnNldHx8ITE9PT1lLndyaXRhYmxlKXJldHVybiExO2UudmFsdWU9cixjLmYobyxuLGUpfWVsc2UgYy5mKG8sbixsKDAscikpO3JldHVybiEwfXJldHVybiB1LnNldCE9PUp0JiYodS5zZXQuY2FsbChvLHIpLCEwKX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksaT1yKDcxKTtpJiZlKGUuUyxcIlJlZmxlY3RcIix7c2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YodCxuKXtpLmNoZWNrKHQsbik7dHJ5e3JldHVybiBpLnNldCh0LG4pLCEwfWNhdGNoKHIpe3JldHVybiExfX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCk7ZShlLlMsXCJEYXRlXCIse25vdzpmdW5jdGlvbigpe3JldHVybihuZXcgRGF0ZSkuZ2V0VGltZSgpfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxpPXIoOSksbz1yKDIyKTtlKGUuUCtlLkYqcigzKShmdW5jdGlvbigpe3JldHVybiBudWxsIT09bmV3IERhdGUoTmFOKS50b0pTT04oKXx8MSE9PURhdGUucHJvdG90eXBlLnRvSlNPTi5jYWxsKHt0b0lTT1N0cmluZzpmdW5jdGlvbigpe3JldHVybiAxfX0pfSksXCJEYXRlXCIse3RvSlNPTjpmdW5jdGlvbiB0b0pTT04odCl7dmFyIG49aSh0aGlzKSxyPW8obik7cmV0dXJuXCJudW1iZXJcIiE9dHlwZW9mIHJ8fGlzRmluaXRlKHIpP24udG9JU09TdHJpbmcoKTpudWxsfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxpPXIoMjUyKTtlKGUuUCtlLkYqKERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nIT09aSksXCJEYXRlXCIse3RvSVNPU3RyaW5nOml9KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMyksaT1EYXRlLnByb3RvdHlwZS5nZXRUaW1lLG89RGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcsdT1mdW5jdGlvbih0KXtyZXR1cm4gOTx0P3Q6XCIwXCIrdH07dC5leHBvcnRzPWUoZnVuY3Rpb24oKXtyZXR1cm5cIjAzODUtMDctMjVUMDc6MDY6MzkuOTk5WlwiIT1vLmNhbGwobmV3IERhdGUoLTVlMTMtMSkpfSl8fCFlKGZ1bmN0aW9uKCl7by5jYWxsKG5ldyBEYXRlKE5hTikpfSk/ZnVuY3Rpb24gdG9JU09TdHJpbmcoKXtpZighaXNGaW5pdGUoaS5jYWxsKHRoaXMpKSl0aHJvdyBSYW5nZUVycm9yKFwiSW52YWxpZCB0aW1lIHZhbHVlXCIpO3ZhciB0PXRoaXMsbj10LmdldFVUQ0Z1bGxZZWFyKCkscj10LmdldFVUQ01pbGxpc2Vjb25kcygpLGU9bjwwP1wiLVwiOjk5OTk8bj9cIitcIjpcIlwiO3JldHVybiBlKyhcIjAwMDAwXCIrTWF0aC5hYnMobikpLnNsaWNlKGU/LTY6LTQpK1wiLVwiK3UodC5nZXRVVENNb250aCgpKzEpK1wiLVwiK3UodC5nZXRVVENEYXRlKCkpK1wiVFwiK3UodC5nZXRVVENIb3VycygpKStcIjpcIit1KHQuZ2V0VVRDTWludXRlcygpKStcIjpcIit1KHQuZ2V0VVRDU2Vjb25kcygpKStcIi5cIisoOTk8cj9yOlwiMFwiK3UocikpK1wiWlwifTpvfSxmdW5jdGlvbih0LG4scil7dmFyIGU9RGF0ZS5wcm90b3R5cGUsaT1cIkludmFsaWQgRGF0ZVwiLG89XCJ0b1N0cmluZ1wiLHU9ZVtvXSxjPWUuZ2V0VGltZTtuZXcgRGF0ZShOYU4pK1wiXCIhPWkmJnIoMTIpKGUsbyxmdW5jdGlvbiB0b1N0cmluZygpe3ZhciB0PWMuY2FsbCh0aGlzKTtyZXR1cm4gdD09dD91LmNhbGwodGhpcyk6aX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cig1KShcInRvUHJpbWl0aXZlXCIpLGk9RGF0ZS5wcm90b3R5cGU7ZSBpbiBpfHxyKDExKShpLGUscigyNTUpKX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMSksaT1yKDIyKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aWYoXCJzdHJpbmdcIiE9PXQmJlwibnVtYmVyXCIhPT10JiZcImRlZmF1bHRcIiE9PXQpdGhyb3cgVHlwZUVycm9yKFwiSW5jb3JyZWN0IGhpbnRcIik7cmV0dXJuIGkoZSh0aGlzKSxcIm51bWJlclwiIT10KX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGk9cig2Miksbz1yKDkyKSxmPXIoMSkscz1yKDM1KSxsPXIoNiksdT1yKDQpLGM9cigyKS5BcnJheUJ1ZmZlcixoPXIoNTEpLHA9by5BcnJheUJ1ZmZlcix2PW8uRGF0YVZpZXcsYT1pLkFCViYmYy5pc1ZpZXcsZz1wLnByb3RvdHlwZS5zbGljZSx5PWkuVklFVyxkPVwiQXJyYXlCdWZmZXJcIjtlKGUuRytlLlcrZS5GKihjIT09cCkse0FycmF5QnVmZmVyOnB9KSxlKGUuUytlLkYqIWkuQ09OU1RSLGQse2lzVmlldzpmdW5jdGlvbiBpc1ZpZXcodCl7cmV0dXJuIGEmJmEodCl8fHUodCkmJnkgaW4gdH19KSxlKGUuUCtlLlUrZS5GKnIoMykoZnVuY3Rpb24oKXtyZXR1cm4hbmV3IHAoMikuc2xpY2UoMSxKdCkuYnl0ZUxlbmd0aH0pLGQse3NsaWNlOmZ1bmN0aW9uIHNsaWNlKHQsbil7aWYoZyE9PUp0JiZuPT09SnQpcmV0dXJuIGcuY2FsbChmKHRoaXMpLHQpO2Zvcih2YXIgcj1mKHRoaXMpLmJ5dGVMZW5ndGgsZT1zKHQsciksaT1zKG49PT1KdD9yOm4sciksbz1uZXcoaCh0aGlzLHApKShsKGktZSkpLHU9bmV3IHYodGhpcyksYz1uZXcgdihvKSxhPTA7ZTxpOyljLnNldFVpbnQ4KGErKyx1LmdldFVpbnQ4KGUrKykpO3JldHVybiBvfX0pLHIoMzgpKGQpfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKTtlKGUuRytlLlcrZS5GKiFyKDYyKS5BQlYse0RhdGFWaWV3OnIoOTIpLkRhdGFWaWV3fSl9LGZ1bmN0aW9uKHQsbixyKXtyKDI3KShcIkludDhcIiwxLGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbiBJbnQ4QXJyYXkodCxuLHIpe3JldHVybiBlKHRoaXMsdCxuLHIpfX0pfSxmdW5jdGlvbih0LG4scil7cigyNykoXCJVaW50OFwiLDEsZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uIFVpbnQ4QXJyYXkodCxuLHIpe3JldHVybiBlKHRoaXMsdCxuLHIpfX0pfSxmdW5jdGlvbih0LG4scil7cigyNykoXCJVaW50OFwiLDEsZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uIFVpbnQ4Q2xhbXBlZEFycmF5KHQsbixyKXtyZXR1cm4gZSh0aGlzLHQsbixyKX19LCEwKX0sZnVuY3Rpb24odCxuLHIpe3IoMjcpKFwiSW50MTZcIiwyLGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbiBJbnQxNkFycmF5KHQsbixyKXtyZXR1cm4gZSh0aGlzLHQsbixyKX19KX0sZnVuY3Rpb24odCxuLHIpe3IoMjcpKFwiVWludDE2XCIsMixmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24gVWludDE2QXJyYXkodCxuLHIpe3JldHVybiBlKHRoaXMsdCxuLHIpfX0pfSxmdW5jdGlvbih0LG4scil7cigyNykoXCJJbnQzMlwiLDQsZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uIEludDMyQXJyYXkodCxuLHIpe3JldHVybiBlKHRoaXMsdCxuLHIpfX0pfSxmdW5jdGlvbih0LG4scil7cigyNykoXCJVaW50MzJcIiw0LGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbiBVaW50MzJBcnJheSh0LG4scil7cmV0dXJuIGUodGhpcyx0LG4scil9fSl9LGZ1bmN0aW9uKHQsbixyKXtyKDI3KShcIkZsb2F0MzJcIiw0LGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbiBGbG9hdDMyQXJyYXkodCxuLHIpe3JldHVybiBlKHRoaXMsdCxuLHIpfX0pfSxmdW5jdGlvbih0LG4scil7cigyNykoXCJGbG9hdDY0XCIsOCxmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24gRmxvYXQ2NEFycmF5KHQsbixyKXtyZXR1cm4gZSh0aGlzLHQsbixyKX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksaT1yKDUyKSghMCk7ZShlLlAsXCJBcnJheVwiLHtpbmNsdWRlczpmdW5jdGlvbiBpbmNsdWRlcyh0KXtyZXR1cm4gaSh0aGlzLHQsMTxhcmd1bWVudHMubGVuZ3RoP2FyZ3VtZW50c1sxXTpKdCl9fSkscigzMSkoXCJpbmNsdWRlc1wiKX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksaT1yKDEyMyksbz1yKDkpLHU9cig2KSxjPXIoMTApLGE9cig4NCk7ZShlLlAsXCJBcnJheVwiLHtmbGF0TWFwOmZ1bmN0aW9uIGZsYXRNYXAodCl7dmFyIG4scixlPW8odGhpcyk7cmV0dXJuIGModCksbj11KGUubGVuZ3RoKSxyPWEoZSwwKSxpKHIsZSxlLG4sMCwxLHQsYXJndW1lbnRzWzFdKSxyfX0pLHIoMzEpKFwiZmxhdE1hcFwiKX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksaT1yKDEyMyksbz1yKDkpLHU9cig2KSxjPXIoMjApLGE9cig4NCk7ZShlLlAsXCJBcnJheVwiLHtmbGF0dGVuOmZ1bmN0aW9uIGZsYXR0ZW4oKXt2YXIgdD1hcmd1bWVudHNbMF0sbj1vKHRoaXMpLHI9dShuLmxlbmd0aCksZT1hKG4sMCk7cmV0dXJuIGkoZSxuLG4sciwwLHQ9PT1KdD8xOmModCkpLGV9fSkscigzMSkoXCJmbGF0dGVuXCIpfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxpPXIoNTUpKCEwKTtlKGUuUCxcIlN0cmluZ1wiLHthdDpmdW5jdGlvbiBhdCh0KXtyZXR1cm4gaSh0aGlzLHQpfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxpPXIoMTI0KSxvPXIoNjApLHU9L1ZlcnNpb25cXC8xMFxcLlxcZCsoXFwuXFxkKyk/KCBNb2JpbGVcXC9cXHcrKT8gU2FmYXJpXFwvLy50ZXN0KG8pO2UoZS5QK2UuRip1LFwiU3RyaW5nXCIse3BhZFN0YXJ0OmZ1bmN0aW9uIHBhZFN0YXJ0KHQpe3JldHVybiBpKHRoaXMsdCwxPGFyZ3VtZW50cy5sZW5ndGg/YXJndW1lbnRzWzFdOkp0LCEwKX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksaT1yKDEyNCksbz1yKDYwKSx1PS9WZXJzaW9uXFwvMTBcXC5cXGQrKFxcLlxcZCspPyggTW9iaWxlXFwvXFx3Kyk/IFNhZmFyaVxcLy8udGVzdChvKTtlKGUuUCtlLkYqdSxcIlN0cmluZ1wiLHtwYWRFbmQ6ZnVuY3Rpb24gcGFkRW5kKHQpe3JldHVybiBpKHRoaXMsdCwxPGFyZ3VtZW50cy5sZW5ndGg/YXJndW1lbnRzWzFdOkp0LCExKX19KX0sZnVuY3Rpb24odCxuLHIpe3IoNDUpKFwidHJpbUxlZnRcIixmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24gdHJpbUxlZnQoKXtyZXR1cm4gdCh0aGlzLDEpfX0sXCJ0cmltU3RhcnRcIil9LGZ1bmN0aW9uKHQsbixyKXtyKDQ1KShcInRyaW1SaWdodFwiLGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbiB0cmltUmlnaHQoKXtyZXR1cm4gdCh0aGlzLDIpfX0sXCJ0cmltRW5kXCIpfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxpPXIoMjMpLG89cig2KSx1PXIoNTYpLGM9cig1MCksYT1SZWdFeHAucHJvdG90eXBlLGY9ZnVuY3Rpb24odCxuKXt0aGlzLl9yPXQsdGhpcy5fcz1ufTtyKDgwKShmLFwiUmVnRXhwIFN0cmluZ1wiLGZ1bmN0aW9uIG5leHQoKXt2YXIgdD10aGlzLl9yLmV4ZWModGhpcy5fcyk7cmV0dXJue3ZhbHVlOnQsZG9uZTpudWxsPT09dH19KSxlKGUuUCxcIlN0cmluZ1wiLHttYXRjaEFsbDpmdW5jdGlvbiBtYXRjaEFsbCh0KXtpZihpKHRoaXMpLCF1KHQpKXRocm93IFR5cGVFcnJvcih0K1wiIGlzIG5vdCBhIHJlZ2V4cCFcIik7dmFyIG49U3RyaW5nKHRoaXMpLHI9XCJmbGFnc1wiaW4gYT9TdHJpbmcodC5mbGFncyk6Yy5jYWxsKHQpLGU9bmV3IFJlZ0V4cCh0LnNvdXJjZSx+ci5pbmRleE9mKFwiZ1wiKT9yOlwiZ1wiK3IpO3JldHVybiBlLmxhc3RJbmRleD1vKHQubGFzdEluZGV4KSxuZXcgZihlLG4pfX0pfSxmdW5jdGlvbih0LG4scil7cig2NykoXCJhc3luY0l0ZXJhdG9yXCIpfSxmdW5jdGlvbih0LG4scil7cig2NykoXCJvYnNlcnZhYmxlXCIpfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxhPXIoMTIxKSxmPXIoMTUpLHM9cigxNiksbD1yKDgyKTtlKGUuUyxcIk9iamVjdFwiLHtnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOmZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnModCl7Zm9yKHZhciBuLHIsZT1mKHQpLGk9cy5mLG89YShlKSx1PXt9LGM9MDtjPG8ubGVuZ3RoOykocj1pKGUsbj1vW2MrK10pKSE9PUp0JiZsKHUsbixyKTtyZXR1cm4gdX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksaT1yKDEyNSkoITEpO2UoZS5TLFwiT2JqZWN0XCIse3ZhbHVlczpmdW5jdGlvbiB2YWx1ZXModCl7cmV0dXJuIGkodCl9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGk9cigxMjUpKCEwKTtlKGUuUyxcIk9iamVjdFwiLHtlbnRyaWVzOmZ1bmN0aW9uIGVudHJpZXModCl7cmV0dXJuIGkodCl9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGk9cig5KSxvPXIoMTApLHU9cig4KTtyKDcpJiZlKGUuUCtyKDYzKSxcIk9iamVjdFwiLHtfX2RlZmluZUdldHRlcl9fOmZ1bmN0aW9uIF9fZGVmaW5lR2V0dGVyX18odCxuKXt1LmYoaSh0aGlzKSx0LHtnZXQ6byhuKSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxpPXIoOSksbz1yKDEwKSx1PXIoOCk7cig3KSYmZShlLlArcig2MyksXCJPYmplY3RcIix7X19kZWZpbmVTZXR0ZXJfXzpmdW5jdGlvbiBfX2RlZmluZVNldHRlcl9fKHQsbil7dS5mKGkodGhpcyksdCx7c2V0Om8obiksZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksaT1yKDkpLG89cigyMiksdT1yKDE3KSxjPXIoMTYpLmY7cig3KSYmZShlLlArcig2MyksXCJPYmplY3RcIix7X19sb29rdXBHZXR0ZXJfXzpmdW5jdGlvbiBfX2xvb2t1cEdldHRlcl9fKHQpe3ZhciBuLHI9aSh0aGlzKSxlPW8odCwhMCk7ZG97aWYobj1jKHIsZSkpcmV0dXJuIG4uZ2V0fXdoaWxlKHI9dShyKSl9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApLGk9cig5KSxvPXIoMjIpLHU9cigxNyksYz1yKDE2KS5mO3IoNykmJmUoZS5QK3IoNjMpLFwiT2JqZWN0XCIse19fbG9va3VwU2V0dGVyX186ZnVuY3Rpb24gX19sb29rdXBTZXR0ZXJfXyh0KXt2YXIgbixyPWkodGhpcyksZT1vKHQsITApO2Rve2lmKG49YyhyLGUpKXJldHVybiBuLnNldH13aGlsZShyPXUocikpfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKTtlKGUuUCtlLlIsXCJNYXBcIix7dG9KU09OOnIoMTI2KShcIk1hcFwiKX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKTtlKGUuUCtlLlIsXCJTZXRcIix7dG9KU09OOnIoMTI2KShcIlNldFwiKX0pfSxmdW5jdGlvbih0LG4scil7cig2NCkoXCJNYXBcIil9LGZ1bmN0aW9uKHQsbixyKXtyKDY0KShcIlNldFwiKX0sZnVuY3Rpb24odCxuLHIpe3IoNjQpKFwiV2Vha01hcFwiKX0sZnVuY3Rpb24odCxuLHIpe3IoNjQpKFwiV2Vha1NldFwiKX0sZnVuY3Rpb24odCxuLHIpe3IoNjUpKFwiTWFwXCIpfSxmdW5jdGlvbih0LG4scil7cig2NSkoXCJTZXRcIil9LGZ1bmN0aW9uKHQsbixyKXtyKDY1KShcIldlYWtNYXBcIil9LGZ1bmN0aW9uKHQsbixyKXtyKDY1KShcIldlYWtTZXRcIil9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApO2UoZS5HLHtnbG9iYWw6cigyKX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKTtlKGUuUyxcIlN5c3RlbVwiLHtnbG9iYWw6cigyKX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxpPXIoMTkpO2UoZS5TLFwiRXJyb3JcIix7aXNFcnJvcjpmdW5jdGlvbiBpc0Vycm9yKHQpe3JldHVyblwiRXJyb3JcIj09PWkodCl9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApO2UoZS5TLFwiTWF0aFwiLHtjbGFtcDpmdW5jdGlvbiBjbGFtcCh0LG4scil7cmV0dXJuIE1hdGgubWluKHIsTWF0aC5tYXgobix0KSl9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApO2UoZS5TLFwiTWF0aFwiLHtERUdfUEVSX1JBRDpNYXRoLlBJLzE4MH0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxpPTE4MC9NYXRoLlBJO2UoZS5TLFwiTWF0aFwiLHtkZWdyZWVzOmZ1bmN0aW9uIGRlZ3JlZXModCl7cmV0dXJuIHQqaX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksbz1yKDEyOCksdT1yKDEwNyk7ZShlLlMsXCJNYXRoXCIse2ZzY2FsZTpmdW5jdGlvbiBmc2NhbGUodCxuLHIsZSxpKXtyZXR1cm4gdShvKHQsbixyLGUsaSkpfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKTtlKGUuUyxcIk1hdGhcIix7aWFkZGg6ZnVuY3Rpb24gaWFkZGgodCxuLHIsZSl7dmFyIGk9dD4+PjAsbz1yPj4+MDtyZXR1cm4obj4+PjApKyhlPj4+MCkrKChpJm98KGl8bykmfihpK28+Pj4wKSk+Pj4zMSl8MH19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCk7ZShlLlMsXCJNYXRoXCIse2lzdWJoOmZ1bmN0aW9uIGlzdWJoKHQsbixyLGUpe3ZhciBpPXQ+Pj4wLG89cj4+PjA7cmV0dXJuKG4+Pj4wKS0oZT4+PjApLSgofmkmb3x+KGlebykmaS1vPj4+MCk+Pj4zMSl8MH19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCk7ZShlLlMsXCJNYXRoXCIse2ltdWxoOmZ1bmN0aW9uIGltdWxoKHQsbil7dmFyIHI9K3QsZT0rbixpPTY1NTM1JnIsbz02NTUzNSZlLHU9cj4+MTYsYz1lPj4xNixhPSh1Km8+Pj4wKSsoaSpvPj4+MTYpO3JldHVybiB1KmMrKGE+PjE2KSsoKGkqYz4+PjApKyg2NTUzNSZhKT4+MTYpfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKTtlKGUuUyxcIk1hdGhcIix7UkFEX1BFUl9ERUc6MTgwL01hdGguUEl9KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksaT1NYXRoLlBJLzE4MDtlKGUuUyxcIk1hdGhcIix7cmFkaWFuczpmdW5jdGlvbiByYWRpYW5zKHQpe3JldHVybiB0Kml9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDApO2UoZS5TLFwiTWF0aFwiLHtzY2FsZTpyKDEyOCl9KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCk7ZShlLlMsXCJNYXRoXCIse3VtdWxoOmZ1bmN0aW9uIHVtdWxoKHQsbil7dmFyIHI9K3QsZT0rbixpPTY1NTM1JnIsbz02NTUzNSZlLHU9cj4+PjE2LGM9ZT4+PjE2LGE9KHUqbz4+PjApKyhpKm8+Pj4xNik7cmV0dXJuIHUqYysoYT4+PjE2KSsoKGkqYz4+PjApKyg2NTUzNSZhKT4+PjE2KX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCk7ZShlLlMsXCJNYXRoXCIse3NpZ25iaXQ6ZnVuY3Rpb24gc2lnbmJpdCh0KXtyZXR1cm4odD0rdCkhPXQ/dDowPT10PzEvdD09SW5maW5pdHk6MDx0fX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxpPXIoMjYpLG89cigyKSx1PXIoNTEpLGM9cigxMTUpO2UoZS5QK2UuUixcIlByb21pc2VcIix7XCJmaW5hbGx5XCI6ZnVuY3Rpb24obil7dmFyIHI9dSh0aGlzLGkuUHJvbWlzZXx8by5Qcm9taXNlKSx0PVwiZnVuY3Rpb25cIj09dHlwZW9mIG47cmV0dXJuIHRoaXMudGhlbih0P2Z1bmN0aW9uKHQpe3JldHVybiBjKHIsbigpKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIHR9KX06bix0P2Z1bmN0aW9uKHQpe3JldHVybiBjKHIsbigpKS50aGVuKGZ1bmN0aW9uKCl7dGhyb3cgdH0pfTpuKX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksaT1yKDkxKSxvPXIoMTE0KTtlKGUuUyxcIlByb21pc2VcIix7XCJ0cnlcIjpmdW5jdGlvbih0KXt2YXIgbj1pLmYodGhpcykscj1vKHQpO3JldHVybihyLmU/bi5yZWplY3Q6bi5yZXNvbHZlKShyLnYpLG4ucHJvbWlzZX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMjgpLGk9cigxKSxvPWUua2V5LHU9ZS5zZXQ7ZS5leHAoe2RlZmluZU1ldGFkYXRhOmZ1bmN0aW9uIGRlZmluZU1ldGFkYXRhKHQsbixyLGUpe3UodCxuLGkociksbyhlKSl9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDI4KSxvPXIoMSksdT1lLmtleSxjPWUubWFwLGE9ZS5zdG9yZTtlLmV4cCh7ZGVsZXRlTWV0YWRhdGE6ZnVuY3Rpb24gZGVsZXRlTWV0YWRhdGEodCxuKXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPDM/SnQ6dShhcmd1bWVudHNbMl0pLGU9YyhvKG4pLHIsITEpO2lmKGU9PT1KdHx8IWVbXCJkZWxldGVcIl0odCkpcmV0dXJuITE7aWYoZS5zaXplKXJldHVybiEwO3ZhciBpPWEuZ2V0KG4pO3JldHVybiBpW1wiZGVsZXRlXCJdKHIpLCEhaS5zaXplfHxhW1wiZGVsZXRlXCJdKG4pfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyOCksaT1yKDEpLG89cigxNyksdT1lLmhhcyxjPWUuZ2V0LGE9ZS5rZXksZj1mdW5jdGlvbih0LG4scil7aWYodSh0LG4scikpcmV0dXJuIGModCxuLHIpO3ZhciBlPW8obik7cmV0dXJuIG51bGwhPT1lP2YodCxlLHIpOkp0fTtlLmV4cCh7Z2V0TWV0YWRhdGE6ZnVuY3Rpb24gZ2V0TWV0YWRhdGEodCxuKXtyZXR1cm4gZih0LGkobiksYXJndW1lbnRzLmxlbmd0aDwzP0p0OmEoYXJndW1lbnRzWzJdKSl9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgbz1yKDExOCksdT1yKDEyNyksZT1yKDI4KSxpPXIoMSksYz1yKDE3KSxhPWUua2V5cyxmPWUua2V5LHM9ZnVuY3Rpb24odCxuKXt2YXIgcj1hKHQsbiksZT1jKHQpO2lmKG51bGw9PT1lKXJldHVybiByO3ZhciBpPXMoZSxuKTtyZXR1cm4gaS5sZW5ndGg/ci5sZW5ndGg/dShuZXcgbyhyLmNvbmNhdChpKSkpOmk6cn07ZS5leHAoe2dldE1ldGFkYXRhS2V5czpmdW5jdGlvbiBnZXRNZXRhZGF0YUtleXModCl7cmV0dXJuIHMoaSh0KSxhcmd1bWVudHMubGVuZ3RoPDI/SnQ6Zihhcmd1bWVudHNbMV0pKX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMjgpLGk9cigxKSxvPWUuZ2V0LHU9ZS5rZXk7ZS5leHAoe2dldE93bk1ldGFkYXRhOmZ1bmN0aW9uIGdldE93bk1ldGFkYXRhKHQsbil7cmV0dXJuIG8odCxpKG4pLGFyZ3VtZW50cy5sZW5ndGg8Mz9KdDp1KGFyZ3VtZW50c1syXSkpfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyOCksaT1yKDEpLG89ZS5rZXlzLHU9ZS5rZXk7ZS5leHAoe2dldE93bk1ldGFkYXRhS2V5czpmdW5jdGlvbiBnZXRPd25NZXRhZGF0YUtleXModCl7cmV0dXJuIG8oaSh0KSxhcmd1bWVudHMubGVuZ3RoPDI/SnQ6dShhcmd1bWVudHNbMV0pKX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMjgpLGk9cigxKSxvPXIoMTcpLHU9ZS5oYXMsYz1lLmtleSxhPWZ1bmN0aW9uKHQsbixyKXtpZih1KHQsbixyKSlyZXR1cm4hMDt2YXIgZT1vKG4pO3JldHVybiBudWxsIT09ZSYmYSh0LGUscil9O2UuZXhwKHtoYXNNZXRhZGF0YTpmdW5jdGlvbiBoYXNNZXRhZGF0YSh0LG4pe3JldHVybiBhKHQsaShuKSxhcmd1bWVudHMubGVuZ3RoPDM/SnQ6Yyhhcmd1bWVudHNbMl0pKX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMjgpLGk9cigxKSxvPWUuaGFzLHU9ZS5rZXk7ZS5leHAoe2hhc093bk1ldGFkYXRhOmZ1bmN0aW9uIGhhc093bk1ldGFkYXRhKHQsbil7cmV0dXJuIG8odCxpKG4pLGFyZ3VtZW50cy5sZW5ndGg8Mz9KdDp1KGFyZ3VtZW50c1syXSkpfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyOCksaT1yKDEpLG89cigxMCksdT1lLmtleSxjPWUuc2V0O2UuZXhwKHttZXRhZGF0YTpmdW5jdGlvbiBtZXRhZGF0YShyLGUpe3JldHVybiBmdW5jdGlvbiBkZWNvcmF0b3IodCxuKXtjKHIsZSwobiE9PUp0P2k6bykodCksdShuKSl9fX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxpPXIoOTApKCksbz1yKDIpLnByb2Nlc3MsdT1cInByb2Nlc3NcIj09cigxOSkobyk7ZShlLkcse2FzYXA6ZnVuY3Rpb24gYXNhcCh0KXt2YXIgbj11JiZvLmRvbWFpbjtpKG4/bi5iaW5kKHQpOnQpfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigwKSxvPXIoMiksdT1yKDI2KSxpPXIoOTApKCksYz1yKDUpKFwib2JzZXJ2YWJsZVwiKSxhPXIoMTApLGY9cigxKSxzPXIoMzkpLGw9cig0MSksaD1yKDExKSxwPXIoNDApLHY9cC5SRVRVUk4sZz1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09dD9KdDphKHQpfSx5PWZ1bmN0aW9uKHQpe3ZhciBuPXQuX2M7biYmKHQuX2M9SnQsbigpKX0sZD1mdW5jdGlvbih0KXtyZXR1cm4gdC5fbz09PUp0fSxiPWZ1bmN0aW9uKHQpe2QodCl8fCh0Ll9vPUp0LHkodCkpfSxfPWZ1bmN0aW9uKHQsbil7Zih0KSx0aGlzLl9jPUp0LHRoaXMuX289dCx0PW5ldyBTKHRoaXMpO3RyeXt2YXIgcj1uKHQpLGU9cjtudWxsIT1yJiYoXCJmdW5jdGlvblwiPT10eXBlb2Ygci51bnN1YnNjcmliZT9yPWZ1bmN0aW9uKCl7ZS51bnN1YnNjcmliZSgpfTphKHIpLHRoaXMuX2M9cil9Y2F0Y2goaSl7cmV0dXJuIHZvaWQgdC5lcnJvcihpKX1kKHRoaXMpJiZ5KHRoaXMpfTtfLnByb3RvdHlwZT1sKHt9LHt1bnN1YnNjcmliZTpmdW5jdGlvbiB1bnN1YnNjcmliZSgpe2IodGhpcyl9fSk7dmFyIFM9ZnVuY3Rpb24odCl7dGhpcy5fcz10fTtTLnByb3RvdHlwZT1sKHt9LHtuZXh0OmZ1bmN0aW9uIG5leHQodCl7dmFyIG49dGhpcy5fcztpZighZChuKSl7dmFyIHI9bi5fbzt0cnl7dmFyIGU9ZyhyLm5leHQpO2lmKGUpcmV0dXJuIGUuY2FsbChyLHQpfWNhdGNoKGkpe3RyeXtiKG4pfWZpbmFsbHl7dGhyb3cgaX19fX0sZXJyb3I6ZnVuY3Rpb24gZXJyb3IodCl7dmFyIG49dGhpcy5fcztpZihkKG4pKXRocm93IHQ7dmFyIHI9bi5fbztuLl9vPUp0O3RyeXt2YXIgZT1nKHIuZXJyb3IpO2lmKCFlKXRocm93IHQ7dD1lLmNhbGwocix0KX1jYXRjaChpKXt0cnl7eShuKX1maW5hbGx5e3Rocm93IGl9fXJldHVybiB5KG4pLHR9LGNvbXBsZXRlOmZ1bmN0aW9uIGNvbXBsZXRlKHQpe3ZhciBuPXRoaXMuX3M7aWYoIWQobikpe3ZhciByPW4uX287bi5fbz1KdDt0cnl7dmFyIGU9ZyhyLmNvbXBsZXRlKTt0PWU/ZS5jYWxsKHIsdCk6SnR9Y2F0Y2goaSl7dHJ5e3kobil9ZmluYWxseXt0aHJvdyBpfX1yZXR1cm4geShuKSx0fX19KTt2YXIgeD1mdW5jdGlvbiBPYnNlcnZhYmxlKHQpe3ModGhpcyx4LFwiT2JzZXJ2YWJsZVwiLFwiX2ZcIikuX2Y9YSh0KX07bCh4LnByb3RvdHlwZSx7c3Vic2NyaWJlOmZ1bmN0aW9uIHN1YnNjcmliZSh0KXtyZXR1cm4gbmV3IF8odCx0aGlzLl9mKX0sZm9yRWFjaDpmdW5jdGlvbiBmb3JFYWNoKGkpe3ZhciBuPXRoaXM7cmV0dXJuIG5ldyh1LlByb21pc2V8fG8uUHJvbWlzZSkoZnVuY3Rpb24odCxyKXthKGkpO3ZhciBlPW4uc3Vic2NyaWJlKHtuZXh0OmZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4gaSh0KX1jYXRjaChuKXtyKG4pLGUudW5zdWJzY3JpYmUoKX19LGVycm9yOnIsY29tcGxldGU6dH0pfSl9fSksbCh4LHtmcm9tOmZ1bmN0aW9uIGZyb20oZSl7dmFyIHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcz90aGlzOngsbj1nKGYoZSlbY10pO2lmKG4pe3ZhciByPWYobi5jYWxsKGUpKTtyZXR1cm4gci5jb25zdHJ1Y3Rvcj09PXQ/cjpuZXcgdChmdW5jdGlvbih0KXtyZXR1cm4gci5zdWJzY3JpYmUodCl9KX1yZXR1cm4gbmV3IHQoZnVuY3Rpb24obil7dmFyIHI9ITE7cmV0dXJuIGkoZnVuY3Rpb24oKXtpZighcil7dHJ5e2lmKHAoZSwhMSxmdW5jdGlvbih0KXtpZihuLm5leHQodCkscilyZXR1cm4gdn0pPT09dilyZXR1cm59Y2F0Y2godCl7aWYocil0aHJvdyB0O3JldHVybiB2b2lkIG4uZXJyb3IodCl9bi5jb21wbGV0ZSgpfX0pLGZ1bmN0aW9uKCl7cj0hMH19KX0sb2Y6ZnVuY3Rpb24gb2YoKXtmb3IodmFyIHQ9MCxuPWFyZ3VtZW50cy5sZW5ndGgsZT1uZXcgQXJyYXkobik7dDxuOyllW3RdPWFyZ3VtZW50c1t0KytdO3JldHVybiBuZXcoXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcz90aGlzOngpKGZ1bmN0aW9uKG4pe3ZhciByPSExO3JldHVybiBpKGZ1bmN0aW9uKCl7aWYoIXIpe2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7Kyt0KWlmKG4ubmV4dChlW3RdKSxyKXJldHVybjtuLmNvbXBsZXRlKCl9fSksZnVuY3Rpb24oKXtyPSEwfX0pfX0pLGgoeC5wcm90b3R5cGUsYyxmdW5jdGlvbigpe3JldHVybiB0aGlzfSksZShlLkcse09ic2VydmFibGU6eH0pLHIoMzgpKFwiT2JzZXJ2YWJsZVwiKX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMCksaT1yKDg5KTtlKGUuRytlLkIse3NldEltbWVkaWF0ZTppLnNldCxjbGVhckltbWVkaWF0ZTppLmNsZWFyfSl9LGZ1bmN0aW9uKHQsbixyKXtmb3IodmFyIGU9cig4NiksaT1yKDM0KSxvPXIoMTIpLHU9cigyKSxjPXIoMTEpLGE9cig0NiksZj1yKDUpLHM9ZihcIml0ZXJhdG9yXCIpLGw9ZihcInRvU3RyaW5nVGFnXCIpLGg9YS5BcnJheSxwPXtDU1NSdWxlTGlzdDohMCxDU1NTdHlsZURlY2xhcmF0aW9uOiExLENTU1ZhbHVlTGlzdDohMSxDbGllbnRSZWN0TGlzdDohMSxET01SZWN0TGlzdDohMSxET01TdHJpbmdMaXN0OiExLERPTVRva2VuTGlzdDohMCxEYXRhVHJhbnNmZXJJdGVtTGlzdDohMSxGaWxlTGlzdDohMSxIVE1MQWxsQ29sbGVjdGlvbjohMSxIVE1MQ29sbGVjdGlvbjohMSxIVE1MRm9ybUVsZW1lbnQ6ITEsSFRNTFNlbGVjdEVsZW1lbnQ6ITEsTWVkaWFMaXN0OiEwLE1pbWVUeXBlQXJyYXk6ITEsTmFtZWROb2RlTWFwOiExLE5vZGVMaXN0OiEwLFBhaW50UmVxdWVzdExpc3Q6ITEsUGx1Z2luOiExLFBsdWdpbkFycmF5OiExLFNWR0xlbmd0aExpc3Q6ITEsU1ZHTnVtYmVyTGlzdDohMSxTVkdQYXRoU2VnTGlzdDohMSxTVkdQb2ludExpc3Q6ITEsU1ZHU3RyaW5nTGlzdDohMSxTVkdUcmFuc2Zvcm1MaXN0OiExLFNvdXJjZUJ1ZmZlckxpc3Q6ITEsU3R5bGVTaGVldExpc3Q6ITAsVGV4dFRyYWNrQ3VlTGlzdDohMSxUZXh0VHJhY2tMaXN0OiExLFRvdWNoTGlzdDohMX0sdj1pKHApLGc9MDtnPHYubGVuZ3RoO2crKyl7dmFyIHksZD12W2ddLGI9cFtkXSxfPXVbZF0sUz1fJiZfLnByb3RvdHlwZTtpZihTJiYoU1tzXXx8YyhTLHMsaCksU1tsXXx8YyhTLGwsZCksYVtkXT1oLGIpKWZvcih5IGluIGUpU1t5XXx8byhTLHksZVt5XSwhMCl9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyKSxpPXIoMCksbz1yKDYwKSx1PVtdLnNsaWNlLGM9L01TSUUgLlxcLi8udGVzdChvKSxhPWZ1bmN0aW9uKGkpe3JldHVybiBmdW5jdGlvbih0LG4pe3ZhciByPTI8YXJndW1lbnRzLmxlbmd0aCxlPSEhciYmdS5jYWxsKGFyZ3VtZW50cywyKTtyZXR1cm4gaShyP2Z1bmN0aW9uKCl7KFwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpGdW5jdGlvbih0KSkuYXBwbHkodGhpcyxlKX06dCxuKX19O2koaS5HK2kuQitpLkYqYyx7c2V0VGltZW91dDphKGUuc2V0VGltZW91dCksc2V0SW50ZXJ2YWw6YShlLnNldEludGVydmFsKX0pfV0pLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWU6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBlfSk6aS5jb3JlPWV9KDEsMSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaGltLm1pbi5qcy5tYXAiLCIvKlxuKiBTeXN0ZW1KUyAzLjEuMVxuKi9cbihmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGhhc1NlbGYgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgY29uc3QgZW52R2xvYmFsID0gaGFzU2VsZiA/IHNlbGYgOiBnbG9iYWw7XG5cbiAgbGV0IGJhc2VVcmw7XG4gIGlmICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgYmFzZVVybCA9IGxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVswXS5zcGxpdCgnPycpWzBdO1xuICAgIGNvbnN0IGxhc3RTZXBJbmRleCA9IGJhc2VVcmwubGFzdEluZGV4T2YoJy8nKTtcbiAgICBpZiAobGFzdFNlcEluZGV4ICE9PSAtMSlcbiAgICAgIGJhc2VVcmwgPSBiYXNlVXJsLnNsaWNlKDAsIGxhc3RTZXBJbmRleCArIDEpO1xuICB9XG5cbiAgY29uc3QgYmFja3NsYXNoUmVnRXggPSAvXFxcXC9nO1xuICBmdW5jdGlvbiByZXNvbHZlSWZOb3RQbGFpbk9yVXJsIChyZWxVcmwsIHBhcmVudFVybCkge1xuICAgIGlmIChyZWxVcmwuaW5kZXhPZignXFxcXCcpICE9PSAtMSlcbiAgICAgIHJlbFVybCA9IHJlbFVybC5yZXBsYWNlKGJhY2tzbGFzaFJlZ0V4LCAnLycpO1xuICAgIC8vIHByb3RvY29sLXJlbGF0aXZlXG4gICAgaWYgKHJlbFVybFswXSA9PT0gJy8nICYmIHJlbFVybFsxXSA9PT0gJy8nKSB7XG4gICAgICByZXR1cm4gcGFyZW50VXJsLnNsaWNlKDAsIHBhcmVudFVybC5pbmRleE9mKCc6JykgKyAxKSArIHJlbFVybDtcbiAgICB9XG4gICAgLy8gcmVsYXRpdmUtdXJsXG4gICAgZWxzZSBpZiAocmVsVXJsWzBdID09PSAnLicgJiYgKHJlbFVybFsxXSA9PT0gJy8nIHx8IHJlbFVybFsxXSA9PT0gJy4nICYmIChyZWxVcmxbMl0gPT09ICcvJyB8fCByZWxVcmwubGVuZ3RoID09PSAyICYmIChyZWxVcmwgKz0gJy8nKSkgfHxcbiAgICAgICAgcmVsVXJsLmxlbmd0aCA9PT0gMSAgJiYgKHJlbFVybCArPSAnLycpKSB8fFxuICAgICAgICByZWxVcmxbMF0gPT09ICcvJykge1xuICAgICAgY29uc3QgcGFyZW50UHJvdG9jb2wgPSBwYXJlbnRVcmwuc2xpY2UoMCwgcGFyZW50VXJsLmluZGV4T2YoJzonKSArIDEpO1xuICAgICAgLy8gRGlzYWJsZWQsIGJ1dCB0aGVzZSBjYXNlcyB3aWxsIGdpdmUgaW5jb25zaXN0ZW50IHJlc3VsdHMgZm9yIGRlZXAgYmFja3RyYWNraW5nXG4gICAgICAvL2lmIChwYXJlbnRVcmxbcGFyZW50UHJvdG9jb2wubGVuZ3RoXSAhPT0gJy8nKVxuICAgICAgLy8gIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlc29sdmUnKTtcbiAgICAgIC8vIHJlYWQgcGF0aG5hbWUgZnJvbSBwYXJlbnQgVVJMXG4gICAgICAvLyBwYXRobmFtZSB0YWtlbiB0byBiZSBwYXJ0IGFmdGVyIGxlYWRpbmcgXCIvXCJcbiAgICAgIGxldCBwYXRobmFtZTtcbiAgICAgIGlmIChwYXJlbnRVcmxbcGFyZW50UHJvdG9jb2wubGVuZ3RoICsgMV0gPT09ICcvJykge1xuICAgICAgICAvLyByZXNvbHZpbmcgdG8gYSA6Ly8gc28gd2UgbmVlZCB0byByZWFkIG91dCB0aGUgYXV0aCBhbmQgaG9zdFxuICAgICAgICBpZiAocGFyZW50UHJvdG9jb2wgIT09ICdmaWxlOicpIHtcbiAgICAgICAgICBwYXRobmFtZSA9IHBhcmVudFVybC5zbGljZShwYXJlbnRQcm90b2NvbC5sZW5ndGggKyAyKTtcbiAgICAgICAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnNsaWNlKHBhdGhuYW1lLmluZGV4T2YoJy8nKSArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHBhdGhuYW1lID0gcGFyZW50VXJsLnNsaWNlKDgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gcmVzb2x2aW5nIHRvIDovIHNvIHBhdGhuYW1lIGlzIHRoZSAvLi4uIHBhcnRcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJlbnRVcmwuc2xpY2UocGFyZW50UHJvdG9jb2wubGVuZ3RoICsgKHBhcmVudFVybFtwYXJlbnRQcm90b2NvbC5sZW5ndGhdID09PSAnLycpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlbFVybFswXSA9PT0gJy8nKVxuICAgICAgICByZXR1cm4gcGFyZW50VXJsLnNsaWNlKDAsIHBhcmVudFVybC5sZW5ndGggLSBwYXRobmFtZS5sZW5ndGggLSAxKSArIHJlbFVybDtcblxuICAgICAgLy8gam9pbiB0b2dldGhlciBhbmQgc3BsaXQgZm9yIHJlbW92YWwgb2YgLi4gYW5kIC4gc2VnbWVudHNcbiAgICAgIC8vIGxvb3BpbmcgdGhlIHN0cmluZyBpbnN0ZWFkIG9mIGFueXRoaW5nIGZhbmN5IGZvciBwZXJmIHJlYXNvbnNcbiAgICAgIC8vICcuLi8uLi8uLi8uLi8uLi96JyByZXNvbHZlZCB0byAneC95JyBpcyBqdXN0ICd6J1xuICAgICAgY29uc3Qgc2VnbWVudGVkID0gcGF0aG5hbWUuc2xpY2UoMCwgcGF0aG5hbWUubGFzdEluZGV4T2YoJy8nKSArIDEpICsgcmVsVXJsO1xuXG4gICAgICBjb25zdCBvdXRwdXQgPSBbXTtcbiAgICAgIGxldCBzZWdtZW50SW5kZXggPSAtMTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VnbWVudGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGJ1c3kgcmVhZGluZyBhIHNlZ21lbnQgLSBvbmx5IHRlcm1pbmF0ZSBvbiAnLydcbiAgICAgICAgaWYgKHNlZ21lbnRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBpZiAoc2VnbWVudGVkW2ldID09PSAnLycpIHtcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKHNlZ21lbnRlZC5zbGljZShzZWdtZW50SW5kZXgsIGkgKyAxKSk7XG4gICAgICAgICAgICBzZWdtZW50SW5kZXggPSAtMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBuZXcgc2VnbWVudCAtIGNoZWNrIGlmIGl0IGlzIHJlbGF0aXZlXG4gICAgICAgIGVsc2UgaWYgKHNlZ21lbnRlZFtpXSA9PT0gJy4nKSB7XG4gICAgICAgICAgLy8gLi4vIHNlZ21lbnRcbiAgICAgICAgICBpZiAoc2VnbWVudGVkW2kgKyAxXSA9PT0gJy4nICYmIChzZWdtZW50ZWRbaSArIDJdID09PSAnLycgfHwgaSArIDIgPT09IHNlZ21lbnRlZC5sZW5ndGgpKSB7XG4gICAgICAgICAgICBvdXRwdXQucG9wKCk7XG4gICAgICAgICAgICBpICs9IDI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIC4vIHNlZ21lbnRcbiAgICAgICAgICBlbHNlIGlmIChzZWdtZW50ZWRbaSArIDFdID09PSAnLycgfHwgaSArIDEgPT09IHNlZ21lbnRlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB0aGUgc3RhcnQgb2YgYSBuZXcgc2VnbWVudCBhcyBiZWxvd1xuICAgICAgICAgICAgc2VnbWVudEluZGV4ID0gaTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaXQgaXMgdGhlIHN0YXJ0IG9mIGEgbmV3IHNlZ21lbnRcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc2VnbWVudEluZGV4ID0gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gZmluaXNoIHJlYWRpbmcgb3V0IHRoZSBsYXN0IHNlZ21lbnRcbiAgICAgIGlmIChzZWdtZW50SW5kZXggIT09IC0xKVxuICAgICAgICBvdXRwdXQucHVzaChzZWdtZW50ZWQuc2xpY2Uoc2VnbWVudEluZGV4KSk7XG4gICAgICByZXR1cm4gcGFyZW50VXJsLnNsaWNlKDAsIHBhcmVudFVybC5sZW5ndGggLSBwYXRobmFtZS5sZW5ndGgpICsgb3V0cHV0LmpvaW4oJycpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIEltcG9ydCBtYXBzIGltcGxlbWVudGF0aW9uXG4gICAqIFxuICAgKiBUbyBtYWtlIGxvb2t1cHMgZmFzdCB3ZSBwcmUtcmVzb2x2ZSB0aGUgZW50aXJlIGltcG9ydCBtYXBcbiAgICogYW5kIHRoZW4gbWF0Y2ggYmFzZWQgb24gYmFja3RyYWNrZWQgaGFzaCBsb29rdXBzXG4gICAqIFxuICAgKi9cblxuICBmdW5jdGlvbiByZXNvbHZlVXJsIChyZWxVcmwsIHBhcmVudFVybCkge1xuICAgIHJldHVybiByZXNvbHZlSWZOb3RQbGFpbk9yVXJsKHJlbFVybCwgcGFyZW50VXJsKSB8fFxuICAgICAgICByZWxVcmwuaW5kZXhPZignOicpICE9PSAtMSAmJiByZWxVcmwgfHxcbiAgICAgICAgcmVzb2x2ZUlmTm90UGxhaW5PclVybCgnLi8nICsgcmVsVXJsLCBwYXJlbnRVcmwpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZVBhY2thZ2VzKHBrZ3MsIGJhc2VVcmwpIHtcbiAgICB2YXIgb3V0UGtncyA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcGtncykge1xuICAgICAgdmFyIHZhbHVlID0gcGtnc1twXTtcbiAgICAgIC8vIFRPRE8gcGFja2FnZSBmYWxsYmFjayBzdXBwb3J0XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJylcbiAgICAgICAgY29udGludWU7XG4gICAgICBvdXRQa2dzW3Jlc29sdmVJZk5vdFBsYWluT3JVcmwocCwgYmFzZVVybCkgfHwgcF0gPSByZXNvbHZlVXJsKHZhbHVlLCBiYXNlVXJsKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dFBrZ3M7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUltcG9ydE1hcCAoanNvbiwgYmFzZVVybCkge1xuICAgIGNvbnN0IGltcG9ydHMgPSByZXNvbHZlUGFja2FnZXMoanNvbi5pbXBvcnRzLCBiYXNlVXJsKSB8fCB7fTtcbiAgICBjb25zdCBzY29wZXMgPSB7fTtcbiAgICBpZiAoanNvbi5zY29wZXMpIHtcbiAgICAgIGZvciAobGV0IHNjb3BlTmFtZSBpbiBqc29uLnNjb3Blcykge1xuICAgICAgICBjb25zdCBzY29wZSA9IGpzb24uc2NvcGVzW3Njb3BlTmFtZV07XG4gICAgICAgIGxldCByZXNvbHZlZFNjb3BlTmFtZSA9IHJlc29sdmVVcmwoc2NvcGVOYW1lLCBiYXNlVXJsKTtcbiAgICAgICAgaWYgKHJlc29sdmVkU2NvcGVOYW1lW3Jlc29sdmVkU2NvcGVOYW1lLmxlbmd0aCAtIDFdICE9PSAnLycpXG4gICAgICAgICAgcmVzb2x2ZWRTY29wZU5hbWUgKz0gJy8nO1xuICAgICAgICBzY29wZXNbcmVzb2x2ZWRTY29wZU5hbWVdID0gcmVzb2x2ZVBhY2thZ2VzKHNjb3BlLCByZXNvbHZlZFNjb3BlTmFtZSkgfHwge307XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaW1wb3J0czogaW1wb3J0cywgc2NvcGVzOiBzY29wZXMgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1hdGNoIChwYXRoLCBtYXRjaE9iaikge1xuICAgIGlmIChtYXRjaE9ialtwYXRoXSlcbiAgICAgIHJldHVybiBwYXRoO1xuICAgIGxldCBzZXBJbmRleCA9IHBhdGgubGVuZ3RoO1xuICAgIGRvIHtcbiAgICAgIGNvbnN0IHNlZ21lbnQgPSBwYXRoLnNsaWNlKDAsIHNlcEluZGV4ICsgMSk7XG4gICAgICBpZiAoc2VnbWVudCBpbiBtYXRjaE9iailcbiAgICAgICAgcmV0dXJuIHNlZ21lbnQ7XG4gICAgfSB3aGlsZSAoKHNlcEluZGV4ID0gcGF0aC5sYXN0SW5kZXhPZignLycsIHNlcEluZGV4IC0gMSkpICE9PSAtMSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5UGFja2FnZXMgKGlkLCBwYWNrYWdlcykge1xuICAgIGNvbnN0IHBrZ05hbWUgPSBnZXRNYXRjaChpZCwgcGFja2FnZXMpO1xuICAgIGlmIChwa2dOYW1lKSB7XG4gICAgICBjb25zdCBwa2cgPSBwYWNrYWdlc1twa2dOYW1lXTtcbiAgICAgIGlmIChwa2cgPT09IG51bGwpXG5cbiAgICAgIGlmIChpZC5sZW5ndGggPiBwa2dOYW1lLmxlbmd0aCAmJiBwa2dbcGtnLmxlbmd0aCAtIDFdICE9PSAnLycpXG4gICAgICAgIGNvbnNvbGUud2FybihcIkludmFsaWQgcGFja2FnZSB0YXJnZXQgXCIgKyBwa2cgKyBcIiBmb3IgJ1wiICsgcGtnTmFtZSArIFwiJyBzaG91bGQgaGF2ZSBhIHRyYWlsaW5nICcvJy5cIik7XG4gICAgICByZXR1cm4gcGtnICsgaWQuc2xpY2UocGtnTmFtZS5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc29sdmVJbXBvcnRNYXAgKGlkLCBwYXJlbnRVcmwsIGltcG9ydE1hcCkge1xuICAgIGNvbnN0IHVybFJlc29sdmVkID0gcmVzb2x2ZUlmTm90UGxhaW5PclVybChpZCwgcGFyZW50VXJsKSB8fCBpZC5pbmRleE9mKCc6JykgIT09IC0xICYmIGlkO1xuICAgIGlmICh1cmxSZXNvbHZlZClcbiAgICAgIGlkID0gdXJsUmVzb2x2ZWQ7XG4gICAgY29uc3Qgc2NvcGVOYW1lID0gZ2V0TWF0Y2gocGFyZW50VXJsLCBpbXBvcnRNYXAuc2NvcGVzKTtcbiAgICBpZiAoc2NvcGVOYW1lKSB7XG4gICAgICBjb25zdCBzY29wZVBhY2thZ2VzID0gaW1wb3J0TWFwLnNjb3Blc1tzY29wZU5hbWVdO1xuICAgICAgY29uc3QgcGFja2FnZVJlc29sdXRpb24gPSBhcHBseVBhY2thZ2VzKGlkLCBzY29wZVBhY2thZ2VzKTtcbiAgICAgIGlmIChwYWNrYWdlUmVzb2x1dGlvbilcbiAgICAgICAgcmV0dXJuIHBhY2thZ2VSZXNvbHV0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gYXBwbHlQYWNrYWdlcyhpZCwgaW1wb3J0TWFwLmltcG9ydHMpIHx8IHVybFJlc29sdmVkIHx8IHRocm93QmFyZShpZCwgcGFyZW50VXJsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRocm93QmFyZSAoaWQsIHBhcmVudFVybCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHJlc29sdmUgYmFyZSBzcGVjaWZpZXIgXCInICsgaWQgKyAocGFyZW50VXJsID8gJ1wiIGZyb20gJyArIHBhcmVudFVybCA6ICdcIicpKTtcbiAgfVxuXG4gIC8qXG4gICAqIFN5c3RlbUpTIENvcmVcbiAgICogXG4gICAqIFByb3ZpZGVzXG4gICAqIC0gU3lzdGVtLmltcG9ydFxuICAgKiAtIFN5c3RlbS5yZWdpc3RlciBzdXBwb3J0IGZvclxuICAgKiAgICAgbGl2ZSBiaW5kaW5ncywgZnVuY3Rpb24gaG9pc3RpbmcgdGhyb3VnaCBjaXJjdWxhciByZWZlcmVuY2VzLFxuICAgKiAgICAgcmVleHBvcnRzLCBkeW5hbWljIGltcG9ydCwgaW1wb3J0Lm1ldGEudXJsLCB0b3AtbGV2ZWwgYXdhaXRcbiAgICogLSBTeXN0ZW0uZ2V0UmVnaXN0ZXIgdG8gZ2V0IHRoZSByZWdpc3RyYXRpb25cbiAgICogLSBTeW1ib2wudG9TdHJpbmdUYWcgc3VwcG9ydCBpbiBNb2R1bGUgb2JqZWN0c1xuICAgKiAtIEhvb2thYmxlIFN5c3RlbS5jcmVhdGVDb250ZXh0IHRvIGN1c3RvbWl6ZSBpbXBvcnQubWV0YVxuICAgKiAtIFN5c3RlbS5vbmxvYWQoaWQsIGVycj8pIGhhbmRsZXIgZm9yIHRyYWNpbmcgLyBob3QtcmVsb2FkaW5nXG4gICAqIFxuICAgKiBDb3JlIGNvbWVzIHdpdGggbm8gU3lzdGVtLnByb3RvdHlwZS5yZXNvbHZlIG9yXG4gICAqIFN5c3RlbS5wcm90b3R5cGUuaW5zdGFudGlhdGUgaW1wbGVtZW50YXRpb25zXG4gICAqL1xuXG4gIGNvbnN0IGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnO1xuICBjb25zdCB0b1N0cmluZ1RhZyA9IGhhc1N5bWJvbCAmJiBTeW1ib2wudG9TdHJpbmdUYWc7XG4gIGNvbnN0IFJFR0lTVFJZID0gaGFzU3ltYm9sID8gU3ltYm9sKCkgOiAnQCc7XG5cbiAgZnVuY3Rpb24gU3lzdGVtSlMgKCkge1xuICAgIHRoaXNbUkVHSVNUUlldID0ge307XG4gIH1cblxuICBjb25zdCBzeXN0ZW1KU1Byb3RvdHlwZSA9IFN5c3RlbUpTLnByb3RvdHlwZTtcbiAgc3lzdGVtSlNQcm90b3R5cGUuaW1wb3J0ID0gZnVuY3Rpb24gKGlkLCBwYXJlbnRVcmwpIHtcbiAgICBjb25zdCBsb2FkZXIgPSB0aGlzO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobG9hZGVyLnJlc29sdmUoaWQsIHBhcmVudFVybCkpXG4gICAgLnRoZW4oZnVuY3Rpb24gKGlkKSB7XG4gICAgICBjb25zdCBsb2FkID0gZ2V0T3JDcmVhdGVMb2FkKGxvYWRlciwgaWQpO1xuICAgICAgcmV0dXJuIGxvYWQuQyB8fCB0b3BMZXZlbExvYWQobG9hZGVyLCBsb2FkKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBIb29rYWJsZSBjcmVhdGVDb250ZXh0IGZ1bmN0aW9uIC0+IGFsbG93aW5nIGVnIGN1c3RvbSBpbXBvcnQgbWV0YVxuICBzeXN0ZW1KU1Byb3RvdHlwZS5jcmVhdGVDb250ZXh0ID0gZnVuY3Rpb24gKHBhcmVudElkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybDogcGFyZW50SWRcbiAgICB9O1xuICB9O1xuXG4gIC8vIG9uTG9hZChpZCwgZXJyKSBwcm92aWRlZCBmb3IgdHJhY2luZyAvIGhvdC1yZWxvYWRpbmdcbiAgc3lzdGVtSlNQcm90b3R5cGUub25sb2FkID0gZnVuY3Rpb24gKCkge307XG5cbiAgbGV0IGxhc3RSZWdpc3RlcjtcbiAgc3lzdGVtSlNQcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAoZGVwcywgZGVjbGFyZSkge1xuICAgIGxhc3RSZWdpc3RlciA9IFtkZXBzLCBkZWNsYXJlXTtcbiAgfTtcblxuICAvKlxuICAgKiBnZXRSZWdpc3RlciBwcm92aWRlcyB0aGUgbGFzdCBhbm9ueW1vdXMgU3lzdGVtLnJlZ2lzdGVyIGNhbGxcbiAgICovXG4gIHN5c3RlbUpTUHJvdG90eXBlLmdldFJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IF9sYXN0UmVnaXN0ZXIgPSBsYXN0UmVnaXN0ZXI7XG4gICAgbGFzdFJlZ2lzdGVyID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBfbGFzdFJlZ2lzdGVyO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldE9yQ3JlYXRlTG9hZCAobG9hZGVyLCBpZCwgZmlyc3RQYXJlbnRVcmwpIHtcbiAgICBsZXQgbG9hZCA9IGxvYWRlcltSRUdJU1RSWV1baWRdO1xuICAgIGlmIChsb2FkKVxuICAgICAgcmV0dXJuIGxvYWQ7XG5cbiAgICBjb25zdCBpbXBvcnRlclNldHRlcnMgPSBbXTtcbiAgICBjb25zdCBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgaWYgKHRvU3RyaW5nVGFnKVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCB0b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gICAgXG4gICAgbGV0IGluc3RhbnRpYXRlUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpXG4gICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGxvYWRlci5pbnN0YW50aWF0ZShpZCwgZmlyc3RQYXJlbnRVcmwpO1xuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbikge1xuICAgICAgaWYgKCFyZWdpc3RyYXRpb24pXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTW9kdWxlICcgKyBpZCArICcgZGlkIG5vdCBpbnN0YW50aWF0ZScpO1xuICAgICAgZnVuY3Rpb24gX2V4cG9ydCAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgLy8gbm90ZSBpZiB3ZSBoYXZlIGhvaXN0ZWQgZXhwb3J0cyAoaW5jbHVkaW5nIHJlZXhwb3J0cylcbiAgICAgICAgbG9hZC5oID0gdHJ1ZTtcbiAgICAgICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGlmICghKG5hbWUgaW4gbnMpIHx8IG5zW25hbWVdICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgbnNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBwIGluIG5hbWUpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IG5hbWVbcF07XG4gICAgICAgICAgICBpZiAoIShwIGluIG5zKSB8fCBuc1twXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgbnNbcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VkKVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1wb3J0ZXJTZXR0ZXJzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgaW1wb3J0ZXJTZXR0ZXJzW2ldKG5zKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgICAgY29uc3QgZGVjbGFyZWQgPSByZWdpc3RyYXRpb25bMV0oX2V4cG9ydCwgcmVnaXN0cmF0aW9uWzFdLmxlbmd0aCA9PT0gMiA/IHtcbiAgICAgICAgaW1wb3J0OiBmdW5jdGlvbiAoaW1wb3J0SWQpIHtcbiAgICAgICAgICByZXR1cm4gbG9hZGVyLmltcG9ydChpbXBvcnRJZCwgaWQpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRhOiBsb2FkZXIuY3JlYXRlQ29udGV4dChpZClcbiAgICAgIH0gOiB1bmRlZmluZWQpO1xuICAgICAgbG9hZC5lID0gZGVjbGFyZWQuZXhlY3V0ZSB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICAgIHJldHVybiBbcmVnaXN0cmF0aW9uWzBdLCBkZWNsYXJlZC5zZXR0ZXJzIHx8IFtdXTtcbiAgICB9KTtcblxuICAgIGluc3RhbnRpYXRlUHJvbWlzZSA9IGluc3RhbnRpYXRlUHJvbWlzZS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGxvYWRlci5vbmxvYWQobG9hZC5pZCwgZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSk7XG5cbiAgICBjb25zdCBsaW5rUHJvbWlzZSA9IGluc3RhbnRpYXRlUHJvbWlzZVxuICAgIC50aGVuKGZ1bmN0aW9uIChpbnN0YW50aWF0aW9uKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoaW5zdGFudGlhdGlvblswXS5tYXAoZnVuY3Rpb24gKGRlcCwgaSkge1xuICAgICAgICBjb25zdCBzZXR0ZXIgPSBpbnN0YW50aWF0aW9uWzFdW2ldO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGxvYWRlci5yZXNvbHZlKGRlcCwgaWQpKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZGVwSWQpIHtcbiAgICAgICAgICBjb25zdCBkZXBMb2FkID0gZ2V0T3JDcmVhdGVMb2FkKGxvYWRlciwgZGVwSWQsIGlkKTtcbiAgICAgICAgICAvLyBkZXBMb2FkLkkgbWF5IGJlIHVuZGVmaW5lZCBmb3IgYWxyZWFkeS1ldmFsdWF0ZWRcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRlcExvYWQuSSlcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgICAgICAgIGRlcExvYWQuaS5wdXNoKHNldHRlcik7XG4gICAgICAgICAgICAgIC8vIG9ubHkgcnVuIGVhcmx5IHNldHRlcnMgd2hlbiB0aGVyZSBhcmUgaG9pc3RlZCBleHBvcnRzIG9mIHRoYXQgbW9kdWxlXG4gICAgICAgICAgICAgIC8vIHRoZSB0aW1pbmcgd29ya3MgaGVyZSBhcyBwZW5kaW5nIGhvaXN0ZWQgZXhwb3J0IGNhbGxzIHdpbGwgdHJpZ2dlciB0aHJvdWdoIGltcG9ydGVyU2V0dGVyc1xuICAgICAgICAgICAgICBpZiAoZGVwTG9hZC5oIHx8ICFkZXBMb2FkLkkpXG4gICAgICAgICAgICAgICAgc2V0dGVyKGRlcExvYWQubik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVwTG9hZDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgIH0pKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKGRlcExvYWRzKSB7XG4gICAgICAgIGxvYWQuZCA9IGRlcExvYWRzO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBsaW5rUHJvbWlzZS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBsb2FkLmUgPSBudWxsO1xuICAgICAgbG9hZC5lciA9IGVycjtcbiAgICB9KTtcblxuICAgIC8vIENhcHRpYWwgbGV0dGVyID0gYSBwcm9taXNlIGZ1bmN0aW9uXG4gICAgcmV0dXJuIGxvYWQgPSBsb2FkZXJbUkVHSVNUUlldW2lkXSA9IHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIC8vIGltcG9ydGVyU2V0dGVycywgdGhlIHNldHRlcnMgZnVuY3Rpb25zIHJlZ2lzdGVyZWQgdG8gdGhpcyBkZXBlbmRlbmN5XG4gICAgICAvLyB3ZSByZXRhaW4gdGhpcyB0byBhZGQgbW9yZSBsYXRlclxuICAgICAgaTogaW1wb3J0ZXJTZXR0ZXJzLFxuICAgICAgLy8gbW9kdWxlIG5hbWVzcGFjZSBvYmplY3RcbiAgICAgIG46IG5zLFxuXG4gICAgICAvLyBpbnN0YW50aWF0ZVxuICAgICAgSTogaW5zdGFudGlhdGVQcm9taXNlLFxuICAgICAgLy8gbGlua1xuICAgICAgTDogbGlua1Byb21pc2UsXG4gICAgICAvLyB3aGV0aGVyIGl0IGhhcyBob2lzdGVkIGV4cG9ydHNcbiAgICAgIGg6IGZhbHNlLFxuXG4gICAgICAvLyBPbiBpbnN0YW50aWF0ZSBjb21wbGV0aW9uIHdlIGhhdmUgcG9wdWxhdGVkOlxuICAgICAgLy8gZGVwZW5kZW5jeSBsb2FkIHJlY29yZHNcbiAgICAgIGQ6IHVuZGVmaW5lZCxcbiAgICAgIC8vIGV4ZWN1dGlvbiBmdW5jdGlvblxuICAgICAgLy8gc2V0IHRvIE5VTEwgaW1tZWRpYXRlbHkgYWZ0ZXIgZXhlY3V0aW9uIChvciBvbiBhbnkgZmFpbHVyZSkgdG8gaW5kaWNhdGUgZXhlY3V0aW9uIGhhcyBoYXBwZW5lZFxuICAgICAgLy8gaW4gc3VjaCBhIGNhc2UsIHBDIHNob3VsZCBiZSB1c2VkLCBhbmQgcExvLCBwTGkgd2lsbCBiZSBlbXB0aWVkXG4gICAgICBlOiB1bmRlZmluZWQsXG5cbiAgICAgIC8vIE9uIGV4ZWN1dGlvbiB3ZSBoYXZlIHBvcHVsYXRlZDpcbiAgICAgIC8vIHRoZSBleGVjdXRpb24gZXJyb3IgaWYgYW55XG4gICAgICBlcjogdW5kZWZpbmVkLFxuICAgICAgLy8gaW4gdGhlIGNhc2Ugb2YgVExBLCB0aGUgZXhlY3V0aW9uIHByb21pc2VcbiAgICAgIEU6IHVuZGVmaW5lZCxcblxuICAgICAgLy8gT24gZXhlY3V0aW9uLCBwTGksIHBMbywgZSBjbGVhcmVkXG5cbiAgICAgIC8vIFByb21pc2UgZm9yIHRvcC1sZXZlbCBjb21wbGV0aW9uXG4gICAgICBDOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gaW5zdGFudGlhdGVBbGwgKGxvYWRlciwgbG9hZCwgbG9hZGVkKSB7XG4gICAgaWYgKCFsb2FkZWRbbG9hZC5pZF0pIHtcbiAgICAgIGxvYWRlZFtsb2FkLmlkXSA9IHRydWU7XG4gICAgICAvLyBsb2FkLkwgbWF5IGJlIHVuZGVmaW5lZCBmb3IgYWxyZWFkeS1pbnN0YW50aWF0ZWRcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobG9hZC5MKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwobG9hZC5kLm1hcChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICAgICAgcmV0dXJuIGluc3RhbnRpYXRlQWxsKGxvYWRlciwgZGVwLCBsb2FkZWQpO1xuICAgICAgICB9KSk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvcExldmVsTG9hZCAobG9hZGVyLCBsb2FkKSB7XG4gICAgcmV0dXJuIGxvYWQuQyA9IGluc3RhbnRpYXRlQWxsKGxvYWRlciwgbG9hZCwge30pXG4gICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHBvc3RPcmRlckV4ZWMobG9hZGVyLCBsb2FkLCB7fSk7XG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbG9hZC5uO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gdGhlIGNsb3Nlc3Qgd2UgY2FuIGdldCB0byBjYWxsKHVuZGVmaW5lZClcbiAgY29uc3QgbnVsbENvbnRleHQgPSBPYmplY3QuZnJlZXplKE9iamVjdC5jcmVhdGUobnVsbCkpO1xuXG4gIC8vIHJldHVybnMgYSBwcm9taXNlIGlmIGFuZCBvbmx5IGlmIGEgdG9wLWxldmVsIGF3YWl0IHN1YmdyYXBoXG4gIC8vIHRocm93cyBvbiBzeW5jIGVycm9yc1xuICBmdW5jdGlvbiBwb3N0T3JkZXJFeGVjIChsb2FkZXIsIGxvYWQsIHNlZW4pIHtcbiAgICBpZiAoc2Vlbltsb2FkLmlkXSlcbiAgICAgIHJldHVybjtcbiAgICBzZWVuW2xvYWQuaWRdID0gdHJ1ZTtcblxuICAgIGlmICghbG9hZC5lKSB7XG4gICAgICBpZiAobG9hZC5lcilcbiAgICAgICAgdGhyb3cgbG9hZC5lcjtcbiAgICAgIGlmIChsb2FkLkUpXG4gICAgICAgIHJldHVybiBsb2FkLkU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZGVwcyBleGVjdXRlIGZpcnN0LCB1bmxlc3MgY2lyY3VsYXJcbiAgICBsZXQgZGVwTG9hZFByb21pc2VzO1xuICAgIGxvYWQuZC5mb3JFYWNoKGZ1bmN0aW9uIChkZXBMb2FkKSB7XG4gICAgICB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZGVwTG9hZFByb21pc2UgPSBwb3N0T3JkZXJFeGVjKGxvYWRlciwgZGVwTG9hZCwgc2Vlbik7XG4gICAgICAgICAgaWYgKGRlcExvYWRQcm9taXNlKVxuICAgICAgICAgICAgKGRlcExvYWRQcm9taXNlcyA9IGRlcExvYWRQcm9taXNlcyB8fCBbXSkucHVzaChkZXBMb2FkUHJvbWlzZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgIGxvYWRlci5vbmxvYWQobG9hZC5pZCwgZXJyKTtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZGVwTG9hZFByb21pc2VzKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoZGVwTG9hZFByb21pc2VzKVxuICAgICAgICAudGhlbihkb0V4ZWMpXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgbG9hZGVyLm9ubG9hZChsb2FkLmlkLCBlcnIpO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvRXhlYygpO1xuXG4gICAgZnVuY3Rpb24gZG9FeGVjICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBleGVjUHJvbWlzZSA9IGxvYWQuZS5jYWxsKG51bGxDb250ZXh0KTtcbiAgICAgICAgaWYgKGV4ZWNQcm9taXNlKSB7XG4gICAgICAgICAgZXhlY1Byb21pc2UgPSBleGVjUHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgbG9hZC5DID0gbG9hZC5uO1xuICAgICAgICAgICAgICBsb2FkLkUgPSBudWxsOyAvLyBpbmRpY2F0ZXMgY29tcGxldGlvblxuICAgICAgICAgICAgICBsb2FkZXIub25sb2FkKGxvYWQuaWQsIG51bGwpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICBsb2FkZXIub25sb2FkKGxvYWQuaWQsIGVycik7XG4gICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBsb2FkLkUgPSBsb2FkLkUgfHwgZXhlY1Byb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gKHNob3VsZCBiZSBhIHByb21pc2UsIGJ1dCBhIG1pbmlmeSBvcHRpbWl6YXRpb24gdG8gbGVhdmUgb3V0IFByb21pc2UucmVzb2x2ZSlcbiAgICAgICAgbG9hZC5DID0gbG9hZC5uO1xuICAgICAgICBsb2FkZXIub25sb2FkKGxvYWQuaWQsIG51bGwpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICBsb2FkZXIub25sb2FkKGxvYWQuaWQsIGVycik7XG4gICAgICAgIGxvYWQuZXIgPSBlcnI7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICAgIGZpbmFsbHkge1xuICAgICAgICBsb2FkLkwgPSBsb2FkLkkgPSB1bmRlZmluZWQ7XG4gICAgICAgIGxvYWQuZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZW52R2xvYmFsLlN5c3RlbSA9IG5ldyBTeXN0ZW1KUygpO1xuXG4gIC8qXG4gICAqIFN1cHBvcnRzIGxvYWRpbmcgU3lzdGVtLnJlZ2lzdGVyIHZpYSBzY3JpcHQgdGFnIGluamVjdGlvblxuICAgKi9cblxuICBsZXQgZXJyO1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGVyciA9IGUuZXJyb3I7XG4gICAgfSk7XG5cbiAgY29uc3Qgc3lzdGVtUmVnaXN0ZXIgPSBzeXN0ZW1KU1Byb3RvdHlwZS5yZWdpc3RlcjtcbiAgc3lzdGVtSlNQcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAoZGVwcywgZGVjbGFyZSkge1xuICAgIGVyciA9IHVuZGVmaW5lZDtcbiAgICBzeXN0ZW1SZWdpc3Rlci5jYWxsKHRoaXMsIGRlcHMsIGRlY2xhcmUpO1xuICB9O1xuXG4gIHN5c3RlbUpTUHJvdG90eXBlLmluc3RhbnRpYXRlID0gZnVuY3Rpb24gKHVybCwgZmlyc3RQYXJlbnRVcmwpIHtcbiAgICBjb25zdCBsb2FkZXIgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignRXJyb3IgbG9hZGluZyAnICsgdXJsICsgKGZpcnN0UGFyZW50VXJsID8gJyBmcm9tICcgKyBmaXJzdFBhcmVudFVybCA6ICcnKSkpO1xuICAgICAgfSk7XG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAvLyBOb3RlIFVSTCBub3JtYWxpemF0aW9uIGlzc3VlcyBhcmUgZ29pbmcgdG8gYmUgYSBjYXJlZnVsIGNvbmNlcm4gaGVyZVxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgcmV0dXJuIGVyciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGxvYWRlci5nZXRSZWdpc3RlcigpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzY3JpcHQuc3JjID0gdXJsO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qXG4gICAqIFN1cHBvcnRzIGxvYWRpbmcgU3lzdGVtLnJlZ2lzdGVyIGluIHdvcmtlcnNcbiAgICovXG5cbiAgaWYgKGhhc1NlbGYgJiYgdHlwZW9mIGltcG9ydFNjcmlwdHMgPT09ICdmdW5jdGlvbicpXG4gICAgc3lzdGVtSlNQcm90b3R5cGUuaW5zdGFudGlhdGUgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICBjb25zdCBsb2FkZXIgPSB0aGlzO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpbXBvcnRTY3JpcHRzKHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShsb2FkZXIuZ2V0UmVnaXN0ZXIoKSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gIC8qXG4gICAqIFN5c3RlbUpTIGdsb2JhbCBzY3JpcHQgbG9hZGluZyBzdXBwb3J0XG4gICAqIEV4dHJhIGZvciB0aGUgcy5qcyBidWlsZCBvbmx5XG4gICAqIChJbmNsdWRlZCBieSBkZWZhdWx0IGluIHN5c3RlbS5qcyBidWlsZClcbiAgICovXG4gIChmdW5jdGlvbiAoZ2xvYmFsKSB7XG5cbiAgY29uc3Qgc3lzdGVtSlNQcm90b3R5cGUgPSBTeXN0ZW0uY29uc3RydWN0b3IucHJvdG90eXBlO1xuXG4gIC8vIHNhZmFyaSB1bnByZWRpY3RhYmx5IGxpc3RzIHNvbWUgbmV3IGdsb2JhbHMgZmlyc3Qgb3Igc2Vjb25kIGluIG9iamVjdCBvcmRlclxuICBsZXQgZmlyc3RHbG9iYWxQcm9wLCBzZWNvbmRHbG9iYWxQcm9wLCBsYXN0R2xvYmFsUHJvcDtcbiAgZnVuY3Rpb24gZ2V0R2xvYmFsUHJvcCAoKSB7XG4gICAgbGV0IGNudCA9IDA7XG4gICAgbGV0IGxhc3RQcm9wO1xuICAgIGZvciAobGV0IHAgaW4gZ2xvYmFsKSB7XG4gICAgICBpZiAoIWdsb2JhbC5oYXNPd25Qcm9wZXJ0eShwKSlcbiAgICAgICAgY29udGludWU7XG4gICAgICBpZiAoY250ID09PSAwICYmIHAgIT09IGZpcnN0R2xvYmFsUHJvcCB8fCBjbnQgPT09IDEgJiYgcCAhPT0gc2Vjb25kR2xvYmFsUHJvcClcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgICBjbnQrKztcbiAgICAgIGxhc3RQcm9wID0gcDtcbiAgICB9XG4gICAgaWYgKGxhc3RQcm9wICE9PSBsYXN0R2xvYmFsUHJvcClcbiAgICAgIHJldHVybiBsYXN0UHJvcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdGVHbG9iYWxQcm9wcyAoKSB7XG4gICAgLy8gYWx0ZXJuYXRpdmVseSBPYmplY3Qua2V5cyhnbG9iYWwpLnBvcCgpXG4gICAgLy8gYnV0IHRoaXMgbWF5IGJlIGZhc3RlciAocGVuZGluZyBiZW5jaG1hcmtzKVxuICAgIGZpcnN0R2xvYmFsUHJvcCA9IHNlY29uZEdsb2JhbFByb3AgPSB1bmRlZmluZWQ7XG4gICAgZm9yIChsZXQgcCBpbiBnbG9iYWwpIHtcbiAgICAgIGlmICghZ2xvYmFsLmhhc093blByb3BlcnR5KHApKVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIGlmICghZmlyc3RHbG9iYWxQcm9wKVxuICAgICAgICBmaXJzdEdsb2JhbFByb3AgPSBwO1xuICAgICAgZWxzZSBpZiAoIXNlY29uZEdsb2JhbFByb3ApXG4gICAgICAgIHNlY29uZEdsb2JhbFByb3AgPSBwO1xuICAgICAgbGFzdEdsb2JhbFByb3AgPSBwO1xuICAgIH1cbiAgICByZXR1cm4gbGFzdEdsb2JhbFByb3A7XG4gIH1cblxuICBjb25zdCBpbXB0ID0gc3lzdGVtSlNQcm90b3R5cGUuaW1wb3J0O1xuICBzeXN0ZW1KU1Byb3RvdHlwZS5pbXBvcnQgPSBmdW5jdGlvbiAoaWQsIHBhcmVudFVybCkge1xuICAgIG5vdGVHbG9iYWxQcm9wcygpO1xuICAgIHJldHVybiBpbXB0LmNhbGwodGhpcywgaWQsIHBhcmVudFVybCk7XG4gIH07XG5cbiAgY29uc3QgZW1wdHlJbnN0YW50aWF0aW9uID0gW1tdLCBmdW5jdGlvbiAoKSB7IHJldHVybiB7fSB9XTtcblxuICBjb25zdCBnZXRSZWdpc3RlciA9IHN5c3RlbUpTUHJvdG90eXBlLmdldFJlZ2lzdGVyO1xuICBzeXN0ZW1KU1Byb3RvdHlwZS5nZXRSZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsYXN0UmVnaXN0ZXIgPSBnZXRSZWdpc3Rlci5jYWxsKHRoaXMpO1xuICAgIGlmIChsYXN0UmVnaXN0ZXIpXG4gICAgICByZXR1cm4gbGFzdFJlZ2lzdGVyO1xuICAgIFxuICAgIC8vIG5vIHJlZ2lzdHJhdGlvbiAtPiBhdHRlbXB0IGEgZ2xvYmFsIGRldGVjdGlvbiBhcyBkaWZmZXJlbmNlIGZyb20gc25hcHNob3RcbiAgICAvLyB3aGVuIG11bHRpcGxlIGdsb2JhbHMsIHdlIHRha2UgdGhlIGdsb2JhbCB2YWx1ZSB0byBiZSB0aGUgbGFzdCBkZWZpbmVkIG5ldyBnbG9iYWwgb2JqZWN0IHByb3BlcnR5XG4gICAgLy8gZm9yIHBlcmZvcm1hbmNlLCB0aGlzIHdpbGwgbm90IHN1cHBvcnQgbXVsdGktdmVyc2lvbiAvIGdsb2JhbCBjb2xsaXNpb25zIGFzIHByZXZpb3VzIFN5c3RlbUpTIHZlcnNpb25zIGRpZFxuICAgIC8vIG5vdGUgaW4gRWRnZSwgZGVsZXRpbmcgYW5kIHJlLWFkZGluZyBhIGdsb2JhbCBkb2VzIG5vdCBjaGFuZ2UgaXRzIG9yZGVyaW5nXG4gICAgY29uc3QgZ2xvYmFsUHJvcCA9IGdldEdsb2JhbFByb3AoKTtcbiAgICBpZiAoIWdsb2JhbFByb3ApXG4gICAgICByZXR1cm4gZW1wdHlJbnN0YW50aWF0aW9uO1xuICAgIFxuICAgIGxldCBnbG9iYWxFeHBvcnQ7XG4gICAgdHJ5IHtcbiAgICAgIGdsb2JhbEV4cG9ydCA9IGdsb2JhbFtnbG9iYWxQcm9wXTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBlbXB0eUluc3RhbnRpYXRpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIFtbXSwgZnVuY3Rpb24gKF9leHBvcnQpIHtcbiAgICAgIHJldHVybiB7IGV4ZWN1dGU6IGZ1bmN0aW9uICgpIHsgX2V4cG9ydCgnZGVmYXVsdCcsIGdsb2JhbEV4cG9ydCk7IH0gfTtcbiAgICB9XTtcbiAgfTtcblxuICB9KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogZ2xvYmFsKTtcblxuICAvKlxuICAgKiBMb2FkcyBXQVNNIGJhc2VkIG9uIGZpbGUgZXh0ZW5zaW9uIGRldGVjdGlvblxuICAgKiBBc3N1bWVzIHN1Y2Nlc3NpdmUgaW5zdGFudGlhdGUgd2lsbCBoYW5kbGUgb3RoZXIgZmlsZXNcbiAgICovXG4gIGNvbnN0IGluc3RhbnRpYXRlID0gc3lzdGVtSlNQcm90b3R5cGUuaW5zdGFudGlhdGU7XG4gIHN5c3RlbUpTUHJvdG90eXBlLmluc3RhbnRpYXRlID0gZnVuY3Rpb24gKHVybCwgcGFyZW50KSB7XG4gICAgaWYgKHVybC5zbGljZSgtNSkgIT09ICcud2FzbScpXG4gICAgICByZXR1cm4gaW5zdGFudGlhdGUuY2FsbCh0aGlzLCB1cmwsIHBhcmVudCk7XG4gICAgXG4gICAgcmV0dXJuIGZldGNoKHVybClcbiAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICBpZiAoIXJlcy5vaylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlcy5zdGF0dXMgKyAnICcgKyByZXMuc3RhdHVzVGV4dCArICcgJyArIHJlcy51cmwgKyAocGFyZW50ID8gJyBsb2FkaW5nIGZyb20gJyArIHBhcmVudCA6ICcnKSk7XG5cbiAgICAgIGlmIChXZWJBc3NlbWJseS5jb21waWxlU3RyZWFtaW5nKVxuICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuY29tcGlsZVN0cmVhbWluZyhyZXMpO1xuICAgICAgXG4gICAgICByZXR1cm4gcmVzLmFycmF5QnVmZmVyKClcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChidWYpIHtcbiAgICAgICAgcmV0dXJuIFdlYkFzc2VtYmx5LmNvbXBpbGUoYnVmKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgY29uc3QgZGVwcyA9IFtdO1xuICAgICAgY29uc3Qgc2V0dGVycyA9IFtdO1xuICAgICAgY29uc3QgaW1wb3J0T2JqID0ge307XG5cbiAgICAgIC8vIHdlIGNhbiBvbmx5IHNldCBpbXBvcnRzIGlmIHN1cHBvcnRlZCAoZWcgZWFybHkgU2FmYXJpIGRvZXNudCBzdXBwb3J0KVxuICAgICAgaWYgKFdlYkFzc2VtYmx5Lk1vZHVsZS5pbXBvcnRzKVxuICAgICAgICBXZWJBc3NlbWJseS5Nb2R1bGUuaW1wb3J0cyhtb2R1bGUpLmZvckVhY2goZnVuY3Rpb24gKGltcHQpIHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBpbXB0Lm1vZHVsZTtcbiAgICAgICAgICBzZXR0ZXJzLnB1c2goZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgIGltcG9ydE9ialtrZXldID0gbTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoZGVwcy5pbmRleE9mKGtleSkgPT09IC0xKVxuICAgICAgICAgICAgZGVwcy5wdXNoKGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gW2RlcHMsIGZ1bmN0aW9uIChfZXhwb3J0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc2V0dGVyczogc2V0dGVycyxcbiAgICAgICAgICBleGVjdXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUobW9kdWxlLCBpbXBvcnRPYmopXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgX2V4cG9ydChpbnN0YW5jZS5leHBvcnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1dO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qXG4gICAqIEltcG9ydCBtYXAgc3VwcG9ydCBmb3IgU3lzdGVtSlNcbiAgICogXG4gICAqIDxzY3JpcHQgdHlwZT1cInN5c3RlbWpzLWltcG9ydG1hcFwiPnt9PC9zY3JpcHQ+XG4gICAqIE9SXG4gICAqIDxzY3JpcHQgdHlwZT1cInN5c3RlbWpzLWltcG9ydG1hcFwiIHNyYz1wYWNrYWdlLmpzb24+PC9zY3JpcHQ+XG4gICAqIFxuICAgKiBPbmx5IHRob3NlIGltcG9ydCBtYXBzIGF2YWlsYWJsZSBhdCB0aGUgdGltZSBvZiBTeXN0ZW1KUyBpbml0aWFsaXphdGlvbiB3aWxsIGJlIGxvYWRlZFxuICAgKiBhbmQgdGhleSB3aWxsIGJlIGxvYWRlZCBpbiBET00gb3JkZXIuXG4gICAqIFxuICAgKiBUaGVyZSBpcyBubyBzdXBwb3J0IGZvciBkeW5hbWljIGltcG9ydCBtYXBzIGluamVjdGlvbiBjdXJyZW50bHkuXG4gICAqL1xuXG4gIGNvbnN0IGJhc2VNYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBiYXNlTWFwLmltcG9ydHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBiYXNlTWFwLnNjb3BlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGxldCBpbXBvcnRNYXBQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGJhc2VNYXApO1xuICBsZXQgYWNxdWlyaW5nSW1wb3J0TWFwcyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgaWYgKGFjcXVpcmluZ0ltcG9ydE1hcHMpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHRbdHlwZT1cInN5c3RlbWpzLWltcG9ydG1hcFwiXVtzcmNdJykuZm9yRWFjaChmdW5jdGlvbiAoc2NyaXB0KSB7XG4gICAgICBzY3JpcHQuX2ogPSBmZXRjaChzY3JpcHQuc3JjKS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VJbXBvcnRNYXAob3JpZ2luYWxNYXAsIG5ld01hcCkge1xuICAgIGZvciAobGV0IGkgaW4gbmV3TWFwLmltcG9ydHMpIHtcbiAgICAgIG9yaWdpbmFsTWFwLmltcG9ydHNbaV0gPSBuZXdNYXAuaW1wb3J0c1tpXTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSBpbiBuZXdNYXAuc2NvcGVzKSB7XG4gICAgICBvcmlnaW5hbE1hcC5zY29wZXNbaV0gPSBuZXdNYXAuc2NvcGVzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gb3JpZ2luYWxNYXA7XG4gIH1cblxuICBzeXN0ZW1KU1Byb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24gKGlkLCBwYXJlbnRVcmwpIHtcbiAgICBwYXJlbnRVcmwgPSBwYXJlbnRVcmwgfHwgYmFzZVVybDtcblxuICAgIGlmIChhY3F1aXJpbmdJbXBvcnRNYXBzKSB7XG4gICAgICBhY3F1aXJpbmdJbXBvcnRNYXBzID0gZmFsc2U7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHRbdHlwZT1cInN5c3RlbWpzLWltcG9ydG1hcFwiXScpLmZvckVhY2goZnVuY3Rpb24gKHNjcmlwdCkge1xuICAgICAgICBpbXBvcnRNYXBQcm9taXNlID0gaW1wb3J0TWFwUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChtYXApIHtcbiAgICAgICAgICByZXR1cm4gKHNjcmlwdC5faiB8fCBzY3JpcHQuc3JjICYmIGZldGNoKHNjcmlwdC5zcmMpLnRoZW4oZnVuY3Rpb24gKHJlc3ApIHtyZXR1cm4gcmVzcC5qc29uKCl9KSB8fCBQcm9taXNlLnJlc29sdmUoSlNPTi5wYXJzZShzY3JpcHQuaW5uZXJIVE1MKSkpXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgICAgIHJldHVybiBtZXJnZUltcG9ydE1hcChtYXAsIHBhcnNlSW1wb3J0TWFwKGpzb24sIHNjcmlwdC5zcmMgfHwgYmFzZVVybCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpbXBvcnRNYXBQcm9taXNlXG4gICAgLnRoZW4oZnVuY3Rpb24gKGltcG9ydE1hcCkge1xuICAgICAgcmV0dXJuIHJlc29sdmVJbXBvcnRNYXAoaWQsIHBhcmVudFVybCwgaW1wb3J0TWFwKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB0b1N0cmluZ1RhZyQxID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnO1xuXG4gIHN5c3RlbUpTUHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGNvbnN0IGxvYWQgPSB0aGlzW1JFR0lTVFJZXVtpZF07XG4gICAgaWYgKGxvYWQgJiYgbG9hZC5lID09PSBudWxsICYmICFsb2FkLkUpIHtcbiAgICAgIGlmIChsb2FkLmVyKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiBsb2FkLm47XG4gICAgfVxuICB9O1xuXG4gIHN5c3RlbUpTUHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChpZCwgbW9kdWxlKSB7XG4gICAgbGV0IG5zO1xuICAgIGlmICh0b1N0cmluZ1RhZyQxICYmIG1vZHVsZVt0b1N0cmluZ1RhZyQxXSA9PT0gJ01vZHVsZScpIHtcbiAgICAgIG5zID0gbW9kdWxlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG5zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG51bGwpLCBtb2R1bGUpO1xuICAgICAgaWYgKHRvU3RyaW5nVGFnJDEpXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgdG9TdHJpbmdUYWckMSwgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gICAgfVxuICAgIGNvbnN0IGRvbmUgPSBQcm9taXNlLnJlc29sdmUobnMpO1xuICAgIHRoaXMuZGVsZXRlKGlkKTtcbiAgICB0aGlzW1JFR0lTVFJZXVtpZF0gPSB7XG4gICAgICBpZDogaWQsXG4gICAgICBpOiBbXSxcbiAgICAgIG46IG5zLFxuICAgICAgSTogZG9uZSxcbiAgICAgIEw6IGRvbmUsXG4gICAgICBoOiBmYWxzZSxcbiAgICAgIGQ6IFtdLFxuICAgICAgZTogbnVsbCxcbiAgICAgIGVyOiB1bmRlZmluZWQsXG4gICAgICBFOiB1bmRlZmluZWQsXG4gICAgICBDOiBkb25lXG4gICAgfTtcbiAgICByZXR1cm4gbnM7XG4gIH07XG5cbiAgc3lzdGVtSlNQcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgY29uc3QgbG9hZCA9IHRoaXNbUkVHSVNUUlldW2lkXTtcbiAgICByZXR1cm4gbG9hZCAmJiBsb2FkLmUgPT09IG51bGwgJiYgIWxvYWQuRTtcbiAgfTtcblxuICAvLyBEZWxldGUgZnVuY3Rpb24gcHJvdmlkZWQgZm9yIGhvdC1yZWxvYWRpbmcgdXNlIGNhc2VzXG4gIHN5c3RlbUpTUHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGNvbnN0IGxvYWQgPSB0aGlzLmdldChpZCk7XG4gICAgaWYgKGxvYWQgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyByZW1vdmUgZnJvbSBpbXBvcnRlclNldHRlcnNcbiAgICAvLyAocmVsZWFzZSBmb3IgZ2MpXG4gICAgaWYgKGxvYWQgJiYgbG9hZC5kKVxuICAgICAgbG9hZC5kLmZvckVhY2goZnVuY3Rpb24gKGRlcExvYWQpIHtcbiAgICAgICAgY29uc3QgaW1wb3J0ZXJJbmRleCA9IGRlcExvYWQuaS5pbmRleE9mKGxvYWQpO1xuICAgICAgICBpZiAoaW1wb3J0ZXJJbmRleCAhPT0gLTEpXG4gICAgICAgICAgZGVwTG9hZC5pLnNwbGljZShpbXBvcnRlckluZGV4LCAxKTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBkZWxldGUgdGhpc1tSRUdJU1RSWV1baWRdO1xuICB9O1xuXG4gIGNvbnN0IGl0ZXJhdG9yID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLml0ZXJhdG9yO1xuXG4gIHN5c3RlbUpTUHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbG9hZGVyID0gdGhpcywga2V5cyA9IE9iamVjdC5rZXlzKGxvYWRlcltSRUdJU1RSWV0pO1xuICAgIGxldCBpbmRleCA9IDAsIG5zLCBrZXk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQgKCkge1xuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgKGtleSA9IGtleXNbaW5kZXgrK10pICE9PSB1bmRlZmluZWQgJiYgXG4gICAgICAgICAgKG5zID0gbG9hZGVyLmdldChrZXkpKSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZG9uZToga2V5ID09PSB1bmRlZmluZWQsXG4gICAgICAgICAgdmFsdWU6IGtleSAhPT0gdW5kZWZpbmVkICYmIFtrZXksIG5zXVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIFtpdGVyYXRvcl06IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9XG4gICAgfTtcbiAgfTtcblxufSgpKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8vIFByb3ZpZGUgYSBcIlN5c3RlbVwiIGdsb2JhbC5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHQvLyBNYWtlIHN1cmUgaW1wb3J0IGlzIG9ubHkgdXNlZCBhcyBcIlN5c3RlbS5pbXBvcnRcIlxuXHRpbXBvcnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlN5c3RlbS5pbXBvcnQgY2Fubm90IGJlIHVzZWQgaW5kaXJlY3RseVwiKTtcblx0fVxufTtcbiIsIi8qKlxuKiBAbGljZW5zZVxuKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbnZhciBab25lJDEgPSAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgIHZhciBwZXJmb3JtYW5jZSA9IGdsb2JhbFsncGVyZm9ybWFuY2UnXTtcbiAgICBmdW5jdGlvbiBtYXJrKG5hbWUpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UgJiYgcGVyZm9ybWFuY2VbJ21hcmsnXSAmJiBwZXJmb3JtYW5jZVsnbWFyayddKG5hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwZXJmb3JtYW5jZU1lYXN1cmUobmFtZSwgbGFiZWwpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UgJiYgcGVyZm9ybWFuY2VbJ21lYXN1cmUnXSAmJiBwZXJmb3JtYW5jZVsnbWVhc3VyZSddKG5hbWUsIGxhYmVsKTtcbiAgICB9XG4gICAgbWFyaygnWm9uZScpO1xuICAgIHZhciBjaGVja0R1cGxpY2F0ZSA9IGdsb2JhbFsoJ19fem9uZV9zeW1ib2xfX2ZvcmNlRHVwbGljYXRlWm9uZUNoZWNrJyldID09PSB0cnVlO1xuICAgIGlmIChnbG9iYWxbJ1pvbmUnXSkge1xuICAgICAgICAvLyBpZiBnbG9iYWxbJ1pvbmUnXSBhbHJlYWR5IGV4aXN0cyAobWF5YmUgem9uZS5qcyB3YXMgYWxyZWFkeSBsb2FkZWQgb3JcbiAgICAgICAgLy8gc29tZSBvdGhlciBsaWIgYWxzbyByZWdpc3RlcmVkIGEgZ2xvYmFsIG9iamVjdCBuYW1lZCBab25lKSwgd2UgbWF5IG5lZWRcbiAgICAgICAgLy8gdG8gdGhyb3cgYW4gZXJyb3IsIGJ1dCBzb21ldGltZXMgdXNlciBtYXkgbm90IHdhbnQgdGhpcyBlcnJvci5cbiAgICAgICAgLy8gRm9yIGV4YW1wbGUsXG4gICAgICAgIC8vIHdlIGhhdmUgdHdvIHdlYiBwYWdlcywgcGFnZTEgaW5jbHVkZXMgem9uZS5qcywgcGFnZTIgZG9lc24ndC5cbiAgICAgICAgLy8gYW5kIHRoZSAxc3QgdGltZSB1c2VyIGxvYWQgcGFnZTEgYW5kIHBhZ2UyLCBldmVyeXRoaW5nIHdvcmsgZmluZSxcbiAgICAgICAgLy8gYnV0IHdoZW4gdXNlciBsb2FkIHBhZ2UyIGFnYWluLCBlcnJvciBvY2N1cnMgYmVjYXVzZSBnbG9iYWxbJ1pvbmUnXSBhbHJlYWR5IGV4aXN0cy5cbiAgICAgICAgLy8gc28gd2UgYWRkIGEgZmxhZyB0byBsZXQgdXNlciBjaG9vc2Ugd2hldGhlciB0byB0aHJvdyB0aGlzIGVycm9yIG9yIG5vdC5cbiAgICAgICAgLy8gQnkgZGVmYXVsdCwgaWYgZXhpc3RpbmcgWm9uZSBpcyBmcm9tIHpvbmUuanMsIHdlIHdpbGwgbm90IHRocm93IHRoZSBlcnJvci5cbiAgICAgICAgaWYgKGNoZWNrRHVwbGljYXRlIHx8IHR5cGVvZiBnbG9iYWxbJ1pvbmUnXS5fX3N5bWJvbF9fICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1pvbmUgYWxyZWFkeSBsb2FkZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZ2xvYmFsWydab25lJ107XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIFpvbmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFpvbmUocGFyZW50LCB6b25lU3BlYykge1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHpvbmVTcGVjID8gem9uZVNwZWMubmFtZSB8fCAndW5uYW1lZCcgOiAnPHJvb3Q+JztcbiAgICAgICAgICAgIHRoaXMuX3Byb3BlcnRpZXMgPSB6b25lU3BlYyAmJiB6b25lU3BlYy5wcm9wZXJ0aWVzIHx8IHt9O1xuICAgICAgICAgICAgdGhpcy5fem9uZURlbGVnYXRlID1cbiAgICAgICAgICAgICAgICBuZXcgWm9uZURlbGVnYXRlKHRoaXMsIHRoaXMuX3BhcmVudCAmJiB0aGlzLl9wYXJlbnQuX3pvbmVEZWxlZ2F0ZSwgem9uZVNwZWMpO1xuICAgICAgICB9XG4gICAgICAgIFpvbmUuYXNzZXJ0Wm9uZVBhdGNoZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZ2xvYmFsWydQcm9taXNlJ10gIT09IHBhdGNoZXNbJ1pvbmVBd2FyZVByb21pc2UnXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWm9uZS5qcyBoYXMgZGV0ZWN0ZWQgdGhhdCBab25lQXdhcmVQcm9taXNlIGAod2luZG93fGdsb2JhbCkuUHJvbWlzZWAgJyArXG4gICAgICAgICAgICAgICAgICAgICdoYXMgYmVlbiBvdmVyd3JpdHRlbi5cXG4nICtcbiAgICAgICAgICAgICAgICAgICAgJ01vc3QgbGlrZWx5IGNhdXNlIGlzIHRoYXQgYSBQcm9taXNlIHBvbHlmaWxsIGhhcyBiZWVuIGxvYWRlZCAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2FmdGVyIFpvbmUuanMgKFBvbHlmaWxsaW5nIFByb21pc2UgYXBpIGlzIG5vdCBuZWNlc3Nhcnkgd2hlbiB6b25lLmpzIGlzIGxvYWRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdJZiB5b3UgbXVzdCBsb2FkIG9uZSwgZG8gc28gYmVmb3JlIGxvYWRpbmcgem9uZS5qcy4pJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lLCBcInJvb3RcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHpvbmUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHpvbmUgPSB6b25lLnBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHpvbmU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmUsIFwiY3VycmVudFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2N1cnJlbnRab25lRnJhbWUuem9uZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZSwgXCJjdXJyZW50VGFza1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2N1cnJlbnRUYXNrO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIFpvbmUuX19sb2FkX3BhdGNoID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gICAgICAgICAgICBpZiAocGF0Y2hlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGVja0R1cGxpY2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignQWxyZWFkeSBsb2FkZWQgcGF0Y2g6ICcgKyBuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghZ2xvYmFsWydfX1pvbmVfZGlzYWJsZV8nICsgbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB2YXIgcGVyZk5hbWUgPSAnWm9uZTonICsgbmFtZTtcbiAgICAgICAgICAgICAgICBtYXJrKHBlcmZOYW1lKTtcbiAgICAgICAgICAgICAgICBwYXRjaGVzW25hbWVdID0gZm4oZ2xvYmFsLCBab25lLCBfYXBpKTtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZU1lYXN1cmUocGVyZk5hbWUsIHBlcmZOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmUucHJvdG90eXBlLCBcInBhcmVudFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lLnByb3RvdHlwZSwgXCJuYW1lXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIFpvbmUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciB6b25lID0gdGhpcy5nZXRab25lV2l0aChrZXkpO1xuICAgICAgICAgICAgaWYgKHpvbmUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHpvbmUuX3Byb3BlcnRpZXNba2V5XTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZS5wcm90b3R5cGUuZ2V0Wm9uZVdpdGggPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHRoaXM7XG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Ll9wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Ll9wYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZS5wcm90b3R5cGUuZm9yayA9IGZ1bmN0aW9uICh6b25lU3BlYykge1xuICAgICAgICAgICAgaWYgKCF6b25lU3BlYylcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1pvbmVTcGVjIHJlcXVpcmVkIScpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmVEZWxlZ2F0ZS5mb3JrKHRoaXMsIHpvbmVTcGVjKTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZS5wcm90b3R5cGUud3JhcCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgc291cmNlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RpbmcgZnVuY3Rpb24gZ290OiAnICsgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIF9jYWxsYmFjayA9IHRoaXMuX3pvbmVEZWxlZ2F0ZS5pbnRlcmNlcHQodGhpcywgY2FsbGJhY2ssIHNvdXJjZSk7XG4gICAgICAgICAgICB2YXIgem9uZSA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB6b25lLnJ1bkd1YXJkZWQoX2NhbGxiYWNrLCB0aGlzLCBhcmd1bWVudHMsIHNvdXJjZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpIHtcbiAgICAgICAgICAgIF9jdXJyZW50Wm9uZUZyYW1lID0geyBwYXJlbnQ6IF9jdXJyZW50Wm9uZUZyYW1lLCB6b25lOiB0aGlzIH07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl96b25lRGVsZWdhdGUuaW52b2tlKHRoaXMsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIF9jdXJyZW50Wm9uZUZyYW1lID0gX2N1cnJlbnRab25lRnJhbWUucGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS5ydW5HdWFyZGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoYXBwbHlUaGlzID09PSB2b2lkIDApIHsgYXBwbHlUaGlzID0gbnVsbDsgfVxuICAgICAgICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSB7IHBhcmVudDogX2N1cnJlbnRab25lRnJhbWUsIHpvbmU6IHRoaXMgfTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmVEZWxlZ2F0ZS5pbnZva2UodGhpcywgY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3pvbmVEZWxlZ2F0ZS5oYW5kbGVFcnJvcih0aGlzLCBlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSBfY3VycmVudFpvbmVGcmFtZS5wYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLnJ1blRhc2sgPSBmdW5jdGlvbiAodGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpIHtcbiAgICAgICAgICAgIGlmICh0YXNrLnpvbmUgIT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSB0YXNrIGNhbiBvbmx5IGJlIHJ1biBpbiB0aGUgem9uZSBvZiBjcmVhdGlvbiEgKENyZWF0aW9uOiAnICtcbiAgICAgICAgICAgICAgICAgICAgKHRhc2suem9uZSB8fCBOT19aT05FKS5uYW1lICsgJzsgRXhlY3V0aW9uOiAnICsgdGhpcy5uYW1lICsgJyknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzc3OCwgc29tZXRpbWVzIGV2ZW50VGFza1xuICAgICAgICAgICAgLy8gd2lsbCBydW4gaW4gbm90U2NoZWR1bGVkKGNhbmNlbGVkKSBzdGF0ZSwgd2Ugc2hvdWxkIG5vdCB0cnkgdG9cbiAgICAgICAgICAgIC8vIHJ1biBzdWNoIGtpbmQgb2YgdGFzayBidXQganVzdCByZXR1cm5cbiAgICAgICAgICAgIGlmICh0YXNrLnN0YXRlID09PSBub3RTY2hlZHVsZWQgJiYgKHRhc2sudHlwZSA9PT0gZXZlbnRUYXNrIHx8IHRhc2sudHlwZSA9PT0gbWFjcm9UYXNrKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZUVudHJ5R3VhcmQgPSB0YXNrLnN0YXRlICE9IHJ1bm5pbmc7XG4gICAgICAgICAgICByZUVudHJ5R3VhcmQgJiYgdGFzay5fdHJhbnNpdGlvblRvKHJ1bm5pbmcsIHNjaGVkdWxlZCk7XG4gICAgICAgICAgICB0YXNrLnJ1bkNvdW50Kys7XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNUYXNrID0gX2N1cnJlbnRUYXNrO1xuICAgICAgICAgICAgX2N1cnJlbnRUYXNrID0gdGFzaztcbiAgICAgICAgICAgIF9jdXJyZW50Wm9uZUZyYW1lID0geyBwYXJlbnQ6IF9jdXJyZW50Wm9uZUZyYW1lLCB6b25lOiB0aGlzIH07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnR5cGUgPT0gbWFjcm9UYXNrICYmIHRhc2suZGF0YSAmJiAhdGFzay5kYXRhLmlzUGVyaW9kaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5jYW5jZWxGbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmVEZWxlZ2F0ZS5pbnZva2VUYXNrKHRoaXMsIHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB0YXNrJ3Mgc3RhdGUgaXMgbm90U2NoZWR1bGVkIG9yIHVua25vd24sIHRoZW4gaXQgaGFzIGFscmVhZHkgYmVlbiBjYW5jZWxsZWRcbiAgICAgICAgICAgICAgICAvLyB3ZSBzaG91bGQgbm90IHJlc2V0IHRoZSBzdGF0ZSB0byBzY2hlZHVsZWRcbiAgICAgICAgICAgICAgICBpZiAodGFzay5zdGF0ZSAhPT0gbm90U2NoZWR1bGVkICYmIHRhc2suc3RhdGUgIT09IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2sudHlwZSA9PSBldmVudFRhc2sgfHwgKHRhc2suZGF0YSAmJiB0YXNrLmRhdGEuaXNQZXJpb2RpYykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlRW50cnlHdWFyZCAmJiB0YXNrLl90cmFuc2l0aW9uVG8oc2NoZWR1bGVkLCBydW5uaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sucnVuQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlVGFza0NvdW50KHRhc2ssIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlRW50cnlHdWFyZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suX3RyYW5zaXRpb25Ubyhub3RTY2hlZHVsZWQsIHJ1bm5pbmcsIG5vdFNjaGVkdWxlZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSBfY3VycmVudFpvbmVGcmFtZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgX2N1cnJlbnRUYXNrID0gcHJldmlvdXNUYXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS5zY2hlZHVsZVRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgaWYgKHRhc2suem9uZSAmJiB0YXNrLnpvbmUgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgdGFzayB3YXMgcmVzY2hlZHVsZWQsIHRoZSBuZXdab25lXG4gICAgICAgICAgICAgICAgLy8gc2hvdWxkIG5vdCBiZSB0aGUgY2hpbGRyZW4gb2YgdGhlIG9yaWdpbmFsIHpvbmVcbiAgICAgICAgICAgICAgICB2YXIgbmV3Wm9uZSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG5ld1pvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1pvbmUgPT09IHRhc2suem9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJjYW4gbm90IHJlc2NoZWR1bGUgdGFzayB0byBcIiArIHRoaXMubmFtZSArIFwiIHdoaWNoIGlzIGRlc2NlbmRhbnRzIG9mIHRoZSBvcmlnaW5hbCB6b25lIFwiICsgdGFzay56b25lLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5ld1pvbmUgPSBuZXdab25lLnBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXNrLl90cmFuc2l0aW9uVG8oc2NoZWR1bGluZywgbm90U2NoZWR1bGVkKTtcbiAgICAgICAgICAgIHZhciB6b25lRGVsZWdhdGVzID0gW107XG4gICAgICAgICAgICB0YXNrLl96b25lRGVsZWdhdGVzID0gem9uZURlbGVnYXRlcztcbiAgICAgICAgICAgIHRhc2suX3pvbmUgPSB0aGlzO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0YXNrID0gdGhpcy5fem9uZURlbGVnYXRlLnNjaGVkdWxlVGFzayh0aGlzLCB0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAvLyBzaG91bGQgc2V0IHRhc2sncyBzdGF0ZSB0byB1bmtub3duIHdoZW4gc2NoZWR1bGVUYXNrIHRocm93IGVycm9yXG4gICAgICAgICAgICAgICAgLy8gYmVjYXVzZSB0aGUgZXJyIG1heSBmcm9tIHJlc2NoZWR1bGUsIHNvIHRoZSBmcm9tU3RhdGUgbWF5YmUgbm90U2NoZWR1bGVkXG4gICAgICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKHVua25vd24sIHNjaGVkdWxpbmcsIG5vdFNjaGVkdWxlZCk7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogQEppYUxpUGFzc2lvbiwgc2hvdWxkIHdlIGNoZWNrIHRoZSByZXN1bHQgZnJvbSBoYW5kbGVFcnJvcj9cbiAgICAgICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFzay5fem9uZURlbGVnYXRlcyA9PT0gem9uZURlbGVnYXRlcykge1xuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gY2hlY2sgYmVjYXVzZSBpbnRlcm5hbGx5IHRoZSBkZWxlZ2F0ZSBjYW4gcmVzY2hlZHVsZSB0aGUgdGFzay5cbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVUYXNrQ291bnQodGFzaywgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFzay5zdGF0ZSA9PSBzY2hlZHVsaW5nKSB7XG4gICAgICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKHNjaGVkdWxlZCwgc2NoZWR1bGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZS5wcm90b3R5cGUuc2NoZWR1bGVNaWNyb1Rhc2sgPSBmdW5jdGlvbiAoc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlVGFzayhuZXcgWm9uZVRhc2sobWljcm9UYXNrLCBzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgdW5kZWZpbmVkKSk7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLnNjaGVkdWxlTWFjcm9UYXNrID0gZnVuY3Rpb24gKHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlVGFzayhuZXcgWm9uZVRhc2sobWFjcm9UYXNrLCBzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSk7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLnNjaGVkdWxlRXZlbnRUYXNrID0gZnVuY3Rpb24gKHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlVGFzayhuZXcgWm9uZVRhc2soZXZlbnRUYXNrLCBzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSk7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLmNhbmNlbFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgaWYgKHRhc2suem9uZSAhPSB0aGlzKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSB0YXNrIGNhbiBvbmx5IGJlIGNhbmNlbGxlZCBpbiB0aGUgem9uZSBvZiBjcmVhdGlvbiEgKENyZWF0aW9uOiAnICtcbiAgICAgICAgICAgICAgICAgICAgKHRhc2suem9uZSB8fCBOT19aT05FKS5uYW1lICsgJzsgRXhlY3V0aW9uOiAnICsgdGhpcy5uYW1lICsgJyknKTtcbiAgICAgICAgICAgIHRhc2suX3RyYW5zaXRpb25UbyhjYW5jZWxpbmcsIHNjaGVkdWxlZCwgcnVubmluZyk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZS5jYW5jZWxUYXNrKHRoaXMsIHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIC8vIGlmIGVycm9yIG9jY3VycyB3aGVuIGNhbmNlbFRhc2ssIHRyYW5zaXQgdGhlIHN0YXRlIHRvIHVua25vd25cbiAgICAgICAgICAgICAgICB0YXNrLl90cmFuc2l0aW9uVG8odW5rbm93biwgY2FuY2VsaW5nKTtcbiAgICAgICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVUYXNrQ291bnQodGFzaywgLTEpO1xuICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKG5vdFNjaGVkdWxlZCwgY2FuY2VsaW5nKTtcbiAgICAgICAgICAgIHRhc2sucnVuQ291bnQgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLl91cGRhdGVUYXNrQ291bnQgPSBmdW5jdGlvbiAodGFzaywgY291bnQpIHtcbiAgICAgICAgICAgIHZhciB6b25lRGVsZWdhdGVzID0gdGFzay5fem9uZURlbGVnYXRlcztcbiAgICAgICAgICAgIGlmIChjb3VudCA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRhc2suX3pvbmVEZWxlZ2F0ZXMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB6b25lRGVsZWdhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgem9uZURlbGVnYXRlc1tpXS5fdXBkYXRlVGFza0NvdW50KHRhc2sudHlwZSwgY291bnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBab25lLl9fc3ltYm9sX18gPSBfX3N5bWJvbF9fO1xuICAgICAgICByZXR1cm4gWm9uZTtcbiAgICB9KCkpO1xuICAgIHZhciBERUxFR0FURV9aUyA9IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIG9uSGFzVGFzazogZnVuY3Rpb24gKGRlbGVnYXRlLCBfLCB0YXJnZXQsIGhhc1Rhc2tTdGF0ZSkgeyByZXR1cm4gZGVsZWdhdGUuaGFzVGFzayh0YXJnZXQsIGhhc1Rhc2tTdGF0ZSk7IH0sXG4gICAgICAgIG9uU2NoZWR1bGVUYXNrOiBmdW5jdGlvbiAoZGVsZWdhdGUsIF8sIHRhcmdldCwgdGFzaykge1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLnNjaGVkdWxlVGFzayh0YXJnZXQsIHRhc2spO1xuICAgICAgICB9LFxuICAgICAgICBvbkludm9rZVRhc2s6IGZ1bmN0aW9uIChkZWxlZ2F0ZSwgXywgdGFyZ2V0LCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykge1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmludm9rZVRhc2sodGFyZ2V0LCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2FuY2VsVGFzazogZnVuY3Rpb24gKGRlbGVnYXRlLCBfLCB0YXJnZXQsIHRhc2spIHsgcmV0dXJuIGRlbGVnYXRlLmNhbmNlbFRhc2sodGFyZ2V0LCB0YXNrKTsgfVxuICAgIH07XG4gICAgdmFyIFpvbmVEZWxlZ2F0ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gWm9uZURlbGVnYXRlKHpvbmUsIHBhcmVudERlbGVnYXRlLCB6b25lU3BlYykge1xuICAgICAgICAgICAgdGhpcy5fdGFza0NvdW50cyA9IHsgJ21pY3JvVGFzayc6IDAsICdtYWNyb1Rhc2snOiAwLCAnZXZlbnRUYXNrJzogMCB9O1xuICAgICAgICAgICAgdGhpcy56b25lID0gem9uZTtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudERlbGVnYXRlID0gcGFyZW50RGVsZWdhdGU7XG4gICAgICAgICAgICB0aGlzLl9mb3JrWlMgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMgJiYgem9uZVNwZWMub25Gb3JrID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5fZm9ya1pTKTtcbiAgICAgICAgICAgIHRoaXMuX2ZvcmtEbGd0ID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uRm9yayA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2ZvcmtEbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX2ZvcmtDdXJyWm9uZSA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkZvcmsgPyB0aGlzLnpvbmUgOiBwYXJlbnREZWxlZ2F0ZS56b25lKTtcbiAgICAgICAgICAgIHRoaXMuX2ludGVyY2VwdFpTID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnRlcmNlcHQgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9pbnRlcmNlcHRaUyk7XG4gICAgICAgICAgICB0aGlzLl9pbnRlcmNlcHREbGd0ID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnRlcmNlcHQgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9pbnRlcmNlcHREbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX2ludGVyY2VwdEN1cnJab25lID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnRlcmNlcHQgPyB0aGlzLnpvbmUgOiBwYXJlbnREZWxlZ2F0ZS56b25lKTtcbiAgICAgICAgICAgIHRoaXMuX2ludm9rZVpTID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlWlMpO1xuICAgICAgICAgICAgdGhpcy5faW52b2tlRGxndCA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlRGxndCk7XG4gICAgICAgICAgICB0aGlzLl9pbnZva2VDdXJyWm9uZSA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZSA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLnpvbmUpO1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3JaUyA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSGFuZGxlRXJyb3IgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9oYW5kbGVFcnJvclpTKTtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yRGxndCA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSGFuZGxlRXJyb3IgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9oYW5kbGVFcnJvckRsZ3QpO1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3JDdXJyWm9uZSA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSGFuZGxlRXJyb3IgPyB0aGlzLnpvbmUgOiBwYXJlbnREZWxlZ2F0ZS56b25lKTtcbiAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza1pTID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25TY2hlZHVsZVRhc2sgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9zY2hlZHVsZVRhc2taUyk7XG4gICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2tEbGd0ID0gem9uZVNwZWMgJiZcbiAgICAgICAgICAgICAgICAoem9uZVNwZWMub25TY2hlZHVsZVRhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9zY2hlZHVsZVRhc2tEbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza0N1cnJab25lID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25TY2hlZHVsZVRhc2sgPyB0aGlzLnpvbmUgOiBwYXJlbnREZWxlZ2F0ZS56b25lKTtcbiAgICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2taUyA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlVGFzayA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZVRhc2taUyk7XG4gICAgICAgICAgICB0aGlzLl9pbnZva2VUYXNrRGxndCA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlVGFzayA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZVRhc2tEbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2tDdXJyWm9uZSA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlVGFzayA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLnpvbmUpO1xuICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza1pTID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25DYW5jZWxUYXNrID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5fY2FuY2VsVGFza1pTKTtcbiAgICAgICAgICAgIHRoaXMuX2NhbmNlbFRhc2tEbGd0ID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25DYW5jZWxUYXNrID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5fY2FuY2VsVGFza0RsZ3QpO1xuICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza0N1cnJab25lID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25DYW5jZWxUYXNrID8gdGhpcy56b25lIDogcGFyZW50RGVsZWdhdGUuem9uZSk7XG4gICAgICAgICAgICB0aGlzLl9oYXNUYXNrWlMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5faGFzVGFza0RsZ3QgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5faGFzVGFza0RsZ3RPd25lciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9oYXNUYXNrQ3VyclpvbmUgPSBudWxsO1xuICAgICAgICAgICAgdmFyIHpvbmVTcGVjSGFzVGFzayA9IHpvbmVTcGVjICYmIHpvbmVTcGVjLm9uSGFzVGFzaztcbiAgICAgICAgICAgIHZhciBwYXJlbnRIYXNUYXNrID0gcGFyZW50RGVsZWdhdGUgJiYgcGFyZW50RGVsZWdhdGUuX2hhc1Rhc2taUztcbiAgICAgICAgICAgIGlmICh6b25lU3BlY0hhc1Rhc2sgfHwgcGFyZW50SGFzVGFzaykge1xuICAgICAgICAgICAgICAgIC8vIElmIHdlIG5lZWQgdG8gcmVwb3J0IGhhc1Rhc2ssIHRoYW4gdGhpcyBaUyBuZWVkcyB0byBkbyByZWYgY291bnRpbmcgb24gdGFza3MuIEluIHN1Y2hcbiAgICAgICAgICAgICAgICAvLyBhIGNhc2UgYWxsIHRhc2sgcmVsYXRlZCBpbnRlcmNlcHRvcnMgbXVzdCBnbyB0aHJvdWdoIHRoaXMgWkQuIFdlIGNhbid0IHNob3J0IGNpcmN1aXQgaXQuXG4gICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza1pTID0gem9uZVNwZWNIYXNUYXNrID8gem9uZVNwZWMgOiBERUxFR0FURV9aUztcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrRGxndCA9IHBhcmVudERlbGVnYXRlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tEbGd0T3duZXIgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tDdXJyWm9uZSA9IHpvbmU7XG4gICAgICAgICAgICAgICAgaWYgKCF6b25lU3BlYy5vblNjaGVkdWxlVGFzaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2taUyA9IERFTEVHQVRFX1pTO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2tEbGd0ID0gcGFyZW50RGVsZWdhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza0N1cnJab25lID0gdGhpcy56b25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXpvbmVTcGVjLm9uSW52b2tlVGFzaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnZva2VUYXNrWlMgPSBERUxFR0FURV9aUztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza0RsZ3QgPSBwYXJlbnREZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza0N1cnJab25lID0gdGhpcy56b25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXpvbmVTcGVjLm9uQ2FuY2VsVGFzaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW5jZWxUYXNrWlMgPSBERUxFR0FURV9aUztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza0RsZ3QgPSBwYXJlbnREZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza0N1cnJab25lID0gdGhpcy56b25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBab25lRGVsZWdhdGUucHJvdG90eXBlLmZvcmsgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgem9uZVNwZWMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JrWlMgPyB0aGlzLl9mb3JrWlMub25Gb3JrKHRoaXMuX2ZvcmtEbGd0LCB0aGlzLnpvbmUsIHRhcmdldFpvbmUsIHpvbmVTcGVjKSA6XG4gICAgICAgICAgICAgICAgbmV3IFpvbmUodGFyZ2V0Wm9uZSwgem9uZVNwZWMpO1xuICAgICAgICB9O1xuICAgICAgICBab25lRGVsZWdhdGUucHJvdG90eXBlLmludGVyY2VwdCA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCBjYWxsYmFjaywgc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJjZXB0WlMgP1xuICAgICAgICAgICAgICAgIHRoaXMuX2ludGVyY2VwdFpTLm9uSW50ZXJjZXB0KHRoaXMuX2ludGVyY2VwdERsZ3QsIHRoaXMuX2ludGVyY2VwdEN1cnJab25lLCB0YXJnZXRab25lLCBjYWxsYmFjaywgc291cmNlKSA6XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlWlMgPyB0aGlzLl9pbnZva2VaUy5vbkludm9rZSh0aGlzLl9pbnZva2VEbGd0LCB0aGlzLl9pbnZva2VDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpIDpcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShhcHBseVRoaXMsIGFwcGx5QXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvclpTID9cbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvclpTLm9uSGFuZGxlRXJyb3IodGhpcy5faGFuZGxlRXJyb3JEbGd0LCB0aGlzLl9oYW5kbGVFcnJvckN1cnJab25lLCB0YXJnZXRab25lLCBlcnJvcikgOlxuICAgICAgICAgICAgICAgIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuc2NoZWR1bGVUYXNrID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIHRhc2spIHtcbiAgICAgICAgICAgIHZhciByZXR1cm5UYXNrID0gdGFzaztcbiAgICAgICAgICAgIGlmICh0aGlzLl9zY2hlZHVsZVRhc2taUykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9oYXNUYXNrWlMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVGFzay5fem9uZURlbGVnYXRlcy5wdXNoKHRoaXMuX2hhc1Rhc2tEbGd0T3duZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm5UYXNrID0gdGhpcy5fc2NoZWR1bGVUYXNrWlMub25TY2hlZHVsZVRhc2sodGhpcy5fc2NoZWR1bGVUYXNrRGxndCwgdGhpcy5fc2NoZWR1bGVUYXNrQ3VyclpvbmUsIHRhcmdldFpvbmUsIHRhc2spO1xuICAgICAgICAgICAgICAgIGlmICghcmV0dXJuVGFzaylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVGFzayA9IHRhc2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5zY2hlZHVsZUZuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suc2NoZWR1bGVGbih0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGFzay50eXBlID09IG1pY3JvVGFzaykge1xuICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZU1pY3JvVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGFzayBpcyBtaXNzaW5nIHNjaGVkdWxlRm4uJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldHVyblRhc2s7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaW52b2tlVGFzayA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZVRhc2taUyA/IHRoaXMuX2ludm9rZVRhc2taUy5vbkludm9rZVRhc2sodGhpcy5faW52b2tlVGFza0RsZ3QsIHRoaXMuX2ludm9rZVRhc2tDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgdGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpIDpcbiAgICAgICAgICAgICAgICB0YXNrLmNhbGxiYWNrLmFwcGx5KGFwcGx5VGhpcywgYXBwbHlBcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZURlbGVnYXRlLnByb3RvdHlwZS5jYW5jZWxUYXNrID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIHRhc2spIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW5jZWxUYXNrWlMpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX2NhbmNlbFRhc2taUy5vbkNhbmNlbFRhc2sodGhpcy5fY2FuY2VsVGFza0RsZ3QsIHRoaXMuX2NhbmNlbFRhc2tDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgdGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhc2suY2FuY2VsRm4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1Rhc2sgaXMgbm90IGNhbmNlbGFibGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0YXNrLmNhbmNlbEZuKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICBab25lRGVsZWdhdGUucHJvdG90eXBlLmhhc1Rhc2sgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgaXNFbXB0eSkge1xuICAgICAgICAgICAgLy8gaGFzVGFzayBzaG91bGQgbm90IHRocm93IGVycm9yIHNvIG90aGVyIFpvbmVEZWxlZ2F0ZVxuICAgICAgICAgICAgLy8gY2FuIHN0aWxsIHRyaWdnZXIgaGFzVGFzayBjYWxsYmFja1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrWlMgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza1pTLm9uSGFzVGFzayh0aGlzLl9oYXNUYXNrRGxndCwgdGhpcy5faGFzVGFza0N1cnJab25lLCB0YXJnZXRab25lLCBpc0VtcHR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKHRhcmdldFpvbmUsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuX3VwZGF0ZVRhc2tDb3VudCA9IGZ1bmN0aW9uICh0eXBlLCBjb3VudCkge1xuICAgICAgICAgICAgdmFyIGNvdW50cyA9IHRoaXMuX3Rhc2tDb3VudHM7XG4gICAgICAgICAgICB2YXIgcHJldiA9IGNvdW50c1t0eXBlXTtcbiAgICAgICAgICAgIHZhciBuZXh0ID0gY291bnRzW3R5cGVdID0gcHJldiArIGNvdW50O1xuICAgICAgICAgICAgaWYgKG5leHQgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNb3JlIHRhc2tzIGV4ZWN1dGVkIHRoZW4gd2VyZSBzY2hlZHVsZWQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJldiA9PSAwIHx8IG5leHQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBpc0VtcHR5ID0ge1xuICAgICAgICAgICAgICAgICAgICBtaWNyb1Rhc2s6IGNvdW50c1snbWljcm9UYXNrJ10gPiAwLFxuICAgICAgICAgICAgICAgICAgICBtYWNyb1Rhc2s6IGNvdW50c1snbWFjcm9UYXNrJ10gPiAwLFxuICAgICAgICAgICAgICAgICAgICBldmVudFRhc2s6IGNvdW50c1snZXZlbnRUYXNrJ10gPiAwLFxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IHR5cGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzVGFzayh0aGlzLnpvbmUsIGlzRW1wdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gWm9uZURlbGVnYXRlO1xuICAgIH0oKSk7XG4gICAgdmFyIFpvbmVUYXNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBab25lVGFzayh0eXBlLCBzb3VyY2UsIGNhbGxiYWNrLCBvcHRpb25zLCBzY2hlZHVsZUZuLCBjYW5jZWxGbikge1xuICAgICAgICAgICAgdGhpcy5fem9uZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnJ1bkNvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZXMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAnbm90U2NoZWR1bGVkJztcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IG9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlRm4gPSBzY2hlZHVsZUZuO1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxGbiA9IGNhbmNlbEZuO1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgLy8gVE9ETzogQEppYUxpUGFzc2lvbiBvcHRpb25zIHNob3VsZCBoYXZlIGludGVyZmFjZVxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IGV2ZW50VGFzayAmJiBvcHRpb25zICYmIG9wdGlvbnMudXNlRykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW52b2tlID0gWm9uZVRhc2suaW52b2tlVGFzaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW52b2tlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWm9uZVRhc2suaW52b2tlVGFzay5jYWxsKGdsb2JhbCwgc2VsZiwgdGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFpvbmVUYXNrLmludm9rZVRhc2sgPSBmdW5jdGlvbiAodGFzaywgdGFyZ2V0LCBhcmdzKSB7XG4gICAgICAgICAgICBpZiAoIXRhc2spIHtcbiAgICAgICAgICAgICAgICB0YXNrID0gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMrKztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGFzay5ydW5Db3VudCsrO1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLnpvbmUucnVuVGFzayh0YXNrLCB0YXJnZXQsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBkcmFpbk1pY3JvVGFza1F1ZXVlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmVUYXNrLnByb3RvdHlwZSwgXCJ6b25lXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl96b25lO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lVGFzay5wcm90b3R5cGUsIFwic3RhdGVcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIFpvbmVUYXNrLnByb3RvdHlwZS5jYW5jZWxTY2hlZHVsZVJlcXVlc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uVG8obm90U2NoZWR1bGVkLCBzY2hlZHVsaW5nKTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZVRhc2sucHJvdG90eXBlLl90cmFuc2l0aW9uVG8gPSBmdW5jdGlvbiAodG9TdGF0ZSwgZnJvbVN0YXRlMSwgZnJvbVN0YXRlMikge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBmcm9tU3RhdGUxIHx8IHRoaXMuX3N0YXRlID09PSBmcm9tU3RhdGUyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSB0b1N0YXRlO1xuICAgICAgICAgICAgICAgIGlmICh0b1N0YXRlID09IG5vdFNjaGVkdWxlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGVzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy50eXBlICsgXCIgJ1wiICsgdGhpcy5zb3VyY2UgKyBcIic6IGNhbiBub3QgdHJhbnNpdGlvbiB0byAnXCIgKyB0b1N0YXRlICsgXCInLCBleHBlY3Rpbmcgc3RhdGUgJ1wiICsgZnJvbVN0YXRlMSArIFwiJ1wiICsgKGZyb21TdGF0ZTIgPyAnIG9yIFxcJycgKyBmcm9tU3RhdGUyICsgJ1xcJycgOiAnJykgKyBcIiwgd2FzICdcIiArIHRoaXMuX3N0YXRlICsgXCInLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgWm9uZVRhc2sucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0eXBlb2YgdGhpcy5kYXRhLmhhbmRsZUlkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuaGFuZGxlSWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIGFkZCB0b0pTT04gbWV0aG9kIHRvIHByZXZlbnQgY3ljbGljIGVycm9yIHdoZW5cbiAgICAgICAgLy8gY2FsbCBKU09OLnN0cmluZ2lmeSh6b25lVGFzaylcbiAgICAgICAgWm9uZVRhc2sucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICAgICAgICAgICAgem9uZTogdGhpcy56b25lLm5hbWUsXG4gICAgICAgICAgICAgICAgcnVuQ291bnQ6IHRoaXMucnVuQ291bnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBab25lVGFzaztcbiAgICB9KCkpO1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vLyAgTUlDUk9UQVNLIFFVRVVFXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgdmFyIHN5bWJvbFNldFRpbWVvdXQgPSBfX3N5bWJvbF9fKCdzZXRUaW1lb3V0Jyk7XG4gICAgdmFyIHN5bWJvbFByb21pc2UgPSBfX3N5bWJvbF9fKCdQcm9taXNlJyk7XG4gICAgdmFyIHN5bWJvbFRoZW4gPSBfX3N5bWJvbF9fKCd0aGVuJyk7XG4gICAgdmFyIF9taWNyb1Rhc2tRdWV1ZSA9IFtdO1xuICAgIHZhciBfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlID0gZmFsc2U7XG4gICAgdmFyIG5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZTtcbiAgICBmdW5jdGlvbiBzY2hlZHVsZU1pY3JvVGFzayh0YXNrKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBub3QgcnVubmluZyBpbiBhbnkgdGFzaywgYW5kIHRoZXJlIGhhcyBub3QgYmVlbiBhbnl0aGluZyBzY2hlZHVsZWRcbiAgICAgICAgLy8gd2UgbXVzdCBib290c3RyYXAgdGhlIGluaXRpYWwgdGFzayBjcmVhdGlvbiBieSBtYW51YWxseSBzY2hlZHVsaW5nIHRoZSBkcmFpblxuICAgICAgICBpZiAoX251bWJlck9mTmVzdGVkVGFza0ZyYW1lcyA9PT0gMCAmJiBfbWljcm9UYXNrUXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBXZSBhcmUgbm90IHJ1bm5pbmcgaW4gVGFzaywgc28gd2UgbmVlZCB0byBraWNrc3RhcnQgdGhlIG1pY3JvdGFzayBxdWV1ZS5cbiAgICAgICAgICAgIGlmICghbmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbFtzeW1ib2xQcm9taXNlXSkge1xuICAgICAgICAgICAgICAgICAgICBuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2UgPSBnbG9iYWxbc3ltYm9sUHJvbWlzZV0ucmVzb2x2ZSgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hdGl2ZVRoZW4gPSBuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2Vbc3ltYm9sVGhlbl07XG4gICAgICAgICAgICAgICAgaWYgKCFuYXRpdmVUaGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5hdGl2ZSBQcm9taXNlIGlzIG5vdCBwYXRjaGFibGUsIHdlIG5lZWQgdG8gdXNlIGB0aGVuYCBkaXJlY3RseVxuICAgICAgICAgICAgICAgICAgICAvLyBpc3N1ZSAxMDc4XG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZVRoZW4gPSBuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2VbJ3RoZW4nXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmF0aXZlVGhlbi5jYWxsKG5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZSwgZHJhaW5NaWNyb1Rhc2tRdWV1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbG9iYWxbc3ltYm9sU2V0VGltZW91dF0oZHJhaW5NaWNyb1Rhc2tRdWV1ZSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGFzayAmJiBfbWljcm9UYXNrUXVldWUucHVzaCh0YXNrKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZHJhaW5NaWNyb1Rhc2tRdWV1ZSgpIHtcbiAgICAgICAgaWYgKCFfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlKSB7XG4gICAgICAgICAgICBfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlID0gdHJ1ZTtcbiAgICAgICAgICAgIHdoaWxlIChfbWljcm9UYXNrUXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXVlID0gX21pY3JvVGFza1F1ZXVlO1xuICAgICAgICAgICAgICAgIF9taWNyb1Rhc2tRdWV1ZSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2sgPSBxdWV1ZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suem9uZS5ydW5UYXNrKHRhc2ssIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2FwaS5vblVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9hcGkubWljcm90YXNrRHJhaW5Eb25lKCk7XG4gICAgICAgICAgICBfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8vICBCT09UU1RSQVBcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICB2YXIgTk9fWk9ORSA9IHsgbmFtZTogJ05PIFpPTkUnIH07XG4gICAgdmFyIG5vdFNjaGVkdWxlZCA9ICdub3RTY2hlZHVsZWQnLCBzY2hlZHVsaW5nID0gJ3NjaGVkdWxpbmcnLCBzY2hlZHVsZWQgPSAnc2NoZWR1bGVkJywgcnVubmluZyA9ICdydW5uaW5nJywgY2FuY2VsaW5nID0gJ2NhbmNlbGluZycsIHVua25vd24gPSAndW5rbm93bic7XG4gICAgdmFyIG1pY3JvVGFzayA9ICdtaWNyb1Rhc2snLCBtYWNyb1Rhc2sgPSAnbWFjcm9UYXNrJywgZXZlbnRUYXNrID0gJ2V2ZW50VGFzayc7XG4gICAgdmFyIHBhdGNoZXMgPSB7fTtcbiAgICB2YXIgX2FwaSA9IHtcbiAgICAgICAgc3ltYm9sOiBfX3N5bWJvbF9fLFxuICAgICAgICBjdXJyZW50Wm9uZUZyYW1lOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfY3VycmVudFpvbmVGcmFtZTsgfSxcbiAgICAgICAgb25VbmhhbmRsZWRFcnJvcjogbm9vcCxcbiAgICAgICAgbWljcm90YXNrRHJhaW5Eb25lOiBub29wLFxuICAgICAgICBzY2hlZHVsZU1pY3JvVGFzazogc2NoZWR1bGVNaWNyb1Rhc2ssXG4gICAgICAgIHNob3dVbmNhdWdodEVycm9yOiBmdW5jdGlvbiAoKSB7IHJldHVybiAhWm9uZVtfX3N5bWJvbF9fKCdpZ25vcmVDb25zb2xlRXJyb3JVbmNhdWdodEVycm9yJyldOyB9LFxuICAgICAgICBwYXRjaEV2ZW50VGFyZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfSxcbiAgICAgICAgcGF0Y2hPblByb3BlcnRpZXM6IG5vb3AsXG4gICAgICAgIHBhdGNoTWV0aG9kOiBmdW5jdGlvbiAoKSB7IHJldHVybiBub29wOyB9LFxuICAgICAgICBiaW5kQXJndW1lbnRzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfSxcbiAgICAgICAgcGF0Y2hUaGVuOiBmdW5jdGlvbiAoKSB7IHJldHVybiBub29wOyB9LFxuICAgICAgICBwYXRjaE1hY3JvVGFzazogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9vcDsgfSxcbiAgICAgICAgc2V0TmF0aXZlUHJvbWlzZTogZnVuY3Rpb24gKE5hdGl2ZVByb21pc2UpIHtcbiAgICAgICAgICAgIC8vIHNvbWV0aW1lcyBOYXRpdmVQcm9taXNlLnJlc29sdmUgc3RhdGljIGZ1bmN0aW9uXG4gICAgICAgICAgICAvLyBpcyBub3QgcmVhZHkgeWV0LCAoc3VjaCBhcyBjb3JlLWpzL2VzNi5wcm9taXNlKVxuICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBjaGVjayBoZXJlLlxuICAgICAgICAgICAgaWYgKE5hdGl2ZVByb21pc2UgJiYgdHlwZW9mIE5hdGl2ZVByb21pc2UucmVzb2x2ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIG5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZSA9IE5hdGl2ZVByb21pc2UucmVzb2x2ZSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcGF0Y2hFdmVudFByb3RvdHlwZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9vcDsgfSxcbiAgICAgICAgaXNJRU9yRWRnZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgIGdldEdsb2JhbE9iamVjdHM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgT2JqZWN0RGVmaW5lUHJvcGVydHk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vb3A7IH0sXG4gICAgICAgIE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICBPYmplY3RDcmVhdGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgQXJyYXlTbGljZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH0sXG4gICAgICAgIHBhdGNoQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vb3A7IH0sXG4gICAgICAgIHdyYXBXaXRoQ3VycmVudFpvbmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vb3A7IH0sXG4gICAgICAgIGZpbHRlclByb3BlcnRpZXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9LFxuICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vb3A7IH0sXG4gICAgICAgIF9yZWRlZmluZVByb3BlcnR5OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub29wOyB9LFxuICAgICAgICBwYXRjaENhbGxiYWNrczogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9vcDsgfVxuICAgIH07XG4gICAgdmFyIF9jdXJyZW50Wm9uZUZyYW1lID0geyBwYXJlbnQ6IG51bGwsIHpvbmU6IG5ldyBab25lKG51bGwsIG51bGwpIH07XG4gICAgdmFyIF9jdXJyZW50VGFzayA9IG51bGw7XG4gICAgdmFyIF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMgPSAwO1xuICAgIGZ1bmN0aW9uIG5vb3AoKSB7IH1cbiAgICBmdW5jdGlvbiBfX3N5bWJvbF9fKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdfX3pvbmVfc3ltYm9sX18nICsgbmFtZTtcbiAgICB9XG4gICAgcGVyZm9ybWFuY2VNZWFzdXJlKCdab25lJywgJ1pvbmUnKTtcbiAgICByZXR1cm4gZ2xvYmFsWydab25lJ10gPSBab25lO1xufSkodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93IHx8IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmIHx8IGdsb2JhbCk7XG5cbnZhciBfX3ZhbHVlcyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fdmFsdWVzKSB8fCBmdW5jdGlvbiAobykge1xuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuWm9uZS5fX2xvYWRfcGF0Y2goJ1pvbmVBd2FyZVByb21pc2UnLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICB2YXIgT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgICB2YXIgT2JqZWN0RGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4gICAgZnVuY3Rpb24gcmVhZGFibGVPYmplY3RUb1N0cmluZyhvYmopIHtcbiAgICAgICAgaWYgKG9iaiAmJiBvYmoudG9TdHJpbmcgPT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSBvYmouY29uc3RydWN0b3IgJiYgb2JqLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgICAgICByZXR1cm4gKGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnKSArICc6ICcgKyBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmogPyBvYmoudG9TdHJpbmcoKSA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xuICAgIH1cbiAgICB2YXIgX19zeW1ib2xfXyA9IGFwaS5zeW1ib2w7XG4gICAgdmFyIF91bmNhdWdodFByb21pc2VFcnJvcnMgPSBbXTtcbiAgICB2YXIgc3ltYm9sUHJvbWlzZSA9IF9fc3ltYm9sX18oJ1Byb21pc2UnKTtcbiAgICB2YXIgc3ltYm9sVGhlbiA9IF9fc3ltYm9sX18oJ3RoZW4nKTtcbiAgICB2YXIgY3JlYXRpb25UcmFjZSA9ICdfX2NyZWF0aW9uVHJhY2VfXyc7XG4gICAgYXBpLm9uVW5oYW5kbGVkRXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoYXBpLnNob3dVbmNhdWdodEVycm9yKCkpIHtcbiAgICAgICAgICAgIHZhciByZWplY3Rpb24gPSBlICYmIGUucmVqZWN0aW9uO1xuICAgICAgICAgICAgaWYgKHJlamVjdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBQcm9taXNlIHJlamVjdGlvbjonLCByZWplY3Rpb24gaW5zdGFuY2VvZiBFcnJvciA/IHJlamVjdGlvbi5tZXNzYWdlIDogcmVqZWN0aW9uLCAnOyBab25lOicsIGUuem9uZS5uYW1lLCAnOyBUYXNrOicsIGUudGFzayAmJiBlLnRhc2suc291cmNlLCAnOyBWYWx1ZTonLCByZWplY3Rpb24sIHJlamVjdGlvbiBpbnN0YW5jZW9mIEVycm9yID8gcmVqZWN0aW9uLnN0YWNrIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGFwaS5taWNyb3Rhc2tEcmFpbkRvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdoaWxlIChfdW5jYXVnaHRQcm9taXNlRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVuY2F1Z2h0UHJvbWlzZUVycm9yID0gX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yLnpvbmUucnVuR3VhcmRlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB1bmNhdWdodFByb21pc2VFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVVbmhhbmRsZWRSZWplY3Rpb24oZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3aGlsZSAoX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBfbG9vcF8xKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBVTkhBTkRMRURfUFJPTUlTRV9SRUpFQ1RJT05fSEFORExFUl9TWU1CT0wgPSBfX3N5bWJvbF9fKCd1bmhhbmRsZWRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcicpO1xuICAgIGZ1bmN0aW9uIGhhbmRsZVVuaGFuZGxlZFJlamVjdGlvbihlKSB7XG4gICAgICAgIGFwaS5vblVuaGFuZGxlZEVycm9yKGUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSBab25lW1VOSEFORExFRF9QUk9NSVNFX1JFSkVDVElPTl9IQU5ETEVSX1NZTUJPTF07XG4gICAgICAgICAgICBpZiAoaGFuZGxlciAmJiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaXNUaGVuYWJsZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUudGhlbjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZm9yd2FyZFJlc29sdXRpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmb3J3YXJkUmVqZWN0aW9uKHJlamVjdGlvbikge1xuICAgICAgICByZXR1cm4gWm9uZUF3YXJlUHJvbWlzZS5yZWplY3QocmVqZWN0aW9uKTtcbiAgICB9XG4gICAgdmFyIHN5bWJvbFN0YXRlID0gX19zeW1ib2xfXygnc3RhdGUnKTtcbiAgICB2YXIgc3ltYm9sVmFsdWUgPSBfX3N5bWJvbF9fKCd2YWx1ZScpO1xuICAgIHZhciBzeW1ib2xGaW5hbGx5ID0gX19zeW1ib2xfXygnZmluYWxseScpO1xuICAgIHZhciBzeW1ib2xQYXJlbnRQcm9taXNlVmFsdWUgPSBfX3N5bWJvbF9fKCdwYXJlbnRQcm9taXNlVmFsdWUnKTtcbiAgICB2YXIgc3ltYm9sUGFyZW50UHJvbWlzZVN0YXRlID0gX19zeW1ib2xfXygncGFyZW50UHJvbWlzZVN0YXRlJyk7XG4gICAgdmFyIHNvdXJjZSA9ICdQcm9taXNlLnRoZW4nO1xuICAgIHZhciBVTlJFU09MVkVEID0gbnVsbDtcbiAgICB2YXIgUkVTT0xWRUQgPSB0cnVlO1xuICAgIHZhciBSRUpFQ1RFRCA9IGZhbHNlO1xuICAgIHZhciBSRUpFQ1RFRF9OT19DQVRDSCA9IDA7XG4gICAgZnVuY3Rpb24gbWFrZVJlc29sdmVyKHByb21pc2UsIHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBzdGF0ZSwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgZmFsc2UsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEbyBub3QgcmV0dXJuIHZhbHVlIG9yIHlvdSB3aWxsIGJyZWFrIHRoZSBQcm9taXNlIHNwZWMuXG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBvbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd2FzQ2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiB3cmFwcGVyKHdyYXBwZWRGdW5jdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAod2FzQ2FsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2FzQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB3cmFwcGVkRnVuY3Rpb24uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcbiAgICB2YXIgVFlQRV9FUlJPUiA9ICdQcm9taXNlIHJlc29sdmVkIHdpdGggaXRzZWxmJztcbiAgICB2YXIgQ1VSUkVOVF9UQVNLX1RSQUNFX1NZTUJPTCA9IF9fc3ltYm9sX18oJ2N1cnJlbnRUYXNrVHJhY2UnKTtcbiAgICAvLyBQcm9taXNlIFJlc29sdXRpb25cbiAgICBmdW5jdGlvbiByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBzdGF0ZSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIG9uY2VXcmFwcGVyID0gb25jZSgpO1xuICAgICAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoVFlQRV9FUlJPUik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb21pc2Vbc3ltYm9sU3RhdGVdID09PSBVTlJFU09MVkVEKSB7XG4gICAgICAgICAgICAvLyBzaG91bGQgb25seSBnZXQgdmFsdWUudGhlbiBvbmNlIGJhc2VkIG9uIHByb21pc2Ugc3BlYy5cbiAgICAgICAgICAgIHZhciB0aGVuID0gbnVsbDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoZW4gPSB2YWx1ZSAmJiB2YWx1ZS50aGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBvbmNlV3JhcHBlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIGZhbHNlLCBlcnIpO1xuICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAodmFsdWUgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgIT09IFJFSkVDVEVEICYmIHZhbHVlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSAmJlxuICAgICAgICAgICAgICAgIHZhbHVlLmhhc093blByb3BlcnR5KHN5bWJvbFN0YXRlKSAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eShzeW1ib2xWYWx1ZSkgJiZcbiAgICAgICAgICAgICAgICB2YWx1ZVtzeW1ib2xTdGF0ZV0gIT09IFVOUkVTT0xWRUQpIHtcbiAgICAgICAgICAgICAgICBjbGVhclJlamVjdGVkTm9DYXRjaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgdmFsdWVbc3ltYm9sU3RhdGVdLCB2YWx1ZVtzeW1ib2xWYWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhdGUgIT09IFJFSkVDVEVEICYmIHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBvbmNlV3JhcHBlcihtYWtlUmVzb2x2ZXIocHJvbWlzZSwgc3RhdGUpKSwgb25jZVdyYXBwZXIobWFrZVJlc29sdmVyKHByb21pc2UsIGZhbHNlKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uY2VXcmFwcGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIGZhbHNlLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gc3RhdGU7XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXVlID0gcHJvbWlzZVtzeW1ib2xWYWx1ZV07XG4gICAgICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xWYWx1ZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZVtzeW1ib2xGaW5hbGx5XSA9PT0gc3ltYm9sRmluYWxseSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgcHJvbWlzZSBpcyBnZW5lcmF0ZWQgYnkgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IFJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc3RhdGUgaXMgcmVzb2x2ZWQsIHNob3VsZCBpZ25vcmUgdGhlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgdXNlIHBhcmVudCBwcm9taXNlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IHByb21pc2Vbc3ltYm9sUGFyZW50UHJvbWlzZVN0YXRlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sVmFsdWVdID0gcHJvbWlzZVtzeW1ib2xQYXJlbnRQcm9taXNlVmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHJlY29yZCB0YXNrIGluZm9ybWF0aW9uIGluIHZhbHVlIHdoZW4gZXJyb3Igb2NjdXJzLCBzbyB3ZSBjYW5cbiAgICAgICAgICAgICAgICAvLyBkbyBzb21lIGFkZGl0aW9uYWwgd29yayBzdWNoIGFzIHJlbmRlciBsb25nU3RhY2tUcmFjZVxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gUkVKRUNURUQgJiYgdmFsdWUgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBsb25nU3RhY2tUcmFjZVpvbmUgaXMgaGVyZVxuICAgICAgICAgICAgICAgICAgICB2YXIgdHJhY2UgPSBab25lLmN1cnJlbnRUYXNrICYmIFpvbmUuY3VycmVudFRhc2suZGF0YSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgWm9uZS5jdXJyZW50VGFzay5kYXRhW2NyZWF0aW9uVHJhY2VdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHJhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9ubHkga2VlcCB0aGUgbG9uZyBzdGFjayB0cmFjZSBpbnRvIGVycm9yIHdoZW4gaW4gbG9uZ1N0YWNrVHJhY2Vab25lXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3REZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgQ1VSUkVOVF9UQVNLX1RSQUNFX1NZTUJPTCwgeyBjb25maWd1cmFibGU6IHRydWUsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IHRyYWNlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOykge1xuICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZVJlc29sdmVPclJlamVjdChwcm9taXNlLCBxdWV1ZVtpKytdLCBxdWV1ZVtpKytdLCBxdWV1ZVtpKytdLCBxdWV1ZVtpKytdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA9PSAwICYmIHN0YXRlID09IFJFSkVDVEVEKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gUkVKRUNURURfTk9fQ0FUQ0g7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0cnkgdG8gcHJpbnQgbW9yZSByZWFkYWJsZSBlcnJvciBsb2dcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5jYXVnaHQgKGluIHByb21pc2UpOiAnICsgcmVhZGFibGVPYmplY3RUb1N0cmluZyh2YWx1ZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZSAmJiB2YWx1ZS5zdGFjayA/ICdcXG4nICsgdmFsdWUuc3RhY2sgOiAnJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvcl8xID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMS5yZWplY3Rpb24gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzEucHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xLnpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xLnRhc2sgPSBab25lLmN1cnJlbnRUYXNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5wdXNoKGVycm9yXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBpLnNjaGVkdWxlTWljcm9UYXNrKCk7IC8vIHRvIG1ha2Ugc3VyZSB0aGF0IGl0IGlzIHJ1bm5pbmdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNvbHZpbmcgYW4gYWxyZWFkeSByZXNvbHZlZCBwcm9taXNlIGlzIGEgbm9vcC5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHZhciBSRUpFQ1RJT05fSEFORExFRF9IQU5ETEVSID0gX19zeW1ib2xfXygncmVqZWN0aW9uSGFuZGxlZEhhbmRsZXInKTtcbiAgICBmdW5jdGlvbiBjbGVhclJlamVjdGVkTm9DYXRjaChwcm9taXNlKSB7XG4gICAgICAgIGlmIChwcm9taXNlW3N5bWJvbFN0YXRlXSA9PT0gUkVKRUNURURfTk9fQ0FUQ0gpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIG5vIGNhdGNoIHN0YXR1c1xuICAgICAgICAgICAgLy8gYW5kIHF1ZXVlLmxlbmd0aCA+IDAsIG1lYW5zIHRoZXJlIGlzIGEgZXJyb3IgaGFuZGxlclxuICAgICAgICAgICAgLy8gaGVyZSB0byBoYW5kbGUgdGhlIHJlamVjdGVkIHByb21pc2UsIHdlIHNob3VsZCB0cmlnZ2VyXG4gICAgICAgICAgICAvLyB3aW5kb3dzLnJlamVjdGlvbmhhbmRsZWQgZXZlbnRIYW5kbGVyIG9yIG5vZGVqcyByZWplY3Rpb25IYW5kbGVkXG4gICAgICAgICAgICAvLyBldmVudEhhbmRsZXJcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSBab25lW1JFSkVDVElPTl9IQU5ETEVEX0hBTkRMRVJdO1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyICYmIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCB7IHJlamVjdGlvbjogcHJvbWlzZVtzeW1ib2xWYWx1ZV0sIHByb21pc2U6IHByb21pc2UgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xTdGF0ZV0gPSBSRUpFQ1RFRDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlID09PSBfdW5jYXVnaHRQcm9taXNlRXJyb3JzW2ldLnByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0KHByb21pc2UsIHpvbmUsIGNoYWluUHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgY2xlYXJSZWplY3RlZE5vQ2F0Y2gocHJvbWlzZSk7XG4gICAgICAgIHZhciBwcm9taXNlU3RhdGUgPSBwcm9taXNlW3N5bWJvbFN0YXRlXTtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gcHJvbWlzZVN0YXRlID9cbiAgICAgICAgICAgICh0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicpID8gb25GdWxmaWxsZWQgOiBmb3J3YXJkUmVzb2x1dGlvbiA6XG4gICAgICAgICAgICAodHlwZW9mIG9uUmVqZWN0ZWQgPT09ICdmdW5jdGlvbicpID8gb25SZWplY3RlZCA6IGZvcndhcmRSZWplY3Rpb247XG4gICAgICAgIHpvbmUuc2NoZWR1bGVNaWNyb1Rhc2soc291cmNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRQcm9taXNlVmFsdWUgPSBwcm9taXNlW3N5bWJvbFZhbHVlXTtcbiAgICAgICAgICAgICAgICB2YXIgaXNGaW5hbGx5UHJvbWlzZSA9IGNoYWluUHJvbWlzZSAmJiBzeW1ib2xGaW5hbGx5ID09PSBjaGFpblByb21pc2Vbc3ltYm9sRmluYWxseV07XG4gICAgICAgICAgICAgICAgaWYgKGlzRmluYWxseVByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByb21pc2UgaXMgZ2VuZXJhdGVkIGZyb20gZmluYWxseSBjYWxsLCBrZWVwIHBhcmVudCBwcm9taXNlJ3Mgc3RhdGUgYW5kIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGNoYWluUHJvbWlzZVtzeW1ib2xQYXJlbnRQcm9taXNlVmFsdWVdID0gcGFyZW50UHJvbWlzZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjaGFpblByb21pc2Vbc3ltYm9sUGFyZW50UHJvbWlzZVN0YXRlXSA9IHByb21pc2VTdGF0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gc2hvdWxkIG5vdCBwYXNzIHZhbHVlIHRvIGZpbmFsbHkgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB6b25lLnJ1bihkZWxlZ2F0ZSwgdW5kZWZpbmVkLCBpc0ZpbmFsbHlQcm9taXNlICYmIGRlbGVnYXRlICE9PSBmb3J3YXJkUmVqZWN0aW9uICYmIGRlbGVnYXRlICE9PSBmb3J3YXJkUmVzb2x1dGlvbiA/XG4gICAgICAgICAgICAgICAgICAgIFtdIDpcbiAgICAgICAgICAgICAgICAgICAgW3BhcmVudFByb21pc2VWYWx1ZV0pO1xuICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKGNoYWluUHJvbWlzZSwgdHJ1ZSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgZXJyb3Igb2NjdXJzLCBzaG91bGQgYWx3YXlzIHJldHVybiB0aGlzIGVycm9yXG4gICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UoY2hhaW5Qcm9taXNlLCBmYWxzZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBjaGFpblByb21pc2UpO1xuICAgIH1cbiAgICB2YXIgWk9ORV9BV0FSRV9QUk9NSVNFX1RPX1NUUklORyA9ICdmdW5jdGlvbiBab25lQXdhcmVQcm9taXNlKCkgeyBbbmF0aXZlIGNvZGVdIH0nO1xuICAgIHZhciBab25lQXdhcmVQcm9taXNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBab25lQXdhcmVQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoIShwcm9taXNlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgYmUgYW4gaW5zdGFuY2VvZiBQcm9taXNlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xTdGF0ZV0gPSBVTlJFU09MVkVEO1xuICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xWYWx1ZV0gPSBbXTsgLy8gcXVldWU7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGV4ZWN1dG9yICYmIGV4ZWN1dG9yKG1ha2VSZXNvbHZlcihwcm9taXNlLCBSRVNPTFZFRCksIG1ha2VSZXNvbHZlcihwcm9taXNlLCBSRUpFQ1RFRCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgZmFsc2UsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBab25lQXdhcmVQcm9taXNlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFpPTkVfQVdBUkVfUFJPTUlTRV9UT19TVFJJTkc7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVBd2FyZVByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlKG5ldyB0aGlzKG51bGwpLCBSRVNPTFZFRCwgdmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBab25lQXdhcmVQcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlKG5ldyB0aGlzKG51bGwpLCBSRUpFQ1RFRCwgZXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICBab25lQXdhcmVQcm9taXNlLnJhY2UgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgICAgIHZhciByZXNvbHZlO1xuICAgICAgICAgICAgdmFyIHJlamVjdDtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IHRoaXMoZnVuY3Rpb24gKHJlcywgcmVqKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSA9IHJlcztcbiAgICAgICAgICAgICAgICByZWplY3QgPSByZWo7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uUmVzb2x2ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gb25SZWplY3QoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB2YWx1ZXNfMSA9IF9fdmFsdWVzKHZhbHVlcyksIHZhbHVlc18xXzEgPSB2YWx1ZXNfMS5uZXh0KCk7ICF2YWx1ZXNfMV8xLmRvbmU7IHZhbHVlc18xXzEgPSB2YWx1ZXNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLnRoZW4ob25SZXNvbHZlLCBvblJlamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZXNfMV8xICYmICF2YWx1ZXNfMV8xLmRvbmUgJiYgKF9hID0gdmFsdWVzXzEucmV0dXJuKSkgX2EuY2FsbCh2YWx1ZXNfMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICB9O1xuICAgICAgICBab25lQXdhcmVQcm9taXNlLmFsbCA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIHZhciBlXzIsIF9hO1xuICAgICAgICAgICAgdmFyIHJlc29sdmU7XG4gICAgICAgICAgICB2YXIgcmVqZWN0O1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgdGhpcyhmdW5jdGlvbiAocmVzLCByZWopIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlID0gcmVzO1xuICAgICAgICAgICAgICAgIHJlamVjdCA9IHJlajtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gU3RhcnQgYXQgMiB0byBwcmV2ZW50IHByZW1hdHVyZWx5IHJlc29sdmluZyBpZiAudGhlbiBpcyBjYWxsZWQgaW1tZWRpYXRlbHkuXG4gICAgICAgICAgICB2YXIgdW5yZXNvbHZlZENvdW50ID0gMjtcbiAgICAgICAgICAgIHZhciB2YWx1ZUluZGV4ID0gMDtcbiAgICAgICAgICAgIHZhciByZXNvbHZlZFZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIF9sb29wXzIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpc18xLnJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgY3VyVmFsdWVJbmRleCA9IHZhbHVlSW5kZXg7XG4gICAgICAgICAgICAgICAgdmFsdWUudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRWYWx1ZXNbY3VyVmFsdWVJbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdW5yZXNvbHZlZENvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmICh1bnJlc29sdmVkQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzb2x2ZWRWYWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB1bnJlc29sdmVkQ291bnQrKztcbiAgICAgICAgICAgICAgICB2YWx1ZUluZGV4Kys7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHRoaXNfMSA9IHRoaXM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHZhbHVlc18yID0gX192YWx1ZXModmFsdWVzKSwgdmFsdWVzXzJfMSA9IHZhbHVlc18yLm5leHQoKTsgIXZhbHVlc18yXzEuZG9uZTsgdmFsdWVzXzJfMSA9IHZhbHVlc18yLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNfMl8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBfbG9vcF8yKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlc18yXzEgJiYgIXZhbHVlc18yXzEuZG9uZSAmJiAoX2EgPSB2YWx1ZXNfMi5yZXR1cm4pKSBfYS5jYWxsKHZhbHVlc18yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSB0aGUgdW5yZXNvbHZlZENvdW50IHplcm8tYmFzZWQgYWdhaW4uXG4gICAgICAgICAgICB1bnJlc29sdmVkQ291bnQgLT0gMjtcbiAgICAgICAgICAgIGlmICh1bnJlc29sdmVkQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc29sdmVkVmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZUF3YXJlUHJvbWlzZS5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdQcm9taXNlJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBab25lQXdhcmVQcm9taXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICAgICAgICB2YXIgY2hhaW5Qcm9taXNlID0gbmV3IHRoaXMuY29uc3RydWN0b3IobnVsbCk7XG4gICAgICAgICAgICB2YXIgem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgICAgIGlmICh0aGlzW3N5bWJvbFN0YXRlXSA9PSBVTlJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tzeW1ib2xWYWx1ZV0ucHVzaCh6b25lLCBjaGFpblByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0KHRoaXMsIHpvbmUsIGNoYWluUHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoYWluUHJvbWlzZTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZUF3YXJlUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2ggPSBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZUF3YXJlUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uIChvbkZpbmFsbHkpIHtcbiAgICAgICAgICAgIHZhciBjaGFpblByb21pc2UgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihudWxsKTtcbiAgICAgICAgICAgIGNoYWluUHJvbWlzZVtzeW1ib2xGaW5hbGx5XSA9IHN5bWJvbEZpbmFsbHk7XG4gICAgICAgICAgICB2YXIgem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgICAgIGlmICh0aGlzW3N5bWJvbFN0YXRlXSA9PSBVTlJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tzeW1ib2xWYWx1ZV0ucHVzaCh6b25lLCBjaGFpblByb21pc2UsIG9uRmluYWxseSwgb25GaW5hbGx5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0KHRoaXMsIHpvbmUsIGNoYWluUHJvbWlzZSwgb25GaW5hbGx5LCBvbkZpbmFsbHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoYWluUHJvbWlzZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFpvbmVBd2FyZVByb21pc2U7XG4gICAgfSgpKTtcbiAgICAvLyBQcm90ZWN0IGFnYWluc3QgYWdncmVzc2l2ZSBvcHRpbWl6ZXJzIGRyb3BwaW5nIHNlZW1pbmdseSB1bnVzZWQgcHJvcGVydGllcy5cbiAgICAvLyBFLmcuIENsb3N1cmUgQ29tcGlsZXIgaW4gYWR2YW5jZWQgbW9kZS5cbiAgICBab25lQXdhcmVQcm9taXNlWydyZXNvbHZlJ10gPSBab25lQXdhcmVQcm9taXNlLnJlc29sdmU7XG4gICAgWm9uZUF3YXJlUHJvbWlzZVsncmVqZWN0J10gPSBab25lQXdhcmVQcm9taXNlLnJlamVjdDtcbiAgICBab25lQXdhcmVQcm9taXNlWydyYWNlJ10gPSBab25lQXdhcmVQcm9taXNlLnJhY2U7XG4gICAgWm9uZUF3YXJlUHJvbWlzZVsnYWxsJ10gPSBab25lQXdhcmVQcm9taXNlLmFsbDtcbiAgICB2YXIgTmF0aXZlUHJvbWlzZSA9IGdsb2JhbFtzeW1ib2xQcm9taXNlXSA9IGdsb2JhbFsnUHJvbWlzZSddO1xuICAgIHZhciBaT05FX0FXQVJFX1BST01JU0UgPSBab25lLl9fc3ltYm9sX18oJ1pvbmVBd2FyZVByb21pc2UnKTtcbiAgICB2YXIgZGVzYyA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihnbG9iYWwsICdQcm9taXNlJyk7XG4gICAgaWYgKCFkZXNjIHx8IGRlc2MuY29uZmlndXJhYmxlKSB7XG4gICAgICAgIGRlc2MgJiYgZGVsZXRlIGRlc2Mud3JpdGFibGU7XG4gICAgICAgIGRlc2MgJiYgZGVsZXRlIGRlc2MudmFsdWU7XG4gICAgICAgIGlmICghZGVzYykge1xuICAgICAgICAgICAgZGVzYyA9IHsgY29uZmlndXJhYmxlOiB0cnVlLCBlbnVtZXJhYmxlOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICAgICAgZGVzYy5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSBhbHJlYWR5IHNldCBab25lQXdhcmVQcm9taXNlLCB1c2UgcGF0Y2hlZCBvbmVcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSByZXR1cm4gbmF0aXZlIG9uZS5cbiAgICAgICAgICAgIHJldHVybiBnbG9iYWxbWk9ORV9BV0FSRV9QUk9NSVNFXSA/IGdsb2JhbFtaT05FX0FXQVJFX1BST01JU0VdIDogZ2xvYmFsW3N5bWJvbFByb21pc2VdO1xuICAgICAgICB9O1xuICAgICAgICBkZXNjLnNldCA9IGZ1bmN0aW9uIChOZXdOYXRpdmVQcm9taXNlKSB7XG4gICAgICAgICAgICBpZiAoTmV3TmF0aXZlUHJvbWlzZSA9PT0gWm9uZUF3YXJlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBOZXdOYXRpdmVQcm9taXNlIGlzIFpvbmVBd2FyZVByb21pc2VcbiAgICAgICAgICAgICAgICAvLyBzYXZlIHRvIGdsb2JhbFxuICAgICAgICAgICAgICAgIGdsb2JhbFtaT05FX0FXQVJFX1BST01JU0VdID0gTmV3TmF0aXZlUHJvbWlzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBOZXdOYXRpdmVQcm9taXNlIGlzIG5vdCBab25lQXdhcmVQcm9taXNlXG4gICAgICAgICAgICAgICAgLy8gZm9yIGV4YW1wbGU6IGFmdGVyIGxvYWQgem9uZS5qcywgc29tZSBsaWJyYXJ5IGp1c3RcbiAgICAgICAgICAgICAgICAvLyBzZXQgZXM2LXByb21pc2UgdG8gZ2xvYmFsLCBpZiB3ZSBzZXQgaXQgdG8gZ2xvYmFsXG4gICAgICAgICAgICAgICAgLy8gZGlyZWN0bHksIGFzc2VydFpvbmVQYXRjaGVkIHdpbGwgZmFpbCBhbmQgYW5ndWxhclxuICAgICAgICAgICAgICAgIC8vIHdpbGwgbm90IGxvYWRlZCwgc28gd2UganVzdCBzZXQgdGhlIE5ld05hdGl2ZVByb21pc2VcbiAgICAgICAgICAgICAgICAvLyB0byBnbG9iYWxbc3ltYm9sUHJvbWlzZV0sIHNvIHRoZSByZXN1bHQgaXMganVzdCBsaWtlXG4gICAgICAgICAgICAgICAgLy8gd2UgbG9hZCBFUzYgUHJvbWlzZSBiZWZvcmUgem9uZS5qc1xuICAgICAgICAgICAgICAgIGdsb2JhbFtzeW1ib2xQcm9taXNlXSA9IE5ld05hdGl2ZVByb21pc2U7XG4gICAgICAgICAgICAgICAgaWYgKCFOZXdOYXRpdmVQcm9taXNlLnByb3RvdHlwZVtzeW1ib2xUaGVuXSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRjaFRoZW4oTmV3TmF0aXZlUHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFwaS5zZXROYXRpdmVQcm9taXNlKE5ld05hdGl2ZVByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBPYmplY3REZWZpbmVQcm9wZXJ0eShnbG9iYWwsICdQcm9taXNlJywgZGVzYyk7XG4gICAgfVxuICAgIGdsb2JhbFsnUHJvbWlzZSddID0gWm9uZUF3YXJlUHJvbWlzZTtcbiAgICB2YXIgc3ltYm9sVGhlblBhdGNoZWQgPSBfX3N5bWJvbF9fKCd0aGVuUGF0Y2hlZCcpO1xuICAgIGZ1bmN0aW9uIHBhdGNoVGhlbihDdG9yKSB7XG4gICAgICAgIHZhciBwcm90byA9IEN0b3IucHJvdG90eXBlO1xuICAgICAgICB2YXIgcHJvcCA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgJ3RoZW4nKTtcbiAgICAgICAgaWYgKHByb3AgJiYgKHByb3Aud3JpdGFibGUgPT09IGZhbHNlIHx8ICFwcm9wLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIEN0b3IucHJvdG90eXBlLnRoZW4gcHJvcGVydHlEZXNjcmlwdG9yIGlzIHdyaXRhYmxlIG9yIG5vdFxuICAgICAgICAgICAgLy8gaW4gbWV0ZW9yIGVudiwgd3JpdGFibGUgaXMgZmFsc2UsIHdlIHNob3VsZCBpZ25vcmUgc3VjaCBjYXNlXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9yaWdpbmFsVGhlbiA9IHByb3RvLnRoZW47XG4gICAgICAgIC8vIEtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cbiAgICAgICAgcHJvdG9bc3ltYm9sVGhlbl0gPSBvcmlnaW5hbFRoZW47XG4gICAgICAgIEN0b3IucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAob25SZXNvbHZlLCBvblJlamVjdCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciB3cmFwcGVkID0gbmV3IFpvbmVBd2FyZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsVGhlbi5jYWxsKF90aGlzLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlZC50aGVuKG9uUmVzb2x2ZSwgb25SZWplY3QpO1xuICAgICAgICB9O1xuICAgICAgICBDdG9yW3N5bWJvbFRoZW5QYXRjaGVkXSA9IHRydWU7XG4gICAgfVxuICAgIGFwaS5wYXRjaFRoZW4gPSBwYXRjaFRoZW47XG4gICAgZnVuY3Rpb24gem9uZWlmeShmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdFByb21pc2UgPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdFByb21pc2UgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY3RvciA9IHJlc3VsdFByb21pc2UuY29uc3RydWN0b3I7XG4gICAgICAgICAgICBpZiAoIWN0b3Jbc3ltYm9sVGhlblBhdGNoZWRdKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hUaGVuKGN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChOYXRpdmVQcm9taXNlKSB7XG4gICAgICAgIHBhdGNoVGhlbihOYXRpdmVQcm9taXNlKTtcbiAgICAgICAgdmFyIGZldGNoXzEgPSBnbG9iYWxbJ2ZldGNoJ107XG4gICAgICAgIGlmICh0eXBlb2YgZmV0Y2hfMSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBnbG9iYWxbYXBpLnN5bWJvbCgnZmV0Y2gnKV0gPSBmZXRjaF8xO1xuICAgICAgICAgICAgZ2xvYmFsWydmZXRjaCddID0gem9uZWlmeShmZXRjaF8xKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBUaGlzIGlzIG5vdCBwYXJ0IG9mIHB1YmxpYyBBUEksIGJ1dCBpdCBpcyB1c2VmdWwgZm9yIHRlc3RzLCBzbyB3ZSBleHBvc2UgaXQuXG4gICAgUHJvbWlzZVtab25lLl9fc3ltYm9sX18oJ3VuY2F1Z2h0UHJvbWlzZUVycm9ycycpXSA9IF91bmNhdWdodFByb21pc2VFcnJvcnM7XG4gICAgcmV0dXJuIFpvbmVBd2FyZVByb21pc2U7XG59KTtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBTdXBwcmVzcyBjbG9zdXJlIGNvbXBpbGVyIGVycm9ycyBhYm91dCB1bmtub3duICdab25lJyB2YXJpYWJsZVxuICogQGZpbGVvdmVydmlld1xuICogQHN1cHByZXNzIHt1bmRlZmluZWRWYXJzLGdsb2JhbFRoaXMsbWlzc2luZ1JlcXVpcmV9XG4gKi9cbi8vIGlzc3VlICM5ODksIHRvIHJlZHVjZSBidW5kbGUgc2l6ZSwgdXNlIHNob3J0IG5hbWVcbi8qKiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICovXG52YXIgT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbi8qKiBPYmplY3QuZGVmaW5lUHJvcGVydHkgKi9cbnZhciBPYmplY3REZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8qKiBPYmplY3QuZ2V0UHJvdG90eXBlT2YgKi9cbnZhciBPYmplY3RHZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbi8qKiBPYmplY3QuY3JlYXRlICovXG52YXIgT2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbi8qKiBBcnJheS5wcm90b3R5cGUuc2xpY2UgKi9cbnZhciBBcnJheVNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuLyoqIGFkZEV2ZW50TGlzdGVuZXIgc3RyaW5nIGNvbnN0ICovXG52YXIgQUREX0VWRU5UX0xJU1RFTkVSX1NUUiA9ICdhZGRFdmVudExpc3RlbmVyJztcbi8qKiByZW1vdmVFdmVudExpc3RlbmVyIHN0cmluZyBjb25zdCAqL1xudmFyIFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIgPSAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG4vKiogem9uZVN5bWJvbCBhZGRFdmVudExpc3RlbmVyICovXG52YXIgWk9ORV9TWU1CT0xfQUREX0VWRU5UX0xJU1RFTkVSID0gWm9uZS5fX3N5bWJvbF9fKEFERF9FVkVOVF9MSVNURU5FUl9TVFIpO1xuLyoqIHpvbmVTeW1ib2wgcmVtb3ZlRXZlbnRMaXN0ZW5lciAqL1xudmFyIFpPTkVfU1lNQk9MX1JFTU9WRV9FVkVOVF9MSVNURU5FUiA9IFpvbmUuX19zeW1ib2xfXyhSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSKTtcbi8qKiB0cnVlIHN0cmluZyBjb25zdCAqL1xudmFyIFRSVUVfU1RSID0gJ3RydWUnO1xuLyoqIGZhbHNlIHN0cmluZyBjb25zdCAqL1xudmFyIEZBTFNFX1NUUiA9ICdmYWxzZSc7XG4vKiogX196b25lX3N5bWJvbF9fIHN0cmluZyBjb25zdCAqL1xudmFyIFpPTkVfU1lNQk9MX1BSRUZJWCA9ICdfX3pvbmVfc3ltYm9sX18nO1xuZnVuY3Rpb24gd3JhcFdpdGhDdXJyZW50Wm9uZShjYWxsYmFjaywgc291cmNlKSB7XG4gICAgcmV0dXJuIFpvbmUuY3VycmVudC53cmFwKGNhbGxiYWNrLCBzb3VyY2UpO1xufVxuZnVuY3Rpb24gc2NoZWR1bGVNYWNyb1Rhc2tXaXRoQ3VycmVudFpvbmUoc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCkge1xuICAgIHJldHVybiBab25lLmN1cnJlbnQuc2NoZWR1bGVNYWNyb1Rhc2soc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCk7XG59XG52YXIgem9uZVN5bWJvbCA9IFpvbmUuX19zeW1ib2xfXztcbnZhciBpc1dpbmRvd0V4aXN0cyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xudmFyIGludGVybmFsV2luZG93ID0gaXNXaW5kb3dFeGlzdHMgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG52YXIgX2dsb2JhbCA9IGlzV2luZG93RXhpc3RzICYmIGludGVybmFsV2luZG93IHx8IHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyAmJiBzZWxmIHx8IGdsb2JhbDtcbnZhciBSRU1PVkVfQVRUUklCVVRFID0gJ3JlbW92ZUF0dHJpYnV0ZSc7XG52YXIgTlVMTF9PTl9QUk9QX1ZBTFVFID0gW251bGxdO1xuZnVuY3Rpb24gYmluZEFyZ3VtZW50cyhhcmdzLCBzb3VyY2UpIHtcbiAgICBmb3IgKHZhciBpID0gYXJncy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbaV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFyZ3NbaV0gPSB3cmFwV2l0aEN1cnJlbnRab25lKGFyZ3NbaV0sIHNvdXJjZSArICdfJyArIGkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcmdzO1xufVxuZnVuY3Rpb24gcGF0Y2hQcm90b3R5cGUocHJvdG90eXBlLCBmbk5hbWVzKSB7XG4gICAgdmFyIHNvdXJjZSA9IHByb3RvdHlwZS5jb25zdHJ1Y3RvclsnbmFtZSddO1xuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdmFyIG5hbWVfMSA9IGZuTmFtZXNbaV07XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IHByb3RvdHlwZVtuYW1lXzFdO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICAgIHZhciBwcm90b3R5cGVEZXNjID0gT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwgbmFtZV8xKTtcbiAgICAgICAgICAgIGlmICghaXNQcm9wZXJ0eVdyaXRhYmxlKHByb3RvdHlwZURlc2MpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb3RvdHlwZVtuYW1lXzFdID0gKGZ1bmN0aW9uIChkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHZhciBwYXRjaGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuYXBwbHkodGhpcywgYmluZEFyZ3VtZW50cyhhcmd1bWVudHMsIHNvdXJjZSArICcuJyArIG5hbWVfMSkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHBhdGNoZWQsIGRlbGVnYXRlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGF0Y2hlZDtcbiAgICAgICAgICAgIH0pKGRlbGVnYXRlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbk5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIF9sb29wXzEoaSk7XG4gICAgfVxufVxuZnVuY3Rpb24gaXNQcm9wZXJ0eVdyaXRhYmxlKHByb3BlcnR5RGVzYykge1xuICAgIGlmICghcHJvcGVydHlEZXNjKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAocHJvcGVydHlEZXNjLndyaXRhYmxlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAhKHR5cGVvZiBwcm9wZXJ0eURlc2MuZ2V0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBwcm9wZXJ0eURlc2Muc2V0ID09PSAndW5kZWZpbmVkJyk7XG59XG52YXIgaXNXZWJXb3JrZXIgPSAodHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGUpO1xuLy8gTWFrZSBzdXJlIHRvIGFjY2VzcyBgcHJvY2Vzc2AgdGhyb3VnaCBgX2dsb2JhbGAgc28gdGhhdCBXZWJQYWNrIGRvZXMgbm90IGFjY2lkZW50YWxseSBicm93c2VyaWZ5XG4vLyB0aGlzIGNvZGUuXG52YXIgaXNOb2RlID0gKCEoJ253JyBpbiBfZ2xvYmFsKSAmJiB0eXBlb2YgX2dsb2JhbC5wcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHt9LnRvU3RyaW5nLmNhbGwoX2dsb2JhbC5wcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKTtcbnZhciBpc0Jyb3dzZXIgPSAhaXNOb2RlICYmICFpc1dlYldvcmtlciAmJiAhIShpc1dpbmRvd0V4aXN0cyAmJiBpbnRlcm5hbFdpbmRvd1snSFRNTEVsZW1lbnQnXSk7XG4vLyB3ZSBhcmUgaW4gZWxlY3Ryb24gb2YgbncsIHNvIHdlIGFyZSBib3RoIGJyb3dzZXIgYW5kIG5vZGVqc1xuLy8gTWFrZSBzdXJlIHRvIGFjY2VzcyBgcHJvY2Vzc2AgdGhyb3VnaCBgX2dsb2JhbGAgc28gdGhhdCBXZWJQYWNrIGRvZXMgbm90IGFjY2lkZW50YWxseSBicm93c2VyaWZ5XG4vLyB0aGlzIGNvZGUuXG52YXIgaXNNaXggPSB0eXBlb2YgX2dsb2JhbC5wcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHt9LnRvU3RyaW5nLmNhbGwoX2dsb2JhbC5wcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nICYmICFpc1dlYldvcmtlciAmJlxuICAgICEhKGlzV2luZG93RXhpc3RzICYmIGludGVybmFsV2luZG93WydIVE1MRWxlbWVudCddKTtcbnZhciB6b25lU3ltYm9sRXZlbnROYW1lcyA9IHt9O1xudmFyIHdyYXBGbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzkxMSwgaW4gSUUsIHNvbWV0aW1lc1xuICAgIC8vIGV2ZW50IHdpbGwgYmUgdW5kZWZpbmVkLCBzbyB3ZSBuZWVkIHRvIHVzZSB3aW5kb3cuZXZlbnRcbiAgICBldmVudCA9IGV2ZW50IHx8IF9nbG9iYWwuZXZlbnQ7XG4gICAgaWYgKCFldmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBldmVudE5hbWVTeW1ib2wgPSB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudC50eXBlXTtcbiAgICBpZiAoIWV2ZW50TmFtZVN5bWJvbCkge1xuICAgICAgICBldmVudE5hbWVTeW1ib2wgPSB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudC50eXBlXSA9IHpvbmVTeW1ib2woJ09OX1BST1BFUlRZJyArIGV2ZW50LnR5cGUpO1xuICAgIH1cbiAgICB2YXIgdGFyZ2V0ID0gdGhpcyB8fCBldmVudC50YXJnZXQgfHwgX2dsb2JhbDtcbiAgICB2YXIgbGlzdGVuZXIgPSB0YXJnZXRbZXZlbnROYW1lU3ltYm9sXTtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGlmIChpc0Jyb3dzZXIgJiYgdGFyZ2V0ID09PSBpbnRlcm5hbFdpbmRvdyAmJiBldmVudC50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAgIC8vIHdpbmRvdy5vbmVycm9yIGhhdmUgZGlmZmVyZW50IHNpZ25pdHVyZVxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvR2xvYmFsRXZlbnRIYW5kbGVycy9vbmVycm9yI3dpbmRvdy5vbmVycm9yXG4gICAgICAgIC8vIGFuZCBvbmVycm9yIGNhbGxiYWNrIHdpbGwgcHJldmVudCBkZWZhdWx0IHdoZW4gY2FsbGJhY2sgcmV0dXJuIHRydWVcbiAgICAgICAgdmFyIGVycm9yRXZlbnQgPSBldmVudDtcbiAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIgJiZcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXJyb3JFdmVudC5tZXNzYWdlLCBlcnJvckV2ZW50LmZpbGVuYW1lLCBlcnJvckV2ZW50LmxpbmVubywgZXJyb3JFdmVudC5jb2xubywgZXJyb3JFdmVudC5lcnJvcik7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyICYmIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGlmIChyZXN1bHQgIT0gdW5kZWZpbmVkICYmICFyZXN1bHQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5mdW5jdGlvbiBwYXRjaFByb3BlcnR5KG9iaiwgcHJvcCwgcHJvdG90eXBlKSB7XG4gICAgdmFyIGRlc2MgPSBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKTtcbiAgICBpZiAoIWRlc2MgJiYgcHJvdG90eXBlKSB7XG4gICAgICAgIC8vIHdoZW4gcGF0Y2ggd2luZG93IG9iamVjdCwgdXNlIHByb3RvdHlwZSB0byBjaGVjayBwcm9wIGV4aXN0IG9yIG5vdFxuICAgICAgICB2YXIgcHJvdG90eXBlRGVzYyA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIHByb3ApO1xuICAgICAgICBpZiAocHJvdG90eXBlRGVzYykge1xuICAgICAgICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgdGhlIGRlc2NyaXB0b3Igbm90IGV4aXN0cyBvciBpcyBub3QgY29uZmlndXJhYmxlXG4gICAgLy8ganVzdCByZXR1cm5cbiAgICBpZiAoIWRlc2MgfHwgIWRlc2MuY29uZmlndXJhYmxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG9uUHJvcFBhdGNoZWRTeW1ib2wgPSB6b25lU3ltYm9sKCdvbicgKyBwcm9wICsgJ3BhdGNoZWQnKTtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KG9uUHJvcFBhdGNoZWRTeW1ib2wpICYmIG9ialtvblByb3BQYXRjaGVkU3ltYm9sXSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEEgcHJvcGVydHkgZGVzY3JpcHRvciBjYW5ub3QgaGF2ZSBnZXR0ZXIvc2V0dGVyIGFuZCBiZSB3cml0YWJsZVxuICAgIC8vIGRlbGV0aW5nIHRoZSB3cml0YWJsZSBhbmQgdmFsdWUgcHJvcGVydGllcyBhdm9pZHMgdGhpcyBlcnJvcjpcbiAgICAvL1xuICAgIC8vIFR5cGVFcnJvcjogcHJvcGVydHkgZGVzY3JpcHRvcnMgbXVzdCBub3Qgc3BlY2lmeSBhIHZhbHVlIG9yIGJlIHdyaXRhYmxlIHdoZW4gYVxuICAgIC8vIGdldHRlciBvciBzZXR0ZXIgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAgZGVsZXRlIGRlc2Mud3JpdGFibGU7XG4gICAgZGVsZXRlIGRlc2MudmFsdWU7XG4gICAgdmFyIG9yaWdpbmFsRGVzY0dldCA9IGRlc2MuZ2V0O1xuICAgIHZhciBvcmlnaW5hbERlc2NTZXQgPSBkZXNjLnNldDtcbiAgICAvLyBzdWJzdHIoMikgY3V6ICdvbmNsaWNrJyAtPiAnY2xpY2snLCBldGNcbiAgICB2YXIgZXZlbnROYW1lID0gcHJvcC5zdWJzdHIoMik7XG4gICAgdmFyIGV2ZW50TmFtZVN5bWJvbCA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gICAgaWYgKCFldmVudE5hbWVTeW1ib2wpIHtcbiAgICAgICAgZXZlbnROYW1lU3ltYm9sID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXSA9IHpvbmVTeW1ib2woJ09OX1BST1BFUlRZJyArIGV2ZW50TmFtZSk7XG4gICAgfVxuICAgIGRlc2Muc2V0ID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgIC8vIGluIHNvbWUgb2Ygd2luZG93cydzIG9ucHJvcGVydHkgY2FsbGJhY2ssIHRoaXMgaXMgdW5kZWZpbmVkXG4gICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gY2hlY2sgaXRcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgICAgIGlmICghdGFyZ2V0ICYmIG9iaiA9PT0gX2dsb2JhbCkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gX2dsb2JhbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcmV2aW91c1ZhbHVlID0gdGFyZ2V0W2V2ZW50TmFtZVN5bWJvbF07XG4gICAgICAgIGlmIChwcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHdyYXBGbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaXNzdWUgIzk3OCwgd2hlbiBvbmxvYWQgaGFuZGxlciB3YXMgYWRkZWQgYmVmb3JlIGxvYWRpbmcgem9uZS5qc1xuICAgICAgICAvLyB3ZSBzaG91bGQgcmVtb3ZlIGl0IHdpdGggb3JpZ2luYWxEZXNjU2V0XG4gICAgICAgIGlmIChvcmlnaW5hbERlc2NTZXQpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsRGVzY1NldC5hcHBseSh0YXJnZXQsIE5VTExfT05fUFJPUF9WQUxVRSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGFyZ2V0W2V2ZW50TmFtZVN5bWJvbF0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgd3JhcEZuLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbZXZlbnROYW1lU3ltYm9sXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFRoZSBnZXR0ZXIgd291bGQgcmV0dXJuIHVuZGVmaW5lZCBmb3IgdW5hc3NpZ25lZCBwcm9wZXJ0aWVzIGJ1dCB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBhblxuICAgIC8vIHVuYXNzaWduZWQgcHJvcGVydHkgaXMgbnVsbFxuICAgIGRlc2MuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBpbiBzb21lIG9mIHdpbmRvd3MncyBvbnByb3BlcnR5IGNhbGxiYWNrLCB0aGlzIGlzIHVuZGVmaW5lZFxuICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIGNoZWNrIGl0XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzO1xuICAgICAgICBpZiAoIXRhcmdldCAmJiBvYmogPT09IF9nbG9iYWwpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IF9nbG9iYWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRhcmdldFtldmVudE5hbWVTeW1ib2xdO1xuICAgICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcmlnaW5hbERlc2NHZXQpIHtcbiAgICAgICAgICAgIC8vIHJlc3VsdCB3aWxsIGJlIG51bGwgd2hlbiB1c2UgaW5saW5lIGV2ZW50IGF0dHJpYnV0ZSxcbiAgICAgICAgICAgIC8vIHN1Y2ggYXMgPGJ1dHRvbiBvbmNsaWNrPVwiZnVuYygpO1wiPk9LPC9idXR0b24+XG4gICAgICAgICAgICAvLyBiZWNhdXNlIHRoZSBvbmNsaWNrIGZ1bmN0aW9uIGlzIGludGVybmFsIHJhdyB1bmNvbXBpbGVkIGhhbmRsZXJcbiAgICAgICAgICAgIC8vIHRoZSBvbmNsaWNrIHdpbGwgYmUgZXZhbHVhdGVkIHdoZW4gZmlyc3QgdGltZSBldmVudCB3YXMgdHJpZ2dlcmVkIG9yXG4gICAgICAgICAgICAvLyB0aGUgcHJvcGVydHkgaXMgYWNjZXNzZWQsIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzUyNVxuICAgICAgICAgICAgLy8gc28gd2Ugc2hvdWxkIHVzZSBvcmlnaW5hbCBuYXRpdmUgZ2V0IHRvIHJldHJpZXZlIHRoZSBoYW5kbGVyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBvcmlnaW5hbERlc2NHZXQgJiYgb3JpZ2luYWxEZXNjR2V0LmNhbGwodGhpcyk7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkZXNjLnNldC5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtSRU1PVkVfQVRUUklCVVRFXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBPYmplY3REZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MpO1xuICAgIG9ialtvblByb3BQYXRjaGVkU3ltYm9sXSA9IHRydWU7XG59XG5mdW5jdGlvbiBwYXRjaE9uUHJvcGVydGllcyhvYmosIHByb3BlcnRpZXMsIHByb3RvdHlwZSkge1xuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGF0Y2hQcm9wZXJ0eShvYmosICdvbicgKyBwcm9wZXJ0aWVzW2ldLCBwcm90b3R5cGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgb25Qcm9wZXJ0aWVzID0gW107XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAocHJvcC5zdWJzdHIoMCwgMikgPT0gJ29uJykge1xuICAgICAgICAgICAgICAgIG9uUHJvcGVydGllcy5wdXNoKHByb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgb25Qcm9wZXJ0aWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBwYXRjaFByb3BlcnR5KG9iaiwgb25Qcm9wZXJ0aWVzW2pdLCBwcm90b3R5cGUpO1xuICAgICAgICB9XG4gICAgfVxufVxudmFyIG9yaWdpbmFsSW5zdGFuY2VLZXkgPSB6b25lU3ltYm9sKCdvcmlnaW5hbEluc3RhbmNlJyk7XG4vLyB3cmFwIHNvbWUgbmF0aXZlIEFQSSBvbiBgd2luZG93YFxuZnVuY3Rpb24gcGF0Y2hDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB2YXIgT3JpZ2luYWxDbGFzcyA9IF9nbG9iYWxbY2xhc3NOYW1lXTtcbiAgICBpZiAoIU9yaWdpbmFsQ2xhc3MpXG4gICAgICAgIHJldHVybjtcbiAgICAvLyBrZWVwIG9yaWdpbmFsIGNsYXNzIGluIGdsb2JhbFxuICAgIF9nbG9iYWxbem9uZVN5bWJvbChjbGFzc05hbWUpXSA9IE9yaWdpbmFsQ2xhc3M7XG4gICAgX2dsb2JhbFtjbGFzc05hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYSA9IGJpbmRBcmd1bWVudHMoYXJndW1lbnRzLCBjbGFzc05hbWUpO1xuICAgICAgICBzd2l0Y2ggKGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdLCBhWzFdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSwgYVsxXSwgYVsyXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0sIGFbMV0sIGFbMl0sIGFbM10pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FyZyBsaXN0IHRvbyBsb25nLicpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBhdHRhY2ggb3JpZ2luYWwgZGVsZWdhdGUgdG8gcGF0Y2hlZCBmdW5jdGlvblxuICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChfZ2xvYmFsW2NsYXNzTmFtZV0sIE9yaWdpbmFsQ2xhc3MpO1xuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBPcmlnaW5hbENsYXNzKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgdmFyIHByb3A7XG4gICAgZm9yIChwcm9wIGluIGluc3RhbmNlKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD00NDcyMVxuICAgICAgICBpZiAoY2xhc3NOYW1lID09PSAnWE1MSHR0cFJlcXVlc3QnICYmIHByb3AgPT09ICdyZXNwb25zZUJsb2InKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnN0YW5jZVtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIF9nbG9iYWxbY2xhc3NOYW1lXS5wcm90b3R5cGVbcHJvcF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdLmFwcGx5KHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0sIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdERlZmluZVByb3BlcnR5KF9nbG9iYWxbY2xhc3NOYW1lXS5wcm90b3R5cGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdID0gd3JhcFdpdGhDdXJyZW50Wm9uZShmbiwgY2xhc3NOYW1lICsgJy4nICsgcHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2VlcCBjYWxsYmFjayBpbiB3cmFwcGVkIGZ1bmN0aW9uIHNvIHdlIGNhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZSBpdCBpbiBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgdG8gcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG5hdGl2ZSBvbmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF0sIGZuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF0gPSBmbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KHByb3ApKTtcbiAgICB9XG4gICAgZm9yIChwcm9wIGluIE9yaWdpbmFsQ2xhc3MpIHtcbiAgICAgICAgaWYgKHByb3AgIT09ICdwcm90b3R5cGUnICYmIE9yaWdpbmFsQ2xhc3MuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgIF9nbG9iYWxbY2xhc3NOYW1lXVtwcm9wXSA9IE9yaWdpbmFsQ2xhc3NbcHJvcF07XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBjb3B5U3ltYm9sUHJvcGVydGllcyhzcmMsIGRlc3QpIHtcbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc3JjKTtcbiAgICBzeW1ib2xzLmZvckVhY2goZnVuY3Rpb24gKHN5bWJvbCkge1xuICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc3JjLCBzeW1ib2wpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgc3ltYm9sLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3JjW3N5bWJvbF07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVzYyAmJiAoIWRlc2Mud3JpdGFibGUgfHwgdHlwZW9mIGRlc2Muc2V0ICE9PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBzcmNbc3ltYm9sXSBpcyBub3Qgd3JpdGFibGUgb3Igbm90IGhhdmUgYSBzZXR0ZXIsIGp1c3QgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3JjW3N5bWJvbF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBkZXNjID8gZGVzYy5lbnVtZXJhYmxlIDogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZGVzYyA/IGRlc2MuY29uZmlndXJhYmxlIDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbnZhciBzaG91bGRDb3B5U3ltYm9sUHJvcGVydGllcyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBwYXRjaE1ldGhvZCh0YXJnZXQsIG5hbWUsIHBhdGNoRm4pIHtcbiAgICB2YXIgcHJvdG8gPSB0YXJnZXQ7XG4gICAgd2hpbGUgKHByb3RvICYmICFwcm90by5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBwcm90byA9IE9iamVjdEdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgICB9XG4gICAgaWYgKCFwcm90byAmJiB0YXJnZXRbbmFtZV0pIHtcbiAgICAgICAgLy8gc29tZWhvdyB3ZSBkaWQgbm90IGZpbmQgaXQsIGJ1dCB3ZSBjYW4gc2VlIGl0LiBUaGlzIGhhcHBlbnMgb24gSUUgZm9yIFdpbmRvdyBwcm9wZXJ0aWVzLlxuICAgICAgICBwcm90byA9IHRhcmdldDtcbiAgICB9XG4gICAgdmFyIGRlbGVnYXRlTmFtZSA9IHpvbmVTeW1ib2wobmFtZSk7XG4gICAgdmFyIGRlbGVnYXRlID0gbnVsbDtcbiAgICBpZiAocHJvdG8gJiYgIShkZWxlZ2F0ZSA9IHByb3RvW2RlbGVnYXRlTmFtZV0pKSB7XG4gICAgICAgIGRlbGVnYXRlID0gcHJvdG9bZGVsZWdhdGVOYW1lXSA9IHByb3RvW25hbWVdO1xuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHByb3RvW25hbWVdIGlzIHdyaXRhYmxlXG4gICAgICAgIC8vIHNvbWUgcHJvcGVydHkgaXMgcmVhZG9ubHkgaW4gc2FmYXJpLCBzdWNoIGFzIEh0bWxDYW52YXNFbGVtZW50LnByb3RvdHlwZS50b0Jsb2JcbiAgICAgICAgdmFyIGRlc2MgPSBwcm90byAmJiBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIG5hbWUpO1xuICAgICAgICBpZiAoaXNQcm9wZXJ0eVdyaXRhYmxlKGRlc2MpKSB7XG4gICAgICAgICAgICB2YXIgcGF0Y2hEZWxlZ2F0ZV8xID0gcGF0Y2hGbihkZWxlZ2F0ZSwgZGVsZWdhdGVOYW1lLCBuYW1lKTtcbiAgICAgICAgICAgIHByb3RvW25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXRjaERlbGVnYXRlXzEodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocHJvdG9bbmFtZV0sIGRlbGVnYXRlKTtcbiAgICAgICAgICAgIGlmIChzaG91bGRDb3B5U3ltYm9sUHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIGNvcHlTeW1ib2xQcm9wZXJ0aWVzKGRlbGVnYXRlLCBwcm90b1tuYW1lXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlbGVnYXRlO1xufVxuLy8gVE9ETzogQEppYUxpUGFzc2lvbiwgc3VwcG9ydCBjYW5jZWwgdGFzayBsYXRlciBpZiBuZWNlc3NhcnlcbmZ1bmN0aW9uIHBhdGNoTWFjcm9UYXNrKG9iaiwgZnVuY05hbWUsIG1ldGFDcmVhdG9yKSB7XG4gICAgdmFyIHNldE5hdGl2ZSA9IG51bGw7XG4gICAgZnVuY3Rpb24gc2NoZWR1bGVUYXNrKHRhc2spIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0YXNrLmRhdGE7XG4gICAgICAgIGRhdGEuYXJnc1tkYXRhLmNiSWR4XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRhc2suaW52b2tlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICAgIHNldE5hdGl2ZS5hcHBseShkYXRhLnRhcmdldCwgZGF0YS5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfVxuICAgIHNldE5hdGl2ZSA9IHBhdGNoTWV0aG9kKG9iaiwgZnVuY05hbWUsIGZ1bmN0aW9uIChkZWxlZ2F0ZSkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgdmFyIG1ldGEgPSBtZXRhQ3JlYXRvcihzZWxmLCBhcmdzKTtcbiAgICAgICAgaWYgKG1ldGEuY2JJZHggPj0gMCAmJiB0eXBlb2YgYXJnc1ttZXRhLmNiSWR4XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlTWFjcm9UYXNrV2l0aEN1cnJlbnRab25lKG1ldGEubmFtZSwgYXJnc1ttZXRhLmNiSWR4XSwgbWV0YSwgc2NoZWR1bGVUYXNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNhdXNlIGFuIGVycm9yIGJ5IGNhbGxpbmcgaXQgZGlyZWN0bHkuXG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgIH1cbiAgICB9OyB9KTtcbn1cblxuZnVuY3Rpb24gYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHBhdGNoZWQsIG9yaWdpbmFsKSB7XG4gICAgcGF0Y2hlZFt6b25lU3ltYm9sKCdPcmlnaW5hbERlbGVnYXRlJyldID0gb3JpZ2luYWw7XG59XG52YXIgaXNEZXRlY3RlZElFT3JFZGdlID0gZmFsc2U7XG52YXIgaWVPckVkZ2UgPSBmYWxzZTtcbmZ1bmN0aW9uIGlzSUUoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHVhID0gaW50ZXJuYWxXaW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgaWYgKHVhLmluZGV4T2YoJ01TSUUgJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ1RyaWRlbnQvJykgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNJRU9yRWRnZSgpIHtcbiAgICBpZiAoaXNEZXRlY3RlZElFT3JFZGdlKSB7XG4gICAgICAgIHJldHVybiBpZU9yRWRnZTtcbiAgICB9XG4gICAgaXNEZXRlY3RlZElFT3JFZGdlID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICB2YXIgdWEgPSBpbnRlcm5hbFdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICBpZiAodWEuaW5kZXhPZignTVNJRSAnKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignVHJpZGVudC8nKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignRWRnZS8nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGllT3JFZGdlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICB9XG4gICAgcmV0dXJuIGllT3JFZGdlO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vLyBvdmVycmlkZSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgdG8gbWFrZSB6b25lLmpzIHBhdGNoZWQgZnVuY3Rpb25cbi8vIGxvb2sgbGlrZSBuYXRpdmUgZnVuY3Rpb25cblpvbmUuX19sb2FkX3BhdGNoKCd0b1N0cmluZycsIGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICAvLyBwYXRjaCBGdW5jLnByb3RvdHlwZS50b1N0cmluZyB0byBsZXQgdGhlbSBsb29rIGxpa2UgbmF0aXZlXG4gICAgdmFyIG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcbiAgICB2YXIgT1JJR0lOQUxfREVMRUdBVEVfU1lNQk9MID0gem9uZVN5bWJvbCgnT3JpZ2luYWxEZWxlZ2F0ZScpO1xuICAgIHZhciBQUk9NSVNFX1NZTUJPTCA9IHpvbmVTeW1ib2woJ1Byb21pc2UnKTtcbiAgICB2YXIgRVJST1JfU1lNQk9MID0gem9uZVN5bWJvbCgnRXJyb3InKTtcbiAgICB2YXIgbmV3RnVuY3Rpb25Ub1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbERlbGVnYXRlID0gdGhpc1tPUklHSU5BTF9ERUxFR0FURV9TWU1CT0xdO1xuICAgICAgICAgICAgaWYgKG9yaWdpbmFsRGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9yaWdpbmFsRGVsZWdhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZy5jYWxsKG9yaWdpbmFsRGVsZWdhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvcmlnaW5hbERlbGVnYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcyA9PT0gUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHZhciBuYXRpdmVQcm9taXNlID0gZ2xvYmFsW1BST01JU0VfU1lNQk9MXTtcbiAgICAgICAgICAgICAgICBpZiAobmF0aXZlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nLmNhbGwobmF0aXZlUHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMgPT09IEVycm9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hdGl2ZUVycm9yID0gZ2xvYmFsW0VSUk9SX1NZTUJPTF07XG4gICAgICAgICAgICAgICAgaWYgKG5hdGl2ZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmcuY2FsbChuYXRpdmVFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIG5ld0Z1bmN0aW9uVG9TdHJpbmdbT1JJR0lOQUxfREVMRUdBVEVfU1lNQk9MXSA9IG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZztcbiAgICBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBuZXdGdW5jdGlvblRvU3RyaW5nO1xuICAgIC8vIHBhdGNoIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgdG8gbGV0IHRoZW0gbG9vayBsaWtlIG5hdGl2ZVxuICAgIHZhciBvcmlnaW5hbE9iamVjdFRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgICB2YXIgUFJPTUlTRV9PQkpFQ1RfVE9fU1RSSU5HID0gJ1tvYmplY3QgUHJvbWlzZV0nO1xuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIFBST01JU0VfT0JKRUNUX1RPX1NUUklORztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxPYmplY3RUb1N0cmluZy5jYWxsKHRoaXMpO1xuICAgIH07XG59KTtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBAc3VwcHJlc3Mge21pc3NpbmdSZXF1aXJlfVxuICovXG52YXIgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcGFzc2l2ZVN1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG59XG4vLyBhbiBpZGVudGlmaWVyIHRvIHRlbGwgWm9uZVRhc2sgZG8gbm90IGNyZWF0ZSBhIG5ldyBpbnZva2UgY2xvc3VyZVxudmFyIE9QVElNSVpFRF9aT05FX0VWRU5UX1RBU0tfREFUQSA9IHtcbiAgICB1c2VHOiB0cnVlXG59O1xudmFyIHpvbmVTeW1ib2xFdmVudE5hbWVzJDEgPSB7fTtcbnZhciBnbG9iYWxTb3VyY2VzID0ge307XG52YXIgRVZFTlRfTkFNRV9TWU1CT0xfUkVHWCA9IC9eX196b25lX3N5bWJvbF9fKFxcdyspKHRydWV8ZmFsc2UpJC87XG52YXIgSU1NRURJQVRFX1BST1BBR0FUSU9OX1NZTUJPTCA9ICgnX196b25lX3N5bWJvbF9fcHJvcGFnYXRpb25TdG9wcGVkJyk7XG5mdW5jdGlvbiBwYXRjaEV2ZW50VGFyZ2V0KF9nbG9iYWwsIGFwaXMsIHBhdGNoT3B0aW9ucykge1xuICAgIHZhciBBRERfRVZFTlRfTElTVEVORVIgPSAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5hZGQpIHx8IEFERF9FVkVOVF9MSVNURU5FUl9TVFI7XG4gICAgdmFyIFJFTU9WRV9FVkVOVF9MSVNURU5FUiA9IChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnJtKSB8fCBSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSO1xuICAgIHZhciBMSVNURU5FUlNfRVZFTlRfTElTVEVORVIgPSAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5saXN0ZW5lcnMpIHx8ICdldmVudExpc3RlbmVycyc7XG4gICAgdmFyIFJFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSID0gKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMucm1BbGwpIHx8ICdyZW1vdmVBbGxMaXN0ZW5lcnMnO1xuICAgIHZhciB6b25lU3ltYm9sQWRkRXZlbnRMaXN0ZW5lciA9IHpvbmVTeW1ib2woQUREX0VWRU5UX0xJU1RFTkVSKTtcbiAgICB2YXIgQUREX0VWRU5UX0xJU1RFTkVSX1NPVVJDRSA9ICcuJyArIEFERF9FVkVOVF9MSVNURU5FUiArICc6JztcbiAgICB2YXIgUFJFUEVORF9FVkVOVF9MSVNURU5FUiA9ICdwcmVwZW5kTGlzdGVuZXInO1xuICAgIHZhciBQUkVQRU5EX0VWRU5UX0xJU1RFTkVSX1NPVVJDRSA9ICcuJyArIFBSRVBFTkRfRVZFTlRfTElTVEVORVIgKyAnOic7XG4gICAgdmFyIGludm9rZVRhc2sgPSBmdW5jdGlvbiAodGFzaywgdGFyZ2V0LCBldmVudCkge1xuICAgICAgICAvLyBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlLCBjaGVjayBpc1JlbW92ZWQgd2hpY2ggaXMgc2V0XG4gICAgICAgIC8vIGJ5IHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgaWYgKHRhc2suaXNSZW1vdmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlbGVnYXRlID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgaWYgKHR5cGVvZiBkZWxlZ2F0ZSA9PT0gJ29iamVjdCcgJiYgZGVsZWdhdGUuaGFuZGxlRXZlbnQpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgYmluZCB2ZXJzaW9uIG9mIGhhbmRsZUV2ZW50IHdoZW4gaW52b2tlXG4gICAgICAgICAgICB0YXNrLmNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBkZWxlZ2F0ZS5oYW5kbGVFdmVudChldmVudCk7IH07XG4gICAgICAgICAgICB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbnZva2Ugc3RhdGljIHRhc2suaW52b2tlXG4gICAgICAgIHRhc2suaW52b2tlKHRhc2ssIHRhcmdldCwgW2V2ZW50XSk7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGFzay5vcHRpb25zO1xuICAgICAgICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgJiYgb3B0aW9ucy5vbmNlKSB7XG4gICAgICAgICAgICAvLyBpZiBvcHRpb25zLm9uY2UgaXMgdHJ1ZSwgYWZ0ZXIgaW52b2tlIG9uY2UgcmVtb3ZlIGxpc3RlbmVyIGhlcmVcbiAgICAgICAgICAgIC8vIG9ubHkgYnJvd3NlciBuZWVkIHRvIGRvIHRoaXMsIG5vZGVqcyBldmVudEVtaXR0ZXIgd2lsbCBjYWwgcmVtb3ZlTGlzdGVuZXJcbiAgICAgICAgICAgIC8vIGluc2lkZSBFdmVudEVtaXR0ZXIub25jZVxuICAgICAgICAgICAgdmFyIGRlbGVnYXRlXzEgPSB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPyB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgOiB0YXNrLmNhbGxiYWNrO1xuICAgICAgICAgICAgdGFyZ2V0W1JFTU9WRV9FVkVOVF9MSVNURU5FUl0uY2FsbCh0YXJnZXQsIGV2ZW50LnR5cGUsIGRlbGVnYXRlXzEsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBnbG9iYWwgc2hhcmVkIHpvbmVBd2FyZUNhbGxiYWNrIHRvIGhhbmRsZSBhbGwgZXZlbnQgY2FsbGJhY2sgd2l0aCBjYXB0dXJlID0gZmFsc2VcbiAgICB2YXIgZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvOTExLCBpbiBJRSwgc29tZXRpbWVzXG4gICAgICAgIC8vIGV2ZW50IHdpbGwgYmUgdW5kZWZpbmVkLCBzbyB3ZSBuZWVkIHRvIHVzZSB3aW5kb3cuZXZlbnRcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCBfZ2xvYmFsLmV2ZW50O1xuICAgICAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXZlbnQudGFyZ2V0IGlzIG5lZWRlZCBmb3IgU2Ftc3VuZyBUViBhbmQgU291cmNlQnVmZmVyXG4gICAgICAgIC8vIHx8IGdsb2JhbCBpcyBuZWVkZWQgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvMTkwXG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzIHx8IGV2ZW50LnRhcmdldCB8fCBfZ2xvYmFsO1xuICAgICAgICB2YXIgdGFza3MgPSB0YXJnZXRbem9uZVN5bWJvbEV2ZW50TmFtZXMkMVtldmVudC50eXBlXVtGQUxTRV9TVFJdXTtcbiAgICAgICAgaWYgKHRhc2tzKSB7XG4gICAgICAgICAgICAvLyBpbnZva2UgYWxsIHRhc2tzIHdoaWNoIGF0dGFjaGVkIHRvIGN1cnJlbnQgdGFyZ2V0IHdpdGggZ2l2ZW4gZXZlbnQudHlwZSBhbmQgY2FwdHVyZSA9IGZhbHNlXG4gICAgICAgICAgICAvLyBmb3IgcGVyZm9ybWFuY2UgY29uY2VybiwgaWYgdGFzay5sZW5ndGggPT09IDEsIGp1c3QgaW52b2tlXG4gICAgICAgICAgICBpZiAodGFza3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaW52b2tlVGFzayh0YXNrc1swXSwgdGFyZ2V0LCBldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy84MzZcbiAgICAgICAgICAgICAgICAvLyBjb3B5IHRoZSB0YXNrcyBhcnJheSBiZWZvcmUgaW52b2tlLCB0byBhdm9pZFxuICAgICAgICAgICAgICAgIC8vIHRoZSBjYWxsYmFjayB3aWxsIHJlbW92ZSBpdHNlbGYgb3Igb3RoZXIgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICB2YXIgY29weVRhc2tzID0gdGFza3Muc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvcHlUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnRbSU1NRURJQVRFX1BST1BBR0FUSU9OX1NZTUJPTF0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGludm9rZVRhc2soY29weVRhc2tzW2ldLCB0YXJnZXQsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIGdsb2JhbCBzaGFyZWQgem9uZUF3YXJlQ2FsbGJhY2sgdG8gaGFuZGxlIGFsbCBldmVudCBjYWxsYmFjayB3aXRoIGNhcHR1cmUgPSB0cnVlXG4gICAgdmFyIGdsb2JhbFpvbmVBd2FyZUNhcHR1cmVDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy85MTEsIGluIElFLCBzb21ldGltZXNcbiAgICAgICAgLy8gZXZlbnQgd2lsbCBiZSB1bmRlZmluZWQsIHNvIHdlIG5lZWQgdG8gdXNlIHdpbmRvdy5ldmVudFxuICAgICAgICBldmVudCA9IGV2ZW50IHx8IF9nbG9iYWwuZXZlbnQ7XG4gICAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBldmVudC50YXJnZXQgaXMgbmVlZGVkIGZvciBTYW1zdW5nIFRWIGFuZCBTb3VyY2VCdWZmZXJcbiAgICAgICAgLy8gfHwgZ2xvYmFsIGlzIG5lZWRlZCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy8xOTBcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMgfHwgZXZlbnQudGFyZ2V0IHx8IF9nbG9iYWw7XG4gICAgICAgIHZhciB0YXNrcyA9IHRhcmdldFt6b25lU3ltYm9sRXZlbnROYW1lcyQxW2V2ZW50LnR5cGVdW1RSVUVfU1RSXV07XG4gICAgICAgIGlmICh0YXNrcykge1xuICAgICAgICAgICAgLy8gaW52b2tlIGFsbCB0YXNrcyB3aGljaCBhdHRhY2hlZCB0byBjdXJyZW50IHRhcmdldCB3aXRoIGdpdmVuIGV2ZW50LnR5cGUgYW5kIGNhcHR1cmUgPSBmYWxzZVxuICAgICAgICAgICAgLy8gZm9yIHBlcmZvcm1hbmNlIGNvbmNlcm4sIGlmIHRhc2subGVuZ3RoID09PSAxLCBqdXN0IGludm9rZVxuICAgICAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGludm9rZVRhc2sodGFza3NbMF0sIHRhcmdldCwgZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvODM2XG4gICAgICAgICAgICAgICAgLy8gY29weSB0aGUgdGFza3MgYXJyYXkgYmVmb3JlIGludm9rZSwgdG8gYXZvaWRcbiAgICAgICAgICAgICAgICAvLyB0aGUgY2FsbGJhY2sgd2lsbCByZW1vdmUgaXRzZWxmIG9yIG90aGVyIGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgdmFyIGNvcHlUYXNrcyA9IHRhc2tzLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3B5VGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50W0lNTUVESUFURV9QUk9QQUdBVElPTl9TWU1CT0xdID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbnZva2VUYXNrKGNvcHlUYXNrc1tpXSwgdGFyZ2V0LCBldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBwYXRjaEV2ZW50VGFyZ2V0TWV0aG9kcyhvYmosIHBhdGNoT3B0aW9ucykge1xuICAgICAgICBpZiAoIW9iaikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1c2VHbG9iYWxDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnVzZUcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdXNlR2xvYmFsQ2FsbGJhY2sgPSBwYXRjaE9wdGlvbnMudXNlRztcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsaWRhdGVIYW5kbGVyID0gcGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy52aDtcbiAgICAgICAgdmFyIGNoZWNrRHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMuY2hrRHVwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNoZWNrRHVwbGljYXRlID0gcGF0Y2hPcHRpb25zLmNoa0R1cDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmV0dXJuVGFyZ2V0ID0gZmFsc2U7XG4gICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVyblRhcmdldCA9IHBhdGNoT3B0aW9ucy5ydDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvdG8gPSBvYmo7XG4gICAgICAgIHdoaWxlIChwcm90byAmJiAhcHJvdG8uaGFzT3duUHJvcGVydHkoQUREX0VWRU5UX0xJU1RFTkVSKSkge1xuICAgICAgICAgICAgcHJvdG8gPSBPYmplY3RHZXRQcm90b3R5cGVPZihwcm90byk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcm90byAmJiBvYmpbQUREX0VWRU5UX0xJU1RFTkVSXSkge1xuICAgICAgICAgICAgLy8gc29tZWhvdyB3ZSBkaWQgbm90IGZpbmQgaXQsIGJ1dCB3ZSBjYW4gc2VlIGl0LiBUaGlzIGhhcHBlbnMgb24gSUUgZm9yIFdpbmRvdyBwcm9wZXJ0aWVzLlxuICAgICAgICAgICAgcHJvdG8gPSBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcm90bykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm90b1t6b25lU3ltYm9sQWRkRXZlbnRMaXN0ZW5lcl0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXZlbnROYW1lVG9TdHJpbmcgPSBwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLmV2ZW50TmFtZVRvU3RyaW5nO1xuICAgICAgICAvLyBhIHNoYXJlZCBnbG9iYWwgdGFza0RhdGEgdG8gcGFzcyBkYXRhIGZvciBzY2hlZHVsZUV2ZW50VGFza1xuICAgICAgICAvLyBzbyB3ZSBkbyBub3QgbmVlZCB0byBjcmVhdGUgYSBuZXcgb2JqZWN0IGp1c3QgZm9yIHBhc3Mgc29tZSBkYXRhXG4gICAgICAgIHZhciB0YXNrRGF0YSA9IHt9O1xuICAgICAgICB2YXIgbmF0aXZlQWRkRXZlbnRMaXN0ZW5lciA9IHByb3RvW3pvbmVTeW1ib2xBZGRFdmVudExpc3RlbmVyXSA9IHByb3RvW0FERF9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgIHZhciBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyID0gcHJvdG9bem9uZVN5bWJvbChSRU1PVkVfRVZFTlRfTElTVEVORVIpXSA9XG4gICAgICAgICAgICBwcm90b1tSRU1PVkVfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICB2YXIgbmF0aXZlTGlzdGVuZXJzID0gcHJvdG9bem9uZVN5bWJvbChMSVNURU5FUlNfRVZFTlRfTElTVEVORVIpXSA9XG4gICAgICAgICAgICBwcm90b1tMSVNURU5FUlNfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICB2YXIgbmF0aXZlUmVtb3ZlQWxsTGlzdGVuZXJzID0gcHJvdG9bem9uZVN5bWJvbChSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUildID1cbiAgICAgICAgICAgIHByb3RvW1JFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgdmFyIG5hdGl2ZVByZXBlbmRFdmVudExpc3RlbmVyO1xuICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5wcmVwZW5kKSB7XG4gICAgICAgICAgICBuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lciA9IHByb3RvW3pvbmVTeW1ib2wocGF0Y2hPcHRpb25zLnByZXBlbmQpXSA9XG4gICAgICAgICAgICAgICAgcHJvdG9bcGF0Y2hPcHRpb25zLnByZXBlbmRdO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrSXNQYXNzaXZlKHRhc2spIHtcbiAgICAgICAgICAgIGlmICghcGFzc2l2ZVN1cHBvcnRlZCAmJiB0eXBlb2YgdGFza0RhdGEub3B0aW9ucyAhPT0gJ2Jvb2xlYW4nICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIHRhc2tEYXRhLm9wdGlvbnMgIT09ICd1bmRlZmluZWQnICYmIHRhc2tEYXRhLm9wdGlvbnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBvcHRpb25zIGlzIGEgbm9uLW51bGwgbm9uLXVuZGVmaW5lZCBvYmplY3RcbiAgICAgICAgICAgICAgICAvLyBwYXNzaXZlIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgICAgICAgICAgICAvLyBkb24ndCBwYXNzIG9wdGlvbnMgYXMgb2JqZWN0XG4gICAgICAgICAgICAgICAgLy8ganVzdCBwYXNzIGNhcHR1cmUgYXMgYSBib29sZWFuXG4gICAgICAgICAgICAgICAgdGFzay5vcHRpb25zID0gISF0YXNrRGF0YS5vcHRpb25zLmNhcHR1cmU7XG4gICAgICAgICAgICAgICAgdGFza0RhdGEub3B0aW9ucyA9IHRhc2sub3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY3VzdG9tU2NoZWR1bGVHbG9iYWwgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYWxyZWFkeSBhIHRhc2sgZm9yIHRoZSBldmVudE5hbWUgKyBjYXB0dXJlLFxuICAgICAgICAgICAgLy8ganVzdCByZXR1cm4sIGJlY2F1c2Ugd2UgdXNlIHRoZSBzaGFyZWQgZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2sgaGVyZS5cbiAgICAgICAgICAgIGlmICh0YXNrRGF0YS5pc0V4aXN0aW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hlY2tJc1Bhc3NpdmUodGFzayk7XG4gICAgICAgICAgICByZXR1cm4gbmF0aXZlQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRhc2tEYXRhLnRhcmdldCwgdGFza0RhdGEuZXZlbnROYW1lLCB0YXNrRGF0YS5jYXB0dXJlID8gZ2xvYmFsWm9uZUF3YXJlQ2FwdHVyZUNhbGxiYWNrIDogZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2ssIHRhc2tEYXRhLm9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgY3VzdG9tQ2FuY2VsR2xvYmFsID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgIC8vIGlmIHRhc2sgaXMgbm90IG1hcmtlZCBhcyBpc1JlbW92ZWQsIHRoaXMgY2FsbCBpcyBkaXJlY3RseVxuICAgICAgICAgICAgLy8gZnJvbSBab25lLnByb3RvdHlwZS5jYW5jZWxUYXNrLCB3ZSBzaG91bGQgcmVtb3ZlIHRoZSB0YXNrXG4gICAgICAgICAgICAvLyBmcm9tIHRhc2tzTGlzdCBvZiB0YXJnZXQgZmlyc3RcbiAgICAgICAgICAgIGlmICghdGFzay5pc1JlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3ltYm9sRXZlbnROYW1lcyA9IHpvbmVTeW1ib2xFdmVudE5hbWVzJDFbdGFzay5ldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIHZhciBzeW1ib2xFdmVudE5hbWUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaWYgKHN5bWJvbEV2ZW50TmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1t0YXNrLmNhcHR1cmUgPyBUUlVFX1NUUiA6IEZBTFNFX1NUUl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ1Rhc2tzID0gc3ltYm9sRXZlbnROYW1lICYmIHRhc2sudGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVGFza3MpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1Rhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmdUYXNrID0gZXhpc3RpbmdUYXNrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2sgPT09IHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgaXNSZW1vdmVkIHRvIGRhdGEgZm9yIGZhc3RlciBpbnZva2VUYXNrIGNoZWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5pc1JlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGwgdGFza3MgZm9yIHRoZSBldmVudE5hbWUgKyBjYXB0dXJlIGhhdmUgZ29uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGdsb2JhbFpvbmVBd2FyZUNhbGxiYWNrIGFuZCByZW1vdmUgdGhlIHRhc2sgY2FjaGUgZnJvbSB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5hbGxSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay50YXJnZXRbc3ltYm9sRXZlbnROYW1lXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgYWxsIHRhc2tzIGZvciB0aGUgZXZlbnROYW1lICsgY2FwdHVyZSBoYXZlIGdvbmUsXG4gICAgICAgICAgICAvLyB3ZSB3aWxsIHJlYWxseSByZW1vdmUgdGhlIGdsb2JhbCBldmVudCBjYWxsYmFjayxcbiAgICAgICAgICAgIC8vIGlmIG5vdCwgcmV0dXJuXG4gICAgICAgICAgICBpZiAoIXRhc2suYWxsUmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLmNhbGwodGFzay50YXJnZXQsIHRhc2suZXZlbnROYW1lLCB0YXNrLmNhcHR1cmUgPyBnbG9iYWxab25lQXdhcmVDYXB0dXJlQ2FsbGJhY2sgOiBnbG9iYWxab25lQXdhcmVDYWxsYmFjaywgdGFzay5vcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGN1c3RvbVNjaGVkdWxlTm9uR2xvYmFsID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgIGNoZWNrSXNQYXNzaXZlKHRhc2spO1xuICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0YXNrRGF0YS50YXJnZXQsIHRhc2tEYXRhLmV2ZW50TmFtZSwgdGFzay5pbnZva2UsIHRhc2tEYXRhLm9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgY3VzdG9tU2NoZWR1bGVQcmVwZW5kID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgIHJldHVybiBuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lci5jYWxsKHRhc2tEYXRhLnRhcmdldCwgdGFza0RhdGEuZXZlbnROYW1lLCB0YXNrLmludm9rZSwgdGFza0RhdGEub3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBjdXN0b21DYW5jZWxOb25HbG9iYWwgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIuY2FsbCh0YXNrLnRhcmdldCwgdGFzay5ldmVudE5hbWUsIHRhc2suaW52b2tlLCB0YXNrLm9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgY3VzdG9tU2NoZWR1bGUgPSB1c2VHbG9iYWxDYWxsYmFjayA/IGN1c3RvbVNjaGVkdWxlR2xvYmFsIDogY3VzdG9tU2NoZWR1bGVOb25HbG9iYWw7XG4gICAgICAgIHZhciBjdXN0b21DYW5jZWwgPSB1c2VHbG9iYWxDYWxsYmFjayA/IGN1c3RvbUNhbmNlbEdsb2JhbCA6IGN1c3RvbUNhbmNlbE5vbkdsb2JhbDtcbiAgICAgICAgdmFyIGNvbXBhcmVUYXNrQ2FsbGJhY2tWc0RlbGVnYXRlID0gZnVuY3Rpb24gKHRhc2ssIGRlbGVnYXRlKSB7XG4gICAgICAgICAgICB2YXIgdHlwZU9mRGVsZWdhdGUgPSB0eXBlb2YgZGVsZWdhdGU7XG4gICAgICAgICAgICByZXR1cm4gKHR5cGVPZkRlbGVnYXRlID09PSAnZnVuY3Rpb24nICYmIHRhc2suY2FsbGJhY2sgPT09IGRlbGVnYXRlKSB8fFxuICAgICAgICAgICAgICAgICh0eXBlT2ZEZWxlZ2F0ZSA9PT0gJ29iamVjdCcgJiYgdGFzay5vcmlnaW5hbERlbGVnYXRlID09PSBkZWxlZ2F0ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBjb21wYXJlID0gKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMuZGlmZikgPyBwYXRjaE9wdGlvbnMuZGlmZiA6IGNvbXBhcmVUYXNrQ2FsbGJhY2tWc0RlbGVnYXRlO1xuICAgICAgICB2YXIgYmxhY2tMaXN0ZWRFdmVudHMgPSBab25lW1pvbmUuX19zeW1ib2xfXygnQkxBQ0tfTElTVEVEX0VWRU5UUycpXTtcbiAgICAgICAgdmFyIG1ha2VBZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYXRpdmVMaXN0ZW5lciwgYWRkU291cmNlLCBjdXN0b21TY2hlZHVsZUZuLCBjdXN0b21DYW5jZWxGbiwgcmV0dXJuVGFyZ2V0LCBwcmVwZW5kKSB7XG4gICAgICAgICAgICBpZiAocmV0dXJuVGFyZ2V0ID09PSB2b2lkIDApIHsgcmV0dXJuVGFyZ2V0ID0gZmFsc2U7IH1cbiAgICAgICAgICAgIGlmIChwcmVwZW5kID09PSB2b2lkIDApIHsgcHJlcGVuZCA9IGZhbHNlOyB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzIHx8IF9nbG9iYWw7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgICAgICB2YXIgZGVsZWdhdGUgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICAgICAgaWYgKCFkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlTGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzTm9kZSAmJiBldmVudE5hbWUgPT09ICd1bmNhdWdodEV4Y2VwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZG9uJ3QgcGF0Y2ggdW5jYXVnaHRFeGNlcHRpb24gb2Ygbm9kZWpzIHRvIHByZXZlbnQgZW5kbGVzcyBsb29wXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkb24ndCBjcmVhdGUgdGhlIGJpbmQgZGVsZWdhdGUgZnVuY3Rpb24gZm9yIGhhbmRsZUV2ZW50XG4gICAgICAgICAgICAgICAgLy8gY2FzZSBoZXJlIHRvIGltcHJvdmUgYWRkRXZlbnRMaXN0ZW5lciBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgICAgIC8vIHdlIHdpbGwgY3JlYXRlIHRoZSBiaW5kIGRlbGVnYXRlIHdoZW4gaW52b2tlXG4gICAgICAgICAgICAgICAgdmFyIGlzSGFuZGxlRXZlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRlbGVnYXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZGVsZWdhdGUuaGFuZGxlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlzSGFuZGxlRXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGVIYW5kbGVyICYmICF2YWxpZGF0ZUhhbmRsZXIobmF0aXZlTGlzdGVuZXIsIGRlbGVnYXRlLCB0YXJnZXQsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgICAgICAgICBpZiAoYmxhY2tMaXN0ZWRFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgYmxhY2sgbGlzdFxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsYWNrTGlzdGVkRXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSBibGFja0xpc3RlZEV2ZW50c1tpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjYXB0dXJlO1xuICAgICAgICAgICAgICAgIHZhciBvbmNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmUgPSBvcHRpb25zID8gISFvcHRpb25zLmNhcHR1cmUgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgb25jZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMub25jZSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB2YXIgc3ltYm9sRXZlbnROYW1lcyA9IHpvbmVTeW1ib2xFdmVudE5hbWVzJDFbZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICB2YXIgc3ltYm9sRXZlbnROYW1lO1xuICAgICAgICAgICAgICAgIGlmICghc3ltYm9sRXZlbnROYW1lcykge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgY29kZSBpcyBkdXBsaWNhdGUsIGJ1dCBJIGp1c3Qgd2FudCB0byBnZXQgc29tZSBiZXR0ZXIgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZhbHNlRXZlbnROYW1lID0gKGV2ZW50TmFtZVRvU3RyaW5nID8gZXZlbnROYW1lVG9TdHJpbmcoZXZlbnROYW1lKSA6IGV2ZW50TmFtZSkgKyBGQUxTRV9TVFI7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cnVlRXZlbnROYW1lID0gKGV2ZW50TmFtZVRvU3RyaW5nID8gZXZlbnROYW1lVG9TdHJpbmcoZXZlbnROYW1lKSA6IGV2ZW50TmFtZSkgKyBUUlVFX1NUUjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN5bWJvbCA9IFpPTkVfU1lNQk9MX1BSRUZJWCArIGZhbHNlRXZlbnROYW1lO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3ltYm9sQ2FwdHVyZSA9IFpPTkVfU1lNQk9MX1BSRUZJWCArIHRydWVFdmVudE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzJDFbZXZlbnROYW1lXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB6b25lU3ltYm9sRXZlbnROYW1lcyQxW2V2ZW50TmFtZV1bRkFMU0VfU1RSXSA9IHN5bWJvbDtcbiAgICAgICAgICAgICAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXMkMVtldmVudE5hbWVdW1RSVUVfU1RSXSA9IHN5bWJvbENhcHR1cmU7XG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbEV2ZW50TmFtZSA9IGNhcHR1cmUgPyBzeW1ib2xDYXB0dXJlIDogc3ltYm9sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1tjYXB0dXJlID8gVFJVRV9TVFIgOiBGQUxTRV9TVFJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmdUYXNrcyA9IHRhcmdldFtzeW1ib2xFdmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIHZhciBpc0V4aXN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVGFza3MpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxyZWFkeSBoYXZlIHRhc2sgcmVnaXN0ZXJlZFxuICAgICAgICAgICAgICAgICAgICBpc0V4aXN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrRHVwbGljYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShleGlzdGluZ1Rhc2tzW2ldLCBkZWxlZ2F0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2FtZSBjYWxsYmFjaywgc2FtZSBjYXB0dXJlLCBzYW1lIGV2ZW50IG5hbWUsIGp1c3QgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFza3MgPSB0YXJnZXRbc3ltYm9sRXZlbnROYW1lXSA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgc291cmNlO1xuICAgICAgICAgICAgICAgIHZhciBjb25zdHJ1Y3Rvck5hbWUgPSB0YXJnZXQuY29uc3RydWN0b3JbJ25hbWUnXTtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0U291cmNlID0gZ2xvYmFsU291cmNlc1tjb25zdHJ1Y3Rvck5hbWVdO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlID0gdGFyZ2V0U291cmNlW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9IGNvbnN0cnVjdG9yTmFtZSArIGFkZFNvdXJjZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXZlbnROYW1lVG9TdHJpbmcgPyBldmVudE5hbWVUb1N0cmluZyhldmVudE5hbWUpIDogZXZlbnROYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZG8gbm90IGNyZWF0ZSBhIG5ldyBvYmplY3QgYXMgdGFzay5kYXRhIHRvIHBhc3MgdGhvc2UgdGhpbmdzXG4gICAgICAgICAgICAgICAgLy8ganVzdCB1c2UgdGhlIGdsb2JhbCBzaGFyZWQgb25lXG4gICAgICAgICAgICAgICAgdGFza0RhdGEub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgaWYgKG9uY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgYWRkRXZlbnRMaXN0ZW5lciB3aXRoIG9uY2Ugb3B0aW9ucywgd2UgZG9uJ3QgcGFzcyBpdCB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBuYXRpdmUgYWRkRXZlbnRMaXN0ZW5lciwgaW5zdGVhZCB3ZSBrZWVwIHRoZSBvbmNlIHNldHRpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGhhbmRsZSBvdXJzZWx2ZXMuXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEYXRhLm9wdGlvbnMub25jZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXNrRGF0YS50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgdGFza0RhdGEuY2FwdHVyZSA9IGNhcHR1cmU7XG4gICAgICAgICAgICAgICAgdGFza0RhdGEuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgICAgICAgICAgICAgIHRhc2tEYXRhLmlzRXhpc3RpbmcgPSBpc0V4aXN0aW5nO1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gdXNlR2xvYmFsQ2FsbGJhY2sgPyBPUFRJTUlaRURfWk9ORV9FVkVOVF9UQVNLX0RBVEEgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgLy8ga2VlcCB0YXNrRGF0YSBpbnRvIGRhdGEgdG8gYWxsb3cgb25TY2hlZHVsZUV2ZW50VGFzayB0byBhY2Nlc3MgdGhlIHRhc2sgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnRhc2tEYXRhID0gdGFza0RhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0YXNrID0gem9uZS5zY2hlZHVsZUV2ZW50VGFzayhzb3VyY2UsIGRlbGVnYXRlLCBkYXRhLCBjdXN0b21TY2hlZHVsZUZuLCBjdXN0b21DYW5jZWxGbik7XG4gICAgICAgICAgICAgICAgLy8gc2hvdWxkIGNsZWFyIHRhc2tEYXRhLnRhcmdldCB0byBhdm9pZCBtZW1vcnkgbGVha1xuICAgICAgICAgICAgICAgIC8vIGlzc3VlLCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMDQ0MlxuICAgICAgICAgICAgICAgIHRhc2tEYXRhLnRhcmdldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgLy8gbmVlZCB0byBjbGVhciB1cCB0YXNrRGF0YSBiZWNhdXNlIGl0IGlzIGEgZ2xvYmFsIG9iamVjdFxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEudGFza0RhdGEgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBoYXZlIHRvIHNhdmUgdGhvc2UgaW5mb3JtYXRpb24gdG8gdGFzayBpbiBjYXNlXG4gICAgICAgICAgICAgICAgLy8gYXBwbGljYXRpb24gbWF5IGNhbGwgdGFzay56b25lLmNhbmNlbFRhc2soKSBkaXJlY3RseVxuICAgICAgICAgICAgICAgIGlmIChvbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25jZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghKCFwYXNzaXZlU3VwcG9ydGVkICYmIHR5cGVvZiB0YXNrLm9wdGlvbnMgPT09ICdib29sZWFuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgbm90IHN1cHBvcnQgcGFzc2l2ZSwgYW5kIHdlIHBhc3MgYW4gb3B0aW9uIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAvLyB0byBhZGRFdmVudExpc3RlbmVyLCB3ZSBzaG91bGQgc2F2ZSB0aGUgb3B0aW9ucyB0byB0YXNrXG4gICAgICAgICAgICAgICAgICAgIHRhc2sub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhc2sudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIHRhc2suY2FwdHVyZSA9IGNhcHR1cmU7XG4gICAgICAgICAgICAgICAgdGFzay5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKGlzSGFuZGxlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSBvcmlnaW5hbCBkZWxlZ2F0ZSBmb3IgY29tcGFyZSB0byBjaGVjayBkdXBsaWNhdGVcbiAgICAgICAgICAgICAgICAgICAgdGFzay5vcmlnaW5hbERlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghcHJlcGVuZCkge1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tzLnVuc2hpZnQodGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXR1cm5UYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBwcm90b1tBRERfRVZFTlRfTElTVEVORVJdID0gbWFrZUFkZExpc3RlbmVyKG5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIsIEFERF9FVkVOVF9MSVNURU5FUl9TT1VSQ0UsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwsIHJldHVyblRhcmdldCk7XG4gICAgICAgIGlmIChuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgcHJvdG9bUFJFUEVORF9FVkVOVF9MSVNURU5FUl0gPSBtYWtlQWRkTGlzdGVuZXIobmF0aXZlUHJlcGVuZEV2ZW50TGlzdGVuZXIsIFBSRVBFTkRfRVZFTlRfTElTVEVORVJfU09VUkNFLCBjdXN0b21TY2hlZHVsZVByZXBlbmQsIGN1c3RvbUNhbmNlbCwgcmV0dXJuVGFyZ2V0LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBwcm90b1tSRU1PVkVfRVZFTlRfTElTVEVORVJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMgfHwgX2dsb2JhbDtcbiAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgICAgIHZhciBjYXB0dXJlO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNhcHR1cmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjYXB0dXJlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMuY2FwdHVyZSA6IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGRlbGVnYXRlID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgaWYgKCFkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRhdGVIYW5kbGVyICYmXG4gICAgICAgICAgICAgICAgIXZhbGlkYXRlSGFuZGxlcihuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLCBkZWxlZ2F0ZSwgdGFyZ2V0LCBhcmd1bWVudHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN5bWJvbEV2ZW50TmFtZXMgPSB6b25lU3ltYm9sRXZlbnROYW1lcyQxW2V2ZW50TmFtZV07XG4gICAgICAgICAgICB2YXIgc3ltYm9sRXZlbnROYW1lO1xuICAgICAgICAgICAgaWYgKHN5bWJvbEV2ZW50TmFtZXMpIHtcbiAgICAgICAgICAgICAgICBzeW1ib2xFdmVudE5hbWUgPSBzeW1ib2xFdmVudE5hbWVzW2NhcHR1cmUgPyBUUlVFX1NUUiA6IEZBTFNFX1NUUl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZXhpc3RpbmdUYXNrcyA9IHN5bWJvbEV2ZW50TmFtZSAmJiB0YXJnZXRbc3ltYm9sRXZlbnROYW1lXTtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2tzKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1Rhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ1Rhc2sgPSBleGlzdGluZ1Rhc2tzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShleGlzdGluZ1Rhc2ssIGRlbGVnYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgaXNSZW1vdmVkIHRvIGRhdGEgZm9yIGZhc3RlciBpbnZva2VUYXNrIGNoZWNrXG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2suaXNSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsbCB0YXNrcyBmb3IgdGhlIGV2ZW50TmFtZSArIGNhcHR1cmUgaGF2ZSBnb25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBnbG9iYWxab25lQXdhcmVDYWxsYmFjayBhbmQgcmVtb3ZlIHRoZSB0YXNrIGNhY2hlIGZyb20gdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrLmFsbFJlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtzeW1ib2xFdmVudE5hbWVdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFzay56b25lLmNhbmNlbFRhc2soZXhpc3RpbmdUYXNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXR1cm5UYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaXNzdWUgOTMwLCBkaWRuJ3QgZmluZCB0aGUgZXZlbnQgbmFtZSBvciBjYWxsYmFja1xuICAgICAgICAgICAgLy8gZnJvbSB6b25lIGtlcHQgZXhpc3RpbmdUYXNrcywgdGhlIGNhbGxiYWNrIG1heWJlXG4gICAgICAgICAgICAvLyBhZGRlZCBvdXRzaWRlIG9mIHpvbmUsIHdlIG5lZWQgdG8gY2FsbCBuYXRpdmUgcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAgICAgICAgICAgLy8gdG8gdHJ5IHRvIHJlbW92ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICAgIHByb3RvW0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcyB8fCBfZ2xvYmFsO1xuICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgICAgIHZhciB0YXNrcyA9IGZpbmRFdmVudFRhc2tzKHRhcmdldCwgZXZlbnROYW1lVG9TdHJpbmcgPyBldmVudE5hbWVUb1N0cmluZyhldmVudE5hbWUpIDogZXZlbnROYW1lKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBkZWxlZ2F0ZSA9IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA/IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA6IHRhc2suY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2goZGVsZWdhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVycztcbiAgICAgICAgfTtcbiAgICAgICAgcHJvdG9bUkVNT1ZFX0FMTF9MSVNURU5FUlNfRVZFTlRfTElTVEVORVJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMgfHwgX2dsb2JhbDtcbiAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBpZiAoIWV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3AgPSBrZXlzW2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBFVkVOVF9OQU1FX1NZTUJPTF9SRUdYLmV4ZWMocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBldnROYW1lID0gbWF0Y2ggJiYgbWF0Y2hbMV07XG4gICAgICAgICAgICAgICAgICAgIC8vIGluIG5vZGVqcyBFdmVudEVtaXR0ZXIsIHJlbW92ZUxpc3RlbmVyIGV2ZW50IGlzXG4gICAgICAgICAgICAgICAgICAgIC8vIHVzZWQgZm9yIG1vbml0b3JpbmcgdGhlIHJlbW92ZUxpc3RlbmVyIGNhbGwsXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIGp1c3Qga2VlcCByZW1vdmVMaXN0ZW5lciBldmVudExpc3RlbmVyIHVudGlsXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbCBvdGhlciBldmVudExpc3RlbmVycyBhcmUgcmVtb3ZlZFxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0TmFtZSAmJiBldnROYW1lICE9PSAncmVtb3ZlTGlzdGVuZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW1JFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXS5jYWxsKHRoaXMsIGV2dE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSByZW1vdmVMaXN0ZW5lciBsaXN0ZW5lciBmaW5hbGx5XG4gICAgICAgICAgICAgICAgdGhpc1tSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0uY2FsbCh0aGlzLCAncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBzeW1ib2xFdmVudE5hbWVzID0gem9uZVN5bWJvbEV2ZW50TmFtZXMkMVtldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChzeW1ib2xFdmVudE5hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzeW1ib2xFdmVudE5hbWUgPSBzeW1ib2xFdmVudE5hbWVzW0ZBTFNFX1NUUl07XG4gICAgICAgICAgICAgICAgICAgIHZhciBzeW1ib2xDYXB0dXJlRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1tUUlVFX1NUUl07XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXNrcyA9IHRhcmdldFtzeW1ib2xFdmVudE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FwdHVyZVRhc2tzID0gdGFyZ2V0W3N5bWJvbENhcHR1cmVFdmVudE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFza3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZW1vdmVUYXNrcyA9IHRhc2tzLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlbW92ZVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2sgPSByZW1vdmVUYXNrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVsZWdhdGUgPSB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPyB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgOiB0YXNrLmNhbGxiYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXS5jYWxsKHRoaXMsIGV2ZW50TmFtZSwgZGVsZWdhdGUsIHRhc2sub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcHR1cmVUYXNrcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlbW92ZVRhc2tzID0gY2FwdHVyZVRhc2tzLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlbW92ZVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2sgPSByZW1vdmVUYXNrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVsZWdhdGUgPSB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPyB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgOiB0YXNrLmNhbGxiYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXS5jYWxsKHRoaXMsIGV2ZW50TmFtZSwgZGVsZWdhdGUsIHRhc2sub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmV0dXJuVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIGZvciBuYXRpdmUgdG9TdHJpbmcgcGF0Y2hcbiAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHByb3RvW0FERF9FVkVOVF9MSVNURU5FUl0sIG5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIpO1xuICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocHJvdG9bUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXSwgbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIGlmIChuYXRpdmVSZW1vdmVBbGxMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwcm90b1tSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0sIG5hdGl2ZVJlbW92ZUFsbExpc3RlbmVycyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hdGl2ZUxpc3RlbmVycykge1xuICAgICAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHByb3RvW0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0sIG5hdGl2ZUxpc3RlbmVycyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdHNbaV0gPSBwYXRjaEV2ZW50VGFyZ2V0TWV0aG9kcyhhcGlzW2ldLCBwYXRjaE9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbn1cbmZ1bmN0aW9uIGZpbmRFdmVudFRhc2tzKHRhcmdldCwgZXZlbnROYW1lKSB7XG4gICAgdmFyIGZvdW5kVGFza3MgPSBbXTtcbiAgICBmb3IgKHZhciBwcm9wIGluIHRhcmdldCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBFVkVOVF9OQU1FX1NZTUJPTF9SRUdYLmV4ZWMocHJvcCk7XG4gICAgICAgIHZhciBldnROYW1lID0gbWF0Y2ggJiYgbWF0Y2hbMV07XG4gICAgICAgIGlmIChldnROYW1lICYmICghZXZlbnROYW1lIHx8IGV2dE5hbWUgPT09IGV2ZW50TmFtZSkpIHtcbiAgICAgICAgICAgIHZhciB0YXNrcyA9IHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgIGlmICh0YXNrcykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRUYXNrcy5wdXNoKHRhc2tzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZvdW5kVGFza3M7XG59XG5mdW5jdGlvbiBwYXRjaEV2ZW50UHJvdG90eXBlKGdsb2JhbCwgYXBpKSB7XG4gICAgdmFyIEV2ZW50ID0gZ2xvYmFsWydFdmVudCddO1xuICAgIGlmIChFdmVudCAmJiBFdmVudC5wcm90b3R5cGUpIHtcbiAgICAgICAgYXBpLnBhdGNoTWV0aG9kKEV2ZW50LnByb3RvdHlwZSwgJ3N0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbicsIGZ1bmN0aW9uIChkZWxlZ2F0ZSkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgIHNlbGZbSU1NRURJQVRFX1BST1BBR0FUSU9OX1NZTUJPTF0gPSB0cnVlO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjYWxsIHRoZSBuYXRpdmUgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uXG4gICAgICAgICAgICAvLyBpbiBjYXNlIGluIHNvbWUgaHlicmlkIGFwcGxpY2F0aW9uLCBzb21lIHBhcnQgb2ZcbiAgICAgICAgICAgIC8vIGFwcGxpY2F0aW9uIHdpbGwgYmUgY29udHJvbGxlZCBieSB6b25lLCBzb21lIGFyZSBub3RcbiAgICAgICAgICAgIGRlbGVnYXRlICYmIGRlbGVnYXRlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICB9OyB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmZ1bmN0aW9uIHBhdGNoQ2FsbGJhY2tzKGFwaSwgdGFyZ2V0LCB0YXJnZXROYW1lLCBtZXRob2QsIGNhbGxiYWNrcykge1xuICAgIHZhciBzeW1ib2wgPSBab25lLl9fc3ltYm9sX18obWV0aG9kKTtcbiAgICBpZiAodGFyZ2V0W3N5bWJvbF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbmF0aXZlRGVsZWdhdGUgPSB0YXJnZXRbc3ltYm9sXSA9IHRhcmdldFttZXRob2RdO1xuICAgIHRhcmdldFttZXRob2RdID0gZnVuY3Rpb24gKG5hbWUsIG9wdHMsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdHMgJiYgb3B0cy5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHZhciBzb3VyY2UgPSB0YXJnZXROYW1lICsgXCIuXCIgKyBtZXRob2QgKyBcIjo6XCIgKyBjYWxsYmFjaztcbiAgICAgICAgICAgICAgICB2YXIgcHJvdG90eXBlID0gb3B0cy5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgaWYgKHByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShjYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBhcGkuT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gYXBpLndyYXBXaXRoQ3VycmVudFpvbmUoZGVzY3JpcHRvci52YWx1ZSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaS5fcmVkZWZpbmVQcm9wZXJ0eShvcHRzLnByb3RvdHlwZSwgY2FsbGJhY2ssIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3RvdHlwZVtjYWxsYmFja10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3RvdHlwZVtjYWxsYmFja10gPSBhcGkud3JhcFdpdGhDdXJyZW50Wm9uZShwcm90b3R5cGVbY2FsbGJhY2tdLCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3RvdHlwZVtjYWxsYmFja10pIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdG90eXBlW2NhbGxiYWNrXSA9IGFwaS53cmFwV2l0aEN1cnJlbnRab25lKHByb3RvdHlwZVtjYWxsYmFja10sIHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5hdGl2ZURlbGVnYXRlLmNhbGwodGFyZ2V0LCBuYW1lLCBvcHRzLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIGFwaS5hdHRhY2hPcmlnaW5Ub1BhdGNoZWQodGFyZ2V0W21ldGhvZF0sIG5hdGl2ZURlbGVnYXRlKTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLypcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGZvciBDaHJvbWUgYW5kIENocm9tZSBtb2JpbGUsIHRvIGVuYWJsZVxuICogdGhpbmdzIGxpa2UgcmVkZWZpbmluZyBgY3JlYXRlZENhbGxiYWNrYCBvbiBhbiBlbGVtZW50LlxuICovXG52YXIgem9uZVN5bWJvbCQxID0gWm9uZS5fX3N5bWJvbF9fO1xudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IE9iamVjdFt6b25lU3ltYm9sJDEoJ2RlZmluZVByb3BlcnR5JyldID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3Rbem9uZVN5bWJvbCQxKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InKV0gPVxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX2NyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG52YXIgdW5jb25maWd1cmFibGVzS2V5ID0gem9uZVN5bWJvbCQxKCd1bmNvbmZpZ3VyYWJsZXMnKTtcbmZ1bmN0aW9uIHByb3BlcnR5UGF0Y2goKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwgcHJvcCwgZGVzYykge1xuICAgICAgICBpZiAoaXNVbmNvbmZpZ3VyYWJsZShvYmosIHByb3ApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgYXNzaWduIHRvIHJlYWQgb25seSBwcm9wZXJ0eSBcXCcnICsgcHJvcCArICdcXCcgb2YgJyArIG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZyA9IGRlc2MuY29uZmlndXJhYmxlO1xuICAgICAgICBpZiAocHJvcCAhPT0gJ3Byb3RvdHlwZScpIHtcbiAgICAgICAgICAgIGRlc2MgPSByZXdyaXRlRGVzY3JpcHRvcihvYmosIHByb3AsIGRlc2MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdHJ5RGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjLCBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqLCBwcm9wcykge1xuICAgICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgcHJvcHNbcHJvcF0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIE9iamVjdC5jcmVhdGUgPSBmdW5jdGlvbiAob2JqLCBwcm90bykge1xuICAgICAgICBpZiAodHlwZW9mIHByb3RvID09PSAnb2JqZWN0JyAmJiAhT2JqZWN0LmlzRnJvemVuKHByb3RvKSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvdG8pLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgICAgICBwcm90b1twcm9wXSA9IHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgcHJvdG9bcHJvcF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9jcmVhdGUob2JqLCBwcm90byk7XG4gICAgfTtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG9iaiwgcHJvcCkge1xuICAgICAgICB2YXIgZGVzYyA9IF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKTtcbiAgICAgICAgaWYgKGRlc2MgJiYgaXNVbmNvbmZpZ3VyYWJsZShvYmosIHByb3ApKSB7XG4gICAgICAgICAgICBkZXNjLmNvbmZpZ3VyYWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZXNjO1xuICAgIH07XG59XG5mdW5jdGlvbiBfcmVkZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MpIHtcbiAgICB2YXIgb3JpZ2luYWxDb25maWd1cmFibGVGbGFnID0gZGVzYy5jb25maWd1cmFibGU7XG4gICAgZGVzYyA9IHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgZGVzYyk7XG4gICAgcmV0dXJuIF90cnlEZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MsIG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZyk7XG59XG5mdW5jdGlvbiBpc1VuY29uZmlndXJhYmxlKG9iaiwgcHJvcCkge1xuICAgIHJldHVybiBvYmogJiYgb2JqW3VuY29uZmlndXJhYmxlc0tleV0gJiYgb2JqW3VuY29uZmlndXJhYmxlc0tleV1bcHJvcF07XG59XG5mdW5jdGlvbiByZXdyaXRlRGVzY3JpcHRvcihvYmosIHByb3AsIGRlc2MpIHtcbiAgICAvLyBpc3N1ZS05MjcsIGlmIHRoZSBkZXNjIGlzIGZyb3plbiwgZG9uJ3QgdHJ5IHRvIGNoYW5nZSB0aGUgZGVzY1xuICAgIGlmICghT2JqZWN0LmlzRnJvemVuKGRlc2MpKSB7XG4gICAgICAgIGRlc2MuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFkZXNjLmNvbmZpZ3VyYWJsZSkge1xuICAgICAgICAvLyBpc3N1ZS05MjcsIGlmIHRoZSBvYmogaXMgZnJvemVuLCBkb24ndCB0cnkgdG8gc2V0IHRoZSBkZXNjIHRvIG9ialxuICAgICAgICBpZiAoIW9ialt1bmNvbmZpZ3VyYWJsZXNLZXldICYmICFPYmplY3QuaXNGcm96ZW4ob2JqKSkge1xuICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KG9iaiwgdW5jb25maWd1cmFibGVzS2V5LCB7IHdyaXRhYmxlOiB0cnVlLCB2YWx1ZToge30gfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9ialt1bmNvbmZpZ3VyYWJsZXNLZXldKSB7XG4gICAgICAgICAgICBvYmpbdW5jb25maWd1cmFibGVzS2V5XVtwcm9wXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlc2M7XG59XG5mdW5jdGlvbiBfdHJ5RGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjLCBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYyk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZGVzYy5jb25maWd1cmFibGUpIHtcbiAgICAgICAgICAgIC8vIEluIGNhc2Ugb2YgZXJyb3JzLCB3aGVuIHRoZSBjb25maWd1cmFibGUgZmxhZyB3YXMgbGlrZWx5IHNldCBieSByZXdyaXRlRGVzY3JpcHRvcigpLCBsZXQnc1xuICAgICAgICAgICAgLy8gcmV0cnkgd2l0aCB0aGUgb3JpZ2luYWwgZmxhZyB2YWx1ZVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgZGVzYy5jb25maWd1cmFibGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZXNjLmNvbmZpZ3VyYWJsZSA9IG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NKc29uID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBkZXNjSnNvbiA9IEpTT04uc3RyaW5naWZ5KGRlc2MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzY0pzb24gPSBkZXNjLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXR0ZW1wdGluZyB0byBjb25maWd1cmUgJ1wiICsgcHJvcCArIFwiJyB3aXRoIGRlc2NyaXB0b3IgJ1wiICsgZGVzY0pzb24gKyBcIicgb24gb2JqZWN0ICdcIiArIG9iaiArIFwiJyBhbmQgZ290IGVycm9yLCBnaXZpbmcgdXA6IFwiICsgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICogQHN1cHByZXNzIHtnbG9iYWxUaGlzfVxuICovXG52YXIgZ2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TmFtZXMgPSBbXG4gICAgJ2Fib3J0JyxcbiAgICAnYW5pbWF0aW9uY2FuY2VsJyxcbiAgICAnYW5pbWF0aW9uZW5kJyxcbiAgICAnYW5pbWF0aW9uaXRlcmF0aW9uJyxcbiAgICAnYXV4Y2xpY2snLFxuICAgICdiZWZvcmVpbnB1dCcsXG4gICAgJ2JsdXInLFxuICAgICdjYW5jZWwnLFxuICAgICdjYW5wbGF5JyxcbiAgICAnY2FucGxheXRocm91Z2gnLFxuICAgICdjaGFuZ2UnLFxuICAgICdjb21wb3NpdGlvbnN0YXJ0JyxcbiAgICAnY29tcG9zaXRpb251cGRhdGUnLFxuICAgICdjb21wb3NpdGlvbmVuZCcsXG4gICAgJ2N1ZWNoYW5nZScsXG4gICAgJ2NsaWNrJyxcbiAgICAnY2xvc2UnLFxuICAgICdjb250ZXh0bWVudScsXG4gICAgJ2N1cmVjaGFuZ2UnLFxuICAgICdkYmxjbGljaycsXG4gICAgJ2RyYWcnLFxuICAgICdkcmFnZW5kJyxcbiAgICAnZHJhZ2VudGVyJyxcbiAgICAnZHJhZ2V4aXQnLFxuICAgICdkcmFnbGVhdmUnLFxuICAgICdkcmFnb3ZlcicsXG4gICAgJ2Ryb3AnLFxuICAgICdkdXJhdGlvbmNoYW5nZScsXG4gICAgJ2VtcHRpZWQnLFxuICAgICdlbmRlZCcsXG4gICAgJ2Vycm9yJyxcbiAgICAnZm9jdXMnLFxuICAgICdmb2N1c2luJyxcbiAgICAnZm9jdXNvdXQnLFxuICAgICdnb3Rwb2ludGVyY2FwdHVyZScsXG4gICAgJ2lucHV0JyxcbiAgICAnaW52YWxpZCcsXG4gICAgJ2tleWRvd24nLFxuICAgICdrZXlwcmVzcycsXG4gICAgJ2tleXVwJyxcbiAgICAnbG9hZCcsXG4gICAgJ2xvYWRzdGFydCcsXG4gICAgJ2xvYWRlZGRhdGEnLFxuICAgICdsb2FkZWRtZXRhZGF0YScsXG4gICAgJ2xvc3Rwb2ludGVyY2FwdHVyZScsXG4gICAgJ21vdXNlZG93bicsXG4gICAgJ21vdXNlZW50ZXInLFxuICAgICdtb3VzZWxlYXZlJyxcbiAgICAnbW91c2Vtb3ZlJyxcbiAgICAnbW91c2VvdXQnLFxuICAgICdtb3VzZW92ZXInLFxuICAgICdtb3VzZXVwJyxcbiAgICAnbW91c2V3aGVlbCcsXG4gICAgJ29yaWVudGF0aW9uY2hhbmdlJyxcbiAgICAncGF1c2UnLFxuICAgICdwbGF5JyxcbiAgICAncGxheWluZycsXG4gICAgJ3BvaW50ZXJjYW5jZWwnLFxuICAgICdwb2ludGVyZG93bicsXG4gICAgJ3BvaW50ZXJlbnRlcicsXG4gICAgJ3BvaW50ZXJsZWF2ZScsXG4gICAgJ3BvaW50ZXJsb2NrY2hhbmdlJyxcbiAgICAnbW96cG9pbnRlcmxvY2tjaGFuZ2UnLFxuICAgICd3ZWJraXRwb2ludGVybG9ja2VyY2hhbmdlJyxcbiAgICAncG9pbnRlcmxvY2tlcnJvcicsXG4gICAgJ21venBvaW50ZXJsb2NrZXJyb3InLFxuICAgICd3ZWJraXRwb2ludGVybG9ja2Vycm9yJyxcbiAgICAncG9pbnRlcm1vdmUnLFxuICAgICdwb2ludG91dCcsXG4gICAgJ3BvaW50ZXJvdmVyJyxcbiAgICAncG9pbnRlcnVwJyxcbiAgICAncHJvZ3Jlc3MnLFxuICAgICdyYXRlY2hhbmdlJyxcbiAgICAncmVzZXQnLFxuICAgICdyZXNpemUnLFxuICAgICdzY3JvbGwnLFxuICAgICdzZWVrZWQnLFxuICAgICdzZWVraW5nJyxcbiAgICAnc2VsZWN0JyxcbiAgICAnc2VsZWN0aW9uY2hhbmdlJyxcbiAgICAnc2VsZWN0c3RhcnQnLFxuICAgICdzaG93JyxcbiAgICAnc29ydCcsXG4gICAgJ3N0YWxsZWQnLFxuICAgICdzdWJtaXQnLFxuICAgICdzdXNwZW5kJyxcbiAgICAndGltZXVwZGF0ZScsXG4gICAgJ3ZvbHVtZWNoYW5nZScsXG4gICAgJ3RvdWNoY2FuY2VsJyxcbiAgICAndG91Y2htb3ZlJyxcbiAgICAndG91Y2hzdGFydCcsXG4gICAgJ3RvdWNoZW5kJyxcbiAgICAndHJhbnNpdGlvbmNhbmNlbCcsXG4gICAgJ3RyYW5zaXRpb25lbmQnLFxuICAgICd3YWl0aW5nJyxcbiAgICAnd2hlZWwnXG5dO1xudmFyIGRvY3VtZW50RXZlbnROYW1lcyA9IFtcbiAgICAnYWZ0ZXJzY3JpcHRleGVjdXRlJywgJ2JlZm9yZXNjcmlwdGV4ZWN1dGUnLCAnRE9NQ29udGVudExvYWRlZCcsICdmcmVlemUnLCAnZnVsbHNjcmVlbmNoYW5nZScsXG4gICAgJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLCAnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsICdtc2Z1bGxzY3JlZW5jaGFuZ2UnLCAnZnVsbHNjcmVlbmVycm9yJyxcbiAgICAnbW96ZnVsbHNjcmVlbmVycm9yJywgJ3dlYmtpdGZ1bGxzY3JlZW5lcnJvcicsICdtc2Z1bGxzY3JlZW5lcnJvcicsICdyZWFkeXN0YXRlY2hhbmdlJyxcbiAgICAndmlzaWJpbGl0eWNoYW5nZScsICdyZXN1bWUnXG5dO1xudmFyIHdpbmRvd0V2ZW50TmFtZXMgPSBbXG4gICAgJ2Fic29sdXRlZGV2aWNlb3JpZW50YXRpb24nLFxuICAgICdhZnRlcmlucHV0JyxcbiAgICAnYWZ0ZXJwcmludCcsXG4gICAgJ2FwcGluc3RhbGxlZCcsXG4gICAgJ2JlZm9yZWluc3RhbGxwcm9tcHQnLFxuICAgICdiZWZvcmVwcmludCcsXG4gICAgJ2JlZm9yZXVubG9hZCcsXG4gICAgJ2RldmljZWxpZ2h0JyxcbiAgICAnZGV2aWNlbW90aW9uJyxcbiAgICAnZGV2aWNlb3JpZW50YXRpb24nLFxuICAgICdkZXZpY2VvcmllbnRhdGlvbmFic29sdXRlJyxcbiAgICAnZGV2aWNlcHJveGltaXR5JyxcbiAgICAnaGFzaGNoYW5nZScsXG4gICAgJ2xhbmd1YWdlY2hhbmdlJyxcbiAgICAnbWVzc2FnZScsXG4gICAgJ21vemJlZm9yZXBhaW50JyxcbiAgICAnb2ZmbGluZScsXG4gICAgJ29ubGluZScsXG4gICAgJ3BhaW50JyxcbiAgICAncGFnZXNob3cnLFxuICAgICdwYWdlaGlkZScsXG4gICAgJ3BvcHN0YXRlJyxcbiAgICAncmVqZWN0aW9uaGFuZGxlZCcsXG4gICAgJ3N0b3JhZ2UnLFxuICAgICd1bmhhbmRsZWRyZWplY3Rpb24nLFxuICAgICd1bmxvYWQnLFxuICAgICd1c2VycHJveGltaXR5JyxcbiAgICAndnJkaXNwbHljb25uZWN0ZWQnLFxuICAgICd2cmRpc3BsYXlkaXNjb25uZWN0ZWQnLFxuICAgICd2cmRpc3BsYXlwcmVzZW50Y2hhbmdlJ1xuXTtcbnZhciBodG1sRWxlbWVudEV2ZW50TmFtZXMgPSBbXG4gICAgJ2JlZm9yZWNvcHknLCAnYmVmb3JlY3V0JywgJ2JlZm9yZXBhc3RlJywgJ2NvcHknLCAnY3V0JywgJ3Bhc3RlJywgJ2RyYWdzdGFydCcsICdsb2FkZW5kJyxcbiAgICAnYW5pbWF0aW9uc3RhcnQnLCAnc2VhcmNoJywgJ3RyYW5zaXRpb25ydW4nLCAndHJhbnNpdGlvbnN0YXJ0JywgJ3dlYmtpdGFuaW1hdGlvbmVuZCcsXG4gICAgJ3dlYmtpdGFuaW1hdGlvbml0ZXJhdGlvbicsICd3ZWJraXRhbmltYXRpb25zdGFydCcsICd3ZWJraXR0cmFuc2l0aW9uZW5kJ1xuXTtcbnZhciBtZWRpYUVsZW1lbnRFdmVudE5hbWVzID0gWydlbmNyeXB0ZWQnLCAnd2FpdGluZ2ZvcmtleScsICdtc25lZWRrZXknLCAnbW96aW50ZXJydXB0YmVnaW4nLCAnbW96aW50ZXJydXB0ZW5kJ107XG52YXIgaWVFbGVtZW50RXZlbnROYW1lcyA9IFtcbiAgICAnYWN0aXZhdGUnLFxuICAgICdhZnRlcnVwZGF0ZScsXG4gICAgJ2FyaWFyZXF1ZXN0JyxcbiAgICAnYmVmb3JlYWN0aXZhdGUnLFxuICAgICdiZWZvcmVkZWFjdGl2YXRlJyxcbiAgICAnYmVmb3JlZWRpdGZvY3VzJyxcbiAgICAnYmVmb3JldXBkYXRlJyxcbiAgICAnY2VsbGNoYW5nZScsXG4gICAgJ2NvbnRyb2xzZWxlY3QnLFxuICAgICdkYXRhYXZhaWxhYmxlJyxcbiAgICAnZGF0YXNldGNoYW5nZWQnLFxuICAgICdkYXRhc2V0Y29tcGxldGUnLFxuICAgICdlcnJvcnVwZGF0ZScsXG4gICAgJ2ZpbHRlcmNoYW5nZScsXG4gICAgJ2xheW91dGNvbXBsZXRlJyxcbiAgICAnbG9zZWNhcHR1cmUnLFxuICAgICdtb3ZlJyxcbiAgICAnbW92ZWVuZCcsXG4gICAgJ21vdmVzdGFydCcsXG4gICAgJ3Byb3BlcnR5Y2hhbmdlJyxcbiAgICAncmVzaXplZW5kJyxcbiAgICAncmVzaXplc3RhcnQnLFxuICAgICdyb3dlbnRlcicsXG4gICAgJ3Jvd2V4aXQnLFxuICAgICdyb3dzZGVsZXRlJyxcbiAgICAncm93c2luc2VydGVkJyxcbiAgICAnY29tbWFuZCcsXG4gICAgJ2NvbXBhc3NuZWVkc2NhbGlicmF0aW9uJyxcbiAgICAnZGVhY3RpdmF0ZScsXG4gICAgJ2hlbHAnLFxuICAgICdtc2NvbnRlbnR6b29tJyxcbiAgICAnbXNtYW5pcHVsYXRpb25zdGF0ZWNoYW5nZWQnLFxuICAgICdtc2dlc3R1cmVjaGFuZ2UnLFxuICAgICdtc2dlc3R1cmVkb3VibGV0YXAnLFxuICAgICdtc2dlc3R1cmVlbmQnLFxuICAgICdtc2dlc3R1cmVob2xkJyxcbiAgICAnbXNnZXN0dXJlc3RhcnQnLFxuICAgICdtc2dlc3R1cmV0YXAnLFxuICAgICdtc2dvdHBvaW50ZXJjYXB0dXJlJyxcbiAgICAnbXNpbmVydGlhc3RhcnQnLFxuICAgICdtc2xvc3Rwb2ludGVyY2FwdHVyZScsXG4gICAgJ21zcG9pbnRlcmNhbmNlbCcsXG4gICAgJ21zcG9pbnRlcmRvd24nLFxuICAgICdtc3BvaW50ZXJlbnRlcicsXG4gICAgJ21zcG9pbnRlcmhvdmVyJyxcbiAgICAnbXNwb2ludGVybGVhdmUnLFxuICAgICdtc3BvaW50ZXJtb3ZlJyxcbiAgICAnbXNwb2ludGVyb3V0JyxcbiAgICAnbXNwb2ludGVyb3ZlcicsXG4gICAgJ21zcG9pbnRlcnVwJyxcbiAgICAncG9pbnRlcm91dCcsXG4gICAgJ21zc2l0ZW1vZGVqdW1wbGlzdGl0ZW1yZW1vdmVkJyxcbiAgICAnbXN0aHVtYm5haWxjbGljaycsXG4gICAgJ3N0b3AnLFxuICAgICdzdG9yYWdlY29tbWl0J1xuXTtcbnZhciB3ZWJnbEV2ZW50TmFtZXMgPSBbJ3dlYmdsY29udGV4dHJlc3RvcmVkJywgJ3dlYmdsY29udGV4dGxvc3QnLCAnd2ViZ2xjb250ZXh0Y3JlYXRpb25lcnJvciddO1xudmFyIGZvcm1FdmVudE5hbWVzID0gWydhdXRvY29tcGxldGUnLCAnYXV0b2NvbXBsZXRlZXJyb3InXTtcbnZhciBkZXRhaWxFdmVudE5hbWVzID0gWyd0b2dnbGUnXTtcbnZhciBmcmFtZUV2ZW50TmFtZXMgPSBbJ2xvYWQnXTtcbnZhciBmcmFtZVNldEV2ZW50TmFtZXMgPSBbJ2JsdXInLCAnZXJyb3InLCAnZm9jdXMnLCAnbG9hZCcsICdyZXNpemUnLCAnc2Nyb2xsJywgJ21lc3NhZ2VlcnJvciddO1xudmFyIG1hcnF1ZWVFdmVudE5hbWVzID0gWydib3VuY2UnLCAnZmluaXNoJywgJ3N0YXJ0J107XG52YXIgWE1MSHR0cFJlcXVlc3RFdmVudE5hbWVzID0gW1xuICAgICdsb2Fkc3RhcnQnLCAncHJvZ3Jlc3MnLCAnYWJvcnQnLCAnZXJyb3InLCAnbG9hZCcsICdwcm9ncmVzcycsICd0aW1lb3V0JywgJ2xvYWRlbmQnLFxuICAgICdyZWFkeXN0YXRlY2hhbmdlJ1xuXTtcbnZhciBJREJJbmRleEV2ZW50TmFtZXMgPSBbJ3VwZ3JhZGVuZWVkZWQnLCAnY29tcGxldGUnLCAnYWJvcnQnLCAnc3VjY2VzcycsICdlcnJvcicsICdibG9ja2VkJywgJ3ZlcnNpb25jaGFuZ2UnLCAnY2xvc2UnXTtcbnZhciB3ZWJzb2NrZXRFdmVudE5hbWVzID0gWydjbG9zZScsICdlcnJvcicsICdvcGVuJywgJ21lc3NhZ2UnXTtcbnZhciB3b3JrZXJFdmVudE5hbWVzID0gWydlcnJvcicsICdtZXNzYWdlJ107XG52YXIgZXZlbnROYW1lcyA9IGdsb2JhbEV2ZW50SGFuZGxlcnNFdmVudE5hbWVzLmNvbmNhdCh3ZWJnbEV2ZW50TmFtZXMsIGZvcm1FdmVudE5hbWVzLCBkZXRhaWxFdmVudE5hbWVzLCBkb2N1bWVudEV2ZW50TmFtZXMsIHdpbmRvd0V2ZW50TmFtZXMsIGh0bWxFbGVtZW50RXZlbnROYW1lcywgaWVFbGVtZW50RXZlbnROYW1lcyk7XG5mdW5jdGlvbiBmaWx0ZXJQcm9wZXJ0aWVzKHRhcmdldCwgb25Qcm9wZXJ0aWVzLCBpZ25vcmVQcm9wZXJ0aWVzKSB7XG4gICAgaWYgKCFpZ25vcmVQcm9wZXJ0aWVzIHx8IGlnbm9yZVByb3BlcnRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBvblByb3BlcnRpZXM7XG4gICAgfVxuICAgIHZhciB0aXAgPSBpZ25vcmVQcm9wZXJ0aWVzLmZpbHRlcihmdW5jdGlvbiAoaXApIHsgcmV0dXJuIGlwLnRhcmdldCA9PT0gdGFyZ2V0OyB9KTtcbiAgICBpZiAoIXRpcCB8fCB0aXAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBvblByb3BlcnRpZXM7XG4gICAgfVxuICAgIHZhciB0YXJnZXRJZ25vcmVQcm9wZXJ0aWVzID0gdGlwWzBdLmlnbm9yZVByb3BlcnRpZXM7XG4gICAgcmV0dXJuIG9uUHJvcGVydGllcy5maWx0ZXIoZnVuY3Rpb24gKG9wKSB7IHJldHVybiB0YXJnZXRJZ25vcmVQcm9wZXJ0aWVzLmluZGV4T2Yob3ApID09PSAtMTsgfSk7XG59XG5mdW5jdGlvbiBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyh0YXJnZXQsIG9uUHJvcGVydGllcywgaWdub3JlUHJvcGVydGllcywgcHJvdG90eXBlKSB7XG4gICAgLy8gY2hlY2sgd2hldGhlciB0YXJnZXQgaXMgYXZhaWxhYmxlLCBzb21ldGltZXMgdGFyZ2V0IHdpbGwgYmUgdW5kZWZpbmVkXG4gICAgLy8gYmVjYXVzZSBkaWZmZXJlbnQgYnJvd3NlciBvciBzb21lIDNyZCBwYXJ0eSBwbHVnaW4uXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZmlsdGVyZWRQcm9wZXJ0aWVzID0gZmlsdGVyUHJvcGVydGllcyh0YXJnZXQsIG9uUHJvcGVydGllcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgcGF0Y2hPblByb3BlcnRpZXModGFyZ2V0LCBmaWx0ZXJlZFByb3BlcnRpZXMsIHByb3RvdHlwZSk7XG59XG5mdW5jdGlvbiBwcm9wZXJ0eURlc2NyaXB0b3JQYXRjaChhcGksIF9nbG9iYWwpIHtcbiAgICBpZiAoaXNOb2RlICYmICFpc01peCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChab25lW2FwaS5zeW1ib2woJ3BhdGNoRXZlbnRzJyldKSB7XG4gICAgICAgIC8vIGV2ZW50cyBhcmUgYWxyZWFkeSBiZWVuIHBhdGNoZWQgYnkgbGVnYWN5IHBhdGNoLlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBzdXBwb3J0c1dlYlNvY2tldCA9IHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnO1xuICAgIHZhciBpZ25vcmVQcm9wZXJ0aWVzID0gX2dsb2JhbFsnX19ab25lX2lnbm9yZV9vbl9wcm9wZXJ0aWVzJ107XG4gICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgd2UgY2FuIHBhdGNoIHRoZSBkZXNjcmlwdG9yOiAgQ2hyb21lICYgRmlyZWZveFxuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgdmFyIGludGVybmFsV2luZG93ID0gd2luZG93O1xuICAgICAgICB2YXIgaWdub3JlRXJyb3JQcm9wZXJ0aWVzID0gaXNJRSA/IFt7IHRhcmdldDogaW50ZXJuYWxXaW5kb3csIGlnbm9yZVByb3BlcnRpZXM6IFsnZXJyb3InXSB9XSA6IFtdO1xuICAgICAgICAvLyBpbiBJRS9FZGdlLCBvblByb3Agbm90IGV4aXN0IGluIHdpbmRvdyBvYmplY3QsIGJ1dCBpbiBXaW5kb3dQcm90b3R5cGVcbiAgICAgICAgLy8gc28gd2UgbmVlZCB0byBwYXNzIFdpbmRvd1Byb3RvdHlwZSB0byBjaGVjayBvblByb3AgZXhpc3Qgb3Igbm90XG4gICAgICAgIHBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzKGludGVybmFsV2luZG93LCBldmVudE5hbWVzLmNvbmNhdChbJ21lc3NhZ2VlcnJvciddKSwgaWdub3JlUHJvcGVydGllcyA/IGlnbm9yZVByb3BlcnRpZXMuY29uY2F0KGlnbm9yZUVycm9yUHJvcGVydGllcykgOiBpZ25vcmVQcm9wZXJ0aWVzLCBPYmplY3RHZXRQcm90b3R5cGVPZihpbnRlcm5hbFdpbmRvdykpO1xuICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhEb2N1bWVudC5wcm90b3R5cGUsIGV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgICAgICBpZiAodHlwZW9mIGludGVybmFsV2luZG93WydTVkdFbGVtZW50J10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhpbnRlcm5hbFdpbmRvd1snU1ZHRWxlbWVudCddLnByb3RvdHlwZSwgZXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgICAgIH1cbiAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoRWxlbWVudC5wcm90b3R5cGUsIGV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhIVE1MRWxlbWVudC5wcm90b3R5cGUsIGV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhIVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZSwgbWVkaWFFbGVtZW50RXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgICAgIHBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzKEhUTUxGcmFtZVNldEVsZW1lbnQucHJvdG90eXBlLCB3aW5kb3dFdmVudE5hbWVzLmNvbmNhdChmcmFtZVNldEV2ZW50TmFtZXMpLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoSFRNTEJvZHlFbGVtZW50LnByb3RvdHlwZSwgd2luZG93RXZlbnROYW1lcy5jb25jYXQoZnJhbWVTZXRFdmVudE5hbWVzKSwgaWdub3JlUHJvcGVydGllcyk7XG4gICAgICAgIHBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzKEhUTUxGcmFtZUVsZW1lbnQucHJvdG90eXBlLCBmcmFtZUV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhIVE1MSUZyYW1lRWxlbWVudC5wcm90b3R5cGUsIGZyYW1lRXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgICAgIHZhciBIVE1MTWFycXVlZUVsZW1lbnRfMSA9IGludGVybmFsV2luZG93WydIVE1MTWFycXVlZUVsZW1lbnQnXTtcbiAgICAgICAgaWYgKEhUTUxNYXJxdWVlRWxlbWVudF8xKSB7XG4gICAgICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhIVE1MTWFycXVlZUVsZW1lbnRfMS5wcm90b3R5cGUsIG1hcnF1ZWVFdmVudE5hbWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgV29ya2VyXzEgPSBpbnRlcm5hbFdpbmRvd1snV29ya2VyJ107XG4gICAgICAgIGlmIChXb3JrZXJfMSkge1xuICAgICAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoV29ya2VyXzEucHJvdG90eXBlLCB3b3JrZXJFdmVudE5hbWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsIFhNTEh0dHBSZXF1ZXN0RXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgdmFyIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQgPSBfZ2xvYmFsWydYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0J107XG4gICAgaWYgKFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQpIHtcbiAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCAmJiBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0LnByb3RvdHlwZSwgWE1MSHR0cFJlcXVlc3RFdmVudE5hbWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBJREJJbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoSURCSW5kZXgucHJvdG90eXBlLCBJREJJbmRleEV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhJREJSZXF1ZXN0LnByb3RvdHlwZSwgSURCSW5kZXhFdmVudE5hbWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoSURCT3BlbkRCUmVxdWVzdC5wcm90b3R5cGUsIElEQkluZGV4RXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgICAgIHBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzKElEQkRhdGFiYXNlLnByb3RvdHlwZSwgSURCSW5kZXhFdmVudE5hbWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoSURCVHJhbnNhY3Rpb24ucHJvdG90eXBlLCBJREJJbmRleEV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhJREJDdXJzb3IucHJvdG90eXBlLCBJREJJbmRleEV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgIH1cbiAgICBpZiAoc3VwcG9ydHNXZWJTb2NrZXQpIHtcbiAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoV2ViU29ja2V0LnByb3RvdHlwZSwgd2Vic29ja2V0RXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5ab25lLl9fbG9hZF9wYXRjaCgndXRpbCcsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgIGFwaS5wYXRjaE9uUHJvcGVydGllcyA9IHBhdGNoT25Qcm9wZXJ0aWVzO1xuICAgIGFwaS5wYXRjaE1ldGhvZCA9IHBhdGNoTWV0aG9kO1xuICAgIGFwaS5iaW5kQXJndW1lbnRzID0gYmluZEFyZ3VtZW50cztcbiAgICBhcGkucGF0Y2hNYWNyb1Rhc2sgPSBwYXRjaE1hY3JvVGFzaztcbiAgICAvLyBJbiBlYXJsaWVyIHZlcnNpb24gb2Ygem9uZS5qcyAoPDAuOS4wKSwgd2UgdXNlIGVudiBuYW1lIGBfX3pvbmVfc3ltYm9sX19CTEFDS19MSVNURURfRVZFTlRTYCB0b1xuICAgIC8vIGRlZmluZSB3aGljaCBldmVudHMgd2lsbCBub3QgYmUgcGF0Y2hlZCBieSBgWm9uZS5qc2AuXG4gICAgLy8gSW4gbmV3ZXIgdmVyc2lvbiAoPj0wLjkuMCksIHdlIGNoYW5nZSB0aGUgZW52IG5hbWUgdG8gYF9fem9uZV9zeW1ib2xfX1VOUEFUQ0hFRF9FVkVOVFNgIHRvIGtlZXBcbiAgICAvLyB0aGUgbmFtZSBjb25zaXN0ZW50IHdpdGggYW5ndWxhciByZXBvLlxuICAgIC8vIFRoZSAgYF9fem9uZV9zeW1ib2xfX0JMQUNLX0xJU1RFRF9FVkVOVFNgIGlzIGRlcHJlY2F0ZWQsIGJ1dCBpdCBpcyBzdGlsbCBiZSBzdXBwb3J0ZWQgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAgdmFyIFNZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTID0gWm9uZS5fX3N5bWJvbF9fKCdCTEFDS19MSVNURURfRVZFTlRTJyk7XG4gICAgdmFyIFNZTUJPTF9VTlBBVENIRURfRVZFTlRTID0gWm9uZS5fX3N5bWJvbF9fKCdVTlBBVENIRURfRVZFTlRTJyk7XG4gICAgaWYgKGdsb2JhbFtTWU1CT0xfVU5QQVRDSEVEX0VWRU5UU10pIHtcbiAgICAgICAgZ2xvYmFsW1NZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTXSA9IGdsb2JhbFtTWU1CT0xfVU5QQVRDSEVEX0VWRU5UU107XG4gICAgfVxuICAgIGlmIChnbG9iYWxbU1lNQk9MX0JMQUNLX0xJU1RFRF9FVkVOVFNdKSB7XG4gICAgICAgIFpvbmVbU1lNQk9MX0JMQUNLX0xJU1RFRF9FVkVOVFNdID0gWm9uZVtTWU1CT0xfVU5QQVRDSEVEX0VWRU5UU10gPVxuICAgICAgICAgICAgZ2xvYmFsW1NZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTXTtcbiAgICB9XG4gICAgYXBpLnBhdGNoRXZlbnRQcm90b3R5cGUgPSBwYXRjaEV2ZW50UHJvdG90eXBlO1xuICAgIGFwaS5wYXRjaEV2ZW50VGFyZ2V0ID0gcGF0Y2hFdmVudFRhcmdldDtcbiAgICBhcGkuaXNJRU9yRWRnZSA9IGlzSUVPckVkZ2U7XG4gICAgYXBpLk9iamVjdERlZmluZVByb3BlcnR5ID0gT2JqZWN0RGVmaW5lUHJvcGVydHk7XG4gICAgYXBpLk9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgICBhcGkuT2JqZWN0Q3JlYXRlID0gT2JqZWN0Q3JlYXRlO1xuICAgIGFwaS5BcnJheVNsaWNlID0gQXJyYXlTbGljZTtcbiAgICBhcGkucGF0Y2hDbGFzcyA9IHBhdGNoQ2xhc3M7XG4gICAgYXBpLndyYXBXaXRoQ3VycmVudFpvbmUgPSB3cmFwV2l0aEN1cnJlbnRab25lO1xuICAgIGFwaS5maWx0ZXJQcm9wZXJ0aWVzID0gZmlsdGVyUHJvcGVydGllcztcbiAgICBhcGkuYXR0YWNoT3JpZ2luVG9QYXRjaGVkID0gYXR0YWNoT3JpZ2luVG9QYXRjaGVkO1xuICAgIGFwaS5fcmVkZWZpbmVQcm9wZXJ0eSA9IF9yZWRlZmluZVByb3BlcnR5O1xuICAgIGFwaS5wYXRjaENhbGxiYWNrcyA9IHBhdGNoQ2FsbGJhY2tzO1xuICAgIGFwaS5nZXRHbG9iYWxPYmplY3RzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgICAgICAgZ2xvYmFsU291cmNlczogZ2xvYmFsU291cmNlcyxcbiAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXM6IHpvbmVTeW1ib2xFdmVudE5hbWVzJDEsXG4gICAgICAgIGV2ZW50TmFtZXM6IGV2ZW50TmFtZXMsXG4gICAgICAgIGlzQnJvd3NlcjogaXNCcm93c2VyLFxuICAgICAgICBpc01peDogaXNNaXgsXG4gICAgICAgIGlzTm9kZTogaXNOb2RlLFxuICAgICAgICBUUlVFX1NUUjogVFJVRV9TVFIsXG4gICAgICAgIEZBTFNFX1NUUjogRkFMU0VfU1RSLFxuICAgICAgICBaT05FX1NZTUJPTF9QUkVGSVg6IFpPTkVfU1lNQk9MX1BSRUZJWCxcbiAgICAgICAgQUREX0VWRU5UX0xJU1RFTkVSX1NUUjogQUREX0VWRU5UX0xJU1RFTkVSX1NUUixcbiAgICAgICAgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUjogUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUlxuICAgIH0pOyB9O1xufSk7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuZnVuY3Rpb24gZXZlbnRUYXJnZXRMZWdhY3lQYXRjaChfZ2xvYmFsLCBhcGkpIHtcbiAgICB2YXIgX2EgPSBhcGkuZ2V0R2xvYmFsT2JqZWN0cygpLCBldmVudE5hbWVzID0gX2EuZXZlbnROYW1lcywgZ2xvYmFsU291cmNlcyA9IF9hLmdsb2JhbFNvdXJjZXMsIHpvbmVTeW1ib2xFdmVudE5hbWVzID0gX2Euem9uZVN5bWJvbEV2ZW50TmFtZXMsIFRSVUVfU1RSID0gX2EuVFJVRV9TVFIsIEZBTFNFX1NUUiA9IF9hLkZBTFNFX1NUUiwgWk9ORV9TWU1CT0xfUFJFRklYID0gX2EuWk9ORV9TWU1CT0xfUFJFRklYO1xuICAgIHZhciBXVEZfSVNTVUVfNTU1ID0gJ0FuY2hvcixBcmVhLEF1ZGlvLEJSLEJhc2UsQmFzZUZvbnQsQm9keSxCdXR0b24sQ2FudmFzLENvbnRlbnQsRExpc3QsRGlyZWN0b3J5LERpdixFbWJlZCxGaWVsZFNldCxGb250LEZvcm0sRnJhbWUsRnJhbWVTZXQsSFIsSGVhZCxIZWFkaW5nLEh0bWwsSUZyYW1lLEltYWdlLElucHV0LEtleWdlbixMSSxMYWJlbCxMZWdlbmQsTGluayxNYXAsTWFycXVlZSxNZWRpYSxNZW51LE1ldGEsTWV0ZXIsTW9kLE9MaXN0LE9iamVjdCxPcHRHcm91cCxPcHRpb24sT3V0cHV0LFBhcmFncmFwaCxQcmUsUHJvZ3Jlc3MsUXVvdGUsU2NyaXB0LFNlbGVjdCxTb3VyY2UsU3BhbixTdHlsZSxUYWJsZUNhcHRpb24sVGFibGVDZWxsLFRhYmxlQ29sLFRhYmxlLFRhYmxlUm93LFRhYmxlU2VjdGlvbixUZXh0QXJlYSxUaXRsZSxUcmFjayxVTGlzdCxVbmtub3duLFZpZGVvJztcbiAgICB2YXIgTk9fRVZFTlRfVEFSR0VUID0gJ0FwcGxpY2F0aW9uQ2FjaGUsRXZlbnRTb3VyY2UsRmlsZVJlYWRlcixJbnB1dE1ldGhvZENvbnRleHQsTWVkaWFDb250cm9sbGVyLE1lc3NhZ2VQb3J0LE5vZGUsUGVyZm9ybWFuY2UsU1ZHRWxlbWVudEluc3RhbmNlLFNoYXJlZFdvcmtlcixUZXh0VHJhY2ssVGV4dFRyYWNrQ3VlLFRleHRUcmFja0xpc3QsV2ViS2l0TmFtZWRGbG93LFdpbmRvdyxXb3JrZXIsV29ya2VyR2xvYmFsU2NvcGUsWE1MSHR0cFJlcXVlc3QsWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCxYTUxIdHRwUmVxdWVzdFVwbG9hZCxJREJSZXF1ZXN0LElEQk9wZW5EQlJlcXVlc3QsSURCRGF0YWJhc2UsSURCVHJhbnNhY3Rpb24sSURCQ3Vyc29yLERCSW5kZXgsV2ViU29ja2V0J1xuICAgICAgICAuc3BsaXQoJywnKTtcbiAgICB2YXIgRVZFTlRfVEFSR0VUID0gJ0V2ZW50VGFyZ2V0JztcbiAgICB2YXIgYXBpcyA9IFtdO1xuICAgIHZhciBpc1d0ZiA9IF9nbG9iYWxbJ3d0ZiddO1xuICAgIHZhciBXVEZfSVNTVUVfNTU1X0FSUkFZID0gV1RGX0lTU1VFXzU1NS5zcGxpdCgnLCcpO1xuICAgIGlmIChpc1d0Zikge1xuICAgICAgICAvLyBXb3JrYXJvdW5kIGZvcjogaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS90cmFjaW5nLWZyYW1ld29yay9pc3N1ZXMvNTU1XG4gICAgICAgIGFwaXMgPSBXVEZfSVNTVUVfNTU1X0FSUkFZLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gJ0hUTUwnICsgdiArICdFbGVtZW50JzsgfSkuY29uY2F0KE5PX0VWRU5UX1RBUkdFVCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKF9nbG9iYWxbRVZFTlRfVEFSR0VUXSkge1xuICAgICAgICAvLyBFdmVudFRhcmdldCBpcyBhbHJlYWR5IHBhdGNoZWQgaW4gYnJvd3Nlci50c1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gTm90ZTogRXZlbnRUYXJnZXQgaXMgbm90IGF2YWlsYWJsZSBpbiBhbGwgYnJvd3NlcnMsXG4gICAgICAgIC8vIGlmIGl0J3Mgbm90IGF2YWlsYWJsZSwgd2UgaW5zdGVhZCBwYXRjaCB0aGUgQVBJcyBpbiB0aGUgSURMIHRoYXQgaW5oZXJpdCBmcm9tIEV2ZW50VGFyZ2V0XG4gICAgICAgIGFwaXMgPSBOT19FVkVOVF9UQVJHRVQ7XG4gICAgfVxuICAgIHZhciBpc0Rpc2FibGVJRUNoZWNrID0gX2dsb2JhbFsnX19ab25lX2Rpc2FibGVfSUVfY2hlY2snXSB8fCBmYWxzZTtcbiAgICB2YXIgaXNFbmFibGVDcm9zc0NvbnRleHRDaGVjayA9IF9nbG9iYWxbJ19fWm9uZV9lbmFibGVfY3Jvc3NfY29udGV4dF9jaGVjayddIHx8IGZhbHNlO1xuICAgIHZhciBpZU9yRWRnZSA9IGFwaS5pc0lFT3JFZGdlKCk7XG4gICAgdmFyIEFERF9FVkVOVF9MSVNURU5FUl9TT1VSQ0UgPSAnLmFkZEV2ZW50TGlzdGVuZXI6JztcbiAgICB2YXIgRlVOQ1RJT05fV1JBUFBFUiA9ICdbb2JqZWN0IEZ1bmN0aW9uV3JhcHBlcl0nO1xuICAgIHZhciBCUk9XU0VSX1RPT0xTID0gJ2Z1bmN0aW9uIF9fQlJPV1NFUlRPT0xTX0NPTlNPTEVfU0FGRUZVTkMoKSB7IFtuYXRpdmUgY29kZV0gfSc7XG4gICAgLy8gIHByZWRlZmluZSBhbGwgX196b25lX3N5bWJvbF9fICsgZXZlbnROYW1lICsgdHJ1ZS9mYWxzZSBzdHJpbmdcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGV2ZW50TmFtZXNbaV07XG4gICAgICAgIHZhciBmYWxzZUV2ZW50TmFtZSA9IGV2ZW50TmFtZSArIEZBTFNFX1NUUjtcbiAgICAgICAgdmFyIHRydWVFdmVudE5hbWUgPSBldmVudE5hbWUgKyBUUlVFX1NUUjtcbiAgICAgICAgdmFyIHN5bWJvbCA9IFpPTkVfU1lNQk9MX1BSRUZJWCArIGZhbHNlRXZlbnROYW1lO1xuICAgICAgICB2YXIgc3ltYm9sQ2FwdHVyZSA9IFpPTkVfU1lNQk9MX1BSRUZJWCArIHRydWVFdmVudE5hbWU7XG4gICAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV0gPSB7fTtcbiAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXVtGQUxTRV9TVFJdID0gc3ltYm9sO1xuICAgICAgICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdW1RSVUVfU1RSXSA9IHN5bWJvbENhcHR1cmU7XG4gICAgfVxuICAgIC8vICBwcmVkZWZpbmUgYWxsIHRhc2suc291cmNlIHN0cmluZ1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgV1RGX0lTU1VFXzU1NS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gV1RGX0lTU1VFXzU1NV9BUlJBWVtpXTtcbiAgICAgICAgdmFyIHRhcmdldHMgPSBnbG9iYWxTb3VyY2VzW3RhcmdldF0gPSB7fTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBldmVudE5hbWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gZXZlbnROYW1lc1tqXTtcbiAgICAgICAgICAgIHRhcmdldHNbZXZlbnROYW1lXSA9IHRhcmdldCArIEFERF9FVkVOVF9MSVNURU5FUl9TT1VSQ0UgKyBldmVudE5hbWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGNoZWNrSUVBbmRDcm9zc0NvbnRleHQgPSBmdW5jdGlvbiAobmF0aXZlRGVsZWdhdGUsIGRlbGVnYXRlLCB0YXJnZXQsIGFyZ3MpIHtcbiAgICAgICAgaWYgKCFpc0Rpc2FibGVJRUNoZWNrICYmIGllT3JFZGdlKSB7XG4gICAgICAgICAgICBpZiAoaXNFbmFibGVDcm9zc0NvbnRleHRDaGVjaykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0U3RyaW5nID0gZGVsZWdhdGUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh0ZXN0U3RyaW5nID09PSBGVU5DVElPTl9XUkFQUEVSIHx8IHRlc3RTdHJpbmcgPT0gQlJPV1NFUl9UT09MUykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZURlbGVnYXRlLmFwcGx5KHRhcmdldCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZURlbGVnYXRlLmFwcGx5KHRhcmdldCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdFN0cmluZyA9IGRlbGVnYXRlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgaWYgKCh0ZXN0U3RyaW5nID09PSBGVU5DVElPTl9XUkFQUEVSIHx8IHRlc3RTdHJpbmcgPT0gQlJPV1NFUl9UT09MUykpIHtcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlRGVsZWdhdGUuYXBwbHkodGFyZ2V0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0VuYWJsZUNyb3NzQ29udGV4dENoZWNrKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGRlbGVnYXRlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBuYXRpdmVEZWxlZ2F0ZS5hcHBseSh0YXJnZXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIHZhciBhcGlUeXBlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXBpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdHlwZSA9IF9nbG9iYWxbYXBpc1tpXV07XG4gICAgICAgIGFwaVR5cGVzLnB1c2godHlwZSAmJiB0eXBlLnByb3RvdHlwZSk7XG4gICAgfVxuICAgIC8vIHZoIGlzIHZhbGlkYXRlSGFuZGxlciB0byBjaGVjayBldmVudCBoYW5kbGVyXG4gICAgLy8gaXMgdmFsaWQgb3Igbm90KGZvciBzZWN1cml0eSBjaGVjaylcbiAgICBhcGkucGF0Y2hFdmVudFRhcmdldChfZ2xvYmFsLCBhcGlUeXBlcywgeyB2aDogY2hlY2tJRUFuZENyb3NzQ29udGV4dCB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLy8gd2UgaGF2ZSB0byBwYXRjaCB0aGUgaW5zdGFuY2Ugc2luY2UgdGhlIHByb3RvIGlzIG5vbi1jb25maWd1cmFibGVcbmZ1bmN0aW9uIGFwcGx5KGFwaSwgX2dsb2JhbCkge1xuICAgIHZhciBfYSA9IGFwaS5nZXRHbG9iYWxPYmplY3RzKCksIEFERF9FVkVOVF9MSVNURU5FUl9TVFIgPSBfYS5BRERfRVZFTlRfTElTVEVORVJfU1RSLCBSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSID0gX2EuUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUjtcbiAgICB2YXIgV1MgPSBfZ2xvYmFsLldlYlNvY2tldDtcbiAgICAvLyBPbiBTYWZhcmkgd2luZG93LkV2ZW50VGFyZ2V0IGRvZXNuJ3QgZXhpc3Qgc28gbmVlZCB0byBwYXRjaCBXUyBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAgIC8vIE9uIG9sZGVyIENocm9tZSwgbm8gbmVlZCBzaW5jZSBFdmVudFRhcmdldCB3YXMgYWxyZWFkeSBwYXRjaGVkXG4gICAgaWYgKCFfZ2xvYmFsLkV2ZW50VGFyZ2V0KSB7XG4gICAgICAgIGFwaS5wYXRjaEV2ZW50VGFyZ2V0KF9nbG9iYWwsIFtXUy5wcm90b3R5cGVdKTtcbiAgICB9XG4gICAgX2dsb2JhbC5XZWJTb2NrZXQgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB2YXIgc29ja2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBuZXcgV1MoeCwgeSkgOiBuZXcgV1MoeCk7XG4gICAgICAgIHZhciBwcm94eVNvY2tldDtcbiAgICAgICAgdmFyIHByb3h5U29ja2V0UHJvdG87XG4gICAgICAgIC8vIFNhZmFyaSA3LjAgaGFzIG5vbi1jb25maWd1cmFibGUgb3duICdvbm1lc3NhZ2UnIGFuZCBmcmllbmRzIHByb3BlcnRpZXMgb24gdGhlIHNvY2tldCBpbnN0YW5jZVxuICAgICAgICB2YXIgb25tZXNzYWdlRGVzYyA9IGFwaS5PYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc29ja2V0LCAnb25tZXNzYWdlJyk7XG4gICAgICAgIGlmIChvbm1lc3NhZ2VEZXNjICYmIG9ubWVzc2FnZURlc2MuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcHJveHlTb2NrZXQgPSBhcGkuT2JqZWN0Q3JlYXRlKHNvY2tldCk7XG4gICAgICAgICAgICAvLyBzb2NrZXQgaGF2ZSBvd24gcHJvcGVydHkgZGVzY3JpcHRvciAnb25vcGVuJywgJ29ubWVzc2FnZScsICdvbmNsb3NlJywgJ29uZXJyb3InXG4gICAgICAgICAgICAvLyBidXQgcHJveHlTb2NrZXQgbm90LCBzbyB3ZSB3aWxsIGtlZXAgc29ja2V0IGFzIHByb3RvdHlwZSBhbmQgcGFzcyBpdCB0b1xuICAgICAgICAgICAgLy8gcGF0Y2hPblByb3BlcnRpZXMgbWV0aG9kXG4gICAgICAgICAgICBwcm94eVNvY2tldFByb3RvID0gc29ja2V0O1xuICAgICAgICAgICAgW0FERF9FVkVOVF9MSVNURU5FUl9TVFIsIFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIsICdzZW5kJywgJ2Nsb3NlJ10uZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm94eVNvY2tldFtwcm9wTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gYXBpLkFycmF5U2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcE5hbWUgPT09IEFERF9FVkVOVF9MSVNURU5FUl9TVFIgfHwgcHJvcE5hbWUgPT09IFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSBhcmdzLmxlbmd0aCA+IDAgPyBhcmdzWzBdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wZXJ0eVN5bWJvbCA9IFpvbmUuX19zeW1ib2xfXygnT05fUFJPUEVSVFknICsgZXZlbnROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXRbcHJvcGVydHlTeW1ib2xdID0gcHJveHlTb2NrZXRbcHJvcGVydHlTeW1ib2xdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzb2NrZXRbcHJvcE5hbWVdLmFwcGx5KHNvY2tldCwgYXJncyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gd2UgY2FuIHBhdGNoIHRoZSByZWFsIHNvY2tldFxuICAgICAgICAgICAgcHJveHlTb2NrZXQgPSBzb2NrZXQ7XG4gICAgICAgIH1cbiAgICAgICAgYXBpLnBhdGNoT25Qcm9wZXJ0aWVzKHByb3h5U29ja2V0LCBbJ2Nsb3NlJywgJ2Vycm9yJywgJ21lc3NhZ2UnLCAnb3BlbiddLCBwcm94eVNvY2tldFByb3RvKTtcbiAgICAgICAgcmV0dXJuIHByb3h5U29ja2V0O1xuICAgIH07XG4gICAgdmFyIGdsb2JhbFdlYlNvY2tldCA9IF9nbG9iYWxbJ1dlYlNvY2tldCddO1xuICAgIGZvciAodmFyIHByb3AgaW4gV1MpIHtcbiAgICAgICAgZ2xvYmFsV2ViU29ja2V0W3Byb3BdID0gV1NbcHJvcF07XG4gICAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBzdXBwcmVzcyB7Z2xvYmFsVGhpc31cbiAqL1xuZnVuY3Rpb24gcHJvcGVydHlEZXNjcmlwdG9yTGVnYWN5UGF0Y2goYXBpLCBfZ2xvYmFsKSB7XG4gICAgdmFyIF9hID0gYXBpLmdldEdsb2JhbE9iamVjdHMoKSwgaXNOb2RlID0gX2EuaXNOb2RlLCBpc01peCA9IF9hLmlzTWl4O1xuICAgIGlmIChpc05vZGUgJiYgIWlzTWl4KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHN1cHBvcnRzV2ViU29ja2V0ID0gdHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgaWYgKCFjYW5QYXRjaFZpYVByb3BlcnR5RGVzY3JpcHRvcihhcGkpKSB7XG4gICAgICAgIC8vIFNhZmFyaSwgQW5kcm9pZCBicm93c2VycyAoSmVsbHkgQmVhbilcbiAgICAgICAgcGF0Y2hWaWFDYXB0dXJpbmdBbGxUaGVFdmVudHMoYXBpKTtcbiAgICAgICAgYXBpLnBhdGNoQ2xhc3MoJ1hNTEh0dHBSZXF1ZXN0Jyk7XG4gICAgICAgIGlmIChzdXBwb3J0c1dlYlNvY2tldCkge1xuICAgICAgICAgICAgYXBwbHkoYXBpLCBfZ2xvYmFsKTtcbiAgICAgICAgfVxuICAgICAgICBab25lW2FwaS5zeW1ib2woJ3BhdGNoRXZlbnRzJyldID0gdHJ1ZTtcbiAgICB9XG59XG5mdW5jdGlvbiBjYW5QYXRjaFZpYVByb3BlcnR5RGVzY3JpcHRvcihhcGkpIHtcbiAgICB2YXIgX2EgPSBhcGkuZ2V0R2xvYmFsT2JqZWN0cygpLCBpc0Jyb3dzZXIgPSBfYS5pc0Jyb3dzZXIsIGlzTWl4ID0gX2EuaXNNaXg7XG4gICAgaWYgKChpc0Jyb3dzZXIgfHwgaXNNaXgpICYmXG4gICAgICAgICFhcGkuT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEhUTUxFbGVtZW50LnByb3RvdHlwZSwgJ29uY2xpY2snKSAmJlxuICAgICAgICB0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gV2ViS2l0IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzQzNjRcbiAgICAgICAgLy8gSURMIGludGVyZmFjZSBhdHRyaWJ1dGVzIGFyZSBub3QgY29uZmlndXJhYmxlXG4gICAgICAgIHZhciBkZXNjID0gYXBpLk9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihFbGVtZW50LnByb3RvdHlwZSwgJ29uY2xpY2snKTtcbiAgICAgICAgaWYgKGRlc2MgJiYgIWRlc2MuY29uZmlndXJhYmxlKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgT05fUkVBRFlfU1RBVEVfQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlID0gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlO1xuICAgIHZhciB4aHJEZXNjID0gYXBpLk9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgT05fUkVBRFlfU1RBVEVfQ0hBTkdFKTtcbiAgICAvLyBhZGQgZW51bWVyYWJsZSBhbmQgY29uZmlndXJhYmxlIGhlcmUgYmVjYXVzZSBpbiBvcGVyYVxuICAgIC8vIGJ5IGRlZmF1bHQgWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9ucmVhZHlzdGF0ZWNoYW5nZSBpcyB1bmRlZmluZWRcbiAgICAvLyB3aXRob3V0IGFkZGluZyBlbnVtZXJhYmxlIGFuZCBjb25maWd1cmFibGUgd2lsbCBjYXVzZSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgICAvLyBub24tY29uZmlndXJhYmxlXG4gICAgLy8gYW5kIGlmIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5vbnJlYWR5c3RhdGVjaGFuZ2UgaXMgdW5kZWZpbmVkLFxuICAgIC8vIHdlIHNob3VsZCBzZXQgYSByZWFsIGRlc2MgaW5zdGVhZCBhIGZha2Ugb25lXG4gICAgaWYgKHhockRlc2MpIHtcbiAgICAgICAgYXBpLk9iamVjdERlZmluZVByb3BlcnR5KFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlLCBPTl9SRUFEWV9TVEFURV9DSEFOR0UsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9ICEhcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZTtcbiAgICAgICAgLy8gcmVzdG9yZSBvcmlnaW5hbCBkZXNjXG4gICAgICAgIGFwaS5PYmplY3REZWZpbmVQcm9wZXJ0eShYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgT05fUkVBRFlfU1RBVEVfQ0hBTkdFLCB4aHJEZXNjIHx8IHt9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBTWU1CT0xfRkFLRV9PTlJFQURZU1RBVEVDSEFOR0VfMSA9IGFwaS5zeW1ib2woJ2Zha2UnKTtcbiAgICAgICAgYXBpLk9iamVjdERlZmluZVByb3BlcnR5KFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlLCBPTl9SRUFEWV9TVEFURV9DSEFOR0UsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tTWU1CT0xfRkFLRV9PTlJFQURZU1RBVEVDSEFOR0VfMV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzW1NZTUJPTF9GQUtFX09OUkVBRFlTVEFURUNIQU5HRV8xXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB2YXIgZGV0ZWN0RnVuYyA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGRldGVjdEZ1bmM7XG4gICAgICAgIHZhciByZXN1bHQgPSByZXFbU1lNQk9MX0ZBS0VfT05SRUFEWVNUQVRFQ0hBTkdFXzFdID09PSBkZXRlY3RGdW5jO1xuICAgICAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4vLyBXaGVuZXZlciBhbnkgZXZlbnRMaXN0ZW5lciBmaXJlcywgd2UgY2hlY2sgdGhlIGV2ZW50TGlzdGVuZXIgdGFyZ2V0IGFuZCBhbGwgcGFyZW50c1xuLy8gZm9yIGBvbndoYXRldmVyYCBwcm9wZXJ0aWVzIGFuZCByZXBsYWNlIHRoZW0gd2l0aCB6b25lLWJvdW5kIGZ1bmN0aW9uc1xuLy8gLSBDaHJvbWUgKGZvciBub3cpXG5mdW5jdGlvbiBwYXRjaFZpYUNhcHR1cmluZ0FsbFRoZUV2ZW50cyhhcGkpIHtcbiAgICB2YXIgZXZlbnROYW1lcyA9IGFwaS5nZXRHbG9iYWxPYmplY3RzKCkuZXZlbnROYW1lcztcbiAgICB2YXIgdW5ib3VuZEtleSA9IGFwaS5zeW1ib2woJ3VuYm91bmQnKTtcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IGV2ZW50TmFtZXNbaV07XG4gICAgICAgIHZhciBvbnByb3BlcnR5ID0gJ29uJyArIHByb3BlcnR5O1xuICAgICAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIocHJvcGVydHksIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGVsdCA9IGV2ZW50LnRhcmdldCwgYm91bmQsIHNvdXJjZTtcbiAgICAgICAgICAgIGlmIChlbHQpIHtcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSBlbHQuY29uc3RydWN0b3JbJ25hbWUnXSArICcuJyArIG9ucHJvcGVydHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSAndW5rbm93bi4nICsgb25wcm9wZXJ0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChlbHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWx0W29ucHJvcGVydHldICYmICFlbHRbb25wcm9wZXJ0eV1bdW5ib3VuZEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgYm91bmQgPSBhcGkud3JhcFdpdGhDdXJyZW50Wm9uZShlbHRbb25wcm9wZXJ0eV0sIHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgIGJvdW5kW3VuYm91bmRLZXldID0gZWx0W29ucHJvcGVydHldO1xuICAgICAgICAgICAgICAgICAgICBlbHRbb25wcm9wZXJ0eV0gPSBib3VuZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWx0ID0gZWx0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuICAgIH07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIF9sb29wXzEoaSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5mdW5jdGlvbiByZWdpc3RlckVsZW1lbnRQYXRjaChfZ2xvYmFsLCBhcGkpIHtcbiAgICB2YXIgX2EgPSBhcGkuZ2V0R2xvYmFsT2JqZWN0cygpLCBpc0Jyb3dzZXIgPSBfYS5pc0Jyb3dzZXIsIGlzTWl4ID0gX2EuaXNNaXg7XG4gICAgaWYgKCghaXNCcm93c2VyICYmICFpc01peCkgfHwgISgncmVnaXN0ZXJFbGVtZW50JyBpbiBfZ2xvYmFsLmRvY3VtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjYWxsYmFja3MgPSBbJ2NyZWF0ZWRDYWxsYmFjaycsICdhdHRhY2hlZENhbGxiYWNrJywgJ2RldGFjaGVkQ2FsbGJhY2snLCAnYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrJ107XG4gICAgYXBpLnBhdGNoQ2FsbGJhY2tzKGFwaSwgZG9jdW1lbnQsICdEb2N1bWVudCcsICdyZWdpc3RlckVsZW1lbnQnLCBjYWxsYmFja3MpO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBzdXBwcmVzcyB7bWlzc2luZ1JlcXVpcmV9XG4gKi9cbihmdW5jdGlvbiAoX2dsb2JhbCkge1xuICAgIF9nbG9iYWxbJ19fem9uZV9zeW1ib2xfX2xlZ2FjeVBhdGNoJ10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBab25lID0gX2dsb2JhbFsnWm9uZSddO1xuICAgICAgICBab25lLl9fbG9hZF9wYXRjaCgncmVnaXN0ZXJFbGVtZW50JywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSwgYXBpKSB7XG4gICAgICAgICAgICByZWdpc3RlckVsZW1lbnRQYXRjaChnbG9iYWwsIGFwaSk7XG4gICAgICAgIH0pO1xuICAgICAgICBab25lLl9fbG9hZF9wYXRjaCgnRXZlbnRUYXJnZXRMZWdhY3knLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICAgICAgICAgIGV2ZW50VGFyZ2V0TGVnYWN5UGF0Y2goZ2xvYmFsLCBhcGkpO1xuICAgICAgICAgICAgcHJvcGVydHlEZXNjcmlwdG9yTGVnYWN5UGF0Y2goYXBpLCBnbG9iYWwpO1xuICAgICAgICB9KTtcbiAgICB9O1xufSkodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93IHx8IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmIHx8IGdsb2JhbCk7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICogQHN1cHByZXNzIHttaXNzaW5nUmVxdWlyZX1cbiAqL1xudmFyIHRhc2tTeW1ib2wgPSB6b25lU3ltYm9sKCd6b25lVGFzaycpO1xuZnVuY3Rpb24gcGF0Y2hUaW1lcih3aW5kb3csIHNldE5hbWUsIGNhbmNlbE5hbWUsIG5hbWVTdWZmaXgpIHtcbiAgICB2YXIgc2V0TmF0aXZlID0gbnVsbDtcbiAgICB2YXIgY2xlYXJOYXRpdmUgPSBudWxsO1xuICAgIHNldE5hbWUgKz0gbmFtZVN1ZmZpeDtcbiAgICBjYW5jZWxOYW1lICs9IG5hbWVTdWZmaXg7XG4gICAgdmFyIHRhc2tzQnlIYW5kbGVJZCA9IHt9O1xuICAgIGZ1bmN0aW9uIHNjaGVkdWxlVGFzayh0YXNrKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGFzay5kYXRhO1xuICAgICAgICBmdW5jdGlvbiB0aW1lcigpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGFzay5pbnZva2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIC8vIGlzc3VlLTkzNCwgdGFzayB3aWxsIGJlIGNhbmNlbGxlZFxuICAgICAgICAgICAgICAgIC8vIGV2ZW4gaXQgaXMgYSBwZXJpb2RpYyB0YXNrIHN1Y2ggYXNcbiAgICAgICAgICAgICAgICAvLyBzZXRJbnRlcnZhbFxuICAgICAgICAgICAgICAgIGlmICghKHRhc2suZGF0YSAmJiB0YXNrLmRhdGEuaXNQZXJpb2RpYykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhLmhhbmRsZUlkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW4gbm9uLW5vZGVqcyBlbnYsIHdlIHJlbW92ZSB0aW1lcklkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmcm9tIGxvY2FsIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZUlkW2RhdGEuaGFuZGxlSWRdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEuaGFuZGxlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vZGUgcmV0dXJucyBjb21wbGV4IG9iamVjdHMgYXMgaGFuZGxlSWRzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSByZW1vdmUgdGFzayByZWZlcmVuY2UgZnJvbSB0aW1lciBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuaGFuZGxlSWRbdGFza1N5bWJvbF0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRhdGEuYXJnc1swXSA9IHRpbWVyO1xuICAgICAgICBkYXRhLmhhbmRsZUlkID0gc2V0TmF0aXZlLmFwcGx5KHdpbmRvdywgZGF0YS5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsZWFyVGFzayh0YXNrKSB7XG4gICAgICAgIHJldHVybiBjbGVhck5hdGl2ZSh0YXNrLmRhdGEuaGFuZGxlSWQpO1xuICAgIH1cbiAgICBzZXROYXRpdmUgPVxuICAgICAgICBwYXRjaE1ldGhvZCh3aW5kb3csIHNldE5hbWUsIGZ1bmN0aW9uIChkZWxlZ2F0ZSkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBpc1BlcmlvZGljOiBuYW1lU3VmZml4ID09PSAnSW50ZXJ2YWwnLFxuICAgICAgICAgICAgICAgICAgICBkZWxheTogKG5hbWVTdWZmaXggPT09ICdUaW1lb3V0JyB8fCBuYW1lU3VmZml4ID09PSAnSW50ZXJ2YWwnKSA/IGFyZ3NbMV0gfHwgMCA6XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3M6IGFyZ3NcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciB0YXNrID0gc2NoZWR1bGVNYWNyb1Rhc2tXaXRoQ3VycmVudFpvbmUoc2V0TmFtZSwgYXJnc1swXSwgb3B0aW9ucywgc2NoZWR1bGVUYXNrLCBjbGVhclRhc2spO1xuICAgICAgICAgICAgICAgIGlmICghdGFzaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm9kZS5qcyBtdXN0IGFkZGl0aW9uYWxseSBzdXBwb3J0IHRoZSByZWYgYW5kIHVucmVmIGZ1bmN0aW9ucy5cbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlID0gdGFzay5kYXRhLmhhbmRsZUlkO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaGFuZGxlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBmb3Igbm9uIG5vZGVqcyBlbnYsIHdlIHNhdmUgaGFuZGxlSWQ6IHRhc2tcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFwcGluZyBpbiBsb2NhbCBjYWNoZSBmb3IgY2xlYXJUaW1lb3V0XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzQnlIYW5kbGVJZFtoYW5kbGVdID0gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciBub2RlanMgZW52LCB3ZSBzYXZlIHRhc2tcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVmZXJlbmNlIGluIHRpbWVySWQgT2JqZWN0IGZvciBjbGVhclRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlW3Rhc2tTeW1ib2xdID0gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgd2hldGhlciBoYW5kbGUgaXMgbnVsbCwgYmVjYXVzZSBzb21lIHBvbHlmaWxsIG9yIGJyb3dzZXJcbiAgICAgICAgICAgICAgICAvLyBtYXkgcmV0dXJuIHVuZGVmaW5lZCBmcm9tIHNldFRpbWVvdXQvc2V0SW50ZXJ2YWwvc2V0SW1tZWRpYXRlL3JlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGUgJiYgaGFuZGxlLnJlZiAmJiBoYW5kbGUudW5yZWYgJiYgdHlwZW9mIGhhbmRsZS5yZWYgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGhhbmRsZS51bnJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnJlZiA9IGhhbmRsZS5yZWYuYmluZChoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnVucmVmID0gaGFuZGxlLnVucmVmLmJpbmQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGUgPT09ICdudW1iZXInIHx8IGhhbmRsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNhdXNlIGFuIGVycm9yIGJ5IGNhbGxpbmcgaXQgZGlyZWN0bHkuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmFwcGx5KHdpbmRvdywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07IH0pO1xuICAgIGNsZWFyTmF0aXZlID1cbiAgICAgICAgcGF0Y2hNZXRob2Qod2luZG93LCBjYW5jZWxOYW1lLCBmdW5jdGlvbiAoZGVsZWdhdGUpIHsgcmV0dXJuIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBhcmdzWzBdO1xuICAgICAgICAgICAgdmFyIHRhc2s7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGlkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIC8vIG5vbiBub2RlanMgZW52LlxuICAgICAgICAgICAgICAgIHRhc2sgPSB0YXNrc0J5SGFuZGxlSWRbaWRdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbm9kZWpzIGVudi5cbiAgICAgICAgICAgICAgICB0YXNrID0gaWQgJiYgaWRbdGFza1N5bWJvbF07XG4gICAgICAgICAgICAgICAgLy8gb3RoZXIgZW52aXJvbm1lbnRzLlxuICAgICAgICAgICAgICAgIGlmICghdGFzaykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrID0gaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhc2sgJiYgdHlwZW9mIHRhc2sudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5zdGF0ZSAhPT0gJ25vdFNjaGVkdWxlZCcgJiZcbiAgICAgICAgICAgICAgICAgICAgKHRhc2suY2FuY2VsRm4gJiYgdGFzay5kYXRhLmlzUGVyaW9kaWMgfHwgdGFzay5ydW5Db3VudCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlSWRbaWRdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZFt0YXNrU3ltYm9sXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gRG8gbm90IGNhbmNlbCBhbHJlYWR5IGNhbmNlbGVkIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnpvbmUuY2FuY2VsVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjYXVzZSBhbiBlcnJvciBieSBjYWxsaW5nIGl0IGRpcmVjdGx5LlxuICAgICAgICAgICAgICAgIGRlbGVnYXRlLmFwcGx5KHdpbmRvdywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07IH0pO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5mdW5jdGlvbiBwYXRjaEN1c3RvbUVsZW1lbnRzKF9nbG9iYWwsIGFwaSkge1xuICAgIHZhciBfYSA9IGFwaS5nZXRHbG9iYWxPYmplY3RzKCksIGlzQnJvd3NlciA9IF9hLmlzQnJvd3NlciwgaXNNaXggPSBfYS5pc01peDtcbiAgICBpZiAoKCFpc0Jyb3dzZXIgJiYgIWlzTWl4KSB8fCAhKCdjdXN0b21FbGVtZW50cycgaW4gX2dsb2JhbCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY2FsbGJhY2tzID0gWydjb25uZWN0ZWRDYWxsYmFjaycsICdkaXNjb25uZWN0ZWRDYWxsYmFjaycsICdhZG9wdGVkQ2FsbGJhY2snLCAnYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrJ107XG4gICAgYXBpLnBhdGNoQ2FsbGJhY2tzKGFwaSwgX2dsb2JhbC5jdXN0b21FbGVtZW50cywgJ2N1c3RvbUVsZW1lbnRzJywgJ2RlZmluZScsIGNhbGxiYWNrcyk7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmZ1bmN0aW9uIGV2ZW50VGFyZ2V0UGF0Y2goX2dsb2JhbCwgYXBpKSB7XG4gICAgdmFyIF9hID0gYXBpLmdldEdsb2JhbE9iamVjdHMoKSwgZXZlbnROYW1lcyA9IF9hLmV2ZW50TmFtZXMsIHpvbmVTeW1ib2xFdmVudE5hbWVzID0gX2Euem9uZVN5bWJvbEV2ZW50TmFtZXMsIFRSVUVfU1RSID0gX2EuVFJVRV9TVFIsIEZBTFNFX1NUUiA9IF9hLkZBTFNFX1NUUiwgWk9ORV9TWU1CT0xfUFJFRklYID0gX2EuWk9ORV9TWU1CT0xfUFJFRklYO1xuICAgIC8vICBwcmVkZWZpbmUgYWxsIF9fem9uZV9zeW1ib2xfXyArIGV2ZW50TmFtZSArIHRydWUvZmFsc2Ugc3RyaW5nXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBldmVudE5hbWUgPSBldmVudE5hbWVzW2ldO1xuICAgICAgICB2YXIgZmFsc2VFdmVudE5hbWUgPSBldmVudE5hbWUgKyBGQUxTRV9TVFI7XG4gICAgICAgIHZhciB0cnVlRXZlbnROYW1lID0gZXZlbnROYW1lICsgVFJVRV9TVFI7XG4gICAgICAgIHZhciBzeW1ib2wgPSBaT05FX1NZTUJPTF9QUkVGSVggKyBmYWxzZUV2ZW50TmFtZTtcbiAgICAgICAgdmFyIHN5bWJvbENhcHR1cmUgPSBaT05FX1NZTUJPTF9QUkVGSVggKyB0cnVlRXZlbnROYW1lO1xuICAgICAgICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdID0ge307XG4gICAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV1bRkFMU0VfU1RSXSA9IHN5bWJvbDtcbiAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXVtUUlVFX1NUUl0gPSBzeW1ib2xDYXB0dXJlO1xuICAgIH1cbiAgICB2YXIgRVZFTlRfVEFSR0VUID0gX2dsb2JhbFsnRXZlbnRUYXJnZXQnXTtcbiAgICBpZiAoIUVWRU5UX1RBUkdFVCB8fCAhRVZFTlRfVEFSR0VULnByb3RvdHlwZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGFwaS5wYXRjaEV2ZW50VGFyZ2V0KF9nbG9iYWwsIFtFVkVOVF9UQVJHRVQgJiYgRVZFTlRfVEFSR0VULnByb3RvdHlwZV0pO1xuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gcGF0Y2hFdmVudCQxKGdsb2JhbCwgYXBpKSB7XG4gICAgYXBpLnBhdGNoRXZlbnRQcm90b3R5cGUoZ2xvYmFsLCBhcGkpO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBzdXBwcmVzcyB7bWlzc2luZ1JlcXVpcmV9XG4gKi9cblpvbmUuX19sb2FkX3BhdGNoKCdsZWdhY3knLCBmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgdmFyIGxlZ2FjeVBhdGNoID0gZ2xvYmFsW1pvbmUuX19zeW1ib2xfXygnbGVnYWN5UGF0Y2gnKV07XG4gICAgaWYgKGxlZ2FjeVBhdGNoKSB7XG4gICAgICAgIGxlZ2FjeVBhdGNoKCk7XG4gICAgfVxufSk7XG5ab25lLl9fbG9hZF9wYXRjaCgndGltZXJzJywgZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgIHZhciBzZXQgPSAnc2V0JztcbiAgICB2YXIgY2xlYXIgPSAnY2xlYXInO1xuICAgIHBhdGNoVGltZXIoZ2xvYmFsLCBzZXQsIGNsZWFyLCAnVGltZW91dCcpO1xuICAgIHBhdGNoVGltZXIoZ2xvYmFsLCBzZXQsIGNsZWFyLCAnSW50ZXJ2YWwnKTtcbiAgICBwYXRjaFRpbWVyKGdsb2JhbCwgc2V0LCBjbGVhciwgJ0ltbWVkaWF0ZScpO1xufSk7XG5ab25lLl9fbG9hZF9wYXRjaCgncmVxdWVzdEFuaW1hdGlvbkZyYW1lJywgZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgIHBhdGNoVGltZXIoZ2xvYmFsLCAncmVxdWVzdCcsICdjYW5jZWwnLCAnQW5pbWF0aW9uRnJhbWUnKTtcbiAgICBwYXRjaFRpbWVyKGdsb2JhbCwgJ21velJlcXVlc3QnLCAnbW96Q2FuY2VsJywgJ0FuaW1hdGlvbkZyYW1lJyk7XG4gICAgcGF0Y2hUaW1lcihnbG9iYWwsICd3ZWJraXRSZXF1ZXN0JywgJ3dlYmtpdENhbmNlbCcsICdBbmltYXRpb25GcmFtZScpO1xufSk7XG5ab25lLl9fbG9hZF9wYXRjaCgnYmxvY2tpbmcnLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lKSB7XG4gICAgdmFyIGJsb2NraW5nTWV0aG9kcyA9IFsnYWxlcnQnLCAncHJvbXB0JywgJ2NvbmZpcm0nXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2NraW5nTWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbmFtZV8xID0gYmxvY2tpbmdNZXRob2RzW2ldO1xuICAgICAgICBwYXRjaE1ldGhvZChnbG9iYWwsIG5hbWVfMSwgZnVuY3Rpb24gKGRlbGVnYXRlLCBzeW1ib2wsIG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocywgYXJncykge1xuICAgICAgICAgICAgICAgIHJldHVybiBab25lLmN1cnJlbnQucnVuKGRlbGVnYXRlLCBnbG9iYWwsIGFyZ3MsIG5hbWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5ab25lLl9fbG9hZF9wYXRjaCgnRXZlbnRUYXJnZXQnLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICBwYXRjaEV2ZW50JDEoZ2xvYmFsLCBhcGkpO1xuICAgIGV2ZW50VGFyZ2V0UGF0Y2goZ2xvYmFsLCBhcGkpO1xuICAgIC8vIHBhdGNoIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQncyBhZGRFdmVudExpc3RlbmVyL3JlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICB2YXIgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCA9IGdsb2JhbFsnWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCddO1xuICAgIGlmIChYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0ICYmIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQucHJvdG90eXBlKSB7XG4gICAgICAgIGFwaS5wYXRjaEV2ZW50VGFyZ2V0KGdsb2JhbCwgW1hNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQucHJvdG90eXBlXSk7XG4gICAgfVxuICAgIHBhdGNoQ2xhc3MoJ011dGF0aW9uT2JzZXJ2ZXInKTtcbiAgICBwYXRjaENsYXNzKCdXZWJLaXRNdXRhdGlvbk9ic2VydmVyJyk7XG4gICAgcGF0Y2hDbGFzcygnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInKTtcbiAgICBwYXRjaENsYXNzKCdGaWxlUmVhZGVyJyk7XG59KTtcblpvbmUuX19sb2FkX3BhdGNoKCdvbl9wcm9wZXJ0eScsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgIHByb3BlcnR5RGVzY3JpcHRvclBhdGNoKGFwaSwgZ2xvYmFsKTtcbiAgICBwcm9wZXJ0eVBhdGNoKCk7XG59KTtcblpvbmUuX19sb2FkX3BhdGNoKCdjdXN0b21FbGVtZW50cycsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgIHBhdGNoQ3VzdG9tRWxlbWVudHMoZ2xvYmFsLCBhcGkpO1xufSk7XG5ab25lLl9fbG9hZF9wYXRjaCgnWEhSJywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSkge1xuICAgIC8vIFRyZWF0IFhNTEh0dHBSZXF1ZXN0IGFzIGEgbWFjcm90YXNrLlxuICAgIHBhdGNoWEhSKGdsb2JhbCk7XG4gICAgdmFyIFhIUl9UQVNLID0gem9uZVN5bWJvbCgneGhyVGFzaycpO1xuICAgIHZhciBYSFJfU1lOQyA9IHpvbmVTeW1ib2woJ3hoclN5bmMnKTtcbiAgICB2YXIgWEhSX0xJU1RFTkVSID0gem9uZVN5bWJvbCgneGhyTGlzdGVuZXInKTtcbiAgICB2YXIgWEhSX1NDSEVEVUxFRCA9IHpvbmVTeW1ib2woJ3hoclNjaGVkdWxlZCcpO1xuICAgIHZhciBYSFJfVVJMID0gem9uZVN5bWJvbCgneGhyVVJMJyk7XG4gICAgdmFyIFhIUl9FUlJPUl9CRUZPUkVfU0NIRURVTEVEID0gem9uZVN5bWJvbCgneGhyRXJyb3JCZWZvcmVTY2hlZHVsZWQnKTtcbiAgICBmdW5jdGlvbiBwYXRjaFhIUih3aW5kb3cpIHtcbiAgICAgICAgdmFyIFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlID0gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlO1xuICAgICAgICBmdW5jdGlvbiBmaW5kUGVuZGluZ1Rhc2sodGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W1hIUl9UQVNLXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3JpQWRkTGlzdGVuZXIgPSBYTUxIdHRwUmVxdWVzdFByb3RvdHlwZVtaT05FX1NZTUJPTF9BRERfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICB2YXIgb3JpUmVtb3ZlTGlzdGVuZXIgPSBYTUxIdHRwUmVxdWVzdFByb3RvdHlwZVtaT05FX1NZTUJPTF9SRU1PVkVfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICBpZiAoIW9yaUFkZExpc3RlbmVyKSB7XG4gICAgICAgICAgICB2YXIgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldF8xID0gd2luZG93WydYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0J107XG4gICAgICAgICAgICBpZiAoWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldF8xKSB7XG4gICAgICAgICAgICAgICAgdmFyIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXRQcm90b3R5cGUgPSBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0XzEucHJvdG90eXBlO1xuICAgICAgICAgICAgICAgIG9yaUFkZExpc3RlbmVyID0gWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFByb3RvdHlwZVtaT05FX1NZTUJPTF9BRERfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICAgICAgICAgIG9yaVJlbW92ZUxpc3RlbmVyID0gWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFByb3RvdHlwZVtaT05FX1NZTUJPTF9SRU1PVkVfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBSRUFEWV9TVEFURV9DSEFOR0UgPSAncmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgICAgIHZhciBTQ0hFRFVMRUQgPSAnc2NoZWR1bGVkJztcbiAgICAgICAgZnVuY3Rpb24gc2NoZWR1bGVUYXNrKHRhc2spIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGFzay5kYXRhO1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGRhdGEudGFyZ2V0O1xuICAgICAgICAgICAgdGFyZ2V0W1hIUl9TQ0hFRFVMRURdID0gZmFsc2U7XG4gICAgICAgICAgICB0YXJnZXRbWEhSX0VSUk9SX0JFRk9SRV9TQ0hFRFVMRURdID0gZmFsc2U7XG4gICAgICAgICAgICAvLyByZW1vdmUgZXhpc3RpbmcgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IHRhcmdldFtYSFJfTElTVEVORVJdO1xuICAgICAgICAgICAgaWYgKCFvcmlBZGRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIG9yaUFkZExpc3RlbmVyID0gdGFyZ2V0W1pPTkVfU1lNQk9MX0FERF9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgICAgICAgICAgb3JpUmVtb3ZlTGlzdGVuZXIgPSB0YXJnZXRbWk9ORV9TWU1CT0xfUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIG9yaVJlbW92ZUxpc3RlbmVyLmNhbGwodGFyZ2V0LCBSRUFEWV9TVEFURV9DSEFOR0UsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuZXdMaXN0ZW5lciA9IHRhcmdldFtYSFJfTElTVEVORVJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQucmVhZHlTdGF0ZSA9PT0gdGFyZ2V0LkRPTkUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc29tZXRpbWVzIG9uIHNvbWUgYnJvd3NlcnMgWE1MSHR0cFJlcXVlc3Qgd2lsbCBmaXJlIG9ucmVhZHlzdGF0ZWNoYW5nZSB3aXRoXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlYWR5U3RhdGU9NCBtdWx0aXBsZSB0aW1lcywgc28gd2UgbmVlZCB0byBjaGVjayB0YXNrIHN0YXRlIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmFib3J0ZWQgJiYgdGFyZ2V0W1hIUl9TQ0hFRFVMRURdICYmIHRhc2suc3RhdGUgPT09IFNDSEVEVUxFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGUgeGhyIGhhcyByZWdpc3RlcmVkIG9ubG9hZCBsaXN0ZW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhhdCBpcyB0aGUgY2FzZSwgdGhlIHRhc2sgc2hvdWxkIGludm9rZSBhZnRlciBhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9ubG9hZCBsaXN0ZW5lcnMgZmluaXNoLlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxvYWRUYXNrcyA9IHRhcmdldFsnX196b25lX3N5bWJvbF9fbG9hZGZhbHNlJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9hZFRhc2tzICYmIGxvYWRUYXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaUludm9rZV8xID0gdGFzay5pbnZva2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5pbnZva2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gbG9hZCB0aGUgdGFza3MgYWdhaW4sIGJlY2F1c2UgaW4gb3RoZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9hZCBsaXN0ZW5lciwgdGhleSBtYXkgcmVtb3ZlIHRoZW1zZWx2ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxvYWRUYXNrcyA9IHRhcmdldFsnX196b25lX3N5bWJvbF9fbG9hZGZhbHNlJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9hZFRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9hZFRhc2tzW2ldID09PSB0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuYWJvcnRlZCAmJiB0YXNrLnN0YXRlID09PSBTQ0hFRFVMRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaUludm9rZV8xLmNhbGwodGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5pbnZva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghZGF0YS5hYm9ydGVkICYmIHRhcmdldFtYSFJfU0NIRURVTEVEXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVycm9yIG9jY3VycyB3aGVuIHhoci5zZW5kKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtYSFJfRVJST1JfQkVGT1JFX1NDSEVEVUxFRF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG9yaUFkZExpc3RlbmVyLmNhbGwodGFyZ2V0LCBSRUFEWV9TVEFURV9DSEFOR0UsIG5ld0xpc3RlbmVyKTtcbiAgICAgICAgICAgIHZhciBzdG9yZWRUYXNrID0gdGFyZ2V0W1hIUl9UQVNLXTtcbiAgICAgICAgICAgIGlmICghc3RvcmVkVGFzaykge1xuICAgICAgICAgICAgICAgIHRhcmdldFtYSFJfVEFTS10gPSB0YXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VuZE5hdGl2ZS5hcHBseSh0YXJnZXQsIGRhdGEuYXJncyk7XG4gICAgICAgICAgICB0YXJnZXRbWEhSX1NDSEVEVUxFRF0gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcGxhY2Vob2xkZXJDYWxsYmFjaygpIHsgfVxuICAgICAgICBmdW5jdGlvbiBjbGVhclRhc2sodGFzaykge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0YXNrLmRhdGE7XG4gICAgICAgICAgICAvLyBOb3RlIC0gaWRlYWxseSwgd2Ugd291bGQgY2FsbCBkYXRhLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyIGhlcmUsIGJ1dCBpdCdzIHRvbyBsYXRlXG4gICAgICAgICAgICAvLyB0byBwcmV2ZW50IGl0IGZyb20gZmlyaW5nLiBTbyBpbnN0ZWFkLCB3ZSBzdG9yZSBpbmZvIGZvciB0aGUgZXZlbnQgbGlzdGVuZXIuXG4gICAgICAgICAgICBkYXRhLmFib3J0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGFib3J0TmF0aXZlLmFwcGx5KGRhdGEudGFyZ2V0LCBkYXRhLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuTmF0aXZlID0gcGF0Y2hNZXRob2QoWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUsICdvcGVuJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgIHNlbGZbWEhSX1NZTkNdID0gYXJnc1syXSA9PSBmYWxzZTtcbiAgICAgICAgICAgIHNlbGZbWEhSX1VSTF0gPSBhcmdzWzFdO1xuICAgICAgICAgICAgcmV0dXJuIG9wZW5OYXRpdmUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgIH07IH0pO1xuICAgICAgICB2YXIgWE1MSFRUUFJFUVVFU1RfU09VUkNFID0gJ1hNTEh0dHBSZXF1ZXN0LnNlbmQnO1xuICAgICAgICB2YXIgZmV0Y2hUYXNrQWJvcnRpbmcgPSB6b25lU3ltYm9sKCdmZXRjaFRhc2tBYm9ydGluZycpO1xuICAgICAgICB2YXIgZmV0Y2hUYXNrU2NoZWR1bGluZyA9IHpvbmVTeW1ib2woJ2ZldGNoVGFza1NjaGVkdWxpbmcnKTtcbiAgICAgICAgdmFyIHNlbmROYXRpdmUgPSBwYXRjaE1ldGhvZChYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgJ3NlbmQnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgaWYgKFpvbmUuY3VycmVudFtmZXRjaFRhc2tTY2hlZHVsaW5nXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vIGEgZmV0Y2ggaXMgc2NoZWR1bGluZywgc28gd2UgYXJlIHVzaW5nIHhociB0byBwb2x5ZmlsbCBmZXRjaFxuICAgICAgICAgICAgICAgIC8vIGFuZCBiZWNhdXNlIHdlIGFscmVhZHkgc2NoZWR1bGUgbWFjcm9UYXNrIGZvciBmZXRjaCwgd2Ugc2hvdWxkXG4gICAgICAgICAgICAgICAgLy8gbm90IHNjaGVkdWxlIGEgbWFjcm9UYXNrIGZvciB4aHIgYWdhaW5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VuZE5hdGl2ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxmW1hIUl9TWU5DXSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBYSFIgaXMgc3luYyB0aGVyZSBpcyBubyB0YXNrIHRvIHNjaGVkdWxlLCBqdXN0IGV4ZWN1dGUgdGhlIGNvZGUuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbmROYXRpdmUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHsgdGFyZ2V0OiBzZWxmLCB1cmw6IHNlbGZbWEhSX1VSTF0sIGlzUGVyaW9kaWM6IGZhbHNlLCBhcmdzOiBhcmdzLCBhYm9ydGVkOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIHZhciB0YXNrID0gc2NoZWR1bGVNYWNyb1Rhc2tXaXRoQ3VycmVudFpvbmUoWE1MSFRUUFJFUVVFU1RfU09VUkNFLCBwbGFjZWhvbGRlckNhbGxiYWNrLCBvcHRpb25zLCBzY2hlZHVsZVRhc2ssIGNsZWFyVGFzayk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYgJiYgc2VsZltYSFJfRVJST1JfQkVGT1JFX1NDSEVEVUxFRF0gPT09IHRydWUgJiYgIW9wdGlvbnMuYWJvcnRlZCAmJlxuICAgICAgICAgICAgICAgICAgICB0YXNrLnN0YXRlID09PSBTQ0hFRFVMRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8geGhyIHJlcXVlc3QgdGhyb3cgZXJyb3Igd2hlbiBzZW5kXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHNob3VsZCBpbnZva2UgdGFzayBpbnN0ZWFkIG9mIGxlYXZpbmcgYSBzY2hlZHVsZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gcGVuZGluZyBtYWNyb1Rhc2tcbiAgICAgICAgICAgICAgICAgICAgdGFzay5pbnZva2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07IH0pO1xuICAgICAgICB2YXIgYWJvcnROYXRpdmUgPSBwYXRjaE1ldGhvZChYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgJ2Fib3J0JywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gZmluZFBlbmRpbmdUYXNrKHNlbGYpO1xuICAgICAgICAgICAgaWYgKHRhc2sgJiYgdHlwZW9mIHRhc2sudHlwZSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBYSFIgaGFzIGFscmVhZHkgY29tcGxldGVkLCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBYSFIgaGFzIGFscmVhZHkgYmVlbiBhYm9ydGVkLCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgICAgIC8vIEZpeCAjNTY5LCBjYWxsIGFib3J0IG11bHRpcGxlIHRpbWVzIGJlZm9yZSBkb25lIHdpbGwgY2F1c2VcbiAgICAgICAgICAgICAgICAvLyBtYWNyb1Rhc2sgdGFzayBjb3VudCBiZSBuZWdhdGl2ZSBudW1iZXJcbiAgICAgICAgICAgICAgICBpZiAodGFzay5jYW5jZWxGbiA9PSBudWxsIHx8ICh0YXNrLmRhdGEgJiYgdGFzay5kYXRhLmFib3J0ZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFzay56b25lLmNhbmNlbFRhc2sodGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChab25lLmN1cnJlbnRbZmV0Y2hUYXNrQWJvcnRpbmddID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIGFib3J0IGlzIGNhbGxlZCBmcm9tIGZldGNoIHBvbHlmaWxsLCB3ZSBuZWVkIHRvIGNhbGwgbmF0aXZlIGFib3J0IG9mIFhIUi5cbiAgICAgICAgICAgICAgICByZXR1cm4gYWJvcnROYXRpdmUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIHdlIGFyZSB0cnlpbmcgdG8gYWJvcnQgYW4gWEhSIHdoaWNoIGhhcyBub3QgeWV0IGJlZW4gc2VudCwgc28gdGhlcmUgaXMgbm9cbiAgICAgICAgICAgIC8vIHRhc2tcbiAgICAgICAgICAgIC8vIHRvIGNhbmNlbC4gRG8gbm90aGluZy5cbiAgICAgICAgfTsgfSk7XG4gICAgfVxufSk7XG5ab25lLl9fbG9hZF9wYXRjaCgnZ2VvbG9jYXRpb24nLCBmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgLy8vIEdFT19MT0NBVElPTlxuICAgIGlmIChnbG9iYWxbJ25hdmlnYXRvciddICYmIGdsb2JhbFsnbmF2aWdhdG9yJ10uZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgcGF0Y2hQcm90b3R5cGUoZ2xvYmFsWyduYXZpZ2F0b3InXS5nZW9sb2NhdGlvbiwgWydnZXRDdXJyZW50UG9zaXRpb24nLCAnd2F0Y2hQb3NpdGlvbiddKTtcbiAgICB9XG59KTtcblpvbmUuX19sb2FkX3BhdGNoKCdQcm9taXNlUmVqZWN0aW9uRXZlbnQnLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lKSB7XG4gICAgLy8gaGFuZGxlIHVuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvblxuICAgIGZ1bmN0aW9uIGZpbmRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcihldnROYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGV2ZW50VGFza3MgPSBmaW5kRXZlbnRUYXNrcyhnbG9iYWwsIGV2dE5hbWUpO1xuICAgICAgICAgICAgZXZlbnRUYXNrcy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudFRhc2spIHtcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3dzIGhhcyBhZGRlZCB1bmhhbmRsZWRyZWplY3Rpb24gZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICAvLyB0cmlnZ2VyIHRoZSBldmVudCBsaXN0ZW5lclxuICAgICAgICAgICAgICAgIHZhciBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPSBnbG9iYWxbJ1Byb21pc2VSZWplY3Rpb25FdmVudCddO1xuICAgICAgICAgICAgICAgIGlmIChQcm9taXNlUmVqZWN0aW9uRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2dCA9IG5ldyBQcm9taXNlUmVqZWN0aW9uRXZlbnQoZXZ0TmFtZSwgeyBwcm9taXNlOiBlLnByb21pc2UsIHJlYXNvbjogZS5yZWplY3Rpb24gfSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VGFzay5pbnZva2UoZXZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGdsb2JhbFsnUHJvbWlzZVJlamVjdGlvbkV2ZW50J10pIHtcbiAgICAgICAgWm9uZVt6b25lU3ltYm9sKCd1bmhhbmRsZWRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcicpXSA9XG4gICAgICAgICAgICBmaW5kUHJvbWlzZVJlamVjdGlvbkhhbmRsZXIoJ3VuaGFuZGxlZHJlamVjdGlvbicpO1xuICAgICAgICBab25lW3pvbmVTeW1ib2woJ3JlamVjdGlvbkhhbmRsZWRIYW5kbGVyJyldID1cbiAgICAgICAgICAgIGZpbmRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcigncmVqZWN0aW9uaGFuZGxlZCcpO1xuICAgIH1cbn0pO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbn0pKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9