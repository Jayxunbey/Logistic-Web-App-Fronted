const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./LzqN5GPk.js","./B2NNCUlh.js","./DVwSLOeJ.js","./plyUuadH.js","./c1m8qkdf.js","./YyW3t6KU.js"])))=>i.map(i=>d[i]);
import{_ as p}from"./YyW3t6KU.js";import{_ as x}from"./Cntexjuq.js";import{_ as C}from"./DTHqhfo3.js";import{e as M,o as A,f as $,u as k,n as D,M as r}from"./plyUuadH.js";import{p as I}from"./BQOBHm4n.js";import{k as N,l as _,D as R,c as T,Q as L,U as P,R as d,X as t,Y as m,u as s,I as l,Z as S,W as u}from"./c1m8qkdf.js";import"./DlAUqK2U.js";const V=u(()=>p(()=>import("./LzqN5GPk.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(n=>n.default||n)),z=u(()=>p(()=>import("./DVwSLOeJ.js"),__vite__mapDeps([2,3,4,5]),import.meta.url).then(n=>n.default||n)),B={class:"dashboard-content w-100 flex-grow-1 container"},O={class:"d-flex justify-content-between align-items-center w-100"},U={class:"lef-side d-flex align-items-center"},Y={class:"mb-1"},j={class:"company-employees"},H={class:"employees-container"},q={class:"search-bar d-flex align-items-center justify-content-between"},F={class:"input-group"},Q={class:"form-floating"},W=["placeholder"],X={for:"search-input"},Z={class:"search-icon"},ae=N({__name:"users",setup(n){const{t:o}=M(),h=A(),i=_(()=>h.query.page??1),a=$(),c=k();D({titleTemplate:e=>`${e} - ${o("sidebar.employee")}`});const f=[o("common.userId"),o("common.fullName"),o("common.phoneNumber"),o("common.status")],y=_(()=>a.companyUsers.data.map(e=>[`#${e.id}`,e.fio,I(e.phone_number),e.status===1?o("common.statusActive"):o("common.statusBlocked")])),E=[{title:o("common.view"),action:e=>{console.log(e)}},{title:o("common.edit"),action:e=>{c.openModal(r.CREATE_EMPLOYEE),c.$patch({selectedEmployeeId:+e})}},{title:o("common.delete"),action:e=>{c.openDeleteEmployee(+e)},isDelete:!0}];return R(()=>{a.fetchCompanyEmployee(+i.value)}),T(i,()=>{a.fetchCompanyEmployee(+i.value)}),(e,G)=>{const b=V,g=z,v=x,w=C;return L(),P(w,null,{default:d(()=>[t("div",B,[t("header",O,[t("div",U,[t("h3",Y,m(s(o)("sidebar.employee")),1)]),l(b,{"on-click":()=>s(c).openModal(s(r).CREATE_EMPLOYEE)},{default:d(()=>[S(m(s(o)("common.addEmployee")),1)]),_:1},8,["on-click"])]),t("section",j,[t("div",H,[t("div",q,[t("div",F,[t("div",Q,[t("input",{type:"text",class:"form-control shadow-none",placeholder:e.$t("common.search"),id:"search-input"},null,8,W),t("label",X,m(s(o)("common.search")),1),t("div",Z,[l(g,{width:"25",src:"/assets/image/icons/search.svg",alt:""})])])])]),l(v,{headers:f,content:s(y),actions:E,"is-loading":s(a).isLoading,"page-meta":s(a).companyUsers.meta},null,8,["content","is-loading","page-meta"])])])])]),_:1})}}});export{ae as default};
