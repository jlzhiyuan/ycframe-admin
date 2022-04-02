var infiniteScroll  = moduleinit({
	url:'/demos/InfiniteScroll/InfiniteScroll.html',
	el:'#InfiniteScroll ',  
    dorender:function(content){
    	var data = {
    		template: content.template,
            name: 'infiniteScroll', 
            data() { 
            	return {
            		scrollDiv: '',
                    scrollHeight: '',
            		isShow: true,
            		isShow1: true,
            		count: 0,
            		count1: 10,
                    loading: false,
                    attributes: [
					    {
						    "parameter": "infinite-scroll-disabled",
						    "explain": "是否禁用",
						    "type": "boolean",
						    "optional": "-",
						    "default":"false"
					    },
					    {
						    "parameter": "infinite-scroll-delay",
						    "explain": "节流时延，单位为ms",
						    "type": "number",
						    "optional": "-",
						    "default":"200"
					    },
					    {
						    "parameter": "infinite-scroll-distance",
						    "explain": "触发加载的距离阈值，单位为px",
						    "type": "number",
						    "optional": "-",
						    "default":"0"
					    },
					    {
						    "parameter": "infinite-scroll-immediate",
						    "explain": "是否立即执行加载方法，以防初始状态下内容无法撑满容器。",
						    "type": "boolean",
						    "optional": "-",
						    "default":"true"
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
            computed: {
                noMore () {
                  return this.count1 >= 20
                },
                disabled () {
                  return this.loading || this.noMore
                }
            },
            mounted() { 
            	this.scrollDiv = this.$refs.InfiniteScroll;
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
                load () {
                	this.count += 2
                },
                load1 () {
                    this.loading = true
                    setTimeout(() => {
                      this.count1 += 2
                      this.loading = false
                    }, 2000)
                }
            }
              
    	}
    	return data;
    }
})