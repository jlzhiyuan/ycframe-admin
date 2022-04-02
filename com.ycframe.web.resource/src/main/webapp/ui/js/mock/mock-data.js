Mock.mock(
  'http://treedata',
  {
    "treeLists" : [
      {
        "id": "1",
        "label": "华电电力科学研究院",
        "text": "1111111111",
        "text1": "222222222",
        "children": [
          {
            "id": "3",
            "label": "安全生产部",
            "text": "AQSCB",
            "text1": "AQSCB备注信息"
          },
          {
            "id": "2",
            "label": "二级 1-1",
            "text": "22222222222222",
            "text1": "2222222222222",
            "children": [
              {
                "id": "9",
                "label": "三级 1-1-1",
                "text": "3333333333",
                "text1": "3333333333"
              }, 
              {
                "id": "10",
                "label": "三级 1-1-2",
                "text": "4444444444",
                "text1": "4444444444"
              }
            ]
          },
          {
            "id": "5",
            "label": "北京分院",
            "text": "BJFY",
            "text1": ""
          },
          {
            "id": "6",
            "label": "材料技术部",
            "text": "CLJSB",
            "text1": ""
          },
          {
            "id": "21",
            "label": "二级 1-1",
            "text": "22222222222222",
            "text1": "2222222222222",
            "children": [
              {
                "id": "9",
                "label": "三级 1-1-1",
                "text": "3333333333",
                "text1": "3333333333"
              }, 
              {
                "id": "10",
                "label": "三级 1-1-2",
                "text": "4444444444",
                "text1": "4444444444"
              }
            ]
          },
          {
            "id": "22",
            "label": "二级 1-1",
            "text": "22222222222222",
            "text1": "2222222222222",
            "children": [
              {
                "id": "9",
                "label": "三级 1-1-1",
                "text": "3333333333",
                "text1": "3333333333"
              }, 
              {
                "id": "10",
                "label": "三级 1-1-2",
                "text": "4444444444",
                "text1": "4444444444"
              }
            ]
          }
        ]
      }
    ]
  }
);
Mock.mock(
  'http://pagedata',
  {
    "pageData": [
      {
        "parameter": "small",
        "explain": "是否使用小型分页样式",
        "type": "boolean",
        "optional": "_",
        "default":"false"
      },
      {
        "parameter": "background",
        "explain": "是否为分页按钮添加背景色",
        "type": "boolean",
        "optional": "_",
        "default":"false"
      },
      {
        "parameter": "page-size",
        "explain": "每页显示条目个数，支持 .sync 修饰符",
        "type": "number",
        "optional": "—",
        "default": "10"
      },
      {
        "parameter": "total",
        "explain": "条目总数",
        "type": "number",
        "optional": "—",
        "default": "_"
      },
      {
        "parameter": "page-count",
        "explain": "总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性",
        "type": "Number",
        "optional": "—",
        "default": "_"
      },
      {
        "parameter": "pager-count",
        "explain": "页码按钮的数量，当总页数超过该值时会折叠",
        "type": "number",
        "optional": "—",
        "default": "7"
      },
      {
        "parameter": "current-page",
        "explain": "当前页数，支持 .sync 修饰符",
        "type": "number",
        "optional": "—",
        "default": "1"
      },
      {
        "parameter": "layout",
        "explain": "组件布局，子组件名用逗号分隔",
        "type": "String",
        "optional": "sizes, prev, pager, next, jumper, ->, total, slot",
        "default": "'prev, pager, next, jumper, ->, total'"
      },
      {
        "parameter": "page-sizes",
        "explain": "每页显示个数选择器的选项设置",
        "type": "number[]",
        "optional": "—",
        "default": "[10, 20, 30, 40, 50, 100]"
      },
      {
        "parameter": "popper-class",
        "explain": "每页显示个数选择器的下拉框类名",
        "type": "string",
        "optional": "_",
        "default": "_"
      },
      {
        "parameter": "prev-text",
        "explain": "替代图标显示的上一页文字",
        "type": "string",
        "optional": "_",
        "default": "_"
      },
      {
        "parameter": "next-text",
        "explain": "替代图标显示的下一页文字",
        "type": "string",
        "optional": "_",
        "default": "_"
      },
      {
        "parameter": "disabled",
        "explain": "是否禁用",
        "type": "boolean",
        "optional": "_",
        "default": "false"
      }
    ],
    "events": [
      {
        "name": "size-change",
        "explain": "pageSize 改变时会触发",
        "parameter": "每条页数"
      },
      {
        "name": "current-change",
        "explain": "currentPage 改变时会触发",
        "parameter": "当前页"
      },
      {
        "name": "prev-click",
        "explain": "用户点击上一页按钮改变当前页后触发",
        "parameter": "当前页"
      },
      {
        "name": "next-click",
        "explain": "用户点击下一页按钮改变当前页后触发",
        "parameter": "当前页"
      }
    ],
    "slot": [
      {
        "name": "—",
        "explain": "自定义内容，需要在 layout 中列出 slot"
      }
    ]
  }
);
Mock.mock(
  'http://buttondata',
  {
    "tableData": [
      {
        "parameter": "size",
        "explain": "尺寸",
        "type": "string",
        "optional": "medium / small / mini",
        "default":"—"
      },
      {
        "parameter": "type",
        "explain": "类型",
        "type": "string",
        "optional": "primary / success / warning / danger / info / text",
        "default": "—"
      },
      {
        "parameter": "plain",
        "explain": "朴素按钮",
        "type": "boolean",
        "optional": "—",
        "default": "false"
      },
      {
        "parameter": "round",
        "explain": "圆角按钮",
        "type": "boolean",
        "optional": "—",
        "default": "false"
      },
      {
        "parameter": "circle",
        "explain": "是否圆形按钮",
        "type": "boolean",
        "optional": "—",
        "default": "false"
      },
      {
        "parameter": "loading",
        "explain": "是否加载状态",
        "type": "boolean",
        "optional": "—",
        "default": "false"
      },
      {
        "parameter": "disabled",
        "explain": "是否禁用状态",
        "type": "boolean",
        "optional": "—",
        "default": "false"
      },
      {
        "parameter": "icon",
        "explain": "图标类名",
        "type": "string",
        "optional": "—",
        "default": "—"
      },
      {
        "parameter": "autofocus",
        "explain": "是否默认焦距",
        "type": "boolean",
        "optional": "—",
        "default": "false"
      },
      {
        "parameter": "native-type",
        "explain": "type属性",
        "type": "string",
        "optional": "button / submit / reset",
        "default": "button"
      }
    ]
  }
);
Mock.mock(
  'http://icondata', 
  { 
    "iconLists": [
      "info",
      "error",
      "success",
      "warning",
      "question",
      "back",
      "arrow-left",
      "arrow-down",
      "arrow-right",
      "arrow-up",
      "caret-left",
      "caret-bottom",
      "caret-top",
      "caret-right",
      "d-arrow-left",
      "d-arrow-right",
      "minus",
      "plus",
      "remove",
      "circle-plus",
      "remove-outline",
      "circle-plus-outline",
      "close",
      "check",
      "circle-close",
      "circle-check",
      "circle-close-outline",
      "circle-check-outline",
      "zoom-out",
      "zoom-in",
      "d-caret",
      "sort",
      "sort-down",
      "sort-up",
      "tickets",
      "document",
      "goods",
      "sold-out",
      "news",
      "message",
      "date",
      "printer",
      "time",
      "bell",
      "mobile-phone",
      "service",
      "view",
      "menu",
      "more",
      "more-outline",
      "star-on",
      "star-off",
      "location",
      "location-outline",
      "phone",
      "phone-outline",
      "picture",
      "picture-outline",
      "delete",
      "search",
      "edit",
      "edit-outline",
      "rank",
      "refresh",
      "share",
      "setting",
      "upload",
      "upload2",
      "download",
      "loading"
    ]
  }
);
Mock.mock(
  'http://routes',
  { 
    "routers": [
      {
        "path": "",
        "meta": {
          "title": "组件示例",
          "icon": "el-icon-message\r\n"
        },
        "children": [
          {
            "path": "",
            "meta": {
              "title": "Basic",
              "icon": "el-icon-loading"
            },
            "children": [
              {
                "path": "/icon",
                "component": "Icon",
                "meta": {
                  "title": "Icon图标",
                  "icon": "el-icon-bell"
                },
                "children": "null"
              },
              {
                "path": "/button",
                "component": "Button",
                "meta": {
                  "title": "Button按钮",
                  "icon": "el-icon-bell"
                },
                "children": "null"
              }
            ]
          },
          {
            "path": "",
            "meta": {
              "title": "Form",
              "icon": "el-icon-bell"
            },
            "children": [
              {
                "path": "/radio",
                "component": "Radio",
                "meta": {
                  "title": "Radio单选框",
                  "icon": "el-icon-bell"
                },
                "children": "null"
              },
              {
                "path": "/checkbox",
                "component": "checkbox",
                "meta": {
                  "title": "checkbox多选框",
                  "icon": "el-icon-bell"
                },
                "children": "null"
              },
              {
                "path": "/select",
                "component": "Select",
                "meta": {
                  "title": "select选择器",
                  "icon": "el-icon-bell"
                },
                "children": "null"
              },
              {
                "path": "/cascader",
                "component": "Cascader",
                "meta": {
                  "title": "联级选择器",
                  "icon": "el-icon-bell"
                },
                "children": "null"
              },
              {
                "path": "/time-picker",
                "component": "TimePicker",
                "meta": {
                  "title": "时间选择器",
                  "icon": "el-icon-bell"
                },
                "children": "null"
              },
              {
                "path": "/date-picker",
                "component": "DatePicker",
                "meta": {
                  "title": "日期选择器",
                  "icon": "el-icon-bell"
                },
                "children": "null"
              },
              {
                "path": "/date-time-picker",
                "component": "DateTimePicker",
                "meta": {
                  "title": "日期时间选择器",
                  "icon": "el-icon-bell"
                },
                "children": "null"
              },
              {
                "path": "/switch",
                "component": "Switch",
                "meta": {
                  "title": "switch",
                  "icon": "el-icon-bell"
                },
                "children": "null"
              },
              {
                "path": "/form",
                "component": "Form",
                "meta": {
                  "title": "Form表单",
                  "icon": "el-icon-bell"
                },
                "children": "null"
              },
              {
                "path": "/input-number",
                "component": "InputNumber",
                "meta": {
                  "title": "计数器",
                  "icon": "el-icon-bell"
                },
                "children": "null"
              }
            ]
          },
          {
            "path": "/upload",
            "component": "Upload",
            "meta": {
              "title": "Upload上传",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/tooltip",
            "component": "tooltip",
            "meta": {
              "title": "tooltip文字提示",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/message",
            "component": "Message",
            "meta": {
              "title": "message消息提示",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/notification",
            "component": "lNotification",
            "meta": {
              "title": "notification通知",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/collapse",
            "component": "collapse",
            "meta": {
              "title": "collapse折叠面板",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/tag",
            "component": "Tag",
            "meta": {
              "title": "tag标签",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/statistic",
            "component": "Count",
            "meta": {
              "title": "statistic统计数据",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/card",
            "component": "Card",
            "meta": {
              "title": "Card 卡片",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/timeline",
            "component": "TimeLine",
            "meta": {
              "title": "TimeLine时间线",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/transfer",
            "component": "Transfer",
            "meta": {
              "title": "transfer穿梭框",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/layout",
            "component": "layout",
            "meta": {
              "title": "栅栏布局",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/container",
            "component": "Container",
            "meta": {
              "title": "container布局",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/loading",
            "component": "Loading",
            "meta": {
              "title": "loading加载",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/steps",
            "component": "Steps",
            "meta": {
              "title": "steps步骤条",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/badge",
            "component": "Badge",
            "meta": {
              "title": "badge标记",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/carousel",
            "component": "Carousel",
            "meta": {
              "title": "carousel走马灯",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/breadcrumb",
            "component": "Breadcrumb",
            "meta": {
              "title": "breadcrumb面包屑",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/back-to-top",
            "component": "Top",
            "meta": {
              "title": "返回顶部",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/drawer",
            "component": "Drawer",
            "meta": {
              "title": "Drawer抽屉",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/empty",
            "component": "EmptyStatus",
            "meta": {
              "title": "Empty空状态",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/sticky",
            "component": "Sticky",
            "meta": {
              "title": "sticky",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "",
            "meta": {
              "title": "Dialog弹框",
              "icon": "el-icon-bell"
            },
            "children": [
              {
                "path": "/dialog",
                "component": "Dialog",
                "meta": {
                  "title": "基本弹框",
                  "icon": "el-icon-bell"
                },
                "children": "null"
              },
              {
                "path": "/drag-dialog",
                "component": "dragDialog",
                "meta": {
                  "title": "拖拽Dialog",
                  "icon": "el-icon-bell"
                },
                "children": "null"
              }
            ]
          },
          {
            "path": "",
            "meta": {
              "title": "Table",
              "icon": "el-icon-bell"
            },
            "children": [
              {
                "path": "/table",
                "component": "Table",
                "meta": {
                  "title": "Table表格",
                  "icon": "el-icon-bell"
                },
                "children": "null"
              },
              {
                "path": "/dynamic-table",
                "component": "Dynamic",
                "meta": {
                  "title": "动态 Table",
                  "icon": "el-icon-bell"
                },
                "children": "null"
              }
            ]
          },
          {
            "path": "/tree",
            "component": "Tree",
            "meta": {
              "title": "Tree树形控件",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/pagination",
            "component": "Pagination",
            "meta": {
              "title": "Pagination分页",
              "icon": "el-icon-bell"
            },
            "children": "null"
          }
        ]
      },
      {
        "path": "null",
        "meta": {
          "title": "Navigation",
          "icon": "el-icon-bell"
        },
        "children": [
          {
            "path": "/tabs",
            "component": "Tabs",
            "meta": {
              "title": "Tabs标签页",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/dropdown",
            "component": "Dropdown",
            "meta": {
              "title": "Dropdown下拉菜單",
              "icon": "el-icon-bell"
            },
            "children": "null"
          }
        ]
      },
      {
        "path": "null",
        "meta": {
          "title": "系统维护",
          "icon": "el-icon-bell"
        },
        "children": [
          {
            "path": "/section-manage",
            "component": "SectionManage",
            "meta": {
              "title": "部门管理",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/maintenance",
            "component": "Maintenance",
            "meta": {
              "title": "专业维护",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/personal-manage",
            "component": "personalManage",
            "meta": {
              "title": "人员管理",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/module",
            "component": "Module",
            "meta": {
              "title": "模块管理",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/power",
            "component": "Power",
            "meta": {
              "title": "操作权限",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/data",
            "component": "Data",
            "meta": {
              "title": "数据权限",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/button-manage",
            "component": "ButtonManage",
            "meta": {
              "title": "按钮管理",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/page",
            "component": "page",
            "meta": {
              "title": "电路",
              "icon": "el-icon-bell"
            },
            "children": "null"
          }
        ]
      },
      {
        "path": "/role",
        "component": "Role",
        "meta": {
          "title": "身份权限",
          "icon": "el-icon-bell"
        },
        "children": "null"
      },
      {
        "path": "/i18n",
        "component": "Language",
        "meta": {
          "title": "国际化",
          "icon": "el-icon-bell"
        },
        "children": "null"
      },
      {
        "path": "/website",
        "component": "Website",
        "meta": {
          "title": "第三方网站",
          "icon": "el-icon-bell"
        },
        "children": "null"
      },
      {
        "path": "/theme",
        "component": "Theme",
        "meta": {
          "title": "换肤",
          "icon": "el-icon-bell"
        },
        "children": "null"
      }
    ],
    "routers11": [
      {
        "path": "null",
        "meta": {
          "title": "Navigation",
          "icon": "el-icon-bell"
        },
        "children": [
          {
            "path": "/tabs",
            "component": "Tabs",
            "meta": {
              "title": "Tabs标签页",
              "icon": "el-icon-bell"
            },
            "children": "null"
          },
          {
            "path": "/dropdown",
            "component": "Dropdown",
            "meta": {
              "title": "Dropdown下拉菜單",
              "icon": "el-icon-bell"
            },
            "children": "null"
          }
        ]
      },
      {
        "path": "null",
        "meta": {
          "title": "系统维护",
          "icon": "el-icon-bell"
        },
        "children": [
          {
            "path": "/section",
            "component": "Section",
            "meta": {
              "title": "部门管理",
              "icon": "el-icon-bell"
            },
            "children": "null"
          }
        ]
      },
      {
        "path": "/role",
        "component": "Role",
        "meta": {
          "title": "身份权限",
          "icon": "el-icon-bell"
        },
        "children": "null"
      }
    ],
   
      {
        "path": "/button",
        "name": "Button",
        "component": "Button",
        "meta": {
          "title": "Button按钮"
        }
      },
      {
        "path": "/icon",
        "name": "Icon",
        "component": "Icon",
        "meta": {
          "title": "Icon图标"
        }
      },
      {
        "path": "/table",
        "name": "Table",
        "component": "Table",
        "meta": {
          "title": "Table表格"
        }
      },
      {
        "path": "/form",
        "name": "Form",
        "component": "Form",
        "meta": {
          "title": "Form表单"
        }
      },
      {
        "path": "/tree",
        "name": "Tree",
        "component": "Tree",
        "meta": {
          "title": "Tree树形控件"
        }
      },
      {
        "path": "/pagination",
        "name": "Pagination",
        "component": "Pagination",
        "meta": {
          "title": "Pagination分页"
        }
      },
      {
        "path": "/dialog",
        "name": "Dialog",
        "component": "Dialog",
        "meta": {
          "title": "Dialog下拉菜单"
        }
      },
      {
        "path": "/tabs",
        "name": "Tabs",
        "component": "Tabs",
        "meta": {
          "title": "Tabs标签页"
        }
      },
      {
        "path": "/dropdown",
        "name": "Dropdown",
        "component": "Dropdown",
        "meta": {
          "title": "Dropdown下拉菜单"
        }
      },
      {
        "path": "/role",
        "name": "Role",
        "component": "Role",
        "meta": {
          "title": "身份权限"
        }
      },
      {
        "path": "/i18n",
        "name": "Language",
        "component": "Language",
        "meta": {
          "title": "国际化"
        }
      },
      {
        "path": "/website",
        "name": "Website",
        "component": "Website",
        "meta": {
          "title": "第三方网站"
        }
      },
      {
        "path": "/theme",
        "name": "Theme",
        "component": "Theme",
        "meta": {
          "title": "换肤"
        }
      },
      {
        "path": "/dynamic-table",
        "name": "Dynamic",
        "component": "Dynamic",
        "meta": {
          "title": "动态 Table"
        }
      },
      {
        "path": "/drag-dialog",
        "name": "dragDialog",
        "component": "dragDialog",
        "meta": {
          "title": "拖拽Dialog"
        }
      },
      {
        "path": "/back-to-top",
        "name": "Top",
        "component": "Top",
        "meta": {
          "title": "返回顶部"
        }
      },
      {
        "path": "/drawer",
        "name": "Drawer",
        "component": "Drawer",
        "meta": {
          "title": "Drawer抽屉"
        }
      },
      {
        "path": "/empty",
        "name": "EmptyStatus",
        "component": "EmptyStatus",
        "meta": {
          "title": "Empty空状态"
        }
      },
      {
        "path": "/personal-manage",
        "name": "personalManage",
        "component": "personalManage",
        "meta": {
          "title": "人员管理"
        }
      },
      {
        "path": "/layout",
        "name": "layout",
        "component": "layout",
        "meta": {
          "title": "栅栏布局"
        }
      },
      {
        "path": "/container",
        "name": "Container",
        "component": "Container",
        "meta": {
          "title": "Container布局"
        }
      },
      {
        "path": "/radio",
        "component": "Radio",
        "name": "Radio",
        "meta": {
          "title": "Radio单选框"
        }
      },
      {
        "path": "/checkbox",
        "component": "checkbox",
        "name": "checkbox",
        "meta": {
          "title": "checkbox多选框"
        }
      },
      {
        "path": "/time-picker",
        "component": "TimePicker",
        "name": "TimePicker",
        "meta": {
          "title": "时间选择器"
        }
      },
      {
        "path": "/upload",
        "component": "Upload",
        "name": "Upload",
        "meta": {
          "title": "Upload上传"
        }
      },
      {
        "path": "/switch",
        "component": "Switch",
        "name": "Switch",
        "meta": {
          "title": "switch"
        }
      },
      {
        "path": "/sticky",
        "component": "Sticky",
        "name": "Sticky",
        "meta": {
          "title": "sticky"
        }
      },
      {
        "path": "/tooltip",
        "component": "tooltip",
        "name": "tooltip",
        "meta": {
          "title": "tooltip"
        }
      },
      {
        "path": "/message",
        "component": "Message",
        "name": "Message",
        "meta": {
          "title": "Message消息提示"
        }
      },
      {
        "path": "/collapse",
        "component": "collapse",
        "name": "collapse",
        "meta": {
          "title": "collapse"
        }
      },
      {
        "path": "/page",
        "component": "page",
        "name": "page",
        "meta": {
          "title": "page"
        }
      },
      {
        "path": "/module",
        "component": "Module",
        "name": "Module",
        "meta": {
          "title": "module"
        }
      },
      {
        "path": "/power",
        "component": "Power",
        "name": "Power",
        "meta": {
          "title": "操作权限"
        }
      },
      {
        "path": "/data",
        "component": "Data",
        "name": "Data",
        "meta": {
          "title": "数据权限"
        }
      },
      {
        "path": "/button-manage",
        "component": "ButtonManage",
        "name": "ButtonManage",
        "meta": {
          "title": "按钮管理"
        }
      },
      {
        "path": "/input-number",
        "component": "InputNumber",
        "name": "InputNumber",
        "meta": {
          "title": "计数器"
        }
      },
      {
        "path": "/notification",
        "component": "lNotification",
        "name": "lNotification",
        "meta": {
          "title": "notification通知",
        }
      },
      {
        "path": "/transfer",
        "component": "Transfer",
        "name": "Transfer",
        "meta": {
          "title": "transfer穿梭框",
        }
      },
      {
        "path": "/date-picker",
        "component": "DatePicker",
        "name": "DatePicker",
        "meta": {
          "title": "日期选择器"
        }
      },
      {
        "path": "/date-time-picker",
        "component": "DateTimePicker",
        "name": "DateTimePicker",
        "meta": {
          "title": "日期时间选择器"
        }
      },
      {
        "path": "/details/:id",
        "component": "Details",
        "name": "Details",
        "meta": {
          "title": "详情"
        }
      },
      {
        "path": "/select",
        "component": "Select",
        "name": "Select",
        "meta": {
          "title": "select选择器"
        }
      },
      {
        "path": "/cascader",
        "component": "cascader",
        "name": "cascader",
        "meta": {
          "title": "联级选择器"
        }
      },
      {
        "path": "/timeline",
        "component": "TimeLine",
        "name": "TimeLine",
        "meta": {
          "title": "TimeLine时间线"
        }
      },
      {
        "path": "/loading",
        "component": "Loading",
        "name": "Loading",
        "meta": {
          "title": "Loading加载"
        }
      },
      {
        "path": "/steps",
        "component": "Steps",
        "name": "Steps",
        "meta": {
          "title": "Steps步骤条"
        }
      },
      {
        "path": "/badge",
        "component": "Badge",
        "name": "Badge",
        "meta": {
          "title": "Badge标记"
        }
      },
      {
        "path": "/carousel",
        "component": "Carousel",
        "name": "Carousel",
        "meta": {
          "title": "Carousel走马灯"
        }
      },
      {
        "path": "/breadcrumb",
        "component": "Breadcrumb",
        "name": "Breadcrumb",
        "meta": {
          "title": "Breadcrumb面包屑"
        }
      },
      {
        "path": "/tag",
        "component": "Tag",
        "name": "Tag",
        "meta": {
          "title": "tag标签"
        }
      },
      {
        "path": "/card",
        "component": "Card",
        "name": "Card",
        "meta": {
          "title": "Card卡片"
        }
      },
      {
        "path": "/statistic",
        "component": "Count",
        "name": "Count",
        "meta": {
          "title": "statisic统计数值"
        }
      },
      {
        "path": "/section-manage",
        "component": "SectionManage",
        "name": "SectionManage",
        "meta": {
          "title": "部门管理"
        }
      },
      {
        "path": "/maintenance",
        "component": "Maintenance",
        "name": "Maintenance",
        "meta": {
          "title": "专业维护"
        }
      }
    ]
  }
);
Mock.mock(
  'http://record',
  {
    "dataLists|2": [
      {
        'unit': '@cword(20)',
        'supply': '@cword(6)',
        'line': '@cword(5)',
        'number': '	224010000385761',
        'name': '米沙子变-江东线（公变）林柏成-五家子1',
        'areaName': '10kV江东线五家子1社变',
        'loseTime': '@date("yyyy-MM-dd HH:mm:ss")',
        'recordTime': '@date("yyyy-MM-dd HH:mm:ss")',
        'ua': '---',
        'ub': '---',
        'uc': '---',
        'isArea': true,
        'isUser': true
      }
    ],
    "lists|100": [
      {
        'unit': '@cword(20)',
        'supply': '@cword(6)',
        'line': '@cword(5)',
        'number': '	224010000385761',
        'name': '米沙子变-江东线（公变）林柏成-五家子1',
        'areaName': '10kV江东线五家子1社变',
        'loseTime': '@date("yyyy-MM-dd HH:mm:ss")',
        'recordTime': '@date("yyyy-MM-dd HH:mm:ss")',
        'ua': '---',
        'ub': '---',
        'uc': '---',
        'isArea': true,
        'isUser': true
      }
    ]
  }
)
Mock.mock(
  'http://inputNumber',
  {
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
)
Mock.mock(
  'http://natification',
  {
    "options": [
      {
        "parameter": "title",
        "explain": "标题",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "message",
        "explain": "说明文字",
        "type": "string/Vue.VNode",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "dangerouslyUseHTMLString",
        "explain": "是否将 message 属性作为 HTML 片段处理",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "type",
        "explain": "主题样式，如果不在可选值内将被忽略",
        "type": "string",
        "optional": "success/warning/info/error",
        "default":"—"
      },
      {
        "parameter": "iconClass",
        "explain": "自定义图标的类名。若设置了 type，则 iconClass 会被覆盖",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "customClass",
        "explain": "自定义类名",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "duration",
        "explain": "显示时间, 毫秒。设为 0 则不会自动关闭",
        "type": "number",
        "optional": "—",
        "default":"4500"
      },
      {
        "parameter": "position",
        "explain": "自定义弹出位置",
        "type": "string",
        "optional": "top-right/top-left/bottom-right/bottom-left",
        "default":"top-right"
      },
      {
        "parameter": "showClose",
        "explain": "是否显示关闭按钮",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "onClose",
        "explain": "关闭时的回调函数",
        "type": "function",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "onClick",
        "explain": "点击 Notification 时的回调函数",
        "type": "function",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "offset",
        "explain": "偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量",
        "type": "number",
        "optional": "—",
        "default":"0"
      }
    ],
    "events": [
      {
        "name": 'close',
        "explain": '关闭当前的 Notification'
      }
    ]
  }
)
Mock.mock(
  'http://transfer',
  {
    "attributes": [
      {
        "parameter": "value / v-model",
        "explain": "绑定值",
        "type": "array",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "data",
        "explain": "Transfer 的数据源",
        "type": "array[{ key, label, disabled }]",
        "optional": "—",
        "default":"[]"
      },
      {
        "parameter": "filterable",
        "explain": "是否可搜索",
        "type": "boolean",
        "optional": "—",
        "default":  "false"
      },
      {
        "parameter": "filter-placeholder",
        "explain": "搜索框占位符",
        "type": "string",
        "optional": "—",
        "default":"请输入搜索内容"
      },
      {
        "parameter": "filter-method",
        "explain": "自定义搜索方法",
        "type": "funciton",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "target-order",
        "explain": "右侧列表元素的排序策略：若为 original，则保持与数据源相同的顺序；若为 push，则新加入的元素排在最后；若为 unshift，则新加入的元素排在最前",
        "type": "string",
        "optional": "original / push / unshift",
        "default":"original"
      },
      {
        "parameter": "titles",
        "explain": "自定义列表标题",
        "type": "array",
        "optional": "—",
        "default":"['列表 1', '列表 2']"
      },
      {
        "parameter": "button-texts",
        "explain": "自定义按钮文案",
        "type": "array",
        "optional": "—",
        "default":"[]"
      },
      {
        "parameter": "render-content",
        "explain": "自定义数据项渲染函数",
        "type": "function(h, option)",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "format",
        "explain": "列表顶部勾选状态文案",
        "type": "object{noChecked, hasChecked}",
        "optional": "—",
        "default":"{ noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }"
      },
      {
        "parameter": "props",
        "explain": "数据源的字段别名",
        "type": "object{key, label, disabled}",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "left-default-checked",
        "explain": "初始状态下左侧列表的已勾选项的 key 数组",
        "type": "array",
        "optional": "—",
        "default":"[]"
      },
      {
        "parameter": "right-default-checked",
        "explain": "初始状态下右侧列表的已勾选项的 key 数组",
        "type": "array",
        "optional": "—",
        "default":"[]"
      }
    ],
    "slot": [
      {
        "name": "left-footer",
        "explain": "左侧列表底部的内容"
      },
      {
        "name": "right-footer",
        "explain": "右侧列表底部的内容"
      }
    ],
    "scopedSlot": [
      {
        "name": '—',
        "explain": "自定义数据项的内容，参数为 { option }"
      }
    ],
    "methods": [
      {
        "name": "clearQuery",
        "explain": "清空某个面板的搜索关键词",
        "parameter": "'left' / 'right'，指定需要清空的面板"
      }
    ],
    "events": [
      {
        "name": "change",
        "explain": "右侧列表元素变化时触发",
        "parameter": "当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组"
      },
      {
        "name": "left-check-change",
        "explain": "左侧列表元素被用户选中 / 取消选中时触发",
        "parameter": "当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组"
      },
      {
        "name": "right-check-change",
        "explain": "右侧列表元素被用户选中 / 取消选中时触发",
        "parameter": "当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组"
      }
    ]
  }
)
Mock.mock(
  'http://radio',
  {
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
)
Mock.mock(
  'http://checkbox',
  {
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
)
Mock.mock(
  'http://switch',
  {
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
)
Mock.mock(
  'http://form',
  {
    "attributes": [
      {
        "parameter": "model",
        "explain": "表单数据对象",
        "type": "object",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "rules",
        "explain": "表单验证规则",
        "type": "object",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "inline",
        "explain": "行内表单模式",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "label-position",
        "explain": "表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width",
        "type": "string",
        "optional": "right/left/top",
        "default":"right"
      },
      {
        "parameter": "label-width",
        "explain": "表单域标签的宽度，作为 Form 直接子元素的 form-item 会继承该值",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "label-suffix",
        "explain": "表单域标签的后缀",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "hide-required-asterisk",
        "explain": "是否显示必填字段的标签旁边的红色星号",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "show-message",
        "explain": "是否显示校验错误信息",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "inline-message",
        "explain": "是否以行内形式展示校验信息",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
	  {
        "parameter": "status-icon",
        "explain": "是否在输入框中显示校验结果反馈图标",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "validate-on-rule-change",
        "explain": "是否在 rules 属性改变后立即触发一次验证",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "size",
        "explain": "用于控制该表单内组件的尺寸",
        "type": "string",
        "optional": "medium / small / mini",
        "default":"—"
      },
      {
        "parameter": "disabled",
        "explain": "是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      }
    ],
    "methods": [
      {
        "name": "validate",
        "explain": "对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise",
        "parameter": "Function(callback: Function(boolean, object))"
      },
      {
        "name": "validateField",
        "explain": "对部分表单字段进行校验的方法",
        "parameter": "Function(props: array)"
      },
      {
        "name": "resetFields",
        "explain": "对整个表单进行重置，将所有字段值重置为初始值并移除校验结果",
        "parameter": "—"
      },
      {
        "name": "clearValidate",
        "explain": "移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果",
        "parameter": "Function(props: array)"
      }
	  ],
    "events": [
      {
        "name": 'validate',
        "explain": '任一表单项被校验后触发',
        "parameter": '被校验的表单项 prop 值，校验是否通过，错误消息（如果存在）'
      }
    ],
    "itemAttributes": [
      {
        "parameter": "prop",
        "explain": "表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的",
        "type": "string",
        "optional": "传入 Form 组件的 model 中的字段",
        "default":"—"
      },
      {
        "parameter": "label",
        "explain": "标签文本",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "label-width",
        "explain": "表单域标签的的宽度，例如 '50px'",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "required",
        "explain": "是否必填，如不设置，则会根据校验规则自动生成",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "rules",
        "explain": "表单验证规则",
        "type": "object",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "error",
        "explain": "表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "show-message",
        "explain": "是否显示校验错误信息",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "inline-message",
        "explain": "是否以行内形式展示校验信息",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "size",
        "explain": "用于控制该表单域下组件的尺寸",
        "type": "string",
        "optional": "medium / small / mini",
        "default":"—"
      }
    ],
    "itemSlot": [
      {
        "name": "—",
        "explain": "Form Item 的内容"
      },
      {
        "name": "label",
        "explain": "标签文本的内容"
      }
    ],
    "scopedSlot": [
      {
        "name": "error",
        "explain": "自定义表单校验信息的显示方式，参数为 { error }"
      }
    ],
    "itemMethods": [
      {
        "name": "resetField",
        "explain": "对该表单项进行重置，将其值重置为初始值并移除校验结果",
        "parameter": "—"
      },
      {
        "name": "clearValidate",
        "explain": "移除该表单项的校验结果",
        "parameter": "—"
      }
    ]
  }
)
Mock.mock(
  'http://layout',
  {
    "rowAttributes": [
      {
        "parameter": "gutter",
        "explain": "栅格间隔",
        "type": "number",
        "optional": "—",
        "default":"0"
      },
      {
        "parameter": "type",
        "explain": "布局模式，可选 flex，现代浏览器下有效",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "justify",
        "explain": "flex 布局下的水平排列方式",
        "type": "string",
        "optional": "start/end/center/space-around/space-between",
        "default":"start"
      },
      {
        "parameter": "align",
        "explain": "lex 布局下的垂直排列方式",
        "type": "string",
        "optional": "top/middle/bottom",
        "default":"top"
      },
      {
        "parameter": "tag",
        "explain": "自定义元素标签",
        "type": "string",
        "optional": "—",
        "default":"div"
      }
    ],
    "colAttributes": [
      {
        "parameter": "span",
        "explain": "栅格占据的列数",
        "type": "number",
        "optional": "—",
        "default":"24"
      },
      {
        "parameter": "offset",
        "explain": "栅格左侧的间隔格数",
        "type": "number",
        "optional": "—",
        "default":"0"
      },
      {
        "parameter": "push",
        "explain": "栅格向右移动格数",
        "type": "number",
        "optional": "—",
        "default":"0"
      },
      {
        "parameter": "pull",
        "explain": "栅格向左移动格数",
        "type": "number",
        "optional": "—",
        "default":"0"
      },
      {
        "parameter": "xs",
        "explain": "<768px 响应式栅格数或者栅格属性对象",
        "type": "number/object (例如： {span: 4, offset: 4})",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "sm",
        "explain": "≥768px 响应式栅格数或者栅格属性对象",
        "type": "number/object (例如： {span: 4, offset: 4})",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "md",
        "explain": "≥992px 响应式栅格数或者栅格属性对象",
        "type": "number/object (例如： {span: 4, offset: 4})",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "lg",
        "explain": "≥1200px 响应式栅格数或者栅格属性对象",
        "type": "number/object (例如： {span: 4, offset: 4})",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "xl",
        "explain": "≥1920px 响应式栅格数或者栅格属性对象",
        "type": "number/object (例如： {span: 4, offset: 4})",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "tag",
        "explain": "自定义元素标签",
        "type": "string",
        "optional": "—",
        "default":"div"
      },
    ]
  }
)
Mock.mock(
  'http://dialog',
  {
    "attributes": [
      {
        "parameter": "visible",
        "explain": "是否显示 Dialog，支持 .sync 修饰符",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "title",
        "explain": "Dialog 的标题，也可通过具名 slot （见下表）传入",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "width",
        "explain": "Dialog 的宽度",
        "type": "string",
        "optional": "—",
        "default":"50%"
      },
      {
        "parameter": "fullscreen",
        "explain": "是否为全屏 Dialog",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "top",
        "explain": "Dialog CSS 中的 margin-top 值",
        "type": "string",
        "optional": "—",
        "default":"15vh"
      },
      {
        "parameter": "modal",
        "explain": "是否需要遮罩层",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "modal-append-to-body",
        "explain": "遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "append-to-body",
        "explain": "Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "lock-scroll",
        "explain": "是否在 Dialog 出现时将 body 滚动锁定",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "custom-class",
        "explain": "Dialog 的自定义类名",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "close-on-click-modal",
        "explain": "是否可以通过点击 modal 关闭 Dialog",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "close-on-press-escape",
        "explain": "是否可以通过按下 ESC 关闭 Dialog",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "show-close",
        "explain": "是否显示关闭按钮",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "before-close",
        "explain": "关闭前的回调，会暂停 Dialog 的关闭",
        "type": "function(done)，done 用于关闭 Dialog",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "center",
        "explain": "是否对头部和底部采用居中布局",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      }
    ],
    "slot": [
      {
        "name": "—",
        "explain": "Dialog 的内容"
      },
      {
        "name": "title",
        "explain": "Dialog 标题区的内容"
      },
      {
        "name": "footer",
        "explain": "Dialog 标题区的内容"
      }
    ],
    "events": [
      {
        "name": "open",
        "explain": "Dialog 打开的回调",
        "parameter": "—"
      },
      {
        "name": "opened",
        "explain": "Dialog 打开动画结束时的回调",
        "parameter": "—"
      },
      {
        "name": "close",
        "explain": "Dialog 关闭的回调",
        "parameter": "—"
      },
      {
        "name": "closed",
        "explain": "Dialog 关闭动画结束时的回调",
        "parameter": "—"
      }
    ]
  }
)
Mock.mock(
  'http://tooltip',
  {
    "attributes": [
      {
        "parameter": "effect",
        "explain": "默认提供的主题",
        "type": "string",
        "optional": "dark/light",
        "default":"dark"
      },
      {
        "parameter": "content",
        "explain": "显示的内容，也可以通过 slot#content 传入 DOM",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "placement",
        "explain": "Tooltip 的出现位置",
        "type": "string",
        "optional": "top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end",
        "default":"bottom"
      },
      {
        "parameter": "value / v-model",
        "explain": "状态是否可见",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "disabled",
        "explain": "Tooltip 是否可用",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "offset",
        "explain": "出现位置的偏移量",
        "type": "number",
        "optional": "—",
        "default":"0"
      },
      {
        "parameter": "transition",
        "explain": "定义渐变动画",
        "type": "string",
        "optional": "—",
        "default":"el-fade-in-linear"
      },
      {
        "parameter": "visible-arrow",
        "explain": "是否显示 Tooltip 箭头，更多参数可见Vue-popper",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "popper-options",
        "explain": "popper.js 的参数",
        "type": "object",
        "optional": "参考 popper.js 文档",
        "default":"{ boundariesElement: 'body', gpuAcceleration: false }"
      },
      {
        "parameter": "open-delay",
        "explain": "延迟出现，单位毫秒",
        "type": "number",
        "optional": "—",
        "default":"0"
      },
      {
        "parameter": "manual",
        "explain": "手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "popper-class",
        "explain": "为 Tooltip 的 popper 添加类名",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "enterable",
        "explain": "鼠标是否可进入到 tooltip 中",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "hide-after",
        "explain": "Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏",
        "type": "number",
        "optional": "—",
        "default":"0"
      }
    ]
  }
)
Mock.mock(
  'http://collapse',
  {
    "attributes": [
      {
        "parameter": "value / v-model",
        "explain": "当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)",
        "type": "string / array",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "accordion",
        "explain": "是否手风琴模式",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      }
    ],
    "events": [
      {
        "name": "change",
        "explain": "当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为string，否则为array)",
        "parameter": "(activeNames: array / string)"
      }
    ],
    "itemAttributes": [
      {
        "parameter": "name",
        "explain": "唯一标志符",
        "type": "string/number",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "title",
        "explain": "面板标题",
        "type": "string",
        "optional": "—",
        "default":"—"
      }
    ]
  }
)
Mock.mock(
  'http://timePicker',
  {
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
)
Mock.mock(
  'http://datePicker',
  {
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
)
Mock.mock(
  'http://DateTimePicker',
  {
    "attributes": [
      {
        "parameter": "value / v-model",
        "explain": "绑定值",
        "type": "date(DateTimePicker) / array(DateTimeRangePicker)",
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
        "parameter": "time-arrow-control",
        "explain": "是否使用箭头进行时间选择",
        "type": "boolean",
        "optional": "—",
        "default":"false"
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
        "explain": "DateTimePicker 下拉框的类名",
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
      }
    ]
  }
)
Mock.mock(
  'http://table',
  {
    "attributes": [
      {
        "parameter": "data",
        "explain": "显示的数据",
        "type": "array",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "height",
        "explain": "Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。",
        "type": "string/number",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "max-height",
        "explain": "Table的最高度",
        "type": "string/number",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "stripe",
        "explain": "是否为斑马纹 table",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "border",
        "explain": "是否带有纵向边框",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "size",
        "explain": "Table 的尺寸",
        "type": "string",
        "optional": "medium / small / mini",
        "default":"—"
      },
      {
        "parameter": "fit",
        "explain": "列的宽度是否自撑开",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "show-header",
        "explain": "是否显示表头",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "highlight-current-row",
        "explain": "是否要高亮当前行",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "current-row-key",
        "explain": "当前行的key,只写属性",
        "type": "String,Number",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "row-class-name",
        "explain": "行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。",
        "type": "Function({row, rowIndex})/String",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "row-style",
        "explain": "行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。",
        "type": "Function({row, rowIndex})/Object",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "cell-class-name",
        "explain": "单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。",
        "type": "Function({row, column, rowIndex, columnIndex})/String",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "cell-style",
        "explain": "单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。",
        "type": "Function({row, column, rowIndex, columnIndex})/Object",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "header-row-class-name",
        "explain": "表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。",
        "type": "Function({row, rowIndex})/String",
        "optional": "—",
        "default":"'-'"
      },
      {
        "parameter": "header-row-style",
        "explain": "表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。",
        "type": "Function({row, rowIndex})/Object",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "header-cell-class-name",
        "explain": "表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。",
        "type": "Function({row, column, rowIndex, columnIndex})/String",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "header-cell-style",
        "explain": "表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。",
        "type": "Function({row, column, rowIndex, columnIndex})/Object",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "row-key",
        "explain": "行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能的情况下，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。",
        "type": "Function(row)/String",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "empty-text",
        "explain": "空数据时显示的文本内容，也可以通过 slot='empty' 设置",
        "type": "string",
        "optional": "—",
        "default":"暂无数据"
      },
      {
        "parameter": "default-expand-all",
        "explain": "是否默认展开所有行，当 Table 中存在 type='expand' 的 Column 的时候有效",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "expand-row-keys",
        "explain": "可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。",
        "type": "array",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "default-sort",
        "explain": "默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序",
        "type": "object",
        "optional": "order: ascending, descending",
        "default":"如果只指定了prop, 没有指定order, 则默认顺序是ascending"
      },
      {
        "parameter": "tooltip-effect",
        "explain": "tooltip effect 属性",
        "type": "string",
        "optional": "dark/light",
        "default":"—"
      },
      {
        "parameter": "show-summary",
        "explain": "是否在表尾显示合计行",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "sum-text",
        "explain": "合计行第一列的文本",
        "type": "string",
        "optional": "—",
        "default":"合计"
      },
      {
        "parameter": "summary-method",
        "explain": "自定义的合计计算方法",
        "type": "Function({ columns, data })",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "span-method",
        "explain": "合并行或列的计算方法",
        "type": "Function({ row, column, rowIndex, columnIndex })",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "select-on-indeterminate",
        "explain": "在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      }
    ],
    "events": [
      {
        "name": "select",
        "explain": "当用户手动勾选数据行的 Checkbox 时触发的事件",
        "parameter": "selection, row"
      },
      {
        "name": "select-all",
        "explain": "当用户手动勾选全选 Checkbox 时触发的事件",
        "parameter": "selection"
      },
      {
        "name": "selection-change",
        "explain": "当选择项发生变化时会触发该事件",
        "parameter": "selection"
      },
      {
        "name": "cell-mouse-enter",
        "explain": "当单元格 hover 进入时会触发该事件",
        "parameter": "row, column, cell, event"
      },
      {
        "name": "cell-mouse-leave",
        "explain": "当单元格 hover 退出时会触发该事件",
        "parameter": "row, column, cell, event"
      },
      {
        "name": "cell-click",
        "explain": "当某个单元格被点击时会触发该事件",
        "parameter": "row, column, cell, event"
      },
      {
        "name": "cell-dblclick",
        "explain": "当某个单元格被双击击时会触发该事件",
        "parameter": "row, column, cell, event"
      },
      {
        "name": "row-click",
        "explain": "当某一行被点击时会触发该事件",
        "parameter": "row, column, event"
      },
      {
        "name": "row-contextmenu",
        "explain": "当某一行被鼠标右键点击时会触发该事件",
        "parameter": "row, column, event"
      },
      {
        "name": "row-dblclick",
        "explain": "当某一行被双击时会触发该事件",
        "parameter": "row, column, event"
      },
      {
        "name": "header-click",
        "explain": "当某一列的表头被点击时会触发该事件",
        "parameter": "column, event"
      },
      {
        "name": "header-contextmenu",
        "explain": "当某一列的表头被鼠标右键点击时触发该事件",
        "parameter": "column, event"
      },
      {
        "name": "sort-change",
        "explain": "当表格的排序条件发生变化的时候会触发该事件",
        "parameter": "{ column, prop, order }"
      },
      {
        "name": "filter-change",
        "explain": "当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。",
        "parameter": "filters"
      },
      {
        "name": "current-change",
        "explain": "当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性",
        "parameter": "currentRow, oldCurrentRow"
      },
      {
        "name": "header-dragend",
        "explain": "当拖动表头改变了列的宽度的时候会触发该事件",
        "parameter": "newWidth, oldWidth, column, event"
      },
      {
        "name": "expand-change",
        "explain": "当用户对某一行展开或者关闭的时候会触发该事件",
        "parameter": "row, expandedRows"
      }
    ],
    "methods": [
      {
        "name": "clearSelection",
        "explain": "用于多选表格，清空用户的选择",
        "parameter": "—"
      },
      {
        "name": "toggleRowSelection",
        "explain": "用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）",
        "parameter": "row, selected"
      },
      {
        "name": "toggleAllSelection",
        "explain": "用于多选表格，切换所有行的选中状态",
        "parameter": "—"
      },
      {
        "name": "toggleRowExpansion",
        "explain": "用于可展开表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）",
        "parameter": "row, expanded"
      },
      {
        "name": "setCurrentRow",
        "explain": "	用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。",
        "parameter": "row"
      },
      {
        "name": "clearSort",
        "explain": "用于清空排序条件，数据会恢复成未排序的状态",
        "parameter": "—"
      },
      {
        "name": "clearFilter",
        "explain": "不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件",
        "parameter": "columnKey"
      },
      {
        "name": "doLayout",
        "explain": "对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法",
        "parameter": "—"
      },
      {
        "name": "sort",
        "explain": "手动对 Table 进行排序。参数prop属性指定排序列，order指定排序顺序。",
        "parameter": "prop: string, order: string"
      }
    ],
    "slot": [
      {
        "name": "append",
        "explain": "插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。"
      }
    ],
    "columnAttributes": [
      {
        "parameter": "type",
        "explain": "对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮",
        "type": "string",
        "optional": "selection/index/expand",
        "default":"—"
      },
      {
        "parameter": "index",
        "explain": "如果设置了 type=index，可以通过传递 index 属性来自定义索引",
        "type": "number, Function(index)",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "column-key",
        "explain": "column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "label",
        "explain": "显示的标题",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "prop",
        "explain": "对应列内容的字段名，也可以使用 property 属性",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "width",
        "explain": "对应列的宽度",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "min-width",
        "explain": "对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "fixed",
        "explain": "列是否固定在左侧或者右侧，true 表示固定在左侧",
        "type": "string, boolean",
        "optional": "true, left, right",
        "default":"—"
      },
      {
        "parameter": "render-header",
        "explain": "列标题 Label 区域渲染使用的 Function",
        "type": "Function(h, { column, $index })",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "sortable",
        "explain": "对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件",
        "type": "boolean, string",
        "optional": "true, false, 'custom'",
        "default":"false"
      },
      {
        "parameter": "sort-method",
        "explain": "对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致",
        "type": "Function(a, b)",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "sort-by",
        "explain": "指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推",
        "type": "String/Array/Function(row, index)",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "sort-orders",
        "explain": "数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序",
        "type": "array",
        "optional": "数组中的元素需为以下三者之一：ascending 表示升序，descending 表示降序，null 表示还原为原始顺序",
        "default":"['ascending', 'descending', null]"
      },
      {
        "parameter": "resizable",
        "explain": "对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "formatter",
        "explain": "用来格式化内容",
        "type": "Function(row, column, cellValue, index)",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "show-overflow-tooltip",
        "explain": "当内容过长被隐藏时显示 tooltip",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "align",
        "explain": "对齐方式",
        "type": "string",
        "optional": "left/center/right",
        "default":"left"
      },
      {
        "parameter": "header-align",
        "explain": "表头对齐方式，若不设置该项，则使用表格的对齐方式",
        "type": "string",
        "optional": "left/center/right",
        "default":"—"
      },
      {
        "parameter": "class-name",
        "explain": "列的 className",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "label-class-name",
        "explain": "当前列标题的自定义类名",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "selectable",
        "explain": "仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选",
        "type": "Function(row, index)",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "reserve-selection",
        "explain": "仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "filters",
        "explain": "数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。",
        "type": "Array[{ text, value }]",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "filter-placement",
        "explain": "过滤弹出框的定位",
        "type": "string",
        "optional": "与 Tooltip 的 placement 属性相同",
        "default":"—"
      },
      {
        "parameter": "filter-multiple",
        "explain": "数据过滤的选项是否多选",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "filter-method",
        "explain": "数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。",
        "type": "Function(value, row, column)",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "filtered-value",
        "explain": "选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性",
        "type": "array",
        "optional": "—",
        "default":"—"
      }
    ],
    "ScopedSlot": [
      {
        "name": "—",
        "explain": "自定义列的内容，参数为 { row, column, $index }"
      },
      {
        "name": "header",
        "explain": "自定义表头的内容. 参数为 { column, $index }"
      }
    ]
  }
)
Mock.mock(
  'http://tree',
  {
    "attributes": [
      {
        "parameter": "data",
        "explain": "展示数据",
        "type": "array",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "empty-text",
        "explain": "内容为空的时候展示的文本",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "node-key",
        "explain": "每个树节点用来作为唯一标识的属性，整棵树应该是唯一的",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "props",
        "explain": "配置选项，具体看下表",
        "type": "object",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "render-after-expand",
        "explain": "是否在第一次展开某个树节点后才渲染其子节点",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "load",
        "explain": "加载子树数据的方法，仅当 lazy 属性为true 时生效",
        "type": "function(node, resolve)",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "render-content",
        "explain": "树节点的内容区的渲染 Function",
        "type": "Function(h, { node, data, store }",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "highlight-current",
        "explain": "是否高亮当前选中节点，默认值是 false。",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "default-expand-all",
        "explain": "是否默认展开所有节点",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "expand-on-click-node",
        "explain": "是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "check-on-click-node",
        "explain": "是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "auto-expand-parent",
        "explain": "展开子节点的时候是否自动展开父节点",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "default-expanded-keys",
        "explain": "默认展开的节点的 key 的数组",
        "type": "array",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "show-checkbox",
        "explain": "节点是否可被选择",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "check-strictly",
        "explain": "在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "default-checked-keys",
        "explain": "默认勾选的节点的 key 的数组",
        "type": "array",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "current-node-key",
        "explain": "当前选中的节点",
        "type": "string, number",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "filter-node-method",
        "explain": "对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏",
        "type": "Function(value, data, node)",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "accordion",
        "explain": "是否每次只打开一个同级树节点展开",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "indent",
        "explain": "相邻级节点间的水平缩进，单位为像素",
        "type": "number",
        "optional": "—",
        "default":"16"
      },
      {
        "parameter": "icon-class",
        "explain": "自定义树节点的图标",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "lazy",
        "explain": "是否懒加载子节点，需与 load 方法结合使用",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "draggable",
        "explain": "是否开启拖拽节点功能",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "allow-drag",
        "explain": "判断节点能否被拖拽",
        "type": "Function(node)",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "allow-drop",
        "explain": "拖拽时判定目标节点能否被放置。type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后",
        "type": "Function(draggingNode, dropNode, type)",
        "optional": "—",
        "default":"—"
      }
    ],
    "props": [
      {
        "parameter": "label",
        "explain": "指定节点标签为节点对象的某个属性值",
        "type": "string, function(data, node)",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "children",
        "explain": "指定子树为节点对象的某个属性值",
        "type": "string",
        "optional": "—",
        "default":"—"
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
    "methods": [
      {
        "name": "filter",
        "explain": "对树节点进行筛选操作",
        "parameter": "接收一个任意类型的参数，该参数会在 filter-node-method 中作为第一个参数"
      },
      {
        "name": "updateKeyChildren",
        "explain": "通过 keys 设置节点子元素，使用此方法必须设置 node-key 属性",
        "parameter": "(key, data) 接收两个参数，1. 节点 key 2. 节点数据的数组"
      },
      {
        "name": "getCheckedNodes",
        "explain": "若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点所组成的数组",
        "parameter": "(leafOnly, includeHalfChecked) 接收两个 boolean 类型的参数，1. 是否只是叶子节点，默认值为 false 2. 是否包含半选节点，默认值为 false"
      },
      {
        "name": "setCheckedNodes",
        "explain": "设置目前勾选的节点，使用此方法必须设置 node-key 属性",
        "parameter": "(nodes) 接收勾选节点数据的数组"
      },
      {
        "name": "getCheckedKeys",
        "explain": "若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点的 key 所组成的数组",
        "parameter": "(leafOnly) 接收一个 boolean 类型的参数，若为 true 则仅返回被选中的叶子节点的 keys，默认值为 false"
      },
      {
        "name": "setCheckedKeys",
        "explain": "通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性",
        "parameter": "(keys, leafOnly) 接收两个参数，1. 勾选节点的 key 的数组 2. boolean 类型的参数，若为 true 则仅设置叶子节点的选中状态，默认值为 false"
      },
      {
        "name": "setChecked",
        "explain": "通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性",
        "parameter": "(key/data, checked, deep) 接收三个参数，1. 勾选节点的 key 或者 data 2. boolean 类型，节点是否选中 3. boolean 类型，是否设置子节点 ，默认为 false"
      },
      {
        "name": "getHalfCheckedNodes",
        "explain": "若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点所组成的数组",
        "parameter": "—"
      },
      {
        "name": "getHalfCheckedKeys",
        "explain": "若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点的 key 所组成的数组",
        "parameter": "—"
      },
      {
        "name": "getCurrentKey",
        "explain": "获取当前被选中节点的 key，使用此方法必须设置 node-key 属性，若没有节点被选中则返回 null",
        "parameter": "—"
      },
      {
        "name": "getCurrentNode",
        "explain": "获取当前被选中节点的 data，若没有节点被选中则返回 null",
        "parameter": "—"
      },
      {
        "name": "setCurrentKey",
        "explain": "通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性",
        "parameter": "(key) 待被选节点的 key，若为 null 则取消当前高亮的节点"
      },
      {
        "name": "setCurrentNode",
        "explain": "通过 node 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性",
        "parameter": "(node) 待被选节点的 node"
      },
      {
        "name": "getNode",
        "explain": "根据 data 或者 key 拿到 Tree 组件中的 node",
        "parameter": "(data) 要获得 node 的 key 或者 data"
      },
      {
        "name": "remove",
        "explain": "删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性",
        "parameter": "(data) 要删除的节点的 data 或者 node"
      },
      {
        "name": "append",
        "explain": "为 Tree 中的一个节点追加一个子节点",
        "parameter": "(data, parentNode) 接收两个参数，1. 要追加的子节点的 data 2. 子节点的 parent 的 data、key 或者 node"
      },
      {
        "name": "insertBefore",
        "explain": "	为 Tree 的一个节点的前面增加一个节点",
        "parameter": "(data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的后一个节点的 data、key 或者 node"
      },
      {
        "name": "insertAfter",
        "explain": "为 Tree 的一个节点的后面增加一个节点",
        "parameter": "(data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的前一个节点的 data、key 或者 node"
      }
    ],
    "events": [
      {
        "name": "node-click",
        "explain": "节点被点击时的回调",
        "parameter": "共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。"
      },
      {
        "name": "node-contextmenu",
        "explain": "当某一节点被鼠标右键点击时会触发该事件",
        "parameter": "共四个参数，依次为：event、传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。"
      },
      {
        "name": "check-change",
        "explain": "节点选中状态发生变化时的回调",
        "parameter": "共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点"
      },
      {
        "name": "check",
        "explain": "当复选框被点击的时候触发",
        "parameter": "共两个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性"
      },
      {
        "name": "current-change",
        "explain": "当前选中节点变化时触发的事件",
        "parameter": "共两个参数，依次为：当前节点的数据，当前节点的 Node 对象"
      },
      {
        "name": "node-expand",
        "explain": "节点被展开时触发的事件",
        "parameter": "共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身"
      },
      {
        "name": "node-collapse",
        "explain": "节点被关闭时触发的事件",
        "parameter": "共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身"
      },
      {
        "name": "node-drag-start",
        "explain": "节点开始拖拽时触发的事件",
        "parameter": "共两个参数，依次为：被拖拽节点对应的 Node、event"
      },
      {
        "name": "node-drag-enter",
        "explain": "拖拽进入其他节点时触发的事件",
        "parameter": "共三个参数，依次为：被拖拽节点对应的 Node、所进入节点对应的 Node、event"
      },
      {
        "name": "node-drag-leave",
        "explain": "拖拽离开某个节点时触发的事件",
        "parameter": "共三个参数，依次为：被拖拽节点对应的 Node、所离开节点对应的 Node、event"
      },
      {
        "name": "node-drag-over",
        "explain": "在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）",
        "parameter": "共三个参数，依次为：被拖拽节点对应的 Node、当前进入节点对应的 Node、event"
      },
      {
        "name": "node-drag-end",
        "explain": "拖拽结束时（可能未成功）触发的事件",
        "parameter": "共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点（可能为空）、被拖拽节点的放置位置（before、after、inner）、event"
      },
      {
        "name": "node-drop",
        "explain": "拖拽成功完成时触发的事件",
        "parameter": "共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点、被拖拽节点的放置位置（before、after、inner）、event"
      }
    ],
    "slot": [
      {
        "name": "—",
        "explain": "自定义树节点的内容，参数为 { node, data }"
      }
    ],
  }
)
Mock.mock(
  'http://select',
  {
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
)
Mock.mock(
  'http://cascader',
  {
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
        "parameter": "expand-trigger",
        "explain": "次级菜单的展开方式",
        "type": "string",
        "optional": "click / hover",
        "default":"click"
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
        "parameter": "debounce",
        "explain": "搜索关键词输入的去抖延迟，毫秒",
        "type": "number",
        "optional": "—",
        "default":"300"
      },
      {
        "parameter": "change-on-select",
        "explain": "是否允许选择任意一级的选项",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "sie",
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
      }
    ],
    "props": [
      {
        "parameter": "value",
        "explain": "指定选项的值为选项对象的某个属性值",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "label",
        "explain": "	指定选项标签为选项对象的某个属性值",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "children",
        "explain": "指定选项的子选项为选项对象的某个属性值",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "disabled",
        "explain": "指定选项的禁用为选项对象的某个属性值",
        "type": "string",
        "optional": "—",
        "default":"—"
      }
    ],
    "events": [
      {
        "name": "change",
        "explain": "当绑定值变化时触发的事件",
        "parameter": "当前值"
      },
      {
        "name": "active-item-change",
        "explain": "当父级选项变化时触发的事件，仅在 change-on-select 为 false 时可用",
        "parameter": "各父级选项组成的数组"
      },
      {
        "name": "blur",
        "explain": "在 Cascader 失去焦点时触发",
        "parameter": "(event: Event)"
      },
      {
        "name": "focus",
        "explain": "在 Cascader 获得焦点时触发",
        "parameter": "(event: Event)"
      },
      {
        "name": "blur",
        "explain": "当 input 失去焦点时触发",
        "parameter": "(event: Event)"
      },
      {
        "name": "visible-change",
        "explain": "下拉框出现/隐藏时触发",
        "parameter": "出现则为 true，隐藏则为 false"
      }
    ]
  }
)
Mock.mock(
  'http://dropdown',
  {
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
)
Mock.mock(
  'http://upload',
  {
    "attributes": [
      {
        "parameter": "action",
        "explain": "必选参数，上传的地址",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "headers",
        "explain": "设置上传的请求头部",
        "type": "object",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "multiple",
        "explain": "是否支持多选文件",
        "type": "boolean",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "data",
        "explain": "上传时附带的额外参数",
        "type": "object",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "name",
        "explain": "上传的文件字段名",
        "type": "string",
        "optional": "—",
        "default":"file"
      },
      {
        "parameter": "with-credentials",
        "explain": "支持发送 cookie 凭证信息",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "show-file-list",
        "explain": "是否显示已上传文件列表",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "drag",
        "explain": "是否启用拖拽上传",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "accept",
        "explain": "接受上传的文件类型（thumbnail-mode 模式下此参数无效）",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "on-preview",
        "explain": "点击文件列表中已上传的文件时的钩子",
        "type": "function(file)",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "on-remove",
        "explain": "文件列表移除文件时的钩子",
        "type": "function(file, fileList)",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "on-success",
        "explain": "文件上传成功时的钩子",
        "type": "function(response, file, fileList)",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "on-error",
        "explain": "文件上传失败时的钩子",
        "type": "function(err, file, fileList)",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "on-progress",
        "explain": "文件上传时的钩子",
        "type": "function(event, file, fileList)",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "on-change",
        "explain": "文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用",
        "type": "function(file, fileList)",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "before-upload",
        "explain": "上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。",
        "type": "function(file)",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "before-remove",
        "explain": "删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止上传。",
        "type": "function(file, fileList)",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "list-type",
        "explain": "文件列表的类型",
        "type": "string",
        "optional": "text/picture/picture-card",
        "default":"text"
      },
      {
        "parameter": "auto-upload",
        "explain": "是否在选取文件后立即进行上传",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "file-list",
        "explain": "上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]",
        "type": "array",
        "optional": "—",
        "default":"[]"
      },
      {
        "parameter": "http-request",
        "explain": "覆盖默认的上传行为，可以自定义上传的实现",
        "type": "function",
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
        "parameter": "limit",
        "explain": "最大允许上传个数",
        "type": "number",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "on-exceed",
        "explain": "文件超出个数限制时的钩子",
        "type": "function(files, fileList)",
        "optional": "—",
        "default":"—"
      }
    ],
    "methods": [
      {
        "name": "clearFiles",
        "explain": "	清空已上传的文件列表（该方法不支持在 before-upload 中调用）",
        "parameter": "—"
      },
      {
        "name": "abort",
        "explain": "取消上传请求",
        "parameter": "（ file: fileList 中的 file 对象 ）"
      },
      {
        "name": "submit",
        "explain": "手动上传文件列表",
        "parameter": "—"
      }
    ],
    "slot": [
      {
        "name": "trigger",
        "explain": "触发文件选择框的内容"
      },
      {
        "name": "tip",
        "explain": "提示说明文字"
      }
    ]
  }
)
Mock.mock(
  'http://tabs',
  {
    "attributes": [
      {
        "parameter": "value / v-model",
        "explain": "绑定值，选中选项卡的 name",
        "type": "string",
        "optional": "—",
        "default":"第一个选项卡的 name"
      },
      {
        "parameter": "type",
        "explain": "风格类型",
        "type": "string",
        "optional": "card/border-card",
        "default":"—"
      },
      {
        "parameter": "closable",
        "explain": "标签是否可关闭",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "addable",
        "explain": "标签是否可增加",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "editable",
        "explain": "标签是否同时可增加和关闭",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "tab-position",
        "explain": "选项卡所在位置",
        "type": "string",
        "optional": "top/right/bottom/left",
        "default":"top"
      },
      {
        "parameter": "stretch",
        "explain": "标签的宽度是否自撑开",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "before-leave",
        "explain": "切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。",
        "type": "Function(activeName, oldActiveName)",
        "optional": "—",
        "default":"—"
      }
    ],
    "events": [
      {
        "name": "tab-click",
        "explain": "tab 被选中时触发",
        "parameter": "被选中的标签 tab 实例"
      },
      {
        "name": "tab-remove",
        "explain": "点击 tab 移除按钮后触发",
        "parameter": "被删除的标签的 name"
      },
      {
        "name": "tab-add",
        "explain": "点击 tabs 的新增按钮后触发",
        "parameter": "—"
      },
      {
        "name": "edit",
        "explain": "点击 tabs 的新增按钮或 tab 被关闭后触发",
        "parameter": "(targetName, action)"
      }
    ],
    "TabAttributes": [
      {
        "parameter": "label",
        "explain": "选项卡标题",
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
        "explain": "与选项卡 activeName 对应的标识符，表示选项卡别名",
        "type": "string",
        "optional": "—",
        "default":"该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1'"
      },
      {
        "parameter": "closable",
        "explain": "标签是否可关闭",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "lazy",
        "explain": "标签是否延迟渲染",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      }
    ]
  }
)
Mock.mock(
  'http://timeline',
  {
    "attributes": [
      {
        "parameter": "reverse",
        "explain": "指定节点排序方向，默认为正序",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      }
    ],
    "slot": [
      {
        "name": "—",
        "explain": "Timeline-Item 的内容"
      },
      {
        "name": "dot",
        "explain": "自定义节点"
      }
    ],
    "TimelineAttributes": [
      {
        "parameter": "timestamp",
        "explain": "时间戳",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "hide-timestamp",
        "explain": "是否隐藏时间戳",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "placement",
        "explain": "时间戳位置",
        "type": "string",
        "optional": "top / bottom",
        "default":"bottom"
      },
      {
        "parameter": "type",
        "explain": "节点类型",
        "type": "string",
        "optional": "primary / success / warning / danger / info",
        "default":"—"
      },
      {
        "parameter": "color",
        "explain": "节点颜色",
        "type": "string",
        "optional": "hsl / hsv / hex / rgb",
        "default":"—"
      },
      {
        "parameter": "size",
        "explain": "节点尺寸",
        "type": "string",
        "optional": "normal / large",
        "default":"normal"
      },
      {
        "parameter": "icon",
        "explain": "节点图标",
        "type": "string",
        "optional": "—",
        "default":"—"
      }
    ]
  }
)
Mock.mock(
  'http://breadcrumb',
  {
    "attributes": [
      {
        "parameter": "separator",
        "explain": "分隔符",
        "type": "string",
        "optional": "—",
        "default":"斜杠'/'"
      },
      {
        "parameter": "separator-class",
        "explain": "图标分隔符 class",
        "type": "string",
        "optional": "—",
        "default":"—"
      }
    ],
    "ItemAttributes": [
      {
        "parameter": "to",
        "explain": "路由跳转对象，同 vue-router 的 to",
        "type": "string/object",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "replace",
        "explain": "在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      }
    ]
  }
)
Mock.mock(
  'http://badge',
  {
    "attributes": [
      {
        "parameter": "value",
        "explain": "显示值",
        "type": "string, number",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "max",
        "explain": "最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型",
        "type": "number",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "is-dot",
        "explain": "小圆点",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "hidden",
        "explain": "隐藏 badge",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "type",
        "explain": "类型",
        "type": "string",
        "optional": "primary / success / warning / danger / info",
        "default":"—"
      }
    ]
  }
)
Mock.mock(
  'http://steps',
  {
    "attributes": [
      {
        "parameter": "space",
        "explain": "每个 step 的间距，不填写将自适应间距。支持百分比",
        "type": "number / string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "direction",
        "explain": "显示方向",
        "type": "string",
        "optional": "	vertical/horizontal",
        "default":"horizontal"
      },
      {
        "parameter": "active",
        "explain": "设置当前激活步骤",
        "type": "number",
        "optional": "—",
        "default":"0"
      },
      {
        "parameter": "process-status",
        "explain": "设置当前步骤的状态",
        "type": "string",
        "optional": "	wait / process / finish / error / success",
        "default":"process"
      },
      {
        "parameter": "finish-status",
        "explain": "设置结束步骤的状态",
        "type": "string",
        "optional": "	wait / process / finish / error / success",
        "default":"finish"
      },
      {
        "parameter": "align-center",
        "explain": "进行居中对齐",
        "type": "string",
        "optional": "	vertical/horizontal",
        "default":"horizontal"
      },
      {
        "parameter": "simple",
        "explain": "是否应用节俭风格",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      }
    ],
    "ItemAttributes": [
      {
        "parameter": "title",
        "explain": "说明",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "description",
        "explain": "描述性文字",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "icon",
        "explain": "图标",
        "type": "传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入",
        "optional": "string",
        "default":"—"
      },
      {
        "parameter": "status",
        "explain": "设置当前步骤的状态，不设置则根据 steps 确定状态",
        "type": "wait / process / finish / error / success",
        "optional": "—",
        "default":"—"
      }
    ],
    "slot": [
      {
        "parameter": "icon",
        "explain": "自定义图标"
      },
      {
        "parameter": "title",
        "explain": "自定义标题"
      },
      {
        "parameter": "description",
        "explain": "自定义描述性文字"
      }
    ]
  }
)
Mock.mock(
  'http://carousel',
  {
    "attributes": [
      {
        "parameter": "height",
        "explain": "走马灯高度",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "initial-index",
        "explain": "初始状态激活的幻灯片的索引，从 0 开始",
        "type": "number",
        "optional": "—",
        "default":"0"
      },
      {
        "parameter": "trigger",
        "explain": "指示器的出发方式",
        "type": "string",
        "optional": "click",
        "default":"—"
      },
      {
        "parameter": "autoplay",
        "explain": "是否自动切换",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "interval",
        "explain": "自动切换的时间间隔，单位为毫秒",
        "type": "number",
        "optional": "—",
        "default":"3000"
      },
      {
        "parameter": "indicator-position",
        "explain": "指示器的位置",
        "type": "string",
        "optional": "	vertical/horizontal",
        "default":"horizontal"
      },
      {
        "parameter": "arrow",
        "explain": "切换箭头的显示时机",
        "type": "string",
        "optional": "	always/hover/never",
        "default":"hover"
      },
      {
        "parameter": "type",
        "explain": "走马灯的类型",
        "type": "string",
        "optional": "card",
        "default":"—"
      },
      {
        "parameter": "loop",
        "explain": "是否循环显示",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      }
    ],
    "ItemAttributes": [
      {
        "parameter": "name",
        "explain": "幻灯片的名字，可用作 setActiveItem 的参数",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "label",
        "explain": "该幻灯片所对应指示器的文本",
        "type": "string",
        "optional": "—",
        "default":"—"
      }
    ],
    "events": [
      {
        "name": "change",
        "explain": "幻灯片切换时触发",
        "parameter": "目前激活的幻灯片的索引，原幻灯片的索引"
      }
    ],
    "methods": [
      {
        "name": "setActiveItem",
        "explain": "手动切换幻灯片",
        "parameter": "需要切换的幻灯片的索引，从 0 开始；或相应 el-carousel-item 的 name 属性值"
      },
      {
        "name": "prev",
        "explain": "切换至上一张幻灯片",
        "parameter": "—"
      },
      {
        "name": "next",
        "explain": "切换至下一张幻灯片",
        "parameter": "—"
      }
    ]
  }
)
Mock.mock(
  'http://loading',
  {
    "attributes": [
      {
        "parameter": "target",
        "explain": "Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点",
        "type": "object/string",
        "optional": "—",
        "default":"document.body"
      },
      {
        "parameter": "body",
        "explain": "同 v-loading 指令中的 body 修饰符",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "fullscreen",
        "explain": "同 v-loading 指令中的 fullscreen 修饰符",
        "type": "boolean",
        "optional": "—",
        "default":"true"
      },
      {
        "parameter": "lock",
        "explain": "同 v-loading 指令中的 lock 修饰符",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "text",
        "explain": "显示在加载图标下方的加载文案",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "spinner",
        "explain": "自定义加载图标类名",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "background",
        "explain": "遮罩背景色",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "customClass",
        "explain": "Loading 的自定义类名",
        "type": "string",
        "optional": "—",
        "default":"—"
      }
    ]
  }
)
Mock.mock(
  'http://drawer',
  {
    "attributes": [
      {
        "parameter": "title",
        "explain": "标题",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "visible",
        "explain": "Drawer 是否可见",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "width",
        "explain": "宽度,在 placement 为 left 或 right 时使用",
        "type": "string",
        "optional": "—",
        "default":"256px"
      },
      {
        "parameter": "height",
        "explain": "高度，在 placement 为 top 或 bottom 时使用",
        "type": "string",
        "optional": "—",
        "default":"256px"
      },
      {
        "parameter": "placement",
        "explain": "抽屉打开的方向",
        "type": "string",
        "optional": "'top' | 'right' | 'bottom' | 'left'",
        "default":"'right'"
      }
    ]
  }
)
Mock.mock(
  'http://message',
  {
    "options": [
      {
        "parameter": "message",
        "explain": "消息文字",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "type",
        "explain": "主题",
        "type": "string",
        "optional": "success/warning/info/error",
        "default":"info"
      },
      {
        "parameter": "iconClass",
        "explain": "自定义图标的类名，会覆盖 type",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "dangerouslyUseHTMLString",
        "explain": "是否将 message 属性作为 HTML 片段处理",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "customClass",
        "explain": "自定义类名",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "duration",
        "explain": "显示时间, 毫秒。设为 0 则不会自动关闭",
        "type": "number",
        "optional": "—",
        "default":"3000"
      },
      {
        "parameter": "showClose",
        "explain": "是否显示关闭按钮",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "center",
        "explain": "文字是否居中",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "onClose",
        "explain": "关闭时的回调函数, 参数为被关闭的 message 实例",
        "type": "function",
        "optional": "—",
        "default":"—"
      }
    ],
    "methods": [
      {
        "name": "close",
        "explain": "关闭当前的 Message"
      }
    ]
  }
)
Mock.mock(
  'http://empty',
  {
    "attributes": [
      {
        "parameter": "image",
        "explain": "设置显示图片，为 string 时表示自定义图片地址。",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "content",
        "explain": "自定义描述内容",
        "type": "String",
        "optional": "—",
        "default":"暂无数据"
      },
      {
        "parameter": "height",
        "explain": "图片大小",
        "type": "string",
        "optional": "—",
        "default":"80px"
      }
    ]
  }
)
Mock.mock(
  'http://tag',
  {
    "attributes": [
      {
        "parameter": "type",
        "explain": "主题",
        "type": "string",
        "optional": "success/info/warning/danger",
        "default":"—"
      },
      {
        "parameter": "closable",
        "explain": "是否可关闭",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "disable-transitions",
        "explain": "是否禁用渐变动画",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "hit",
        "explain": "是否有边框描边",
        "type": "boolean",
        "optional": "—",
        "default":"false"
      },
      {
        "parameter": "color",
        "explain": "背景色",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "size",
        "explain": "尺寸",
        "type": "string",
        "optional": "medium / small / mini",
        "default":"—"
      }
    ],
    "events": [
      {
        "name": "click",
        "explain": "点击 Tag 时触发的事件",
        "parameter": "—"
      },
      {
        "name": "close",
        "explain": "关闭 Tag 时触发的事件",
        "parameter": "—"
      }
    ]
  }
)
Mock.mock(
  'http://card',
  {
    "attributes": [
      {
        "parameter": "header",
        "explain": "设置 header，也可以通过 slot#header 传入 DOM",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "body-style",
        "explain": "设置body的样式",
        "type": "object",
        "optional": "—",
        "default":"{ padding: '20px' }"
      },
      {
        "parameter": "shadow",
        "explain": "设置阴影显示时机",
        "type": "string",
        "optional": "	always / hover / never",
        "default":"always"
      }
    ]
  }
)
Mock.mock(
  'http://statistic',
  {
    "attributes": [
      {
        "parameter": "precision",
        "explain": "数值精度",
        "type": "number",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "prefix",
        "explain": "设置数值的前缀",
        "type": "string",
        "optional": "el-icon-upload2 / el-icon-download",
        "default":"—"
      },
      {
        "parameter": "suffix",
        "explain": "设置数值的后缀",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "title",
        "explain": "数值的标题",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "value",
        "explain": "数字内容",
        "type": "string",
        "optional": "—",
        "default":"—"
      },
      {
        "parameter": "color",
        "explain": "设置字体颜色",
        "type": "string",
        "optional": "—",
        "default":"—"
      }
    ]
  }
)
Mock.mock(
  'http://container',
  {
    "attributes": [
      {
        "parameter": "direction",
        "explain": "子元素的排列方向",
        "type": "string",
        "optional": "horizontal / vertical",
        "default":"子元素中有 el-header 或 el-footer 时为 vertical，否则为 horizontal"
      }
    ],
    "HeaderAttributes": [
      {
        "parameter": "height",
        "explain": "顶栏高度",
        "type": "string",
        "optional": "—",
        "default":"60px"
      }
    ],
    "AsideAttributes": [
      {
        "parameter": "width",
        "explain": "侧边栏宽度",
        "type": "string",
        "optional": "—",
        "default":"300px"
      }
    ],
    "FooterAttributes": [
      {
        "parameter": "height",
        "explain": "底栏高度",
        "type": "string",
        "optional": "—",
        "default":"60px"
      }
    ]
  }
)
