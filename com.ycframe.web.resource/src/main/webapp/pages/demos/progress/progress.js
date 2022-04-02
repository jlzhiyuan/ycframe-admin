var elementProgress = moduleinit({
	url:'/demos/progress/progress.html',
	el:'#progress',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'elementProgress',
            data() {
                return {
              	  scrollDiv: '',
                  scrollHeight: '',
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow3: true,
                  isShow4: true,
                  Attributes: [],
                  data: {
                    "Attributes": [
                      {
                        "parameter": "percentage",
                        "explain": "百分比（必填）",
                        "type": "number",
                        "optional": "1-100",
                        "default":"0"
                      },
                      {
                        "parameter": "type",
                        "explain": "进度条类型",
                        "type": "string",
                        "optional": "line/circle/dashboard",
                        "default":"line"
                      },
                      {
                        "parameter": "stroke-width",
                        "explain": "进度条的宽度，单位 px",
                        "type": "number",
                        "optional": "—",
                        "default":"6"
                      },
                      {
                        "parameter": "text-inside",
                        "explain": "进度条显示文字内置在进度条内（只在 type=line 时可用）",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "status",
                        "explain": "进度条当前状态",
                        "type": "string",
                        "optional": "success/exception/warning",
                        "default":"-"
                      },
                      {
                          "parameter": "color",
                          "explain": "进度条背景色（会覆盖 status 状态颜色）",
                          "type": "	string/function/array",
                          "optional": "—",
                          "default":"-"
                      },
                      {
                          "parameter": "width",
                          "explain": "环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）",
                          "type": "number",
                          "optional": "—",
                          "default":"126"
                      },
                      {
                          "parameter": "show-text",
                          "explain": "是否显示进度条文字内容",
                          "type": "boolean",
                          "optional": "—",
                          "default":"true"
                      },
                      {
                          "parameter": "stroke-linecap",
                          "explain": "circle/dashboard 类型路径两端的形状",
                          "type": "string",
                          "optional": "butt/round/square",
                          "default":"round"
                      }
                    ]
                  },
                  percentage: 20,
                  customColor: '#409eff',
                  customColors: [
                    {color: '#f56c6c', percentage: 20},
                    {color: '#e6a23c', percentage: 40},
                    {color: '#5cb87a', percentage: 60},
                    {color: '#1989fa', percentage: 80},
                    {color: '#6f7ad3', percentage: 100}
                  ],
                  percentage1: 10,
                  colors: [
                    {color: '#f56c6c', percentage: 20},
                    {color: '#e6a23c', percentage: 40},
                    {color: '#5cb87a', percentage: 60},
                    {color: '#1989fa', percentage: 80},
                    {color: '#6f7ad3', percentage: 100}
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
              mounted(){
              	this.scrollDiv = this.$refs.progress;
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
                },
                clickShow4: function() {
                    this.isShow4 = !this.isShow4;
                },
                format(percentage) {
                    return percentage === 100 ? '满' : `${percentage}%`;
                },
                customColorMethod(percentage) {
	                if (percentage < 30) {
	                  return '#909399';
	                } else if (percentage < 70) {
	                  return '#e6a23c';
	                } else {
	                  return '#67c23a';
	                }
	            },
	            increase() {
	                this.percentage += 10;
	                if (this.percentage > 100) {
	                  this.percentage = 100;
	                }
	            },
	            decrease() {
	                this.percentage -= 10;
	                if (this.percentage < 0) {
	                  this.percentage = 0;
	                }
	            },
	            increase1() {
	                this.percentage += 10;
	                if (this.percentage > 100) {
	                  this.percentage = 100;
	                }
	            },
	            decrease1() {
	                this.percentage -= 10;
	                if (this.percentage < 0) {
	                  this.percentage = 0;
	                }
	            }
            }
	    }
	    return data;
    }
})