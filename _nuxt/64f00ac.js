(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{477:function(e,t,r){"use strict";r.r(t);r(33);var n=r(5),o={layout:"app",data:function(){return{searchQuery:null,books:[]}},methods:{searchVolumes:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$nuxt.$loading.start(),t.next=3,e.$api.searchAllVolumes(e.searchQuery);case 3:e.books=t.sent,e.$nuxt.$loading.finish();case 5:case"end":return t.stop()}}),t)})))()}}},c=r(1),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"flex flex-col space-y-4 pt-3 pb-4"},[r("h1",{staticClass:"text-xl font-semibold text-secondary"},[e._v("Discover new books 🔍")]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.searchVolumes(t)}}},[r("Search",{attrs:{"search-query":e.searchQuery},on:{"update:searchQuery":function(t){e.searchQuery=t},"update:search-query":function(t){e.searchQuery=t}}})],1),e._v(" "),r("BooksList",{attrs:{books:e.books,"is-searching":""}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Search:r(470).default,BooksList:r(462).default})}}]);