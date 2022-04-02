var rzglmx = moduleinit({
	url:'//system/rzgl/rzglmx.html', 
	el:'#rzglmx',
    dorender:function(content){
    	var data = {
    		template: content.template,
            name: 'rzglmx',
            components: {
            	
            },
            computed: {
            	urls(){
            		 return  `./fileupload/fileupload/index?tptag=alkscfj&jlid=${this.a.b}`
		        },
            },
            data() {
            	return {
            		form:{
            			model:'',
            			username:'',
            			jlsj1:'',
            			model_handle:'',
            			message:'',
            			ip:'',
            			error_body:''
                    },
                    
            	}
            },
            directives: {
                
            },
            watch:{
            	
            },
            mounted() {
            	var that = this;
            	
            },
            methods: {
            	getForm(row){
//            		row.jlsj.replace("-","年")
//            		row.jlsj.replace("-","月")
//            		row.jlsj.replace("-","日")
//            		var nian=row.jlsj.substring(0,4);
//            		var yue=row.jlsj.substring(5,7);
//            		var ri=row.jlsj.substring(8,10);
//            		var jlsj=nian+'-'+yue+'-'+ri;
            		var jlsj=row.jlsj;
            		this.form=row;
            		this.form.jlsj1=jlsj;
            	}
            }
    	}
    	return data;
    }
})