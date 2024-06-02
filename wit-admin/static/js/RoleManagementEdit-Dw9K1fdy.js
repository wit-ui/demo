var j=Object.defineProperty;var w=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var S=(u,r,l)=>r in u?j(u,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):u[r]=l,k=(u,r)=>{for(var l in r||(r={}))$.call(r,l)&&S(u,l,r[l]);if(w)for(var l of w(r))I.call(r,l)&&S(u,l,r[l]);return u};var C=(u,r,l)=>new Promise((y,g)=>{var V=m=>{try{e(l.next(m))}catch(d){g(d)}},p=m=>{try{e(l.throw(m))}catch(d){g(d)}},e=m=>m.done?y(m.value):Promise.resolve(m.value).then(V,p);e((l=l.apply(u,r)).next())});import{d as L,aj as T,P as A,r as x,b as N,h as D,m as i,o as h,q as E,s as n,y as s,x as U,p as t,c as O,F as P,A as z,a6 as G,av as H,ah as J,_ as Q}from"./index-C3-31E46.js";import{d as W,a as X}from"./roleManagement-BX61yF7j.js";const Y=L({name:"RoleManagementEdit",__name:"RoleManagementEdit",emits:["query"],setup(u,{expose:r,emit:l}){const y=T(),g=l,V=A("$baseMessage"),p=x(null),e=N({roleName:"",roleKey:"",roleSort:"",dictValue:"0",status:"0",remark:""}),m=N({roleName:[{required:!0,message:"岗位标题不能为空",trigger:"change"}],roleKey:[{required:!0,message:"岗位编码不能为空",trigger:"change"}],roleSort:[{required:!0,message:"岗位顺序不能为空",trigger:"change"}],dictValue:[{required:!0,message:"岗位状态不能为空",trigger:"change"}],remark:[{required:!1,message:"岗位内容不能为空",trigger:"change"}]}),d=x(""),c=x(!1);r({showEdit:_=>{c.value=!0,H(()=>{_?(d.value="编辑",Object.assign(e,_)):(d.value="添加",delete e.roleId)})}});const v=()=>{p.value.resetFields(),c.value=!1},K=()=>{p.value.validate(_=>C(this,null,function*(){if(_){if(d.value==="添加"){const{msg:o}=yield W(k({},e));V(o,"success","hey")}else{const{msg:o}=yield X(k({},e));V(o,"success","hey")}g("query"),v()}}))};return D(()=>{}),(_,o)=>{const b=i("el-input"),f=i("el-form-item"),M=i("el-option"),R=i("el-select"),B=i("el-form"),q=i("el-button"),F=J;return h(),E(F,{modelValue:t(c),"onUpdate:modelValue":o[5]||(o[5]=a=>G(c)?c.value=a:null),"append-to-body":"",title:t(d),width:"500px",onClose:v},{footer:n(()=>[s(q,{onClick:v},{default:n(()=>[U("取 消")]),_:1}),s(q,{type:"primary",onClick:K},{default:n(()=>[U("确 定")]),_:1})]),default:n(()=>[s(B,{ref_key:"formRef",ref:p,"label-width":"80px",model:t(e),rules:t(m)},{default:n(()=>[s(f,{label:"角色名称",prop:"roleName"},{default:n(()=>[s(b,{modelValue:t(e).roleName,"onUpdate:modelValue":o[0]||(o[0]=a=>t(e).roleName=a),placeholder:"请输入角色名称"},null,8,["modelValue"])]),_:1}),s(f,{label:"角色标识",prop:"roleKey"},{default:n(()=>[s(b,{modelValue:t(e).roleKey,"onUpdate:modelValue":o[1]||(o[1]=a=>t(e).roleKey=a),placeholder:"请输入角色标识"},null,8,["modelValue"])]),_:1}),s(f,{label:"显示顺序",prop:"roleSort"},{default:n(()=>[s(b,{modelValue:t(e).roleSort,"onUpdate:modelValue":o[2]||(o[2]=a=>t(e).roleSort=a),placeholder:"请输入显示顺序"},null,8,["modelValue"])]),_:1}),s(f,{label:"状态",prop:"dictValue"},{default:n(()=>[s(R,{modelValue:t(e).status,"onUpdate:modelValue":o[3]||(o[3]=a=>t(e).status=a),placeholder:"请选择状态"},{default:n(()=>[(h(!0),O(P,null,z(t(y).wordbook.sys_normal_disable,a=>(h(),E(M,{key:a.id,label:a.dictLabel,value:a.dictValue},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(f,{label:"备注",prop:"remark"},{default:n(()=>[s(b,{modelValue:t(e).remark,"onUpdate:modelValue":o[4]||(o[4]=a=>t(e).remark=a),placeholder:"请输备注",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}}),ae=Q(Y,[["__scopeId","data-v-b9bc189d"]]);export{ae as default};
