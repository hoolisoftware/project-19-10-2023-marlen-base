import{_ as l,b as c,d as u,s as p,e as r,t as i,a as m,f as d,k as v}from"./entry.6850a65d.js";const f={},x={class:"panel"};function y(e,a){return c(),u("div",x,[p(e.$slots,"default",{},void 0,!0)])}const G=l(f,[["render",y],["__scopeId","data-v-9697f500"]]);const h={props:{maxValue:{type:Number,required:!0},value:{type:Number,required:!0},text:{type:String,required:!0}},setup({value:e,maxValue:a,text:t}){const s=e/a*360,n=2*Math.PI*31,_=s/360*n;return{strokeArray:`${_}, ${n-_}`,value:e,text:t}}},$={class:"counter-elem"},g={class:"counter-elem__circle"},k=["stroke-dasharray"],b={class:"counter-elem__value"},C={class:"counter-elem__text"};function S(e,a,t,s,n,_){return c(),u("div",$,[(c(),u("svg",g,[r("circle",{cx:"32",cy:"32",r:"31","stroke-width":"1.5","stroke-dasharray":s.strokeArray,fill:"none"},null,8,k)])),r("p",b,i(s.value),1),r("p",C,i(s.text),1)])}const q=l(h,[["render",S],["__scopeId","data-v-135447bf"]]);const P={components:{CounterElem:q}},E={class:"counter"};function I(e,a,t,s,n,_){const o=m("CounterElem");return c(),u("div",E,[d(o,{value:2,"max-value":3,text:"Дней"}),d(o,{value:18,"max-value":24,text:"Часов"}),d(o,{value:45,"max-value":60,text:"Минут"}),d(o,{value:22,"max-value":60,text:"Секунд"})])}const z=l(P,[["render",I],["__scopeId","data-v-9ba35c09"]]);const N={props:{avatar:{type:String,required:!0},name:{type:String,required:!0},score:{type:Number,required:!0},isScoreGreen:{type:Boolean}},setup({...e}){return{...e}}},B={class:"user"},w=["src"],A={class:"user__name"};function V(e,a,t,s,n,_){return c(),u("div",B,[r("img",{src:t.avatar,format:"avif,webp",densities:"x1 x2",class:"user__avatar",width:"45",height:"45"},null,8,w),r("p",A,i(t.name),1),r("p",{class:v(["user__score",{"user__score--green":t.isScoreGreen}])},i(t.score),3)])}const M=l(N,[["render",V],["__scopeId","data-v-ad225afd"]]);export{z as C,M as P,G as a};
