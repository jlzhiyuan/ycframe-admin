var data = [ {
	"path" : "/chart/:chartid",
	"name" : "chart",
	"component" : chart,
	"meta" : {
		"title" : "数据可视化图表"
	}
},{
	"path" : "/dashboard/:dashboardid",
	"name" : "dashboard",
	"component" : dashboard,
	"meta" : {
		"title" : "数据可视化看板"
	}
},{
	"path": "/dashboardpreshow/:dashboardid",
    "component": DisplayBoardpreshow,
    "name": "DisplayBoardpreshow",
    "meta": {
      "title": "架构树图"
    }
}/*,{
	"path" : "/vxe-table",
	"name" : "VxeTable",
	"component" : VxeTable,
	"meta" : {
		"title" : "vxe-table"
	}
}*/]

var router = new VueRouter({
	routes : data
});
