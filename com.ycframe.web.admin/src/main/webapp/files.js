var uiurl = 'ui';
var pageurl = 'pages';
document.write("<script language=javascript src='"+pageurl+"/system/home/home.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/system/personal/personal.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/cron/index.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/orgTree/orgTree.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/dragElement/dragElement.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/calendar/calendar.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/progress/progress.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/popconfirm/popconfirm.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/alert/alert.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/rate/rate.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/link/link.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/colorPicker/colorPicker.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/InfiniteScroll/InfiniteScroll.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/echarts/echarts.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/input/input.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/popover/popover.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/button/button.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/icon/icon.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/form/form.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/table/table.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/tree/tree.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/pagination/pagination.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/dialog/dialog.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/tabs/tabs.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/dropdown/dropdown.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/components/i18n/index.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/table/dynamicTable.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/top/top.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/layout/layout.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/radio/radio.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/checkbox/checkbox.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/timePicker/timePicker.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/datePicker/datePicker.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/dateTimePicker/dateTimePicker.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/upload/upload.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/switch/switch.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/components/sticky/sticky.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/tooltip/tooltip.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/collapse/collapse.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/inputNumber/inputNumber.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/notification/notification.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/transfer/transfer.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/components/details/details.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/select/select.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/cascader/cascader.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/timeline/timeline.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/loading/loading.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/carousel/carousel.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/steps/steps.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/breadcrumb/breadcrumb.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/badge/badge.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/drawer/drawer.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/image/image.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/message/message.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/emptyStatus/emptyStatus.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/tag/tag.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/card/card.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/count/count.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/demos/container/container.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/components/sidebar/sidebar.js'></script>");
document.write("<script language=javascript src='"+pageurl+"/components/errorinfo/error.js'></script>");
var data = $$.modules.getComponent();
var lists = data.data;
lists.push({url: "/components/website/index.js"});
lists.unshift({url: "/components/website/index.js"});
for (var i = 0;i < lists.length;i++) {
	var a = pageurl + lists[i].url;
	if (lists[i].url != '') {
		document.write("<script language=javascript src='"+a+"'></script>");
	} 
}
  