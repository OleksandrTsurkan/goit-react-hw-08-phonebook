"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[324],{4324:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r,a,o,i,c,s,d,u,p,l,x,h,b=t(2791),f=t(1413),m=t(9439),g=t(8813),v=t(3531),w=t(5568),j=function(n){return n.contacts.items},y=function(n){return n.contacts.isLoading},z=function(n){return n.contacts.error},Z=t(168),k=t(5867),S=k.zo.form(r||(r=(0,Z.Z)(["\n  display: flex;\n  width: 370px;\n  padding: 8px;\n  gap: 18px;\n  flex-wrap: wrap;\n  border: 2px solid black;\n"]))),C=k.zo.input(a||(a=(0,Z.Z)(["\n  height: 25px;\n  padding: 4px;\n  width: 280px;\n  margin-left: 8 px;\n  border-radius: 5px;\n  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  &:hover {\n    border: 3px dotted #3a7999;\n    color: #3a7999;\n    background: rgba(0, 0, 0, 0);\n    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);\n  }\n"]))),A=k.zo.label(o||(o=(0,Z.Z)(["\n  width: 400px;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n  padding: 4px 5px;\n"]))),_=k.zo.button(i||(i=(0,Z.Z)(["\n  border: 3px solid #3a7999;\n  border-radius: 20px;\n  background-color: #fffcfc;\n  cursor: pointer;\n\n  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  &:hover {\n    border: 3px dotted #3a7999;\n    color: #3a7999;\n    background: rgba(0, 0, 0, 0);\n    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);\n  }\n"]))),D=k.zo.div(c||(c=(0,Z.Z)(["\n  width: 500px;\n  margin: 0px auto;\n  padding-top: 30px;\n"]))),L=t(5935),N=t(184),q=function(){var n=(0,b.useState)(""),e=(0,m.Z)(n,2),t=e[0],r=e[1],a=(0,b.useState)(""),o=(0,m.Z)(a,2),i=o[0],c=o[1],s=(0,v.useDispatch)(),d=(0,v.useSelector)(j),u=function(n){var e=n.target,t=e.value;"name"===e.name?r(t):c(t)},p=function(n,e){return n.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))},l=function(){r(""),c("")};return(0,N.jsx)(D,{children:(0,N.jsxs)(S,{onSubmit:function(n){n.preventDefault();var e={name:t,number:i},r=(0,f.Z)((0,f.Z)({},e),{},{id:(0,g.nanoid)()});void 0===p(d,r)?(s((0,L.w$)(r)).unwrap().then((function(n){w.Am.success("".concat(n.name," successfully added to contacts"))})).catch((function(){w.Am.failure("Sorry, something's wrong")})),l()):w.Am.warning("".concat(r.name," is already in contacts"))},children:[(0,N.jsxs)(A,{children:["Name",(0,N.jsx)(C,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:u,value:t,placeholder:"Enter name ...",required:!0})]}),(0,N.jsxs)(A,{children:["Number",(0,N.jsx)(C,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:u,value:i,placeholder:"Enter number ...",required:!0})]}),(0,N.jsx)(_,{type:"submit",children:"Add contact"})]})})},B=t(2548),E=k.zo.label(s||(s=(0,Z.Z)(["\n  width: 400px;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n  padding: 4px 5px;\n"]))),Y=k.zo.input(d||(d=(0,Z.Z)(["\n  height: 25px;\n  padding: 4px;\n  width: 200px;\n  border-radius: 5px;\n  border: 1px solid blue;\n"]))),$=function(){var n=(0,v.useDispatch)(),e=(0,v.useSelector)(B.YI);return(0,N.jsx)("div",{children:(0,N.jsxs)(E,{children:["Find contacts by name:",(0,N.jsx)(Y,{name:"filter",type:"text",value:e,onChange:function(e){var t=e.currentTarget.value;n((0,B.Ks)(t))}})]})})},F=k.zo.div(u||(u=(0,Z.Z)(["\n  text-align: center;\n  margin-top: 30px;\n  padding: 10px;\n  width: 350px;\n  font-size: 24px;\n  background-color: tomato;\n"]))),I=function(){var n=(0,v.useSelector)(z);return(0,N.jsx)(F,{children:(0,N.jsxs)("p",{children:[" \u041d\u0430\u043c \u0448\u043a\u043e\u0434\u0430, ",n]})})},P=k.zo.div(p||(p=(0,Z.Z)(["\n  width: 100%;\n  height: 60px;\n  border-radius: 7px;\n  opacity: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),J=function(){return(0,N.jsx)(P,{children:(0,N.jsx)("h1",{children:"You don't have any contacts yet"})})},K=k.zo.ul(l||(l=(0,Z.Z)(["\n  padding: 0px;\n  border: 1px solid black;\n  width: 421px;\n"]))),M=k.zo.li(x||(x=(0,Z.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 400px;\n  padding: 10px;\n  border: 1px solid black;\n"]))),T=k.zo.button(h||(h=(0,Z.Z)(["\n  border: 3px solid #3a7999;\n  border-radius: 20px;\n  background-color: #fffcfc;\n  cursor: pointer;\n\n  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  &:hover {\n    border: 3px dotted #3a7999;\n    color: red;\n    background: rgba(0, 0, 0, 0);\n    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);\n  }\n"]))),X=function(){var n=(0,v.useDispatch)();(0,b.useEffect)((function(){n((0,L.m$)())}),[n]);var e=(0,v.useSelector)(j),t=(0,v.useSelector)(B.YI),r=e.filter((function(n){var e=n.name;return null===e||void 0===e?void 0:e.toLowerCase().includes(t)}));return(0,N.jsx)(K,{children:r.map((function(e){var t=e.id,r=e.name,a=e.number;return(0,N.jsxs)(M,{children:[(0,N.jsx)("span",{children:r}),(0,N.jsx)("span",{children:a}),(0,N.jsx)(T,{type:"button",onClick:function(){return e=t,void n((0,L.ku)(e)).unwrap().then((function(n){w.Am.success("".concat(n.name," successfully deleted from contacts"))})).catch((function(){w.Am.failure("Sorry, something's wrong")}));var e},children:"Delete"})]},t)}))})},G="ContactsPage_container__BnqXB",H=function(){var n=(0,v.useSelector)(y),e=(0,v.useSelector)(z),t=(0,v.useSelector)(j);return(0,N.jsxs)("div",{className:G,children:[(0,N.jsx)(q,{}),(0,N.jsx)($,{}),e?(0,N.jsx)(I,{}):(0,N.jsx)(X,{}),0===t.length&&!e&&!n&&(0,N.jsx)(J,{})]})}}}]);
//# sourceMappingURL=324.b6ae468b.chunk.js.map