const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./D-jEuVo6.js","./c1m8qkdf.js","./4Cnkzezf.js","./YyW3t6KU.js","./plyUuadH.js"])))=>i.map(i=>d[i]);
import{_ as O}from"./YyW3t6KU.js";import A from"./DVwSLOeJ.js";import{k as I,b as m,l as g,D as R,w as C,Q as h,U as M,R as p,X as e,Y as f,u as n,I as a,E as V,a9 as z,H as B,Z as j,ac as F,W as y}from"./c1m8qkdf.js";import{_ as H}from"./B2NNCUlh.js";import{_ as G,a as Q}from"./BfEpQrFh.js";import{_ as U}from"./DTHqhfo3.js";import{u as W,j as X,O as o,n as Y,e as Z,M as q}from"./plyUuadH.js";import"./D379fQCP.js";import"./BQOBHm4n.js";import"./9sa6IpoK.js";import"./C73we6Xy.js";import"./DlAUqK2U.js";const J=y(()=>O(()=>import("./D-jEuVo6.js"),__vite__mapDeps([0,1]),import.meta.url).then(c=>c.default||c)),K=y(()=>O(()=>import("./4Cnkzezf.js"),__vite__mapDeps([2,3,4,1]),import.meta.url).then(c=>c.default||c)),ee={class:"dashboard-content w-100 flex-grow-1 container"},se={class:"d-flex justify-content-between align-items-center w-100"},te={class:"lef-side d-flex align-items-center"},oe={class:"mb-1"},re={class:"order-list-selector dropdown"},ne={class:"selector d-flex align-items-center justify-content-center",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},ae={class:"title"},ce=e("div",{class:"mx-1"},null,-1),de={class:"dropdown-menu dd-menu-start dd-animated"},ie={class:"orders-page"},le={class:"row d-flex flex-lg-row flex-column-reverse"},_e={class:"col-xl-5 col-lg-6"},ue={class:"orders my-5 my-lg-0 p-0 px-lg-4"},me=e("div",{class:"divider gray"},null,-1),pe={class:"col-xl-7 col-lg-6"},ke=I({__name:"company-orders",setup(c){const b=W(),t=X(),r=m(o.Order),d=m(),_=m(""),x=[o.Order,o.Processing,o.Done],v=g(()=>{let s;return r.value===o.Order?s=t.companyNewOrders:r.value===o.Processing?s=t.companyProcessingOrders:s=t.companyDoneOrders,_.value.length>0&&(s=s.filter(i=>i.id.toString().includes(_.value.toString()))),s}),w=g(()=>r.value===o.Order?t.isLoadingNewOrders:r.value===o.Processing?t.isLoadingProcessingOrders:t.isLoadingDoneOrders),L=s=>{var i;_.value=(i=s.target)==null?void 0:i.value};R(()=>{t.fetchAllCompanyOrders()}),C(()=>{r.value===o.Order?d.value=t.companyNewOrders[0]:r.value===o.Processing?d.value=t.companyProcessingOrders[0]:d.value=t.companyDoneOrders[0]}),Y({titleTemplate:s=>`${s} - ${l("sidebar.orders")}`});const E=s=>r.value=s,{t:l}=Z();return(s,i)=>{const P=A,k=J,D=H,S=K,T=G,N=Q,$=U;return h(),M($,null,{default:p(()=>[e("div",ee,[e("header",se,[e("div",te,[e("h3",oe,f(n(l)("sidebar.companyOrders")),1),e("div",re,[e("button",ne,[e("span",ae,f(n(l)(`tabs.tab_${n(r)}`)),1),ce,a(P,{width:"16",src:"/assets/image/icons/arrow-down.svg",alt:""})]),e("ul",de,[(h(),V(B,null,z(x,u=>a(k,{"set-active-tab":E,status:u},null,8,["status"])),64))])])]),a(D,{"on-click":()=>n(b).openModal(n(q).CREATE_ORDER)},{default:p(()=>[j(f(n(l)("common.createOrder")),1)]),_:1},8,["on-click"])]),e("div",ie,[e("div",le,[e("div",_e,[e("section",ue,[a(S,{"active-tab":n(r),"on-search":L},null,8,["active-tab"]),me,a(F,null,{default:p(()=>[a(T,{orders:v.value,"selected-order":n(d),"is-loading":w.value,key:"orders-list","on-click-order":u=>d.value=v.value[u]},null,8,["orders","selected-order","is-loading","on-click-order"])]),_:1})])]),e("div",pe,[a(N,{order:n(d)},null,8,["order"])])])])])]),_:1})}}});export{ke as default};
