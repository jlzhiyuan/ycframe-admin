var dictItemDetail = moduleinit({
	url:'/system/dict/itemDetail.html', 
	el:'#dictItemDetail',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'dictItemDetail',
            components: {
            },
            computed: {
            },
            data() {
              return {
            	  dictItemDetailForm:{
            		  id:'',
            		  name:'',
            		  code:'',
            		  sort:'',
            		  state:'',
            		  defaultVal:'',
            		  style:'',
            		  memo:'',
            		  dictName:'',
	          		  dictCode:'',
          		  	  dictId:''
            	  },
            	  rules: {
            		  name: [
	                      { required: true, message: '请填写字典名称', trigger: 'blur' }
                      ],
                      code: [
   	                      { required: true, message: '请填写字典编码', trigger: 'blur' }
                      ],
                      sort: [
   	                      { required: true, message: '请填写排序', trigger: 'blur' }
                      ],
                      state: [
  	                      { required: true, message: '请选择状态', trigger: 'change' }
                      ],
            	  	  defaultVal: [
  	                      { required: true, message: '请选择默认', trigger: 'change' }
                      ],
                      style: [
  	                      { required: true, message: '请选择样式', trigger: 'change' }
                      ]
	                    
                   },
                   dictItemLoading:false
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
                        	 that.dictItemLoading = true;
                        	 $$.dict.saveDictItem({
                        		 data:that.dictItemDetailForm,
                        		 success:function(data){
	                               	 if (data.code == 0) {
	                               		that.dictItemLoading = false;
	                               		that.$emit('save');
	         	                	 } else {
	         	                		that.dictItemLoading = false;
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
            	collectDictItemDetail(selectedDict,detail){
            		this.dictItemDetailForm.id = detail.id;
            		this.dictItemDetailForm.name = detail.name;
            		this.dictItemDetailForm.code = detail.code;
            		this.dictItemDetailForm.sort = detail.sort;
            		this.dictItemDetailForm.state = detail.state;
            		this.dictItemDetailForm.defaultVal = detail.defaultVal;
            		this.dictItemDetailForm.style = detail.style;
            		this.dictItemDetailForm.memo = detail.memo;
            		this.dictItemDetailForm.dictName = selectedDict.name;
            		this.dictItemDetailForm.dictCode = selectedDict.code;
            		this.dictItemDetailForm.dictId = selectedDict.id;
            	},
            	collectDictNameAndCode(dict){
            		this.dictItemDetailForm.dictName = dict.name;
            		this.dictItemDetailForm.dictCode = dict.code;
            		this.dictItemDetailForm.dictId = dict.id;
            	}
            }
	    }
	    return data;
    }
})