var layout = moduleinit({
	url:'/demos/layout/layout.html',
	el:'#layout',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'layout',
            data() {
                return {
              	  scrollDiv: '',
                    scrollHeight: '',
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow3: true,
                  isShow4: true,
                  isShow5: true,
                  colAttributes: [],
                  rowAttributes: [],
                  data: {
                    "rowAttributes": [
                      {
                        "parameter": "gutter",
                        "explain": "栅格间隔",
                        "type": "number",
                        "optional": "—",
                        "default":"0"
                      },
                      {
                        "parameter": "type",
                        "explain": "布局模式，可选 flex，现代浏览器下有效",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "justify",
                        "explain": "flex 布局下的水平排列方式",
                        "type": "string",
                        "optional": "start/end/center/space-around/space-between",
                        "default":"start"
                      },
                      {
                        "parameter": "align",
                        "explain": "lex 布局下的垂直排列方式",
                        "type": "string",
                        "optional": "top/middle/bottom",
                        "default":"top"
                      },
                      {
                        "parameter": "tag",
                        "explain": "自定义元素标签",
                        "type": "string",
                        "optional": "—",
                        "default":"div"
                      }
                    ],
                    "colAttributes": [
                      {
                        "parameter": "span",
                        "explain": "栅格占据的列数",
                        "type": "number",
                        "optional": "—",
                        "default":"24"
                      },
                      {
                        "parameter": "offset",
                        "explain": "栅格左侧的间隔格数",
                        "type": "number",
                        "optional": "—",
                        "default":"0"
                      },
                      {
                        "parameter": "push",
                        "explain": "栅格向右移动格数",
                        "type": "number",
                        "optional": "—",
                        "default":"0"
                      },
                      {
                        "parameter": "pull",
                        "explain": "栅格向左移动格数",
                        "type": "number",
                        "optional": "—",
                        "default":"0"
                      },
                      {
                        "parameter": "xs",
                        "explain": "<768px 响应式栅格数或者栅格属性对象",
                        "type": "number/object (例如： {span: 4, offset: 4})",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "sm",
                        "explain": "≥768px 响应式栅格数或者栅格属性对象",
                        "type": "number/object (例如： {span: 4, offset: 4})",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "md",
                        "explain": "≥992px 响应式栅格数或者栅格属性对象",
                        "type": "number/object (例如： {span: 4, offset: 4})",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "lg",
                        "explain": "≥1200px 响应式栅格数或者栅格属性对象",
                        "type": "number/object (例如： {span: 4, offset: 4})",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "xl",
                        "explain": "≥1920px 响应式栅格数或者栅格属性对象",
                        "type": "number/object (例如： {span: 4, offset: 4})",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "tag",
                        "explain": "自定义元素标签",
                        "type": "string",
                        "optional": "—",
                        "default":"div"
                      },
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
              	this.scrollDiv = this.$refs.layout;
                  this.scrollDiv.addEventListener("scroll", this.scroll);
                this.rowAttributes = this.data.rowAttributes;
                this.colAttributes = this.data.colAttributes;
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
                },
                clickShow4: function() {
                    this.isShow4 = !this.isShow4;
                },
                clickShow5: function() {
                   this.isShow5 = !this.isShow5;
                }
            }
	    }
	    return data;
    }
})