import{B as c,x as p,C as d,D as v,b as E,d as f,k as g,E as l,G as e}from"./entry.6850a65d.js";const h=["innerHTML"],L=c({__name:"nuxt-icon",props:{name:{},filled:{type:Boolean,default:!1}},async setup(m){let i,r;const _=m,a=p("");let n=!1;async function u(){try{const o=await Object.assign({"/assets/icons/advantage1.svg":()=>e(()=>import("./advantage1.ee91d0ee.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/advantage2.svg":()=>e(()=>import("./advantage2.09b4040d.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/advantage3.svg":()=>e(()=>import("./advantage3.fb37dd63.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/bag.svg":()=>e(()=>import("./bag.28e5a0db.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/burger.svg":()=>e(()=>import("./burger.cc2bfa4e.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/check.svg":()=>e(()=>import("./check.092c84f5.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/external-link.svg":()=>e(()=>import("./external-link.8dbff818.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/key.svg":()=>e(()=>import("./key.2c36e0ad.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/logo.svg":()=>e(()=>import("./logo.32688eec.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/minus-circle.svg":()=>e(()=>import("./minus-circle.511c0370.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/moon.svg":()=>e(()=>import("./moon.a36f968c.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/plus-circle.svg":()=>e(()=>import("./plus-circle.33a321bd.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/plus.svg":()=>e(()=>import("./plus.017acb9c.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/question-circle.svg":()=>e(()=>import("./question-circle.c0a7e79d.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/star.svg":()=>e(()=>import("./star.d1134b11.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/sun.svg":()=>e(()=>import("./sun.d0e40a50.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/users.svg":()=>e(()=>import("./users.d8f52da7.js"),[],import.meta.url).then(t=>t.default)})[`/assets/icons/${_.name}.svg`]();o.includes("stroke")&&(n=!0),a.value=o}catch{console.error(`[nuxt-icons] Icon '${_.name}' doesn't exist in 'assets/icons'`)}}return[i,r]=d(()=>u()),await i,r(),v(u),(s,o)=>(E(),f("span",{class:g(["nuxt-icon",{"nuxt-icon--fill":!s.filled,"nuxt-icon--stroke":l(n)&&!s.filled}]),innerHTML:l(a)},null,10,h))}});export{L as _};
