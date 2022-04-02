document.write("<script language=javascript src='pages/components/cron/cron/cron.js'></script>");
var cronpage = moduleinit({
	url:'/demos/cron/index.html', 
	el:'#cronpage',
	dorender:function(content){
	    var data = {
			template: content.template,
	        name: 'cronpage',
	        components: {
	            cron
	        },
	        data () {
	            return {
	              scrollDiv: '',
                  scrollHeight: '',
	              isShow: true,
	              isShow1: true,
	              showCronBox: false,
	              form: {
	                cronExpression: ''
	              },
	              form1: {
		             cronExpression: ''
		          },
	              dialogVisible: false
	            }
	        },
	        watch: {
            	'$route'(to,from){
            		if (to.path == this.$route.path) {
            			this.scrollDiv.scrollTop = this.scrollHeight;
            		} 
            	},
            },
            mounted() {
            	this.scrollDiv = this.$refs.cronpage;
                this.scrollDiv.addEventListener("scroll", this.scroll);
            },
	        methods: {
	        	scroll() {
	                this.scrollHeight = this.scrollDiv.scrollTop;
	            },
	        	clickShow() {
	        		this.isShow = !this.isShow;
	        	},
	        	clickShow1() {
	        		this.isShow1 = !this.isShow1;
	        	}
	        }
		}
		return data;
	}
})
			    	