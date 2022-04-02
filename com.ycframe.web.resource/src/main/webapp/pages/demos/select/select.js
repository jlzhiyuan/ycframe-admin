var Select = moduleinit({
	url:'/demos/select/select.html', 
	el:'#select',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Select',
            data() {
                return {
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow3: true,
                  isShow4: true,
                  isShow5: true,
                  isShow6: true,
                  isShow7: true,
                  isShow8: true,
                  isShow9: true,
                  isShow10: true,
                  isShow11: true,
                  scrollDiv: '',
                  scrollHeight: '',
                  attributes: [],
                  GroupAttributes: [],
                  events: [],
                  OptionAttributes: [],
                  methods: [],
                  slot: [],
                  value7: '',
                  value8: '',
                  value9: '',
                  cities: [{
                      value: 'Beijing',
                      label: '北京'
                    }, {
                      value: 'Shanghai',
                      label: '上海'
                    }, {
                      value: 'Nanjing',
                      label: '南京'
                    }, {
                      value: 'Chengdu',
                      label: '成都'
                    }, {
                      value: 'Shenzhen',
                      label: '深圳'
                    }, {
                      value: 'Guangzhou',
                      label: '广州'
                    }],
                    options7: [{
                        label: '热门城市',
                        options: [{
                          value: 'Shanghai',
                          label: '上海'
                        }, {
                          value: 'Beijing',
                          label: '北京'
                        }]
                      }, {
                        label: '城市名',
                        options: [{
                          value: 'Chengdu',
                          label: '成都'
                        }, {
                          value: 'Shenzhen',
                          label: '深圳'
                        }, {
                          value: 'Guangzhou',
                          label: '广州'
                        }, {
                          value: 'Dalian',
                          label: '大连'
                        }]
                      }],
                      value10: '',
                      options8: [],
                      value11: [],
                      list: [],
                      loading: false,
                      states: ["Alabama", "Alaska", "Arizona",
                      "Arkansas", "California", "Colorado",
                      "Connecticut", "Delaware", "Florida",
                      "Georgia", "Hawaii", "Idaho", "Illinois",
                      "Indiana", "Iowa", "Kansas", "Kentucky",
                      "Louisiana", "Maine", "Maryland",
                      "Massachusetts", "Michigan", "Minnesota",
                      "Mississippi", "Missouri", "Montana",
                      "Nebraska", "Nevada", "New Hampshire",
                      "New Jersey", "New Mexico", "New York",
                      "North Carolina", "North Dakota", "Ohio",
                      "Oklahoma", "Oregon", "Pennsylvania",
                      "Rhode Island", "South Carolina",
                      "South Dakota", "Tennessee", "Texas",
                      "Utah", "Vermont", "Virginia",
                      "Washington", "West Virginia", "Wisconsin",
                      "Wyoming"],
                  options: [{
                    value: '选项1',
                    label: '黄金糕'
                  }, {
                    value: '选项2',
                    label: '双皮奶'
                  }, {
                    value: '选项3',
                    label: '蚵仔煎'
                  }, {
                    value: '选项4',
                    label: '龙须面'
                  }, {
                    value: '选项5',
                    label: '北京烤鸭'
                  }],
                  value: '',
                  options1: [{
                    value: '选项1',
                    label: '黄金糕'
                  }, {
                    value: '选项2',
                    label: '双皮奶',
                    disabled: true
                  }, {
                    value: '选项3',
                    label: '蚵仔煎'
                  }, {
                    value: '选项4',
                    label: '龙须面'
                  }, {
                    value: '选项5',
                    label: '北京烤鸭'
                  }],
                  value1: '',
                  valueId: '3',
                  value2:'',
                  value6: [],
                  value3: [],
                  value4: '',
                  options2: [{
                    value: 'HTML',
                    label: 'HTML'
                  }, {
                    value: 'CSS',
                    label: 'CSS'
                  }, {
                    value: 'JavaScript',
                    label: 'JavaScript'
                  }],
                  value5: [],
                  defaultProps: {
                	  value: 'valueId',
                    children: 'children',
                    label: 'labels'
                  },
                  options6: [
                    {
                      valueId: 'ad',
                      labels: '一级 1',
                      children: [{
                    	valueId: "4",
                        labels: '二级 1-1',
                        children: [{
                          valueId: "9",
                          labels: '三级 1-1-1'
                        }, {
                          valueId: "10",
                          labels: '三级 1-1-2'
                        }]
                      }]
                    }, {
                    	valueId: "2",
                      labels: '一级 2',
                      children: [{
                    	  valueId: "5",
                        labels: '二级 2-1'
                      }, {
                    	  valueId: "6",
                        labels: '二级 2-2'
                      }]
                    }, {
                    	valueId: "3",
                      labels: '一级 3',
                      children: [{
                    	  valueId: "7",
                        labels: '二级 3-1'
                      }, {
                    	  valueId: "8",
                        labels: '二级 3-2'
                      }]
                    }
                  ],
                  selected: '',
                  data: {
                    "attributes": [
                      {
                        "parameter": "value / v-model",
                        "explain": "绑定值",
                        "type": "boolean / string / number",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "multiple",
                        "explain": "是否多选",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "disabled",
                        "explain": "是否禁用",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "value-key",
                        "explain": "作为 value 唯一标识的键名，绑定值为对象类型时必填",
                        "type": "string",
                        "optional": "—",
                        "default":"value"
                      },
                      {
                        "parameter": "size",
                        "explain": "作为 value 唯一标识的键名，绑定值为对象类型时必填",
                        "type": "string",
                        "optional": "medium/small/mini",
                        "default":"—"
                      },
                      {
                        "parameter": "clearable",
                        "explain": "是否可以清空选项",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "collapse-tags",
                        "explain": "多选时是否将选中值按文字的形式展示",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "multiple-limit",
                        "explain": "多选时用户最多可以选择的项目数，为 0 则不限制",
                        "type": "number",
                        "optional": "—",
                        "default":"0"
                      },
                      {
                        "parameter": "name",
                        "explain": "select input 的 name 属性",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "autocomplete",
                        "explain": "select input 的 autocomplete 属性",
                        "type": "string",
                        "optional": "—",
                        "default":"off"
                      },
                      {
                        "parameter": "auto-complete",
                        "explain": "下个主版本弃用",
                        "type": "string",
                        "optional": "—",
                        "default":"off"
                      },
                      {
                        "parameter": "placeholder",
                        "explain": "占位符",
                        "type": "string",
                        "optional": "—",
                        "default":"请选择"
                      },
                      {
                        "parameter": "filterable",
                        "explain": "是否可搜索",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "allow-create",
                        "explain": "是否允许用户创建新条目，需配合 filterable 使用",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "filter-method",
                        "explain": "自定义搜索方法",
                        "type": "function",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "remote",
                        "explain": "是否为远程搜索",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "remote-method",
                        "explain": "远程搜索方法",
                        "type": "function",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "loading",
                        "explain": "是否正在从远程获取数据",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "loading-text",
                        "explain": "远程加载时显示的文字",
                        "type": "string",
                        "optional": "—",
                        "default":"加载中"
                      },
                      {
                        "parameter": "no-match-text",
                        "explain": "搜索条件无匹配时显示的文字，也可以使用slot='empty'设置",
                        "type": "string",
                        "optional": "—",
                        "default":"无匹配数据"
                      },
                      {
                        "parameter": "no-data-text",
                        "explain": "选项为空时显示的文字，也可以使用slot='empty'设置",
                        "type": "string",
                        "optional": "—",
                        "default":"无数据"
                      },
                      {
                        "parameter": "popper-class",
                        "explain": "Select 下拉框的类名",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "reserve-keyword",
                        "explain": "多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "default-first-option",
                        "explain": "在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "popper-append-to-body",
                        "explain": "是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "automatic-dropdown",
                        "explain": "对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      }
                    ],
                    "GroupAttributes": [
                      {
                        "parameter": "label",
                        "explain": "分组的组名",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "disabled",
                        "explain": "是否将该分组下所有选项置为禁用",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "disabled",
                        "explain": "指定节点选择框是否禁用为节点对象的某个属性值",
                        "type": "boolean, function(data, node)",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "isLeaf",
                        "explain": "指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效",
                        "type": "boolean, function(data, node)",
                        "optional": "—",
                        "default":"—"
                      }
                    ],
                    "OptionAttributes": [
                      {
                        "parameter": "value",
                        "explain": "选项的值",
                        "type": "string/number/object",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "label",
                        "explain": "选项的标签，若不设置则默认与 value 相同",
                        "type": "string/number",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "disabled",
                        "explain": "是否禁用该选项",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      }
                    ],
                    "methods": [
                      {
                        "name": "focus",
                        "explain": "使 input 获取焦点",
                        "parameter": "—"
                      },
                      {
                        "name": "blur",
                        "explain": "使 input 失去焦点，并隐藏下拉框",
                        "parameter": "—"
                      },
                      {
                        "name": "getCheckedNodes",
                        "explain": "若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点所组成的数组",
                        "parameter": "(leafOnly, includeHalfChecked) 接收两个 boolean 类型的参数，1. 是否只是叶子节点，默认值为 false 2. 是否包含半选节点，默认值为 false"
                      }
                    ],
                    "events": [
                      {
                        "name": "change",
                        "explain": "选中值发生变化时触发",
                        "parameter": "目前的选中值"
                      },
                      {
                        "name": "visible-change",
                        "explain": "下拉框出现/隐藏时触发",
                        "parameter": "出现则为 true，隐藏则为 false"
                      },
                      {
                        "name": "remove-tag",
                        "explain": "多选模式下移除tag时触发",
                        "parameter": "移除tag的值"
                      },
                      {
                        "name": "clear",
                        "explain": "可清空的单选模式下用户点击清空按钮时触发",
                        "parameter": "—"
                      },
                      {
                        "name": "blur",
                        "explain": "当 input 失去焦点时触发",
                        "parameter": "(event: Event)"
                      },
                      {
                        "name": "focus",
                        "explain": "当 input 获得焦点时触发",
                        "parameter": "(event: Event)"
                      }
                    ],
                    "slot": [
                      {
                        "name": "—",
                        "explain": "Option 组件列表"
                      },
                      {
                        "name": "prefix",
                        "explain": "Select 组件头部内容"
                      },
                      {
                        "name": "empty",
                        "explain": "无选项时的列表"
                      }
                    ],
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
              	this.scrollDiv = this.$refs.select;
                  this.scrollDiv.addEventListener("scroll", this.scroll);
                this.attributes = this.data.attributes;
                this.events = this.data.events;
                this.GroupAttributes = this.data.GroupAttributes;
                this.OptionAttributes = this.data.OptionAttributes;
                this.methods = this.data.methods;
                this.slot = this.data.slot;
                this.list = this.states.map(item => {
                  return { value: item, label: item };
                });
              },
              methods: {
            	  getvalue(value){
                    this.valueId = value;
                  },
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
                clickShow7: function() {
                  this.isShow7 = !this.isShow7;
                },
                clickShow8: function() {
                   this.isShow8 = !this.isShow8;
                },
                clickShow9: function() {
                  this.isShow9 = !this.isShow9;
                },
                clickShow10: function() {
                   this.isShow10 = !this.isShow10;
                },
                clickShow11: function() {
                   this.isShow11 = !this.isShow11;
                },
                remoteMethod(query) {
                    if (query !== '') {
                      this.loading = true;
                      setTimeout(() => {
                        this.loading = false;
                        this.options8 = this.list.filter(item => {
                          return item.label.toLowerCase()
                            .indexOf(query.toLowerCase()) > -1;
                        });
                      }, 200);
                    } else {
                      this.options8 = [];
                    }
                }
            }	
	    }
	    return data;
    }
})