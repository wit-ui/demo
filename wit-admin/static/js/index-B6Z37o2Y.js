var A=(x,h,n)=>new Promise((u,c)=>{var a=o=>{try{m(n.next(o))}catch(d){c(d)}},p=o=>{try{m(n.throw(o))}catch(d){c(d)}},m=o=>o.done?u(o.value):Promise.resolve(o.value).then(a,p);m((n=n.apply(x,h)).next())});import{_ as P}from"./index-Chz8TBPT.js";import{d as U,P as k,r as s,b as q,a0 as F,ae as T,m as S,o as j,c as H,y as r,s as i,n as f,p as I,a7 as O,B as b,x as W,H as G,af as J,ag as K}from"./index-C3-31E46.js";import{_ as Q}from"./index.vue_vue_type_style_index_0_lang-Rf1iYlx6.js";import{_ as X}from"./editDetailDiag.vue_vue_type_script_setup_true_lang-D2HnimGQ.js";import{g as Y,r as Z}from"./ageSetting-0T7tFKLp.js";import"./ifComponent.vue_vue_type_style_index_0_lang-h1Ozx49r.js";import"./index-B93FDT35.js";import"./index.vue_vue_type_script_setup_true_lang-DLP8ok9d.js";import"./dict-Bt1K3r7e.js";const ee={class:"department-management-container no-background-container auto-height-container"},ae={class:"flex space-between"},te={class:"refresh"},fe=U({__name:"index",setup(x){k("$baseConfirm");const h=k("$baseMessage"),n=s(!1),u=s([]),c=s(0),a=s({name:"",status:""}),p=s([{width:"50",title:"序号",type:"seq"},{field:"name",title:"类型",width:"120"},{field:"minAge",title:"最小年龄",width:"100",render:!0},{field:"maxAge",title:"最大年龄",width:"100",render:!0},{field:"status",title:"有效性",width:"100",filters:[{label:"无效",value:"0"},{label:"有效",value:"1"}],filterMultiple:!1,render:!0},{field:"remark",title:"备注",minWidth:"140"},{field:"btns",title:"操作",align:"center",width:"80",fixed:"right",render:!0}]),m=q({searchListButtons:[{label:"搜 索",isShowLoading:!0,attrs:{type:"primary"},events:{click:d}}],searchList:[{type:"input",field:"name",label:"关键字",isOutBorder:!0,attrs:{placeholder:"请输入",clearable:!0}}],otherSearchList:[]}),o=s(null);function d(){o.value.search()}function N({property:t,values:l}){a[t]=l[0]||"",y(1)}const C=s(null);function $(t){C.value.openDiag(t)}F(()=>{g(1)});function g(t){n.value=!0,t&&typeof t=="number"?a.value.pageNum=t:a.value.pageNum=1,Y(a.value).then(l=>{if(n.value=!1,l.resultCode!="1"){T.error("查询失败！！");return}c.value=l.data.total||0,l.data.records.forEach((v,w)=>{v.sort=(a.value.pageNum-1)*10+(w+1)}),u.value=l.data.records||[]}).catch(()=>{n.value=!1,c.value=0,u.value=[]})}const _=s(!1);function D(){return A(this,null,function*(){_.value=!0;const{msg:t}=yield Z();_.value=!1,h(t,"success","hey")})}function y(t){a.value.pageNum=t,g(a.value.pageNum)}function z(t){a.value.pageSize=t,g(1)}function L(){g(1)}return(t,l)=>{const v=Q,w=G,B=S("el-tooltip"),V=S("el-button"),M=J,R=K,E=P;return j(),H("div",ee,[r(E,{class:"auto-height-card"},{default:i(()=>[f("div",ae,[r(v,{ref_key:"witSearchRef",ref:o,modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),"is-cache":!0,"search-data":I(m),"search-name":"matching-tools-age-setting-search",searching:n.value,border:!1,padding:!1,onSearch:g},null,8,["modelValue","search-data","searching"]),f("div",te,[r(B,{class:"box-item",effect:"dark",content:"刷新缓存",placement:"top"},{default:i(()=>[r(w,{icon:"icon-gengxin",class:O({"refresh-icon":!0,"loading-animation":_.value}),onClick:D,style:{padding:"4px"}},null,8,["class"])]),_:1})])]),r(M,{ref:"tableRef","table-name":"matching-tools-age-setting-table",loading:n.value,"table-data":u.value,columns:p.value,onFilterChange:N},{minAge:i(e=>[f("span",null,b(e.row.minAge||e.row.minAge===0?e.row.minAge+e.row.minAgeUnit:e.row.minAge),1)]),maxAge:i(e=>[f("span",null,b(e.row.maxAge||e.row.maxAge===0?e.row.maxAge+e.row.maxAgeUnit:e.row.maxAge),1)]),status:i(e=>[f("span",null,b(e.row.status==="1"?"有效":e.row.status==="0"?"无效":""),1)]),btns:i(e=>[r(V,{text:"",type:"primary",onClick:ne=>$(e.row)},{default:i(()=>[W("修改")]),_:2},1032,["onClick"])]),_:1},8,["loading","table-data","columns"]),r(R,{"current-page":a.value.pageNum,"page-size":a.value.pageSize,total:c.value,"prev-text":"上一页","next-text":"下一页",onCurrentChange:y,onSizeChange:z},null,8,["current-page","page-size","total"])]),_:1}),r(X,{ref_key:"editDiag",ref:C,onCloseDiag:L},null,512)])}}});export{fe as default};
