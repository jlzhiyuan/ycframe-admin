document.write("<script language=javascript src='pages/components/dynamicTable/dynamictable.js'></script>");
var defaultFormThead = ['apple', 'banana']
var Table = moduleinit({
	url:'/demos/table/table.html',
	el:'#table',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Table',
            components: {
            	dynamicTable: dynamicTable
	        },
            data() {
            	var validateNameInput = (rule, value, callback) => {
          	      if (!value) {
          	        return callback(new Error('此项必填！'))
          	      } else {
          	        callback()
          	      }
          	    }
                return {
                	checkList: ['date','name'],
                	checklist1: [
                	    {
                	    	label: '时间',    // 表头名称（label与value用来区分当表头显示是汉字的情况下）
                	    	value: 'date',    // 表头字段
                	    	selected: true,  // 是否显示表头
                	    	width: '200',    // 每列宽度
                	    	resizable: true, // 对应列是否可以通过拖动改变宽度
                	    	tooltip: false   // 当内容过长被隐藏时显示 tooltip
                	    },
                	    {
                	    	label: '姓名',   
                	    	value: 'name',
                	    	selected: true,
                	    	width: '',
                	    	resizable: true,
                	    	tooltip: false
                	    },
                	    {
                	    	label: '地址',   
                	    	value: 'address',
                	    	selected: false,
                	    	width: '',
                	    	resizable: true,
                	    	tooltip: false
                	    },
                	    {
                	    	label: '性别',   
                	    	value: 'sex',
                	    	selected: false,
                	    	width: '80',
                	    	resizable:true,
                	    	tooltip: false
                	    },
                	    {
                	    	label: '电话',   
                	    	value: 'phone',
                	    	selected: false,
                	    	width: '',
                	    	resizable: true,
                	    	tooltip: false
                	    }
                	],
                	checktableData: [{
	                    date: '1974-05-05 01:24:00',
	                    name: '王小虎',
	                    address: '上海市普陀区金沙江路 1518 弄',
	                    sex: '男',
	                    phone: '15688901814'
	                  }, 
	                  {
	                    date: '1974-05-05 01:24:00',
	                    name: '理人',
	                    address: '上海市普陀区金沙江路 1518 弄',
	                    sex: '男',
	                    phone: '15688901814'
	                  }, 
	                  {
	                    date: '1974-05-05 01:24:00',
	                    name: '朱亮',
	                    address: '上海市普陀区金沙江路 1518 弄',
	                    sex: '男',
	                    phone: '15688901814'
	                  }, 
	                  {
	                    date: '1974-05-05 01:24:00',
	                    name: '小亮',
	                    address: '上海市普陀区金沙江路 1518 弄',
	                    sex: '男',
	                    phone: '15688901814'
	                  }, 
	                  {
	                    date: '1974-05-05 01:24:00',
	                    name: '发的',
	                    address: '上海市普陀区金沙江路 1518 弄',
	                    sex: '男',
	                    phone: '15688901814'
	                  }, 
	                  {
	                    date: '1974-05-05 01:24:00',
	                    name: '王小虎',
	                    address: '上海市普陀区金沙江路 1518 弄',
	                    sex: '男',
	                    phone: '15688901814'
	                  },
	                  {
	                    date: '1974-05-05 01:24:00',
	                    name: '王小虎',
	                    address: '上海市普陀区金沙江路 1518 弄',
	                    sex: '男',
	                    phone: '15688901814'
	                }],
                	rules: {
            	        nickname: [{ validator: validateNameInput, trigger: 'blur' }],
            	      },
	            	  tableData11: [
	                  {
	                    name: 'fruit-1',
	                    apple: 'apple-10',
	                    banana: 'banana-10',
	                    orange: 'orange-10'
	                  },
	                  {
	                    name: 'fruit-2',
	                    apple: 'apple-20',
	                    banana: 'banana-20',
	                    orange: 'orange-20'
	                  }
	                ],
	                addtableData: [{
	                    date: '1974-05-05 01:24:00',
	                    name: '王小虎',
	                    address: '上海市普陀区金沙江路 1518 弄',
	                    edit: false
	                  }, 
	                  {
	                    date: '1974-05-05 01:24:00',
	                    name: '理人',
	                    address: '上海市普陀区金沙江路 1518 弄',
	                    edit: false
	                  }, 
	                  {
	                    date: '1974-05-05 01:24:00',
	                    name: '朱亮',
	                    address: '上海市普陀区金沙江路 1518 弄',
	                    edit: false
	                  }, 
	                  {
	                    date: '1974-05-05 01:24:00',
	                    name: '小亮',
	                    address: '上海市普陀区金沙江路 1518 弄',
	                    edit: false
	                  }, 
	                  {
	                    date: '1974-05-05 01:24:00',
	                    name: '发的',
	                    address: '上海市普陀区金沙江路 1518 弄',
	                    edit: false
	                  }, 
	                  {
	                    date: '1974-05-05 01:24:00',
	                    name: '王小虎',
	                    address: '上海市普陀区金沙江路 1518 弄',
	                    edit: false
	                  },
	                  {
	                    date: '1974-05-05 01:24:00',
	                    name: '王小虎',
	                    address: '上海市普陀区金沙江路 1518 弄',
	                    edit: false
	                  }],
	                  search: '',
	                  treeTableData: [{
	                      id: 1,
	                      date: '2016-05-02',
	                      name: '王小虎',
	                      address: '上海市普陀区金沙江路 1518 弄'
	                    }, {
	                      id: 2,
	                      date: '2016-05-04',
	                      name: '王小虎',
	                      address: '上海市普陀区金沙江路 1517 弄'
	                    }, {
	                      id: 3,
	                      date: '2016-05-01',
	                      name: '王小虎',
	                      address: '上海市普陀区金沙江路 1519 弄',
	                      hasChildren: true
	                    }, {
	                      id: 4,
	                      date: '2016-05-03',
	                      name: '王小虎',
	                      address: '上海市普陀区金沙江路 1516 弄'
	                    }],
	                key: 1, // table key
	                formTheadOptions: ['apple', 'banana', 'orange'],
	                checkboxVal: defaultFormThead, // checkboxVal
	                formThead: defaultFormThead, // 默认表头 Default header
	                formThead1: ['apple', 'banana', 'orange'],
	            	  scrollDiv: '',
	                  scrollHeight: '',
	                currentRow: null,
	                form: {
	                  name: '',
	                  date: '',
	                  address: '',
	                  id: undefined
	                },
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
	                isSwitch: true,
	                isShow6: true,
	                isShow: true,
	                isShow1: true,
	                isShow2: true,
	                isShow3: true,
	                isShow4: true,
	                isShow5: true,
	                isShow7: true,
	                isShow8: true,
	                isShow9: true,
	                isShow10: true,
	                isShow11: true,
	                isShow12: true,
	                isShow13: true,
	                isShow14: true,
	                isShow15: true,
	                isShow16: true,
	                isShow17: true,
	                isShow18: true,
	                isShow19: true,
	                isShow20: true,
	                isShow21: true,
	                isDialog: false,
	                expandTableData: [{
	                    id: '12987122',
	                    name: '好滋好味鸡蛋仔',
	                    category: '江浙小吃、小吃零食',
	                    desc: '荷兰优质淡奶，奶香浓而不腻',
	                    address: '上海市普陀区真北路',
	                    shop: '王小虎夫妻店',
	                    shopId: '10333'
	                  }, {
	                    id: '12987123',
	                    name: '好滋好味鸡蛋仔',
	                    category: '江浙小吃、小吃零食',
	                    desc: '荷兰优质淡奶，奶香浓而不腻',
	                    address: '上海市普陀区真北路',
	                    shop: '王小虎夫妻店',
	                    shopId: '10333'
	                  }, {
	                    id: '12987125',
	                    name: '好滋好味鸡蛋仔',
	                    category: '江浙小吃、小吃零食',
	                    desc: '荷兰优质淡奶，奶香浓而不腻',
	                    address: '上海市普陀区真北路',
	                    shop: '王小虎夫妻店',
	                    shopId: '10333'
	                  }, {
	                    id: '12987126',
	                    name: '好滋好味鸡蛋仔',
	                    category: '江浙小吃、小吃零食',
	                    desc: '荷兰优质淡奶，奶香浓而不腻',
	                    address: '上海市普陀区真北路',
	                    shop: '王小虎夫妻店',
	                    shopId: '10333'
	                  }],
	                tableData1: [{
	                  date: '2016-05-03',
	                  name: '王小虎',
	                  address: '上海市普陀区金沙江路 1518 弄'
	                }, {
	                  date: '2016-05-02',
	                  name: '王小虎',
	                  address: '上海市普陀区金沙江路 1518 弄'
	                }, {
	                  date: '2016-05-04',
	                  name: '王小虎',
	                  address: '上海市普陀区金沙江路 1518 弄'
	                }, {
	                  date: '2016-05-01',
	                  name: '王小虎',
	                  address: '上海市普陀区金沙江路 1518 弄'
	                }, {
	                  date: '2016-05-08',
	                  name: '王小虎',
	                  address: '上海市普陀区金沙江路 1518 弄'
	                }, {
	                  date: '2016-05-06',
	                  name: '王小虎',
	                  address: '上海市普陀区金沙江路 1518 弄'
	                }, {
	                  date: '2016-05-07',
	                  name: '王小虎',
	                  address: '上海市普陀区金沙江路 1518 弄'
	                }],
	                isDialog1: false,
	                tableData3: [{
	                  date: '1974-05-05 01:24:00',
	                  name: '王小虎',
	                  address: '上海市普陀区金沙江路 1518 弄',
	                  id: '1',
	                  isShow: false
	                }, 
	                {
	                  date: '1974-05-05 01:24:00',
	                  name: '理人',
	                  address: '上海市普陀区金沙江路 1518 弄',
	                  id: '2',
	                  isShow: false
	                }, 
	                {
	                  date: '1974-05-05 01:24:00',
	                  name: '朱亮',
	                  address: '上海市普陀区金沙江路 1518 弄',
	                  id: '3',
	                  isShow: false
	                }, 
	                {
	                  date: '1974-05-05 01:24:00',
	                  name: '小亮',
	                  address: '上海市普陀区金沙江路 1518 弄',
	                  id: '4',
	                  isShow: false
	                }, 
	                {
	                  date: '1974-05-05 01:24:00',
	                  name: '发的',
	                  address: '上海市普陀区金沙江路 1518 弄',
	                  id: '5',
	                  isShow: false
	                }, 
	                {
	                  date: '1974-05-05 01:24:00',
	                  name: '王小虎',
	                  address: '上海市普陀区金沙江路 1518 弄',
	                  id: '6',
	                  isShow: false
	                },
	                {
	                  date: '1974-05-05 01:24:00',
	                  name: '王小虎',
	                  address: '上海市普陀区金沙江路 1518 弄',
	                  id: '7',
	                  isShow: false
	                }],
	                tableData2: [{
	                  date: '2016-05-03',
	                  name: '王小虎',
	                  province: '上海',
	                  city: '普陀区',
	                  address: '上海市普陀区金沙江路 1518 弄',
	                  zip: 200333
	                }, {
	                  date: '2016-05-02',
	                  name: '王小虎',
	                  province: '上海',
	                  city: '普陀区',
	                  address: '上海市普陀区金沙江路 1518 弄',
	                  zip: 200333
	                }, {
	                  date: '2016-05-04',
	                  name: '王小虎',
	                  province: '上海',
	                  city: '普陀区',
	                  address: '上海市普陀区金沙江路 1518 弄',
	                  zip: 200333
	                }, {
	                  date: '2016-05-01',
	                  name: '王小虎',
	                  province: '上海',
	                  city: '普陀区',
	                  address: '上海市普陀区金沙江路 1518 弄',
	                  zip: 200333
	                }, {
	                  date: '2016-05-08',
	                  name: '王小虎',
	                  province: '上海',
	                  city: '普陀区',
	                  address: '上海市普陀区金沙江路 1518 弄',
	                  zip: 200333
	                }, {
	                  date: '2016-05-06',
	                  name: '王小虎',
	                  province: '上海',
	                  city: '普陀区',
	                  address: '上海市普陀区金沙江路 1518 弄',
	                  zip: 200333
	                }, {
	                  date: '2016-05-07',
	                  name: '王小虎',
	                  province: '上海',
	                  city: '普陀区',
	                  address: '上海市普陀区金沙江路 1518 弄',
	                  zip: 200333
	                }],
	                tableData: [{
	                  date: '2016-05-02',
	                  name: '王小虎',
	                  address: '上海市普陀区金沙江路 1518 弄'
	                }, {
	                  date: '2016-05-04',
	                  name: '王小虎',
	                  address: '上海市普陀区金沙江路 1517 弄'
	                }, {
	                  date: '2016-05-01',
	                  name: '王小虎',
	                  address: '上海市普陀区金沙江路 1519 弄'
	                }, {
	                  date: '2016-05-03',
	                  name: '王小虎',
	                  address: '上海市普陀区金沙江路 1516 弄'
	                }],
	                attributes: [],
	                slot: [],
	                events: [],
	                methods: [],
	                columnAttributes: [],
	                ScopedSlot: [],
	                multipleSelection: [],
	                multipleSelection1: [],
	                multipleSelection2: [],
	                treeSelection: [],
	                treeSelections: [],
	                change: [],
	                tableData4: [{
	                  date: '2016-05-02',
	                  name: '王小虎',
	                  province: '上海',
	                  city: '普陀区',
	                  address: '上海市普陀区金沙江路 1518 弄',
	                  zip: 200333
	                }, {
	                  date: '2016-05-04',
	                  name: '王小虎',
	                  province: '上海',
	                  city: '普陀区',
	                  address: '上海市普陀区金沙江路 1517 弄',
	                  zip: 200333
	                }, {
	                  date: '2016-05-01',
	                  name: '王小虎',
	                  province: '上海',
	                  city: '普陀区',
	                  address: '上海市普陀区金沙江路 1519 弄',
	                  zip: 200333
	                }, {
	                  date: '2016-05-03',
	                  name: '王小虎',
	                  province: '上海',
	                  city: '普陀区',
	                  address: '上海市普陀区金沙江路 1516 弄',
	                  zip: 200333
	                }],
	                TableDate: [  
	                  {  
	                    id: 1,  
	                    parentId: 0,  
	                    name: '测试1',  
	                    age: 18,  
	                    sex: '男',  
	                    children: [  
	                      {  
	                        id: 2,  
	                        parentId: 1,  
	                        name: '测试2',  
	                        age: 22,  
	                        sex: '男'  
	                      }  
	                    ]  
	                  },  
	                  {  
	                    id: 3,  
	                    parentId: 0,  
	                    name: '测试3',  
	                    age: 23,  
	                    sex: '女',  
	                    children: [  
	                      {  
	                        id: 4,  
	                        parentId: 3,  
	                        name: '测试4',  
	                        age: 22,  
	                        sex: '男'  
	                      },  
	                      {  
	                        id: 5,  
	                        parentId: 3,  
	                        name: '测试5',  
	                        age: 25,  
	                        sex: '男'  
	                      },  
	                      {  
	                        id: 6,  
	                        parentId: 3,  
	                        name: '测试6',  
	                        age: 26,  
	                        sex: '女',  
	                        children: [  
	                          {  
	                            id: 7,  
	                            parentId: 6,  
	                            name: '测试7',  
	                            age: 27,  
	                            sex: '男'  
	                          }  
	                        ]  
	                      }  
	                    ]  
	                  }, 
	                  {  
	                    id: 18,  
	                    parentId: 0,  
	                    name: '测试8',  
	                    age: 18,  
	                    sex: '男'  
	                  }  
	                ],
	                nameValue: '',
	                url: '',
	                dateSelect: '',
	                isSelect: true,
	                pickerOptions: {
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
	                tableData55: [
	                  {
	                    id: 1,
	                    date: '2016-05-02',
	                    name: '王小二',
	                    address: '上海市普陀区金沙江路 1518 弄'
	                  }, 
	                  {
	                    id: 2,
	                    date: '2016-05-04',
	                    name: '王小虎',
	                    address: '上海市普陀区金沙江路 1517 弄'
	                  }, 
	                  {
	                    id: 3,
	                    date: '2016-05-01',
	                    name: '王小虎',
	                    address: '上海市普陀区金沙江路 1519 弄',
	                    children: [
	                      {
	                        id: 31,
	                        date: '2016-05-01',
	                        name: '王小虎',
	                        address: '上海市普陀区金沙江路 1519 弄',
	                        children: [
	                          {
	                            id: 333,
	                            date: '2016-05-01',
	                            name: '看附件',
	                            address: '上海市普陀区金沙江路 1519 弄'
	                          }
	                        ]
	                      }, 
	                      {
	                        id: 32,
	                        date: '2016-05-01',
	                        name: '王小虎',
	                        address: '上海市普陀区金沙江路 1519 弄'
	                      }
	                    ]
	                  }, 
	                  {
	                    id: 4,
	                    date: '2016-05-03',
	                    name: '王小虎',
	                    address: '上海市普陀区金沙江路 1516 弄'
	                  }
	                ],
	                addRowData: {
	                    date: '',
	                    name: '',
	                    address: '',
	                    edit: true
	                  },
	                  nameOptions: [
	    				{
	    				    value: '选项1',
	    				    label: '黄金糕'
	    				  }, 
	    				  {
	    				    value: '选项2',
	    				    label: '双皮奶'
	    				  }, 
	    				  {
	    				    value: '选项3',
	    				    label: '蚵仔煎'
	    				  }, 
	    				  {
	    				    value: '选项4',
	    				    label: '龙须面'
	    				  }, 
	    				  {
	    				    value: '选项5',
	    				    label: '北京烤鸭'
	    				  }
	                  ],
	                  filterTableData: [{
	                      date: '2016-05-02',
	                      name: '王小虎',
	                      address: '上海市普陀区金沙江路 1518 弄',
	                      tag: '家'
	                    }, {
	                      date: '2016-05-04',
	                      name: '王小虎',
	                      address: '上海市普陀区金沙江路 1517 弄',
	                      tag: '公司'
	                    }, {
	                      date: '2016-05-01',
	                      name: '王小虎',
	                      address: '上海市普陀区金沙江路 1519 弄',
	                      tag: '家'
	                    }, {
	                      date: '2016-05-03',
	                      name: '王小虎',
	                      address: '上海市普陀区金沙江路 1516 弄',
	                      tag: '公司'
	                    }],
	                    summaryTableData: [{
	                        id: '12987122',
	                        name: '王小虎',
	                        amount1: '234',
	                        amount2: '3.2',
	                        amount3: 10
	                      }, {
	                        id: '12987123',
	                        name: '王小虎',
	                        amount1: '165',
	                        amount2: '4.43',
	                        amount3: 12
	                      }, {
	                        id: '12987124',
	                        name: '王小虎',
	                        amount1: '324',
	                        amount2: '1.9',
	                        amount3: 9
	                      }, {
	                        id: '12987125',
	                        name: '王小虎',
	                        amount1: '621',
	                        amount2: '2.2',
	                        amount3: 17
	                      }, {
	                        id: '12987126',
	                        name: '王小虎',
	                        amount1: '539',
	                        amount2: '4.1',
	                        amount3: 15
	                      }],
	                res: {
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
                }
            },
            watch: {
            	'$route'(to,from){
            		if (to.path == this.$route.path) {
            			this.scrollDiv.scrollTop = this.scrollHeight;
            		} 
            	},
            	checkboxVal(valArr) {
    	            this.formThead = this.formTheadOptions.filter(i => valArr.indexOf(i) >= 0)
    	            this.key = this.key + 1// 为了保证table 每次都会重渲 In order to ensure the table will be re-rendered each time
    	        }
            },
            computed: {
            },
            mounted() {
            	 this.scrollDiv = this.$refs.tables;
                 this.scrollDiv.addEventListener("scroll", this.scroll);
	             this.attributes = this.res.attributes;
	             this.events = this.res.events;
	             this.slot = this.res.slot;
	             this.methods = this.res.methods;
	             this.columnAttributes = this.res.columnAttributes;
	             this.ScopedSlot = this.res.ScopedSlot;
            },
            methods: {
            	changeSelected(selected,item) {
            		console.log('selected====>',selected);
            		console.log('item========>',item);
            	},
            	scroll() {
            		this.scrollHeight = this.scrollDiv.scrollTop;
                },
            	newAdd(){
            		console.log('this.tableData55[2]=>',this.tableData55[2]);
            		this.tableData55[2].children.pop();
            	},
              clickShow7: function() {
                this.isShow7 = !this.isShow7;
              },
              clickShow9: function() {
                this.isShow9 = !this.isShow9;
              },
              clickShow6: function() {
                this.isShow6 = !this.isShow6;
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
              clickShow8: function() {
                this.isShow8 = !this.isShow8;
              },
              clickShow10: function() {
    	          this.isShow10 = !this.isShow10;
    	      },
              clickShow11: function() {
                this.isShow11 = !this.isShow11;
              },
              clickShow12: function() {
                 this.isShow12 = !this.isShow12;
              },
              clickShow13: function() {
                 this.isShow13 = !this.isShow13;
              },
              clickShow14: function() {
                 this.isShow14 = !this.isShow14;
              },
              clickShow15: function() {
                  this.isShow15 = !this.isShow15;
               },
               clickShow16: function() {
                   this.isShow16 = !this.isShow16;
                },
              clickShow17: function() {
                this.isShow17 = !this.isShow17;
              },
              clickShow18: function() {
                 this.isShow18 = !this.isShow18;
              },
              clickShow19: function() {
                  this.isShow19 = !this.isShow19;
               },
              clickShow20: function() {
                 this.isShow20 = !this.isShow20;
              },
              clickShow21: function() {
                  this.isShow21 = !this.isShow21;
              },
              handleSelectionChange(val) {
                this.multipleSelection = val;
              },
              handleSelectionChange1(val) {
                this.multipleSelection1 = val;
              },
              handleSelectionChange2(val) {
                this.multipleSelection2 = val;
              },
              handleEdit(index, row) {
                this.isSwitch = !this.isSwitch;
                row.isShow = true;
//                this.dateSelect = row.date;
//                this.nameValue = row.name;
//                this.url = row.address;
                // console.log(index, row);
                // this.formLabelAlign = Object.assign({}, row);
                // // this.formLabelAlign.date = new Date(this.formLabelAlign.date);
                // this.isDialog = true;
                // this.$nextTick(() => {
                //   this.$refs['dataForm'].clearValidate()
                // });
              }, //点击编辑
              handleKeep(index, row) {
                this.isSwitch = !this.isSwitch;
//                row.date = this.dateSelect;
//                row.name = this.nameValue;
//                row.address = this.url;
                row.isShow = false;
                // this.formLabelAlign.date = this.formLabelAlign.date // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464\
                // for (const v of this.tableData3) {
                //   if (v.id === this.form.id) {
                //     const index = this.tableData3.indexOf(v)
                //     this.tableData3.splice(index, 1, this.form)
                //     break;
                //   }
                // }
              },
              updateData1() {
                this.isDialog1 = false;
                this.$notify({
                  title: '成功',
                  message: '更新成功',
                  type: 'success',
                  duration: 2000
                })
              },
              updateData() {
                var data = {
                  date: this.form.date,
                  name: this.form.name,
                  address: this.form.address,
                  id: '90',
                  isShow: false
                }
                this.tableData3.push(data);
                // this.formLabelAlign.date = this.formLabelAlign.date // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464\
                // for (const v of this.tableData3) {
                //   if (v.id === this.formLabelAlign.id) {
                //     const index = this.tableData3.indexOf(v)
                //     this.tableData3.splice(index, 1, this.formLabelAlign)
                //     break;
                //   }
                // }
                this.isDialog = false;
                this.$notify({
                  title: '成功',
                  message: '更新成功'+this.form.date,
                  type: 'success',
                  duration: 2000
                });
                this.$refs.form.resetFields();
              },
              cancel() {
                this.isDialog = false;
                this.$refs.form.resetFields();
              },
              close() {
                this.$refs.form.resetFields();
              },
              handleEdit1() {
                this.isDialog1 = true;
              },
              handleDelete(index, row) {
                // row.isShow = true;
                for (var i = 0;i < this.$store.state.openTab.length;i++) {
                  if (this.$store.state.openTab[i].name == 'Details') {
                	  var a = '123';
                    this.$store.commit('delete_tabs', this.$store.state.openTab[i].route);
                    this.$router.push({
                      path: '/details',
                      query: {
                    	  id: row.name,
                    	  name: a
                      }
                    });
                  } else {
                	  var a = '123';
//                    this.$router.push({
//                      path: '/details/' + row.name
//                    });
                	  this.$router.push({
                          path: '/details',
                          query: {
                        	  id: row.name,
                        	  name: a
                          }
                        });
                  }
                }
              },
              tableRowClassName({row, rowIndex}) {
                  if (rowIndex === 1) {
                    return 'warning-row';
                  } else if (rowIndex === 3) {
                    return 'success-row';
                  }
                  return '';
                },
              formatter(row, column) {
                return row.address;
              },
              rowClick(row) {
                this.$refs.multipleTable.toggleRowSelection(row);
              },
              rowClass(row){
                if(this.multipleSelection.includes(row.row)){
                  return { "background-color": "#ecf5ff" }
                }
              },
              rowClick1(row) {
                this.$refs.multipleTable1.toggleRowSelection(row);
              },
              rowClass1(row){
                if(this.multipleSelection1.includes(row.row)){
                  return { "background-color": "#ecf5ff" }
                }
              },
              rowClick2(row) {
                this.$refs.multipleTable2.toggleRowSelection(row);
              },
              rowClass2(row){
                if(this.multipleSelection2.includes(row.row)){
                  return { "background-color": "#ecf5ff" }
                }
              },
              handleSelection(val) {
                this.treeSelection = val;
                console.log('this.treeSelection',this.treeSelection)
              },
              changeSelect(val) {
                console.log('-=-=-=-=-=-=-=-=-=-=-val',val);
              },
              addRow() {
                this.isDialog = true;
              },
              deleteRow() {
                if (this.multipleSelection1 == '') {
                  this.$confirm('请选择您要删除的数据', '信息', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                  })
                } else {
                  for (var i = 0; i < this.multipleSelection1.length;i++) {
                    var index = this.tableData3.indexOf(this.multipleSelection1[i]);
                    this.tableData3.splice(index,1);
                  }
                  this.$message({
                    message: '删除成功',
                    type: 'success'
                  });
                }
              },
              handleCurrentChange(val) {
                this.currentRow = val;
              },
              setCurrent(row) {
            	  console.log('取消选项===>',row);
            	  this.$refs.singleTable.setCurrentRow(row);
              },
              addBtn() {
                  this.addtableData.push(this.addRowData);
              },
              baocun(row) {
//            	 if ( validateName(row.address));{
            		 this.addtableData.pop();
                     this.addtableData.push({
                       date: this.addRowData.date,
                       name: this.addRowData.name,
                       address: this.addRowData.address,
                       edit: false
                     });
                     this.addRowData = {
                       date: '',
                       name: '',
                       address: '',
                       edit: true
                     }
//            	 }
                  
               },
               toggleSelection(rows) {
    	           if (rows) {
    	             rows.forEach(row => {
    	               this.$refs.multipleTable11.toggleRowSelection(row);
    	             });
    	           } else {
    	             this.$refs.multipleTable11.clearSelection();
    	           }
               },
               resetDateFilter() {
                   this.$refs.filterTable.clearFilter('date');
               },
               clearFilter() {
                   this.$refs.filterTable.clearFilter();
               },
               formatter(row, column) {
                   return row.address;
               },
               filterTag(value, row) {
                   return row.tag === value;
               },
               filterHandler(value, row, column) {
                   var property = column['property'];
                   return row[property] === value;
               },
               load(tree, treeNode, resolve) {
    	           setTimeout(() => {
    	             resolve([
    	               {
    	                 id: 31,
    	                 date: '2016-05-01',
    	                 name: '王小虎',
    	                 address: '上海市普陀区金沙江路 1519 弄'
    	               }, {
    	                 id: 32,
    	                 date: '2016-05-01',
    	                 name: '王小虎',
    	                 address: '上海市普陀区金沙江路 1519 弄'
    	               }
    	             ])
    	           }, 1000)
    	       },
    	       getSummaries(param) {
    	           var { columns, data } = param;
    	           var sums = [];
    	           columns.forEach((column, index) => {
    	             if (index === 0) {
    	               sums[index] = '总价';
    	               return;
    	             }
    	             var values = data.map(item => Number(item[column.property]));
    	             if (!values.every(value => isNaN(value))) {
    	               sums[index] = values.reduce((prev, curr) => {
    	            	   var value = Number(curr);
    	                 if (!isNaN(value)) {
    	                   return prev + curr;
    	                 } else {
    	                   return prev;
    	                 }
    	               }, 0);
    	               sums[index] += ' 元';
    	             } else {
    	               sums[index] = 'N/A';
    	             }
    	           });

    	           return sums;
    	       },
    	       arraySpanMethod({ row, column, rowIndex, columnIndex }) {
    	           if (rowIndex % 2 === 0) {
    	             if (columnIndex === 0) {
    	               return [1, 2];
    	             } else if (columnIndex === 1) {
    	               return [0, 0];
    	             }
    	           }
    	         },

    	       objectSpanMethod({ row, column, rowIndex, columnIndex }) {
    	           if (columnIndex === 0) {
    	             if (rowIndex % 2 === 0) {
    	               return {
    	                 rowspan: 2,
    	                 colspan: 1
    	               };
    	             } else {
    	               return {
    	                 rowspan: 0,
    	                 colspan: 0
    	               };
    	             }
    	           }
    	       },
    	       indexMethod(index) {
                 return index * 2;
               }
            }	
	    }
	    return data;
    }
})
