var rate = moduleinit({
	url:'/demos/rate/rate.html',
	el:'#rate',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'rate',
            data() {
                return {
              	  scrollDiv: '',
                  scrollHeight: '',
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow3: true,
                  Attributes: [],
                  data: {
                    "Attributes": [
                      {
                        "parameter": "value / v-model",
                        "explain": "绑定值",
                        "type": "number",
                        "optional": "-",
                        "default":"0"
                      },
                      {
                        "parameter": "max",
                        "explain": "最大分值",
                        "type": "number",
                        "optional": "—",
                        "default":"5"
                      },
                      {
                        "parameter": "disabled",
                        "explain": "是否为只读",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "allow-half",
                        "explain": "是否允许半选",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "low-threshold",
                        "explain": "低分和中等分数的界限值，值本身被划分在低分中",
                        "type": "number",
                        "optional": "—",
                        "default":"2"
                      },
                      {
                          "parameter": "high-threshold",
                          "explain": "高分和中等分数的界限值，值本身被划分在高分中",
                          "type": "number",
                          "optional": "—",
                          "default":"4"
                      },
                      {
                          "parameter": "colors",
                          "explain": "icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色",
                          "type": "array/object",
                          "optional": "—",
                          "default":"['#F7BA2A', '#F7BA2A', '#F7BA2A']"
                      },
                      {
                          "parameter": "void-color",
                          "explain": "未选中icon颜色",
                          "type": "string",
                          "optional": "—",
                          "default":"#C6D1DE"
                      },
                      {
                          "parameter": "disabled-void-color",
                          "explain": "只读时未选中 icon 的颜色",
                          "type": "string",
                          "optional": "—",
                          "default":"#EFF2F7"
                      },
                      {
                          "parameter": "icon-classes",
                          "explain": "	icon 的类名。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名",
                          "type": "array/object",
                          "optional": "—",
                          "default":"['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']"
                      },
                      {
                          "parameter": "void-icon-class",
                          "explain": "未选中 icon 的类名",
                          "type": "string",
                          "optional": "—",
                          "default":"el-icon-star-off"
                      },
                      {
                          "parameter": "disabled-void-icon-class",
                          "explain": "只读时未选中 icon 的类名",
                          "type": "string",
                          "optional": "—",
                          "default":"el-icon-star-on"
                      },
                      {
                          "parameter": "show-text",
                          "explain": "是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容",
                          "type": "boolean",
                          "optional": "—",
                          "default":"false"
                      },
                      {
                          "parameter": "show-score",
                          "explain": "是否显示当前分数，show-score 和 show-text 不能同时为真",
                          "type": "boolean",
                          "optional": "—",
                          "default":"false"
                      },
                      {
                          "parameter": "text-color",
                          "explain": "辅助文字的颜色",
                          "type": "string",
                          "optional": "—",
                          "default":"#1F2D3D"
                      },
                      {
                          "parameter": "score-template",
                          "explain": "分数显示模板",
                          "type": "string",
                          "optional": "—",
                          "default":"{value}"
                      },
                      {
                          "parameter": "texts",
                          "explain": "辅助文字数组",
                          "type": "array",
                          "optional": "—",
                          "default":"['极差', '失望', '一般', '满意', '惊喜']"
                      }
                    ]
                  },
                  events: [
                     {
                    	 name: 'change',
                    	 explain: "分值改变时触发",
                    	 parameter: '改变后的分值'
                     }      
                  ],
                  value1: null,
                  value2: null,
                  value: null,
                  value4: 3.7,
                  value3: null,
                  iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'], // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
                  colors: ['#99A9BF', '#F7BA2A', '#FF9900'],  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
                }
              },
              watch: {
              	'$route'(to,from){
              		if (to.path == this.$route.path) {
              			this.scrollDiv.scrollTop = this.scrollHeight;
              		} 
              	},
              },
              mounted(){
              	this.scrollDiv = this.$refs.rate;
                  this.scrollDiv.addEventListener("scroll", this.scroll);
                this.Attributes = this.data.Attributes;
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
                }
            }
	    }
	    return data;
    }
})