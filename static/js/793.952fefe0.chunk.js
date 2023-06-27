"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[793],{8793:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(5861),i=n(9439),a=n(4687),s=n.n(a),c=n(2791),o=n(7689),u=n(1087),l=n(4731),v=n(4699),d=n(7692),p=n(9983),h={button:"MovieDetails_button__-Fi5e",title:"MovieDetails_title__-2MyV",pictureMovie:"MovieDetails_pictureMovie__N55k-",link:"MovieDetails_link__Lx01J",active:"MovieDetails_active__+MInO",notFound:"MovieDetails_notFound__UdDgn",container:"MovieDetails_container__uHDv9",movieDetalis:"MovieDetails_movieDetalis__TZLmr",list:"MovieDetails_list__abT1S",itemLink:"MovieDetails_itemLink__K+Y03"},f=n(184),m=function(){var e,t=(0,c.useState)(null),n=(0,i.Z)(t,2),a=n[0],m=n[1],x=(0,c.useState)(!1),_=(0,i.Z)(x,2),j=_[0],g=_[1],w=(0,c.useState)(null),k=(0,i.Z)(w,2),b=k[0],D=k[1],M=(0,o.TH)(),y=(0,o.s0)(),N=(0,o.UO)().movieId,Z=(null===(e=M.state)||void 0===e?void 0:e.from)||"movies";(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,(0,l.Y5)(N);case 4:t=e.sent,m(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),D(e.t0.message);case 11:return e.prev=11,g(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[N]);return(0,f.jsxs)(f.Fragment,{children:[b&&(0,f.jsx)("p",{children:"Something goes wrong"}),j&&(0,f.jsx)(v.Z,{}),a?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("button",{className:h.button,type:"button",onClick:function(){y(Z)},children:[(0,f.jsx)(p.Pd.Provider,{value:{color:"white",size:22,className:"global-class-name"},children:(0,f.jsx)("div",{children:(0,f.jsx)(d.UX4,{})})}),(0,f.jsx)("span",{children:"Go back"})]}),(0,f.jsxs)("div",{className:h.container,children:[(0,f.jsxs)("div",{className:h.movieDetalis,children:[(0,f.jsx)("div",{className:h.movieImg,children:(0,f.jsx)("img",{src:a.poster_path?l.yA+a.poster_path:"https://bitsofco.de/content/images/2018/12/broken-1.png",alt:a.original_title,widht:"300px",className:h.pictureMovie})}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{className:h.title,children:a.title}),(0,f.jsxs)("p",{children:["User Score: ","".concat(a.vote_average.toFixed(1))]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:"".concat(a.overview)}),(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("p",{children:"".concat(a.genres.map((function(e){return e.name})).join(" / "))})]})]}),(0,f.jsx)("hr",{}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:"Additional information"}),(0,f.jsxs)("ul",{className:h.list,children:[(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{className:h.itemLink,to:"cast",state:{from:Z},children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{className:h.itemLink,to:"reviews",state:{from:Z},children:"Reviews"})})]})]}),(0,f.jsx)("hr",{}),(0,f.jsx)(o.j3,{})]})]}):(0,f.jsx)("div",{className:h.notFound,children:"This movie is not found"})]})}},4731:function(e,t,n){n.d(t,{Hx:function(){return d},PQ:function(){return v},Y5:function(){return l},wr:function(){return o},yA:function(){return c},z1:function(){return u}});var r=n(5861),i=n(4687),a=n.n(i),s=n(1243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"9f483b2fd7e828c71a7a1dd0e1411689",language:"en-US"}}),c="https://image.tmdb.org/t/p/w500",o=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("trending/movie/day");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("search/movie",{params:{page:1,include_adult:!1,query:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=793.952fefe0.chunk.js.map