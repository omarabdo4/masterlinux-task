(function(e){function t(t){for(var r,c,u=t[0],s=t[1],i=t[2],f=0,d=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6ed9aadd"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var i=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var f=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1863:function(e,t,n){},4190:function(e,t){e.exports=function(){return{name:"",questions:[],answers:[],score:0}}},"4d8e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("ab8b");var r=n("7a23"),a={id:"nav"},o=Object(r["g"])("Home"),c=Object(r["g"])(" | "),u=Object(r["g"])("About"),s=Object(r["g"])(" | "),i=Object(r["g"])("Exam");function f(e,t){var n=Object(r["x"])("router-link"),f=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])(r["a"],null,[Object(r["h"])("div",a,[Object(r["h"])(n,{to:"/"},{default:Object(r["E"])((function(){return[o]})),_:1}),c,Object(r["h"])(n,{to:"/about"},{default:Object(r["E"])((function(){return[u]})),_:1}),s,Object(r["h"])(n,{to:{name:"exam"}},{default:Object(r["E"])((function(){return[i]})),_:1})]),Object(r["h"])(f,{key:e.$route.fullPath})],64)}n("7088");const l={};l.render=f;var d=l,v=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),p=n("cf05"),b=n.n(p),h={class:"home"},g=Object(r["h"])("img",{alt:"Vue logo",src:b.a},null,-1);function m(e,t,n,a,o,c){var u=Object(r["x"])("HelloWorld");return Object(r["q"])(),Object(r["d"])("div",h,[g,Object(r["h"])(u,{msg:"Welcome to Your Vue.js App"})])}var j=Object(r["G"])("data-v-5cc7f8f0");Object(r["t"])("data-v-5cc7f8f0");var O={class:"hello"},w=Object(r["f"])('<p data-v-5cc7f8f0> For a guide and recipes on how to configure / customize this project,<br data-v-5cc7f8f0> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>vue-cli documentation</a>. </p><h3 data-v-5cc7f8f0>Installed CLI Plugins</h3><ul data-v-5cc7f8f0><li data-v-5cc7f8f0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-5cc7f8f0>babel</a></li><li data-v-5cc7f8f0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-5cc7f8f0>router</a></li><li data-v-5cc7f8f0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-5cc7f8f0>vuex</a></li><li data-v-5cc7f8f0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-5cc7f8f0>eslint</a></li></ul><h3 data-v-5cc7f8f0>Essential Links</h3><ul data-v-5cc7f8f0><li data-v-5cc7f8f0><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>Core Docs</a></li><li data-v-5cc7f8f0><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>Forum</a></li><li data-v-5cc7f8f0><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>Community Chat</a></li><li data-v-5cc7f8f0><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-5cc7f8f0>Twitter</a></li><li data-v-5cc7f8f0><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>News</a></li></ul><h3 data-v-5cc7f8f0>Ecosystem</h3><ul data-v-5cc7f8f0><li data-v-5cc7f8f0><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>vue-router</a></li><li data-v-5cc7f8f0><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>vuex</a></li><li data-v-5cc7f8f0><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-5cc7f8f0>vue-devtools</a></li><li data-v-5cc7f8f0><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>vue-loader</a></li><li data-v-5cc7f8f0><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-5cc7f8f0>awesome-vue</a></li></ul>',7);Object(r["r"])();var k=j((function(e,t,n,a,o,c){return Object(r["q"])(),Object(r["d"])("div",O,[Object(r["h"])("h1",null,Object(r["z"])(n.msg),1),w])})),y={name:"HelloWorld",props:{msg:String}};n("7a76");y.render=k,y.__scopeId="data-v-5cc7f8f0";var _=y,x={name:"Home",components:{HelloWorld:_}};x.render=m;var q=x,P=[{path:"/",name:"Home",component:q},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/exam",name:"exam",component:function(){return n.e("about").then(n.bind(null,"13b2"))}},{path:"/questions/:qindex",name:"question",component:function(){return n.e("about").then(n.bind(null,"e254"))}},{path:"/score",name:"score",component:function(){return n.e("about").then(n.bind(null,"15e3"))}}],A=Object(v["a"])({history:Object(v["b"])("/"),routes:P}),S=A,E=n("5502"),H=n("5530"),C=n("4190"),L=Object(H["a"])({},C()),M=(n("b0c0"),{getName:function(e){return e.name},getQuestionByIndex:function(e){return function(t){return e.questions[t]}},getQuestions:function(e){return e.questions},getScore:function(e){return e.score},getAnswers:function(e){return e.answers}}),Q=n("bc3a"),T=n.n(Q),W=T.a.create({baseURL:"/v1/"}),I=function(e){return Promise.reject(Object(H["a"])({},e))},N=function(e){return e};W.interceptors.response.use((function(e){return N(e)}),(function(e){return I(e)}));var R={get:function(){return W.get("/questions")},sendAnswers:function(e){return W.post("/questions/answers",e)}},z={getQuestions:function(e){var t=e.commit;return new Promise((function(e,n){R.get().then((function(n){t("setQuestions",n.data),e(n)})).catch((function(e){n(e)}))}))},sendAnswers:function(e){var t=e.commit,n=e.getters;return new Promise((function(e,r){R.sendAnswers({answers:n.getAnswers}).then((function(n){t("setScore",n.data.score),e(n)})).catch((function(e){r(e)}))}))}},F=n("4190"),J={setQuestions:function(e,t){e.questions=t},setName:function(e,t){e.name=t},setScore:function(e,t){e.score=t},addAnswer:function(e,t){e.answers||(e.answers=[]),e.answers.push(t)},resetModuleState:function(e){Object.assign(e,F())}},V={namespaced:!0,state:L,getters:M,actions:z,mutations:J},X=Object(E["a"])({state:{},mutations:{},actions:{},modules:{question:V}});n("7b17"),window.axios=n("bc3a"),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",Object(r["c"])(d).use(X).use(S).mount("#app")},7088:function(e,t,n){"use strict";n("1863")},"7a76":function(e,t,n){"use strict";n("4d8e")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.251e305b.js.map