(this["webpackJsonpnew-portfolio"]=this["webpackJsonpnew-portfolio"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(6),r=a.n(i),c=(a(12),a(1)),l=a(2),m=a(4),s=a(3),u=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"header"},o.a.createElement("nav",{class:"gnav"},o.a.createElement("ul",{class:"gnav-list"},o.a.createElement("li",{class:"gnav-item"},o.a.createElement("a",{href:"#about-section"},"ABOUT")),o.a.createElement("li",{class:"gnav-item"},o.a.createElement("a",{href:"#gemes-section"},"GAMES")),o.a.createElement("li",{class:"gnav-item"},o.a.createElement("a",{href:"#contact-section"},"CONTACT")))))}}]),a}(o.a.Component),h=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={isModalOpen:!1},n}return Object(l.a)(a,[{key:"handleClickItem",value:function(){this.setState({isModalOpen:!0})}},{key:"handleClickClose",value:function(){this.setState({isModalOpen:!1})}},{key:"render",value:function(){var e,t=this;return this.state.isModalOpen&&(e=o.a.createElement("div",{className:"modal"},o.a.createElement("div",{className:"modal-inner"},o.a.createElement("div",{className:"modal-header"}),o.a.createElement("div",{className:"modal-introduction"},o.a.createElement("h2",null,this.props.name),o.a.createElement("p",null,this.props.introduction),o.a.createElement("a",{href:this.props.id,className:"modal-start-btn",id:"start"},"START\uff01")),o.a.createElement("button",{className:"modal-close-btn",onClick:function(){return t.handleClickClose()}},"\xd7")))),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"item",onClick:function(){t.handleClickItem()}},o.a.createElement("p",null,this.props.name),o.a.createElement("img",{src:this.props.image})),e)}}]),a}(o.a.Component),p=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"main-wrapper"},o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"copy-container"},o.a.createElement("h1",null,"Welcome"),o.a.createElement("h3",{id:"about-section"},"ABOUT"),o.a.createElement("img",{src:"https://github.com/book22/Portfolio/blob/gh-pages/image/image.jpeg?raw=true",alt:"\u5199\u771f"}),o.a.createElement("p",null,"\u306f\u3058\u3081\u307e\u3057\u3066\u3002\u672c\u689d\u7950\u4e00\u6717\u3068\u7533\u3057\u307e\u3059\u3002",o.a.createElement("br",null),"\u5e73\u621012\u5e74\u751f\u307e\u308c\u306e20\u6b73\u3001\u5927\u5b663\u5e74\u751f\u3067\u3059\u3002",o.a.createElement("br",null),"\u30a8\u30f3\u30b8\u30cb\u30a2\u306e\u7d4c\u9a13\u3068\u3057\u3066\u306f\u9577\u671f\u30a4\u30f3\u30bf\u30fc\u30f3\u3067web\u5236\u4f5c\u306b\u643a\u308f\u308a\u307e\u3057\u305f\u3002",o.a.createElement("br",null),"\u73fe\u5728\u306f\u4e3b\u306bJavaScript\u306e\u7406\u89e3\u3092\u6df1\u3081\u308c\u308b\u3088\u3046\u306b\u3001\u6311\u6226\u3057\u3066\u3044\u307e\u3059\u3002",o.a.createElement("br",null),"\u9ad8\u6821\u6642\u4ee3\u3067\u306f\u91ce\u7403\u90e8\u306b\u5165\u308a\u3001\u5927\u962a\u30d9\u30b9\u30c8\uff14\u307e\u3067\u9032\u51fa\u3057\u305f\u7d4c\u9a13\u304c\u3042\u308a\u307e\u3059\u3002",o.a.createElement("br",null),"\u305d\u306e\u4f53\u529b\u3092\u6d3b\u304b\u3057\u3001\u3053\u308c\u304b\u3089\u3082\u6280\u8853\u3092\u4f38\u3070\u3057\u7d9a\u3051\u308c\u308b\u3088\u3046\u306b\u7cbe\u9032\u3057\u307e\u3059\uff01")),o.a.createElement("div",{className:"item-container"},o.a.createElement("h3",{id:"gemes-section"},"JavaScript Games"),o.a.createElement("div",{className:"cards"},[{id:"https://book22.github.io/button_game/",name:"Button Game",image:"https://github.com/book22/Portfolio/blob/gh-pages/image/buttn_.png?raw=true",introduction:"\u9806\u756a\u306b\u6570\u5b57\u3092\u62bc\u3057\u3066\u3044\u304f\u30b2\u30fc\u30e0\u3067\u3059\u3002"},{id:"https://book22.github.io/QuizApp/",name:"Quiz Game",image:"https://github.com/book22/Portfolio/blob/gh-pages/image/animal_quiz_neko_maru.png?raw=true",introduction:"\u4e09\u629e\u554f\u984c\u306e\u30af\u30a4\u30ba\u30b2\u30fc\u30e0\u3067\u3059\u3002"},{id:"https://book22.github.io/SlotMachine/",name:"Slot Machine",image:"https://github.com/book22/Portfolio/blob/gh-pages/image/money_slot_machine.png?raw=true",introduction:"\u30b9\u30ed\u30c3\u30c8\u30b2\u30fc\u30e0\u3067\u3059\u3002"},{id:"https://book22.github.io/TypingGame/",name:"Typing Game",image:"https://github.com/book22/Portfolio/blob/gh-pages/image/computer_typing_hayai.png?raw=true",introduction:"\u5358\u8a9e\u3092\u5165\u529b\u3059\u308b\u30b2\u30fc\u30e0\u3067\u3059\u3002"}].map((function(e){return o.a.createElement(h,{id:e.id,name:e.name,image:e.image,introduction:e.introduction})}))))))}}]),a}(o.a.Component),d=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{id:"contact-section",className:"footer"},o.a.createElement("div",{className:"footer-contact"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"mailto:info@bookking0122@yahoo.co.jp."},"Email")))))}}]),a}(o.a.Component),b=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(u,null),o.a.createElement(p,null),o.a.createElement(d,null))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.df1a96cb.chunk.js.map