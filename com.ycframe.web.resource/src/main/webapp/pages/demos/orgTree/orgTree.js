var orgTree = moduleinit({
	url:'/demos/orgTree/orgTree.html', 
	el:'#orgTree',
	dorender:function(content){
	    var data = {
			template: content.template,
	        name: 'orgTree',
	        data() {
	            return {
	            	scrollDiv: '',
                    scrollHeight: '',
                    isShow: true,
                    isShow1: true,
                    isShow2: true,
                    isShow3: true,
                    isShow5: true,
	            	data: {
	                    id: 0,
	                    label: "XXX科技有限公司",
	                    children: [
	                      {
	                        id: 2,
	                        label: "产品研发部",
	                        children: [
	                          {
	                            id: 5,
	                            label: "研发-前端"
	                          },
	                          {
	                            id: 6,
	                            label: "研发-后端"
	                          },
	                          {
	                            id: 9,
	                            label: "UI设计"
	                          },
	                          {
	                            id: 10,
	                            label: "产品经理"
	                          }
	                        ]
	                      },
	                      {
	                        id: 3,
	                        label: "销售部",
	                        children: [
	                          {
	                            id: 7,
	                            label: "销售一部"
	                          },
	                          {
	                            id: 8,
	                            label: "销售二部"
	                          }
	                        ]
	                      },
	                      {
	                        id: 4,
	                        label: "财务部"
	                      },
	                      {
	                        id: 9,
	                        label: "HR人事"
	                      }
	                    ]
	                  },
	                  data1: {
		                    id: 0,
		                    label: "XXX科技有限公司",
		                    children: [
		                      {
		                        id: 2,
		                        label: "产品研发部",
		                        children: [
		                          {
		                            id: 5,
		                            label: "研发-前端"
		                          },
		                          {
		                            id: 6,
		                            label: "研发-后端"
		                          },
		                          {
		                            id: 9,
		                            label: "UI设计"
		                          },
		                          {
		                            id: 10,
		                            label: "产品经理"
		                          }
		                        ]
		                      },
		                      {
		                        id: 3,
		                        label: "销售部",
		                        children: [
		                          {
		                            id: 7,
		                            label: "销售一部"
		                          },
		                          {
		                            id: 8,
		                            label: "销售二部"
		                          }
		                        ]
		                      },
		                      {
		                        id: 4,
		                        label: "财务部"
		                      },
		                      {
		                        id: 9,
		                        label: "HR人事"
		                      }
		                    ]
		              },
		              data11: {
	                    id: 0,
	                    name: "XXX科技有限公司",
	                    childrenss: [
	                      {
	                        id: 2,
	                        name: "产品研发部",
	                        childrenss: [
	                          {
	                            id: 5,
	                            name: "研发-前端"
	                          },
	                          {
	                            id: 6,
	                            name: "研发-后端"
	                          },
	                          {
	                            id: 9,
	                            name: "UI设计"
	                          },
	                          {
	                            id: 10,
	                            name: "产品经理"
	                          }
	                        ]
	                      },
	                      {
	                        id: 3,
	                        name: "销售部",
	                        childrenss: [
	                          {
	                            id: 7,
	                            name: "销售一部"
	                          },
	                          {
	                            id: 8,
	                            name: "销售二部"
	                          }
	                        ]
	                      },
	                      {
	                        id: 4,
	                        name: "财务部"
	                      },
	                      {
	                        id: 9,
	                        name: "HR人事"
	                      }
	                    ]
	                  },
	                  props: {
	                	label: 'name',
	                	children: 'childrenss'
	                  },
	                  horizontal: false,
	                  collapsable: true,
	                  expandAll: false,
	                  labelClassName: "bg-color-orange",
	                  res: {
	                      "attributes": [
	                        {
	                          "parameter": "data",
	                          "explain": "展示数据",
	                          "type": "object",
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
	                          "parameter": "collapsable",
	                          "explain": "子节点可折叠",
	                          "type": "boolean",
	                          "optional": "—",
	                          "default":"true"
	                        },
	                        {
	                          "parameter": "labelClassName",
	                          "explain": "节点标签类",
	                          "type": "function/string",
	                          "optional": "—",
	                          "default":"—"
	                        },
	                        {
	                          "parameter": "horizontal",
	                          "explain": "排列状态",
	                          "type": "boolean",
	                          "optional": "—",
	                          "default":"false(水平排列)"
	                        }
	                      ],
	                      "props": [
	                        {
	                          "parameter": "label",
	                          "explain": "指定节点标签为节点对象的某个属性值",
	                          "type": "string",
	                          "optional": "—",
	                          "default":"—"
	                        },
	                        {
	                          "parameter": "children",
	                          "explain": "指定子树为节点对象的某个属性值",
	                          "type": "string",
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
	                      ],
	                      "events": [
	                        {
	                          "name": "on-expand",
	                          "explain": "",
	                          "parameter": ""
	                        },
	                        {
	                          "name": "on-node-click",
	                          "explain": "当某一节点被点击时调用",
	                          "parameter": ""
	                        },
	                        {
	                          "name": "on-node-mouseover",
	                          "explain": "当鼠标悬停时被调用",
	                          "parameter": ""
	                        },
	                        {
	                          "name": "on-node-mouseout",
	                          "explain": "当鼠标离开时被调用",
	                          "parameter": ""
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
            	}
	        },
	        mounted() {
	        	this.scrollDiv = this.$refs.orgtree;
	        	this.toggleExpand(this.data, true);
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
		        clickShow5: function() {
		           this.isShow5 = !this.isShow5;
		        },
	        	collapse(list) {
	        	    var _this = this;
	        	    list.forEach(function(child) {
	        	        if (child.expand) {
	        	          child.expand = false;
	        	        }
	        	        child.children && _this.collapse(child.children);
	        	    });
	        	},
	        	onExpand(e,data) {
	        	    if ("expand" in data) {
	        	       data.expand = !data.expand;
	        	        if (!data.expand && data.children) {
	        	            this.collapse(data.children);
	        	        }
	        	    } else {
	        	        this.$set(data, "expand", true);
	        	    }
	        	},
	            renderContent(h, data) {
	              return data.label;
	            },
	            onNodeClick(e, data) {
//	              alert(data.label);
	            },
	            expandChange() {
	              this.toggleExpand(this.data, this.expandAll);
	            },
	            toggleExpand(data, val) {
	                var _this = this;
	                if (Array.isArray(data)) {
	                    data.forEach(function(item) {
	                      _this.$set(item, "expand", val);
	                      if (item.children) {
	                        _this.toggleExpand(item.children, val);
	                      }
	                    });
	                } else {
	                    this.$set(data, "expand", val);
	                    if (data.children) {
	                      _this.toggleExpand(data.children, val);
	                    }
	                }
	            },
	            collapse1(list) {
	        	    var _this = this;
	        	    list.forEach(function(child) {
	        	        if (child.expand) {
	        	          child.expand = false;
	        	        }
	        	        child.children && _this.collapse(child.children);
	        	    });
	        	},
	        	onExpand1(e,data) {
	        	    if ("expand" in data) {
	        	       data.expand = !data.expand;
	        	        if (!data.expand && data.children) {
	        	            this.collapse1(data.children);
	        	        }
	        	    } else {
	        	        this.$set(data, "expand", true);
	        	    }
	        	}
	        }
		}
		return data;
	}
})
			    	