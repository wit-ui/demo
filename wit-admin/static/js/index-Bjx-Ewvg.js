var I=(c,f,d)=>new Promise((m,o)=>{var r=n=>{try{s(d.next(n))}catch(u){o(u)}},h=n=>{try{s(d.throw(n))}catch(u){o(u)}},s=n=>n.done?m(n.value):Promise.resolve(n.value).then(r,h);s((d=d.apply(c,f)).next())});import S from"./index-BmlzvIVb.js";import{d as A,P as k,r as e,m as j,o as L,c as M,n as p,y as l,p as i,s as x,x as z,a6 as P,H as q,af as F,I as H,J,_ as U}from"./index-C3-31E46.js";import W from"./ruleEditing-CH1f3cji.js";import G from"./index-DzYaQr95.js";import{d as K,f as O,g as Q}from"./vertifyAuditRule-DywA9BSa.js";import"./ruleSetItemContent-BLjp2f7D.js";import"./ruleItem-B6kFXL4R.js";import"./judgingConditions-DJTe05cX.js";import"./index.vue_vue_type_style_index_0_lang-Rf1iYlx6.js";import"./ifComponent.vue_vue_type_style_index_0_lang-h1Ozx49r.js";import"./index-B93FDT35.js";import"./index.vue_vue_type_script_setup_true_lang-DLP8ok9d.js";import"./dict-Bt1K3r7e.js";import"./ruleCustomParameters-XoFX0xKS.js";import"./winAdd-BgJHOsjr.js";const X=c=>(H("data-v-7e875904"),c=c(),J(),c),Y={class:"matching-tools-vertify-audit-rule-page auto-height-container"},Z={class:"left-wrap"},ee={class:"center-wrap flex-all padding-horizontal"},te={class:"right-wrap flex-column"},ne={class:"flex justify-end padding-out"},ae=X(()=>p("span",null,"新增",-1)),oe={class:"padding-out flex-all"},se=A({name:"Matching-Tools-Vertify-Audit-Rule",__name:"index",setup(c){const f=k("$baseMessage"),d=k("$baseConfirm"),m=e(),o=e(!1),r=e([]),h=e([{field:"generalName",title:"限定使用的通用名",minWidth:"100"},{field:"btns",title:"操作",align:"center",width:"70",fixed:"right",render:!0}]),s=e(null),n=e("decoction_method"),u=e(""),R=e("");e(!1),e(""),e();const V=t=>{u.value=t.id,s.value&&s.value.query(t),m.value=t,v()};function v(){o.value=!0,K(m.value.id).then(({data:t})=>{o.value=!1,r.value=t||[]}).catch(()=>{o.value=!1,r.value=[]})}const g=e(),y=e();function $(){let t=e([]);r.value.forEach(a=>{t.value.push({code:a.generalId,name:a.generalName})}),g.value=t.value,y.value.showEdit({selectorType:5})}function E(t){return I(this,null,function*(){let a=e([]);t.forEach((_,w)=>{a.value.push({hecId:m.value.id,generalId:_.code,generalName:_.name})}),O(a.value).then(({msg:_})=>{f(_,"success","hey"),v()})})}const N=t=>{d("您确定要删除当前项吗","是否确定删除？",()=>{Q(t).then(({data:a})=>{f("删除成功","success","hey"),v()})})};return(t,a)=>{const _=G,w=W,T=q,C=j("el-button"),B=F,D=S;return L(),M("div",Y,[p("div",Z,[l(_,{signs:0,onTableRowClick:V})]),p("div",ee,[l(w,{dimensionCode:i(n),autoFlex:!0,refId:i(u),id:i(R),ref_key:"ruleEditingBox",ref:s},null,8,["dimensionCode","refId","id"])]),p("div",te,[p("div",ne,[l(C,{type:"warning",plain:"",onClick:$},{default:x(()=>[l(T,{icon:"icon-xinzengdianpingjihua"}),ae]),_:1})]),p("div",oe,[l(B,{ref:"tableDrugRef","table-name":"matching-tools-vertify-audit-rule-drug-table",loading:i(o),"table-data":i(r),columns:i(h),isShowTableSet:!1},{btns:x(b=>[l(C,{text:"",type:"primary",onClick:le=>N(b.row.id)},{default:x(()=>[z("删除")]),_:2},1032,["onClick"])]),_:1},8,["loading","table-data","columns"])])]),l(D,{modelValue:i(g),"onUpdate:modelValue":[a[0]||(a[0]=b=>P(g)?g.value=b:null),E],ref_key:"generalRef",ref:y},null,8,["modelValue"])])}}}),Ce=U(se,[["__scopeId","data-v-7e875904"]]);export{Ce as default};
