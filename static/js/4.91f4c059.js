(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{WueC:function(t,i,s){"use strict";s.r(i);var n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("Screen",{attrs:{title:t.$t("dishes["+JSON.stringify(t.dish.name)+"]")}},[s("Main",[s("div",{staticClass:"dish"},[s("div",{staticClass:"header"},[s("div",{staticClass:"title"},[s("div",{staticClass:"id"},[t._v(t._s(t.$tc("concepts.dish"))+" "+t._s((100+t.dish.id+"").slice(1)))]),s("div",{staticClass:"name"},[t._v(t._s(t.$t("dishes["+JSON.stringify(t.dish.name)+"]")))])])]),s("div",{staticClass:"section"},[s("div",[t._v(t._s(t.dish.description))])]),s("div",{staticClass:"section"},[s("h3",[t._v(t._s(t.$tc("concepts.picture")))]),s("div",{staticClass:"picture"},[s("img",{attrs:{src:t.dish.logo}})])]),s("div",{staticClass:"section"},[s("h3",[t._v(t._s(t.$tc("concepts.ingredient",2)))]),s("div",[t._v(t._s(t.dish.ingredients))])]),s("div",{staticClass:"section recipes"},[s("h3",[t._v(t._s(t.$tc("concepts.recipe",2)))]),t._l(t.qualities,function(i,n){return s("div",{key:n,staticClass:"group"},[s("h4",{attrs:{"data-anchor":"Quality-"+i.value}},[t._v(t._s(t.$tc("concepts.quality"))+": "+t._s(t.$tc("qualities["+JSON.stringify(i.value)+"]")))]),s("div",{staticClass:"pokemons"},[s("table",[s("thead",[s("tr",[s("th",[t._v(t._s(t.$tc("concepts.pokemon")))]),s("th",[t._v(t._s(t.$tc("concepts.chance")))])])]),s("tbody",t._l(i.pokemons,function(i){return s("tr",{key:i.id,staticClass:"pokemon",on:{click:function(s){t.toPokemon(i.id)}}},[s("td",[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:i.avatar}})])]),s("td",[t._v("\n                    "+t._s((100*i.chance).toFixed(2))+"%\n                  ")])])}))])]),s("div",{staticClass:"combinations"},[s("h5",[t._v(t._s(t.$tc("concepts.combination",2))+" "),s("span",{staticClass:"count"},[t._v("("+t._s(i.recipes.length)+")")])]),0===i.recipes.length?s("div",{staticClass:"ingredients"},[t._v("\n              "+t._s(t.$t("messages.not-exist"))+"\n            ")]):t._e(),t._l(i.recipes,function(i){return s("div",{key:i.id,staticClass:"ingredients"},t._l(i.ingredients,function(t,i){return s("div",{key:i,staticClass:"ingredient",class:{small:1===t.quality}},[s("img",{attrs:{src:t.logo}})])}))})],2)])})],2)])]),s("Navbar")],1)},e=[],c=s("yT7P"),a=(s("Vd3H"),s("bWfx"),s("0l/t"),s("dRSK"),s("VRzm"),s("sOrj")),r=s("X7BR"),o={name:"app",computed:{dish:function(){var t=this;return a["a"].find(function(i){return i.id===+t.$route.params.id})||{}},qualities:function(){var t=this,i=a["d"].filter(function(i){return i.dish.id===+t.$route.params.id})||[];return r["d"].map(function(s){return{value:s,recipes:i.filter(function(t){return t.quality===s}),pokemons:a["b"].map(function(i){var n=i.dishes.find(function(i){return i.id===+t.$route.params.id&&i.quality===s});if(n)return Object(c["a"])({},i,{chance:n.chance,weight:n.weight})}).filter(Boolean).sort(function(t,i){return i.weight-t.weight})}})}},components:{},methods:{toPokemon:function(t){this.$router.push("/pokemon/".concat(t))}}},d=o,u=(s("tYcm"),s("KHd+")),l=Object(u["a"])(d,n,e,!1,null,"ddeb862c",null);i["default"]=l.exports},X7BR:function(t,i,s){"use strict";s.d(i,"c",function(){return n}),s.d(i,"b",function(){return e}),s.d(i,"d",function(){return c}),s.d(i,"a",function(){return a});var n=["normal","fighting","flying","poison","ground","rock","bug","ghost","steel","fire","water","grass","electric","psychic","ice","dragon","fairy"],e=["red","blue","yellow","gray"],c=["BASIC","GOOD","VERY_GOOD","SPECIAL"],a=["en","zh"]},bQ5f:function(t,i,s){},tYcm:function(t,i,s){"use strict";var n=s("bQ5f"),e=s.n(n);e.a}}]);
//# sourceMappingURL=4.91f4c059.js.map