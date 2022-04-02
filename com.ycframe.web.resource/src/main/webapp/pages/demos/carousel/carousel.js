var Carousel = moduleinit({
	url:'/demos/carousel/carousel.html', 
	el:'#carousel',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Carousel',
            data() {
                return {
              	  scrollDiv: '',
                    scrollHeight: '',
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow3: true,
                  isShow4: true,
                  isShow5: true,
                  attributes: [],
                  methods: [],
                  events: [],
                  ItemAttributes: [],
                  active: 0,
                  data: {
                    "attributes": [
                      {
                        "parameter": "height",
                        "explain": "走马灯高度",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "initial-index",
                        "explain": "初始状态激活的幻灯片的索引，从 0 开始",
                        "type": "number",
                        "optional": "—",
                        "default":"0"
                      },
                      {
                        "parameter": "trigger",
                        "explain": "指示器的出发方式",
                        "type": "string",
                        "optional": "click",
                        "default":"—"
                      },
                      {
                        "parameter": "autoplay",
                        "explain": "是否自动切换",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "interval",
                        "explain": "自动切换的时间间隔，单位为毫秒",
                        "type": "number",
                        "optional": "—",
                        "default":"3000"
                      },
                      {
                        "parameter": "indicator-position",
                        "explain": "指示器的位置",
                        "type": "string",
                        "optional": "	vertical/horizontal",
                        "default":"horizontal"
                      },
                      {
                        "parameter": "arrow",
                        "explain": "切换箭头的显示时机",
                        "type": "string",
                        "optional": "	always/hover/never",
                        "default":"hover"
                      },
                      {
                        "parameter": "type",
                        "explain": "走马灯的类型",
                        "type": "string",
                        "optional": "card",
                        "default":"—"
                      },
                      {
                        "parameter": "loop",
                        "explain": "是否循环显示",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      }
                    ],
                    "ItemAttributes": [
                      {
                        "parameter": "name",
                        "explain": "幻灯片的名字，可用作 setActiveItem 的参数",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "label",
                        "explain": "该幻灯片所对应指示器的文本",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      }
                    ],
                    "events": [
                      {
                        "name": "change",
                        "explain": "幻灯片切换时触发",
                        "parameter": "目前激活的幻灯片的索引，原幻灯片的索引"
                      }
                    ],
                    "methods": [
                      {
                        "name": "setActiveItem",
                        "explain": "手动切换幻灯片",
                        "parameter": "需要切换的幻灯片的索引，从 0 开始；或相应 el-carousel-item 的 name 属性值"
                      },
                      {
                        "name": "prev",
                        "explain": "切换至上一张幻灯片",
                        "parameter": "—"
                      },
                      {
                        "name": "next",
                        "explain": "切换至下一张幻灯片",
                        "parameter": "—"
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
              	 this.scrollDiv = this.$refs.carousel;
                   this.scrollDiv.addEventListener("scroll", this.scroll);
                this.attributes = this.data.attributes;
                this.ItemAttributes = this.data.ItemAttributes;
                this.events = this.data.events;
                this.methods = this.data.methods;
                // var that = this;
                // $.ajax({
                //   type:'get',
                //   url:'http://carousel',
                //   data: {},
                //   async: true,
                //   dataType:'json',
                //   success:function(data){
                //     that.attributes = data.attributes;
                //     that.ItemAttributes = data.ItemAttributes;
                //     that.events = data.events;
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
                clickShow3: function() {
                    this.isShow3 = !this.isShow3;
                },
                clickShow4: function() {
                    this.isShow4 = !this.isShow4;
                },
                clickShow5: function() {
                  this.isShow5 = !this.isShow5;
                }
              }	
	    }
	    return data;
    }
})