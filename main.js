!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=(e,t,n,o,i,d)=>({title:e,description:t,dueDate:n,priority:o,done:i,uniqueID:d}),i=(e,t)=>{const n=[],o=e=>n.findIndex(t=>t.uniqueID===e);return{name:e,uniqueID:t,list:n,addToDoItem:e=>{n.push(e)},getToDoItemIndexfromUniqueID:o,generateUniqueID:()=>{let e=Math.floor(9999*Math.random());for(;n.some(t=>t.uniqueID===e);)e=Math.floor(9999*Math.random());return e},removeToDoItem:e=>{n.splice(o(e),1)}}},d=(e,t)=>{const n=document.getElementById(e),o=document.createElement("div");o.setAttribute("id",t.uniqueID+"-task"),o.setAttribute("class","to-do-item");const i=document.createElement("input");i.setAttribute("type","checkbox"),i.setAttribute("id",t.uniqueID+"-toggle-done"),i.setAttribute("name",t.uniqueID+"-toggle-done");const d=document.createElement("label");d.setAttribute("class","to-do-item-title"),d.setAttribute("for",t.uniqueID+"-toggle-done"),d.innerHTML=t.title;const r=document.createElement("p");r.setAttribute("class","to-do-item-desc"),r.innerHTML=t.description;const u=document.createElement("div");u.innerHTML="Due Date: "+t.dueDate;const l=document.createElement("select");l.setAttribute("name",t.uniqueID+"-priority"),l.setAttribute("id",t.uniqueID+"-priority");const c=document.createElement("option");c.setAttribute("value","high"),c.innerHTML="High";const a=document.createElement("option");a.setAttribute("value","medium"),a.innerHTML="Medium";const s=document.createElement("option");s.setAttribute("value","low"),s.innerHTML="Low";const m=document.createElement("button");m.setAttribute("id",t.uniqueID+"-delete-button"),m.innerHTML="Delete Task",m.addEventListener("click",()=>{document.querySelector(".shown-list").removeChild(document.getElementById(t.uniqueID+"-task"))}),!0===t.done&&(o.style.textDecoration="line-through",i.checked=!0),l.appendChild(c),l.appendChild(a),l.appendChild(s),o.appendChild(i),o.appendChild(d),o.appendChild(r),o.appendChild(u),o.appendChild(document.createElement("br")),o.appendChild(l),o.appendChild(document.createElement("br")),o.appendChild(document.createElement("br")),o.appendChild(m),n.appendChild(o)},r=e=>{document.getElementById(e).style.display="block"},u=e=>{document.getElementById(e).style.display="none"},l=(e,t)=>{const n=document.getElementById(e),o=document.createElement("div");o.setAttribute("id",t.uniqueID+"-content"),o.setAttribute("class","hidden-list"),n.appendChild(o),t.list.forEach(e=>d(t.uniqueID+"-content",e))},c=(e,t)=>{const n=document.getElementById(e),o=document.createElement("div");o.innerHTML=t.name,o.setAttribute("id",t.uniqueID),o.setAttribute("class","project"),o.addEventListener("click",()=>{document.querySelector(".shown-list").setAttribute("class","hidden-list"),document.getElementById(t.uniqueID+"-content").setAttribute("class","shown-list"),document.querySelectorAll(".project").forEach(e=>{e.style.background="white"}),o.style.background="lightgrey"}),n.appendChild(o)},a=(()=>{const e=[];return{list:e,addToDoList:t=>{e.push(t)},getTaskListIndex:t=>e.findIndex(e=>e.name===t),getTaskListIndexfromUniqueID:t=>e.findIndex(e=>e.uniqueID===t),generateUniqueID:()=>{let t=Math.floor(9999*Math.random());for(;e.some(e=>e.uniqueID===t);)t=Math.floor(9999*Math.random());return t}}})(),s=window.localStorage,m=JSON.parse(s.getItem("projects"));function p(e){const t=a.list.find(t=>-1!==t.getToDoItemIndexfromUniqueID(e));return t.list[t.getToDoItemIndexfromUniqueID(e)]}function h(e){document.getElementById(e+"-delete-button").addEventListener("click",()=>{a.list[a.getTaskListIndexfromUniqueID(document.querySelector(".shown-list").id.slice(0,-8))].removeToDoItem(e)})}function I(e){const t=document.getElementById(e+"-toggle-done"),n=document.getElementById(e+"-task");t.addEventListener("click",()=>{const o=p(e);!0===t.checked?(o.done=!0,n.style.textDecoration="line-through"):(o.done=!1,n.style.textDecoration="")})}function g(e){const t=document.getElementById(e+"-priority"),n=p(e);t.value=n.priority,t.addEventListener("change",()=>{p(e).priority=t.value})}null!=m&&(m.list.forEach(e=>{a.addToDoList(i(e.name,e.uniqueID))}),m.list.forEach(e=>{e.list.forEach(t=>{a.list[a.getTaskListIndexfromUniqueID(e.uniqueID)].addToDoItem(o(t.title,t.description,t.dueDate,t.priority,t.done,t.uniqueID))})})),0===a.list.length&&(a.addToDoList(i("Default",a.generateUniqueID())),a.addToDoList(i("Build a Rocket Ship",a.generateUniqueID())),a.list[a.getTaskListIndex("Default")].addToDoItem(o("Vacuum the house","Vacuuming the house means that you get out the vacuum cleaner and plug it in and push it around the floor.","November 5, 2020","medium",!1,a.list[a.getTaskListIndex("Default")].generateUniqueID())),a.list[a.getTaskListIndex("Default")].addToDoItem(o("Do the dishes","Put the dishes in the dishwasher and turn it on. Then put the clean dishes into the cupboards.","September 10, 2020","medium",!1,a.list[a.getTaskListIndex("Default")].generateUniqueID())),a.list[a.getTaskListIndex("Build a Rocket Ship")].addToDoItem(o("Hire Astronauts","Check out indeed.com for good candidates.","January 1, 2025","low",!1,a.list[a.getTaskListIndex("Build a Rocket Ship")].generateUniqueID())),a.list[a.getTaskListIndex("Build a Rocket Ship")].addToDoItem(o("Buy Engines","Buy the best thing on amazon.","Febuary 15, 2023","low",!1,a.list[a.getTaskListIndex("Build a Rocket Ship")].generateUniqueID()))),((e,t)=>{t.list.forEach(t=>{c(e,t)}),document.getElementById(t.list[0].uniqueID).style.background="lightgrey"})("lists",a),((e,t)=>{const n=document.getElementById(t),o=document.createElement("form"),i=document.createElement("input");i.setAttribute("id","project-name");const d=document.createElement("label");d.innerHTML="Project Name:";const r=document.createElement("button");r.setAttribute("id",e),r.innerHTML="Add",o.appendChild(d),o.appendChild(document.createElement("br")),o.appendChild(i),n.appendChild(o),n.appendChild(r)})("new-project-ok","new-project-form"),document.getElementById("new-project-button").addEventListener("click",()=>{document.getElementById("new-project-button").style.display="none",r("new-project-form")}),document.getElementById("new-project-ok").addEventListener("click",()=>{a.addToDoList(i(document.getElementById("project-name").value,a.generateUniqueID())),document.getElementById("project-name").value="",c("lists",a.list[a.list.length-1]),l("content",a.list[a.list.length-1]),document.getElementById("new-project-button").style.display="block",u("new-project-form")}),((e,t)=>{const n=document.getElementById(t),o=document.createElement("form"),i=document.createElement("input");i.setAttribute("id","form-title");const d=document.createElement("label");d.innerHTML="Title";const r=document.createElement("input");r.setAttribute("id","form-description");const u=document.createElement("label");u.innerHTML="Description";const l=document.createElement("input");l.setAttribute("type","date"),l.setAttribute("id","form-date");const c=document.createElement("label");c.innerHTML="Due Date";const a=document.createElement("select");a.setAttribute("id","form-priority"),a.setAttribute("name","priority");const s=document.createElement("label");s.innerHTML="Priority:";const m=document.createElement("option");m.setAttribute("value","high"),m.innerHTML="High";const p=document.createElement("option");p.setAttribute("value","medium"),p.innerHTML="Medium";const h=document.createElement("option");h.setAttribute("value","low"),h.innerHTML="Low";const I=document.createElement("button");I.setAttribute("id",e),I.innerHTML="Add",o.appendChild(d),o.appendChild(document.createElement("br")),o.appendChild(i),o.appendChild(document.createElement("br")),o.appendChild(u),o.appendChild(document.createElement("br")),o.appendChild(r),o.appendChild(document.createElement("br")),o.appendChild(c),o.appendChild(document.createElement("br")),o.appendChild(l),o.appendChild(document.createElement("br")),o.appendChild(s),o.appendChild(document.createElement("br")),a.appendChild(m),a.appendChild(p),a.appendChild(h),o.appendChild(a),o.appendChild(document.createElement("br")),n.appendChild(o),n.appendChild(I)})("add-task-ok","add-task-form"),document.getElementById("add-task-button").addEventListener("click",()=>{document.getElementById("add-task-button").style.display="none",r("add-task-form")}),document.getElementById("add-task-ok").addEventListener("click",()=>{const e=a.list[a.getTaskListIndexfromUniqueID(document.querySelector(".shown-list").id.slice(0,-8))].generateUniqueID();a.list[a.getTaskListIndexfromUniqueID(document.querySelector(".shown-list").id.slice(0,-8))].addToDoItem(o(document.getElementById("form-title").value,document.getElementById("form-description").value,document.getElementById("form-date").value,document.getElementById("form-priority").value,!1,e)),document.getElementById("form-title").value="",document.getElementById("form-description").value="",document.getElementById("form-date").value="",document.getElementById("form-priority").value="",d(document.querySelector(".shown-list").id,a.list[a.getTaskListIndexfromUniqueID(document.querySelector(".shown-list").id.slice(0,-8))].list[a.list[a.getTaskListIndexfromUniqueID(document.querySelector(".shown-list").id.slice(0,-8))].list.length-1]),h(e),I(e),g(e),document.getElementById("add-task-button").style.display="block",u("add-task-form")}),a.list.forEach(e=>l("content",e)),document.getElementById(a.list[a.getTaskListIndex("Default")].uniqueID+"-content").setAttribute("class","shown-list"),a.list.forEach(e=>{e.list.forEach(e=>{h(e.uniqueID),I(e.uniqueID),g(e.uniqueID)})}),window.addEventListener("beforeunload",()=>{s.removeItem("projects"),s.setItem("projects",JSON.stringify(a))})}]);