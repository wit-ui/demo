var A=Object.defineProperty;var N=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var z=(e,l,t)=>l in e?A(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t,B=(e,l)=>{for(var t in l||(l={}))Z.call(l,t)&&z(e,t,l[t]);if(N)for(var t of N(l))G.call(l,t)&&z(e,t,l[t]);return e};var S=(e,l,t)=>new Promise((b,u)=>{var f=i=>{try{o(t.next(i))}catch(_){u(_)}},p=i=>{try{o(t.throw(i))}catch(_){u(_)}},o=i=>i.done?b(i.value):Promise.resolve(i.value).then(f,p);o((t=t.apply(e,l)).next())});import{an as k,d as H,P as K,r as v,b as w,h as Q,m as r,T as W,o as E,q as L,s as n,y as c,x as V,p as d,t as Y,a6 as ee,av as te,bX as oe,ah as le,I as ae,J as se,n as I,_ as ne}from"./index-C3-31E46.js";import{u as ie}from"./fileUpload-Lxedd9Va.js";function ve(e){return k({url:`/file/cdss/page?pageNum=${e.pageNum}&pageSize=${e.pageSize}`,method:"post",data:e})}function de(e){return k({url:"/file/cdss/save",method:"post",data:e})}function he(e){return k({url:`/file/cdss/del-${e}`,method:"get"})}const F=e=>(ae("data-v-4d3d8fee"),e=e(),se(),e),ce=F(()=>I("div",{class:"el-upload__text"},[V(" 拖拽文件到这里 或 "),I("em",null,"点击这里上传")],-1)),re=F(()=>I("div",{class:"el-upload__tip"},"仅支持EXE/ZIP格式 文件小于80MB",-1)),ue=H({name:"VersionManagementAdd",__name:"versionManagementEdit",emits:["query"],setup(e,{expose:l,emit:t}){const b=t,u=K("$baseMessage"),f=v(!1),p=v(null),o=w({description:"",fullFileRecordId:"",incrementFileRecordId:"",fileList1:[]}),i=w(JSON.parse(JSON.stringify(o))),_=w({fileList1:[{required:!0,message:"安装包不能为空",trigger:"change"}]}),h=v(""),m=v(!1);l({showEdit:s=>{m.value=!0,te(()=>{s?(h.value="编辑",Object.assign(o,s)):(h.value="添加",delete o.id)})}});const y=()=>{Object.assign(o,i),p.value.resetFields(),m.value=!1},O=()=>{p.value.validate(s=>S(this,null,function*(){if(s){if(f.value){u("安装包没有上传成功","warning","hey");return}if(h.value==="添加"){const{msg:a}=yield de(B({},o));u(a,"success","hey")}b("query"),y()}}))};function R(s){if(Number(s.size/1024/1024)>80)return u("文件不能大于80MB,请重新选择","warning","hey"),!1}function $(s){return S(this,null,function*(){if(s){f.value=!0;let{data:a}=yield ie({file:s.raw,bucketCode:"4"});f.value=!1,o.fileRecordId=a.id}})}const x=v(""),j=s=>{x.value.clearFiles();const a=s[0];a.uid=oe(),x.value.handleStart(a)};return Q(()=>{}),(s,a)=>{const q=r("el-input"),M=r("el-form-item"),D=r("upload-filled"),T=r("el-icon"),U=r("el-upload"),J=r("el-form"),C=r("el-button"),P=le,X=W("loading");return E(),L(P,{modelValue:d(m),"onUpdate:modelValue":a[2]||(a[2]=g=>ee(m)?m.value=g:null),"append-to-body":"",title:d(h),width:"800px",style:{"min-height":"400px"},onClose:y},{footer:n(()=>[c(C,{onClick:y},{default:n(()=>[V("取 消")]),_:1}),c(C,{type:"primary",onClick:O},{default:n(()=>[V("确 定")]),_:1})]),default:n(()=>[c(J,{ref_key:"formRef",ref:p,"label-width":"150px",model:d(o),rules:d(_)},{default:n(()=>[c(M,{label:"更新内容"},{default:n(()=>[c(q,{modelValue:d(o).description,"onUpdate:modelValue":a[0]||(a[0]=g=>d(o).description=g),placeholder:"请输入更新内容"},null,8,["modelValue"])]),_:1}),c(M,{label:"上传安装包",prop:"fileList1"},{default:n(()=>[Y((E(),L(U,{ref_key:"upload1",ref:x,class:"upload",drag:"",accept:".exe,.zip",action:"#","on-change":$,"before-upload":R,"auto-upload":!1,"file-list":d(o).fileList1,"onUpdate:fileList":a[1]||(a[1]=g=>d(o).fileList1=g),"on-exceed":j,limit:1},{tip:n(()=>[re]),default:n(()=>[c(T,{class:"el-icon--upload"},{default:n(()=>[c(D)]),_:1}),ce]),_:1},8,["file-list"])),[[X,d(f)]])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}}),fe=ne(ue,[["__scopeId","data-v-4d3d8fee"]]),be=Object.freeze(Object.defineProperty({__proto__:null,default:fe},Symbol.toStringTag,{value:"Module"}));export{fe as _,he as d,ve as g,be as v};
