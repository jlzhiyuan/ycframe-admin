var tooltip = moduleinit({
	url:'/demos/tooltip/tooltip.html',
	el:'#tooltip',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'tooltip',
            data() {
                return {
              	  scrollDiv: '',
                  scrollHeight: '',
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow3: true,
                  attributes: [],
                  disabled: false,
                  data: {
                    "attributes": [
                      {
                        "parameter": "effect",
                        "explain": "默认提供的主题",
                        "type": "string",
                        "optional": "dark/light",
                        "default":"dark"
                      },
                      {
                        "parameter": "content",
                        "explain": "显示的内容，也可以通过 slot#content 传入 DOM",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "placement",
                        "explain": "Tooltip 的出现位置",
                        "type": "string",
                        "optional": "top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end",
                        "default":"bottom"
                      },
                      {
                        "parameter": "value / v-model",
                        "explain": "状态是否可见",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "disabled",
                        "explain": "Tooltip 是否可用",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "offset",
                        "explain": "出现位置的偏移量",
                        "type": "number",
                        "optional": "—",
                        "default":"0"
                      },
                      {
                        "parameter": "transition",
                        "explain": "定义渐变动画",
                        "type": "string",
                        "optional": "—",
                        "default":"el-fade-in-linear"
                      },
                      {
                        "parameter": "visible-arrow",
                        "explain": "是否显示 Tooltip 箭头，更多参数可见Vue-popper",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "popper-options",
                        "explain": "popper.js 的参数",
                        "type": "object",
                        "optional": "参考 popper.js 文档",
                        "default":"{ boundariesElement: 'body', gpuAcceleration: false }"
                      },
                      {
                        "parameter": "open-delay",
                        "explain": "延迟出现，单位毫秒",
                        "type": "number",
                        "optional": "—",
                        "default":"0"
                      },
                      {
                        "parameter": "manual",
                        "explain": "手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "popper-class",
                        "explain": "为 Tooltip 的 popper 添加类名",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "enterable",
                        "explain": "鼠标是否可进入到 tooltip 中",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "hide-after",
                        "explain": "Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏",
                        "type": "number",
                        "optional": "—",
                        "default":"0"
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
              	 this.scrollDiv = this.$refs.tooltip;
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
                clickShow3: function() {
                   this.isShow3 = !this.isShow3;
                }
            }
	    }
	    return data;
    }
})


//var tooltip = function(resolve, reject) {
//  $.ajax({
//    url:'pages/components/tooltip/tooltip.html',
//    type:"GET",
//    dataType:"html",
//    success:function(result){
//      var Obj = $("<code></code>").append($(result));//包装数据
//      var $html = $("#tooltip", Obj);
//      var value = $html.html();
//      resolve({
//        template: value,
//        name: 'tooltip',
//        data() {
//          return {
//        	  scrollDiv: '',
//              scrollHeight: '',
//            isShow: true,
//            attributes: [],
//            data: {
//              "attributes": [
//                {
//                  "parameter": "effect",
//                  "explain": "默认提供的主题",
//                  "type": "string",
//                  "optional": "dark/light",
//                  "default":"dark"
//                },
//                {
//                  "parameter": "content",
//                  "explain": "显示的内容，也可以通过 slot#content 传入 DOM",
//                  "type": "string",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "placement",
//                  "explain": "Tooltip 的出现位置",
//                  "type": "string",
//                  "optional": "top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end",
//                  "default":"bottom"
//                },
//                {
//                  "parameter": "value / v-model",
//                  "explain": "状态是否可见",
//                  "type": "boolean",
//                  "optional": "—",
//                  "default":"false"
//                },
//                {
//                  "parameter": "disabled",
//                  "explain": "Tooltip 是否可用",
//                  "type": "boolean",
//                  "optional": "—",
//                  "default":"false"
//                },
//                {
//                  "parameter": "offset",
//                  "explain": "出现位置的偏移量",
//                  "type": "number",
//                  "optional": "—",
//                  "default":"0"
//                },
//                {
//                  "parameter": "transition",
//                  "explain": "定义渐变动画",
//                  "type": "string",
//                  "optional": "—",
//                  "default":"el-fade-in-linear"
//                },
//                {
//                  "parameter": "visible-arrow",
//                  "explain": "是否显示 Tooltip 箭头，更多参数可见Vue-popper",
//                  "type": "boolean",
//                  "optional": "—",
//                  "default":"true"
//                },
//                {
//                  "parameter": "popper-options",
//                  "explain": "popper.js 的参数",
//                  "type": "object",
//                  "optional": "参考 popper.js 文档",
//                  "default":"{ boundariesElement: 'body', gpuAcceleration: false }"
//                },
//                {
//                  "parameter": "open-delay",
//                  "explain": "延迟出现，单位毫秒",
//                  "type": "number",
//                  "optional": "—",
//                  "default":"0"
//                },
//                {
//                  "parameter": "manual",
//                  "explain": "手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效",
//                  "type": "boolean",
//                  "optional": "—",
//                  "default":"false"
//                },
//                {
//                  "parameter": "popper-class",
//                  "explain": "为 Tooltip 的 popper 添加类名",
//                  "type": "string",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "enterable",
//                  "explain": "鼠标是否可进入到 tooltip 中",
//                  "type": "boolean",
//                  "optional": "—",
//                  "default":"true"
//                },
//                {
//                  "parameter": "hide-after",
//                  "explain": "Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏",
//                  "type": "number",
//                  "optional": "—",
//                  "default":"0"
//                }
//              ]
//            }
//          }
//        },
//        computed: {
//        },
//        watch: {
//        	'$route'(to,from){
//        		if (to.path == this.$route.path) {
//        			this.scrollDiv.scrollTop = this.scrollHeight;
//        		} 
//        	},
//        },
//        mounted(){
//        	 this.scrollDiv = this.$refs.tooltip;
//             this.scrollDiv.addEventListener("scroll", this.scroll);
//          this.attributes = this.data.attributes;
//          // var that = this;
//          // $.ajax({
//          //   type:'get',
//          //   url:'http://tooltip',
//          //   data: {},
//          //   dataType:'json',
//          //   success:function(data){
//          //     that.attributes = data.attributes;
//          //   }
//          // })
//        },
//        methods: {
//        	scroll() {
//        		this.scrollHeight = this.scrollDiv.scrollTop;
//            },
//          clickShow: function() {
//            this.isShow = !this.isShow;
//          }
//        }
//      })
//    }
//  });
//};
