var store = new Vuex.Store({
  state: {
    openTab:[],//所有打开的路由
    activeIndex:'', //激活状态
    routes: [],
    watchHeight: '',
    switchMenu: false,
    tableData: [],
    id: ''
  },
  mutations: {
	updateId(state,data) {
		this.state.id  = data;
	},
	updateList(state,data) {
		this.state.tableData = data;
	},
	changeList(state,data) {
		for (var i = 0; i < this.state.tableData.length;i++) {
			if (this.state.tableData[i].id == this.state.id) {
				this.state.tableData[i].elements = data;
			}
		}
	},
	watch_menu(state,data) {
		this.state.switchMenu = data;
	},
    watch_height (state,data) {
      this.state.watchHeight = data;
    },
    routeList (state,data) {
      this.state.routes = data;
    },
    // 添加tabs
    add_tabs (state, data) {
      this.state.openTab.push(data);
    },
    // 删除tabs
    delete_tabs (state, route) {
      var index = 0;
      for (var option of state.openTab) {
        if (option.route === route) {
          break;
        }
        index++;
      }
      this.state.openTab.splice(index, 1);
    },
    // 设置当前激活的tab
    set_active_index (state, index) {
      this.state.activeIndex = index;
    },
    clearTab (state, data) {
      this.state.openTab.splice(1,data);
      
    }
  },
  actions: {
  }
})
