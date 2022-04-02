document.write("<script language=javascript src='pages/system/codeEditor/editorLog.js'></script>");
document.write("<script language=javascript src='pages/system/codeEditor/editorDebug.js'></script>");
var editor = moduleinit({
	url: '/system/codeEditor/editor.html', // 页面html地址
	el: '#editor', // 页面template标签 id名
	dorender: function(content) {
		var data = {
			template: content.template,
			name: 'editor', // 可与组件名称一致
			components: {
				editorlog:editorLog,
				editordebug:editorDebug
			},
			data() { // 定义页面上所有用到的数据变量
				return {
					form: {
						id:'',
						model_name: '',
						model_code: '',
						model_describe: '',
						versionid:'',
						cjr:'',
						cjrxm:'',
						cjsj:'',
						versiondescribe:'',
						sfqy:'',
						version:'',
						code:'',
					},
					dialog:false,
					nodeeditor:null,
					editor:null,
					editorLog:false,
					editorDebug:false,
					data1: [],
		            defaultProps: {
		            	  value: 'id',
		                  label: 'version',
		                  children: 'children',
		                  isLeaf:true
		             },
		             currentLivingId:'',
		             expandedkeys: [],
		             rules: {
		            	 	model_name: [{
								required: true,
								message: '请填写模块名',
								trigger: 'blur'
							}],
							model_code: [{
								required: true,
								message: '请填写模块编码',
								trigger: 'blur'
							}],
							
						},
					xs:false,
					version:'',
				}
			},
			watch: {

			},
			mounted() {
				var that=this;
				that.createEditor();
			},
			methods: {
				 createEditor() {
			          this.nodeeditor = ace.edit("editor", {
			        	  theme: "ace/theme/monokai",//样式主题
			              mode: "ace/mode/java",//代码不全
			            wrap: true,//提醒
			            autoScrollEditorIntoView: true,//滚动条
			            enableBasicAutocompletion: true,
			            enableSnippets: true,
			            enableLiveAutocompletion: true
			          });
			        
			        },
			    	switchEditor() {
						var that = this;
						that.dialog = true;
						this.$nextTick(function() {
							this.editor = ace.edit("editor1", {
								  theme: "ace/theme/monokai",//样式主题
					              mode: "ace/mode/java",//代码不全
								wrap: true,
								autoScrollEditorIntoView: true,
								enableBasicAutocompletion: true,
								enableSnippets: true,
								enableLiveAutocompletion: true
							});
							this.editor.setValue( this.nodeeditor.getValue());
						});
						
					},
					close(){
						var that=this;
						this.nodeeditor.setValue( this.editor.getValue());
					},
					querylog(){
						this.editorLog=true
						this.$nextTick(() => {
							this.$refs.child.add(this.form);
						});
					},
					codeDebug(){
						this.editorDebug=true
						this.$nextTick(() => {
							this.$refs.childDebug.add(this.form);
						});
					},
					add(){
						var that=this;
		            	var dd = new Date().getTime();
						var uuid1 = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
							var r = (dd + Math.random() * 16) % 16 | 0;
							dd = Math.floor(dd / 16);
							return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
						});
						
						var d = new Date().getTime();
						var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
							var r = (d + Math.random() * 16) % 16 | 0;
							d = Math.floor(d / 16);
							return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
						});
						that.form.id=uuid1;
						that.form.versionid=uuid;
						var data= $$.code.getUser();
		        		if (data.code == 0) {
		        			that.form.cjr = data.data.userid;
		        			that.form.cjrxm = data.data.username;
		        			that.form.cjsj = data.data.cjsj;
		        	    }
		        		that.form.sfqy=true;
		        		$$.code.saveVersion({data:{form:JSON.stringify(that.form)},success:function(data){
	  	        		  if (data.code == 0) {
	  	        			$$.code.getVersion({data:{zjlid:that.form.id},success:function(data){
	  		        		  if (data.code == 0) {
	  		        			  that.data1 = data.data.data;
	  		        				 that.$nextTick().then(() =>{
  		        				  var firstNode=document.querySelector('.el-tree-node')
  		        				  firstNode.click();
  		        			  })
	  		        		  }
	  		        	  }});
	  	        		  }else{
	  	        			  that.$message({
	    		  		   	     showClose: true,
	    			             message: data.message,
	    			             type: 'error'
	    			         });
	  	        		  }
	  	        	  	}});
					},
					edit(row){
						var that=this;
						that.xs=true;
						that.form.id=row.id;
						that.form.model_name=row.model_name;
						that.form.model_code=row.model_code;
						that.form.model_describe=row.model_describe;
						$$.code.getVersion({data:{zjlid:that.form.id},success:function(data){
	  		        		  if (data.code == 0) {
	  		        			  that.data1 = data.data.data;
	  		        			  if(data.data.data.length>0){
//	  		        				 that.$nextTick().then(() =>{
//		  		        				  var firstNode=document.querySelector('.el-tree-node')
//		  		        				  firstNode.click();
//		  		        			  })
	  		        				  var mrid=0;
	  		        				for(var i=0;i<data.data.data.length;i++){
	  		        					if(data.data.data[i].sfqy=='true'){
	  		        						mrid=i;
	  		        					}
	  		        				}
	  		        				that.currentNodekey = data.data.data[mrid].id;
	  		        				that.$nextTick(() => {
	  		        					that.$refs.tree.setCurrentKey(that.currentNodekey)
	  		        			    })
	  			          		  that.form.versionid= data.data.data[mrid].id;
	  		        			  that.version =  data.data.data[mrid].version;
	  			          		  $$.code.getVersionXx({data:{versionid: data.data.data[mrid].id},success:function(data){
	  				        		  if (data.code == 0) {
	  				        			  that.form.cjr = data.data.data[0].cjr;
	  				        			  that.form.cjrxm = data.data.data[0].cjrxm;
	  				        			  that.form.version = data.data.data[0].version;
	  				        			  var myDate=new Date(data.data.data[0].cjsj);
	  				        			  var nian=myDate.getFullYear();  // 获取完整的年份(4位,1970)
	  				                      var yue=myDate.getMonth()+1;  // 获取月份(0-11,0代表1月,用的时候记得加上1)
	  				                      if(yue<10){
	  				                      	yue='0'+yue;
	  				                      }
	  				                      var ri=myDate.getDate();  // 获取日(1-31)
	  				                      if(ri<10){
	  				                      	ri='0'+ri;
	  				                      }
	  				                      that.form.cjsj=nian+'-'+yue+'-'+ri;
	  				        			  that.form.versiondescribe = data.data.data[0].versiondescribe;
	  				        			  
	  				        			  if(data.data.data[0].sfqy=='true'){
	  				        				  that.form.sfqy = true;
	  				        			  }else{
	  				        				  that.form.sfqy = false;
	  				        			  }
	  				        			  that.nodeeditor.setValue(data.data.data[0].code);
	  				        			  that.form.code=data.data.data[0].code;
	  				        		  }
	  			          		  }});	
	  		        			  }
	  		        		  }
						 }});	  
					},
					
					save(formName){
	            		var that = this;
//	            		this.$confirm('是否保存？', '提示', {
//	      	    	        confirmButtonText: '确定',
//	      	    	        cancelButtonText: '取消',
//	      	    	        type: 'warning'
//	      	    	    }).then(() => {
	      	    	    	
	      	    	    	that.$refs[formName].validate((valid) => {
								if (valid) {
									$$.code.save({data:{form:JSON.stringify(that.form),code:JSON.stringify(that.nodeeditor.getValue())},success:function(data){
				    	        		  if (data.code == 0) {
				    	        			  that.$message({
				 		     		  		   	    showClose: true,
				 		     			            message: '保存成功！',
				 		     			            type: 'success'
				 		     			        });
				    	        		  }else{
				    	        			  that.$message({
						        		  		   	    showClose: true,
						        			            message: data.message,
						        			            type: 'error'
						        			        });
				    	        		  }
				    	        	  	}});
									
								} else {
									this.$message({
										message: '数据填写不完整！',
										type: 'warning'
									});
								}
							});
	      	    	    	
	      	    	    	
	      	    	    	
	      	    	    	
	      	    	    	
	      	    	    	
	      	    	    	
	      	    	    	
	      	    	    	
	      	    	    	
	      	    	    	
	      	    	    	
//	    				$$.code.save({data:{form:JSON.stringify(that.form),code:JSON.stringify(that.nodeeditor.getValue())},success:function(data){
//	    	        		  if (data.code == 0) {
//	    	        			  that.$message({
//	 		     		  		   	    showClose: true,
//	 		     			            message: '保存成功！',
//	 		     			            type: 'success'
//	 		     			        });
//	    	        		  }else{
//	    	        			  that.$message({
//			        		  		   	    showClose: true,
//			        			            message: data.message,
//			        			            type: 'error'
//			        			        });
//	    	        		  }
//	    	        	  	}});
//	      	    	  }).catch(() => {
//		    	             
//	  	    	    });
	            	},
					saveBtn(){
	            		var that = this;
	            		this.$confirm('是否保存？', '提示', {
	      	    	        confirmButtonText: '确定',
	      	    	        cancelButtonText: '取消',
	      	    	        type: 'warning'
	      	    	    }).then(() => {
	    				$$.code.updateVersion({data:{form:JSON.stringify(that.form),code:that.nodeeditor.getValue()},success:function(data){
	    	        		  if (data.code == 0) {
	    	        			  that.$message({
	 		     		  		   	    showClose: true,
	 		     			            message: '保存成功！',
	 		     			            type: 'success'
	 		     			        });
	    	        			  that.form.code=that.nodeeditor.getValue();
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
	            	del(){
	            		var that = this;
	            		this.$confirm('是否删除？', '提示', {
	      	    	        confirmButtonText: '确定',
	      	    	        cancelButtonText: '取消',
	      	    	        type: 'warning'
	      	    	    }).then(() => {
	    				$$.code.del({data:{form:JSON.stringify(that.form)},success:function(data){
	    	        		  if (data.code == 0) {
	    	        			  $$.code.getVersion({data:{zjlid:that.form.id},success:function(data){
	    	  		        		  if (data.code == 0) {
	    	  		        			  that.data1 = data.data.data;
	    	  		        		  }
	    						 }});	  
	    	        			  that.$message({
	 		     		  		   	    showClose: true,
	 		     			            message: '删除成功！',
	 		     			            type: 'success'
	 		     			        });
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
	            addVersion(){
	            	var that=this;
	            	var d = new Date().getTime();
					var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
						var r = (d + Math.random() * 16) % 16 | 0;
						d = Math.floor(d / 16);
						return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
					});
					that.form.versionid=uuid;
					var data= $$.code.getUser();
	        		if (data.code == 0) {
	        			that.form.cjr = data.data.userid;
	        			that.form.cjrxm = data.data.username;
	        			that.form.cjsj = data.data.cjsj;
	        	    }
	        		var sfqy=0;
	        		for(var i=0;i<that.data1.length;i++){
	        			if(that.data1[i].sfqy==true ||that.data1[i].sfqy=='true'){
	        				sfqy++
	        			}
	        		}
	        		if(sfqy==1){
	        			that.form.sfqy='false';
	        		}else if(sfqy>1){
	        			 that.$message({
	     		  		   	    showClose: true,
	     			            message: '版本只能启用一个！',
	     			            type: 'success'
	     			        });
	        			 return;
	        		}else{
	        			that.form.sfqy=true;
	        		}
	        		$$.code.saveVersion({data:{form:JSON.stringify(that.form)},success:function(data){
  	        		  if (data.code == 0) {
  	        			$$.code.getVersion({data:{zjlid:that.form.id},success:function(data){
	  		        		  if (data.code == 0) {
	  		        			  
	  		        			  that.data1 = data.data.data;
	  		        			  that.version =  data.data.data[0].version;
	  		        			  if(data.data.data.length>0){
	  		        				 that.$nextTick().then(() =>{
		  		        				  var firstNode=document.querySelector('.el-tree-node')
		  		        				  firstNode.click();
		  		        			  })
	  		        			  }
	  		        		  }
						 }});	  
  	        			  that.$message({
		     		  		   	    showClose: true,
		     			            message: '版本新增成功！',
		     			            type: 'success'
		     			        });
  	        		  }else{
  	        			  that.$message({
    		  		   	     showClose: true,
    			             message: data.message,
    			             type: 'error'
    			         });
  	        		  }
  	        	  	}});
	            },
	            handleNodeClick: function(data,resolve,e,a){
	          		  var that=this;
	          		  that.form.versionid=data.id;
	          		  that.version = data.version;
	          		  $$.code.getVersionXx({data:{versionid:that.form.versionid},success:function(data){
		        		  if (data.code == 0) {
		        			  that.form.cjr = data.data.data[0].cjr;
		        			  that.form.cjrxm = data.data.data[0].cjrxm;
		        			  that.form.version = data.data.data[0].version;
		        			  var myDate=new Date(data.data.data[0].cjsj);
		        			  var nian=myDate.getFullYear();  // 获取完整的年份(4位,1970)
		                      var yue=myDate.getMonth()+1;  // 获取月份(0-11,0代表1月,用的时候记得加上1)
		                      if(yue<10){
		                      	yue='0'+yue;
		                      }
		                      var ri=myDate.getDate();  // 获取日(1-31)
		                      if(ri<10){
		                      	ri='0'+ri;
		                      }
		                      that.form.cjsj=nian+'-'+yue+'-'+ri;
		        			  that.form.versiondescribe = data.data.data[0].versiondescribe;
		        			  
		        			  if(data.data.data[0].sfqy=='true'){
		        				  that.form.sfqy = true;
		        			  }else{
		        				  that.form.sfqy = false;
		        			  }
		        			  that.nodeeditor.setValue(data.data.data[0].code);
		        			  that.form.code=data.data.data[0].code;
		        		  }
	          		  }});	
		              },
			}	
		}
		return data;
	}
})
