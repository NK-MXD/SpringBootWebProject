(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-88ffa5a0"], {
    "133c": function (t, e, r) {
        "use strict";
        r("7c25")
    }, 2995: function (t, e, r) {
        "use strict";
        r.d(e, "b", (function () {
            return s
        })), r.d(e, "a", (function () {
            return n
        }));
        var a = r("b775");

        function s(t) {
            return Object(a["b"])("/exam/api/sys/user/update", t)
        }

        function n(t) {
            return Object(a["b"])("/exam/api/sys/user/save", t)
        }
    }, "7c25": function (t, e, r) {
    }, "9df0": function (t, e, r) {
        "use strict";
        r("a034")
    }, a034: function (t, e, r) {
    }, ecac: function (t, e, r) {
        "use strict";
        r.r(e);
        var a = function () {
                var t = this, e = t.$createElement, r = t._self._c || e;
                return r("div", {staticClass: "app-container"}, [t.user ? r("div", [r("el-row", {attrs: {gutter: 20}}, [r("el-col", {
                    attrs: {
                        span: 6,
                        xs: 24
                    }
                }, [r("user-card", {attrs: {user: t.user}})], 1), r("el-col", {
                    attrs: {
                        span: 18,
                        xs: 24
                    }
                }, [r("el-card", [r("el-tabs", {
                    model: {
                        value: t.activeTab, callback: function (e) {
                            t.activeTab = e
                        }, expression: "activeTab"
                    }
                }, [r("el-tab-pane", {
                    attrs: {
                        label: "修改资料",
                        name: "account"
                    }
                }, [r("account", {attrs: {user: t.user}})], 1)], 1)], 1)], 1)], 1)], 1) : t._e()])
            }, s = [], n = (r("7f7f"), r("db72")), i = r("2f62"), u = function () {
                var t = this, e = t.$createElement, r = t._self._c || e;
                return r("el-card", {staticStyle: {"margin-bottom": "20px"}}, [r("div", {
                    staticClass: "clearfix",
                    attrs: {slot: "header"},
                    slot: "header"
                }, [r("span", [t._v("个人资料")])]), r("div", {staticClass: "user-profile"}, [r("div", {staticClass: "box-center"}, [r("pan-thumb", {
                    attrs: {
                        image: t.user.avatar,
                        height: "100px",
                        width: "100px",
                        hoverable: !1
                    }
                }, [r("div", [t._v("欢迎")]), t._v(" " + t._s(t.user.role) + " ")])], 1), r("div", {staticClass: "box-center"}, [r("div", {staticClass: "user-name text-center"}, [t._v(t._s(t.user.name))]), r("div", {staticClass: "user-role text-center text-muted"}, [t._v(t._s(t._f("uppercaseFirst")(t.user.role)))])])])])
            }, c = [], o = function () {
                var t = this, e = t.$createElement, r = t._self._c || e;
                return r("div", {
                    staticClass: "pan-item",
                    style: {zIndex: t.zIndex, height: t.height, width: t.width}
                }, [r("div", {staticClass: "pan-info"}, [r("div", {staticClass: "pan-info-roles-container"}, [t._t("default")], 2)]), r("div", {
                    staticClass: "pan-thumb",
                    style: {backgroundImage: "url(" + t.image + ")"}
                })])
            }, l = [], p = (r("c5f6"), {
                name: "PanThumb",
                props: {
                    image: {type: String, required: !0},
                    zIndex: {type: Number, default: 1},
                    width: {type: String, default: "150px"},
                    height: {type: String, default: "150px"}
                }
            }), f = p, d = (r("133c"), r("2877")), m = Object(d["a"])(f, o, l, !1, null, "799537af", null), h = m.exports,
            b = {
                components: {PanThumb: h}, props: {
                    user: {
                        type: Object, default: function () {
                            return {name: "", email: "", avatar: "", roles: ""}
                        }
                    }
                }
            }, v = b, x = (r("9df0"), Object(d["a"])(v, u, c, !1, null, "e538f184", null)), g = x.exports,
            w = function () {
                var t = this, e = t.$createElement, r = t._self._c || e;
                return r("el-form", [r("el-form-item", {attrs: {label: "用户名"}}, [r("el-input", {
                    attrs: {readonly: ""},
                    model: {
                        value: t.user.name, callback: function (e) {
                            t.$set(t.user, "name", "string" === typeof e ? e.trim() : e)
                        }, expression: "user.name"
                    }
                })], 1), r("el-form-item", {attrs: {label: "密码"}}, [r("el-input", {
                    attrs: {
                        type: "password",
                        placeholder: "不修改请留空"
                    }, model: {
                        value: t.user.password, callback: function (e) {
                            t.$set(t.user, "password", "string" === typeof e ? e.trim() : e)
                        }, expression: "user.password"
                    }
                })], 1), r("el-form-item", [r("el-button", {
                    attrs: {type: "primary"},
                    on: {click: t.submit}
                }, [t._v("修改")])], 1)], 1)
            }, y = [], _ = (r("96cf"), r("3b8d")), j = r("2995"), O = {
                props: {
                    user: {
                        type: Object, default: function () {
                            return {password: ""}
                        }
                    }
                }, methods: {
                    logout: function () {
                        var t = Object(_["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.$store.dispatch("user/logout");
                                    case 2:
                                        this.$router.push("/login?redirect=".concat(this.$route.fullPath));
                                    case 3:
                                    case"end":
                                        return t.stop()
                                }
                            }), t, this)
                        })));

                        function e() {
                            return t.apply(this, arguments)
                        }

                        return e
                    }(), submit: function () {
                        var t = Object(_["a"])(regeneratorRuntime.mark((function t() {
                            var e = this;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        Object(j["b"])(this.user).then((function () {
                                            e.$notify({
                                                title: "成功",
                                                message: "用户资料保存成功！！",
                                                type: "success",
                                                duration: 2e3
                                            }), e.logout()
                                        }));
                                    case 1:
                                    case"end":
                                        return t.stop()
                                }
                            }), t, this)
                        })));

                        function e() {
                            return t.apply(this, arguments)
                        }

                        return e
                    }()
                }
            }, C = O, k = Object(d["a"])(C, w, y, !1, null, null, null), $ = k.exports, T = {
                name: "Profile", components: {UserCard: g, Account: $}, data: function () {
                    return {user: {}, activeTab: "account"}
                }, computed: Object(n["a"])({}, Object(i["b"])(["name", "avatar", "roles"])), created: function () {
                    this.getUser()
                }, methods: {
                    getUser: function () {
                        this.user = {
                            name: this.name,
                            role: this.roles.join(" | "),
                            email: "admin@test.com",
                            avatar: this.avatar
                        }
                    }
                }
            }, E = T, I = Object(d["a"])(E, a, s, !1, null, null, null);
        e["default"] = I.exports
    }
}]);