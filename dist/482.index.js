"use strict";(self.webpackChunkfinal_website=self.webpackChunkfinal_website||[]).push([[482],{482:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var l=a(294),r=a(106),n=a(810),s=a(893);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var l,r,n,s,i=[],o=!0,c=!1;try{if(n=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;o=!1}else for(;!(o=(l=n.call(a)).done)&&(i.push(l.value),i.length!==t);o=!0);}catch(e){c=!0,r=e}finally{try{if(!o&&null!=a.return&&(s=a.return(),Object(s)!==s))return}finally{if(c)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}const c=function(){var e,t,a=i((0,l.useState)(),2),o=a[0],c=a[1],m=i((0,l.useState)(),2),d=m[0],u=m[1],x=function(e){if("email"!==e.target.name){var t;e.target.value.length?c(""):c("".concat(e.target.name," is required."))}else{var a=(t=e.target.value,/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase()));c(a?"":"Your email is invalid")}},h=(0,l.useRef)();return(0,s.jsxs)("section",{id:"contact",className:"d-flex flex-wrap col-9 mx-auto my-5",children:[(0,s.jsxs)("div",{className:"col-11 col-lg-5 mx-auto text-center text-md-start",children:[(0,s.jsx)("h1",{children:"Reach Out"}),(0,s.jsx)("p",{children:"I'm eager to become an asset to your team! Reach out to me on whatever platform is most convenient and I will be happy to connect with you."}),(0,s.jsxs)("div",{className:"text-lg mt-4 max-sm:text-base",children:[(0,s.jsxs)("div",{className:"d-flex flex-column flex-md-row",children:[(0,s.jsx)("p",{className:"mt-2 mt-md-0 mb-0 mx-1",children:"Phone:"}),(0,s.jsx)("a",{href:"tel:289-200-2721",children:"289-200-2721"})]}),(0,s.jsxs)("div",{className:"d-flex flex-column flex-md-row",children:[(0,s.jsx)("p",{className:"mt-2 mt-md-0 mb-0 mx-1",children:"Email:"}),(0,s.jsx)("a",{href:"mailto: janae.wel@gmail.com",target:"blank",children:" janae.wel@gmail.com"})]}),(0,s.jsxs)("div",{className:"d-flex flex-column flex-md-row",children:[(0,s.jsx)("p",{className:"mt-2 mt-md-0 mb-0 mx-1",children:"GitHub:"}),(0,s.jsx)("a",{href:"https://githubcom/gitJanaeW?tab=repositories",target:"blank",children:"GitHub"})]}),(0,s.jsxs)("div",{className:"d-flex flex-column flex-md-row",children:[(0,s.jsx)("p",{className:"mt-2 mt-md-0 mb-0 mx-1",children:"LinkedIn:"}),(0,s.jsx)("a",{href:"https://www.linkedin.com/in/janae-welsh-01a52a23a/",target:"blank",children:"LinkedIn"})]})]})]}),(0,s.jsxs)("form",{className:"col-11 col-lg-4 mx-auto mt-3",ref:h,onSubmit:function(e){e.preventDefault(),n.ZP.sendForm("janae_gmail","template_ed06vlo",h.current,"IRyGugxNdMef1SXwi").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),u("Thanks for reaching out!"),h.current.reset()},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"name",className:"fw-bold mb-2",children:"FULL NAME:"}),(0,s.jsx)("br",{}),(0,s.jsx)("input",{id:"name",onBlur:x,type:"text",name:"name",className:"w-100 p-1 rounded border-0"})]}),(0,s.jsxs)("div",{className:"mt-3",children:[(0,s.jsx)("label",{htmlFor:"email",className:"fw-bold mb-2",children:"EMAIL:"}),(0,s.jsx)("br",{}),(0,s.jsx)("input",{id:"email",onBlur:x,type:"email",name:"email",className:"w-100 p-1 rounded border-0"})]}),(0,s.jsxs)("div",{className:"mt-3",children:[(0,s.jsx)("label",{htmlFor:"message",className:"fw-bold mb-2",children:"MESSAGE"}),(0,s.jsx)("br",{}),(0,s.jsx)("textarea",{id:"message",onBlur:x,name:"message",className:"w-100 p-1 rounded border-0",style:{height:"100px"}})]}),o&&(0,s.jsx)("p",{children:(e=o,t=e.split(""),t.splice(0,1,e[0].toUpperCase()),t.join(""))}),(0,s.jsx)("div",{className:"mt-3",children:(0,s.jsx)("button",{className:"bg-info bg-gradient rounded border-0 text-white fw-bold px-3 py-2",type:"submit",children:"SEND"})}),d&&(0,s.jsx)("div",{onClick:function(e){e.preventDefault(),"╳"===e.target.value&&e.currentTarget.setAttribute("hidden",!0)},className:"bg-secondary text-black rounded fixed-bottom",role:"alert",style:{position:"sticky",bottom:"10px",boxShadow:"0 2px 10px black"},children:(0,s.jsxs)("div",{className:"my-4 d-flex justify-content-between align-items-center",children:[(0,s.jsxs)("div",{className:"d-flex align-items-center px-2",children:[(0,s.jsx)(r.wr2,{}),(0,s.jsx)("strong",{children:": Email sent!"})]}),(0,s.jsx)("input",{type:"button",className:"bg-primary border-0 p-3 text-white",style:{borderRadius:"0 5px 5px 0"},value:"╳"})]})})]})]})}}}]);