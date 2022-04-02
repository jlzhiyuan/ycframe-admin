var Tabs = moduleinit({
	url:'/demos/tabs/tabs.html', 
	el:'#tabs',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Tabs',
            data() {
                return {
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow3: true,
                  isShow4: true,
                  isShow5: true,
                  tabPosition: 'left',
                  activeName: 'second',
                  editableTabsValue: '2',
                  editableTabs: [{
                    title: 'Tab 1',
                    name: '1',
                    content: 'Tab 1 content'
                  }, {
                    title: 'Tab 2',
                    name: '2',
                    content: 'Tab 2 content'
                  }],
                  tabIndex: 2,
                  TabAttributes: [],
                  events: [],
                  attributes: [],
                  data: {
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
                    ],
                  },
                  scrollDiv: '',
                  scrollHeight: ''
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
              	this.scrollDiv = this.$refs.tabs;
                  this.scrollDiv.addEventListener("scroll", this.scroll);
                this.attributes = this.data.attributes;
                this.events = this.data.events;
                this.TabAttributes = this.data.TabAttributes;
                // var that = this;
                // $.ajax({
                //   type:'get',
                //   url:'http://tabs',
                //   data: {},
                //   dataType:'json',
                //   success:function(data){
                //     that.attributes = data.attributes;
                //     that.events = data.events;
                //     that.TabAttributes = data.TabAttributes;
                //   }
                // })
              },
              methods: {
            	  addTab(targetName) {
	    	        let newTabName = ++this.tabIndex + '';
	    	        this.editableTabs.push({
	    	          title: 'New Tab',
	    	          name: newTabName,
	    	          content: 'New Tab content'
	    	        });
	    	        this.editableTabsValue = newTabName;
	    	      },
	    	      removeTab(targetName) {
	    	        let tabs = this.editableTabs;
	    	        let activeName = this.editableTabsValue;
	    	        if (activeName === targetName) {
	    	          tabs.forEach((tab, index) => {
	    	            if (tab.name === targetName) {
	    	              let nextTab = tabs[index + 1] || tabs[index - 1];
	    	              if (nextTab) {
	    	                activeName = nextTab.name;
	    	              }
	    	            }
	    	          });
	    	        }
	    	        
	    	        this.editableTabsValue = activeName;
	    	        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
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
                handleClick(tab, event) {
                  console.log(tab, event);
                },
                handleTabsEdit(targetName, action) {
                    if (action === 'add') {
                      let newTabName = ++this.tabIndex + '';
                      this.editableTabs.push({
                        title: 'New Tab',
                        name: newTabName,
                        content: 'New Tab content'
                      });
                      this.editableTabsValue = newTabName;
                    }
                    if (action === 'remove') {
                      let tabs = this.editableTabs;
                      let activeName = this.editableTabsValue;
                      if (activeName === targetName) {
                        tabs.forEach((tab, index) => {
                          if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                              activeName = nextTab.name;
                            }
                          }
                        });
                      }
                      
                      this.editableTabsValue = activeName;
                      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
                    }
                }
            }	
	    }
	    return data;
    }
})