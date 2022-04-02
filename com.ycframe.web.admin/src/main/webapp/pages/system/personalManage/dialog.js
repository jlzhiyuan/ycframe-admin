var dialogContent = moduleinit({
  url:'/system/personalManage/dialog.html',
  el:'#dialogContent',
    dorender:function(content){
      var data = {
          template: content.template,
          name: 'dialogContent',
          props: {
              
          },
          watch: {
        	  
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
                defaultProps: {
            	    value: 'id',
                    label: 'bmmc',
                    children: 'children'
                },
                roleCurrentPage: 1,
                roleTotal: 0,
                rolePageSize: 10,
                roleList: [],
                form: {
                	zy:'',
                  deptId: '',
                  YHM: '',
                  userName: '',
                  empCode: '',
                  Telepone1: '',
                  Telepone2: '',
                  sex: '',
                  id:''
	            },
                select: [{id:"1",text:"男"},{id:"0",text:"女"}],
                multipleSelection1: [],
                newData: null,
                name: '',
                sort: '',
                currentPage: 1,
                total: 0,
                pagesize: 10,
                formData1: {
                  userName: '',
                  empCode: '',
                  YHZT: '',
                  JSMC: '',
                  sex: '',
                  jc: '',
                  treeid:'',
                  id:''
                },
                isDisabled: false,
                indexid: false,
                treeData: [],
                zyselect: [], //专业select
              }
          },
         mounted() {
        	  var that = this;
        	  $$.user.getTree({success:function(rdata){
            	  if (rdata.code == 0) {
            		  that.treeData = rdata.data;
            	  } else {
            		  that.$message({
		  		   	    showClose: true,
			            message: rdata.message,
			            type: 'error'
			         });
            	  }
        	  }}); 
         },
          methods: {
        	  rsbmChange(){
        		  var reg = /^[0-9]*$/;
					var regResult = reg.test(this.form.empCode);
					if(!regResult){
						this.$message({
							showClose: true,
							message: '人事编码只能输入数字！',
							type: 'warning'
						});
						this.form.empCode = "";
					}
        	  },
        	  add() {
        		  var that = this;
        		  var id = 'a';
        		  $$.user.getRoleData({data:{pagesize:that.rolePageSize,page:that.roleCurrentPage,id:id},success:function(data){
                  	if (data.code == 0) {
                		that.roleCurrentPage = data.data.currentPage;
	               	  	that.roleTotal = data.data.total;
	                	that.roleList = data.data.tableData;
	                	} else {
	                		that.$message({
                 			  showClose: true,
             		          message: data.message,
             		          type: 'error'
             		        });
	                	}
                  }}); 
        	  },
        	  bianji(res) {
        		var that = this;
        		var rdata =   $$.user.getTree();
              	 if (rdata.code == 0) {
  	        		  that.treeData = rdata.data;
              	  } else {
              		  that.$message({
  		  		   	    showClose: true,
  			            message: rdata.message,
  			            type: 'error'
  			         });
              	  }
        		  var selectSex = '';
              	for (var i = 0;i < this.select.length;i++) {
              		if (res.sex == this.select[i].text) {
              			selectSex = this.select[i].id;
              		}
              	}
			        this.form.deptId = res.JGBM.toString();
              	this.form.id = res.id;
              	this.form.YHM = res.YHM;
              	this.form.sex = selectSex;
              	this.form.Telepone1 = res.jc;
              	this.form.Telepone2 = res.telepone2;
              	this.form.userName = res.userName;
              	this.form.empCode = res.empCode;
              	this.form.zy = res.zy;
              	this.isDisabled = true;
              	$$.user.getRoleData({data:{pagesize:that.rolePageSize,page:that.roleCurrentPage,id:that.form.empCode},success:function(data){
                  	if (data.code == 0) {
                  		that.roleCurrentPage = data.data.currentPage;
                 	  	that.roleTotal = data.data.total;
	                  	that.roleList = data.data.tableData;
	                  	that.$nextTick(() => {
	                      	for (var i = 0;i < that.roleList.length; i++) {
	           	                if (that.roleList[i].acheckbox == 1) {
	           	                		that.$refs.multipleTable.toggleRowSelection(that.roleList[i]);
	           	                }
	           	              }
	                  	})
	                } else {
	                		that.$message({
                 			  showClose: true,
             		          message: data.message,
             		          type: 'error'
             		        });
	                }
                  }});  
        	  },
        	  getvalue(value){
        		  this.form.deptId = value;
              },
              rowClick1(row) {
                  this.$refs.multipleTable.toggleRowSelection(row);
              },
              rowClass1(row){
                  if(this.multipleSelection1.includes(row.row)){
                    return { "background-color": "#ecf5ff" }
                  }
              },
              handleSelectionChange1(val) {
             	   this.multipleSelection1 = val;
              },
              handleSizeChange1(val) {
            	  var that = this;
                  that.rolePageSize = val;
                  $$.user.getRoleData({data:{pagesize:that.rolePageSize,page:that.roleCurrentPage,id:id},success:function(data){
                    	if (data.code == 0) {
                  		that.roleCurrentPage = data.data.currentPage;
  	               	  	that.roleTotal = data.data.total;
  	                	that.roleList = data.data.tableData;
  	                	} else {
  	                		that.$message({
                   			  showClose: true,
               		          message: data.message,
               		          type: 'error'
               		        });
  	                	}
                    }});  
              },
              handleCurrentChange1(val) {
                  var that = this;
                  that.roleCurrentPage = val;
                  $$.user.getRoleData({data:{pagesize:that.rolePageSize,page:that.roleCurrentPage,id:id},success:function(data){
                  	if (data.code == 0) {
                		that.roleCurrentPage = data.data.currentPage;
	               	  	that.roleTotal = data.data.total;
	                	that.roleList = data.data.tableData;
	                	} else {
	                		that.$message({
                 			  showClose: true,
             		          message: data.message,
             		          type: 'error'
             		        });
	                	}
                  }}); 
              },
           // 取消
              canael(formName) {
            	  this.$refs[formName].resetFields();
                  this.$refs.multipleTable.clearSelection();
                  this.isDisabled = false;
                  this.$emit('cancel', false);
              },
              // 保存
              updateData(formName) {
            	var that = this;
                var arr = this.multipleSelection1;
                console.log('this.multipleSelection1=>',this.multipleSelection1);
                var arrIds = [];
                for(var i=0;i<arr.length;i++){
                	var left = arr[i].id;
                	var leftId = left.split(",");
     	   		   arrIds.push(leftId[0]);
     	   	   }
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                    		console.log('that.form=====',that.form,arrIds);
                    		var paramsdata={"ids":arrIds};
             	            paramsdata = $.extend(paramsdata, that.form);
             	            
             	             $$.user.saveData({data:paramsdata,success:function(rdata){
                   	   	   		console.log('rdata====>',rdata);
                   	   	   		if (rdata.code == 0) {
	                          		that.$message({
	                       			  showClose: true,
	                   		          message: '保存成功！',
	                   		          type: 'success'
	                   		        });
 
                	            var paramsdata={"orderCol":that.name,"orderType":that.sort,"row":that.pagesize,"page":that.currentPage};
                	            paramsdata = $.extend(paramsdata, that.formData1);
                          		$$.user.getTableData(
              	            		  {
              	            			  data:paramsdata,
              	            			  success:function(data){
              	        	            	  if (data.code == 0) {
              	        	            		that.newData = data.data;
                                  				console.log('that.newData=====>',that.newData);
                                  				that.$emit('update1',that.newData);
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
//                          		that.indexid = '';
                          		that.$refs.multipleTable.clearSelection();
                          		this.isDisabled = false;
                          		that.$emit('cancel', false);
                          		that.$refs[formName].resetFields();
                          	 } else {
                          		that.$message({
                     			  showClose: true,
                 		          message: rdata.message,
                 		          type: 'error'
                 		        });
                          	 }
                           }});
                    }else{
                    	return false;
                    }
                });
              },
          }
              
      }
      return data;
    }
})