import{an as s}from"./index-C3-31E46.js";function n(e){return s({url:`/system/operlog/list?pageNum=${e.pageNum}&pageSize=${e.pageSize}`,method:"post",data:e})}function o(e){return s({url:"/system/operlog/clean",method:"post",data:e})}function r(e){return s({url:`/system/logininfor/list?pageNum=${e.pageNum}&pageSize=${e.pageSize}`,method:"post",data:e})}function u(e){return s({url:"/system/logininfor/clean",method:"post",data:e})}export{r as a,o as c,n as g,u};
