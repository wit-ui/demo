import{d as ee,aj as te,r as o,b as ae,m as k,o as r,q as y,s,y as d,x as B,p as l,a6 as V,n as b,c as D,F as J,A as O,B as le,z as ne,aZ as oe,af as ie,ag as se,ah as re,I as de,J as ce,_ as ue}from"./index-C3-31E46.js";import{_ as pe}from"./index.vue_vue_type_style_index_0_lang-Rf1iYlx6.js";import"./ifComponent.vue_vue_type_style_index_0_lang-h1Ozx49r.js";import"./index-B93FDT35.js";import"./index.vue_vue_type_script_setup_true_lang-DLP8ok9d.js";import"./dict-Bt1K3r7e.js";const U=g=>(de("data-v-798c0aa6"),g=g(),ce(),g),me={class:"table-box"},ge=U(()=>b("span",null,null,-1)),he=U(()=>b("span",{style:{"margin-right":"8px"}},"成份类型",-1)),_e=ee({__name:"index",emits:["getData"],setup(g,{expose:E,emit:F}){const w=te(),c=o(!1),H=F,S=o(0),i=o({ingredient:""}),u=o("1"),$=ae({searchListButtons:[{label:"搜 索",isShowLoading:!0,attrs:{type:"primary"},events:{click:_}}],searchList:[{type:"input",field:"ingredient",label:"成份名称",isOutBorder:!0,options:[],attrs:{width:130,placeholder:"请选择"}}]}),x=o(null),h=o(!1),n=o([]),p=o([{field:"checkbox",width:"45",title:"",type:"checkbox",isRenderHeader:!0},{width:"50",title:"序号",type:"seq"},{field:"ingredient",title:"成名名称",minWidth:"120"},{field:"ingredientType",title:"成名类型",minWidth:"120",render:!0,isRenderHeader:!0}]),q=JSON.parse(JSON.stringify(p.value)),C=o(""),R=o([]),W=({row:e})=>{C.value=e},L=o(null);function _(){L.value.search()}const A=()=>{h.value=!0,oe(i.value).then(({data:e})=>{h.value=!1,S.value=e.total,n.value=e.records||[],n.value.forEach(t=>{t.ingredientType="",t.compatibilityType=""}),n.value.length>0&&(x.value.tableMethods("setRadioRow",n.value[0]),C.value=n.value[0])})},M=(e,t)=>{c.value=!0,t=="2"&&p.value.push({field:"compatibilityType",title:"中成药配伍类型",minWidth:"120",render:!0}),setTimeout(()=>{i.value.ingredient=e,_()})};function P(){H("getData",R.value),T()}const Z=e=>{i.value.pageNum=1,i.value.pageSize=e,_()},G=e=>{i.value.pageNum=e,_()},K=e=>{let t="",f=w.wordbook.ingredient_type.filter(v=>v.dictValue==e.ingredientType);return t=f[0]?f[0].dictLabel:"",t},T=()=>{c.value=!1,p.value.length=0,p.value.splice(0,0,...JSON.parse(JSON.stringify(q)))};function N(e){e.checked?n.value[e.rowIndex].ingredientType=u.value:n.value[e.rowIndex].ingredientType="",e.checked?n.value[e.rowIndex].compatibilityType="1":n.value[e.rowIndex].compatibilityType="",R.value=x.value.tableMethods("getCheckboxRecords")}function Q(e){n.value.forEach(t=>{t.ingredientType&&(t.ingredientType=u.value)})}return E({open:M}),(e,t)=>{const f=pe,v=k("el-option"),I=k("el-select"),X=ie,Y=se,z=k("el-button"),j=re;return r(),y(j,{modelValue:l(c),"onUpdate:modelValue":t[2]||(t[2]=a=>V(c)?c.value=a:null),"append-to-body":"",title:"添加成份",width:"850px",onClose:T},{footer:s(()=>[d(z,{onClick:T},{default:s(()=>[B("取 消")]),_:1}),d(z,{type:"primary",disabled:!l(C),onClick:P},{default:s(()=>[B("确 定")]),_:1},8,["disabled"])]),default:s(()=>[d(f,{ref_key:"searchRef",ref:L,modelValue:l(i),"onUpdate:modelValue":t[0]||(t[0]=a=>V(i)?i.value=a:null),"search-data":l($),"search-name":"select-ingredient-search",searching:l(h),border:!1,padding:!1,isCache:!1,showResult:!1,autoLoad:!1,onSearch:A},null,8,["modelValue","search-data","searching"]),b("div",me,[d(X,{ref_key:"tableRef",ref:x,"table-name":"select-ingredient-table",loading:l(h),"table-data":l(n),columns:l(p),isShowTableSet:!1,onCheckboxChange:N,onCheckboxAll:N,"radio-config":{trigger:"row"},onRadioChange:W},{checkboxHeader:s(()=>[ge]),ingredientTypeHeader:s(()=>[he,d(I,{modelValue:l(u),"onUpdate:modelValue":t[1]||(t[1]=a=>V(u)?u.value=a:null),placeholder:"请选择",style:{width:"120px"},onChange:Q},{default:s(()=>[(r(!0),D(J,null,O(l(w).wordbook.ingredient_type,a=>(r(),y(v,{key:a.id,label:a.dictLabel,value:a.dictValue},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),ingredientType:s(a=>[b("div",null,le(K(a.row)),1)]),compatibilityType:s(a=>[a.row.ingredientType?(r(),y(I,{key:0,modelValue:a.row.compatibilityType,"onUpdate:modelValue":m=>a.row.compatibilityType=m,placeholder:"请选择"},{default:s(()=>[(r(!0),D(J,null,O(l(w).wordbook.compatibility_type,m=>(r(),y(v,{key:m.id,label:m.dictLabel,value:m.dictValue},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):ne("",!0)]),_:1},8,["loading","table-data","columns"])]),d(Y,{layout:"total, sizes, prev, pager, next","current-page":l(i).pageNum,"page-size":l(i).pageSize,total:l(S),"prev-text":"上一页","next-text":"下一页",onCurrentChange:G,onSizeChange:Z},null,8,["current-page","page-size","total"])]),_:1},8,["modelValue"])}}}),Ce=ue(_e,[["__scopeId","data-v-798c0aa6"]]);export{Ce as default};
