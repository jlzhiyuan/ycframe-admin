var TimeLine = moduleinit({
	url:'/demos/timeline/timeline.html', 
	el:'#timeline',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'TimeLine',
            data() {
                return {
              	  scrollDiv: '',
                    scrollHeight: '',
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  attributes: [],
                  slot: [],
                  TimelineAttributes: [],
                  reverse: true,
                  activities: [{
                    content: '活动按期开始',
                    timestamp: '2018-04-15'
                  }, {
                    content: '通过审核',
                    timestamp: '2018-04-13'
                  }, {
                    content: '创建成功',
                    timestamp: '2018-04-11'
                  }],
                  activities2: [{
                    content: '支持使用图标',
                    timestamp: '2018-04-12 20:46',
                    size: 'large',
                    type: 'primary',
                    icon: 'el-icon-more'
                  }, {
                    content: '支持自定义颜色',
                    timestamp: '2018-04-03 20:46',
                    color: '#0bbd87'
                  }, {
                    content: '支持自定义尺寸',
                    timestamp: '2018-04-03 20:46',
                    size: 'large'
                  }, {
                    content: '默认样式的节点',
                    timestamp: '2018-04-03 20:46'
                  }],
                  data: {
                    "attributes": [
                      {
                        "parameter": "reverse",
                        "explain": "指定节点排序方向，默认为正序",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      }
                    ],
                    "slot": [
                      {
                        "name": "—",
                        "explain": "Timeline-Item 的内容"
                      },
                      {
                        "name": "dot",
                        "explain": "自定义节点"
                      }
                    ],
                    "TimelineAttributes": [
                      {
                        "parameter": "timestamp",
                        "explain": "时间戳",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "hide-timestamp",
                        "explain": "是否隐藏时间戳",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "placement",
                        "explain": "时间戳位置",
                        "type": "string",
                        "optional": "top / bottom",
                        "default":"bottom"
                      },
                      {
                        "parameter": "type",
                        "explain": "节点类型",
                        "type": "string",
                        "optional": "primary / success / warning / danger / info",
                        "default":"—"
                      },
                      {
                        "parameter": "color",
                        "explain": "节点颜色",
                        "type": "string",
                        "optional": "hsl / hsv / hex / rgb",
                        "default":"—"
                      },
                      {
                        "parameter": "size",
                        "explain": "节点尺寸",
                        "type": "string",
                        "optional": "normal / large",
                        "default":"normal"
                      },
                      {
                        "parameter": "icon",
                        "explain": "节点图标",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
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
              	this.scrollDiv = this.$refs.timeline;
                  this.scrollDiv.addEventListener("scroll", this.scroll);
                this.attributes = this.data.attributes;
                this.slot = this.data.slot;
                this.TimelineAttributes = this.data.TimelineAttributes;
                // var that = this;
                // $.ajax({
                //   type:'get',
                //   url:'http://timeline',
                //   data: {},
                //   dataType:'json',
                //   success:function(data){
                //     that.attributes = data.attributes;
                //     that.slot = data.slot;
                //     that.TimelineAttributes = data.TimelineAttributes;
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
                }
            }	
	    }
	    return data;
    }
})