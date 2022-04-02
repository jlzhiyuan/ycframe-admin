var Empty = moduleinit({
	url:'/components/empty/empty.html',
	el:'#empty',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Empty',
            data() {
                return {
                	
                }
            },
            props: {
	            content: {
	              type: String,
	              default: '暂无数据'
	            },
	            image: {
	              type: String,
	              default: 'ui/img/empty1.png'
	            },
	            height: {
	              type: String,
	              default: '80px'
	            }
            },
            watch: {
            },
            mounted() {
            },
            methods: {
            	
            }	
	    }
	    return data;
    }
})
