/**
 * 日志管理
 */
document.write("<script language=javascript src='pages/system/rzgl/rzglmx.js'></script>");
var rzgl = moduleinit({
	url:'/system/rzgl/rzgl.html', 
	el:'#rzgl',
	dorender:function(content){
		var data = {
				template: content.template,
 	    		name: 'rzgl',
 	    		components: {
 	    			rzglmx:rzglmx
 	            },
 	            data() {
 	            	return {
 	            		tableData: [],
 	            		peopleNum: [],
 	            		loading:true,
 	    		    	formInline: {
 	    		    		model: '',
 	    		    		username: '',
 	    		    		model_handle:'',
 	    		    		message:'',
 	    		    		ip:'',
 	    		    		error_body:'',
 	    		    		jlsj1:'',
 	    		    		jlsj2:''
 	    		    	},
 	    		    	currentPage: 1,
 		               	total: 0,
 		               	pagesize: 10,
 		               	indexMethod: 1,
 		               	name: '',
	    		    	sort: '',
	    		    	ID: '',
	    		    	isDialog:false,
	    		    	zxsj:[],
	    		    	isChange: false,
 	            	}
 	            },
 	           
 	            directives: {
		            drag: {
		            	
		            }
		        },
		        computed: {
		            isSwitch() {
		            	return this.ruleForm.isComponent
		            }
 		        },
 		        watch: {
 		        	pagesize() {
		        		this.indexMethod = (this.currentPage - 1) * this.pagesize + 1
		            },
		            currentPage() {
		                this.indexMethod = (this.currentPage - 1) * this.pagesize + 1
		            }
 		        },
 		        mounted() {
 		        	this.onSubmit();
 		        },
 		        methods: {
 	                handleCurrentChange(val){
 	                	var that = this;
 		                that.currentPage = val;
 		                that.onSubmit();
 	                },
 	                handleSizeChange(val) {
 	                	var that = this;
 		                that.pagesize = val;
 		                that.onSubmit();
 	                },
 	               sortChange(data) {
	            		var that = this;
	               		this.name = data.prop;
	               		if (data.order == 'descending') {
	               			this.sort = 'desc';
	               		} else {
	               			this.sort = 'asc';
	               		}
	               		that.onSubmit();
		           },
 	               peopleNumber(){
 	                	//this.isDialog=true;
 	                	 for (var i = 0;i < this.$store.state.openTab.length;i++) {
 	                        if (this.$store.state.openTab[i].name == 'rzgltj') {
 	                          this.$store.commit('delete_tabs', this.$store.state.openTab[i].route);
 	                          this.$router.push({
 	                            path: '/rzgltj/' 
 	                          });
 	                        } else {
 	                          this.$router.push({
 	                            path: '/rzgltj/'
 	                          });
 	                        }
 	                      }
 	                },
 	                onSubmit(){
 	                	var that = this;
 	                	that.loading = true;
 	                	if(that.zxsj !=null){
 	                		if(that.zxsj.length>0){
 	 	                		var myDate=new Date(that.zxsj[0]);
 	 	                		var nian=myDate.getFullYear();  // 获取完整的年份(4位,1970)
 	 	                		var yue=myDate.getMonth()+1;  // 获取月份(0-11,0代表1月,用的时候记得加上1)
 	 	                		if(yue<10){
 	 	                			yue='0'+yue;
 	 	                		}
 	 	                		var ri=myDate.getDate();  // 获取日(1-31)
 	 	                        if(ri<10){
 	 	                        	ri='0'+ri;
 	 	                        }
 	 	                       var shi= myDate.getHours();       // 获取当前小时数(0-23)
 	 	                       if(shi<10){
 	 	                    	  shi='0'+shi;
 	 	                       }
 	 	                       var fen= myDate.getMinutes();     // 获取当前分钟数(0-59)
 	 	                       if(fen<10){
 	 	                    	  fen='0'+fen;
 	  	                       }
 	 	                       var miao= myDate.getSeconds();     // 获取当前秒数(0-59)
 	 	                       if(miao<10){
 	 	                    	  miao='0'+miao;
 	  	                       }
 	 	                       that.formInline.jlsj1=nian+'-'+yue+'-'+ri+' '+shi+':'+fen+':'+miao;
 	 	                       
 	 	                      var myDate1=new Date(that.zxsj[1]);
 		                		var nian1=myDate1.getFullYear();  // 获取完整的年份(4位,1970)
 		                		var yue1=myDate1.getMonth()+1;  // 获取月份(0-11,0代表1月,用的时候记得加上1)
 		                		if(yue1<10){
 		                			yue1='0'+yue1;
 		                		}
 		                		var ri1=myDate1.getDate();  // 获取日(1-31)
 		                        if(ri1<10){
 		                        	ri1='0'+ri1;
 		                        }
 		                       var shi1= myDate1.getHours();       // 获取当前小时数(0-23)
 		                       if(shi1<10){
 		                    	  shi1='0'+shi1;
 		                       }
 		                       var fen1= myDate1.getMinutes();     // 获取当前分钟数(0-59)
 		                       if(fen1<10){
 		                    	  fen1='0'+fen1;
 		                       }
 		                       var miao1= myDate1.getSeconds();     // 获取当前秒数(0-59)
 		                       if(miao1<10){
 		                    	  miao1='0'+miao1;
 		                       }
 		                       that.formInline.jlsj2=nian1+'-'+yue1+'-'+ri1+' '+shi1+':'+fen1+':'+miao1;
 	 	                	}
 	                	}else{
 	 	                		that.formInline.jlsj1='';
 	 	                		that.formInline.jlsj2='';
 	 	                	}
 	                	$$.rzgl.init({data:{orderCol:that.name,orderType:that.sort,
 	                		model:that.formInline.model,username:that.formInline.username,
 	                		page:that.currentPage,pagesize:that.pagesize,
 	                		jlsj1:that.formInline.jlsj1,jlsj2:that.formInline.jlsj2,model_handle:that.formInline.model_handle,
 	                		message:that.formInline.message,ip:that.formInline.ip},success:function(data){
 	 	        		  if (data.code == 0) {
 	 	        			  that.loading = false;
 	 	        		/*	  for(var i=0;i<data.data.data.length;i++){
 	 	        				  if(data.data.data[i].error_body !=null){
 	 	        					//if(data.data.data[i].error_body.length>71){
 	 	        						var len=0;
 	 	        						var xjb=0;
 	 	        						var str=data.data.data[i].error_body;
 	 	   	 	        				for (var i1=0; i1<str.length; i1++) { 
	 	 	   	 	        			     var c = str.charCodeAt(i1); 
	 	 	   	 	        			    //单字节加1 
	 	 	   	 	        			     if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) { 
	 	 	   	 	        			    	 if(len<=71){
	 	 	   	 	        			    		 len++; 
	 	 	   	 	        			    		 xjb=i1;
	 	 	   	 	        			    	 }
	 	 	   	 	        			     } 
	 	 	   	 	        			     else { 
	 	 	   	 	        			    	 if(len<=71){
	 	 	   	 	        			    		 len+=2; 
	 	 	   	 	        			    		 xjb=i1;
	 	 	   	 	        			    	 }
	 	 	   	 	        			     } 
 	 	   	 	        			    } 
 	 	   	 	        				if(len>=70){
 	 	   	 	        					data.data.data[i].error_body1=data.data.data[i].error_body.substring(0,xjb)+'...'
 	 	   	 	        				}else{
 	 	   	 	        					data.data.data[i].error_body1=data.data.data[i].error_body;
 	 	   	 	        				}
// 	 	 	        					data.data.data[i].error_body1=data.data.data[i].error_body.substring(0,xjb)+'...'
// 	 	 	        				  }else{
// 	 	 	        					data.data.data[i].error_body1=data.data.data[i].error_body;
// 	 	 	        				  }
 	 	        				  }else{
 	 	        					data.data.data[i].error_body1=data.data.data[i].error_body;
 	 	        				  }
 	 	        			  }*/
 	 	        			  that.tableData = data.data.data;
	 	        			  that.total = data.data.total;
 	 	        			  }
 	 	        			  
 	 	        	  }})
 	                },
 	      	        
 	               handleEdit(row){
 	                	var that = this;
 		                this.isDialog = true;
 		                this.$nextTick(() => {
 	                		this.$refs.child.getForm(row);
 	                	})
 	                },
 	               switchBtn() {
 						this.isChange = !this.isChange;
 					},
 		        }
		}
		return data;
	}
})