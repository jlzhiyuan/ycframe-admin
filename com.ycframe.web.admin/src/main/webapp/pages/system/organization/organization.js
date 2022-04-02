var organization = moduleinit({
	url:'/system/organization/organization.html',
	el:'#organization',
	dorender:function(content){
		var data={
	        template: content.template,
	        name: 'organization',
	        data() {
				var checkBm = (rule, value, callback) => {
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
			    	  if (!value) {
			    		  return callback(new Error('请选择上级部门'));
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
			                	callback(new Error('无法选择本部门及其下级部门'));
			                }else{
			                	callback();
			                }
			    	  }else{
			    		  callback();
			    	  }
			    	 
			      };
	          return {
	        	  deptShow:true,
	        	  rowCopy:null,
	        	  treeTableData: [],
	              currentRow: null,
	              dialogVisible: false,
	              state:true,
	              stateDel:true,
	              stateUpdate:true,
	              isChange: false,
	              ruleForm: {
	            	  parentID: '',
	            	  deptName: '',
	            	  deptnobm: '',
	            	  jc: '',
	            	  memo: '',
	            	  px:'',
	            	  id: ''
	              },
	              selected: '',
	              rules: {
		              parentID: [
		               	{ required: true, validator: checkParent, trigger: 'change' }
		              ],
		              deptName: [
		            	{ required: true, message: '必填', trigger: 'blur' }
		              ],
		              deptnobm: [
		                { required: true, message: '必填', trigger: 'blur' }
		              ],
		              jc: [
		                { required: true, message: '必填', trigger: 'blur' }
		              ],
		              px: [
		                { required: true, message: '必填', trigger: 'blur' }
		              ],
	              },
	              defaultProps: {
		              value: 'id',
		              label: 'bmmc',
		              children: 'children'
	              },
	              multipleSelection:[],
	              treeData: [],
	              isShow: true,
	              name: '',
	              sort: ''
	          }
	        },
	        watch: {
	        	treeTableData() {
	        		console.log('数据变化');
	        	}
	        },
	        mounted() {
	            var that = this;
	            $$.organization.getOranizations({data:{orderCol:that.name,orderType:that.sort},success:function(data){
	            	if(data.code==0){
	            		 that.treeTableData = data.data;
	 	      		    that.treeData = data.data;
	           		}else{
		           		 that.$message({
		                     showClose: true,
		                     message:  data.message,
		                     type: 'error'
		                   });
	           		}
	      		}});
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
	        		$$.organization.getOranizations({data:{orderCol:that.name,orderType:that.sort},success:function(data){
		            	if(data.code==0){
		            		 that.treeTableData = data.data;
		 	      		    that.treeData = data.data;
		           		}else{
			           		 that.$message({
			                     showClose: true,
			                     message:  data.message,
			                     type: 'error'
			                   });
		           		}
		      		}}); 
	           	},
	        handleCurrentChange(val) {
	        	this.currentRow = val;
	        	 if(!val){
	             	this.stateUpdate = true;
	             	this.stateDel = true;
	             	return;
	             }
	             if(val.id == '1'){
	             	this.stateUpdate = false;
	             	this.stateDel = true;
	             }else{
	             	 this.stateUpdate = false;
	              	 this.stateDel = false;
	             }
	        },
// handleClose(done) {
// this.$confirm('确认关闭？')
// .then(_ => {
// done();
// })
// .catch(_ => {});
// },
	        switchBtn() {
	        	this.isChange = !this.isChange;
	        },
// deepSearch(tree,id,data) {
// var stark = [];
	//
// stark = stark.concat(tree);
	//
// while(stark.length) {
// var temp = stark.shift();
// if(temp.children) {
// // 当前节点有子节点时，将子节点放到当前的栈的前面
// stark = temp.children.concat(stark);
// }
// if (temp.id == '1') {
// temp.children.push(data);
// }
// }
// },
	          // 保存
	        submitForm(formName) {
	    		var that = this;
	            this.$refs[formName].validate((valid) => {
	            	console.log('that.ruleForm=>',that.ruleForm);

		            if (valid) {
		            	$$.organization.saveData({data:that.ruleForm,success:function(rdata){ 
		            		if (rdata.code==0) {
			      				that.$message({
		              	          showClose: true,
		              	          message: '保存成功！',
		              	          type: 'success'
		              	        });
			      				that.$refs.singleTable.setCurrentRow();
				        		that.$refs.ruleForm.resetFields();
				        		$$.organization.getOranizations({
				        			data:{orderCol:that.name,orderType:that.sort},
				        			success:function(data){
					            	if(data.code==0){
					            		 that.treeTableData = data.data;
					 	      		    that.treeData = data.data;
					           		}else{
						           		 that.$message({
						                     showClose: true,
						                     message:  data.message,
						                     type: 'error'
						                   });
					           		}
					      		}}); 
							 	that.dialogVisible = false;
	// that.$refs.singleTable.setCurrentRow();
	// that.dialogVisible = false;
	// that.$refs.ruleForm.resetFields();
			       			}else{
			       				that.$message({
		              	          showClose: true,
		              	          message: rdata.message,
		              	          type: 'error'
		              	        });
			       			}
		            		
		            	}});
		            }
	            	
	            });
	        },
	        // 返回
	        returnBtn() {
	        	 this.$confirm('是否关闭？', {
	       		  closeOnClickModal: false,
	   	          confirmButtonText: '确定',
	   	          cancelButtonText: '取消',
	   	        }).then(() => {
		        	 this.dialogVisible = false;
		        	 this.$refs.ruleForm.resetFields();
		            
	   	        }).catch(() => {
	  	             
	   	        });
	   	        
	          
		        
	        },
	        // 新增
	        add() {
	        	this.ruleForm.id = '';
	        	this.isShow = true;
	        	this.deptShow = true;
	        	this.state = true;
			    var that = this;
			    $$.organization.getOranizations({
        			data:{orderCol:that.name,orderType:that.sort},
        			success:function(data){
	            	if(data.code==0){
	            		 that.treeData = data.data;
	           		}else{
		           		 that.$message({
		                     showClose: true,
		                     message:  data.message,
		                     type: 'error'
		                   });
	           		}
	      		}});  
			    this.dialogVisible = true;
	        },
	          // 修改
	        update() {
	        	this.isShow = false;
	    	    var that = this;
	    	    this.state = false;
		    	if(this.currentRow.id == '1'){
		    		this.deptShow = false;
		    	}else{
		    		this.deptShow = true;
		    	}
	    	  
		    	this.dialogVisible = true;
		    	$$.organization.getOranizations({
        			data:{orderCol:that.name,orderType:that.sort},
        			success:function(data){
	            	if(data.code==0){
	            		 that.treeData = data.data;
	           		}else{
		           		 that.$message({
		                     showClose: true,
		                     message:  data.message,
		                     type: 'error'
		                   });
	           		}
	      		}});  
		    	 setTimeout(function(){ 
		    		 if(this.currentRow.id == '1'){
		    			 this.ruleForm.parentID = "0";
		    		 }else{
		    			 this.ruleForm.parentID = this.currentRow.parent.toString();
		    		 }
		    	   
		    	    this.ruleForm.deptName = this.currentRow.bmmc;
		    	    this.ruleForm.deptnobm = this.currentRow.bmbh;				
		    	    this.ruleForm.jc = this.currentRow.jc;
		    	    this.ruleForm.memo = this.currentRow.bz;
		    	    this.ruleForm.id = this.currentRow.id;
		    	    this.ruleForm.px = this.currentRow.px;
		    	 }.bind(this), 0);
	        },
	        // 接受值
	        getvalue(value){
	        	console.log('我执行了吗');
	            this.ruleForm.parentID = value;
	            console.log('value=>',value);
// console.log(this.valueId);
	          },
	            handleSelectionChange(val) {
                  	
                  	
                  	 	var that = this;
             	  	 this.multipleSelection = val;
             	  	 
             	  	        
	        
             	  	 
             	  	 
             	  	 
             	  	 
             	  	 if(val.length>0)
             	  	 {
             	  	 	this.stateDel=false;
             	  	 }
    	        },
    	        
    	            rowClick(row) {
                       this.$refs.singleTable.toggleRowSelection(row);
                     },
	          // 删除
	        del() {
	        	if(this.currentRow == null){
			   	    this.$notify.error({
			            title: '错误',
			            message: '请选择您要删除的数据!'
		            });
			   	    return;
	  	   	   	}
	        	var that = this;
	        	var delarr=[];
	        		
           	   	 var arr = this.multipleSelection;
       	    	  
	           function loop(arr){
	            	for(var i=0;i<arr.length;i++){
	            		if(arr[i].id){ids.push(arr[i].id);}
	            		if(arr[i].children){loop(arr[i].children)};
	            	}
	            }
	            for(var k=0;k<arr.length;k++){
	            var ids = [];
		            loop(that.multipleSelection[k].children);
		            ids = [that.multipleSelection[k].id].concat(ids);
		            ids=ids+"";
		            delarr.push(ids);
	            }
	    	   
	    	    this.$confirm('是否删除？', '提示', {
			        confirmButtonText: '确定',
			        cancelButtonText: '取消',
			        type: 'warning'
		        }).then(() => {
		        	this.$confirm('此次操作也将删除所有子节点，请您再次确认!', '提示', {
		        		confirmButtonText: '确定',
		        		cancelButtonText: '取消',
		        		type: 'warning'
		    	    }).then(() => {
		    	    	$$.organization.deleteData({data:{ids:delarr},success:function(rdata){
		    	    		if(rdata.code == 0){
		    	    			that.$message({
		                	          showClose: true,
		                	          message: rdata.message,
		                	          type: 'success'
		                	        });
		    	    			$$.organization.getOranizations({
		    	        			data:{orderCol:that.name,orderType:that.sort},
		    	        			success:function(data){
		    		            	if(data.code==0){
		    		            		 that.treeData = data.data;
		    		            		 that.treeTableData = data.data;
		    		           		}else{
		    			           		 that.$message({
		    			                     showClose: true,
		    			                     message:  data.message,
		    			                     type: 'error'
		    			                   });
		    		           		}
		    		      		}});  
		    	    		}else{
		    	    			that.$message({
		                	          showClose: true,
		                	          message: rdata.message,
		                	          type: 'error'
		                	        });
		    	    			
		    	 		   	    return;
		    	    		}
		    	    		
		    	    	}});
		    	    }).catch(() => {
		    	             
		    	    });
		        	
		        }).catch(() => {
		             
		        });
	        	 
	        },
	   	    dialogClose(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
	        	this.$refs.ruleForm.resetFields();
	   	    }
	       	  
	       	  
	        }
	    }
		return data;
	}
})