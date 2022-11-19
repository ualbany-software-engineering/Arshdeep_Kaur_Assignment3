(this["webpackJsonpblogapp-frontend"]=this["webpackJsonpblogapp-frontend"]||[]).push([[0],{132:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(30),r=a.n(o),s=(a(83),a(34)),i=a.n(s),c=a(42),m=a(16),u=a(17),g=a(7),d=a(19),h=a(18),p=(a(85),a(86),a(23)),b=a(11),E=a(12),f=a.n(E),v=a(133),y=a(134),k=a(135),w=a(136),O=a(137),C=a(155),N=a(73),j=a(156),U=a(157),S=a(138),M=a(71),x=a.n(M),L=a(13),D=a(14),F=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).toggle=n.toggle.bind(Object(g.a)(n)),n.logout=n.logout.bind(Object(g.a)(n)),n.dropdownToggle=n.dropdownToggle.bind(Object(g.a)(n)),n.state={isOpen:!1,navCollapsed:!0,showNavbar:!1,user:null,isDropdownOpen:!1},n}return Object(u.a)(a,[{key:"dropdownToggle",value:function(){this.setState({isDropdownOpen:!this.state.isDropdownOpen})}},{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"componentDidMount",value:function(){var e=this;console.log(this.props),f.a.get("/api/users/current").then((function(t){return e.setState({user:t.data.user})})).catch((function(e){return console.log(e.response)}))}},{key:"logout",value:function(){var e=this;f.a.get("/api/users/logout").then((function(t){console.log(t.data),e.props.updateUser(null),e.setState({user:null})})).catch((function(e){return console.log(e.response)})),window.location="/login"}},{key:"render",value:function(){return l.a.createElement(v.a,{color:"dark",dark:!0,expand:"lg"},l.a.createElement(p.b,{to:"/",className:"navbar-brand",style:{fontFamily:"Monoton",fontWeight:"100"}},l.a.createElement("img",{src:x.a,style:{maxWidth:"40px"},className:"mx-2",alt:"logo"}),"BlogApp"),l.a.createElement(y.a,{onClick:this.toggle})," ",l.a.createElement(k.a,{isOpen:this.state.isOpen,navbar:!0},this.state.user?l.a.createElement(w.a,{className:"ml-auto mr-2",navbar:!0},l.a.createElement(O.a,{className:"navbar-item"},l.a.createElement(C.a,{isOpen:this.state.isDropdownOpen,toggle:this.dropdownToggle},l.a.createElement(N.a,{id:"caret",color:"primary"},l.a.createElement(L.a,{icon:D.e,className:"mr-2"}),this.state.user.username),l.a.createElement(j.a,{caret:!0,color:"primary"}),l.a.createElement(U.a,{right:!0},l.a.createElement(p.b,{to:"/myblogs/",className:"dropdown-item"},"My Blogs"),l.a.createElement(S.a,{divider:!0}),l.a.createElement(S.a,{onClick:this.logout},"logout",l.a.createElement(L.a,{icon:D.d,className:"ml-3"})))))):l.a.createElement(w.a,{className:"ml-auto",navbar:!0},l.a.createElement(O.a,{className:"navbar-item"},l.a.createElement(p.b,{className:"nav-link",to:"/login"},"Login")))))}}]),a}(n.Component),R=a(139),P=a(140),B=a(141),I=a(142),_=a(143),T=a(144),A=a(145),W=a(158),G=a(146),$=a(147),q=a(148),z=a(149),J=a(150),K=a(151),H=a(152),Q=a(37),V=a.n(Q),X=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).toggleModal=n.toggleModal.bind(Object(g.a)(n)),n.onbodyChange=n.onbodyChange.bind(Object(g.a)(n)),n.ontitleChange=n.ontitleChange.bind(Object(g.a)(n)),n.onimgChange=n.onimgChange.bind(Object(g.a)(n)),n.onSubmit=n.onSubmit.bind(Object(g.a)(n)),n.deleteBlog=n.deleteBlog.bind(Object(g.a)(n)),n.state={imageURL:"",title:"",body:"",author:"",data:"",likes:[],isModalOpen:!1,loaded:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.location.blog&&this.setState({imageURL:this.props.location.blog.blog.image,title:this.props.location.blog.blog.title,body:this.props.location.blog.blog.body,author:this.props.location.blog.blog.author,date:this.props.location.blog.blog.date,likes:this.props.location.blog.blog.likes,loaded:!0}),this.props.location.blog||f.a.get("/api/blogs/".concat(this.props.match.params.id)).then((function(t){var a=t.data;e.setState({imageURL:a.image,title:a.title,body:a.body,author:a.author,date:a.date,likes:a.likes,loaded:!0})})).catch((function(e){return console.log({err:e})}))}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"ontitleChange",value:function(e){this.setState({title:e.target.value})}},{key:"onbodyChange",value:function(e){this.setState({body:e.target.value})}},{key:"onimgChange",value:function(e){this.setState({imageURL:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state.imageURL;if(!a)return alert("Please select image."),!1;if(!a.match(/\.(jpg|jpeg|png)$/))return alert("Please select valid image."),!1;if(0==this.state.title.length)return alert("Please input title"),!1;if(0==this.state.body.length)return alert("Plaese input Body"),!1;var n=new FormData(e.target);f.a.put("/api/blogs/".concat(this.props.match.params.id),n).then((function(e){var a=e.data.blog;t.setState({title:a.title,imageURL:a.image,body:a.body,date:a.date}),console.log(a)})).catch((function(e){return console.log(e)})),this.toggleModal()}},{key:"deleteBlog",value:function(){f.a.delete("/api/blogs/".concat(this.props.match.params.id)).then((function(e){var t=e.data;console.log(t),window.location="/"})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"pt-2 px-3"},l.a.createElement("div",{className:"row mr-auto ml-0 mb-4 mt-0"},l.a.createElement(N.a,{color:"primary",size:"lg",onClick:function(){window.location.href="/"},style:{width:"60px",height:"60px",borderRadius:"50%"}},l.a.createElement(L.a,{icon:D.a}))),this.state.loaded?l.a.createElement(R.a,{id:"blog",className:"p-2 col-12 singleBlog"},l.a.createElement(P.a,{top:!0,width:"100%",src:".."+this.state.imageURL,alt:"Card image cap",className:"img-fluid"}),l.a.createElement(B.a,null,l.a.createElement(I.a,{className:"text-primary"},l.a.createElement("h5",null,this.state.title,l.a.createElement("span",{className:"float-right text-secondary"},"-",l.a.createElement("em",null,"@",this.state.author.username)))),""!==this.state.date&&l.a.createElement(_.a,{className:"text-dark"},l.a.createElement(L.a,{icon:D.b,className:"mr-2"}),new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric"}).format(Date.parse(this.state.date)),l.a.createElement("span",{className:"float-right"},l.a.createElement(L.a,{className:"text-danger",icon:D.c})," ",this.state.likes.length)),l.a.createElement(T.a,null,l.a.createElement("br",null),this.state.body)),l.a.createElement(A.a,null,null!==this.props.user&&this.props.user._id===this.state.author.id&&l.a.createElement("div",{style:{display:"flex"},className:"p-1"},l.a.createElement(N.a,{className:"btn btn-danger mr-1",style:{width:"48%"},onClick:this.deleteBlog},"Delete")," ",l.a.createElement(N.a,{className:"btn btn-warning ml-1",style:{width:"48%"},onClick:this.toggleModal},"Edit")))):l.a.createElement(V.a,{type:"spin",color:"orange",height:"100vh",width:"40%",className:"loading"}),l.a.createElement(W.a,{isOpen:this.state.isModalOpen,fade:!1,toggle:this.toggleModal},l.a.createElement(G.a,{toggle:this.toggleModal},"Add a blog"),l.a.createElement($.a,{onSubmit:this.onSubmit},l.a.createElement(q.a,null,l.a.createElement(z.a,null,l.a.createElement(J.a,{htmlFor:"title"},"title"),l.a.createElement(K.a,{type:"text",id:"title",onChange:this.ontitleChange,value:this.state.title,name:"title"})),l.a.createElement(z.a,null,l.a.createElement(J.a,{htmlFor:"imageURL"},"imageURL"),l.a.createElement(K.a,{type:"file",id:"imageURL",name:"imageURL",onChange:this.onFileChange})),l.a.createElement(z.a,null,l.a.createElement(J.a,{htmlFor:"body"},"body"),l.a.createElement(K.a,{type:"textarea",id:"body",onChange:this.onbodyChange,value:this.state.body,name:"body"}))),l.a.createElement(H.a,null,l.a.createElement(N.a,{type:"submit",value:"submit",color:"primary"},"UPDATE BLOG")))))}}]),a}(n.Component),Y=a(77),Z=a(76),ee=a(153),te=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={liked:!1,likes:n.props.blog.likes.length},n.toggleLike=n.toggleLike.bind(Object(g.a)(n)),n}return Object(u.a)(a,[{key:"toggleLike",value:function(){var e=this;this.state.liked?f.a.put("/api/blogs/".concat(this.props.blog._id,"/unlike")).then((function(t){e.setState({liked:!1,likes:t.data.likes.length})})).catch((function(e){return console.log(e.response)})):f.a.put("/api/blogs/".concat(this.props.blog._id,"/like")).then((function(t){e.setState({liked:!0,likes:t.data.likes.length})})).catch((function(e){return console.log(e.response)}))}},{key:"componentDidMount",value:function(){try{var e,t=Object(Z.a)(this.props.blog.likes);try{for(t.s();!(e=t.n()).done;){if(e.value.id===this.props.user._id){this.setState({liked:!0});break}}}catch(a){t.e(a)}finally{t.f()}}catch(n){console.log(n)}}},{key:"render",value:function(){var e=this.props.blog;return l.a.createElement("div",{className:"col-12 col-md-6 col-lg-4 col-xl-3 mb-5",key:e._id},l.a.createElement(R.a,{className:"p-1 m-1 h-100",id:"cards"},l.a.createElement(R.a,null,l.a.createElement(P.a,{top:!0,width:"100%",src:e.image,alt:"Card image cap",className:"img-fluid"}),l.a.createElement(ee.a,null,l.a.createElement("h3",null,l.a.createElement(L.a,{className:"text-danger",icon:D.c})," ",this.state.likes))),l.a.createElement(B.a,{className:"d-flex flex-column"},l.a.createElement(I.a,{className:"text-primary"},l.a.createElement("h5",null,e.title,this.state.liked?l.a.createElement("span",{className:"float-right ",style:{cursor:"pointer"},onClick:this.toggleLike},l.a.createElement(L.a,{icon:D.c,className:"text-danger"})):l.a.createElement("span",{className:"float-right ",onClick:this.toggleLike},l.a.createElement(L.a,{style:{color:"rgba(0,0,0,0.2)",cursor:"pointer"},icon:D.c,className:""})))),l.a.createElement(_.a,null,"-",l.a.createElement("em",null,"@",e.author.username)),l.a.createElement("br",null),l.a.createElement(T.a,{className:""},e.body.substring(0,70)," ..."),l.a.createElement(p.b,{to:{pathname:"/blog/".concat(e._id),blog:{blog:e}},className:"text-decoration-none mt-auto"},l.a.createElement(N.a,{className:"btn btn-sm",color:"success"},"Read More"))),e.date&&l.a.createElement(A.a,{className:"small "},l.a.createElement(L.a,{icon:D.b,className:"mr-2"}),new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric"}).format(Date.parse(e.date)))))}}]),a}(n.Component),ae=function(e){var t=e.blogs,a=e.user,n=e.setUser;return t.map((function(e){return l.a.createElement(te,{key:e._id,blog:e,user:a,setUser:n})}))},ne=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={blogs:null,isModalOpen:!1,title:"",body:"",imageURL:"",user:null},n.toggleModal=n.toggleModal.bind(Object(g.a)(n)),n.onbodyChange=n.onbodyChange.bind(Object(g.a)(n)),n.ontitleChange=n.ontitleChange.bind(Object(g.a)(n)),n.onSubmit=n.onSubmit.bind(Object(g.a)(n)),n.onFileChange=n.onFileChange.bind(Object(g.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("api/users/current").then((function(t){e.setState({user:t.data.user}),f.a.get("/api/blogs").then((function(t){var a=t.data.blogs;a.sort((function(e,t){return e.likes.length<t.likes.length?1:t.likes.length<e.likes.length?-1:0})),e.setState({blogs:a})})).catch((function(e){"Not Logged in"===e.response.data.err&&(window.location="/login")}))})).catch((function(e){return console.log(e.response.data)}))}},{key:"ontitleChange",value:function(e){this.setState({title:e.target.value})}},{key:"onbodyChange",value:function(e){this.setState({body:e.target.value})}},{key:"onFileChange",value:function(e){this.setState({imageURL:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state.imageURL;if(!a)return alert("Please select image."),!1;if(!a.match(/\.(jpg|jpeg|png)$/))return alert("Please select valid image."),!1;if(0==this.state.title.length)return alert("Please input title"),!1;if(0==this.state.body.length)return alert("Plaese input Body"),!1;var n=new FormData(e.target);f.a.post("/api/blogs",n).then((function(e){var a=e.data.blog;t.setState({blogs:[a].concat(Object(Y.a)(t.state.blogs))})})).catch((function(e){return console.log(e.response)})),this.toggleModal()}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"render",value:function(){return l.a.createElement("div",{className:""},l.a.createElement(N.a,{color:"danger",onClick:this.toggleModal,style:{marginLeft:"25vw",marginTop:"2vh",width:"50vw"}},"Add a BLOG"),l.a.createElement("div",{className:"row pt-4 justify-content-center ",style:{marginLeft:"5vw",width:"90vw"}},this.state.blogs?l.a.createElement(ae,{blogs:this.state.blogs,user:this.state.user,liked:this.state.like,toggleLike:this.toggleLike,setUser:this.props.setUser}):l.a.createElement(V.a,{type:"spin",color:"orange",height:"100vh",width:"40%",className:"loading"}),l.a.createElement(W.a,{isOpen:this.state.isModalOpen,fade:!1,toggle:this.toggleModal},l.a.createElement(G.a,{toggle:this.toggleModal},"Add a blog"),l.a.createElement($.a,{onSubmit:this.onSubmit},l.a.createElement(q.a,null,l.a.createElement(z.a,null,l.a.createElement(J.a,{htmlFor:"title"},"title"),l.a.createElement(K.a,{type:"text",id:"title",onChange:this.ontitleChange,name:"title"})),l.a.createElement(z.a,null,l.a.createElement(J.a,{htmlFor:"imageURL"},"imageURL"),l.a.createElement(K.a,{type:"file",id:"imageURL",name:"imageURL",onChange:this.onFileChange})),l.a.createElement(z.a,null,l.a.createElement(J.a,{htmlFor:"body"},"body"),l.a.createElement(K.a,{type:"textarea",id:"body",onChange:this.onbodyChange,name:"body"}))),l.a.createElement(H.a,null,l.a.createElement(N.a,{type:"submit",value:"submit",color:"primary"},"Add BLOG"))))))}}]),a}(n.Component),le=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={likes:n.props.blog.likes,isOpen:!1},n.showLikes=n.showLikes.bind(Object(g.a)(n)),n}return Object(u.a)(a,[{key:"showLikes",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this.props.blog;return l.a.createElement("div",{className:"col-12 col-md-6 col-lg-4 col-xl-3 mb-5",key:e._id},l.a.createElement(R.a,{className:"p-1 m-1",id:"cards"},l.a.createElement(R.a,null,l.a.createElement(P.a,{top:!0,width:"100%",src:e.image,alt:"Card image cap",className:"img-fluid"}),l.a.createElement(ee.a,null,l.a.createElement("h3",null,l.a.createElement(L.a,{className:"text-danger",icon:D.c})," ",e.likes.length))),l.a.createElement(B.a,null,l.a.createElement(I.a,{className:"text-primary"},l.a.createElement("h5",null,e.title,this.state.liked?l.a.createElement("span",{className:"float-right ",style:{cursor:"pointer"},onClick:this.toggleLike}):l.a.createElement("span",{className:"float-right ",onClick:this.toggleLike}))),l.a.createElement(_.a,null,"-",l.a.createElement("em",null,"@",e.author.username)),l.a.createElement("br",null),l.a.createElement(T.a,{className:""},e.body.substring(0,50)," ..."),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement(N.a,{className:"btn btn-sm col-5 mr-1",color:"success"},l.a.createElement(p.b,{to:{pathname:"/blog/".concat(e._id),blog:{blog:e}},className:"text-decoration-none text-white"},"Read More")),l.a.createElement(N.a,{className:"col-5 btn btn-sm ml-1",color:"danger",onClick:this.showLikes},"Likes"))),e.date&&l.a.createElement(A.a,{className:"small "},l.a.createElement(L.a,{icon:D.b,className:"mr-2"}),new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric"}).format(Date.parse(e.date)),this.state.isOpen&&l.a.createElement("div",{className:"likes m-3"},l.a.createElement("h6",null,l.a.createElement(L.a,{className:"text-danger",icon:D.c})," ",this.state.likes.length," Likes"),l.a.createElement("ul",{className:"list-group list-group-flush"},this.state.likes.map((function(e){return l.a.createElement("li",{className:"list-group-item py-2 pl-0"},l.a.createElement(L.a,{icon:D.f}),"  ",e.username)})))))))}}]),a}(n.Component),oe=function(e){return e.blogs.map((function(e){return l.a.createElement(le,{key:e._id,blog:e})}))},re=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={blogs:null,likes:0},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("/api/blogs/my").then((function(t){var a=t.data.blogs,n=0;a.forEach((function(e){n+=e.likes.length})),e.setState({blogs:a,likes:n})})).catch((function(e){return console.log(e.response)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"row mr-auto ml-3 mb-1 mt-1"},l.a.createElement(N.a,{color:"primary",size:"lg",onClick:function(){window.location.href="/"},style:{width:"60px",height:"60px",borderRadius:"50%"}},l.a.createElement(L.a,{icon:D.a}))),l.a.createElement("div",{className:"row pt-4 justify-content-center",style:{marginLeft:"5vw",width:"90vw"}},this.state.blogs?l.a.createElement(oe,{blogs:this.state.blogs}):l.a.createElement("div",{className:"btn btn-lg btn-danger"},"404 : No Blogs Found")))}}]),a}(n.Component),se=a(154),ie=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onChangePassword=n.onChangePassword.bind(Object(g.a)(n)),n.onChangeUsername=n.onChangeUsername.bind(Object(g.a)(n)),n.onChangeEmail=n.onChangeEmail.bind(Object(g.a)(n)),n.onSubmit=n.onSubmit.bind(Object(g.a)(n)),n.toggleModal=n.toggleModal.bind(Object(g.a)(n)),n.toggleError=n.toggleError.bind(Object(g.a)(n)),n.addUser=n.addUser.bind(Object(g.a)(n)),n.state={username:"",password:"",email:"",alert:!1,isModalOpen:!1,errMessage:"",alertCol:"danger"},n}return Object(u.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={username:this.state.username,password:this.state.password};f.a.post("/api/users/login",a).then((function(e){t.props.updateUser(e.data.user).then((function(){window.location="/"}))})).catch((function(e){var a,n,l;console.log(e.response);var o="";void 0===(o=null===e||void 0===e||null===(a=e.response)||void 0===a||null===(n=a.data)||void 0===n||null===(l=n.err)||void 0===l?void 0:l.name)?o="Something went wrong":"IncorrectUsernameError"===o?o="Incorrect Username":"IncorrectPasswordError"===o&&(o="Incorrect Password"),t.setState({alert:!0,alertCol:"danger",errMessage:o})}))}},{key:"addUser",value:function(e){var t=this;e.preventDefault();var a={username:this.state.username,password:this.state.password,email:this.state.email};f.a.post("/api/users/",a).then((function(e){var a=e.data;console.log(a),t.props.updateUser(a.user).then((function(){window.location="/"})),t.setState({alert:!1})})).catch((function(e){var a,n,l,o="";void 0===(o=null===e||void 0===e||null===(a=e.response)||void 0===a||null===(n=a.data)||void 0===n||null===(l=n.err)||void 0===l?void 0:l.name)?o="Something went wrong":"UserExistsError"===o?o="User Already Exists":"IncorrectPasswordError"===o&&(o="Incorrect Password"),t.setState({alert:!0,alertCol:"danger",errMessage:o}),t.setState({alert:!0,errMessage:o,alertCol:"danger"}),console.log(e.response)})),this.toggleModal()}},{key:"componentDidMount",value:function(){this.props.user&&(window.location="/")}},{key:"toggleError",value:function(){this.setState({alert:!this.state.alert})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"p-3 mt-1"},l.a.createElement(se.a,{color:this.state.alertCol,fade:!0,toggle:this.toggleError,isOpen:this.state.alert},this.state.errMessage)),l.a.createElement("div",{id:"form",className:"p-4 my-4"},l.a.createElement("h1",{style:{fontFamily:"Kaushan Script"}},"Login"),l.a.createElement($.a,{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement(J.a,null,"Username : "),l.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername})),l.a.createElement("div",{className:"form-group"},l.a.createElement(J.a,null,"Password : "),l.a.createElement("input",{type:"password",required:!0,className:"form-control",value:this.state.password,onChange:this.onChangePassword})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Login",className:"btn btn-primary"}),"     ","New to"," ",l.a.createElement("span",{style:{fontFamily:"Monoton"}},"BlogApp ?")," ",l.a.createElement(N.a,{className:"btn btn-sm",color:"success",onClick:this.toggleModal},"Sign Up")))),l.a.createElement(W.a,{isOpen:this.state.isModalOpen,fade:!1,toggle:this.toggleModal},l.a.createElement(G.a,{toggle:this.toggleModal},l.a.createElement("h1",{style:{fontFamily:"Kaushan Script"}},"SignUp")),l.a.createElement($.a,{onSubmit:this.addUser},l.a.createElement(q.a,null,l.a.createElement(z.a,null,l.a.createElement(J.a,{htmlFor:"username"},"Username"),l.a.createElement(K.a,{type:"text",id:"username",onChange:this.onChangeUsername,name:"username"})),l.a.createElement(z.a,null,l.a.createElement(J.a,{htmlFor:"email"},"Email"),l.a.createElement(K.a,{type:"text",id:"email",onChange:this.onChangeEmail,name:"email"})),l.a.createElement(z.a,null,l.a.createElement(J.a,{htmlFor:"password"},"Password"),l.a.createElement(K.a,{type:"password",id:"password",onChange:this.onChangePassword,name:"password"}))),l.a.createElement(H.a,null,l.a.createElement(N.a,{type:"submit",value:"submit",color:"primary"},"Sign Up")))))}}]),a}(n.Component),ce=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var l;return Object(m.a)(this,a),(l=t.call(this,e)).wrapper=Object(n.createRef)(),l.updateUser=l.updateUser.bind(Object(g.a)(l)),l.setUser=l.setUser.bind(Object(g.a)(l)),l.state={user:null},l}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.wrapper.current;console.log(t),f.a.get("api/users/current").then((function(t){return e.setState({user:t.data.user})})).catch((function(e){return console.log(e.response)}))}},{key:"setUser",value:function(){var e=Object(c.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.get("api/users/current").then((function(e){t.setState({user:e.data.user}),console.log(t.state.user)})).catch((function(e){return console.log(e.response.data)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({user:t}),console.log(this.state.user);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return l.a.createElement(p.a,null,l.a.createElement(F,{user:this.state.user,updateUser:this.updateUser}),l.a.createElement(b.a,{path:"/",exact:!0,render:function(t){return l.a.createElement(ne,Object.assign({},t,{user:e.state.user,updateUser:e.updateUser,setUser:e.setUser}))}}),l.a.createElement(b.a,{path:"/blog/:id",exact:!0,render:function(t){return l.a.createElement(X,Object.assign({},t,{user:e.state.user,updateUser:e.updateUser}))}}),l.a.createElement(b.a,{path:"/myblogs/",exact:!0,component:function(){return l.a.createElement(re,{user:e.state.user,updateUser:e.updateUser})}}),l.a.createElement(b.a,{path:"/login",exact:!0,render:function(t){return l.a.createElement(ie,Object.assign({},t,{user:e.state.user,updateUser:e.updateUser}))}}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,t,a){e.exports=a.p+"static/media/blog.6641d2b3.png"},78:function(e,t,a){e.exports=a(132)},83:function(e,t,a){},85:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.cb43916a.chunk.js.map