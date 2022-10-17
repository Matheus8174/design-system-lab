var k=Object.defineProperty;var i=(n,r)=>k(n,"name",{value:r,configurable:!0});import{r as l}from"./index.59fb7740.js";import{I as c,r as f}from"./IconBase.esm.57bf6462.js";import{a as s,F as o,j as e}from"./jsx-runtime.c2e325f2.js";import{$ as x}from"./index.module.5719fbcc.js";var t=new Map;t.set("bold",function(n){return s(o,{children:[e("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});t.set("duotone",function(n){return s(o,{children:[e("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),e("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});t.set("fill",function(){return e(o,{children:e("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"})})});t.set("light",function(n){return s(o,{children:[e("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});t.set("thin",function(n){return s(o,{children:[e("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});t.set("regular",function(n){return s(o,{children:[e("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var h=i(function(r,u){return f(r,u,t)},"renderPath"),p=l.exports.forwardRef(function(n,r){return e(c,{...Object.assign({ref:r},n,{renderPath:h})})});p.displayName="Envelope";const T=p;function L({children:n}){return e("div",{className:"flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300",children:n})}i(L,"TextInputRoot");d.displayName="TextInput.Icon";function d({children:n}){return e(x,{className:"w-6 h-6 text-gray-400",children:n})}i(d,"TextInputIcon");const y=i(n=>e("input",{className:"bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-900-400",...n}),"TextInputInput");d.displayName="TextInput.Input";const a={Input:y,Root:L,icon:d};try{a.Icon.displayName="TextInput.Icon",a.Icon.__docgenInfo={description:"",displayName:"TextInput.Icon",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TextInput.tsx#TextInput.Icon"]={docgenInfo:a.Icon.__docgenInfo,name:"TextInput.Icon",path:"src/components/TextInput.tsx#TextInput.Icon"})}catch{}export{T as E,a as T};
//# sourceMappingURL=TextInput.7bd8faaa.js.map
