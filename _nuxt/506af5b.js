(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(t,e,n){"use strict";n(11);e.a=function(t){var e=t.$axios,n=(t.app,t.error);e.onRequest((function(t){console.log("Making request to "+t.url,t.params)})),e.onError((function(t){return n({statusCode:t.response&&t.response.status,message:t.message}),console.error(t),Promise.resolve(!1)}))}},111:function(t,e,n){"use strict";n(25);var r=n(3);e.a=function(t,e){e("api",function(t,e){return{getMyBookshelves:function(){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$get("/mylibrary/bookshelves");case 3:r=n.sent,o=r.items,e.commit("bookshelves",o),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}}}(t.$axios,t.store))}},112:function(t,e,n){"use strict";n.r(e);var r=n(6),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"w-full inline-flex justify-center py-2 px-4 border border-secondary-light rounded-md shadow-sm bg-white text-sm font-medium text-secondary hover:bg-secondary-light transition-all duration-150",attrs:{type:"button"},on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(112).default})},151:function(t,e,n){var content=n(215);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("0d87c540",content,!0,{sourceMap:!1})},152:function(t,e,n){var content=n(218);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("36359727",content,!0,{sourceMap:!1})},165:function(t,e,n){"use strict";n(25);var r=n(3),o={fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.getMyBookshelves();case 2:case"end":return e.stop()}}),e)})))()}},l=n(6),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Navbar"),this._v(" "),e("div",{staticClass:"max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 mt-2"},[e("div",{staticClass:"max-w-6xl mx-auto"},[e("div",{staticClass:"flex"},[e("Sidebar",{staticClass:"hidden lg:flex w-1/5 mr-8"}),this._v(" "),e("Nuxt",{staticClass:"w-full lg:w-4/5"})],1)])])],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Navbar:n(239).default,Sidebar:n(240).default})},166:function(t,e,n){"use strict";var r=n(6),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},167:function(t,e,n){n(168),t.exports=n(169)},212:function(t,e,n){var content=n(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("e622d370",content,!0,{sourceMap:!1})},213:function(t,e,n){(e=n(36)(!1)).push([t.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}',""]),t.exports=e},214:function(t,e,n){"use strict";n(151)},215:function(t,e,n){(e=n(36)(!1)).push([t.i,".nuxt-link-active[data-v-3130aaec]{--border-opacity:1;border-color:#fc8181;border-color:rgba(252,129,129,var(--border-opacity))}",""]),t.exports=e},216:function(t,e,n){var map={"./bookcaser.vue":242,"./close.vue":243,"./menu.vue":244};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=216},217:function(t,e,n){"use strict";n(152)},218:function(t,e,n){(e=n(36)(!1)).push([t.i,".link-active[data-v-58db6c15]{--bg-opacity:1;background-color:#fed7d7;background-color:rgba(254,215,215,var(--bg-opacity))}",""]),t.exports=e},219:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o})),n.d(e,"getters",(function(){return l}));n(59);var r=function(){return{bookshelves:[]}},o={bookshelves:function(t,e){t.bookshelves=e}},l={bookshelvesPrivate:function(t){return t.bookshelves.filter((function(s){return"PRIVATE"===s.access}))},bookshelvesPublic:function(t){return t.bookshelves.filter((function(s){return"PUBLIC"===s.access}))}}},239:function(t,e,n){"use strict";n.r(e);n(25);var r=n(3),o={data:function(){return{profileDropdownOpen:!1,mobileMenuOpen:!1,menuLinks:[{title:"Home",route:"app",exact:!0},{title:"Discover",route:"app-discover",exact:!0}]}},methods:{logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:case"end":return e.stop()}}),e)})))()}}},l=(n(214),n(6)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"bg-white shadow"},[n("div",{staticClass:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},[n("div",{staticClass:"relative flex justify-between h-16"},[n("div",{staticClass:"absolute inset-y-0 left-0 flex items-center sm:hidden"},[n("button",{staticClass:"inline-flex items-center justify-center p-2 rounded-md hover:text-primary focus:outline-none",attrs:{"aria-expanded":"false"},on:{click:function(e){t.mobileMenuOpen=!t.mobileMenuOpen}}},[n("span",{staticClass:"sr-only"},[t._v("Open main menu")]),t._v(" "),t.mobileMenuOpen?n("Icon",{staticClass:"block h-6 w-6",attrs:{name:"close"}}):n("Icon",{staticClass:"block h-6 w-6",attrs:{name:"menu"}})],1)]),t._v(" "),n("div",{staticClass:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},[t._m(0),t._v(" "),n("div",{staticClass:"hidden sm:flex sm:ml-6 sm:space-x-8"},t._l(t.menuLinks,(function(e){return n("nuxt-link",{key:e.title,staticClass:"border-transparent text-secondary inline-flex items-center px-1 pt-1 hover:border-primary-light border-b-2 text-base",attrs:{to:{name:e.route},exact:e.exact}},[t._v("\n            "+t._s(e.title)+"\n          ")])})),1)]),t._v(" "),n("div",{staticClass:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},[n("div",{staticClass:"ml-3 relative"},[n("div",[n("button",{staticClass:"bg-white rounded-full flex text-sm focus:outline-none",attrs:{id:"user-menu","aria-haspopup":"true"},on:{click:function(e){t.profileDropdownOpen=!t.profileDropdownOpen}}},[n("span",{staticClass:"sr-only"},[t._v("Open user menu")]),t._v(" "),n("img",{staticClass:"h-8 w-8 rounded-full",attrs:{src:t.$store.state.auth.user.picture,alt:""}})])]),t._v(" "),n("transition",{attrs:{"enter-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","enter-active-class":"transition ease-out duration-200","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95","leave-active-class":"transition ease-in duration-75"}},[t.profileDropdownOpen?n("div",{staticClass:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white",attrs:{role:"menu","aria-orientation":"vertical","aria-labelledby":"user-menu"}},[n("a",{staticClass:"block px-4 py-2 text-sm text-secondary hover:bg-secondary-light",attrs:{href:"#",role:"menuitem"}},[t._v("Your Profile")]),t._v(" "),n("a",{staticClass:"block px-4 py-2 text-sm text-secondary hover:bg-secondary-light",attrs:{href:"#",role:"menuitem"}},[t._v("Settings")]),t._v(" "),n("a",{staticClass:"block px-4 py-2 text-sm text-secondary hover:bg-secondary-light",attrs:{href:"#",role:"menuitem"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Sign out")])]):t._e()])],1)])])]),t._v(" "),n("div",{staticClass:"sm:hidden",class:t.mobileMenuOpen?"block":"hidden"},[n("div",{staticClass:"pt-2 pb-4 space-y-1"},t._l(t.menuLinks,(function(e){return n("nuxt-link",{key:e.title,staticClass:"border-transparent text-secondary hover:bg-secondary-light hover:border-primary-light hover:text-secondary block pl-3 pr-4 py-2 border-l-4 text-base font-medium",attrs:{exact:e.exact,to:{name:e.route}}},[t._v("\n        "+t._s(e.title)+"\n      ")])})),1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-shrink-0 flex items-center space-x-2"},[e("span",{staticClass:"block text-2xl font-light"},[this._v("bookcaser")])])}],!1,null,"3130aaec",null);e.default=component.exports;installComponents(component,{Icon:n(241).default,Button:n(112).default})},240:function(t,e,n){"use strict";n.r(e);var r={computed:{privateBookshelves:function(){return this.$store.getters.bookshelvesPrivate},publicBookshelves:function(){return this.$store.getters.bookshelvesPublic}}},o=(n(217),n(6)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col pt-3 pb-4 bg-white overflow-y-auto"},[n("div",{staticClass:"flex-grow flex flex-col"},[n("nav",{staticClass:"flex-1 px-2 bg-white space-y-1",attrs:{"aria-label":"Sidebar"}},[n("span",{staticClass:"flex items-center px-2 py-2 text-sm font-light uppercase opacity-50"},[t._v("public")]),t._v(" "),t._l(t.publicBookshelves,(function(s){return n("nuxt-link",{key:s.id+s.title,staticClass:"text-secondary hover:bg-secondary-light flex items-center px-2 py-2 text-sm font-medium rounded-md",attrs:{to:{name:"app-shelf-id",params:{id:s.id}}}},[n("span",[t._v(t._s(s.title))])])})),t._v(" "),n("span",{staticClass:"flex items-center px-2 py-2 text-sm font-light uppercase opacity-50"},[t._v("private")]),t._v(" "),t._l(t.privateBookshelves,(function(s){return n("nuxt-link",{key:s.id+s.title,staticClass:"text-secondary hover:bg-secondary-light flex items-center px-2 py-2 text-sm font-medium rounded-md",attrs:{to:{name:"app-discover"}}},[n("span",[t._v(t._s(s.title))])])}))],2)])])}),[],!1,null,"58db6c15",null);e.default=component.exports},241:function(t,e,n){"use strict";n.r(e);n(47);var r={props:{name:{type:String,required:!0}},computed:{computedComponent:function(){try{return n(216)("./".concat(this.name,".vue")).default}catch(t){return null}}}},o=n(6),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)(this.computedComponent,{tag:"component"})}),[],!1,null,null,null);e.default=component.exports},242:function(t,e,n){"use strict";n.r(e);var r=n(6),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M83.334 29.1665H16.6673C12.0649 29.1665 8.33398 32.8975 8.33398 37.4998V79.1665C8.33398 83.7689 12.0649 87.4998 16.6673 87.4998H83.334C87.9364 87.4998 91.6673 83.7689 91.6673 79.1665V37.4998C91.6673 32.8975 87.9364 29.1665 83.334 29.1665Z",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),this._v(" "),e("path",{attrs:{d:"M66.666 30.0002V15.1853C66.666 14.6942 65.7442 14.2232 64.1032 13.8759C62.4623 13.5286 60.2367 13.3335 57.916 13.3335H40.416C38.0954 13.3335 35.8698 13.5286 34.2288 13.8759C32.5879 14.2232 31.666 14.6942 31.666 15.1853V22.5928V30.0002",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),this._v(" "),e("path",{attrs:{d:"M33.334 43.3335H43.334C45.1021 43.3335 46.7978 44.0359 48.048 45.2861C49.2983 46.5364 50.0007 48.2321 50.0007 50.0002V73.3335C50.0007 72.0074 49.4739 70.7356 48.5362 69.798C47.5985 68.8603 46.3267 68.3335 45.0007 68.3335H33.334V43.3335Z",stroke:"#FC8181","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),this._v(" "),e("path",{attrs:{d:"M66.6667 43.3335H56.6667C54.8986 43.3335 53.2029 44.0359 51.9526 45.2861C50.7024 46.5364 50 48.2321 50 50.0002V73.3335C50 72.0074 50.5268 70.7356 51.4645 69.798C52.4021 68.8603 53.6739 68.3335 55 68.3335H66.6667V43.3335Z",stroke:"#FC8181","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])}),[],!1,null,null,null);e.default=component.exports},243:function(t,e,n){"use strict";n.r(e);var r=n(6),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])}),[],!1,null,null,null);e.default=component.exports},244:function(t,e,n){"use strict";n.r(e);var r=n(6),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})])}),[],!1,null,null,null);e.default=component.exports}},[[167,6,1,7]]]);