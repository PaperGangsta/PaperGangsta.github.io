(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{532:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"什么是workbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是workbox"}},[s._v("#")]),s._v(" 什么是Workbox？")]),s._v(" "),a("p",[s._v("Workbox是一组库，可以为Progressive Web App的生产就绪服务工作者提供支持。可帮助编写service worker以及使用CacheStorage API进行缓存")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/image-20210204152852128.png",alt:"image-20210204152852128"}})]),s._v(" "),a("h2",{attrs:{id:"route-requests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#route-requests"}},[s._v("#")]),s._v(" Route Requests")]),s._v(" "),a("h3",{attrs:{id:"匹配请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配请求"}},[s._v("#")]),s._v(" 匹配请求")]),s._v(" "),a("p",[s._v("workbox中匹配路由的3种方式:")]),s._v(" "),a("ul",[a("li",[s._v("通过"),a("code",[s._v("string")]),s._v("来匹配route")]),s._v(" "),a("li",[s._v("通过"),a("code",[s._v("正则表达式")]),s._v("来匹配route")]),s._v(" "),a("li",[s._v("通过回调函数来匹配route")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("registerRoute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'workbox-routing'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("registerRoute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/logo.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这个仅与来源的请求去相匹配")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://some-other-origin.com/logo.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  handler\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("registerRoute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\\\.js$'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/blog/\\\\d{4}/\\\\d{2}/.+'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  jsHandler\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("matchFunction")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("href "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://example.com/app.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("registerRoute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  matchFunction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  handler\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h3",{attrs:{id:"通过route匹配到请求以后-就可以通过策略来处理这些请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过route匹配到请求以后-就可以通过策略来处理这些请求"}},[s._v("#")]),s._v(" 通过route匹配到请求以后,就可以通过策略来处理这些请求")]),s._v(" "),a("p",[s._v("workbox提供了2种方式来处理请求")]),s._v(" "),a("ol",[a("li",[s._v("使用Workbox所提供的策略中的一种策略来解决"),a("a",{attrs:{href:"https://developers.google.cn/web/tools/workbox/modules/workbox-strategies",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("workbox-strategies")]),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("提供一个回调函数，该函数返回一个promise resolves "),a("code",[s._v("Response")])])]),s._v(" "),a("h4",{attrs:{id:"_1-通过workbox-strategy-来处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-通过workbox-strategy-来处理"}},[s._v("#")]),s._v(" 1.通过Workbox Strategy 来处理")])])}),[],!1,null,null,null);t.default=e.exports}}]);