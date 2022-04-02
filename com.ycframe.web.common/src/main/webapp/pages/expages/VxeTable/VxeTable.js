var VxeTable = moduleinit({
	url:'/expages/VxeTable/VxeTable.html', 
	el:'#VxeTable',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'VxeTable',
            data() {
              return {
              }
            },
            mounted() {
            },
            methods: {
            }	
	    }
	    return data;
    }
})