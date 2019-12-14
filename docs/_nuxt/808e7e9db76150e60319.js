(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{738:function(t,e,n){"use strict";var r={name:"AccountLinkFacade",props:{account:{type:String,required:!0}}},c=n(38),component=Object(c.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{attrs:{target:"_blank",rel:"noreferrer noopener",href:"https://opensea.io/accounts/"+this.account}},[this._v(this._s(this.account))])])},[],!1,null,"5773f123",null);e.a=component.exports},744:function(t,e,n){var content=n(753);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("c449edf0",content,!0,{sourceMap:!1})},752:function(t,e,n){"use strict";var r=n(744);n.n(r).a},753:function(t,e,n){(t.exports=n(74)(!1)).push([t.i,'.card-wrap[data-v-26d37c15]{position:relative;width:50%}@media (min-width:576px){.card-wrap[data-v-26d37c15]{width:33.33333%}}@media (min-width:768px){.card-wrap[data-v-26d37c15]{width:25%}}@media (min-width:992px){.card-wrap[data-v-26d37c15]{width:20%}}@media (min-width:1200px){.card-wrap[data-v-26d37c15]{width:16.66667%}}@media (min-width:1440px){.card-wrap[data-v-26d37c15]{width:12.5%}}@media (min-width:1920px){.card-wrap[data-v-26d37c15]{width:10%}}@media (min-width:2560px){.card-wrap[data-v-26d37c15]{width:8.33333%}}.card-wrap[data-v-26d37c15]:before{content:"";display:block;padding-top:115%}.card-wrap .card[data-v-26d37c15]{position:absolute;top:0;left:0;bottom:0;right:0}',""])},754:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(146),o={name:"EntityList",components:{AccountLinkFacade:n(738).a},props:{fields:{type:Object,default:function(){return{thumb:{label:"",class:"p-0"},id:{label:"Id"},generation:{label:"Gen"},birthTime:{class:"d-none d-md-table-cell",label:"BirthTime (JST)"},owner:{class:"d-none d-md-table-cell",label:"Owner"}}}}},data:function(){return{}},computed:Object(r.a)({},Object(c.b)("tons",["currentTons","asyncTonsCache"])),mounted:function(){},methods:{}},d=n(38),l=Object(d.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overflow-auto"},[n("b-table",{attrs:{striped:"",hover:"",items:t.currentTons,fields:t.fields,"foot-clone":""},scopedSlots:t._u([{key:"thumb",fn:function(data){return[n("img",{staticStyle:{height:"45px"},attrs:{src:data.item.imgSrc}})]}},{key:"id",fn:function(data){return[n("nuxt-link",{attrs:{to:"/ton/"+data.value}},[t._v(t._s(data.value))])]}},{key:"generation",fn:function(data){return[t.asyncTonsCache[data.item.id]?n("span",["0"===t.asyncTonsCache[data.item.id].generation?[n("span",[t._v(t._s(t.asyncTonsCache[data.item.id].generation))])]:[n("nuxt-link",{attrs:{to:"/familytree/"+data.item.id}},[t._v(t._s(t.asyncTonsCache[data.item.id].generation))])]],2):t._e()]}},{key:"isBreeding",fn:function(data){return[t.asyncTonsCache[data.item.id]?n("span",[n("span",[t._v(t._s(t.asyncTonsCache[data.item.id].isBreeding))])]):t._e()]}},{key:"isReady",fn:function(data){return[t.asyncTonsCache[data.item.id]?n("span",[n("span",[t._v(t._s(t.asyncTonsCache[data.item.id].isReady))])]):t._e()]}},{key:"birthTime",fn:function(data){return[t.asyncTonsCache[data.item.id]?n("span",[n("span",[t._v(t._s(t.$unixtimeFormat(t.asyncTonsCache[data.item.id].birthTime)))])]):t._e()]}},{key:"owner",fn:function(data){return[t.asyncTonsCache[data.item.id]?n("span",[n("account-link-facade",{attrs:{account:t.asyncTonsCache[data.item.id].owner}})],1):t._e()]}}])})],1)},[],!1,null,"33890e72",null).exports,m={name:"EntityCard",data:function(){return{}},computed:Object(r.a)({},Object(c.b)("tons",["currentTons"])),watch:{},mounted:function(){},methods:{}},f=(n(752),{components:{EntityList:l,EntityCard:Object(d.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-wrap"},[t._l(t.currentTons,function(e){return[n("div",{key:e.id,staticClass:"card-wrap"},[n("div",{staticClass:"card"},[n("div",{staticClass:"p-3 position-absolute"},[n("nuxt-link",{attrs:{to:"/ton/"+e.id}},[t._v(t._s(e.id))])],1),n("img",{staticClass:"w-100",attrs:{src:e.imgSrc}})])])]})],2)},[],!1,null,"26d37c15",null).exports},data:function(){return{}},computed:Object(r.a)({},Object(c.b)(["tabs","type","totalSupply","perPage"])),asyncData:function(t){var e=t.params,n=t.store,r=e.type||n.getters.type||"card";return n.dispatch("doUpdateType",r),{page:e.page||1}},methods:{linkGen:function(t){return{name:"tons-page-type",params:{page:t,type:this.type}}}}}),h=Object(d.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"d-flex d-md-none align-items-end justify-content-between"},[n("b-pagination-nav",{attrs:{"link-gen":t.linkGen,"number-of-pages":Math.ceil(this.totalSupply/this.perPage),value:t.page,limit:"0","prev-text":"prev","next-text":"next","use-router":"","hide-goto-end-buttons":""}}),n("b-nav",{attrs:{tabs:""}},[t._l(t.tabs,function(e){return[t.type!==e.id?n("b-nav-item",{attrs:{to:{name:"tons-page-type",params:{type:e.id,page:t.page}},active:""}},[n("font-awesome-icon",{attrs:{icon:["fas",e.icon]}})],1):t._e()]})],2)],1),n("div",{staticClass:"d-none d-md-flex align-items-end justify-content-between"},[n("b-pagination-nav",{attrs:{"link-gen":t.linkGen,"number-of-pages":Math.ceil(this.totalSupply/this.perPage),value:t.page,limit:"10","use-router":""}}),n("b-nav",{attrs:{tabs:""}},[t._l(t.tabs,function(e){return[n("b-nav-item",{attrs:{to:{name:"tons-page-type",params:{type:e.id,page:t.page}},active:t.type===e.id}},[n("font-awesome-icon",{attrs:{icon:["fas",e.icon]}})],1)]})],2)],1),n("section",[t._l(t.tabs,function(e){return[t.type===e.id?n("Entity"+e.text,{tag:"component"}):t._e()]})],2)])},[],!1,null,null,null);e.default=h.exports}}]);