(this["webpackJsonpui-react-api"]=this["webpackJsonpui-react-api"]||[]).push([[0],[,,,,,function(e,t,n){},,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(7),l=n.n(s),r=(n(13),n(1)),i=n(2),c=n(4),u=n(3),m=(n(5),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("button",{onClick:this.props.onClick,className:"tablinks"},this.props.button)}}]),n}(a.Component)),h=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"tabcontent"},o.a.createElement("img",{src:this.props.image,className:"image"}),o.a.createElement("div",{className:"book-info-container"},o.a.createElement("h2",null,this.props.title," : ",this.props.subtitle),o.a.createElement("h3",null,"Author: ",this.props.author),o.a.createElement("p",null,"Published: ",this.props.published),o.a.createElement("p",null,"Description: ",this.props.info)))}}]),n}(a.Component),b=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).createTabs=function(t){var n=t.target,a=[];a.push(n),console.log(n.textContent);for(var s=function(t){n.textContent==e.state.elements[t].volumeInfo.title&&(console.log("found"),console.log(e.state.elements[t].volumeInfo),a=a.map((function(n){return o.a.createElement(h,{image:e.state.elements[t].volumeInfo.imageLinks.smallThumbnail,title:e.state.elements[t].volumeInfo.title,subtitle:e.state.elements[t].volumeInfo.subtitle,published:e.state.elements[t].volumeInfo.publishedDate,author:e.state.elements[t].volumeInfo.authors[0],info:e.state.elements[t].volumeInfo.description})})))},l=0;l<e.state.elements.length;l++)s(l);e.setState({tabs:a})},e.makeCreatedButtonArray=function(t){console.log(t);for(var n=t.target.parentElement.firstChild,a=[];n;)1===n.nodeType&&n!==t&&a.push(n),n=n.nextSibling;return e.makeActive(t,a)},e.makeActive=function(e,t){console.log(e),console.log(t);var n=e.target;console.log(n);for(var a=0;a<t.length;a++)t[a]!=n?t[a].classList.remove("active"):t[a]==n?t[a].classList.add("active"):console.log(t[a])},e.state={searchTerm:["Biography"],elements:[],tabs:"",siblingsList:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("mounted");var t="https://www.googleapis.com/books/v1/volumes?q=subject:".concat(this.state.searchTerm[0]);fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t.items),e.setState({elements:t.items})})).catch((function(e){console.log("Something went wrong",e)}))}},{key:"render",value:function(){var e=this;return console.log(this.state.siblingsList),o.a.createElement("div",{className:"body"},o.a.createElement("header",{className:"header"},"Choose a Biography"),o.a.createElement("div",{className:"experiment"},o.a.createElement("div",{className:"tab"},""!=this.state.elements?o.a.createElement(m,{onClick:function(t){e.createTabs(t),e.makeCreatedButtonArray(t)},button:this.state.elements[0].volumeInfo.title}):o.a.createElement(m,{button:"Loading"}),""!=this.state.elements?o.a.createElement(m,{onClick:function(t){e.createTabs(t),e.makeCreatedButtonArray(t)},button:this.state.elements[2].volumeInfo.title}):o.a.createElement(m,{button:"Loading"}),""!=this.state.elements?o.a.createElement(m,{onClick:function(t){e.createTabs(t),e.makeCreatedButtonArray(t)},button:this.state.elements[3].volumeInfo.title}):o.a.createElement(m,{button:"Loading"}))),o.a.createElement("div",{className:"experiment-bottom"},o.a.createElement("div",{className:"bottom"},this.state.tabs)))}}]),n}(a.Component),f=(n(14),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement(b,null)}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.c6d0a657.chunk.js.map