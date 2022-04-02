var Data = moduleinit({
	url:'/system/data/data.html', 
	el:'#data',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Data',
            data() {
              return {
            	form: {
            	  rolename: '',
            	  xname: '',
            	  tjbds: '',
            	  memo: '',
            	  id: ''
                },
                rules: {
                	rolename: [
                    	{ required: true, message: '必填', trigger: 'blur' }
                      ],
                      xname: [
                        { required: true, message: '必填', trigger: 'blur' }
                      ],
                      tjbds: [
                        { required: true, message: '必填', trigger: 'blur' }
                      ],
                      memo: [
                              { required: true, message: '必填', trigger: 'blur' }
                            ],
                    },
            	multipleSelection: [],
                isSwitch: true,
                isDialog: false,
                tableData: [],
                currentPage: 1,
                total: 0,
                pageSize: 10,
                stateAble:true,
                stateDisable:true,
                stateDel:true,
                name: '',
                sort: ''
              }
            },
            mounted() {
            	var that = this;
            	DataRunserver.init(this.name,this.sort,that.pageSize,that.currentPage,function(data){
            		if(data.status==1){
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
            		DataRunserver.init(this.name,this.sort,that.pageSize,that.currentPage,function(data){
            			if(data.status==1){
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
              handleSizeChange(val) {
            	var that = this;
                that.pageSize = val;
                DataRunserver.init(this.name,this.sort,that.pageSize,that.currentPage,function(data){
                	if(data.status==1){
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
            	});
              },
              handleCurrentChange(val) {
            	var that = this;
                that.currentPage = val;
                DataRunserver.init(this.name,this.sort,that.pageSize,that.currentPage,function(data){
                	if(data.status==1){
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
            	});
              },
              handleEdit(index, row) {
            	  setTimeout(function(){ 
    	              this.form.rolename = row.ROLENAME;
    	              this.form.xname = row.XNAME;
    	              this.form.tjbds = row.TJBDS;
    	              this.form.memo = row.MEMO;
    	              this.form.id = row.id;
    	              this.isDialog = true;
            	  }.bind(this), 0);
                },
                handleReturn(index, row) {
                    row.isShow = false;
                  },//返回
                addRow() {
                  this.isDialog = true;
                  this.form.rolename = '';
                  this.form.xname = '';
                  this.form.tjbds = '';
                  this.form.memo = '';
                  this.form.id = '';
                },//新增
                cancel() {
                  this.isDialog = false;
                  this.$refs.form.resetFields();
                  this.form.rolename = '';
                  this.form.xname = '';
                  this.form.tjbds = '';
                  this.form.memo = '';
                  this.form.id = '';
                },//取消
                close() {
                  this.$refs.form.resetFields();
                  this.form.rolename = '';
                  this.form.xname = '';
                  this.form.tjbds = '';
                  this.form.memo = '';
                  this.form.id = '';
                },//关闭
                updateData(formName) {
                	var that = this;
                	this.$refs[formName].validate((valid) => {
                        if (valid) {
                                DataRunserver.saveData(JSON.stringify(this.form),function(data){
                                	if(data.status==1){
                                		that.isDialog = false;
                                    	that.$message({
                    		  		   	    showClose: true,
                    			            message: '保存成功！',
                    			            type: 'success'
                    			        });
                                    	DataRunserver.init(that.name,that.sort,that.pageSize,that.currentPage,function(rdata){
                                    		if(rdata.status==1){
                                       			that.currentPage = rdata.data.currentPage;
                                           		that.tableData = rdata.data.tableData;
                                           		that.total = rdata.data.total;
                                       		}else{
                            	           		 that.$message({
                            	                     showClose: true,
                            	                     message:  rdata.message,
                            	                     type: 'error'
                            	                   });
                                       		}
                                     	});
                                    	that.$refs.form.resetFields();
                                    	that.form.rolename = '';
                                    	that.form.xname = '';
                                    	that.form.tjbds = '';
                                    	that.form.memo = '';
                                    	that.form.id = '';
                                	}else{
                                		 that.$message({
                    	                     showClose: true,
                    	                     message:  data.message,
                    	                     type: 'error'
                    	                   });
                                	}
                                	
                                });
                      	}
                      	
                      });
               },//确定
               able() {
            	   var that = this;
            	   var ids = "";
        	   	   var arr = this.multipleSelection;
        	   	   if(arr.length<1){
    	    	   	   this.$notify.error({
    		               title: '错误',
    		               message: '请选择您要启用的数据!'
    	               });
    	    	   	   return;
        	   	   }
        	   	   for(var i=0;i<arr.length;i++){
        	   		   ids+=arr[i].id+",";
        	   	   }
    	    	   ids=ids.substring(0,ids.length-1);
        	   	   DataRunserver.open(ids,function(data){
    	    	   		if (data.status==1) {
    	    	   			that.$message({
    			  		   	    showClose: true,
    				            message: '启用成功！',
    				            type: 'success'
    				        });
    		    	   		 DataRunserver.init(this.name,this.sort,that.pageSize,that.currentPage,function(rdata){
    		    	   			if(rdata.status==1){
                           			that.currentPage = rdata.data.currentPage;
                               		that.tableData = rdata.data.tableData;
                               		that.total = rdata.data.total;
                           		}else{
                	           		 that.$message({
                	                     showClose: true,
                	                     message:  rdata.message,
                	                     type: 'error'
                	                   });
                           		}
    		    	   		 });
       	    		     }else{
       	    		    	 that.$message({
        	                     showClose: true,
        	                     message:  data.message,
        	                     type: 'error'
        	                   });
       	    		     }
    			   });
        	   	  
               },//启用
               disable() {
            	   var that = this;
            	   var ids = "";
        	   	   var arr = this.multipleSelection;
        	   	   if(arr.length<1){
    	    	   	   this.$notify.error({
    		               title: '错误',
    		               message: '请选择您要禁用的数据!'
    	               });
    	    	   	   return;
        	   	   }
        	   	   for(var i=0;i<arr.length;i++){
        	   		   ids+=arr[i].id+",";
        	   	   }
    	    	   ids=ids.substring(0,ids.length-1);
        	   	   DataRunserver.close(ids,function(data){
    	    	   	   if (data.status==1) {
    	    	   		that.$message({
    		  		   	    showClose: true,
    			            message: '禁用成功！',
    			            type: 'success'
    			        });
    	    	   		 DataRunserver.init(this.name,this.sort,that.pageSize,that.currentPage,function(rdata){
    	    	   			if(rdata.status==1){
                       			that.currentPage = rdata.data.currentPage;
                           		that.tableData = rdata.data.tableData;
                           		that.total = rdata.data.total;
                       		}else{
            	           		 that.$message({
            	                     showClose: true,
            	                     message:  rdata.message,
            	                     type: 'error'
            	                   });
                       		}
    		    	   	 });
    	   	    	   }else{
       	    		    	 that.$message({
        	                     showClose: true,
        	                     message:  data.message,
        	                     type: 'error'
        	                   });
       	    		     }
    			   });
    	    	  
               },//禁用
               del() {
            	   var that = this;
            	   var ids = "";
        	   	   var arr = this.multipleSelection;
        	   	   for(var i=0;i<arr.length;i++){
        	   		   ids+=arr[i].id+",";
        	   	   }
    	    	   ids=ids.substring(0,ids.length-1);
    	    	   this.$confirm('是否删除？', '提示', {
    	    	          confirmButtonText: '确定',
    	    	          cancelButtonText: '取消',
    	    	          type: 'warning'
    	    	        }).then(() => {
    	    	        	DataRunserver.deleteData(ids,function(data){
    	    	        		if (data.status==1) {
    	    	        			that.$message({
    	    			  		   	    showClose: true,
    	    				            message: '删除成功！',
    	    				            type: 'success'
    	    				        });
    	    	        			DataRunserver.init(that.name,that.sort,that.pageSize,that.currentPage,function(rdata){
    	    	        				if(rdata.status==1){
    	                           			that.currentPage = rdata.data.currentPage;
    	                               		that.tableData = rdata.data.tableData;
    	                               		that.total = rdata.data.total;
    	                           		}else{
    	                	           		 that.$message({
    	                	                     showClose: true,
    	                	                     message:  rdata.message,
    	                	                     type: 'error'
    	                	                   });
    	                           		}
        	    		    	   	 });
    	    	        		}else{
    	       	    		    	 that.$message({
    	        	                     showClose: true,
    	        	                     message:  data.message,
    	        	                     type: 'error'
    	        	                   });
    	       	    		     }
    	    		    	   });
    	    	        	
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
               		this.stateAble = false;
               		this.stateDisable = false;
                       this.stateDel = false;
               	}
                   
               }
            }
	    }
	    return data;
    }
})
