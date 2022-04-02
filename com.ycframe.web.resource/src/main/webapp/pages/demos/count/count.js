document.write("<script language=javascript src='pages/components/statistic/statistic.js'></script>");
var Count = moduleinit({
	url:'/demos/count/count.html',
	el:'#count',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Count',
            components: {
              statistic: Statistic
            },
            data() {
                return {
                	valuenumber: '90000',
                	valuenumber1: 90000,
                	scrollDiv: '',
                    scrollHeight: '',
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow5: true,
                  attributes: [],
                  data: {
                    "attributes": [
                      {
                        "parameter": "precision",
                        "explain": "数值精度",
                        "type": "number",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "prefix",
                        "explain": "设置数值的前缀",
                        "type": "string",
                        "optional": "el-icon-upload2 / el-icon-download",
                        "default":"—"
                      },
                      {
                        "parameter": "suffix",
                        "explain": "设置数值的后缀",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "title",
                        "explain": "数值的标题",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "value",
                        "explain": "数字内容",
                        "type": "string/number",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "color",
                        "explain": "设置字体颜色",
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
            mounted() {
            	this.scrollDiv = this.$refs.count;
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
              },
              clickShow2: function() {
                this.isShow2 = !this.isShow2;
              },
              clickShow5: function() {
                this.isShow5 = !this.isShow5;
              }
            }	
	    }
	    return data;
    }
})