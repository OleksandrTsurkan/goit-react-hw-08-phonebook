"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[500],{9500:function(e,a,n){n.r(a),n.d(a,{default:function(){return Z}});var r,t,o,s,i,p=n(9439),d=n(2791),l=n(3531),c=n(5568),u=n(2007),m=n(168),x=n(5867),h=(x.zo.form(r||(r=(0,m.Z)(["\n  display: flex;\n  width: 370px;\n  padding: 8px;\n  gap: 18px;\n  flex-wrap: wrap;\n  border: 2px solid black;\n"]))),x.zo.input(t||(t=(0,m.Z)(["\n  height: 25px;\n  padding: 4px;\n  width: 280px;\n  margin-left: 8 px;\n  border-radius: 5px;\n  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  &:hover {\n    border: 3px dotted #3a7999;\n    color: #3a7999;\n    background: rgba(0, 0, 0, 0);\n    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);\n  }\n"])))),b=x.zo.label(o||(o=(0,m.Z)(["\n  width: 400px;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n  padding: 4px 5px;\n"]))),w=x.zo.button(s||(s=(0,m.Z)(["\n  border: 3px solid #3a7999;\n  border-radius: 20px;\n  background-color: #fffcfc;\n  cursor: pointer;\n\n  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  &:hover {\n    border: 3px dotted #3a7999;\n    color: #3a7999;\n    background: rgba(0, 0, 0, 0);\n    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);\n  }\n"]))),g=x.zo.div(i||(i=(0,m.Z)(["\n  width: 500px;\n  margin: 0px auto;\n  padding-top: 30px;\n"]))),f=n(184),z=function e(){var a=(0,d.useState)(""),n=(0,p.Z)(a,2),r=n[0],t=n[1],o=(0,d.useState)(""),s=(0,p.Z)(o,2),i=s[0],m=s[1],x=(0,d.useState)(""),z=(0,p.Z)(x,2),Z=z[0],k=z[1],v=(0,l.useDispatch)(),y=function(e){var a=e.currentTarget,n=a.name,r=a.value;switch(n){case"name":t(r);break;case"email":m(r);break;case"password":k(r)}};return(0,f.jsx)(g,{children:(0,f.jsxs)(e,{onSubmit:function(e){e.preventDefault();var a={name:r,email:i,password:Z};console.log("newUser",a),v((0,u.z2)(a)).unwrap().then((function(e){c.Am.success("".concat(e.newUser.name," welcome!"))})).catch((function(){c.Am.failure("Sorry, something's wrong")})),t(""),m(""),k("")},children:[(0,f.jsxs)(b,{children:["Name",(0,f.jsx)(h,{type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name ...",onChange:y})]}),(0,f.jsxs)(b,{children:["Email",(0,f.jsx)(h,{type:"email",name:"email",value:i,pattern:"/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/.",title:"Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com",required:!0,placeholder:"Enter email ...",onChange:y})]}),(0,f.jsxs)(b,{children:["Password",(0,f.jsx)(h,{type:"password",name:"password",value:Z,pattern:"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",title:"Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct.",required:!0,placeholder:"Enter password ...",onChange:y})]}),(0,f.jsx)(w,{type:"submit",children:"Register"})]})})},Z=function(){return(0,f.jsx)(z,{})}}}]);
//# sourceMappingURL=500.54d8088c.chunk.js.map