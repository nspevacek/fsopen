(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,t,n){e.exports=n(36)},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),u=n(2),l=function(e){var t=e.filter,n=e.setFilter;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:t,onChange:function(e){n(e.target.value)}}))},i=n(3),s=n.n(i),m="/api/persons",d=function(){return s.a.get(m).then((function(e){return e.data}))},f=function(e){return s.a.post(m,e).then((function(e){return e.data}))},b=function(e){return s.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},E=function(e,t){return s.a.put("".concat(m,"/").concat(e),t).then((function(e){return e.data}))},h=function(e){var t=e.persons,n=e.newName,a=e.newNumber,o=e.setPersons,c=e.setNewName,u=e.setNewNumber,l=e.setMessage,i=e.setError,s=function(e){c(e.target.value)},m=function(e){u(e.target.value)};return r.a.createElement("form",{onSubmit:function e(b){b.preventDefault();var h={name:n,number:a};if(t.map((function(e){return e.name})).includes(n)){if(!window.confirm("".concat(n," is already added to phonebook, replace the old number with a new one?")))return r.a.createElement("form",{onSubmit:e},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:s})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:m})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")));var p=t.find((function(e){return e.name===n})).id;E(p,h).then(d().then((function(e){o(e)}))),l("Modified ".concat(n)),setTimeout((function(){l("")}),5e3),c(""),u("")}else f(h).then(d().then((function(e){o(e),console.log("test"),l("Added ".concat(n)),setTimeout((function(){l("")}),5e3),c(""),u("")}))).catch((function(e){console.log(e.response.data),i("".concat(e.response.data)),setTimeout((function(){i("")}),5e3),c(""),u("")}))}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:s})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:m})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},p=function(e){var t=e.name,n=e.number,a=e.filter,o=e.id,c=e.setPersons,u=e.setError;return t.toLowerCase().includes(a.toLowerCase())?r.a.createElement(r.a.Fragment,null,t+" "+n,r.a.createElement("button",{onClick:function(){window.confirm("Delete ".concat(t," ?"))&&b(o).then(d().then((function(e){c(e)}))).catch((function(e){u("Information of ".concat(t," has already been removed from server")),setTimeout((function(){u("")}),5e3)}))}},"delete"),r.a.createElement("br",null)):r.a.createElement(r.a.Fragment,null)},v=function(e){var t=e.persons,n=e.setPersons,a=e.filter,o=e.setError;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(p,{key:e.name,name:e.name,number:e.number,filter:a,id:e.id,persons:t,setPersons:n,setError:o})})))},g=function(e){var t=e.message;return""===t?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},t)},w=function(e){var t=e.message;return void 0===t?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",{style:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},t)},j=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),i=Object(u.a)(c,2),s=i[0],m=i[1],f=Object(a.useState)(""),b=Object(u.a)(f,2),E=b[0],p=b[1],j=Object(a.useState)(""),N=Object(u.a)(j,2),O=N[0],S=N[1],y=Object(a.useState)(""),k=Object(u.a)(y,2),C=k[0],P=k[1],F=Object(a.useState)(""),M=Object(u.a)(F,2),T=M[0],B=M[1];return Object(a.useEffect)((function(){d().then((function(e){o(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{message:C}),r.a.createElement(w,{error:T}),r.a.createElement(l,{filter:O,setFilter:S}),r.a.createElement("h2",null,"add a new"),r.a.createElement(h,{persons:n,newName:s,newNumber:E,setPersons:o,setNewName:m,setNewNumber:p,setMessage:P,setError:B}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(v,{persons:n,setPersons:o,filter:O,setError:B}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d71ba1d3.chunk.js.map