var InputNumber = moduleinit({
	url:'/demos/inputNumber/inputNumber.html', 
	el:'#inputNumber',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'InputNumber',
            data() {
                return {
                	iconLists: '',
                    scrollDiv: '',
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow3: true,
                  isShow4: true,
                  isShow5: true,
                  isShow6: true,
                  num1: 1,
                  num2: 1,
                  num3: 5,
                  num4: 1,
                  num5: 1,
                  num6: 1,
                  num7: 1,
                  num9: 1,
                  num10: 2,
                  num11: 1,
                  attributes: [],
                  events: [],
                  data: {
                    "attributes": [
                      {
                        "parameter": "value / v-model",
                        "explain": "绑定值",
                        "type": "number",
                        "optional": "—",
                        "default":"0"
                      },
                      {
                        "parameter": "min",
                        "explain": "设置计数器允许的最小值",
                        "type": "number",
                        "optional": "—",
                        "default":"-Infinity"
                      },
                      {
                        "parameter": "max",
                        "explain": "设置计数器允许的最大值",
                        "type": "number",
                        "optional": "—",
                        "default":"Infinity"
                      },
                      {
                        "parameter": "step",
                        "explain": "计数器步长",
                        "type": "number",
                        "optional": "—",
                        "default":"1"
                      },
                      {
                        "parameter": "precision",
                        "explain": "数值精度",
                        "type": "number",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "size",
                        "explain": "计数器尺寸",
                        "type": "string",
                        "optional": "large, small",
                        "default":"—"
                      },
                      {
                        "parameter": "disabled",
                        "explain": "是否禁用计数器",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "controls",
                        "explain": "是否使用控制按钮",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "controls-position",
                        "explain": "控制按钮位置",
                        "type": "string",
                        "optional": "right",
                        "default":"—"
                      }
                    ],
                    "events": [
                      {
                        "name": 'change',
                        "explain": '绑定值被改变时触发',
                        "parameter": '最后变更的值'
                      },
                      {
                        "name": 'blur',
                        "explain": '在组件 Input 失去焦点时触发',
                        "parameter": '(event: Event)'
                      },
                      {
                        "name": 'focus',
                        "explain": '在组件 Input 获得焦点时触发',
                        "parameter": '(event: Event)'
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
            	  this.scrollDiv = this.$refs.inputNumber;
                  this.scrollDiv.addEventListener("scroll", this.scroll);
                  this.attributes = this.data.attributes;
                  this.events = this.data.events;
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
                clickShow4: function() {
                  this.isShow4 = !this.isShow4;
                },
                clickShow3: function() {
                  this.isShow3 = !this.isShow3;
                },
                clickShow5: function() {
                  this.isShow5 = !this.isShow5;
                },
                clickShow6: function() {
                    this.isShow6 = !this.isShow6;
                  },
                handleChange(value) {
                }
              }
	    }
	    return data;
    }
})