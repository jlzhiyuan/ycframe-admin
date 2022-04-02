var editorDebug = moduleinit({
	url:'/system/codeEditor/editorDebug.html', 
	el:'#editorDebug',
    dorender:function(content){
    	var data = {
    		template: content.template,
            name: 'editorDebug',
            components: {
            	
            },
            computed: {
            },
            data() {
            	var checkCode = (rule, value, callback) => {
      		        if (!value) {
      		        	return callback(new Error('必填'));
      		        }
      		        var that = this;
      		        var data = JdjcRunserver.check(value,that.form.ID);
      		        if (data.status == 0) {
      		        	callback(new Error(data.message));
      		        }else {
      		        	callback();
      		        }
      		    };
            	return {
            		loading:false,
            		form: {
						model_name: '',
						model_code: '',
						model_describe: '',
						version:'',
						input:'',
						output:'',
						versionid:'',
						code:'',
					},
                    
            	}
            },
            directives: {
                
            },
            watch:{
            },
            mounted() {
            
            },
            methods: {
            	add(row){
            		var that=this;
            		that.form.model_name=row.model_name;
            		that.form.model_code=row.model_code;
            		that.form.model_describe=row.model_describe;
            		that.form.version=row.version;
            		that.form.model_name=row.model_name;
            		that.form.versionid=row.versionid;
            		that.form.code=row.code;
            	},
            	perform(){
            		var that=this;
            		$$.code.perform({data:{form:JSON.stringify(that.form)},success:function(data){
		        		  if (data.code == 0) {
		        			  that.form.output =JSON.stringify(data.data.data);
		        		  }
					 }});	 
            	}
            }
    	}
    	return data;
    }
})