(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(3),c=n.n(r),l=n(4),s=n(5),u=n(7),i=n(6),d=n(8),f=(n(14),function(t){var e=t.good;return a.a.createElement("li",null,a.a.createElement("span",{style:{color:e.color}},e.name))}),m="https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json",p={all:"all",first5:"first5",red:"red"},h=function(t){var e=t.goods,n=t.loadFiltered;return a.a.createElement(a.a.Fragment,null,a.a.createElement("section",null,Object.keys(p).map(function(t){return a.a.createElement("button",{type:"button",onClick:function(){return n(t)},key:t},t)})),a.a.createElement("ul",null,e.map(function(t){return a.a.createElement(f,{key:t.id,good:t})})))},b=n(1),g=n.n(b),v=function(t){var e;return g.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g.a.awrap(fetch(t));case 3:return e=n.sent,n.abrupt("return",e.json());case 7:throw n.prev=7,n.t0=n.catch(0),new Error(n.t0);case 10:case"end":return n.stop()}},null,null,[[0,7]])},w=function(t){function e(){var t,n;Object(l.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(a)))).state={goods:[],start:!1},n.start=function(){n.loadAllGoods(),n.setState({start:!0})},n.loadAllGoods=function(){v(m).then(function(t){return n.setState({goods:t})})},n.loadFirstFiveGoods=function(){v(m).then(function(t){return n.setState({goods:t.slice(0,5).sort(function(t,e){return t.name.localeCompare(e.name)})})})},n.loadRedGoods=function(){v(m).then(function(t){return n.setState({goods:t.filter(function(t){return"red"===t.color})})})},n.loadFiltered=function(t){switch(t){case p.all:default:n.loadAllGoods();break;case p.first5:n.loadFirstFiveGoods();break;case p.red:n.loadRedGoods()}},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.state,e=t.start,n=t.goods;return a.a.createElement("div",{className:"App"},!e&&a.a.createElement("button",{type:"button",onClick:this.start},"Show Goods List"),e&&a.a.createElement(h,{goods:n,loadFiltered:this.loadFiltered}))}}]),e}(a.a.Component);c.a.render(a.a.createElement(w,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.943911ce.chunk.js.map