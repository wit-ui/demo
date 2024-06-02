import{an as t}from"./index-C3-31E46.js";function o(e){return t({url:`/system/icd10-info/page?pageNum=${e.pageNum}&pageSize=${e.pageSize}`,method:"post",data:e})}function n(e){return t({url:"/system/icd10-info/save",method:"put",data:e})}function u(e){return t({url:`/system/sy-base-icd10/pageByDimensions?pageNum=${e.pageNum}&pageSize=${e.pageSize}`,method:"post",data:e})}function r(e){return t({url:"/system/icd10-info/update",method:"put",data:e})}function i(e){return t({url:"/system/icd10-info/del-ids",method:"post",data:e})}function a(e){return t({url:`/system/icd10-expand/${e.generalId}/${e.bs}`,method:"get",data:e})}function c(e){return t({url:"/system/icd10-expand/put",method:"put",data:e})}function m(e){return t({url:`/system/icd10-info/cache-refresh/${e.bs}`,method:"get",data:e,timeout:0})}function p(e){return t({url:`/system/route/page?pageNum=${e.pageNum}&pageSize=${e.pageSize}`,method:"post",data:e})}function g(){return t({url:"/system/route/cache-refresh",method:"get",timeout:0})}function h(e){return t({url:`/system/gytj-base/page?pageNum=${e.pageNum}&pageSize=${e.pageSize}`,method:"post",data:e})}function l(e){return t({url:"/system/route/save",method:"post",data:e})}function d(e){return t({url:"/system/route/batchDel",method:"post",data:e})}function y(){return t({url:"/system/age-result/cache-refresh",method:"get"})}function f(e){return t({url:`/system/age-result/page?pageNum=${e.pageNum}&pageSize=${e.pageSize}`,method:"post",data:e})}function b(e){return t({url:"/system/age-result/put",method:"post",data:e})}function D(e){return t({url:"/system/age-result/del-ids",method:"post",data:e})}function S(){return t({url:"/system/special-pathology/cache-refresh",method:"get",timeout:0})}function $(e){return t({url:"/system/special-pathology/page",method:"post",data:e})}function z(e){return t({url:"/system/special-pathology/put",method:"post",data:e})}function N(e){return t({url:"/system/special-pathology/del-ids",method:"post",data:e})}function P(e){return t({url:"/system/decoction-method/page",method:"post",data:e})}function R(e){return t({url:`/system/gestation/page?pageNum=${e.pageNum}&pageSize=${e.pageSize}`,method:"post",data:e})}function B(e){return t({url:"/system/gestation/batch",method:"post",data:e})}function I(e){return t({url:"/system/decoction-method/getDict",method:"get",data:e})}function C(e){return t({url:"/system/decoction-method/save",method:"put",data:e})}function k(e){return t({url:"/system/decoction-method/update",method:"put",data:e})}function v(e){return t({url:"/system/decoction-method/del-ids",method:"delete",data:e})}function j(e){return t({url:"/system/decoction-method/refreshCache",method:"get",data:e})}function M(e){return t({url:"/system/gestation/put-batch",method:"post",data:e})}function x(e){return t({url:"/system/gestation/del-batch",method:"post",data:e})}function A(){return t({url:"/system/gestation/cache",method:"post",timeout:0})}function U(e){return t({url:"/system/syndrome-diagnosis/listSyndromeDiagnosisDict",method:"get",data:e})}function w(e){return t({url:"/system/syndrome-diagnosis/listSyndromeDiagnosis",method:"post",data:e})}function E(e){return t({url:"/system/syndrome-diagnosis/save",method:"put",data:e})}function G(e){return t({url:"/system/syndrome-diagnosis/update",method:"post",data:e})}function L(e){return t({url:"/system/syndrome-diagnosis/del-ids",method:"delete",data:e})}function q(e){return t({url:"/system/syndrome-diagnosis/refreshCache",method:"get",data:e})}function F(e){return t({url:`/system/repeated/page?pageNum=${e.pageNum}&pageSize=${e.pageSize}`,method:"post",data:e})}function H(e){return t({url:`/system/drug-ingredient/info?drugsId=${e.drugsId}`,method:"get"})}function J(e){return t({url:"/system/repeated/batch",method:"post",data:e})}function K(e){return t({url:"/system/repeated/put-batch",method:"post",data:e})}function O(e){return t({url:"/system/repeated/del-batch",method:"post",data:e})}function Q(){return t({url:"/system/repeated/cache",method:"post",timeout:0})}function T(e){return t({url:`/system/interaction/page?pageNum=${e.pageNum}&pageSize=${e.pageSize}`,method:"post",data:e})}function V(e){return t({url:"/system/interaction/batch",method:"post",data:e})}function W(e){return t({url:"/system/interaction/put-batch",method:"post",data:e})}function X(e){return t({url:"/system/interaction/del-batch",method:"post",data:e})}function Y(){return t({url:"/system/interaction/cache",method:"post",timeout:0})}function Z(e){return t({url:`/system//drugs-base/page?pageNum=${e.pageNum}&pageSize=${e.pageSize}`,method:"post",data:e})}function _(e){return t({url:`/system/compatibility/page?pageNum=${e.pageNum}&pageSize=${e.pageSize}&keyword=${e.keyword}&generalId=${e.generalId}&checkStatus=${e.checkStatus}`,method:"get",data:e})}function ee(e){return t({url:`/system/compatibility/${e.id}`,method:"get",data:e})}function te(e){return t({url:"/system/compatibility/del-batch",method:"post",data:e})}function se(e){return t({url:"/system//compatibility/put",method:"post",data:e})}function oe(e){return t({url:`/system/general-base/page?pageNum=${e.pageNum}&pageSize=${e.pageSize}`,method:"post",data:e})}function ne(e){return t({url:"/system/compatibility/update",method:"post",data:e})}function ue(e){return t({url:"/system/compatibility/refresh-cache",method:"get",data:e,timeout:0})}function re(e){return t({url:`/system/customRule/page?pageNum=${e.pageNum}&pageSize=${e.pageSize}`,method:"post",data:e})}function ie(e){return t({url:"/system/customRule/batch",method:"post",data:e})}function ae(e){return t({url:"/system/customRule/put-batch",method:"post",data:e})}function ce(e){return t({url:"/system/customRule/del-batch",method:"post",data:e})}function me(){return t({url:"/system/customRule/refreshCache",method:"get",timeout:0})}function pe(e){return t({url:`/system/customRule/${e}`,method:"get"})}function ge(e){return t({url:"/system/interaction/check",method:"post",data:e})}function he(e){return t({url:"/system/compatibility/check",method:"post",data:e})}export{N as $,v as A,k as B,j as C,C as D,R as E,M as F,x as G,B as H,_ as I,te as J,ue as K,ne as L,he as M,ee as N,oe as O,se as P,c as Q,T as R,X as S,Y as T,W as U,ge as V,V as W,Z as X,$ as Y,S as Z,z as _,pe as a,f as a0,D as a1,y as a2,b as a3,U as a4,w as a5,L as a6,q as a7,E as a8,G as a9,A as aa,re as b,ie as c,ce as d,me as e,ae as f,O as g,Q as h,K as i,J as j,H as k,p as l,d as m,g as n,l as o,h as p,o as q,F as r,a as s,i as t,m as u,r as v,u as w,n as x,I as y,P as z};
