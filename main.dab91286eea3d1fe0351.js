(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1DEj":function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("RtS0"),t("IvQZ"),t("8cZI"),t("WB5j"),t("D/wG"),t("Muwe"),t("4NM0"),t("aZFp"),t("1DEj");t("3dw1");window.history.pushState("object or string","Title","/test-timetable/calendar");var o=[{name:"Kate",meetings:[]},{name:"John",meetings:[]},{name:"Hanna",meetings:[]},{name:"Denis",meetings:[]}],i=document.querySelector(".event_btn"),a=document.querySelector(".container"),l=document.querySelector(".participants");i.addEventListener("click",(function(){return function(){window.history.pushState("object or string","Title","test-timetable/create-event"),a.innerHTML="\n  <div class='markup_overlay'>\n  <div class='form_container'>\n  <form class='event_create_form'>\n    <label for=\"\">Name of the event:\n    <input type=\"text\" class='input'>\n  </label>\n  <label for=\"Participants\">Participants: \n  <div class='container_dropdown'>\n  <form>\n      <input type=\"text\" class='input_participant'>\n  </form>\n  <div class=\"dropContainer\"></div>\n</div>\n  </label>\n  <label for=\"Day\">Day:\n    <select class='select_day'>\n    <option value='Monday'>\n      Monday\n    </option>\n    <option value='Tuesday'>\n      Tuesday\n    </option>\n    <option value='Wednesday'>\n      Wednesday\n    </option>\n    <option value='Thursday'>\n      Thursday\n    </option>\n    <option value='Friday'>\n      Friday\n    </option>\n  </select>\n  </label>\n  <label for=\"\">Time:\n   <select class='select_time'>\n    <option value='10:00'>\n      10:00\n    </option>\n    <option value='11:00'>\n      11:00\n    </option>\n    <option value='12:00'>\n      12:00\n    </option>\n    <option value='13:00'>\n      13:00\n    </option>\n    <option value='14:00'>\n      14:00\n    </option>\n    <option value='15:00'>\n      15:00\n    </option>\n    <option value='16:00'>\n      16:00\n    </option>\n    <option value='17:00'>\n      17:00\n    </option>\n    <option value='18:00'>\n      18:00\n    </option>\n   </select>\n  </label>\n  <div class='button_container'>\n  <button class='cancel_button'>Cancel</button>\n  <button class='create_button'>Create</button>\n  </div>\n  </form>\n  </div>\n  </div>\n  ";var e=document.querySelector(".input"),n=document.querySelector(".create_button"),t=document.querySelector(".cancel_button"),i=document.querySelector(".input_participant");function l(e,n){return document.querySelector("."+e+"_"+n)}function u(n){n.preventDefault();var t,a=document.querySelector(".select_day").value,u=document.querySelector(".select_time").value.slice(0,2),c=i.value.split(","),r={participants:c.slice(0,c.length-1),day:a,time:u};if(o.forEach((function(e){c.includes(e.name)&&e.meetings.push(r)})),""!==e.value&&""!==i.value)return""===l(a,u).innerHTML?(t=""+c.slice(0,c.length-1).join(","),l(a,u).innerHTML="<button class='delete_btn'>"+e.value+"   X</button>",l(a,u).classList.add(t),void document.querySelector(".delete_btn").addEventListener("click",(function(e){return function(e){document.querySelector(".delete_container").innerHTML='<div class="delete_overlay_container"><div class="delete_msg"><p>Are You shure You want to delete "'+e.path[1].innerText+'" event?</p><div class="delete_btn_container"><button class="delete_yes">Yes</button><button class="delete_no">No</button></div></div></div>';var n=document.querySelector(".delete_yes"),t=document.querySelector(".delete_no");n.addEventListener("click",(function(){e.path[1].innerHTML="",e.path[1].classList.value=e.path[1].classList[0],document.querySelector(".delete_container").innerHTML=""})),t.addEventListener("click",(function(){document.querySelector(".delete_container").innerHTML=""}))}(e)}))):(document.querySelector(".announcement").innerHTML='<div class="announcement_msg"><p>Failed to create an event.Time slot is already booked</p><button class="close_announcement">x</button></div>',void document.querySelector(".close_announcement").addEventListener("click",(function(){return document.querySelector(".announcement").innerHTML=""})));alert("Please, enter the name of meeting and participants")}t.addEventListener("click",(function(){a.innerHTML=""})),i.addEventListener("focus",(function(){return function(e){document.querySelector(".dropContainer").innerHTML="<ul> <li ><button class='Kate_button dropdown_btn' >Kate</button></li>\n        <li ><button class='John_button dropdown_btn' >John</button></li>\n        <li ><button class='Hanna_button dropdown_btn' >Hanna</button></li>\n        <li ><button  class='Denis_button dropdown_btn'  >Denis</button></li>\n    </ul>",e.setAttribute("disabled","null");var n=document.querySelector(".Kate_button"),t=document.querySelector(".John_button"),o=document.querySelector(".Hanna_button"),i=document.querySelector(".Denis_button");n.addEventListener("click",(function(t){t.preventDefault(),e.value+="Kate,",n.setAttribute("disabled","null")})),t.addEventListener("click",(function(n){n.preventDefault(),e.value+="John,",t.setAttribute("disabled","null")})),o.addEventListener("click",(function(n){n.preventDefault(),e.value+="Hanna,",o.setAttribute("disabled","null")})),i.addEventListener("click",(function(n){n.preventDefault(),e.value+="Denis,",i.setAttribute("disabled","null")}))}(i)})),t.addEventListener("click",(function(){return a.innerHTML=""})),n.addEventListener("click",(function(e){u(e),a.innerHTML="",window.history.pushState("object or string","Title","/calendar")}))}()})),l.addEventListener("change",(function(e){return function(e){var n=e.target.value;document.querySelectorAll("td").forEach((function(e){e.classList.value.includes(""+n)?e.children.forEach((function(e){return e.setAttribute("style","visibility: visible")})):e.children.forEach((function(e){return e.setAttribute("style","visibility: hidden")}))}))}(e)}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.dab91286eea3d1fe0351.js.map