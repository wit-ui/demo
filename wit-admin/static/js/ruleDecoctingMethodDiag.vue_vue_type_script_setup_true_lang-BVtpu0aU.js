var N=(y,V,u)=>new Promise((C,_)=>{var h=a=>{try{i(u.next(a))}catch(d){_(d)}},L=a=>{try{i(u.throw(a))}catch(d){_(d)}},i=a=>a.done?C(a.value):Promise.resolve(a.value).then(h,L);i((u=u.apply(y,V)).next())});import{d as I,aj as R,P as S,r as p,b as $,m as c,o as f,q as w,s,y as n,x as q,p as e,z as O,c as U,F as j,A as B,a6 as A,ah as P}from"./index-C3-31E46.js";import{D as T,B as G}from"./indication-pDCgof6D.js";const W=I({name:"ruleDecoctingMethodEdit",__name:"ruleDecoctingMethodDiag",emits:["fetch-data"],setup(y,{expose:V,emit:u}){const C=u,_=R(),h=S("$baseMessage"),L={routeList:[{required:!0,message:"请选择煎煮方法",trigger:"change"}]},i=p(null),a=p(""),d=p(!1),k=p([]),r=p(""),o=$({routeList:[],routeCode:"",routeName:"",questionLevel:"0",reference:"",tipContent:"",generalId:""});V({showDiag:(m,t,v,b)=>{o.generalId=v,r.value=t,k.value=b,d.value=!0,t=="edit"?a.value="编辑煎煮方法":t=="view"?a.value="查看煎煮方法":t=="add"&&(a.value="新增煎煮方法"),t!="add"&&Object.assign(o,m,{routeList:[{routeCode:m.routeCode,routeName:m.routeName}]})}});const x=()=>{i.value.resetFields(),d.value=!1,Object.assign(o,{routeList:[],routeCode:"",routeName:"",questionLevel:"0",reference:"",tipContent:"",generalId:""})},F=()=>{i.value.validate(m=>N(this,null,function*(){if(m){const{msg:t}=r.value=="add"?yield T(o):yield G(o);h(t,"success","hey"),C("fetch-data"),x()}}))};return(m,t)=>{const v=c("el-option"),b=c("el-select"),g=c("el-form-item"),D=c("el-input"),z=c("el-form"),M=c("el-button"),E=P;return f(),w(E,{modelValue:e(d),"onUpdate:modelValue":t[4]||(t[4]=l=>A(d)?d.value=l:null),modal:!1,"append-to-body":"",title:e(a),width:"826px",onClose:x,class:"pointerEvents"},{footer:s(()=>[n(M,{onClick:x},{default:s(()=>[q("取 消")]),_:1}),e(r)!="view"?(f(),w(M,{key:0,type:"primary",onClick:F},{default:s(()=>[q("确 定")]),_:1})):O("",!0)]),default:s(()=>[n(z,{ref_key:"formRef",ref:i,"label-width":"80px",model:e(o),rules:L},{default:s(()=>[n(g,{label:"煎煮方法",prop:"routeList"},{default:s(()=>[n(b,{modelValue:e(o).routeList,"onUpdate:modelValue":t[0]||(t[0]=l=>e(o).routeList=l),"value-key":"routeCode",multiple:"",size:"large",placeholder:"请输入关键字",disabled:e(r)=="view"||e(r)=="edit"},{default:s(()=>[(f(!0),U(j,null,B(e(k),l=>(f(),w(v,{key:l.routeCode,label:l.routeName,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),n(g,{label:"问题等级"},{default:s(()=>[n(b,{modelValue:e(o).questionLevel,"onUpdate:modelValue":t[1]||(t[1]=l=>e(o).questionLevel=l),size:"large",placeholder:"请选择",disabled:e(r)=="view"},{default:s(()=>[(f(!0),U(j,null,B(e(_).wordbook.problem_level_rule,l=>(f(),w(v,{key:l.dictValue,label:l.dictLabel,value:l.dictValue},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),n(g,{label:"参考文献"},{default:s(()=>[n(D,{modelValue:e(o).reference,"onUpdate:modelValue":t[2]||(t[2]=l=>e(o).reference=l),modelModifiers:{trim:!0},maxlength:"200",placeholder:"请输入","show-word-limit":"",type:"textarea",style:{width:"100%"},rows:3,disabled:e(r)=="view"},null,8,["modelValue","disabled"])]),_:1}),n(g,{label:"提示内容"},{default:s(()=>[n(D,{modelValue:e(o).tipContent,"onUpdate:modelValue":t[3]||(t[3]=l=>e(o).tipContent=l),modelModifiers:{trim:!0},maxlength:"500",placeholder:"请输入","show-word-limit":"",type:"textarea",style:{width:"100%"},rows:4,disabled:e(r)=="view"},null,8,["modelValue","disabled"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])}}});export{W as _};
