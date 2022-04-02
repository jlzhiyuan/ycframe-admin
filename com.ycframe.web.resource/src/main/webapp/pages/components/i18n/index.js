var Language = function(resolve, reject) {
  $.ajax({
    url:'pages/components/i18n/index.html',
    type:"GET",
    dataType:"html",
    success:function(result){
      // console.log('result => ', result);
      var Obj = $("<code></code>").append($(result));//包装数据
      // //(需要获取的对应块（如class='aa')
      var $html = $("#language", Obj);
      // console.log($html.html());
      // //获取对应块中的内容
      var value = $html.html();
      // console.log('value => ', value);
      //获得内容可以用append插入对应的div中，也可以用html（value）直接添加
//      $.getJSON('./json_data.json', function(data){
        resolve({
          template: value,
          name: 'Language',
          data() {
            return {
              lang: ''
            }
          },
          watch: {
            lang() {
              if (this.lang === 'zh') {
                console.log('我是zh');
                this.$i18n.locale = 'zh-CN';
              } else if (this.lang === 'en') {
                this.$i18n.locale = 'en-US';
              } else {
                this.$i18n.locale = 'en-US';
              }
            }
          },
          methods: {
          }
        })
//      })
    }
  });
};
