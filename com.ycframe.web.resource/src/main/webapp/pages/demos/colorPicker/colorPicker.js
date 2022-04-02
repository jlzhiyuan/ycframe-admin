var colorPicker = moduleinit({
	url:'/demos/colorPicker/colorPicker.html', 
	el:'#colorPicker',
	dorender:function(content){
	    var data = {
			template: content.template,
	        name: 'colorPicker',
	        data() {
                return {
                	isShow: true,
                    isShow1: true,
                    isShow2: true,
                    isShow3: true,
                    color1: '#409EFF',
                    color2: null,
                    color: 'rgba(19, 206, 102, 0.8)',
                    color3: 'rgba(255, 69, 0, 0.68)',
                    color4: '#409EFF',
                    predefineColors: [
                      '#ff4500',
                      '#ff8c00',
                      '#ffd700',
                      '#90ee90',
                      '#00ced1',
                      '#1e90ff',
                      '#c71585',
                      'rgba(255, 69, 0, 0.68)',
                      'rgb(255, 120, 0)',
                      'hsv(51, 100, 98)',
                      'hsva(120, 40, 94, 0.5)',
                      'hsl(181, 100%, 37%)',
                      'hsla(209, 100%, 56%, 0.73)',
                      '#c7158577'
                    ],
                    attributes: [],
                    methods: [],
                    events: [],
                    scrollDiv: '',
                    scrollHeight: '',
                    data: {
                      "attributes": [
                        {
                          "parameter": "value / v-model",
                          "explain": "绑定值",
                          "type": "string",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "disabled",
                          "explain": "是否禁用",
                          "type": "boolean",
                          "optional": "—",
                          "default":"false"
                        },
                        {
                          "parameter": "size",
                          "explain": "尺寸",
                          "type": "string",
                          "optional": "—",
                          "default":  "medium / small / mini"
                        },
                        {
                          "parameter": "show-alpha",
                          "explain": "是否支持透明度选择",
                          "type": "boolean",
                          "optional": "—",
                          "default":"false"
                        },
                        {
                          "parameter": "color-format",
                          "explain": "写入 v-model 的颜色的格式",
                          "type": "string",
                          "optional": "hsl / hsv / hex / rgb",
                          "default":"hex（show-alpha 为 false）/ rgb（show-alpha 为 true）"
                        },
                        {
                          "parameter": "popper-class",
                          "explain": "ColorPicker 下拉框的类名",
                          "type": "string",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "predefine",
                          "explain": "预定义颜色",
                          "type": "array",
                          "optional": "—",
                          "default":"—"
                        }
                      ],
                      "events": [
                        {
                          "name": "change",
                          "explain": "当绑定值变化时触发",
                          "parameter": "当前值"
                        },
                        {
                            "name": "active-change",
                            "explain": "面板中当前显示的颜色发生改变时触发",
                            "parameter": "当前显示的颜色值"
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
              mounted(){
          	  this.scrollDiv = this.$refs.colorPicker;
                this.scrollDiv.addEventListener("scroll", this.scroll);
                this.attributes = this.data.attributes;
                this.events = this.data.events;
                this.slot = this.data.slot;
                this.scopedSlot = this.data.scopedSlot;
                this.methods = this.data.methods;
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