var editorLog = moduleinit({
	url:'/system/codeEditor/editorLog.html', 
	el:'#editorLog',
    dorender:function(content){
    	var data = {
    		template: content.template,
            name: 'editorLog',
            components: {
            	
            },
            computed: {
            },
            data() {
            	var checkCode = (rule, value, callback) => {
      		        if (!value) {
      		        	return callback(new Error('必填'));
      		        }
      		        var that = this;
      		        var data = JdjcRunserver.check(value,that.form.ID);
      		        if (data.status == 0) {
      		        	callback(new Error(data.message));
      		        }else {
      		        	callback();
      		        }
      		    };
            	return {
            		loading:true,
            		form: {
						model_name: '',
						model_code: '',
						model_describe: '',
						zxr:'',
						versionid:'',
					},
					form1: {
						input: '',
						output: '',
					},
                    tableData: [],
                    total: 0,
                    sortName: '',
                    sort: '',
                    pageSize: 10,
                    currentPage: 1,
                    indexMethod: 1,//翻页序号改变
                    zxsj:[],
                    isDialog:false,
            	}
            },
            directives: {
                
            },
            watch:{
            },
            mounted() {
            	
            },
            methods: {
            	add(row){
            		var that=this;
            		$$.yhlywh.init({data:{page:'1',pageSize:'9999'},success:function(data){
  	        		  if (data.code == 0) {
  	        			  that.yhlyselect = data.data.data;
  	        		  }
  	        	  }});
            		that.form.model_name=row.model_name;
            		that.form.model_code=row.model_code;
            		that.form.model_describe=row.model_describe;
            		that.form.version=row.version;
            		that.form.model_name=row.model_name;
            		that.form.versionid=row.versionid;
            		that.form.code=row.code;
            		$$.code.getLog({data:{zxr:that.form.zxr,zxsj:JSON.stringify(that.zxsj),versionid:that.form.versionid},success:function(data){
    					that.loading = false;
    	        		  if (data.code == 0) {
    	        			  for(var i=0;i<data.data.data.length;i++){
    	        				  var myDate=new Date(data.data.data[i].use_time);
    		        			  var nian=myDate.getFullYear();  // 获取完整的年份(4位,1970)
    		                      var yue=myDate.getMonth()+1;  // 获取月份(0-11,0代表1月,用的时候记得加上1)
    		                      if(yue<10){
    		                      	yue='0'+yue;
    		                      }
    		                      var ri=myDate.getDate();  // 获取日(1-31)
    		                      if(ri<10){
    		                      	ri='0'+ri;
    		                      }
    		                      data.data.data[i].use_time=nian+'-'+yue+'-'+ri;
    	        			  }
    	        			  that.tableData = data.data.data;
    	        		  }
    	        	  	}});
            	},
            	query(){
            		var that=this;
            		$$.code.getLog({data:{orderCol:that.name,orderType:that.sort,zxr:that.form.zxr,zxsj:JSON.stringify(that.zxsj),versionid:that.form.versionid},success:function(data){
    					that.loading = false;
    	        		  if (data.code == 0) {
//    	        			  for(var i=0;i<data.data.data.length;i++){
//    	        				  var myDate=new Date(data.data.data[i].use_time);
//    		        			  var nian=myDate.getFullYear();  // 获取完整的年份(4位,1970)
//    		                      var yue=myDate.getMonth()+1;  // 获取月份(0-11,0代表1月,用的时候记得加上1)
//    		                      if(yue<10){
//    		                      	yue='0'+yue;
//    		                      }
//    		                      var ri=myDate.getDate();  // 获取日(1-31)
//    		                      if(ri<10){
//    		                      	ri='0'+ri;
//    		                      }
//    		                      data.data.data[i].use_time=nian+'-'+yue+'-'+ri;
//    	        			  }
    	        			  that.tableData = data.data.data;
    	        		  }
    	        	  	}});
            	},
            	handleCurrentChange(val) {
                   	var that = this;
                    that.currentPage = val;
                    that.query();
    	          },
            	handleSizeChange(val) {
                 	var that = this;
                    that.pageSize = val;
                    that.query();
      	          },
      	        sortChange(data) {
	            		var that = this;
	               		this.name = data.prop;
	               		if (data.order == 'descending') {
	               			this.sort = 'desc';
	               		} else {
	               			this.sort = 'asc';
	               		}
	               		that.query();
	               	},
            	srscsj(row){
            		this.isDialog=true
            		this.form1.input=row.input;
            		this.form1.output=row.output;
            	},
            	del(row){
               		var that = this;
               		this.$confirm('是否删除？', '提示', {
         	    	        confirmButtonText: '确定',
         	    	        cancelButtonText: '取消',
         	    	        type: 'warning'
         	    	    }).then(() => {
       				$$.code.delLog({data:{id:row.id},success:function(data){
       	        		  if (data.code == 0) {
       	        			  that.$message({
    	     		  		   	   showClose: true,
    	     			           message: '删除成功！',
    	     			           type: 'success'
    	     			       });
       	        			  that.query();
       	        		  }else{
       	        			  that.$message({
    		        		  		   	    showClose: true,
    		        			            message: data.message,
    		        			            type: 'error'
    		        			        });
       	        		  }
       	        	  	}});
         	    	  }).catch(() => {
    	    	             
     	    	    });
               },
            }
    	}
    	return data;
    }
})