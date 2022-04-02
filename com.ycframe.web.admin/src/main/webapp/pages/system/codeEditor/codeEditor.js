document.write("<script language=javascript src='pages/system/codeEditor/editor.js'></script>");

var codeEditor = moduleinit({
	url: '/system/codeEditor/codeEditor.html',
	el: '#codeEditor', //页面template标签 id名
	dorender: function(content) {
		var data = {
			template: content.template,
			name: 'codeEditor', // 可与组件名称一致
			components: {
				editor:editor,
			},
			data() {
				return {
					loading:true,
					isDialog:false,
					edid:'',
					tableData: [],
					indexMethod: 1,
					currentPage: 1,
					total: 0,
					pageSize: 10,
					name: '',
	                sort: '',
					form: {
						model_name: '',
						model_code: '',
						model_describe: ''
					},
				}
			},
			watch: {
				pageSize(){
            		this.indexMethod = (this.currentPage - 1) * this.pageSize + 1
            	},
            	currentPage(){
            		this.indexMethod = (this.currentPage - 1) * this.pageSize + 1
            	}
			},
			methods: {
				xz(){
					this.isDialog = true;
					this.$nextTick(() => {
						this.$refs.tkchild.add();
					});
				},
				query(){
    				var that = this;
    				$$.code.init({data:{orderCol:that.name,orderType:that.sort,model_name:that.form.model_name,model_code:that.form.model_code,model_describe:that.form.model_describe,page:that.currentPage,pageSize:that.pageSize},success:function(data){
	        		  if (data.code == 0) {
	        			  that.loading = false;
	        			  for(var i=0;i<data.data.data.length;i++){
	        				 var data1=$$.code.initmx({data:{id:data.data.data[i].id}});
	        	        		  if (data1.code == 0) {
	        	        			  if(data1.data.data.length>0){
	        	        				  data.data.data[i].version = data1.data.data[0].version;
	        	        			  }else{
	        	        				  data.data.data[i].version = '';
	        	        			  }
	        	        		  }
	                    	}
	        			  }
	        			  that.tableData = data.data.data;
	        			  that.total = data.data.total;
	        	  }})
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
      	        bj(row){
  	        	  this.isDialog = true;
				  this.$nextTick(() => {
					this.$refs.tkchild.edit(row);
				  });
  	           },
  	         del(row){
           		var that = this;
           		this.$confirm('是否删除？', '提示', {
     	    	        confirmButtonText: '确定',
     	    	        cancelButtonText: '取消',
     	    	        type: 'warning'
     	    	    }).then(() => {
   				$$.code.delcode({data:{id:row.id},success:function(data){
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
			},
			mounted() {
				this.query();
			}
		}
		return data;
	}
})
