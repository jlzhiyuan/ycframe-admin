var vm = new Vue({
  el: '#manage',
  router,
  store,
  i18n,
  data:function(){
	  var that = this;
	   var checkPhoneNum = function (rule, value, callback) {
	        if (!value) {
	        	return callback(new Error('必填'));
	        }
	        if (!Number.isInteger(Number(value))) {
	        	callback(new Error('请输入数字值'));
	        }else if(value.toString().length < 7 || value.toString().length > 12){
	        	callback(new Error('请输入位数为7到12的数字'));
	        }else {
	        	callback();
	        }
	    };

	    var validatePass = function (rule, value, callback) {
	        if (value === '') {
	          callback(new Error('请输入密码'));
	        } else {
	        	 var dxzm = /^(?=.*?[A-Z]).*$/;
					if(!dxzm.test(value)){
						callback(new Error("密码至少包含一个大写字母"));
					}
	  			    var xxzm = /^(?=.*?[a-z]).*$/;
					if(!xxzm.test(value)){
						callback(new Error("密码至少包含一个小写字母"));
					}
					
					var sz = /^(?=.*?[0-9]).*$/;
					if(!sz.test(value)){
						callback(new Error("密码至少包含一个数字"));
					}
	          callback();
	        }
	    };
        var validatePass2 = function (rule, value, callback) {
	        if (value === '') {
	          callback(new Error('请再次输入密码'));
	        } else if (value !== that.form.newPwd) {
	          callback(new Error('两次输入密码不一致'));
	        } else {
	          callback();
	        }
        };
		return {
			isDialog:false,
			isDialog2:false,
			rules: {
				 newPwd: [
                 	{required:true, validator: validatePass, trigger: 'blur' }
                   ],
                   confirmPwd: [
                     {required:true, validator: validatePass2, trigger: 'blur' }
                 ]
	        },
         	form: {
         		id:'',
         		ryid:'',
         		bmmc: '',
         		loginName: '',
         		newPwd: '',
         		confirmPwd:''
             },
			 rules2: {
				  Telephone1: [
		               { required: true, validator: checkPhoneNum, trigger: 'blur' }
                  ],
                  Telephone2: [
                       { required: true, validator: checkPhoneNum, trigger: 'blur' }
                  ],
                  realName:[
                        { required: true, message:"请填写人员名称", trigger: 'blur' } 
                  ]
            },
         	form2: {
         		Telephone1:'',
         		Telephone2:'',
         		sex: '',
         		bmmc: '',
         		realName: '',
         		ryid:'',
         		id:''
            },
			user:{},
			isShow: true,
		    isCollapse: false,
		    boxWidth: '',
		    defaultActive: '',
		    screenHeight: '',
		    boxHeight: '',
		    scrollBox: '',
		    style: {
		        position: 'fixed',
		        top: '10px',
		        right: '500px',
		        zIndex: '9999'
		    },
		    name: '',
		    routerss: [],
		    menuList: null,
		    sideList: [],
		    id: '0',
		    mactiveIndex:null,
		    isSwitch: false,
		    programName: '',
		    programIcon:'',
		    isShowMainMenu: false,
		    iframeList: [],
		    newIframe: [],
		    openList: []
        }
  },
  components: {
	  sidebar: sidebar,
//    back: backTop
  },
  directives: {
    drag: {
      bind(el, binding, vnode) {
        var oDiv = el;  //当前元素
        var self = this; //上下文
        oDiv.onmousedown = function (e) {
         //鼠标按下，计算当前元素距离可视区的距离
          var disX = e.clientX - oDiv.offsetLeft;
          var disY = e.clientY - oDiv.offsetTop;
          document.onmousemove = function (e) {
           //通过事件委托，计算移动的距离
            var l = e.clientX - disX;
            var t = e.clientY - disY;
            oDiv.style.left = l + 'px';
            oDiv.style.top = t + 'px';
//            binding.value({x:e.pageX,y:e.pageY})
          };
          document.onmouseup = function (e) {
            document.onmousemove = null;
            document.onmouseup = null;
          };
        };
      }
    }
  },
  computed: {
	  openTab:function () {
	      return this.$store.state.openTab;
	   },
       activeIndex:{
	      get:function () {
	        return this.$store.state.activeIndex;
	      },
	      set:function (val) {
	        this.$store.commit('set_active_index', val);
	      }
      },
      routers:function() {
    	  return this.$store.state.routes;
      },
      cachedViews:function() {
    	  var list = [];
	      for (var i = 0; i < this.$store.state.openTab.length;i++) {
	        list.push(this.$store.state.openTab[i].name);
	      }
	      return list;
      },
	  scrollHeight:function() {
    	  return this.$refs.main.scrollTop
	  }
	},
	watch:{
		cachedViews:function() {
		},
    '$route':function(to,from){
    	
        for(var i=0;i<this.newIframe.length;i++){
      	  if(this.newIframe[i].path === this.$route.path){
      		  this.newIframe[i].show=true; 
      	  }
        }
        
        var flag = false;
        for(var item of this.openTab){
          if(item.title === to.meta.title){
            this.$store.commit('set_active_index',to.path);
            flag = true;
            break;
          }
        }

        if(!flag){
          this.isShow = true;
          this.$store.commit('add_tabs', {route: to.path, name: to.name, title: to.meta.title});
          this.$store.commit('set_active_index', to.path);
//          for (i = 0;i < this.newIframe.length;i++) {
//      		if (this.newIframe[i].path == to.path) {
//      			this.newIframe.splice(i,1);
////      			this.newIframe.push(this.newIframe[i]);
//      		}
//      	}
        }                              
    },
    screenHeight:function(val) {
      this.boxHeight = this.screenHeight - 80 + 'px';
      this.scrollBox = this.screenHeight - 80 - 50 + 'px';
      this.$store.commit('watch_height', this.screenHeight);
    }
  },
	mounted: function(){ 
		var that = this;
//		$$.theme.init({success:function(data){
//			console.log("init",data);
//  		  if (data.code == 0) {
//  			 that.programName = data.data.programName;
//  			 that.programIcon = "./Uploaddoc/"+data.data.programIcon;
//  			 that.isShowMainMenu = data.data.isShowMainMenu; 
//  			 $('title').html(that.programName);
//  		  } else {
//  			  
//  		  }
//  	    }});
		$$.user.getUserDetail({success:function(userdata){
			console.log("userdetail",userdata);
			if(userdata.code!=0)
				return;
			
			that.user = userdata.data;
				
			if (that.user.jsid == '492') {
				$.ajaxSettings.async = false; 
				$.getJSON('ui/js/json_data.json', function(jsondata){
					that.menuList = jsondata.routers[0];
				});
				
				$$.modules.menu({success:function(data){
					if (data.code == 0) {
						that.routerss = data.data;
						that.sideList = data.data;
//						that.isSwitch = data.data.isSwitch;
						if (that.isShowMainMenu) {
							that.sideList = that.sideList[0].children;
							/*that.routerss.push({
								id: '-1',
								meta: {
									icon: 'el-icon-document',
									title: '组件示例'
								},
								children: []
							})*/
							that.mactiveIndex = that.routerss[0].id;
						} else {
							that.sideList.unshift(that.menuList);
						}
					}
		  		}});
			} else {
				$$.modules.menu({success:function(data){
					if (data.code == 0) {
						that.routerss = data.data;
						that.sideList = data.data;
//						that.isSwitch = data.data.isSwitch;
						if (that.isShowMainMenu) {
							that.sideList = that.sideList[0].children;
							that.mactiveIndex = that.routerss[0].id;
						}
					}
		  		}
				});
			}
		}
		});
		this.screenHeight = window.innerHeight;
		 window.onresize = function() {
			 that.screenHeight = window.innerHeight;
			 that.$store.commit('watch_height', that.screenHeight);
		 }
//		window.onresize = () => {
//		      return (() => {
//		        that.screenHeight = window.innerHeight;
//		      })()
//	    }
		this.boxHeight = this.screenHeight - 80 + 'px';
	    this.scrollBox = this.screenHeight - 80 - 50 + 'px';
	    this.name = this.$refs.main;
	    this.boxWidth = 200 + 'px';
		//刷新时以当前路由做为tab加入tabs
    	//当前路由不是首页时，添加首页以及另一页到store里，并设置激活状态
    	//当当前路由是首页时，添加首页到store，并设置激活状态
	    if (this.$route.path !== '/' && this.$route.path !== '/home') {
	      console.log('1');
	      this.$store.commit('set_active_index', '/home');
	      this.$router.push('/');
	      // this.$store.commit('add_tabs', {route: '/home' , name: 'home'});
	      // this.$store.commit('add_tabs', {route: this.$route.path , name: this.$route.name });
	      // this.$store.commit('set_active_index', this.$route.path);
	    } else {
	      this.$store.commit('set_active_index', '/home');
	      this.$router.push('/');
	    }
	   
		var dataList = $$.modules.getComponent();
		this.iframeList = dataList.data;
		for (var i = 0; i < this.iframeList.length;i++) {
			if (this.iframeList[i].component == 'Website') {
				this.newIframe.push(this.iframeList[i]);
			}
		}
	},
	methods: {
		queryTree:function(tree, id) {
      	  var stark = [];
    	    stark = stark.concat(tree);

    	    while(stark.length) {
    	    	var temp = stark.shift();
    	        if(temp.children) {
    	            // 当前节点有子节点时，将子节点放到当前的栈的前面
    	            stark = temp.children.concat(stark);
    	        }
    	        if (temp.id == id) {
    	        	if (temp.children) {
    	        		return temp.children;
    	        	} else {
    	        		return temp
    	        	}
    	        }
    	    }
        },
        handleSelect:function(key, keyPath){ 
        	if (key == -1) {
        		this.id = key;
        		this.sideList = this.menuList.children;
        	} else {
        		this.id = key;
            	this.sideList = this.queryTree(this.routerss,key);
        	}
        },
		changeMenu:function(item,index) {
        	if (item.meta.title == '组件示例') {
        		this.id = index;
        		this.sideList = this.menuList.children;
        	} else {
        		this.id = index;
            	this.sideList = this.queryTree(this.routerss,item.id);
        	}
//        	this.id = index;
//        	this.sideList = this.queryTree(this.routerss,item.id);
//        	this.sideList = this.sideList.unshift(this.menuList);
        	
//			YCFrame.Utils.RunServer.init("./ScriptRouter/");
//			var that = this;
//			if (item == '部门管理') {
//				k
//			} else if (item == '人员管理'){
//				ModuleRunserver.menu(function(data){
//					that.routerss = data.data;
//					console.log('that.routerss=>',that.routerss);
//		  		});
//			} else {
//				$.ajaxSettings.async = false;
//				$.getJSON('ui/js/json_data.json', function(data){
//					that.routerss.unshift(data.routers[0]);
////					that.routerss = data.routers[0];
//				});
//			}
		},
    collapse:function() {
      this.isCollapse = !this.isCollapse;
      this.$store.commit('watch_menu', this.isCollapse);
      if (this.isCollapse) {
        this.boxWidth = 64 + 'px';
      } else {
        this.boxWidth = 230 + 'px';
      }
    },
    handleOpen:function(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose:function(key, keyPath) {
      console.log(key, keyPath);
    },     
		//tab标签点击时，切换相应的路由
    tabClick:function(tab){
    	this.isShow = false;
      this.$router.push({path: this.activeIndex});
//      this.$store.commit('add_tabs', {route: to.path, : to.name,});
      console.log('tab=>',tab);
    },
    //移除tab标签
    tabRemove:function(targetName){
    	  for(var i=0;i<this.newIframe.length;i++){
          	  if(this.newIframe[i].path === targetName){
          		  this.newIframe[i].show=false; 
          	  }
            } 
//    	for (var i = 0;i < this.newIframe.length;i++) {
//    		if (this.newIframe[i].path == targetName) {
////    			this.openList.push(this.newIframe[i]);
//    			this.newIframe.splice(i,1);
//    		}
//    	}
    	console.log('this.openList=>',this.openList);
    	console.log('this.newIframe=>',this.newIframe);
    	console.log('targetName=>',targetName);
//     YCFrame.Utils.RunServer.init("./ScriptRouter/");
//	 var dataList = ModuleRunserver.getComponent();
//	 this.iframeList = dataList.data;
//		console.log('this.iframeList=>',this.iframeList);
//		for (var j = 0; j < this.iframeList.length;j++) {
//			if (this.iframeList[j].component == 'Website') {
//				this.newIframe.push(this.iframeList[j]);
//			}
//		}
    	this.isShow = false;
      //首页不删
      if(targetName == '/' || targetName == '/home'){
        return
      }
      this.$store.commit('delete_tabs', targetName);
      if (this.activeIndex === targetName) {
        // 设置当前激活的路由
        if (this.openTab && this.openTab.length >= 1) {
          this.$store.commit('set_active_index', this.openTab[this.openTab.length-1].route);
          this.$router.push({path: this.activeIndex});
        } else {
          this.$router.push({path: '/'});
        }
      }
//      YCFrame.Utils.RunServer.init("./ScriptRouter/");
//		var dataList = ModuleRunserver.getComponent();
//		this.iframeList = dataList.data;
//		console.log('this.iframeList=>',this.iframeList);
//		for (var j = 0; j < this.iframeList.length;i++) {
//			if (this.iframeList[j].component == 'Website') {
//				this.newIframe.push(this.iframeList[j]);
//			}
//		}
//      for (var i = 0;i < this.newIframe.length;i++) {
//    	  if (targetName == this.newIframe[i].path) {
//    		  YCFrame.Utils.RunServer.init("./ScriptRouter/");
//    			var dataList = ModuleRunserver.getComponent();
//    			this.iframeList = dataList.data;
//    			console.log('this.iframeList=>',this.iframeList);
//    			for (var j = 0; j < this.iframeList.length;i++) {
//    				if (this.iframeList[j].component == 'Website') {
//    					this.newIframe.push(this.iframeList[j]);
//    				}
//    			}
//    	  }
//      }
    },
    closeBtn:function() {
      this.$store.commit('clearTab', this.openTab.length);
      this.$router.push('/');
    },
    //tabs双击事件
    dClick:function(targetName){
    	this.isShow = false;
    	console.log('targetName=>',targetName);
    	//首页不删
        if(targetName.route == '/' || targetName.route == '/home'){
          return
        }
        this.$store.commit('delete_tabs', targetName.route);
        if (this.activeIndex === targetName.route) {
          // 设置当前激活的路由
          if (this.openTab && this.openTab.length >= 1) {
            this.$store.commit('set_active_index', this.openTab[this.openTab.length-1].route);
            this.$router.push({path: this.activeIndex});
          } else {
            this.$router.push({path: '/'});
          }
        }
    },
    handleCommand:function(command) {
      if (command == 'a') {
      } else if (command == 'b') {
        this.$store.commit('clearTab', this.openTab.length);
        this.$router.push('/');
      } else if (command == 'c') {
    	  this.isShow = false;
        if (this.openTab.length == 1){} else {
          this.$store.commit('clearTab', this.openTab.length);
          this.$store.commit('add_tabs', {route: this.$route.path , name: this.$route.name, title: this.$route.meta.title });
          this.$store.commit('set_active_index', this.$route.path);
        }
      }
    },
    handleCommand2:function(command) {
        if (command == 'a') {
        	this.isDialog2= true;
        	this.form2.id = this.user.userId;
        	this.form2.ryid = this.user.ryid;
        	this.form2.Telephone1 = this.user.Telephone1;
        	this.form2.Telephone2 = this.user.Telephone2;
        	this.form2.sex = this.user.sex;
        	this.form2.bmmc = this.user.bmmc;
        	this.form2.realName = this.user.realName;
        } else if (command == 'b') {
        	this.isDialog = true;
        	this.form.id = this.user.userId;
        	this.form.ryid = this.user.ryid;
        	this.form.bmmc = this.user.bmmc;
        	this.form.loginName = this.user.loginName;
        	this.form.newPwd = this.user.newPwd;
        	this.form.confirmPwd = this.user.confirmPwd;
        } else if (command == 'c') {
        	$$.login.logout({success:function(data){
        	  if(data.data.state=="success"){
      			  window.location.href = './';
      		  }
			}});
        }
      },
    logOut:function(){
    	  $$.login.logout({success:function(data){
    		  if(data.data.state=="success"){
    			  window.location.href = './';
    		  }
    	  }});
      },
      cancel:function() {
          this.isDialog = false;
        },
        updateData:function(formName) {
           	var that = this;
           	this.$refs[formName].validate(function (valid) {
                if (valid) {
                	$$.user.mmxg({data:{mm:that.form.newPwd},success:function(data){
		        		  if (data.code == 0) {
		        			  that.$message({
	                       			  showClose: true,
	                   		          message: '修改成功！',
	                   		          type: 'success'
	                   		        });
		        			  that.isDialog = false;
		        			  that.logOut();
		        		  }else{
		        			  that.$message({
                       			  showClose: true,
                   		          message: '修改失败，请稍后重试！',
                   		          type: 'error'
                   		        });
		        		  }
		        	  }});
              	}
              	
              });
          },
          cancel2:function() {
              this.isDialog2 = false;
            },
            updateData2:function(formName) {
               	var that = this;
               	this.$refs[formName].validate(function (valid) {
                    if (valid) {
                    	$$.user.grxxxg({data:{tel1:that.form2.Telephone1,tel2:that.form2.Telephone2,name:that.form2.realName},success:function(data){
  		        		  if (data.code == 0) {
  		        			  that.$message({
  	                       			  showClose: true,
  	                   		          message: '修改成功！',
  	                   		          type: 'success'
  	                   		        });
  		        			  that.isDialog2 = false;
  		        			that.logOut();
  		        		  }else{
  		        			  that.$message({
                         			  showClose: true,
                     		          message: '修改失败，请稍后重试！',
                     		          type: 'error'
                     		        });
  		        		  }
  		        	  }});
                    }
                  	
                  });
              }
	}
});
window.vueapp=vm;
