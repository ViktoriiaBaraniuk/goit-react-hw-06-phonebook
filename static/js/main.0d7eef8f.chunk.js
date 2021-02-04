(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{18:function(e,t,n){e.exports={section:"Section_section__22VyK"}},19:function(e,t,n){e.exports={filter:"Filter_filter__750uk",filterForm:"Filter_filterForm__2Q_C6"}},27:function(e,t,n){e.exports={container:"Container_container__NkRDs"}},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=n(0),i=n.n(r),o=n(10),s=n.n(o),l=n(3),u=n(23),b=n(12),m=n(4),d=n(24),j=n.n(d),f=n(5),O=n(25),h=n.n(O),_=n(13),x=n(2),p=n(26),C=n.n(p),v={addContact:Object(m.b)("contact/add",(function(e,t){return{payload:{id:C.a.generate(),name:e,number:t}}})),deleteContact:Object(m.b)("contact/delete"),changeFilter:Object(m.b)("contact/changeFilter")},N=Object(m.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(c={},Object(_.a)(c,v.addContact,(function(e,t){var n=t.payload;return[].concat(Object(b.a)(e),[n])})),Object(_.a)(c,v.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),c)),g=Object(m.c)("",Object(_.a)({},v.changeFilter,(function(e,t){return t.payload}))),y=Object(x.c)({items:N,filter:g}),k=[].concat(Object(b.a)(Object(m.d)({serializableCheck:{ignoredActions:[f.a,f.f,f.b,f.c,f.d,f.e]}})),[j.a]),F={key:"contacts",storage:h.a,blacklist:["filter"]},w=Object(m.a)({reducer:{contacts:Object(f.g)(F,y)},middleware:k,devTools:!1}),L=Object(f.h)(w),B=(n(48),n(27)),S=n.n(B),I=function(e){var t=e.children;return Object(a.jsx)("div",{className:S.a.container,children:t})},E=n(18),A=n.n(E);var D=function(e){var t=e.title,n=e.children;return Object(a.jsxs)("div",{className:A.a.section,children:[Object(a.jsx)("h2",{className:A.a.title,children:t}),n]})},J=n(20),K=function(e){return e.contacts.items},R=function(e){return e.contacts.filter},H=function(e){var t=K(e),n=R(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},P=n(7),T=n.n(P);function V(){var e=Object(r.useState)(""),t=Object(J.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(""),o=Object(J.a)(i,2),s=o[0],u=o[1],b=Object(l.c)(K),m=Object(l.b)(),d=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":u(a);break;default:return}},j=function(){c(""),u("")};return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),(b.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?(alert("".concat(n," is already in contacts")),1):""===n||""===s?(alert("Please fill in all the fields"),1):void 0)||m(v.addContact(n,s)),j()},className:T.a.form,children:[Object(a.jsxs)("label",{children:["Name",Object(a.jsx)("input",{type:"text",name:"name",placeholder:"Enter your name",value:n,onChange:d,className:T.a.name})]}),Object(a.jsxs)("label",{children:["Number",Object(a.jsx)("input",{type:"text",name:"number",placeholder:"Enter your mobile number",value:s,onChange:d,className:T.a.number})]}),Object(a.jsx)("button",{type:"submit",className:T.a.button,children:"Add contact"})]})}var q=n(8),z=n.n(q);var M=function(){var e=Object(l.c)(H),t=Object(l.b)();return Object(a.jsx)("ul",{className:z.a.list,children:e.map((function(e){var n=e.id,c=e.name,r=e.number;return Object(a.jsxs)("li",{className:z.a.listItem,children:[Object(a.jsxs)("p",{className:z.a.itemName,children:[c,": ",r]}),Object(a.jsx)("button",{type:"button",onClick:function(){return t(v.deleteContact(n))},className:z.a.deleteBtn,children:"Delete"})]},n)}))})},Q=n(19),X=n.n(Q);var Z=function(){var e=Object(l.c)(R),t=Object(l.b)();return Object(a.jsxs)("label",{className:X.a.filterForm,children:["Find contacts by name",Object(a.jsx)("input",{type:"text",value:e,onChange:function(e){return t(v.changeFilter(e.target.value))},className:X.a.filter})]})};function G(){return Object(a.jsxs)(I,{children:[Object(a.jsx)(D,{title:"Phonebook",children:Object(a.jsx)(V,{})}),Object(a.jsxs)(D,{title:"Contacts",children:[Object(a.jsx)(Z,{}),Object(a.jsx)(M,{})]})]})}s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(l.a,{store:w,children:Object(a.jsx)(u.a,{loading:null,persistor:L,children:Object(a.jsx)(G,{})})})}),document.getElementById("root"))},7:function(e,t,n){e.exports={form:"ContactForm_form__1VBRZ",name:"ContactForm_name__1mw4v",number:"ContactForm_number__3E2mg",button:"ContactForm_button__SByIH"}},8:function(e,t,n){e.exports={list:"ContactList_list__3K0Xq",listItem:"ContactList_listItem__CIJ36",deleteBtn:"ContactList_deleteBtn__wBACx",itemName:"ContactList_itemName__9_i8k"}}},[[49,1,2]]]);
//# sourceMappingURL=main.0d7eef8f.chunk.js.map