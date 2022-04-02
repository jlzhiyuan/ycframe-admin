document.write("<script language=javascript src='pages/components/cron/day/day.js'></script>");
document.write("<script language=javascript src='pages/components/cron/hour/hour.js'></script>");
document.write("<script language=javascript src='pages/components/cron/month/month.js'></script>");
document.write("<script language=javascript src='pages/components/cron/secondAndMinute/secondAndMinute.js'></script>");
document.write("<script language=javascript src='pages/components/cron/week/week.js'></script>");
document.write("<script language=javascript src='pages/components/cron/year/year.js'></script>");
var cron = moduleinit({
	url:'/components/cron/cron/cron.html', 
	el:'#cron',
	dorender:function(content){
	    var data = {
			template: content.template,
	        name: 'cron',
	        props: {
	            value: {
	              type: String
	            }
	          },
	          data () {
	            return {
	              //
	              activeName: 's',
	              sVal: '',
	              mVal: '',
	              hVal: '',
	              dVal: '',
	              monthVal: '',
	              weekVal: '',
	              yearVal: ''
	            }
	          },
	          watch: {
	            'value' (a, b) {
	              this.updateVal()
	            }
	          },
	          computed: {
	            tableData () {
	              return [{
	                sVal: this.sVal,
	                mVal: this.mVal,
	                hVal: this.hVal,
	                dVal: this.dVal,
	                monthVal: this.monthVal,
	                weekVal: this.weekVal,
	                yearVal: this.yearVal
	              }]
	            },
	            value_ () {
	              if (!this.dVal && !this.weekVal) {
	                return ''
	              }
	              if (this.dVal === '?' && this.weekVal === '?') {
	                this.$message.error('日期与星期不可以同时为“不指定”')
	              }
	              if (this.dVal !== '?' && this.weekVal !== '?') {
	                this.$message.error('日期与星期必须有一个为“不指定”')
	              }
	              let v = `${this.sVal} ${this.mVal} ${this.hVal} ${this.dVal} ${this.monthVal} ${this.weekVal} ${this.yearVal}`
	              if (v !== this.value) {
	                this.$emit('input', v)
	              }
	              return v
	            }
	          },
	          methods: {
	            updateVal () {
	              if (!this.value) {
	                return
	              }
	              let arrays = this.value.split(' ')
	              this.sVal = arrays[0]
	              this.mVal = arrays[1]
	              this.hVal = arrays[2]
	              this.dVal = arrays[3]
	              this.monthVal = arrays[4]
	              this.weekVal = arrays[5]
	              this.yearVal = arrays[6]
	            }
	          },
	          created () {
	            this.updateVal()
	          },
	          components: {
	            SecondAndMinute: secondAndMinute, 
	            hour, 
	            day, 
	            month, 
	            week, 
	            year
	          }
		}
		return data;
	}
})
			    	