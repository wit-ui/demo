import{d as J,P as L,h as P,r as a,m as z,o as R,c as T,y as o,s as r,n as t,p as l,a6 as _,x as c,e as q,H as A,I as D,J as G,_ as Q}from"./index-C3-31E46.js";import{m as W,e as X}from"./systemConfig-B-3AeBAE.js";const s=j=>(D("data-v-16a193dd"),j=j(),G(),j),Y={class:"login-management"},Z=s(()=>t("div",null,[t("span",{class:"title-left"}),t("span",{class:"card-title"},"单一登录设置")],-1)),ii={class:"contents"},ti=s(()=>t("div",{class:"left-content"},"单一登录系统：",-1)),ei={class:"right-content"},oi={class:"hint"},si={style:{"margin-right":"4px"}},li=s(()=>t("div",null,[t("span",{class:"title-left"}),t("span",{class:"card-title"},"登录验证设置")],-1)),ni={class:"contents"},ai=s(()=>t("div",{class:"left-content"},"图片验证：",-1)),_i={class:"right-content"},ci={class:"hint"},di={style:{"margin-right":"4px"}},ui={class:"contents"},ri=s(()=>t("div",{class:"left-content"},"短信验证码验证：",-1)),vi={class:"right-content"},gi={class:"hint"},hi={style:{"margin-right":"4px"}},pi=s(()=>t("span",{class:"left-text"},"短信验证码长度",-1)),mi=s(()=>t("span",{class:"hint"},"数值范围：4-12，若不设置，默认值为 4",-1)),fi=s(()=>t("span",{class:"left-text"},"短信验证码发送等待时间",-1)),wi=s(()=>t("span",{class:"hint"},"秒（数值范围 1-300,若不设置时间，默认60秒）",-1)),yi=s(()=>t("div",null,[t("span",{class:"title-left"}),t("span",{class:"card-title"},"登录失败设置")],-1)),Vi={class:"contents"},xi=s(()=>t("div",{class:"left-content"},"登录失败策略：",-1)),bi={class:"right-content"},Fi={class:"hint"},Oi={style:{"margin-right":"4px"}},ki=s(()=>t("span",{class:"left-text"},"登录失败次数",-1)),Ni={class:"hint"},Ci={style:{"margin-right":"4px"}},$i=s(()=>t("span",{class:"left-text"},"解锁登录时间",-1)),Ki={class:"hint"},Ui={style:{"margin-right":"4px"}},Si=s(()=>t("div",null,[t("span",{class:"title-left"}),t("span",{class:"card-title"},"用户超时设置")],-1)),Ii={class:"contents"},Bi=s(()=>t("div",{class:"left-content"},"超时自动锁定：",-1)),Mi={class:"right-content"},ji={class:"hint"},zi={style:{"margin-right":"4px"}},Ei=s(()=>t("span",{class:"left-text"},"用户闲置锁定时间",-1)),Hi=s(()=>t("span",{class:"hint"},"秒 数值范围：1-3600",-1)),Ji={class:"contents"},Li=s(()=>t("div",{class:"left-content"},"超时自动退出：",-1)),Pi={class:"right-content"},Ri={class:"hint"},Ti={style:{"margin-right":"4px"}},qi=s(()=>t("span",{class:"left-text"},"用户闲置退出登录时间",-1)),Ai=s(()=>t("span",{class:"hint"},"秒 数值范围：1-3600",-1)),Di=s(()=>t("div",null,[t("span",{class:"title-left"}),t("span",{class:"card-title"},"密码策略设置")],-1)),Gi={class:"contents"},Qi=s(()=>t("div",{class:"left-content"},"密码复杂度校验：",-1)),Wi={class:"right-content"},Xi={class:"hint"},Yi={style:{"margin-right":"4px"}},Zi={class:"contents"},it=s(()=>t("div",{class:"left-content"},"首次登录修改密码：",-1)),tt={class:"right-content"},et={class:"hint"},ot={style:{"margin-right":"4px"}},st=s(()=>t("span",{class:"left-text"},"账号初始默认密码",-1)),lt={class:"contents"},nt=s(()=>t("div",{class:"left-content"},"密码更新周期开关：",-1)),at={class:"right-content"},_t={class:"hint"},ct={style:{"margin-right":"4px"}},dt=s(()=>t("span",{class:"left-text"},"密码更新周期",-1)),ut=s(()=>t("span",{class:"hint"},"天 数值范围：1-999",-1)),rt={style:{"margin-right":"4px"}},vt=s(()=>t("span",{class:"left-text"},"提前提醒时间",-1)),gt=s(()=>t("span",{class:"hint"},"天 数值范围：0-999",-1)),ht=s(()=>t("div",null,[t("span",{class:"title-left"}),t("span",{class:"card-title"},"账号策略设置")],-1)),pt={class:"contents"},mt=s(()=>t("div",{class:"left-content"},"用户账号名复杂度校验：",-1)),ft={class:"right-content"},wt={class:"hint"},yt={style:{"margin-right":"4px"}},Vt={class:"contents"},xt=s(()=>t("div",{class:"left-content"},"用户账号有效期：",-1)),bt={class:"right-content"},Ft={class:"hint"},Ot={style:{"margin-right":"4px"}},kt={class:"contents"},Nt=s(()=>t("div",{class:"left-content"},"用户账号访问时间段：",-1)),Ct={class:"right-content"},$t={class:"hint"},Kt={style:{"margin-right":"4px"}},Ut=J({__name:"index",setup(j){const b=L("$baseMessage");P(()=>{W({pageNum:1,pageSize:1e3,configKey:"login"}).then(i=>{F.value=i.data.login_switch_disable_login_multi_system,h.value=i.data.login_switch_failure_policy,O.value=Number(i.data.login_switch_failure_policy_lock_time),k.value=Number(i.data.login_switch_failure_policy_num),p.value=Number(i.data.login_switch_force_update_password_advance_days),m.value=Number(i.data.login_switch_force_update_password_days),f.value=i.data.login_switch_force_update_password,v.value=i.data.login_switch_timeout_lock_logout,w.value=Number(i.data.login_switch_idle_lock_time),y.value=Number(i.data.login_switch_idle_logout_time),C.value=i.data.login_switch_image_verification_code,$.value=i.data.login_switch_password_complexity_verification,K.value=i.data.login_switch_username_complexity_verification,V.value=i.data.login_switch_sms_verification_code,U.value=Number(i.data.login_switch_sms_verification_code_length),S.value=Number(i.data.login_switch_sms_verification_code_time),I.value=i.data.login_switch_validity_period,B.value=i.data.login_switch_visit_time_period,M.value=i.data.login_switch_first_update_password,N.value=i.data.login_switch_user_init_password})});const n=E=>{let i={configKey:"",configValue:""};switch(E){case"login_switch_disable_login_multi_system":i.configKey="login_switch_disable_login_multi_system",i.configValue=F.value;break;case"login_switch_failure_policy":i.configKey="login_switch_failure_policy",i.configValue=h.value;break;case"login_switch_failure_policy_lock_time":i.configKey="login_switch_failure_policy_lock_time",i.configValue=O.value;break;case"login_switch_failure_policy_num":i.configKey="login_switch_failure_policy_num",i.configValue=k.value;break;case"login_switch_force_update_password_advance_days":if(i.configKey="login_switch_force_update_password_advance_days",i.configValue=p.value,p.value>=m.value){b("提前提醒时间天数必须小于密码更新周期天数！","error","hey");return}break;case"login_switch_force_update_password_days":if(i.configKey="login_switch_force_update_password_days",i.configValue=m.value,p.value>=m.value){b("提前提醒时间天数必须小于密码更新周期天数！","error","hey");return}break;case"login_switch_force_update_password":i.configKey="login_switch_force_update_password",i.configValue=f.value;break;case"login_switch_timeout_lock_logout":i.configKey="login_switch_timeout_lock_logout",i.configValue=v.value;break;case"login_switch_idle_lock_time":if(i.configKey="login_switch_idle_lock_time",i.configValue=w.value,w.value>=y.value){b("用户闲置锁定时间必须小于用户闲置退出时间！","error","hey");return}break;case"login_switch_idle_logout_time":if(i.configKey="login_switch_idle_logout_time",i.configValue=y.value,w.value>=y.value){b("用户闲置锁定时间必须小于用户闲置退出时间！","error","hey");return}break;case"login_switch_image_verification_code":i.configKey="login_switch_image_verification_code",i.configValue=C.value;break;case"login_switch_password_complexity_verification":i.configKey="login_switch_password_complexity_verification",i.configValue=$.value;break;case"login_switch_username_complexity_verification":i.configKey="login_switch_username_complexity_verification",i.configValue=K.value;break;case"login_switch_sms_verification_code":i.configKey="login_switch_sms_verification_code",i.configValue=V.value;break;case"login_switch_sms_verification_code_length":i.configKey="login_switch_sms_verification_code_length",i.configValue=U.value;break;case"login_switch_sms_verification_code_time":i.configKey="login_switch_sms_verification_code_time",i.configValue=S.value;break;case"login_switch_validity_period":i.configKey="login_switch_validity_period",i.configValue=I.value;break;case"login_switch_visit_time_period":i.configKey="login_switch_visit_time_period",i.configValue=B.value;break;case"login_switch_user_init_password":i.configKey="login_switch_user_init_password",i.configValue=N.value;break;case"login_switch_first_update_password":i.configKey="login_switch_first_update_password",i.configValue=M.value;break}const u=q();X(i).then(d=>{b("设置修改成功","success","hey"),u.getSystemConfig()})};a("");const F=a("ON"),h=a("ON"),O=a(2),k=a(6),p=a(7),m=a(365),f=a("OFF"),N=a("Sunya@666"),v=a("OFF"),w=a(120),y=a(120),C=a("ON"),$=a("OFF"),K=a("OFF"),V=a("OFF"),U=a(6),S=a(60),I=a("ON"),B=a("ON"),M=a("ON");return(E,i)=>{const u=z("el-switch"),d=A,x=z("el-card"),g=z("el-input-number"),H=z("el-input");return R(),T("div",Y,[o(x,{shadow:"never"},{header:r(()=>[Z]),default:r(()=>[t("div",null,[t("div",ii,[ti,t("div",ei,[o(u,{modelValue:l(F),"onUpdate:modelValue":i[0]||(i[0]=e=>_(F)?F.value=e:null),"active-value":"ON","inactive-value":"OFF",onChange:i[1]||(i[1]=e=>n("login_switch_disable_login_multi_system"))},null,8,["modelValue"]),t("span",oi,[t("span",si,[o(d,{icon:"icon-xintishi",style:{color:"#fc9f15"}})]),c(" 提示：开启后，用户账号禁止同时登录多个系统，即后登录踢出前登录。用户管理中可针对单个用户设置用户是否允许多系统登录 ")])])])])]),_:1}),o(x,{shadow:"never"},{header:r(()=>[li]),default:r(()=>[t("div",null,[t("div",ni,[ai,t("div",_i,[o(u,{modelValue:l(C),"onUpdate:modelValue":i[2]||(i[2]=e=>_(C)?C.value=e:null),"active-value":"ON","inactive-value":"OFF",onChange:i[3]||(i[3]=e=>n("login_switch_image_verification_code"))},null,8,["modelValue"]),t("span",ci,[t("span",di,[o(d,{icon:"icon-xintishi",style:{color:"#fc9f15"}})]),c(" 提示：开启后，输错1次账号和密码后，会进行图片验证（加减乘除运算验证） ")])])]),t("div",ui,[ri,t("div",vi,[t("div",null,[o(u,{modelValue:l(V),"onUpdate:modelValue":i[4]||(i[4]=e=>_(V)?V.value=e:null),"active-value":"ON","inactive-value":"OFF",onChange:i[5]||(i[5]=e=>n("login_switch_sms_verification_code"))},null,8,["modelValue"]),t("span",gi,[t("span",hi,[o(d,{icon:"icon-xintishi",style:{color:"#fc9f15"}})]),c(" 提示：开启后，会进行手机短信验证码验证 ")])]),t("div",null,[pi,o(g,{onChange:i[6]||(i[6]=e=>n("login_switch_sms_verification_code_length")),modelValue:l(U),"onUpdate:modelValue":i[7]||(i[7]=e=>_(U)?U.value=e:null),style:{width:"120px"},"controls-position":"right",min:4,max:12,disabled:l(V)=="OFF"},null,8,["modelValue","disabled"]),mi]),t("div",null,[fi,o(g,{onChange:i[8]||(i[8]=e=>n("login_switch_sms_verification_code_time")),modelValue:l(S),"onUpdate:modelValue":i[9]||(i[9]=e=>_(S)?S.value=e:null),style:{width:"120px"},"controls-position":"right",min:1,max:300,disabled:l(V)=="OFF"},null,8,["modelValue","disabled"]),wi])])])])]),_:1}),o(x,{shadow:"never"},{header:r(()=>[yi]),default:r(()=>[t("div",null,[t("div",Vi,[xi,t("div",bi,[t("div",null,[o(u,{onChange:i[10]||(i[10]=e=>n("login_switch_failure_policy")),modelValue:l(h),"onUpdate:modelValue":i[11]||(i[11]=e=>_(h)?h.value=e:null),"active-value":"ON","inactive-value":"OFF"},null,8,["modelValue"]),t("span",Fi,[t("span",Oi,[o(d,{icon:"icon-xintishi",style:{color:"#fc9f15"}})]),c(" 提示：开启后，可对登录失败次数和限制登录时间进行设置 ")])]),t("div",null,[ki,o(g,{onChange:i[12]||(i[12]=e=>n("login_switch_failure_policy_num")),modelValue:l(k),"onUpdate:modelValue":i[13]||(i[13]=e=>_(k)?k.value=e:null),style:{width:"120px"},"controls-position":"right",min:1,max:20,disabled:l(h)=="OFF"},null,8,["modelValue","disabled"]),t("span",Ni,[c(" 次 数值范围：1-20 "),t("span",Ci,[o(d,{icon:"icon-xintishi",style:{color:"#fc9f15"}})]),c(" 提示：密码连续输错设置的次数后将锁定账户限制登录 ")])]),t("div",null,[$i,o(g,{onChange:i[14]||(i[14]=e=>n("login_switch_failure_policy_lock_time")),modelValue:l(O),"onUpdate:modelValue":i[15]||(i[15]=e=>_(O)?O.value=e:null),style:{width:"120px"},"controls-position":"right",min:1,max:60,disabled:l(h)=="OFF"},null,8,["modelValue","disabled"]),t("span",Ki,[c(" 分钟 数值范围：1-60 "),t("span",Ui,[o(d,{icon:"icon-xintishi",style:{color:"#fc9f15"}})]),c(" 提示：密码连续输错设置的次数后将锁定账户限制登录，需等待该时长后才能继续登陆 ")])])])])])]),_:1}),o(x,{shadow:"never"},{header:r(()=>[Si]),default:r(()=>[t("div",null,[t("div",Ii,[Bi,t("div",Mi,[t("div",null,[o(u,{onChange:i[16]||(i[16]=e=>n("login_switch_timeout_lock_logout")),modelValue:l(v),"onUpdate:modelValue":i[17]||(i[17]=e=>_(v)?v.value=e:null),"active-value":"ON","inactive-value":"OFF"},null,8,["modelValue"]),t("span",ji,[t("span",zi,[o(d,{icon:"icon-xintishi",style:{color:"#fc9f15"}})]),c(" 提示：开启后，用户超出指定的时间无操作后，系统自动锁定；操作成功后下次登陆生效； ")])]),t("div",null,[Ei,o(g,{onChange:i[18]||(i[18]=e=>n("login_switch_idle_lock_time")),modelValue:l(w),"onUpdate:modelValue":i[19]||(i[19]=e=>_(w)?w.value=e:null),style:{width:"120px"},"controls-position":"right",min:1,max:3600},null,8,["modelValue"]),Hi])])]),t("div",Ji,[Li,t("div",Pi,[t("div",null,[o(u,{modelValue:l(v),"onUpdate:modelValue":i[20]||(i[20]=e=>_(v)?v.value=e:null),onChange:i[21]||(i[21]=e=>n("login_switch_timeout_lock_logout")),"active-value":"ON","inactive-value":"OFF"},null,8,["modelValue"]),t("span",Ri,[t("span",Ti,[o(d,{icon:"icon-xintishi",style:{color:"#fc9f15"}})]),c(" 提示：开启后，用户超出指定的时间无操作后，系统自动退出；操作成功后下次登陆生效； ")])]),t("div",null,[qi,o(g,{onChange:i[22]||(i[22]=e=>n("login_switch_idle_logout_time")),modelValue:l(y),"onUpdate:modelValue":i[23]||(i[23]=e=>_(y)?y.value=e:null),style:{width:"120px"},"controls-position":"right",min:1,max:3600},null,8,["modelValue"]),Ai])])])])]),_:1}),o(x,{shadow:"never"},{header:r(()=>[Di]),default:r(()=>[t("div",null,[t("div",Gi,[Qi,t("div",Wi,[t("div",null,[o(u,{onChange:i[24]||(i[24]=e=>n("login_switch_password_complexity_verification")),modelValue:l($),"onUpdate:modelValue":i[25]||(i[25]=e=>_($)?$.value=e:null),"active-value":"ON","inactive-value":"OFF"},null,8,["modelValue"]),t("span",Xi,[t("span",Yi,[o(d,{icon:"icon-xintishi",style:{color:"#fc9f15"}})]),c(" 提示：开启后，可对用户密码复杂度进行校验，校验规则：十位以上，数字、小写字母、大写字母和特殊符号4类中至少3类组成； 关闭后，默认密码规则为：5-20位长度限制 ")])])])]),t("div",Zi,[it,t("div",tt,[t("div",null,[o(u,{onChange:i[26]||(i[26]=e=>n("login_switch_first_update_password")),modelValue:l(M),"onUpdate:modelValue":i[27]||(i[27]=e=>_(M)?M.value=e:null),"active-value":"ON","inactive-value":"OFF"},null,8,["modelValue"]),t("span",et,[t("span",ot,[o(d,{icon:"icon-xintishi",style:{color:"#fc9f15"}})]),c(" 提示：开启后，首次登录会弹出修改密码功能 ")])]),t("div",null,[st,o(H,{type:"password","show-password":"",t:"",onChange:i[28]||(i[28]=e=>n("login_switch_user_init_password")),modelValue:l(N),"onUpdate:modelValue":i[29]||(i[29]=e=>_(N)?N.value=e:null),style:{width:"200px"},"controls-position":"right"},null,8,["modelValue"])])])]),t("div",lt,[nt,t("div",at,[o(u,{onChange:i[30]||(i[30]=e=>n("login_switch_force_update_password")),modelValue:l(f),"onUpdate:modelValue":i[31]||(i[31]=e=>_(f)?f.value=e:null),"active-value":"ON","inactive-value":"OFF"},null,8,["modelValue"]),t("span",_t,[t("span",ct,[o(d,{icon:"icon-xintishi",style:{color:"#fc9f15"}})]),c(" 提示：开启后，过了密码更新周期会弹框提示修改密码 ")]),t("div",null,[dt,o(g,{onChange:i[32]||(i[32]=e=>n("login_switch_force_update_password_days")),modelValue:l(m),"onUpdate:modelValue":i[33]||(i[33]=e=>_(m)?m.value=e:null),style:{width:"120px"},"controls-position":"right",min:1,max:999,disabled:l(f)=="OFF"},null,8,["modelValue","disabled"]),ut,t("span",rt,[o(d,{icon:"icon-xintishi",style:{color:"#fc9f15"}})]),c(" 提示：周期内密码强制修改，否则无法进入系统 ")]),t("div",null,[vt,o(g,{onChange:i[34]||(i[34]=e=>n("login_switch_force_update_password_advance_days")),modelValue:l(p),"onUpdate:modelValue":i[35]||(i[35]=e=>_(p)?p.value=e:null),style:{width:"120px"},"controls-position":"right",min:0,max:999,disabled:l(f)=="OFF"},null,8,["modelValue","disabled"]),gt])])])])]),_:1}),o(x,{shadow:"never"},{header:r(()=>[ht]),default:r(()=>[t("div",null,[t("div",pt,[mt,t("div",ft,[t("div",null,[o(u,{onChange:i[36]||(i[36]=e=>n("login_switch_username_complexity_verification")),modelValue:l(K),"onUpdate:modelValue":i[37]||(i[37]=e=>_(K)?K.value=e:null),"active-value":"ON","inactive-value":"OFF"},null,8,["modelValue"]),t("span",wt,[t("span",yt,[o(d,{icon:"icon-xintishi",style:{color:"#fc9f15"}})]),c(" 提示：开启后，可对用户账号名复杂度进行校验，校验规则：六位以上，字母或字母加数字组合 ")])])])]),t("div",Vt,[xt,t("div",bt,[t("div",null,[o(u,{onChange:i[38]||(i[38]=e=>n("login_switch_validity_period")),modelValue:l(I),"onUpdate:modelValue":i[39]||(i[39]=e=>_(I)?I.value=e:null),"active-value":"ON","inactive-value":"OFF"},null,8,["modelValue"]),t("span",Ft,[t("span",Ot,[o(d,{icon:"icon-xintishi",style:{color:"#fc9f15"}})]),c(" 提示：开启后，在用户管理中可针对个人用户进行有效期设置，到期自动禁用用户账号；关闭后，用户管理中个人用户有效期设置不生效 ")])])])]),t("div",kt,[Nt,t("div",Ct,[t("div",null,[o(u,{onChange:i[40]||(i[40]=e=>n("login_switch_visit_time_period")),modelValue:l(B),"onUpdate:modelValue":i[41]||(i[41]=e=>_(B)?B.value=e:null),"active-value":"ON","inactive-value":"OFF"},null,8,["modelValue"]),t("span",$t,[t("span",Kt,[o(d,{icon:"icon-xintishi",style:{color:"#fc9f15"}})]),c(" 提示：开启后，在用户管理中可针对个人用户进行访问时间段的设置，不在访问时间段内无法登录；关闭后，用户管理中个人用户访问时 间段设置不生效 ")])])])])])]),_:1})])}}}),Bt=Q(Ut,[["__scopeId","data-v-16a193dd"]]);export{Bt as default};
