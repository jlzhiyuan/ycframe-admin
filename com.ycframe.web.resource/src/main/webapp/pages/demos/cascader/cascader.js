var cascader = moduleinit({
	url:'/demos/cascader/cascader.html',
	el:'#cascader',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'cascader',
            data() {
            	var id = 0;
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
                  scrollDiv: '',
                  scrollHeight: '',
                  props: { multiple: true },
                  props1: {
                      lazy: true,
                      lazyLoad (node, resolve) {
                        const { level } = node;
                        setTimeout(() => {
                          const nodes = Array.from({ length: level + 1 })
                            .map(item => ({
                              value: ++id,
                              label: `选项${id}`,
                              leaf: level >= 2
                            }));
                          // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                          resolve(nodes);
                        }, 1000);
                      }
                    },
                  options1: [{
                    value: 1,
                    label: '东南',
                    children: [{
                      value: 2,
                      label: '上海',
                      children: [
                        { value: 3, label: '普陀' },
                        { value: 4, label: '黄埔' },
                        { value: 5, label: '徐汇' }
                      ]
                    }, {
                      value: 7,
                      label: '江苏',
                      children: [
                        { value: 8, label: '南京' },
                        { value: 9, label: '苏州' },
                        { value: 10, label: '无锡' }
                      ]
                    }, {
                      value: 12,
                      label: '浙江',
                      children: [
                        { value: 13, label: '杭州' },
                        { value: 14, label: '宁波' },
                        { value: 15, label: '嘉兴' }
                      ]
                    }]
                  }, {
                    value: 17,
                    label: '西北',
                    children: [{
                      value: 18,
                      label: '陕西',
                      children: [
                        { value: 19, label: '西安' },
                        { value: 20, label: '延安' }
                      ]
                    }, {
                      value: 21,
                      label: '新疆维吾尔族自治区',
                      children: [
                        { value: 22, label: '乌鲁木齐' },
                        { value: 23, label: '克拉玛依' }
                      ]
                    }]
                  }],
                  options: [{
                    value: 'zhinan',
                    label: '指南',
                    children: [{
                      value: 'shejiyuanze',
                      label: '设计原则',
                      children: [{
                        value: 'yizhi',
                        label: '一致'
                      }, {
                        value: 'fankui',
                        label: '反馈'
                      }, {
                        value: 'xiaolv',
                        label: '效率'
                      }, {
                        value: 'kekong',
                        label: '可控'
                      }]
                    }, {
                      value: 'daohang',
                      label: '导航',
                      children: [{
                        value: 'cexiangdaohang',
                        label: '侧向导航'
                      }, {
                        value: 'dingbudaohang',
                        label: '顶部导航'
                      }]
                    }]
                  }, {
                    value: 'zujian',
                    label: '组件',
                    children: [{
                      value: 'basic',
                      label: 'Basic',
                      children: [{
                        value: 'layout',
                        label: 'Layout 布局'
                      }, {
                        value: 'color',
                        label: 'Color 色彩'
                      }, {
                        value: 'typography',
                        label: 'Typography 字体'
                      }, {
                        value: 'icon',
                        label: 'Icon 图标'
                      }, {
                        value: 'button',
                        label: 'Button 按钮'
                      }]
                    }, {
                      value: 'form',
                      label: 'Form',
                      children: [{
                        value: 'radio',
                        label: 'Radio 单选框'
                      }, {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                      }, {
                        value: 'input',
                        label: 'Input 输入框'
                      }, {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                      }, {
                        value: 'select',
                        label: 'Select 选择器'
                      }, {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                      }, {
                        value: 'switch',
                        label: 'Switch 开关'
                      }, {
                        value: 'slider',
                        label: 'Slider 滑块'
                      }, {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                      }, {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                      }, {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                      }, {
                        value: 'upload',
                        label: 'Upload 上传'
                      }, {
                        value: 'rate',
                        label: 'Rate 评分'
                      }, {
                        value: 'form',
                        label: 'Form 表单'
                      }]
                    }, {
                      value: 'data',
                      label: 'Data',
                      children: [{
                        value: 'table',
                        label: 'Table 表格'
                      }, {
                        value: 'tag',
                        label: 'Tag 标签'
                      }, {
                        value: 'progress',
                        label: 'Progress 进度条'
                      }, {
                        value: 'tree',
                        label: 'Tree 树形控件'
                      }, {
                        value: 'pagination',
                        label: 'Pagination 分页'
                      }, {
                        value: 'badge',
                        label: 'Badge 标记'
                      }]
                    }, {
                      value: 'notice',
                      label: 'Notice',
                      children: [{
                        value: 'alert',
                        label: 'Alert 警告'
                      }, {
                        value: 'loading',
                        label: 'Loading 加载'
                      }, {
                        value: 'message',
                        label: 'Message 消息提示'
                      }, {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                      }, {
                        value: 'notification',
                        label: 'Notification 通知'
                      }]
                    }, {
                      value: 'navigation',
                      label: 'Navigation',
                      children: [{
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                      }, {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                      }, {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                      }, {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                      }, {
                        value: 'steps',
                        label: 'Steps 步骤条'
                      }]
                    }, {
                      value: 'others',
                      label: 'Others',
                      children: [{
                        value: 'dialog',
                        label: 'Dialog 对话框'
                      }, {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                      }, {
                        value: 'popover',
                        label: 'Popover 弹出框'
                      }, {
                        value: 'card',
                        label: 'Card 卡片'
                      }, {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                      }, {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                      }]
                    }]
                  }, {
                    value: 'ziyuan',
                    label: '资源',
                    children: [{
                      value: 'axure',
                      label: 'Axure Components'
                    }, {
                      value: 'sketch',
                      label: 'Sketch Templates'
                    }, {
                      value: 'jiaohu',
                      label: '组件交互文档'
                    }]
                  }],
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
                        "parameter": "options",
                        "explain": "可选项数据源，键名可通过 props 属性配置",
                        "type": "array",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "props",
                        "explain": "配置选项，具体见下表",
                        "type": "object",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "value",
                        "explain": "选中项绑定值",
                        "type": "array",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "separator",
                        "explain": "选项分隔符",
                        "type": "string",
                        "optional": "—",
                        "default":"斜杠'/'"
                      },
                      {
                        "parameter": "popper-class",
                        "explain": "自定义浮层类名",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "placeholder",
                        "explain": "输入框占位文本",
                        "type": "string",
                        "optional": "—",
                        "default":"请选择"
                      },
                      {
                        "parameter": "disabled",
                        "explain": "是否禁用",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "clearable",
                        "explain": "是否支持清空选项",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "show-all-levels",
                        "explain": "	输入框中是否显示选中值的完整路径",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "filterable",
                        "explain": "是否可搜索选项",
                        "type": "boolean",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                          "parameter": "filter-method",
                          "explain": "自定义搜索逻辑，第一个参数是节点node，第二个参数是搜索关键词keyword，通过返回布尔值表示是否命中",
                          "type": "function(node, keyword)",
                          "optional": "—",
                          "default":"—"
                      },
                      {
                        "parameter": "debounce",
                        "explain": "搜索关键词输入的去抖延迟，毫秒",
                        "type": "number",
                        "optional": "—",
                        "default":"300"
                      },
                      {
                        "parameter": "size",
                        "explain": "尺寸",
                        "type": "string",
                        "optional": "medium / small / mini",
                        "default":"—"
                      },
                      {
                        "parameter": "before-filter",
                        "explain": "	筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选",
                        "type": "function(value)",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                          "parameter": "collapse-tags",
                          "explain": "多选模式下是否折叠Tag",
                          "type": "boolean",
                          "optional": "—",
                          "default":"true"
                      }
                    ],
                    "events": [
                      {
                        "name": "change",
                        "explain": "当选中节点变化时触发",
                        "parameter": "选中节点的值"
                      },
                      {
                        "name": "expand-change",
                        "explain": "当展开节点发生变化时触发",
                        "parameter": "各父级选项值组成的数组"
                      },
                      {
                        "name": "blur",
                        "explain": "当失去焦点时触发",
                        "parameter": "(event: Event)"
                      },
                      {
                        "name": "focus",
                        "explain": "当获取焦点时触发",
                        "parameter": "(event: Event)"
                      },
                      {
                        "name": "visible-change",
                        "explain": "下拉框出现/隐藏时触发",
                        "parameter": "出现则为true,隐藏则为false"
                      },
                      {
                        "name": "remove-tag",
                        "explain": "在多选模式下，移除Tag时触发",
                        "parameter": "移除的Tag对应的节点的值"
                      }
                    ],
                    CascaderMethods: [
                        {
                        	name: 'getCheckedNodes',
                        	explain: '获取选中的节点',
                        	parameter: '(leafOnly) 是否只是叶子节点，默认值为 false'
                        }
                    ],
                    CascaderSlots: [
                         {
                        	 name: '_',
                        	 explain: '自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据'
                         },
                         {
                        	 name: 'empty',
                        	 explain: '无匹配选项时的内容'
                         }
                    ],
                    "CascaderPanelAttributes": [
                      {
                        "parameter": "value / v-model",
                        "explain": "选中项绑定的值",
                        "type": "_",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "options",
                        "explain": "可选项数据源，键名可通过 Props 属性配置",
                        "type": "array",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "props",
                        "explain": "配置选项,具体见下表",
                        "type": "object",
                        "optional": "—",
                        "default":"—"
                      },
                    ],
                    CascaderPanelEvents: [
                       {
                    	   name: 'change',
                    	   explain: '当选中节点变化时触发',
                    	   parameter: '选中节点的值'
                       },
                       {
                    	   name: 'expand-change',
                    	   explain: '当展开节点发生变化时触发',
                    	   parameter: '各父级选项值组成的数组'
                       }
                    ],
                    CascaderPanelMethods: [
                        {
                        	name: 'getCheckedNodes',
                        	explain: '获取选中的节点数组',
                        	parameter: '(leafOnly) 是否只是叶子节点，默认值为 false'
                        },
                        {
                        	name: 'clearCheckedNodes',
                        	explain: '清空选中的节点',
                        	parameter: '_'
                        } 
                    ],
                    CascaderPanelSlots: [
                         {
                        	 name: '_',
                        	 explain: '自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据'
                         }                
                    ],
                    props: [
                       {
                    	   parameter: "expandTrigger",
                           explain: "次级菜单的展开方式",
                           type: "string",
                           optional: "click/hover",
                           "default":"click"
                    	   
                       },
                       {
                           parameter: "multiple",
                           explain: "是否多选",
                           type: "boolean",
                           optional: "_",
                           "default":"false"
                       },
                       {
                           parameter: "checkStrictly",
                           explain: "是否严格的遵守父子节点不互相关联",
                           type: "boolean",
                           optional: "_",
                           "default":"false"
                       },
                       {
                           parameter: "emitPath",
                           explain: "在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值",
                           type: "boolean",
                           optional: "_",
                           "default":"true"
                       },
                       {
                           parameter: "lazy",
                           explain: "是否动态加载子节点，需与 lazyLoad 方法结合使用",
                           type: "boolean",
                           optional: "_",
                           "default":"false"
                       },
                       {
                           parameter: "lazyLoad",
                           explain: "加载动态数据的方法，仅在 lazy 为 true 时有效",
                           type: "function(node, resolve)，node为当前点击的节点，resolve为数据加载完成的回调(必须调用)",
                           optional: "_",
                           "default":"_"
                       },
                       {
                           parameter: "value",
                           explain: "指定选项的值为选项对象的某个属性值",
                           type: "string",
                           optional: "_",
                           "default":"value"
                       },
                       {
                           parameter: "label",
                           explain: "指定选项标签为选项对象的某个属性值",
                           type: "string",
                           optional: "_",
                           "default":"label"
                       },
                       {
                           parameter: "children",
                           explain: "指定选项的子选项为选项对象的某个属性值",
                           type: "string",
                           optional: "_",
                           "default":"children"
                       },
                       {
                           parameter: "disabled",
                           explain: "指定选项的禁用为选项对象的某个属性值",
                           type: "string",
                           optional: "_",
                           "default":"disabled"
                       },
                       {
                           parameter: "leaf",
                           explain: "指定选项的叶子节点的标志位为选项对象的某个属性值",
                           type: "string",
                           optional: "_",
                           "default":"leaf"
                       }
                    ]
                  },
                  selectedOptions: [],
                  selectedOptions2: [],
                  optionsWithDisabled: [{
                    value: 'zhinan',
                    label: '指南',
                    disabled: true,
                    children: [{
                      value: 'shejiyuanze',
                      label: '设计原则',
                      children: [{
                        value: 'yizhi',
                        label: '一致'
                      }, {
                        value: 'fankui',
                        label: '反馈'
                      }, {
                        value: 'xiaolv',
                        label: '效率'
                      }, {
                        value: 'kekong',
                        label: '可控'
                      }]
                    }, {
                      value: 'daohang',
                      label: '导航',
                      children: [{
                        value: 'cexiangdaohang',
                        label: '侧向导航'
                      }, {
                        value: 'dingbudaohang',
                        label: '顶部导航'
                      }]
                    }]
                  }, {
                    value: 'zujian',
                    label: '组件',
                    children: [{
                      value: 'basic',
                      label: 'Basic',
                      children: [{
                        value: 'layout',
                        label: 'Layout 布局'
                      }, {
                        value: 'color',
                        label: 'Color 色彩'
                      }, {
                        value: 'typography',
                        label: 'Typography 字体'
                      }, {
                        value: 'icon',
                        label: 'Icon 图标'
                      }, {
                        value: 'button',
                        label: 'Button 按钮'
                      }]
                    }, {
                      value: 'form',
                      label: 'Form',
                      children: [{
                        value: 'radio',
                        label: 'Radio 单选框'
                      }, {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                      }, {
                        value: 'input',
                        label: 'Input 输入框'
                      }, {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                      }, {
                        value: 'select',
                        label: 'Select 选择器'
                      }, {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                      }, {
                        value: 'switch',
                        label: 'Switch 开关'
                      }, {
                        value: 'slider',
                        label: 'Slider 滑块'
                      }, {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                      }, {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                      }, {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                      }, {
                        value: 'upload',
                        label: 'Upload 上传'
                      }, {
                        value: 'rate',
                        label: 'Rate 评分'
                      }, {
                        value: 'form',
                        label: 'Form 表单'
                      }]
                    }, {
                      value: 'data',
                      label: 'Data',
                      children: [{
                        value: 'table',
                        label: 'Table 表格'
                      }, {
                        value: 'tag',
                        label: 'Tag 标签'
                      }, {
                        value: 'progress',
                        label: 'Progress 进度条'
                      }, {
                        value: 'tree',
                        label: 'Tree 树形控件'
                      }, {
                        value: 'pagination',
                        label: 'Pagination 分页'
                      }, {
                        value: 'badge',
                        label: 'Badge 标记'
                      }]
                    }, {
                      value: 'notice',
                      label: 'Notice',
                      children: [{
                        value: 'alert',
                        label: 'Alert 警告'
                      }, {
                        value: 'loading',
                        label: 'Loading 加载'
                      }, {
                        value: 'message',
                        label: 'Message 消息提示'
                      }, {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                      }, {
                        value: 'notification',
                        label: 'Notification 通知'
                      }]
                    }, {
                      value: 'navigation',
                      label: 'Navigation',
                      children: [{
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                      }, {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                      }, {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                      }, {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                      }, {
                        value: 'steps',
                        label: 'Steps 步骤条'
                      }]
                    }, {
                      value: 'others',
                      label: 'Others',
                      children: [{
                        value: 'dialog',
                        label: 'Dialog 对话框'
                      }, {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                      }, {
                        value: 'popover',
                        label: 'Popover 弹出框'
                      }, {
                        value: 'card',
                        label: 'Card 卡片'
                      }, {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                      }, {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                      }]
                    }]
                  }, {
                    value: 'ziyuan',
                    label: '资源',
                    children: [{
                      value: 'axure',
                      label: 'Axure Components'
                    }, {
                      value: 'sketch',
                      label: 'Sketch Templates'
                    }, {
                      value: 'jiaohu',
                      label: '组件交互文档'
                    }]
                  }]
                }
              },
              watch: {
              	'$route'(to,from){
              		if (to.path == this.$route.path) {
              			this.scrollDiv.scrollTop = this.scrollHeight;
              		} 
              	},
              },
              computed:{},
              mounted(){
              	this.scrollDiv = this.$refs.cascader;
                this.scrollDiv.addEventListener("scroll", this.scroll);
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
                clickShow7: function() {
                   this.isShow7 = !this.isShow7;
                },
                clickShow8: function() {
                   this.isShow8 = !this.isShow8;
                },
                clickShow9: function() {
                  this.isShow9 = !this.isShow9;
                },
                handleChange(value) {
                }
              }	
	    }
	    return data;
    }
})