var vm = new Vue({
  el: '#manage',
  router,
  data:function(){
	return {
		cachedViews: []
    }
  },
  mounted: function(){ 
		var url = window.location.href;
		console.log('url=>',url);
		var number = url.indexOf('page.html');
		var str = url.substring(number + 10,url.length);
		console.log('str=>',str);
		this.$router.push(str);
  },
  methods: {
		
  }
})
