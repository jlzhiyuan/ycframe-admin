var Drawer = moduleinit({
	url:'/demos/drawer/drawer.html', 
	el:'#drawer',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Drawer',
            data() {
                return {
                	scrollDiv: '',
                    scrollHeight: '',
              	  isShow: true,
              	  isShow1: true,
              	  isShow2: true,
              	  drawer: false,
                  direction: 'rtl',
                  table: false,
                  dialog: false,
                  loading: false,
                  gridData: [{
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
                      date: '2016-05-03',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                    }],
                    form: {
                      name: '',
                      region: '',
                      date1: '',
                      date2: '',
                      delivery: false,
                      type: [],
                      resource: '',
                      desc: ''
                    },
                    formLabelWidth: '80px',
                    drawer1: false,
                    innerDrawer: false,
                    attributes: [],
                  data: {
                    "attributes": [
                      {
                        "parameter": "append-to-body",
                        "explain": "Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "before-close",
                        "explain": "关闭前的回调，会暂停 Drawer 的关闭",
                        "type": "function(done)，done 用于关闭 Drawer",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "close-on-press-escape",
                        "explain": "是否可以通过按下 ESC 关闭 Drawer",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "custom-class",
                        "explain": "	Drawer 的自定义类名",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "destroy-on-close",
                        "explain": "控制是否在关闭 Drawer 之后将子元素全部销毁",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
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
      	                  "explain": "遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Drawer 的父元素上",
      	                  "type": "boolean",
      	                  "optional": "—",
      	                  "default":"true"
                      },
                      {
                          "parameter": "direction",
                          "explain": "Drawer 打开的方向",
                          "type": "Direction",
                          "optional": "rtl / ltr / ttb / tbb",
                          "default":"rtl"
                       },
                       {
                           "parameter": "show-close",
                           "explain": "是否显示关闭按钮",
                           "type": "boolean",
                           "optional": "—",
                           "default":"true"
                        },
                        {
                            "parameter": "size",
                            "explain": "Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释",
                            "type": "number / string",
                            "optional": "—",
                            "default":"30%"
                        },
                        {
                            "parameter": "title",
                            "explain": "Drawer 的标题，也可通过具名 slot （见下表）传入",
                            "type": "string",
                            "optional": "—",
                            "default":"—"
                        },
                        {
                            "parameter": "visible",
                            "explain": "是否显示 Drawer，支持 .sync 修饰符",
                            "type": "boolean",
                            "optional": "—",
                            "default":"false"
                        },
                        {
                            "parameter": "wrapperClosable",
                            "explain": "点击遮罩层是否可以关闭 Drawer",
                            "type": "boolean",
                            "optional": "—",
                            "default":"true"
                         }
                    ],
                    slot: [
                        {
                      	  name: '—',
                      	  explain: 'Drawer 的内容'
                        },
                        {
                      	  name: 'title',
                      	  explain: 'Drawer 标题区的内容'
                        } 
                    ],
                    methods: [
                        {
                      	  name: 'closeDrawer',
                      	  explain: '用于关闭 Drawer, 该方法会调用传入的 before-close 方法'
                        }
                    ],
                    events: [
                          {
                          	name: 'open',
                          	explain: 'Drawer 打开的回调',
                          	parameter: '—'
                          },
                          {
                          	name: 'opened',
                          	explain: 'Drawer 打开动画结束时的回调',
                          	parameter: '—'
                          },
                          {
                          	name: 'close',
                          	explain: 'Drawer 关闭的回调',
                          	parameter: '—'
                          },
                          {
                          	name: 'closed',
                          	explain: 'Drawer 关闭动画结束时的回调',
                          	parameter: '—'
                          } 
                     ]
                  },
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
              	this.scrollDiv = this.$refs.drawer;
                  this.scrollDiv.addEventListener("scroll", this.scroll);
                this.attributes = this.data.attributes;
                // var that = this;
                // $.ajax({
                //   type:'get',
                //   url:'http://drawer',
                //   data: {},
                //   dataType:'json',
                //   success:function(data){
                //     that.attributes = data.attributes;
                //   }
                // })
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
                handleClose(done) {
                    this.$confirm('确认关闭？')
                      .then(_ => {
                        done();
                      })
                      .catch(_ => {});
                },
                handleClose1(done) {
      		      this.$confirm('确定要提交表单吗？')
      		        .then(_ => {
      		          this.loading = true;
      		          setTimeout(() => {
      		            this.loading = false;
      		            done();
      		          }, 2000);
      		        })
      		        .catch(_ => {});
      		   }
            }
	    }
	    return data;
    }
})
//var Drawer = function(resolve, reject) {
//  $.ajax({
//    url:'pages/demos/drawer/drawer.html',
//    type:"GET",
//    dataType:"html",
//    success:function(result){
//      var Obj = $("<code></code>").append($(result));//包装数据
//      var $html = $("#drawer", Obj);
//      var value = $html.html();
//      resolve({
//        template: value,
//        name: 'Drawer',
//        data() {
//          return {
//        	  isShow: true,
//        	  isShow1: true,
//        	  isShow2: true,
//        	  drawer: false,
//              direction: 'rtl',
//              table: false,
//              dialog: false,
//              loading: false,
//              gridData: [{
//                date: '2016-05-02',
//                name: '王小虎',
//                address: '上海市普陀区金沙江路 1518 弄'
//              }, {
//                date: '2016-05-04',
//                name: '王小虎',
//                address: '上海市普陀区金沙江路 1518 弄'
//              }, {
//                date: '2016-05-01',
//                name: '王小虎',
//                address: '上海市普陀区金沙江路 1518 弄'
//              }, {
//                date: '2016-05-03',
//                name: '王小虎',
//                address: '上海市普陀区金沙江路 1518 弄'
//              }],
//              form: {
//                name: '',
//                region: '',
//                date1: '',
//                date2: '',
//                delivery: false,
//                type: [],
//                resource: '',
//                desc: ''
//              },
//              formLabelWidth: '80px',
//              drawer1: false,
//              innerDrawer: false,
//              attributes: [],
//            data: {
//              "attributes": [
//                {
//                  "parameter": "append-to-body",
//                  "explain": "Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true",
//                  "type": "boolean",
//                  "optional": "—",
//                  "default":"false"
//                },
//                {
//                  "parameter": "before-close",
//                  "explain": "关闭前的回调，会暂停 Drawer 的关闭",
//                  "type": "function(done)，done 用于关闭 Drawer",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "close-on-press-escape",
//                  "explain": "是否可以通过按下 ESC 关闭 Drawer",
//                  "type": "boolean",
//                  "optional": "—",
//                  "default":"true"
//                },
//                {
//                  "parameter": "custom-class",
//                  "explain": "	Drawer 的自定义类名",
//                  "type": "string",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "destroy-on-close",
//                  "explain": "控制是否在关闭 Drawer 之后将子元素全部销毁",
//                  "type": "boolean",
//                  "optional": "—",
//                  "default":"false"
//                },
//                {
//                    "parameter": "modal",
//                    "explain": "是否需要遮罩层",
//                    "type": "boolean",
//                    "optional": "—",
//                    "default":"true"
//                 },
//                 {
//	                  "parameter": "modal-append-to-body",
//	                  "explain": "遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Drawer 的父元素上",
//	                  "type": "boolean",
//	                  "optional": "—",
//	                  "default":"true"
//                },
//                {
//                    "parameter": "direction",
//                    "explain": "Drawer 打开的方向",
//                    "type": "Direction",
//                    "optional": "rtl / ltr / ttb / tbb",
//                    "default":"rtl"
//                 },
//                 {
//                     "parameter": "show-close",
//                     "explain": "是否显示关闭按钮",
//                     "type": "boolean",
//                     "optional": "—",
//                     "default":"true"
//                  },
//                  {
//                      "parameter": "size",
//                      "explain": "Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释",
//                      "type": "number / string",
//                      "optional": "—",
//                      "default":"30%"
//                  },
//                  {
//                      "parameter": "title",
//                      "explain": "Drawer 的标题，也可通过具名 slot （见下表）传入",
//                      "type": "string",
//                      "optional": "—",
//                      "default":"—"
//                  },
//                  {
//                      "parameter": "visible",
//                      "explain": "是否显示 Drawer，支持 .sync 修饰符",
//                      "type": "boolean",
//                      "optional": "—",
//                      "default":"false"
//                  },
//                  {
//                      "parameter": "wrapperClosable",
//                      "explain": "点击遮罩层是否可以关闭 Drawer",
//                      "type": "boolean",
//                      "optional": "—",
//                      "default":"true"
//                   }
//              ],
//              slot: [
//                  {
//                	  name: '—',
//                	  explain: 'Drawer 的内容'
//                  },
//                  {
//                	  name: 'title',
//                	  explain: 'Drawer 标题区的内容'
//                  } 
//              ],
//              methods: [
//                  {
//                	  name: 'closeDrawer',
//                	  explain: '用于关闭 Drawer, 该方法会调用传入的 before-close 方法'
//                  }
//              ],
//              events: [
//                    {
//                    	name: 'open',
//                    	explain: 'Drawer 打开的回调',
//                    	parameter: '—'
//                    },
//                    {
//                    	name: 'opened',
//                    	explain: 'Drawer 打开动画结束时的回调',
//                    	parameter: '—'
//                    },
//                    {
//                    	name: 'close',
//                    	explain: 'Drawer 关闭的回调',
//                    	parameter: '—'
//                    },
//                    {
//                    	name: 'closed',
//                    	explain: 'Drawer 关闭动画结束时的回调',
//                    	parameter: '—'
//                    } 
//               ]
//            },
//          }
//        },
//        watch: {
//        	'$route'(to,from){
//        		if (to.path == this.$route.path) {
//        			this.scrollDiv.scrollTop = this.scrollHeight;
//        		} 
//        	},
//        },
//        mounted(){
//        	this.scrollDiv = this.$refs.drawer;
//            this.scrollDiv.addEventListener("scroll", this.scroll);
//          this.attributes = this.data.attributes;
//          // var that = this;
//          // $.ajax({
//          //   type:'get',
//          //   url:'http://drawer',
//          //   data: {},
//          //   dataType:'json',
//          //   success:function(data){
//          //     that.attributes = data.attributes;
//          //   }
//          // })
//        },
//        methods: {
//        	scroll() {
//        		this.scrollHeight = this.scrollDiv.scrollTop;
//            },
//          clickShow: function() {
//            this.isShow = !this.isShow;
//          },
//          clickShow1: function() {
//            this.isShow1 = !this.isShow1;
//          },
//          clickShow2: function() {
//            this.isShow2 = !this.isShow2;
//          },
//          handleClose(done) {
//              this.$confirm('确认关闭？')
//                .then(_ => {
//                  done();
//                })
//                .catch(_ => {});
//          },
//          handleClose1(done) {
//		      this.$confirm('确定要提交表单吗？')
//		        .then(_ => {
//		          this.loading = true;
//		          setTimeout(() => {
//		            this.loading = false;
//		            done();
//		          }, 2000);
//		        })
//		        .catch(_ => {});
//		   }
//        }
//      })
//    }
//  });
//};
