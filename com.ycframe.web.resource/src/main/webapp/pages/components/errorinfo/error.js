 document.write("<script language=javascript src='pages/components/empty/empty.js'><script>");
var Errorinfo = function(resolve, reject) {
  $.ajax({
    url:'pages/components/errorinfo/error.html',
    type:"GET",
    dataType:"html",
    success:function(result){
      var Obj = $("<code></code>").append($(result));//包装数据
      var $html = $("#error", Obj);
      var value = $html.html();
        resolve({
          template: value,
          name: 'Errorinfo',
          data() {
            return {
            	image: 'ui/img/empty.png',
                content: '404 页面找不到了'
            }
          },
          components: {
              empty: Empty
            },
          methods: {
          }
        })
    }
  });
};
