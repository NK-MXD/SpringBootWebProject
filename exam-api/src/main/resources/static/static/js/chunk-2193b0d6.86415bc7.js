(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2193b0d6"], {
    "0b8d": function (t, a, e) {
        "use strict";
        e("aade")
    }, "2f21": function (t, a, e) {
        "use strict";
        var n = e("79e5");
        t.exports = function (t, a) {
            return !!t && n((function () {
                a ? t.call(null, (function () {
                }), 1) : t.call(null)
            }))
        }
    }, 3200: function (t, a, e) {
        "use strict";
        e.d(a, "b", (function () {
            return i
        })), e.d(a, "e", (function () {
            return r
        })), e.d(a, "g", (function () {
            return s
        })), e.d(a, "c", (function () {
            return c
        })), e.d(a, "d", (function () {
            return u
        })), e.d(a, "f", (function () {
            return o
        })), e.d(a, "a", (function () {
            return l
        }));
        var n = e("b775");

        function i(t) {
            return Object(n["b"])("/exam/api/paper/paper/create-paper", t)
        }

        function r(t) {
            return Object(n["b"])("/exam/api/paper/paper/paper-detail", t)
        }

        function s(t) {
            return Object(n["b"])("/exam/api/paper/paper/qu-detail", t)
        }

        function c(t) {
            return Object(n["b"])("/exam/api/paper/paper/fill-answer", t)
        }

        function u(t) {
            return Object(n["b"])("/exam/api/paper/paper/hand-exam", t)
        }

        function o(t) {
            return Object(n["b"])("/exam/api/paper/paper/paper-result", t)
        }

        function l() {
            return Object(n["b"])("/exam/api/paper/paper/check-process", {})
        }
    }, "55dd": function (t, a, e) {
        "use strict";
        var n = e("5ca1"), i = e("d8e8"), r = e("4bf8"), s = e("79e5"), c = [].sort, u = [1, 2, 3];
        n(n.P + n.F * (s((function () {
            u.sort(void 0)
        })) || !s((function () {
            u.sort(null)
        })) || !e("2f21")(c)), "Array", {
            sort: function (t) {
                return void 0 === t ? c.call(r(this)) : c.call(r(this), i(t))
            }
        })
    }, "70fe": function (t, a, e) {
        "use strict";
        e.r(a);
        var n = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "app-container"}, [e("el-row", {attrs: {gutter: 24}}, [e("el-col", {attrs: {span: 24}}, [e("el-card", {staticStyle: {"margin-bottom": "10px"}}, [t._v(" 距离考试结束还有： "), e("exam-timer", {
                on: {
                    timeout: function (a) {
                        return t.doHandler()
                    }
                }, model: {
                    value: t.paperData.leftSeconds, callback: function (a) {
                        t.$set(t.paperData, "leftSeconds", a)
                    }, expression: "paperData.leftSeconds"
                }
            }), e("el-button", {
                staticStyle: {float: "right", "margin-top": "-10px"},
                attrs: {loading: t.loading, type: "primary", icon: "el-icon-plus"},
                on: {
                    click: function (a) {
                        return t.handHandExam()
                    }
                }
            }, [t._v(" " + t._s(t.handleText) + " ")])], 1)], 1), e("el-col", {
                staticStyle: {"margin-bottom": "10px"},
                attrs: {span: 5, xs: 24}
            }, [e("el-card", {staticClass: "content-h"}, [e("p", {staticClass: "card-title"}, [t._v("答题卡")]), e("el-row", {
                staticClass: "card-line",
                staticStyle: {"padding-left": "10px"},
                attrs: {gutter: 24}
            }, [e("el-tag", {attrs: {type: "info"}}, [t._v("未作答")]), e("el-tag", {attrs: {type: "success"}}, [t._v("已作答")])], 1), void 0 !== t.paperData.radioList && t.paperData.radioList.length > 0 ? e("div", [e("p", {staticClass: "card-title"}, [t._v("单选题")]), e("el-row", {
                staticClass: "card-line",
                attrs: {gutter: 24}
            }, t._l(t.paperData.radioList, (function (a) {
                return e("el-tag", {
                    attrs: {type: t.cardItemClass(a.answered, a.quId)}, on: {
                        click: function (e) {
                            return t.handSave(a)
                        }
                    }
                }, [t._v(" " + t._s(a.sort + 1))])
            })), 1)], 1) : t._e(), void 0 !== t.paperData.multiList && t.paperData.multiList.length > 0 ? e("div", [e("p", {staticClass: "card-title"}, [t._v("多选题")]), e("el-row", {
                staticClass: "card-line",
                attrs: {gutter: 24}
            }, t._l(t.paperData.multiList, (function (a) {
                return e("el-tag", {
                    attrs: {type: t.cardItemClass(a.answered, a.quId)}, on: {
                        click: function (e) {
                            return t.handSave(a)
                        }
                    }
                }, [t._v(t._s(a.sort + 1))])
            })), 1)], 1) : t._e(), void 0 !== t.paperData.judgeList && t.paperData.judgeList.length > 0 ? e("div", [e("p", {staticClass: "card-title"}, [t._v("判断题")]), e("el-row", {
                staticClass: "card-line",
                attrs: {gutter: 24}
            }, t._l(t.paperData.judgeList, (function (a) {
                return e("el-tag", {
                    attrs: {type: t.cardItemClass(a.answered, a.quId)}, on: {
                        click: function (e) {
                            return t.handSave(a)
                        }
                    }
                }, [t._v(t._s(a.sort + 1))])
            })), 1)], 1) : t._e()], 1)], 1), e("el-col", {
                attrs: {
                    span: 19,
                    xs: 24
                }
            }, [e("el-card", {staticClass: "qu-content content-h"}, [t.quData.content ? e("p", [t._v(t._s(t.quData.sort + 1) + "." + t._s(t.quData.content))]) : t._e(), null != t.quData.image && "" != t.quData.image ? e("p", [e("el-image", {
                staticStyle: {"max-width": "100%"},
                attrs: {src: t.quData.image}
            })], 1) : t._e(), 1 === t.quData.quType || 3 === t.quData.quType ? e("div", [e("el-radio-group", {
                model: {
                    value: t.radioValue,
                    callback: function (a) {
                        t.radioValue = a
                    },
                    expression: "radioValue"
                }
            }, t._l(t.quData.answerList, (function (a) {
                return e("el-radio", {attrs: {label: a.id}}, [t._v(t._s(a.abc) + "." + t._s(a.content) + " "), null != a.image && "" != a.image ? e("div", {staticStyle: {clear: "both"}}, [e("el-image", {
                    staticStyle: {"max-width": "100%"},
                    attrs: {src: a.image}
                })], 1) : t._e()])
            })), 1)], 1) : t._e(), 2 === t.quData.quType ? e("div", [e("el-checkbox-group", {
                model: {
                    value: t.multiValue,
                    callback: function (a) {
                        t.multiValue = a
                    },
                    expression: "multiValue"
                }
            }, t._l(t.quData.answerList, (function (a) {
                return e("el-checkbox", {attrs: {label: a.id}}, [t._v(t._s(a.abc) + "." + t._s(a.content) + " "), null != a.image && "" != a.image ? e("div", {staticStyle: {clear: "both"}}, [e("el-image", {
                    staticStyle: {"max-width": "100%"},
                    attrs: {src: a.image}
                })], 1) : t._e()])
            })), 1)], 1) : t._e(), e("div", {staticStyle: {"margin-top": "20px"}}, [t.showPrevious ? e("el-button", {
                attrs: {
                    type: "primary",
                    icon: "el-icon-back"
                }, on: {
                    click: function (a) {
                        return t.handPrevious()
                    }
                }
            }, [t._v(" 上一题 ")]) : t._e(), t.showNext ? e("el-button", {
                attrs: {type: "warning", icon: "el-icon-right"},
                on: {
                    click: function (a) {
                        return t.handNext()
                    }
                }
            }, [t._v(" 下一题 ")]) : t._e()], 1)])], 1)], 1)], 1)
        }, i = [], r = (e("55dd"), e("ac6a"), e("3200")), s = e("5c96"), c = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("span", {
                staticStyle: {
                    color: "#ff0000",
                    "font-weight": "700"
                }
            }, [t._v(t._s(t.min) + "分钟" + t._s(t.sec) + "秒")])
        }, u = [], o = (e("c5f6"), {
            name: "ExamTimer", props: {value: Number}, data: function () {
                return {leftSeconds: 0, min: "00", sec: "00"}
            }, watch: {
                value: {
                    handler: function () {
                        this.leftSeconds = this.value, this.countdown()
                    }
                }
            }, created: function () {
                this.leftSeconds = this.value
            }, methods: {
                countdown: function () {
                    if (this.leftSeconds < 0) this.$emit("timeout"); else {
                        var t = parseInt(this.leftSeconds / 60), a = parseInt(this.leftSeconds % 60);
                        this.min = t > 9 ? t : "0" + t, this.sec = a > 9 ? a : "0" + a, this.leftSeconds -= 1;
                        var e = this;
                        setTimeout((function () {
                            e.countdown()
                        }), 1e3)
                    }
                }
            }
        }), l = o, d = e("2877"), p = Object(d["a"])(l, c, u, !1, null, null, null), h = p.exports, f = {
            name: "ExamProcess", components: {ExamTimer: h}, data: function () {
                return {
                    isFullscreen: !1,
                    showPrevious: !1,
                    showNext: !0,
                    loading: !1,
                    handleText: "交卷",
                    pageLoading: !1,
                    paperId: "",
                    cardItem: {},
                    allItem: [],
                    quData: {answerList: []},
                    paperData: {leftSeconds: 99999, radioList: [], multiList: [], judgeList: []},
                    radioValue: "",
                    multiValue: [],
                    answeredIds: []
                }
            }, created: function () {
                var t = this.$route.params.id;
                "undefined" !== typeof t && (this.paperId = t, this.fetchData(t))
            }, methods: {
                cardItemClass: function (t, a) {
                    return a === this.cardItem.quId ? "warning" : t ? "success" : t ? void 0 : "info"
                }, countNotAnswered: function () {
                    var t = 0;
                    return this.paperData.radioList.forEach((function (a) {
                        a.answered || (t += 1)
                    })), this.paperData.multiList.forEach((function (a) {
                        a.answered || (t += 1)
                    })), this.paperData.judgeList.forEach((function (a) {
                        a.answered || (t += 1)
                    })), t
                }, handNext: function () {
                    var t = this.cardItem.sort + 1;
                    this.handSave(this.allItem[t])
                }, handPrevious: function () {
                    var t = this.cardItem.sort - 1;
                    this.handSave(this.allItem[t])
                }, doHandler: function () {
                    var t = this;
                    this.handleText = "正在交卷，请等待...", this.loading = !0;
                    var a = {id: this.paperId};
                    Object(r["d"])(a).then((function () {
                        t.$message({message: "试卷提交成功，即将进入试卷详情！", type: "success"}), t.$router.push({
                            name: "ShowExam",
                            params: {id: t.paperId}
                        })
                    }))
                }, handHandExam: function () {
                    var t = this;
                    this.handSave(this.cardItem, (function () {
                        var a = t.countNotAnswered(), e = "确认要交卷吗？";
                        a > 0 && (e = "您还有" + a + "题未作答，确认要交卷吗?"), t.$confirm(e, "提示", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            type: "warning"
                        }).then((function () {
                            t.doHandler()
                        })).catch((function () {
                            t.$message({type: "info", message: "交卷已取消，您可以继续作答！"})
                        }))
                    }))
                }, handSave: function (t, a) {
                    var e = this;
                    t.id === this.allItem[0].id ? this.showPrevious = !1 : this.showPrevious = !0;
                    var n = this.allItem.length - 1;
                    t.id === this.allItem[n].id ? this.showNext = !1 : this.showNext = !0;
                    var i = this.multiValue;
                    "" !== this.radioValue && i.push(this.radioValue);
                    var s = {paperId: this.paperId, quId: this.cardItem.quId, answers: i, answer: ""};
                    Object(r["c"])(s).then((function () {
                        i.length > 0 && (e.cardItem.answered = !0), a && a(), e.fetchQuData(t)
                    }))
                }, fetchQuData: function (t) {
                    var a = this, e = s["Loading"].service({text: "拼命加载中", background: "rgba(0, 0, 0, 0.7)"});
                    this.cardItem = t;
                    var n = {paperId: this.paperId, quId: t.quId};
                    Object(r["g"])(n).then((function (t) {
                        console.log(t), a.quData = t.data, a.radioValue = "", a.multiValue = [], a.quData.answerList.forEach((function (t) {
                            1 !== a.quData.quType && 3 !== a.quData.quType || !t.checked || (a.radioValue = t.id), 2 === a.quData.quType && t.checked && a.multiValue.push(t.id)
                        })), e.close()
                    }))
                }, fetchData: function (t) {
                    var a = this, e = {id: t};
                    Object(r["e"])(e).then((function (t) {
                        a.paperData = t.data, a.paperData.radioList ? a.cardItem = a.paperData.radioList[0] : a.paperData.multiList ? a.cardItem = a.paperData.multiList[0] : a.paperData.judgeList && (a.cardItem = a.paperData.judgeList[0]);
                        var e = a;
                        a.paperData.radioList.forEach((function (t) {
                            e.allItem.push(t)
                        })), a.paperData.multiList.forEach((function (t) {
                            e.allItem.push(t)
                        })), a.paperData.judgeList.forEach((function (t) {
                            e.allItem.push(t)
                        })), a.fetchQuData(a.cardItem)
                    }))
                }
            }
        }, m = f, v = (e("0b8d"), Object(d["a"])(m, n, i, !1, null, "04d83ef8", null));
        a["default"] = v.exports
    }, aade: function (t, a, e) {
    }
}]);