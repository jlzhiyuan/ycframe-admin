var popconfirm = moduleinit({
	url:'/demos/popconfirm/popconfirm.html', 
	el:'#popconfirm',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'popconfirm',
            data() {
                return {
                  isShow: true,
                  isShow1: true,
                  scrollDiv: '',
                  scrollHeight: '',
                  data: {
                    "attributes": [
                      {
                        "parameter": "title",
                        "explain": "标题",
                        "type": "string",
                        "optional": "-",
                        "default":"-"
                      },
                      {
                        "parameter": "confirmButtonText",
                        "explain": "确认按钮文字",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "cancelButtonText",
                        "explain": "取消按钮文字",
                        "type": "string",
                        "optional": "—",
                        "default":"_"
                      },
                      {
                        "parameter": "confirmButtonType",
                        "explain": "确认按钮类型",
                        "type": "String",
                        "optional": "—",
                        "default":"primary"
                      },
                      {
                        "parameter": "cancelButtonType",
                        "explain": "取消按钮类型",
                        "type": "string",
                        "optional": "-",
                        "default":"Text"
                      },
                      {
                        "parameter": "icon",
                        "explain": "icon",
                        "type": "string",
                        "optional": "—",
                        "default":"el-icon-question"
                      },
                      {
                          "parameter": "iconColor",
                          "explain": "icon颜色",
                          "type": "string",
                          "optional": "—",
                          "default":"#f90"
                        },
                        {
                            "parameter": "hideIcon",
                            "explain": "是否隐藏icon",
                            "type": "boolean",
                            "optional": "—",
                            "default":"false"
                          },
                    ],
                    slot: [
                       {
                    	   parameter: 'reference',
                    	   explain: '触发 Popconfirm 显示的 HTML 元素'
                       }
                    ]
                  }
                }
              },
              computed: {},
              watch: {
              	'$route'(to,from){
              		if (to.path == this.$route.path) {
              			this.scrollDiv.scrollTop = this.scrollHeight;
              		} 
              	},
              },
              mounted(){
              	this.scrollDiv = this.$refs.popconfirm;
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
