(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(4),s=n.n(a),r=n(2),o=n(0);function l(){var e=Object(c.useState)("8"),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)("Click the 'Generate Password' button to generate a password!"),l=Object(r.a)(s,2),i=l[0],d=l[1],b=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],j=["`","!","@","#","$","%","^","^","&","*","(",")","-","=","+"],h=Object(c.useState)(!0),u=Object(r.a)(h,2),p=u[0],O=u[1],m=Object(c.useState)(!0),x=Object(r.a)(m,2),f=x[0],g=x[1],k=Object(c.useState)(!0),v=Object(r.a)(k,2),w=v[0],C=v[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Random Password Generator"}),Object(o.jsxs)("div",{className:"elements",children:[Object(o.jsx)("input",{type:"checkbox",name:"numbers",onChange:function(){O(!p)},defaultChecked:p,id:"numbers"}),Object(o.jsx)("span",{children:Object(o.jsx)("label",{for:"numbers",children:"Include numbers from 0-9"})})]}),Object(o.jsxs)("div",{className:"elements",children:[Object(o.jsx)("input",{type:"checkbox",name:"numbers",onChange:function(){C(!w)},defaultChecked:w,id:"capslock"}),Object(o.jsx)("span",{children:Object(o.jsx)("label",{for:"capslock",children:"Must contain capital letters"})})]}),Object(o.jsxs)("div",{className:"elements",children:[Object(o.jsx)("input",{type:"checkbox",name:"special",onChange:function(){g(!f)},defaultChecked:f,id:"characters"}),Object(o.jsx)("span",{children:Object(o.jsx)("label",{for:"characters",children:"Include special characters (like ~!@#$%)"})})]}),Object(o.jsxs)("div",{className:"elements",children:[Object(o.jsx)("label",{for:"length",children:"The password contains "}),Object(o.jsx)("input",{type:"number",onChange:function(e){return a(e.target.value)},value:n,id:"length"}),Object(o.jsx)("span",{children:Object(o.jsx)("label",{for:"length",children:" characters (3-50)"})})]}),Object(o.jsx)("button",{onClick:function(){return function(){for(var e="",t=0;t<n;t++){var c=Math.floor(Math.random()*b.length),a=Math.floor(Math.random()*j.length),s=Math.floor(9*Math.random());if(n<3||n>50)return void d("Please enter a number between 3 to 50!");!0===w&&(b[c]=b[c].toUpperCase()),!1===p&&!1===f?e+=b[c]:!0===p&&!0===f?e+=t%2?s:1===Math.floor(2*Math.random()+1)?j[a]:b[c]:!0===p?e+=t%2?s:b[c]:!0===f&&(e+=t%2?j[a]:b[c])}d(e),console.log("Length of password generated: ".concat(e.length," characters"))}()},className:"button",children:"Generate Password"}),Object(o.jsxs)("p",{children:["Password Generated: ",Object(o.jsx)("p",{className:"text-password",title:"Click to copy",onClick:function(){return console.log(i),navigator.clipboard.writeText(i),void alert("Password has been copied to clipboard!")},children:i})]})]})}n(10);s.a.render(Object(o.jsx)(l,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.b9fc2665.chunk.js.map