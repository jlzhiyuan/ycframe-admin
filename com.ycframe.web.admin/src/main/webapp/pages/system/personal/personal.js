var personalPage = moduleinit({
  url:'/system/personal/personal.html',
  el:'#personalPage',
    dorender:function(content){
      var data = {
        template: content.template,
        name: 'personalPage',
        data() {
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
     		tabPosition: 'left',
     		activeName: 'first'
          }
        },
        watch: {
        	activeName() {
        		if (this.activeName == 'first') {
        			this.form2.id = this.user.userId;
                	this.form2.ryid = this.user.ryid;
                	this.form2.Telephone1 = this.user.Telephone1;
                	this.form2.Telephone2 = this.user.Telephone2;
                	this.form2.sex = this.user.sex;
                	this.form2.bmmc = this.user.bmmc;
                	this.form2.realName = this.user.realName;
        		} else {
        			this.form2.id = this.user.userId;
                	this.form2.ryid = this.user.ryid;
                	this.form2.Telephone1 = this.user.Telephone1;
                	this.form2.Telephone2 = this.user.Telephone2;
                	this.form2.sex = this.user.sex;
                	this.form2.bmmc = this.user.bmmc;
                	this.form2.realName = this.user.realName;
        		}
        	},
        	activeName: {
        		handler(newName, oldName) {
        			if (this.activeName == 'first') {
            			this.form2.id = this.user.userId;
                    	this.form2.ryid = this.user.ryid;
                    	this.form2.Telephone1 = this.user.Telephone1;
                    	this.form2.Telephone2 = this.user.Telephone2;
                    	this.form2.sex = this.user.sex;
                    	this.form2.bmmc = this.user.bmmc;
                    	this.form2.realName = this.user.realName;
            		} else {
            			this.form.id = this.user.userId;
                    	this.form.ryid = this.user.ryid;
                    	this.form.bmmc = this.user.bmmc;
                    	this.form.loginName = this.user.loginName;
                    	this.form.newPwd = this.user.newPwd;
                    	this.form.confirmPwd = this.user.confirmPwd;
            		}
        		},
        	    immediate: true
        	}
        },
        mounted() {
        	var that = this;
        	LoginRunserver.getUserDetail(function(data){
        		console.log('data=>',data);
        		that.user = data;
        		that.form2.id = that.user.userId;
        		that.form2.ryid = that.user.ryid;
        		that.form2.Telephone1 = that.user.Telephone1;
        		that.form2.Telephone2 = that.user.Telephone2;
        		that.form2.sex = that.user.sex;
        		that.form2.bmmc = that.user.bmmc;
        		that.form2.realName = that.user.realName;
        	});
        },
        methods: {
        	handleClick(tab, event) {
                console.log(tab, event);
            },
            updateData:function(formName) {
             	var that = this;
             	this.$refs[formName].validate(function (valid) {
                  if (valid) {
                  	MmglRunserver.updatedata(JSON.stringify(that.form),function(rdata){
//                  		rdata = JSON.parse(rdata);
                  		if(rdata.state == "success"){
                  			LoginRunserver.logOut(function(data){
                  	      		  if(data.state=="success"){
                  	      			  window.location.href = './';
                  	      		  }
                  	      	  });
                  		}else{
                  			that.$message({
            		  		   	    showClose: true,
            			            message: rdata.note,
            			            type: 'error'
            			        });
                  		}
        			});		
                	}
                	
                });
              },
              updateData2:function(formName) {
             	var that = this;
             	this.$refs[formName].validate(function (valid) {
                  if (valid) {
                  	StaffRunserver.changeNameAndPhone(JSON.stringify(that.form2),function(rdata){
                  		if(rdata.status == 1){
                  			LoginRunserver.getUserDetail(function(data){
//                  				data = JSON.parse(data);
                  				that.user = data;
                  				that.$message({
                           			  showClose: true,
                       		          message: '修改成功！',
                       		          type: 'success'
                       		        });
                  				that.isDialog2 = false;
                  			});
                  		} else {
                  			that.$message.error(rdata.message);
                  		}
                  	});
                	}
                	
                });
             }
        }
              
      }
      return data;
    }
})