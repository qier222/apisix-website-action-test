(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,d=p["".concat(o,".").concat(b)]||p[b]||h[b]||s;return n?r.a.createElement(d,i(i({ref:t},l),{},{components:n})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),s=(n(0),n(127)),o={title:"Stable Product Delivery with Cypress",author:"Yi Sun",authorURL:"https://github.com/LiteSun",authorImageURL:"https://avatars.githubusercontent.com/u/31329157?s=400&u=e81b4bb4db2be162c1fcac6d188f5b0f82f71920&v=4"},i={permalink:"/blog/2021/02/08/stable-product-delivery-with-cypress",source:"@site/blog/2021-02-08-stable-product-delivery-with-cypress.md",description:"@LiteSun, Apache APISIX Committer from Shenzhen Zhiliu Technology Co.",date:"2021-02-08T00:00:00.000Z",tags:[],title:"Stable Product Delivery with Cypress",readingTime:5.455,truncated:!1,nextItem:{title:"Run Ingress APISIX on Amazon EKS",permalink:"/blog/2021/01/21/run-ingress-apisix-on-amazon-eks"}},c=[{value:"Background",id:"background",children:[]},{value:"What is Front-End E2E?",id:"what-is-front-end-e2e",children:[]},{value:"Why Cypress",id:"why-cypress",children:[]},{value:"Cypress and APISIX Dashboard",id:"cypress-and-apisix-dashboard",children:[]},{value:"Summary",id:"summary",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("a",{parentName:"p",href:"https://github.com/LiteSun"},"@LiteSun"),", Apache APISIX Committer from ",Object(s.b)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co.")),Object(s.b)("p",{parentName:"blockquote"},"Source:"),Object(s.b)("ul",{parentName:"blockquote"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/apache/apisix"},"https://github.com/apache/apisix")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard"},"https://github.com/apache/apisix-dashboard")))),Object(s.b)("h2",{id:"background"},"Background"),Object(s.b)("p",null,"The Apache APISIX Dashboard is designed to make it as easy as possible for users to operate Apache APISIX through a front-end interface, and since the project's inception, there have been 552 commits and 10 releases. With such rapid product iteration, it is important to ensure the quality of the open-source product. For this reason, we have introduced an E2E testing module to ensure stable product delivery."),Object(s.b)("h2",{id:"what-is-front-end-e2e"},"What is Front-End E2E?"),Object(s.b)("p",null,'E2E, which stands for "End to End", can be translated as "end-to-end" testing. It mimics user behavior, starting with an entry point and executing actions step-by-step until a job is completed. Sound testing prevents code changes from breaking the original logic.'),Object(s.b)("h2",{id:"why-cypress"},"Why Cypress"),Object(s.b)("p",null,"We used Taiko, Puppeteer, TestCafe, and Cypress to write test cases for creating routes during the selection research period, and we used each testing framework to write cases to experience their respective features."),Object(s.b)("p",null,"Taiko is characterized by smart selector, which can intelligently locate the elements that you want to operate based on text content and location relations, and has a low start-up cost, so you can finish the test cases quickly. However, it is not user-friendly when writing test cases. When the user exits the terminal by mistake, all the written test cases are lost, and if you want to run a complete test case, you need to use it together with other test runners, which undoubtedly increases the learning cost for the user."),Object(s.b)("p",null,"Puppeteer has the best performance. However, testing is not the focus of Puppeteer. It is widely used for web crawlers. Our project started with Puppeteer, the official E2E testing framework recommended by ANTD, and after using it for a while we found that Puppeteer did not look so friendly to non-front-end developers and it was hard to get other users involved. When users write test cases, the lack of intelligent element positioning makes the learning curve very high."),Object(s.b)("p",null,"TestCafe is surprisingly easy to install, it has a built-in waiting mechanism so that users don't have to actively sleep waiting for page interactions, and it supports concurrent multi-browser testing, which is helpful for multi-browser compatibility testing. The disadvantage is that its debugging process is not so user-friendly, and you have to run a new use case after each test case change. For the developers, they need to have some basic Javascript syntax. Secondly, its running speed is relatively slow for several other frameworks, especially when executing withText () to find elements."),Object(s.b)("p",null,"After a comprehensive comparison, we finally chose Cypress as our front-end E2E framework, listing four main reasons:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Simple syntax")),Object(s.b)("p",null,"The syntax used in Cypress tests is very simple and easy to read and write. With a little practice, you can master creating test cases, which is important for open source projects because it allows the community interested in E2E test cases to participate in writing test cases with minimal learning cost."),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},"Easy debugging")),Object(s.b)("p",null,"When debugging test cases, we can use Cypress's Test Runner, which presents multi-dimensional data that allows us to quickly pinpoint the problem."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Showing the status of the test case execution, including the number of successes, failures, and runs in progress."),Object(s.b)("li",{parentName:"ul"},"Displaying the total time spent on the execution of the entire test set."),Object(s.b)("li",{parentName:"ul"},"A built-in Selector Playground to help locate elements."),Object(s.b)("li",{parentName:"ul"},"shows each step of execution for each use case and forms a snapshot that can show information about each execution step after it is completed.")),Object(s.b)("ol",{start:3},Object(s.b)("li",{parentName:"ol"},"Active community")),Object(s.b)("p",null,"Cypress has a large community of users, and there are always many people inside the community sharing their experiences and ideas."),Object(s.b)("p",null,"This is helpful when encountering problems, and you are likely to encounter problems that others have encountered before. Also, when new features are requested, we can participate in the community by discussing and adding features to Cypress that we want to add, just like we do in the APISIX community: listening to the community and feeding it back."),Object(s.b)("ol",{start:4},Object(s.b)("li",{parentName:"ol"},"Clear documentation")),Object(s.b)("p",null,"Cypress's documentation structure is clearer and more comprehensive. In the early stages of use, we were able to quickly introduce Cypress into our project and write our first case based on the official documentation guidelines. In addition, there is a large amount of documentation available on the documentation site that gives users good guidance on what is best practice."),Object(s.b)("h2",{id:"cypress-and-apisix-dashboard"},"Cypress and APISIX Dashboard"),Object(s.b)("p",null,"There are currently 49 test cases written for the APISIX Dashboard. We configured the corresponding CI in GitHub Action to ensure that the code passes before each merge to ensure code quality. We share the use of Cypress in APISIX Dashboard with you by referring to Cypress best practices and combining them with our project."),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://static.apiseven.com/202102/apisix-dashboard-e2e.gif",alt:"image"})),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://static.apiseven.com/202102/image.png",alt:"image"})),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Commonly used functions are encapsulated into commands.")),Object(s.b)("p",null,"Take login as an example, login is an essential part of entering the system, so we encapsulate it as a command, so that the login command can be called before each case run."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javaScript"},'Cypress.Commands.add("login", () => {\n  cy.request(\n    "POST",\n    \'http://127.0.0.1/apisix/admin/user/login\',\n    {\n      username: "user",\n      password: "user",\n    }\n  ).then((res) => {\n    expect(res.body.code).to.equal(0);\n    localStorage.setItem("token", res.body.data.token);\n  });\n});\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javaScript"},"beforeEach(() => {\n   // init login\n   cy.login();\n})\n")),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},"Extract the selector and data as public variables.")),Object(s.b)("p",null,"To make it more intuitive for the user to understand the meaning of the test code, we extract selcector and data as public variables."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javaScript"},"\xa0 const data = {\n\xa0 \xa0 name: 'hmac-auth',\n\xa0 \xa0 deleteSuccess: 'Delete Plugin Successfully',\n\xa0 };\n\xa0 const domSelector = {\n\xa0 \xa0 tableCell: '.ant-table-cell',\n\xa0 \xa0 empty: '.ant-empty-normal',\n\xa0 \xa0 refresh: '.anticon-reload',\n\xa0 \xa0 codemirror: '.CodeMirror',\n\xa0 \xa0 switch: '#disable',\n\xa0 \xa0 deleteBtn: '.ant-btn-dangerous',\n\xa0 };\n")),Object(s.b)("ol",{start:3},Object(s.b)("li",{parentName:"ol"},"Remove cy.wait(someTime)")),Object(s.b)("p",null,"We used cy.wait(someTime) in the early days of Cypress, but found that cy.wait(someTime) relies too much on the network environment and the performance of the test machine, which can cause test cases to report errors when the network environment or machine performance is poor. The recommended practice is to use it in conjunction with cy.intercpet() to explicitly specify the network resources to wait for."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},'cy.intercept("https://apisix.apache.org/").as("fetchURL");\ncy.wait("@fetchURL");\n')),Object(s.b)("h2",{id:"summary"},"Summary"),Object(s.b)("p",null,"At present, APISIX Dashboard has written 49 test cases. In the future, we will continue to enhance the front-end E2E coverage, and require the community to agree to write test cases for each new feature or bugfix submission to ensure the stability of the product."),Object(s.b)("p",null,"Welcome to join us to polish the world-class gateway product."),Object(s.b)("p",null,"Project address: ",Object(s.b)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"https://github.com/apache/apisix-dashboard")))}u.isMDXComponent=!0}}]);