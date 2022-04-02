var Home = moduleinit({
	url:'/system/home/Home.html',
	el:'#home',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'home',
            data() {
                return {
                }
              }, 
              watch:{
              },
              mounted() {
              },
              methods: {
              }
	    }
	    return data;
    }
})