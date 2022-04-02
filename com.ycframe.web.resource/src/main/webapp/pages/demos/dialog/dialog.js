document.write("<script language=javascript src='pages/demos/icon/icon.js'></script>");
var Dialog = moduleinit({
	url:'/demos/dialog/dialog.html',
	el:'#dialog',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Dialog',
            components: {icon:Icon},
            data() {
                return {
                	dragDialogVisible: false,
              	  scrollDiv: '',
                    scrollHeight: '',
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow3: true,
                  dialogFormVisible: false,
                  dialogVisible: false,
                  form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                    daima: ''
                  },
                  formLabelWidth: '120px',
                  attributes: [],
                  events: [],
                  slot: [],
                  isChange: false,
                  outerVisible: false,
                  innerVisible: false,
                  data: {
                    "attributes": [
                      {
                        "parameter": "visible",
                        "explain": "是否显示 Dialog，支持 .sync 修饰符",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "title",
                        "explain": "Dialog 的标题，也可通过具名 slot （见下表）传入",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "width",
                        "explain": "Dialog 的宽度",
                        "type": "string",
                        "optional": "—",
                        "default":"50%"
                      },
                      {
                        "parameter": "fullscreen",
                        "explain": "是否为全屏 Dialog",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "top",
                        "explain": "Dialog CSS 中的 margin-top 值",
                        "type": "string",
                        "optional": "—",
                        "default":"15vh"
                      },
                      {
                        "parameter": "modal",
                        "explain": "是否需要遮罩层",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "modal-append-to-body",
                        "explain": "遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "append-to-body",
                        "explain": "Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "lock-scroll",
                        "explain": "是否在 Dialog 出现时将 body 滚动锁定",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "custom-class",
                        "explain": "Dialog 的自定义类名",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "close-on-click-modal",
                        "explain": "是否可以通过点击 modal 关闭 Dialog",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "close-on-press-escape",
                        "explain": "是否可以通过按下 ESC 关闭 Dialog",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "show-close",
                        "explain": "是否显示关闭按钮",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "before-close",
                        "explain": "关闭前的回调，会暂停 Dialog 的关闭",
                        "type": "function(done)，done 用于关闭 Dialog",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "center",
                        "explain": "是否对头部和底部采用居中布局",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      }
                    ],
                    "slot": [
                      {
                        "name": "—",
                        "explain": "Dialog 的内容"
                      },
                      {
                        "name": "title",
                        "explain": "Dialog 标题区的内容"
                      },
                      {
                        "name": "footer",
                        "explain": "Dialog 标题区的内容"
                      }
                    ],
                    "events": [
                      {
                        "name": "open",
                        "explain": "Dialog 打开的回调",
                        "parameter": "—"
                      },
                      {
                        "name": "opened",
                        "explain": "Dialog 打开动画结束时的回调",
                        "parameter": "—"
                      },
                      {
                        "name": "close",
                        "explain": "Dialog 关闭的回调",
                        "parameter": "—"
                      },
                      {
                        "name": "closed",
                        "explain": "Dialog 关闭动画结束时的回调",
                        "parameter": "—"
                      }
                    ]
                  }
                }
            },
            watch: {
            	'$route'(to,from){
            		if (to.path == this.$route.path) {
            			this.scrollDiv.scrollTop = this.scrollHeight;
            		} 
            	},
            },
            computed: {
            },
            mounted() {
            	this.scrollDiv = this.$refs.dialog;
                this.scrollDiv.addEventListener("scroll", this.scroll);
                this.attributes = this.data.attributes;
                this.events = this.data.events;
                this.slot = this.data.slot;
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
              clickShow3: function() {
                this.isShow3 = !this.isShow3;
              },
              handleClose(done) {
                this.$confirm('确认关闭？')
                  .then(_ => {
                    done();
                  })
                  .catch(_ => {});
              },
              open() {
                this.$message('这是一条消息提示');
              },
              switchBtn() {
                this.isChange = !this.isChange;
              }
            }	
	    }
	    return data;
    }
})