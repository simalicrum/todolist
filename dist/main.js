!function(e){var t={};function n(d){if(t[d])return t[d].exports;var i=t[d]={i:d,l:!1,exports:{}};return e[d].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(d,i,function(t){return e[t]}.bind(null,i));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const d=(e,t,n,d,i,o)=>({title:e,description:t,dueDate:n,priority:d,done:i,uniqueID:o}),i=(e,t)=>{let n=[];return{name:e,uniqueID:t,list:n,addToDoItem:e=>{n.push(e)},generateUniqueID:()=>{let e=Math.floor(9999*Math.random());for(;n.some(t=>t.uniqueID==e);)e=Math.floor(9999*Math.random());return e}}},o=(e,t)=>{content=document.getElementById(e);let n=document.createElement("div");n.setAttribute("id",t.title+"-task"),n.setAttribute("class","todoitem");let d=document.createElement("input");d.setAttribute("type","checkbox");let i=document.createElement("h2");i.setAttribute("class","todoitemtitle"),i.innerHTML=t.title;let o=document.createElement("p");o.setAttribute("class","todoitemdesc"),o.innerHTML=t.description;let l=document.createElement("select");l.setAttribute("name","priority"),l.setAttribute("id","priority");let r=document.createElement("option");r.setAttribute("value","high"),r.innerHTML="High";let a=document.createElement("option");a.setAttribute("value","medium"),a.innerHTML="Medium";let u=document.createElement("option");u.setAttribute("value","low"),u.innerHTML="Low";let c=document.createElement("button");c.innerHTML="Delete Task",i.appendChild(d),l.appendChild(r),l.appendChild(a),l.appendChild(u),n.appendChild(i),n.appendChild(o),n.appendChild(l),n.appendChild(c),content.appendChild(n)},l=e=>{document.getElementById(e).style.display="block"},r=e=>{document.getElementById(e).style.display="none"},a=(e,t)=>{let n=document.getElementById(e),d=document.createElement("div");d.setAttribute("id",t.name+"-content"),d.setAttribute("class","hidden-list"),n.appendChild(d),t.list.forEach(e=>o(t.name+"-content",e))},u=(e,t)=>{let n=document.getElementById(e),d=document.createElement("div");d.innerHTML=t.name,d.setAttribute("id",t.name),d.addEventListener("click",(function(){document.querySelector(".shown-list").setAttribute("class","hidden-list"),document.getElementById(t.name+"-content").setAttribute("class","shown-list")})),n.appendChild(d)};let c=(()=>{let e=[];return{list:e,addToDoList:t=>{e.push(t)},getTaskListIndex:t=>e.findIndex(e=>e.name==t),generateUniqueID:()=>{let t=Math.floor(9999*Math.random());for(;e.some(e=>e.uniqueID==t);)t=Math.floor(9999*Math.random());return t}}})();c.addToDoList(i("Default",c.generateUniqueID())),c.addToDoList(i("Build a Rocket Ship",c.generateUniqueID())),c.list[c.getTaskListIndex("Default")].addToDoItem(d("Vacuum the house","Vacuuming the house means that you get out the vacuum cleaner and plug it in and push it around the floor.","November 5, 2020","high",!1,c.list[c.getTaskListIndex("Default")].generateUniqueID())),c.list[c.getTaskListIndex("Default")].addToDoItem(d("Do the dishes","Put the dishes in the dishwasher and turn it on. Then put the clean dishes into the cupboards.","September 10, 2020","medium",!1,c.list[c.getTaskListIndex("Default")].generateUniqueID())),c.list[c.getTaskListIndex("Build a Rocket Ship")].addToDoItem(d("Hire Astronauts","Check out indeed.com for good candidates.","January 1, 2025","high",!1,c.list[c.getTaskListIndex("Build a Rocket Ship")].generateUniqueID())),c.list[c.getTaskListIndex("Build a Rocket Ship")].addToDoItem(d("Buy Engines","Buy the best thing on amazon.","Febuary 15, 2023","high",!1,c.list[c.getTaskListIndex("Build a Rocket Ship")].generateUniqueID())),((e,t)=>{t.list.forEach(t=>{u(e,t)})})("lists",c),((e,t)=>{let n=document.getElementById(t),d=document.createElement("form"),i=document.createElement("input");i.setAttribute("id","project-name");let o=document.createElement("label");o.innerHTML="Project Name:";let l=document.createElement("button");l.setAttribute("id",e),l.innerHTML="Add",d.appendChild(o),d.appendChild(document.createElement("br")),d.appendChild(i),n.appendChild(d),n.appendChild(l)})("new-project-ok","new-project-form"),document.getElementById("new-project-button").addEventListener("click",(function(){document.getElementById("new-project-button").style.display="none",l("new-project-form")})),document.getElementById("new-project-ok").addEventListener("click",(function(){c.addToDoList(i(document.getElementById("project-name").value)),document.getElementById("project-name").value="",u("lists",c.list[c.list.length-1]),a("content",c.list[c.list.length-1]),document.getElementById("new-project-button").style.display="block",r("new-project-form")})),((e,t)=>{let n=document.getElementById(t),d=document.createElement("form"),i=document.createElement("input");i.setAttribute("id","form-title");let o=document.createElement("label");o.innerHTML="Title";let l=document.createElement("input");l.setAttribute("id","form-description");let r=document.createElement("label");r.innerHTML="Description";let a=document.createElement("input");a.setAttribute("id","form-date");let u=document.createElement("label");u.innerHTML="Date";let c=document.createElement("select");c.setAttribute("id","form-priority"),c.setAttribute("name","priority");let m=document.createElement("label");m.innerHTML="Priority:";let s=document.createElement("option");s.setAttribute("value","high"),s.innerHTML="High";let p=document.createElement("option");p.setAttribute("value","medium"),p.innerHTML="Medium";let h=document.createElement("option");h.setAttribute("value","low"),h.innerHTML="Low";let g=document.createElement("button");g.setAttribute("id",e),g.innerHTML="Add",d.appendChild(o),d.appendChild(document.createElement("br")),d.appendChild(i),d.appendChild(document.createElement("br")),d.appendChild(r),d.appendChild(document.createElement("br")),d.appendChild(l),d.appendChild(document.createElement("br")),d.appendChild(u),d.appendChild(document.createElement("br")),d.appendChild(a),d.appendChild(document.createElement("br")),d.appendChild(m),d.appendChild(document.createElement("br")),c.appendChild(s),c.appendChild(p),c.appendChild(h),d.appendChild(c),d.appendChild(document.createElement("br")),n.appendChild(d),n.appendChild(g)})("add-task-ok","add-task-form"),document.getElementById("add-task-button").addEventListener("click",(function(){document.getElementById("add-task-button").style.display="none",l("add-task-form")})),document.getElementById("add-task-ok").addEventListener("click",(function(){c.list[c.getTaskListIndex(document.querySelector(".shown-list").id.slice(0,-8))].addToDoItem(d(document.getElementById("form-title").value,document.getElementById("form-description").value,document.getElementById("form-date").value,document.getElementById("form-priority").value,!1,c.list[c.getTaskListIndex(document.querySelector(".shown-list").id.slice(0,-8))].generateUniqueID())),console.log(c),document.getElementById("form-title").value="",document.getElementById("form-description").value="",document.getElementById("form-date").value="",document.getElementById("form-priority").value="",o(document.querySelector(".shown-list").id,c.list[c.getTaskListIndex(document.querySelector(".shown-list").id.slice(0,-8))].list[c.list[c.getTaskListIndex(document.querySelector(".shown-list").id.slice(0,-8))].list.length-1]),document.getElementById("add-task-button").style.display="block",r("add-task-form")})),c.list.forEach(e=>a("content",e)),document.getElementById(c.list[c.getTaskListIndex("Default")].name+"-content").setAttribute("class","shown-list")}]);