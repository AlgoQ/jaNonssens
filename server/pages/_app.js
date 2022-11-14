"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(956);
;// CONCATENATED MODULE: ./src/components/Footer.jsx



function NavLink({ href , children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        className: "transition hover:text-teal-500 dark:hover:text-teal-400",
        children: children
    });
}
function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "mt-32",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container.Outer */.W.Outer, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container.Inner */.W.Inner, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-center justify-between gap-6 sm:flex-row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                        href: "/#top",
                                        children: "Ja"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                        href: "/#content",
                                        children: "Ja Nonssens Op Doek"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                        href: "/#bottom",
                                        children: "Contact"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-sm text-zinc-400 dark:text-zinc-500",
                                children: [
                                    "\xa9 ",
                                    new Date().getFullYear(),
                                    " Jo Janssens. Alle rechten gereserveerd - Made by ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://github.com/AlgoQ",
                                        className: "underline text-slate-800",
                                        children: "AlgoQ"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/future/image.js
var future_image = __webpack_require__(1608);
var image_default = /*#__PURE__*/__webpack_require__.n(future_image);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./src/images/avatar.jpg
/* harmony default export */ const avatar = ({"src":"/_next/static/media/avatar.acb1c000.jpg","height":2015,"width":2008,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAIROn//EABoQAAIDAQEAAAAAAAAAAAAAAAIDAQQRAFH/2gAIAQEAAT8AQCQpOsmwiaWyMbkD5Gd//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERMf/aAAgBAgEBPwCt66f/xAAWEQEBAQAAAAAAAAAAAAAAAAARAQD/2gAIAQMBAT8AJAhv/9k=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/Header.jsx








function clamp(number, a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    return Math.min(Math.max(number, min), max);
}
function AvatarContainer({ className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()(className, "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"),
        ...props
    });
}
function Avatar({ large =false , className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "/",
        "aria-label": "Home",
        className: external_clsx_default()(className, "pointer-events-auto"),
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: avatar,
            alt: "",
            sizes: large ? "4rem" : "2.25rem",
            className: external_clsx_default()("rounded-full bg-zinc-100 object-cover dark:bg-zinc-800", large ? "h-16 w-16" : "h-9 w-9"),
            priority: true
        })
    });
}
function Header() {
    let isHomePage = (0,router_namespaceObject.useRouter)().pathname === "/";
    let headerRef = (0,external_react_.useRef)();
    let avatarRef = (0,external_react_.useRef)();
    let isInitial = (0,external_react_.useRef)(true);
    (0,external_react_.useEffect)(()=>{
        let downDelay = avatarRef.current?.offsetTop ?? 0;
        let upDelay = 64;
        function setProperty(property, value) {
            document.documentElement.style.setProperty(property, value);
        }
        function removeProperty(property) {
            document.documentElement.style.removeProperty(property);
        }
        function updateHeaderStyles() {
            let { top , height  } = headerRef.current.getBoundingClientRect();
            let scrollY = clamp(window.scrollY, 0, document.body.scrollHeight - window.innerHeight);
            if (isInitial.current) {
                setProperty("--header-position", "sticky");
            }
            setProperty("--content-offset", `${downDelay}px`);
            if (isInitial.current || scrollY < downDelay) {
                setProperty("--header-height", `${downDelay + height}px`);
                setProperty("--header-mb", `${-downDelay}px`);
            } else if (top + height < -upDelay) {
                let offset = Math.max(height, scrollY - upDelay);
                setProperty("--header-height", `${offset}px`);
                setProperty("--header-mb", `${height - offset}px`);
            } else if (top === 0) {
                setProperty("--header-height", `${scrollY + height}px`);
                setProperty("--header-mb", `${-scrollY}px`);
            }
            if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
                setProperty("--header-inner-position", "fixed");
                removeProperty("--header-top");
                removeProperty("--avatar-top");
            } else {
                removeProperty("--header-inner-position");
                setProperty("--header-top", "0px");
                setProperty("--avatar-top", "0px");
            }
        }
        function updateAvatarStyles() {
            if (!isHomePage) {
                return;
            }
            let fromScale = 1;
            let toScale = 36 / 64;
            let fromX = 0;
            let toX = 2 / 16;
            let scrollY = downDelay - window.scrollY;
            let scale = scrollY * (fromScale - toScale) / downDelay + toScale;
            scale = clamp(scale, fromScale, toScale);
            let x = scrollY * (fromX - toX) / downDelay + toX;
            x = clamp(x, fromX, toX);
            setProperty("--avatar-image-transform", `translate3d(${x}rem, 0, 0) scale(${scale})`);
            let borderScale = 1 / (toScale / scale);
            let borderX = (-toX + x) * borderScale;
            let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`;
            setProperty("--avatar-border-transform", borderTransform);
            setProperty("--avatar-border-opacity", scale === toScale ? 1 : 0);
        }
        function updateStyles() {
            updateHeaderStyles();
            updateAvatarStyles();
            isInitial.current = false;
        }
        updateStyles();
        window.addEventListener("scroll", updateStyles, {
            passive: true
        });
        window.addEventListener("resize", updateStyles);
        return ()=>{
            window.removeEventListener("scroll", updateStyles, {
                passive: true
            });
            window.removeEventListener("resize", updateStyles);
        };
    }, [
        isHomePage
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: "pointer-events-none relative z-50 flex flex-col",
                style: {
                    height: "var(--header-height)",
                    marginBottom: "var(--header-mb)"
                },
                children: [
                    isHomePage && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                ref: avatarRef,
                                className: "order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
                                className: "top-0 order-last -mb-3 pt-3",
                                style: {
                                    position: "var(--header-position)"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "top-[var(--avatar-top,theme(spacing.3))] w-full",
                                    style: {
                                        position: "var(--header-inner-position)"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(AvatarContainer, {
                                                className: "absolute left-0 top-3 origin-left transition-opacity",
                                                style: {
                                                    opacity: "var(--avatar-border-opacity, 0)",
                                                    transform: "var(--avatar-border-transform)"
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Avatar, {
                                                large: true,
                                                className: "block h-16 w-16 origin-left",
                                                style: {
                                                    transform: "var(--avatar-image-transform)"
                                                }
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        ref: headerRef,
                        className: "top-0 z-10 h-16 pt-6",
                        style: {
                            position: "var(--header-position)"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
                            className: "top-[var(--header-top,theme(spacing.6))] w-full",
                            style: {
                                position: "var(--header-inner-position)"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative flex gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex flex-1",
                                        children: !isHomePage && /*#__PURE__*/ jsx_runtime_.jsx(AvatarContainer, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Avatar, {})
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex justify-end md:flex-1"
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            isHomePage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    height: "var(--content-offset)"
                }
            })
        ]
    });
}

;// CONCATENATED MODULE: external "focus-visible"
const external_focus_visible_namespaceObject = require("focus-visible");
;// CONCATENATED MODULE: ./src/pages/_app.jsx






function usePrevious(value) {
    let ref = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        ref.current = value;
    }, [
        value
    ]);
    return ref.current;
}
function App({ Component , pageProps , router  }) {
    let previousPathname = usePrevious(router.pathname);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fixed inset-0 flex justify-center sm:px-8",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex w-full max-w-7xl lg:px-8",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            previousPathname: previousPathname,
                            ...pageProps
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [608,676,664,956], () => (__webpack_exec__(5142)));
module.exports = __webpack_exports__;

})();