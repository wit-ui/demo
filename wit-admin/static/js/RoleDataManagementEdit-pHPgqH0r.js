var y=(x,S,r)=>new Promise((h,_)=>{var m=t=>{try{p(r.next(t))}catch(l){_(l)}},e=t=>{try{p(r.throw(t))}catch(l){_(l)}},p=t=>t.done?h(t.value):Promise.resolve(t.value).then(m,e);p((r=r.apply(x,S)).next())});import{d as K,aj as L,P as O,r as u,b as P,h as $,m as c,T as q,o as b,q as g,s as o,y as d,x as k,p as a,t as z,B as D,c as A,F as G,A as H,n as I,z as J,a6 as Q,av as W,ah as X,_ as Y}from"./index-C3-31E46.js";import{g as Z,b as ee,c as ae}from"./roleManagement-BX61yF7j.js";import{S as E}from"./constants-C9BIlYt-.js";const te={class:"wit-tree-border"},oe=K({name:"RoleDataManagementEdit",__name:"RoleDataManagementEdit",setup(x,{expose:S}){const r=L(),h=O("$baseMessage"),_=u(null),m=u(null),e=P({dataScope:"",deptIds:[],admin:!1}),p=u("数据权限"),t=u(!1),l=u(!1),C=u([]);S({showEdit:i=>{t.value=!0,l.value=!0,W(()=>y(this,null,function*(){var f;(f=m.value)==null||f.setCheckedKeys([]),Object.assign(e,i);const{data:s}=yield Z(e.roleId);e.dataScope=s.dataScope,e.deptIds=s.deptIds,e.admin=s.admin,l.value=!1}))}});const w=()=>{t.value=!1},R=()=>y(this,null,function*(){const{data:i}=yield ee();C.value=i}),T=()=>{_.value.validate(i=>y(this,null,function*(){if(i){l.value=!0;const{msg:s}=yield ae({roleId:e.roleId,dataScope:e.dataScope,deptIds:e.dataScope!==E.DEPT_CUSTOM?[]:m.value.getCheckedKeys()});h(s,"success","hey"),l.value=!1,w()}}))};return $(()=>{R()}),(i,s)=>{const f=c("el-tag"),v=c("el-form-item"),M=c("el-option"),B=c("el-select"),N=c("el-tree"),U=c("el-form"),V=c("el-button"),j=X,F=q("loading");return b(),g(j,{modelValue:a(t),"onUpdate:modelValue":s[1]||(s[1]=n=>Q(t)?t.value=n:null),title:a(p),"append-to-body":"",width:"500px",onClose:w},{footer:o(()=>[d(V,{onClick:w},{default:o(()=>[k("取 消")]),_:1}),d(V,{disabled:a(l),type:"primary",onClick:T},{default:o(()=>[k("确 定")]),_:1},8,["disabled"])]),default:o(()=>[z((b(),g(U,{ref_key:"formRef",ref:_,model:a(e),"label-width":"80px"},{default:o(()=>[d(v,{label:"角色名称"},{default:o(()=>[d(f,null,{default:o(()=>[k(D(a(e).roleName),1)]),_:1})]),_:1}),d(v,{label:"角色标识"},{default:o(()=>[d(f,null,{default:o(()=>[k(D(a(e).roleKey),1)]),_:1})]),_:1}),d(v,{label:"权限范围"},{default:o(()=>[d(B,{modelValue:a(e).dataScope,"onUpdate:modelValue":s[0]||(s[0]=n=>a(e).dataScope=n),disabled:a(e).admin},{default:o(()=>[(b(!0),A(G,null,H(a(r).wordbook.sys_data_scope,n=>(b(),g(M,{key:n.id,label:n.dictLabel,value:n.dictValue},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),a(e).dataScope===a(E).DEPT_CUSTOM?(b(),g(v,{key:0,label:"权限范围"},{default:o(()=>[I("div",te,[d(N,{ref_key:"treeRef",ref:m,data:a(C),"default-checked-keys":a(e).deptIds,"default-expand-all":"","node-key":"id","show-checkbox":""},{default:o(({data:n})=>[I("span",null,D(n.label),1)]),_:1},8,["data","default-checked-keys"])])]),_:1})):J("",!0)]),_:1},8,["model"])),[[F,a(l)]])]),_:1},8,["modelValue","title"])}}}),re=Y(oe,[["__scopeId","data-v-fdb6b0ee"]]);export{re as default};
