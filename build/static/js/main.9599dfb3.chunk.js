(this["webpackJsonprecipe-project"]=this["webpackJsonprecipe-project"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),r=c.n(i),s=c(6),a=c.n(s),l=(c(13),c(4)),o=c.n(l),u=c(7),j=c(2),p=(c(15),c(5)),b=c.n(p),d=function(e){var t=e.title,c=e.calories,i=e.image,r=e.ingredients,s=e.cautions;return Object(n.jsxs)("div",{className:b.a.recipe,children:[Object(n.jsxs)("h1",{children:[" ",t," "]}),Object(n.jsx)("ul",{children:r.map((function(e){return Object(n.jsxs)("li",{children:[" ",e.text," "]})}))}),Object(n.jsx)("img",{className:b.a.image,src:i,alt:""}),Object(n.jsxs)("p",{style:{fontStyle:"italic",fontWeight:"bold"},children:["Calories: ",c]}),Object(n.jsxs)("div",{style:{display:"flex",textAlign:"center",lineHeight:"15px"},children:[Object(n.jsx)("p",{style:{fontWeight:"bold"},children:"Cautions:"}),Object(n.jsx)("ul",{children:s.map((function(e){return Object(n.jsxs)("li",{children:[" ",e," "]})}))})]})]})},h=function(){var e=Object(i.useState)([]),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(i.useState)(""),a=Object(j.a)(s,2),l=a[0],p=a[1],b=Object(i.useState)("pizza"),h=Object(j.a)(b,2),f=h[0],x=h[1];Object(i.useEffect)((function(){O()}),[f]);var O=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("search?q=".concat(f,"&app_id=").concat("30d2cea4","&app_key=").concat("46666b757c73f2cf64d838ad0f6eb57f"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c.hits),r(c.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x(l),p("")},className:"search-form",children:[Object(n.jsx)("input",{className:"search-bar",type:"text",value:l,onChange:function(e){p(e.target.value)}}),Object(n.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(n.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(n.jsx)(d,{title:e.recipe.label,calories:e.recipe.calories.toFixed(2),image:e.recipe.image,ingredients:e.recipe.ingredients,cautions:e.recipe.cautions},e.recipe.label)}))})]})};a.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root"))},5:function(e,t,c){e.exports={recipe:"recipe_recipe__BdaUe",image:"recipe_image__BtdIE"}}},[[16,1,2]]]);
//# sourceMappingURL=main.9599dfb3.chunk.js.map