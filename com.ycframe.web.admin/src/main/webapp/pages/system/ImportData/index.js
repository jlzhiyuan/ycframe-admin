var ImportData = moduleinit({
	url:'/system/ImportData/index.html', 
	el:'#index',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'ImportData',
            components: {
                TableContent: content.tableContainer
            },
            computed: {
            },
            data() {
              return {
            	 
              }
            },
            watch: {
            	
            },
            mounted() {
            	 
            },
            methods: {
            	downLoad() {
            		var data = ImportDataRunserver.downLoadImportExcel();
     					if (data.status == 1) {
     						var url='./webdo/fileuploadImportRole/downloadfile?filename='+data.data.filename+'&systemname='+data.data.systemname;
         	 				url=encodeURI(url);
         	   				url=encodeURI(url);
         		        	window.open(url);
     					} else {
     						that.$message({
                     			  showClose: true,
                 		          message: data.message,
                 		          type: 'error'
                 		     });
     					}
     		        		
               	},
                submitUpload() {
                    this.$refs.upload.submit();
                   	//this.downLoadError();
                  },
                  downLoadError() {
           		  var data =  ImportDataRunserver.downLoadErrorExcel();
    					if (data.status == 1) {
    					var url='./webdo/fileuploadImportRole/downloadfile?filename='+data.data.filename+'&systemname='+data.data.systemname;
     	 				url=encodeURI(url);
     	   				url=encodeURI(url);
     		        	window.open(url);
    					} else {
    						that.$message({
                 			  showClose: true,
             		          message: data.message,
             		          type: 'error'
             		     });
    					}
    		        		
              	},
            }
	    }
	    return data;
    }
})