(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(9),r=a.n(c),l=(a(17),a(11)),o=a(1),m=a(2),s=a(4),d=a(3),u=a(5);var f=function(e){return i.a.createElement("div",{className:"todo-item clearfix"},i.a.createElement("div",{className:"todo-item-left"},i.a.createElement("input",{type:"checkbox",checked:e.item.completed,onChange:function(){return e.checkItem(e.item.id)}}),i.a.createElement("span",{className:e.item.completed?"completedTask":""},e.item.text)),i.a.createElement("div",{className:"removeTask",onClick:function(){return e.removeItem(e.item.id)}},"x"))},h=(a(18),function(){return i.a.createElement("div",{className:"no_data"},"You don't have any tasks.")}),p=function(e){var t=e.list.map((function(t){return i.a.createElement(f,{key:t.id,item:t,checkItem:function(){return e.checkItem(t.id)},removeItem:function(){return e.removeItem(t.id)}})}));return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"todo-list"},e.list.length?t:i.a.createElement(h,null)))},v=(a(19),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).handleChange=function(t){t.preventDefault(),e.setState({content:t.target.value})},e.handleSubmit=function(t){13!==t.keyCode&&"click"!==t.type||e.state.content.length>0&&(e.props.handleSubmit(e.state.content),e.setState({content:""}))},e.state={content:""},e}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"add_item clearfix"},i.a.createElement("input",{type:"text",name:"item",value:this.state.content,onChange:this.handleChange,onKeyDown:this.handleSubmit,placeholder:"Add a task"}),i.a.createElement("div",{className:"add_item_button",onClick:this.handleSubmit},"+")))}}]),t}(n.Component)),E=(a(20),function(e){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"search_item"},i.a.createElement("input",{type:"text",name:"item",onChange:function(t){var a=t.target.value;e.handleSearchItem(a)},placeholder:"Search"})))}),k=function(e){var t=e.active?" activeOption":"";return i.a.createElement("div",{className:"header_option_wrapper"},i.a.createElement("div",{className:"header_option"+t,onClick:e.onClick},e.name))},b=(a(21),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).setOption=function(e){a.setState({active:e.name}),a.props.setFilter(e.filter)},a.state={active:"Home"},a.options=[{name:"Home",filter:"all"},{name:"Completed",filter:!0},{name:"Remaining",filter:!1}],a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("header",null,i.a.createElement("div",{className:"container clearfix"},i.a.createElement("div",{className:"header_title"},"Todo List"),i.a.createElement("div",{className:"header_options_container"},this.options.map((function(t){return i.a.createElement(k,{name:t.name,onClick:function(){return e.setOption(t)},key:t.name,active:t.name===e.state.active})})))))}}]),t}(i.a.Component)),I=[{id:1,text:"Get coffee",completed:!0},{id:2,text:"Buy cake",completed:!1},{id:3,text:"Eat cake",completed:!1},{id:4,text:"Repeat",completed:!0}],O=a(10),N=a.n(O),C=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).checkItem=function(t){var a=e.state.list.map((function(e){return e.id===t&&(e.completed=!e.completed),e}));e.setState({list:a},e.filterItems)},e.removeItem=function(t){var a=e.state.list.filter((function(e){return t!==e.id}));e.setState({list:a},e.filterItems)},e.setCompletedFilter=function(t){e.setState({completedFilter:t,completedFilterActive:"all"!==t},e.filterItems)},e.filterItems=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.state.filter,a=e.state.list;e.state.completedFilterActive&&(a=e.state.list.filter((function(t){return t.completed===e.state.completedFilter})));var n=a.filter((function(e){return e.text.includes(t)}));e.setState({filtered:n,filter:t})},e.handleAddItem=function(t){var a=[].concat(Object(l.a)(e.state.list),[{id:N.a.v4(),text:t,completed:!1}]);e.setState({list:a},e.filterItems)},e.state={list:I,filtered:I,filter:""},e}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(b,{setFilter:this.setCompletedFilter}),i.a.createElement(v,{handleSubmit:this.handleAddItem}),i.a.createElement(E,{handleSearchItem:this.filterItems}),i.a.createElement(p,{list:this.state.filtered,checkItem:this.checkItem,removeItem:this.removeItem}))}}]),t}(i.a.Component);a(24);var g=function(){return i.a.createElement("div",{className:"app"},i.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.f58eaeb4.chunk.js.map