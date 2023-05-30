(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-151a66b4"], {
    "0f93": function (e, t, a) {
    }, "1c18": function (e, t, a) {
    }, "333d": function (e, t, a) {
        "use strict";
        var n = function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {
                staticClass: "pagination-container",
                class: {hidden: e.hidden}
            }, [a("el-pagination", e._b({
                attrs: {
                    background: e.background,
                    "current-page": e.currentPage,
                    "page-size": e.pageSize,
                    layout: e.layout,
                    "page-sizes": e.pageSizes,
                    total: e.total
                }, on: {
                    "update:currentPage": function (t) {
                        e.currentPage = t
                    }, "update:current-page": function (t) {
                        e.currentPage = t
                    }, "update:pageSize": function (t) {
                        e.pageSize = t
                    }, "update:page-size": function (t) {
                        e.pageSize = t
                    }, "size-change": e.handleSizeChange, "current-change": e.handleCurrentChange
                }
            }, "el-pagination", e.$attrs, !1))], 1)
        }, i = [];
        a("c5f6");
        Math.easeInOutQuad = function (e, t, a, n) {
            return e /= n / 2, e < 1 ? a / 2 * e * e + t : (e--, -a / 2 * (e * (e - 2) - 1) + t)
        };
        var r = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
                window.setTimeout(e, 1e3 / 60)
            }
        }();

        function l(e) {
            document.documentElement.scrollTop = e, document.body.parentNode.scrollTop = e, document.body.scrollTop = e
        }

        function s() {
            return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop
        }

        function o(e, t, a) {
            var n = s(), i = e - n, o = 20, u = 0;
            t = "undefined" === typeof t ? 500 : t;
            var c = function e() {
                u += o;
                var s = Math.easeInOutQuad(u, n, i, t);
                l(s), u < t ? r(e) : a && "function" === typeof a && a()
            };
            c()
        }

        var u = {
            name: "Pagination",
            props: {
                total: {required: !0, type: Number},
                page: {type: Number, default: 1},
                limit: {type: Number, default: 20},
                pageSizes: {
                    type: Array, default: function () {
                        return [10, 20, 30, 50]
                    }
                },
                layout: {type: String, default: "total, sizes, prev, pager, next, jumper"},
                background: {type: Boolean, default: !0},
                autoScroll: {type: Boolean, default: !0},
                hidden: {type: Boolean, default: !1}
            },
            computed: {
                currentPage: {
                    get: function () {
                        return this.page
                    }, set: function (e) {
                        this.$emit("update:page", e)
                    }
                }, pageSize: {
                    get: function () {
                        return this.limit
                    }, set: function (e) {
                        this.$emit("update:limit", e)
                    }
                }
            },
            methods: {
                handleSizeChange: function (e) {
                    this.$emit("pagination", {page: this.currentPage, limit: e}), this.autoScroll && o(0, 800)
                }, handleCurrentChange: function (e) {
                    this.$emit("pagination", {page: e, limit: this.pageSize}), this.autoScroll && o(0, 800)
                }
            }
        }, c = u, d = (a("e498"), a("2877")), p = Object(d["a"])(c, n, i, !1, null, "6af373ef", null);
        t["a"] = p.exports
    }, 4769: function (e, t, a) {
        "use strict";
        a.r(t);
        var n = function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", [a("data-table", {
                ref: "pagingTable",
                attrs: {options: e.options, "list-query": e.listQuery}
            }, [a("template", {
                staticStyle: {display: "flex", "align-items": "flex-start"},
                slot: "filter-content"
            }, [a("exam-select", {
                staticClass: "filter-item",
                model: {
                    value: e.listQuery.params.examId, callback: function (t) {
                        e.$set(e.listQuery.params, "examId", t)
                    }, expression: "listQuery.params.examId"
                }
            }), a("depart-tree-select", {
                staticClass: "el-select filter-item el-select--medium ",
                attrs: {options: e.treeData, props: e.defaultProps, width: "200px"},
                model: {
                    value: e.listQuery.params.departId, callback: function (t) {
                        e.$set(e.listQuery.params, "departId", t)
                    }, expression: "listQuery.params.departId"
                }
            }), a("el-select", {
                staticClass: "filter-item",
                attrs: {placeholder: "考试状态", clearable: ""},
                model: {
                    value: e.listQuery.params.state, callback: function (t) {
                        e.$set(e.listQuery.params, "state", t)
                    }, expression: "listQuery.params.state"
                }
            }, e._l(e.paperStates, (function (e) {
                return a("el-option", {key: e.value, attrs: {label: e.label, value: e.value}})
            })), 1)], 1), a("template", {slot: "data-columns"}, [a("el-table-column", {
                attrs: {
                    label: "考试名称",
                    align: "center",
                    prop: "title"
                }, scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        return [a("router-link", {
                            attrs: {
                                to: {
                                    name: "ShowExam",
                                    params: {id: t.row.id}
                                }
                            }
                        }, [e._v(" " + e._s(t.row.title) + " ")])]
                    }
                }])
            }), a("el-table-column", {
                attrs: {
                    label: "人员",
                    align: "center",
                    prop: "userId_dictText"
                }
            }), a("el-table-column", {
                attrs: {
                    label: "部门",
                    align: "center",
                    prop: "departId_dictText"
                }
            }), a("el-table-column", {
                attrs: {label: "考试时长(分钟)", align: "center", prop: "totalTime"},
                scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        return [e._v(" " + e._s(t.row.userTime) + " / " + e._s(t.row.totalTime) + " ")]
                    }
                }])
            }), a("el-table-column", {
                attrs: {label: "考试得分", align: "center"},
                scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        return [e._v(" " + e._s(t.row.userScore) + " / " + e._s(t.row.totalScore) + " ")]
                    }
                }])
            }), a("el-table-column", {
                attrs: {
                    label: "考试时间",
                    align: "center",
                    prop: "createTime",
                    width: "180px"
                }
            }), a("el-table-column", {
                attrs: {label: "考试结果", align: "center"},
                scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        return [1 === t.row.state ? a("span", [e._v("待阅卷")]) : 0 === t.row.state ? a("span", [e._v("待交卷")]) : a("span", [t.row.userScore >= t.row.qualifyScore ? a("span", {staticStyle: {color: "#00ff00"}}, [e._v("合格")]) : a("span", {staticStyle: {color: "#ff0000"}}, [e._v("不合格")])])]
                    }
                }])
            }), a("el-table-column", {
                attrs: {label: "考试状态", align: "center"},
                scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        return [e._v(" " + e._s(e._f("paperStateFilter")(t.row.state)) + " ")]
                    }
                }])
            }), a("el-table-column", {
                attrs: {label: "视频截图", align: "center"},
                scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        return [a("el-button", {
                            attrs: {type: "primary", size: "small"}, on: {
                                click: function (a) {
                                    return e.handleCapture(t.row.id)
                                }
                            }
                        }, [e._v("考试截图")])]
                    }
                }])
            })], 1)], 2), a("el-dialog", {
                attrs: {visible: e.dialogVisible, title: "考试截图", width: "500px"},
                on: {
                    "update:visible": function (t) {
                        e.dialogVisible = t
                    }
                }
            }, e._l(e.captureList, (function (e) {
                return a("img", {staticStyle: {width: "230px"}, attrs: {src: e.capture}})
            })), 0)], 1)
        }, i = [], r = a("7845"), l = a("5ba1"), s = a("9b73"), o = a("6066"), u = function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("el-select", {
                staticClass: "filter-item",
                attrs: {
                    multiple: e.multi,
                    "remote-method": e.fetchData,
                    filterable: "",
                    remote: "",
                    clearable: "",
                    placeholder: "选择或搜索考试"
                },
                on: {change: e.handlerChange},
                model: {
                    value: e.currentValue, callback: function (t) {
                        e.currentValue = t
                    }, expression: "currentValue"
                }
            }, e._l(e.dataList, (function (e) {
                return a("el-option", {key: e.id, attrs: {label: e.title, value: e.id}})
            })), 1)
        }, c = [], d = a("955d"), p = {
            name: "ExamSelect", props: {multi: Boolean, value: Array, default: String}, data: function () {
                return {dataList: [], currentValue: []}
            }, watch: {
                value: {
                    handler: function () {
                        this.currentValue = this.value
                    }
                }
            }, created: function () {
                this.currentValue = this.value, this.fetchData()
            }, methods: {
                fetchData: function () {
                    var e = this;
                    Object(d["b"])().then((function (t) {
                        e.dataList = t.data.records
                    }))
                }, handlerChange: function (e) {
                    console.log(e), this.$emit("change", e), this.$emit("input", e)
                }
            }
        }, h = p, f = a("2877"), m = Object(f["a"])(h, u, c, !1, null, null, null), b = m.exports, g = {
            components: {ExamSelect: b, DepartTreeSelect: l["a"], DataTable: r["a"]}, data: function () {
                return {
                    dialogVisible: !1,
                    captureList: [],
                    paperStates: [{value: 0, label: "考试中"}, {value: 1, label: "待阅卷"}, {
                        value: 2,
                        label: "已考完"
                    }, {value: 3, label: "!已弃考"}],
                    treeData: [],
                    defaultProps: {value: "id", label: "deptName", children: "children"},
                    listQuery: {current: 1, size: 10, params: {examId: ""}},
                    options: {multi: !1, listUrl: "/exam/api/paper/paper/paging"}
                }
            }, created: function () {
                var e = this, t = this.$route.params.examId;
                "undefined" !== typeof t && (this.listQuery.params.examId = t), Object(s["c"])({}).then((function (t) {
                    e.treeData = t.data
                }))
            }, methods: {
                handleCapture: function (e) {
                    var t = this;
                    this.dialogVisible = !0, Object(o["listCaptures"])(e).then((function (e) {
                        t.captureList = e.data
                    }))
                }
            }
        }, v = g, y = Object(f["a"])(v, n, i, !1, null, null, null);
        t["default"] = y.exports
    }, 5103: function (e, t, a) {
        "use strict";
        a("0f93")
    }, "5ba1": function (e, t, a) {
        "use strict";
        var n = function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("el-popover", {
                ref: "popover",
                attrs: {placement: "bottom-start", trigger: "click"},
                on: {show: e.onShowPopover, hide: e.onHidePopover}
            }, [a("el-tree", {
                ref: "tree",
                staticClass: "select-tree",
                style: "min-width: " + e.treeWidth,
                attrs: {
                    data: e.data,
                    props: e.props,
                    "expand-on-click-node": !1,
                    "filter-node-method": e.filterNode,
                    placeholder: "选择部门",
                    "check-strictly": "false",
                    "highlight-current": "",
                    "default-expand-all": ""
                },
                on: {"node-click": e.onClickNode}
            }), a("el-input", {
                ref: "input",
                class: {rotate: e.showStatus},
                style: "width: " + e.width + "px",
                attrs: {
                    slot: "reference",
                    placeholder: e.placeholder,
                    clearable: "",
                    "suffix-icon": "el-icon-arrow-down"
                },
                slot: "reference",
                model: {
                    value: e.labelModel, callback: function (t) {
                        e.labelModel = t
                    }, expression: "labelModel"
                }
            })], 1)
        }, i = [], r = {
            name: "DepartTree",
            model: {prop: "value", event: "selected"},
            props: {
                value: String,
                width: String,
                options: {type: Array, required: !0},
                placeholder: {type: String, required: !1, default: "请选择"},
                props: {
                    type: Object, required: !1, default: function () {
                        return {parent: "parentId", value: "rowGuid", label: "areaName", children: "children"}
                    }
                }
            },
            data: function () {
                return {showStatus: !1, treeWidth: "auto", labelModel: "", valueModel: "0"}
            },
            computed: {
                dataType: function () {
                    var e = JSON.stringify(this.options);
                    return -1 !== e.indexOf(this.props.children)
                }, data: function () {
                    return this.dataType ? this.options : this.switchTree()
                }
            },
            watch: {
                labelModel: function (e) {
                    e || (this.valueModel = ""), this.$refs.tree.filter(e)
                }, value: function (e) {
                    this.labelModel = this.queryTree(this.data, e)
                }
            },
            created: function () {
                var e = this;
                this.value && (this.labelModel = this.queryTree(this.data, this.value)), this.$nextTick((function () {
                    e.treeWidth = "".concat((e.width || e.$refs.input.$refs.input.clientWidth) - 24, "px")
                }))
            },
            methods: {
                onClickNode: function (e) {
                    this.labelModel = e[this.props.label], this.valueModel = e[this.props.value], this.onCloseTree()
                }, switchTree: function () {
                    return this.cleanChildren(this.buildTree(this.options, "0"))
                }, onCloseTree: function () {
                    this.$refs.popover.showPopper = !1
                }, onShowPopover: function () {
                    this.showStatus = !0, this.$refs.tree.filter(!1)
                }, onHidePopover: function () {
                    this.showStatus = !1, this.$emit("selected", this.valueModel)
                }, filterNode: function (e, t) {
                    return !e || -1 !== t[this.props.label].indexOf(e)
                }, queryTree: function (e, t) {
                    var a = [];
                    a = a.concat(e);
                    while (a.length) {
                        var n = a.shift();
                        if (n[this.props.children] && (a = a.concat(n[this.props.children])), n[this.props.value] === t) return n[this.props.label]
                    }
                    return ""
                }, buildTree: function (e) {
                    var t = this, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0",
                        n = function a(n) {
                            for (var i = [], r = 0; r < e.length; r++) {
                                var l = e[r];
                                l[t.props.parent] === n && (l.children = a(l.rowGuid), i.push(l))
                            }
                            return i
                        };
                    return n(a)
                }, cleanChildren: function (e) {
                    var t = function e(t) {
                        return t.map((function (t) {
                            return t.children.length ? e(t.children) : delete t.children, t
                        })), t
                    };
                    return t(e)
                }
            }
        }, l = r, s = (a("d6c9"), a("2877")), o = Object(s["a"])(l, n, i, !1, null, null, null);
        t["a"] = o.exports
    }, 6066: function (e, t, a) {
        "use strict";
        a.d(t, "b", (function () {
            return i
        }));
        var n = a("b775");

        function i(e, t) {
            return Object(n["b"])("/exam/api/paper/paper/paging", {current: 1, size: 5, params: {userId: e, examId: t}})
        }
    }, 7845: function (e, t, a) {
        "use strict";
        var n = function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "app-container"}, [a("div", {staticClass: "filter-container"}, [e._t("filter-content"), a("el-row", [a("el-col", [e.options.addRoute ? a("el-button", {
                attrs: {
                    type: "primary",
                    icon: "el-icon-plus"
                }, on: {click: e.handleAdd}
            }, [e._v("添加")]) : e._e()], 1)], 1)], 2), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.multiShow && e.options.multiActions,
                    expression: "multiShow && options.multiActions"
                }], staticClass: "filter-container"
            }, [a("el-select", {
                staticClass: "filter-item",
                staticStyle: {width: "130px"},
                attrs: {placeholder: e.selectedLabel},
                on: {change: e.handleOption},
                model: {
                    value: e.multiNow, callback: function (t) {
                        e.multiNow = t
                    }, expression: "multiNow"
                }
            }, e._l(e.options.multiActions, (function (e) {
                return a("el-option", {key: e.value, attrs: {label: e.label, value: e.value}})
            })), 1)], 1), a("el-table", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: e.listLoading,
                    expression: "listLoading"
                }],
                attrs: {
                    data: e.dataList.records,
                    "header-cell-style": {
                        background: "#f2f3f4",
                        color: "#555",
                        "font-weight": "bold",
                        "line-height": "32px"
                    },
                    border: "",
                    fit: "",
                    "highlight-current-row": ""
                },
                on: {"selection-change": e.handleSelection}
            }, [e.options.multi ? a("el-table-column", {
                attrs: {
                    align: "center",
                    type: "selection",
                    width: "55"
                }
            }) : e._e(), e._t("data-columns")], 2), a("pagination", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.dataList.total > 0,
                    expression: "dataList.total>0"
                }],
                attrs: {total: e.dataList.total, page: e.listQuery.current, limit: e.listQuery.size},
                on: {
                    "update:page": function (t) {
                        return e.$set(e.listQuery, "current", t)
                    }, "update:limit": function (t) {
                        return e.$set(e.listQuery, "size", t)
                    }, pagination: e.getList
                }
            })], 1)
        }, i = [], r = (a("ac6a"), a("b775"));

        function l(e, t) {
            return Object(r["b"])(e, t)
        }

        function s(e, t) {
            return Object(r["b"])(e, {ids: t})
        }

        function o(e, t, a) {
            return Object(r["b"])(e, {ids: t, state: a})
        }

        var u = a("333d"), c = {
            name: "PagingTable",
            components: {Pagination: u["a"]},
            props: {
                options: {
                    type: Object, default: function () {
                        return {multiActions: [], listUrl: "/exam/api", deleteUrl: "", stateUrl: "", multi: !1}
                    }
                }, listQuery: {
                    type: Object, default: function () {
                        return {current: 1, size: 10, params: {}, t: 0}
                    }
                }
            },
            data: function () {
                return {
                    dataList: {total: 0},
                    listLoading: !0,
                    selectedIds: [],
                    selectedObjs: [],
                    selectedLabel: "",
                    multiShow: !1,
                    multiNow: ""
                }
            },
            watch: {
                listQuery: {
                    handler: function () {
                        this.getList()
                    }, deep: !0
                }
            },
            created: function () {
                this.getList()
            },
            methods: {
                handleAdd: function () {
                    this.options.addRoute ? this.$router.push({
                        name: this.options.addRoute,
                        params: {}
                    }) : console.log("未设置添加数据跳转路由！")
                }, getList: function () {
                    var e = this;
                    this.listLoading = !0, this.listQuery.t = (new Date).getTime(), l(this.options.listUrl, this.listQuery).then((function (t) {
                        e.dataList = t.data, e.listLoading = !1
                    }))
                }, handleFilter: function () {
                    this.getList()
                }, handleOption: function (e) {
                    this.multiNow = "", "delete" !== e ? "enable" !== e ? "disable" !== e ? this.$emit("multi-actions", {
                        opt: e,
                        ids: this.selectedIds
                    }) : this.handleState(1) : this.handleState(0) : this.handleDelete()
                }, handleState: function (e) {
                    var t = this;
                    o(this.options.stateUrl, this.selectedIds, e).then((function (e) {
                        0 === e.code && (t.$message({type: "success", message: "状态修改成功!"}), t.getList())
                    }))
                }, handleDelete: function () {
                    var e = this;
                    0 !== this.selectedIds.length ? this.$confirm("确实要删除吗?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then((function () {
                        s(e.options.deleteUrl, e.selectedIds).then((function () {
                            e.$message({type: "success", message: "删除成功!"}), e.getList()
                        }))
                    })) : this.$message({message: "请至少选择一条数据！", type: "warning"})
                }, handleSelection: function (e) {
                    var t = [];
                    e.forEach((function (e) {
                        t.push(e.id)
                    })), this.selectedObjs = e, this.selectedIds = t, this.multiShow = t.length > 0, this.selectedLabel = "已选" + t.length + "项", this.$emit("select-changed", {
                        ids: this.selectedIds,
                        objs: this.selectedObjs
                    })
                }
            }
        }, d = c, p = (a("5103"), a("2877")), h = Object(p["a"])(d, n, i, !1, null, null, null);
        t["a"] = h.exports
    }, "955d": function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return i
        })), a.d(t, "c", (function () {
            return r
        })), a.d(t, "b", (function () {
            return l
        }));
        var n = a("b775");

        function i(e) {
            return Object(n["b"])("/exam/api/exam/exam/detail", {id: e})
        }

        function r(e) {
            return Object(n["b"])("/exam/api/exam/exam/save", e)
        }

        function l() {
            return Object(n["b"])("/exam/api/exam/exam/paging", {current: 1, size: 100})
        }
    }, "9b73": function (e, t, a) {
        "use strict";
        a.d(t, "d", (function () {
            return i
        })), a.d(t, "c", (function () {
            return r
        })), a.d(t, "b", (function () {
            return l
        })), a.d(t, "a", (function () {
            return s
        })), a.d(t, "e", (function () {
            return o
        })), a.d(t, "f", (function () {
            return u
        }));
        var n = a("b775");

        function i(e) {
            return Object(n["b"])("/exam/api/sys/depart/paging", e)
        }

        function r(e) {
            return Object(n["b"])("/exam/api/sys/depart/tree", e)
        }

        function l(e) {
            var t = {id: e};
            return Object(n["b"])("/exam/api/sys/depart/detail", t)
        }

        function s(e) {
            var t = {ids: e};
            return Object(n["b"])("/exam/api/sys/depart/delete", t)
        }

        function o(e) {
            return Object(n["b"])("/exam/api/sys/depart/save", e)
        }

        function u(e, t) {
            var a = {id: e, sort: t};
            return Object(n["b"])("/exam/api/sys/depart/sort", a)
        }
    }, bfba: function (e, t, a) {
    }, d6c9: function (e, t, a) {
        "use strict";
        a("bfba")
    }, e498: function (e, t, a) {
        "use strict";
        a("1c18")
    }
}]);