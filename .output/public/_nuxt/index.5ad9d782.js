import{q as C,s as e,d as t,t as k,e as r,F as _,l,j as y,b as s,f as c,w as E,v as S,_ as A}from"./entry.daac6d1e.js";import{a as N}from"./axios.47b9d439.js";import{a as V}from"./case.d9b67430.js";import{c as m,S as L}from"./config.ae94fc0b.js";import{t as u}from"./title-section.e9fe7d70.js";import"./modal.711c883e.js";const{Axios:G,AxiosError:R,CanceledError:M,isCancel:P,CancelToken:Q,VERSION:W,all:X,Cancel:Y,isAxiosError:Z,spread:ee,toFormData:te,AxiosHeaders:se,HttpStatusCode:ae,formToJSON:oe,getAdapter:ne,mergeConfig:ie}=N,w={key:0},B={key:1},F={key:2},$={class:"page"},z={class:"case-list"},D={head:{title:"Kleewish | Кейсы"},components:{card:m,titleSection:u}},H=C({...D,__name:"index",setup(I){const{isLoading:p,data:o,error:n}=V(),f=[["Инадзума","inadzuma"],["Монштадт","mondstadt"],["Ли ЮЭ","liyue"],["Сумеру","sumeru"]];return(O,T)=>{var d;const x=S;return e(p)?(s(),t("div",w," Loading... ")):e(n)?(s(),t("div",B,k(e(n)instanceof e(R)&&e(n).message),1)):(d=e(o))!=null&&d.data.cases?(s(),t("div",F,[r("div",$,[(s(),t(_,null,l(f,i=>r("div",null,[c(u,{text:i[0],info:e(o).data.cases.filter(a=>a.category===i[1]).length+" кейса",icon:"inadzuma"},null,8,["text","info"]),(s(!0),t(_,null,l(e(o).data.cases.filter(a=>a.category===i[1]),({id:a,name:g,price:v,photo_url:h})=>(s(),t("div",null,[r("div",z,[c(x,{to:`/case/${a}`},{default:E(()=>[c(m,{title:g,image:`${e(L)}${h}`,cost:v},null,8,["title","image","cost"])]),_:2},1032,["to"])])]))),256))])),64))])])):y("",!0)}}});const re=A(H,[["__scopeId","data-v-da6f6e08"]]);export{re as default};