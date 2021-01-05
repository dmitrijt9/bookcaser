(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{454:function(e,t,o){"use strict";o.r(t);o(85),o(86),o(46);var n=o(36),r=(o(33),o(5)),l=o(37),c={props:{books:{type:Array,required:!0},isSearching:{type:Boolean,default:!1}},data:function(){return{addToShelfModalOpen:!1,volumeEditing:null}},computed:{sortedBooks:function(){var e=this;return Object(l.a)(this.books).sort((function(a,b){return e.isSearching?a.id-b.id:new Date(b.userInfo.updated)-new Date(a.userInfo.updated)}))}},methods:{openAddToShelfModal:function(e){this.addToShelfModalOpen=!0,this.volumeEditing=e},addVolumeToShelf:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(t.volumeEditing){o.next=2;break}return o.abrupt("return");case 2:if(t.$nuxt.$loading.start(),"object"!==Object(n.a)(e)){o.next=7;break}e.forEach(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(s){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.addVolumeToBookshelf(t.volumeEditing.id,s);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),o.next=9;break;case 7:return o.next=9,t.$api.addVolumeToBookshelf(t.volumeEditing.id,e);case 9:t.$emit("change"),t.$nuxt.$loading.finish(),setTimeout(Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.getMyBookshelves();case 2:case"end":return e.stop()}}),e)}))),500),t.$notify.success("Book ".concat(t.volumeEditing.volumeInfo.title," was added to shelf 👌")),t.volumeEditing=null;case 14:case"end":return o.stop()}}),o)})))()}}},d=o(3),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.books.length>0?o("ul",{staticClass:"grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"},e._l(e.sortedBooks,(function(t){return o("BookListItem",{key:t.id,attrs:{book:t,"is-searching":e.isSearching},on:{addToShelf:e.openAddToShelfModal,removeBook:function(t){return e.$emit("change")}}})})),1):o("div",{staticClass:"flex flex-col items-center justify-center py-8 space-y-4"},[o("Icon",{staticClass:"w-56 h-56 text-primary animate-pulse",attrs:{name:"cloudSnow"}}),e._v(" "),o("span",{staticClass:"text-2xl font-medium"},[e._v("Nothing here 🙅")])],1),e._v(" "),o("AddToShelfModal",{attrs:{open:e.addToShelfModalOpen},on:{"update:open":function(t){e.addToShelfModalOpen=t},input:e.addVolumeToShelf}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BookListItem:o(455).default,Icon:o(106).default,AddToShelfModal:o(456).default})},455:function(e,t,o){"use strict";o.r(t);o(108),o(46),o(33);var n=o(5),r={props:{book:{type:Object,required:!0},isSearching:{type:Boolean,default:!1}},data:function(){return{dropdownOpen:!1}},computed:{volumeInfo:function(){return this.book.volumeInfo},searchInfo:function(){return this.book.searchInfo},userInfo:function(){return this.book.userInfo},saleInfo:function(){return this.book.saleInfo},currentBookshelf:function(){return this.$store.getters.currentBookshelf},bookDropdownItems:function(){var e=[{label:"Add to shelf",onClick:this.addToShelf,icon:"plus"}];return this.$store.getters.canRemoveFromBookshelf&&!this.isSearching&&e.push({label:"Remove",onClick:this.removeFromShelf,icon:"trash"}),e}},methods:{removeFromShelf:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!confirm("Are you sure to remove volume ".concat(e.volumeInfo.title," from the shelf ").concat(e.currentBookshelf.title,"?"))){t.next=9;break}return e.$nuxt.$loading.start(),t.next=4,e.$api.removeVolumeFromBookshelf(e.book.id,e.currentBookshelf.id);case 4:e.$emit("removeBook"),e.dropdownOpen=!1,e.$nuxt.$loading.finish(),setTimeout(Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.getMyBookshelves();case 2:case"end":return t.stop()}}),t)}))),500),e.$notify.success("Book ".concat(e.volumeInfo.title," was removed from the shelf 🗑"));case 9:case"end":return t.stop()}}),t)})))()},addToShelf:function(){this.$emit("addToShelf",this.book),this.dropdownOpen=!1}}},l=o(3),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",{staticClass:"relative col-span-1 flex flex-col text-center bg-white rounded-md shadow divide-y divide-secondary-light"},[o("div",{staticClass:"flex-1 flex flex-col px-2 py-3 relative"},[o("img",{staticClass:"w-24 h-32 flex-shrink-0 mx-auto bg-secondary-light rounded-md object-cover",attrs:{src:e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:"http://books.google.com/books/content?id=Pk23CwAAAEAJ&printsec=frontcover&img=1&zoom=1&uvs=3&source=gbs_api",alt:e.volumeInfo.title}}),e._v(" "),o("h3",{staticClass:"mt-3 text-secondary text-sm font-medium"},[e._v("\n      "+e._s(e.volumeInfo.title)+"\n    ")]),e._v(" "),o("dl",{staticClass:"mt-1 flex-grow flex flex-col justify-between"},[o("dt",{staticClass:"sr-only"},[e._v("Title")]),e._v(" "),o("dd",{staticClass:"text-secondary text-sm divide-x opacity-75"},e._l(e.volumeInfo.authors,(function(t){return o("span",{key:t,staticClass:"p-1"},[e._v(e._s(t))])})),0),e._v(" "),o("dt",{staticClass:"sr-only"},[e._v("Category")]),e._v(" "),o("dd",{staticClass:"mt-1 flex flex-wrap justify-center"},e._l(e.volumeInfo.categories,(function(t){return o("span",{key:t,staticClass:"px-2 py-1 m-0.5 text-primary text-xs font-medium bg-primary-light rounded-full"},[e._v(e._s(t))])})),0)]),e._v(" "),o("BookListItemDropdown",{attrs:{open:e.dropdownOpen}},[e.bookDropdownItems.length<=0?o("div",[e._v("No Actions")]):e._e(),e._v(" "),e._l(e.bookDropdownItems,(function(i){return o("a",{key:i.label,staticClass:"flex items-center justify-center space-x-2 px-2 py-2 text-sm text-secondary hover:bg-secondary-light hover:bg-opacity-50 transition-all duration-150",attrs:{href:"#",role:"menuitem"},on:{click:function(e){return e.preventDefault(),i.onClick(e)}}},[o("span",{staticClass:"flex-shrink"},[o("Icon",{staticClass:"w-5 h-5",attrs:{name:i.icon}})],1),e._v(" "),o("span",[e._v(e._s(i.label))])])}))],2)],1),e._v(" "),o("div",{staticClass:"relative"},[o("div",{staticClass:"-mt-px flex divide-x divide-secondary-light"},[o("div",{staticClass:"w-0 flex-1 flex"},[o("a",{staticClass:"relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-2 text-sm text-secondary border border-transparent rounded-bl-lg hover:text-primary transition-colors duration-150",attrs:{href:e.volumeInfo.canonicalVolumeLink,target:"_blank"}},[o("Icon",{staticClass:"w-5 h-5",attrs:{name:"eye"}})],1)]),e._v(" "),o("div",{staticClass:"-ml-px w-0 flex-1 flex"},[o("a",{staticClass:"relative w-0 flex-1 inline-flex items-center justify-center py-2 text-sm text-secondary border border-transparent rounded-br-lg hover:text-primary transition-colors duration-150",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.dropdownOpen=!e.dropdownOpen}}},[o("Icon",{staticClass:"w-5 h-5",attrs:{name:"dots"}})],1)])])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Icon:o(106).default,BookListItemDropdown:o(457).default})},456:function(e,t,o){"use strict";o.r(t);o(60);var n={props:{open:{type:Boolean,default:!1}},data:function(){return{selectedBookshelves:[]}},computed:{addablePrivateBookshelves:function(){return this.$store.getters.addableBookshelves.filter((function(s){return"PRIVATE"===s.access})).sort((function(e,t){return e.id-t.id}))},addablePublicBookshelves:function(){return this.$store.getters.addableBookshelves.filter((function(s){return"PUBLIC"===s.access})).sort((function(e,t){return e.id-t.id}))}},methods:{addSelected:function(){this.$emit("input",this.selectedBookshelves),this.close()},close:function(){this.$emit("update:open",!1),this.selectedBookshelves=[]}}},r=o(3),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.open?o("div",{staticClass:"fixed z-10 inset-0 overflow-y-auto"},[o("div",{staticClass:"flex items-end justify-center min-h-screen pt-4 px-2 pb-12 text-center sm:block sm:p-0"},[o("transition",{attrs:{"enter-active-class":"transition ease-out duration-300","enter-class":"transition opacity-0","enter-to-class":"transition opacity-100","leave-active-class":"transition ease-in duration-200","leave-class":"transition opacity-100","leave-to-class":"transition opacity-0"}},[e.open?o("div",{staticClass:"fixed inset-0",attrs:{"aria-hidden":"true"}},[o("div",{staticClass:"absolute inset-0 bg-secondary opacity-75"})]):e._e()]),e._v(" "),o("span",{staticClass:"hidden sm:inline-block sm:align-middle sm:h-screen",attrs:{"aria-hidden":"true"}},[e._v("​")]),e._v(" "),o("transition",{attrs:{"enter-active-class":"transition ease-out duration-300","enter-class":"transform opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"transform opacity-100 translate-y-0 sm:scale-100","leave-active-class":"transition ease-in duration-200","leave-class":"transform opacity-100 translate-y-0 sm:scale-100","leave-to-class":"transform opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}},[e.open?o("div",{staticClass:"inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6",attrs:{role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"}},[o("div",[o("div",{staticClass:"mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary-light"},[o("svg",{staticClass:"h-6 w-6 text-primary",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])]),e._v(" "),o("div",{staticClass:"mt-3 text-center"},[o("h3",{staticClass:"text-lg leading-6 font-medium text-secondary",attrs:{id:"modal-headline"}},[e._v("\n              Select bookshelves\n            ")]),e._v(" "),o("div",{staticClass:"mt-2 h-56 overflow-y-auto border border-secondary-light"},[o("fieldset",[o("legend",{staticClass:"sr-only"},[e._v("Add volume to bookshelf")]),e._v(" "),o("ul",{staticClass:"relative bg-white rounded-md -space-y-px"},[o("label",{staticClass:"w-full block text-left p-2 font-light text-secondary opacity-50 uppercase text-sm"},[e._v("Private")]),e._v(" "),e._l(e.addablePublicBookshelves,(function(b){return o("li",{key:b.id},[o("div",{staticClass:"relative px-3 py-2 flex flex-no-wrap md:pl-4 md:pr-4"},[o("label",{staticClass:"flex items-center text-sm cursor-pointer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedBookshelves,expression:"selectedBookshelves"}],staticClass:"h-5 w-5 text-primary cursor-pointer border border-primary-light rounded-sm outline-none focus:outline-none",attrs:{name:"pricing_plan",type:"checkbox","aria-describedby":"bookshelf "+b.title},domProps:{value:b.id,checked:Array.isArray(e.selectedBookshelves)?e._i(e.selectedBookshelves,b.id)>-1:e.selectedBookshelves},on:{change:function(t){var o=e.selectedBookshelves,n=t.target,r=!!n.checked;if(Array.isArray(o)){var l=b.id,c=e._i(o,l);n.checked?c<0&&(e.selectedBookshelves=o.concat([l])):c>-1&&(e.selectedBookshelves=o.slice(0,c).concat(o.slice(c+1)))}else e.selectedBookshelves=r}}}),e._v(" "),o("span",{staticClass:"ml-3 font-medium text-secondary text-base"},[e._v("\n                          "+e._s(b.title)+"\n                        ")])])])])}))],2),e._v(" "),o("ul",{staticClass:"relative bg-white rounded-md -space-y-px"},[o("label",{staticClass:"w-full block text-left p-2 font-light text-secondary opacity-50 uppercase text-sm"},[e._v("\n                    Public\n                  ")]),e._v(" "),e._l(e.addablePrivateBookshelves,(function(b){return o("li",{key:b.id},[o("div",{staticClass:"relative px-3 py-2 flex flex-no-wrap md:pl-4 md:pr-4"},[o("label",{staticClass:"flex items-center text-sm cursor-pointer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedBookshelves,expression:"selectedBookshelves"}],staticClass:"h-5 w-5 text-primary cursor-pointer border border-primary-light rounded-sm outline-none focus:outline-none",attrs:{name:"pricing_plan",type:"checkbox","aria-describedby":"bookshelf "+b.title},domProps:{value:b.id,checked:Array.isArray(e.selectedBookshelves)?e._i(e.selectedBookshelves,b.id)>-1:e.selectedBookshelves},on:{change:function(t){var o=e.selectedBookshelves,n=t.target,r=!!n.checked;if(Array.isArray(o)){var l=b.id,c=e._i(o,l);n.checked?c<0&&(e.selectedBookshelves=o.concat([l])):c>-1&&(e.selectedBookshelves=o.slice(0,c).concat(o.slice(c+1)))}else e.selectedBookshelves=r}}}),e._v(" "),o("span",{staticClass:"ml-3 font-medium text-secondary text-base"},[e._v("\n                          "+e._s(b.title)+"\n                        ")])])])])}))],2)])])])]),e._v(" "),o("div",{staticClass:"mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense"},[o("Button",{staticClass:"sm:col-start-2",attrs:{type:"primary"},on:{click:e.addSelected}},[e._v("\n            Add selected\n          ")]),e._v(" "),o("Button",{staticClass:"sm:col-start-1 mt-3 sm:mt-0",on:{click:e.close}},[e._v("\n            Cancel\n          ")])],1)]):e._e()])],1)]):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:o(107).default})},457:function(e,t,o){"use strict";o.r(t);var n={props:{open:{type:Boolean,default:!1}}},r=o(3),component=Object(r.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{"enter-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","enter-active-class":"transition ease-out duration-200","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95","leave-active-class":"transition ease-in duration-75"}},[this.open?t("div",{staticClass:"absolute inset-0 mx-auto mb-2 w-full flex items-center py-1 justify-center rounded-md shadow-md bg-secondary bg-opacity-75",attrs:{role:"menu","aria-orientation":"vertical","aria-labelledby":"user-menu"}},[t("div",{staticClass:"max-h-full overflow-y-auto w-3/4 bg-white rounded-lg py-1"},[this._t("default")],2)]):this._e()])}),[],!1,null,null,null);t.default=component.exports},464:function(e,t,o){"use strict";o.r(t);o(46),o(33);var n=o(5),r={layout:"app",asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var o,n,r,l,c,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.params.id,n=e.$api,r=e.store,t.next=3,n.getBookshelfVolumes(o);case 3:return l=t.sent,c=l.totalItems,d=l.items,r.commit("currentBookshelfId",o),t.abrupt("return",{books:d||[],totalItems:c||0,bookshelfId:parseInt(o)});case 8:case"end":return t.stop()}}),t)})))()},computed:{currentShelf:function(){return this.$store.getters.currentBookshelf},actionsMenu:function(){var e=[];return this.$store.getters.canRemoveFromBookshelf&&e.push({label:"Clear bookshelf",onClick:this.clearBookshelf,icon:"x-circle"}),e}},methods:{fetchVolumes:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var r,l,c;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t.$nuxt.$loading.start(),o.next=3,t.$api.getBookshelfVolumes(e);case 3:r=o.sent,l=r.totalItems,c=r.items,t.totalItems=l||0,t.books=c||[],setTimeout(Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.getMyBookshelves();case 2:case"end":return e.stop()}}),e)}))),500),t.$nuxt.$loading.finish();case 10:case"end":return o.stop()}}),o)})))()},clearBookshelf:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!confirm("Are you sure to clear all volumes from ".concat(e.currentShelf.title,"?"))){t.next=8;break}return e.$nuxt.$loading.start(),t.next=4,e.$api.clearBookshelf(e.currentShelf.id);case 4:return t.next=6,e.fetchVolumes(e.bookshelfId);case 6:e.$notify.success("All volumes from ".concat(e.currentShelf.title," cleared 🧹")),e.$nuxt.$loading.finish();case 8:case"end":return t.stop()}}),t)})))()}}},l=o(3),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"flex flex-col space-y-4 pt-3 pb-4"},[o("div",{staticClass:"inline-flex items-center space-x-4 py-2"},[o("h1",{staticClass:"text-xl font-semibold text-secondary"},[e._v("\n      "+e._s(e.currentShelf&&e.currentShelf.title)+"\n    ")]),e._v(" "),o("div",{staticClass:"inline-flex items-center space-x-2"},e._l(e.actionsMenu,(function(a){return o("button",{key:a.label,staticClass:"bg-white rounded-md inline-flex text-secondary hover:text-black focus:outline-none transition duration-150",attrs:{type:"button",title:a.label},on:{click:a.onClick}},[o("span",{staticClass:"sr-only"},[e._v(e._s(a.label))]),e._v(" "),o("Icon",{staticClass:"w-6 h-6",attrs:{name:a.icon}})],1)})),0)]),e._v(" "),o("BooksList",{attrs:{books:e.books},on:{change:function(t){return e.fetchVolumes(e.bookshelfId)}}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Icon:o(106).default,Button:o(107).default,BooksList:o(454).default})}}]);