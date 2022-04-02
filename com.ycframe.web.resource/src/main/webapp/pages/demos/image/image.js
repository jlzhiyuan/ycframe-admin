var elementImage  = moduleinit({
	url:'/demos/image/image.html',
	el:'#images',  
    dorender:function(content){
    	var data = {
    		template: content.template,
            name: 'elementImage', 
            data() { 
            	return {
            		scrollDiv: '',
                    scrollHeight: '',
            		isShow: true,
            		isShow1: true,
            		isShow2: true,
            		isShow3: true,
            		isShow4: true,
            		fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
                    url: 'ui/img/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    src: 'ui/img/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                    urls: [
                           'ui/img/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                           'ui/img/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                           'ui/img/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                           'ui/img/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                           'ui/img/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                           'ui/img/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                           'ui/img/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
                    ],
                    url1: 'ui/img/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    srcList1: [
                      'ui/img/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                    ],
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
            mounted() { 
            	this.scrollDiv = this.$refs.images;
                this.scrollDiv.addEventListener("scroll", this.scroll);
            },
            methods: {
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
                }
            }
              
    	}
    	return data;
    }
})