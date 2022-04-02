var Radio = moduleinit({
	url:'/demos/radio/radio.html', 
	el:'#radio',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Radio',
            data() {
                return {
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow3: true,
                  isShow4: true,
                  radio: '1',
                  radio3: '上海',
                  radio1: '选中且禁用',
                  radio2: 3,
                  radio4: '上海',
                  radio5: '上海',
                  radio6: '上海',
                  radio7: '上海',
                  radio8: '1',
                  radio9: '1',
                  radio10: '1',
                  radio11: '1',
                  attributes: [],
                  groupAttributes: [],
                  events: [],
                  groupEvents: [],
                  buttonAttributes: [],
                  scrollDiv: '',
                  scrollHeight: '',
                  data: {
                    "attributes": [
                      {
                        "parameter": "value / v-model",
                        "explain": "绑定值",
                        "type": "string / number / boolean",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "label",
                        "explain": "Radio 的 value",
                        "type": "string / number / boolean",
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
                        "parameter": "border",
                        "explain": "是否显示边框",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "size",
                        "explain": "Radio 的尺寸，仅在 border 为真时有效",
                        "type": "string",
                        "optional": "medium / small / mini",
                        "default":"—"
                      },
                      {
                        "parameter": "name",
                        "explain": "原生 name 属性",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      }
                    ],
                    "events": [
                      {
                        "name": "change",
                        "explain": "绑定值变化时触发的事件",
                        "parameter": "选中的 Radio label 值"
                      }
                    ],
                    "groupAttributes": [
                      {
                        "parameter": "value / v-model",
                        "explain": "绑定值",
                        "type": "string / number / boolean",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "size",
                        "explain": "单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效",
                        "type": "string",
                        "optional": "medium / small / mini",
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
                        "parameter": "text-color",
                        "explain": "按钮形式的 Radio 激活时的文本颜色",
                        "type": "string",
                        "optional": "—",
                        "default":"#ffffff"
                      },
                      {
                        "parameter": "fill",
                        "explain": "按钮形式的 Radio 激活时的填充色和边框色",
                        "type": "string",
                        "optional": "—",
                        "default":"#409EFF"
                      }
                    ],
                    "groupEvents": [
                      {
                        "name": "change",
                        "explain": "绑定值变化时触发的事件",
                        "parameter": "选中的 Radio label 值"
                      }
                    ],
                    "buttonAttributes": [
                      {
                        "parameter": "label",
                        "explain": "Radio 的 value",
                        "type": "string / number",
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
                        "parameter": "name",
                        "explain": "原生 name 属性",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
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
              	this.scrollDiv = this.$refs.radio;
                  this.scrollDiv.addEventListener("scroll", this.scroll);
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
                },
                clickShow3: function() {
                    this.isShow3 = !this.isShow3;
                },
                clickShow4: function() {
                   this.isShow4 = !this.isShow4;
                }
              }
	    }
	    return data;
    }
})