var dragtable = moduleinit({
	url:'/demos/dragtable/dragtable.html', 
	el:'#dragtable',
	dorender:function(content){
	    var data = {
			template: content.template,
	        name: 'dragtable',
	        data() {
	            return {
	            	tableData: [],
	            	currentPage: 1,
	            	pagesize: 10,
	            	total: 0,
	            	loading: true,
	            	dialogVisible: false,
	            	form: {
	            		creater: '',
	            		name: '',
	            		describe: ''
	            	},
	            	rules: {
	            		creater: [
	                       { required: true, message: '请输入创建人', trigger: 'blur' }
	                    ],
	                    name: [
	                       { required: true, message: '请输入页面名称', trigger: 'blur' }
	                    ]
	                }
	            }
	        },
	        computed: {
	        	tableList() {
	        		return this.$store.state.tableData;
	        	}
	        },
	        mounted() {
	        	var that = this;
	        	DragElementRunserver.init(that.pagesize,that.currentPage,function(res){
        			console.log('res=====>',res);
        			if (res.status == 1) {
        				that.tableData = res.data.tableData;
        				that.currentPage = res.data.currentPage;
        				that.total = res.data.total;
        				that.$store.commit('updateList', that.tableData);
        				that.loading = false;
        			} else {
        				that.$message.error(res.message);
        				that.loading = false;
        			}
        		})
	        },
	        methods: {
	        	// 创建页面
	        	addBtn() {
	        		this.dialogVisible = true;
	        		this.$nextTick(function() {
	        			this.$refs.createform.resetFields();
	        		})
	        	},
	        	// 删除数据
	        	deleteBtn(row) {
	        		var that = this;
	        		this.loading = true;
	        		DragElementRunserver.deleteData(row.id,function(data){
	        			console.log('data====>',data);
	        			if (data.status == 1) {
	        				that.$message({
	    			            message: '删除成功!',
	    			            type: 'success'
	    			        });
	        				DragElementRunserver.init(that.pagesize,that.currentPage,function(res){
	                			console.log('res=====>',res);
	                			if (res.status == 1) {
	                				that.tableData = res.data.tableData;
	                				that.currentPage = res.data.currentPage;
	                				that.total = res.data.total;
	                				that.$store.commit('updateList', that.tableData);
	                				that.loading = false;
	                			} else {
	                				that.$message.error(res.message);
	                				that.loading = false;
	                			}
	                		})
	        			} else {
	        				that.$message.error(data.message);
	        				that.loading = false;
	        			}
	        		})
	        	},
	        	// 编辑数据
	        	editorBtn(row) {
	        		console.log('row=>',row);
	        		for (var i = 0;i < this.$store.state.openTab.length;i++) {
	                    if (this.$store.state.openTab[i].name == 'dragElement') {
	                      this.$store.commit('delete_tabs', this.$store.state.openTab[i].route);
	                    }
	                }
	        		this.$store.commit('updateId', row.id);
	        		this.$router.push(
	        			{
	        				path: '/dragElement',
	        				query: {
	        					id: row.id
	        				}
	        			}
	        		)
	        	},
	        	// 取消
	        	cancel() {
	        		this.dialogVisible = false;
	        	},
	        	// 确定
	        	confirm(formName) {
	        		var that = this;
	        		this.$refs[formName].validate((valid) => {
        	          if (valid) {
        	        	for (var i = 0;i < this.$store.state.openTab.length;i++) {
      	                    if (this.$store.state.openTab[i].name == 'dragElement') {
      	                      this.$store.commit('delete_tabs', this.$store.state.openTab[i].route);
      	                    }
      	                }
      	        		var params = {
      	        			id: '',
      	        			elements: '',
      	        			name: this.form.name,
      	        			createPerson: this.form.creater,
      	        			description: this.form.describe
      	        		};
      	        		console.log('params===>',params);
      	        		DragElementRunserver.saveData(JSON.stringify(params),function(data){
      	        			console.log('data=>',data);
      	        			if (data.status == 1) {
      	    	        		DragElementRunserver.init(that.pagesize,that.currentPage,function(res){
      			        			console.log('res=====>',res);
      			        			if (res.status == 1) {
      			        				that.tableData = res.data.tableData;
      			        				that.currentPage = res.data.currentPage;
      			        				that.total = res.data.total;
      			        				that.$store.commit('updateList', that.tableData);
      			        				that.$store.commit('updateId', data.data.id);
      			        				that.dialogVisible = false;
      			        				that.$router.push(
      			    	        			{
      			    	        				path: '/dragElement',
      			    	        				query: {
      			    	        					id: data.data.id
      			    	        				}
      			    	        			}
      			    	        		)
      			        			} else {
      			        				that.$message.error(res.message);
      			        			}
      			        		})
      	        			} else {
      	        				that.$message.error(data.message);
      	        			}
      	        		})
        	          } else {
        	            console.log('error submit!!');
        	            return false;
        	          }
        	        });
	        	},
	        	// 修改每页数量
	        	handleSizeChange(val) {
	        		var that = this;
	        		this.loading = true;
	        		DragElementRunserver.init(val,that.currentPage,function(res){
            			console.log('res=====>',res);
            			if (res.status == 1) {
            				that.tableData = res.data.tableData;
            				that.currentPage = res.data.currentPage;
            				that.total = res.data.total;
            				that.$store.commit('updateList', that.tableData);
            				that.loading = false;
            			} else {
            				that.$message.error(res.message);
            				that.loading = false;
            			}
            		})
	        	},
	        	// 修改当前页下一页
	        	handleCurrentChange(val) {
	        		var that = this;
	        		this.loading = true;
	        		DragElementRunserver.init(that.pagesize,val,function(res){
            			console.log('res=====>',res);
            			if (res.status == 1) {
            				that.tableData = res.data.tableData;
            				that.currentPage = res.data.currentPage;
            				that.total = res.data.total;
            				that.$store.commit('updateList', that.tableData);
            				that.loading = false;
            			} else {
            				that.$message.error(res.message);
            				that.loading = false;
            			}
            		})
	        	}
	        }	
		}
		return data;
	}
})
			    	