(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+yNS":function(e,t,n){"use strict";var a=n("Wbzz");t.a=function(){return Object(a.useStaticQuery)("4197596454").site.siteMetadata}},"1RYU":function(e,t,n){"use strict";var a=n("PcS7"),r=n("2A+t"),o=n("MXbp"),i=n("Wbzz"),c=n("izhR"),l=n("+yNS"),s=n("wuJk"),p=function(e){var t=e.isDark,n=e.toggle;return Object(r.c)("button",{onClick:n,type:"button","aria-label":t?"Activate Light Mode":"Activate Dark Mode",title:t?"Activate Light Mode":"Activate Dark Mode",sx:{opacity:.65,position:"relative",borderRadius:"5px",width:"40px",height:"25px",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.3s ease",border:"none",outline:"none",background:"none",cursor:"pointer",padding:0,appearance:"none","&:hover, &:focus":{opacity:1}}},Object(r.c)("div",{sx:{position:"relative",width:"24px",height:"24px",borderRadius:"50%",border:function(e){return t?"4px solid "+e.colors.toggleIcon:"none"},backgroundColor:t?"toggleIcon":"transparent",transform:t?"scale(0.55)":"scale(1)",transition:"all 0.45s ease",overflow:t?"visible":"hidden",boxShadow:function(e){return t?"none":"inset 8px -8px 0px 0px "+e.colors.toggleIcon},"&:before":{content:'""',position:"absolute",right:"-9px",top:"-9px",height:"24px",width:"24px",border:function(e){return t?"2px solid "+e.colors.toggleIcon:"none"},borderRadius:"50%",transform:t?"translate(14px, -14px)":"translate(0, 0)",opacity:t?0:1,transition:"transform 0.45s ease"},"&:after":{content:'""',width:"8px",height:"8px",borderRadius:"50%",margin:"-4px 0 0 -4px",position:"absolute",top:"50%",left:"50%",boxShadow:function(e){return"0 -23px 0 "+e.colors.toggleIcon+", 0 23px 0 "+e.colors.toggleIcon+", 23px 0 0 "+e.colors.toggleIcon+", -23px 0 0 "+e.colors.toggleIcon+", 15px 15px 0 "+e.colors.toggleIcon+", -15px 15px 0 "+e.colors.toggleIcon+", 15px -15px 0 "+e.colors.toggleIcon+", -15px -15px 0 "+e.colors.toggleIcon},transform:t?"scale(1)":"scale(0)",transition:"all 0.35s ease"}}}))},g=n("q1tI"),b=n.n(g),u=n("Cceb"),m=function(e){var t=e.nav,n=Object(s.a)().basePath;return Object(r.c)(b.a.Fragment,null,t&&t.length>0&&Object(r.c)("nav",{sx:{"a:not(:last-of-type)":{mr:3},fontSize:[1,"18px"],".active":{color:"heading"}}},t.map((function(e){return Object(r.c)(o.b.a,{key:e.slug,as:i.Link,activeClassName:"active",to:Object(u.a)("/"+n+"/"+e.slug)},e.title)}))))};t.a=function(){var e=Object(l.a)().siteTitle,t=Object(s.a)(),n=t.navigation,g=t.externalLinks,b=t.basePath,d=Object(a.b)(),f=d[0],h=d[1],x="dark"===f;return Object(r.c)("header",{sx:{mb:[5,6]}},Object(r.c)(c.c,{sx:{alignItems:"center",justifyContent:"space-between"}},Object(r.c)(i.Link,{to:Object(u.a)("/"+b),"aria-label":e+" - Back to home",sx:{color:"heading",textDecoration:"none"}},Object(r.c)("h1",{sx:{my:0,fontWeight:"medium",fontSize:[3,4]}},e," 👨🏽‍💻")),Object(r.c)(p,{isDark:x,toggle:function(e){e.preventDefault(),h(x?"light":"dark")}})),Object(r.c)("div",{sx:{boxSizing:"border-box",display:"flex",variant:"dividers.bottom",alignItems:"center",justifyContent:"space-between",mt:3,color:"secondary",a:{color:"secondary",":hover":{color:"heading"}},flexFlow:"wrap"}},Object(r.c)(m,{nav:n}),g&&g.length>0&&Object(r.c)("div",{sx:{"a:not(:first-of-type)":{ml:3},fontSize:[1,"18px"],display:["none","initial"]}},g.map((function(e){return Object(r.c)(o.b.a,{key:e.url,href:e.url,target:"_blank"},e.name)})))))}},"5hlw":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("qhky"),i=n("+yNS"),c=function(e){var t=e.title,n=e.description,a=e.pathname,c=e.image,l=e.children,s=Object(i.a)(),p=s.siteTitle,g=s.siteTitleAlt,b=s.siteUrl,u=s.siteDescription,m=s.siteLanguage,d=s.siteImage,f=s.author,h={title:t||g,description:n||u,url:""+b+(a||""),image:""+b+(c||d)};return r.a.createElement(o.a,{title:t,defaultTitle:g,titleTemplate:"%s | "+p},r.a.createElement("html",{lang:m}),r.a.createElement("meta",{name:"description",content:h.description}),r.a.createElement("meta",{name:"image",content:h.image}),r.a.createElement("meta",{property:"og:title",content:h.title}),r.a.createElement("meta",{property:"og:url",content:h.url}),r.a.createElement("meta",{property:"og:description",content:h.description}),r.a.createElement("meta",{property:"og:image",content:h.image}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:image:alt",content:h.description}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:title",content:h.title}),r.a.createElement("meta",{name:"twitter:url",content:h.url}),r.a.createElement("meta",{name:"twitter:description",content:h.description}),r.a.createElement("meta",{name:"twitter:image",content:h.image}),r.a.createElement("meta",{name:"twitter:image:alt",content:h.description}),r.a.createElement("meta",{name:"twitter:creator",content:f}),r.a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/apple-touch-icon.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),r.a.createElement("link",{rel:"manifest",href:"/site.webmanifest"}),r.a.createElement("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),r.a.createElement("meta",{name:"msapplication-TileColor",content:"#00a300"}),r.a.createElement("meta",{name:"theme-color",content:"#ffffff"}),l)};t.a=c,c.defaultProps={title:"",description:!1,pathname:!1,image:!1,children:null}},"7nDy":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("2A+t"),i=[{id:"github",href:"https://github.com/taiyrbegeyev"},{id:"linkedin",href:"https://www.linkedin.com/in/taiyrbegeyev"},{id:"twitter",href:"https://twitter.com/tbegeyev"},{id:"instagram",href:"https://www.instagram.com/taiyrbegeyev"}];t.a=function(){return Object(o.c)(r.a.Fragment,null,i.map((function(e){return Object(o.c)("div",{key:e.id},Object(o.c)("a",{href:e.href,target:"_blank"},Object(o.c)("img",{sx:{margin:"0 0.5rem",filter:"invert(0.6)"},width:"16",src:"https://simpleicons.org/icons/"+e.id+".svg"})))})))}},AQrF:function(e,t,n){"use strict";var a=n("2A+t"),r=n("7nDy"),o=n("+yNS");t.a=function(){var e=Object(o.a)().siteTitle;return Object(a.c)("footer",{sx:{boxSizing:"border-box",display:"flex",justifyContent:"space-between",mt:[6],color:"secondary",a:{variant:"links.secondary"},flexDirection:["column","row","row"],variant:"dividers.top"}},Object(a.c)("div",null,"© ",(new Date).getFullYear()," by ",e,". All rights reserved."),Object(a.c)("div",{sx:{display:"flex",mt:[20,0,0]}},Object(a.c)(r.a,null)))}},Cceb:function(e,t,n){"use strict";t.a=function(e){return e.replace(/\/\/+/g,"/")}},KtiE:function(e,t,n){"use strict";var a=n("Twun");t.a={"[data-name='live-editor']":{fontSize:1,"textarea, pre":{padding:function(e){return e.space[3]+" !important"}}},"[data-name='live-preview']":{padding:function(e){return"calc("+e.space[2]+" + 10px) !important"},backgroundColor:Object(a.a)("primary",.7)},".prism-code":{fontSize:1,padding:3,webkitOverflowScrolling:"touch",backgroundColor:"transparent",overflow:"initial",float:"left",minWidth:"100%",mb:0,'&[data-linenumber="false"]':{".token-line":{pl:3}}},".token":{display:"inline-block"},"p > code, li > code":{bg:"rgb(1, 22, 39)",color:"rgb(214, 222, 235)",px:2,py:1},".gatsby-highlight":{fontSize:1,position:"relative",webkitOverflowScrolling:"touch",bg:"rgb(1, 22, 39)",overflow:"auto",mx:[0,0,0,-3],".token-line":{mx:-3},"pre.language-":{mt:0},"pre.language-noLineNumbers":{mt:0},'pre[class*="language-"]:before':{bg:"white",borderRadius:"0 0 0.25rem 0.25rem",color:"black",fontSize:"12px",letterSpacing:"0.025rem",padding:"0.1rem 0.5rem",position:"absolute",left:"1rem",textAlign:"right",textTransform:"uppercase",top:0},'pre[class~="language-javascript"]:before':{content:'"js"',background:"#f7df1e",color:"black"},'pre[class~="language-js"]:before':{content:'"js"',background:"#f7df1e",color:"black"},'pre[class~="language-jsx"]:before':{content:'"jsx"',background:"#61dafb",color:"black"},'pre[class~="language-ts"]:before':{content:'"ts"',background:"#61dafb",color:"black"},'pre[class~="language-tsx"]:before':{content:'"tsx"',background:"#61dafb",color:"black"},'pre[class~="language-html"]:before':{content:'"html"',background:"#005a9c",color:"white"},'pre[class~="language-graphql"]:before':{content:'"GraphQL"',background:"#E10098"},'pre[class~="language-css"]:before':{content:'"css"',background:"#ff9800",color:"black"},'pre[class~="language-mdx"]:before':{content:'"mdx"',background:"#f9ac00",color:"black"},'pre[class~="language-text"]:before':{content:'"text"'},"pre[class~='language-shell']:before":{content:"'shell'"},"pre[class~='language-sh']:before":{content:"'sh'"},"pre[class~='language-bash']:before":{content:"'bash'"},"pre[class~='language-yaml']:before":{content:"'yaml'",background:"#ffa8df"},"pre[class~='language-markdown']:before":{content:"'md'"},"pre[class~='language-json']:before, pre[class~='language-json5']:before":{content:"'json'",background:"linen"},"pre[class~='language-diff']:before":{content:"'diff'",background:"#e6ffed"}},'.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]':{wordSpacing:"normal",wordBreak:"normal",overflowWrap:"normal",lineHeight:1.5,tabSize:4,hyphens:"none"},".line-number-style":{display:"inline-block",width:"3em",userSelect:"none",opacity:.3,textAlign:"center",position:"relative"},".code-title":{backgroundColor:Object(a.a)("primary",.7),color:"black",fontSize:0,px:3,py:2,fontFamily:"monospace",mx:[0,0,0,-3]},"[data-name='live-preview'], [data-name='live-editor']":{mx:[0,0,0,-3]},".token-line":{pr:3},".highlight-line":{backgroundColor:"rgb(2, 55, 81)",borderLeft:"4px solid rgb(2, 155, 206)",".line-number-style":{width:"calc(3em - 4px)",opacity:.5,left:"-2px"}}}},ZgeK:function(e,t,n){"use strict";var a=n("rePB"),r=n("zLVn"),o=n("2A+t");n("q1tI");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={border:0,clip:"react(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:0,overflow:"hidden",position:"absolute","&:focus":{padding:3,position:"fixed",top:"15px",left:"15px",backgroundColor:"heading",color:"background",zIndex:1,width:"auto",height:"auto",clip:"auto",textDecoration:"none"}};t.a=function(e){var t=e.children,n=Object(r.a)(e,["children"]);return Object(o.c)("a",Object.assign({},n,{sx:c({},l),href:"#skip-nav","data-skip-link":"true"}),t)}},"bz+c":function(e,t,n){"use strict";var a=n("rePB"),r=n("q1tI"),o=n.n(r),i=n("qKvR"),c=n("MXbp"),l=n("ZdEh"),s=n("izhR"),p=(n("c95Q"),n("5hlw")),g=n("1RYU"),b=n("AQrF"),u=n("KtiE"),m=n("ZgeK");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.children,n=e.className;return o.a.createElement(c.b.root,{"data-testid":"theme-root"},o.a.createElement(i.a,{styles:Object(l.a)({"*":{boxSizing:"inherit"},body:{margin:0,padding:0,boxSizing:"border-box",textRendering:"optimizeLegibility"},"::selection":{backgroundColor:"primary",color:"white"},a:{transition:"all 0.3s ease-in-out",color:"text"},li:{transition:"all 0.3s ease-in-out",color:"text"},p:{transition:"all 0.3s ease-in-out",color:"text"},h2:{transition:"all 0.3s ease-in-out",color:"text"},h3:{transition:"all 0.3s ease-in-out",color:"text"},h4:{transition:"all 0.3s ease-in-out",color:"text"}})}),o.a.createElement(p.a,null),o.a.createElement(m.a,null,"Skip to content"),o.a.createElement(s.b,null,o.a.createElement(g.a,null),o.a.createElement("main",{id:"skip-nav",css:Object(l.a)(f({},u.a)),className:n},t),o.a.createElement(b.a,null)))}},c95Q:function(e,t,n){}}]);
//# sourceMappingURL=7788bbd2fe73205284dc52d7d0802a3666663175-8bef2b1ac572ba4c66fa.js.map