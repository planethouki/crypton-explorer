(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{223:function(t,e,n){"use strict";var r={name:"AccountLinkFacade",props:{account:{type:String,required:!0}}},c=n(30),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{attrs:{href:"https://opensea.io/accounts/"+this.account,target:"_blank",rel:"noreferrer noopener"}},[this._v(this._s(this.account)+"➚")])])}),[],!1,null,"37a3b960",null);e.a=component.exports},224:function(t,e,n){var content=n(228);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("5b1a6454",content,!0,{sourceMap:!1})},227:function(t,e,n){"use strict";var r=n(224);n.n(r).a},228:function(t,e,n){(e=n(47)(!1)).push([t.i,'.card-wrap[data-v-79aa8733]{position:relative;width:50%}@media (min-width:576px){.card-wrap[data-v-79aa8733]{width:33.33333%}}@media (min-width:768px){.card-wrap[data-v-79aa8733]{width:25%}}@media (min-width:992px){.card-wrap[data-v-79aa8733]{width:20%}}@media (min-width:1200px){.card-wrap[data-v-79aa8733]{width:16.66667%}}@media (min-width:1440px){.card-wrap[data-v-79aa8733]{width:12.5%}}@media (min-width:1920px){.card-wrap[data-v-79aa8733]{width:10%}}@media (min-width:2560px){.card-wrap[data-v-79aa8733]{width:8.33333%}}.card-wrap[data-v-79aa8733]:before{content:"";display:block;padding-top:115%}.card-wrap .card[data-v-79aa8733]{position:absolute;top:0;left:0;bottom:0;right:0}',""]),t.exports=e},231:function(t,e,n){"use strict";var r={name:"AuctionList",components:{AccountLinkFacade:n(223).a},props:{name:{type:String,required:!0},currentTons:{type:Array,required:!0},asyncTonsCache:{type:Object,required:!0},fields:{type:Array,default:function(){return[{key:"thumb",label:"",class:"p-0"},{key:"id",label:"Id"},{key:"price",label:"Price"},{key:"seller",label:"Seller"}]}}}},c=n(30),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overflow-auto"},[n("b-table",{attrs:{striped:"",hover:"",items:t.currentTons,fields:t.fields},scopedSlots:t._u([{key:"cell(thumb)",fn:function(data){return[n("img",{staticStyle:{height:"45px"},attrs:{src:data.item.imgSrc}})]}},{key:"cell(id)",fn:function(data){return[n("nuxt-link",{attrs:{to:"/ton/"+data.value}},[t._v(t._s(data.value))])]}},{key:"cell(price)",fn:function(data){return[t.asyncTonsCache[data.item.id]?[t.asyncTonsCache[data.item.id][t.name].shown?[n("span",[t._v(t._s(t.asyncTonsCache[data.item.id][t.name].price))])]:[n("span",[t._v("-")])]]:[n("b-spinner",{attrs:{small:"",type:"grow"}})]]}},{key:"cell(seller)",fn:function(data){return[t.asyncTonsCache[data.item.id]?[t.asyncTonsCache[data.item.id][t.name].shown?[n("account-link-facade",{attrs:{account:t.asyncTonsCache[data.item.id][t.name].seller}})]:[n("span",[t._v("-")])]]:[n("b-spinner",{attrs:{small:"",type:"grow"}})]]}}])})],1)}),[],!1,null,"283fb3b7",null);e.a=component.exports},232:function(t,e,n){"use strict";var r={name:"AuctionCard",components:{AccountLinkFacade:n(223).a},props:{name:{type:String,required:!0},currentTons:{type:Array,required:!0},asyncTonsCache:{type:Object,required:!0}}},c=(n(227),n(30)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-wrap"},[t._l(t.currentTons,(function(e){return[n("div",{key:e.id,staticClass:"card-wrap"},[n("div",{staticClass:"card"},[t.asyncTonsCache[e.id]?t.asyncTonsCache[e.id][t.name].shown?t._e():[t._m(0,!0)]:[n("div",{staticClass:"position-absolute",staticStyle:{top:"0",bottom:"0",left:"0",right:"0",background:"rgba(255,255,255,0.9)"}},[n("div",{staticClass:"position-absolute",staticStyle:{top:"50%",left:"50%",transform:"translate(-50%,-50%)"}},[n("b-spinner",{attrs:{label:"Loading"}})],1)])],n("div",{staticClass:"p-3 position-absolute"},[n("nuxt-link",{attrs:{to:"/ton/"+e.id}},[t._v(t._s(e.id))])],1),n("img",{staticClass:"w-100",attrs:{src:e.imgSrc}})],2)])]}))],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"position-absolute",staticStyle:{top:"0",bottom:"0",left:"0",right:"0",background:"rgba(255,255,255,0.9)"}},[e("div",{staticClass:"position-absolute",staticStyle:{top:"50%",left:"50%",transform:"translate(-50%,-50%)"}},[e("span",{staticClass:"d-inline-block text-center font-weight-bold shadow"},[this._v("Not in Auction")])])])}],!1,null,"79aa8733",null);e.a=component.exports},243:function(t,e,n){"use strict";n.r(e);n(5),n(3),n(2),n(1),n(4);var r=n(0),c=n(231),o=n(232),l=n(54);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{AuctionList:c.a,AuctionCard:o.a},computed:m(m({},Object(l.b)(["tabs","totalSupply","perPage"])),Object(l.b)("tons",["currentTons","asyncTonsCache"])),asyncData:function(t){var e=t.params,n=t.store,r=e.type||n.getters.type||"card";return n.dispatch("doUpdateType",r),{page:e.page,type:r}},methods:{linkGen:function(t){return{name:"breed-page-type",params:{page:t,type:this.type}}}}},y=n(30),component=Object(y.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"d-flex d-md-none align-items-end justify-content-between"},[n("b-pagination-nav",{attrs:{"link-gen":t.linkGen,"number-of-pages":Math.ceil(this.totalSupply/this.perPage),value:t.page,limit:"10","prev-text":"prev","next-text":"next","use-router":"","hide-goto-end-buttons":""}}),n("b-nav",{attrs:{tabs:""}},[t._l(t.tabs,(function(e){return[t.type!==e.id?n("b-nav-item",{attrs:{to:{name:"breed-page-type",params:{type:e.id,page:t.page}},active:""}},[n("font-awesome-icon",{attrs:{icon:["fas",e.icon]}})],1):t._e()]}))],2)],1),n("div",{staticClass:"d-none d-md-flex align-items-end justify-content-between"},[n("b-pagination-nav",{attrs:{"link-gen":t.linkGen,"number-of-pages":Math.ceil(this.totalSupply/this.perPage),value:t.page,limit:"10","use-router":""}}),n("b-nav",{attrs:{tabs:""}},[t._l(t.tabs,(function(e){return[n("b-nav-item",{attrs:{to:{name:"breed-page-type",params:{type:e.id,page:t.page}},active:t.type===e.id}},[n("font-awesome-icon",{attrs:{icon:["fas",e.icon]}})],1)]}))],2)],1),n("section",{attrs:{id:"tons"}},[t._l(t.tabs,(function(e){return[t.type===e.id?n("Auction"+e.text,{tag:"component",attrs:{name:"seed",currentTons:t.currentTons,asyncTonsCache:t.asyncTonsCache}}):t._e()]}))],2)])}),[],!1,null,null,null);e.default=component.exports}}]);