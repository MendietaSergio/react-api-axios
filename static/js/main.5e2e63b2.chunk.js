(this["webpackJsonpreact-api-axios"]=this["webpackJsonpreact-api-axios"]||[]).push([[0],{25:function(e,a,t){},27:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var s=t(2),c=t.n(s),r=t(14),i=t.n(r),l=(t(25),t(4)),n=t.n(l),d=t(15),o=t(16),m=t(17),j=t(20),h=t(19),b=(t(27),t(18)),u=t.n(b).a.create({baseURL:"http://api.tvmaze.com/search/shows?q="}),x=t(0),p=function(e){Object(j.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(o.a)(this,t);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={filmes:[]},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("marvel");case 2:a=e.sent,this.setState({filmes:a.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.filmes;return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{className:"text-center mt-5",children:"Peliculas de Marvel"}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("h3",{children:"prueba"}),e.map((function(e){return Object(x.jsxs)("div",{className:"col-md-3 mt-5",children:[Object(x.jsx)("h3",{children:"Entro"}),Object(x.jsx)("img",{src:e.show.image.medium,className:"card-img-top","data-toggle":"modal","data-target":"#exampleModal"+e.show.id}),Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("h5",{className:"card-title",children:e.show.name}),Object(x.jsx)("p",{className:"card-text module line-clamp",children:e.show.summary}),Object(x.jsx)("div",{className:"text-center",children:Object(x.jsx)("a",{href:e.show.url,className:"btn-primary",target:"_blank",children:"Ver detalle"})})]}),Object(x.jsx)("div",{class:"modal fade",id:"exampleModal"+e.show.id,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(x.jsx)("div",{class:"modal-dialog",role:"document",children:Object(x.jsxs)("div",{class:"modal-content",children:[Object(x.jsxs)("div",{class:"modal-header",children:[Object(x.jsx)("h5",{class:"modal-title",id:"exampleModalLabel",children:e.show.name}),Object(x.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:Object(x.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(x.jsx)("div",{class:"modal-body",children:Object(x.jsx)("img",{src:e.show.image.original,className:"card-img-top img-fluid"})})]})})})]})})),Object(x.jsx)("h3",{children:"prueba2"})]})]})}}]),t}(s.Component);t(47),t(48);window.$=window.jQuery=t(13),i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(p,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.5e2e63b2.chunk.js.map