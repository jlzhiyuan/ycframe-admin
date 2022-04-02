var Message = moduleinit({
	url:'/demos/message/message.html', 
	el:'#message',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Message',
            data() {
                return {
              	  scrollDiv: '',
                    scrollHeight: '',
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  options: [],
                  methods: [],
                  data: {
                    "options": [
                      {
                        "parameter": "message",
                        "explain": "消息文字",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "type",
                        "explain": "主题",
                        "type": "string",
                        "optional": "success/warning/info/error",
                        "default":"info"
                      },
                      {
                        "parameter": "iconClass",
                        "explain": "自定义图标的类名，会覆盖 type",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "dangerouslyUseHTMLString",
                        "explain": "是否将 message 属性作为 HTML 片段处理",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "customClass",
                        "explain": "自定义类名",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "duration",
                        "explain": "显示时间, 毫秒。设为 0 则不会自动关闭",
                        "type": "number",
                        "optional": "—",
                        "default":"3000"
                      },
                      {
                        "parameter": "showClose",
                        "explain": "是否显示关闭按钮",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "center",
                        "explain": "文字是否居中",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "onClose",
                        "explain": "关闭时的回调函数, 参数为被关闭的 message 实例",
                        "type": "function",
                        "optional": "—",
                        "default":"—"
                      }
                    ],
                    "methods": [
                      {
                        "name": "close",
                        "explain": "关闭当前的 Message"
                      }
                    ]
                  }
                }
              },
              computed: {
              },
              watch: {
              	'$route'(to,from){
              		if (to.path == this.$route.path) {
              			this.scrollDiv.scrollTop = this.scrollHeight;
              		} 
              	},
              },
              mounted(){
              	this.scrollDiv = this.$refs.message;
                  this.scrollDiv.addEventListener("scroll", this.scroll);
                this.options = this.data.options;
                this.methods = this.data.methods;
                // var that = this;
                // $.ajax({
                //   type:'get',
                //   url:'http://message',
                //   data: {},
                //   dataType:'json',
                //   success:function(data){
                //     that.options = data.options;
                //     that.methods = data.methods;
                //   }
                // })
              },
              methods: {
              	scroll() {
              		this.scrollHeight = this.scrollDiv.scrollTop;
                  },
                clickShow: function() {
                  this.isShow = !this.isShow;
                },
                clickShow1: function() {
                  this.isShow1 = !this.isShow1;
                },
                clickShow2: function() {
                  this.isShow2 = !this.isShow2;
                },
                open() {
                  this.$message('这是一条消息提示');
                },
                openVn() {
                  const h = this.$createElement;
                  this.$message({
                    message: h('p', null, [
                      h('span', null, '内容可以是 '),
                      h('i', { style: 'color: teal' }, 'VNode')
                    ])
                  });
                },
                open1() {
                  this.$message('这是一条消息提示');
                },
                open2() {
                  this.$message({
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                  });
                },
                open3() {
                  this.$message({
                    message: '警告哦，这是一条警告消息',
                    type: 'warning'
                  });
                },
                open4() {
                  this.$message.error('错了哦，这是一条错误消息');
                },
                open5() {
                  this.$message({
                    showClose: true,
                    message: '这是一条消息提示'
                  });
                },
                open6() {
                  this.$message({
                    showClose: true,
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                  });
                },
                open7() {
                  this.$message({
                    showClose: true,
                    message: '警告哦，这是一条警告消息',
                    type: 'warning'
                  });
                },
                open8() {
                  this.$message({
                    showClose: true,
                    message: '错了哦，这是一条错误消息',
                    type: 'error'
                  });
                }
              }
	    }
	    return data;
    }
})