document.write("<script language=javascript src='pages/components/empty/empty.js'></script>");
var EmptyStatus = moduleinit({
	url:'/demos/emptyStatus/emptyStatus.html',
	el:'#emptyStatus',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'EmptyStatus',
            components: {
                empty: Empty
              },
            data() {
                return {
                	scrollDiv: '',
                    scrollHeight: '',
                  isShow: true,
                  isShow1: true,
                  attributes: [],
                  image: 'ui/img/empty.png',
                  content: 'Empty 空状态',
                  data: {
                    "attributes": [
                      {
                        "parameter": "image",
                        "explain": "设置显示图片，为 string 时表示自定义图片地址。",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "content",
                        "explain": "自定义描述内容",
                        "type": "String",
                        "optional": "—",
                        "default":"暂无数据"
                      },
                      {
                        "parameter": "height",
                        "explain": "图片大小",
                        "type": "string",
                        "optional": "—",
                        "default":"80px"
                      }
                    ]
                  }
                }
            },
            watch: {
            	'$route'(to,from){
            		if (to.path == this.$route.path) {
            			this.scrollDiv.scrollTop = this.scrollHeight;
            		} 
            	}
            },
            mounted() {
            	this.scrollDiv = this.$refs.emptyStatus;
                this.scrollDiv.addEventListener("scroll", this.scroll);
                this.attributes = this.data.attributes;
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
