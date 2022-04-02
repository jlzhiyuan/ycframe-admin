var RoleManage = moduleinit({
	url:'/system/RoleManage/roleManage.html', 
	el:'#RoleManage',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'RoleManage',
            components: {
                TableContent: content.tableContainer
            },
            computed: {
            },
            data() {
              return {
            	  rules: {
             		 JSMC: [
                    	{ required: true, message: '必填', trigger: 'blur' }
                      ],
                      LX: [
                        { required: true, message: '必填', trigger: 'blur' }
                      ],
                      MS: [
                        { required: true, message: '必填', trigger: 'blur' }
                      ],
                    },
            	form: {
            		JSMC: '',
            		LX: '',
            		MS: '',
            	    id: ''
                },
                diatitle:"",//弹窗名称
            formData: {
               XM: '',
               YHM:'',
               treeid:'',
            },
                data: [],
                treeId:'',
            	multipleSelection: [],
//                isSwitch: true,
                isDialog: false,
                isDialog2: false,
                tableData: [],
                currentPage: 1,
                total: 0,
                pageSize: 10,
                stateAble:true,
                stateDisable:true,
                stateDel:true,
                name: '',
                sort: '',
                defaultProps: {
             	   value: 'id',
 	               label: 'bmmc',
 	               children: 'children'
                },
                tableData2: [],
                currentPage2: 1,
                pageSize2: 10,
                total2: 0,
                roleId: ''
              }
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
            	var that = this;
               	$$.role.init(
               			{data:{orderCol:that.name,orderType:that.sort,row:that.pageSize,page:that.currentPage},
	               			success:function(data){
			               		if(data.code==0){
			               			that.currentPage = data.data.currentPage;
			                   		that.tableData = data.data.tableData;
			                   		that.total = data.data.total;
			               		}else{
			    	           		 that.$message({
			    	                     showClose: true,
			    	                     message:  data.message,
			    	                     type: 'error'
			    	                   });
			               		}
	               			}
               			});
            },
            methods: {
            	sortChange(data) {
            		var that = this;
            		this.name = data.prop;
            		if (data.order == 'descending') {
            			this.sort = 'desc';
            		} else {
            			this.sort = 'asc';
            		}
            		$$.role.init(
                   			{data:{orderCol:that.name,orderType:that.sort,row:that.pageSize,page:that.currentPage},
    	               			success:function(data){
    			               		if(data.code==0){
    			               			that.currentPage = data.data.currentPage;
    			                   		that.tableData = data.data.tableData;
    			                   		that.total = data.data.total;
    			               		}else{
    			    	           		 that.$message({
    			    	                     showClose: true,
    			    	                     message:  data.message,
    			    	                     type: 'error'
    			    	                   });
    			               		}
    	               			}
                   			});
               	},
            	   rowClick(row) {
                       this.$refs.multipleTable.toggleRowSelection(row);
                     },
                     rowClass(row){
                         if(this.multipleSelection.includes(row.row)){
                           return { "background-color": "#ecf5ff" }
                         }
                       },
            	   headColor(row) {
                       if (row.rowIndex === 0) {
                         return 'background-color: #f5f7fa;'
                       }
                     },
                 handleSizeChange(val) {
               	var that = this;
                   that.pageSize = val;
                   $$.role.init(
                  			{data:{orderCol:that.name,orderType:that.sort,row:that.pageSize,page:that.currentPage},
   	               			success:function(data){
   			               		if(data.code==0){
   			               			that.currentPage = data.data.currentPage;
   			                   		that.tableData = data.data.tableData;
   			                   		that.total = data.data.total;
   			               		}else{
   			    	           		 that.$message({
   			    	                     showClose: true,
   			    	                     message:  data.message,
   			    	                     type: 'error'
   			    	                   });
   			               		}
   	               			}
                  			});
                 },
                 handleCurrentChange(val) {
               	var that = this;
                   that.currentPage = val;
                   $$.role.init(
                  			{data:{orderCol:that.name,orderType:that.sort,row:that.pageSize,page:that.currentPage},
   	               			success:function(data){
   			               		if(data.code==0){
   			               			that.currentPage = data.data.currentPage;
   			                   		that.tableData = data.data.tableData;
   			                   		that.total = data.data.total;
   			               		}else{
   			    	           		 that.$message({
   			    	                     showClose: true,
   			    	                     message:  data.message,
   			    	                     type: 'error'
   			    	                   });
   			               		}
   	               			}
                  			});
                 },
                 // 编辑
                 handleEdit(index, row) {
                	 setTimeout(function(){ 
                	  	 this.diatitle="修改角色";
    	                 this.form.MS = row.MS;
    	                 this.form.LX = row.LX;
    	                 this.form.JSMC = row.JSMC;
    	                 this.form.id = row.id;
    	                 this.isDialog = true;
                	 }.bind(this), 0);
                  },
                  jsfp(index, row) {
                	    this.isDialog2 = true;
    	             	this.roleId = row.id;
    	             	var that = this;
    	                $$.user.getTree({success:function(rdata){
    		            	  if (rdata.code == 0) {
    		            		  that.data = rdata.data;
    		            	  } else {
    		            		  that.$message({
    				  		   	      showClose: true,
    					              message: rdata.message,
    					              type: 'error'
    		            		  });
    		            	  }
    	        	    }}
    	                );
    	                console.log('pagesize=====================>',that.pageSize);
    	                var params = {orderCol:that.name,orderType:that.sort,row:that.pageSize2,page:that.currentPage2,jsid:row.id}
    	                params = $.extend(params,that.formData);
    	                $$.role.getTableData({data:params,success:function(data){
    	                	console.log('data========================',data);
    		            	  if (data.code == 0) {
    		            		  that.currentPage2 = data.data.currentPage;
    			            	  that.tableData2 = data.data.tableData;
    			            	  that.total2 = data.data.total;
    		            	  } else {
    		            		  that.$message({
    	    		  		   	    showClose: true,
    	    			            message: data.message,
    	    			            type: 'error'
    	    			         });
    		            	  }
    		              }});
                    },
                   handleReturn(index, row) {
//                       this.isSwitch = !this.isSwitch;
                       row.isShow = false;
                     },//返回
                   addRow() {
                     this.diatitle="新增角色";
                     this.form.MS = "";
    	             this.form.LX = "";
    	             this.form.JSMC = "";
    	             this.form.id = "";
    	             this.isDialog = true;
                   },//新增
                   cancel() {
                     this.isDialog = false;
                     this.$refs.ruleForm.resetFields();
                     this.form.MS = '';
                     this.form.LX = '';
                     this.form.JSMC = '';
                     this.form.id = '';
                   },//取消
                   close() {
                     this.$refs.ruleForm.resetFields();
                     this.form.JSMC = '';
                     this.form.MS = '';
                     this.form.LX = '';
                     this.form.id = '';
                   },//关闭
                   
                   close2() {
                       this.$refs.searchForm.resetFields();
                     },//关闭
                   // 保存
                   updateData(formName) {
                   	var that = this;
                   	this.$refs[formName].validate((valid) => {
                        if (valid) {
                        	$$.role.saveData({data:that.form,success:function(data){
                           		if (data.code==0) {
                           			that.isDialog = false;
                           			that.$message({
                		  		   	    showClose: true,
                			            message: '保存成功！',
                			            type: 'success'
                			        });
                           			
                           			$$.role.init(
                                   			{data:{orderCol:that.name,orderType:that.sort,row:that.pageSize,page:that.currentPage},
                    	               			success:function(data){
                    			               		if(data.code==0){
                    			               			that.currentPage = data.data.currentPage;
                    			                   		that.tableData = data.data.tableData;
                    			                   		that.total = data.data.total;
                    			               		}else{
                    			    	           		 that.$message({
                    			    	                     showClose: true,
                    			    	                     message:  data.message,
                    			    	                     type: 'error'
                    			    	                   });
                    			               		}
                    	               			}
                                   			});
//                           		that.$refs.ruleForm.resetFields();
                           		that.form.JSMC = '';
                           		that.form.LX = '';
                           		that.form.MS = '';
                           		that.form.id = '';
                           		}else{
                           		 that.$message({
            	                     showClose: true,
            	                     message:  data.message,
            	                     type: 'error'
            	                   });
                           		}
                             }}
                        	);
                            
                      	}
                      	
                      });
                  },
                  able() {
               	   var that = this;
               	   var ids = [];
           	   	   var arr = this.multipleSelection;
           	   	   for(var i=0;i<arr.length;i++){
           	   		   ids.push(arr[i].id);
           	   	   }
       	    	   $$.role.open({data:{ids:ids},success:function(data){
       	    		   if (data.code==0) {
       	    			that.$message({
    		  		   	    showClose: true,
    			            message: '启用成功！',
    			            type: 'success'
    			        });
       	    			$$.role.init(
       	               			{data:{orderCol:that.name,orderType:that.sort,row:that.pageSize,page:that.currentPage},
       		               			success:function(data){
       				               		if(data.code==0){
       				               			that.currentPage = data.data.currentPage;
       				                   		that.tableData = data.data.tableData;
       				                   		that.total = data.data.total;
       				               		}else{
       				    	           		 that.$message({
       				    	                     showClose: true,
       				    	                     message:  data.message,
       				    	                     type: 'error'
       				    	                   });
       				               		}
       		               			}
       	               			});
       	    		   }else{
       	    			 that.$message({
    	                     showClose: true,
    	                     message:  data.message,
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
           	   	      	if(arr[i].id==0)
           	   	   	{
           	   	   	
	           	   	   	 that.$message({
	       	    	 			 showClose: true,
	       	    	 			 message:  "root,系统管理员为默认角色不可禁用",
	       	    	 		     type: 'error'
	       	    	 			 });
	       	    	 	retutn;
	           	   	   	}
           	   		   ids.push(arr[i].id);
           	   	   }
        	       $$.role.close({data:{ids:ids},success:function(data){
       	    		if (data.code==0) {
       	    			that.$message({
    		  		   	    showClose: true,
    			            message: '禁用成功！',
    			            type: 'success'
    			        });
       	    			$$.role.init(
       	               			{data:{orderCol:that.name,orderType:that.sort,row:that.pageSize,page:that.currentPage},
       		               			success:function(data){
       				               		if(data.code==0){
       				               			that.currentPage = data.data.currentPage;
       				                   		that.tableData = data.data.tableData;
       				                   		that.total = data.data.total;
       				               		}else{
       				    	           		 that.$message({
       				    	                     showClose: true,
       				    	                     message:  data.message,
       				    	                     type: 'error'
       				    	                   });
       				               		}
       		               			}
       	               			});
       	    		}else{
       	    		 that.$message({
    	                     showClose: true,
    	                     message:  data.message,
    	                     type: 'error'
    	                   });
       	    		}
       	    		
       			   }});
       	    	  
                  },//禁用
                  del() {
               	   var that = this;
               	   var ids = [];
           	   	   var arr = this.multipleSelection;
       	    	  
           	   	   for(var i=0;i<arr.length;i++){
           	   	   	if(arr[i].id==0)
           	   	   	{
           	   	   	
           	   	   	 that.$message({
       	    	 			 showClose: true,
       	    	 			 message:  "root,系统管理员为默认角色不可删除",
       	    	 		     type: 'error'
       	    	 			 });
       	    	 	retutn;
           	   	   	}
           	   		   ids.push(arr[i].id);
           	   	   }
        	       this.$confirm('是否删除？', '提示', {
       	    	          confirmButtonText: '确定',
       	    	          cancelButtonText: '取消',
       	    	          type: 'warning'
       	    	        }).then(() => {
       	    	        	$$.role.deleteData({data:{ids:ids},success:function(data){
       	    	        		if(data.code==0){
       	    	        			that.$message({
    	   	 			  		   	    showClose: true,
    	   	 				            message: '删除成功！',
    	   	 				            type: 'success'
    	   	 				        });
       	    	        			$$.role.init(
       	    	                			{data:{orderCol:that.name,orderType:that.sort,row:that.pageSize,page:that.currentPage},
       	    	 	               			success:function(data){
       	    	 			               		if(data.code==0){
       	    	 			               			that.currentPage = data.data.currentPage;
       	    	 			                   		that.tableData = data.data.tableData;
       	    	 			                   		that.total = data.data.total;
       	    	 			               		}else{
       	    	 			    	           		 that.$message({
       	    	 			    	                     showClose: true,
       	    	 			    	                     message:  data.message,
       	    	 			    	                     type: 'error'
       	    	 			    	                   });
       	    	 			               		}
       	    	 	               			}
       	    	                			});
       	    	        		}else{
       	    	        		 that.$message({
       	 	                     showClose: true,
       	 	                     message:  data.message,
       	 	                     type: 'error'
       	 	                   });
       	    	        	}
       	    		    }});
       	    	        	
       	    	        }).catch(() => {
       	    	             
       	    	        });
                  },//删除
                  handleSelectionChange(val) {
                  	
             	  	 this.multipleSelection = val;
    	      	   if(val.length==0){ 
    	         		this.stateAble = true;
    	         		this.stateDisable = true;
    	         		this.stateDel = true;
    	         	}else{
    	         		if(val[0].ZT=="0"){
    	         		this.stateAble = false;
    	         		  }
    	         		 if(val[0].ZT=="1"){
    	         			 this.stateDisable = false;
    	         		 }
    	                 this.stateDel = false;
    	                 for (var int = 0; int < val.length; int++) {
    	                	if(val[int].ZT=="0")
    	                	{
    	                		this.stateAble = false;
    	                	}
    	                	if(val[int].ZT=="1")
    	                	{
    	                		 this.stateDisable = false;
    	                	}
						}
    	                 
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

                	var params = {orderCol:that.name,orderType:that.sort,row:that.pageSize2,page:that.currentPage2,jsid:that.roleId}
  	                params = $.extend(params,that.formData);
  	                $$.role.getTableData({data:params,success:function(data){ 
  		            	  if (data.code == 0) {
  		            		  that.currentPage2 = data.data.currentPage;
  			            	  that.tableData2 = data.data.tableData;
  			            	  that.total2 = data.data.total;
  		            	  } else {
  		            		  that.$message({
  	    		  		   	    showClose: true,
  	    			            message: data.message,
  	    			            type: 'error'
  	    			         });
  		            	  }
  		              }});
                	   
                  },
                  handleSizeChange2(val) {
                	  var that = this;
                	  this.pageSize2 = val;
                	  var params = {orderCol:that.name,orderType:that.sort,row:that.pageSize2,page:that.currentPage2,jsid:that.roleId}
    	                params = $.extend(params,that.formData);
    	                $$.role.getTableData({data:params,success:function(data){ 
    		            	  if (data.code == 0) {
    		            		  that.currentPage2 = data.data.currentPage;
    			            	  that.tableData2 = data.data.tableData;
    			            	  that.total2 = data.data.total;
    		            	  } else {
    		            		  that.$message({
    	    		  		   	    showClose: true,
    	    			            message: data.message,
    	    			            type: 'error'
    	    			         });
    		            	  }
    		              }});
                  },
                  handleCurrentChange2(val) {
                	  var that = this;
                	  this.currentPage2 = val;
                	  var params = {orderCol:that.name,orderType:that.sort,row:that.pageSize2,page:that.currentPage2,jsid:that.roleId}
    	                params = $.extend(params,that.formData);
    	                $$.role.getTableData({data:params,success:function(data){ 
    		            	  if (data.code == 0) {
    		            		  that.currentPage2 = data.data.currentPage;
    			            	  that.tableData2 = data.data.tableData;
    			            	  that.total2 = data.data.total;
    		            	  } else {
    		            		  that.$message({
    	    		  		   	    showClose: true,
    	    			            message: data.message,
    	    			            type: 'error'
    	    			         });
    		            	  }
    		              }});
                  },
                  search() {
                	  var that = this;
                	  var params = {orderCol:that.name,orderType:that.sort,row:that.pageSize2,page:that.currentPage2,jsid:that.roleId}
    	                params = $.extend(params,that.formData);
    	                $$.role.getTableData({data:params,success:function(data){ 
    		            	  if (data.code == 0) {
    		            		  that.currentPage2 = data.data.currentPage;
    			            	  that.tableData2 = data.data.tableData;
    			            	  that.total2 = data.data.total;
    		            	  } else {
    		            		  that.$message({
    	    		  		   	    showClose: true,
    	    			            message: data.message,
    	    			            type: 'error'
    	    			         });
    		            	  }
    		              }});
                  },
                  deleteRole(row) {
                	  var that = this;
                	  var form = {
                			 ryid: row.id,
                			 jsid: this.roleId
                	  };
                	  $$.role.deleteryjs({data:form,success:function(data) {
                		  if (data.code == 0) {
                			  var params = {orderCol:that.name,orderType:that.sort,row:that.pageSize2,page:that.currentPage2,jsid:that.roleId}
            	                params = $.extend(params,that.formData);
            	                $$.role.getTableData({data:params,success:function(data){ 
            		            	  if (data.code == 0) {
            		            		  that.currentPage2 = data.data.currentPage;
            			            	  that.tableData2 = data.data.tableData;
            			            	  that.total2 = data.data.total;
            		            	  } else {
            		            		  that.$message({
            	    		  		   	    showClose: true,
            	    			            message: data.message,
            	    			            type: 'error'
            	    			         });
            		            	  }
            		              }});
                		  }
                	  }})
                  },
                  assignment(row) {
                	  var that = this;
                	  var form = {
                		  ryid: row.id,
             			 jsid: this.roleId
                	  };
                	  $$.role.addryjs({data:form,success:function(data) {
                		  if (data.code == 0) {
                			  var params = {orderCol:that.name,orderType:that.sort,row:that.pageSize2,page:that.currentPage2,jsid:that.roleId}
            	                params = $.extend(params,that.formData);
            	                $$.role.getTableData({data:params,success:function(data){ 
            		            	  if (data.code == 0) {
            		            		  that.currentPage2 = data.data.currentPage;
            			            	  that.tableData2 = data.data.tableData;
            			            	  that.total2 = data.data.total;
            		            	  } else {
            		            		  that.$message({
            	    		  		   	    showClose: true,
            	    			            message: data.message,
            	    			            type: 'error'
            	    			         });
            		            	  }
            		            }});
                		  }
                	  }})
                	  
                  }
            }
	    }
	    return data;
    }
})