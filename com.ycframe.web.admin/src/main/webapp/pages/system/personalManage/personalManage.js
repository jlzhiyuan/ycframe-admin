document.write("<script language=javascript src='pages/system/personalManage/dialog.js'></script>");
var personalManage = moduleinit({
	url:'/system/personalManage/personalManage.html',
	el:'#personalManage',
    dorender:function(content){
	    var data = {
	    		template: content.template,
	            name: 'personalManage',
	            components: { 
		        	DialogContent: dialogContent,
		        },
	            data() {
	            	  var checkEmpCode = (rule, value, callback) => {
	        		        if (!value) {
	        		        	return callback(new Error('必填'));
	        		        }
	        		        if (!Number.isInteger(Number(value))) {
	        		        	callback(new Error('请输入数字值'));
	        		        }else if(value.toString().length < 1 || value.toString().length > 10){
	        		        	callback(new Error('请输入位数为1到10的数字'));
	        		        }else {
	        		        	callback();
	        		        }
	        		      };
	        		    var checkPhoneNum = (rule, value, callback) => {
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
	                
	              return {
	            	  checked: false,
	            	  rowId: '',
	            	  rowData: '',
	            	  treeDatass: [],
	            	img:'',
	            	treeId:'',
	                isAll: true,
	                isDialog: false,
	                stateAble: true,
	                stateDisable: true,
	                statePwd: true,
	                data: [],
	                defaultProps: {
	            	  value: 'id',
	                  label: 'bmmc',
	                  children: 'children'
	                },
	                treeData:[],
	                formData: {
	                  userName: '',
	                  empCode: '',
	                  YHZT: '',
	                  JSMC: '',
	                  sex: '',
	                  jc: '',
	                  treeid:'',
	                  id:''
	                },
	                select: [{id:"1",text:"男"},{id:"0",text:"女"}],
	                selectZt: [{id:"正常",text:"正常"},{id:"用户锁定",text:"用户锁定"}],
	                selectJs:[],
	                form: {
	                  deptId: '',
	                  YHM: '',
	                  userName: '',
	                  empCode: '',
	                  Telepone1: '',
	                  Telepone2: '',
	                  sex: '',
	                  id:''
	                },
	                rules: {
	                	deptId: [
	                      { required: true, message: '请选择部门', trigger: 'change' }
	                    ],
	                    userName: [
	                      { required: true, message: '必填', trigger: 'blur' }
	                    ],
	                    YHM: [
	                      { required: true, message: '必填', trigger: 'blur' }
	                    ],
	                    empCode: [
	                      { required: true, validator: checkEmpCode, trigger: 'blur' }
	                    ],
	                    Telepone1: [
	                      { required: true, validator: checkPhoneNum, trigger: 'blur' }
	                    ],
	                    Telepone2: [
	      	                      { required: true, validator: checkPhoneNum, trigger: 'blur' }
	      	                    ],
	                    sex: [
	                      { required: true, message: '请选择性别', trigger: 'change'  }
	                    ],
	                },
	                currentPage: 1,
	                total: 0,
	                pagesize: 10,
	                roleCurrentPage: 1,
	                roleTotal: 0,
	                rolePageSize: 10,
	                roleList: [],
	                
	                paging: {
	                  totalPages: ''
	                },
	                isDisabled: false,
	                flag: false,
	                multipleSelection: [],
	                multipleSelection1: [],
	                tableData: [],
	                id: '',
	                name: '',
	                sort: '',
	                tagList: ['系统管理员','管理员','技术监督专责'],
	                tableHeight: '',
	                mainHeight: '',
	                datas: [{
	                    id: 1,
	                    label: '一级 1',
	                    children: [{
	                      id: 4,
	                      label: '二级 1-1',
	                      children: [{
	                        id: 9,
	                        label: '三级 1-1-1'
	                      }, {
	                        id: 10,
	                        label: '三级 1-1-2'
	                      }]
	                    }]
	                  }, {
	                    id: 2,
	                    label: '一级 2',
	                    children: [{
	                      id: 5,
	                      label: '二级 2-1'
	                    }, {
	                      id: 6,
	                      label: '二级 2-2'
	                    }]
	                  }, {
	                    id: 3,
	                    label: '一级 3',
	                    children: [{
	                      id: 7,
	                      label: '二级 3-1'
	                    }, {
	                      id: 8,
	                      label: '二级 3-2'
	                    }]
	                  },
	                  {
		                    id: 14,
		                    label: '一级 4',
		                    children: [{
		                      id: 9,
		                      label: '二级 3-1'
		                    }, {
		                      id: 10,
		                      label: '二级 3-2'
		                    }]
		                  },
		                  {
			                    id: 15,
			                    label: '一级 3',
			                    children: [{
			                      id: 11,
			                      label: '二级 3-1'
			                    }, {
			                      id: 12,
			                      label: '二级 3-2'
			                    }]
			                  }
	                  ],
	                  defaultPropss: {
	                    children: 'children',
	                    label: 'label'
	                  }
	              }
	            },
	            computed: {
	              },
	      		watch: {
					pageSize(){
	            		this.indexMethod = (this.currentPage - 1) * this.pagesize + 1
	            	},
	            	currentPage(){
	            		this.indexMethod = (this.currentPage - 1) * this.pagesize + 1
	            	},
				},
	           mounted() {
//	            	this.$nextTick(() => {
//	              		this.$refs.chil.chilFn(this.$refs.multipleTable1);
//	              	})
	              var that = this;
	              $$.user.getTree({success:function(rdata){
	            	  if (rdata.code == 0) {
	            		  that.data = rdata.data;
		        		  that.treeData = rdata.data;
	            	  } else {
	            		  that.$message({
    		  		   	    showClose: true,
    			            message: rdata.message,
    			            type: 'error'
    			         });
	            	  }
	        	  }});
	              var paramsdata={"orderCol":that.name,"orderType":that.sort,"row":that.pagesize,"page":that.currentPage};
	              paramsdata = $.extend(paramsdata, that.formData);
	              $$.user.getTableData(
	            		  {
	            			  data:paramsdata,
	            			  success:function(data){
	        	            	  if (data.code == 0) {
	        	            		  that.currentPage = data.data.currentPage;
	        		            	  that.tableData = data.data.tableData;
	        		            	  that.total = data.data.total;
	        	            	  } else {
	        	            		  that.$message({
	            		  		   	    showClose: true,
	            			            message: data.message,
	            			            type: 'error'
	            			         });
	        	            	  }
	        	              }
	            		  }
	              );
	              $$.user.getRoleSelect(function(data){
	            	  if (data.code == 0) {
	            		  that.selectJs = data.data;
	            	  } else {
	            		  that.$message({
    		  		   	    showClose: true,
    			            message: data.message,
    			            type: 'error'
    			         });
	            	  }
	              });
	            },
	            methods: { 
	            	getSexName(id){
	            		let sex = this.select.filter((i) => {
	            			  return id == i.id;
	            		});
	            	   if(sex.length > 0){
	            		   return sex[0].text; 
	            	   }else{
	            		   return ""
	            	   }
	                   
	            	},
	            	change(value) {
	            		this.checked = value;
	            	},
//	            	update(res) {
//	            		this.tableHeight = res - 40;
//	            		this.mainHeight = res;
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
	            		var paramsdata={"orderCol":that.name,"orderType":that.sort,"row":that.pagesize,"page":that.currentPage};
	   	              	paramsdata = $.extend(paramsdata, that.formData);
	            		$$.user.getTableData(
	            				{data:paramsdata,success:function(data){
	            			if (data.code == 0) {
	            				that.currentPage = data.data.currentPage;
	  	  	            	    that.tableData = data.data.tableData;
	  	  	            	    that.total = data.data.total;
		  	            	} else {
	  	            		  that.$message({
	      		  		   	    showClose: true,
	      			            message: data.message,
	      			            type: 'error'
	      			         });
	  	            	    }
	            		}});
	            		console.log('data=>',data);
	            	},
	            	getvalue(value){
	                    this.form.deptId = value;
	                  },
	            	queryTree(tree, id) {
	                    var stark = [];
	                    stark = stark.concat(tree);
	                    while (stark.length) {
	                      const temp = stark.shift();
	                      if (temp[this.defaultProps.children]) {
	                        stark = stark.concat(temp[this.defaultProps.children]);
	                      }
	                      if (temp[this.defaultProps.value] === id) {
	                        return temp[this.defaultProps.label];
	                      }
	                    }
	                    return '';
	                  },
	            	rowClick(row) {
	                    this.$refs.multipleTable1.toggleRowSelection(row);
	                  },
	                  rowClass(row){
	                    if(this.multipleSelection.includes(row.row)){
	                      return { "background-color": "#ecf5ff" }
	                    }
	                  },
	                  rowClick1(row) {
//	                    this.$refs.multipleTable.toggleRowSelection(row);
	                  },
	                  rowClass1(row){
	                    if(this.multipleSelection1.includes(row.row)){
	                      return { "background-color": "#ecf5ff" }
	                    }
	                  },
	              handleNodeClick: function(data) {
	            	  var that = this;
	            	  if(data.id == '1'){
	            		  this.formData.treeid = '';
	            		  this.treeId = data.id = '';
	            	  }else{
	            		  this.formData.treeid = data.id;
	                	  this.treeId = data.id;
	            	  }
	            	 
	            	  var paramsdata={"orderCol":that.name,"orderType":that.sort,"row":that.pagesize,"page":that.currentPage};
	   	              	paramsdata = $.extend(paramsdata, that.formData);
	            		$$.user.getTableData(
	            				{data:paramsdata,success:function(data){
	            			if (data.code == 0) {
	            				that.currentPage = data.data.currentPage;
	  	  	            	    that.tableData = data.data.tableData;
	  	  	            	    that.total = data.data.total;
		  	            	} else {
	  	            		  that.$message({
	      		  		   	    showClose: true,
	      			            message: data.message,
	      			            type: 'error'
	      			         });
	  	            	    }
	            		}});
	              },
	              newAdd:function() {
	            	  this.rowId = '';
	            	  this.isDialog = true;
	            	  this.$nextTick(() => {
                 		 this.$refs.child.add();
                 		 
                 	 })
//	            	  this.isDisabled = false;
//	            	  this.form.id = '';
//	            	var that = this;
//	                var id = 'a';
//	                StaffRunserver.getTree(function(data){
//	                	if (data.status == 1) {
//	                		that.treeData = data.data;
//	  	            	} else {
//  	            		  that.$message({
//      		  		   	    showClose: true,
//      			            message: data.message,
//      			            type: 'error'
//      			         });
//  	            	    }
//	          	  	});
//	                StaffRunserver.getRoleData(that.rolePageSize,that.roleCurrentPage,id,function(data){
//	                	if (data.status == 1) {
//	                		that.roleCurrentPage = data.data.currentPage;
//		               	  	that.roleTotal = data.data.total;
//		                	that.roleList = data.data.tableData;
//	  	            	} else {
//  	            		  that.$message({
//      		  		   	    showClose: true,
//      			            message: data.message,
//      			            type: 'error'
//      			         });
//  	            	    }
//	                });
	              },//新增数据
//	              updateData(formName) {
//	            	var that = this;
//	                var arr = this.multipleSelection1;
//	                console.log('this.multipleSelection1=>',this.multipleSelection1);
//	                var arrIds = [];
//	                for(var i=0;i<arr.length;i++){
//	                	var left = arr[i].id;
//	                	var leftId = left.split(",");
//	     	   		   arrIds.push(leftId[0]);
//	     	   	   }
//	                this.$refs[formName].validate((valid) => {
//	                    if (valid) {
//	                   	   	   	StaffRunserver.saveData(JSON.stringify(arrIds),JSON.stringify(that.form),function(rdata){
//	                          	 if (rdata.status == 1) {
//	                          		that.$message({
//	                       			  showClose: true,
//	                   		          message: '保存成功！',
//	                   		          type: 'success'
//	                   		        });
//	                          		StaffRunserver.getTableData(that.name,that.sort,that.pagesize,that.currentPage,JSON.stringify(that.formData),function(data){
//	                          			if (data.status == 1) {
//		                          			that.currentPage = data.data.currentPage;
//		  	                              	that.tableData = data.data.tableData;
//		  	                              	that.total = data.data.total;
//	                          			} else {
//	                          				that.$message({
//	      	                     			  showClose: true,
//	      	                 		          message: data.message,
//	      	                 		          type: 'error'
//	      	                 		        });
//	                          			}
//	                                });
////	                          		that.$refs.multipleTable1.clearSelection();
//	                          		that.$refs.multipleTable.clearSelection();
//	                          		that.isDialog = false;
//	                          		that.$refs.ruleForm.resetFields();
//	                          	 } else {
//	                          		that.$message({
//	                     			  showClose: true,
//	                 		          message: rdata.message,
//	                 		          type: 'error'
//	                 		        });
//	                          	 }
//	                           });
//	                    }else{
//	                    	return false;
//	                    }
//	                });
//	              },//修改确定
	              handleSizeChange(val) {
	              	var that = this;
	                that.pagesize = val;
	                var paramsdata={"orderCol":that.name,"orderType":that.sort,"row":that.pagesize,"page":that.currentPage};
   	              	paramsdata = $.extend(paramsdata, that.formData);
            		$$.user.getTableData(
            				{data:paramsdata,success:function(data){
            			if (data.code == 0) {
            				that.currentPage = data.data.currentPage;
  	  	            	    that.tableData = data.data.tableData;
  	  	            	    that.total = data.data.total;
	  	            	} else {
  	            		  that.$message({
      		  		   	    showClose: true,
      			            message: data.message,
      			            type: 'error'
      			         });
  	            	    }
            		}});
	                },
	              handleCurrentChange(val) {
	              	var that = this;
	                  that.currentPage = val;
	                  var paramsdata={"orderCol":that.name,"orderType":that.sort,"row":that.pagesize,"page":that.currentPage};
	   	              	paramsdata = $.extend(paramsdata, that.formData);
	            		$$.user.getTableData(
	            				{data:paramsdata,success:function(data){
	            			if (data.code == 0) {
	            				that.currentPage = data.data.currentPage;
	  	  	            	    that.tableData = data.data.tableData;
	  	  	            	    that.total = data.data.total;
		  	            	} else {
	  	            		  that.$message({
	      		  		   	    showClose: true,
	      			            message: data.message,
	      			            type: 'error'
	      			         });
	  	            	    }
	            		}});
	                },
	                handleSelectionChange(val) {
	             	    this.multipleSelection = val;
	                	if(val.length==0){
	                		this.stateAble = true;
	                        this.stateDisable = true;
	                        this.statePwd = true;
	                	}else{
	    	         		if(val[0].YHZT=="用户锁定"){
	    	         		this.stateAble = false;
	    	         		  }
	    	         		 if(val[0].YHZT=="正常"){
	    	         			 this.stateDisable = false;
	    	         		 }
	    	         		 this.statePwd = false;
	    	                 for (var int = 0; int < val.length; int++) {
	    	                	if(val[int].YHZT=="用户锁定")
	    	                	{
	    	                		this.stateAble = false;
	    	                	}
	    	                	if(val[int].YHZT=="正常")
	    	                	{
	    	                		 this.stateDisable = false;
	    	                	}
							}
	    	                 
	    	         	
	                	}
	                	
	             	  
	                },
	                handleSelectionChange1(val) {
	              	   this.multipleSelection1 = val;
	                 },
	                query(){
	                	 var that = this;
	               	  	 this.formData.treeid = this.treeId;
	               	  	var paramsdata={"orderCol":that.name,"orderType":that.sort,"row":that.pagesize,"page":that.currentPage};
	   	              	paramsdata = $.extend(paramsdata, that.formData);
	            		$$.user.getTableData(
	            				{data:paramsdata,success:function(data){
	            			if (data.code == 0) {
	            				that.currentPage = data.data.currentPage;
	  	  	            	    that.tableData = data.data.tableData;
	  	  	            	    that.total = data.data.total;
		  	            	} else {
	  	            		  that.$message({
	      		  		   	    showClose: true,
	      			            message: data.message,
	      			            type: 'error'
	      			         });
	  	            	    }
	            		}});
	                },
	                handleSizeChange1(val) {
	                  	var that = this;
	                    that.rolePageSize = val;
	                    $$.user.getRoleData(that.rolePageSize,that.roleCurrentPage,id,function(data){
	                    	if (data.status == 1) {
	                    		that.roleCurrentPage = data.adat.currentPage;
		                   	  	that.roleTotal = data.data.total;
		                    	that.roleList = data.data.tableData;
		                	} else {
		                		that.$message({
	                   			  showClose: true,
	               		          message: data.message,
	               		          type: 'error'
	               		        });
		                	}
	                    });
	                  },
//	                  canael() {
//	                      this.isDialog = false;
//	                      this.$refs.ruleForm.resetFields();
//	                      this.$refs.multipleTable1.clearSelection();
//	                
//	                    },//取消
	                    cancel11(res) {
	                	  var that = this;
	                	  console.log('res============',res);
	                    	this.isDialog = res;
	                    	var paramsdata={"orderCol":that.name,"orderType":that.sort,"row":that.pagesize,"page":that.currentPage};
    	   	              	paramsdata = $.extend(paramsdata, that.formData);
	                    	$$.user.getTableData(
	      	            		  {
	      	            			  data:paramsdata,
	      	            			  success:function(data){
	      	        	            	  if (data.code == 0) {
	      	        	            		  that.currentPage = data.data.currentPage;
	      	        		            	  that.tableData = data.data.tableData;
	      	        		            	  that.total = data.data.total;
	      	        	            	  } else {
	      	        	            		  that.$message({
	      	            		  		   	    showClose: true,
	      	            			            message: data.message,
	      	            			            type: 'error'
	      	            			         });
	      	        	            	  }
	      	        	              }
	      	            		  }
	      	              );
	                    	
	                    },
	                    updateData11(res) {
	                    	console.log('ress============',res);
	                    	this.currentPage = res.currentPage;
                        	this.tableData = res.tableData;
                        	this.total = res.total;
	                    },
	                    close() {
//	                      this.$refs.ruleForm.resetFields();
	                    	this.$refs.child.canael('ruleForm');
	                    	this.$refs.multipleTable1.clearSelection();
	                    },//关闭
	                  handleCurrentChange1(val) {
	                  	var that = this;
	                    that.roleCurrentPage = val;
	                    $$.user.getRoleData(that.rolePageSize,that.roleCurrentPage,id,function(data){
	                    	if (data.status == 1) {
	                    		that.roleCurrentPage = data.adat.currentPage;
		                   	  	that.roleTotal = data.data.total;
		                    	that.roleList = data.data.tableData;
		                	} else {
		                		that.$message({
	                   			  showClose: true,
	               		          message: data.message,
	               		          type: 'error'
	               		        });
		                	}
	                    });
	                  },
	                    newUpdate(index, row) {
	                	  this.isDialog = true;
//	                	  var  a = $(".el-dialog__body");
	                	  console.log('=========',this.$refs.dialog);
//	                    	this.rowId = row.id;
//	                    	this.rowData = row;
	                    	 this.$nextTick(() => {
	                    		 // 调用子组件的方法,并像子组件传值
	                    		 this.$refs.child.bianji(row);
	                    	 })
//	                    	this.treeDatass = this.treeData;
//	                    	this.treeDatass = ['1','2','3'];
	                    	
//	                    	var that = this;
//	                    	this.isDisabled = true;
//	         	    	    this.isDialog = true;
//	                        var empCode = row.empCode;
//	                        StaffRunserver.getTree(function(data){
//	                        	if (data.status == 1) {
//	                        		that.treeData = data.data;
//			                	} else {
//			                		that.$message({
//		                   			  showClose: true,
//		               		          message: data.message,
//		               		          type: 'error'
//		               		        });
//			                	}
//	                  		  
//	                  	  	});
//	                        var selectSex = '';
//	                    	for (var i = 0;i < this.select.length;i++) {
//	                    		if (row.sex == this.select[i].text) {
//	                    			selectSex = this.select[i].id;
//	                    		}
//	                    	}
//	                        // 反填
//	                    	 setTimeout(function(){ 
//	                        	this.form.deptId = row.JGBM.toString();
//	                        	this.form.id = row.id;
//	                        	this.form.YHM = row.YHM;
//	                        	this.form.sex = selectSex;
//	                        	this.form.Telepone1 = row.jc;
//	                        	this.form.Telepone2 = row.telepone2;
//	                        	this.form.userName = row.userName;
//	                        	this.form.empCode = row.empCode;
//	                    	 }.bind(this), 0);
//	                        StaffRunserver.getRoleData(that.rolePageSize,that.roleCurrentPage,empCode,function(data){
//	                        	if (data.status == 1) {
//	                        		that.roleCurrentPage = data.data.currentPage;
//		                       	  	that.roleTotal = data.data.total;
//		                        	that.roleList = data.data.tableData;
//		                        	that.$nextTick(() => {
//			                        	for (var i = 0;i < that.roleList.length; i++) {
//			             	                if (that.roleList[i].acheckbox == 1) {
////			             	                		that.$refs.multipleTable.toggleRowSelection(that.roleList[i]);
//			             	                }
//			             	              }
//		                        	})
//	                        	} else {
//	                        		that.$message({
//		                   			  showClose: true,
//		               		          message: data.message,
//		               		          type: 'error'
//		               		        });
//	                        	}
//	                        });
	                       
	                      },//修改数据
	                      able() {
	                    	  var that = this;
	                    	  var arr = this.multipleSelection;
	                    	  var ids = [];
	                    	  for(var i=0;i<arr.length;i++){
	                    		  ids.push(arr[i].yid);
	               	   	   	  }
	                    	  $$.user.open({data:{ids:ids},success:function(rdata){
	                    		  if (rdata.code == 0) {
	               	    			that.$message({
	                       			  showClose: true,
	                   		          message: '启用成功！',
	                   		          type: 'success'
	                   		        });
	               	    			var paramsdata={"orderCol":that.name,"orderType":that.sort,"row":that.pagesize,"page":that.currentPage};
	        	   	              	paramsdata = $.extend(paramsdata, that.formData);
	        	            		$$.user.getTableData(
	        	            				{data:paramsdata,success:function(data){
	        	            			if (data.code == 0) {
	        	            				that.currentPage = data.data.currentPage;
	        	  	  	            	    that.tableData = data.data.tableData;
	        	  	  	            	    that.total = data.data.total;
	        		  	            	} else {
	        	  	            		  that.$message({
	        	      		  		   	    showClose: true,
	        	      			            message: data.message,
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
	                      },//启用
	                      disable() {
	                    	  var that = this;
	                    	  var arr = this.multipleSelection;
	                    	  var ids = [];
	                    	  for(var i=0;i<arr.length;i++){
	                    		  ids.push(arr[i].yid);
	               	   	   	  }
	                    	  $$.user.close({data:{ids:ids},success:function(rdata){
	                    		  if (rdata.code == 0) {
	                    			var paramsdata={"orderCol":that.name,"orderType":that.sort,"row":that.pagesize,"page":that.currentPage};
	          	   	              	paramsdata = $.extend(paramsdata, that.formData);
	          	            		$$.user.getTableData(
	          	            				{data:paramsdata,success:function(data){
	          	            			if (data.code == 0) {
	          	            				that.currentPage = data.data.currentPage;
	          	  	  	            	    that.tableData = data.data.tableData;
	          	  	  	            	    that.total = data.data.total;
	          		  	            	} else {
	          	  	            		  that.$message({
	          	      		  		   	    showClose: true,
	          	      			            message: data.message,
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
	                      },//禁用
	                      csh(){
	                    	  var that = this;
	                    	  var arr = this.multipleSelection;
	                    	  var ids = "";
	                    	  for(var i=0;i<arr.length;i++){
	                    		  ids+=arr[i].empCode+",";
	               	   	   	  }
	                    	  this.$confirm('是否初始化？', '提示', {
	                    		  closeOnClickModal: false,
	        	    	          confirmButtonText: '确定',
	        	    	          cancelButtonText: '取消',
	        	    	          type: 'warning'
	        	    	        }).then(() => {
	        	    	        	$$.user.updatePassword({data:{ids:ids},success:function(rdata){
	    	    	        		if (rdata.code == 0) {
	    	    	        			that.$message({
	  	                       			  showClose: true,
	  	                   		          message: '初始化成功！',
	  	                   		          type: 'success'
	  	                   		        });
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

	                      },//初始化
	                      a(){
	                    	  var that = this;
	                    	  var ids = "";
	            			  if(this.multipleSelection.length<1){
	            				  ids = "";
	            			  }else{
	            				  for(var i=0;i<this.multipleSelection.length;i++){
	                        		  ids+="'"+this.multipleSelection[i].id+"',";
	                   	   	   	  }
	            			  }
	            			  $$.user.exportExcel(
	                  				JSON.stringify(ids),function(data){
	                  					console.log('data=>',data);
	                  					if (data.status == 1) {
	                  						var url='./webdo/fileuploadImportRole/downloadfile?filename='+data.data.filename+'&systemname='+data.data.systemname;
		                  	 				url=encodeURI(url);
		                  	   				url=encodeURI(url);
		                  		        	window.open(url);
	                  						
	                  						
	                  						/*var urlDate='Uploaddoc/'+data.data.systemname;
	                  						urlDate=encodeURI(urlDate);
	                  						urlDate=encodeURI(urlDate);
	                  		  		        window.open(urlDate);*/
	                  					} else {
	                  						that.$message({
				                     			  showClose: true,
				                 		          message: data.message,
				                 		          type: 'error'
				                 		     });
	                  					}
	                  		        }		
	                  			);
	                      },
	                      //  强制下线
	                      xiaxian(index, row){
	                    	  var that = this;
	                    	  $$.user.logout({data:{yhm:row.yid},success:function(rdata){
	                    		  if (rdata.code == 0) {
	                    			 row.user='否';
	                 	    	  } else {
	                 	    		 that.$message({
		                     			  showClose: true,
		                 		          message: rdata.message,
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