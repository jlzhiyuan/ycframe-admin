var Theme = function(resolve, reject) {
  $.ajax({
    url:'pages/system/theme/index.html',
    type:"GET",
    dataType:"html",
    success:function(result){
      var Obj = $("<code></code>").append($(result));//包装数据
      var $html = $("#theme", Obj);
      var value = $html.html();
        resolve({
          template: value,
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
        	  $$.theme.init({success:function(data){
        		  if (data.code == 0) {
        			  that.colorForm = data.data;
        			  that.imageUrl = data.data.programIcon;
        		  } else {
        			  
        		  }
        	  }});
        	  
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
//    	        var isLt2M = file.size / 1024 / 1024 < 2;

    	        if (!isJPG && !isJPG1 && !isJPG2) {
    	          this.$message.error('上传头像图片只能是 JPG/png/gif 格式!');
    	        }
//    	        if (!isLt2M) {
//    	          this.$message.error('上传头像图片大小不能超过 2MB!');
//    	        }
//    	        return isJPGisJPG1||isJPG2;
    	      },
    	      save() {
    	    	  var that = this;
    	    	 $$.theme.update({data:that.colorForm,success:function(data){
    	    		 that.$refs.upload.submit();
    	    		 if (data.code == 0) { 
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
    	    	 }})
    	      }
          }
        })
    }
  });
};
