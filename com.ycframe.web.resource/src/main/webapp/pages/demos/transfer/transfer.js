var Transfer = moduleinit({
	url:'/demos/transfer/transfer.html',
	el:'#transfer',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Transfer',
            data() {
            	var generateData3 = _ => {
                var data = [];
                for (var i = 1; i <= 15; i++) {
                  data.push({
                    key: i,
                    label: `备选项 ${ i }`,
                    disabled: i % 4 === 0
                  });
                }
                return data;
              };
              var generateData = _ => {
                var data = [];
                for (var i = 1; i <= 15; i++) {
                  data.push({
                    key: i,
                    label: `备选项 ${ i }`,
                    disabled: i % 4 === 0
                  });
                }
                return data;
              };
              var generateData2 = _ => {
            	  var data = [];
            	  var cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
            	  var pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
                cities.forEach((city, index) => {
                  data.push({
                    label: city,
                    key: index,
                    pinyin: pinyin[index]
                  });
                });
                return data;
              };
              var generateData1 = _ => {
                  var data = [];
                  for (let i = 1; i <= 15; i++) {
                    data.push({
                      value: i,
                      desc: `备选项 ${ i }`,
                      disabled: i % 4 === 0
                    });
                  }
                  return data;
              };
              return {
            	iconLists: '',
                scrollDiv: '',
                data: generateData(),
                data2: generateData2(),
                data3: generateData3(),
                isShow: true,
                isShow1: true,
                isShow2: true,
                isShow3: true,
                attributes: [],
                methods: [],
                slot: [],
                scopedSlot: [],
                events: [],
                value1: [1, 4],
                value2: [],
                value3: [1],
                data4: generateData1(),
                value4: [],
                filterMethod(query, item) {
                  return item.pinyin.indexOf(query) > -1;
                },
                renderFunc(h, option) {
                  return { option } - { option };
                },
                res: {
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
              this.scrollDiv = this.$refs.transfer;
              this.scrollDiv.addEventListener("scroll", this.scroll);
              this.attributes = this.res.attributes;
              this.events = this.res.events;
              this.slot = this.res.slot;
              this.scopedSlot = this.res.scopedSlot;
              this.methods = this.res.methods;
            },
            methods: {
            	scroll() {
            		this.scrollHeight = this.scrollDiv.scrollTop;
                },
              handleChange(value, direction, movedKeys) {
                console.log(value, direction, movedKeys);
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


//var Transfer = function(resolve, reject) {
//  $.ajax({
//    url:'pages/components/transfer/transfer.html',
//    type:"GET",
//    dataType:"html",
//    success:function(result){
//      var Obj = $("<code></code>").append($(result));//包装数据
//      // //(需要获取的对应块（如class='aa')
//      var $html = $("#transfer", Obj);  
//      // //获取对应块中的内容
//      var value = $html.html();
//      //获得内容可以用append插入对应的div中，也可以用html（value）直接添加
//      resolve({
//        template: value,
//        name: 'Transfer',
//        data() {
//          var generateData3 = _ => {
//            var data = [];
//            for (var i = 1; i <= 15; i++) {
//              data.push({
//                key: i,
//                label: `备选项 ${ i }`,
//                disabled: i % 4 === 0
//              });
//            }
//            return data;
//          };
//          var generateData = _ => {
//            var data = [];
//            for (var i = 1; i <= 15; i++) {
//              data.push({
//                key: i,
//                label: `备选项 ${ i }`,
//                disabled: i % 4 === 0
//              });
//            }
//            return data;
//          };
//          var generateData2 = _ => {
//        	  var data = [];
//        	  var cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
//        	  var pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
//            cities.forEach((city, index) => {
//              data.push({
//                label: city,
//                key: index,
//                pinyin: pinyin[index]
//              });
//            });
//            return data;
//          };
//          return {
//        	  iconLists: '',
//              scrollDiv: '',
//            data: generateData(),
//            data2: generateData2(),
//            data3: generateData3(),
//            isShow: true,
//            isShow1: true,
//            isShow2: true,
//            attributes: [],
//            methods: [],
//            slot: [],
//            scopedSlot: [],
//            events: [],
//            value1: [1, 4],
//            value2: [],
//            value3: [1],
//            filterMethod(query, item) {
//              return item.pinyin.indexOf(query) > -1;
//            },
//            renderFunc(h, option) {
//              return { option } - { option };
//            },
//            res: {
//              "attributes": [
//                {
//                  "parameter": "value / v-model",
//                  "explain": "绑定值",
//                  "type": "array",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "data",
//                  "explain": "Transfer 的数据源",
//                  "type": "array[{ key, label, disabled }]",
//                  "optional": "—",
//                  "default":"[]"
//                },
//                {
//                  "parameter": "filterable",
//                  "explain": "是否可搜索",
//                  "type": "boolean",
//                  "optional": "—",
//                  "default":  "false"
//                },
//                {
//                  "parameter": "filter-placeholder",
//                  "explain": "搜索框占位符",
//                  "type": "string",
//                  "optional": "—",
//                  "default":"请输入搜索内容"
//                },
//                {
//                  "parameter": "filter-method",
//                  "explain": "自定义搜索方法",
//                  "type": "funciton",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "target-order",
//                  "explain": "右侧列表元素的排序策略：若为 original，则保持与数据源相同的顺序；若为 push，则新加入的元素排在最后；若为 unshift，则新加入的元素排在最前",
//                  "type": "string",
//                  "optional": "original / push / unshift",
//                  "default":"original"
//                },
//                {
//                  "parameter": "titles",
//                  "explain": "自定义列表标题",
//                  "type": "array",
//                  "optional": "—",
//                  "default":"['列表 1', '列表 2']"
//                },
//                {
//                  "parameter": "button-texts",
//                  "explain": "自定义按钮文案",
//                  "type": "array",
//                  "optional": "—",
//                  "default":"[]"
//                },
//                {
//                  "parameter": "render-content",
//                  "explain": "自定义数据项渲染函数",
//                  "type": "function(h, option)",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "format",
//                  "explain": "列表顶部勾选状态文案",
//                  "type": "object{noChecked, hasChecked}",
//                  "optional": "—",
//                  "default":"{ noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }"
//                },
//                {
//                  "parameter": "props",
//                  "explain": "数据源的字段别名",
//                  "type": "object{key, label, disabled}",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "left-default-checked",
//                  "explain": "初始状态下左侧列表的已勾选项的 key 数组",
//                  "type": "array",
//                  "optional": "—",
//                  "default":"[]"
//                },
//                {
//                  "parameter": "right-default-checked",
//                  "explain": "初始状态下右侧列表的已勾选项的 key 数组",
//                  "type": "array",
//                  "optional": "—",
//                  "default":"[]"
//                }
//              ],
//              "slot": [
//                {
//                  "name": "left-footer",
//                  "explain": "左侧列表底部的内容"
//                },
//                {
//                  "name": "right-footer",
//                  "explain": "右侧列表底部的内容"
//                }
//              ],
//              "scopedSlot": [
//                {
//                  "name": '—',
//                  "explain": "自定义数据项的内容，参数为 { option }"
//                }
//              ],
//              "methods": [
//                {
//                  "name": "clearQuery",
//                  "explain": "清空某个面板的搜索关键词",
//                  "parameter": "'left' / 'right'，指定需要清空的面板"
//                }
//              ],
//              "events": [
//                {
//                  "name": "change",
//                  "explain": "右侧列表元素变化时触发",
//                  "parameter": "当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组"
//                },
//                {
//                  "name": "left-check-change",
//                  "explain": "左侧列表元素被用户选中 / 取消选中时触发",
//                  "parameter": "当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组"
//                },
//                {
//                  "name": "right-check-change",
//                  "explain": "右侧列表元素被用户选中 / 取消选中时触发",
//                  "parameter": "当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组"
//                }
//              ]
//            }
//          }
//        },
//        computed: {
//        },
//        watch: {
//        	'$route'(to,from){
//        		if (to.path == this.$route.path) {
//        			this.scrollDiv.scrollTop = this.scrollHeight;
//        		} 
//        	},
//        },
//        mounted(){
//        	this.scrollDiv = this.$refs.transfer;
//            this.scrollDiv.addEventListener("scroll", this.scroll);
//          this.attributes = this.res.attributes;
//          this.events = this.res.events;
//          this.slot = this.res.slot;
//          this.scopedSlot = this.res.scopedSlot;
//          this.methods = this.res.methods;
//          // var that = this;
//          // $.ajax({
//          //   type:'get',
//          //   url:'http://transfer',
//          //   data: {},
//          //   dataType:'json',
//          //   success:function(data){
//          //     that.attributes = data.attributes;
//          //     that.events = data.events;
//          //     that.slot = data.slot;
//          //     that.scopedSlot = data.scopedSlot;
//          //     that.methods = data.methods;
//          //   }
//          // })
//        },
//        methods: {
//        	scroll() {
//        		this.scrollHeight = this.scrollDiv.scrollTop;
//            },
//          handleChange(value, direction, movedKeys) {
//            console.log(value, direction, movedKeys);
//          },
//          clickShow: function() {
//            this.isShow = !this.isShow;
//          },
//          clickShow1: function() {
//            this.isShow1 = !this.isShow1;
//          },
//          clickShow2: function() {
//            this.isShow2 = !this.isShow2;
//          }
//        }
//      })
//    }
//  });
//};
