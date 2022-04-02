var DatePicker = moduleinit({
	url:'/demos/datePicker/datePicker.html',
	el:'#datePicker',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'DatePicker',
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
                  pickerOptions1: {
                    disabledDate(time) {
                      return time.getTime() > Date.now();
                    },
                    shortcuts: [{
                      text: '今天',
                      onClick(picker) {
                        picker.$emit('pick', new Date());
                      }
                    }, {
                      text: '昨天',
                      onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                      }
                    }, {
                      text: '一周前',
                      onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                      }
                    }]
                  },
                  value1: '',
                  value2: '',
                  pickerOptions2: {
                    shortcuts: [{
                      text: '最近一周',
                      onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                      }
                    }, {
                      text: '最近一个月',
                      onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                      }
                    }, {
                      text: '最近三个月',
                      onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                      }
                    }]
                  },
                  pickerOptions3: {
                      shortcuts: [{
                        text: '本月',
                        onClick(picker) {
                          picker.$emit('pick', [new Date(), new Date()]);
                        }
                      }, {
                        text: '今年至今',
                        onClick(picker) {
                          const end = new Date();
                          const start = new Date(new Date().getFullYear(), 0);
                          picker.$emit('pick', [start, end]);
                        }
                      }, {
                        text: '最近六个月',
                        onClick(picker) {
                          const end = new Date();
                          const start = new Date();
                          start.setMonth(start.getMonth() - 6);
                          picker.$emit('pick', [start, end]);
                        }
                      }]
                    },
                  value3: '',
                  value4: '',
                  value5: '',
                  value6: '',
                  value7: '',
                  value8: '',
                  value9: '',
                  value10: '',
                  value11: '',
                  value12: '',
                  value13: '',
                  value14: '',
                  attributes: [],
                  events: [],
                  Shortcuts: [],
                  PickerOptions: [],
                  methods: [],
                  data: {
                    "attributes": [
                      {
                        "parameter": "value / v-model",
                        "explain": "绑定值",
                        "type": "date(DatePicker) / string(DateRangePicker)",
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
                        "explain": "范围选择时结束日期的占位内容",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "type",
                        "explain": "显示类型",
                        "type": "string",
                        "optional": "year/month/date/dates/ week/datetime/datetimerange/daterange",
                        "default":"date"
                      },
                      {
                        "parameter": "format",
                        "explain": "显示在输入框中的格式",
                        "type": "string",
                        "optional": "见日期格式",
                        "default":"yyyy-MM-dd"
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
                        "explain": "DatePicker 下拉框的类名",
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
                        "parameter": "default-value",
                        "explain": "可选，选择器打开时默认显示的时间",
                        "type": "Date",
                        "optional": "可被new Date()解析",
                        "default":"—"
                      },
                      {
                        "parameter": "default-time",
                        "explain": "范围选择时选中日期所使用的当日内具体时刻",
                        "type": "string",
                        "optional": "数组，长度为 2，每项值为字符串，形如12:00:00，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 00:00:00",
                        "default":"—"
                      },
                      {
                        "parameter": "value-format",
                        "explain": "可选，绑定值的格式。不指定则绑定值为 Date 对象",
                        "type": "string",
                        "optional": "见日期格式",
                        "default":"—"
                      },
                      {
                        "parameter": "unlink-panels",
                        "explain": "在范围选择器里取消两个日期面板之间的联动",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
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
                        "default":"el-icon-date"
                      },
                      {
                        "parameter": "clear-icon",
                        "explain": "自定义清空图标的类名",
                        "type": "string",
                        "optional": "—",
                        "default":"el-icon-circle-close"
                      },
                      {
                        "parameter": "validate-event",
                        "explain": "输入时是否触发表单的校验",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      }
                    ],
                    "events": [
                      {
                        "name": "change",
                        "explain": "用户确认选定的值时触发",
                        "parameter": "组件绑定值。格式与绑定值一致，可受 value-format 控制"
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
                    "Shortcuts": [
                      {
                        "parameter": "start",
                        "explain": "标题文本",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "onClick",
                        "explain": "选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date())",
                        "type": "function",
                        "optional": "—",
                        "default":"—"
                      }
                    ],
                    "PickerOptions": [
                      {
                        "parameter": "shortcuts",
                        "explain": "设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表",
                        "type": "Object",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "disabledDate",
                        "explain": "设置禁用状态，参数为当前日期，要求返回 Boolean",
                        "type": "Function",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "firstDayOfWeek",
                        "explain": "周起始日",
                        "type": "Number",
                        "optional": "1到7",
                        "default":"7"
                      },
                      {
                        "parameter": "onPick",
                        "explain": "选中日期后会执行的回调，只有当 daterange 或 datetimerange 才生效",
                        "type": "Function({ maxDate, minDate })",
                        "optional": "—",
                        "default":"—"
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
              computed: {},
              mounted(){
              	this.scrollDiv = this.$refs.datePicker;
                  this.scrollDiv.addEventListener("scroll", this.scroll);
                this.attributes = this.data.attributes;
                this.events = this.data.events;
                this.Shortcuts = this.data.Shortcuts;
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