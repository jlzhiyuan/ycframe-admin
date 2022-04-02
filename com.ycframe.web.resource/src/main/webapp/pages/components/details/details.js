
var Details = function(resolve, reject) {
  $.ajax({
    url:'pages/components/details/details.html',
    type:"GET",
    dataType:"html",
    success:function(result){
      var Obj = $("<code></code>").append($(result));//包装数据
      var $html = $("#details", Obj);
      var value = $html.html();
      resolve({
        template: value,
        name: 'Details',
        data() {
         return {
         }
        },
        computed: {
          text() {
            return this.$route.query.id
          },
          name() {
        	  return this.$route.query.name
          }
        },
        mounted(){
          // this.text = this.$route.params.id;
          // console.log('======================================');
          // console.log('--text',this.text);
          console.log('=======this.$store.state.openTab',this.$store.state.openTab);
          console.log('-------',this.$store.state.activeIndex);
          console.log('%%%%%%%%%%%%%%%%%%%55',this.text);
        },
        methods: {
        
        }
      })
    }
  });
};
