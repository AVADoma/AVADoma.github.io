(this.webpackJsonpwow=this.webpackJsonpwow||[]).push([[0],{1084:function(e,t){},1151:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(223),i=n.n(a),c=n(36),s=n(130),o=n(28),l=n(520),d=n(530),b=n(12),u=n(2),p=n.n(u),j=n(37),h=n(522),m=n(4);var x=function(){var e=Object(c.d)(),t=e.Moralis,n=e.isWeb3Enabled,a=e.enableWeb3,i=e.account,s=e.chainId,o=Object(c.c)().switchNetwork;function d(){return(d=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 43113,"Avalanche FUJI C-Chain","AVAX","AVAX","https://api.avax-test.network/ext/bc/C/rpc","https://testnet.snowtrace.io/",n||a(),e.next=9,t.addNetwork(43113,"Avalanche FUJI C-Chain","AVAX","AVAX","https://api.avax-test.network/ext/bc/C/rpc","https://testnet.snowtrace.io/");case 9:return e.next=11,o("0xa869");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){n||a()}),[]),Object(m.jsx)(l.b,{children:Object(m.jsxs)(l.c,{height:"30px",py:10,borderRadius:"lg",children:[Object(m.jsxs)(l.b,{mx:5,children:[Object(m.jsx)(l.l,{bgGradient:"radial(pink.600, red.800)",bgClip:"text",fontSize:"3xl",fontWeight:"extrabold",children:"AVADoma"}),Object(m.jsx)(l.l,{bgGradient:"radial(pink.500, red.900)",bgClip:"text",fontWeight:"extrabold",fontSize:"xs",children:"beta testnet"})]}),Object(m.jsx)(l.e,{orientation:"vertical",width:"100%"}),Object(m.jsx)(l.b,{mx:5,fontSize:15,children:n?Object(m.jsxs)(m.Fragment,{children:[" ","0xa869"!==s?Object(m.jsxs)(h.a,{onClick:function(){return function(){return d.apply(this,arguments)}()},colorScheme:"red",size:"xs",isFullWidth:!0,children:[Object(m.jsx)(j.a,{mr:1})," AVAX"]}):Object(m.jsx)(l.a,{variant:"outline",colorScheme:"red",p:1,border:"none",shadow:"none",children:Object(m.jsxs)(l.l,{fontSize:"sm",children:[(i||"").slice(0,3),"...",(i||"").slice(-3),Object(m.jsx)(j.e,{ml:2,my:1,fontSize:"lg"})]})})]}):Object(m.jsxs)(h.a,{onClick:function(){a()},colorScheme:"red",size:"xs",isFullWidth:!0,children:[Object(m.jsx)(j.i,{mr:2,fontSize:16}),"Connect"]})})]})})},f=n(260),O=n(85),y="0x8B860047795E9A42c2E9D568867c03a22132CB4E";var g=function(){var e=Object(c.d)(),t=e.isWeb3Enabled,n=e.enableWeb3,a=Object(c.c)().switchNetwork,i=Object(r.useState)("xx.xxx"),s=Object(o.a)(i,2),d=s[0],u=s[1],x=["ex","hi","xx","qq","av","go"],g=["dapp","web3","gamefi","defi","ava","ipfs"],w=Object(r.useState)(""),S=Object(o.a)(w,2),v=S[0],k=S[1],T=Object(r.useState)(""),C=Object(o.a)(T,2),A=C[0],_=C[1],F=Object(r.useState)(""),z=Object(o.a)(F,2),W=z[0],M=z[1],D=Object(c.b)({abi:O,address:y,functionName:"getLotteryCount",chain:"avalanche testnet"}),I=D.runContractFunction,N=D.data,E=Object(c.e)(),R=E.data,L=E.error,V=E.fetch,J=E.isFetching,X=E.isLoading;function G(){return(G=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t||n(),e.next=3,a("0xa869");case 3:return e.next=5,V({params:{abi:O,contractAddress:y,functionName:"regInLottery",params:{}}});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return B.apply(this,arguments)}function B(){return(B=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){function e(e){return parseInt("".concat(e),10)>=0&&parseInt("".concat(e),10)<10?"0".concat(e):"".concat(e)}setInterval((function(){u("".concat(x[Math.floor(Math.random()*x.length)],".").concat(g[Math.floor(Math.random()*g.length)]))}),1e3),setInterval((function(){var t=new Date;M(e(23-t.getHours())),_(e(59-t.getMinutes())),k(e(59-t.getSeconds()))}),1e3)}()}),[]),Object(r.useEffect)((function(){P()}),[R,L]),Object(m.jsxs)(l.b,{children:[Object(m.jsxs)(l.c,{fontSize:"xxx-large",fontFamily:"monospace",fontWeight:"extrabold",mb:5,children:[Object(m.jsx)(l.b,{as:"span",padding:10,backgroundColor:"red.900",borderRadius:10,py:5,px:7,children:W}),":",Object(m.jsx)(l.b,{as:"span",padding:10,backgroundColor:"red.900",borderRadius:10,py:5,px:7,children:A}),":",Object(m.jsx)(l.b,{as:"span",padding:10,backgroundColor:"red.900",borderRadius:10,py:5,px:7,children:v})]}),Object(m.jsxs)(l.c,{my:5,fontSize:"x-large",fontWeight:"extrabold",color:"red.900",children:[!N||Object(m.jsx)(h.b,{"aria-label":"Update",icon:Object(m.jsx)(j.g,{}),onClick:function(){P()},size:"xs",colorScheme:"pink",backgroundColor:"red.800",color:"red.500",mr:2})," ",N&&Object(m.jsx)(l.b,{as:"span",padding:5,backgroundColor:"red.900",borderRadius:5,py:1,px:3,mx:2,color:"red.500",children:N})||Object(m.jsx)(h.b,{"aria-label":"Update",icon:Object(m.jsx)(j.g,{}),onClick:function(){P()},size:"xs",colorScheme:"pink",backgroundColor:"red.800",color:"red.500",mr:2})," ","participant(s)"," "]}),Object(m.jsxs)(l.b,{backgroundColor:"pink.900",borderRadius:"xl",p:10,children:[Object(m.jsxs)(l.l,{mb:5,textAlign:"center",bgGradient:"linear(to-r, pink.400, red.400)",bgClip:"text",children:["Every day a random domain name ",Object(m.jsx)("br",{}),Object(m.jsx)(l.a,{colorScheme:"red",variant:"outline",children:"FREE"})," ",Object(m.jsx)(l.a,{colorScheme:"pink",variant:"outline",children:d}),Object(m.jsx)("br",{}),"is drawn in the lottery."]}),J||X?Object(m.jsx)(h.a,{colorScheme:"red",size:"lg",fontSize:"lg",isFullWidth:!0,py:10,disabled:!0,children:Object(m.jsx)(f.a,{color:"red.100"})}):Object(m.jsxs)(m.Fragment,{children:[" ",L?Object(m.jsx)(h.a,{colorScheme:"red",size:"lg",fontSize:"lg",isFullWidth:!0,py:10,disabled:!0,children:"ERROR TRANSACTION"}):Object(m.jsxs)(m.Fragment,{children:[" ",R?Object(m.jsx)(h.a,{colorScheme:"red",size:"lg",fontSize:"lg",isFullWidth:!0,py:10,disabled:!0,children:"TRANSACTION SENDED"}):Object(m.jsxs)(h.a,{colorScheme:"red",size:"lg",fontSize:"lg",isFullWidth:!0,py:10,onClick:function(){!function(){G.apply(this,arguments)}()},children:["FREE PARTICIPATION",Object(m.jsx)(l.b,{fontSize:"xs",ml:2,color:"red.300",children:"(only gas)"})]})]})]})]})]})},w=n(23),S=n(523),v=n(524),k=n(525),T=n(526),C=n(529),A=n(527),_=["ava","web3","dapp","ipfs","defi","gamefi"];var F=function(){var e=Object(c.d)(),t=e.isWeb3Enabled,n=e.enableWeb3,a=Object(c.c)(),i=a.switchNetwork,s=a.chainId,d=Object(w.f)(),u=d.isOpen,x=d.onOpen,g=d.onClose,F=Object(r.useState)(""),z=Object(o.a)(F,2),W=z[0],M=z[1],D=Object(r.useState)("2"),I=Object(o.a)(D,2),N=I[0],E=I[1],R=Object(r.useState)(""),L=Object(o.a)(R,2),V=L[0],J=L[1],X=Object(r.useState)(5),G=Object(o.a)(X,2),P=G[0],B=G[1],H=Object(r.useState)("500000000000000000"),U=Object(o.a)(H,2),Q=U[0],K=U[1],Y=Object(w.b)(),q=Object(o.a)(Y,2),Z=q[0],$=q[1],ee=Object(w.b)(!0),te=Object(o.a)(ee,2),ne=te[0],re=te[1],ae=Object(r.useState)(!1),ie=Object(o.a)(ae,2),ce=ie[0],se=ie[1],oe=Object(c.b)({abi:O,address:y,functionName:"getId",chain:"avalanche testnet",params:{_domain:"".concat(W,".").concat(_[parseInt(N,10)])}}),le=oe.runContractFunction,de=oe.data,be=oe.isLoading,ue=oe.isFetching,pe=Object(c.b)({abi:O,address:y,functionName:"domains",chain:"avalanche testnet",params:{id:de}}),je=pe.runContractFunction,he=pe.data,me=pe.isLoading,xe=pe.isFetching,fe=Object(c.e)(),Oe=fe.data,ye=fe.fetch,ge=fe.isFetching,we=fe.isLoading;function Se(){return(Se=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t||n(),e.next=3,i("0xa869");case 3:return e.next=5,ye({params:{abi:O,contractAddress:y,functionName:"registerDomain",msgValue:Q,params:{_tld:N,_hostname:W,_ipfs:V}}});case 5:re.on();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ve(){return ke.apply(this,arguments)}function ke(){return(ke=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if($.off(),J(""),!W){e.next=5;break}return e.next=5,le();case 5:re.off();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){"close"!==(localStorage.getItem("help")||"")&&x()}),[]),Object(r.useEffect)((function(){if(W&&W.length){var e=W.length;e<=1?K((10*P*Math.pow(10,18)).toString()):e<=3?K((P*Math.pow(10,18)).toString()):e<=5?K((.1*P*Math.pow(10,18)).toString()):e<=63&&K((.01*P*Math.pow(10,18)).toString())}}),[W,P]),Object(r.useEffect)((function(){ve()}),[N]),Object(r.useEffect)((function(){de&&"0"!==de&&function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[de]),Object(m.jsxs)(l.d,{children:[Object(m.jsxs)(l.b,{children:[Object(m.jsx)(l.b,{mb:5,textAlign:"center",children:Object(m.jsx)(l.l,{bgGradient:"radial(pink.400, red.800)",bgClip:"text",fontSize:"3xl",fontWeight:"extrabold",children:W?"".concat(W,".").concat(_[parseInt(N,10)]):Object(m.jsx)(l.l,{as:"span",onClick:x,cursor:"pointer",children:"How It Works?"})})}),Object(m.jsxs)(l.k,{direction:["row"],children:[Object(m.jsx)(S.a,{value:W,onChange:function(e){$.on();var t=e.target.value;_.forEach((function(e,n){t.indexOf(".".concat(e))+1&&(t=t.replace(".".concat(e),""),E("".concat(n)))})),M(t)},placeholder:"example",spellCheck:"false",color:"white",borderColor:"red.400",_placeholder:{color:"pink.700"},_focus:{boxShadow:"none"},_hover:{borderColor:"red.300"}}),be||ue?Object(m.jsx)(h.a,{disabled:!0,rightIcon:Object(m.jsx)(f.a,{color:"red.100"}),onClick:function(){ve()},px:5,colorScheme:"red",children:"Search"}):Object(m.jsx)(h.a,{rightIcon:Object(m.jsx)(j.h,{ml:2}),onClick:function(){ve()},px:5,colorScheme:"red",children:"Search"})]}),Object(m.jsx)(l.b,{children:Object(m.jsx)(v.b,{my:5,defaultValue:N,onChange:E,value:N,children:Object(m.jsx)(l.k,{spacing:"auto",direction:"row",children:_.map((function(e,t){return Object(m.jsxs)(v.a,{colorScheme:"red",value:"".concat(t),children:[".",e]},e)}))})})}),!Z&&W&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(l.b,{children:me||xe?Object(m.jsx)(h.a,{isFullWidth:!0,disabled:!0,colorScheme:"red",children:Object(m.jsx)(f.a,{color:"red.100"})}):de&&"0"!==de&&he&&Object(m.jsx)(h.a,{as:"a",href:"https://ipfs.io/ipfs/".concat(JSON.parse(JSON.stringify(he)).ipfs),target:"_blank",colorScheme:"red",isFullWidth:!0,children:JSON.parse(JSON.stringify(he)).ipfs})}),ge||we?Object(m.jsx)(l.c,{my:5,children:Object(m.jsx)(f.a,{size:"xl",color:"red.500"})}):Object(m.jsxs)(m.Fragment,{children:[" ",Oe&&ne?Object(m.jsx)(l.c,{my:5,children:"Domain transaction registered"}):Object(m.jsxs)(m.Fragment,{children:[" ",de&&"0"===de&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(l.b,{children:Object(m.jsxs)(S.b,{colorScheme:"red",children:[Object(m.jsx)(S.c,{color:"white",borderColor:"red.400",backgroundColor:"pink.700",children:"ipfs://"}),Object(m.jsx)(S.a,{value:V,onChange:function(e){return J(e.target.value)},placeholder:"QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco",spellCheck:"false",color:"white",borderColor:"red.400",_placeholder:{color:"pink.700"},_focus:{boxShadow:"none"},_hover:{borderColor:"red.300"}})]})}),Object(m.jsx)(l.b,{children:Object(m.jsxs)(k.a,{id:"slider",my:5,defaultValue:P,min:1,max:10,colorScheme:"pink",onChange:B,onMouseEnter:function(){return se(!0)},onMouseLeave:function(){return se(!1)},children:[Object(m.jsx)(k.c,{value:1,mt:"1",ml:"-2.5",fontSize:"sm",children:"1"}),Object(m.jsx)(k.c,{value:2,mt:"1",ml:"-2.5",fontSize:"sm",children:"2"}),Object(m.jsx)(k.c,{value:3,mt:"1",ml:"-2.5",fontSize:"sm",children:"3"}),Object(m.jsx)(k.c,{value:4,mt:"1",ml:"-2.5",fontSize:"sm",children:"4"}),Object(m.jsx)(k.c,{value:5,mt:"1",ml:"-2.5",fontSize:"sm",children:"5 years"}),Object(m.jsx)(k.c,{value:6,mt:"1",ml:"-2.5",fontSize:"sm",children:"6"}),Object(m.jsx)(k.c,{value:7,mt:"1",ml:"-2.5",fontSize:"sm",children:"7"}),Object(m.jsx)(k.c,{value:8,mt:"1",ml:"-2.5",fontSize:"sm",children:"8"}),Object(m.jsx)(k.c,{value:9,mt:"1",ml:"-2.5",fontSize:"sm",children:"9"}),Object(m.jsx)(k.c,{value:10,mt:"1",ml:"-2.5",fontSize:"sm",children:"10"}),Object(m.jsx)(k.e,{children:Object(m.jsx)(k.b,{})}),Object(m.jsx)(T.a,{hasArrow:!0,bg:"red.500",color:"white",placement:"top",isOpen:ce,label:"".concat((parseInt(Q,10)/Math.pow(10,18)).toFixed(2)," AVAX"),children:Object(m.jsx)(k.d,{})})]})}),Object(m.jsx)(l.b,{children:Object(m.jsx)(h.a,{rightIcon:Object(m.jsx)(j.c,{}),isFullWidth:!0,mt:5,onClick:function(){!function(){Se.apply(this,arguments)}()},colorScheme:"red",disabled:!V,children:"0xa869"===s?Object(m.jsxs)(m.Fragment,{children:["Register ",(parseInt(Q,10)/Math.pow(10,18)).toFixed(2)," AVAX"]}):"Switch Network"})})]})]})]})]})]}),Object(m.jsxs)(C.a,{onClose:function(){localStorage.setItem("help","close"),g()},isOpen:u,isCentered:!0,children:[Object(m.jsx)(C.g,{}),Object(m.jsxs)(C.d,{bgGradient:"linear(to-r, pink.900, red.900)",color:"red.100",children:[Object(m.jsx)(C.f,{children:"How It Works?"}),Object(m.jsx)(C.c,{}),Object(m.jsx)(C.b,{children:Object(m.jsxs)(l.h,{spacing:3,children:[Object(m.jsxs)(l.j,{children:[Object(m.jsx)(l.i,{as:j.e,color:"green.500"}),"Add browser extension"," ",Object(m.jsxs)(l.g,{href:"https://metamask.io/",target:"_blank",children:["MetaMask ",Object(m.jsx)(j.f,{mx:"2px"})]})," ","and"," ",Object(m.jsx)(l.a,{colorScheme:"red",variant:"outline",children:"AVADoma"}),Object(m.jsxs)(l.f,{mt:5,children:[Object(m.jsxs)(h.a,{as:"a",colorScheme:"red",isFullWidth:!0,href:"https://avadoma.com/extensions.zip",children:[Object(m.jsx)(A.a,{borderRadius:"full",boxSize:"20px",src:"chrome.png",alt:"Chrome",mr:1}),"Chrome"]}),Object(m.jsxs)(h.a,{disabled:!0,isFullWidth:!0,color:"white",backgroundColor:"yellow.700",_hover:{color:"white",backgroundColor:"yellow.700"},children:[Object(m.jsx)(A.a,{borderRadius:"full",boxSize:"20px",src:"firefox.png",alt:"Firefox",mr:1}),"Firefox"]}),Object(m.jsxs)(h.a,{disabled:!0,colorScheme:"blue",isFullWidth:!0,children:[Object(m.jsx)(A.a,{borderRadius:"full",boxSize:"20px",src:"safari.png",alt:"Safari",mr:1}),"Safari"]})]})]}),Object(m.jsxs)(l.j,{children:[Object(m.jsx)(l.i,{as:j.e,color:"green.500"}),"Get some free AVAX (fuji) -"," ",Object(m.jsxs)(l.g,{href:"https://faucet.avax-test.network/",target:"_blank",children:["faucet ",Object(m.jsx)(j.f,{mx:"2px"})]})]}),Object(m.jsxs)(l.j,{children:[Object(m.jsx)(l.i,{as:j.e,color:"green.500"}),"Register your new domain name"]})]})}),Object(m.jsx)(C.e,{children:" "})]})]})]})},z=["ava","web3","dapp","ipfs","defi","gamefi"];var W=function(){var e=Object(c.d)(),t=e.isWeb3Enabled,n=e.enableWeb3,a=e.account,i=Object(c.c)(),s=i.switchNetwork,d=i.chainId,u=Object(w.f)(),x=u.isOpen,g=u.onOpen,k=u.onClose,T=Object(r.useState)(""),A=Object(o.a)(T,2),_=A[0],F=A[1],W=Object(r.useState)("2"),M=Object(o.a)(W,2),D=M[0],I=M[1],N=Object(r.useState)(""),E=Object(o.a)(N,2),R=E[0],L=E[1],V=Object(w.b)(),J=Object(o.a)(V,2),X=J[0],G=J[1],P=Object(w.b)(!0),B=Object(o.a)(P,2),H=B[0],U=B[1],Q=Object(c.b)({abi:O,address:y,functionName:"getId",chain:"avalanche testnet",params:{_domain:"".concat(_,".").concat(z[parseInt(D,10)])}}),K=Q.runContractFunction,Y=Q.data,q=Q.isLoading,Z=Q.isFetching,$=Object(c.b)({abi:O,address:y,functionName:"domains",chain:"avalanche testnet",params:{id:Y}}),ee=$.runContractFunction,te=$.data,ne=$.isLoading,re=$.isFetching,ae=Object(c.e)(),ie=ae.data,ce=ae.fetch,se=ae.isFetching,oe=ae.isLoading;function le(){return(le=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t||n(),e.next=3,s("0xa869");case 3:return e.next=5,ce({params:{abi:O,contractAddress:y,functionName:"transferDomain",msgValue:JSON.parse(JSON.stringify(te||"{}")).price,params:{_tld:D,_hostname:_,_ipfs:R}}});case 5:U.on();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(){return be.apply(this,arguments)}function be(){return(be=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(G.off(),L(""),!_){e.next=5;break}return e.next=5,K();case 5:U.off();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){de()}),[D]),Object(r.useEffect)((function(){Y&&"0"!==Y&&function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[Y]),Object(m.jsxs)(l.d,{children:[Object(m.jsxs)(l.b,{children:[Object(m.jsx)(l.b,{mb:5,textAlign:"center",children:Object(m.jsx)(l.l,{bgGradient:"radial(pink.400, red.800)",bgClip:"text",fontSize:"3xl",fontWeight:"extrabold",children:_?"".concat(_,".").concat(z[parseInt(D,10)]):Object(m.jsx)(l.l,{as:"span",onClick:g,cursor:"pointer",children:"How It Works?"})})}),Object(m.jsxs)(l.k,{direction:["row"],children:[Object(m.jsx)(S.a,{value:_,onChange:function(e){G.on();var t=e.target.value;z.forEach((function(e,n){t.indexOf(".".concat(e))+1&&(t=t.replace(".".concat(e),""),I("".concat(n)))})),F(t)},placeholder:"example",spellCheck:"false",color:"white",borderColor:"red.400",_placeholder:{color:"pink.700"},_focus:{boxShadow:"none"},_hover:{borderColor:"red.300"}}),q||Z?Object(m.jsx)(h.a,{disabled:!0,rightIcon:Object(m.jsx)(f.a,{color:"red.100"}),onClick:function(){de()},px:5,colorScheme:"red",children:"Search"}):Object(m.jsx)(h.a,{rightIcon:Object(m.jsx)(j.h,{ml:2}),onClick:function(){de()},px:5,colorScheme:"red",children:"Search"})]}),Object(m.jsx)(l.b,{children:Object(m.jsx)(v.b,{my:5,defaultValue:D,onChange:I,value:D,children:Object(m.jsx)(l.k,{spacing:"auto",direction:"row",children:z.map((function(e,t){return Object(m.jsxs)(v.a,{colorScheme:"red",value:"".concat(t),children:[".",e]},e)}))})})}),!X&&_&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(l.b,{children:ne||re?Object(m.jsx)(h.a,{isFullWidth:!0,disabled:!0,colorScheme:"red",children:Object(m.jsx)(f.a,{color:"red.100"})}):Y&&"0"!==Y&&te&&JSON.parse(JSON.stringify(te)).transfer.toLowerCase()!==(a||"").toLowerCase()&&Object(m.jsx)(h.a,{as:"a",href:"https://ipfs.io/ipfs/".concat(JSON.parse(JSON.stringify(te)).ipfs),target:"_blank",colorScheme:"red",isFullWidth:!0,children:JSON.parse(JSON.stringify(te)).ipfs})}),se||oe?Object(m.jsx)(l.c,{my:5,children:Object(m.jsx)(f.a,{size:"xl",color:"red.500"})}):Object(m.jsxs)(m.Fragment,{children:[" ",ie&&H?Object(m.jsx)(l.c,{my:5,children:"Domain transaction registered"}):Object(m.jsxs)(m.Fragment,{children:[" ",Y&&"0"!==Y&&te&&JSON.parse(JSON.stringify(te)).transfer.toLowerCase()===(a||"").toLowerCase()&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(l.b,{children:Object(m.jsxs)(S.b,{colorScheme:"red",children:[Object(m.jsx)(S.c,{color:"white",borderColor:"red.400",backgroundColor:"pink.700",children:"ipfs://"}),Object(m.jsx)(S.a,{onChange:function(e){return L(e.target.value)},placeholder:"QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco",spellCheck:"false",color:"white",borderColor:"red.400",_placeholder:{color:"pink.700"},_focus:{boxShadow:"none"},_hover:{borderColor:"red.300"}})]})}),Object(m.jsx)(l.b,{children:Object(m.jsx)(h.a,{rightIcon:Object(m.jsx)(j.c,{}),isFullWidth:!0,mt:5,onClick:function(){!function(){le.apply(this,arguments)}()},colorScheme:"red",disabled:!R,children:"0xa869"===d?Object(m.jsxs)(m.Fragment,{children:["Get domain name"," ",(parseInt(JSON.parse(JSON.stringify(te)).price,10)/Math.pow(10,18)).toFixed(2)," ","AVAX"]}):"Switch Network"})})]})]})]})]})]}),Object(m.jsxs)(C.a,{onClose:k,isOpen:x,isCentered:!0,children:[Object(m.jsx)(C.g,{}),Object(m.jsxs)(C.d,{bgGradient:"linear(to-r, pink.900, red.900)",color:"red.100",children:[Object(m.jsx)(C.f,{children:"How It Works?"}),Object(m.jsx)(C.c,{}),Object(m.jsx)(C.b,{children:Object(m.jsxs)(l.h,{spacing:3,children:[Object(m.jsxs)(l.j,{children:[Object(m.jsx)(l.i,{as:j.e,color:"green.500"}),"Domain names can be"," ",Object(m.jsx)(l.a,{colorScheme:"red",variant:"outline",children:"transferred"})," ","and"," ",Object(m.jsx)(l.a,{colorScheme:"pink",variant:"outline",children:"sold"})," ","from user to user."]}),Object(m.jsxs)(l.j,{children:[Object(m.jsx)(l.i,{as:j.e,color:"green.500"}),"In the"," ",Object(m.jsx)(l.a,{colorScheme:"red",variant:"outline",children:"Transfer"})," ","field, specify the address of the new domain owner, and price you want to get for this domain name"]}),Object(m.jsxs)(l.j,{children:[Object(m.jsx)(l.i,{as:j.e,color:"green.500"}),"The new owner pays the specified price and receives the domain name"]})]})}),Object(m.jsx)(C.e,{children:" "})]})]})]})},M=n(528),D=["ava","web3","dapp","ipfs","defi","gamefi"];function I(e){var t=e.timestamp,n=e.plus,r=new Date(1e3*parseInt(t,10));if(n){var a=r.getFullYear(),i=r.getMonth(),c=r.getDate();r=new Date(a,i,c+365*n)}return"".concat(r.getDate()<10?"0".concat(r.getDate()):r.getDate(),"/").concat(r.getMonth()+1<10?"0".concat(r.getMonth()+1):r.getMonth()+1,"/").concat(r.getFullYear())}function N(e){var t=Object(o.a)(e.domain,8),n=t[0],a=t[1],i=t[2],s=t[4],d=t[5],u=t[7],x=Object(c.d)(),g=x.isWeb3Enabled,w=x.enableWeb3,v=Object(c.c)().switchNetwork,C="".concat(a,".").concat(D[parseInt(n,10)]),A=Object(r.useState)(i),_=Object(o.a)(A,2),F=_[0],z=_[1],W=Object(r.useState)(s),N=Object(o.a)(W,2),E=N[0],R=N[1],L=Object(r.useState)(d),V=Object(o.a)(L,2),J=V[0],X=V[1],G=Object(r.useState)(0),P=Object(o.a)(G,2),B=P[0],H=P[1],U=Object(r.useState)("0"),Q=Object(o.a)(U,2),K=Q[0],Y=Q[1],q=Object(r.useState)(!1),Z=Object(o.a)(q,2),$=Z[0],ee=Z[1],te=Object(c.e)(),ne=te.data,re=te.fetch,ae=te.isFetching,ie=te.isLoading,ce=te.error;function se(){return(se=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(K,n,a,F,E,J),g||w(),e.next=4,v("0xa869");case 4:return e.next=6,re({params:{abi:O,contractAddress:y,functionName:"updateDomain",msgValue:K,params:{_tld:n,_hostname:a,_ipfs:F,_transfer:E||"0x000000000000000000000000000000000000dEaD",_price:"".concat(J&&"0"===J?"1":J)}}});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){if(a&&a.length){var e=a.length;e<=1?Y((10*B*Math.pow(10,18)).toString()):e<=3?Y((B*Math.pow(10,18)).toString()):e<=5?Y((.1*B*Math.pow(10,18)).toString()):e<=63&&Y((.01*B*Math.pow(10,18)).toString())}}),[B]),Object(m.jsxs)(M.d,{border:0,my:3,children:[Object(m.jsx)("h2",{children:Object(m.jsxs)(M.b,{bgGradient:"linear(to-r, red.700, pink.800)",borderRadius:"md",_hover:{bgGradient:"linear(to-r, red.600, pink.700)"},children:[Object(m.jsxs)(l.b,{flex:"1",textAlign:"left",isTruncated:!0,children:[Object(m.jsx)(j.c,{mr:5,fontSize:"2xl"}),C]}),Object(m.jsx)(M.c,{})]})}),Object(m.jsxs)(M.e,{pb:4,children:[Object(m.jsxs)(l.c,{py:5,bgGradient:"linear(to-r, pink.800, pink.700)",borderRadius:"md",mb:5,children:[Object(m.jsx)(l.l,{fontWeight:"extrabold",children:Object(m.jsx)(l.g,{color:"white",href:"http://".concat(C),target:"_blank",children:C})}),Object(m.jsx)(j.d,{mx:5}),Object(m.jsx)(l.l,{fontWeight:"extrabold",children:Object(m.jsxs)(l.g,{color:"white",href:"https://dweb.link/ipfs/".concat(F),target:"_blank",children:["ipfs://",(F||[]).slice(0,3),"...",(F||[]).slice(-3)]})})]}),Object(m.jsx)(l.b,{my:5,children:Object(m.jsxs)(S.b,{colorScheme:"red",children:[Object(m.jsx)(S.c,{color:"white",borderColor:"red.400",backgroundColor:"pink.700",children:"ipfs://"}),Object(m.jsx)(S.a,{value:F,onChange:function(e){z(e.target.value)},placeholder:"QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco",spellCheck:"false",color:"white",borderColor:"red.400",_placeholder:{color:"pink.700"},_focus:{boxShadow:"none"},_hover:{borderColor:"red.300"}})]})}),Object(m.jsx)(l.b,{my:5,children:Object(m.jsxs)(S.b,{colorScheme:"red",children:[Object(m.jsx)(S.c,{color:"white",borderColor:"red.400",backgroundColor:"pink.700",children:"Transfer for"}),Object(m.jsx)(S.a,{value:E,onChange:function(e){R(e.target.value)},placeholder:"0x0000000000000000000000000000000000000000",spellCheck:"false",color:"white",borderColor:"red.400",_placeholder:{color:"pink.700"},_focus:{boxShadow:"none"},_hover:{borderColor:"red.300"}})]})}),Object(m.jsx)(l.b,{my:5,children:Object(m.jsxs)(S.b,{colorScheme:"red",children:[Object(m.jsx)(S.c,{color:"white",borderColor:"red.400",backgroundColor:"pink.700",children:"Price AVAX"}),Object(m.jsx)(S.a,{defaultValue:(parseInt(J,10)/Math.pow(10,18)).toFixed(2),onChange:function(e){X((parseFloat(e.target.value||"0")*Math.pow(10,18)).toString())},placeholder:"0.01",spellCheck:"false",color:"white",borderColor:"red.400",_placeholder:{color:"pink.700"},_focus:{boxShadow:"none"},_hover:{borderColor:"red.300"}})]})}),Object(m.jsx)(l.b,{children:Object(m.jsxs)(k.a,{id:"slider",my:5,defaultValue:0,min:0,max:9,colorScheme:"pink",onChange:H,onMouseEnter:function(){return ee(!0)},onMouseLeave:function(){return ee(!1)},children:[Object(m.jsx)(k.c,{value:0,mt:"1",ml:"-2.5",fontSize:"xs",children:"--"}),Object(m.jsx)(k.c,{value:1,mt:"1",ml:"-2.5",fontSize:"xs",children:"+1"}),Object(m.jsx)(k.c,{value:2,mt:"1",ml:"-2.5",fontSize:"xs",children:"+2"}),Object(m.jsx)(k.c,{value:3,mt:"1",ml:"-2.5",fontSize:"xs",children:"+3"}),Object(m.jsx)(k.c,{value:4,mt:"1",ml:"-2.5",fontSize:"xs",children:"+4"}),Object(m.jsx)(k.c,{value:5,mt:"1",ml:"-2.5",fontSize:"xs",children:"+5"}),Object(m.jsx)(k.c,{value:6,mt:"1",ml:"-2.5",fontSize:"xs",children:"+6"}),Object(m.jsx)(k.c,{value:7,mt:"1",ml:"-2.5",fontSize:"xs",children:"+7"}),Object(m.jsx)(k.c,{value:8,mt:"1",ml:"-2.5",fontSize:"xs",children:"+8"}),Object(m.jsx)(k.c,{value:9,mt:"1",ml:"-2.5",fontSize:"xs",children:"+9"}),Object(m.jsx)(k.e,{children:Object(m.jsx)(k.b,{})}),Object(m.jsx)(T.a,{hasArrow:!0,bg:"red.500",color:"white",placement:"top",isOpen:$,label:"".concat(I({timestamp:u,plus:B})),children:Object(m.jsx)(k.d,{})})]})}),ae||ie?Object(m.jsx)(h.a,{colorScheme:"red",isFullWidth:!0,my:5,disabled:!0,children:Object(m.jsx)(f.a,{color:"red.100",mr:2})}):Object(m.jsxs)(m.Fragment,{children:[" ",ce||ne?Object(m.jsx)(h.a,{colorScheme:"red",isFullWidth:!0,my:5,disabled:!0,children:ce?"ERROR TRANSACTION":"TRANSACTION SENDED"}):Object(m.jsxs)(h.a,{onClick:function(){!function(){se.apply(this,arguments)}()},colorScheme:"red",isFullWidth:!0,my:5,children:["UPDATE"," ",K&&"0"!==K?"".concat((parseInt(K,10)/Math.pow(10,18)).toFixed(2)," AVAX"):"",Object(m.jsx)(j.c,{ml:2})]})]})]})]},C)}var E=function(){var e=Object(c.d)().account,t=Object(r.useState)(""),n=Object(o.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)(1),d=Object(o.a)(s,2),b=d[0],u=d[1],p=Object(c.b)({abi:O,address:y,functionName:"getDomains",chain:"avalanche testnet",params:{owner:a,page:"".concat(b),limit:"5"}}),x=p.runContractFunction,f=p.data;return Object(r.useEffect)((function(){e&&i(e)}),[e]),Object(r.useEffect)((function(){a&&x()}),[a,b]),Object(m.jsx)(l.d,{children:Object(m.jsxs)(l.b,{children:[f&&"object"===typeof f&&Array.isArray(f||[])&&(JSON.parse(JSON.stringify(f))||[]).length?Object(m.jsx)(M.a,{allowToggle:!0,mt:5,children:(f&&"object"===typeof f?f:[]).map((function(e){return e&&""!==e[1]&&Object(m.jsx)(N,{domain:e},e[1]+e[0])}))}):Object(m.jsx)(l.c,{my:5,bgGradient:"linear(to-r, pink.400, red.400)",bgClip:"text",children:"You don't have domain names"}),Object(m.jsxs)(l.k,{direction:["row"],mb:10,children:[b>=2?Object(m.jsxs)(h.a,{onClick:function(){u(b-1)},colorScheme:"red",isFullWidth:!0,children:[Object(m.jsx)(j.b,{mr:2}),"PREW PAGE"]}):"",(f||"").length>=5?Object(m.jsxs)(h.a,{onClick:function(){u(b+1)},colorScheme:"red",isFullWidth:!0,children:["NEXT PAGE",Object(m.jsx)(j.c,{ml:2})]}):""]})]})})};var R=function(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],i=["red","teal","blue","pink"][n];return Object(m.jsx)(l.b,{w:"100vw",h:"100vh",m:0,p:0,bgGradient:"linear(to-r, pink.900, red.900)",overflow:"auto",children:Object(m.jsxs)(l.d,{children:[Object(m.jsx)(x,{}),Object(m.jsxs)(d.e,{isFitted:!0,variant:"unstyled",onChange:function(e){return a(e)},colorScheme:i,bgGradient:"linear(to-r, pink.800, red.800)",borderRadius:"3xl",size:"lg",boxShadow:"lg",color:"white",children:[Object(m.jsxs)(d.b,{children:[Object(m.jsx)(d.a,{color:"red.200",_selected:{color:"red.100",bg:"pink.800",boxShadow:"base",borderTopLeftRadius:"3xl",borderBottomRightRadius:"md"},fontWeight:"extrabold",children:"Register"}),Object(m.jsx)(d.a,{color:"red.200",_selected:{color:"red.100",bg:"pink.800",boxShadow:"base",borderBottomRightRadius:"md",borderBottomLeftRadius:"md"},fontWeight:"extrabold",children:"Update"}),Object(m.jsx)(d.a,{color:"red.200",_selected:{color:"red.100",bg:"pink.800",boxShadow:"base",borderBottomRightRadius:"md",borderBottomLeftRadius:"md"},fontWeight:"extrabold",children:"Transfer"}),Object(m.jsx)(d.a,{color:"red.200",_selected:{color:"red.100",bg:"pink.800",boxShadow:"base",borderTopRightRadius:"3xl",borderBottomLeftRadius:"md"},fontWeight:"extrabold",children:"Lottery"})]}),Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.c,{children:Object(m.jsx)(F,{})}),Object(m.jsx)(d.c,{children:Object(m.jsx)(E,{})}),Object(m.jsx)(d.c,{children:Object(m.jsx)(W,{})}),Object(m.jsx)(d.c,{children:Object(m.jsx)(g,{})})]})]})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,1161)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))},V=Object(s.b)({initialColorMode:"dark",useSystemColorMode:!1,shadows:{outline:"none"}});i.a.render(Object(m.jsx)(s.a,{theme:V,children:Object(m.jsx)(c.a,{appId:"NRAAJYMXu0IZzzjop7uKvctvALIXG1zhyujkxedw",serverUrl:"https://df5m531ozw4z.usemoralis.com:2053/server",children:Object(m.jsx)(R,{})})}),document.getElementById("root")),L()},832:function(e,t){},85:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"domain","type":"string"},{"indexed":true,"internalType":"string","name":"ipfs","type":"string"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"created","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"deleted","type":"uint256"}],"name":"RegisterDomain","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"domain","type":"string"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"transfer","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"created","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"deleted","type":"uint256"}],"name":"TransferDomain","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"domain","type":"string"},{"indexed":true,"internalType":"string","name":"ipfs","type":"string"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"address","name":"transfer","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"created","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"deleted","type":"uint256"}],"name":"UpdateDomain","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"domain","type":"string"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"id_lottery","type":"uint256"}],"name":"WinnerLottery","type":"event"},{"inputs":[{"internalType":"bytes32","name":"_bytes32","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"domains","outputs":[{"internalType":"enum AVADoma.TLDs","name":"tld","type":"uint8"},{"internalType":"string","name":"hostname","type":"string"},{"internalType":"string","name":"ipfs","type":"string"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"transfer","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"created_at","type":"uint256"},{"internalType":"uint256","name":"deleted_at","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"getCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"page","type":"uint256"},{"internalType":"uint256","name":"limit","type":"uint256"}],"name":"getDomains","outputs":[{"components":[{"internalType":"enum AVADoma.TLDs","name":"tld","type":"uint8"},{"internalType":"string","name":"hostname","type":"string"},{"internalType":"string","name":"ipfs","type":"string"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"transfer","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"created_at","type":"uint256"},{"internalType":"uint256","name":"deleted_at","type":"uint256"}],"internalType":"struct AVADoma.Domain[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_domain","type":"string"}],"name":"getEndDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_domain","type":"string"}],"name":"getIPFS","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_domain","type":"string"}],"name":"getId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLotteryCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_domain","type":"string"}],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_hostname","type":"string"},{"internalType":"enum AVADoma.TLDs","name":"_tld","type":"uint8"}],"name":"getPrice","outputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_domain","type":"string"}],"name":"getStartDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_domain","type":"string"}],"name":"getTransferAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"id_lottery","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"regInLottery","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum AVADoma.TLDs","name":"_tld","type":"uint8"},{"internalType":"string","name":"_hostname","type":"string"},{"internalType":"string","name":"_ipfs","type":"string"}],"name":"registerDomain","outputs":[{"internalType":"uint256","name":"added_id","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"source","type":"string"}],"name":"stringToBytes32","outputs":[{"internalType":"bytes32","name":"result","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"enum AVADoma.TLDs","name":"_tld","type":"uint8"},{"internalType":"string","name":"_hostname","type":"string"},{"internalType":"string","name":"_ipfs","type":"string"}],"name":"transferDomain","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"enum AVADoma.TLDs","name":"_tld","type":"uint8"},{"internalType":"string","name":"_hostname","type":"string"},{"internalType":"string","name":"_ipfs","type":"string"},{"internalType":"address","name":"_transfer","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"updateDomain","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"winnerLottery","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"domain","type":"uint256"}],"internalType":"struct AVADoma.Winner","name":"","type":"tuple"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"winners","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"domain","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')},862:function(e,t){},902:function(e,t){},904:function(e,t){},928:function(e,t){},930:function(e,t){},942:function(e,t){},959:function(e,t){},962:function(e,t){},964:function(e,t){}},[[1151,1,2]]]);
//# sourceMappingURL=main.56735c27.chunk.js.map