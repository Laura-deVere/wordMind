(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),o=n.n(c),u=n(4),s=n(57),l=n(23),i=n(9),d=n(7),m=n(11),b=n(33),p=n(34),_=n(37),f=n(36),h=n(6),E=n.n(h),g=n(17),v=n(59),w=n.n(v).a.create({baseURL:"https://www.dictionaryapi.com/api/v3/references/collegiate/json"}),O=n(26),S=n.n(O),I={apiKey:"AIzaSyDME3zTHsfOlnm1oyseaqzH6qknPEp-GTo",authDomain:"wordmind-289222.firebaseapp.com",databaseURL:"https://wordmind-289222.firebaseio.com",projectId:"wordmind-289222",storageBucket:"wordmind-289222.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_KEY:"00d26413-4c94-4f10-bbb1-6ae91fd8b206",REACT_APP_FIREBASE_API_KEY:"AIzaSyDME3zTHsfOlnm1oyseaqzH6qknPEp-GTo"}).REACT_APP_MESSAGINGSENDERID_KEY,appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_KEY:"00d26413-4c94-4f10-bbb1-6ae91fd8b206",REACT_APP_FIREBASE_API_KEY:"AIzaSyDME3zTHsfOlnm1oyseaqzH6qknPEp-GTo"}).REACT_APP_APPID_KEY,measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_KEY:"00d26413-4c94-4f10-bbb1-6ae91fd8b206",REACT_APP_FIREBASE_API_KEY:"AIzaSyDME3zTHsfOlnm1oyseaqzH6qknPEp-GTo"}).REACT_APP_MEASUREMENTID_KEY};S.a.initializeApp(I);var j=S.a.database(),y=S.a.database(),k=(j.ref().child("words"),S.a.firestore()),N=n(19),x=function(){var e=Object(g.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.ref("/words/".concat(t)).once("value").then((function(e){if(e.val()){var t=e.val().userWords;return Object(N.a)(Object.keys(t).map((function(e){return{id:e,word:{data:t[e].word.data,sentences:t[e].word.sentences}}})))}return[]})).catch((function(e){return console.error()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(g.a)(E.a.mark((function e(t,n){var a,r,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.ref("/words/".concat(n,"/userWords")).push();case 2:return a=e.sent,r=a.key,a.set({word:t}),y.ref("/words/".concat(n,"/userWords/").concat(r)).on("child_added",(function(e){c={id:r,word:{data:e.val().data,sentences:e.val().sentences}}})),e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(g.a)(E.a.mark((function e(t,n){var a,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=y.ref("/words/".concat(n,"/userWords/").concat(t,"/word")),e.next=3,r.once("value").then((function(e){return console.log(e.val().data),a={id:t,word:{data:e.val().data,sentences:e.val().sentences}},console.log(a),a}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),W=function(){var e=Object(g.a)(E.a.mark((function e(t,n,a){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=y.ref("/words/".concat(a,"/userWords/").concat(n,"/word")),e.next=3,y.ref("/words/".concat(a,"/userWords/").concat(n,"/word/sentences")).set(Object(N.a)(t));case 3:return e.sent,e.next=6,r.once("value").then((function(e){return{id:n,word:{data:e.val().data,sentences:e.val().sentences}}}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),A=n(2),T=n.n(A),R=function(e){Object(_.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onAuthChange=function(t){if(t){var n=e.auth.currentUser.get().getBasicProfile().getGivenName(),a=e.auth.currentUser.get().getBasicProfile().getImageUrl(),r=e.auth.currentUser.get().getId();e.props.signIn(r,n,a)}else e.props.signOut()},e.onSignInClick=function(){e.auth.signIn()},e.onSignOutClick=function(){e.auth.signOut()},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"930494171277-1plsgodm6vb6oenoqu2oua2ae1leans0.apps.googleusercontent.com",scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?r.a.createElement("button",{className:"".concat(T.a.btn," ").concat(T.a.btn__transparent," ").concat(T.a.btn__small),onClick:this.onSignOutClick},r.a.createElement("i",{className:"lni lni-google"},"Sign Out")):r.a.createElement("button",{className:"".concat(T.a.btn," ").concat(T.a.btn__transparent," ").concat(T.a.btn__small),onClick:this.onSignInClick},r.a.createElement("i",{className:"lni lni-google"},"Sign In"))}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderAuthButton())}}]),n}(a.Component),D=Object(u.b)((function(e){return console.log(e.auth),{isSignedIn:e.auth.isSignedIn}}),{signIn:function(e,t,n){return function(){var a=Object(g.a)(E.a.mark((function a(r){return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:k.collection("words").doc(e).get().then((function(a){a.exists?console.log("already exists"):k.collection("words").doc(e).set({userName:t,avatarLink:n})})).then((function(){r({type:"SIGN_IN",payload:{userId:e,userName:t,avatarLink:n}})}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},signOut:function(e){return{type:"SIGN_OUT",payload:e}}})(R),U=n(60),B=n.n(U),L=n(61),H=n(62),K=n.n(H),z=Object(u.b)((function(e){return{avatarLink:e.auth.avatarLink}}))((function(e){var t=e.avatarLink;return console.log(t),r.a.createElement(i.b,{to:"/user"},r.a.createElement("img",{className:K.a.avatar,src:t,alt:"avatar"}))})),M=Object(u.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}))((function(e){var t=e.isSignedIn;return console.log(t),Object(m.b)("nav",{className:L.nav},Object(m.b)(i.b,{to:"/"},Object(m.b)("img",{src:B.a,alt:"wordmind logo"})),Object(m.b)("ul",null,t?Object(m.b)("li",null,Object(m.b)(z,null)):null,Object(m.b)("li",null,Object(m.b)(D,null))))})),F=function(){return r.a.createElement("div",{className:"blurb"},r.a.createElement("h1",null,"wordMind is a vocabulary builder."),r.a.createElement("br",null),r.a.createElement("br",null),"Making sentences helps us put everything we have learned into action: so you have learned a new word and you understand when to use it. But for the brain to remember this word in the future, the best way to memorize is by using it.",r.a.createElement("br",null),r.a.createElement("br",null))},Y=n(63);function q(){var e=Object(Y.a)(["\n        width: 60%;\n        margin: 0 auto;\n        border: 1px solid #bec0c4;\n        border-radius: 5px;\n        position: absolute;\n        left: 20%;\n        top: 222px;\n        color: #484c54;\n        background-color: #fff;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 0 1em;\n        -webkit-box-shadow: 4px 3px 19px 5px rgba(72, 76, 84, 0.67);\n        -moz-box-shadow: 4px 3px 19px 5px rgba(72, 76, 84, 0.67);\n        box-shadow: 4px 3px 19px 5px rgba(72, 76, 84, 0.67);\n        @media (max-width: 420px) {\n          width: 90%;\n        }\n      "]);return q=function(){return e},e}var G=function(){return Object(m.b)("div",{css:Object(m.a)(q())},Object(m.b)("h1",null,"Hello"),Object(m.b)("button",{className:"mega-phone mega-phone--white"},Object(m.b)("ion-icon",{name:"megaphone"})))},V=function(){return r.a.createElement("div",{className:"main"},r.a.createElement(G,null),r.a.createElement(F,null))},J=n(64),X=function(){return r.a.createElement("footer",{className:J.footer},r.a.createElement("p",null,r.a.createElement("i",{className:"lni lni-home"}),"1234 Fictional Street #5432 New York, NY 10000-0000"),r.a.createElement("p",null,r.a.createElement("i",{className:"lni lni-phone"}),"(000) 000-0000"),r.a.createElement("p",null,r.a.createElement("i",{className:"lni lni-envelope"}),"info@untitled.tld"),r.a.createElement("p",null,"\xa9 wordMind 2020. All rights reserved."))},Q=n(20),Z=n(16),$=n(65),ee=n(43),te=n.n(ee),ne=Object(u.b)((function(e){return console.log(e),{currentUserID:e.auth.userId,isSignedIn:e.auth.isSignedIn,searchResult:e.searchResult}}),{createWord:function(e,t){return function(){var n=Object(g.a)(E.a.mark((function n(a){var r;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P(e,t);case 2:r=n.sent,a({type:"CREATE_USER_WORD",payload:r});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.currentUserID,n=e.isSignedIn,c=e.searchResult,o=e.createWord,u=e.updateVisibility,s=Object(a.useState)(""),l=Object(Q.a)(s,2),i=l[0],d=l[1],m=Object($.a)(i),b=Object(Q.a)(m,1)[0],p=c[0].meta.id;p=p.replace(/[^a-zA-Z]/g,"");return r.a.createElement("div",{className:te.a.word},r.a.createElement("div",{className:te.a.word__header},r.a.createElement("h3",null,p.toUpperCase()),r.a.createElement("button",{className:"mega-phone mega-phone--white",onClick:function(){if(c[0].hwi.prs){var e=function(e){var t,n=e[0].sound.audio,a=n;return t=n.startsWith("bix")?"bix":n.startsWith("gg")?"gg":-1!=="abcdefghijklmnopqrstuvwxyz".indexOf(n)?"number":n[0],"https://media.merriam-webster.com/audio/prons/en/us/mp3/".concat(t,"/").concat(a,".mp3")}(c[0].hwi.prs);d(e)}b()}},r.a.createElement("ion-icon",{name:"megaphone"})),r.a.createElement("button",{className:"".concat(T.a.close," ").concat(T.a.close__saved),onClick:function(){return u()}},r.a.createElement("i",{className:"lni lni-cross-circle"}))),r.a.createElement("div",null,r.a.createElement("p",null,c[0].shortdef)),n?r.a.createElement("button",{className:T.a.bookmark,onClick:function(){return function(){var e={data:Object(Z.a)({},c),sentences:["Write something to get started!"]};o(e,t)}()}},r.a.createElement("i",{className:"lni lni-bookmark"})):null)})),ae=function(e){var t=e.sentence;return r.a.createElement("div",null,r.a.createElement("p",null,t),r.a.createElement("hr",null))},re=n(25),ce=n.n(re),oe=function(e){var t=e.sentences;return r.a.createElement("ul",{className:ce.a.sentenceList},t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(ae,{sentence:e}))})))},ue=Object(u.b)((function(e){return{currentWordID:e.currentWord.id,currentWord:e.currentWord,currentUserID:e.auth.userId}}),{createSentence:function(e,t,n){return function(){var a=Object(g.a)(E.a.mark((function a(r){var c;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,W(e,t,n);case 2:c=a.sent,console.log(c,"reeeeeeesponse"),r({type:"CREATE_SENTENCE",payload:c});case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.currentWordID,n=e.createSentence,c=e.currentWord,o=e.currentUserID,u=Object(a.useState)("Write something and press save!"),s=Object(Q.a)(u,2),l=s[0],i=s[1],d=c.word;return r.a.createElement("div",null,r.a.createElement("h3",null,d.data[0].meta.id),r.a.createElement("div",{className:ce.a.form},c&&d.sentences.length<11?r.a.createElement(r.a.Fragment,null,r.a.createElement("textarea",{maxLength:"300",row:"4",value:l,onChange:function(e){return i(e.target.value)}}),r.a.createElement("button",{className:"".concat(T.a.btn," ").concat(T.a.btn__blue," ").concat(T.a.btn__large),onClick:function(){return function(e){var a=[].concat([l],Object(N.a)(e.sentences));i(""),n(a,t,o)}(d)}},"Save")):r.a.createElement("p",null,"All done. 100% Complete.")),r.a.createElement(oe,{sentences:d.sentences}))})),se=Object(u.b)((function(e){return{currentWord:e.currentWord}}))((function(e){var t=e.currentWord;return r.a.createElement("div",{className:ce.a.practice},r.a.createElement("h3",null,"Write something to begin"),Object.keys(t).length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,null),r.a.createElement(i.b,{to:"/user/word"},r.a.createElement("button",{className:"".concat(T.a.btn," ").concat(T.a.btn__large," ").concat(T.a.btn__white)},"Back"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Whoops Something went wrong, click back to continue"),r.a.createElement(i.b,{to:"/user"},r.a.createElement("button",{className:"".concat(T.a.btn," ").concat(T.a.btn__large," ").concat(T.a.btn__white)},"Back to words"))))})),le=n(44),ie=n.n(le),de=Object(u.b)((function(e){return{currentWord:e.currentWord}}))((function(e){var t=e.currentWord;if(t.id){var n=t.word;return r.a.createElement("div",{className:ie.a.wordCard},r.a.createElement("h3",null,n.data[0].meta.id),r.a.createElement("hr",null),r.a.createElement("p",null,n.data[0].fl),r.a.createElement("hr",null),r.a.createElement("ol",null,n.data[0].shortdef.map((function(e,t){return r.a.createElement("li",{key:t},e,r.a.createElement("hr",null))}))),r.a.createElement("div",{className:ie.a.buttons},r.a.createElement(i.b,{to:"/user",className:"".concat(T.a.btn," ").concat(T.a.btn__large," ").concat(T.a.btn__white)},"Back"),r.a.createElement(i.b,{to:"/user/practice",className:"".concat(T.a.btn," ").concat(T.a.btn__large," ").concat(T.a.btn__white)},"Practice")))}return null})),me=n(45),be=n.n(me),pe=Object(u.b)((function(e){return{word:e.word}}),{searchWord:function(e){return function(){var t=Object(g.a)(E.a.mark((function t(n){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("/".concat(e,"?key=").concat("00d26413-4c94-4f10-bbb1-6ae91fd8b206"));case 2:a=t.sent,console.log(a),n({type:"FETCH_WORD",payload:a.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=Object(a.useState)(""),n=Object(Q.a)(t,2),c=n[0],o=n[1],u=e.searchWord;e.word;return r.a.createElement("div",null,r.a.createElement("h2",{className:be.a.formHeader},"Search through the dictionary to begin."),r.a.createElement("form",{className:be.a.search,onSubmit:function(e){return function(e){e.preventDefault(),u(c),o("")}(e)}},r.a.createElement("input",{value:c,onChange:function(e){return o(e.target.value)},placeholder:"Search for a word..."})))})),_e=function(e){for(var t=e.itemsPerPage,n=e.totalItems,a=e.paginate,c=[],o=1;o<=Math.ceil(n/t);o++)c.push(o);return r.a.createElement("nav",null,r.a.createElement("ul",null,c.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement("button",{className:"".concat(T.a.btn," ").concat(T.a.btn__white," ").concat(T.a.btn__small),onClick:function(){return a(e)}},e))}))))},fe=n(46),he=n.n(fe),Ee=Object(u.b)((function(e){return{currentUserID:e.auth.userId}}),{setUserWord:function(e,t){return function(){var n=Object(g.a)(E.a.mark((function n(a){var r;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C(e,t);case 2:r=n.sent,console.log(r),a({type:"SET_USER_WORD",payload:r});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.word,n=e.setUserWord,a=e.currentUserID,c=t.word;return r.a.createElement("div",{className:he.a.listitem},r.a.createElement("h3",null,c.data[0].meta.id),r.a.createElement("p",null,c.data[0].hwi.hw),r.a.createElement("hr",null),r.a.createElement("div",{className:he.a.buttons},r.a.createElement(i.b,{to:"/user/word"},r.a.createElement("button",{className:"".concat(T.a.btn," ").concat(T.a.btn__medium," ").concat(T.a.btn__blue," "),onClick:function(){return function(e,t,n){t(e.id,n)}(t,n,a)}},"Learn More")),r.a.createElement("button",{className:"".concat(T.a.bookmark," ").concat(T.a.bookmark__saved),onClick:function(){return console.log("clicked")}},r.a.createElement("i",{className:"lni lni-cross-circle"}))))})),ge=function(e){Object(_.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={currentPage:1,itemsPerPage:6},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchWords(this.props.currentUserID)}},{key:"renderList",value:function(e){return e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(Ee,{word:e}))}))}},{key:"paginate",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){var e=this.state.currentPage*this.state.itemsPerPage,t=e-this.state.itemsPerPage,n=this.props.words.slice(t,e);return console.log(n),r.a.createElement(r.a.Fragment,null,r.a.createElement(pe,null),r.a.createElement("h4",null,"Your saved words"),r.a.createElement("ul",null,this.renderList(n)),r.a.createElement(_e,{itemsPerPage:this.state.itemsPerPage,totalItems:this.props.words.length,paginate:this.paginate.bind(this)}))}}]),n}(a.Component),ve=Object(u.b)((function(e){return{words:e.words,currentUserID:e.auth.userId}}),{fetchWords:function(e){return function(){var t=Object(g.a)(E.a.mark((function t(n){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:a=t.sent,n({type:"FETCH_USER_WORDS",payload:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(ge),we=n(66),Oe=Object(u.b)((function(e){return console.log("state from user page",e),{isSignedIn:e.auth.isSignedIn,userName:e.auth.userName,currentWord:e.searchResult}}))((function(e){var t=e.isSignedIn,n=e.userName,c=e.currentWord,o=Object(a.useState)(!0),u=Object(Q.a)(o,2),s=u[0],l=u[1];Object(a.useEffect)((function(){m()}),[c]);var m=function(){l(!s)};return r.a.createElement(i.a,null,r.a.createElement("section",{className:"user-main"},t?r.a.createElement("div",{className:we.userPage},r.a.createElement("h1",null,"Hello, ",n),c.length&&s?r.a.createElement(ne,{updateVisibility:m}):null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/user/practice"},r.a.createElement(se,null)),r.a.createElement(d.a,{path:"/user/word"},r.a.createElement(de,null)),r.a.createElement(d.a,{path:"/user"},r.a.createElement(ve,null)))):r.a.createElement("div",null,"Must be signed in.")))})),Se=(n(104),Object(u.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}))((function(e){var t=e.isSignedIn;return r.a.createElement("div",{className:"action-buttons"},r.a.createElement("h4",null,"Sign up to get started."),t?r.a.createElement(z,null):null,r.a.createElement(D,null))})));var Ie=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(M,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/user"},r.a.createElement(Oe,null)),r.a.createElement(d.a,{path:"/"},r.a.createElement(V,null))),r.a.createElement(Se,null),r.a.createElement(X,null)))},je={isSignedIn:null,userId:null},ye=[],ke=[],Ne=Object(l.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return console.log(t.payload),Object(Z.a)(Object(Z.a)({},e),{},{isSignedIn:!0,userId:t.payload.userId,userName:t.payload.userName,avatarLink:t.payload.avatarLink});case"SIGN_OUT":return Object(Z.a)(Object(Z.a)({},e),{},{isSignedIn:!1,userId:null});default:return e}},searchResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_WORD":return Object(N.a)(t.payload);default:return e}},words:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_USER_WORD":return[].concat(Object(N.a)(e),[t.payload]);case"FETCH_USER_WORDS":return Object(N.a)(t.payload);default:return e}},currentWord:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_WORD":return console.log("words reducer",t.payload),Object(Z.a)(Object(Z.a)({},e),t.payload);case"CREATE_SENTENCE":return console.log("new sentence",t.payload),Object(Z.a)(Object(Z.a)({},e),t.payload);default:return e}}}),xe=Object(l.d)(Ne,Object(l.a)(s.a));o.a.render(r.a.createElement(u.a,{store:xe},r.a.createElement(Ie,null)),document.getElementById("root"))},2:function(e,t,n){e.exports={bookmark:"Buttons_bookmark__20M4a",megaphone:"Buttons_megaphone__2i34g",bookmark__saved:"Buttons_bookmark__saved__2K2Cp",megaphone__saved:"Buttons_megaphone__saved__22VSi",close:"Buttons_close__3LtTo",btn:"Buttons_btn__1XKS1",btn__blue:"Buttons_btn__blue__-zucF",btn__white:"Buttons_btn__white__3AGrL",btn__transparent:"Buttons_btn__transparent__1WNEI",btn__transparent_blue:"Buttons_btn__transparent_blue__27dPu",btn__large:"Buttons_btn__large__3JRYh",btn__medium:"Buttons_btn__medium__2xHxX",btn__small:"Buttons_btn__small__uqR8h"}},25:function(e,t,n){e.exports={practice:"Sentences_practice__WTWjc",form:"Sentences_form__c8ft_",sentenceList:"Sentences_sentenceList__HXnCE"}},43:function(e,t,n){e.exports={word:"SearchResult_word__2il2Y",word__header:"SearchResult_word__header__b-pcJ"}},44:function(e,t,n){e.exports={wordCard:"WordCard_wordCard__3bU3y",buttons:"WordCard_buttons__3AqJo"}},45:function(e,t,n){e.exports={search:"Search_search__3B9tV",formHeader:"Search_formHeader__3L_gT"}},46:function(e,t,n){e.exports={listitem:"WordListItem_listitem__2qvo6",buttons:"WordListItem_buttons__2Jf3w"}},60:function(e,t,n){e.exports=n.p+"static/media/logo.b313e914.png"},61:function(e,t,n){e.exports={nav:"Header_nav__1jaa4"}},62:function(e,t,n){e.exports={avatar:"Avatar_avatar__3zWgu"}},64:function(e,t,n){e.exports={footer:"Footer_footer__147lR"}},66:function(e,t,n){e.exports={userPage:"UserPage_userPage__zKvhQ"}},67:function(e,t,n){e.exports=n(105)}},[[67,1,2]]]);
//# sourceMappingURL=main.75c4e658.chunk.js.map