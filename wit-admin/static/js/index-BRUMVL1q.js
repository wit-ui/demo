var P=(n,t,r)=>new Promise((s,l)=>{var d=a=>{try{m(r.next(a))}catch(o){l(o)}},f=a=>{try{m(r.throw(a))}catch(o){l(o)}},m=a=>a.done?s(a.value):Promise.resolve(a.value).then(d,f);m((r=r.apply(n,t)).next())});import J from"./index-nc088U4r.js";import{an as B,d as Q,aj as A,r as C,P as G,m as S,o as y,q as T,s as x,n as i,p as e,b9 as V,c as W,B as w,z as I,y as u,a7 as U,a6 as $,x as q,bL as K,H as X,I as Y,J as Z,_ as ee}from"./index-C3-31E46.js";import"./style-Cm3xdryd.js";import"./fileUpload-Lxedd9Va.js";function te(n){return B({url:"/system/blackbox-warning/select",method:"POST",data:n})}function se(n){return B({url:"/system/blackbox-warning/put",method:"post",data:n})}function ae(){return B({url:"/system/blackbox-warning/refreshCache",method:"get"})}const z=n=>(Y("data-v-fc4c2d59"),n=n(),Z(),n),ne={class:"flex justify-between align-center"},oe=z(()=>i("div",{class:"title"},"黑框警示",-1)),ce={class:"header-action-icon"},le={key:0},ie={class:"flex up-center"},re=z(()=>i("div",{class:"label"},"黑框警示：",-1)),ue={class:"mt8"},de={class:"common-attention"},me={class:"mt8"},he={key:0,class:"mt8"},pe=Q({__name:"index",props:{ruleForm:{type:Object,default:()=>{}}},setup(n){const t=A(),{refreshCheckStatus:r}=t,s=C("rule_black_box_warning"),l=n,d=G("$baseMessage"),f=C(!1),m=C(""),a=C("0"),o=C(""),F=()=>{te({generalId:l.ruleForm.id}).then(({data:c})=>{c&&(m.value=c.id,o.value=c.remarks,a.value=c.isWarning)})};F();const E=()=>{if(!o.value)return d("请填写内容","warning","hey");se({id:m.value,generalId:l.ruleForm.id,remarks:o.value,isWarning:a.value}).then(({msg:c})=>{d(c,"success","hey"),F()})};function L(){var p;const h={checkStatus:((p=t.ruleCheckStatus.get(s.value))==null?void 0:p.checkStatus)==="1"?"0":"1",dimensionCode:s.value,refId:l.ruleForm.id};K(h).then(({msg:b})=>{r(l.ruleForm.id),d(b,"success","hey")}).catch(()=>{r(l.ruleForm.id)})}function M(){return P(this,null,function*(){f.value=!0;const{msg:c}=yield ae();f.value=!1,d(c,"success","hey")})}return(c,h)=>{const p=X,b=S("el-tooltip"),O=S("el-switch"),R=J,D=S("el-button"),H=S("el-card");return y(),T(H,{class:"main-point-tips flex-all"},{header:x(()=>{var k,g,v,_,N;return[i("div",ne,[oe,i("div",ce,[e(V)("editor")&&((k=e(t).ruleCheckStatus.get(e(s)))==null?void 0:k.checkStatus)==="1"?(y(),W("span",le,w(((g=e(t).ruleCheckStatus.get(e(s)))==null?void 0:g.checkName)||((v=e(t).ruleCheckStatus.get(e(s)))==null?void 0:v.checkBy))+"/"+w((_=e(t).ruleCheckStatus.get(e(s)))==null?void 0:_.checkTime),1)):I("",!0),e(V)("editor")?(y(),T(b,{key:1,class:"box-item",effect:"dark",content:((N=e(t).ruleCheckStatus.get(e(s)))==null?void 0:N.checkStatus)==="1"?"取消检查":"检查",placement:"top"},{default:x(()=>{var j;return[u(p,{icon:"icon-jiancha",class:U(["refresh-icon",{active:((j=e(t).ruleCheckStatus.get(e(s)))==null?void 0:j.checkStatus)==="1"}]),onClick:L,style:{padding:"4px 5px 3px"}},null,8,["class"])]}),_:1},8,["content"])):I("",!0),u(b,{class:"box-item",effect:"dark",content:"刷新缓存",placement:"top"},{default:x(()=>[u(p,{icon:"icon-gengxin",class:U({"refresh-icon":!0,"loading-animation":e(f)}),onClick:M,style:{padding:"4px"}},null,8,["class"])]),_:1})])])]}),default:x(()=>{var k,g,v;return[i("div",ie,[re,u(O,{modelValue:e(a),"onUpdate:modelValue":h[0]||(h[0]=_=>$(a)?a.value=_:null),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),u(R,{modelValue:e(o),"onUpdate:modelValue":h[1]||(h[1]=_=>$(o)?o.value=_:null),isPic:!1},null,8,["modelValue"]),i("div",ue,[i("span",de,[u(p,{icon:"icon-xintishi"}),q(" 说明：黑框警示源于《化学药品和生物制品说明书规范细则》(国食药监注[2006]202号)的规定 ")])]),i("div",me,[u(D,{type:"primary",onClick:E},{default:x(()=>[q("保存")]),_:1})]),e(V)("editor")&&((k=e(t).ruleCheckStatus.get(e(s)))==null?void 0:k.checkStatus)==="1"?(y(),W("div",he,w((g=e(t).ruleCheckStatus.get(e(s)))==null?void 0:g.updateName)+" / "+w((v=e(t).ruleCheckStatus.get(e(s)))==null?void 0:v.updateTime),1)):I("",!0)]}),_:1})}}}),Ce=ee(pe,[["__scopeId","data-v-fc4c2d59"]]);export{Ce as default};
