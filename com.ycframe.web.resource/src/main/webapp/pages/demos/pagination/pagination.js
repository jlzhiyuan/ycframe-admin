var Pagination = moduleinit({
	url:'/demos/pagination/pagination.html', 
	el:'#pagination',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Pagination',
            data() {
                return {
              	  scrollDiv: '',
                    scrollHeight: '',
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow3: true,
                  currentPage1: 5,
                  currentPage2: 5,
                  currentPage3: 5,
                  currentPage4: 4,
                  value: false,
                  pageData: [],
                  events: [],
                  slot: [],
                  data: {
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
                }
              },
              computed: {
              },
              watch: {
              	'$route'(to,from){
              		if (to.path == this.$route.path) {
              			this.scrollDiv.scrollTop = this.scrollHeight;
              		} 
              	},
              },
              mounted() {
              	this.scrollDiv = this.$refs.pagination;
                  this.scrollDiv.addEventListener("scroll", this.scroll);
                this.pageData = this.data.pageData;
                this.events = this.data.events;
                this.slot = this.data.slot;
                // var that = this;
                // $.ajax({
                //   type:'get',
                //   url:'http://pagedata',
                //   data: {},
                //   dataType:'json',
                //   success:function(data){
                //     that.pageData = data.pageData;
                //     that.events = data.events;
                //     that.slot = data.slot;
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
                clickShow3: function() {
                    this.isShow3 = !this.isShow3;
                },
                handleSizeChange(val) {
                  console.log(`每页 ${val} 条`);
                },
                handleCurrentChange(val) {
                  console.log(`当前页: ${val}`);
                }
              }
	    }
	    return data;
    }
})