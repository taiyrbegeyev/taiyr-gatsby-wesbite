(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+yNS":function(e,t,n){"use strict";var a=n("Wbzz");t.a=function(){return Object(a.useStaticQuery)("4197596454").site.siteMetadata}},"1RYU":function(e,t,n){"use strict";var a=n("PcS7"),r=n("2A+t"),o=n("MXbp"),c=n("Wbzz"),i=n("izhR"),l=n("+yNS"),s=n("wuJk"),g=function(e){var t=e.isDark,n=e.toggle;return Object(r.c)("button",{onClick:n,type:"button","aria-label":t?"Activate Light Mode":"Activate Dark Mode",title:t?"Activate Light Mode":"Activate Dark Mode",sx:{opacity:.65,position:"relative",borderRadius:"5px",width:"40px",height:"25px",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.3s ease",border:"none",outline:"none",background:"none",cursor:"pointer",padding:0,appearance:"none","&:hover, &:focus":{opacity:1}}},Object(r.c)("div",{sx:{position:"relative",width:"24px",height:"24px",borderRadius:"50%",border:function(e){return t?"4px solid "+e.colors.toggleIcon:"none"},backgroundColor:t?"toggleIcon":"transparent",transform:t?"scale(0.55)":"scale(1)",transition:"all 0.45s ease",overflow:t?"visible":"hidden",boxShadow:function(e){return t?"none":"inset 8px -8px 0px 0px "+e.colors.toggleIcon},"&:before":{content:'""',position:"absolute",right:"-9px",top:"-9px",height:"24px",width:"24px",border:function(e){return t?"2px solid "+e.colors.toggleIcon:"none"},borderRadius:"50%",transform:t?"translate(14px, -14px)":"translate(0, 0)",opacity:t?0:1,transition:"transform 0.45s ease"},"&:after":{content:'""',width:"8px",height:"8px",borderRadius:"50%",margin:"-4px 0 0 -4px",position:"absolute",top:"50%",left:"50%",boxShadow:function(e){return"0 -23px 0 "+e.colors.toggleIcon+", 0 23px 0 "+e.colors.toggleIcon+", 23px 0 0 "+e.colors.toggleIcon+", -23px 0 0 "+e.colors.toggleIcon+", 15px 15px 0 "+e.colors.toggleIcon+", -15px 15px 0 "+e.colors.toggleIcon+", 15px -15px 0 "+e.colors.toggleIcon+", -15px -15px 0 "+e.colors.toggleIcon},transform:t?"scale(1)":"scale(0)",transition:"all 0.35s ease"}}}))},p=n("q1tI"),b=n.n(p),u=n("Cceb"),d=function(e){var t=e.nav,n=Object(s.a)().basePath;return Object(r.c)(b.a.Fragment,null,t&&t.length>0&&Object(r.c)("nav",{sx:{"a:not(:last-of-type)":{mr:3},fontSize:[1,"18px"],".active":{color:"heading"}}},t.map((function(e){return Object(r.c)(o.b.a,{key:e.slug,as:c.Link,activeClassName:"active",to:Object(u.a)("/"+n+"/"+e.slug)},e.title)}))))};t.a=function(){var e=Object(l.a)().siteTitle,t=Object(s.a)(),n=t.navigation,p=t.externalLinks,b=t.basePath,m=Object(a.b)(),f=m[0],h=m[1],x="dark"===f;return Object(r.c)("header",{sx:{mb:[5,6]}},Object(r.c)(i.c,{sx:{alignItems:"center",justifyContent:"space-between"}},Object(r.c)(c.Link,{to:Object(u.a)("/"+b),"aria-label":e+" - Back to home",sx:{color:"heading",textDecoration:"none"}},Object(r.c)("h1",{sx:{my:0,fontWeight:"normal",fontSize:[3]}},"taiyr 👨🏽‍💻")),Object(r.c)(g,{isDark:x,toggle:function(e){e.preventDefault(),h(x?"light":"dark")}})),Object(r.c)("div",{sx:{boxSizing:"border-box",display:"flex",variant:"dividers.bottom",alignItems:"center",justifyContent:"space-between",mt:3,color:"secondary",a:{color:"secondary",":hover":{color:"heading"}},flexFlow:"wrap"}},Object(r.c)(d,{nav:n}),p&&p.length>0&&Object(r.c)("div",{sx:{"a:not(:first-of-type)":{ml:3},fontSize:[1,"18px"],display:["none","initial"]}},p.map((function(e){return Object(r.c)(o.b.a,{key:e.url,href:e.url,target:"_blank"},e.name)})))))}},"5hlw":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("qhky"),c=n("+yNS"),i=function(e){var t=e.title,n=e.description,a=e.pathname,i=e.image,l=e.children,s=Object(c.a)(),g=s.siteTitle,p=s.siteTitleAlt,b=s.siteUrl,u=s.siteDescription,d=s.siteLanguage,m=s.siteImage,f=s.author,h={title:t||p,description:n||u,url:""+b+(a||""),image:""+b+(i||m)};return r.a.createElement(o.a,{title:t,defaultTitle:p,titleTemplate:"%s | "+g},r.a.createElement("html",{lang:d}),r.a.createElement("meta",{name:"description",content:h.description}),r.a.createElement("meta",{name:"image",content:h.image}),r.a.createElement("meta",{property:"og:title",content:h.title}),r.a.createElement("meta",{property:"og:url",content:h.url}),r.a.createElement("meta",{property:"og:description",content:h.description}),r.a.createElement("meta",{property:"og:image",content:h.image}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:image:alt",content:h.description}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:title",content:h.title}),r.a.createElement("meta",{name:"twitter:url",content:h.url}),r.a.createElement("meta",{name:"twitter:description",content:h.description}),r.a.createElement("meta",{name:"twitter:image",content:h.image}),r.a.createElement("meta",{name:"twitter:image:alt",content:h.description}),r.a.createElement("meta",{name:"twitter:creator",content:f}),r.a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/apple-touch-icon.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),r.a.createElement("link",{rel:"manifest",href:"/site.webmanifest"}),r.a.createElement("meta",{name:"msapplication-TileColor",content:"#00a300"}),r.a.createElement("meta",{name:"theme-color",content:"#ffffff"}),l)};t.a=i,i.defaultProps={title:"",description:!1,pathname:!1,image:!1,children:null}},"7nDy":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("2A+t"),c=[{id:"github",href:"https://github.com/taiyrbegeyev"},{id:"linkedin",href:"https://www.linkedin.com/in/taiyrbegeyev"},{id:"instagram",href:"https://www.instagram.com/taiyrbegeyev"}];t.a=function(){return Object(o.c)(r.a.Fragment,null,c.map((function(e){return Object(o.c)("div",{key:e.id},Object(o.c)("a",{href:e.href,target:"_blank"},Object(o.c)("img",{sx:{margin:"0 0.5rem",filter:"invert(0.6)"},width:"16",src:"https://simpleicons.org/icons/"+e.id+".svg"})))})))}},AQrF:function(e,t,n){"use strict";var a=n("2A+t"),r=n("7nDy"),o=n("+yNS");t.a=function(){var e=Object(o.a)().siteTitle;return Object(a.c)("footer",{sx:{boxSizing:"border-box",display:"flex",justifyContent:"space-between",mt:[6],color:"secondary",a:{variant:"links.secondary"},flexDirection:["column","row","row"],variant:"dividers.top"}},Object(a.c)("div",null,"© ",(new Date).getFullYear()," by ",e,". All rights reserved."),Object(a.c)("div",{sx:{display:"flex",mt:[20,0,0]}},Object(a.c)(r.a,null)))}},Cceb:function(e,t,n){"use strict";t.a=function(e){return e.replace(/\/\/+/g,"/")}},HsYx:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("MXbp"),c=n("Wbzz"),i=n("wuJk"),l=n("Cceb");t.a=function(e){var t=e.tags,n=Object(i.a)(),a=n.tagsPath,s=n.basePath;return r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:e.slug},!!t&&", ",r.a.createElement(o.b.a,{as:c.Link,to:Object(l.a)("/"+s+"/"+a+"/"+e.slug)},e.name))})))}},KtiE:function(e,t,n){"use strict";var a=n("Twun"),r={"[data-name='live-editor']":{fontSize:1,"textarea, pre":{padding:function(e){return e.space[3]+" !important"}}},"[data-name='live-preview']":{padding:function(e){return"calc("+e.space[2]+" + 10px) !important"},backgroundColor:Object(a.a)("primary",.7)},".prism-code":{fontSize:[1,1,2],padding:"2rem 1rem 1rem 1rem",webkitOverflowScrolling:"touch",backgroundColor:"transparent",minWidth:"100%",mb:0,mt:0,overflow:"auto",'&[data-linenumber="false"]':{".token-line":{pl:3}}},".gatsby-highlight[data-language=''], .gatsby-highlight[data-language='noLineNumbers']":{".prism-code":{pt:"1rem"}},".token":{display:"inline-block"},"p > code, li > code":{bg:"gray.2",color:"gray.8",px:2,py:1,borderRadius:"2px"},".gatsby-highlight":{fontSize:[1,1,2],position:"relative",webkitOverflowScrolling:"touch",bg:"rgb(1, 22, 39)",borderRadius:"2px",mx:[0,0,0,-3],".token-line":{mx:-3,minWidth:"100%"},"pre code":{float:"left",minWidth:"100%"},'pre[class*="language-"]:before':{bg:"white",borderRadius:"0 0 0.25rem 0.25rem",color:"black",fontSize:"12px",letterSpacing:"0.025rem",padding:"0.1rem 0.5rem",position:"absolute",left:"1rem",textAlign:"right",textTransform:"uppercase",top:0},'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before':{content:'"js"',background:"#f7df1e",color:"black"},'pre[class~="language-jsx"]:before':{content:'"jsx"',background:"#61dafb",color:"black"},'pre[class~="language-ts"]:before':{content:'"ts"',background:"#61dafb",color:"black"},'pre[class~="language-tsx"]:before':{content:'"tsx"',background:"#61dafb",color:"black"},'pre[class~="language-html"]:before':{content:'"html"',background:"#005a9c",color:"white"},'pre[class~="language-xml"]:before':{content:'"xml"',background:"#005a9c",color:"white"},'pre[class~="language-svg"]:before':{content:'"svg"',background:"#005a9c",color:"white"},'pre[class~="language-graphql"]:before':{content:'"GraphQL"',background:"#E10098"},'pre[class~="language-css"]:before':{content:'"css"',background:"#ff9800",color:"black"},'pre[class~="language-mdx"]:before':{content:'"mdx"',background:"#f9ac00",color:"black"},'pre[class~="language-php"]:before':{content:'"php"',background:"#777bb3",color:"black"},'pre[class~="language-py"]:before, pre[class~="language-python"]:before':{content:'"py"',background:"#306998",color:"white"},'pre[class~="language-text"]:before':{content:'"text"'},"pre[class~='language-shell']:before":{content:"'shell'"},"pre[class~='language-sh']:before":{content:"'sh'"},"pre[class~='language-bash']:before":{content:"'bash'"},"pre[class~='language-yaml']:before":{content:"'yaml'",background:"#ffa8df"},"pre[class~='language-yml']:before":{content:"'yml'",background:"#ffa8df"},"pre[class~='language-markdown']:before":{content:"'md'"},"pre[class~='language-json']:before, pre[class~='language-json5']:before":{content:"'json'",background:"linen"},"pre[class~='language-diff']:before":{content:"'diff'",background:"#e6ffed"}},'.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]':{wordSpacing:"normal",wordBreak:"normal",overflowWrap:"normal",lineHeight:1.5,tabSize:4,hyphens:"none"},".gatsby-highlight pre::-webkit-scrollbar":{width:2,height:2},".gatsby-highlight pre::-webkit-scrollbar-thumb":{backgroundColor:"primary"},".gatsby-highlight pre::-webkit-scrollbar-track":{background:"rgb(1, 22, 39)"},".line-number-style":{display:"inline-block",width:"3em",userSelect:"none",opacity:.3,textAlign:"center",position:"relative"},".code-title":{backgroundColor:Object(a.a)("primary",.7),color:"black",fontSize:0,px:3,py:2,fontFamily:"monospace",mx:[0,0,0,-3]},"[data-name='live-preview'], [data-name='live-editor']":{mx:[0,0,0,-3],fontSize:[1,1,2]},".token-line":{pr:3},".highlight-line":{backgroundColor:"rgb(2, 55, 81)",borderLeft:"4px solid rgb(2, 155, 206)",".line-number-style":{width:"calc(3em - 4px)",opacity:.5,left:"-2px"}},".react-live-wrapper":{position:"relative"},".react-live-wrapper .code-copy-button":{right:[0,0,0,-3]}};t.a=r},W27q:function(e,t,n){"use strict";n.r(t);var a,r=n("q1tI"),o=n.n(r),c=n("rePB"),i=n("qKvR"),l=n("2A+t"),s=n("MXbp"),g=n("ZdEh"),p=n("izhR"),b=(n("c95Q"),n("Wbzz")),u=n("zLVn"),d=n("7ljp"),m=["components"],f=(a="Text",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(d.mdx)("div",e)}),h={_frontmatter:{}};function x(e){var t=e.components,n=Object(u.a)(e,m);return Object(d.mdx)("wrapper",Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)(f,{sx:{fontSize:[4,5,6],fontWeight:"bold",color:"heading"},mdxType:"Text"},"Hello, world!"),Object(d.mdx)("p",null,"Taiyr is over here. I am a 21-year-old Software Engineer and a code enthusiast. In other words, just a simple dude who wants to build cool stuff. I constantly try to run Dijkstra's algorithm on my path to become a better developer."))}x.isMDXComponent=!0;var y=n("6HCj"),j=n("sTtg"),O=n("wuJk"),v=n("Cceb"),w=n("5hlw"),k=n("1RYU"),z=n("AQrF"),E=n("KtiE"),S=n("ZgeK");function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(e){var t=e.posts,n=Object(O.a)(),a=n.basePath,r=n.blogPath;return Object(l.c)(s.b.root,{"data-testid":"theme-root"},Object(l.c)(i.a,{styles:Object(g.a)({"*":{boxSizing:"inherit"},body:{margin:0,padding:0,boxSizing:"border-box",textRendering:"optimizeLegibility"},"::selection":{backgroundColor:"primary",color:"white"},a:{transition:"all 0.3s ease-in-out",color:"text"}})}),Object(l.c)(w.a,null),Object(l.c)(S.a,null,"Skip to content"),Object(l.c)(p.b,{id:"home"},Object(l.c)(k.a,null),Object(l.c)("main",{id:"skip-nav",css:Object(g.a)(I({},E.a))},Object(l.c)("section",{sx:{mb:[5,6,7],p:{fontSize:[1,2,3],mt:2}}},Object(l.c)(x,null)),Object(l.c)(y.a,{text:"Latest Posts"},Object(l.c)(b.Link,{to:Object(v.a)("/"+a+"/"+r)},"Read all posts")),Object(l.c)(j.a,{posts:t,showTags:!1})),Object(l.c)(z.a,null)))};t.default=function(e){var t=Object.assign({},e),n=t.data.allPost;return o.a.createElement(D,Object.assign({posts:n.nodes},t))}},ZgeK:function(e,t,n){"use strict";var a=n("rePB"),r=n("zLVn"),o=n("2A+t"),c=(n("q1tI"),["children"]);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={border:0,clip:"react(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:0,overflow:"hidden",position:"absolute","&:focus":{padding:3,position:"fixed",top:"15px",left:"15px",backgroundColor:"heading",color:"background",zIndex:1,width:"auto",height:"auto",clip:"auto",textDecoration:"none"}};t.a=function(e){var t=e.children,n=Object(r.a)(e,c);return Object(o.c)("a",Object.assign({},n,{sx:l({},s),href:"#skip-nav","data-skip-link":"true"}),t)}},c95Q:function(e,t,n){},sTtg:function(e,t,n){"use strict";var a=n("2A+t"),r=n("q1tI"),o=n.n(r),c=n("MXbp"),i=n("izhR"),l=n("Wbzz"),s=n("HsYx"),g=function(e){var t=e.post,n=e.showTags,r=void 0===n||n;return Object(a.c)(i.a,{mb:4},Object(a.c)(c.b.a,{as:l.Link,to:t.slug,sx:{fontSize:[1,2,3],color:"text"}},t.title),Object(a.c)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},Object(a.c)("time",null,t.date),t.tags&&r&&Object(a.c)(o.a.Fragment,null," — ",Object(a.c)(s.a,{tags:t.tags}))))};t.a=function(e){var t=e.posts,n=e.className,r=e.showTags,o=void 0===r||r;return Object(a.c)("section",{sx:{mb:[5,6,7]},className:n},t.map((function(e){return Object(a.c)(g,{key:e.slug,post:e,showTags:o})})))}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-homepage-query-tsx-c62e4eacd9e08ce7061d.js.map