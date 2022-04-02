var Breadcrumb = moduleinit({
	url:'/demos/breadcrumb/breadcrumb.html', 
	el:'#breadcrumb',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Breadcrumb',
            data() {
                return {
                	isShow: true,
                    isShow1: true,
                    ItemAttributes: [],
                    attributes: [],
                    data: {
                      "attributes": [
                        {
                          "parameter": "separator",
                          "explain": "分隔符",
                          "type": "string",
                          "optional": "—",
                          "default":"斜杠'/'"
                        },
                        {
                          "parameter": "separator-class",
                          "explain": "图标分隔符 class",
                          "type": "string",
                          "optional": "—",
                          "default":"—"
                        }
                      ],
                      "ItemAttributes": [
                        {
                          "parameter": "to",
                          "explain": "路由跳转对象，同 vue-router 的 to",
                          "type": "string/object",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "replace",
                          "explain": "在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录",
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
            watch: {
            	'$route'(to,from){
            		if (to.path == this.$route.path) {
            			this.scrollDiv.scrollTop = this.scrollHeight;
            		} 
            	}
            },
            computed: {
            },
            mounted() {
            	this.scrollDiv = this.$refs.breadcrumb;
                this.scrollDiv.addEventListener("scroll", this.scroll);
                this.attributes = this.data.attributes;
                this.ItemAttributes = this.data.ItemAttributes;
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
                }
            }	
	    }
	    return data;
    }
})
