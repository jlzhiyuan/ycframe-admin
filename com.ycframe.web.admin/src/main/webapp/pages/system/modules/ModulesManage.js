var ModulesManage = moduleinit({
	url:'/system/modules/ModulesManage.html', 
	el:'#ModulesManage',
    dorender:function(content){
	    var data = {
	    		template: content.template,
	    		name: 'ModulesManage',
	            data() {
	    			var checkAge = (rule, value, callback) => {
	    		        if (!value) {
	    		          return callback(new Error('必填'));
	    		        }
	    		        if (!Number.isInteger(value)) {
	    		          callback(new Error('请输入数字值'));
	    		        } else {
	    		        	callback();
	    		        }
	    		      };
	    		      var checkParent = (rule, value, callback) => {
	    		    	  console.log('rule=>',rule);
	    		    	  console.log('value=>',value);
	    		    	  if (!value) {
	    		    		  return callback(new Error('请选择上级功能'));
	    		    	  } 
	    		    	  
	    		    	  if(!this.state){
	    		          	  var ids = [];
	    		                function loop(arr){
	    		                 for(var i=0;i<arr.length;i++){
	    		                  if(arr[i].id){ids.push(arr[i].id);}
	    		                  if(arr[i].children){loop(arr[i].children)};
	    		                 }
	    		                }
	    		                loop(this.currentRow.children);
	    		                ids = [this.currentRow.id].concat(ids);
	    		                var a = ids.indexOf(value);
	    		                if(a >= 0){
	    		                	callback(new Error('无法选择本功能及其下级功能'));
	    		                }else{
	    		                	callback();
	    		                }
	    		    	  }else{
	    		    		  callback();
	    		    	  }
	    		    	 
	    		      };
	              return {
	            	  arr:["el-icon-info","el-icon-error","el-icon-success","el-icon-warning","el-icon-question"
	            	       ],
	              	left:[],
	              	ljdz:'',
	            	right:[],
	            	state:true,
	                treeTableData: [],
	                currentRow: null,
	                dialogVisible: false,
	                isChange: false,
	                stateAble:true,
	                stateDisable:true,
	                stateDel:true,  
	                stateUpdate:true,
	                xsyc:true,
	                stateButton:true, 
	                isDisabled: false, 
	                ruleForm: {
	                	parent: '',
	                	GNMC: '',
	                	SFXS: '',
	                	SXBH: '',
	                	GNDZ: '',
	                	JDMS: '',
	                	id: '',
	                	gnlx:'',
	                	ICON:'el-icon-sold-out',
	                	COMPONENT: '',
	                	JSPATH: '',
	                	isComponent: true,
	                	linkUrl: ''
	                },
	                rules: {
	                  parent: [
	                   	{ required: true, validator: checkParent,trigger:'change' }
	                  ],
	                  GNMC: [
	                	{ required: true, message: '必填', trigger: 'blur' }
	                  ],
	                  SFXS: [
	                         { required: true, message: '请选择是否启用', trigger: 'change' }
	                       ],
	                  SXBH: [
	                    { required: true, validator: checkAge, trigger: 'blur' }
	                  ],
	                  JDMS: [
	                    { required: true, message: '必填', trigger: 'blur' }
	                  ],
	                  linkUrl: [
	 	                    { required: true, message: '必填', trigger: 'blur' }
	 	                  ],
	 	              GNDZ: [
	 	                    { required: true, message: '必填', trigger: 'blur' }
	 	                  ],
	 	              gnlx: [
	 	                    { required: true, message: '必填', trigger: 'blur' }
	 	                  ]
	                },
	                defaultProps: {
	                  value: 'id',
	                  label: 'GNMC',
	                  children: 'children'
	                },
	                treeData: [],
	                stateOptions: [],
	                assignmentDialog: false,
	                value1: [],
	                btnTable: [],
	                currentPage: 0,
	                gnlxList:[
		                {id:'9',text:'目录'},
		                {id:'0',text:'功能'},
		                {id:'1',text:'接口'},
		                {id:'2',text:'模块'},
		                {id:'3',text:'按钮'}
	                ],
	                currentfieldInfo:{
                		iscomponent:{text:"功能类型",show:true},
	            		parent:     {text:"上级资源",show:true},
	            		name:       {text:"功能名称",show:true},
	            		state:      {text:"是否启用",show:true},
	            		order:      {text:"顺序编号",show:true},
	            		path:       {text:"功能地址",show:true},
	            		memo:       {text:"功能描述",show:true},
	            		icon:       {text:"图标",show:true},
	            		componentname:{text:"组件名称",show:true},
	            		resource:    {text:"资源地址",show:true},
	            		linkurl:     {text:"外部链接",show:true}
	                },
	                fieldInfo:{
	                	catalogue:{
	                		iscomponent:{text:"",show:false},
	                		parent:   {text:"上级目录",show:true},
	                		name:     {text:"目录名称",show:true},
	                		state:     {text:"是否启用",show:true},
	                		order:     {text:"顺序编号",show:true},
	                		path:     {text:"",show:false},
	                		memo:     {text:"目录描述",show:true},
	                		icon:     {text:"图标",show:true},
	                		componentname:{text:"",show:false},
	                		resource:   {text:"",show:false},
	                		linkurl:  {text:"",show:false}
	                	},
	                	application:{
	                		iscomponent:{text:"功能类型",show:true},
	                		parent:   {text:"上级资源",show:true},
	                		name:     {text:"功能名称",show:true},
	                		state:     {text:"是否启用",show:true},
	                		order:     {text:"顺序编号",show:true},
	                		path:     {text:"功能地址",show:true},
	                		memo:     {text:"功能描述",show:true},
	                		icon:     {text:"图标",show:true},
	                		componentname:{text:"组件名称",show:true},
	                		resource:   {text:"资源地址",show:true},
	                		linkurl:  {text:"外部链接",show:true}
	                	},
	                	api:{
	                		iscomponent:{text:"",show:false},
	                		parent:   {text:"上级资源",show:true},
	                		name:     {text:"接口名称",show:true},
	                		state:     {text:"是否启用",show:true},
	                		order:     {text:"顺序编号",show:true},
	                		path:     {text:"接口地址",show:true},
	                		memo:     {text:"接口描述",show:true},
	                		icon:     {text:"",show:false},
	                		componentname:{text:"",show:false},
	                		resource:   {text:"",show:false},
	                		linkurl:  {text:"",show:false}
	                	},
	                	module:{
	                		iscomponent:{text:"",show:false},
	                		parent:   {text:"上级资源",show:true},
	                		name:     {text:"模块名称",show:true},
	                		state:     {text:"是否启用",show:true},
	                		order:     {text:"顺序编号",show:true},
	                		path:     {text:"",show:false},
	                		memo:     {text:"功能描述",show:true},
	                		icon:     {text:"",show:false},
	                		componentname:{text:"组件名称",show:true},
	                		resource:   {text:"资源地址",show:true},
	                		linkurl:  {text:"",show:false}
	                	},
	                	button:{
	                		iscomponent:{text:"",show:false},
	                		parent:   {text:"上级资源",show:true},
	                		name:     {text:"按钮名称",show:true},
	                		state:     {text:"是否启用",show:true},
	                		order:     {text:"顺序件编号",show:true},
	                		path:     {text:"按钮ID",show:true},
	                		memo:     {text:"功能描述",show:true},
	                		icon:     {text:"",show:false},
	                		componentname:{text:"权限字符",show:true},
	                		resource:   {text:"",show:false},
	                		linkurl:  {text:"",show:false}
	                	}
	                }
	                ,
	                currentPage1: 0,
	                selected: [],
	                iconShow:false,
	               	anState:true, //按钮状态控制
	               	anList:[],//按钮下拉数据
	                iconIndex: 50,
	                isIcon: true,
	                name: '',
	                sort: '',
	                isReadonly: false,
	                tableHeight: ''
	              }
	            },
	            computed: {
	              isSwitch() {
	            	  return this.ruleForm.isComponent
	              }
	            },
	            watch: {
	            	treeTableData() {
	            		var that = this;
	            		$$.modules.getTreeSelect({success:function(data){
	            			console.log('data=====',data);
	            			if (data.code == 0) {
	            				that.treeData = data.data;
	            			} else {
	            				that.$message({
		                            showClose: true,
		                            message:  data.message,
		                            type: 'error'
		                          });
	            			}
	            		}});
	            	},
	            	value1(newData,oldData) {
	            		var that = this;
	            	if (this.assignmentDialog) {
	    	    		if (newData.length > oldData.length) {
	    	    			var gnid = this.currentRow.id;
	    	    			var anid = "";
	    	    			for(var i=0;i<this.left.length;i++){
	    	    				anid+=this.left[i]+","
	    	    			}
	    	    			$$.modules.rightUpdate({data:{anid:anid,gnid:gnid},success:function(data){
	    	    				if(data.code==0){
	    	    					that.$alert('分配成功!', '提示', {
	  	        			          confirmButtonText: '确定',
	  	        			        });
	    	    				}	    	    				
	    	    	      	}});
	    	    			// 向右移动
	    	    		} else if (newData.length == oldData.length){
	    	    		} else {
	    	    			var gnid = this.currentRow.id;
	    	    			var anid = "";
	    	    			for(var i=0;i<this.right.length;i++){
	    	    				anid+=this.right[i]+",";
	    	    			}
	    	    			$$.modules.leftUpdate(anid,gnid,function(data){
	    	    				that.$alert('分配成功!', '提示', {
	        			          confirmButtonText: '确定',
	        			        });
	    	    	      	});
	    	    		}
	        	}
	            	},
	            	isSwitch() {
	            		if (!this.isSwitch) {
		    				  this.ruleForm.COMPONENT = 'Website';
		    				  this.ruleForm.JSPATH = '/components/website/index.js';
		    				  this.isReadonly = true;
		    			  } else {
		    				  this.ruleForm.COMPONENT = '';
		    				  this.ruleForm.JSPATH = '';
		    				  this.isReadonly = false;
		    			  }
	            	}
	            },
	            mounted() {
//	            	this.$nextTick(() => {
//	            		this.tableName = this.$refs.singleTable;
//	            		this.$refs.chil.chilFn(this.tableName)
//	            	})
	                var that = this;
	                $$.modules.init({data:{orderCol:that.name,orderType:that.sort},success:function(data){
	                	if (data.code == 0) {
	                		that.treeTableData = data.data;
	                	} else {
		                	 that.$message({
	                            showClose: true,
	                            message:  data.message,
	                            type: 'error'
	                          });
	                	}
	          		}});
	          		
	               $$.modules.getTreeSelect({success:function(data){
	                	if (data.code == 0) {
	                		that.treeData = data.data;
	                	} else {
		                	 that.$message({
	                            showClose: true,
	                            message:  data.message,
	                            type: 'error'
	                          });
	                	}
	          		}});
//	               var a = ModuleRunserver.init();
//	               alert(a);
	            },
	            methods: {
//	            	update(res) {
//	            		this.tableHeight = res;
//	            		console.log('res==========>',res);
//	            	},
	            	sortChange(data) {
	            		var that = this;
	               		this.name = data.prop;
	               		if (data.order == 'descending') {
	               			this.sort = 'desc';
	               		} else {
	               			this.sort = 'asc';
	               		}
	               		$$.modules.init({data:{orderCol:that.name,orderType:that.sort},success:function(data){
	               			if (data.code == 0) {
	               				that.treeTableData = data.data;
		                	} else {
			                	 that.$message({
		                            showClose: true,
		                            message:  data.message,
		                            type: 'error'
		                          });
		                	}
		          		}});
	               		console.log('data=>',data);
	               	},
	            	getvalue(value){
	                	console.log('我执行了吗');
	                    this.ruleForm.parent = value;
	                    console.log('value=>',value);
//	                    console.log(this.valueId);
	                  },
	            	leftC(val){
	            		this.left = val;
	            	},
	            	rightC(val){
	            		this.right = val;
	            	},
	            	assignmentBtn() {
	            		var that = this;
	                    this.assignmentDialog = true;
	                    var id = this.currentRow.id;
	                    $$.modules.getBtnData({data:{id:id},success:function(data){
	                    	if (data.code == 0) {
	                    		console.log('data=>',data);
	                    		that.btnTable = data.data;
		                    	for(var i = 0;i < that.btnTable.length;i++) {
		                        	if (that.btnTable[i].mark == 'right') {
		                        		that.value1.push(that.btnTable[i].key);
		                        	}
		                        }
		                	} else {
			                	 that.$message({
		                            showClose: true,
		                            message:  data.message,
		                            type: 'error'
		                          });
		                	}
	                    }});
	                  },
	                  change(val) {
	                	  this.selected = val;
	                  },
	                  closeBtn(){
	                	  this.assignmentDialog = false;
	                      this.btnTable = [];
	                      this.selected = [];
	                      this.value1 = [];
	          		  },
	                  defineBtn () {
	          			  var that = this;
	          			$$.modules.init({data:{orderCol:that.name,orderType:that.sort},success:function(data){
	               			if (data.code == 0) {
	               				that.treeTableData = data.data;
		                	} else {
			                	 that.$message({
		                            showClose: true,
		                            message:  data.message,
		                            type: 'error'
		                          });
		                	}
		          		}});
	                    this.assignmentDialog = false;
	                    this.btnTable = [];
	                    this.selected = [];
	                    this.value1 = [];
//	                    this.left = [];
	                  },
	              headColor(row) {
	                if (row.rowIndex === 0) {
	                  return 'background-color: #f5f7fa;'
	                }
	              },
	              ismenu(val)
	              {
	              var that=this;
	              switch(val) {
		              case '9':    //目录 
		            	 $.extend(that.currentfieldInfo, that.fieldInfo.catalogue);
		                 break;
		              case '0':    //功能
			             $.extend(that.currentfieldInfo, that.fieldInfo.application);
		                 break;   
		              case '1':    //接口
		            	 $.extend(that.currentfieldInfo, that.fieldInfo.api);
			             break;
		              case '2':    //模块
		            	 $.extend(that.currentfieldInfo, that.fieldInfo.module);
				         break;
		              case '3':    //按钮
		            	 $.extend(that.currentfieldInfo, that.fieldInfo.button);
		              default:
	
		         }  
	                
	              },
	              
	              handleCurrentChange(val) {
		                this.currentRow = val;
		                if(!val){
		                	this.stateUpdate = true;
		                	this.stateDel = true;
		                	this.stateButton = true;
		                	this.stateAble = true;
		                	this.stateDisable = true;
		                	return;
		                }
		                if(val.id == '1'){
		                	this.stateUpdate = true;
		                	this.stateDel = true;
		                	this.stateButton = true;
		                	this.stateAble = true;
		                	this.stateDisable = true;
		                }else{
		                	 if(val.SFXS == 'T'){
		                     	this.stateDisable = false;
		                     	this.stateAble = true;
		                     }else{
		                     	this.stateAble = false;
		                     	this.stateDisable = true;
		                     }
		                	 this.stateUpdate = false;
		                 	 this.stateDel = false;
		                 	 this.stateButton = false;
		                }
		                
		              },
	              handleClose(done) {
	                this.$confirm('确认关闭？')
	                  .then(_ => {
	                    done();
	                  })
	                  .catch(_ => {});
	              },
	              switchBtn() {
	                this.isChange = !this.isChange;
	              },
	              // 保存
	              submitForm(formName) {
	            	  var that = this;
	                this.$refs[formName].validate((valid) => {
	                  if (valid) {
	           
	                	if(this.state == true){
	                		$$.modules.insert({data:that.ruleForm,success:function(rdata){
	                			if (rdata.code == 0) {
	                				that.$message({
	                    	          showClose: true,
	                    	          message: '新增成功！',
	                    	          type: 'success'
	                    	        });
	                				$$.modules.init({data:{orderCol:that.name,orderType:that.sort},success:function(data){
	        	               			if (data.code == 0) {
	        	               				that.treeTableData = data.data;
	        		                	} else {
	        			                	 that.$message({
	        		                            showClose: true,
	        		                            message:  data.message,
	        		                            type: 'error'
	        		                          });
	        		                	}
	        		          		}});
	            					
	            					that.$refs.ruleForm.resetFields();
	            					that.$refs.singleTable.setCurrentRow();
	            					that.ruleForm.higher = '';
	            					that.dialogVisible = false;
	                			} else {
	                				that.$message({
	                    	          showClose: true,
	                    	          message: rdata.message,
	                    	          type: 'error'
	                    	        });
	                			}
	                		}});
	                	}else{
	                		$$.modules.update({data:that.ruleForm,success:function(data){
	            				if (data.code == 0) {
	    	    					that.$message({
	    	              	          showClose: true,
	    	              	          message: '修改成功！',
	    	              	          type: 'success'
	    	              	        });
	    	    					$$.modules.init({data:{orderCol:that.name,orderType:that.sort},success:function(data){
	        	               			if (data.code == 0) {
	        	               				that.treeTableData = data.data;
	        		                	} else {
	        			                	 that.$message({
	        		                            showClose: true,
	        		                            message:  data.message,
	        		                            type: 'error'
	        		                          });
	        		                	}
	        		          		}});
	    	    					that.$refs.ruleForm.resetFields();
	    	    					that.$refs.singleTable.setCurrentRow();
	    	    					that.ruleForm.higher = '';
	    	    					that.dialogVisible = false;
	            				} else {
	            					that.$message({
	      	              	          showClose: true,
	      	              	          message: data.message,
	      	              	          type: 'error'
	      	              	        });
	            				}
	                   		}});
	                	}
	                	
	                   
	                  } else {
	                    return false;
	                  }
	                });
	              },
	              // 返回
	              returnBtn() {
	    	          this.$refs.ruleForm.resetFields();
	    	          this.dialogVisible = false;
//	            	  this.$confirm('是否关闭？', {
//	            		  closeOnClickModal: false,
//	        	          confirmButtonText: '确定',
//	        	          cancelButtonText: '取消',
//	        	        }).then(() => {
//	    	        	 this.dialogVisible = false;
//	    	        	 this.$refs.ruleForm.resetFields();
//	    	            
//	        	        }).catch(() => {
//	       	             
//	        	        });
	        	        
	               
	              },
	              //新增
	              add() {
	            	  this.isIcon = true;
	            	  this.isReadonly = false;
	            	  this.isDisabled = false;
	            	  var that = this;
	            	  this.ruleForm.id = '';
	            	  that.dialogVisible = true;
	    			  this.state = true;
	            		$$.modules.getTreeSelect({success:function(data){
	            			console.log('data=====',data);
	            			if (data.code == 0) {
	            				that.treeData = data.data;
	            			} else {
	            				that.$message({
		                            showClose: true,
		                            message:  data.message,
		                            type: 'error'
		                          });
	            			}
	            		}});
	    			  $$.modules.getStateData({success:function(data){
	            		  console.log('data=>',data);
	            		  if (data.code == 0) {
	            			  that.stateOptions = data.data;
	    				  } else {
	    					  that.$message({
      	              	          showClose: true,
      	              	          message: data.message,
      	              	          type: 'error'
      	              	        });
	    				  }
	            	  }});
	              },
	              // 修改
	              update() {
	            	  this.isIcon = false;
	            	  this.isDisabled = true;
//	            	  if (!this.isSwitch && this.isDisabled) {
//	            		  this.isReadonly = true;
//	            	  } else {
//	            		  this.isReadonly = false;
//	            	  }
	            	  var that = this;
	            	  that.dialogVisible = true;
	            	  $$.modules.getTreeSelect({success:function(data){
	            			console.log('data=====',data);
	            			if (data.code == 0) {
	            				that.treeData = data.data;
	            			} else {
	            				that.$message({
		                            showClose: true,
		                            message:  data.message,
		                            type: 'error'
		                          });
	            			}
	            		}}); 
	            	  $$.modules.getStateData({success:function(data){
	            		  console.log('data=>',data);
	            		  if (data.code == 0) {
	            			  that.stateOptions = data.data;
	    				  } else {
	    					  that.$message({
      	              	          showClose: true,
      	              	          message: data.message,
      	              	          type: 'error'
      	              	        });
	    				  }
	            	  }});
	            	  var newData = '';
	            	  if (this.currentRow.SFXS == 'T') {
	            		  newData = 'T';
	            	  } else {
	            		  newData = 'F';
	            	  }
	            	  console.log('=========',this.currentRow.parent);
	            	  setTimeout(function(){ 
	            		  console.log('this.currentRow===>',this.currentRow);
	            		  this.ruleForm.isComponent = this.currentRow.isComponent;
	    				  this.ruleForm.parent = this.currentRow.parent.toString();
	    				  this.ruleForm.SFXS = this.currentRow.SFXS;
	    				  this.ruleForm.GNMC = this.currentRow.GNMC;				
	    				  this.ruleForm.GNDZ = this.currentRow.GNDZ;			
	    				  this.ruleForm.JDMS = this.currentRow.JDMS;		
	    				  this.ruleForm.SXBH = this.currentRow.SXBH;
	    				  this.ruleForm.ICON = this.currentRow.ICON;
	    				 	this.ruleForm.gnlx= ""+this.currentRow.gnlx;
	    				 	this.ismenu(this.ruleForm.gnlx);
	    				  this.ruleForm.COMPONENT = this.currentRow.COMPONENT;
	    				  this.ruleForm.JSPATH = this.currentRow.JSPATH;
	    				  this.ruleForm.id = this.currentRow.id;
	    				  this.ruleForm.linkUrl = this.currentRow.linkUrl;
	    				  this.state = false;
	            	  }.bind(this), 0);
	              },
	              //删除
	              del() {
	            	  var that = this;
	            	  var ids = [];
	                  function loop(arr){
	                   for(var i=0;i<arr.length;i++){
	                    if(arr[i].id){ids.push(arr[i].id);}
	                    if(arr[i].children){loop(arr[i].children)};
	                   }
	                  }
	                  loop(that.currentRow.children);
	                  ids = [that.currentRow.id].concat(ids);
	            	  ids=ids+""; 
	            	  this.$confirm('是否删除？', '提示', {
	            		  closeOnClickModal: false,
	        	          confirmButtonText: '确定',
	        	          cancelButtonText: '取消',
	        	          type: 'warning'
	        	        }).then(() => {
	        	        	 this.$confirm('此次操作也将删除所有子节点，请您再次确认!', '提示', {
	        	        		 closeOnClickModal: false,
	        	    	          confirmButtonText: '确定',
	        	    	          cancelButtonText: '取消',
	        	    	          type: 'warning'
	        	    	        }).then(() => {
	        	    	        	$$.modules.deleteData({data:{id:ids},success:function(rdata){
	        	    	        		 if (rdata.code == 0) {
	        	    	        			that.$message({
	        	    	        			  showClose: true,
	        	    	     		          message: '删除成功！',
	        	    	     		          type: 'success'
	        	    	     		        });
	        	    	        			that.stateDel = true;
	        	    	        			$$.modules.init({data:{orderCol:that.name,orderType:that.sort},success:function(data){
	    	        	               			if (data.code == 0) {
	    	        	               				that.treeTableData = data.data;
	    	        		                	} else {
	    	        			                	 that.$message({
	    	        		                            showClose: true,
	    	        		                            message:  data.message,
	    	        		                            type: 'error'
	    	        		                          });
	    	        		                	}
	    	        		          		}});
	        	    	        		 } else {
	        	    	        			that.$message({
	        	    	        			 showClose: true,
	        	    	     		          message: rdata.message,
	        	    	     		          type: 'error'
	        	    	     		        });
	        	    	        		 }
	        	    	        	  }});
	        	    	        }).catch(() => {
	        	    	             
	        	    	        });
	        	        }).catch(() => {
	        	             
	        	        });
	            	 
	              },
	           	  dialogClose(){
	           		 this.$refs.ruleForm.resetFields();
	           	  },
	           	  zhuanhuan(val)
      	        	{
		           		if(val=="9"){
	  	        			return "目录";
	  	        		}else if(val=="0"){
      	        			return "功能";
      	        		}else if(val=="1")
      	        		{
      	        			return "接口";
      	        		}else if(val=="2")
      	        		{
      	        			return "模块";
      	        		}else if(val=="3")
      	        		{
      	        			return "按钮";
      	        		} 
      	        	},
	           	  //启用
	           	  able(){
	    	       	  var that = this;
	    	       	  var ids = [];
	                  function loop(arr){
	                   for(var i=0;i<arr.length;i++){
	                    if(arr[i].id){ids.push(arr[i].id);}
	                    if(arr[i].children){loop(arr[i].children)};
	                   }
	                  }
	                  loop(that.currentRow.children);
	                  ids = [that.currentRow.id].concat(ids);
	            	  ids=ids+""; 
	            	  $$.modules.open({data:{id:ids},success:function(data){
	    		   		 if (data.code == 0) {
	    		   			that.$message({
	    			   			showClose: true,
	    			            message: '启用成功！',
	    			            type: 'success'
	    			        });
	    		   			that.stateAble = true;
	    	  		   		that.stateDisable = false;
		    	  		   	$$.modules.init({data:{orderCol:that.name,orderType:that.sort},success:function(data){
		               			if (data.code == 0) {
		               				that.treeTableData = data.data;
			                	} else {
				                	 that.$message({
			                            showClose: true,
			                            message:  data.message,
			                            type: 'error'
			                          });
			                	}
			          		}});
	    		   			that.$refs.singleTable.setCurrentRow();
	    		   		 } else {
	    		   			that.$message({
	    			   			showClose: true,
	    			            message: data.message,
	    			            type: 'error'
	    			        });
	    		   		 }
	    		   		
	    	          	 }});
	           	  },
	           	  //禁用
	           	disable(){
	      	       	  var that = this;
	      	        var ids = [];
	                function loop(arr){
	                 for(var i=0;i<arr.length;i++){
	                  if(arr[i].id){ids.push(arr[i].id);}
	                  if(arr[i].children){loop(arr[i].children)};
	                 }
	                }
	                loop(that.currentRow.children);
	                ids = [that.currentRow.id].concat(ids);
	          	  ids=ids+""; 
	          	  $$.modules.close({data:{id:ids},success:function(data){
	      		   		 if (data.code == 0) {
	    	  		   		that.$message({
	    		  		   	    showClose: true,
	    			            message: '禁用成功！',
	    			            type: 'success'
	    			        });
	    	  		   		that.stateAble = false;
	    	  		   		that.stateDisable = true;
		    	  		   	$$.modules.init({data:{orderCol:that.name,orderType:that.sort},success:function(data){
		               			if (data.code == 0) {
		               				that.treeTableData = data.data;
			                	} else {
				                	 that.$message({
			                            showClose: true,
			                            message:  data.message,
			                            type: 'error'
			                          });
			                	}
			          		}});
	    		  		  that.$refs.singleTable.setCurrentRow();
	      		   		 } else {
	    	  		   		that.$message({
	    		  		   	    showClose: true,
	    			            message: data.message,
	    			            type: 'error'
	    			        });
	      		   		 }
	      		   
	      	          	 }});
	             }
	            }
	    }
	    return data;
    }
})