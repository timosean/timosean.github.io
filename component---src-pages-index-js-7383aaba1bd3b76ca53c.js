(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{35:function(t,e,n){var o=9007199254740991,r="[object Arguments]",i="[object Map]",a="[object Promise]",l="[object Set]",c="[object WeakMap]",s="[object DataView]",u=/^\[object .+?Constructor\]$/,p=/^(?:0|[1-9]\d*)$/,f="\\u0300-\\u036f\\ufe20-\\ufe23",d="[\\ud800-\\udfff]",m="["+f+"\\u20d0-\\u20f0]",h="\\ud83c[\\udffb-\\udfff]",y="[^\\ud800-\\udfff]",g="(?:\\ud83c[\\udde6-\\uddff]){2}",x="[\\ud800-\\udbff][\\udc00-\\udfff]",b="(?:"+m+"|"+h+")"+"?",v="[\\ufe0e\\ufe0f]?",E=v+b+("(?:\\u200d(?:"+[y,g,x].join("|")+")"+v+b+")*"),w="(?:"+[y+m+"?",m,g,x,d].join("|")+")",S=RegExp(h+"(?="+h+")|"+w+E,"g"),j=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),k="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,_="object"==typeof self&&self&&self.Object===Object&&self,A=k||_||Function("return this")();function O(t,e){return function(t,e){for(var n=-1,o=t?t.length:0,r=Array(o);++n<o;)r[n]=e(t[n],n,t);return r}(e,(function(e){return t[e]}))}function z(t){var e=-1,n=Array(t.size);return t.forEach((function(t,o){n[++e]=[o,t]})),n}function I(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function D(t){return function(t){return j.test(t)}(t)?function(t){return t.match(S)||[]}(t):function(t){return t.split("")}(t)}var P,B,F,M=Function.prototype,C=Object.prototype,G=A["__core-js_shared__"],R=(P=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"",T=M.toString,N=C.hasOwnProperty,$=C.toString,L=RegExp("^"+T.call(N).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),W=A.Symbol,H=W?W.iterator:void 0,U=C.propertyIsEnumerable,V=(B=Object.keys,F=Object,function(t){return B(F(t))}),Z=at(A,"DataView"),q=at(A,"Map"),J=at(A,"Promise"),K=at(A,"Set"),Q=at(A,"WeakMap"),X=st(Z),Y=st(q),tt=st(J),et=st(K),nt=st(Q);function ot(t,e){var n=ut(t)||function(t){return function(t){return mt(t)&&pt(t)}(t)&&N.call(t,"callee")&&(!U.call(t,"callee")||$.call(t)==r)}(t)?function(t,e){for(var n=-1,o=Array(t);++n<t;)o[n]=e(n);return o}(t.length,String):[],o=n.length,i=!!o;for(var a in t)!e&&!N.call(t,a)||i&&("length"==a||ct(a,o))||n.push(a);return n}function rt(t){if(!dt(t)||function(t){return!!R&&R in t}(t))return!1;var e=ft(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}(t)?L:u;return e.test(st(t))}function it(t){if(n=(e=t)&&e.constructor,o="function"==typeof n&&n.prototype||C,e!==o)return V(t);var e,n,o,r=[];for(var i in Object(t))N.call(t,i)&&"constructor"!=i&&r.push(i);return r}function at(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return rt(n)?n:void 0}var lt=function(t){return $.call(t)};function ct(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||p.test(t))&&t>-1&&t%1==0&&t<e}function st(t){if(null!=t){try{return T.call(t)}catch(e){}try{return t+""}catch(e){}}return""}(Z&&lt(new Z(new ArrayBuffer(1)))!=s||q&&lt(new q)!=i||J&&lt(J.resolve())!=a||K&&lt(new K)!=l||Q&&lt(new Q)!=c)&&(lt=function(t){var e=$.call(t),n="[object Object]"==e?t.constructor:void 0,o=n?st(n):void 0;if(o)switch(o){case X:return s;case Y:return i;case tt:return a;case et:return l;case nt:return c}return e});var ut=Array.isArray;function pt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!ft(t)}function ft(t){var e=dt(t)?$.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}function dt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function mt(t){return!!t&&"object"==typeof t}function ht(t){return t?O(t,function(t){return pt(t)?ot(t):it(t)}(t)):[]}t.exports=function(t){if(!t)return[];if(pt(t))return function(t){return"string"==typeof t||!ut(t)&&mt(t)&&"[object String]"==$.call(t)}(t)?D(t):function(t,e){var n=-1,o=t.length;for(e||(e=Array(o));++n<o;)e[n]=t[n];return e}(t);if(H&&t[H])return function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}(t[H]());var e=lt(t);return(e==i?z:e==l?I:ht)(t)}},8746:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();var i=n(7294),a=n(35),l=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e,n){for(var o=!0;o;){var r=t,i=e,a=n;o=!1,null===r&&(r=Function.prototype);var l=Object.getOwnPropertyDescriptor(r,i);if(void 0!==l){if("value"in l)return l.value;var c=l.get;if(void 0===c)return;return c.call(a)}var s=Object.getPrototypeOf(r);if(null===s)return;t=s,e=i,n=a,o=!0,l=s=void 0}}(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t);var n=this.props,o=n.items,r=n.random;this.state={index:r?Math.floor(Math.random()*Math.floor(o.length)):0,output:"",substrLength:0},this.timeouts=[]}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"componentDidMount",value:function(){this._animate.bind(this)()}},{key:"componentWillUnmount",value:function(){this.timeouts.map((function(t){return clearTimeout(t)}))}},{key:"_loop",value:function(t,e){var n=setTimeout(t,e);this.timeouts.push(n);this.timeouts.length>100&&(clearTimeout(this.timeouts[0]),this.timeouts.shift())}},{key:"_type",value:function(t,e){var n=this.state.output,o=this.props.typingInterval,r=this._type.bind(this,t,e),i=a(t);this.setState({output:i.slice(0,a(n).length+1).join("")}),n.length<i.length?this._loop(r,o):("function"==typeof this.props.onTypingEnd&&this.props.onTypingEnd(),e())}},{key:"_erase",value:function(t){var e=this.state.output,n=this.props.deletingInterval,o=this._erase.bind(this,t),r=a(e);"function"==typeof this.props.onDeletingStart&&this.props.onDeletingStart(),this.setState({output:r.slice(0,r.length-1).join("")}),0!==r.length?this._loop(o,n):("function"==typeof this.props.onDeletingEnd&&this.props.onDeletingEnd(),t())}},{key:"_overwrite",value:function(t,e){var n=this.state,o=n.output,r=n.substrLength,i=this.props.deletingInterval,l=this._overwrite.bind(this,t,e),c=a(t),s=a(o);this.setState({output:c.slice(0,r).concat(s.slice(r)),substrLength:r+1}),c.length!==r?this._loop(l,i):(this.setState({output:t,substrLength:0}),e())}},{key:"_animate",value:function(){var t=this,e=this.state.index,n=this.props,o=n.items,r=n.pause,i=n.emptyPause,a=n.eraseMode,l=n.random,c=this._type,s=this._erase,u=this._overwrite,p=this._animate.bind(this),f=void 0;f=l?Math.floor(Math.random()*Math.floor(o.length)):e===o.length-1?0:e+1;var d=function(){t.setState({index:f}),t._loop(p,i)};"function"==typeof this.props.onTypingStart&&this.props.onTypingStart(),c.bind(this)(o[e],(function(){"overwrite"===a?t._loop(u.bind(t,o[f],d),r):t._loop(s.bind(t,d),r)}))}},{key:"render",value:function(){var t=this.props,e=t.color,n=t.cursor,r=(t.deletingInterval,t.emptyPause,t.items,t.pause,t.eraseMode,t.typingInterval,t.random,function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(t,["color","cursor","deletingInterval","emptyPause","items","pause","eraseMode","typingInterval","random"]));return i.createElement("span",o({style:{color:e}},r),this.state.output,n?i.createElement("span",{className:"react-rotating-text-cursor"},"|"):null)}}]),e}(i.Component);l.defaultProps={color:"inherit",cursor:!0,deletingInterval:50,emptyPause:1e3,eraseMode:"erase",items:["first","second","third","fourth","fifth"],pause:1500,typingInterval:50,random:!1},e.default=l,t.exports=e.default},7921:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return O}});var o=n(7294),r=n(8746),i=n.n(r),a=n(9),l=n(967),c=n(3751),s=n.p+"static/smile-41cda1d28e8061635fba1d009c644004.jpg",u=n.p+"static/contentback-eedaf772e45e95ff8f1aca83bb035d94.jpg",p=n(5444),f=n(2868),d=n(206),m=n(8235),h=n(7070),y=n(9190),g=n(3730),x=a.default.div.withConfig({displayName:"pages__HomeDiv",componentId:"sc-6kvjaa-0"})(["display:flex;align-items:center;width:100%;min-height:100vh;background-image:url(",");background-size:cover;background-position:50% 50%;"],s),b=a.default.div.withConfig({displayName:"pages__WelcomeDiv",componentId:"sc-6kvjaa-1"})(["display:flex;flex-direction:column;width:100%;min-width:1000px;height:520px;padding-left:9vw;justify-content:center;"]),v=((0,a.keyframes)(["0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}"]),(0,a.default)(i()).withConfig({displayName:"pages__StyledRotatingText",componentId:"sc-6kvjaa-2"})(['display:block;font-size:80px;font-family:"Apple SD Gothic Bold";text-shadow:5px 5px 0px rgba(0,0,0,0.2);min-width:490px;margin-bottom:0.5rem;height:90px;line-height:90px;.react-rotating-text-cursor{animation:blinking-cursor 0.8s cubic-bezier(0.68,0.01,0.01,0.99) 0s infinite;}@keyframes blinking-cursor{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}'])),E=a.default.div.withConfig({displayName:"pages__PostButton",componentId:"sc-6kvjaa-3"})(['display:flex;align-items:center;justify-content:center;width:150px;height:40px;background-image:linear-gradient(to right,black 50%,white 50%);background-size:200% 100%;transition:background-position 0.1s;color:white;font-size:20px;&:hover{background-position:-100% 0;box-shadow:0 4px 4px rgba(0,0,0,0.16);transition:background-position 0.1s;.postlink{color:black;transition:color 0.1s;font-family:"Apple SD Gothic Bold";}}']),w=(0,a.default)(p.Link).withConfig({displayName:"pages__PostLink",componentId:"sc-6kvjaa-4"})(['color:white;text-decoration:none;font-family:"Apple SD Gothic";&:visited{color:white;}']),S={fontSize:"50px",fontWeight:"bold",color:"black",height:"80px",lineHeight:"80px",marginBottom:"0.5rem",fontFamily:"Apple SD Gothic",textShadow:"1px 1px 0px rgba(0, 0, 0, 0.2)"},j=a.default.div.withConfig({displayName:"pages__AboutPage",componentId:"sc-6kvjaa-5"})(["width:100%;min-height:1000px;overflow:auto;background-image:url(",");background-size:cover;background-position:50% 50%;display:flex;flex-direction:column;justify-content:center;"],u),k=a.default.div.withConfig({displayName:"pages__IntroDiv",componentId:"sc-6kvjaa-6"})(["display:flex;align-items:center;width:1200px;height:300px;margin:0 auto;display:flex;"]),_=a.default.div.withConfig({displayName:"pages__IntroItem",componentId:"sc-6kvjaa-7"})(["width:350px;margin-left:25px;margin-right:25px;height:250px;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:50px;"]),A={display:"flex",alignItems:"center",justifyContent:"center",width:"100px",height:"100px",background:"#094DC7",borderRadius:"50%",marginBottom:"25px",boxShadow:"rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"},O=function(){return o.createElement(l.Z,null,o.createElement(c.Z,{title:"Home"}),o.createElement(x,null,o.createElement(b,null,o.createElement("p",{style:S},"프론트엔드 개발자"," ",o.createElement("span",{style:{backgroundColor:"rgba(0, 0, 0, 0.5)",color:"white",fontFamily:"Apple SD Gothic"}},"이승우"),"의"),o.createElement(v,{items:["열정을 담은","앞날이 기대되는","발전하는 모습을 담은"],color:"white"}),o.createElement("p",{style:S},"이야기들을 확인해보세요."),o.createElement(E,null,o.createElement(w,{to:"/postIndexPage/",className:"postlink"},"포스트 보러가기")))),o.createElement(j,{id:"aboutpage"},o.createElement("h1",{style:{textAlign:"center",fontFamily:"Roboto",marginBottom:"50px"}},"About Me"),o.createElement(k,null,o.createElement(_,{"data-sal":"slide-up","data-sal-duration":"1000","data-sal-delay":"100"},o.createElement("div",{id:"school",style:A},o.createElement(f.eAf,{style:{fontSize:"60px",color:"white"}})),o.createElement("div",{style:{fontSize:"25px",fontFamily:"Apple SD Gothic Extra Bold",marginBottom:"10px"}},"학력"),o.createElement("div",{style:{fontSize:"18px",fontFamily:"Apple SD Gothic",color:"#494A4A"}},"고려대학교 컴퓨터학과 재학")),o.createElement(_,{"data-sal":"slide-up","data-sal-duration":"1000","data-sal-delay":"100"},o.createElement("div",{id:"contact",style:A},o.createElement(d.tzA,{style:{fontSize:"60px",color:"white"}})),o.createElement("div",{style:{fontSize:"25px",fontFamily:"Apple SD Gothic Extra Bold",marginBottom:"10px"}},"연락처"),o.createElement("div",{style:{fontSize:"18px",fontFamily:"Roboto",color:"#494A4A"}},"timosean@naver.com")),o.createElement(_,{"data-sal":"slide-up","data-sal-duration":"1000","data-sal-delay":"100"},o.createElement("div",{id:"github",style:A},o.createElement(m.rFR,{style:{fontSize:"60px",color:"white"}})),o.createElement("div",{style:{fontSize:"25px",fontFamily:"Roboto Bold",marginBottom:"10px"}},"Github"),o.createElement("div",{style:{fontSize:"18px",fontFamily:"Roboto",color:"#494A4A"}},o.createElement("a",{href:"https://github.com/timosean",target:"_blank",title:"Github으로 이동하기",style:{textDecoration:"none",color:"#494A4A"}},"https://github.com/timosean")))),o.createElement(k,null,o.createElement(_,{"data-sal":"slide-up","data-sal-duration":"1000","data-sal-delay":"200"},o.createElement("div",{id:"dream",style:A},o.createElement(h.EbF,{style:{fontSize:"60px",color:"white"}})),o.createElement("div",{style:{fontSize:"25px",fontFamily:"Apple SD Gothic Extra Bold",marginBottom:"10px"}},"추구하는 자세"),o.createElement("div",{style:{fontSize:"18px",fontFamily:"Roboto",color:"#494A4A"}},o.createElement("ul",{style:{listStyle:"none",textAlign:"center",margin:"0"}},o.createElement("li",{style:{marginBottom:"5px"}},"개발 과정 자체를 즐기는 개발자"),o.createElement("li",null,"끊임없이 공부하고 발전하는 개발자")))),o.createElement(_,{"data-sal":"slide-up","data-sal-duration":"1000","data-sal-delay":"200"},o.createElement("div",{id:"dream",style:A},o.createElement(y.o$9,{style:{fontSize:"60px",color:"white"}})),o.createElement("div",{style:{fontSize:"25px",fontFamily:"Apple SD Gothic Extra Bold",marginBottom:"10px"}},"원동력"),o.createElement("div",{style:{fontSize:"18px",fontFamily:"Roboto",color:"#494A4A"}},o.createElement("ul",{style:{listStyle:"none",textAlign:"center",margin:"0"}},o.createElement("li",{style:{marginBottom:"5px"}},"웹 개발 자체에 대한 끝없는 호기심"),o.createElement("li",null,"무엇인가 공들여 완성했을 때의 쾌감과 성취감")))),o.createElement(_,{"data-sal":"slide-up","data-sal-duration":"1000","data-sal-delay":"200"},o.createElement("div",{id:"dream",style:A},o.createElement(g.qtS,{style:{fontSize:"60px",color:"white"}})),o.createElement("div",{style:{fontSize:"25px",fontFamily:"Apple SD Gothic Extra Bold",marginBottom:"10px"}},"방향성"),o.createElement("div",{style:{fontSize:"18px",fontFamily:"Roboto",color:"#494A4A"}},o.createElement("ul",{style:{listStyle:"none",textAlign:"center",margin:"0"}},o.createElement("li",{style:{marginBottom:"5px"}},"최대한 간단명료하게, 기능은 풍부하게"),o.createElement("li",null,"사용자 경험을 극대화하는 UI 연구에 집중")))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-7383aaba1bd3b76ca53c.js.map