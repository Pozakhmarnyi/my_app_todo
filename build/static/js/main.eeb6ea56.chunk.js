(this.webpackJsonpmy_app_todo=this.webpackJsonpmy_app_todo||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),c=a.n(r),i=(a(12),a(6)),o=a(1);a(13);var s=function(e){var t=e.todoLists,a=e.removeOneMainList,n=e.setIndex,r=t.map((function(e,t){return l.a.createElement("li",{className:"lists_left_side__OneMainList",key:e.id},l.a.createElement("div",{onClick:function(){return n(t)}},e.mainTitle),l.a.createElement("button",{className:"button",onClick:function(){return a(e.id)}},l.a.createElement("i",{className:"fas fa-trash-alt"})))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:"lists_left_side__AllMainList"},r," "))},m=l.a.createContext();var u=function(e){var t=e.todo,a=e.index,r=e.onChange,c=e.toDoList,i=Object(n.useContext)(m).removeTodo,s=Object(n.useState)(!1),u=Object(o.a)(s,2),d=u[0],p=u[1],f=Object(n.useState)(t.title),E=Object(o.a)(f,2),_=E[0],v=E[1],b="ToDoItem ";return t.completed&&(b+="done"),l.a.createElement(l.a.Fragment,null,!d&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:b},l.a.createElement("span",null,l.a.createElement("input",{id:t.id,type:"checkbox",checked:t.completed,onChange:function(){return r(t.id)}}),l.a.createElement("strong",null," ",a+1," "),l.a.createElement("label",{htmlFor:t.id},t.title)),l.a.createElement("span",{className:"space_for_button"},l.a.createElement("button",{className:"edit_title",type:"edit",onClick:function(){p(!0)}},l.a.createElement("i",{className:"fas fa-pen"})),l.a.createElement("button",{onClick:function(){return i(t.id)}},l.a.createElement("i",{className:"fas fa-trash-alt"}))))),d&&l.a.createElement("li",{className:b},l.a.createElement("span",null,l.a.createElement("input",{className:"imput_editor",type:"text",checked:t.completed,value:_,onChange:function(e){v(e.target.value)}})),l.a.createElement("span",{className:"space_for_button"},l.a.createElement("button",{className:"ToDoItem__edit_title",type:"edit",onClick:function(){var e=[];c.map((function(a){return a.id===t.id&&(a.title=_),e})),p(!1)}},l.a.createElement("i",{className:"fas fa-check"})),l.a.createElement("button",{onClick:function(){return i(t.id)}},l.a.createElement("i",{className:"fas fa-trash-alt"})))))},d={ul:{listStyle:"none",margin:0,padding:0}};var p=function(e){return l.a.createElement("ul",{style:d.ul},e.todos.map((function(t,a){return l.a.createElement(u,{todo:t,key:t.id,id:t.id,title:t.title,index:a,onChange:e.onToggle,toDoList:e.todos})})))};var f=function(e){var t=e.onCreate,a=Object(n.useState)(""),r=Object(o.a)(a,2),c=r[0],i=r[1];return l.a.createElement("form",{className:"wrapper__form",onSubmit:function(e){e.preventDefault(),c.trim()&&(t(c),i(""))}},l.a.createElement("input",{className:"wrapper__input",value:c,onChange:function(e){return i(e.target.value)}}),l.a.createElement("button",{className:"wrapper__button",type:"submit"},"Add todo")," ")};var E=function(e){var t=e.sendTodos,a=e.ind,r=e.getNewOneList,c=[{id:15,completed:!0,title:"You have created your first list!"}];void 0!==t[a].pageOfItem&&(c=t[a].pageOfItem);var i=Object(n.useState)(c),s=Object(o.a)(i,2),u=s[0],d=s[1];Object(n.useEffect)((function(){d(c)}),[a]);var E=t[a].mainTitle;return Object(n.useEffect)((function(){r(u)}),[u]),l.a.createElement(m.Provider,{value:{removeTodo:function(e){d(u.filter((function(t){return t.id!==e})))}}},l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",{className:"wrapper__title"},l.a.createElement("span",{className:"wrapper__title--font"},E," ")," "),l.a.createElement(f,{onCreate:function(e){d(u.concat([{title:e,id:Date.now(),completed:!1}])),r(c)}}),u.length?l.a.createElement(p,{todos:u,onToggle:function(e){d(u.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))}}):l.a.createElement("p",null,"No todos !")))};var _=function(e){var t=e.onCreateList,a=Object(n.useState)(""),r=Object(o.a)(a,2),c=r[0],i=r[1];return l.a.createElement("form",{className:"wrapper__form noPad",onSubmit:function(e){e.preventDefault(),c.trim()&&(t(c),i(""))}},l.a.createElement("input",{className:"wrapper__input",value:c,onChange:function(e){return i(e.target.value)}}),l.a.createElement("button",{className:"wrapper__button",type:"submit"},"Add"))};var v=function(){var e=Object(n.useState)([{id:5,mainTitle:"My app",pageOfItem:[{id:1,completed:!0,title:"test the program!"},{id:2,completed:!0,title:"Make good style and add fond"},{id:3,completed:!1,title:"get feedback about app"}]},{id:6,mainTitle:"Shop list",pageOfItem:[{id:12,completed:!1,title:"Milk"},{id:13,completed:!1,title:"apples 1 kg"},{id:14,completed:!0,title:"Beer and snacks"}]}]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),m=Object(o.a)(c,2),u=m[0],d=m[1],p=Object(n.useState)(0),f=Object(o.a)(p,2),v=f[0],b=f[1];return l.a.createElement("div",{className:"mainbox"},l.a.createElement("div",{className:"lists_left_side"},l.a.createElement("i",{className:"fas fa-plus-circle lists_left_side__PlusLists",onClick:function(){return d(!0)}}),u&&l.a.createElement(l.a.Fragment,null,l.a.createElement(_,{onCreateList:function(e){r(a.concat([{mainTitle:e,id:Date.now(),pageOfItem:[]}])),d(!1)}})),a.length?l.a.createElement(s,{todoLists:a,removeOneMainList:function(e){var t=a.length;v===t-1&&b(0),r(a.filter((function(t){return t.id!==e})))},setIndex:b}):l.a.createElement("p",{className:"lists_left_side__Click_here"},"Click ",l.a.createElement("i",{className:"fas fa-arrow-up"})," here")),a.length?l.a.createElement(E,{sendTodos:a,ind:v,getNewOneList:function(e){var t=Object(i.a)(a);t[v].pageOfItem=e,r(t)}}):l.a.createElement("p",{className:"SurpriseYourself"}," ","Surprise yourself, create your to-do list!"))};var b=function(){return l.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.eeb6ea56.chunk.js.map