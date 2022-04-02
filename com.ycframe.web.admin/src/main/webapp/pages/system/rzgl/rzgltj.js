var rzgltj = moduleinit({
	url:'/system/rzgl/rzgltj.html', 
	el:'#rzgltj',
    dorender:function(content){
	    var data = {
	    	template: content.template,
	        name: 'rzgltj',
	        data() {
	        	return {
	        		type: '',
	        		pivot: null,
	        		loading: false,
	        		res: '',
	        		form:{
	        			model:'',
		        		username:'',
		        		model_handle:'',
    		    		message:'',
    		    		ip:'',
    		    		jlsj1:'',
    		    		jlsj2:''
                    },
                    form1:{
                    	xlmc:''
                    },
                    form2:{
                    	xlmc:''
                    },
                    
                 	lbscyc1:false,
                 	isDialog:false,
                 	isDialog1:false,
                 	cxmsData:[],
                 	zxsj:[],
	        	}
	        },
	        computed: {
	        	
	        },
	        watch: {
	        	
	        },
	        mounted() {
	        	var that = this;
	    		var rtn = $$.rzgl.getmsCxms({data:{}});
		    	 var qyms = rtn.data.data;
		    	 var captions='';
		    	 var captions1='';
		    	 var ydl='';
		    	 if(qyms.length>0){
		    		  captions=qyms[0].captions;
			    	  captions1=qyms[0].mrxszd;
			    	  ydl=qyms[0].cjxsdd;
		    	 }
	        		var rtn = $$.rzgl.getDemoData({data:{model:that.form.model,
	        			username:that.form.username,
	        			jlsj1:that.form.jlsj1,jlsj2:that.form.jlsj2,model_handle:that.form.model_handle,
	                	message:that.form.message,ip:that.form.ip,
	        			captions:captions,captions1:captions1,ydl:ydl}});
		    		var yourJSONData = rtn.data.data;
		    		this.type = rtn.data.config.type;
		    		var that = this;
		    		this.pivot = new WebDataRocks({
			            container: "#wdr-component",
			            beforetoolbarcreated: that.customizeToolbar,
			            toolbar: true,
			            width: "100%",
			            height: "100%",
			            report: {
			                "dataSource": {
			    				data: yourJSONData,
			                },
			                "slice": {
			                    "reportFilters": rtn.data.config.reportFilters,
			                    "rows": rtn.data.config.rows,
			                    "columns": rtn.data.config.columns,
			                    "measures": rtn.data.config.measures,
			                    "formats": rtn.data.config.formats,
			                    "expands": rtn.data.config.expands
			                }
			            },
			            global: {localization:'./././ui/js/webdatarocks/en.json'},
		    		}

		    		);
		    		if (this.pivot != null) {
		    			this.loading = false;
		    		}
		    		this.setOption('type', this.type);
		    		webdatarocks.expandAllData();

	        },
	        methods:{
	        	customizeToolbar(toolbar) {
	        		 var tabs = toolbar.getTabs(); 
	   		      	 toolbar.getTabs = function() {
	   		          delete tabs[0];
	   		          delete tabs[1];
	   		          delete tabs[2];
	   		          delete tabs[3];
	   		          return tabs;
	   		      }
	        	},
	        	setOption(option, value) {
	  		      this.pivot.setOptions({
	  		          grid: {
	  		              [option]: value
	  		          }
	  		      });
	  		      this.pivot.refresh();
	  		  },
	  		query1(){
	  			  var ss=this.pivot.getReportFilters();
	  			  var ss1=this.pivot.getRows();
	  			  var ydl=this.pivot.getColumns();
	  			  var captions='';
	  			  if(ss.length==0){
	  				captions='查询后上方无字段'
	  			  }else{
	  				 for(var i=0;i<ss.length;i++){
		  				  if(captions==''){
		  					captions=ss[i].caption;
		  				  }else{
		  					captions=captions+','+ss[i].caption;
		  				  }
		  			  }
	  			  }
	  			  var captions1='';
	  			  for(var i=0;i<ss1.length;i++){
	  				  if(captions1==''){
	  					captions1=ss1[i].caption;
	  				  }else{
	  					captions1=captions1+','+ss1[i].caption;
	  				  }
	  			  }
	  			  	var that=this;
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
	 	                       that.form.jlsj1=nian+'-'+yue+'-'+ri+' '+shi+':'+fen+':'+miao;
	 	                       
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
		                       that.form.jlsj2=nian1+'-'+yue1+'-'+ri1+' '+shi1+':'+fen1+':'+miao1;
	 	                	}
	                	}else{
	 	                		that.form.jlsj1='';
	 	                		that.form.jlsj2='';
	 	                	}
	  			  var rtn = $$.rzgl.getDemoData({data:{model:that.form.model,
	        			username:that.form.username,
	        			jlsj1:that.form.jlsj1,jlsj2:that.form.jlsj2,model_handle:that.form.model_handle,
	                	message:that.form.message,ip:that.form.ip,
	        			captions:captions,captions1:captions1,ydl:JSON.stringify(ydl)}});
	  			  	var yourJSONData = rtn.data.data;
		    		this.type = rtn.data.config.type;
		    		var that = this;
		    		this.pivot = new WebDataRocks({
			            container: "#wdr-component",
			            beforetoolbarcreated: that.customizeToolbar,
			            toolbar: true,
			            width: "100%",
			            height: "100%",
			            report: {
			                "dataSource": {
			    				data: yourJSONData,
			                },
			                "slice": {
			                    "reportFilters": rtn.data.config.reportFilters,
			                    "rows": rtn.data.config.rows,
			                    "columns": rtn.data.config.columns,
			                    "measures": rtn.data.config.measures,
			                    "formats": rtn.data.config.formats,
			                    "expands": rtn.data.config.expands,
			                    "showDefaultSlice":true,
			                    "configuratorActive":true
			                }
			            },
			            global: {localization:'./././ui/js/webdatarocks/en.json'},
		    		}

		    		);
		    		if (this.pivot != null) {
		    			this.loading = false;
		    		}
		    		this.setOption('type', this.type);
		    		webdatarocks.expandAllData();
	  		  },
              save(){
            	  this.isDialog=true;
              },
              onSave(){
            	  var ss=this.pivot.getReportFilters();
	  			  var ss1=this.pivot.getRows();
	  			  var ydl=this.pivot.getColumns();
	  			  var captions='';
	  			  if(ss.length==0){
	  				captions='查询后上方无字段'
	  			  }else{
	  				 for(var i=0;i<ss.length;i++){
		  				  if(captions==''){
		  					captions=ss[i].caption;
		  				  }else{
		  					captions=captions+','+ss[i].caption;
		  				  }
		  			  }
	  			  }
	  			  var captions1='';
	  			  for(var i=0;i<ss1.length;i++){
	  				  if(captions1==''){
	  					captions1=ss1[i].caption;
	  				  }else{
	  					captions1=captions1+','+ss1[i].caption;
	  				  }
	  			  }
	  			  	var that=this;
	  			  $$.rzgl.savedtttj({
	  				  data: {
	  					  captions:captions,
	  					  captions1:captions1,
	  					  ydl:JSON.stringify(ydl),
	  					  xlmc:that.form1.xlmc
						},
						success: function(data) {
							if (data.code == 0) {
								that.$message({
									showClose: true,
									message: '保存成功',
									type: 'success'
								});
								that.isDialog=false;
							} else {
								that.$message({
									showClose: true,
									message: data.message,
									type: 'error'
								});
							}
						}
					});
              },
              queryms(){
            	  this.isDialog1=true;
            	  var rtn = $$.rzgl.getCxms({data:{xlmc:this.form2.xlmc,xxms:'1'}});
		    	  this.cxmsData = rtn.data.data;
              },
              querymss(){
            	  var rtn = $$.rzgl.getCxms({data:{xlmc:this.form2.xlmc}});
		    	  this.cxmsData = rtn.data.data;
              },
              wzxzxz(row){
            	  var row=row;
            	  var that=this;
  	  			  $$.rzgl.updatetttj({
  	  				  data: {
  	  					  id:row.id
  						},
  						success: function(data) {
  							if (data.code == 0) {
//  								that.$message({
//  									showClose: true,
//  									message: '修改成功',
//  									type: 'success'
//  								});
  								that.quersss();
  								that.isDialog1=false;
  							} else {
  								that.$message({
  									showClose: true,
  									message: data.message,
  									type: 'error'
  								});
  							}
  						}
  					});
              },
              deletecxms(row){
            	  var row=row;
            		var that=this;
  	  			  $$.rzgl.deltetttj({
  	  				  data: {
  	  					  id:row.id,
  						},
  						success: function(data) {
  							if (data.code == 0) {
  								that.$message({
  									showClose: true,
  									message: '删除成功',
  									type: 'success'
  								});
  								that.querymss();
  							} else {
  								that.$message({
  									showClose: true,
  									message: data.message,
  									type: 'error'
  								});
  							}
  						}
  					});
              },
              quersss(){
            	  var that=this;
            	  var rtn = $$.rzgl.getmsCxms({data:{}});
 		    	 var qyms = rtn.data.data;
 		    	 var captions='';
 		    	 var captions1='';
 		    	 var ydl='';
 		    	 if(qyms.length>0){
 		    		  captions=qyms[0].captions;
 			    	  captions1=qyms[0].mrxszd;
 			    	  ydl=qyms[0].cjxsdd;
 		    	 }
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
	                       that.form.jlsj1=nian+'-'+yue+'-'+ri+' '+shi+':'+fen+':'+miao;
	                       
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
	                       that.form.jlsj2=nian1+'-'+yue1+'-'+ri1+' '+shi1+':'+fen1+':'+miao1;
	                	}
             	}else{
	                		that.form.jlsj1='';
	                		that.form.jlsj2='';
	                	}
 		    	var rtn = $$.rzgl.getDemoData({data:{model:that.form.model,
        			username:that.form.username,
        			jlsj1:that.form.jlsj1,jlsj2:that.form.jlsj2,model_handle:that.form.model_handle,
                	message:that.form.message,ip:that.form.ip,
        			captions:captions,captions1:captions1,ydl:ydl}}); 		    		
 		    	    var yourJSONData = rtn.data.data;
 		    		this.type = rtn.data.config.type;
 		    		var that = this;
 		    		this.pivot = new WebDataRocks({
 			            container: "#wdr-component",
 			            beforetoolbarcreated: that.customizeToolbar,
 			            toolbar: true,
 			            width: "100%",
 			            height: "100%",
 			            report: {
 			                "dataSource": {
 			    				data: yourJSONData,
 			                },
 			                "slice": {
 			                    "reportFilters": rtn.data.config.reportFilters,
 			                    "rows": rtn.data.config.rows,
 			                    "columns": rtn.data.config.columns,
 			                    "measures": rtn.data.config.measures,
 			                    "formats": rtn.data.config.formats,
 			                    "expands": rtn.data.config.expands
 			                }
 			            },
 			            global: {localization:'./././ui/js/webdatarocks/en.json'},
 		    		}

 		    		);
 		    		if (this.pivot != null) {
 		    			this.loading = false;
 		    		}
 		    		this.setOption('type', this.type);
 		    		webdatarocks.expandAllData();
              },
	        }
	    }
	    return data;
    }
})