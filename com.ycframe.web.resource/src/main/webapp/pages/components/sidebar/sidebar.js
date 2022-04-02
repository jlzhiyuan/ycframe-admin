var sidebar = function(resolve, reject) {
  $.ajax({
    url:'pages/components/sidebar/sidebar.html',
    type:"GET",
    dataType:"html",
    success:function(result){
      var Obj = $("<code></code>").append($(result));//包装数据
      var $html = $("#sidebar", Obj);
      var value = $html.html();
      resolve({
        template: value,
        name: 'sidebar',
        props: ["menu"],
        computed: {
          
        },
       
        data() {
          return {
          };
        },
        mounted() {
        },
        methods: {
          
        }
      })
    }
  });
};