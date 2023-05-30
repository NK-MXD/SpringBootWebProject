(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-403a4f94"], {
    "0468": function (t, e, o) {
        "use strict";
        o.d(e, "b", (function () {
            return a
        })), o.d(e, "d", (function () {
            return n
        })), o.d(e, "c", (function () {
            return i
        })), o.d(e, "a", (function () {
            return l
        }));
        var r = o("b775");

        function a(t) {
            return Object(r["b"])("/exam/api/repo/detail", t)
        }

        function n(t) {
            return Object(r["b"])("/exam/api/repo/save", t)
        }

        function i(t) {
            return Object(r["b"])("/exam/api/repo/paging", t)
        }

        function l(t) {
            return Object(r["b"])("/exam/api/repo/batch-action", t)
        }
    }, "4a02": function (t, e, o) {
        "use strict";
        var r = function () {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("el-select", {
                staticClass: "filter-item",
                attrs: {
                    multiple: t.multi,
                    "remote-method": t.fetchData,
                    filterable: "",
                    remote: "",
                    "reserve-keyword": "",
                    clearable: "",
                    "automatic-dropdown": "",
                    placeholder: "选择或搜索题库"
                },
                on: {change: t.handlerChange},
                model: {
                    value: t.currentValue, callback: function (e) {
                        t.currentValue = e
                    }, expression: "currentValue"
                }
            }, t._l(t.dataList, (function (t) {
                return o("el-option", {key: t.id, attrs: {label: t.title, value: t.id}})
            })), 1)
        }, a = [], n = (o("7514"), o("0468")), i = {
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
                fetchData: function (t) {
                    var e = this;
                    Object(n["c"])({
                        current: 1,
                        size: 1e3,
                        params: {title: t, excludes: this.excludes}
                    }).then((function (t) {
                        e.dataList = t.data.records
                    }))
                }, handlerChange: function (t) {
                    var e = this.dataList.find((function (e) {
                        return e.id === t
                    }));
                    this.$emit("change", e), this.$emit("input", t)
                }
            }
        }, l = i, s = o("2877"), u = Object(s["a"])(l, r, a, !1, null, null, null);
        e["a"] = u.exports
    }, "4ee14": function (t, e, o) {
        "use strict";
        o.r(e);
        var r = function () {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("div", {staticClass: "app-container"}, [o("h3", [t._v("组卷信息")]), o("el-card", {staticStyle: {"margin-top": "20px"}}, [o("div", {
                staticStyle: {
                    float: "right",
                    "font-weight": "bold",
                    color: "#ff0000"
                }
            }, [t._v("试卷总分：" + t._s(t.postForm.totalScore) + "分")]), o("div", [o("el-button", {
                staticClass: "filter-item",
                attrs: {size: "small", type: "primary", icon: "el-icon-plus"},
                on: {click: t.handleAdd}
            }, [t._v(" 添加题库 ")]), o("el-table", {
                staticStyle: {width: "100%", "margin-top": "15px"},
                attrs: {data: t.repoList, border: !1, "empty-text": "请点击上面的`添加题库`进行设置"}
            }, [o("el-table-column", {
                attrs: {label: "题库", width: "200"},
                scopedSlots: t._u([{
                    key: "default", fn: function (e) {
                        return [o("repo-select", {
                            attrs: {multi: !1, excludes: t.excludes}, on: {
                                change: function (o) {
                                    return t.repoChange(o, e.row)
                                }
                            }, model: {
                                value: e.row.repoId, callback: function (o) {
                                    t.$set(e.row, "repoId", o)
                                }, expression: "scope.row.repoId"
                            }
                        })]
                    }
                }])
            }), o("el-table-column", {
                attrs: {label: "单选数量", align: "center"},
                scopedSlots: t._u([{
                    key: "default", fn: function (e) {
                        return [o("el-input-number", {
                            staticStyle: {width: "100px"},
                            attrs: {min: 0, max: e.row.totalRadio, controls: !1},
                            model: {
                                value: e.row.radioCount, callback: function (o) {
                                    t.$set(e.row, "radioCount", o)
                                }, expression: "scope.row.radioCount"
                            }
                        }), t._v(" / " + t._s(e.row.totalRadio) + " ")]
                    }
                }])
            }), o("el-table-column", {
                attrs: {label: "单选分数", align: "center"},
                scopedSlots: t._u([{
                    key: "default", fn: function (e) {
                        return [o("el-input-number", {
                            staticStyle: {width: "100%"},
                            attrs: {min: 0, controls: !1},
                            model: {
                                value: e.row.radioScore, callback: function (o) {
                                    t.$set(e.row, "radioScore", o)
                                }, expression: "scope.row.radioScore"
                            }
                        })]
                    }
                }])
            }), o("el-table-column", {
                attrs: {label: "多选数量", align: "center"},
                scopedSlots: t._u([{
                    key: "default", fn: function (e) {
                        return [o("el-input-number", {
                            staticStyle: {width: "100px"},
                            attrs: {min: 0, max: e.row.totalMulti, controls: !1},
                            model: {
                                value: e.row.multiCount, callback: function (o) {
                                    t.$set(e.row, "multiCount", o)
                                }, expression: "scope.row.multiCount"
                            }
                        }), t._v(" / " + t._s(e.row.totalMulti) + " ")]
                    }
                }])
            }), o("el-table-column", {
                attrs: {label: "多选分数", align: "center"},
                scopedSlots: t._u([{
                    key: "default", fn: function (e) {
                        return [o("el-input-number", {
                            staticStyle: {width: "100%"},
                            attrs: {min: 0, controls: !1},
                            model: {
                                value: e.row.multiScore, callback: function (o) {
                                    t.$set(e.row, "multiScore", o)
                                }, expression: "scope.row.multiScore"
                            }
                        })]
                    }
                }])
            }), o("el-table-column", {
                attrs: {label: "判断题数量", align: "center"},
                scopedSlots: t._u([{
                    key: "default", fn: function (e) {
                        return [o("el-input-number", {
                            staticStyle: {width: "100px"},
                            attrs: {min: 0, max: e.row.totalJudge, controls: !1},
                            model: {
                                value: e.row.judgeCount, callback: function (o) {
                                    t.$set(e.row, "judgeCount", o)
                                }, expression: "scope.row.judgeCount"
                            }
                        }), t._v(" / " + t._s(e.row.totalJudge) + " ")]
                    }
                }])
            }), o("el-table-column", {
                attrs: {label: "判断题分数", align: "center"},
                scopedSlots: t._u([{
                    key: "default", fn: function (e) {
                        return [o("el-input-number", {
                            staticStyle: {width: "100%"},
                            attrs: {min: 0, controls: !1},
                            model: {
                                value: e.row.judgeScore, callback: function (o) {
                                    t.$set(e.row, "judgeScore", o)
                                }, expression: "scope.row.judgeScore"
                            }
                        })]
                    }
                }])
            }), o("el-table-column", {
                attrs: {label: "删除", align: "center", width: "80px"},
                scopedSlots: t._u([{
                    key: "default", fn: function (e) {
                        return [o("el-button", {
                            attrs: {type: "danger", icon: "el-icon-delete", circle: ""},
                            on: {
                                click: function (o) {
                                    return t.removeItem(e.$index)
                                }
                            }
                        })]
                    }
                }])
            })], 1)], 1)]), o("h3", [t._v("考试配置")]), o("el-card", {staticStyle: {"margin-top": "20px"}}, [o("el-form", {
                ref: "postForm",
                attrs: {model: t.postForm, rules: t.rules, "label-position": "left", "label-width": "120px"}
            }, [o("el-form-item", {
                attrs: {
                    label: "考试名称",
                    prop: "title"
                }
            }, [o("el-input", {
                model: {
                    value: t.postForm.title, callback: function (e) {
                        t.$set(t.postForm, "title", e)
                    }, expression: "postForm.title"
                }
            })], 1), o("el-form-item", {
                attrs: {
                    label: "考试描述",
                    prop: "content"
                }
            }, [o("el-input", {
                attrs: {type: "textarea"}, model: {
                    value: t.postForm.content, callback: function (e) {
                        t.$set(t.postForm, "content", e)
                    }, expression: "postForm.content"
                }
            })], 1), o("el-form-item", {
                attrs: {
                    label: "总分数",
                    prop: "totalScore"
                }
            }, [o("el-input-number", {
                attrs: {
                    value: t.postForm.totalScore,
                    disabled: ""
                }
            })], 1), o("el-form-item", {
                attrs: {
                    label: "及格分",
                    prop: "qualifyScore"
                }
            }, [o("el-input-number", {
                attrs: {max: t.postForm.totalScore},
                model: {
                    value: t.postForm.qualifyScore, callback: function (e) {
                        t.$set(t.postForm, "qualifyScore", e)
                    }, expression: "postForm.qualifyScore"
                }
            })], 1), o("el-form-item", {
                attrs: {
                    label: "考试时长(分钟)",
                    prop: "totalTime"
                }
            }, [o("el-input-number", {
                model: {
                    value: t.postForm.totalTime, callback: function (e) {
                        t.$set(t.postForm, "totalTime", e)
                    }, expression: "postForm.totalTime"
                }
            })], 1), o("el-form-item", {attrs: {label: "是否限时"}}, [o("el-checkbox", {
                model: {
                    value: t.postForm.timeLimit,
                    callback: function (e) {
                        t.$set(t.postForm, "timeLimit", e)
                    },
                    expression: "postForm.timeLimit"
                }
            })], 1), t.postForm.timeLimit ? o("el-form-item", {
                attrs: {
                    label: "考试时间",
                    prop: "totalTime"
                }
            }, [o("el-date-picker", {
                attrs: {
                    format: "yyyy-MM-dd",
                    "value-format": "yyyy-MM-dd",
                    type: "daterange",
                    "range-separator": "至",
                    "start-placeholder": "开始时间",
                    "end-placeholder": "结束时间"
                }, model: {
                    value: t.dateValues, callback: function (e) {
                        t.dateValues = e
                    }, expression: "dateValues"
                }
            })], 1) : t._e()], 1)], 1), o("h3", [t._v("权限配置")]), o("el-card", {staticStyle: {"margin-top": "20px"}}, [o("el-radio-group", {
                staticStyle: {"margin-bottom": "20px"},
                model: {
                    value: t.postForm.openType, callback: function (e) {
                        t.$set(t.postForm, "openType", e)
                    }, expression: "postForm.openType"
                }
            }, [o("el-radio", {attrs: {label: 1, border: ""}}, [t._v("完全公开")]), o("el-radio", {
                attrs: {
                    label: 2,
                    border: ""
                }
            }, [t._v("部门开放")])], 1), 1 === t.postForm.openType ? o("el-alert", {
                attrs: {
                    title: "开放的，任何人都可以进行考试！",
                    type: "warning"
                }
            }) : t._e(), 2 === t.postForm.openType ? o("div", [o("el-input", {
                attrs: {placeholder: "输入关键字进行过滤"},
                model: {
                    value: t.filterText, callback: function (e) {
                        t.filterText = e
                    }, expression: "filterText"
                }
            }), o("el-tree", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: t.treeLoading,
                    expression: "treeLoading"
                }],
                ref: "tree",
                attrs: {
                    data: t.treeData,
                    "default-checked-keys": t.postForm.departIds,
                    props: t.defaultProps,
                    "filter-node-method": t.filterNode,
                    "empty-text": " ",
                    "default-expand-all": "",
                    "show-checkbox": "",
                    "node-key": "id"
                },
                on: {"check-change": t.handleCheckChange}
            })], 1) : t._e()], 1), o("div", {staticStyle: {"margin-top": "20px"}}, [o("el-button", {
                attrs: {type: "primary"},
                on: {click: t.handleSave}
            }, [t._v("保存")])], 1)], 1)
        }, a = [], n = (o("ac6a"), o("7618")), i = o("955d"), l = o("9b73"), s = o("4a02"), u = {
            name: "ExamDetail", components: {RepoSelect: s["a"]}, data: function () {
                return {
                    treeData: [],
                    defaultProps: {label: "deptName"},
                    filterText: "",
                    treeLoading: !1,
                    dateValues: [],
                    repoList: [],
                    excludes: [],
                    postForm: {totalScore: 0, repoList: [], openType: 1, departIds: []},
                    rules: {
                        title: [{required: !0, message: "考试名称不能为空！"}],
                        content: [{required: !0, message: "考试名称不能为空！"}],
                        open: [{required: !0, message: "考试权限不能为空！"}],
                        totalScore: [{required: !0, message: "考试分数不能为空！"}],
                        qualifyScore: [{required: !0, message: "及格分不能为空！"}],
                        totalTime: [{required: !0, message: "考试时间不能为空！"}],
                        ruleId: [{required: !0, message: "考试规则不能为空"}],
                        password: [{required: !0, message: "考试口令不能为空！"}]
                    }
                }
            }, watch: {
                filterText: function (t) {
                    this.$refs.tree.filter(t)
                }, dateValues: {
                    handler: function () {
                        this.postForm.startTime = this.dateValues[0], this.postForm.endTime = this.dateValues[1]
                    }
                }, repoList: {
                    handler: function () {
                        this.postForm.totalScore = 0, this.excludes = [];
                        for (var t = 0; t < this.repoList.length; t++) {
                            var e = this.repoList[t];
                            this.postForm.totalScore += e.radioCount * e.radioScore, this.postForm.totalScore += e.multiCount * e.multiScore, this.postForm.totalScore += e.judgeCount * e.judgeScore, this.excludes.push(e.id), console.log("++++" + e.id)
                        }
                        this.postForm.repoList = this.repoList
                    }, deep: !0
                }
            }, created: function () {
                var t = this, e = this.$route.params.id;
                void 0 !== Object(n["a"])(e) && this.fetchData(e), Object(l["c"])({}).then((function (e) {
                    t.treeData = e.data
                }))
            }, methods: {
                handleSave: function () {
                    var t = this;
                    this.$refs.postForm.validate((function (e) {
                        if (e) if (0 !== t.postForm.totalScore) {
                            for (var o = 0; o < t.postForm.repoList.length; o++) {
                                var r = t.postForm.repoList[o];
                                if (!r.repoId) return void t.$notify({
                                    title: "提示信息",
                                    message: "考试题库选择不正确！",
                                    type: "warning",
                                    duration: 2e3
                                });
                                if (r.radioCount > 0 && 0 === r.radioScore || 0 === r.radioCount && r.radioScore > 0) return void t.$notify({
                                    title: "提示信息",
                                    message: "题库第：[" + (o + 1) + "]项存在无效的单选题配置！",
                                    type: "warning",
                                    duration: 2e3
                                });
                                if (r.multiCount > 0 && 0 === r.multiScore || 0 === r.multiCount && r.multiScore > 0) return void t.$notify({
                                    title: "提示信息",
                                    message: "题库第：[" + (o + 1) + "]项存在无效的多选题配置！",
                                    type: "warning",
                                    duration: 2e3
                                });
                                if (r.judgeCount > 0 && 0 === r.judgeScore || 0 === r.judgeCount && r.judgeScore > 0) return void t.$notify({
                                    title: "提示信息",
                                    message: "题库第：[" + (o + 1) + "]项存在无效的判断题配置！",
                                    type: "warning",
                                    duration: 2e3
                                })
                            }
                            t.$confirm("确实要提交保存吗？", "提示", {
                                confirmButtonText: "确定",
                                cancelButtonText: "取消",
                                type: "warning"
                            }).then((function () {
                                t.submitForm()
                            }))
                        } else t.$notify({title: "提示信息", message: "考试规则设置不正确，请确认！", type: "warning", duration: 2e3})
                    }))
                }, handleCheckChange: function () {
                    var t = this;
                    this.postForm.departIds = [];
                    var e = this.$refs.tree.getCheckedNodes();
                    e.forEach((function (e) {
                        t.postForm.departIds.push(e.id)
                    }))
                }, handleAdd: function () {
                    this.repoList.push({
                        id: "",
                        rowId: (new Date).getTime(),
                        radioCount: 0,
                        radioScore: 0,
                        multiCount: 0,
                        multiScore: 0,
                        judgeCount: 0,
                        judgeScore: 0,
                        saqCount: 0,
                        saqScore: 0
                    })
                }, removeItem: function (t) {
                    this.repoList.splice(t, 1)
                }, fetchData: function (t) {
                    var e = this;
                    Object(i["a"])(t).then((function (t) {
                        e.postForm = t.data, e.postForm.startTime && e.postForm.endTime && (e.dateValues[0] = e.postForm.startTime, e.dateValues[1] = e.postForm.endTime), e.repoList = e.postForm.repoList
                    }))
                }, submitForm: function () {
                    var t = this;
                    this.postForm.repoList = this.repoList, Object(i["c"])(this.postForm).then((function () {
                        t.$notify({
                            title: "成功",
                            message: "考试保存成功！",
                            type: "success",
                            duration: 2e3
                        }), t.$router.push({name: "ListExam"})
                    }))
                }, filterNode: function (t, e) {
                    return !t || -1 !== e.deptName.indexOf(t)
                }, repoChange: function (t, e) {
                    e.id = t.id, null != t ? (e.totalRadio = t.radioCount, e.totalMulti = t.multiCount, e.totalJudge = t.judgeCount) : (e.totalRadio = 0, e.totalMulti = 0, e.totalJudge = 0)
                }
            }
        }, c = u, d = o("2877"), p = Object(d["a"])(c, r, a, !1, null, null, null);
        e["default"] = p.exports
    }, 7514: function (t, e, o) {
        "use strict";
        var r = o("5ca1"), a = o("0a49")(5), n = "find", i = !0;
        n in [] && Array(1)[n]((function () {
            i = !1
        })), r(r.P + r.F * i, "Array", {
            find: function (t) {
                return a(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), o("9c6c")(n)
    }, "955d": function (t, e, o) {
        "use strict";
        o.d(e, "a", (function () {
            return a
        })), o.d(e, "c", (function () {
            return n
        })), o.d(e, "b", (function () {
            return i
        }));
        var r = o("b775");

        function a(t) {
            return Object(r["b"])("/exam/api/exam/exam/detail", {id: t})
        }

        function n(t) {
            return Object(r["b"])("/exam/api/exam/exam/save", t)
        }

        function i() {
            return Object(r["b"])("/exam/api/exam/exam/paging", {current: 1, size: 100})
        }
    }, "9b73": function (t, e, o) {
        "use strict";
        o.d(e, "d", (function () {
            return a
        })), o.d(e, "c", (function () {
            return n
        })), o.d(e, "b", (function () {
            return i
        })), o.d(e, "a", (function () {
            return l
        })), o.d(e, "e", (function () {
            return s
        })), o.d(e, "f", (function () {
            return u
        }));
        var r = o("b775");

        function a(t) {
            return Object(r["b"])("/exam/api/sys/depart/paging", t)
        }

        function n(t) {
            return Object(r["b"])("/exam/api/sys/depart/tree", t)
        }

        function i(t) {
            var e = {id: t};
            return Object(r["b"])("/exam/api/sys/depart/detail", e)
        }

        function l(t) {
            var e = {ids: t};
            return Object(r["b"])("/exam/api/sys/depart/delete", e)
        }

        function s(t) {
            return Object(r["b"])("/exam/api/sys/depart/save", t)
        }

        function u(t, e) {
            var o = {id: t, sort: e};
            return Object(r["b"])("/exam/api/sys/depart/sort", o)
        }
    }
}]);