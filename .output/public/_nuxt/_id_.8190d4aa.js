import{t as E}from"./title-section.3dd6b047.js";import{c as i}from"./case-card.b749b7da.js";import{_ as x,b as a,d as o,e as c,f as s,t as v,g as q,q as w,u as L,s as t,F as R,l as B,p as C,h as N}from"./entry.27c206c5.js";import{u as V}from"./case.11e11096.js";import{S as y}from"./config.c905a11d.js";import"./axios.89f92885.js";import"./index.0670e9a3.js";const F={name:"case-item",props:{cost:{type:Number,required:!0},title:{type:String,required:!0},image:{type:String,required:!0}}},D={class:"item"},U={class:"item-cost"},j={class:"item-image"},z={class:"item-title"};function A(_,r,e,m,l,b){const n=q;return a(),o("div",D,[c("div",U,[s(n,{format:"webp",src:"/img/mor.png"}),c("div",null,v(e.cost),1)]),c("div",j,[s(n,{format:"webp",src:e.image},null,8,["src"])]),c("div",z,v(e.title),1)])}const S=x(F,[["render",A],["__scopeId","data-v-42dd63c5"]]),I=_=>(C("data-v-677d1072"),_=_(),N(),_),G={class:"page"},H={key:0},J={key:1},K={key:2},M=I(()=>c("h2",null,"Что может выпасть?",-1)),O={class:"page-items"},P=I(()=>c("h2",null,"Другие кейсы",-1)),Q={class:"page-items"},T={name:"case",components:{card:i,CaseItem:S}},W=w({...T,setup(_){const{id:r}=L().params,{data:e,isLoading:m,isError:l}=V(String(r));return(b,n)=>{var p,u,g,h,f;const k=E,$=i;return a(),o("div",G,[t(m)?(a(),o("div",H," Loading... ")):t(l)?(a(),o("div",J," Error... ")):(a(),o("div",K,[s(k,{text:(p=t(e))==null?void 0:p.data.case.name},null,8,["text"]),s($,{title:(u=t(e))==null?void 0:u.data.case.name,image:t(y)+((g=t(e))==null?void 0:g.data.case.photo_url),cost:(h=t(e))==null?void 0:h.data.case.price,"show-border":!1},null,8,["title","image","cost"])])),M,(a(!0),o(R,null,B((f=t(e))==null?void 0:f.data.case.items,d=>(a(),o("div",O,[s(S,{title:d.name,image:t(y)+d.photo_url,cost:d.sgd_price},null,8,["title","image","cost"])]))),256)),P,c("div",Q,[s(i,{title:"Кейс Кли",image:"/img/cases/case_3.png",cost:200}),s(i,{title:"Кейс Кли",image:"/img/cases/case_4.png",cost:200}),s(i,{title:"Кейс Кли",image:"/img/cases/case_5.png",cost:200}),s(i,{title:"Кейс Кли",image:"/img/cases/case_6.png",cost:200})])])}}});const oe=x(W,[["__scopeId","data-v-677d1072"]]);export{oe as default};
