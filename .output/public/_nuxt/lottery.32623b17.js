import{_ as l,b as a,d as u,p as d,h as m,e,a as c,i as $,w as h,f as s,l as g,F as x}from"./entry.6850a65d.js";import{P}from"./vue3-perfect-scrollbar.esm.b68392d2.js";import{a as z,C as I,P as B}from"./Participant.48c90688.js";import{_ as w}from"./nuxt-icon.vue.076a85b0.js";import{B as C}from"./Button.d3241390.js";const k={props:{img:{type:String,required:!0}}},q=t=>(d("data-v-7e507b27"),t=t(),m(),t),U={class:"prize"},F=q(()=>e("img",{src:"",alt:"prize",format:"avif,webp",densities:"x1 x2",class:"prize__img",width:"77",height:"77"},null,-1)),N=[F];function V(t,v,b,i,f,y){return a(),u("div",U,N)}const j=l(k,[["render",V],["__scopeId","data-v-7e507b27"]]);const E={components:{LotteryPrize:j,PerfectScrollbar:P,Panel:z}},D=t=>(d("data-v-3e54c48a"),t=t(),m(),t),A=D(()=>e("h2",{class:"heading2 prizes__title"},"Призы",-1)),G=D(()=>e("div",{class:"prizes__tabs"},[e("button",{class:"prizes__tab prizes__tab--active"},"Все предметы"),e("button",{class:"prizes__tab"},"Подробнее")],-1)),H={class:"prizes__tabs-content"},J={class:"prizes__tabs-panel"},K={class:"prizes__prize-grid"};function M(t,v,b,i,f,y){const _=j,o=c("PerfectScrollbar"),r=c("Panel");return a(),$(r,{class:"prizes"},{default:h(()=>[A,G,e("div",H,[e("div",J,[s(o,{class:"prizes__prize-list"},{default:h(()=>[e("div",K,[(a(),u(x,null,g(9,p=>s(_,{img:"prize"+p+".png"},null,8,["img"])),64))])]),_:1})])])]),_:1})}const R=l(E,[["render",M],["__scopeId","data-v-3e54c48a"]]);const O={components:{Counter:I,Button:C}},n=t=>(d("data-v-ec069135"),t=t(),m(),t),Q={class:"bet"},T=n(()=>e("p",{class:"bet__text bet__text--top"},"До окончания лотереи осталось:",-1)),W=n(()=>e("p",{class:"bet__text"},"Стоимость участия:",-1)),X=n(()=>e("p",{class:"bet__price"},"456 руб",-1)),Y={class:"bet__count-box"},Z={class:"bet__count-wrap"},tt=n(()=>e("p",{class:"bet__text"},"Выберите кол-во билетов:",-1)),et={class:"bet__input-box"},st={class:"bet__input-btn bet__input-btn--minus","aria-label":"Минус"},ot=n(()=>e("input",{type:"text",class:"bet__input",value:"1"},null,-1)),at={class:"bet__input-btn bet__input-btn--plus","aria-label":"Плюс"},_t=n(()=>e("p",{class:"bet__small-text"},"Осталось: 3 из 5",-1));function rt(t,v,b,i,f,y){const _=c("Counter"),o=w,r=c("Button");return a(),u("div",Q,[T,s(_,{class:"bet__counter"}),W,X,e("div",Y,[e("div",Z,[tt,e("div",et,[e("button",st,[s(o,{name:"minus-circle",class:"bet__input-btn-icon",fill:"none"})]),ot,e("button",at,[s(o,{name:"plus-circle",class:"bet__input-btn-icon"})])]),_t]),s(o,{name:"question-circle",class:"bet__question-icon"}),s(r,{color:"green",text:"Принять участие",class:"bet__bet-btn"})])])}const L=l(O,[["render",rt],["__scopeId","data-v-ec069135"]]);const ct={components:{PerfectScrollbar:P,Participant:B,Panel:z},setup(){return{userList:[{avatar:"user1.jpg",name:"Dmitryi Ravos",score:5},{avatar:"user2.jpg",name:"Dmitryi Ravos",score:5},{avatar:"user3.jpg",name:"Dmitryi Ravos",score:5},{avatar:"user4.jpg",name:"Dmitryi Ravos",score:5},{avatar:"user1.jpg",name:"Dmitryi Ravos",score:5},{avatar:"user2.jpg",name:"Dmitryi Ravos",score:5},{avatar:"user3.jpg",name:"Dmitryi Ravos",score:5},{avatar:"user4.jpg",name:"Dmitryi Ravos",score:5},{avatar:"user1.jpg",name:"Dmitryi Ravos",score:5},{avatar:"user2.jpg",name:"Dmitryi Ravos",score:5}]}}},nt=t=>(d("data-v-e674f0fa"),t=t(),m(),t),it=nt(()=>e("h2",{class:"heading2 users__title"},"Участники",-1));function pt(t,v,b,i,f,y){const _=c("Participant"),o=c("PerfectScrollbar"),r=c("Panel");return a(),$(r,{class:"users"},{default:h(()=>[it,s(o,{class:"users__user-list"},{default:h(()=>[(a(!0),u(x,null,g(i.userList,p=>(a(),$(_,{avatar:p.avatar,name:p.name,score:p.score,"is-score-green":!0},null,8,["avatar","name","score"]))),256))]),_:1})]),_:1})}const S=l(ct,[["render",pt],["__scopeId","data-v-e674f0fa"]]);const lt={components:{LotteryUsers:S,LotteryBet:L,LotteryPrizes:R},setup(){return{userList:[{avatar:"user1.jpg",name:"Dmitryi Ravos",score:5},{avatar:"user2.jpg",name:"Dmitryi Ravos",score:5},{avatar:"user3.jpg",name:"Dmitryi Ravos",score:5},{avatar:"user4.jpg",name:"Dmitryi Ravos",score:5},{avatar:"user1.jpg",name:"Dmitryi Ravos",score:5},{avatar:"user2.jpg",name:"Dmitryi Ravos",score:5},{avatar:"user3.jpg",name:"Dmitryi Ravos",score:5},{avatar:"user4.jpg",name:"Dmitryi Ravos",score:5},{avatar:"user1.jpg",name:"Dmitryi Ravos",score:5},{avatar:"user2.jpg",name:"Dmitryi Ravos",score:5}]}}},ut=t=>(d("data-v-2c7c0ffd"),t=t(),m(),t),dt={class:"lottery"},mt=ut(()=>e("h1",{class:"heading1 lottery__title"},"Лотерея",-1)),vt={class:"lottery__grid"};function bt(t,v,b,i,f,y){const _=R,o=L,r=S;return a(),u("div",dt,[mt,e("div",vt,[s(_),s(o),s(r)])])}const xt=l(lt,[["render",bt],["__scopeId","data-v-2c7c0ffd"]]);export{xt as default};
