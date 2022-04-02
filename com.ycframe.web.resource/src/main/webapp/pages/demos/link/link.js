var elementLink = moduleinit({
	url:'/demos/link/link.html',
	el:'#link',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'elementLink',
            data() {
                return {
              	  scrollDiv: '',
                  scrollHeight: '',
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow3: true,
                  Attributes: [],
                  data: {
                    "Attributes": [
                      {
                        "parameter": "type",
                        "explain": "类型",
                        "type": "string",
                        "optional": "primary / success / warning / danger / info",
                        "default":"default"
                      },
                      {
                        "parameter": "underline",
                        "explain": "是否下划线",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "disabled",
                        "explain": "是否禁用状态",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "href",
                        "explain": "原生 href 属性",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "icon",
                        "explain": "图标类名",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
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
              	},
              },
              mounted(){
              	this.scrollDiv = this.$refs.link;
                  this.scrollDiv.addEventListener("scroll", this.scroll);
                this.Attributes = this.data.Attributes;
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
                },
                clickShow3: function() {
                    this.isShow3 = !this.isShow3;
                }
            }
	    }
	    return data;
    }
})