var TimePicker = moduleinit({
	url:'/demos/timePicker/timePicker.html', 
	el:'#timePicker',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'TimePicker',
            data() {
                return {
              	  scrollDiv: '',
                    scrollHeight: '',
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow3: true,
                  value1: '',
                  value2: new Date(2016, 9, 10, 18, 40),
                  value3: new Date(2016, 9, 10, 18, 40),
                  startTime: '',
                  endTime: '',
                  value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
                  value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
                  attributes: [],
                  events: [],
                  SelectOptions: [],
                  PickerOptions: [],
                  methods: [],
                  data: {
                    "attributes": [
                      {
                        "parameter": "value / v-model",
                        "explain": "绑定值",
                        "type": "date(TimePicker) / string(TimeSelect)",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "readonly",
                        "explain": "完全只读",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "disabled",
                        "explain": "禁用",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "editable",
                        "explain": "文本框可输入",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "clearable",
                        "explain": "是否显示清除按钮",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "size",
                        "explain": "输入框尺寸",
                        "type": "string",
                        "optional": "medium / small / mini",
                        "default":"—"
                      },
                      {
                        "parameter": "placeholder",
                        "explain": "非范围选择时的占位内容",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "start-placeholder",
                        "explain": "范围选择时开始日期的占位内容",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "end-placeholder",
                        "explain": "范围选择时开始日期的占位内容",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "is-range",
                        "explain": "是否为时间范围选择，仅对<el-time-picker>有效",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "arrow-control",
                        "explain": "是否使用箭头进行时间选择，仅对<el-time-picker>有效",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "align",
                        "explain": "对齐方式",
                        "type": "string",
                        "optional": "left / center / right",
                        "default":"left"
                      },
                      {
                        "parameter": "popper-class",
                        "explain": "TimePicker 下拉框的类名",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "picker-options",
                        "explain": "当前时间日期选择器特有的选项参考下表",
                        "type": "object",
                        "optional": "—",
                        "default":"{}"
                      },
                      {
                        "parameter": "range-separator",
                        "explain": "选择范围时的分隔符",
                        "type": "string",
                        "optional": "—",
                        "default":"'-'"
                      },
                      {
                        "parameter": "value-format",
                        "explain": "可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象",
                        "type": "string",
                        "optional": "见日期格式",
                        "default":"—"
                      },
                      {
                        "parameter": "default-value",
                        "explain": "可选，选择器打开时默认显示的时间",
                        "type": "Date(TimePicker) / string(TimeSelect)",
                        "optional": "可被new Date()解析(TimePicker) / 可选值(TimeSelect)",
                        "default":"—"
                      },
                      {
                        "parameter": "name",
                        "explain": "原生属性",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "prefix-icon",
                        "explain": "自定义头部图标的类名",
                        "type": "string",
                        "optional": "—",
                        "default":"el-icon-time"
                      },
                      {
                        "parameter": "clear-icon",
                        "explain": "自定义清空图标的类名",
                        "type": "string",
                        "optional": "—",
                        "default":"el-icon-circle-close"
                      }
                    ],
                    "events": [
                      {
                        "name": "change",
                        "explain": "用户确认选定的值时触发",
                        "parameter": "组件绑定值"
                      },
                      {
                        "name": "blur",
                        "explain": "当 input 失去焦点时触发",
                        "parameter": "组件实例"
                      },
                      {
                        "name": "focus",
                        "explain": "当 input 获得焦点时触发",
                        "parameter": "组件实例"
                      }
                    ],
                    "methods": [
                      {
                        "name": "focus",
                        "explain": "使 input 获取焦点",
                        "parameter": "—"
                      }
                    ],
                    "SelectOptions": [
                      {
                        "parameter": "start",
                        "explain": "开始时间",
                        "type": "string",
                        "optional": "—",
                        "default":"09:00"
                      },
                      {
                        "parameter": "end",
                        "explain": "结束时间",
                        "type": "string",
                        "optional": "—",
                        "default":"18:00"
                      },
                      {
                        "parameter": "step",
                        "explain": "间隔时间",
                        "type": "string",
                        "optional": "—",
                        "default":"00:30"
                      },
                      {
                        "parameter": "minTime",
                        "explain": "最小时间，小于该时间的时间段将被禁用",
                        "type": "string",
                        "optional": "—",
                        "default":"00:00"
                      },
                      {
                        "parameter": "maxTime",
                        "explain": "最大时间，大于该时间的时间段将被禁用",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      }
                    ],
                    "PickerOptions": [
                      {
                        "parameter": "selectableRange",
                        "explain": "可选时间段，例如'18:30:00 - 20:30:00'或者传入数组['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']",
                        "type": "string / array",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "format",
                        "explain": "时间格式化(TimePicker)",
                        "type": "string",
                        "optional": "小时：HH，分：mm，秒：ss，AM/PM A",
                        "default":"'HH:mm:ss'"
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
              	this.scrollDiv = this.$refs.timePicker;
                  this.scrollDiv.addEventListener("scroll", this.scroll);
                this.attributes = this.data.attributes;
                this.events = this.data.events;
                this.SelectOptions = this.data.SelectOptions;
                this.PickerOptions = this.data.PickerOptions;
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