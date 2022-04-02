var Website = function(resolve, reject) {
  $.ajax({
    url:'pages/components/website/index.html',
    type:"GET",
    dataType:"html",
    success:function(result){
      var Obj = $("<code></code>").append($(result));//包装数据
      var $html = $("#website", Obj);
      var value = $html.html();
        resolve({
          template: value,
          name: 'Website',
          data() {
            return {
            }
          },
          watch:{
        	  },
          computed: {
            
          },
          created() {
          },
          mounted() {
          },
          methods: {
          }
        })
    }
  });
};
