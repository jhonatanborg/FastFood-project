(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a20fe18c"],{"4ca4":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:" col-sm-12",attrs:{id:"ProductBar"}},[a("v-sheet",{directives:[{name:"resize",rawName:"v-resize",value:t.onResizeDialogProduct,expression:"onResizeDialogProduct"}],attrs:{color:"#f2f2f2"}},[t._l(t.products,(function(e,i){return a("div",{key:e.combo,attrs:{id:"list-products text-uppercase"}},[a("div",{staticClass:"subtitle",attrs:{color:"grey lighten-2"}},[t._v(t._s(i))]),a("v-layout",{},[a("v-row",t._l(e,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",sm:"6"}},[a("a",{on:{click:function(a){return t.modal(e)}}},[a("Product",{attrs:{title:e.name,details:e.details,value:e.saleValue,img:e.img,action:t.modal}})],1)])})),1)],1)],1)})),a("v-layout",{attrs:{"min-height":"500px"}},[a("Banner"),a("v-card",{attrs:{"min-height":"480px"}})],1)],2),a("div",{attrs:{id:"dialogProduct"}},[a("ProductDialog",{attrs:{viewDialog:t.viewDialog,saleValue:t.productdialog.valueProduct,detailsProduct:t.productdialog.detailsProduct,title:t.productdialog.titleProduct,imgProduct:t.productdialog.imgProduct,closeDialog:t.closeDialog}})],1)],1)},o=[],l=a("84af"),s=a("be6f"),r=a("8f18"),n={name:"ProductBar",components:{Banner:l["a"],Product:s["a"],ProductDialog:r["a"]},created(){this.onResizeDialogProduct()},data:()=>({menuSize:{x:0,y:0},grid:"",productDetails:!1,qtd:["1 item","2 item","3 item","4 item"],rating:!0,type:"number",number:9999,selector:"#bebidas",selected:"Button",elements:["Button","Radio group"],duration:300,offset:-100,mobileSize:{productDialog:!1,activateFull:null,displayFlex:null,toolbar:null,toolbarMobile:!1},productdialog:{valueProduct:"",detailsProduct:"",titleProduct:"",imgProduct:""},viewDialog:!1,products:{Combos:{product1:{id:1,name:"X-tudo",saleValue:"14,50",details:" Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante, Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante",img:"https://images2.nogueirense.com.br/wp-content/uploads/2018/08/whatsapp-image-2018-08-16-at-19-59-49-1534878741.jpeg"},product2:{id:2,name:"X-toledo",saleValue:"14,50",details:" Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante, Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante",img:"http://planoatlas.com.br/wp-content/uploads/2018/07/Lanchonete.jpg"},product3:{id:3,name:"X-sergipe",saleValue:"14,50",details:" Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante, Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante",img:"http://planoatlas.com.br/wp-content/uploads/2018/07/Lanchonete.jpg"}},Destaques:{product1:{id:1,name:"X-tudo",saleValue:"14,50",details:" Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante, Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante",img:"https://images2.nogueirense.com.br/wp-content/uploads/2018/08/whatsapp-image-2018-08-16-at-19-59-49-1534878741.jpeg"},product2:{id:2,name:"X-toledo",saleValue:"14,50",details:" Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante, Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante",img:"http://planoatlas.com.br/wp-content/uploads/2018/07/Lanchonete.jpg"},product3:{id:3,name:"X-sergipe",saleValue:"14,50",details:" Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante, Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante",img:"http://planoatlas.com.br/wp-content/uploads/2018/07/Lanchonete.jpg"}},Bebidas:{product1:{id:1,name:"Coca Cola lata",saleValue:"4,50",details:"",img:"https://static.carrefour.com.br/medias/sys_master/images/images/h28/hfa/h00/h00/12175725363230.jpg"},product2:{id:2,name:"Cola cola 2L",saleValue:"14,50",details:"",img:"https://static.carrefour.com.br/medias/sys_master/images/images/h10/h46/h00/h00/12175673655326.jpg"},product3:{id:3,name:"Refrigerante ",saleValue:"14,50",details:"",img:"https://static.carrefour.com.br/medias/sys_master/images/images/h48/h55/h00/h00/15165945315358.jpg"}}}}),methods:{modal(t){this.viewDialog=!0,console.log(t),this.productdialog.titleProduct=t.name,this.productdialog.valueProduct=t.saleValue,this.productdialog.detailsProduct=t.details,this.productdialog.imgProduct=t.img},onResizeDialogProduct(){this.menuSize={x:window.innerWidth,y:window.innerHeight},this.menuSize.x<=500?(this.mobileSize.activateFull=!0,this.mobileSize.displayFlex=!1,this.mobileSize.toolbar=!0):(this.mobileSize.activateFull=!1,this.mobileSize.displayFlex=!0,this.mobileSize.toolbar=!1,this.mobileSize.toolbar=!0)},closeDialog(){this.viewDialog=!1}}},d=n,c=(a("606a"),a("2877")),u=a("6544"),m=a.n(u),h=a("b0af"),p=(a("4b85"),a("2b0e")),g=a("d9f7"),v=a("80d2");const f=["sm","md","lg","xl"],b=(()=>f.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),y=(()=>f.reduce((t,e)=>(t["offset"+Object(v["w"])(e)]={type:[String,Number],default:null},t),{}))(),S=(()=>f.reduce((t,e)=>(t["order"+Object(v["w"])(e)]={type:[String,Number],default:null},t),{}))(),w={col:Object.keys(b),offset:Object.keys(y),order:Object.keys(S)};function P(t,e,a){let i=t;if(null!=a&&!1!==a){if(e){const a=e.replace(t,"");i+=`-${a}`}return"col"!==t||""!==a&&!0!==a?(i+=`-${a}`,i.toLowerCase()):i.toLowerCase()}}const V=new Map;var _=p["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...b,offset:{type:[String,Number],default:null},...y,order:{type:[String,Number],default:null},...S,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:a,children:i,parent:o}){let l="";for(const r in e)l+=String(e[r]);let s=V.get(l);if(!s){let t;for(t in s=[],w)w[t].forEach(a=>{const i=e[a],o=P(t,a,i);o&&s.push(o)});const a=s.some(t=>t.startsWith("col-"));s.push({col:!a||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),V.set(l,s)}return t(e.tag,Object(g["a"])(a,{class:s}),i)}}),D=a("a523"),C=a("a722"),x=a("0fd9"),z=a("8dd9"),j=a("269a"),k=a.n(j),B=a("dc22"),L=Object(c["a"])(d,i,o,!1,null,null,null);e["default"]=L.exports;m()(L,{VCard:h["a"],VCol:_,VContainer:D["a"],VLayout:C["a"],VRow:x["a"],VSheet:z["a"]}),k()(L,{Resize:B["a"]})},"606a":function(t,e,a){"use strict";var i=a("8198"),o=a.n(i);o.a},8198:function(t,e,a){},"8f18":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"details-product"},[a("v-dialog",{attrs:{fullscreen:!t.desktop,"max-width":"700px",persistent:""},model:{value:t.viewDialog,callback:function(e){t.viewDialog=e},expression:"viewDialog"}},[a("v-card",[a("v-toolbar",{attrs:{dense:"",flat:"",color:"white"}},[a("v-spacer"),a("div",[a("v-btn",{attrs:{color:"#ff5722",outlined:""},on:{click:t.closeDialog}},[a("v-icon",[t._v("mdi-close")]),t._v("Fechar ")],1)],1)],1),a("div",{class:{"d-flex":t.desktop}},[a("div",{staticClass:"col-sm-6"},[a("v-img",{staticClass:"mx-auto",class:{"":t.desktop},attrs:{height:"100%",width:"100%",src:t.imgProduct}})],1),a("div",{class:{"":t.desktop},attrs:{id:"description"}},[a("div",{staticClass:"pa-4"},[a("div",{staticClass:"subtitle-large py-1"},[t._v(" "+t._s(t.title)+" ")]),a("div",{staticClass:"description-product "},[t._v(" "+t._s(t.detailsProduct)+" ")]),a("div",{staticClass:"font-weight-bold price py-2"},[t._v("R$ "+t._s(t.saleValue))]),a("div",{},[a("div",{},[a("v-select",{staticClass:"mr-2",attrs:{color:"#ff5722",items:t.qtd,segmented:"",overflow:"",dense:"",value:"1 item",outlined:""}})],1),a("div",[a("v-text-field",{attrs:{outlined:"",dense:"",label:"Escreva um comentário",id:"id"}})],1),a("div",{},[a("v-btn",{attrs:{block:"",color:"#ff5722",dark:""}},[t._v("Adicionar")])],1)])])])])],1)],1)],1)},o=[],l={props:{productDetails:Boolean,viewDialog:Boolean,saleValue:String,detailsProduct:String,title:String,imgProduct:String,closeDialog:{type:Function}},created(){this.onResizeDialogProduct()},data:()=>({desktop:!1,qtd:["1 item","2 item","3 item","4 item"]}),methods:{onResizeDialogProduct(){this.menuSize={x:window.innerWidth,y:window.innerHeight},this.menuSize.x<=500?this.desktop=!1:this.desktop=!0}}},s=l,r=a("2877"),n=a("6544"),d=a.n(n),c=a("8336"),u=a("b0af"),m=a("169a"),h=a("132d"),p=a("adda"),g=a("b974"),v=a("2fa4"),f=a("8654"),b=a("71d9"),y=Object(r["a"])(s,i,o,!1,null,null,null);e["a"]=y.exports;d()(y,{VBtn:c["a"],VCard:u["a"],VDialog:m["a"],VIcon:h["a"],VImg:p["a"],VSelect:g["a"],VSpacer:v["a"],VTextField:f["a"],VToolbar:b["a"]})},a523:function(t,e,a){"use strict";a("20f6"),a("4b85");var i=a("e8f2"),o=a("d9f7");e["a"]=Object(i["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:a,children:i}){let l;const{attrs:s}=a;return s&&(a.attrs={},l=Object.keys(s).filter(t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(a.domProps=a.domProps||{},a.domProps.id=e.id),t(e.tag,Object(o["a"])(a,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(l||[])}),i)}})},be6f:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product"},[a("v-hover",{attrs:{"open-delay":"5"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[a("v-card",{class:t.gridSize,attrs:{elevation:i?4:0,outlined:""}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",{attrs:{tile:"",size:"80",color:"grey darken-3"}},[a("v-img",{attrs:{src:t.img}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"mb-1"},[t._v(t._s(t.title))]),a("div",{staticClass:"description-product my-auto py-2"},[t._v(" "+t._s(t.details)+" ")]),a("v-list-item-subtitle",{staticClass:"font-weight-bold price"},[t._v(t._s(t.value))])],1)],1)],1)]}}])})],1)},o=[],l={props:{title:String,details:String,value:String,img:String,item:String,gridSize:String,action:{type:Function}}},s=l,r=a("2877"),n=a("6544"),d=a.n(n),c=a("b0af"),u=a("16b7"),m=a("f2e7"),h=a("58df"),p=a("d9bd"),g=Object(h["a"])(u["a"],m["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(p["c"])("v-hover is missing a default scopedSlot or bound value",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(p["c"])("v-hover should only contain a single element",this),t)}}),v=a("adda"),f=a("da13"),b=a("8270"),y=a("5d23"),S=Object(r["a"])(s,i,o,!1,null,null,null);e["a"]=S.exports;d()(S,{VCard:c["a"],VHover:g,VImg:v["a"],VListItem:f["a"],VListItemAvatar:b["a"],VListItemContent:y["b"],VListItemSubtitle:y["c"],VListItemTitle:y["d"]})}}]);
//# sourceMappingURL=chunk-a20fe18c.1d41740f.js.map