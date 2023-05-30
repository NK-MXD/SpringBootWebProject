(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-ba8dbfe2"], {
    "0468": function (e, t, i) {
        "use strict";
        i.d(t, "b", (function () {
            return l
        })), i.d(t, "d", (function () {
            return n
        })), i.d(t, "c", (function () {
            return s
        })), i.d(t, "a", (function () {
            return r
        }));
        var a = i("b775");

        function l(e) {
            return Object(a["b"])("/exam/api/repo/detail", e)
        }

        function n(e) {
            return Object(a["b"])("/exam/api/repo/save", e)
        }

        function s(e) {
            return Object(a["b"])("/exam/api/repo/paging", e)
        }

        function r(e) {
            return Object(a["b"])("/exam/api/repo/batch-action", e)
        }
    }, "2a75": function (e, t, i) {
        "use strict";
        var a = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("div", [i("file-upload-local", {
                attrs: {accept: e.accept, tips: e.tips, "list-type": e.listType},
                model: {
                    value: e.fileUrl, callback: function (t) {
                        e.fileUrl = t
                    }, expression: "fileUrl"
                }
            })], 1)
        }, l = [], n = function () {
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
        }, s = [], r = (i("c5f6"), i("5f87")), o = {
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
                this.fillValue(), this.header = {token: Object(r["a"])()}
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
        }, u = o, c = i("2877"), p = Object(c["a"])(u, n, s, !1, null, null, null), m = p.exports, f = {
            name: "FileUpload",
            components: {FileUploadLocal: m},
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
        }, d = f, h = Object(c["a"])(d, a, l, !1, null, null, null);
        t["a"] = h.exports
    }, "4a02": function (e, t, i) {
        "use strict";
        var a = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("el-select", {
                staticClass: "filter-item",
                attrs: {
                    multiple: e.multi,
                    "remote-method": e.fetchData,
                    filterable: "",
                    remote: "",
                    "reserve-keyword": "",
                    clearable: "",
                    "automatic-dropdown": "",
                    placeholder: "选择或搜索题库"
                },
                on: {change: e.handlerChange},
                model: {
                    value: e.currentValue, callback: function (t) {
                        e.currentValue = t
                    }, expression: "currentValue"
                }
            }, e._l(e.dataList, (function (e) {
                return i("el-option", {key: e.id, attrs: {label: e.title, value: e.id}})
            })), 1)
        }, l = [], n = (i("7514"), i("0468")), s = {
            name: "RepoSelect",
            props: {multi: {type: Boolean, default: !1}, value: String, excludes: Array},
            data: function () {
                return {dataList: [], currentValue: []}
            },
            watch: {
                value: {
                    handler: function () {
                        this.currentValue = this.value
                    }
                }
            },
            created: function () {
                this.currentValue = this.value, this.fetchData()
            },
            methods: {
                fetchData: function (e) {
                    var t = this;
                    Object(n["c"])({
                        current: 1,
                        size: 1e3,
                        params: {title: e, excludes: this.excludes}
                    }).then((function (e) {
                        t.dataList = e.data.records
                    }))
                }, handlerChange: function (e) {
                    var t = this.dataList.find((function (t) {
                        return t.id === e
                    }));
                    this.$emit("change", t), this.$emit("input", e)
                }
            }
        }, r = s, o = i("2877"), u = Object(o["a"])(r, a, l, !1, null, null, null);
        t["a"] = u.exports
    }, 7514: function (e, t, i) {
        "use strict";
        var a = i("5ca1"), l = i("0a49")(5), n = "find", s = !0;
        n in [] && Array(1)[n]((function () {
            s = !1
        })), a(a.P + a.F * s, "Array", {
            find: function (e) {
                return l(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), i("9c6c")(n)
    }, d5b7: function (e, t, i) {
        "use strict";
        i.r(t);
        var a = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("div", {staticClass: "app-container"}, [i("el-form", {
                ref: "postForm",
                attrs: {model: e.postForm, rules: e.rules, "label-position": "left", "label-width": "150px"}
            }, [i("el-card", [i("el-form-item", {
                attrs: {
                    label: "题目类型 ",
                    prop: "quType"
                }
            }, [i("el-select", {
                staticClass: "filter-item",
                attrs: {disabled: e.quTypeDisabled},
                on: {change: e.handleTypeChange},
                model: {
                    value: e.postForm.quType, callback: function (t) {
                        e.$set(e.postForm, "quType", t)
                    }, expression: "postForm.quType"
                }
            }, e._l(e.quTypes, (function (e) {
                return i("el-option", {key: e.value, attrs: {label: e.label, value: e.value}})
            })), 1)], 1), i("el-form-item", {
                attrs: {
                    label: "难度等级 ",
                    prop: "level"
                }
            }, [i("el-select", {
                staticClass: "filter-item", model: {
                    value: e.postForm.level, callback: function (t) {
                        e.$set(e.postForm, "level", t)
                    }, expression: "postForm.level"
                }
            }, e._l(e.levels, (function (e) {
                return i("el-option", {key: e.value, attrs: {label: e.label, value: e.value}})
            })), 1)], 1), i("el-form-item", {
                attrs: {
                    label: "归属题库",
                    prop: "repoIds"
                }
            }, [i("repo-select", {
                attrs: {multi: !0}, model: {
                    value: e.postForm.repoIds, callback: function (t) {
                        e.$set(e.postForm, "repoIds", t)
                    }, expression: "postForm.repoIds"
                }
            })], 1), i("el-form-item", {
                attrs: {
                    label: "题目内容",
                    prop: "content"
                }
            }, [i("el-input", {
                attrs: {type: "textarea"}, model: {
                    value: e.postForm.content, callback: function (t) {
                        e.$set(e.postForm, "content", t)
                    }, expression: "postForm.content"
                }
            })], 1), i("el-form-item", {attrs: {label: "试题图片"}}, [i("file-upload", {
                model: {
                    value: e.postForm.image,
                    callback: function (t) {
                        e.$set(e.postForm, "image", t)
                    },
                    expression: "postForm.image"
                }
            })], 1), i("el-form-item", {attrs: {label: "整题解析", prop: "oriPrice"}}, [i("el-input", {
                attrs: {
                    precision: 1,
                    max: 999999,
                    type: "textarea"
                }, model: {
                    value: e.postForm.analysis, callback: function (t) {
                        e.$set(e.postForm, "analysis", t)
                    }, expression: "postForm.analysis"
                }
            })], 1)], 1), 4 !== e.postForm.quType ? i("div", {
                staticClass: "filter-container",
                staticStyle: {"margin-top": "25px"}
            }, [i("el-button", {
                staticClass: "filter-item",
                attrs: {type: "primary", icon: "el-icon-plus", size: "small", plain: ""},
                on: {click: e.handleAdd}
            }, [e._v(" 添加 ")]), i("el-table", {
                staticStyle: {width: "100%"},
                attrs: {data: e.postForm.answerList, border: !0}
            }, [i("el-table-column", {
                attrs: {label: "是否答案", width: "120", align: "center"},
                scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        return [i("el-checkbox", {
                            model: {
                                value: t.row.isRight, callback: function (i) {
                                    e.$set(t.row, "isRight", i)
                                }, expression: "scope.row.isRight"
                            }
                        }, [e._v("答案")])]
                    }
                }], null, !1, 1650073960)
            }), e.itemImage ? i("el-table-column", {
                attrs: {label: "选项图片", width: "120px", align: "center"},
                scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        return [i("file-upload", {
                            model: {
                                value: t.row.image, callback: function (i) {
                                    e.$set(t.row, "image", i)
                                }, expression: "scope.row.image"
                            }
                        })]
                    }
                }], null, !1, 2486182644)
            }) : e._e(), i("el-table-column", {
                attrs: {label: "答案内容"},
                scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        return [i("el-input", {
                            attrs: {type: "textarea"},
                            model: {
                                value: t.row.content, callback: function (i) {
                                    e.$set(t.row, "content", i)
                                }, expression: "scope.row.content"
                            }
                        })]
                    }
                }], null, !1, 924406712)
            }), i("el-table-column", {
                attrs: {label: "答案解析"}, scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        return [i("el-input", {
                            attrs: {type: "textarea"},
                            model: {
                                value: t.row.analysis, callback: function (i) {
                                    e.$set(t.row, "analysis", i)
                                }, expression: "scope.row.analysis"
                            }
                        })]
                    }
                }], null, !1, 3792987939)
            }), i("el-table-column", {
                attrs: {label: "操作", align: "center", width: "100px"},
                scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        return [i("el-button", {
                            attrs: {type: "danger", icon: "el-icon-delete", circle: ""},
                            on: {
                                click: function (i) {
                                    return e.removeItem(t.$index)
                                }
                            }
                        })]
                    }
                }], null, !1, 1518468532)
            })], 1)], 1) : e._e(), i("div", {staticStyle: {"margin-top": "20px"}}, [i("el-button", {
                attrs: {type: "primary"},
                on: {click: e.submitForm}
            }, [e._v("保存")]), i("el-button", {
                attrs: {type: "info"},
                on: {click: e.onCancel}
            }, [e._v("返回")])], 1)], 1)], 1)
        }, l = [], n = (i("ac6a"), i("f4bc")), s = i("4a02"), r = i("2a75"), o = {
            name: "QuDetail", components: {FileUpload: r["a"], RepoSelect: s["a"]}, data: function () {
                return {
                    quTypeDisabled: !1,
                    itemImage: !0,
                    levels: [{value: 1, label: "普通"}, {value: 2, label: "较难"}],
                    quTypes: [{value: 1, label: "单选题"}, {value: 2, label: "多选题"}, {value: 3, label: "判断题"}],
                    postForm: {repoIds: [], tagList: [], answerList: []},
                    rules: {
                        content: [{required: !0, message: "题目内容不能为空！"}],
                        quType: [{required: !0, message: "题目类型不能为空！"}],
                        level: [{required: !0, message: "必须选择难度等级！"}],
                        repoIds: [{required: !0, message: "至少要选择一个题库！"}]
                    }
                }
            }, created: function () {
                var e = this.$route.params.id;
                "undefined" !== typeof e && (this.quTypeDisabled = !0, this.fetchData(e))
            }, methods: {
                handleTypeChange: function (e) {
                    this.postForm.answerList = [], 3 === e && (this.postForm.answerList.push({
                        isRight: !0,
                        content: "正确",
                        analysis: ""
                    }), this.postForm.answerList.push({
                        isRight: !1,
                        content: "错误",
                        analysis: ""
                    })), 1 !== e && 2 !== e || (this.postForm.answerList.push({
                        isRight: !1,
                        content: "",
                        analysis: ""
                    }), this.postForm.answerList.push({
                        isRight: !1,
                        content: "",
                        analysis: ""
                    }), this.postForm.answerList.push({
                        isRight: !1,
                        content: "",
                        analysis: ""
                    }), this.postForm.answerList.push({isRight: !1, content: "", analysis: ""}))
                }, handleAdd: function () {
                    this.postForm.answerList.push({isRight: !1, content: "", analysis: ""})
                }, removeItem: function (e) {
                    this.postForm.answerList.splice(e, 1)
                }, fetchData: function (e) {
                    var t = this;
                    Object(n["b"])(e).then((function (e) {
                        t.postForm = e.data
                    }))
                }, submitForm: function () {
                    var e = this;
                    console.log(JSON.stringify(this.postForm));
                    var t = 0;
                    this.postForm.answerList.forEach((function (e) {
                        e.isRight && (t += 1)
                    })), 1 !== this.postForm.quType || 1 === t ? 2 === this.postForm.quType && t < 2 ? this.$message({
                        message: "多选题至少要有两个正确答案！",
                        type: "warning"
                    }) : 3 !== this.postForm.quType || 1 === t ? this.$refs.postForm.validate((function (t) {
                        t && Object(n["e"])(e.postForm).then((function (t) {
                            e.postForm = t.data, e.$notify({
                                title: "成功",
                                message: "试题保存成功！",
                                type: "success",
                                duration: 2e3
                            }), e.$router.push({name: "ListQu"})
                        }))
                    })) : this.$message({
                        message: "判断题只能有一个正确项！",
                        type: "warning"
                    }) : this.$message({message: "单选题答案只能有一个", type: "warning"})
                }, onCancel: function () {
                    this.$router.push({name: "ListQu"})
                }
            }
        }, u = o, c = i("2877"), p = Object(c["a"])(u, a, l, !1, null, "1527f12d", null);
        t["default"] = p.exports
    }, f4bc: function (e, t, i) {
        "use strict";
        i.d(t, "b", (function () {
            return l
        })), i.d(t, "e", (function () {
            return n
        })), i.d(t, "a", (function () {
            return s
        })), i.d(t, "d", (function () {
            return r
        })), i.d(t, "c", (function () {
            return o
        }));
        var a = i("b775");

        function l(e) {
            return Object(a["b"])("/exam/api/qu/qu/detail", {id: e})
        }

        function n(e) {
            return Object(a["b"])("/exam/api/qu/qu/save", e)
        }

        function s(e) {
            return Object(a["a"])("/exam/api/qu/qu/export", e, "导出的数据.xlsx")
        }

        function r() {
            return Object(a["a"])("/exam/api/qu/qu/import/template", {}, "qu-import-template.xlsx")
        }

        function o(e) {
            return Object(a["c"])("/exam/api/qu/qu/import", e)
        }
    }
}]);