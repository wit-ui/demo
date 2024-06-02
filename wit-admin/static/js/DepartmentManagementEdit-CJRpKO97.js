import{an as q,d as ve,aj as ge,b as g,r as s,a3 as Ve,m as i,o as n,q as m,s as d,y as o,x as N,p as e,c as V,F as y,A as k,z as C,a7 as Q,al as G,a6 as J,n as ye,V as ke,aC as Ce,ae as K,ai as Te,ah as he,_ as Le}from"./index-C3-31E46.js";function we(f){return q({url:"/system/dept/list",method:"get",params:f})}function Ue(f){return q({url:"/system/dept/add",method:"post",data:f})}function Ie(f){return q({url:"/system/dept/edit",method:"post",data:f})}function Fe(f){return q({url:`/system/dept/del-${f.deptId}`,method:"post"})}const Ne=["src"],qe=ve({name:"DepartmentManagementEdit",__name:"DepartmentManagementEdit",emits:["fetch-data"],setup(f,{expose:W,emit:X}){const _=ge(),Y=g({bucketCode:"1"}),A=s(`https://mock.apifox.com/m1/4593503-4242983-default/file/upload-bucket?bucketCode=${Y.bucketCode}`),D={Authorization:Ve()},S=g([{children:[],deptName:"根节点",deptId:0}]),T=s([]),h=s([]),L=s(!1),w=s(!1),Z=(r,a)=>{L.value=a.length>=1},ee=(r,a)=>{w.value=a.length>=1},l=g({parentId:"",parentCode:"",deptName:"",orderNum:"",leader:"",phone:"",email:"",status:"0",deptId:"",deptCode:"",deptType:"",admType:"",wardType:"",logo:"",qrCode:"",deptAddr:"",deptLevel:"",deptLevelType:"",remark:""}),le=r=>{r.deptId===l.parentId&&(l.parentCode=r.deptCode)},te=(r,a)=>{l.logo=`/file/preview/${r.data.id}`},ae=(r,a)=>{l.qrCode=`/file/preview/${r.data.id}`},R=r=>{},oe=(r,a,p)=>{a?ke(a)?p():p(new Error("请填写正确的手机号")):p()},de=(r,a,p)=>{a?Ce(a)?p():p(new Error("请填写正确的邮箱")):p()},E=s(null),re=g({deptType:[{required:!0,trigger:"blur",message:"请选择组织类型"}],admType:[{required:!0,trigger:"blur",message:"请选择就诊类型"}],wardType:[{required:!0,trigger:"blur",message:"请选择病区类型"}],parentId:[{required:!0,trigger:"blur",message:"请选择上级组织"}],deptName:[{required:!0,trigger:"blur",message:"请输入组织名称"}],deptCode:[{required:!0,trigger:"blur",message:"请输入组织编码"}],orderNum:[{required:!0,trigger:"blur",message:"请输入显示排序"}],phone:[{validator:oe,trigger:"blur"}],email:[{validator:de,trigger:"blur"}]}),x=s("添加组织"),v=s(!1),ue=X,U=()=>{E.value.resetFields(),delete l.qrCode,delete l.logo,v.value=!1,ue("fetch-data")},ne=()=>{E.value.validate(r=>{r&&(F.value?Ie(l).then(()=>{K.success("组织修改成功"),U()}):(delete l.deptId,Ue(l).then(()=>{K.success("组织新增成功"),U()})))})},$=s([]),pe=g({deptName:"",status:"",pageNum:1,pageSize:20}),F=s(!1),se=(r,a)=>{v.value=!0,we(pe).then(p=>{if($.value=Te(p.data,"deptId","parentId","children"),S[0].children=$.value,a==="edit"){if(x.value="编辑组织",F.value=!0,Object.assign(l,r),r.logo){let c=[{name:"1",url:r.logo}];T.value=c,L.value=T.value.length>=1}if(r.qrCode){let c=[{name:"2",url:r.qrCode}];h.value=c,w.value=h.value.length>=1}}else r&&(l.parentId=r.deptId),F.value=!1,x.value="添加组织"})},z=s(""),I=s(!1),B=r=>{z.value=r.url,I.value=!0},ie=(r,a)=>{L.value=T.value.length>=1,l.logo=""},me=(r,a)=>{w.value=h.value.length>=1,l.qrCode=""};return W({showEdit:se}),(r,a)=>{const p=i("el-option"),c=i("el-select"),u=i("el-form-item"),ce=i("el-tree-select"),b=i("el-input"),M=i("el-icon"),P=i("el-upload"),j=i("el-radio"),fe=i("el-radio-group"),be=i("el-tooltip"),_e=i("el-form"),O=i("el-button"),H=he;return n(),m(H,{modelValue:e(v),"onUpdate:modelValue":a[16]||(a[16]=t=>J(v)?v.value=t:null),title:e(x),top:"5vh","append-to-body":"",width:"600px",onClose:U,class:"department-dialog"},{footer:d(()=>[o(O,{onClick:U},{default:d(()=>[N("取 消")]),_:1}),o(O,{type:"primary",onClick:ne},{default:d(()=>[N("确 定")]),_:1})]),default:d(()=>[o(_e,{ref_key:"formRef",ref:E,model:e(l),rules:e(re),"label-width":"80px"},{default:d(()=>[o(u,{label:"组织类型",prop:"deptType"},{default:d(()=>[o(c,{modelValue:e(l).deptType,"onUpdate:modelValue":a[0]||(a[0]=t=>e(l).deptType=t),clearable:""},{default:d(()=>[(n(!0),V(y,null,k(e(_).wordbook.dept_type,t=>(n(),m(p,{key:t.dictLabel,label:t.dictLabel,value:t.dictValue},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(l).deptType=="3"?(n(),m(u,{key:0,label:"就诊类型",prop:"admType"},{default:d(()=>[o(c,{modelValue:e(l).admType,"onUpdate:modelValue":a[1]||(a[1]=t=>e(l).admType=t),clearable:""},{default:d(()=>[(n(!0),V(y,null,k(e(_).wordbook.adm_type,t=>(n(),m(p,{key:t.dictLabel,label:t.dictLabel,value:t.dictValue},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):C("",!0),e(l).deptType=="4"?(n(),m(u,{key:1,label:"病区类型",prop:"wardType"},{default:d(()=>[o(c,{modelValue:e(l).wardType,"onUpdate:modelValue":a[2]||(a[2]=t=>e(l).wardType=t),clearable:""},{default:d(()=>[(n(!0),V(y,null,k(e(_).wordbook.ward_type,t=>(n(),m(p,{key:t.dictLabel,label:t.dictLabel,value:t.dictValue},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):C("",!0),o(u,{label:"上级组织",prop:"parentId"},{default:d(()=>[o(ce,{modelValue:e(l).parentId,"onUpdate:modelValue":a[3]||(a[3]=t=>e(l).parentId=t),data:e(S),props:{value:"deptId",label:"deptName",children:"children"},"check-strictly":"",placeholder:"选择上级组织","value-key":"deptId",onNodeClick:le},null,8,["modelValue","data"])]),_:1}),o(u,{label:"组织编码",prop:"deptCode"},{default:d(()=>[o(b,{modelValue:e(l).deptCode,"onUpdate:modelValue":a[4]||(a[4]=t=>e(l).deptCode=t),clearable:""},null,8,["modelValue"])]),_:1}),o(u,{label:"组织名称",prop:"deptName"},{default:d(()=>[o(b,{modelValue:e(l).deptName,"onUpdate:modelValue":a[5]||(a[5]=t=>e(l).deptName=t),clearable:""},null,8,["modelValue"])]),_:1}),o(u,{label:"显示排序",prop:"orderNum"},{default:d(()=>[o(b,{modelValue:e(l).orderNum,"onUpdate:modelValue":a[6]||(a[6]=t=>e(l).orderNum=t),clearable:"",type:"number"},null,8,["modelValue"])]),_:1}),e(l).deptType=="1"||e(l).deptType=="2"?(n(),m(u,{key:2,label:"机构等级",prop:"deptLevel"},{default:d(()=>[o(c,{modelValue:e(l).deptLevel,"onUpdate:modelValue":a[7]||(a[7]=t=>e(l).deptLevel=t),clearable:"",style:{width:"50%"}},{default:d(()=>[(n(!0),V(y,null,k(e(_).wordbook.dept_level,t=>(n(),m(p,{key:t.dictLabel,label:t.dictLabel,value:t.dictValue},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),o(c,{modelValue:e(l).deptLevelType,"onUpdate:modelValue":a[8]||(a[8]=t=>e(l).deptLevelType=t),clearable:"",style:{width:"50%"}},{default:d(()=>[(n(!0),V(y,null,k(e(_).wordbook.dept_level_type,t=>(n(),m(p,{key:t.dictLabel,label:t.dictLabel,value:t.dictValue},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):C("",!0),e(l).deptType=="1"||e(l).deptType=="2"?(n(),m(u,{key:3,label:"Logo",prop:"logo"},{default:d(()=>[o(P,{class:Q(["avatar-uploader",{uploadHide:e(L)}]),action:e(A),headers:D,"list-type":"picture-card","on-success":te,"before-upload":R,"on-remove":ie,"file-list":e(T),"on-change":Z,"on-preview":B,limit:1},{default:d(()=>[o(M,{class:"avatar-uploader-icon"},{default:d(()=>[o(e(G))]),_:1})]),_:1},8,["action","file-list","class"])]),_:1})):C("",!0),e(l).deptType=="2"?(n(),m(u,{key:4,label:"医院二维码",prop:"qrCode"},{default:d(()=>[o(P,{class:Q(["avatar-uploader2 uploader2",{uploadHide2:e(w)}]),action:e(A),headers:D,"list-type":"picture-card","on-success":ae,"before-upload":R,"on-preview":B,"on-remove":me,"file-list":e(h),"on-change":ee,limit:1},{default:d(()=>[o(M,{class:"avatar-uploader-icon"},{default:d(()=>[o(e(G))]),_:1})]),_:1},8,["action","file-list","class"])]),_:1})):C("",!0),o(u,{label:"联系电话",prop:"phone"},{default:d(()=>[o(b,{modelValue:e(l).phone,"onUpdate:modelValue":a[9]||(a[9]=t=>e(l).phone=t),clearable:"",type:"number"},null,8,["modelValue"])]),_:1}),o(u,{label:"邮箱",prop:"email"},{default:d(()=>[o(b,{modelValue:e(l).email,"onUpdate:modelValue":a[10]||(a[10]=t=>e(l).email=t),clearable:""},null,8,["modelValue"])]),_:1}),o(u,{label:"负责人",prop:"leader"},{default:d(()=>[o(b,{modelValue:e(l).leader,"onUpdate:modelValue":a[11]||(a[11]=t=>e(l).leader=t),clearable:""},null,8,["modelValue"])]),_:1}),o(u,{label:"地址",prop:"deptAddr"},{default:d(()=>[o(b,{modelValue:e(l).deptAddr,"onUpdate:modelValue":a[12]||(a[12]=t=>e(l).deptAddr=t),clearable:""},null,8,["modelValue"])]),_:1}),o(u,{label:"组织状态",prop:"status",class:"isBack"},{default:d(()=>[o(fe,{modelValue:e(l).status,"onUpdate:modelValue":a[13]||(a[13]=t=>e(l).status=t)},{default:d(()=>[o(j,{value:"0",label:"开启"},{default:d(()=>[N("开启")]),_:1}),o(j,{value:"1",label:"停用"},{default:d(()=>[N("停用")]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(u,{label:"备注",prop:"remark"},{default:d(()=>[o(be,{class:"box-item",effect:"dark",disabled:!e(l).remark,content:e(l).remark,placement:"top"},{default:d(()=>[o(b,{modelValue:e(l).remark,"onUpdate:modelValue":a[14]||(a[14]=t=>e(l).remark=t),clearable:""},null,8,["modelValue"])]),_:1},8,["disabled","content"])]),_:1})]),_:1},8,["model","rules"]),o(H,{width:"600",title:"图片",modelValue:e(I),"onUpdate:modelValue":a[15]||(a[15]=t=>J(I)?I.value=t:null)},{default:d(()=>[ye("img",{"w-full":"",src:e(z),alt:"Preview Image",style:{width:"100%"}},null,8,Ne)]),_:1},8,["modelValue"])]),_:1},8,["modelValue","title"])}}}),Ee=Le(qe,[["__scopeId","data-v-3d2de093"]]),Ae=Object.freeze(Object.defineProperty({__proto__:null,default:Ee},Symbol.toStringTag,{value:"Module"}));export{Ae as D,Ee as _,Fe as d,we as g};
