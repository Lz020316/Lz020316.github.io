(function(w,p){typeof exports=="object"&&typeof module<"u"?p(exports,require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react","react-dom"],p):(w=typeof globalThis<"u"?globalThis:w||self,p(w.MyReactLibrary={},w.React,w.ReactDOM))})(this,function(w,p,J){"use strict";var A={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y=p,Z=Symbol.for("react.element"),K=Symbol.for("react.fragment"),Q=Object.prototype.hasOwnProperty,X=Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W={key:!0,ref:!0,__self:!0,__source:!0};function I(t,e,n){var o,r={},c=null,u=null;n!==void 0&&(c=""+n),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(u=e.ref);for(o in e)Q.call(e,o)&&!W.hasOwnProperty(o)&&(r[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)r[o]===void 0&&(r[o]=e[o]);return{$$typeof:Z,type:t,key:c,ref:u,props:r,_owner:X.current}}x.Fragment=K,x.jsx=I,x.jsxs=I,A.exports=x;var b=A.exports,N,C=J;N=C.createRoot,C.hydrateRoot;function $(t){const e=p.useRef(t);return(!t||!e.current||t.length!==e.current.length||e.current.some((n,o)=>n!==t[o]))&&(e.current=t),e.current}function q(t,[e,n]){const[o,r]=t;return o!==void 0&&r!==void 0&&e!==void 0&&n!==void 0&&e>o&&e-o<=20&&n<r?[o,n]:o!==e||r!==n?[e,n]:t}function tt(t,e){let n=t==null?void 0:t.clientWidth;if(n!==void 0&&e&&e.length>0){const o=[...e.filter(r=>r>0)].sort((r,c)=>c-r);o.push(Math.floor(o[o.length-1]/2)),n=o.find((r,c)=>r<=n||c===o.length-1)}return n}function et(t,e,n){const[[o],r]=p.useReducer(q,[n]),c=$(e),u=p.useRef();return{containerRef:p.useCallback(d=>{var f;(f=u.current)==null||f.disconnect(),u.current=void 0;const l=()=>r([tt(d,c),window.innerWidth-document.documentElement.clientWidth]);l(),d&&typeof ResizeObserver<"u"&&(u.current=new ResizeObserver(l),u.current.observe(d)),typeof t=="function"?t(d):t&&(t.current=d)},[t,c]),containerWidth:o}}function nt(...t){return[...t].filter(Boolean).join(" ")}function L(t){return["react-photo-album",t].filter(Boolean).join("--")}function ot(t){return`--${L(t)}`}function E({width:t,height:e}){return t/e}const rt=Object.freeze([1200,600,300,0]);function y(t,e){return typeof t=="function"?t(e):t}function H(t,e){return e!==void 0?y(t,e):void 0}function st(t,e){const n=rt.findIndex(o=>o<=e);return y(t[Math.max(n,0)],e)}function S(t,e,n,o=0){if(e===void 0)return;const r=H(t,e);return Math.round(Math.max(r===void 0?st(n,e):r,o))}function it(t,{spacing:e,padding:n,componentsProps:o,render:r}){return{spacing:S(e,t,[20,15,10,5]),padding:S(n,t,[0,0,0,0]),componentsProps:y(o,t)||{},render:y(r,t)}}function k(t,e=0){const n=10**e;return Math.round((t+Number.EPSILON)*n)/n}function ct(t,e,n,o,r,c,u){let a,d;const l=i=>{var m;const s=c*(r-1)+2*u*r;return`calc((${((m=i.match(/^\s*calc\((.*)\)\s*$/))==null?void 0:m[1])??i} - ${s}px) / ${k((o-s)/n,5)})`},f=t.srcSet;return f&&f.length>0&&(a=f.concat(f.some(({width:i})=>i===t.width)?[]:[{src:t.src,width:t.width,height:t.height}]).sort((i,s)=>i.width-s.width).map(i=>`${i.src} ${i.width}w`).join(", ")),e!=null&&e.size?d=(e.sizes||[]).map(({viewport:i,size:s})=>`${i} ${l(s)}`).concat(l(e.size)).join(", "):d=`${Math.ceil(n/o*100)}vw`,{srcSet:a,sizes:d}}function ut({as:t,render:e,context:n,classes:o=[],variables:r={},style:c,className:u,children:a,...d},l){const f=nt(...(Array.isArray(o)?o:[o]).filter(h=>typeof h=="string").map(L),u),s={style:{...Object.fromEntries(Object.entries(r).map(([h,g])=>[ot(h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()),typeof g=="number"?k(g,5):g])),...c},className:f,children:a,...d};if(e){const h=e({ref:l,...s},n);if(h)return h}const m=t||"div";return b.jsx(m,{ref:l,...s})}const j=p.forwardRef(ut);function at({photo:t,index:e,width:n,height:o,onClick:r,render:{wrapper:c,link:u,button:a,image:d,extras:l}={},componentsProps:{link:f,button:i,wrapper:s,image:m}={}},h){const{href:g}=t,v={photo:t,index:e,width:k(n,3),height:k(o,3)};let R;return g?R={...f,as:"a",render:u,classes:["photo","link"],href:g,onClick:r}:r?R={...i,as:"button",type:"button",render:a,classes:["photo","button"],onClick:r}:R={...s,render:c,classes:"photo"},b.jsxs(j,{ref:h,variables:{photoWidth:v.width,photoHeight:v.height},context:v,...R,children:[b.jsx(j,{as:"img",classes:"image",render:d,context:v,...m}),l==null?void 0:l({},v)]})}const ft=p.forwardRef(at);function dt({layout:t,sizes:e,model:n,skeleton:o,onClick:r,render:{container:c,track:u,photo:a,...d}={},componentsProps:{container:l,track:f,link:i,button:s,wrapper:m,image:h}={}},g){const{spacing:v,padding:R,containerWidth:O,tracks:_,variables:Ot,horizontal:_t}=n||{};return b.jsxs(j,{role:"group","aria-label":"Photo album",...l,variables:{spacing:v,padding:R,containerWidth:O,...Ot},classes:["",t],render:c,ref:g,children:[v!==void 0&&R!==void 0&&O!==void 0&&(_==null?void 0:_.map(({photos:B,variables:Et},St)=>{const F=B.length,zt=_t?F:_.length;return p.createElement(j,{...f,key:St,render:u,classes:"track",variables:{trackSize:F,...Et}},B.map(P=>{const{photo:z,index:At,width:It}=P,{key:Nt,src:D,alt:Ct,title:Lt,label:G}=z,U=r?M=>{r({event:M,photo:z,index:At})}:void 0;if(a){const M=a({onClick:U},P);if(M)return M}const V=M=>G?{"aria-label":G,...M}:M;return b.jsx(ft,{onClick:U,render:d,componentsProps:{image:{loading:"lazy",decoding:"async",src:D,alt:Ct,title:Lt,...ct(z,e,It,O,zt,v,R),...y(h,P)},link:V(y(i,P)),button:V(y(s,P)),wrapper:y(m,P)},...P},Nt??D)}))})),O===void 0&&o]})}const lt=p.forwardRef(dt);function ht(t,{photos:e,targetRowHeight:n,rowConstraints:o,...r}){const{spacing:c,padding:u,componentsProps:a,render:d}=it(t,r),{singleRowMaxHeight:l,minPhotos:f,maxPhotos:i}=H(o,t)||{};if(l!==void 0&&c!==void 0&&u!==void 0){const s=Math.floor(e.reduce((m,{width:h,height:g})=>m+h/g*l-2*u,u*e.length*2+c*(e.length-1)));s>0&&(a.container={...a.container},a.container.style={maxWidth:s,...a.container.style})}return{...r,targetRowHeight:S(n,t,[s=>s/5,s=>s/4,s=>s/3,s=>s/2]),render:d,spacing:c,padding:u,minPhotos:f,maxPhotos:i,componentsProps:a}}function mt(t){return(e,n)=>t(n)-t(e)}function pt(t){let e=0;const n=[],o=(f,i)=>t(n[f],n[i])<0,r=(f,i)=>{const s=n[f];n[f]=n[i],n[i]=s},c=f=>{let i=f,s=Math.floor(i/2);for(;i>1&&o(s,i);)r(s,i),i=s,s=Math.floor(i/2)},u=f=>{let i=f,s=i*2;for(;s<=e&&(s<e&&o(s,s+1)&&(s+=1),!!o(i,s));)r(i,s),i=s,s=i*2};return{push:f=>{e+=1,n[e]=f,c(e)},pop:()=>{if(e===0)return;r(1,e),e-=1;const f=n.pop();return u(1),f},size:()=>e}}function gt(t,e,n){const o=new Map,r=new Set,c=new Map;c.set(e,0);const u=pt(mt(a=>a[1]));for(u.push([e,0]);u.size()>0;){const[a,d]=u.pop();if(!r.has(a)){const l=t(a);r.add(a),l.forEach((f,i)=>{const s=d+f,m=o.get(i),h=c.get(i);(h===void 0||h>s&&(h/s>1.005||m!==void 0&&m<a))&&(c.set(i,s),u.push([i,s]),o.set(i,a))})}}return c.has(n)?o:void 0}function vt(t,e){if(!t)return;const n=[];for(let o=e;o!==void 0;o=t.get(o))n.push(o);return n.reverse()}function wt(t,e,n){return vt(gt(t,e,n),n)}function bt(t,e,n,o){return k(e/n/Math.min(...t.map(r=>E(r))))+(o||0)+2}function T(t,e,n,o){return(e-(t.length-1)*n-2*o*t.length)/t.reduce((r,c)=>r+E(c),0)}function yt(t,e,n,o,r,c,u){const a=t.slice(e,n),d=T(a,o,r,c);return d>0?(d-u)**2*a.length:void 0}function Rt(t,e,n,o,r,c,u,a){return d=>{const l=new Map;l.set(d,0);const f=u||1,i=Math.min(c,a||1/0);for(let s=d+f;s<t.length+1&&!(s-d>i);s+=1){const m=yt(t,d,s,o,e,n,r);if(m===void 0)break;l.set(s,m)}return l}}function Pt(t,e,n,o,r,c,u){const a=bt(t,o,r,c),d=Rt(t,e,n,o,r,a,c,u),l=wt(d,0,t.length);if(!l)return;const f=[];for(let i=1;i<l.length;i+=1){const s=t.map((h,g)=>({photo:h,index:g})).slice(l[i-1],l[i]),m=T(s.map(({photo:h})=>h),o,e,n);f.push({photos:s.map(({photo:h,index:g})=>({photo:h,index:g,width:m*E(h),height:m}))})}return{spacing:e,padding:n,containerWidth:o,tracks:f,horizontal:!0}}function Mt({photos:t,breakpoints:e,defaultContainerWidth:n,...o},r){const{containerRef:c,containerWidth:u}=et(r,e,n),{spacing:a,padding:d,targetRowHeight:l,minPhotos:f,maxPhotos:i,...s}=ht(u,{photos:t,...o}),m=p.useMemo(()=>u!==void 0&&a!==void 0&&d!==void 0&&l!==void 0?Pt(t,a,d,u,l,f,i):void 0,[t,a,d,u,l,f,i]);return b.jsx(lt,{layout:"rows",ref:c,model:m,...s})}const kt=p.forwardRef(Mt);function xt({photos:t,...e}){const[n,o]=p.useState({}),r=p.useMemo(()=>{const c=[];for(const u of t){if(u.width&&u.height){c.push(u);continue}const a=n[u.src];if(a){c.push({...u,width:a.width,height:a.height});continue}}return c},[n,t]);return b.jsx(kt,{photos:r,...e})}function jt(t,e){const n=document.getElementById(t);n&&e&&N(n).render(b.jsx(xt,{...e}))}w.renderPhotoAlbum=jt,Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});
