import{an as t}from"./index-C3-31E46.js";function r(e){return t({url:`/system/role/list?pageNum=${e.pageNum}&pageSize=${e.pageSize}`,method:"get",params:e})}function s(e){return t({url:"/system/role/add",method:"post",data:e})}function n(e){return t({url:"/system/role/edit",method:"post",data:e})}function u(e){return t({url:"/system/role/del-ids",method:"post",data:e})}function d(e){return t({url:"/system/role/menuScope",method:"post",data:e})}function l(e){return t({url:"/system/menu/treeselect",method:"get",params:e})}function a(e){return t({url:`/system/role/${e}`,method:"get"})}function m(e){return t({url:"/system/role/dataScope",method:"post",data:e})}function i(e){return t({url:"/system/user/deptTree",method:"get",params:e})}export{n as a,i as b,m as c,s as d,l as e,d as f,a as g,u as h,r as i};
