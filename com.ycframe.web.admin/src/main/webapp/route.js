/*const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}*/
var data = [
{
    "path": '/errorinfo',
    "name": 'Errorinfo',
    "component": Errorinfo,
    "meta" : {
    	"title": '404'
    }
  },
{
    "path": "/",
    "component": Home,
    "name": "Home",
    "meta": {
      "title": "首页"
    }
  },
  {
    "path": "/button",
    "name": "Button",
    "component": Button,
    "meta": {
      "title": "Button按钮"
    }
  },
  {
    "path": "/icon",
    "name": "Icon",
    "component": Icon,
    "meta": {
      "title": "Icon图标"
    }
  },
  {
    "path": "/table",
    "name": "Table",
    "component": Table,
    "meta": {
      "title": "Table表格"
    }
  },
  {
    "path": "/form",
    "name": "Form",
    "component": Form,
    "meta": {
      "title": "Form表单"
    }
  },
  {
    "path": "/tree",
    "name": "Tree",
    "component": Tree,
    "meta": {
      "title": "Tree树形控件"
    }
  },
  {
    "path": "/pagination",
    "name": "Pagination",
    "component": Pagination,
    "meta": {
      "title": "Pagination分页"
    }
  },
  {
    "path": "/dialog",
    "name": "Dialog",
    "component": Dialog,
    "meta": {
      "title": "Dialog下拉菜单"
    }
  },
  {
    "path": "/tabs",
    "name": "Tabs",
    "component": Tabs,
    "meta": {
      "title": "Tabs标签页"
    }
  },
  {
    "path": "/dropdown",
    "name": "Dropdown",
    "component": Dropdown,
    "meta": {
      "title": "Dropdown下拉菜单"
    }
  },
  {
    "path": "/dynamic-table",
    "name": "Dynamic",
    "component": Dynamic,
    "meta": {
      "title": "动态 Table"
    }
  },
  {
    "path": "/drawer",
    "name": "Drawer",
    "component": Drawer,
    "meta": {
      "title": "Drawer抽屉"
    }
  },
  {
    "path": "/empty",
    "name": "EmptyStatus",
    "component": EmptyStatus,
    "meta": {
      "title": "Empty空状态"
    }
  },
  {
    "path": "/layout",
    "name": "layout",
    "component": layout,
    "meta": {
      "title": "栅栏布局"
    }
  },
  {
    "path": "/container",
    "name": "Container",
    "component": Container,
    "meta": {
      "title": "Container布局"
    }
  },
  {
    "path": "/radio",
    "component": Radio,
    "name": "Radio",
    "meta": {
      "title": "Radio单选框"
    }
  },
  {
    "path": "/checkbox",
    "component": checkbox,
    "name": "checkbox",
    "meta": {
      "title": "checkbox多选框"
    }
  },
  {
    "path": "/time-picker",
    "component": TimePicker,
    "name": "TimePicker",
    "meta": {
      "title": "时间选择器"
    }
  },
  {
    "path": "/upload",
    "component": Upload,
    "name": "Upload",
    "meta": {
      "title": "Upload上传"
    }
  },
  {
    "path": "/switch",
    "component": Switchs,
    "name": "Switchs",
    "meta": {
      "title": "switch"
    }
  },
  {
    "path": "/sticky",
    "component": Sticky,
    "name": "Sticky",
    "meta": {
      "title": "sticky"
    }
  },
  {
    "path": "/tooltip",
    "component": tooltip,
    "name": "tooltip",
    "meta": {
      "title": "tooltip"
    }
  },
  {
    "path": "/message",
    "component": Message,
    "name": "Message",
    "meta": {
      "title": "Message消息提示"
    }
  },
  {
    "path": "/collapse",
    "component": collapse,
    "name": "collapse",
    "meta": {
      "title": "collapse"
    }
  },
  {
    "path": "/input-number",
    "component": InputNumber,
    "name": "InputNumber",
    "meta": {
      "title": "计数器"
    }
  },
  {
    "path": "/date-picker",
    "component": DatePicker,
    "name": "DatePicker",
    "meta": {
      "title": "日期选择器"
    }
  },
  {
    "path": "/date-time-picker",
    "component": DateTimePicker,
    "name": "DateTimePicker",
    "meta": {
      "title": "日期时间选择器"
    }
  },
  {
    "path": "/details",
    "component": Details,
    "name": "Details",
    "meta": {
      "title": "详情"
    }
  },
  {
    "path": "/select",
    "component": Select,
    "name": "Select",
    "meta": {
      "title": "select选择器"
    }
  },
  {
    "path": "/cascader",
    "component": cascader,
    "name": "cascader",
    "meta": {
      "title": "联级选择器"
    }
  },
  {
    "path": "/timeline",
    "component": TimeLine,
    "name": "TimeLine",
    "meta": {
      "title": "TimeLine时间线"
    }
  },
  {
    "path": "/loading",
    "component": Loading,
    "name": "Loading",
    "meta": {
      "title": "Loading加载"
    }
  },
  {
    "path": "/steps",
    "component": Steps,
    "name": "Steps",
    "meta": {
      "title": "Steps步骤条"
    }
  },
  {
    "path": "/badge",
    "component": Badge,
    "name": "Badge",
    "meta": {
      "title": "Badge标记"
    }
  },
  {
    "path": "/carousel",
    "component": Carousel,
    "name": "Carousel",
    "meta": {
      "title": "Carousel走马灯"
    }
  },
  {
    "path": "/breadcrumb",
    "component": Breadcrumb,
    "name": "Breadcrumb",
    "meta": {
      "title": "Breadcrumb面包屑"
    }
  },
  {
    "path": "/tag",
    "component": Tag,
    "name": "Tag",
    "meta": {
      "title": "tag标签"
    }
  },
  {
    "path": "/card",
    "component": Card,
    "name": "Card",
    "meta": {
      "title": "Card卡片"
    }
  },
  {
    "path": "/statistic",
    "component": Count,
    "name": "Count",
    "meta": {
      "title": "statisic统计数值"
    }
  },
  {
	"path": "/transfer",
    "component": Transfer,
    "name": "Transfer",
    "meta": {
      "title": "transfer穿梭框"
    }
  },
  {
	"path": "/notification",
    "component": lNotification,
    "name": "lNotification",
    "meta": {
      "title": "notification通知"
    }
  },
  {
	"path": "/infiniteScroll",
    "component": infiniteScroll,
    "name": "infiniteScroll",
    "meta": {
      "title": "InfiniteScroll无限滚动"
    }
  },
  {
	"path": "/image",
    "component": elementImage,
    "name": "elementImage",
    "meta": {
      "title": "image图片"
    }
  },
  {
	"path": "/echarts",
    "component": echartsDemo,
    "name": "echartsDemo",
    "meta": {
      "title": "echarts"
    }
  },
  {
	"path": "/backtop",
    "component": Top,
    "name": "Top",
    "meta": {
      "title": "Backtop 回到顶部"
    }
  },
  {
	"path": "/input",
    "component": Input,
    "name": "Input",
    "meta": {
      "title": "input 输入框"
    }
  },
  {
	"path": "/popover",
    "component": popover,
    "name": "popover",
    "meta": {
      "title": "popover弹出框"
    }
  },
  {
	"path": "/calendar",
    "component": calendar,
    "name": "calendar",
    "meta": {
      "title": "calendar日历"
    }
  },
  {
	"path": "/colorPicker",
    "component": colorPicker,
    "name": "colorPicker",
    "meta": {
      "title": "颜色选择器"
    }
  },
  {
	"path": "/link",
    "component": elementLink,
    "name": "elementLink",
    "meta": {
      "title": "link文字链接"
    }
  },
  {
	"path": "/rate",
    "component": rate,
    "name": "rate",
    "meta": {
      "title": "rate评分"
    }
  },
  {
	"path": "/progress",
    "component": elementProgress,
    "name": "elementProgress",
    "meta": {
      "title": "progress进度条"
    }
  },
  {
	"path": "/alert",
    "component": alertwarn,
    "name": "alertwarn",
    "meta": {
      "title": "alert警告"
    }
  },
  {
	"path": "/popconfirm",
    "component": popconfirm,
    "name": "popconfirm",
    "meta": {
      "title": "气泡确认框"
    }
  },
  {
	"path": "/dragElement",
    "component": dragElement,
    "name": "dragElement",
    "meta": {
      "title": "拖拽组件"
    }
  },
  {
	"path": "/vue-org-tree",
    "component": orgTree,
    "name": "orgTree",
    "meta": {
      "title": "架构树图"
    }
  },
  {
	"path": "/cron",
    "component": cronpage,
    "name": "cronpage",
    "meta": {
      "title": "cron"
    }
  },
  {
      "path": "/vxe-table-demo",
      "component": Website,
      "name": "Website",
      "meta": {
        "title": "vxe-table",
      },
    },
    {
        "path": "/personal",
        "component": personalPage,
        "name": "personalPage",
        "meta": {
          "title": "个人中心",
        },
      },
      /*{
          "path": "/create-chart",
          "component": CreateChart,
          "name": "CreateChart",
          "meta": {
            "title": "创建图表",
          },
      }*/
//  {
//      "path": "/theme",
//      "component": Theme,
//      "name": "Theme",
//      "meta": {
//        "title": "主题"
//      }
//    }
]
var luyou = function() {
	var newData = [];
	var dataList = $$.modules.getComponent();
	var lists = dataList.data;
	var listss = [];
	var number = 0;
	for (var i = 0;i < lists.length;i++) {
		  if (lists[i].component) {
		    var v = lists[i].component;
		    var name = eval("typeof("+v+") == 'undefined'  ?  null : v");
		    var obj2 = null;
		    if(name!=null){
		    	obj2 = eval(""+name+ "");
		    }
		    if(obj2==null){
		    	lists[i].component = Errorinfo;
				  listss.push(lists[i]);
		    	continue;
		    }
		    lists[i].component = obj2;
		    if (lists[i].name == 'Website') {
		    	lists[i].name = 'Website' + number;
		    	number++;
		    }
		    listss.push(lists[i]);
		  } else {
			  lists[i].component = Errorinfo;
			  listss.push(lists[i]);
		  }
		}
	newData = listss.concat(data);
	return newData;
};
var router = new VueRouter({
    routes: luyou()
});

//router.beforeEach((to, from, next) => {
//	console.log('to=>',to);
//	console.log('from=>',from);
//	console.log('next=>',next);
//  if (to.matched.length === 0) { 
//	  console.log('出错to===>',to);
//	  console.log('出错to===>',from.name);
////    from.name ? next({
////      name: from.name
////    }) : next('/errorinfo'); 
//	  to.meta.title = "haha";
//	  next('/errorinfo');
//  } else {
//    next(); //如果匹配到正确跳转
//  }
//});
