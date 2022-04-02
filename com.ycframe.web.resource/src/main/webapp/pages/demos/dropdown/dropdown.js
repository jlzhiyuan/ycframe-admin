var Dropdown = moduleinit({
	url:'/demos/dropdown/dropdown.html', 
	el:'#dropdown',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Dropdown',
            data() {
                return {
              	  scrollDiv: '',
                    scrollHeight: '',
                  firstName:"zhang",
                  lastName:"san",
                  message: 'Hello',
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow3: true,
                  isShow4: true,
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
                  data2: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                      id: 4,
                      label: '二级 1-1',
                      children: [{
                        id: 9,
                        label: '三级 1-1-1'
                      }, {
                        id: 10,
                        label: '三级 1-1-2'
                      }]
                    }]
                  }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                      id: 5,
                      label: '二级 2-1'
                    }, {
                      id: 6,
                      label: '二级 2-2'
                    }]
                  }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                      id: 7,
                      label: '二级 3-1'
                    }, {
                      id: 8,
                      label: '二级 3-2'
                    }]
                  }],
                  value: '',
                  value5: [],
                  data: [{
                    label: '一级 1',
                    children: [{
                      label: '二级 1-1',
                      children: [{
                        label: '三级 1-1-1'
                      }]
                    }]
                  }, {
                    label: '一级 2',
                    children: [{
                      label: '二级 2-1',
                      children: [{
                        label: '三级 2-1-1'
                      }]
                    }, {
                      label: '二级 2-2',
                      children: [{
                        label: '三级 2-2-1'
                      }]
                    }]
                  }, {
                    label: '一级 3',
                    children: [{
                      label: '二级 3-1',
                      children: [{
                        label: '三级 3-1-1'
                      }]
                    }, {
                      label: '二级 3-2',
                      children: [{
                        label: '三级 3-2-1'
                      }]
                    }]
                  }],
                  defaultProps: {
                    children: 'children',
                    label: 'label'
                  },
                  options5: [{
                    value: 'HTML',
                    label: 'HTML'
                  }, {
                    value: 'CSS',
                    label: 'CSS'
                  }, {
                    value: 'JavaScript',
                    label: 'JavaScript'
                  }],
                  value10: [],
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
                  slot: [],
                  attributes: [],
                  ItemAttributes: [],
                  events: [],
                  data1: {
                    "attributes": [
                      {
                        "parameter": "type",
                        "explain": "菜单按钮类型，同 Button 组件(只在split-button为 true 的情况下有效)",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "size",
                        "explain": "菜单尺寸，在split-button为 true 的情况下也对触发按钮生效",
                        "type": "string",
                        "optional": "medium / small / mini",
                        "default":"—"
                      },
                      {
                        "parameter": "split-button",
                        "explain": "下拉触发元素呈现为按钮组",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "placement",
                        "explain": "菜单弹出位置",
                        "type": "string",
                        "optional": "top/top-start/top-end/bottom/bottom-start/bottom-end",
                        "default":"bottom-end"
                      },
                      {
                        "parameter": "trigger",
                        "explain": "触发下拉的方式",
                        "type": "string",
                        "optional": "hover, click",
                        "default":"hover"
                      },
                      {
                        "parameter": "hide-on-click",
                        "explain": "是否在点击菜单项后隐藏菜单",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "show-timeout",
                        "explain": "	展开下拉菜单的延时（仅在 trigger 为 hover 时有效）",
                        "type": "number",
                        "optional": "—",
                        "default":"250"
                      },
                      {
                        "parameter": "hide-timeout",
                        "explain": "收起下拉菜单的延时（仅在 trigger 为 hover 时有效）",
                        "type": "number",
                        "optional": "—",
                        "default":"150"
                      }
                    ],
                    "ItemAttributes": [
                      {
                        "parameter": "command",
                        "explain": "指令",
                        "type": "string/number/object",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "disabled",
                        "explain": "禁用",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "divided",
                        "explain": "显示分割线",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "icon",
                        "explain": "图标类名",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      }
                    ],
                    "events": [
                      {
                        "name": "click",
                        "explain": "split-button 为 true 时，点击左侧按钮的回调",
                        "parameter": "—"
                      },
                      {
                        "name": "command",
                        "explain": "点击菜单项触发的事件回调",
                        "parameter": "dropdown-item 的指令"
                      },
                      {
                        "name": "visible-change",
                        "explain": "下拉框出现/隐藏时触发",
                        "parameter": "出现则为 true，隐藏则为 false"
                      }
                    ],
                    "slot": [
                      {
                        "name": "—",
                        "explain": "触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件"
                      },
                      {
                        "name": "dropdown",
                        "explain": "下拉列表，通常是 <el-dropdown-menu> 组件"
                      }
                    ]
                  }
                }
              },
              computed: {
              },
              mounted() {
              	this.scrollDiv = this.$refs.dropdown;
                this.scrollDiv.addEventListener("scroll", this.scroll);
                this.attributes = this.data1.attributes;
                this.ItemAttributes = this.data1.ItemAttributes;
                this.events = this.data1.events;
                this.slot = this.data1.slot;
              },
              computed: {
              },
              watch: {
              	'$route'(to,from){
              		if (to.path == this.$route.path) {
              			this.scrollDiv.scrollTop = this.scrollHeight;
              		} 
              	}
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
                handleCommand(command) {
                  this.$message('click on item ' + command);
                },
                handleClick() {
                    alert('button click');
                }
                
              }
	    }
	    return data;
    }
})