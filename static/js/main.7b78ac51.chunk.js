(this.webpackJsonpwow=this.webpackJsonpwow||[]).push([[0],{1085:function(e,t){},1152:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(224),i=n.n(a),c=n(36),o=n(116),s=n(28),l=n(521),d=n(531),b=n(12),j=n(2),u=n.n(j),p=n(37),h=n(523),m=n(4);var x=function(){var e=Object(c.d)(),t=e.Moralis,n=e.isWeb3Enabled,a=e.enableWeb3,i=e.account,o=e.chainId,s=Object(c.c)().switchNetwork;function d(){return(d=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 43113,"Avalanche FUJI C-Chain","AVAX","AVAX","https://api.avax-test.network/ext/bc/C/rpc","https://testnet.snowtrace.io/",n||a(),e.next=9,t.addNetwork(43113,"Avalanche FUJI C-Chain","AVAX","AVAX","https://api.avax-test.network/ext/bc/C/rpc","https://testnet.snowtrace.io/");case 9:return e.next=11,s("0xa869");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){n||a()}),[]),Object(m.jsx)(l.b,{children:Object(m.jsxs)(l.c,{height:"30px",py:10,borderRadius:"lg",children:[Object(m.jsxs)(l.b,{mx:5,children:[Object(m.jsx)(l.l,{bgGradient:"radial(pink.600, red.800)",bgClip:"text",fontSize:"3xl",fontWeight:"extrabold",children:"AVADoma"}),Object(m.jsx)(l.l,{bgGradient:"radial(pink.500, red.900)",bgClip:"text",fontWeight:"extrabold",fontSize:"xs",children:"beta testnet"})]}),Object(m.jsx)(l.e,{orientation:"vertical",width:"100%"}),Object(m.jsx)(l.b,{mx:5,fontSize:15,children:n?Object(m.jsxs)(m.Fragment,{children:[" ","0xa869"!==o?Object(m.jsxs)(h.a,{onClick:function(){return function(){return d.apply(this,arguments)}()},colorScheme:"red",size:"xs",isFullWidth:!0,children:[Object(m.jsx)(p.a,{mr:1})," AVAX"]}):Object(m.jsx)(l.a,{variant:"outline",colorScheme:"red",p:1,border:"none",shadow:"none",children:Object(m.jsxs)(l.l,{fontSize:"sm",children:[(i||"").slice(0,3),"...",(i||"").slice(-3),Object(m.jsx)(p.e,{ml:2,my:1,fontSize:"lg"})]})})]}):Object(m.jsxs)(h.a,{onClick:function(){a()},colorScheme:"red",size:"xs",isFullWidth:!0,children:[Object(m.jsx)(p.i,{mr:2,fontSize:16}),"Connect"]})})]})})},O=n(261),f=n(85),y="0xdD7a57EeF66251Bc77B8cC03faBFAcC026099b65";var g=function(){var e=Object(c.d)(),t=e.isWeb3Enabled,n=e.enableWeb3,a=Object(c.c)().switchNetwork,i=Object(r.useState)("xx.xxx"),o=Object(s.a)(i,2),d=o[0],j=o[1],x=["ex","hi","xx","qq","av","go"],g=["dapp","web3","gamefi","defi","ava","ipfs"],S=Object(r.useState)(""),w=Object(s.a)(S,2),v=w[0],k=w[1],T=Object(r.useState)(""),C=Object(s.a)(T,2),A=C[0],_=C[1],F=Object(r.useState)(""),z=Object(s.a)(F,2),W=z[0],D=z[1],M=Object(c.b)({abi:f,address:y,functionName:"getLotteryCount",chain:"avalanche testnet"}),I=M.runContractFunction,N=M.data,R=Object(c.e)(),E=R.data,L=R.error,V=R.fetch,J=R.isFetching,X=R.isLoading;function G(){return(G=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t||n(),e.next=3,a("0xa869");case 3:return e.next=5,V({params:{abi:f,contractAddress:y,functionName:"regInLottery",params:{}}});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return P.apply(this,arguments)}function P(){return(P=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){function e(e){return parseInt("".concat(e),10)>=0&&parseInt("".concat(e),10)<10?"0".concat(e):"".concat(e)}setInterval((function(){j("".concat(x[Math.floor(Math.random()*x.length)],".").concat(g[Math.floor(Math.random()*g.length)]))}),1e3),setInterval((function(){var t=new Date;D(e(23-t.getHours())),_(e(59-t.getMinutes())),k(e(59-t.getSeconds()))}),1e3)}()}),[]),Object(r.useEffect)((function(){B()}),[E,L]),Object(m.jsxs)(l.b,{children:[Object(m.jsxs)(l.c,{fontSize:"xxx-large",fontFamily:"monospace",fontWeight:"extrabold",mb:5,children:[Object(m.jsx)(l.b,{as:"span",padding:10,backgroundColor:"red.900",borderRadius:10,py:5,px:7,borderColor:"pink.900",borderBottomWidth:5,children:W}),":",Object(m.jsx)(l.b,{as:"span",padding:10,backgroundColor:"red.900",borderRadius:10,py:5,px:7,borderColor:"pink.900",borderBottomWidth:5,children:A}),":",Object(m.jsx)(l.b,{as:"span",padding:10,backgroundColor:"red.900",borderRadius:10,py:5,px:7,borderColor:"pink.900",borderBottomWidth:5,children:v})]}),Object(m.jsxs)(l.c,{my:5,fontSize:"x-large",fontWeight:"extrabold",color:"red.900",children:[!N||Object(m.jsx)(h.b,{"aria-label":"Update",icon:Object(m.jsx)(p.g,{}),onClick:function(){B()},size:"xs",colorScheme:"pink",backgroundColor:"red.800",color:"red.500",mr:2})," ",N&&Object(m.jsx)(l.b,{as:"span",padding:5,backgroundColor:"red.900",borderRadius:5,py:1,px:3,mx:2,color:"red.500",children:N})||Object(m.jsx)(h.b,{"aria-label":"Update",icon:Object(m.jsx)(p.g,{}),onClick:function(){B()},size:"xs",colorScheme:"pink",backgroundColor:"red.800",color:"red.500",mr:2})," ","participant(s)"," "]}),Object(m.jsxs)(l.b,{backgroundColor:"pink.900",borderRadius:"xl",p:10,children:[Object(m.jsxs)(l.l,{mb:5,textAlign:"center",bgGradient:"linear(to-r, pink.400, red.400)",bgClip:"text",children:["Every day a random domain name ",Object(m.jsx)("br",{}),Object(m.jsx)(l.a,{colorScheme:"red",variant:"outline",children:"FREE"})," ",Object(m.jsx)(l.a,{colorScheme:"pink",variant:"outline",children:d}),Object(m.jsx)("br",{}),"is drawn in the lottery."]}),J||X?Object(m.jsx)(h.a,{colorScheme:"red",size:"lg",fontSize:"lg",isFullWidth:!0,py:10,disabled:!0,children:Object(m.jsx)(O.a,{color:"red.100"})}):Object(m.jsxs)(m.Fragment,{children:[" ",L?Object(m.jsx)(h.a,{colorScheme:"red",size:"lg",fontSize:"lg",isFullWidth:!0,py:10,disabled:!0,children:"ERROR TRANSACTION"}):Object(m.jsxs)(m.Fragment,{children:[" ",E?Object(m.jsx)(h.a,{colorScheme:"red",size:"lg",fontSize:"lg",isFullWidth:!0,py:10,disabled:!0,children:"TRANSACTION SENDED"}):Object(m.jsxs)(h.a,{colorScheme:"red",size:"lg",fontSize:"lg",isFullWidth:!0,py:10,onClick:function(){!function(){G.apply(this,arguments)}()},children:["FREE PARTICIPATION",Object(m.jsx)(l.b,{fontSize:"xs",ml:2,color:"red.300",children:"(only gas)"})]})]})]})]})]})},S=n(23),w=n(524),v=n(525),k=n(526),T=n(527),C=n(530),A=n(528),_=["ava","web3","dapp","ipfs","defi","gamefi"];var F=function(){var e=Object(c.d)(),t=e.isWeb3Enabled,n=e.enableWeb3,a=Object(c.c)(),i=a.switchNetwork,o=a.chainId,d=Object(S.f)(),j=d.isOpen,x=d.onOpen,g=d.onClose,F=Object(r.useState)(""),z=Object(s.a)(F,2),W=z[0],D=z[1],M=Object(r.useState)("2"),I=Object(s.a)(M,2),N=I[0],R=I[1],E=Object(r.useState)(""),L=Object(s.a)(E,2),V=L[0],J=L[1],X=Object(r.useState)(5),G=Object(s.a)(X,2),B=G[0],P=G[1],H=Object(r.useState)("500000000000000000"),U=Object(s.a)(H,2),Q=U[0],K=U[1],Y=Object(S.b)(),q=Object(s.a)(Y,2),Z=q[0],$=q[1],ee=Object(S.b)(!0),te=Object(s.a)(ee,2),ne=te[0],re=te[1],ae=Object(r.useState)(!1),ie=Object(s.a)(ae,2),ce=ie[0],oe=ie[1],se=Object(c.b)({abi:f,address:y,functionName:"getId",chain:"avalanche testnet",params:{_domain:"".concat(W,".").concat(_[parseInt(N,10)])}}),le=se.runContractFunction,de=se.data,be=se.isLoading,je=se.isFetching,ue=Object(c.b)({abi:f,address:y,functionName:"domains",chain:"avalanche testnet",params:{id:de}}),pe=ue.runContractFunction,he=ue.data,me=ue.isLoading,xe=ue.isFetching,Oe=Object(c.e)(),fe=Oe.data,ye=Oe.fetch,ge=Oe.isFetching,Se=Oe.isLoading;function we(){return(we=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t||n(),e.next=3,i("0xa869");case 3:return e.next=5,ye({params:{abi:f,contractAddress:y,functionName:"registerDomain",msgValue:Q,params:{_tld:N,_hostname:W,_ipfs:V}}});case 5:re.on();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ve(){return ke.apply(this,arguments)}function ke(){return(ke=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if($.off(),J(""),!W){e.next=5;break}return e.next=5,le();case 5:re.off();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){"close"!==(localStorage.getItem("help")||"")&&x()}),[]),Object(r.useEffect)((function(){if(W&&W.length){var e=W.length;e<=1?K((10*B*Math.pow(10,18)).toString()):e<=3?K((B*Math.pow(10,18)).toString()):e<=5?K((.1*B*Math.pow(10,18)).toString()):e<=63&&K((.01*B*Math.pow(10,18)).toString())}}),[W,B]),Object(r.useEffect)((function(){ve()}),[N]),Object(r.useEffect)((function(){de&&"0"!==de&&function(){var e=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[de]),Object(m.jsxs)(l.d,{children:[Object(m.jsxs)(l.b,{children:[Object(m.jsx)(l.b,{mb:5,textAlign:"center",children:Object(m.jsx)(l.l,{bgGradient:"radial(pink.400, red.800)",bgClip:"text",fontSize:"3xl",fontWeight:"extrabold",children:W?"".concat(W,".").concat(_[parseInt(N,10)]):Object(m.jsx)(l.l,{as:"span",onClick:x,cursor:"pointer",children:"How It Works?"})})}),Object(m.jsxs)(l.k,{direction:["row"],children:[Object(m.jsx)(w.a,{value:W,onChange:function(e){$.on();var t=e.target.value;_.forEach((function(e,n){t.indexOf(".".concat(e))+1&&(t=t.replace(".".concat(e),""),R("".concat(n)))})),D(t)},placeholder:"example",spellCheck:"false",color:"white",borderColor:"red.400",_placeholder:{color:"pink.700"},_focus:{boxShadow:"none"},_hover:{borderColor:"red.300"}}),be||je?Object(m.jsx)(h.a,{disabled:!0,rightIcon:Object(m.jsx)(O.a,{color:"red.100"}),onClick:function(){ve()},px:5,colorScheme:"red",children:"Search"}):Object(m.jsx)(h.a,{rightIcon:Object(m.jsx)(p.h,{ml:2}),onClick:function(){ve()},px:5,colorScheme:"red",children:"Search"})]}),Object(m.jsx)(l.b,{children:Object(m.jsx)(v.b,{my:5,defaultValue:N,onChange:R,value:N,children:Object(m.jsx)(l.k,{spacing:"auto",direction:"row",children:_.map((function(e,t){return Object(m.jsxs)(v.a,{colorScheme:"red",value:"".concat(t),children:[".",e]},e)}))})})}),!Z&&W&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(l.b,{children:me||xe?Object(m.jsx)(h.a,{isFullWidth:!0,disabled:!0,colorScheme:"red",children:Object(m.jsx)(O.a,{color:"red.100"})}):de&&"0"!==de&&he&&Object(m.jsxs)(m.Fragment,{children:[" ",JSON.parse(JSON.stringify(he)).ipfs?Object(m.jsx)(h.a,{as:"a",href:"https://ipfs.io/ipfs/".concat(JSON.parse(JSON.stringify(he)).ipfs),target:"_blank",colorScheme:"red",isFullWidth:!0,children:JSON.parse(JSON.stringify(he)).ipfs}):Object(m.jsx)(h.a,{isDisabled:!0,colorScheme:"red",isFullWidth:!0,children:"NOT HAVE CID IPFS"})]})}),ge||Se?Object(m.jsx)(l.c,{my:5,children:Object(m.jsx)(O.a,{size:"xl",color:"red.500"})}):Object(m.jsxs)(m.Fragment,{children:[" ",fe&&ne?Object(m.jsx)(l.c,{my:5,children:"Domain transaction registered"}):Object(m.jsxs)(m.Fragment,{children:[" ",de&&"0"===de&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(l.b,{children:Object(m.jsxs)(w.b,{colorScheme:"red",children:[Object(m.jsx)(w.c,{color:"white",borderColor:"red.400",backgroundColor:"pink.700",children:"ipfs://"}),Object(m.jsx)(w.a,{value:V,onChange:function(e){return J(e.target.value)},placeholder:"QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco",spellCheck:"false",color:"white",borderColor:"red.400",_placeholder:{color:"pink.700"},_focus:{boxShadow:"none"},_hover:{borderColor:"red.300"}})]})}),Object(m.jsx)(l.b,{children:Object(m.jsxs)(k.a,{id:"slider",my:5,defaultValue:B,min:1,max:10,colorScheme:"pink",onChange:P,onMouseEnter:function(){return oe(!0)},onMouseLeave:function(){return oe(!1)},children:[Object(m.jsx)(k.c,{value:1,mt:"1",ml:"-2.5",fontSize:"sm",children:"1"}),Object(m.jsx)(k.c,{value:2,mt:"1",ml:"-2.5",fontSize:"sm",children:"2"}),Object(m.jsx)(k.c,{value:3,mt:"1",ml:"-2.5",fontSize:"sm",children:"3"}),Object(m.jsx)(k.c,{value:4,mt:"1",ml:"-2.5",fontSize:"sm",children:"4"}),Object(m.jsx)(k.c,{value:5,mt:"1",ml:"-2.5",fontSize:"sm",children:"5 years"}),Object(m.jsx)(k.c,{value:6,mt:"1",ml:"-2.5",fontSize:"sm",children:"6"}),Object(m.jsx)(k.c,{value:7,mt:"1",ml:"-2.5",fontSize:"sm",children:"7"}),Object(m.jsx)(k.c,{value:8,mt:"1",ml:"-2.5",fontSize:"sm",children:"8"}),Object(m.jsx)(k.c,{value:9,mt:"1",ml:"-2.5",fontSize:"sm",children:"9"}),Object(m.jsx)(k.c,{value:10,mt:"1",ml:"-2.5",fontSize:"sm",children:"10"}),Object(m.jsx)(k.e,{children:Object(m.jsx)(k.b,{})}),Object(m.jsx)(T.a,{hasArrow:!0,bg:"red.500",color:"white",placement:"top",isOpen:ce,label:"".concat((parseInt(Q,10)/Math.pow(10,18)).toFixed(2)," AVAX"),children:Object(m.jsx)(k.d,{})})]})}),Object(m.jsx)(l.b,{children:Object(m.jsx)(h.a,{rightIcon:Object(m.jsx)(p.c,{}),isFullWidth:!0,mt:5,onClick:function(){!function(){we.apply(this,arguments)}()},colorScheme:"red",disabled:!V,children:"0xa869"===o?Object(m.jsxs)(m.Fragment,{children:["Register ",(parseInt(Q,10)/Math.pow(10,18)).toFixed(2)," AVAX"]}):"Switch Network"})})]})]})]})]})]}),Object(m.jsxs)(C.a,{onClose:function(){localStorage.setItem("help","close"),g()},isOpen:j,isCentered:!0,children:[Object(m.jsx)(C.g,{}),Object(m.jsxs)(C.d,{bgGradient:"linear(to-r, pink.900, red.900)",color:"red.100",children:[Object(m.jsx)(C.f,{children:"How It Works?"}),Object(m.jsx)(C.c,{}),Object(m.jsx)(C.b,{children:Object(m.jsxs)(l.h,{spacing:3,children:[Object(m.jsxs)(l.j,{children:[Object(m.jsx)(l.i,{as:p.e,color:"green.500"}),"Add browser extension"," ",Object(m.jsxs)(l.g,{href:"https://metamask.io/",target:"_blank",children:["MetaMask ",Object(m.jsx)(p.f,{mx:"2px"})]})," ","and"," ",Object(m.jsx)(l.a,{colorScheme:"red",variant:"outline",children:"AVADoma"}),Object(m.jsxs)(l.f,{mt:5,children:[Object(m.jsxs)(h.a,{as:"a",colorScheme:"red",isFullWidth:!0,href:"https://github.com/AVADoma/Extensions/archive/refs/heads/main.zip",children:[Object(m.jsx)(A.a,{borderRadius:"full",boxSize:"20px",src:"chrome.png",alt:"Chrome",mr:1}),"Chrome"]}),Object(m.jsxs)(h.a,{disabled:!0,isFullWidth:!0,color:"white",backgroundColor:"yellow.700",_hover:{color:"white",backgroundColor:"yellow.700"},children:[Object(m.jsx)(A.a,{borderRadius:"full",boxSize:"20px",src:"firefox.png",alt:"Firefox",mr:1}),"Firefox"]}),Object(m.jsxs)(h.a,{disabled:!0,colorScheme:"blue",isFullWidth:!0,children:[Object(m.jsx)(A.a,{borderRadius:"full",boxSize:"20px",src:"safari.png",alt:"Safari",mr:1}),"Safari"]})]})]}),Object(m.jsxs)(l.j,{children:[Object(m.jsx)(l.i,{as:p.e,color:"green.500"}),"Get some free AVAX (fuji) -"," ",Object(m.jsxs)(l.g,{href:"https://faucet.avax-test.network/",target:"_blank",children:["faucet ",Object(m.jsx)(p.f,{mx:"2px"})]})]}),Object(m.jsxs)(l.j,{children:[Object(m.jsx)(l.i,{as:p.e,color:"green.500"}),"Register your new domain name"]})]})}),Object(m.jsx)(C.e,{children:" "})]})]})]})},z=["ava","web3","dapp","ipfs","defi","gamefi"];var W=function(){var e=Object(c.d)(),t=e.isWeb3Enabled,n=e.enableWeb3,a=e.account,i=Object(c.c)(),o=i.switchNetwork,d=i.chainId,j=Object(S.f)(),x=j.isOpen,g=j.onOpen,k=j.onClose,T=Object(r.useState)(""),A=Object(s.a)(T,2),_=A[0],F=A[1],W=Object(r.useState)("2"),D=Object(s.a)(W,2),M=D[0],I=D[1],N=Object(r.useState)(""),R=Object(s.a)(N,2),E=R[0],L=R[1],V=Object(S.b)(),J=Object(s.a)(V,2),X=J[0],G=J[1],B=Object(S.b)(!0),P=Object(s.a)(B,2),H=P[0],U=P[1],Q=Object(c.b)({abi:f,address:y,functionName:"getId",chain:"avalanche testnet",params:{_domain:"".concat(_,".").concat(z[parseInt(M,10)])}}),K=Q.runContractFunction,Y=Q.data,q=Q.isLoading,Z=Q.isFetching,$=Object(c.b)({abi:f,address:y,functionName:"domains",chain:"avalanche testnet",params:{id:Y}}),ee=$.runContractFunction,te=$.data,ne=$.isLoading,re=$.isFetching,ae=Object(c.e)(),ie=ae.data,ce=ae.fetch,oe=ae.isFetching,se=ae.isLoading;function le(){return(le=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t||n(),e.next=3,o("0xa869");case 3:return e.next=5,ce({params:{abi:f,contractAddress:y,functionName:"transferDomain",msgValue:JSON.parse(JSON.stringify(te||"{}")).price,params:{_tld:M,_hostname:_,_ipfs:E}}});case 5:U.on();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(){return be.apply(this,arguments)}function be(){return(be=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(G.off(),L(""),!_){e.next=5;break}return e.next=5,K();case 5:U.off();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){de()}),[M]),Object(r.useEffect)((function(){Y&&"0"!==Y&&function(){var e=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[Y]),Object(m.jsxs)(l.d,{children:[Object(m.jsxs)(l.b,{children:[Object(m.jsx)(l.b,{mb:5,textAlign:"center",children:Object(m.jsx)(l.l,{bgGradient:"radial(pink.400, red.800)",bgClip:"text",fontSize:"3xl",fontWeight:"extrabold",children:_?"".concat(_,".").concat(z[parseInt(M,10)]):Object(m.jsx)(l.l,{as:"span",onClick:g,cursor:"pointer",children:"How It Works?"})})}),Object(m.jsxs)(l.k,{direction:["row"],children:[Object(m.jsx)(w.a,{value:_,onChange:function(e){G.on();var t=e.target.value;z.forEach((function(e,n){t.indexOf(".".concat(e))+1&&(t=t.replace(".".concat(e),""),I("".concat(n)))})),F(t)},placeholder:"example",spellCheck:"false",color:"white",borderColor:"red.400",_placeholder:{color:"pink.700"},_focus:{boxShadow:"none"},_hover:{borderColor:"red.300"}}),q||Z?Object(m.jsx)(h.a,{disabled:!0,rightIcon:Object(m.jsx)(O.a,{color:"red.100"}),onClick:function(){de()},px:5,colorScheme:"red",children:"Search"}):Object(m.jsx)(h.a,{rightIcon:Object(m.jsx)(p.h,{ml:2}),onClick:function(){de()},px:5,colorScheme:"red",children:"Search"})]}),Object(m.jsx)(l.b,{children:Object(m.jsx)(v.b,{my:5,defaultValue:M,onChange:I,value:M,children:Object(m.jsx)(l.k,{spacing:"auto",direction:"row",children:z.map((function(e,t){return Object(m.jsxs)(v.a,{colorScheme:"red",value:"".concat(t),children:[".",e]},e)}))})})}),!X&&_&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(l.b,{children:ne||re?Object(m.jsx)(h.a,{isFullWidth:!0,disabled:!0,colorScheme:"red",children:Object(m.jsx)(O.a,{color:"red.100"})}):Y&&"0"!==Y&&te&&JSON.parse(JSON.stringify(te)).transfer.toLowerCase()!==(a||"").toLowerCase()&&Object(m.jsx)(h.a,{as:"a",href:"https://ipfs.io/ipfs/".concat(JSON.parse(JSON.stringify(te)).ipfs),target:"_blank",colorScheme:"red",isFullWidth:!0,children:JSON.parse(JSON.stringify(te)).ipfs})}),oe||se?Object(m.jsx)(l.c,{my:5,children:Object(m.jsx)(O.a,{size:"xl",color:"red.500"})}):Object(m.jsxs)(m.Fragment,{children:[" ",ie&&H?Object(m.jsx)(l.c,{my:5,children:"Domain transaction registered"}):Object(m.jsxs)(m.Fragment,{children:[" ",Y&&"0"!==Y&&te&&JSON.parse(JSON.stringify(te)).transfer.toLowerCase()===(a||"").toLowerCase()&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(l.b,{children:Object(m.jsxs)(w.b,{colorScheme:"red",children:[Object(m.jsx)(w.c,{color:"white",borderColor:"red.400",backgroundColor:"pink.700",children:"ipfs://"}),Object(m.jsx)(w.a,{onChange:function(e){return L(e.target.value)},placeholder:"QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco",spellCheck:"false",color:"white",borderColor:"red.400",_placeholder:{color:"pink.700"},_focus:{boxShadow:"none"},_hover:{borderColor:"red.300"}})]})}),Object(m.jsx)(l.b,{children:Object(m.jsx)(h.a,{rightIcon:Object(m.jsx)(p.c,{}),isFullWidth:!0,mt:5,onClick:function(){!function(){le.apply(this,arguments)}()},colorScheme:"red",disabled:!E,children:"0xa869"===d?Object(m.jsxs)(m.Fragment,{children:["Get domain name"," ",(parseInt(JSON.parse(JSON.stringify(te)).price,10)/Math.pow(10,18)).toFixed(2)," ","AVAX"]}):"Switch Network"})})]})]})]})]})]}),Object(m.jsxs)(C.a,{onClose:k,isOpen:x,isCentered:!0,children:[Object(m.jsx)(C.g,{}),Object(m.jsxs)(C.d,{bgGradient:"linear(to-r, pink.900, red.900)",color:"red.100",children:[Object(m.jsx)(C.f,{children:"How It Works?"}),Object(m.jsx)(C.c,{}),Object(m.jsx)(C.b,{children:Object(m.jsxs)(l.h,{spacing:3,children:[Object(m.jsxs)(l.j,{children:[Object(m.jsx)(l.i,{as:p.e,color:"green.500"}),"Domain names can be"," ",Object(m.jsx)(l.a,{colorScheme:"red",variant:"outline",children:"transferred"})," ","and"," ",Object(m.jsx)(l.a,{colorScheme:"pink",variant:"outline",children:"sold"})," ","from user to user."]}),Object(m.jsxs)(l.j,{children:[Object(m.jsx)(l.i,{as:p.e,color:"green.500"}),"In the"," ",Object(m.jsx)(l.a,{colorScheme:"red",variant:"outline",children:"Transfer"})," ","field, specify the address of the new domain owner, and price you want to get for this domain name"]}),Object(m.jsxs)(l.j,{children:[Object(m.jsx)(l.i,{as:p.e,color:"green.500"}),"The new owner pays the specified price and receives the domain name"]})]})}),Object(m.jsx)(C.e,{children:" "})]})]})]})},D=n(529),M=["ava","web3","dapp","ipfs","defi","gamefi"];function I(e){var t=e.timestamp,n=e.plus,r=new Date(1e3*parseInt(t,10));if(n){var a=r.getFullYear(),i=r.getMonth(),c=r.getDate();r=new Date(a,i,c+365*n)}return"".concat(r.getDate()<10?"0".concat(r.getDate()):r.getDate(),"/").concat(r.getMonth()+1<10?"0".concat(r.getMonth()+1):r.getMonth()+1,"/").concat(r.getFullYear())}function N(e){var t=Object(s.a)(e.domain,8),n=t[0],a=t[1],i=t[2],o=t[4],d=t[5],j=t[7],x=Object(c.d)(),g=x.isWeb3Enabled,S=x.enableWeb3,v=Object(c.c)().switchNetwork,C="".concat(a,".").concat(M[parseInt(n,10)]),A=Object(r.useState)(i),_=Object(s.a)(A,2),F=_[0],z=_[1],W=Object(r.useState)(o),N=Object(s.a)(W,2),R=N[0],E=N[1],L=Object(r.useState)(d),V=Object(s.a)(L,2),J=V[0],X=V[1],G=Object(r.useState)(0),B=Object(s.a)(G,2),P=B[0],H=B[1],U=Object(r.useState)("0"),Q=Object(s.a)(U,2),K=Q[0],Y=Q[1],q=Object(r.useState)(!1),Z=Object(s.a)(q,2),$=Z[0],ee=Z[1],te=Object(c.e)(),ne=te.data,re=te.fetch,ae=te.isFetching,ie=te.isLoading,ce=te.error;function oe(){return(oe=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(K,n,a,F,R,J),g||S(),e.next=4,v("0xa869");case 4:return e.next=6,re({params:{abi:f,contractAddress:y,functionName:"updateDomain",msgValue:K,params:{_tld:n,_hostname:a,_ipfs:F,_transfer:R||"0x000000000000000000000000000000000000dEaD",_price:"".concat(J&&"0"===J?"1":J)}}});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){if(a&&a.length){var e=a.length;e<=1?Y((10*P*Math.pow(10,18)).toString()):e<=3?Y((P*Math.pow(10,18)).toString()):e<=5?Y((.1*P*Math.pow(10,18)).toString()):e<=63&&Y((.01*P*Math.pow(10,18)).toString())}}),[P]),Object(m.jsxs)(D.d,{border:0,my:3,children:[Object(m.jsx)("h2",{children:Object(m.jsxs)(D.b,{bgGradient:"linear(to-r, red.700, pink.800)",borderRadius:"md",_hover:{bgGradient:"linear(to-r, red.600, pink.700)"},children:[Object(m.jsxs)(l.b,{flex:"1",textAlign:"left",isTruncated:!0,children:[Object(m.jsx)(p.c,{mr:5,fontSize:"2xl"}),C]}),Object(m.jsx)(D.c,{})]})}),Object(m.jsxs)(D.e,{pb:4,children:[Object(m.jsxs)(l.c,{py:5,bgGradient:"linear(to-r, pink.800, pink.700)",borderRadius:"md",mb:5,children:[Object(m.jsx)(l.l,{fontWeight:"extrabold",children:Object(m.jsx)(l.g,{color:"white",href:"http://".concat(C),target:"_blank",children:C})}),Object(m.jsx)(p.d,{mx:5}),Object(m.jsx)(l.l,{fontWeight:"extrabold",children:Object(m.jsxs)(l.g,{color:"white",href:"https://dweb.link/ipfs/".concat(F),target:"_blank",children:["ipfs://",(F||[]).slice(0,3),"...",(F||[]).slice(-3)]})})]}),Object(m.jsx)(l.b,{my:5,children:Object(m.jsxs)(w.b,{colorScheme:"red",children:[Object(m.jsx)(w.c,{color:"white",borderColor:"red.400",backgroundColor:"pink.700",children:"ipfs://"}),Object(m.jsx)(w.a,{value:F,onChange:function(e){z(e.target.value)},placeholder:"QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco",spellCheck:"false",color:"white",borderColor:"red.400",_placeholder:{color:"pink.700"},_focus:{boxShadow:"none"},_hover:{borderColor:"red.300"}})]})}),Object(m.jsx)(l.b,{my:5,children:Object(m.jsxs)(w.b,{colorScheme:"red",children:[Object(m.jsx)(w.c,{color:"white",borderColor:"red.400",backgroundColor:"pink.700",children:"Transfer for"}),Object(m.jsx)(w.a,{value:R,onChange:function(e){E(e.target.value)},placeholder:"0x0000000000000000000000000000000000000000",spellCheck:"false",color:"white",borderColor:"red.400",_placeholder:{color:"pink.700"},_focus:{boxShadow:"none"},_hover:{borderColor:"red.300"}})]})}),Object(m.jsx)(l.b,{my:5,children:Object(m.jsxs)(w.b,{colorScheme:"red",children:[Object(m.jsx)(w.c,{color:"white",borderColor:"red.400",backgroundColor:"pink.700",children:"Price AVAX"}),Object(m.jsx)(w.a,{defaultValue:(parseInt(J,10)/Math.pow(10,18)).toFixed(2),onChange:function(e){X((parseFloat(e.target.value||"0")*Math.pow(10,18)).toString())},placeholder:"0.01",spellCheck:"false",color:"white",borderColor:"red.400",_placeholder:{color:"pink.700"},_focus:{boxShadow:"none"},_hover:{borderColor:"red.300"}})]})}),Object(m.jsx)(l.b,{children:Object(m.jsxs)(k.a,{id:"slider",my:5,defaultValue:0,min:0,max:9,colorScheme:"pink",onChange:H,onMouseEnter:function(){return ee(!0)},onMouseLeave:function(){return ee(!1)},children:[Object(m.jsx)(k.c,{value:0,mt:"1",ml:"-2.5",fontSize:"xs",children:"--"}),Object(m.jsx)(k.c,{value:1,mt:"1",ml:"-2.5",fontSize:"xs",children:"+1"}),Object(m.jsx)(k.c,{value:2,mt:"1",ml:"-2.5",fontSize:"xs",children:"+2"}),Object(m.jsx)(k.c,{value:3,mt:"1",ml:"-2.5",fontSize:"xs",children:"+3"}),Object(m.jsx)(k.c,{value:4,mt:"1",ml:"-2.5",fontSize:"xs",children:"+4"}),Object(m.jsx)(k.c,{value:5,mt:"1",ml:"-2.5",fontSize:"xs",children:"+5"}),Object(m.jsx)(k.c,{value:6,mt:"1",ml:"-2.5",fontSize:"xs",children:"+6"}),Object(m.jsx)(k.c,{value:7,mt:"1",ml:"-2.5",fontSize:"xs",children:"+7"}),Object(m.jsx)(k.c,{value:8,mt:"1",ml:"-2.5",fontSize:"xs",children:"+8"}),Object(m.jsx)(k.c,{value:9,mt:"1",ml:"-2.5",fontSize:"xs",children:"+9"}),Object(m.jsx)(k.e,{children:Object(m.jsx)(k.b,{})}),Object(m.jsx)(T.a,{hasArrow:!0,bg:"red.500",color:"white",placement:"top",isOpen:$,label:"".concat(I({timestamp:j,plus:P})),children:Object(m.jsx)(k.d,{})})]})}),ae||ie?Object(m.jsx)(h.a,{colorScheme:"red",isFullWidth:!0,my:5,disabled:!0,children:Object(m.jsx)(O.a,{color:"red.100",mr:2})}):Object(m.jsxs)(m.Fragment,{children:[" ",ce||ne?Object(m.jsx)(h.a,{colorScheme:"red",isFullWidth:!0,my:5,disabled:!0,children:ce?"ERROR TRANSACTION":"TRANSACTION SENDED"}):Object(m.jsxs)(h.a,{onClick:function(){!function(){oe.apply(this,arguments)}()},colorScheme:"red",isFullWidth:!0,my:5,children:["UPDATE"," ",K&&"0"!==K?"".concat((parseInt(K,10)/Math.pow(10,18)).toFixed(2)," AVAX"):"",Object(m.jsx)(p.c,{ml:2})]})]})]})]},C)}var R=function(){var e=Object(c.d)().account,t=Object(r.useState)(""),n=Object(s.a)(t,2),a=n[0],i=n[1],o=Object(r.useState)(1),d=Object(s.a)(o,2),b=d[0],j=d[1],u=Object(c.b)({abi:f,address:y,functionName:"getDomains",chain:"avalanche testnet",params:{owner:a,page:"".concat(b),limit:"5"}}),x=u.runContractFunction,O=u.data;return Object(r.useEffect)((function(){e&&i(e)}),[e]),Object(r.useEffect)((function(){a&&x()}),[a,b]),Object(m.jsx)(l.d,{children:Object(m.jsxs)(l.b,{children:[O&&"object"===typeof O&&Array.isArray(O||[])&&(JSON.parse(JSON.stringify(O))||[]).length?Object(m.jsx)(D.a,{allowToggle:!0,mt:5,children:(O&&"object"===typeof O?O:[]).map((function(e){return e&&""!==e[1]&&Object(m.jsx)(N,{domain:e},e[1]+e[0])}))}):Object(m.jsx)(l.c,{my:5,bgGradient:"linear(to-r, pink.400, red.400)",bgClip:"text",children:"You don't have domain names"}),Object(m.jsxs)(l.k,{direction:["row"],mb:10,children:[b>=2?Object(m.jsxs)(h.a,{onClick:function(){j(b-1)},colorScheme:"red",isFullWidth:!0,children:[Object(m.jsx)(p.b,{mr:2}),"PREW PAGE"]}):"",(O||"").length>=5?Object(m.jsxs)(h.a,{onClick:function(){j(b+1)},colorScheme:"red",isFullWidth:!0,children:["NEXT PAGE",Object(m.jsx)(p.c,{ml:2})]}):""]})]})})},E=n(119),L=n(190);var V=function(){return Object(m.jsx)(l.b,{children:Object(m.jsxs)(l.c,{mt:5,children:[Object(m.jsx)(l.b,{mx:5,children:Object(m.jsx)(l.g,{href:"https://twitter.com/avadomains",target:"_blank",children:Object(m.jsx)(E.a,{as:L.e,fontSize:"x-large",color:"red.600"})})}),Object(m.jsx)(l.b,{mx:5,children:Object(m.jsx)(l.g,{href:"https://github.com/AVADoma",target:"_blank",children:Object(m.jsx)(E.a,{as:L.c,fontSize:"x-large",color:"red.600"})})}),Object(m.jsx)(l.b,{mx:5,children:Object(m.jsx)(l.g,{href:"https://github.com/AVADoma/Extensions/archive/refs/heads/main.zip",children:Object(m.jsx)(E.a,{as:L.a,fontSize:"x-large",color:"red.600"})})}),Object(m.jsx)(l.b,{mx:5,children:Object(m.jsx)(l.g,{href:"/#",target:"_blank",children:Object(m.jsx)(E.a,{as:L.b,fontSize:"x-large",color:"red.800"})})}),Object(m.jsx)(l.b,{mx:5,children:Object(m.jsx)(l.g,{href:"/#",target:"_blank",children:Object(m.jsx)(E.a,{as:L.d,fontSize:"x-large",color:"red.800"})})})]})})};var J=function(){var e=Object(r.useState)(0),t=Object(s.a)(e,2),n=t[0],a=t[1],i=["red","teal","blue","pink"][n];return Object(m.jsx)(l.b,{w:"100vw",h:"100vh",m:0,p:0,bgGradient:"linear(to-r, pink.900, red.900)",overflow:"auto",children:Object(m.jsxs)(l.d,{children:[Object(m.jsx)(x,{}),Object(m.jsxs)(d.e,{isFitted:!0,variant:"unstyled",onChange:function(e){return a(e)},colorScheme:i,bgGradient:"linear(to-r, pink.800, red.800)",borderRadius:"3xl",size:"lg",boxShadow:"lg",color:"white",children:[Object(m.jsxs)(d.b,{children:[Object(m.jsx)(d.a,{color:"red.200",borderTopLeftRadius:"3xl",_selected:{color:"red.100",bg:"pink.800",boxShadow:"base",borderTopLeftRadius:"3xl",borderBottomRightRadius:"md"},_hover:{color:"red.100"},fontWeight:"extrabold",children:"Register"}),Object(m.jsx)(d.a,{color:"red.200",_selected:{color:"red.100",bg:"pink.800",boxShadow:"base",borderBottomRightRadius:"md",borderBottomLeftRadius:"md"},_hover:{color:"red.100"},fontWeight:"extrabold",children:"Update"}),Object(m.jsx)(d.a,{color:"red.200",_selected:{color:"red.100",bg:"pink.800",boxShadow:"base",borderBottomRightRadius:"md",borderBottomLeftRadius:"md"},_hover:{color:"red.100"},fontWeight:"extrabold",children:"Transfer"}),Object(m.jsx)(d.a,{color:"red.200",borderTopRightRadius:"3xl",_selected:{color:"red.100",bg:"pink.800",boxShadow:"base",borderTopRightRadius:"3xl",borderBottomLeftRadius:"md"},_hover:{color:"red.100"},fontWeight:"extrabold",children:"Lottery"})]}),Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.c,{children:Object(m.jsx)(F,{})}),Object(m.jsx)(d.c,{children:Object(m.jsx)(R,{})}),Object(m.jsx)(d.c,{children:Object(m.jsx)(W,{})}),Object(m.jsx)(d.c,{children:Object(m.jsx)(g,{})})]})]}),Object(m.jsx)(V,{})]})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,1162)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))},G=Object(o.b)({initialColorMode:"dark",useSystemColorMode:!1,shadows:{outline:"none"}});i.a.render(Object(m.jsx)(o.a,{theme:G,children:Object(m.jsx)(c.a,{appId:"NRAAJYMXu0IZzzjop7uKvctvALIXG1zhyujkxedw",serverUrl:"https://df5m531ozw4z.usemoralis.com:2053/server",children:Object(m.jsx)(J,{})})}),document.getElementById("root")),X()},833:function(e,t){},85:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"domain","type":"string"},{"indexed":true,"internalType":"string","name":"ipfs","type":"string"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"created","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"deleted","type":"uint256"}],"name":"RegisterDomain","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"domain","type":"string"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"transfer","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"created","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"deleted","type":"uint256"}],"name":"TransferDomain","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"domain","type":"string"},{"indexed":true,"internalType":"string","name":"ipfs","type":"string"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"address","name":"transfer","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"created","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"deleted","type":"uint256"}],"name":"UpdateDomain","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"domain","type":"string"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"id_lottery","type":"uint256"}],"name":"WinnerLottery","type":"event"},{"inputs":[{"internalType":"bytes32","name":"_bytes32","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"domains","outputs":[{"internalType":"enum AVADoma.TLDs","name":"tld","type":"uint8"},{"internalType":"string","name":"hostname","type":"string"},{"internalType":"string","name":"ipfs","type":"string"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"transfer","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"created_at","type":"uint256"},{"internalType":"uint256","name":"deleted_at","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"getCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"page","type":"uint256"},{"internalType":"uint256","name":"limit","type":"uint256"}],"name":"getDomains","outputs":[{"components":[{"internalType":"enum AVADoma.TLDs","name":"tld","type":"uint8"},{"internalType":"string","name":"hostname","type":"string"},{"internalType":"string","name":"ipfs","type":"string"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"transfer","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"created_at","type":"uint256"},{"internalType":"uint256","name":"deleted_at","type":"uint256"}],"internalType":"struct AVADoma.Domain[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_domain","type":"string"}],"name":"getEndDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_domain","type":"string"}],"name":"getIPFS","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_domain","type":"string"}],"name":"getId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLotteryCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_domain","type":"string"}],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_hostname","type":"string"},{"internalType":"enum AVADoma.TLDs","name":"_tld","type":"uint8"}],"name":"getPrice","outputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_domain","type":"string"}],"name":"getStartDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_domain","type":"string"}],"name":"getTransferAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"id_lottery","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"regInLottery","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum AVADoma.TLDs","name":"_tld","type":"uint8"},{"internalType":"string","name":"_hostname","type":"string"},{"internalType":"string","name":"_ipfs","type":"string"}],"name":"registerDomain","outputs":[{"internalType":"uint256","name":"added_id","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"source","type":"string"}],"name":"stringToBytes32","outputs":[{"internalType":"bytes32","name":"result","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"enum AVADoma.TLDs","name":"_tld","type":"uint8"},{"internalType":"string","name":"_hostname","type":"string"},{"internalType":"string","name":"_ipfs","type":"string"}],"name":"transferDomain","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"enum AVADoma.TLDs","name":"_tld","type":"uint8"},{"internalType":"string","name":"_hostname","type":"string"},{"internalType":"string","name":"_ipfs","type":"string"},{"internalType":"address","name":"_transfer","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"updateDomain","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"winnerLottery","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"domain","type":"uint256"}],"internalType":"struct AVADoma.Winner","name":"","type":"tuple"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"winners","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"domain","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')},863:function(e,t){},903:function(e,t){},905:function(e,t){},929:function(e,t){},931:function(e,t){},943:function(e,t){},960:function(e,t){},963:function(e,t){},965:function(e,t){}},[[1152,1,2]]]);
//# sourceMappingURL=main.7b78ac51.chunk.js.map