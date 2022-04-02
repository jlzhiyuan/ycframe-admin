
var Sticky = function(resolve, reject) {
  $.ajax({
    url:'pages/components/sticky/sticky.html',
    type:"GET",
    dataType:"html",
    success:function(result){
      var Obj = $("<code></code>").append($(result));
      var $html = $("#sticky", Obj);
      var value = $html.html();
      resolve({
        template: value,
        name: 'Sticky',
        data() {
          return {
            active: false,
            position: '',
            width: undefined,
            height: undefined,
            isSticky: false,
            zIndex: '1',
            stickyTop: '109'
          }
        },
        mounted() {
          this.height = this.$refs.sticky.getBoundingClientRect().height
          var scrollDiv = this.$refs.Box;
          scrollDiv.addEventListener('scroll', this.handleScroll);
          scrollDiv.addEventListener('resize', this.handleReize);
          // Mock.mock(
          //   'http://stickydata', {'tableData|30-60':[{
          //     "guid" : '@guid',     //唯一ID
          //     'id|+1': 1,     //模拟id 序号
          //     "Loophole"      : "Alureon/Olmarik 网络通信检测",     //漏洞名称
          //     "date"     : "@date('yyyy-MM-dd')",  //模拟时间
          //     "content"  : "内容" //模拟文本
          //   }]
          // });
    
          //ajax请求
          // $.ajax({
          //   url : "http://stickydata",    //请求的url地址
          //   dataType : "json",   //返回格式为json
          //   async : false, //请求是否异步，默认为异步，这也是ajax重要特性
          //   data : {},    //参数值
          //   type : "GET",   //请求方式
          //   success: function(req) {
          //       console.log('我有获取到数据吗',req);
          //       console.log(req.routers1);
          //   },
          // });
        },
        activated() {
          this.handleScroll()
        },
        destroyed() {
          var scrollDiv = this.$refs.Box;
          scrollDiv.removeEventListener('scroll', this.handleScroll)
          scrollDiv.removeEventListener('resize', this.handleReize)
        },
        methods: {
          sticky() {
            if (this.active) {
              return
            }
            this.position = 'fixed'
            this.active = true
            this.width = this.width + 'px'
            this.isSticky = true
          },
          reset() {
            if (!this.active) {
              return
            }
            this.position = ''
            this.width = 'auto'
            this.active = false
            this.isSticky = false
          },
          handleScroll() {
            this.width = this.$refs.sticky.getBoundingClientRect().width
            const offsetTop = this.$refs.sticky.getBoundingClientRect().top
            console.log('offsetTop', offsetTop);
            if (offsetTop < this.stickyTop) {
              this.sticky()
              return
            }
            this.reset()
          },
          handleReize() {
            if (this.isSticky) {
              this.width = this.$refs.sticky.getBoundingClientRect().width + 'px'
            }
          }
        }
      })
    }
  });
};
