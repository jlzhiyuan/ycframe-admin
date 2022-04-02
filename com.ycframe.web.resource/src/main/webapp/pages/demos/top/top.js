var Top = moduleinit({
	url:'/demos/top/top.html', 
	el:'#top',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Top',
            data() {
                return {
                	isShow: true,
                    isShow1: true,
                    attributes: [
        				{
        				    "parameter": "target",
        				    "explain": "	触发滚动的对象",
        				    "type": "string",
        				    "optional": "",
        				    "default":""
        				},
        				{
        				    "parameter": "visibility-height",
        				    "explain": "滚动高度达到此参数值才出现",
        				    "type": "number",
        				    "optional": "",
        				    "default":"200"
        				},
        				{
        				    "parameter": "right",
        				    "explain": "控制其显示位置, 距离页面右边距",
        				    "type": "number",
        				    "optional": "",
        				    "default":"40"
        				},
        				{
        				    "parameter": "bottom",
        				    "explain": "控制其显示位置, 距离页面底部距离",
        				    "type": "number",
        				    "optional": "",
        				    "default":"40"
        				}
                    ],
                    events: [
        				{
        				    "name": "click",
        				    "explain": "点击按钮触发的事件",
        				    "parameter": "点击事件"
        				  }
                    ]
                 }
              },
              computed: {},
              watch: {
              },
              mounted(){
               
              },
              methods: {
            	  clickShow() {
                      this.isShow = !this.isShow;
                    },
                    clickShow1() {
          	          this.isShow1 = !this.isShow1;
          	        }
              }
	    }
	    return data;
    }
})