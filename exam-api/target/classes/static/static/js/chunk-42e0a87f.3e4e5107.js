(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42e0a87f"],{"21a7":function(e,t,a){"use strict";a("9d11")},2995:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}));var s=a("b775");function r(e){return Object(s["b"])("/exam/api/sys/user/update",e)}function n(e){return Object(s["b"])("/exam/api/sys/user/save",e)}},"29fc":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[e.user?a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6,xs:24}},[a("user-card",{attrs:{user:e.user}})],1),a("el-col",{attrs:{span:24,xs:24}},[a("el-card",[a("el-tabs",{model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[a("el-tab-pane",{attrs:{label:"填写报名信息",name:"account"}},[a("account",{attrs:{user:e.user}})],1)],1)],1)],1)],1)],1):e._e()])},r=[],n=(a("7f7f"),a("5530")),i=a("2f62"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",[a("el-form-item",{attrs:{label:"真实姓名"}},[a("el-input",{attrs:{readonly:""},model:{value:e.user.realName,callback:function(t){e.$set(e.user,"realName","string"===typeof t?t.trim():t)},expression:"user.realName"}})],1),a("el-form-item",{attrs:{label:"部门"}},[a("el-input",{attrs:{placeholder:"不修改请留空"},model:{value:e.user.departId,callback:function(t){e.$set(e.user,"departId","string"===typeof t?t.trim():t)},expression:"user.departId"}})],1),a("el-form-item",{attrs:{label:"手机号码"}},[a("el-input",{attrs:{placeholder:"不修改请留空"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone","string"===typeof t?t.trim():t)},expression:"user.phone"}})],1),a("el-form-item",{attrs:{label:"身份证号"}},[a("el-input",{attrs:{placeholder:"不修改请留空"},model:{value:e.user.chnid,callback:function(t){e.$set(e.user,"chnid","string"===typeof t?t.trim():t)},expression:"user.chnid"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("报名")])],1)],1),a("el-dialog",{attrs:{visible:e.showModal,width:"50%"},on:{close:e.closeModal}},[a("div",{staticClass:"popup-content"},[a("div",{staticClass:"popup-text"},[e._v("请扫描二维码，进行支付")]),a("img",{staticClass:"popup-image",attrs:{src:e.imageUrl,alt:"弹出的图片"}})])])],1)},c=[],u=a("c7eb"),l=(a("96cf"),a("1da1")),d=a("2995"),p=a("c24f"),h={props:{user:{type:Object,default:function(){return{name:"person",email:"",avatar:"",roles:"",password:"",departId:"",phone:"",chnid:""}}}},data:function(){return{showModal:!1,imageUrl:"https://image-1305894911.cos.ap-beijing.myqcloud.com/Obsidian/202306040958010.jpg"}},created:function(){this.fetchUserData()},methods:{logout:function(){var e=Object(l["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("user/logout");case 2:this.$router.push("/login?redirect=".concat(this.$route.fullPath));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),submit:function(){var e=Object(l["a"])(Object(u["a"])().mark((function e(){var t=this;return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:Object(d["b"])(this.user).then((function(){t.$notify({title:"成功",message:"用户资料保存成功！！",type:"success",duration:2e3}),t.showModal=!0}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),closeModal:function(){this.showModal=!1,this.$notify({title:"成功",message:"报名成功！！",type:"success",duration:2e3}),this.showModal=!1},fetchUserData:function(){var e=this,t={chnid:this.user.chnid,createTime:"",departId:this.user.departId,id:"",password:"",phone:this.user.phone,realName:"",roleIds:"",salt:"",state:0,updateTime:"",userName:"",username:this.user.name};Object(p["a"])(t).then((function(a){var s=a.data;e.user.realName=s.realName,e.user.name=s.username,e.user.departId=s.departId,e.user.phone=s.phone,e.user.chnid=s.chnid,e.user.role=s.roleName,console.log("dsdsjidjwi"+s),console.log(t)})).catch((function(e){console.log(t),console.error(e)}))}}},m=h,f=(a("21a7"),a("0c7c")),b=Object(f["a"])(m,o,c,!1,null,null,null),v=b.exports,g={name:"Profile",components:{Account:v},data:function(){return{user:{},activeTab:"account"}},computed:Object(n["a"])({},Object(i["b"])(["name","avatar","roles","departId","phone","chnid"])),created:function(){this.getUser()},methods:{getUser:function(){this.user={name:this.name,role:this.roles.join(" | "),departId:this.departId,phone:this.phone,chnid:this.chnid,email:"admin@test.com",avatar:this.avatar}}}},w=g,j=Object(f["a"])(w,s,r,!1,null,null,null);t["default"]=j.exports},"9d11":function(e,t,a){}}]);