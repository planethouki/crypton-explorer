(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{734:function(t,e,n){var content=n(743);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(109).default)("3648e10e",content,!0,{sourceMap:!1})},742:function(t,e,n){"use strict";var r=n(734);n.n(r).a},743:function(t,e,n){(t.exports=n(108)(!1)).push([t.i,'.card-wrap[data-v-4e9834b8]{position:relative;width:50%}@media (min-width:576px){.card-wrap[data-v-4e9834b8]{width:33.33333%}}@media (min-width:768px){.card-wrap[data-v-4e9834b8]{width:25%}}@media (min-width:992px){.card-wrap[data-v-4e9834b8]{width:20%}}@media (min-width:1200px){.card-wrap[data-v-4e9834b8]{width:16.66667%}}@media (min-width:1440px){.card-wrap[data-v-4e9834b8]{width:12.5%}}@media (min-width:1920px){.card-wrap[data-v-4e9834b8]{width:10%}}@media (min-width:2560px){.card-wrap[data-v-4e9834b8]{width:8.33333%}}.card-wrap[data-v-4e9834b8]:before{content:"";display:block;padding-top:115%}.card-wrap .card[data-v-4e9834b8]{position:absolute;top:0;left:0;bottom:0;right:0}',""])},744:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(144),c={name:"AuctionList",props:{name:{type:String,default:function(){return""}},fields:{type:Object,default:function(){return{thumb:{label:"",class:"p-0"},id:{label:"Id"},price:{label:"Price"},seller:{label:"Seller"}}}}},data:function(){return{}},computed:Object(r.a)({},Object(o.b)("tons",["currentTons","asyncTonsCache"])),watch:{},mounted:function(){},methods:{}},d=n(38),l=Object(d.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overflow-auto"},[n("b-table",{attrs:{striped:"",hover:"",items:t.currentTons,fields:t.fields},scopedSlots:t._u([{key:"thumb",fn:function(data){return[n("img",{staticStyle:{height:"45px"},attrs:{src:data.item.imgSrc}})]}},{key:"id",fn:function(data){return[n("nuxt-link",{attrs:{to:"/ton/"+data.value}},[t._v(t._s(data.value))])]}},{key:"price",fn:function(data){return[t.asyncTonsCache[data.item.id]?[t.asyncTonsCache[data.item.id][t.name].shown?[n("span",[t._v(t._s(t.$web3.utils.fromWei(t.asyncTonsCache[data.item.id][t.name].price.toString())))])]:[n("span",[t._v("-")])]]:t._e()]}},{key:"seller",fn:function(data){return[t.asyncTonsCache[data.item.id]?[t.asyncTonsCache[data.item.id][t.name].shown?[n("nuxt-link",{attrs:{to:"/ownership/"+t.asyncTonsCache[data.item.id][t.name].seller}},[t._v(t._s(t.asyncTonsCache[data.item.id][t.name].seller))])]:[n("span",[t._v("-")])]]:t._e()]}}])})],1)},[],!1,null,"29d21f70",null).exports,m={name:"AuctionCard",props:{name:{type:String,default:function(){return""}}},data:function(){return{}},computed:Object(r.a)({},Object(o.b)("tons",["currentTons","asyncTonsCache"])),watch:{},mounted:function(){},methods:{}},h=(n(742),{components:{AuctionList:l,AuctionCard:Object(d.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-wrap"},[t._l(t.currentTons,function(e){return[t.asyncTonsCache[e.id]&&t.asyncTonsCache[e.id][t.name].shown?n("div",{key:e.id,staticClass:"card-wrap"},[n("div",{staticClass:"card"},[n("div",{staticClass:"p-3 position-absolute"},[n("nuxt-link",{attrs:{to:"/ton/"+e.id}},[t._v(t._s(e.id))])],1),n("img",{staticClass:"w-100",attrs:{src:e.imgSrc}})])]):t._e()]})],2)},[],!1,null,"4e9834b8",null).exports},data:function(){return{}},computed:Object(r.a)({},Object(o.b)(["tabs","type"]),Object(o.b)("tons",["tonsLoaded"])),asyncData:function(t){var e=t.params,n=t.store,r=e.type||n.getters.type||"card";return n.dispatch("doUpdateType",r),{page:e.page||1}},methods:{}}),w=Object(d.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-nav",{attrs:{tabs:""}},[t._l(t.tabs,function(e){return[n("b-nav-item",{attrs:{to:{name:"shop-page-type",params:{type:e.toLowerCase(),page:t.page}},active:t.type===e.toLowerCase()}},[t._v(t._s(e))])]}),n("li",{staticClass:"nav-item"},[n("div",{staticClass:"px-3 py-2"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.tonsLoaded,expression:"!tonsLoaded"}],staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])])])])],2),n("section",{attrs:{id:"tons"}},[t._l(t.tabs,function(e){return[t.type===e.toLowerCase()?n("Auction"+e,{tag:"component",attrs:{name:"sell"}}):t._e()]})],2)],1)},[],!1,null,null,null);e.default=w.exports}}]);