import{r as v,o as h,c as _,a as i,b as d,w as f,d as y,F as k,e as w,f as I,g as T,h as O,i as R}from"./vendor.28ed3bb8.js";const $=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}};$();var E=(o,n)=>{const e=o.__vccOpts||o;for(const[r,t]of n)e[r]=t;return e};const b={},x={class:"py-6"},D=y("BLD"),N={class:"text-base"},S=y("\u767B\u5165");function V(o,n){const e=v("router-link");return h(),_("header",x,[i("h1",null,[d(e,{to:"/"},{default:f(()=>[D]),_:1})]),i("nav",null,[i("ul",N,[i("li",null,[d(e,{to:"/login"},{default:f(()=>[S]),_:1})])])])])}var B=E(b,[["render",V]]);const C={setup(o){return(n,e)=>{const r=v("router-view");return h(),_(k,null,[d(B),i("main",null,[d(r)])],64)}}},A="modulepreload",m={},U="/bitly-sample-app/",g=function(n,e){return!e||e.length===0?n():Promise.all(e.map(r=>{if(r=`${U}${r}`,r in m)return;m[r]=!0;const t=r.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":A,t||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),t)return new Promise((L,P)=>{c.addEventListener("load",L),c.addEventListener("error",P)})})).then(()=>n())},z=w("link",{state:()=>({token:{}.VITE_TOKEN,guid:""}),getters:{},actions:{}}),a={}.VITE_API_URL,G={}.VITE_REDIRECT_URL,H={}.VITE_CLIENT_ID,u={auth(o){const n=new URLSearchParams({client_id:H,code:o,redirect_uri:G,grant_type:"authorization_code"});return new Promise((e,r)=>{fetch(a+"/oauth/access_token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n}).then(t=>(console.log(t),t.text())).then(t=>e(t)).catch(t=>r(t))})},getBSDs(o){return new Promise((n,e)=>{fetch(a+"/v4/bsds",{headers:l()}).then(r=>r.json()).then(r=>n(r)).catch(r=>e(r))})},getGroups(){return new Promise((o,n)=>{fetch(a+"/v4/groups",{headers:l()}).then(e=>e.json()).then(e=>o(e)).catch(e=>n(e))})},getOrganizations(){return new Promise((o,n)=>{fetch(a+"/v4/organizations",{headers:l()}).then(e=>e.json()).then(e=>o(e)).catch(e=>n(e))})},getGroupLinks(o){return new Promise((n,e)=>{fetch(a+`/v4/groups/${o}/bitlinks`,{headers:l()}).then(r=>r.json()).then(r=>n(r)).catch(r=>e(r))})}},l=()=>{const o=z();return{Authorization:"Bearer "+o.token}},j={setup(){u.getBSDs(),u.getGroups().then(o=>{const n=o.groups[0].guid;u.getGroupLinks(n)}),u.getOrganizations()}};function F(o,n,e,r,t,s){return h(),_("main")}var K=E(j,[["render",F]]);const W=I({history:T("/bitly-sample-app/"),scrollBehavior(){return{top:0}},routes:[{path:"/",name:"home",component:K},{path:"/auth",name:"auth",component:()=>g(()=>import("./authView.3ab18b49.js"),["assets/authView.3ab18b49.js","assets/vendor.28ed3bb8.js"])},{path:"/login",name:"login",component:()=>g(()=>import("./loginView.ecd54a91.js"),["assets/loginView.ecd54a91.js","assets/vendor.28ed3bb8.js"])}]}),p=O(C);p.use(R());p.use(W);p.mount("#app");export{E as _,u as a};
