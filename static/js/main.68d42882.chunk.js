(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(4),s=n.n(c),r=n(2),l=n(0);function o(){var e=Object(a.useState)("8"),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)("Click the 'Generate Password' button to generate a password!"),o=Object(r.a)(s,2),i=o[0],h=o[1],d=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],b=["`","!","@","#","$","%","^","^","&","*","(",")","-","=","+"],j=Object(a.useState)(!0),u=Object(r.a)(j,2),p=u[0],m=u[1],O=Object(a.useState)(!0),x=Object(r.a)(O,2),f=x[0],g=x[1],k=Object(a.useState)(!0),v=Object(r.a)(k,2),w=v[0],C=v[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Random Password Generator"}),Object(l.jsxs)("div",{className:"elements",children:[Object(l.jsx)("input",{type:"checkbox",name:"numbers",onChange:function(){m(!p)},defaultChecked:p,id:"numbers"}),Object(l.jsx)("span",{children:Object(l.jsx)("label",{htmlFor:"numbers",children:"Include numbers from 0-9"})})]}),Object(l.jsxs)("div",{className:"elements",children:[Object(l.jsx)("input",{type:"checkbox",name:"numbers",onChange:function(){C(!w)},defaultChecked:w,id:"capslock"}),Object(l.jsx)("span",{children:Object(l.jsx)("label",{htmlFor:"capslock",children:"Must contain capital letters"})})]}),Object(l.jsxs)("div",{className:"elements",children:[Object(l.jsx)("input",{type:"checkbox",name:"special",onChange:function(){g(!f)},defaultChecked:f,id:"characters"}),Object(l.jsx)("span",{children:Object(l.jsx)("label",{htmlFor:"characters",children:"Include special characters (like ~!@#$%)"})})]}),Object(l.jsxs)("div",{className:"elements",children:[Object(l.jsx)("label",{htmlFor:"length",children:"The password contains "}),Object(l.jsx)("input",{type:"number",onChange:function(e){return c(e.target.value)},value:n,id:"length"}),Object(l.jsx)("span",{children:Object(l.jsx)("label",{htmlFor:"length",children:" characters (3-50)"})})]}),Object(l.jsx)("button",{onClick:function(){return function(){for(var e="",t=0;t<n;t++){var a=Math.floor(Math.random()*d.length),c=Math.floor(Math.random()*b.length),s=Math.floor(9*Math.random());if(n<3||n>50)return void h("Please enter a number between 3 to 50!");!0===w&&(d[a]=d[a].toUpperCase()),!1===p&&!1===f?e+=d[a]:!0===p&&!0===f?e+=t%2?s:1===Math.floor(2*Math.random()+1)?b[c]:d[a]:!0===p?e+=t%2?s:d[a]:!0===f&&(e+=t%2?b[c]:d[a])}h(e),console.log("Length of password generated: ".concat(e.length," characters"))}()},className:"button",children:"Generate Password"}),Object(l.jsxs)("p",{id:"text-when-generate",children:["Password Generated: ",Object(l.jsx)("span",{className:"text-password",title:"Click to copy",onClick:function(){return console.log(i),navigator.clipboard.writeText(i),void alert("Password has been copied to clipboard!")},children:i})]})]})}n(10);s.a.render(Object(l.jsx)(o,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.68d42882.chunk.js.map