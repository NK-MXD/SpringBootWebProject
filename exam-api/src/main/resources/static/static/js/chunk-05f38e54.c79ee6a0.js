(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05f38e54"],{1256:function(e,t,a){"use strict";a("9e9e")},2995:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}));var s=a("b775");function r(e){return Object(s["b"])("/exam/api/sys/user/update",e)}function n(e){return Object(s["b"])("/exam/api/sys/user/save",e)}},"3d0c":function(e,t,a){"use strict";a("a4c8")},"9e9e":function(e,t,a){},a4c8:function(e,t,a){},ecac:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[e.user?a("div",[a("el-row",{staticStyle:{display:"flex"},attrs:{gutter:20}},[a("el-col",{staticStyle:{"flex-grow":"1"},attrs:{span:18,xs:24}},[a("user-card",{attrs:{user:e.user}})],1),a("el-col",{staticStyle:{"flex-grow":"1"},attrs:{span:6,xs:24}},[a("el-card",[a("el-tabs",{model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[a("el-tab-pane",{attrs:{label:"修改资料",name:"account"}},[a("account",{attrs:{user:e.user}})],1)],1)],1)],1)],1)],1):e._e()])},r=[],n=(a("7f7f"),a("5530")),i=a("2f62"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{staticStyle:{"margin-bottom":"20px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("个人资料")])]),a("div",{staticClass:"user-profile"},[a("div",{staticClass:"box-center"},[a("pan-thumb",{attrs:{image:e.user.avatar,height:"100px",width:"100px",hoverable:!1}},[a("div",[e._v("欢迎")]),e._v(" "+e._s(e.user.role)+" ")])],1),a("div",{staticClass:"box-left"},[a("div",{staticClass:"user-name text-left",staticStyle:{"margin-bottom":"20px"}},[e._v("姓名："+e._s(e.user.name))]),a("div",{staticClass:"user-name text-left",staticStyle:{"margin-bottom":"20px"}},[e._v("学校："+e._s(e.user.departId))]),a("div",{staticClass:"user-name text-left",staticStyle:{"margin-bottom":"20px"}},[e._v("电话号码："+e._s(e.user.phone))]),a("div",{staticClass:"user-name text-left",staticStyle:{"margin-bottom":"20px"}},[e._v("身份证号："+e._s(e.user.chnid))])])])])},l=[],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pan-item",style:{zIndex:e.zIndex,height:e.height,width:e.width}},[a("div",{staticClass:"pan-info"},[a("div",{staticClass:"pan-info-roles-container"},[e._t("default")],2)]),a("div",{staticClass:"pan-thumb",style:{backgroundImage:"url("+e.image+")"}})])},o=[],d=(a("c5f6"),{name:"PanThumb",props:{image:{type:String,required:!0},zIndex:{type:Number,default:1},width:{type:String,default:"150px"},height:{type:String,default:"150px"}}}),p=d,h=(a("1256"),a("0c7c")),m=Object(h["a"])(p,u,o,!1,null,"799537af",null),f=m.exports,b=a("c24f"),v={components:{PanThumb:f},props:{user:{type:Object,default:function(){return{name:"",email:"",avatar:"",roles:"",departId:"",phone:"",chnid:""}}}},created:function(){this.fetchUserData()},methods:{fetchUserData:function(){var e=this,t={chnid:this.user.chnid,createTime:"",departId:this.user.departId,id:"",password:"",phone:this.user.phone,realName:"",roleIds:"",salt:"",state:0,updateTime:"",userName:"",username:this.user.name};Object(b["a"])(t).then((function(t){var a=t.data;e.user.name=a.realName,e.user.departId=a.departId,e.user.phone=a.phone,e.user.chnid=a.chnid,e.user.role=a.roleName,console.log("dsdsjidjwi"+a)})).catch((function(e){console.error(e)}))}}},x=v,g=(a("3d0c"),Object(h["a"])(x,c,l,!1,null,"26cdfc4d",null)),y=g.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",[a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{attrs:{readonly:""},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name","string"===typeof t?t.trim():t)},expression:"user.name"}})],1),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{type:"password",placeholder:"不修改请留空"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password","string"===typeof t?t.trim():t)},expression:"user.password"}})],1),a("el-form-item",{attrs:{label:"部门"}},[a("el-input",{attrs:{placeholder:"不修改请留空"},model:{value:e.user.departId,callback:function(t){e.$set(e.user,"departId","string"===typeof t?t.trim():t)},expression:"user.departId"}})],1),a("el-form-item",{attrs:{label:"手机号码"}},[a("el-input",{attrs:{placeholder:"不修改请留空"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone","string"===typeof t?t.trim():t)},expression:"user.phone"}})],1),a("el-form-item",{attrs:{label:"身份证号"}},[a("el-input",{attrs:{placeholder:"不修改请留空"},model:{value:e.user.chnid,callback:function(t){e.$set(e.user,"chnid","string"===typeof t?t.trim():t)},expression:"user.chnid"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("修改")])],1)],1)},_=[],j=a("c7eb"),I=(a("96cf"),a("1da1")),O=a("2995"),C={props:{user:{type:Object,default:function(){return{name:"",email:"",avatar:"",roles:"",password:"",departId:"",phone:"",chnid:""}}}},methods:{logout:function(){var e=Object(I["a"])(Object(j["a"])().mark((function e(){return Object(j["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("user/logout");case 2:this.$router.push("/login?redirect=".concat(this.$route.fullPath));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),submit:function(){var e=Object(I["a"])(Object(j["a"])().mark((function e(){var t=this;return Object(j["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:Object(O["b"])(this.user).then((function(){t.$notify({title:"成功",message:"用户资料保存成功！！",type:"success",duration:2e3})}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},k=C,$=Object(h["a"])(k,w,_,!1,null,null,null),S=$.exports,T={name:"Profile",components:{UserCard:y,Account:S},data:function(){return{user:{},activeTab:"account"}},computed:Object(n["a"])({},Object(i["b"])(["name","avatar","roles","departId","phone","chnid"])),created:function(){this.getUser()},methods:{getUser:function(){this.user={name:this.name,role:this.roles.join(" | "),departId:this.departId,phone:this.phone,chnid:this.chnid,email:"admin@test.com",avatar:this.avatar}}}},N=T,U=Object(h["a"])(N,s,r,!1,null,null,null);t["default"]=U.exports}}]);