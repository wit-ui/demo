import{an as r}from"./index-C3-31E46.js";function n(e){return r({url:`/system/allergy/page?pageNum=${e.pageNum}&pageSize=${e.pageSize}&keyword=${e.keyword}&generalId=${e.generalId}`,method:"get",data:e})}function s(e){return r({url:"/system/allergy/del-batch",method:"post",data:e})}function a(e){return r({url:"/system/allergy/put",method:"post",data:e})}function g(e){return r({url:`/system/sy-base-ingredient/page?pageNum=${e.pageNum}&pageSize=${e.pageSize}`,method:"post",data:e})}function u(e){return r({url:"/system/drug-ingredient/info",method:"get",params:e})}function l(e){return r({url:"/system/allergy/refresh-cache",method:"get",params:{},timeout:0})}export{n as a,s as b,a as c,l as g,u as i,g as s};
