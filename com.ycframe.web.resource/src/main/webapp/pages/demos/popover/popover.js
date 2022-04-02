var popover = moduleinit({
	url:'/demos/popover/popover.html', 
	el:'#popover',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'popover',
            data() {
                return {
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  scrollDiv: '',
                  scrollHeight: '',
                  visible: false,
                  visible1: false,
                  gridData: [{
                      date: '2016-05-02',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                      date: '2016-05-04',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                      date: '2016-05-01',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                      date: '2016-05-03',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                    }],
                  data: {
                    "attributes": [
                      {
                        "parameter": "trigger",
                        "explain": "触发方式",
                        "type": "string",
                        "optional": "click/focus/hover/manual",
                        "default":"click"
                      },
                      {
                        "parameter": "title",
                        "explain": "标题",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "content",
                        "explain": "显示的内容，也可以通过 slot 传入 DOM",
                        "type": "string",
                        "optional": "—",
                        "default":"_"
                      },
                      {
                        "parameter": "width",
                        "explain": "宽度",
                        "type": "String, Number",
                        "optional": "—",
                        "default":"最小宽度 150px"
                      },
                      {
                        "parameter": "placement",
                        "explain": "出现的位置",
                        "type": "string",
                        "optional": "top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end",
                        "default":"bottom"
                      },
                      {
                        "parameter": "disabled",
                        "explain": "Popover 是否可用",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                          "parameter": "value / v-model",
                          "explain": "状态是否可见",
                          "type": "boolean",
                          "optional": "—",
                          "default":"false"
                        },
                        {
                            "parameter": "offset",
                            "explain": "出现位置的偏移量",
                            "type": "number",
                            "optional": "—",
                            "default":"0"
                          },
                          {
                          "parameter": "transition",
                          "explain": "定义渐变动画",
                          "type": "string",
                          "optional": "—",
                          "default":"fade-in-linear"
                        },
                        {
                        "parameter": "visible-arrow",
                        "explain": "是否显示 Tooltip 箭头，更多参数可见Vue-popper",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                      "parameter": "popper-options",
                      "explain": "popper.js 的参数",
                      "type": "object",
                      "optional": "参考 popper.js 文档",
                      "default":"{ boundariesElement: 'body', gpuAcceleration: false }"
                    },
                    {
                        "parameter": "popper-class",
                        "explain": "为 popper 添加类名",
                        "type": "string",
                        "optional": "—",
                        "default":"_"
                      },
                      {
                          "parameter": "open-delay",
                          "explain": "触发方式为 hover 时的显示延迟，单位为毫秒",
                          "type": "number",
                          "optional": "—",
                          "default":"_"
                        },
                      {
                        "parameter": "close-delay",
                        "explain": "触发方式为 hover 时的隐藏延迟，单位为毫秒",
                        "type": "number",
                        "optional": "—",
                        "default":"200"
                      },
                      {
                          "parameter": "tabindex",
                          "explain": "Popover 组件的 tabindex",
                          "type": "number",
                          "optional": "—",
                          "default":"0"
                        }
                    ],
                    "events": [
                      {
                        "name": "show",
                        "explain": "显示时触发",
                        "parameter": "_"
                      },
                      {
                          "name": "after-enter",
                          "explain": "显示动画播放完毕后触发",
                          "parameter": "_"
                      },
                      {
                          "name": "hide",
                          "explain": "隐藏时触发",
                          "parameter": "_"
                      },
                      {
                          "name": "after-leave",
                          "explain": "隐藏动画播放完毕后触发",
                          "parameter": "_"
                       }
                    
                    ],
                    slot: [
                       {
                    	   parameter: '_',
                    	   explain: 'Popover 内嵌 HTML 文本'
                       },
                       {
                    	   parameter: 'reference',
                    	   explain: '触发 Popover 显示的 HTML 元素'
                       }
                    ]
                  }
                }
              },
              computed: {},
              watch: {
              	'$route'(to,from){
              		if (to.path == this.$route.path) {
              			this.scrollDiv.scrollTop = this.scrollHeight;
              		} 
              	},
              },
              mounted(){
              	this.scrollDiv = this.$refs.popover;
                this.attributes = this.data.attributes;
                this.events = this.data.events;
                this.groupAttributes = this.data.groupAttributes;
                this.buttonAttributes = this.data.buttonAttributes;
                this.groupEvents = this.data.groupEvents;
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
                }
              }
	    }
	    return data;
    }
})
