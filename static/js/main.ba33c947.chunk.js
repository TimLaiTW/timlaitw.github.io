(this["webpackJsonptimlaitw.github.io"]=this["webpackJsonptimlaitw.github.io"]||[]).push([[0],{21:function(e,t,a){e.exports=a(35)},26:function(e,t,a){},27:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(18),r=a.n(i),c=(a(26),a(27),a(4)),o=a(2);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=[{path:"/",label:"Tai-Lin Lai",index:!0},{path:"/resume",label:"Resume"},{path:"/projects",label:"Projects"},{path:"/album",label:"Album"},{path:"/contact",label:"Contact"}],m=function(){return l.a.createElement("header",{id:"header"},l.a.createElement("h3",{className:"index-links"},s.filter((function(e){return e.index})).map((function(e){return l.a.createElement(c.b,{key:e.label,to:e.path},e.label)}))),l.a.createElement("nav",{className:"links"},l.a.createElement("ul",null,s.filter((function(e){return!e.index})).map((function(e){return l.a.createElement("li",{key:e.label},l.a.createElement(c.b,{to:e.path},e.label))})))))},u=a(11),d=a(8),p=a(20),g=[{link:"https://github.com/timlaitw",label:"Github",icon:d.b},{link:"https://www.linkedin.com/in/tailin-lai/",label:"Linkedin",icon:d.d},{link:"https://www.facebook.com/tailin08/",label:"FaceBook",icon:d.a},{link:"https://www.instagram.com/tailinlai/",label:"Instagram",icon:d.c},{link:"mailto:timlai1208@gmail.com",label:"Email",icon:p.a}],E=function(){return l.a.createElement("footer",{id:"footer"},l.a.createElement("ul",{className:"icons"},g.map((function(e){return l.a.createElement("li",{key:e.label},l.a.createElement("a",{href:e.link},l.a.createElement(u.a,{icon:e.icon})))}))))},h=function(){return l.a.createElement("sidebar",{id:"sidebar"},l.a.createElement(c.b,{to:"/"},l.a.createElement("img",{className:"logo",src:"/profile.jpg",alt:"profile",width:"150",height:"150"})),l.a.createElement("div",{className:"sidebarTitle"},l.a.createElement("h2",null,"TAI-LIN LAI"),l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:timlai1208@gmail.com"},"TIMLAI1208@GMAIL.COM"))),l.a.createElement("div",{className:"bio"},l.a.createElement("h4",null,"About"),l.a.createElement("p",null,"Hi, I'm TaiLin Lai. I like to explore new things. I am a UMB CS graduate and FJU alumni. Before working at Mustard Seed Capital llc, I was at UMB, Compal and D-Link.")),l.a.createElement(E,null))},f=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,null),l.a.createElement(h,null),l.a.createElement("div",{id:"wrapper"},e.children))},b=function(e){var t=e.data;return l.a.createElement("div",null,l.a.createElement("img",{className:"photo",key:t.id,src:t.src,alt:t.title,width:"600",height:"400"}))},k=[{id:1,title:"Fuji Color 200",src:"/img/Fuji_Color_200/001.jpg"},{id:2,title:"Fuji Color 200",src:"/img/Fuji_Color_200/002.jpg"},{id:3,title:"Fuji Color 200",src:"/img/Fuji_Color_200/003.jpg"}],y=[{id:1,title:"Fuji Simple Ace 400",src:"/img/Fuji_SimpleAce_400/001.jpg"},{id:2,title:"Fuji Simple Ace 400",src:"/img/Fuji_SimpleAce_400/002.jpg"}],w=[{id:1,title:"Kodak Gold 200",src:"/img/Kodak_Gold_200/001.jpg"},{id:2,title:"Kodak Gold 200",src:"/img/Kodak_Gold_200/002.jpg"},{id:3,title:"Kodak Gold 200",src:"/img/Kodak_Gold_200/003.jpg"}],v=["Fuji Color","Fuji Simple Ace","Kodak Gold"],S=function(){return l.a.createElement(f,null,l.a.createElement("article",{className:"post",id:"album"},l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,"Photo Album"),l.a.createElement("div",{className:"link-container"},v.map((function(e){return l.a.createElement("h5",{key:e},l.a.createElement("a",{href:"#".concat(e)},e))})))),l.a.createElement("h5",{className:"subtitle",id:"Fuji Color"},"Fuji Color 200"),k.map((function(e){return l.a.createElement(b,{data:e})})),l.a.createElement("h5",{className:"subtitle",id:"Fuji Simple Ace"},"Fuji Simple Ace 200"),y.map((function(e){return l.a.createElement(b,{data:e})})),l.a.createElement("h5",{className:"subtitle",id:"Kodak Gold"},"Kodak Gold 200"),w.map((function(e){return l.a.createElement(b,{data:e})}))))},N=function(){return l.a.createElement(f,null,l.a.createElement("article",{className:"post",id:"contact"},l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,"CONTACT"),l.a.createElement("h5",null,l.a.createElement("a",{href:"mailto:timlai1208@gmail.com"},"Email me!"))),l.a.createElement("p",null,"Feel free to get in touch."),l.a.createElement("ul",{className:"icons"},g.map((function(e){return l.a.createElement("li",{key:e.label},l.a.createElement("a",{href:e.link},l.a.createElement(u.a,{icon:e.icon,size:"lg"})))})))))},j=function(e){e.location;return l.a.createElement(f,null,l.a.createElement("article",{className:"post",id:"home"},l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,"ABOUT THIS SITE"),l.a.createElement("h5",null,"A RESPONSIVE, REACT APP WRITTEN WITH JAVASCRIPT.")),l.a.createElement("p",null,"Welcome to my website built with React JS. Please feel free to read more ",l.a.createElement(c.b,{to:"/resume"},"my resume"),", or you can check out my ",l.a.createElement(c.b,{to:"/projects"},"projects"),", "," ",l.a.createElement(c.b,{to:"/album"},"photo album"),", or ",l.a.createElement(c.b,{to:"/contact"},"contact me"))))},C=function(){return l.a.createElement("div",{className:"not-found"},l.a.createElement("h1",null,"Page Not Found."),l.a.createElement("p",null,"Return to ",l.a.createElement(c.b,{to:"/"},"index"),"."))},A=function(e){var t=e.data;return l.a.createElement("article",{className:"project-container"},l.a.createElement("div",{className:"subtitle",id:"project-title"},l.a.createElement("h3",null,l.a.createElement("a",{href:t.link},t.title))),l.a.createElement("p",{className:"date"}," ",t.date),l.a.createElement("img",{src:t.image,alt:t.title}),l.a.createElement("div",{className:"description"},l.a.createElement("p",null,t.desc)))},T=[{title:"My Website",subtitle:"PersonalWebsite",link:"https://timlaitw.github.io",image:"/testing.jpg",date:"On-going",desc:"What you are looking at rn is what it is. Deploy a React JS App on Github user pages with multiple information pages about myself."},{title:"Stock Tracker",subtitle:"StockTrackingApplication",link:"https://github.com/TimLaiTW/Python-Crawler/tree/master/Stock_Price_Tracking",image:"/testing.jpg",date:"May. 2020",desc:"Used Python and its library BeautifulSoup to create an online stock crawlerenabling sending the notification email if the subscribed stock price goes down or upthan the setting price to the users."},{title:"Elderly Care Application",subtitle:"ElderlyCareApplication",link:"",image:"/testing.jpg",date:"Jun. 2019",desc:"Built a new healthcare application for seniors on WeChat mini program with JavaScript and HTML-liked language WXML tointegrated API with construction, UI design and performance improvement."},{title:"Pizza Ordering System",subtitle:"PizzaOrdering",link:"",image:"/testing.jpg",date:"Sep. 2018",desc:"Built a Pizza Ordering System with MVC architecture by utilizing MySQL database, php and JSON as back-end development.Implemented REST webservices with JavaScript, HTML and CSS with essential features as front-end layout"}],I=function(){return l.a.createElement(f,null,l.a.createElement("article",{className:"post",id:"project"},l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,"PROJECTS"),l.a.createElement("h5",null,"Just for fun (test image...)")),T.map((function(e){return l.a.createElement(A,{data:e,key:e.title})}))))},L=function(e){var t=e.data;return l.a.createElement("article",{className:"education-container"},l.a.createElement("h4",{className:"degree"},t.degree),l.a.createElement("p",{className:"school"},l.a.createElement("a",{href:t.link},t.school)),l.a.createElement("p",{className:"date"},t.year))},M=function(e){var t=e.data;return l.a.createElement("div",{className:"education"},l.a.createElement("div",{className:"subtitle",id:"education"},l.a.createElement("h3",null,"Education")),t.map((function(e){return l.a.createElement(L,{data:e,key:e.school})})))},P=function(e){var t=e.data;return l.a.createElement("article",{className:"experience-container"},l.a.createElement("h4",{className:"company"},t.position," | ",l.a.createElement("a",{href:t.link},t.company,", ",t.location)),l.a.createElement("p",{className:"date"},t.daterange),l.a.createElement("div",{className:"description"},t.points.map((function(e){return l.a.createElement("ul",null,l.a.createElement("li",{className:"description-item"},e))}))))},F=function(e){var t=e.data;return l.a.createElement("div",{className:"experience"},l.a.createElement("div",{className:"subtitle",id:"experience"},l.a.createElement("h3",null,"Experience")),t.map((function(e){return l.a.createElement(P,{data:e,key:e.company})})))},B=function(e){var t=e.data;return l.a.createElement("article",{className:"keyskills-container"},l.a.createElement("h4",{className:"skills"},t.title),l.a.createElement("p",{className:"skill-info"},t.competency))},J=function(e){var t=e.data;return l.a.createElement("div",{className:"keyskills"},l.a.createElement("div",{className:"subtitle",id:"skills"},l.a.createElement("h3",null,"Skills")),t.map((function(e){return l.a.createElement(B,{data:e,key:e.title})})))},_=[{school:"University of Massachusetts, Boston",degree:"M.S. Computer Science",link:"https://www.umb.edu",year:2019},{school:"Fu Jen Catholic University",degree:"B.E. Electrical Engineering",link:"https://www.fju.edu.tw",year:2015}],W=[{company:"Mustard Seed Capital LLC",location:"Boston, MA",position:"Website Engineer",link:"",daterange:"March 2020 - Present",points:["Designing and building website with features in JavaScript library React and Spring framework.","Completed development process for web app, including writing design docs, going through design reviews, and launching internally."]},{company:"University of Massachusetts Boston",location:"Boston, MA",position:"Software Engineer",link:"https://www.umb.edu",daterange:"June 2019 - November 2019",points:["Analyzed user behavior, preference and needs in New England area to improve user engagement with health care application.","Completed entire development process for app. Including writing design documents, implementation of front-end using JavaScript,HTML and CSS, going through design review, and launching internally."]},{company:"University of Massachusetts Boston",location:"Boston, MA",position:"C.S. Tutor",link:"https://www.umb.edu",daterange:"May 2019 - August 2019",points:["Broke down complex problems to individual learning levels.","Analyzed student comprehension and prepared goals."]},{company:"Compal Electronics, Inc",location:"Taipei, Taiwan",position:"B.I.O.S. Software Engineer",link:"https://www.compal.com",daterange:"October 2015 - April 2017",points:["Developed, tested and launched BIOS code in C and Assembly language, contributed to an overall 20+% reduction of the technical issues with collaborated with project managers, QA team and multiple function teams from internal and external.","Participated in multiple Dell XPS and Inspiron projects simultaneously in entire production process and managed software team to accelerate manufacturing process 15+%."]},{company:"D-Link",location:"Taipei, Taiwan",position:"Data analytics engineer",link:"https://us.dlink.com/en/consumer",daterange:"November 2014 - August 2015",points:["Forecasted sales of existing products within 3 and 5 years by utilized R in data sets analysis and developed algorithms to make data more readable and useful for future marketing strategies.","Building internal training program for networking (TCP/IP) technology and Internet routers/firewalls."]}],x=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:3,category:["Web Development","Javascript"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"MySQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Git",competency:3,category:["Tools"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:4,category:["Languages","Python"]},{title:"C",competency:2,category:["Languages"]},{title:"R",competency:2,category:["Languages"]}],R=["Education","Experience","Skills"],D=function(){return l.a.createElement(f,null,l.a.createElement("article",{className:"post",id:"resume"},l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,"RESUME"),l.a.createElement("div",{className:"link-container"},R.map((function(e){return l.a.createElement("h5",{key:e},l.a.createElement("a",{href:"#".concat(e.toLowerCase())},e))})))),l.a.createElement("div",{className:"resume-section"},l.a.createElement(M,{data:_}),l.a.createElement(F,{data:W}),l.a.createElement(J,{data:x}))))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(c.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",component:j}),l.a.createElement(o.a,{path:"/album",component:S}),l.a.createElement(o.a,{path:"/projects",component:I}),l.a.createElement(o.a,{path:"/contact",component:N}),l.a.createElement(o.a,{path:"/resume",component:D}),l.a.createElement(o.a,{component:C,status:404})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.ba33c947.chunk.js.map