var checkbox = moduleinit({
	url:'/demos/checkbox/checkbox.html',
	el:'#checkbox',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'checkbox',
            data() {
                return {
                	isShow: true,
                    isShow1: true,
                    isShow2: true,
                    isShow3: true,
                    isShow4: true,
                    isShow5: true,
                    isShow6: true,
                    checked: true,
                    checked1: false,
                    checked2: true,
                    checked3: true,
                    checked4: false,
                    checked5: false,
                    checked6: true,
                    checkboxGroup5: [],
                    checkboxGroup6: [],
                    checkAll: false,
                    checkedCities: ['上海', '北京'],
                    cities: ['上海', '北京', '广州', '深圳'],
                    isIndeterminate: true,
                    cityOptions: ['上海', '北京', '广州', '深圳'],
                    checkList: ['选中且禁用','复选框 A'],
                    checkedCities1: ['上海', '北京'],
                    checkboxGroup1: ['上海'],
                    checkboxGroup2: ['上海'],
                    checkboxGroup3: ['上海'],
                    checkboxGroup4: ['上海'],
                    attributes: [],
                    groupAttributes: [],
                    events: [],
                    groupEvents: [],
                    scrollDiv: '',
                    scrollHeight: '',
                    buttonAttributes: [],
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
                          "explain": "选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）",
                          "type": "string / number / boolean",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "true-label",
                          "explain": "选中时的值",
                          "type": "string",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "false-label	",
                          "explain": "没有选中时的值",
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
                          "parameter": "border",
                          "explain": "是否显示边框",
                          "type": "boolean",
                          "optional": "—",
                          "default":"false"
                        },
                        {
                          "parameter": "size",
                          "explain": "Checkbox 的尺寸，仅在 border 为真时有效",
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
                        },
                        {
                          "parameter": "checked",
                          "explain": "当前是否勾选",
                          "type": "boolean",
                          "optional": "—",
                          "default":"false"
                        },
                        {
                          "parameter": "indeterminate",
                          "explain": "设置 indeterminate 状态，只负责样式控制",
                          "type": "boolean",
                          "optional": "—",
                          "default":"false"
                        }
                      ],
                      "events": [
                        {
                          "name": "change",
                          "explain": "当绑定值变化时触发的事件",
                          "parameter": "更新后的值"
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
                          "explain": "多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效",
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
                          "parameter": "min",
                          "explain": "可被勾选的 checkbox 的最小数量",
                          "type": "number",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "max",
                          "explain": "可被勾选的 checkbox 的最da数量",
                          "type": "number",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "text-color",
                          "explain": "按钮形式的 Checkbox 激活时的文本颜色",
                          "type": "string",
                          "optional": "—",
                          "default":"#ffffff"
                        },
                        {
                          "parameter": "fill",
                          "explain": "按钮形式的 Checkbox 激活时的填充色和边框色",
                          "type": "string",
                          "optional": "—",
                          "default":"#409EFF"
                        }
                      ],
                      "groupEvents": [
                        {
                          "name": "change",
                          "explain": "当绑定值变化时触发的事件",
                          "parameter": "更新后的值"
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
                          "parameter": "true-label",
                          "explain": "选中时的值",
                          "type": "string",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "false-label	",
                          "explain": "没有选中时的值",
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
                          "parameter": "name",
                          "explain": "原生 name 属性",
                          "type": "string",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "checked",
                          "explain": "当前是否勾选",
                          "type": "boolean",
                          "optional": "—",
                          "default":"false"
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
            mounted() {
            	this.scrollDiv = this.$refs.checkbox;
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
              },
              clickShow5: function() {
                this.isShow5 = !this.isShow5;
              },
              clickShow6: function() {
                  this.isShow6 = !this.isShow6;
              },
              handleCheckAllChange(val) {
                this.checkedCities = val ? this.cityOptions : [];
                this.isIndeterminate = false;
              },
              handleCheckedCitiesChange(value) {
                var checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
              }
            }	
	    }
	    return data;
    }
})