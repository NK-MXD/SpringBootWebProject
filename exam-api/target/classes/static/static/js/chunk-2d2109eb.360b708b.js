(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2109eb"],{b953:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),r("el-form",{ref:"postForm",attrs:{model:e.postForm,rules:e.loginRules}},[r("el-form-item",{attrs:{prop:"userName"}},[r("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"用户名","prefix-icon":"el-icon-mobile"},model:{value:e.postForm.userName,callback:function(t){e.$set(e.postForm,"userName",t)},expression:"postForm.userName"}})],1),r("el-form-item",{attrs:{prop:"realName"}},[r("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"姓名","prefix-icon":"el-icon-user"},model:{value:e.postForm.realName,callback:function(t){e.$set(e.postForm,"realName",t)},expression:"postForm.realName"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{staticStyle:{width:"100%"},attrs:{"show-password":"",placeholder:"密码",type:"password","prefix-icon":"el-icon-lock"},model:{value:e.postForm.password,callback:function(t){e.$set(e.postForm,"password",t)},expression:"postForm.password"}})],1),r("el-form-item",[r("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleReg(t)}}},[e._v("注册")])],1)],1),r("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"flex-end"}},[r("el-link",{attrs:{type:"primary",href:"/#/login"}},[e._v("已有账号")])],1)],1)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"title-box"},[r("div",[e._v("用户注册")])])}],a=r("5530"),i=r("2f62"),l={data:function(){return{postForm:{mobile:"",password:""},loginRules:{password:[{required:!0,trigger:"blur",message:"登录密码不能为空！"}],userName:[{required:!0,trigger:"blur",message:"用户名不能为空！"}],realName:[{required:!0,trigger:"blur",message:"姓名不能为空！"}],captchaValue:[{required:!0,trigger:"blur",message:"验证码不能为空"}]},loading:!1}},computed:Object(a["a"])({},Object(i["b"])(["siteData"])),methods:{handleReg:function(){var e=this;this.$refs.postForm.validate((function(t){t&&(e.loading=!0,e.$store.dispatch("user/reg",e.postForm).then((function(){e.$router.push({path:e.redirect||"/admin/dashboard"}),e.loading=!1})).catch((function(){e.loading=!1})))}))}}},n=l,c=r("0c7c"),p=Object(c["a"])(n,o,s,!1,null,null,null);t["default"]=p.exports}}]);