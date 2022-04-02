var Input = moduleinit({
	url:'/demos/input/input.html', 
	el:'#input',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Input',
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
                  isShow12: true,
                  isShow13: true,
                  isShow14: true,
                  isShow15: true,
                  input: '',
                  input1: '',
                  input2:'',
                  input3: '',
                  input4: '',
                  input5: '',
                  input6: '',
                  input7: '',
                  input8:'',
                  input9: '',
                  input10: '',
                  input11: '',
                  input12:'',
                  input13: '',
                  input14: '',
                  select: '',
                  textarea: '',
                  textarea1: '',
                  textarea2: '',
                  restaurants: [],
                  state1: '',
                  state2: '',
                  restaurants1: [],
                  state: '',
                  restaurants2: [],
                  state3: '',
                  timeout:  null,
                  text: '',
                  textarea3: '',
                  scrollDiv: '',
                  scrollHeight: '',
                  tableData: [],
                  cutColor: 'blue',
                  isCut: false,
                  open: false,
                  res: {
                    "tableData": [
                      {
                        "parameter": "type",
                        "explain": "类型",
                        "type": "string",
                        "optional": "text，textarea 和其他 原生 input 的 type 值",
                        "default":"text"
                      },
                      {
                        "parameter": "value / v-model",
                        "explain": "绑定值",
                        "type": "string/nnumber",
                        "optional": "_",
                        "default": "—"
                      },
                      {
                        "parameter": "maxlength",
                        "explain": "原生属性,最大输入长度",
                        "type": "number",
                        "optional": "—",
                        "default": "_"
                      },
                      {
                        "parameter": "minlength",
                        "explain": "原生属性,最小输入长度",
                        "type": "boolean",
                        "optional": "—",
                        "default": "false"
                      },
                      {
                        "parameter": "show-word-limit",
                        "explain": '是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效',
                        "type": "boolean",
                        "optional": "—",
                        "default": "false"
                      },
                      {
                        "parameter": "placeholder",
                        "explain": "输入框占位符",
                        "type": "string",
                        "optional": "—",
                        "default": "_"
                      },
                      {
                        "parameter": "clearable",
                        "explain": "是否可清空",
                        "type": "boolean",
                        "optional": "—",
                        "default": "false"
                      },
                      {
                        "parameter": "show-password",
                        "explain": "是否显示切换密码图表",
                        "type": "boolean",
                        "optional": "—",
                        "default": "false"
                      },
                      {
                        "parameter": "disabled",
                        "explain": "禁用",
                        "type": "boolean",
                        "optional": "—",
                        "default": "false"
                      },
                      {
                        "parameter": "size",
                        "explain": "输入框尺寸，只在 type!='textarea' 时有效",
                        "type": "string",
                        "optional": "medium / small / mini",
                        "default": "_"
                      },
                      {
	                      "parameter": "prefix-icon",
	                      "explain": "输入框头部图表",
	                      "type": "string",
	                      "optional": "_",
	                      "default": "_"
	                    },
	                    {
                        "parameter": "suffix-icon",
                        "explain": "输入框尾部图表",
                        "type": "string",
                        "optional": "_",
                        "default": "_"
                      },
                      {
                          "parameter": "rows",
                          "explain": '输入框行数，只对 type="textarea" 有效',
                          "type": "number",
                          "optional": "_",
                          "default": "2"
                       },

                       {
                           "parameter": "autosize",
                           "explain": "自适应内容高度，只对 type='textarea' 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }",
                           "type": "boolean/object",
                           "optional": "_",
                           "default": "false"
                        },
                        {
                            "parameter": "autocomplete",
                            "explain": "原生属性,自动补全",
                            "type": "string",
                            "optional": "on/off",
                            "default": "off"
                        },
                       {
                         "parameter": "name",
                         "explain": "原生属性",
                         "type": "string",
                         "optional": "_i",
                         "default": "_"
                      },
                      {
                          "parameter": "readonly",
                          "explain": "原生属性,只读",
                          "type": "boolean",
                          "optional": "_",
                          "default": "false"
                       },
                       {
                           "parameter": "max",
                           "explain": "原生属性，设置最大值",
                           "type": "string",
                           "optional": "_",
                           "default": "_"
                        },

                       {
                        "parameter": "min",
                        "explain": "原生属性，设置最小值",
                        "type": "string",
                        "optional": "_",
                        "default": "_"
                      },
                      {
                          "parameter": "step",
                          "explain": "原生属性，设置输入字段的合法数字间隔",
                          "type": "string",
                          "optional": "_",
                          "default": "_"
                       },
                       {
                           "parameter": "resize",
                           "explain": "控制是否能被用户缩放",
                           "type": "string",
                           "optional": "none, both, horizontal, vertical",
                           "default": "none"
                        },

                        {
                            "parameter": "autofocus",
                            "explain": "原生属性,自动获取焦点",
                            "type": "boolean",
                            "optional": "true/false",
                            "default": "false"
                         },

                         {
                         "parameter": "form",
                         "explain": "原生属性",
                         "type": "string",
                         "optional": "_",
                         "default": "_"
                      },

                      {
                          "parameter": "label",
                          "explain": "输入框关联的label文字",
                          "type": "string",
                          "optional": "_",
                          "default": "_"
                       },

                       {
                           "parameter": "tabindex",
                           "explain": "输入框的tabindex",
                           "type": "string",
                           "optional": "_",
                           "default": "_"
                        },

                        {
                        "parameter": "validate-event",
                        "explain": "输入时是否触发表单的验证",
                        "type": "boolean",
                        "optional": "_",
                        "default": "true"
                     },
                    ],
                    slots:[
                        {
                        	name: 'prefix',
                        	explain: '输入框头部内容，只对 type="text" 有效'
                        },
                        {
                        	name: 'suffix',
                        	explain: '输入框尾部内容，只对 type="text" 有效'
                        },
                        {
                        	name: 'prepend',
                        	explain: '输入框前置内容，只对 type="text" 有效'
                        },
                        {
                        	name: 'append',
                        	explain: '输入框后置内容，只对 type="text" 有效'
                        }
                     ],
                     events: [
                          {
                        	  name: 'blur',
                        	  explain: '在input失去焦点是触发',
                        	  parameter: '(event: Event)'
                          },
                          {
                        	  name: 'focus',
                        	  explain: '在input获取焦点时触发',
                        	  parameter: '(event: Event)'
                          },
                          {
                        	  name: 'change',
                        	  explain: '在input值改变是触发',
                        	  parameter: '(value: string | number)'
                          },
                          {
                        	  name: 'clear',
                        	  explain: '在点击由 clearable 属性生成的清空按钮时触发',
                        	  parameter: '_'
                          } 
                     ],
                     methods: [
						{
							  name: 'focus',
							  explain: '是input获取焦点',
							  parameter: '_'
						},
						{
							  name: 'blur',
							  explain: '使input失去焦点',
							  parameter: '_'
						},
						{
							  name: 'select',
							  explain: '选中 input 中的文字',
							  parameter: '_'
						}  
                     ],
                     AutocompleteAttributes: [
                        {
                        	"parameter": "placeholder",
                            "explain": "输入框占位文本",
                            "type": "string",
                            "optional": "_",
                            "default": "_"
                        },
                        {
                        	"parameter": "disabled",
                            "explain": "禁用",
                            "type": "boolean",
                            "optional": "_",
                            "default": "false"
                        },
                        {
                        	"parameter": "value-key",
                            "explain": "输入建议对象中用于显示的键名",
                            "type": "string",
                            "optional": "_",
                            "default": "value"
                        },
                        {
                        	"parameter": "value",
                            "explain": "必填值，输入绑定值",
                            "type": "string",
                            "optional": "_",
                            "default": "_"
                        },
                        {
                        	"parameter": "debounce",
                            "explain": "获取输入建议的去抖延时",
                            "type": "number",
                            "optional": "_",
                            "default": "300"
                        },
                        {
                        	"parameter": "placement",
                            "explain": "菜单弹出位置",
                            "type": "string",
                            "optional": "	top / top-start / top-end / bottom / bottom-start / bottom-end",
                            "default": "bottom-start"
                        },
                        {
                        	"parameter": "fetch-suggestions",
                            "explain": "返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它",
                            "type": "Function(queryString, callback)",
                            "optional": "_",
                            "default": "_"
                        },
                        {
                        	"parameter": "popper-class",
                            "explain": "Autocomplete 下拉列表的类名",
                            "type": "string",
                            "optional": "_",
                            "default": "_"
                        },
                        {
                        	"parameter": "trigger-on-focus",
                            "explain": "是否在输入框 focus 时显示建议列表",
                            "type": "boolean",
                            "optional": "_",
                            "default": "true"
                        },
                        {
                        	"parameter": "name",
                            "explain": "原生属性",
                            "type": "string",
                            "optional": "_",
                            "default": "_"
                        },
                        {
                        	"parameter": "select-when-unmatched",
                            "explain": "在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件",
                            "type": "boolean",
                            "optional": "_",
                            "default": "true"
                        },
                        {
                        	"parameter": "label",
                            "explain": "输入框关联的label文字",
                            "type": "string",
                            "optional": "_",
                            "default": "_"
                        },
                        {
                        	"parameter": "prefix-icon",
                            "explain": "输入框头部图表",
                            "type": "string",
                            "optional": "_",
                            "default": "_"
                        },
                        {
                        	"parameter": "suffix-icon",
                            "explain": "输入框尾部图标",
                            "type": "string",
                            "optional": "_",
                            "default": "_"
                        },
                        {
                        	"parameter": "hide-loading",
                            "explain": "是否隐藏远程加载时的加载图标",
                            "type": "boolean",
                            "optional": "_",
                            "default": "false"
                        },
                        {
                        	"parameter": "popper-append-to-body",
                            "explain": "是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false",
                            "type": "boolean",
                            "optional": "_",
                            "default": "true"
                        },
                        {
                        	"parameter": "highlight-first-item",
                            "explain": "是否默认突出显示远程搜索建议中的第一项",
                            "type": "boolean",
                            "optional": "_",
                            "default": "false"
                        }
                     ],
                     AutocompleteSlots: [
                        {
                        	name: 'prefix',
                        	explain: '输入框头部内容'
                        },
                        {
                        	name: 'suffix',
                        	explain: '输入框尾部内容'
                        },
                        {
                        	name: 'prepend',
                        	explain: '输入框前置内容'
                        },
                        {
                        	name: 'append',
                        	explain: '输入框后置内容'
                        }
                     ],
                     AutocompleteScopedSlot:[
                          {
                        	  name: '_',
                        	  explain: '自定义输入建议，参数为 { item }'
                          }
                     ],
                     AutocompleteEvents: [
                        {
                        	name: 'select',
                        	explain: '点击选中建议项时触发',
                        	parameter: '选中建议项'
                        }                  
                     ],
                     AutocompleteMethods: [
                        {
                        	name: 'focus',
                        	explain: '使 input 获取焦点',
                        	parameter: '_'
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
              	this.scrollDiv = this.$refs.input;
                  this.scrollDiv.addEventListener("scroll", this.scroll);
                this.tableData = this.res.tableData;
                this.restaurants = this.loadAll();
                this.restaurants1 = this.loadAll();
                this.restaurants2 = this.loadAll();
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
                querySearch(queryString, cb) {
                    var restaurants = this.restaurants;
                    var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                    // 调用 callback 返回建议列表的数据
                    cb(results);
                  },
                  createFilter(queryString) {
                    return (restaurant) => {
                      return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                    };
                  },
                  loadAll() {
                    return [
                      { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                      { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                      { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                      { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                      { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                      { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                      { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
                      { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
                      { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
                      { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
                      { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
                      { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
                      { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
                      { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
                      { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
                      { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
                      { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
                      { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
                      { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
                      { "value": "枪会山", "address": "上海市普陀区棕榈路" },
                      { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
                      { "value": "钱记", "address": "上海市长宁区天山西路" },
                      { "value": "壹杯加", "address": "上海市长宁区通协路" },
                      { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
                      { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
                      { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
                      { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
                      { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
                      { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
                      { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
                      { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
                      { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
                      { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
                      { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
                      { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
                      { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
                      { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
                      { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
                      { "value": "浏阳蒸菜", "address": "天山西路430号" },
                      { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
                      { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
                      { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
                      { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
                      { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
                      { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
                      { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
                      { "value": "阳阳麻辣烫", "address": "天山西路389号" },
                      { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
                    ];
                  },
                  handleSelect(item) {
                  },
                querySearch1(queryString, cb) {
                  var restaurants = this.restaurants1;
                  var results = queryString ? restaurants.filter(this.createFilter1(queryString)) : restaurants;
                  // 调用 callback 返回建议列表的数据
                  cb(results);
                },
                createFilter1(queryString) {
                  return (restaurant) => {
                    return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                  };
                },
                handleIconClick(ev) {
                },
              querySearchAsync(queryString, cb) {
                var restaurants = this.restaurants2;
                var results = queryString ? restaurants.filter(this.createStateFilter2(queryString)) : restaurants;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                  cb(results);
                }, 3000 * Math.random());
              },
              createStateFilter2(queryString) {
                return (state) => {
                  return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
              },
            }	
	    }
	    return data;
    }
})