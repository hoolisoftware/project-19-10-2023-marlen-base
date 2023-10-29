import{a as D,m as q}from"./axios.4b38972c.js";import{Q as O,a as Q,u as E}from"./index.d58c0eb5.js";import{S as Z}from"./config.c905a11d.js";import{D as M,E as A,G as j,_ as b,b as n,d as u,e as s,t as m,k as K,j as y,p as H,h as V,q as B,m as $,s as r,f as p,M as h,A as z,F as x,l as k,i as N}from"./entry.d3e659ee.js";import{t as I}from"./title-section.68659319.js";class G extends O{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:M()},t)}getOptimisticResult(e){return e.behavior=M(),super.getOptimisticResult(e)}fetchNextPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:"forward",pageParam:e}}})}fetchPreviousPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:"backward",pageParam:e}}})}createResult(e,t){var i,c,l,_,d,g;const{state:v}=e,f=super.createResult(e,t),{isFetching:w,isRefetching:o}=f,S=w&&((i=v.fetchMeta)==null||(c=i.fetchMore)==null?void 0:c.direction)==="forward",C=w&&((l=v.fetchMeta)==null||(_=l.fetchMore)==null?void 0:_.direction)==="backward";return{...f,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:A(t,(d=v.data)==null?void 0:d.pages),hasPreviousPage:j(t,(g=v.data)==null?void 0:g.pages),isFetchingNextPage:S,isFetchingPreviousPage:C,isRefetching:o&&!S&&!C}}}function T(a,e,t){return Q(G,a,e,t)}function U(){return E(["reviews-stats"],"reviews/stats/")}function Y(){return T({queryKey:["reviews"],queryFn:async({pageParam:a=1})=>await(await D.get(`${Z}/api/reviews/`,{params:{page:a}})).data,getNextPageParam:a=>a.data.page+1,onError:a=>console.log(a)})}function J(a){const e=new Date(a),t=e.getDate().toString().padStart(2,"0"),i=(e.getMonth()+1).toString().padStart(2,"0"),c=e.getFullYear(),l=e.getHours().toString().padStart(2,"0"),_=e.getMinutes().toString().padStart(2,"0");return`${t}.${i}.${c} ${l}:${_}`}const W={name:"review-item",props:{avatar:{type:String,required:!0},text:{type:String,required:!0},name:{type:String,required:!0},date:{type:String,required:!0},type:{type:String,required:!0}}};const R=a=>(H("data-v-39099b80"),a=a(),V(),a),X={class:"review"},ee={class:"review-top"},te={class:"review-user"},se=["src"],ae={class:"review-info"},ie={class:"review-info_user"},oe={class:"review-details_date"},ne={class:"review-details"},re={key:0,width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},de=R(()=>s("path",{d:"M9.65432 14.6668V26.6668H7.50766C6.30766 26.6668 5.34766 25.7068 5.34766 24.5202V16.8268C5.34766 15.6402 6.32099 14.6668 7.50766 14.6668H9.65432ZM24.6676 12.6668H18.2943V8.00016C18.2943 6.5335 17.0943 5.3335 15.641 5.3335H15.521C14.9876 5.3335 14.5076 5.6535 14.2943 6.14683L10.6543 14.6668V26.6668H22.921C23.8943 26.6668 24.721 25.9735 24.8943 25.0135L26.6543 15.0135C26.8676 13.7868 25.9343 12.6668 24.681 12.6668H24.6676Z",fill:"#68B159"},null,-1)),ce=[de],le={key:1,width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_e=R(()=>s("path",{d:"M9.65432 17.3332V5.33317H7.50766C6.30766 5.33317 5.34766 6.29317 5.34766 7.47984V15.1732C5.34766 16.3598 6.32099 17.3332 7.50766 17.3332H9.65432ZM24.6676 19.3332H18.2943V23.9998C18.2943 25.4665 17.0943 26.6665 15.641 26.6665H15.521C14.9876 26.6665 14.5076 26.3465 14.2943 25.8532L10.6543 17.3332V5.33317H22.921C23.8943 5.33317 24.721 6.0265 24.8943 6.98651L26.6543 16.9865C26.8676 18.2132 25.9343 19.3332 24.681 19.3332H24.6676Z",fill:"#D34A4A"},null,-1)),ue=[_e],ve={class:"review-body"};function he(a,e,t,i,c,l){return n(),u("div",X,[s("div",ee,[s("div",te,[s("img",{src:t.avatar,width:"190",height:"190",alt:"Аватар"},null,8,se),s("div",ae,[s("div",ie,m(t.name),1),s("div",oe,m(t.date),1)])]),s("div",ne,[s("div",{class:K(t.type==="positive"?"review-details_icon":"review-details_icon__red")},[t.type==="positive"?(n(),u("svg",re,ce)):y("",!0),t.type==="negative"?(n(),u("svg",le,ue)):y("",!0)],2)])]),s("div",ve,m(t.text),1)])}const F=b(W,[["render",he],["__scopeId","data-v-39099b80"]]),P=a=>(H("data-v-bb0a1833"),a=a(),V(),a),pe={class:"stat"},ge=P(()=>s("div",{class:"stat-title"},"Статистика",-1)),fe={class:"stat-main"},me={class:"stat-main_item"},we={class:"stat-main_item__positive"},ye={class:"stat-main_item"},xe={class:"stat-main_item__negative"},$e=P(()=>s("div",{class:"stat-line"},[s("div"),s("div")],-1)),be=P(()=>s("div",{class:"stat-description"},[s("p",null,"А что думаешь ты о нашем сайте?"),s("p",null,[$("Напиши свой честный отзыв о нашем сервисе и получи "),s("span",null,"1 бесплатный кейс")])],-1)),Pe={name:"review-stats",components:{mediumButton:h},data(){return{modals:q()}}},Se=B({...Pe,setup(a){const{data:e,isLoading:t}=U();return(i,c)=>{var l,_;return n(),u("div",pe,[ge,s("div",fe,[s("div",me,[$("Положительных: "),s("span",we,m(r(t)?"Загрузка...":(l=r(e))==null?void 0:l.data.positive_reviews),1)]),s("div",ye,[$("Негативных: "),s("span",xe,m(r(t)?"Загрузка...":(_=r(e))==null?void 0:_.data.negative_reviews),1)])]),$e,be,s("div",{onClick:c[0]||(c[0]=d=>i.modals.showModal("review"))},[p(h,{text:"НАПИСАТЬ ОТЗЫВ"})])])}}});const L=b(Se,[["__scopeId","data-v-bb0a1833"]]),Ce={class:"page"},Me={class:"reviews"},ke={key:0},Ne={key:1,class:"reviews-list"},He={class:"reviews-stat"},Ve={name:"reviews",head:{title:"Kleewish | Отзывы"},components:{MediumButton:h,reviewItem:F,reviewStats:L,titleSection:I}},Be=B({...Ve,setup(a){const e=z("all"),t=_=>{e.value=_},{data:i,fetchNextPage:c,isLoading:l}=Y();return(_,d)=>{var g,v,f;return n(),u("div",Ce,[p(I,{text:"Отзывы",info:`${(g=r(i))==null?void 0:g.pages[0].data.count} отзывов`},null,8,["info"]),s("div",Me,[r(l)?(n(),u("div",ke," Loading... ")):(v=r(i))!=null&&v.pages?(n(),u("div",Ne,[(n(!0),u(x,null,k(r(i).pages,w=>(n(),u(x,null,[(n(!0),u(x,null,k(w.data.reviews.filter(o=>e.value==="all"?!0:e.value==="positive"?o.is_positive:!o.is_positive),o=>(n(),N(F,{key:o.id,avatar:o.author.photo_url,name:`${o.author.first_name} ${o.author.last_name}`,text:o.text,date:r(J)(o.created_at),type:o.is_positive?"positive":"negative"},null,8,["avatar","name","text","date","type"]))),128))],64))),256)),(f=r(i).pages[Object.keys(r(i).pages).length-1].data)!=null&&f.has_next?(n(),N(h,{key:0,text:"Увидеть ещё",onClick:r(c)},null,8,["onClick"])):y("",!0)])):y("",!0),s("div",He,[p(L),s("div",null,[p(h,{onClick:d[0]||(d[0]=()=>t("all")),text:"Все",border:e.value==="all"},null,8,["border"])]),s("div",null,[p(h,{onClick:d[1]||(d[1]=()=>t("positive")),text:"Только положительные",border:e.value==="positive"},null,8,["border"])]),s("div",null,[p(h,{onClick:d[2]||(d[2]=()=>t("negative")),text:"Только отрицательные",border:e.value==="negative"},null,8,["border"])])])])])}}});const qe=b(Be,[["__scopeId","data-v-0e2f1ecf"]]);export{qe as default};
