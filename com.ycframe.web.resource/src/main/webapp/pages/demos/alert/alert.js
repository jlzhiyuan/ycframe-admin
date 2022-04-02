var alertwarn = moduleinit({
	url:'/demos/alert/alert.html', 
	el:'#alertwarn',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'alertwarn',
            data() {
                return {
                  scrollDiv: '',
                  scrollHeight: '',
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow4: true,
                  isShow5: true,
                  isShow3: true,
                  isShow6: true,
                  isShow7: true,
                  attributes: [],
                  data: {
                    "attributes": [
                      {
                        "parameter": "title",
                        "explain": "标题",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "type",
                        "explain": "主题",
                        "type": "success/warning/info/error",
                        "optional": "—",
                        "default":"info"
                      },
                      {
                        "parameter": "description",
                        "explain": "	辅助性文字。也可通过默认 slot 传入",
                        "type": "string",
                        "optional": "—",
                        "default":"-"
                      },
                      {
                        "parameter": "closable",
                        "explain": "是否可关闭",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "center",
                        "explain": "文字是否居中",
                        "type": "boolean",
                        "optional": "-",
                        "default":"true"
                      },
                      {
	                      "parameter": "close-text",
	                      "explain": "关闭按钮自定义文本",
	                      "type": "string",
	                      "optional": "-",
	                      "default":"-"
                     },
                     {
                        "parameter": "show-icon",
                        "explain": "是否显示图标",
                        "type": "boolean",
                        "optional": "-",
                        "default":"false"
                      },
                      {
                          "parameter": "effect",
                          "explain": "选择提供的主题",
                          "type": "string",
                          "optional": "light/dark",
                          "default":"light"
                       }
                     ]
                  },
                  slot: [
                         {
                        	 name: '-',
                        	 description: '描述'
                         },
                         {
                        	 name: 'title',
                        	 description: '标题的内容'
                         }
                  ],
                  events: [
                         {
                        	 name: 'close',
                        	 explain: '关闭alert时触发的事件',
                        	 parameter: '-'
                         }
                  ]
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
            	  this.scrollDiv = this.$refs.alertwarn;
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
                clickShow4: function() {
                  this.isShow4 = !this.isShow4;
                },
                clickShow5: function() {
                  this.isShow5 = !this.isShow5;
                },
                clickShow3: function() {
                    this.isShow3 = !this.isShow3;
                },
                clickShow6: function() {
                    this.isShow6 = !this.isShow6;
                },
                clickShow7: function() {
                    this.isShow7 = !this.isShow7;
                }
            }	
	    }
	    return data;
    }
})