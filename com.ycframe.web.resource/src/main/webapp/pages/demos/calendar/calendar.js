var calendar = moduleinit({
	url:'/demos/calendar/calendar.html',
	el:'#calendar',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'calendar',
            data() {
                return {
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  scrollDiv: '',
                  scrollHeight: '',
                  value: new Date(),
                  calendarData: [
                     { months: ['03'],days: ['10'],things: '看电影' },
                     { months: ['03'], days: ['02'],things: '去公园野炊' },
                     { months: ['03'], days: ['02'],things: '看星星' },
                     { months: ['03'], days: ['02'],things: '看月亮' }   
                 ],
                 attributes: [
                   {
                     "parameter": "value / v-model",
                     "explain": "绑定值",
                     "type": "Date/string/number",
                     "optional": "—",
                     "default":"—"
                   },
                   {
                     "parameter": "range",
                     "explain": "时间范围，包括开始时间与结束时间。开始时间必须是周一，结束时间必须是周日，且时间跨度不能超过两个月。",
                     "type": "Array",
                     "optional": "—",
                     "default":"—"
                   },
                   {
                     "parameter": "first-day-of-week",
                     "explain": "周起始日",
                     "type": "Number",
                     "optional": "1 到 7",
                     "default":"1"
                   }
                 ],
                 slotattributes: [
                      {
                        "parameter": "date",
                        "explain": "单元格代表的日期",
                        "type": "Date",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "data",
                        "explain": "{ type, isSelected, day}，type 表示该日期的所属月份，可选值有 prev-month，current-month，next-month；isSelected 标明该日期是否被选中；day 是格式化的日期，格式为 yyyy-MM-dd",
                        "type": "Object",
                        "optional": "—",
                        "default":"—"
                      }
                    ]
                 }
              },
              watch: {
              	'$route'(to,from){
              		if (to.path == this.$route.path) {
              			this.scrollDiv.scrollTop = this.scrollHeight;
              		} 
              	},
              },
              computed:{},
              mounted(){
              	this.scrollDiv = this.$refs.calendar;
                this.scrollDiv.addEventListener("scroll", this.scroll);
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
                }
              }	
	    }
	    return data;
    }
})