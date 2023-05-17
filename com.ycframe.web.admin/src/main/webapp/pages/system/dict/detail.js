var dictDetail = moduleinit({
	url:'/system/dict/detail.html', 
	el:'#dictDetail',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'dictDetail',
            components: {
            },
            computed: {
            },
            data() {
              return {
            	  dictDetailForm:{
            		  id:'',
            		  name:'',
            		  code:'',
            		  state:'',
            		  memo:''
            	  },
            	  rules: {
            		  name: [
	                      { required: true, message: '请填写字典名称', trigger: 'blur' }
                      ],
                      code: [
   	                      { required: true, message: '请填写字典编码', trigger: 'blur' }
                      ],
                      state: [
                          { required: true, message: '请选择状态', trigger: 'change' }
                      ]
	                    
                   },
                   dictLoading:false
              }
            },
            watch: {
            	
            },
            mounted() {
            	
            },
            methods: {
            	close(){
            		this.$emit('close');
            	},
            	save(){
            		 var that = this;
            		 this.$refs['ruleForm'].validate((valid) => {
                         if (valid) {
                        	 that.dictLoading = true;
                        	 $$.dict.saveDict({
                        		 data:that.dictDetailForm,
                        		 success:function(data){
	                               	 if (data.code == 0) {
	                               		that.dictLoading = false;
	                               		that.$emit('save');
	         	                	 } else {
	         	                		that.dictLoading = false;
             	                		that.$message({
                              			  showClose: true,
                          		          message: data.message,
                          		          type: 'error'
                          		        });
             	                	 }
                                 }
                    		 }); 
                         }else{
                         	return false;
                         }
                     });
            	},
            	collectDictDetail(detail){
            		this.dictDetailForm.id = detail.id;
            		this.dictDetailForm.name = detail.name;
            		this.dictDetailForm.code = detail.code;
            		this.dictDetailForm.state = detail.state;
            		this.dictDetailForm.memo = detail.memo;
            	}
            }
	    }
	    return data;
    }
})