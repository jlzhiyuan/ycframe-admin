var lNotification = moduleinit({
	url:'/demos/notification/notification.html', 
	el:'#notification',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'lNotification',
            data() {
                return {
              	  scrollDiv: '',
                    scrollHeight: '',
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  attributes: [],
                  events: [],
                  data: {
                    "options": [
                      {
                        "parameter": "title",
                        "explain": "标题",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "message",
                        "explain": "说明文字",
                        "type": "string/Vue.VNode",
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
                        "parameter": "type",
                        "explain": "主题样式，如果不在可选值内将被忽略",
                        "type": "string",
                        "optional": "success/warning/info/error",
                        "default":"—"
                      },
                      {
                        "parameter": "iconClass",
                        "explain": "自定义图标的类名。若设置了 type，则 iconClass 会被覆盖",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
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
                        "default":"4500"
                      },
                      {
                        "parameter": "position",
                        "explain": "自定义弹出位置",
                        "type": "string",
                        "optional": "top-right/top-left/bottom-right/bottom-left",
                        "default":"top-right"
                      },
                      {
                        "parameter": "showClose",
                        "explain": "是否显示关闭按钮",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "onClose",
                        "explain": "关闭时的回调函数",
                        "type": "function",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "onClick",
                        "explain": "点击 Notification 时的回调函数",
                        "type": "function",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "offset",
                        "explain": "偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量",
                        "type": "number",
                        "optional": "—",
                        "default":"0"
                      }
                    ],
                    "events": [
                      {
                        "name": 'close',
                        "explain": '关闭当前的 Notification'
                      }
                    ]
                  }
                }
              },
              mounted(){
              	this.scrollDiv = this.$refs.notification;
                  this.scrollDiv.addEventListener("scroll", this.scroll);
                this.attributes = this.data.options;
                this.events = this.data.events;
                // var that = this;
                // $.ajax({
                //   type:'get',
                //   url:'http://natification',
                //   data: {},
                //   dataType:'json',
                //   success:function(data){
                //     that.attributes = data.options;
                //     that.events = data.events;
                //   }
                // })
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
                open3() {
                  this.$notify({
                    title: '成功',
                    message: '这是一条成功的提示消息',
                    type: 'success'
                  });
                },
                open() {
                  const h = this.$createElement;
          
                  this.$notify({
                    title: '标题名称',
                    message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
                  });
                },
                open2() {
                  this.$notify({
                    title: '提示',
                    message: '这是一条不会自动关闭的消息',
                    duration: 0
                  });
                },
                open3() {
                  this.$notify({
                    title: '成功',
                    message: '这是一条成功的提示消息',
                    type: 'success'
                  });
                },
                open4() {
                  this.$notify({
                    title: '警告',
                    message: '这是一条警告的提示消息',
                    type: 'warning'
                  });
                },
                open5() {
                  this.$notify.info({
                    title: '消息',
                    message: '这是一条消息的提示消息'
                  });
                },
                open6() {
                  this.$notify.error({
                    title: '错误',
                    message: '这是一条错误的提示消息'
                  });
                },
                open7() {
                  this.$notify({
                    title: '自定义位置',
                    message: '右上角弹出的消息'
                  });
                },
                open8() {
                  this.$notify({
                    title: '自定义位置',
                    message: '右下角弹出的消息',
                    position: 'bottom-right'
                  });
                },
                open9() {
                  this.$notify({
                    title: '自定义位置',
                    message: '左下角弹出的消息',
                    position: 'bottom-left'
                  });
                },
                open10() {
                  this.$notify({
                    title: '自定义位置',
                    message: '左上角弹出的消息',
                    position: 'top-left'
                  });
                }
              }
	    }
	    return data;
    }
})