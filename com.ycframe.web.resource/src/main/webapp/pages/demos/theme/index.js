var Theme = moduleinit({
	url:'/demos/theme/index.html', 
	el:'#theme',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Theme',
            data() {
                return {
                	input: '',
                	colorForm: {
                		primaryColor: '',
                    	successColor: '',
                    	warningColor: '',
                    	dangerColor: '',
                    	infoColor: '',
                    	headerColor: '',
                    	menuColor: '',
                    	primaryTextColor: '',
                    	regularTextColor: '',
                    	secondaryTextColor: '',
                    	placeholderTextColor: '',
                    	baseColor: '',
                    	lightColor: '',
                    	lighterColor: '',
                    	extraLightColor: '',
                    	baseWhite: '',
                    	baseBlack: '',
                    	baseBackground: '',
                    	programName: '',
                    	isShowMainMenu: true
                	},
                	 imageUrl: '',
                	 url: './webdo/fileuploadTheme/',
                }
              },
              computed: {
                  height() {
                    return this.$store.state.watchHeight
                  },
                  maxHeight() {
                      return this.height - 80 - 50 - 55+'px';
                    },
                  boxHeight() {
                    return this.height - 80 - 50 - 110+'px';
                  }
                },
              watch: {
                
              },
              mounted() {
            	  var that = this;
            	  ThemeRunserver.init(function(data){
            		  if (data.status == 1) {
            			  that.colorForm = data.data;
            			  that.imageUrl = data.data.programIcon;
            		  } else {
            			  
            		  }
            	  })
            	  
              },
              methods: {
            	  clickPicker(pickerName) {
            		  this.$refs[pickerName].handleTrigger();
            	  },
            	  onChange(file, fileList) {
            		  console.log('file, fileList=>',file, fileList);
            		  this.imageUrl = URL.createObjectURL(file.raw);
            	  },
            	  handleAvatarSuccess(response, file, fileList) {
            		  console.log('=====',response, file, fileList)
        	        this.imageUrl = URL.createObjectURL(file.raw);
        	      },
        	      beforeAvatarUpload(file) {
        	    	  console.log('file=>',file);
        	        var isJPG = file.type === 'image/png';
        	        var isJPG1 = file.type === 'image/jpeg';
        	        var isJPG2 = file.type === 'image/gif';
//        	        var isLt2M = file.size / 1024 / 1024 < 2;

        	        if (!isJPG && !isJPG1 && !isJPG2) {
        	          this.$message.error('上传头像图片只能是 JPG/png/gif 格式!');
        	        }
//        	        if (!isLt2M) {
//        	          this.$message.error('上传头像图片大小不能超过 2MB!');
//        	        }
//        	        return isJPGisJPG1||isJPG2;
        	      },
        	      save() {
        	    	  var that = this;
        	    	 ThemeRunserver.update(JSON.stringify(that.colorForm),function(data){
        	    		 that.$refs.upload.submit();
        	    		 if (data.status == 1) { 
        	    			 that.$message({
         		  		   	    showClose: true,
         			            message: '保存成功！',
         			            type: 'success'
         			        });
        	    		 } else {
        	    			 that.$message({
          		  		   	    showClose: true,
          			            message: data.message,
          			            type: 'error'
          			        });
        	    		 }
        	    	 })
        	      }
              }
	    }
	    return data;
    }
})
