(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{220:function(e,t,a){e.exports=a(412)},225:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},226:function(e,t,a){},410:function(e,t,a){},411:function(e,t,a){},412:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),o=a.n(l),s=a(25),i=a(23),c=a(27),u=a(26),d=(a(225),a(226),a(227),a(413)),m=a(152),p=a(421),h=a(44),f=a(32),g=a(37),v=a(21),E=a.n(v),b=function(e){return{type:"AUTH_SUCCESS",token:e}},y=function(e){return{type:"AUTH_FAIL",error:e}},k=function(){return localStorage.removeItem("user"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}},w=function(e){return function(t){setTimeout((function(){t(k())}),1e3*e)}},O=a(216),S=a(62),j=a(82),C=a(24),N=a(189),D=a.n(N),x=a(420),T=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={file:null,filename:null,columns:[],variables:{},showform:!1,df:null},e.handleChange=function(t){var a=t.target.name,n=Object(j.a)(Object(j.a)({},e.state.variables),{},Object(S.a)({},a,t.target.value));e.setState({variables:n})},e.handleChange2=function(t){e.setState({file:t.target.files[0]})},e.handleFiles=function(t){var a=new FileReader;a.readAsText(t[0]),a.onload=function(e){var n=a.result.split("\n").shift().split(",");this.setState({file:a.result,filename:t[0].name}),this.setState({columns:n});for(var r={},l=0;l<n.length;l++)r[n[l]]="";Object.keys(r).length>0&&this.setState({showform:!0,variables:r})}.bind(Object(C.a)(e))},e.handleVarSubmit=function(t){console.log(e.state.variables)},e.handleSubmit=function(t){t.preventDefault();E.a.post("http://127.0.0.1:8000/communicate/getName/",e.state.variables).then((function(t){console.log(t),console.log("yes");var a=JSON.stringify(t.data);e.setState({df:a}),x.a.open({message:"Notification Title",description:e.state.df,onClick:function(){console.log("Notification Clicked!")}})})),E.a.post("http://127.0.0.1:8000/communicate/getCSV/",{file:e.state.file,filename:e.state.filename}).then((function(e){console.log(e),console.log(e.data)}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(D.a,{name:"csv file",handleFiles:this.handleFiles,fileTypes:".csv"},r.a.createElement("button",{className:"btn"},"Upload CSV")),r.a.createElement("br",null),r.a.createElement("br",null),this.state.showform&&r.a.createElement("div",{id:"varForm",className:"styleform"},r.a.createElement("form",{className:"upload"},Object.entries(this.state.variables).map((function(t){var a=Object(O.a)(t,2),n=a[0],l=a[1];return[r.a.createElement("label",null,n),r.a.createElement("input",{type:"text",name:n,onChange:e.handleChange,valueLink:l}),r.a.createElement("div",{className:"clear"})]}))),r.a.createElement("button",{id:"varSubmit",onClick:this.handleSubmit},"Submit")))}}]),a}(r.a.Component),A=d.a.Header,I=d.a.Content,L=d.a.Footer,F=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,{className:"layout"},r.a.createElement(A,null,r.a.createElement("div",{className:"logo"}),r.a.createElement(m.a,{mode:"horizontal",defaultSelectedKeys:["2"],style:{lineHeight:"64px"}},this.props.isAuthenticated?r.a.createElement(m.a.Item,{key:"2",onClick:this.props.logout},"Logout"):r.a.createElement(m.a.Item,{key:"2"},r.a.createElement(h.b,{to:"/login"},"Login")),r.a.createElement(m.a.Item,{key:"1"},r.a.createElement(h.b,{to:"/"},"Posts")))),r.a.createElement(I,{style:{padding:"0 50px"}},r.a.createElement(p.a,{style:{margin:"16px 0"}},r.a.createElement(p.a.Item,null,r.a.createElement(h.b,{to:"/"},"Home")),r.a.createElement(p.a.Item,null,r.a.createElement(h.b,{to:"/"},"List"))),r.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280}},this.props.children)),r.a.createElement(L,{style:{textAlign:"center"}}))}}]),a}(r.a.Component),M=Object(f.e)(Object(g.b)(null,(function(e){return{logout:function(){return e(k())}}}))(F)),_=a(419),K=a(416),U=a(422),P=a(66),G=a(423),R=a(424),H=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).onFinish=function(t){e.props.onAuth(t.username,t.password),e.props.history.push("/")},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(K.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:this.onFinish},r.a.createElement(K.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}]},r.a.createElement(_.a,{prefix:r.a.createElement(G.a,{className:"site-form-item-icon"}),placeholder:"Username"})),r.a.createElement(K.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}]},r.a.createElement(_.a,{prefix:r.a.createElement(R.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),r.a.createElement(K.a.Item,null,r.a.createElement(K.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0},r.a.createElement(U.a,null,"Remember me")),r.a.createElement("a",{className:"login-form-forgot",href:""},"Forgot password")),r.a.createElement(K.a.Item,null,r.a.createElement(P.a,{type:"primary",htmlType:"submit"},"Login"),"Or",r.a.createElement(h.c,{to:"/signup/"}," signup"))))}}]),a}(r.a.Component),z=Object(g.b)((function(e){return{loading:e.loading,error:e.error}}),(function(e){return{onAuth:function(t,a){return e(function(e,t){return function(a){a({type:"AUTH_START"}),E.a.post("http://127.0.0.1:8000/rest-auth/login/",{username:e,password:t}).then((function(e){var t=e.data.key,n=new Date((new Date).getTime()+36e5);localStorage.setItem("token",t),localStorage.setItem("expirationDate",n),a(b(t)),a(w(3600))})).catch((function(e){a(y(e))}))}}(t,a))}}}))(H),B=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={name:""},e.handleChange=function(t){e.setState({name:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),x.a.open({message:"Notification Title",description:e.state.name,onClick:function(){console.log("Notification Clicked!")}});var a={name:e.state.name};E.a.post("http://127.0.0.1:8000/communicate/getName/",{user:a}).then((function(e){console.log(e.data)}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,size:"small"})),r.a.createElement("button",{type:"submit"},"Add")))}}]),a}(r.a.Component),q=(r.a.Component,a(414),a(417)),Y=a(415),V=a(7),W=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({filename:e.target.value})},n.handleDesc=function(e){n.setState({descrip:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t=e.target.elements.filename.value,a=e.target.elements.descrip.value,r=(JSON.stringify(n.nodes),Object(C.a)(n)),l=[];r.edges.forEach((function(e,t){l.push({source:e.source.id,target:e.target.id,id:e.id})}));var o=JSON.stringify({nodes:r.nodes,edges:l,idct_node:r.idct_node,idct_edge:r.idct_edge});x.a.open({message:"Notification Title",description:n.state.filename,onClick:function(){console.log("Notification Clicked!"),console.log()}}),E.a.post("http://127.0.0.1:8000/api/",{title:t,content:a,model:o}).then((function(e){console.log(e)})),r.loadNewGraph(t,a,o)},n.consts={selectedClass:"selected",connectClass:"connect-node",circleGClass:"conceptG",graphClass:"graph",activeEditId:"active-editing",BACKSPACE_KEY:8,DELETE_KEY:46,ENTER_KEY:13,nodeRadius:50,defaultTitle:"New Node"},n.idct_node=1,n.idct_edge=1,n.nodes=[],n.edges=[],n.state={filename:"",descrip:"",selectedNode:null,selectedEdge:null,mouseDownNode:null,mouseDownLink:null,justDragged:!1,justScaleTransGraph:!1,lastKeyDown:-1,shiftNodeDrag:!1,selectedText:null,showNodeEditor:!1,showEdgeEditor:!1},n.dragLine=null,n.paths=null,n.circles=null,n.drag=null,n.sayHello=n.sayHello.bind(Object(C.a)(n)),n.svgKeyDown=n.svgKeyDown.bind(Object(C.a)(n)),n.svgKeyUp=n.svgKeyUp.bind(Object(C.a)(n)),n.svgMouseDown=n.svgMouseDown.bind(Object(C.a)(n)),n.svgMouseUp=n.svgMouseUp.bind(Object(C.a)(n)),n.updateGraph=n.updateGraph.bind(Object(C.a)(n)),n.updateWindow=n.updateWindow.bind(Object(C.a)(n)),n.insertTitleLinebreaks=n.insertTitleLinebreaks.bind(Object(C.a)(n)),n.changeTextOfNode=n.changeTextOfNode.bind(Object(C.a)(n)),n.dragmove=n.dragmove.bind(Object(C.a)(n)),n.replaceSelectNode=n.replaceSelectNode.bind(Object(C.a)(n)),n.removeSelectFromNode=n.removeSelectFromNode.bind(Object(C.a)(n)),n.spliceLinksForNode=n.spliceLinksForNode.bind(Object(C.a)(n)),n.pathMouseDown=n.pathMouseDown.bind(Object(C.a)(n)),n.removeSelectFromEdge=n.removeSelectFromEdge.bind(Object(C.a)(n)),n.replaceSelectEdge=n.replaceSelectEdge.bind(Object(C.a)(n)),n.circleMouseDown=n.circleMouseDown.bind(Object(C.a)(n)),n.circleMouseUp=n.circleMouseUp.bind(Object(C.a)(n)),n.selectElementContents=n.selectElementContents.bind(Object(C.a)(n)),n}return Object(i.a)(a,[{key:"loadNewGraph",value:function(e,t,a){var n=JSON.parse(a),r=n.nodes,l=n.edges,o=n.idct_node,s=n.idct_edge,i=this;i.setState({filename:e,descrip:t}),l.forEach((function(e,t){l[t]={source:i.nodes.filter((function(t){return t.id==e.source}))[0],target:i.nodes.filter((function(t){return t.id==e.target}))[0],id:e.id}})),i.idct_node=o,i.idct_edge=s,i.nodes=r,i.edges=l,i.updateGraph()}},{key:"componentDidMount",value:function(){var e=this,t=V.select(this.refs.myCanvas).node(),a=t.getBoundingClientRect().width,n=t.getBoundingClientRect().height,r=V.select(this.refs.myCanvas).append("svg").attr("width",a).attr("height",n),l=r.append("svg:defs");l.append("svg:marker").attr("id","end-arrow").attr("viewBox","0 -5 10 10").attr("refX","32").attr("markerWidth",3.5).attr("markerHeight",3.5).attr("orient","auto").append("svg:path").attr("d","M0,-5L10,0L0,5"),l.append("svg:marker").attr("id","mark-end-arrow").attr("viewBox","0 -5 10 10").attr("refX",7).attr("markerWidth",3.5).attr("markerHeight",3.5).attr("orient","auto").append("svg:path").attr("d","M0,-5L10,0L0,5"),e.svg=r,e.svgG=r.append("g").classed(e.consts.graphClass,!0);var o=e.svgG;e.dragLine=o.append("svg:path").attr("class","link dragline hidden").attr("d","M0,0L0,0").style("marker-end","url(#mark-end-arrow)"),e.paths=o.append("g").selectAll("g"),e.circles=o.append("g").selectAll("g"),e.drag=V.behavior.drag().origin((function(e){return{x:e.x,y:e.y}})).on("drag",(function(t){e.state.justDragged=!0,e.dragmove.call(e,t)})).on("dragend",(function(){})),V.select(window).on("keydown",this.svgKeyDown).on("keyup",this.svgKeyUp),r.on("mousedown",this.svgMouseDown),r.on("mouseup",this.svgMouseUp);var s=V.behavior.zoom().on("zoom",(function(){return!V.event.sourceEvent.shiftKey&&(e.state.justScaleTransGraph=!0,V.select("."+e.consts.graphClass).attr("transform","translate("+V.event.translate+") scale("+V.event.scale+")"),!0)})).on("zoomstart",(function(){var t=V.select("#"+e.consts.activeEditId).node();t&&t.blur(),V.event.sourceEvent.shiftKey||V.select("body").style("cursor","move")})).on("zoomend",(function(){V.select("body").style("cursor","auto")}));r.call(s).on("dblclick.zoom",null),window.onresize=this.updateWindow}}]),Object(i.a)(a,[{key:"spliceLinksForNode",value:function(e){var t=this;t.edges.filter((function(t){return t.source===e||t.target===e})).map((function(e){t.edges.splice(t.edges.indexOf(e),1)}))}},{key:"pathMouseDown",value:function(e,t){var a=this.state;V.event.stopPropagation(),a.mouseDownLink=t,a.selectedNode&&this.removeSelectFromNode();var n=a.selectedEdge;n&&n===t?this.removeSelectFromEdge():this.replaceSelectEdge(e,t)}},{key:"removeSelectFromEdge",value:function(){var e=this;e.paths.filter((function(t){return t===e.state.selectedEdge})).classed(e.consts.selectedClass,!1),e.state.selectedEdge=null,e.setState({showEdgeEditor:!1})}},{key:"replaceSelectEdge",value:function(e,t){console.log(t);e.classed(this.consts.selectedClass,!0),this.state.selectedEdge&&this.removeSelectFromEdge(),this.state.selectedEdge=t,this.setState({showEdgeEditor:!0})}},{key:"replaceSelectNode",value:function(e,t){e.classed(this.consts.selectedClass,!0),this.state.selectedNode&&this.removeSelectFromNode(),this.state.selectedNode=t,this.setState({showNodeEditor:!0})}},{key:"removeSelectFromNode",value:function(){var e=this;e.circles.filter((function(t){return t.id===e.state.selectedNode.id})).classed(e.consts.selectedClass,!1),e.state.selectedNode=null,e.setState({showNodeEditor:!1})}},{key:"sayHello",value:function(){console.log(this.paths)}},{key:"svgKeyDown",value:function(){var e=this.state,t=this.consts;if(-1===e.lastKeyDown){e.lastKeyDown=V.event.keyCode;var a=e.selectedNode,n=e.selectedEdge;switch(V.event.keyCode){case t.BACKSPACE_KEY:case t.DELETE_KEY:a?(this.nodes.splice(this.nodes.indexOf(a),1),this.spliceLinksForNode(a),e.selectedNode=null,this.updateGraph()):n&&(this.edges.splice(this.edges.indexOf(n),1),e.selectedEdge=null,this.updateGraph())}}}},{key:"svgKeyUp",value:function(){this.setState({lastKeyDown:-1})}},{key:"svgMouseDown",value:function(){this.setState({graphMouseDown:!0})}},{key:"svgMouseUp",value:function(){var e=this.state;if(e.justScaleTransGraph)e.justScaleTransGraph=!1;else if(e.graphMouseDown&&V.event.shiftKey){var t=V.mouse(this.svgG.node()),a={id:this.idct_node++,title:this.consts.defaultTitle,x:t[0],y:t[1]};this.nodes.push(a),this.updateGraph();var n=this.changeTextOfNode(this.circles.filter((function(e){return e.id===a.id})),a).node();this.selectElementContents(n),n.focus()}else e.shiftNodeDrag&&(e.shiftNodeDrag=!1,this.dragLine.classed("hidden",!0));e.graphMouseDown=!1}},{key:"updateGraph",value:function(){var e=this,t=e.consts,a=e.state;e.paths=e.paths.data(e.edges,(function(e){return String(e.source.id)+"+"+String(e.target.id)}));var n=e.paths;n.style("marker-end","url(#end-arrow)").classed(t.selectedClass,(function(e){return e===a.selectedEdge})).attr("d",(function(e){return"M"+e.source.x+","+e.source.y+"L"+e.target.x+","+e.target.y})),n.enter().append("path").style("marker-end","url(#end-arrow)").classed("link",!0).attr("d",(function(e){return"M"+e.source.x+","+e.source.y+"L"+e.target.x+","+e.target.y})).on("mousedown",(function(t){e.pathMouseDown(V.select(this),t)})).on("mouseup",(function(e){a.mouseDownLink=null})),n.exit().remove(),e.circles=e.circles.data(e.nodes,(function(e){return e.id})),e.circles.attr("transform",(function(e){return"translate("+e.x+","+e.y+")"}));var r=e.circles.enter().append("g");r.classed(t.circleGClass,!0).attr("transform",(function(e){return"translate("+e.x+","+e.y+")"})).on("mouseover",(function(e){a.shiftNodeDrag&&V.select(this).classed(t.connectClass,!0)})).on("mouseout",(function(e){V.select(this).classed(t.connectClass,!1)})).on("mousedown",(function(t){e.circleMouseDown(V.select(this),t)})).on("mouseup",(function(t){e.circleMouseUp(V.select(this),t)})).call(e.drag),r.append("circle").attr("r",String(t.nodeRadius)),r.each((function(t){e.insertTitleLinebreaks(V.select(this),t.title)})),e.circles.exit().remove()}},{key:"circleMouseDown",value:function(e,t){var a=this.state;if(V.event.stopPropagation(),a.mouseDownNode=t,V.event.shiftKey)return a.shiftNodeDrag=V.event.shiftKey,void this.dragLine.classed("hidden",!1).attr("d","M"+t.x+","+t.y+"L"+t.x+","+t.y)}},{key:"circleMouseUp",value:function(e,t){var a=this,n=a.state,r=a.consts;n.shiftNodeDrag=!1,e.classed(r.connectClass,!1);var l=n.mouseDownNode;if(l){if(a.dragLine.classed("hidden",!0),l!==t){var o={source:l,target:t,value:"Default Value",id:this.idct_edge++};a.paths.filter((function(e){return e.source===o.target&&e.target===o.source&&a.edges.splice(a.edges.indexOf(e),1),e.source===o.source&&e.target===o.target}))[0].length||(a.edges.push(o),console.log("New Edge"),a.updateGraph())}else if(n.justDragged)n.justDragged=!1;else if(V.event.shiftKey){var s=a.changeTextOfNode(e,t).node();a.selectElementContents(s),s.focus()}else{n.selectedEdge&&a.removeSelectFromEdge();var i=n.selectedNode;i&&i.id===t.id?a.removeSelectFromNode():a.replaceSelectNode(e,t)}n.mouseDownNode=null}}},{key:"dragmove",value:function(e){this.state.shiftNodeDrag?this.dragLine.attr("d","M"+e.x+","+e.y+"L"+V.mouse(this.svgG.node())[0]+","+V.mouse(this.svgG.node())[1]):(e.x+=V.event.dx,e.y+=V.event.dy,this.updateGraph())}},{key:"updateWindow",value:function(){var e=V.select(this.refs.myCanvas).node(),t=e.getBoundingClientRect().width,a=e.getBoundingClientRect().height;this.svg.attr("width",t).attr("height",a)}},{key:"insertTitleLinebreaks",value:function(e,t){for(var a=t.split(/\s+/g),n=a.length,r=e.append("text").attr("text-anchor","middle").attr("dy","-"+7.5*(n-1)),l=0;l<a.length;l++){var o=r.append("tspan").text(a[l]);l>0&&o.attr("x",0).attr("dy","15")}}},{key:"selectElementContents",value:function(e){var t=document.createRange();t.selectNodeContents(e);var a=window.getSelection();a.removeAllRanges(),a.addRange(t)}},{key:"changeTextOfNode",value:function(e,t){var a=this,n=this.consts,r=e.node(),l=V.select(this.refs.myCanvas).node().getBoundingClientRect();e.selectAll("text").remove();var o=r.getBoundingClientRect(),s=o.width/n.nodeRadius,i=5*s,c=s>1?.71*o.width:1.42*n.nodeRadius;return this.svg.selectAll("foreignObject").data([t]).enter().append("foreignObject").attr("x",o.left+i-.99*l.left).attr("y",o.top+i-.93*l.top).attr("height",2*c).attr("width",c).append("xhtml:p").attr("id",n.activeEditId).attr("contentEditable","true").text(t.title).on("mousedown",(function(e){V.event.stopPropagation()})).on("keydown",(function(e){V.event.stopPropagation(),V.event.keyCode!=n.ENTER_KEY||V.event.shiftKey||this.blur()})).on("blur",(function(t){t.title=this.textContent,a.insertTitleLinebreaks(e,t.title),V.select(this.parentElement).remove()}))}},{key:"render",value:function(){var e;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{id:"graph",ref:"myCanvas"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{id:"toolbox"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"filename",value:this.state.filename,onChange:this.handleChange,size:"small",placeholder:"Name your file here"}),r.a.createElement("input",(e={type:"text",name:"descrip",value:this.state.descrip,placeholder:"describe your model here"},Object(S.a)(e,"name","descrip"),Object(S.a)(e,"onChange",this.handleDesc),e))),r.a.createElement("button",{type:"submit"},"Add this model")),this.state.selectedNode&&r.a.createElement("h2",null," You selected a node "),this.state.selectedEdge&&r.a.createElement("h2",null," You selected an edge ")))}}]),a}(r.a.Component),J=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={articles:[]},e.handleClick=function(e){x.a.open({message:"Notification Title",description:"File Uploaded!"})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://127.0.0.1:8000/api/").then((function(t){e.setState({articles:t.data})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(q.b,{itemLayout:"vertical",size:"large",pagination:{onChange:function(e){console.log(e)},pageSize:3},dataSource:this.state.articles,footer:r.a.createElement("div",null),renderItem:function(t){return r.a.createElement(q.b.Item,{key:t.title},r.a.createElement("button",{id:"varSubmit",onClick:e.handleClick},"Submit"),r.a.createElement(q.b.Item.Meta,{avatar:r.a.createElement(Y.a,{src:t.avatar}),title:r.a.createElement("a",{href:t.href},t.title),description:t.description}),t.content)}})}}]),a}(r.a.Component),X=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).onFinish=function(t){e.props.onAuth(t.username,t.email,t.password1,t.password2),e.props.history.push("/")},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(K.a,{name:"normal_login",onFinish:this.onFinish},r.a.createElement(K.a.Item,{name:"username",label:"username",rules:[{required:!0,message:"Please input your Username!"}]},r.a.createElement(_.a,{prefix:r.a.createElement(G.a,{className:"site-form-item-icon"}),placeholder:"username"})),r.a.createElement(K.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]},r.a.createElement(_.a,{placeholder:"Email"})),r.a.createElement(K.a.Item,{name:"password1",label:"Password",rules:[{required:!0,message:"Please input your Password!"}]},r.a.createElement(_.a.Password,{placeholder:"Password"})),r.a.createElement(K.a.Item,{name:"password2",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,a){return a&&t("password1")!==a?Promise.reject("The two passwords that you entered do not match!"):Promise.resolve()}}}]},r.a.createElement(_.a.Password,null)),r.a.createElement(K.a.Item,null,r.a.createElement(P.a,{type:"primary",htmlType:"submit"},"signup"),"Or",r.a.createElement(h.c,{to:"/login/"},"login")))}}]),a}(r.a.Component),Q=Object(g.b)((function(e){return{loading:e.loading,error:e.error}}),(function(e){return{onAuth:function(t,a,n,r){return e(function(e,t,a,n){return function(r){r({type:"AUTH_START"}),E.a.post("http://127.0.0.1:8000/rest-auth/registration/",{username:e,email:t,password1:a,password2:n}).then((function(e){var t=e.data.key,a=new Date((new Date).getTime()+36e5);localStorage.setItem("token",t),localStorage.setItem("expirationDate",a),r(b(t)),r(w(3600))})).catch((function(e){r(y(e))}))}}(t,a,n,r))}}}))(X),Z=a(151),$=a.n(Z),ee=a(212),te=K.a.Item,ae=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleFormSubmit=function(){var t=Object(ee.a)($.a.mark((function t(a,n,r){var l;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),l={title:a.target.elements.title.value,content:a.target.elements.content.value},E.a.defaults.xsrfHeaderName="X-CSRFTOKEN",E.a.defaults.xsrfCookieName="csrftoken",E.a.defaults.headers={"Content-Type":"application/json",Authorization:"Token ".concat(e.props.token)},"post"!==n){t.next=10;break}return t.next=8,E.a.post("http://127.0.0.1:8000/api/create/",l).then((function(t){201===t.status&&e.props.history.push("/")}));case 8:t.next=13;break;case 10:if("put"!==n){t.next=13;break}return t.next=13,E.a.put("http://127.0.0.1:8000/api/".concat(r,"/update/"),l).then((function(t){200===t.status&&e.props.history.push("/")}));case 13:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(K.a,{onSubmit:function(t){return e.handleFormSubmit(t,e.props.requestType,e.props.articleID)}},r.a.createElement(te,{label:"Title"},r.a.createElement(_.a,{name:"title",placeholder:"Put a title here"})),r.a.createElement(te,{label:"Content"},r.a.createElement(_.a,{name:"content",placeholder:"Enter some content ..."})),r.a.createElement(te,null,r.a.createElement(P.a,{type:"primary",htmlType:"submit"},this.props.btnText))))}}]),a}(r.a.Component),ne=Object(g.b)((function(e){return{token:e.token}}))(ae),re=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={articles:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://127.0.0.1:8000/api/").then((function(t){e.setState({articles:t.data}),console.log(t.data)}))}},{key:"componentWillReceiveProps",value:function(e){e.token&&this.fetchArticles()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(J,{data:this.state.articles})," ",r.a.createElement("br",null),r.a.createElement("h2",null," Create a model "),r.a.createElement(ne,{requestType:"post",articleID:null,btnText:"Create"}))}}]),a}(r.a.Component),le=a(418),oe=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={article:{}},e.handleDelete=function(t){t.preventDefault();var a=e.props.match.params.articleID;E.a.defaults.headers={"Content-Type":"application/json",Authorization:"Token ".concat(e.props.token)},E.a.delete("http://127.0.0.1:8000/api/".concat(a,"/delete/")).then((function(t){204===t.status&&e.props.history.push("/")}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.articleID;E.a.get("http://127.0.0.1:8000/api/".concat(t)).then((function(t){e.setState({article:t.data})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(le.a,{title:this.state.article.title},r.a.createElement("p",null," ",this.state.article.content," ")),r.a.createElement(ne,Object.assign({},this.props,{token:this.props.token,requestType:"put",articleID:this.props.match.params.articleID,btnText:"Update"})),r.a.createElement("form",{onSubmit:this.handleDelete},r.a.createElement(P.a,{type:"danger",htmlType:"submit"},"Delete")))}}]),a}(r.a.Component),se=Object(g.b)((function(e){return{token:e.token}}))(oe),ie=function(){return r.a.createElement("div",null,r.a.createElement(f.a,{exact:!0,path:"/",component:re})," ",r.a.createElement(f.a,{exact:!0,path:"/articles/:articleID/",component:se})," ",r.a.createElement(f.a,{exact:!0,path:"/login/",component:z})," ",r.a.createElement(f.a,{exact:!0,path:"/signup/",component:Q})," "," ")},ce=(a(410),m.a.SubMenu),ue=d.a.Header,de=(d.a.Footer,d.a.Sider),me=d.a.Content,pe=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({input:e.target.value})},n.handleFiles=function(e){var t=new FileReader;t.onload=function(e){alert(t.result)},t.readAsText(e[0])},n.state={input:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(ue,{className:"header"},r.a.createElement("div",{className:"logo"}),r.a.createElement(m.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"]},r.a.createElement(m.a.Item,{key:"1"},"Life and Death Chain"))),r.a.createElement(d.a,null,r.a.createElement(de,{width:300,className:"site-layout-background"},r.a.createElement(m.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0}},r.a.createElement(ce,{key:"sub1",title:"Input \u56e0\u5b50 List"},r.a.createElement(m.a.Item,{key:"1"},r.a.createElement(B,null)),r.a.createElement(m.a.Item,{key:"2"},r.a.createElement(B,null)),r.a.createElement(m.a.Item,{key:"3"},r.a.createElement(B,null)),r.a.createElement(m.a.Item,{key:"4"}," ")))),r.a.createElement(d.a,{style:{padding:"0 30px 30px"}},r.a.createElement(p.a,{style:{margin:"16px 0"}},r.a.createElement(T,null),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(me,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:280}},r.a.createElement("br",null),r.a.createElement(W,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(J,null),r.a.createElement("br",null),r.a.createElement(h.a,null,r.a.createElement(M,this.props,r.a.createElement(ie,null)))))))}}]),a}(n.Component),he=Object(g.b)((function(e){return{isAuthenticated:null!==e.token}}),(function(e){return{onTryAutoSignup:function(){return e((function(e){var t=localStorage.getItem("token");if(void 0===t)e(k());else{var a=new Date(localStorage.getItem("expirationDate"));a<=new Date?e(k()):(e(b(t)),e(w((a.getTime()-(new Date).getTime())/1e3)))}}))}}}))(pe),fe=(a(411),a(81)),ge=a(214),ve=function(e,t){return Object(j.a)(Object(j.a)({},e),t)},Ee={token:null,error:null,loading:!1},be=function(e,t){return ve(e,{error:null,loading:!0})},ye=function(e,t){return ve(e,{token:t.token,error:null,loading:!1})},ke=function(e,t){return ve(e,{error:t.error,loading:!1})},we=function(e,t){return ve(e,{token:null})},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return be(e);case"AUTH_FAIL":return ke(e,t);case"AUTH_LOGOUT":return we(e);case"AUTH_SUCCESS":return ye(e,t);default:return e}},Se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||fe.c,je=Object(fe.d)(Oe,Se(Object(fe.a)(ge.a))),Ce=r.a.createElement(g.a,{store:je},r.a.createElement(he,null));o.a.render(Ce,document.getElementById("root"))}},[[220,1,2]]]);
//# sourceMappingURL=main.7bb2689b.chunk.js.map