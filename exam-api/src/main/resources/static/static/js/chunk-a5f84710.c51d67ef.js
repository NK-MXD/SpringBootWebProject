(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-a5f84710"], {
    "2a75": function (e, t, i) {
        "use strict";
        var l = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("div", [i("file-upload-local", {
                attrs: {accept: e.accept, tips: e.tips, "list-type": e.listType},
                model: {
                    value: e.fileUrl, callback: function (t) {
                        e.fileUrl = t
                    }, expression: "fileUrl"
                }
            })], 1)
        }, s = [], o = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("div", {staticClass: "content"}, [i("el-upload", {
                attrs: {
                    action: e.server,
                    accept: e.accept,
                    "before-remove": e.beforeRemove,
                    "on-remove": e.handleRemove,
                    "on-success": e.handleSuccess,
                    "on-exceed": e.handleExceed,
                    drag: "picture" !== e.listType,
                    limit: e.limit,
                    headers: e.header,
                    "file-list": e.fileList,
                    "list-type": e.listType
                }, model: {
                    value: e.fileUrl, callback: function (t) {
                        e.fileUrl = t
                    }, expression: "fileUrl"
                }
            }, ["picture" === e.listType ? i("el-button", {
                attrs: {
                    size: "small",
                    type: "primary"
                }
            }, [e._v("点击上传")]) : e._e(), "picture" !== e.listType ? i("i", {staticClass: "el-icon-upload"}) : e._e(), "picture" !== e.listType ? i("div", {staticClass: "el-upload__text"}, [e._v(" 将文件拖到此处，或 "), i("em", [e._v("点击上传")])]) : e._e(), e.tips ? i("div", {
                staticClass: "el-upload__tip",
                attrs: {slot: "tip"},
                slot: "tip"
            }, [e._v(e._s(e.tips))]) : e._e()], 1)], 1)
        }, a = [], n = (i("c5f6"), i("5f87")), r = {
            name: "FileUploadLocal",
            props: {value: String, accept: String, tips: String, listType: String, limit: {type: Number, default: 1}},
            data: function () {
                return {server: "".concat("", "/common/api/file/upload"), fileList: [], fileUrl: "", header: {}}
            },
            watch: {
                value: {
                    handler: function () {
                        this.fillValue()
                    }
                }
            },
            created: function () {
                this.fillValue(), this.header = {token: Object(n["a"])()}
            },
            methods: {
                fillValue: function () {
                    this.fileList = [], this.fileUrl = this.value, this.fileUrl && (this.fileList = [{
                        name: this.fileUrl,
                        url: this.fileUrl
                    }])
                }, handleExceed: function () {
                    this.$message.warning("每次只能上传 ".concat(this.limit, " 个文件"))
                }, beforeRemove: function () {
                    return this.$confirm("确定移除文件吗？")
                }, handleRemove: function () {
                    this.$emit("input", ""), this.fileList = []
                }, handleSuccess: function (e) {
                    if (1 === e.code) return this.$message({type: "error", message: e.msg}), void (this.fileList = []);
                    this.$emit("input", e.data.url)
                }
            }
        }, c = r, u = i("2877"), p = Object(u["a"])(c, o, a, !1, null, null, null), f = p.exports, m = {
            name: "FileUpload",
            components: {FileUploadLocal: f},
            props: {
                value: String,
                accept: {type: String, default: "*"},
                tips: String,
                listType: {type: String, default: "picture"}
            },
            data: function () {
                return {fileUrl: ""}
            },
            watch: {
                value: {
                    handler: function () {
                        this.fillValue()
                    }
                }, fileUrl: {
                    handler: function () {
                        this.$emit("input", this.fileUrl)
                    }
                }
            },
            mounted: function () {
            },
            created: function () {
                this.fillValue()
            },
            methods: {
                fillValue: function () {
                    this.fileUrl = this.value
                }
            }
        }, d = m, h = Object(u["a"])(d, l, s, !1, null, null, null);
        t["a"] = h.exports
    }, "63fe": function (e, t, i) {
        "use strict";
        i.r(t);
        var l = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("div", {staticClass: "app-container"}, [i("el-form", {
                ref: "postForm",
                attrs: {model: e.postForm, rules: e.rules, "label-position": "left", "label-width": "100px"}
            }, [i("el-card", [i("el-form-item", {attrs: {label: "系统名称"}}, [i("el-input", {
                attrs: {placeholder: "系统显示名称"},
                model: {
                    value: e.postForm.siteName, callback: function (t) {
                        e.$set(e.postForm, "siteName", t)
                    }, expression: "postForm.siteName"
                }
            })], 1), i("el-form-item", {attrs: {label: "系统LOGO"}}, [i("file-upload", {
                model: {
                    value: e.postForm.backLogo,
                    callback: function (t) {
                        e.$set(e.postForm, "backLogo", t)
                    },
                    expression: "postForm.backLogo"
                }
            })], 1), i("el-form-item", {attrs: {label: "版权信息"}}, [i("el-input", {
                attrs: {placeholder: "登录页底部版权信息"},
                model: {
                    value: e.postForm.copyRight, callback: function (t) {
                        e.$set(e.postForm, "copyRight", t)
                    }, expression: "postForm.copyRight"
                }
            })], 1), i("el-row", [i("el-button", {
                attrs: {type: "primary"},
                on: {click: e.submitForm}
            }, [e._v("保存")])], 1)], 1)], 1)], 1)
        }, s = [], o = i("83ef"), a = i("2a75"), n = {
            name: "Config", components: {FileUpload: a["a"]}, data: function () {
                return {postForm: {id: "1"}, loading: !1, rules: {}}
            }, created: function () {
                this.fetchData()
            }, methods: {
                fetchData: function () {
                    var e = this;
                    Object(o["a"])().then((function (t) {
                        e.postForm = t.data
                    }))
                }, submitForm: function () {
                    var e = this;
                    console.log(JSON.stringify(this.postForm)), this.$refs.postForm.validate((function (t) {
                        t && (e.loading = !0, e.postForm.id = "1", Object(o["b"])(e.postForm).then((function () {
                            e.$notify({title: "成功", message: "配置保存成功！", type: "success", duration: 2e3})
                        })), e.loading = !1)
                    }))
                }
            }
        }, r = n, c = i("2877"), u = Object(c["a"])(r, l, s, !1, null, "237311b0", null);
        t["default"] = u.exports
    }
}]);