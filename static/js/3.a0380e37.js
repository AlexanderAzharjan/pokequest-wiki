(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"03fe":function(t,s,e){"use strict";var a=e("A1T8"),o=e.n(a);o.a},A1T8:function(t,s,e){},GggY:function(t,s,e){"use strict";var a=e("vpof"),o=e.n(a);o.a},YCw7:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Screen",{attrs:{title:t.pokemon.name}},[e("Main",{ref:"main"},[e("div",{staticClass:"pokemon"},[e("div",{staticClass:"header"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.pokemon.avatar}})]),e("div",{staticClass:"title"},[e("div",{staticClass:"id"},[t._v("No."+t._s((1e3+t.pokemon.id+"").slice(1)))]),e("div",{staticClass:"name"},[t._v(t._s(t.pokemon.name))])])]),e("div",{staticClass:"section classification"},[t._v(t._s(t.pokemon.classification))]),e("div",{staticClass:"section type-list"},[e("h3",[t._v("Type")]),t._l(t.pokemon.type,function(s){return e("TypeCapsule",{key:s,staticClass:"type",attrs:{value:s},nativeOn:{click:function(e){t.toPokemonList({types:s})}}})})],2),e("div",{staticClass:"section picture"},[e("h3",[t._v("Sprite")]),e("div",{staticClass:"sprite"},[e("img",{attrs:{src:t.pokemon.sprite}})])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.pokemon.evolution,expression:"pokemon.evolution"}],staticClass:"section evolution"},[e("h3",[t._v("Evolution")]),t._v("\n        "+t._s(t.pokemon.evolution)+"\n      ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:"unknown"!==t.pokemon.color,expression:"pokemon.color !== 'unknown'"}],staticClass:"section color"},[e("h3",[t._v("Color")]),e("span",{staticClass:"color-capsule",class:"color-"+t.pokemon.color.toLowerCase(),on:{click:function(s){t.toPokemonList({color:t.pokemon.color.toLowerCase()})}}},[t._v(t._s(t.pokemon.color))])]),e("div",{staticClass:"section"},[e("h3",[t._v("Attack mode")]),e("Iconfont",{staticClass:"icon",attrs:{type:"melee"===t.pokemon.automaticStyle.toLowerCase()?"melee":"range"===t.pokemon.automaticStyle.toLowerCase()?"bow":"question"}}),t._v("\n        "+t._s(t.pokemon.automaticStyle)+"\n      ")],1),e("div",{staticClass:"section stats"},[e("h3",[t._v("Stats (HP and ATK)")]),e("div",{staticClass:"table-container"},[e("table",[e("thead",{staticClass:"title"},[e("tr",[e("th",{staticClass:"group-first-item clickable",attrs:{colspan:t.statsTable.showPotDetail?3:1},on:{click:function(s){t.statsTable.showPotDetail=!t.statsTable.showPotDetail}}},[e("Iconfont",{staticClass:"icon",attrs:{type:t.statsTable.showPotDetail?"minus-circle-o":"plus-circle"}}),t._v(" Pot\n                ")],1),e("th",{staticClass:"group-first-item clickable",attrs:{colspan:t.statsTable.showBase?2:1},on:{click:function(s){t.statsTable.showBase=!t.statsTable.showBase}}},[e("Iconfont",{staticClass:"icon",attrs:{type:t.statsTable.showBase?"minus-circle-o":"plus-circle"}}),t._v(" "+t._s(t.statsTable.showBase?"Level 0 (Base)":"L0")+"\n                ")],1),e("th",{staticClass:"group-first-item",attrs:{colspan:"2"},on:{click:t.editStatsTableCustomLevel}},[t._v("\n                  Level "+t._s(t.statsTable.customLevel)+" "),e("Iconfont",{staticClass:"icon",attrs:{type:"edit"}})],1)]),e("tr",[e("th",{staticClass:"group-first-item"},[t._v("Name")]),e("th",{directives:[{name:"show",rawName:"v-show",value:t.statsTable.showPotDetail,expression:"statsTable.showPotDetail"}]},[t._v("Bonus")]),e("th",{directives:[{name:"show",rawName:"v-show",value:t.statsTable.showPotDetail,expression:"statsTable.showPotDetail"}]},[t._v("IV Range")]),e("th",{directives:[{name:"show",rawName:"v-show",value:t.statsTable.showBase,expression:"statsTable.showBase"}],staticClass:"group-first-item"},[t._v("HP")]),e("th",{directives:[{name:"show",rawName:"v-show",value:t.statsTable.showBase,expression:"statsTable.showBase"}]},[t._v("ATK")]),e("th",{directives:[{name:"show",rawName:"v-show",value:!t.statsTable.showBase,expression:"!statsTable.showBase"}],on:{click:function(s){t.statsTable.showBase=!0}}},[t._v("...")]),e("th",{staticClass:"group-first-item"},[t._v("HP")]),e("th",[t._v("ATK")])])]),e("tbody",t._l(t.pots,function(s){return e("tr",{key:s.id,staticClass:"pot"},[e("td",{staticClass:"name group-first-item",class:"pot-"+s.name},[t._v(t._s(s.name))]),e("td",{directives:[{name:"show",rawName:"v-show",value:t.statsTable.showPotDetail,expression:"statsTable.showPotDetail"}]},[t._v(t._s(s.statBonus))]),e("td",{directives:[{name:"show",rawName:"v-show",value:t.statsTable.showPotDetail,expression:"statsTable.showPotDetail"}]},[t._v(t._s(s.ivRange.minimum)+" - "+t._s(s.ivRange.maximum))]),e("td",{directives:[{name:"show",rawName:"v-show",value:t.statsTable.showBase,expression:"statsTable.showBase"}],staticClass:"group-first-item"},[t._v(t._s(t._f("statRange")(t.pokemon.baseHp,s)))]),e("td",{directives:[{name:"show",rawName:"v-show",value:!t.statsTable.showBase,expression:"!statsTable.showBase"}],on:{click:function(s){t.statsTable.showBase=!0}}},[t._v("...")]),e("td",{directives:[{name:"show",rawName:"v-show",value:t.statsTable.showBase,expression:"statsTable.showBase"}]},[t._v(t._s(t._f("statRange")(t.pokemon.baseAtk,s)))]),e("td",{staticClass:"group-first-item"},[t._v(t._s(t._f("statRange")(t.pokemon.baseHp,s,t.statsTable.customLevel)))]),e("td",[t._v(t._s(t._f("statRange")(t.pokemon.baseAtk,s,t.statsTable.customLevel)))])])}))])])]),e("div",{staticClass:"section bingo"},[e("h3",[t._v("Bingo bonus")]),e("div",{staticClass:"table-container"},[e("table",[e("thead",{staticClass:"title"},[e("tr",[e("th",[t._v("Slot")]),e("th",[t._v("Bingo bonus")])])]),e("tbody",[t._l(t.pokemon.bonus,function(s,a){return[~t.bingosTable.hiddenSlots.indexOf(a)?[e("tr",{key:a},[e("td",{staticClass:"clickable",on:{click:function(s){t.switchBingosTableSlot(a)}}},[e("Iconfont",{staticClass:"icon",attrs:{type:"plus-circle"}}),t._v("\n                      Slot "+t._s(a+1)+"\n                    ")],1),e("td",[t._v("...")])])]:t._l(s,function(s,o){return e("tr",{key:a+"-"+o,staticClass:"slot"},[0===o?e("td",{staticClass:"clickable",attrs:{rowspan:"3"},on:{click:function(s){t.switchBingosTableSlot(a)}}},[e("Iconfont",{staticClass:"icon",attrs:{type:"minus-circle-o"}}),t._v("\n                      Slot "+t._s(a+1)+"\n                    ")],1):t._e(),e("td",[t._v(t._s(s))])])})]})],2)])])]),e("div",{staticClass:"section moves"},[e("h3",[t._v("Moves")]),e("div",{staticClass:"table-container"},[e("table",[e("thead",{staticClass:"title"},[e("tr",[e("th",{staticClass:"type"},[t._v("Type")]),e("th",[t._v("Name")]),e("th",[t._v("Attack")]),e("th",[t._v("Wait")]),e("th",[t._v("Learnable")])])]),e("tbody",t._l(t.pokemon.moves,function(s,a){return e("tr",{key:a,staticClass:"move"},[e("td",{staticClass:"type"},[e("type-capsule",{attrs:{value:s.type}})],1),e("td",[t._v(t._s(s.name))]),e("td",[t._v(t._s(s.attack))]),e("td",[t._v(t._s(s.wait))]),e("td",[t._v(t._s(s.learnable?"√":s.method))])])}))])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.dishes.length>0,expression:"dishes.length > 0"}],staticClass:"section dishes"},[e("h3",[t._v("Dishes")]),e("table",[e("thead",{staticClass:"title"},[e("tr",[e("th",{staticClass:"logo"}),e("th",{staticClass:"name clickable",on:{click:function(s){t.sortDishes("id")}}},[t._v("\n                (ID) Name\n                "),e("Iconfont",{staticClass:"icon",attrs:{type:"id"!==t.dishesSorter.field?"minus":t.dishesSorter.reverse?"sort-up":"sort-down"}})],1),e("th",{staticClass:"quality"},[t._v("\n                Quality\n              ")]),e("th",{staticClass:"chance clickable",on:{click:function(s){t.sortDishes("chance",!0)}}},[t._v("\n                Chance\n                "),e("Iconfont",{staticClass:"icon",attrs:{type:"chance"!==t.dishesSorter.field?"minus":t.dishesSorter.reverse?"sort-up":"sort-down"}})],1)])]),e("tbody",t._l(t.dishes,function(s,a){return e("tr",{key:a,staticClass:"dish",class:{"not-exist":!s.isExist},on:{click:function(e){t.toDish(s.id,s.quality)}}},[e("td",{staticClass:"logo"},[e("img",{attrs:{src:s.logo}})]),e("td",{staticClass:"name"},[t._v(t._s(s.name))]),e("td",{staticClass:"quality"},[t._v(t._s(s.quality))]),e("td",{staticClass:"chance"},[t._v(t._s((100*s.chance).toFixed(2))+"%")])])}))])]),e("div",{staticClass:"section pokemons"},[e("h3",[t._v("See other pokémon")]),e("div",{staticClass:"paginations"},[t.previous.id?e("div",{staticClass:"previous",on:{click:function(s){t.toPokemon(t.previous.id)}}},[e("Iconfont",{staticClass:"icon",attrs:{type:"left"}}),e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.previous.avatar}})])],1):t._e(),t.next.id?e("div",{staticClass:"next",on:{click:function(s){t.toPokemon(t.next.id)}}},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.next.avatar}})]),e("Iconfont",{staticClass:"icon",attrs:{type:"right"}})],1):t._e(),e("Clearfix")],1)])])]),e("Navbar")],1)},o=[],i=e("iv4g"),n=(e("V+eJ"),e("0l/t"),e("yT7P")),l=(e("Vd3H"),e("bWfx"),e("dRSK"),e("VRzm"),e("sOrj")),c=e("wMG2"),r=e("DSsS"),v=100,u={name:"app",data:function(){return{pots:l["c"],dishesSorter:{field:"id",reverse:!1},bingosTable:{hiddenSlots:[]},statsTable:{showPotDetail:!1,showBase:!1,customLevel:v}}},computed:{pokemon:function(){var t=this;return l["b"].find(function(s){return s.id===+t.$route.params.id})||{}},dishes:function(){var t=this.pokemon.dishes,s=this.dishesSorter,e=s.field,a=s.reverse;return t.sort(function(t,s){return(t[e]>s[e]?1:t[e]<s[e]?-1:0)*(a?-1:1)}).map(function(t){return Object(n["a"])({},t,{isExist:l["d"].filter(function(s){return s.dish.id===t.id&&s.quality===t.quality}).length>0})})},previous:function(){var t=this;return l["b"].find(function(s){return s.id===+t.$route.params.id-1})||{}},next:function(){var t=this;return l["b"].find(function(s){return s.id===+t.$route.params.id+1})||{}}},methods:{sortDishes:function(t){var s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.dishesSorter.field===t?this.dishesSorter.reverse=!this.dishesSorter.reverse:this.dishesSorter={field:t,reverse:s}},editStatsTableCustomLevel:function(){var t=window.prompt("Please enter the level you want (from 1 to 100) :",this.statsTable.customLevel);if(null!==t){var s=parseInt(t);!s||s<1||s>100?window.confirm("This is not a valid level. Would you like to try again?")&&this.editStatsTableCustomLevel():this.statsTable.customLevel=s}},switchBingosTableSlot:function(t){var s=this.bingosTable.hiddenSlots.indexOf(t);~s?this.bingosTable.hiddenSlots=Object(i["a"])(this.bingosTable.hiddenSlots.slice(0,s)).concat(Object(i["a"])(this.bingosTable.hiddenSlots.slice(s+1))):this.bingosTable.hiddenSlots.push(t)},toDish:function(t,s){this.$router.push("/dishes/".concat(t,"?anchor=Quality-").concat(s))},toPokemon:function(t){this.$router.push("/pokemon/".concat(t)),this.$refs.main.scrollTop()},toPokemonList:function(t){this.$router.push({path:"/pokemon",query:t})}},components:{TypeCapsule:c["a"],Iconfont:r["a"]},filters:{statRange:function(t,s){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return"".concat(+t+s.statBonus+s.ivRange.minimum+e," - ").concat(+t+s.statBonus+s.ivRange.maximum+e)}}},h=u,d=(e("03fe"),e("KHd+")),m=Object(d["a"])(h,a,o,!1,null,"65e54f5c",null);s["default"]=m.exports},vpof:function(t,s,e){},wMG2:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"capsule",class:"type-"+t.value},[t._v("\n  "+t._s(t.value)+"\n")])},o=[],i=(e("VRzm"),{name:"TypeCapsule",props:{value:String}}),n=i,l=(e("GggY"),e("KHd+")),c=Object(l["a"])(n,a,o,!1,null,"3e0b707c",null);s["a"]=c.exports}}]);
//# sourceMappingURL=3.a0380e37.js.map