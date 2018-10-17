(function(t){function e(e){for(var a,r,o=e[0],l=e[1],u=e[2],m=0,d=[];m<o.length;m++)r=o[m],i[r]&&d.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(d.length)d.shift()();return n.push.apply(n,u||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/filmyoutube/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"16dc":function(t,e,s){"use strict";var a=s("9aac"),i=s.n(a);i.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),i=s("1dce"),n=s.n(i),r=s("5433"),o=s.n(r),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("header",[s("div",{staticClass:"navbar"},[s("div",{staticClass:"container"},[s("div",{staticClass:"navbar-content"},[s("router-link",{staticClass:"header-logo",attrs:{to:"/"}},[t._v("Film library")]),s("div",{staticClass:"button-burger",class:{active:t.menuShow},on:{click:function(e){t.menuShow=!t.menuShow}}},[s("span",{staticClass:"line line-1"}),s("span",{staticClass:"line line-2"}),s("span",{staticClass:"line line-3"})]),s("div",{staticClass:"navbar-list__wrapper",class:{active:t.menuShow}},[s("ul",{staticClass:"navbar-list"},t._l(t.linkMenu,function(e){return s("li",{key:e.title,staticClass:"navbar-item",on:{click:function(e){t.menuShow=!1}}},[s("router-link",{staticClass:"navbar-link",attrs:{to:""+e.url}},[t._v(t._s(e.title))])],1)}))])],1)])])]),s("router-view")],1)},u=[],c={data:function(){return{menuShow:!1,linkMenu:[{title:"Home",url:"/"},{title:"Tasks",url:"/Task"},{title:"Login",url:"/login"},{title:"Registration",url:"/registration"}]}}},m=c,d=s("2877"),p=Object(d["a"])(m,l,u,!1,null,null,null);p.options.__file="App.vue";var v=p.exports,f=s("2ef0"),h=s.n(f),g=s("8c4f"),b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("section",[s("div",{staticClass:"container"},[s("h1",{staticClass:"ui-title-1"},[t._v("Home")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.taskTitle,expression:"taskTitle"}],attrs:{type:"text",placeholder:"What we will watch?"},domProps:{value:t.taskTitle},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.newTask(e):null},input:function(e){e.target.composing||(t.taskTitle=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.image,expression:"image"}],attrs:{type:"text",placeholder:"Image url"},domProps:{value:t.image},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.newTask(e):null},input:function(e){e.target.composing||(t.image=e.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.taskDescription,expression:"taskDescription"}],attrs:{type:"text"},domProps:{value:t.taskDescription},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.newTask(e):null},input:function(e){e.target.composing||(t.taskDescription=e.target.value)}}}),s("div",{staticClass:"option-list"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.whatWatch,expression:"whatWatch"}],staticClass:"what-watch--radio",attrs:{type:"radio",id:"radioAnime",value:"Anime"},domProps:{checked:t._q(t.whatWatch,"Anime")},on:{change:function(e){t.whatWatch="Anime"}}}),s("label",{attrs:{for:"radioAnime"}},[t._v("Anime")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.whatWatch,expression:"whatWatch"}],staticClass:"what-watch--radio",attrs:{type:"radio",id:"radioFilm",value:"Film"},domProps:{checked:t._q(t.whatWatch,"Film")},on:{change:function(e){t.whatWatch="Film"}}}),s("label",{attrs:{for:"radioFilm"}},[t._v("Film")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.whatWatch,expression:"whatWatch"}],staticClass:"what-watch--radio",attrs:{type:"radio",id:"radioSerial",value:"Serial"},domProps:{checked:t._q(t.whatWatch,"Serial")},on:{change:function(e){t.whatWatch="Serial"}}}),s("label",{attrs:{for:"radioSerial"}},[t._v("Serial")])]),s("div",{staticClass:"total-time"},["Film"===t.whatWatch?s("div",{staticClass:"total-time__film"},[s("span",{staticClass:"time-title"},[t._v("Hours")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.filmHours,expression:"filmHours",modifiers:{number:!0}}],staticClass:"time-input",attrs:{type:"number"},domProps:{value:t.filmHours},on:{input:function(e){e.target.composing||(t.filmHours=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),s("span",{staticClass:"time-title"},[t._v("Minutes")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.filmMinutes,expression:"filmMinutes",modifiers:{number:!0}}],staticClass:"time-input",attrs:{type:"number"},domProps:{value:t.filmMinutes},on:{input:function(e){e.target.composing||(t.filmMinutes=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),s("p",[t._v(t._s(t.filmTime))])]):t._e(),"Serial"===t.whatWatch?s("div",{staticClass:"total-time__serial"},[s("span",{staticClass:"time-title"},[t._v("How many season?")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.serialSeason,expression:"serialSeason",modifiers:{number:!0}}],staticClass:"time-input",attrs:{type:"number"},domProps:{value:t.serialSeason},on:{input:function(e){e.target.composing||(t.serialSeason=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),s("span",{staticClass:"time-title"},[t._v("How many series?")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.serialSeries,expression:"serialSeries",modifiers:{number:!0}}],staticClass:"time-input",attrs:{type:"number"},domProps:{value:t.serialSeries},on:{input:function(e){e.target.composing||(t.serialSeries=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),s("span",{staticClass:"time-title"},[t._v("How mach time by series?")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.serialSeriesMinutes,expression:"serialSeriesMinutes",modifiers:{number:!0}}],staticClass:"time-input",attrs:{type:"number"},domProps:{value:t.serialSeriesMinutes},on:{input:function(e){e.target.composing||(t.serialSeriesMinutes=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),s("p",[t._v(t._s(t.serialTime))])]):t._e(),"Anime"===t.whatWatch?s("div",{staticClass:"total-time__anime"},[s("span",{staticClass:"time-title"},[t._v("How many season?")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.animeSeason,expression:"animeSeason",modifiers:{number:!0}}],staticClass:"time-input",attrs:{type:"number"},domProps:{value:t.animeSeason},on:{input:function(e){e.target.composing||(t.animeSeason=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),s("span",{staticClass:"time-title"},[t._v("How many series?")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.animeSeries,expression:"animeSeries",modifiers:{number:!0}}],staticClass:"time-input",attrs:{type:"number"},domProps:{value:t.animeSeries},on:{input:function(e){e.target.composing||(t.animeSeries=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),s("span",{staticClass:"time-title"},[t._v("How mach time by series?")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.animeSeriesMinutes,expression:"animeSeriesMinutes",modifiers:{number:!0}}],staticClass:"time-input",attrs:{type:"number"},domProps:{value:t.animeSeriesMinutes},on:{input:function(e){e.target.composing||(t.animeSeriesMinutes=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),s("p",[t._v(t._s(t.animeTime))])]):t._e()]),s("img",{attrs:{src:t.image,alt:"NO IMAGE"}}),s("div",{staticClass:"tag_list tag_list--add"},[s("div",{staticClass:"ui-tag__wrapper",on:{click:function(e){t.tagMenuShow=!t.tagMenuShow}}},[s("div",{staticClass:"ui-tag"},[s("span",{staticClass:"tag-title"},[t._v("Add New")]),s("span",{staticClass:"button-close",class:{active:!t.tagMenuShow}})])])]),t.tagMenuShow?s("div",{staticClass:"tag-list tag-list--menu"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.tagTitle,expression:"tagTitle"}],staticClass:"tag-add--input",attrs:{type:"text",placeholder:"New tag"},domProps:{value:t.tagTitle},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.newTag(e):null},input:function(e){e.target.composing||(t.tagTitle=e.target.value)}}}),s("div",{staticClass:"button button-default",on:{click:t.newTag}},[t._v("Send")])]):t._e(),s("div",{staticClass:"tag_list"}),t._l(t.tags,function(e){return s("div",{key:e.title,staticClass:"ui-tag__wrapper"},[s("div",{staticClass:"ui-tag",class:{used:e.use},on:{click:function(s){t.addTagUsed(e)}}},[s("span",{staticClass:"tag-title"},[t._v(t._s(e.title))]),s("span",{staticClass:"button-close"})])])}),s("p",[t._v(t._s(t.tagsUsed))]),s("div",{staticClass:"button-list"},[s("div",{staticClass:"button button--round button-primary",on:{click:t.newTask}},[t._v("Send")])])],2)])])},w=[],C=(s("84b4"),{created:function(){console.log(this.$lodash.isEmpty(null))},data:function(){return{taskTitle:"",taskDescription:"",whatWatch:"Anime",image:"",tagMenuShow:!1,tagTitle:"",filmHours:1,filmMinutes:30,serialSeason:1,serialSeries:11,serialSeriesMinutes:40,animeSeason:1,animeSeries:12,animeSeriesMinutes:24,tagsUsed:[]}},methods:{newTag:function(){if(""!==this.tagTitle){var t={title:this.tagTitle,use:!1};this.$store.dispatch("newTag",t)}},newTask:function(){if(""!==this.taskTitle){var t;switch(this.whatWatch){case"Film":t=this.filmTime;break;case"Anime":t=this.animeTime;break;case"Serials":t=this.serialTime;break}var e={title:this.taskTitle,description:this.taskDescription,whatWatch:this.whatWatch,time:t,tags:this.tagsUsed,completed:!1,editing:!1};this.$store.dispatch("newTask",e),console.log(e),this.taskTitle="",this.taskDescription="",this.tagsUsed=[];for(var s=0;s<this.tags.length;s++)this.tags[s].use=!1}},addTagUsed:function(t){t.use=!t.use,t.use?this.tagsUsed.push({title:t.title}):_.remove(this.tagsUsed,function(e){return e.title===t.title})},getHoursAndMinutes:function(t){var e=Math.trunc(t/60),s=t%60;return"".concat(e," Hours ").concat(s," Minutes")}},computed:{tags:function(){return this.$store.getters.tags},filmTime:function(){var t=60*this.filmHours+this.filmMinutes;return this.getHoursAndMinutes(t)},serialTime:function(){var t=this.serialSeason*this.serialSeries*this.serialSeriesMinutes;return this.getHoursAndMinutes(t)},animeTime:function(){var t=this.animeSeason*this.animeSeries*this.animeSeriesMinutes;return this.getHoursAndMinutes(t)}}}),k=C,y=(s("f0f6"),Object(d["a"])(k,b,w,!1,null,"11ea168a",null));y.options.__file="Home.vue";var S=y.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("section",[s("div",{staticClass:"container"},[s("div",{staticClass:"task-list__header"},[s("h1",{staticClass:"ui-title-1"},[t._v("Tasks")]),s("div",{staticClass:"buttons-list"},[s("p",[t._v(t._s(t.filter))]),s("div",{staticClass:"button button--round button-default",on:{click:function(e){t.filter="active"}}},[t._v("Active")]),s("div",{staticClass:"button button--round button-default",on:{click:function(e){t.filter="completed"}}},[t._v("Completed")]),s("div",{staticClass:"button button--round button-default",on:{click:function(e){t.filter="all"}}},[t._v("All")])])]),s("div",{staticClass:"task-list"},t._l(t.tasksFilter,function(e){return s("div",{key:e.id,staticClass:"task-item",class:{completed:e.completed}},[s("div",{staticClass:"ui-card ui-card--shadow"},[s("div",{staticClass:"task-item__info"},[s("div",{staticClass:"task-item__main-info"},[s("span",{staticClass:"ui-label ui-label--light"},[t._v(t._s(e.whatWatch))]),s("span",[t._v("№ "+t._s(e.id)+" Total Time: "+t._s(e.time))])]),s("span",{staticClass:"button-close"})]),s("div",{staticClass:"task-item__content"},[s("div",{staticClass:"task-item__header"},[s("div",{staticClass:"ui-checkbox-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"task.completed"}],staticClass:"ui-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:function(s){var a=e.completed,i=s.target,n=!!i.checked;if(Array.isArray(a)){var r=null,o=t._i(a,r);i.checked?o<0&&t.$set(e,"completed",a.concat([r])):o>-1&&t.$set(e,"completed",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(e,"completed",n)}}})]),s("span",{staticClass:"ui-title-3"},[t._v(t._s(e.title))])]),s("div",{staticClass:"task-item__body"},[s("p",{staticClass:"ui-text-regular"},[t._v(t._s(e.description))])]),s("div",{staticClass:"task-item__footer"},[s("div",{staticClass:"tag_list"},t._l(e.tags,function(e){return s("div",{key:e.title,staticClass:"ui-tag__wrapper"},[s("div",{staticClass:"ui-tag"},[s("span",{staticClass:"tag-title"},[t._v(t._s(e.title))])])])}))])])])])}))])])])},P=[],T={data:function(){return{filter:"active"}},computed:{tasksFilter:function(){switch(this.filter){case"active":return this.$store.getters.taskNotCompleted;case"completed":return this.$store.getters.taskCompleted;case"all":return this.$store.getters.tasks}},tasks:function(){}}},x=T,N=(s("16dc"),Object(d["a"])(x,$,P,!1,null,"f4825ee6",null));N.options.__file="Task.vue";var M=N.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("section",[s("div",{staticClass:"container"},[s("div",{staticClass:"auth"},[t._m(0),s("div",{staticClass:"auth__form"},[s("span",{staticClass:"ui-title-2"},[t._v("Login")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("div",{staticClass:"form-item",class:{errorInput:t.$v.email.$error}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],class:{error:t.$v.email.$error},attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{change:function(e){t.$v.email.$touch()},input:function(e){e.target.composing||(t.email=e.target.value)}}}),t.$v.email.required?t._e():s("div",{staticClass:"error"},[t._v("Field is required")]),t.$v.email.email?t._e():s("div",{staticClass:"error"},[t._v("Email is not correct")])]),s("div",{staticClass:"form-item",class:{errorInput:t.$v.password.$error}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],class:{error:t.$v.password.$error},attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{change:function(e){t.$v.password.$touch()},input:function(e){e.target.composing||(t.password=e.target.value)}}}),t.$v.password.required?t._e():s("div",{staticClass:"error"},[t._v("Password is required.")]),t.$v.password.minLength?t._e():s("div",{staticClass:"error"},[t._v("Password must have at least "+t._s(t.$v.password.$params.minLength.min)+" letters.")])]),s("div",{staticClass:"buttons-list"},[s("button",{staticClass:"button button-primary",attrs:{type:"submit",disabled:"PENDING"===t.submitStatus}},[t._v("Login")]),s("div",{staticClass:"buttons-list buttons-list--info"},["OK"===t.submitStatus?s("p",{staticClass:"typo__p"},[t._v("Thanks for your submission!")]):t._e(),"ERROR"===t.submitStatus?s("p",{staticClass:"typo__p"},[t._v("Please fill the form correctly.")]):t._e(),"PENDING"===t.submitStatus?s("p",{staticClass:"typo__p"},[t._v("Sending...")]):t._e()]),s("div",{staticClass:"buttons-list buttons-list--info"},[s("span",[t._v("Need registration?"),s("router-link",{attrs:{to:"/registration"}},[t._v("  Enter here")])],1)])])])])])])])])},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"auth__banner"},[s("h1",{staticClass:"ui-title-2"},[t._v("Hello Banner")])])}],A=s("b5ae"),W={data:function(){return{email:"",password:"",repeatPassword:"",submitStatus:null}},validations:{email:{required:A["required"],email:A["email"]},password:{required:A["required"],minLength:Object(A["minLength"])(6)}},methods:{onSubmit:function(){var t=this;if(this.$v.$touch(),this.$v.$invalid)this.submitStatus="ERROR";else{console.log("Login!");var e={email:this.email,password:this.password};console.table(e),this.submitStatus="PENDING",setTimeout(function(){t.submitStatus="OK"},500)}}}},H=W,q=(s("57b6"),Object(d["a"])(H,E,O,!1,null,"49dbf503",null));q.options.__file="Login.vue";var j=q.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("section",[s("div",{staticClass:"container"},[s("div",{staticClass:"auth"},[t._m(0),s("div",{staticClass:"auth__form"},[s("span",{staticClass:"ui-title-2"},[t._v("Registration")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("div",{staticClass:"form-item",class:{errorInput:t.$v.email.$error}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],class:{error:t.$v.email.$error},attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{change:function(e){t.$v.email.$touch()},input:function(e){e.target.composing||(t.email=e.target.value)}}}),t.$v.email.required?t._e():s("div",{staticClass:"error"},[t._v("Field is required")]),t.$v.email.email?t._e():s("div",{staticClass:"error"},[t._v("Email is not correct")])]),s("div",{staticClass:"form-item",class:{errorInput:t.$v.password.$error}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],class:{error:t.$v.password.$error},attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{change:function(e){t.$v.password.$touch()},input:function(e){e.target.composing||(t.password=e.target.value)}}}),t.$v.password.required?t._e():s("div",{staticClass:"error"},[t._v("Password is required.")]),t.$v.password.minLength?t._e():s("div",{staticClass:"error"},[t._v("Password must have at least "+t._s(t.$v.password.$params.minLength.min)+" letters.")])]),s("div",{staticClass:"form-item",class:{errorInput:t.$v.repeatPassword.$error}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.repeatPassword,expression:"repeatPassword"}],class:{error:t.$v.repeatPassword.$error},attrs:{type:"password",placeholder:"Repeat your password"},domProps:{value:t.repeatPassword},on:{change:function(e){t.$v.repeatPassword.$touch()},input:function(e){e.target.composing||(t.repeatPassword=e.target.value)}}}),t.$v.repeatPassword.sameAsPassword?t._e():s("div",{staticClass:"error"},[t._v("Passwords must be identical.")])]),s("div",{staticClass:"buttons-list"},[s("button",{staticClass:"button button-primary",attrs:{type:"submit",disabled:"PENDING"===t.submitStatus}},[t._v("Registration")]),s("div",{staticClass:"buttons-list buttons-list--info"},["OK"===t.submitStatus?s("p",{staticClass:"typo__p"},[t._v("Thanks for your submission!")]):t._e(),"ERROR"===t.submitStatus?s("p",{staticClass:"typo__p"},[t._v("Please fill the form correctly.")]):t._e(),"PENDING"===t.submitStatus?s("p",{staticClass:"typo__p"},[t._v("Sending...")]):t._e()]),s("div",{staticClass:"buttons-list buttons-list--info"},[s("span",[t._v("Do you have account?"),s("router-link",{attrs:{to:"/login"}},[t._v("  Enter here")])],1)])])])])])])])])},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"auth__banner"},[s("h1",{staticClass:"ui-title-2"},[t._v("Hello Banner")])])}],U={data:function(){return{email:"",password:"",repeatPassword:"",submitStatus:null}},validations:{email:{required:A["required"],email:A["email"]},password:{required:A["required"],minLength:Object(A["minLength"])(6)},repeatPassword:{sameAsPassword:Object(A["sameAs"])("password")}},methods:{onSubmit:function(){var t=this;if(this.$v.$touch(),this.$v.$invalid)this.submitStatus="ERROR";else{console.log("submit!");var e={email:this.email,password:this.password};console.table(e),this.submitStatus="PENDING",setTimeout(function(){t.submitStatus="OK"},500)}}}},F=U,I=(s("b8b1"),Object(d["a"])(F,R,D,!1,null,"6d59d44e",null));I.options.__file="Registration.vue";var L=I.exports;a["a"].use(g["a"]);var G=new g["a"]({base:"/filmyoutube/dist/",mode:"history",routes:[{path:"/",name:"home",component:S},{path:"/task",name:"task",component:M},{path:"/login",name:"login",component:j},{path:"/registration",name:"registration",component:L}]}),B=s("2f62"),K={state:{tasks:[{id:1,title:"Ashes",description:"Блестящий, но одержимый профессор, работает над изобретениелжен остановить инфекцию прежде, чем она погубит его, и тех кого он любит.",whatWatch:"Film",completed:!1,editing:!1},{id:2,title:"Breaking Bad",description:"Школьный учитель химии Уолтер Уайт узнаёт, что болен раком лёго исключённого из школы при активном содействии Уайта. Пинкман сам занимался «варкой мета», но накануне, в ходе рейда УБН, он лишился подельника и лаборатории…",whatWatch:"Serial",completed:!0,editing:!1}]},mutations:{newTask:function(t,e){t.tasks.push(e)}},actions:{newTask:function(t,e){var s=t.commit;e.id=Math.random(),s("newTask",e)}},getters:{tasks:function(t){return t.tasks},taskCompleted:function(t){return t.tasks.filter(function(t){return t.completed})},taskNotCompleted:function(t){return t.tasks.filter(function(t){return!1===t.completed})}}},J={state:{tags:[{title:"Comedy",use:!1},{title:"Westerns",use:!1},{title:"Cats",use:!1}]},mutations:{newTag:function(t,e){t.tags.push(e)}},actions:{newTag:function(t,e){var s=t.commit;s("newTag",e)}},getters:{tags:function(t){return t.tags}}};a["a"].use(B["a"]);var z=new B["a"].Store({modules:{task:K,tags:J}});a["a"].use(n.a,o.a),Object.defineProperty(a["a"].prototype,"$lodash",{value:h.a}),a["a"].config.productionTip=!1,new a["a"]({router:G,store:z,render:function(t){return t(v)}}).$mount("#app")},"57b6":function(t,e,s){"use strict";var a=s("957a"),i=s.n(a);i.a},"957a":function(t,e,s){},"9aac":function(t,e,s){},a25d:function(t,e,s){},b8b1:function(t,e,s){"use strict";var a=s("ead9"),i=s.n(a);i.a},ead9:function(t,e,s){},f0f6:function(t,e,s){"use strict";var a=s("a25d"),i=s.n(a);i.a}});
//# sourceMappingURL=app.d6a807eb.js.map