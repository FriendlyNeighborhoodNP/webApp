(this.webpackJsonpfnnp=this.webpackJsonpfnnp||[]).push([[0],{1120:function(e,t){},1282:function(e,t){},1284:function(e,t){},1294:function(e,t){},1296:function(e,t){},1321:function(e,t){},1322:function(e,t){},1327:function(e,t){},1329:function(e,t){},1336:function(e,t){},1355:function(e,t){},1372:function(e,t,n){"use strict";n.r(t);var a,i,r,c,o,s,l,u,d,p,j,m,f,b,x,h,O,g,v,y,w,k,S,C,L,D,q,I,P,A,M,N,T,z,E,F,V,Z,W,H,J,U,Y=n(0),G=n.n(Y),Q=n(40),B=n.n(Q),R=(n(842),n(90)),K=n(66),X=n(35),$=n(18),_=n(816),ee=n(1398),te=n(1400),ne=n(1401),ae=n(1402),ie=n.p+"static/media/fnnp.bcc50e39.svg",re=n(10),ce=$.default.header(a||(a=Object(X.a)(["\n  width: 100%;\n  text-align: center;\n  padding-top: 30px;\n  background: var(--yellow);\n"]))),oe=$.default.main(i||(i=Object(X.a)(["\n  width: 100%;\n"]))),se=$.default.footer(r||(r=Object(X.a)(["\n  width: 100%;\n  background: var(--pink);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 30px;\n"]))),le=$.default.h2(c||(c=Object(X.a)(["\n  color: var(--pink);\n"]))),ue=$.default.h1(o||(o=Object(X.a)(["\n  color: var(--navy);\n  margin-top: -20px;\n"]))),de=$.default.nav(s||(s=Object(X.a)(["\n  width: 100%;\n  background: var(--navy);\n  display: flex;\n  justify-content: space-around;\n  padding: 10px;\n  @media (max-width: 700px) {\n    flex-direction: column;\n    position: absolute;\n    top: 0px;\n    height: 100%;\n    z-index: 10;\n  }\n"]))),pe=Object($.default)(_.a)(l||(l=Object(X.a)(["\n  color: white;\n  text-decoration: none;\n  font-size: 18px;\n"]))),je=$.default.div(u||(u=Object(X.a)(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  z-index: 20;\n  @media (min-width: 701px) {\n    display: none;\n  }\n"]))),me=$.default.a(d||(d=Object(X.a)(["\n  color: white;\n  text-decoration: none;\n  &:visited {\n    color: white;\n  }\n"]))),fe=function(e){var t=e.children,n=Object(Y.useState)(!0),a=Object(K.a)(n,2),i=a[0],r=a[1];Object(Y.useEffect)((function(){window.innerWidth<=700&&r(!1)}),[]);var c=function(){window.innerWidth<=700&&r(!i)};return Object(re.jsxs)(re.Fragment,{children:[Object(re.jsxs)(ce,{children:[Object(re.jsx)(je,{children:Object(re.jsx)(ee.a,{style:{color:i?"white":"var(--navy)",fontSize:"32pt"},onClick:c})}),Object(re.jsx)("img",{src:ie,alt:"Friendly Neighborhood NP",style:{width:"230px"}}),Object(re.jsx)(le,{children:"Friendly Neighborhood"}),Object(re.jsx)(ue,{children:"Nurse Practitioner"}),i&&Object(re.jsxs)(de,{children:[Object(re.jsx)(pe,{onClick:c,to:"/#schedule-section",children:"Schedule"}),Object(re.jsx)(pe,{onClick:c,to:"/#about-section",children:"About"}),Object(re.jsx)(pe,{onClick:c,to:"/#howto-section",children:"How it Works"}),Object(re.jsx)(pe,{onClick:c,to:"/#covid-section",children:"COVID-19 Info"}),Object(re.jsx)(pe,{onClick:c,to:"/#faq-section",children:"FAQ"})]})]}),Object(re.jsx)(oe,{children:t}),Object(re.jsxs)(se,{children:[Object(re.jsx)(me,{href:"https://www.facebook.com/friendlyneighborhoodnp",children:Object(re.jsx)(te.a,{style:{color:"white",fontSize:"64pt"}})}),Object(re.jsx)(me,{href:"https://www.linkedin.com/in/kate-strickland-fnp-c-23064067/",children:Object(re.jsx)(ne.a,{style:{color:"white",fontSize:"64pt"}})}),Object(re.jsx)(me,{href:"mailto:admin@friendlyneighborhoodnp.com",children:Object(re.jsx)(ae.a,{style:{color:"white",fontSize:"64pt"}})})]})]})},be=n(189),xe=n(50),he=n.n(xe),Oe=n(89),ge=n(207),ve=n(61),ye=n(60),we=n(170),ke=n(82),Se=n(320),Ce=n(340),Le=n(119),De=n(11),qe=n.p+"static/media/mapMarker.147214f7.svg",Ie=function(e){var t=e.locations,n=new we.default({source:new Ce.default({layer:"watercolor"})}),a=function(){var e=Object(Oe.a)(he.a.mark((function e(a){var i,r,c,o;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.removeLayer(a.getLayers().getArray()[0]),a.addLayer(n),(i=a.getView()).setCenter(Object(De.fromLonLat)(t[0])),i.setZoom(10),i.setMaxZoom(16),r=t.map((function(e){var t=new ve.default({geometry:new ye.default(Object(De.fromLonLat)(e))});return t.setStyle(new ke.default({image:new Se.default({src:qe,scale:.3})})),t})),c=new Le.default({features:r}),e.next=10,new ge.VectorLayer({source:c});case 10:o=e.sent,a.addLayer(o);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(re.jsx)(ge.Map,{onMapInit:a,style:{width:"100%",height:"500px"}})},Pe=$.default.section(p||(p=Object(X.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Ae=$.default.div(j||(j=Object(X.a)(["\n  display: grid;\n  grid-template-columns: 3fr 2fr;\n  grid-gap: 10px;\n  @media (max-width: 700px) {\n    display: flex;\n    flex-direction: column;\n  }\n"]))),Me=$.default.div(m||(m=Object(X.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-height: 500px;\n  overflow-y: scroll;\n"]))),Ne=$.default.h2(f||(f=Object(X.a)(["\n  color: var(--navy);\n"]))),Te=$.default.a(b||(b=Object(X.a)(["\n  background: var(--pink);\n  border: none;\n  border-radius: 6px;\n  color: white;\n  padding: 10px;\n  font-size: 1.2rem;\n  margin-bottom: 20px;\n  text-decoration: none;\n  &:visited {\n    color: white;\n  }\n"]))),ze=Object($.default)(be.b)(x||(x=Object(X.a)(["\n  color: var(--pink);\n  &:visited {\n    color: var(--pink);\n  }\n  & h3 {\n    margin: 0 0 5px 0;\n  }\n"]))),Ee=$.default.p(h||(h=Object(X.a)(["\n  color: var(--navy);\n  margin: 0;\n  font-size: 0.8rem;\n  font-style: italic;\n"]))),Fe=$.default.p(O||(O=Object(X.a)(["\n  margin: 0 0 5px 0;\n"]))),Ve=function(){var e=Object(Y.useContext)(Jt).appointments,t=Object(Y.useState)(e.slice(0,3)),n=Object(K.a)(t,2),a=n[0],i=n[1];return Object(re.jsxs)(Pe,{id:"schedule-section",children:[Object(re.jsx)(Ne,{children:"Schedule"}),Object(re.jsx)(Te,{href:"mailto:admin@friendlyneighborhoodnp.com",children:"Schedule Now"}),Object(re.jsxs)(Ae,{children:[Object(re.jsx)(Ie,{locations:e.map((function(e){return[e.lon,e.lat]}))}),Object(re.jsxs)(Me,{children:[a.map((function(e){return Object(re.jsxs)("div",{children:[Object(re.jsx)(ze,{to:"/appt/".concat(e.ID),children:Object(re.jsx)("h3",{children:e.title})}),Object(re.jsx)(Ee,{children:new Date(e.datetime).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric"})}),Object(re.jsx)(Fe,{children:e.description.slice(0,50)+"..."})]},e.ID)})),Object(re.jsx)(Te,{onClick:function(){return i((function(t){return e.slice(0,t.length+3)}))},children:"Show More"})]})]})]})},Ze=$.default.h2(g||(g=Object(X.a)(["\n  color: ",";\n  text-align: center;\n"])),(function(e){return e.color?e.color:"var(--yellow)"})),We=$.default.div(v||(v=Object(X.a)(["\n  background: ",";\n  border-radius: 6px;\n  color: ",";\n  padding: 25px;\n"])),(function(e){return e.bg?e.bg:"white"}),(function(e){return e.color?e.color:"var(--grey)"})),He=$.default.section(y||(y=Object(X.a)(["\n  background: ",";\n  color: ",";\n  padding: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  @media (max-width: 700px) {\n    padding: 20px;\n  }\n"])),(function(e){return e.bg?e.bg:"white"}),(function(e){return e.color?e.color:"var(--grey)"})),Je=n.p+"static/media/kate.02915e77.jpeg",Ue=$.default.div(w||(w=Object(X.a)(["\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-gap: 10px;\n  @media (max-width: 700px) {\n    display: flex;\n    flex-direction: column;\n  }\n"]))),Ye=$.default.img(k||(k=Object(X.a)(["\n  width: 90%;\n  max-width: 250px;\n  align-self: center;\n  justify-self: center;\n  border-radius: 50%;\n"]))),Ge=function(){return Object(re.jsxs)(He,{bg:"var(--navy)",id:"about-section",children:[Object(re.jsx)(Ze,{color:"var(--yellow)",children:"About"}),Object(re.jsxs)(Ue,{children:[Object(re.jsx)(Ye,{src:Je}),Object(re.jsx)(We,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae lectus ornare, dignissim velit id, efficitur velit. Nullam feugiat, quam ac laoreet elementum, libero tellus dignissim nisi, ac blandit erat nisi vel sem. Praesent a orci vel nisi luctus eleifend. In in urna nec eros accumsan commodo. Aliquam quis ultricies leo, vitae accumsan lacus. Pellentesque diam nunc, tincidunt sit amet sem sit amet, fermentum ornare velit. In ut massa sed felis consectetur condimentum non sit amet massa. Suspendisse accumsan commodo mattis. Integer eu egestas quam, at convallis ipsum. Proin tempor consequat turpis, vitae egestas metus vulputate iaculis."})]})]})},Qe=function(){return Object(re.jsxs)(He,{id:"covid-section",children:[Object(re.jsx)(Ze,{color:"var(--navy)",children:"COVID-19 Testing Info"}),Object(re.jsx)(We,{bg:"var(--pink)",color:"white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae lectus ornare, dignissim velit id, efficitur velit. Nullam feugiat, quam ac laoreet elementum, libero tellus dignissim nisi, ac blandit erat nisi vel sem. Praesent a orci vel nisi luctus eleifend. In in urna nec eros accumsan commodo. Aliquam quis ultricies leo, vitae accumsan lacus. Pellentesque diam nunc, tincidunt sit amet sem sit amet, fermentum ornare velit. In ut massa sed felis consectetur condimentum non sit amet massa. Suspendisse accumsan commodo mattis. Integer eu egestas quam, at convallis ipsum. Proin tempor consequat turpis, vitae egestas metus vulputate iaculis."})]})},Be=function(){return Object(re.jsxs)(He,{bg:"var(--yellow)",id:"howto-section",children:[Object(re.jsx)(Ze,{color:"var(--pink)",children:"How it Works"}),Object(re.jsx)(We,{color:"var(--navy)",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae lectus ornare, dignissim velit id, efficitur velit. Nullam feugiat, quam ac laoreet elementum, libero tellus dignissim nisi, ac blandit erat nisi vel sem. Praesent a orci vel nisi luctus eleifend. In in urna nec eros accumsan commodo. Aliquam quis ultricies leo, vitae accumsan lacus. Pellentesque diam nunc, tincidunt sit amet sem sit amet, fermentum ornare velit. In ut massa sed felis consectetur condimentum non sit amet massa. Suspendisse accumsan commodo mattis. Integer eu egestas quam, at convallis ipsum. Proin tempor consequat turpis, vitae egestas metus vulputate iaculis."})]})},Re=function(){return Object(re.jsxs)(He,{bg:"var(--navy)",id:"faq-section",children:[Object(re.jsx)(Ze,{color:"var(--yellow)",children:"FAQ"}),Object(re.jsx)(We,{bg:"white",color:"var(--pink)",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae lectus ornare, dignissim velit id, efficitur velit. Nullam feugiat, quam ac laoreet elementum, libero tellus dignissim nisi, ac blandit erat nisi vel sem. Praesent a orci vel nisi luctus eleifend. In in urna nec eros accumsan commodo. Aliquam quis ultricies leo, vitae accumsan lacus. Pellentesque diam nunc, tincidunt sit amet sem sit amet, fermentum ornare velit. In ut massa sed felis consectetur condimentum non sit amet massa. Suspendisse accumsan commodo mattis. Integer eu egestas quam, at convallis ipsum. Proin tempor consequat turpis, vitae egestas metus vulputate iaculis."})]})},Ke=Object($.keyframes)(S||(S=Object(X.a)(["\n    0% {\n    transform: scale(0.95);\n  }\n  5% {\n    transform: scale(1.1);\n  }\n  39% {\n    transform: scale(0.85);\n  }\n  45% {\n    transform: scale(1);\n  }\n  60% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(0.9);\n  }\n"]))),Xe=$.default.div(C||(C=Object(X.a)(["\n  width: 100%;\n  padding: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),$e=$.default.div(L||(L=Object(X.a)(["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n  transform: rotate(45deg);\n  transform-origin: 40px 40px;\n"]))),_e=$.default.div(D||(D=Object(X.a)(["\n  top: 32px;\n  left: 32px;\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  background: var(--pink);\n  animation: ",' 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);\n\n  &::after,\n  &::before {\n    content: " ";\n    position: absolute;\n    display: block;\n    width: 32px;\n    height: 32px;\n    background: var(--pink);\n  }\n\n  &::after {\n    top: -24px;\n    border-radius: 50% 50% 0 0;\n  }\n\n  &::before {\n    left: -24px;\n    border-radius: 50% 0 0 50%;\n  }\n'])),Ke),et=function(){return Object(re.jsx)(Xe,{children:Object(re.jsx)($e,{children:Object(re.jsx)(_e,{})})})},tt=$.default.div(q||(q=Object(X.a)(["\n  width: 100%;\n  max-width: 900px;\n"]))),nt=function(){var e=Object(Y.useContext)(Jt),t=e.appointments,n=e.loading;return Object(re.jsxs)(tt,{children:[t.length>0&&Object(re.jsx)(Ve,{}),n&&Object(re.jsx)(et,{}),Object(re.jsx)(Ge,{}),Object(re.jsx)(Qe,{}),Object(re.jsx)(Be,{}),Object(re.jsx)(Re,{})]})},at=function(e){var t=[e.lon,e.lat],n=new we.default({source:new Ce.default({layer:"watercolor"})}),a=function(){var e=Object(Oe.a)(he.a.mark((function e(a){var i,r,c,o,s;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object(De.fromLonLat)(t),r=a.getView(),a.removeLayer(a.getLayers().getArray()[0]),a.addLayer(n),r.setCenter(i),r.setZoom(15),r.setMaxZoom(16),(c=new ve.default({geometry:new ye.default(i)})).setStyle(new ke.default({image:new Se.default({src:qe,scale:.3})})),o=new Le.default({features:[c]}),e.next=12,new ge.VectorLayer({source:o});case 12:s=e.sent,a.addLayer(s);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(re.jsx)(ge.Map,{onMapInit:a,style:{width:"100%",height:"300px"}})},it=$.default.div(I||(I=Object(X.a)(["\n  background: white;\n  padding: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),rt=$.default.h2(P||(P=Object(X.a)(["\n  color: var(--navy);\n"]))),ct=$.default.h3(A||(A=Object(X.a)(["\n  color: var(--pink);\n"]))),ot=$.default.p(M||(M=Object(X.a)([""]))),st=function(){var e=Object(Y.useState)(),t=Object(K.a)(e,2),n=t[0],a=t[1],i=Object(R.f)(),r=parseInt(i.pathname.slice(6));return Object(Y.useEffect)((function(){fetch("".concat("","/api/appt/").concat(r)).then((function(e){return e.json()})).then(a)}),[r]),Object(re.jsx)(it,{children:n&&Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(rt,{children:n.title}),Object(re.jsx)(at,{lon:n.lon,lat:n.lat}),Object(re.jsx)(ct,{children:new Date(n.datetime).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric"})}),Object(re.jsx)(ot,{children:n.description})]})})},lt=$.default.div(N||(N=Object(X.a)(["\n  width: 100%;\n  max-width: 400px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 10px;\n  border: 1px solid lightgray;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);\n  margin: 50px;\n"]))),ut=$.default.input.attrs({type:"text",placeholder:"Username"})(T||(T=Object(X.a)(["\n  width: 90%;\n  margin-top: 10px;\n  padding: 10px;\n  border: 1px solid lightgray;\n  border-radius: 2px;\n"]))),dt=Object($.default)(ut).attrs({type:"password",placeholder:"Password"})(z||(z=Object(X.a)([""]))),pt=$.default.button(E||(E=Object(X.a)(["\n  width: 100%;\n  max-width: 200px;\n  padding: 10px;\n  border: none;\n  border-radius: 10px;\n  color: white;\n  background: var(--pink);\n  margin-top: 10px;\n"]))),jt=function(e){var t=e.fetchToken,n=Object(Y.useState)(),a=Object(K.a)(n,2),i=a[0],r=a[1],c=Object(Y.useState)(),o=Object(K.a)(c,2),s=o[0],l=o[1];return Object(re.jsxs)(lt,{children:[Object(re.jsx)("h2",{style:{color:"var(--grey)"},children:"Login"}),Object(re.jsx)(ut,{onChange:function(e){r(e.target.value)}}),Object(re.jsx)(dt,{onChange:function(e){l(e.target.value)}}),Object(re.jsx)(pt,{disabled:!i||!s,onClick:function(){t(i,s)},children:"Submit"})]})},mt=n(1412),ft=n(1413),bt=n(1414),xt=$.default.div(F||(F=Object(X.a)(["\n  width: 100%;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n  margin-bottom: 10px;\n"]))),ht=$.default.button(V||(V=Object(X.a)(["\n  border: none;\n  background: none;\n"]))),Ot=$.default.span(Z||(Z=Object(X.a)(["\n  color: var(--grey);\n"]))),gt=$.default.span(W||(W=Object(X.a)(["\n  color: var(--pink);\n  font-style: italic;\n  font-size: 0.8rem;\n"]))),vt=function(e){var t=e.appt,n=Object(Y.useState)(!1),a=Object(K.a)(n,2),i=a[0],r=a[1],c=Object(Y.useContext)(Jt).deleteAppointment,o=Object(Y.useContext)(Vt).token,s=function(){var e=Object(Oe.a)(he.a.mark((function e(t){return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(t,o);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(re.jsxs)(xt,{children:[Object(re.jsx)(Ot,{children:t.title}),Object(re.jsx)(gt,{children:new Date(t.datetime).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"2-digit",hour:"numeric",minute:"numeric"})}),i?Object(re.jsxs)("div",{children:[Object(re.jsx)(ht,{onClick:function(){return s(t.ID)},children:Object(re.jsx)(mt.a,{style:{color:"var(--navy)"}})}),Object(re.jsx)(ht,{onClick:function(){return r(!1)},children:Object(re.jsx)(ft.a,{style:{color:"var(--navy)"}})})]}):Object(re.jsx)(ht,{onClick:function(){return r(!0)},children:Object(re.jsx)(bt.a,{style:{color:"var(--navy)"}})})]})},yt=n(178),wt=function(e){var t=e.updateCoord,n=[-81.3039779663086,31.9473743438721],a=function(){var e=Object(Oe.a)(he.a.mark((function e(a){var i,r,c,o;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object(De.fromLonLat)(n),r=a.getView(),c=new Le.default,e.next=5,new ge.VectorLayer({source:c});case 5:o=e.sent,a.addLayer(o),r.setCenter(i),r.setZoom(14),r.setMaxZoom(16),a.on("singleclick",(function(e){var n=Object(De.transform)(e.coordinate,"EPSG:3857","EPSG:4326");t(n);var a=new ve.default({geometry:new ye.default(Object(De.fromLonLat)(n))});a.setStyle(new ke.default({image:new Se.default({src:qe,scale:.3})})),c.forEachFeature((function(e){return c.removeFeature(e)})),c.addFeature(a)}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(re.jsx)(ge.Map,{on:!0,onMapInit:a,style:{width:"100%",maxWidth:"500px",height:"500px"}})},kt=new Date;kt.setSeconds(0),kt.setMilliseconds(0);var St,Ct,Lt={title:"",description:"",datetime:kt,lat:0,lon:0},Dt=function(e,t){var n=new Date(e.datetime.toISOString());switch(t.type){case"updateTitle":return Object(yt.a)(Object(yt.a)({},e),{},{title:t.payload});case"updateDescription":return Object(yt.a)(Object(yt.a)({},e),{},{description:t.payload});case"updateDate":var a=new Date(t.payload);return n.setFullYear(a.getFullYear()),n.setMonth(a.getMonth()),n.setDate(a.getDate()),Object(yt.a)(Object(yt.a)({},e),{},{datetime:n});case"updateTime":var i=t.payload.split(":"),r=Object(K.a)(i,2),c=r[0],o=r[1];return n.setHours(c),n.setMinutes(o),Object(yt.a)(Object(yt.a)({},e),{},{datetime:n});case"updateCoord":return Object(yt.a)(Object(yt.a)({},e),{},{lon:t.payload[0],lat:t.payload[1]});default:return e}},qt=$.default.div(H||(H=Object(X.a)(["\n  width: 100%;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n  margin-bottom: 10px;\n"]))),It=$.default.input(J||(J=Object(X.a)(["\n  width: 100%;\n  max-width: 500px;\n  padding: 10px;\n  margin-bottom: 20px;\n"]))),Pt=$.default.button(U||(U=Object(X.a)(["\n  background: var(--pink);\n  border: none;\n  border-radius: 6px;\n  color: white;\n  padding: 10px;\n  font-size: 1.2rem;\n  margin: 20px;\n"]))),At=function(){var e=Object(Y.useReducer)(Dt,Lt),t=Object(K.a)(e,2),n=t[0],a=t[1],i=Object(Y.useContext)(Jt).addAppointment,r=Object(Y.useContext)(Vt).token,c=n.datetime.getDate(),o=c<10?"0".concat(c):c.toString(),s=n.datetime.getMonth()+1,l=s<10?"0".concat(s):s.toString(),u="".concat(n.datetime.getFullYear(),"-").concat(l,"-").concat(o);return Object(re.jsxs)(qt,{children:[Object(re.jsx)("h2",{style:{color:"var(--pink)"},children:"New Event"}),Object(re.jsx)(It,{type:"text",value:n.title,onChange:function(e){return a({type:"updateTitle",payload:e.target.value})},placeholder:"Title"}),Object(re.jsx)(It,{type:"text",value:n.description,placeholder:"Description",onChange:function(e){return a({type:"updateDescription",payload:e.target.value})}}),Object(re.jsx)(It,{required:!0,value:u,type:"date",onChange:function(e){return a({type:"updateDate",payload:e.target.value})}}),Object(re.jsx)(It,{required:!0,type:"time",defaultValue:"".concat(n.datetime.getHours(),":").concat(n.datetime.getMinutes),onChange:function(e){return a({type:"updateTime",payload:e.target.value})}}),Object(re.jsx)(wt,{updateCoord:function(e){return a({type:"updateCoord",payload:e})}}),Object(re.jsx)(Pt,{onClick:function(){n.title.length>0&&n.description.length>0&&0!==n.lat&&0!==n.lon?i(n,r):(0===n.title.length&&alert("Please add a title"),0===n.description.length&&alert("Please add a description"),0!==n.lat&&0!==n.lon||alert("Please select a location on the map"))},children:"Submit"})]})},Mt=$.default.div(St||(St=Object(X.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),Nt=function(){var e=Object(Y.useContext)(Jt).appointments;return Object(re.jsxs)(Mt,{children:[Object(re.jsx)(At,{}),e.map((function(e){return Object(re.jsx)(vt,{appt:e},e.ID)}))]})},Tt=n(821),zt=n.n(Tt),Et=function(){var e=Object(Y.useState)(),t=Object(K.a)(e,2),n=t[0],a=t[1],i=Object(Y.useState)(!1),r=Object(K.a)(i,2),c=r[0],o=r[1],s=Object(Y.useState)(),l=Object(K.a)(s,2),u=l[0],d=l[1];return{token:n,loading:c,error:u,fetchToken:function(){var e=Object(Oe.a)(he.a.mark((function e(t,n){var i,r;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.prev=1,e.next=4,zt.a.hash(n,10);case 4:return n=e.sent,e.next=7,fetch("".concat("","/api/auth"),{method:"POST",body:JSON.stringify({username:t,password:n})});case 7:return i=e.sent,e.next=10,i.json();case 10:(r=e.sent).ok?a(r.token):d("Invalid Password"),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),d(e.t0),o(!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,n){return e.apply(this,arguments)}}()}},Ft=$.default.div(Ct||(Ct=Object(X.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Vt=Object(Y.createContext)({token:""}),Zt=function(){var e=Et(),t=e.token,n=e.error,a=e.fetchToken;return Object(Y.useEffect)((function(){return console.error(n)}),[n]),Object(re.jsx)(Vt.Provider,{value:{token:t},children:Object(re.jsx)(Ft,{children:t?Object(re.jsx)(Nt,{}):Object(re.jsx)(jt,{fetchToken:a})})})},Wt=n(102),Ht=function(){var e=Object(Y.useState)([]),t=Object(K.a)(e,2),n=t[0],a=t[1],i=Object(Y.useState)(!0),r=Object(K.a)(i,2),c=r[0],o=r[1],s=Object(Y.useCallback)((function(){fetch("".concat("","/api/appt")).then((function(e){return e.json()})).then((function(e){return a(e.sort((function(e,t){return new Date(e.datetime)-new Date(t.datetime)})))})).catch(console.error).finally((function(){return o(!1)}))}),[]);return Object(Y.useEffect)(s,[]),{appointments:n,deleteAppointment:function(){var e=Object(Oe.a)(he.a.mark((function e(t,n){return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.prev=1,e.next=4,fetch("".concat("","/api/appt/").concat(t,"?t=").concat(n),{method:"DELETE"}).then((function(e){return e.json()}));case 4:a((function(e,n){return e.filter((function(e){return e.ID!==t}))})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:return e.prev=10,o(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})));return function(t,n){return e.apply(this,arguments)}}(),addAppointment:function(){var e=Object(Oe.a)(he.a.mark((function e(t,n){var i;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("","/api/appt?t=").concat(n),{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()}));case 3:i=e.sent,a((function(e,t){return[].concat(Object(Wt.a)(e),[i]).sort((function(e,t){return new Date(e.datetime)-new Date(t.datetime)}))})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),loading:c}},Jt=Object(Y.createContext)({appointments:[],deleteAppointment:function(){},addAppointment:function(){},loading:!1});var Ut=function(){var e=Ht(),t=e.appointments,n=e.deleteAppointment,a=e.addAppointment,i=e.loading;return Object(re.jsx)(Jt.Provider,{value:{appointments:t,addAppointment:a,deleteAppointment:n,loading:i},children:Object(re.jsx)(fe,{children:Object(re.jsxs)(R.c,{children:[Object(re.jsx)(R.a,{exact:!0,path:"/",children:Object(re.jsx)(nt,{})}),Object(re.jsx)(R.a,{path:"/appt",children:Object(re.jsx)(st,{})}),Object(re.jsx)(R.a,{path:"/admin",children:Object(re.jsx)(Zt,{})})]})})})};B.a.render(Object(re.jsx)(G.a.StrictMode,{children:Object(re.jsx)(be.a,{children:Object(re.jsx)(Ut,{})})}),document.getElementById("root"))},842:function(e,t,n){}},[[1372,1,2]]]);
//# sourceMappingURL=main.40be5467.chunk.js.map