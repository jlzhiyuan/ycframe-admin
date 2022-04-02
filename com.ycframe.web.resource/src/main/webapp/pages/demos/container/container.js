var Container = moduleinit({
	url:'/demos/container/container.html',
	el:'#container',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Container',
            data() {
            	var item = {
            	        date: '2016-05-02',
            	        name: '王小虎',
            	        address: '上海市普陀区金沙江路 1518 弄'
            	};
                return {
                  tableData: Array(20).fill(item),
              	  scrollDiv: '',
                  scrollHeight: '',
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow3: true,
                  isShow4: true,
                  isShow5: true,
                  isShow6: true,
                  isShow7: true,
                  attributes: [],
                  HeaderAttributes: [],
                  AsideAttributes: [],
                  FooterAttributes: [],
                  data: {
                    "attributes": [
                      {
                        "parameter": "direction",
                        "explain": "子元素的排列方向",
                        "type": "string",
                        "optional": "horizontal / vertical",
                        "default":"子元素中有 el-header 或 el-footer 时为 vertical，否则为 horizontal"
                      }
                    ],
                    "HeaderAttributes": [
                      {
                        "parameter": "height",
                        "explain": "顶栏高度",
                        "type": "string",
                        "optional": "—",
                        "default":"60px"
                      }
                    ],
                    "AsideAttributes": [
                      {
                        "parameter": "width",
                        "explain": "侧边栏宽度",
                        "type": "string",
                        "optional": "—",
                        "default":"300px"
                      }
                    ],
                    "FooterAttributes": [
                      {
                        "parameter": "height",
                        "explain": "底栏高度",
                        "type": "string",
                        "optional": "—",
                        "default":"60px"
                      }
                    ]
                  }
                }
              },
              computed: {
              },
              watch: {
              	'$route'(to,from){
              		if (to.path == this.$route.path) {
              			this.scrollDiv.scrollTop = this.scrollHeight;
              		} 
              	},
              },
              mounted(){
              	this.scrollDiv = this.$refs.container;
                  this.scrollDiv.addEventListener("scroll", this.scroll);
                this.attributes = this.data.attributes;
                this.HeaderAttributes = this.data.HeaderAttributes;
                this.AsideAttributes = this.data.AsideAttributes;
                this.FooterAttributes = this.data.FooterAttributes;
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
                clickShow5: function() {
                  this.isShow5 = !this.isShow5;
                },
                clickShow2: function() {
                    this.isShow2 = !this.isShow2;
                },
                clickShow3: function() {
                    this.isShow3 = !this.isShow3;
                },
                clickShow4: function() {
                    this.isShow4 = !this.isShow4;
                },
                clickShow6: function() {
                    this.isShow6 = !this.isShow6;
                },
                clickShow7: function() {
                    this.isShow7 = !this.isShow7;
                },
            }
	    }
	    return data;
    }
})