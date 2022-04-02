var ButtonManage = moduleinit({
	url:'/system/buttonManage/index.html', 
	el:'#index',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Index',
            components: {
                TableContent: content.tableContainer
            },
            computed: {
            },
            data() {
              return {
            	  row: null,
            	  rules: {
                 	   anname: [
                      	{ required: true, message: '必填', trigger: 'blur' }
                        ],
                        anid: [
                          { required: true, message: '必填', trigger: 'blur' }
                        ],
                        effect: [
                          { required: true, message: '必填', trigger: 'blur' }
                        ],
                      },
              	form: {
              		anname: '',
              		anid: '',
              		effect: '',
              	    id: ''
                  },
              
              	multipleSelection: [],
//                  isSwitch: true,
                  isDialog: false,
                  tableData: [],
                  currentPage: 1,
                  total: 0,
                  pageSize: 10,
                  stateAble:true,
                  stateDisable:true,
                  stateDel:true,
                  name: '',
                  sort: '',
                  tableHeight: ''
              }
            },
            watch: {
            	row() {
            		this.form.anname = this.row.ANNAME;
                    this.form.anid = this.row.ANID;
                    this.form.effect = this.row.EFFECT;
                    this.form.id = this.row.id;
            	}
            },
            mounted() {
            	  var that = this;
                 	ButtonRunserver.init(this.name,this.sort,that.pageSize,that.currentPage,function(data){
                 		if(data.status==1){
                 			that.currentPage = data.data.currentPage;
                     		that.tableData = data.data.tableData;
                     		console.log('tableData=>',that.tableData)
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
            	update(res) {
            		this.tableHeight = res - 40;
            		console.log('res==========>',res);
            	},
            	sortChange(data) {
            		var that = this;
            		this.name = data.prop;
            		if (data.order == 'descending') {
            			this.sort = 'desc';
            		} else {
            			this.sort = 'asc';
            		}
            		ButtonRunserver.init(that.name,that.sort,that.pageSize,that.currentPage,function(data){
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
        	   headColor(row) {
                   if (row.rowIndex === 0) {
                     return 'background-color: #f5f7fa;'
                   }
                 },
             handleSizeChange(val) {
           	var that = this;
               that.pageSize = val;
               ButtonRunserver.init(that.name,that.sort,that.pageSize,that.currentPage,function(data){
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
               ButtonRunserver.init(that.name,that.sort,that.pageSize,that.currentPage,function(data){
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
             // 编辑
             handleEdit(index, row) {
            	 this.isDialog = true;
            	 this.row = row;
        		 this.form.anname = row.ANNAME;
                 this.form.anid = row.ANID;
                 this.form.effect = row.EFFECT;
                 this.form.id = row.id;
//            	 if (this.isDialog) {
//            		 this.form.anname = row.ANNAME;
//	                 this.form.anid = row.ANID;
//	                 this.form.effect = row.EFFECT;
//	                 this.form.id = row.id;
//            	 } else {
//            		 this.isDialog = true;
//            		 this.form.anname = row.ANNAME;
//	                 this.form.anid = row.ANID;
//	                 this.form.effect = row.EFFECT;
//	                 this.form.id = row.id;
//            	 }
              },
              beforeClose() {
            	  if (this.isDialog) {
            		  this.form.anname = this.row.ANNAME;
                      this.form.anid = this.row.ANID;
                      this.form.effect = this.row.EFFECT;
                      this.form.id = this.row.id;
            	  } else {
            		  this.isDialog = false;
            	  }
              },
               handleReturn(index, row) {
//                       this.isSwitch = !this.isSwitch;
                   row.isShow = false;
                 },//返回
               addRow() {
                 this.isDialog = true;
                 this.form.anname = '';
                 this.form.anid = '';
                 this.form.effect = '';
                 this.form.id = '';
               },//新增
               cancel() {
                 this.isDialog = false;
                 this.$refs.ruleForm.resetFields();
                 this.form.anname = '';
                 this.form.anid = '';
                 this.form.effect = '';
                 this.form.id = '';
               },//取消
               close() {
//                 this.$refs.ruleForm.resetFields();
//                 this.form.anname = '';
//                 this.form.anid = '';
//                 this.form.effect = '';
//                 this.form.id = '';
                 this.isDialog = false;
               },//关闭
               // 保存
               updateData(formName) {
               	var that = this;
               	this.$refs[formName].validate((valid) => {
                    if (valid) {
                       	ButtonRunserver.saveData(JSON.stringify(this.form),function(data){
                       		if (data.status==1) {
                       			that.isDialog = false;
                       			that.$message({
            		  		   	    showClose: true,
            			            message: '保存成功！',
            			            type: 'success'
            			        });
                       			
                       		 ButtonRunserver.init(that.name,that.sort,that.pageSize,that.currentPage,function(rdata){
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
                       		that.$refs.ruleForm.resetFields();
                       		that.form.anname = '';
                       		that.form.anid = '';
                       		that.form.effect = '';
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
              },
              able() {
           	   var that = this;
           	   var ids = "";
       	   	   var arr = this.multipleSelection;
       	   	   for(var i=0;i<arr.length;i++){
       	   		   ids+=arr[i].id+",";
       	   	   }
   	    	   ids=ids.substring(0,ids.length-1);
   	    	   ButtonRunserver.open(ids,function(data){
   	    		   if (data.status==1) {
   	    			that.$message({
		  		   	    showClose: true,
			            message: '启用成功！',
			            type: 'success'
			        });
   	    			 ButtonRunserver.init(that.name,that.sort,that.pageSize,that.currentPage,function(rdata){
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
       	   	   var arr = this.multipleSelection;
           	   var ids = "";
       	   	   for(var i=0;i<arr.length;i++){
       	   		   ids+=arr[i].id+",";
       	   	   }
   	    	   ids=ids.substring(0,ids.length-1);
   	    	   ButtonRunserver.close(ids,function(data){
   	    		if (data.status==1) {
   	    			that.$message({
		  		   	    showClose: true,
			            message: '禁用成功！',
			            type: 'success'
			        });
   	    			ButtonRunserver.init(that.name,that.sort,that.pageSize,that.currentPage,function(rdata){
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
   	    	        	ButtonRunserver.deleteData(ids,function(data){
   	    	        		if(data.status==1){
   	    	        			that.$message({
	   	 			  		   	    showClose: true,
	   	 				            message: '删除成功！',
	   	 				            type: 'success'
	   	 				        });
   	    	        		 ButtonRunserver.init(that.name,that.sort,that.pageSize,that.currentPage,function(rdata){
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
             
              },
            }
	    }
	    return data;
    }
})