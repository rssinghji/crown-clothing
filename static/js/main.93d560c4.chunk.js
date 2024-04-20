(this["webpackJsonpcrown-clothing"]=this["webpackJsonpcrown-clothing"]||[]).push([[0],{46:function(e,t,a){e.exports=a(85)},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(35),r=a.n(l),i=(a(54),a(55),a(17)),s=a(10),o=a(9);const m=Object(o.a)([e=>e.user],e=>e.currentUser);a(56);var d=Object(i.g)(e=>{let{title:t,imageUrl:a,size:n,history:l,linkUrl:r,match:i}=e;return c.a.createElement("div",{className:"".concat(n," menu-item"),onClick:()=>l.push("".concat(i.url).concat(r))},c.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),c.a.createElement("div",{className:"content"},c.a.createElement("h1",{className:"title"},t.toUpperCase()),c.a.createElement("span",{className:"subtitle"},"SHOP NOW")))});a(64);const u=Object(o.a)([e=>e.directory],e=>e.sections),p=Object(o.b)({sections:u});var b,E=Object(s.b)(p)(e=>{let{sections:t}=e;return c.a.createElement("div",{className:"directory-menu"},t.map(e=>{let{id:t,...a}=e;return c.a.createElement(d,Object.assign({key:t},a))}))}),h=a(13),g=a(14);const y=g.b.div(b||(b=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px 80px;\n"])));var O=()=>c.a.createElement(y,null,c.a.createElement(E,null)),S=a(20);const N=e=>e.shop,v=Object(o.a)([N],e=>e.collections),I=Object(o.a)([v],e=>e?Object.keys(e).map(t=>e[t]):[]),C=Object(o.a)([N],e=>e.isFetching),f=Object(o.a)([N],e=>!!e.collections);var _,j;const T=g.b.div(_||(_=Object(h.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),U=g.b.div(j||(j=Object(h.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"])));var w=e=>t=>{let{isLoading:a,...n}=t;return a?c.a.createElement(T,null,c.a.createElement(U,null)):c.a.createElement(e,n)};a(66),a(67);const k="TOGGLE_CART_HIDDEN",A="ADD_ITEM",x="REMOVE_ITEM",R="CLEAR_ITEM_FROM_CART",G="CLEAR_CART",L=()=>({type:k}),F=e=>({type:A,payload:e});var P,H,M,D;const q=Object(g.a)(P||(P=Object(h.a)(["\n    background-color: black;\n    color: white;\n    border: none;\n\n    &:hover {\n        background-color: white;\n        color: black;\n        border: 1px solid black;\n    }\n"]))),z=Object(g.a)(H||(H=Object(h.a)(["\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n\n    &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n    }\n"]))),V=Object(g.a)(M||(M=Object(h.a)(["\n    background-color: #4285f4;\n    color: white;\n    border: none;\n\n    &:hover {\n        background-color: #357ae8;\n        border: none;\n    }\n"]))),W=g.b.button(D||(D=Object(h.a)(["\n    min-width: 165px;\n    width: auto;\n    height: 50px;\n    letter-spacing: 0.5px;\n    line-height: 50px;\n    padding: 0 35px 0 35px;\n    font-size: 15px;\n    text-transform: uppercase;\n    font-family: 'Open Sans Condensed';\n    font-weight: bolder;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n\n    ","\n"])),e=>e.isGoogleSignIn?V:e.inverted?z:q);var K,B,Y,J,Q,$,Z=e=>{let{children:t,...a}=e;return c.a.createElement(W,a,t)};const X=g.b.div(K||(K=Object(h.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n"]))),ee=Object(g.b)(Z)(B||(B=Object(h.a)(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n"]))),te=g.b.div(Y||(Y=Object(h.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"])),e=>{let{imageUrl:t}=e;return"url(".concat(t,")")}),ae=g.b.div(J||(J=Object(h.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]))),ne=g.b.span(Q||(Q=Object(h.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n"]))),ce=g.b.span($||($=Object(h.a)(["\n  width: 10%;\n  text-align: right;\n"])));var le=Object(s.b)(null,e=>({addItem:t=>e(F(t))}))(e=>{let{item:t,addItem:a}=e;const{name:n,price:l,imageUrl:r}=t;return c.a.createElement(X,null,c.a.createElement(te,{className:"image",imageUrl:r}),c.a.createElement(ae,null,c.a.createElement(ne,null,n),c.a.createElement(ce,null,l)),c.a.createElement(ee,{onClick:()=>a(t),inverted:!0},"Add to cart"))}),re=a(23);var ie=e=>{let{title:t,items:a}=e;const n="/shop/"+t.toLowerCase();return c.a.createElement("div",{className:"collection-preview"},c.a.createElement(re.b,{className:"title",to:n},t.toUpperCase()),c.a.createElement("div",{className:"preview"},a.filter((e,t)=>t<4).map(e=>c.a.createElement(le,{key:e.id,item:e}))))};const se=Object(o.b)({collections:I});var oe=Object(s.b)(se)(e=>{let{collections:t}=e;return c.a.createElement("div",{className:"collections-overview"},t.map(e=>{let{id:t,...a}=e;return c.a.createElement(ie,Object.assign({key:t},a))}))});const me=Object(o.b)({isLoading:C});var de=Object(S.c)(Object(s.b)(me),w)(oe);a(68);var ue=Object(s.b)((e,t)=>{return{collection:(a=t.match.params.collectionId,Object(o.a)([v],e=>e?e[a]:null))(e)};var a})(e=>{let{collection:t}=e;const{title:a,items:n}=t;return c.a.createElement("div",{className:"collection-page"},c.a.createElement("h2",{className:"title"},a),c.a.createElement("div",{className:"items"},n.map(e=>c.a.createElement(le,{key:e.id,item:e}))))});const pe=Object(o.b)({isLoading:e=>!f(e)});var be=Object(S.c)(Object(s.b)(pe),w)(ue);var Ee={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},he=a(29);a(69),a(86);const ge=async(e,t)=>{if(!e)return;const a=Se.doc("users/".concat(e.uid));if(!(await a.get()).exists){const{displayName:c,email:l}=e,r=new Date;try{await a.set({displayName:c,email:l,createdAt:r,...t})}catch(n){console.log("Error creating profile document",n.message)}}return a},ye=e=>e.docs.map(e=>{const{title:t,items:a}=e.data();return{routeName:encodeURI(t.toLowerCase()),id:e.id,title:t,items:a}}).reduce((e,t)=>(e[t.routeName]=t,e),{});he.a.initializeApp({apiKey:"AIzaSyA466_jo0nD7LZg6k4O2VzyxDo9NjIfRLQ",authDomain:"crown-db-1c71a.firebaseapp.com",projectId:"crown-db-1c71a",storageBucket:"crown-db-1c71a.appspot.com",messagingSenderId:"148644553114",appId:"1:148644553114:web:87913f7ae13c37d41b9a23",measurementId:"G-YY2S391QL1"});const Oe=he.a.auth(),Se=he.a.firestore(),Ne=new he.a.auth.GoogleAuthProvider;Ne.setCustomParameters({prompt:"select_account"});he.a;const ve=()=>({type:Ee.FETCH_COLLECTIONS_START}),Ie=e=>({type:Ee.FETCH_COLLECTIONS_SUCCESS,payload:e}),Ce=e=>({type:Ee.FETCH_COLLECTIONS_FAILURE,payload:e});class fe extends c.a.Component{componentDidMount(){const{fetchCollectionsStart:e}=this.props;e()}render(){const{match:e}=this.props;return c.a.createElement("div",{className:"shop-page"},c.a.createElement(i.b,{exact:!0,path:"".concat(e.path),component:de}),c.a.createElement(i.b,{path:"".concat(e.path,"/:collectionId"),component:be}))}}var _e=Object(s.b)(null,e=>({fetchCollectionsStart:()=>e(ve())}))(fe);a(71);var je=()=>c.a.createElement("div",null,"CONTACT PAGE");a(72);const Te=e=>e.cart,Ue=Object(o.a)([Te],e=>e.cartItems),we=Object(o.a)([Te],e=>e.hidden),ke=Object(o.a)([Ue],e=>e.reduce((e,t)=>e+t.quantity,0)),Ae=Object(o.a)([Ue],e=>e.reduce((e,t)=>e+t.quantity*t.price,0));a(73);var xe=Object(s.b)(null,e=>({clearItem:t=>e((e=>({type:R,payload:e}))(t)),addItem:t=>e(F(t)),removeItem:t=>e((e=>({type:x,payload:e}))(t))}))(e=>{let{cartItem:t,clearItem:a,addItem:n,removeItem:l}=e;const{imageUrl:r,name:i,quantity:s,price:o}=t;return c.a.createElement("div",{className:"checkout-item"},c.a.createElement("div",{className:"image-container"},c.a.createElement("img",{src:r,alt:"item"})),c.a.createElement("span",{className:"name"},i),c.a.createElement("span",{className:"quantity"},c.a.createElement("div",{className:"arrow",onClick:()=>l(t)},"\u276e"),c.a.createElement("span",{className:"value"},s),c.a.createElement("div",{className:"arrow",onClick:()=>n(t)},"\u276f")),c.a.createElement("span",{className:"price"},o),c.a.createElement("div",{className:"remove-button",onClick:()=>a(t)},"\u2715"))}),Re=(a(74),a(41)),Ge=a.n(Re);var Le=e=>{let{price:t}=e;const a=100*t;return c.a.createElement(Ge.a,{label:"Pay Now",name:"CROWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/143w.svg",description:"Your total is $".concat(t,"."),amount:a,panelLabel:"Pay Now",token:e=>{console.log("token: ",e),alert("Payment Successful")},stripeKey:"pk_test_51OsEkNKffaDxIeJSoYe1njhovY5JyJjkzHgvyyMarlHAbBFFnHZuuuhNoTsgsCTBayOlI1Walv8VhAMxPX1AdVNf00nRG9OKFk"})};const Fe=Object(o.b)({cartItems:Ue,total:Ae});var Pe=Object(s.b)(Fe)(e=>{let{cartItems:t,total:a}=e;return c.a.createElement("div",{className:"checkout-page"},c.a.createElement("div",{className:"checkout-header"},c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Product")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Description")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Quantity")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Price")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Remove"))),t.map(e=>c.a.createElement(xe,{key:e.id,cartItem:e})),c.a.createElement("div",{className:"total"},c.a.createElement("span",null,"TOTAL: $",a)),c.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payment*",c.a.createElement("br",null),"Number: 4242 4242 4242 4242 - Expires: 01/25 CVV: 123"),c.a.createElement(Le,{price:a}))});a(75),a(76),a(77);var He=e=>{let{handleChange:t,label:a,...n}=e;return c.a.createElement("div",{className:"group"},c.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?c.a.createElement("label",{className:"".concat(n.value.length," ? 'shrink' : '' form-input-label")},a):null)};var Me={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"};const De=e=>({type:Me.SIGN_IN_FAILURE,payload:e});class qe extends c.a.Component{constructor(e){super(e),this.handleSubmit=async e=>{e.preventDefault();const{emailSignInStart:t}=this.props,{email:a,password:n}=this.state;t(a,n)},this.handleChange=e=>{const{value:t,name:a}=e.target;this.setState({[a]:t})},this.state={email:"",password:""}}render(){const{googleSignInStart:e}=this.props;return c.a.createElement("div",{className:"sign-in"},c.a.createElement("h2",null,"I already have an account!"),c.a.createElement("span",null,"Sign in with your email and password"),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement(He,{name:"email",type:"email",label:"email",handleChange:this.handleChange,value:this.state.email,required:!0}),c.a.createElement(He,{name:"password",type:"password",label:"password",value:this.state.password,handleChange:this.handleChange,required:!0}),c.a.createElement("div",{className:"buttons"},c.a.createElement(Z,{type:"submit"},"SIGN IN"),c.a.createElement(Z,{type:"button",onClick:e,isGoogleSignIn:!0},"SIGN IN WITH GOOGLE"))))}}var ze=Object(s.b)(null,e=>({googleSignInStart:()=>e({type:Me.GOOGLE_SIGN_IN_START}),emailSignInStart:(t,a)=>e({type:Me.EMAIL_SIGN_IN_START,payload:{email:t,password:a}})}))(qe);a(78);class Ve extends c.a.Component{constructor(){super(),this.handleSubmit=async e=>{e.preventDefault();const{signUpStart:t}=this.props,{displayName:a,email:n,password:c,confirmPassword:l}=this.state;c===l?t({displayName:a,email:n,password:c}):alert("Passwords don't match!")},this.handleChange=e=>{const{name:t,value:a}=e.target;this.setState({[t]:a})},this.state={displayName:"",email:"",password:"",confirmPassword:""}}render(){const{displayName:e,email:t,password:a,confirmPassword:n}=this.state;return c.a.createElement("div",{className:"sign-up"},c.a.createElement("h2",{className:"title"},"I do not have an account"),c.a.createElement("span",null,"Sign up with your email and passowrd"),c.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},c.a.createElement(He,{type:"text",name:"displayName",value:e,onChange:this.handleChange,label:"Display Name",required:!0}),c.a.createElement(He,{type:"email",name:"email",value:t,onChange:this.handleChange,label:"Email",required:!0}),c.a.createElement(He,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),c.a.createElement(He,{type:"password",name:"confirmPassword",value:n,onChange:this.handleChange,label:"Confirm Password",required:!0}),c.a.createElement(Z,{type:"submit"},"SIGN UP")))}}var We=Object(s.b)(null,e=>({signUpStart:t=>e((e=>({type:Me.SIGN_UP_START,payload:e}))(t))}))(Ve);var Ke,Be,Ye,Je=()=>c.a.createElement("div",{className:"sign-in-and-sign-up"},c.a.createElement(ze,null),c.a.createElement(We,null));function Qe(){return(Qe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const $e=e=>{let{svgRef:t,title:a,...n}=e;return c.a.createElement("svg",Qe({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?Ke||(Ke=c.a.createElement("title",null,"Group")):a?c.a.createElement("title",null,a):null,Be||(Be=c.a.createElement("desc",null,"Created with Sketch.")),Ye||(Ye=c.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},c.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},c.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),c.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),c.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),c.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),c.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))},Ze=c.a.forwardRef((e,t)=>c.a.createElement($e,Qe({svgRef:t},e)));var Xe,et,tt,at,nt,ct,lt,rt,it,st,ot,mt,dt,ut,pt;a.p,a(79);function bt(){return(bt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const Et=e=>{let{svgRef:t,title:a,...n}=e;return c.a.createElement("svg",bt({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?c.a.createElement("title",null,a):null,c.a.createElement("g",null,c.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Xe||(Xe=c.a.createElement("g",null)),et||(et=c.a.createElement("g",null)),tt||(tt=c.a.createElement("g",null)),at||(at=c.a.createElement("g",null)),nt||(nt=c.a.createElement("g",null)),ct||(ct=c.a.createElement("g",null)),lt||(lt=c.a.createElement("g",null)),rt||(rt=c.a.createElement("g",null)),it||(it=c.a.createElement("g",null)),st||(st=c.a.createElement("g",null)),ot||(ot=c.a.createElement("g",null)),mt||(mt=c.a.createElement("g",null)),dt||(dt=c.a.createElement("g",null)),ut||(ut=c.a.createElement("g",null)),pt||(pt=c.a.createElement("g",null)))},ht=c.a.forwardRef((e,t)=>c.a.createElement(Et,bt({svgRef:t},e)));a.p;const gt=Object(o.b)({itemCount:ke});var yt=Object(s.b)(gt,e=>({toggleCartHidden:()=>e(L())}))(e=>{let{toggleCartHidden:t,itemCount:a}=e;return c.a.createElement("div",{className:"cart-icon",onClick:t},c.a.createElement(ht,{className:"shopping-icon"}),c.a.createElement("span",{className:"item-count"},a))});a(80),a(81);var Ot=e=>{let{item:{imageUrl:t,price:a,name:n,quantity:l}}=e;return c.a.createElement("div",{className:"cart-item"},c.a.createElement("img",{src:t,alt:"item"}),c.a.createElement("div",{className:"item-details"},c.a.createElement("span",{className:"name"},n),c.a.createElement("span",{className:"price"},l," x $",a)))};const St=Object(o.b)({cartItems:Ue});var Nt,vt,It,Ct,ft=Object(i.g)(Object(s.b)(St)(e=>{let{cartItems:t,history:a,dispatch:n}=e;return c.a.createElement("div",{className:"cart-dropdown"},c.a.createElement("div",{className:"cart-items"},0===t.length?c.a.createElement("span",{className:"empty-message"},"Your cart is empty"):t.map(e=>c.a.createElement(Ot,{key:e.id,item:e}))),c.a.createElement(Z,{onClick:()=>{a.push("/checkout"),n(L())}},"GO TO CHECKOUT"))}));const _t=g.b.div(Nt||(Nt=Object(h.a)(["\n    height: 70px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 25px;\n"]))),jt=Object(g.b)(re.b)(vt||(vt=Object(h.a)(["\n    height: 100%;\n    width: 70px;\n    padding: 25px;\n    margin-left: 60px;\n"]))),Tt=g.b.div(It||(It=Object(h.a)(["\n    width: 50%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    margin-right: 80px;\n"]))),Ut=Object(g.b)(re.b)(Ct||(Ct=Object(h.a)(["\n    padding: 10px 15px;\n    cursor: pointer;\n"]))),wt=Object(o.b)({currentUser:m,hidden:we});var kt=Object(s.b)(wt,e=>({signOutStart:()=>e({type:Me.SIGN_OUT_START})}))(e=>{let{currentUser:t,hidden:a,signOutStart:n}=e;return c.a.createElement(_t,null,c.a.createElement(jt,{to:"/"},c.a.createElement(Ze,{className:"logo"})),c.a.createElement(Tt,null,c.a.createElement(Ut,{to:"/shop"},"SHOP"),c.a.createElement(Ut,{to:"/contact"},"CONTACT"),t?c.a.createElement(Ut,{as:"div",onClick:n},"SIGN OUT"):c.a.createElement(Ut,{to:"/signin"},"SIGN IN"),c.a.createElement(yt,null)),a?null:c.a.createElement(ft,null))});class At extends c.a.Component{constructor(){super(...arguments),this.unsubscribeFromAuth=null}componentDidMount(){const{checkUserSession:e}=this.props;e()}componentWillUnmount(){this.unsubscribeFromAuth()}render(){return c.a.createElement("div",null,c.a.createElement(kt,null),c.a.createElement(i.d,null,c.a.createElement(i.b,{exact:!0,path:"/",component:O}),"  ",c.a.createElement(i.b,{path:"/shop",component:_e}),c.a.createElement(i.b,{exact:!0,path:"/contact",component:je}),c.a.createElement(i.b,{exact:!0,path:"/checkout",component:Pe}),c.a.createElement(i.b,{exact:!0,path:"/signin",render:()=>this.props.currentUser?c.a.createElement(i.a,{to:"/"}):c.a.createElement(Je,null)})))}}const xt=Object(o.b)({currentUser:m});var Rt=Object(s.b)(xt,e=>({checkUserSession:()=>e({type:Me.CHECK_USER_SESSION})}))(At),Gt=a(32);a(82);const Lt={currentUser:null,error:null};var Ft=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Me.SIGN_IN_SUCCESS:return{...e,currentUser:t.payload,error:null};case Me.SIGN_IN_FAILURE:case Me.SIGN_OUT_FAILURE:case Me.SIGN_UP_FAILURE:return{...e,error:t.payload};case Me.SIGN_OUT_SUCCESS:return{...e,currentUser:null,error:null};default:return e}};const Pt=(e,t)=>e.find(e=>e.id===t.id)?e.map(e=>e.id===t.id?{...e,quantity:e.quantity+1}:e):[...e,{...t,quantity:1}],Ht=(e,t)=>1===e.find(e=>e.id===t.id).quantity?e.filter(e=>e.id!==t.id):e.map(e=>e.id===t.id?{...e,quantity:e.quantity-1}:e),Mt={hidden:!0,cartItems:[]};var Dt=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return{...e,hidden:!e.hidden};case A:return{...e,cartItems:Pt(e.cartItems,t.payload)};case x:return{...e,cartItems:Ht(e.cartItems,t.payload)};case R:return{...e,cartItems:e.cartItems.filter(e=>e.id!==t.payload.id)};case G:return{...e,cartItems:[]};default:return e}};const qt={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"women",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"men",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]};var zt=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qt,t=arguments.length>1?arguments[1]:void 0;return t.type,e};const Vt={collections:null,isFetching:!1,errorMessage:""};var Wt=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee.FETCH_COLLECTIONS_START:return{...e,isFetching:!0};case Ee.FETCH_COLLECTIONS_SUCCESS:return{...e,isFetching:!1,collections:t.payload};case Ee.FETCH_COLLECTIONS_FAILURE:return{...e,isFetching:!1,errorMessage:t.payload};default:return e}},Kt=a(42);const Bt={key:"root",storage:a.n(Kt).a,whitelist:["cart"]},Yt=Object(S.b)({user:Ft,cart:Dt,directory:zt,shop:Wt});var Jt=Object(Gt.a)(Bt,Yt),Qt=a(44),$t=a(6);function*Zt(){yield console.log("Fired");try{const e=Se.collection("collections"),t=yield e.get(),a=yield Object($t.b)(ye,t);yield Object($t.c)(Ie(a))}catch(e){yield Object($t.c)(Ce(e.message))}}function*Xt(){yield Object($t.d)(Ee.FETCH_COLLECTIONS_START,Zt)}function*ea(){yield Object($t.a)([Object($t.b)(Xt)])}function*ta(e,t){try{const n=yield Object($t.b)(ge,e,t),c=yield n.get();yield Object($t.c)((a={id:c.id,...c.data()},{type:Me.SIGN_IN_SUCCESS,payload:a}))}catch(n){yield Object($t.c)(De(n))}var a}function*aa(){try{const{user:e}=yield Oe.signInWithPopup(Ne);yield ta(e)}catch(e){yield Object($t.c)(De(e))}}function*na(){yield Object($t.d)(Me.GOOGLE_SIGN_IN_START,aa)}function ca(e){let{payload:{email:t,password:a}}=e;return function*(){try{const{user:e}=yield Oe.signInWithEmailAndPassword(t,a);yield ta(e)}catch(e){yield Object($t.c)(De(e))}}()}function*la(){yield Object($t.d)(Me.EMAIL_SIGN_IN_START,ca)}function*ra(){try{const e=new Promise((e,t)=>{const a=Oe.onAuthStateChanged(t=>{a(),e(t)},t)});if(!e)return;yield ta(e)}catch(e){yield Object($t.c)(De(e))}}function*ia(){yield Object($t.d)(Me.CHECK_USER_SESSION,ra)}function*sa(){try{yield Oe.signOut(),yield Object($t.c)({type:Me.SIGN_OUT_SUCCESS})}catch(e){yield Object($t.c)((e=>({type:Me.SIGN_OUT_FAILURE,payload:e}))(e))}}function*oa(){yield Object($t.d)(Me.SIGN_OUT_START,sa)}function ma(e){let{payload:{user:t,additionalData:a}}=e;return function*(){yield ta(t,a)}()}function*da(){yield Object($t.d)(Me.SIGN_UP_SUCCESS,ma)}function ua(e){let{payload:{email:t,password:a,displayName:n}}=e;return function*(){try{const{user:e}=yield Oe.createUserWithEmailAndPassword(t,a);yield Object($t.c)((e=>{let{user:t,additionalData:a}=e;return{type:Me.SIGN_UP_SUCCESS,payload:{user:t,additionalData:a}}})({user:e,additionalData:{displayName:n}}))}catch(e){yield Object($t.c)((e=>({type:Me.SIGN_UP_FAILURE,payload:e}))(e))}}()}function*pa(){yield Object($t.d)(Me.SIGN_UP_START,ua)}function*ba(){yield Object($t.a)([Object($t.b)(na),Object($t.b)(la),Object($t.b)(ia),Object($t.b)(oa),Object($t.b)(pa),Object($t.b)(da)])}function*Ea(){yield Object($t.c)({type:G})}function*ha(){yield Object($t.d)(Me.SIGN_OUT_SUCCESS,Ea)}function*ga(){yield Object($t.a)([Object($t.b)(ha)])}const ya=Object(Qt.a)(),Oa=[ya];const Sa=Object(S.e)(Jt,Object(S.a)(...Oa));ya.run((function*(){yield Object($t.a)([Object($t.b)(ea),Object($t.b)(ba),Object($t.b)(ga)])}));const Na=Object(Gt.b)(Sa);var va=a(43);r.a.createRoot(document.getElementById("root")).render(c.a.createElement(s.a,{store:Sa},c.a.createElement(re.a,null,c.a.createElement(va.a,{persistor:Na},c.a.createElement(Rt,null)))))}},[[46,1,2]]]);
//# sourceMappingURL=main.93d560c4.chunk.js.map