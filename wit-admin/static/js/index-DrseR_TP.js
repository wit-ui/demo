var w=(V,F,f)=>new Promise((x,h)=>{var C=g=>{try{z(f.next(g))}catch(M){h(M)}},k=g=>{try{z(f.throw(g))}catch(M){h(M)}},z=g=>g.done?x(g.value):Promise.resolve(g.value).then(C,k);z((f=f.apply(V,F)).next())});import{d as Me,P as oe,aj as Ee,r as d,a3 as Ie,b as A,a0 as $e,ae as p,av as Te,m as _,o as I,c as T,n as s,y as a,s as l,p as n,a6 as H,am as He,B as R,q as Ue,x as y,z as le,C as S,aa as se,H as We,af as Ae,ag as Oe,bz as je,I as Qe,J as qe,_ as Pe}from"./index-C3-31E46.js";import Je from"./index-DOUSHACR.js";import{_ as Ke}from"./index.vue_vue_type_style_index_0_lang-Rf1iYlx6.js";import{h as Ge,d as Xe,a as Ye,b as Ze,c as et,e as tt,f as at,g as ot}from"./drugTools-enEaZ9F1.js";import{g as ne,e as re}from"./downLoad-qOqri88J.js";import"./ifComponent.vue_vue_type_style_index_0_lang-h1Ozx49r.js";import"./index-B93FDT35.js";import"./index.vue_vue_type_script_setup_true_lang-DLP8ok9d.js";import"./dict-Bt1K3r7e.js";const u=V=>(Qe("data-v-e84994ec"),V=V(),qe(),V),lt={class:"drug-matching-page auto-height-container"},st={class:"btn-wrap flex"},nt=u(()=>s("span",null,"导入药品",-1)),rt=u(()=>s("span",null,"自动匹配",-1)),it=u(()=>s("span",null,"导入新增药品",-1)),dt=u(()=>s("span",null,"新增药品自动匹配",-1)),ct=u(()=>s("span",null,"下载模板",-1)),ut=u(()=>s("span",null,"刷新缓存",-1)),pt={class:"top-drug-card-body flex-all flex-column"},ht={class:"search-table-total"},gt={class:"flex-all padding-horizontal"},mt=u(()=>s("span",null,"折叠",-1)),ft={class:"flex"},_t={class:"flex"},vt={class:"flex"},bt={class:"flex"},wt={class:"flex"},yt={class:"flex"},Ct={class:"flex"},kt=u(()=>s("span",null,"药品名称",-1)),xt=["onClick"],Nt=u(()=>s("span",null,"商品名",-1)),Dt=u(()=>s("span",null,"批准文号",-1)),St={class:"bottom-card"},Vt=u(()=>s("div",{class:"left"},null,-1)),Lt={class:"center"},Bt=u(()=>s("div",{class:"right"},null,-1)),Rt=u(()=>s("div",{class:"left"},null,-1)),Ft={class:"center"},zt=u(()=>s("div",{class:"right"},null,-1)),Mt={key:2,class:"bottom-drug-card-body flex-column"},Et=u(()=>s("div",{class:"search-table-total"},"对应药品库信息",-1)),It={class:"flex-all padding-horizontal"},$t=["onClick"],Tt=Me({__name:"index",setup(V){const F=oe("$baseMessage"),f=Ee(),x=d(!1),h=d(!1),C=d(!1),k=d([]),z=d([{field:"expand",type:"expand",width:50,isRenderHeader:!0,isExpand:!0},{field:"isError",title:"是否有误",width:80,render:!0},{type:"seq",title:"序号",width:50},{field:"drugCode",title:"药品代码",minWidth:"120"},{field:"drugName",title:"药品名称",minWidth:"120",isRenderHeader:!0,render:!0},{field:"productName",title:"商品名",minWidth:"120",isRenderHeader:!0},{field:"approvalNo",title:"批准文号",minWidth:"120",isRenderHeader:!0},{field:"spec",title:"规格",width:"100"},{field:"dosageUom",title:"单位",width:"60"},{field:"dosageForm",title:"剂型",width:"60",render:!0},{field:"manufacture",title:"厂家",minWidth:"120"},{field:"medicareCode",title:"国家医保药品编码",minWidth:"140"},{field:"errorReason",title:"有误原因",minWidth:"140",render:!0},{field:"drugClassFlag",title:"药品类型",width:"82",render:!0},{field:"btns",title:"操作",align:"center",width:"100",fixed:"right",render:!0}]),g=d([]),M=d([{field:"id",title:"ID",width:"80"},{field:"drugName",title:"药品名称",minWidth:"120",render:!0},{field:"approvalNo",title:"批准文号",minWidth:"120"},{field:"minSpec",title:"规格",width:"100"},{field:"approvalDate",title:"核准日期",width:"130"},{field:"revisionDate",title:"修订日期",width:"130"},{field:"manufacture",title:"厂家",minWidth:"120"},{field:"medicareCode",title:"国家医保药品编码",minWidth:"140"},{field:"productName",title:"商品名",minWidth:"120"},{field:"aliasName",title:"别名",minWidth:"120"},{field:"dosageForm",title:"剂型",width:"60",render:!0},{field:"btns",title:"操作",align:"center",width:"180",fixed:"right",render:!0}]);d([]);const $=d(!0),L=d([]),ie=d("https://mock.apifox.com/m1/4593503-4242983-default/system/his-homh-drug/import"),de=d("https://mock.apifox.com/m1/4593503-4242983-default/system/his-homh-drug/import-new"),O={updateSupport:!0},j={Authorization:Ie()},B=A({syDrugId:"",approvalNo:"",medicareCode:"",generalName:"",productName:"",drugCode:""}),r=d({isMatch:"3",drugClassFlag:["1","2","3"],pageNum:1,pageSize:10,total:0,keyword:""}),i=d({isMatch:"1",drugClassFlag:["1","2","3"],pageNum:1,pageSize:10,total:0,keyword:"",medicareCode:"",conditionType:"",conditionValue:"",searchQuick:{keyword:"",searchType:1}}),ce=[{dictLabel:"全部",dictValue:"3",dictType:"match_or_not"}].concat(f.wordbook.match_or_not),ue=A({searchListButtons:[{label:"查询",isShowLoading:!0,attrs:{type:"primary"},events:{click:v}},{label:"导 出",icon:"icon-daochu",isShowLoading:!0,attrs:{type:"primary",plain:!0},events:{click:ge}}],searchList:[{type:"radio-group",field:"isMatch",valueField:"dictValue",labelField:"dictLabel",options:ce,attrs:{class:"search-bg no-right-margin"},events:{}},{type:"checkbox-group",field:"drugClassFlag",valueField:"dictValue",labelField:"dictLabel",options:f.wordbook.drug_class_flag,attrs:{class:"search-bg last-tag"},events:{}},{type:"input",field:"keyword",label:"关键字",isOutBorder:!0,attrs:{placeholder:"请输入",width:200,clearable:!0},events:{}},{type:"select",field:"isNew",label:"药品类型",valueField:"value",labelField:"label",isOutBorder:!0,isRequired:!0,options:[{value:"",label:"全部"},{value:"0",label:"非新增"},{value:"1",label:"新增"}],attrs:{width:200,clearable:!0,collapseTags:!0},events:{}}],otherSearchList:[],rightSearchList:[],rightSearchListButtons:[]}),pe=A({searchListButtons:[{label:"查询",isShowLoading:!0,attrs:{type:"primary"},events:{click:E}}],searchList:[{type:"checkbox-group",field:"drugClassFlag",valueField:"dictValue",labelField:"dictLabel",options:f.wordbook.drug_class_flag,attrs:{class:"search-bg last-tag"},events:{}},{type:"input",field:"keyword",label:"关键字",isOutBorder:!0,attrs:{placeholder:"请输入",width:200,clearable:!0},events:{}},{type:"searchQuick",field:"searchQuick",options:[{name:"厂家",code:1},{name:"国家医保药品编码",code:2},{name:"本位码",code:3},{name:"录入员",code:4}],attrs:{width:400,placeholder:"请输入",isFetch:!1},events:{}}],otherSearchList:[],rightSearchList:[],rightSearchListButtons:[]});$e(()=>{v()});const U=d();function he(t){i.value.keyword=t,E()}function v(){return w(this,null,function*(){h.value=!0;let t=Object.assign({},r.value,{isMatch:r.value.isMatch=="3"?"":r.value.isMatch}),o=yield Ge(t);if(h.value=!1,o.resultCode!="1"){r.value.pageNum=1,r.value.total=0,k.value=[],p.error("查询失败！！");return}k.value=o.data.records,r.value.total=o.data.total,(k.value||[]).forEach((c,m)=>{c.sort=r.value.pageNum==1?m+1:(r.value.pageNum-1)*r.value.pageSize+m+1}),Te(()=>{U.value.tableMethods("setAllRowExpand",!0),U.value.tableMethods("setCurrentRow",k.value[0]),J({column:{field:"approvalNo"},row:k.value[0]})})})}function E(){return w(this,null,function*(){C.value=!0,i.value.medicareCode=JSON.stringify(B)=="{}"?"":B.medicareCode,i.value.conditionType=i.value.searchQuick.searchType||"",i.value.conditionValue=i.value.searchQuick.keyword||"";let t=yield Xe(i.value);if(C.value=!1,t.resultCode!="1"){i.value.pageNum=1,i.value.total=0,g.value=[],p.error("查询失败！！");return}g.value=t.data.records,i.value.total=t.data.total})}function ge(){h.value=!0;let t=Object.assign({},r.value,{isMatch:r.value.isMatch=="3"?"":r.value.isMatch});ne(t,"/system/his-homh-drug/export").then(o=>{const{data:c}=o;re(c,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","药品匹配.xls"),h.value=!1})}const Q=d(),me=t=>{Q.value.showInst(t.id)};function fe(t){r.value.pageNum=t,v()}function _e(t){r.value.pageNum=1,r.value.pageSize=t,v()}function ve(t){i.value.pageNum=t,E()}function be(t){i.value.pageNum=1,i.value.pageSize=t,E()}function q(){$.value=!$.value}function we(t){let o="";return f.wordbook.drug_class_flag.forEach(c=>{c.dictValue==t&&(o=c.dictLabel)}),o}function P(t){let o="";return f.wordbook.drug_dosage_flag.forEach(c=>{c.dictValue==t&&(o=c.dictLabel)}),o}function ye({row:t}){return t.syDrugId?"":"hide-expend"}function J({row:t,column:o}){let c=o.field==="generalName"?"generalName":"approvalNo";Object.assign(B,{syDrugId:"",approvalNo:"",medicareCode:"",generalName:"",productName:""},t),i.value.pageNum=1,i.value.keyword=B[c]||"",E()}const K=t=>{p.success("上传成功！！"),v()};function G(t){se.confirm(t=="drug"?"是否开始自动匹配药品":"是否开始自动匹配新增药品","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(()=>w(this,null,function*(){x.value=!0;let o=t=="drug"?yield Ye():yield Ze();if(x.value=!1,o.resultCode!=1){F("自动匹配失败！！","error","hey");return}F("自动匹配成功！！","success","hey"),v()})).catch(()=>{p({type:"info",message:"取消操作"})})}function Ce(){se.confirm("是否下载模板","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(()=>w(this,null,function*(){x.value=!0;try{ne({},"/system/his-homh-drug/template","get").then(t=>{const{data:o}=t;re(o,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","模板.xls")}),x.value=!1,p.success("下载模板成功！！")}catch(t){x.value=!1,p.error("下载模板失败！！");return}})).catch(()=>{p({type:"info",message:"取消操作"})})}function X(t){return w(this,null,function*(){if((yield et({id:t.id,isError:t.isError,errorReason:t.errorReason||""})).resultCode!=1){p({type:"error",message:"操作失败"});return}p({type:"success",message:"操作成功"})})}function ke(t){return w(this,null,function*(){h.value=!0;let o=yield tt({hisDrugCodeList:[t.drugCode]});if(h.value=!1,o.resultCode!=1){p({type:"error",message:"操作失败"});return}p({type:"success",message:"操作成功"}),r.value.pageNum=1,v()})}function xe(t){return w(this,null,function*(){C.value=!0;let o=yield at({hisDrugCodeList:[B.drugCode],syDrugId:t.id});if(C.value=!1,o.resultCode!=1){p({type:"error",message:"操作失败"});return}p({type:"success",message:"操作成功"}),r.value.pageNum=1,v()})}const Ne=oe("$baseConfirm"),W=d(!1),De=()=>{W.value=!0,Ne("是否确认刷新缓存",null,()=>w(this,null,function*(){ot(r.value).then(t=>{t.success&&F("刷新缓存成功","success","hey"),W.value=!1})}))};return(t,o)=>{const c=We,m=_("el-button"),Y=_("el-upload"),Z=Ke,N=Je,D=_("el-col"),Se=_("el-row"),Ve=_("el-checkbox"),Le=_("el-input"),Be=_("el-tooltip"),ee=Ae,te=Oe,Re=_("ArrowUp"),ae=_("el-icon"),Fe=_("ArrowDown"),ze=je;return I(),T("div",lt,[s("div",st,[a(Y,{"file-list":n(L),"onUpdate:fileList":o[0]||(o[0]=e=>H(L)?L.value=e:null),action:n(ie),data:O,headers:j,"on-success":K,class:"upload-list"},{default:l(()=>[a(m,{plain:"",type:"primary"},{default:l(()=>[a(c,{icon:"icon-daoru1"}),nt]),_:1})]),_:1},8,["file-list","action"]),a(m,{type:"primary",onClick:o[1]||(o[1]=e=>G("drug")),style:{"margin-right":"8px"}},{default:l(()=>[a(c,{icon:"icon-tiaozheng"}),rt]),_:1}),a(Y,{"file-list":n(L),"onUpdate:fileList":o[2]||(o[2]=e=>H(L)?L.value=e:null),action:n(de),data:O,headers:j,"on-success":K,class:"upload-list"},{default:l(()=>[a(m,{plain:"",type:"primary"},{default:l(()=>[a(c,{icon:"icon-daoru1"}),it]),_:1})]),_:1},8,["file-list","action"]),a(m,{type:"primary",onClick:o[3]||(o[3]=e=>G("drugNew"))},{default:l(()=>[dt]),_:1}),a(m,{plain:"",type:"primary",onClick:Ce},{default:l(()=>[a(c,{icon:"icon-xiazai"}),ct]),_:1}),a(m,{icon:n(He),plain:"",type:"primary",onClick:De,loading:n(W)},{default:l(()=>[ut]),_:1},8,["icon","loading"])]),s("div",pt,[a(Z,{ref:"refSearch",modelValue:n(r),"onUpdate:modelValue":o[4]||(o[4]=e=>H(r)?r.value=e:null),isCache:!1,showResult:!1,"search-data":n(ue),"search-name":"top-table-search ",searching:n(h),onSearch:v,class:"top-table-search table-search"},{prev:l(()=>[s("div",ht,"院内总共药品："+R(n(r).total),1)]),_:1},8,["modelValue","search-data","searching"]),s("div",gt,[a(ee,{ref_key:"tableRef",ref:U,"table-name":"drug-matching-table",loading:n(h),"table-data":n(k),columns:n(z),"row-class-name":ye,onCellClick:J,"row-config":{useKey:!0,keyField:"id",isCurrent:!0},"expand-config":{expandAll:!0}},{expandHeader:l(()=>[mt]),expandContent:l(e=>[e.row.syDrugId&&e.row.syDrugBaseVo?(I(),Ue(Se,{key:0,class:"table-expand-cell",gutter:16},{default:l(()=>[a(D,{span:6},{default:l(()=>[s("div",ft,[y(" 药品名称： "),a(N,{bold:!0,content:e.row.syDrugBaseVo.drugName||"--"},null,8,["content"])])]),_:2},1024),a(D,{span:6},{default:l(()=>[s("div",_t,[y(" 批准文号： "),a(N,{bold:!0,content:e.row.syDrugBaseVo.approvalNo||"--"},null,8,["content"])])]),_:2},1024),a(D,{span:6},{default:l(()=>[s("div",vt,[y(" 规格： "),a(N,{bold:!0,content:e.row.syDrugBaseVo.minSpec||"--"},null,8,["content"])])]),_:2},1024),a(D,{span:3},{default:l(()=>[s("div",bt,[y(" 核准日期： "),a(N,{bold:!0,content:e.row.syDrugBaseVo.approvalDate||"--"},null,8,["content"])])]),_:2},1024),a(D,{span:3},{default:l(()=>[s("div",wt,[y(" 修改日期： "),a(N,{bold:!0,content:e.row.syDrugBaseVo.revisionDate||"--"},null,8,["content"])])]),_:2},1024),a(D,{span:6},{default:l(()=>[s("div",yt,[y(" 生产企业： "),a(N,{bold:!0,content:e.row.syDrugBaseVo.manufacture||"--"},null,8,["content"])])]),_:2},1024),a(D,{span:6},{default:l(()=>[s("div",Ct,[y(" 国家医保药品编码： "),a(N,{bold:!0,content:e.row.syDrugBaseVo.medicareCode||"--"},null,8,["content"])])]),_:2},1024)]),_:2},1024)):le("",!0)]),isError:l(e=>[a(Ve,{modelValue:e.row.isError,"onUpdate:modelValue":b=>e.row.isError=b,"true-value":"1","false-value":"0",onChange:b=>X(e.row),onClick:o[5]||(o[5]=S(()=>{},["stop"]))},null,8,["modelValue","onUpdate:modelValue","onChange"])]),drugNameHeader:l(()=>[kt]),drugName:l(e=>[s("span",{class:"table-link",onClick:S(b=>he(e.row.drugName),["stop"])},R(e.row.drugName),9,xt)]),productNameHeader:l(()=>[Nt]),approvalNoHeader:l(()=>[Dt]),dosageForm:l(e=>[s("span",null,R(P(e.row.dosageForm)),1)]),errorReason:l(e=>[a(Be,{class:"box-item",effect:"dark",content:e.row.errorReason,disabled:!e.row.errorReason,placement:"bottom"},{default:l(()=>[a(Le,{modelValue:e.row.errorReason,"onUpdate:modelValue":b=>e.row.errorReason=b,disabled:e.row.isError!=1,onBlur:S(b=>X(e.row),["stop"]),onClick:o[6]||(o[6]=S(()=>{},["stop"]))},null,8,["modelValue","onUpdate:modelValue","disabled","onBlur"])]),_:2},1032,["content","disabled"])]),drugClassFlag:l(e=>[s("span",null,R(we(e.row.drugClassFlag)),1)]),btns:l(e=>[a(m,{text:"",type:"primary",disabled:!e.row.syDrugId,onClick:S(b=>ke(e.row),["stop"])},{default:l(()=>[y(" 取消对应 ")]),_:2},1032,["disabled","onClick"])]),_:1},8,["loading","table-data","columns"])]),a(te,{"current-page":n(r).pageNum,"page-size":n(r).pageSize,total:n(r).total,onCurrentChange:fe,onSizeChange:_e},null,8,["current-page","page-size","total"])]),s("div",St,[n($)?(I(),T("div",{key:1,class:"toggle-top-btn",onClick:q},[Rt,s("div",Ft,[a(ae,{style:{"font-weight":"bold"}},{default:l(()=>[a(Fe,{size:"17"})]),_:1})]),zt])):(I(),T("div",{key:0,class:"toggle-top-btn",onClick:q},[Vt,s("div",Lt,[a(ae,{style:{"font-weight":"bold"}},{default:l(()=>[a(Re,{size:"17"})]),_:1})]),Bt])),n($)?(I(),T("div",Mt,[a(Z,{ref:"refSearch1",modelValue:n(i),"onUpdate:modelValue":o[7]||(o[7]=e=>H(i)?i.value=e:null),isCache:!1,showResult:!1,"search-data":n(pe),"search-name":"bottom-table-search",searching:n(C),class:"bottom-table-search table-search"},{prev:l(()=>[Et]),_:1},8,["modelValue","search-data","searching"]),s("div",It,[a(ee,{ref:"tableRef1","table-name":"drug-matching-table",loading:n(C),"table-data":n(g),columns:n(M)},{drugName:l(e=>[s("span",{class:"table-link",onClick:S(b=>me(e.row),["stop"])},R(e.row.drugName),9,$t)]),dosageForm:l(e=>[s("span",null,R(P(e.row.dosageForm)),1)]),btns:l(e=>[a(m,{text:"",type:"primary",disabled:e.row.id===n(B).syDrugId,onClick:S(b=>xe(e.row),["stop"])},{default:l(()=>[y(" 对应 ")]),_:2},1032,["disabled","onClick"])]),_:1},8,["loading","table-data","columns"])]),a(te,{"current-page":n(i).pageNum,"page-size":n(i).pageSize,total:n(i).total,onCurrentChange:ve,onSizeChange:be},null,8,["current-page","page-size","total"])])):le("",!0)]),a(ze,{ref_key:"drugInstRef",ref:Q},null,512)])}}}),Kt=Pe(Tt,[["__scopeId","data-v-e84994ec"]]);export{Kt as default};
