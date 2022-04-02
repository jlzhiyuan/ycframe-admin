var Switchs = moduleinit({
	url:'/demos/switch/switch.html', 
	el:'#switchs',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Switchs',
            data() {
                return {
                	isShow: true,
                    isShow1: true,
                    isShow2: true,
                    isShow3: true,
                    value1: true,
                    value2: true,
                    value3: true,
                    value4: '100',
                    value5: true,
                    value6: false,
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
                          "type": "array",
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
                          "parameter": "width",
                          "explain": "switch 的宽度（像素）",
                          "type": "number",
                          "optional": "—",
                          "default":  "40"
                        },
                        {
                          "parameter": "active-icon-class",
                          "explain": "switch 打开时所显示图标的类名，设置此项会忽略 active-text",
                          "type": "string",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "inactive-icon-class",
                          "explain": "switch 关闭时所显示图标的类名，设置此项会忽略 inactive-text",
                          "type": "string",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "active-text",
                          "explain": "switch 打开时的文字描述",
                          "type": "string",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "inactive-text",
                          "explain": "switch 关闭时的文字描述",
                          "type": "string",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "active-value",
                          "explain": "switch 打开时的值",
                          "type": "boolean / string / number",
                          "optional": "—",
                          "default":"true"
                        },
                        {
                          "parameter": "inactive-value",
                          "explain": "switch 关闭时的值",
                          "type": "boolean / string / number",
                          "optional": "—",
                          "default":"false"
                        },
                        {
                          "parameter": "active-color",
                          "explain": "switch 打开时的背景色",
                          "type": "string",
                          "optional": "—",
                          "default":"#409EFF"
                        },
                        {
                          "parameter": "inactive-color",
                          "explain": "switch 关闭时的背景色",
                          "type": "string",
                          "optional": "—",
                          "default":"#C0CCDA"
                        },
                        {
                          "parameter": "name",
                          "explain": "switch 对应的 name 属性",
                          "type": "string",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "validate-event",
                          "explain": "改变 switch 状态时是否触发表单的校验",
                          "type": "boolean",
                          "optional": "—",
                          "default":"true"
                        }
                      ],
                      "methods": [
                        {
                          "name": "focus",
                          "explain": "使 Switch 获取焦点",
                          "parameter": "—"
                        }
                      ],
                      "events": [
                        {
                          "name": "change",
                          "explain": "switch 状态发生变化时的回调函数",
                          "parameter": "新状态的值"
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
          	  this.scrollDiv = this.$refs.switchs;
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