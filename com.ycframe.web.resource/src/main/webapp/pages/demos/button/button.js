var Button = moduleinit({
	url:'/demos/button/button.html', 
	el:'#button',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Button',
            data() {
                return {
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow3: true,
                  isShow4: true,
                  isShow5: true,
                  isShow6: true,
                  scrollDiv: '',
                  scrollHeight: '',
                  tableData: [],
                  cutColor: 'blue',
                  isCut: false,
                  open: false,
                  res: {
                    "tableData": [
                      {
                        "parameter": "size",
                        "explain": "尺寸",
                        "type": "string",
                        "optional": "medium / small / mini",
                        "default":"—"
                      },
                      {
                        "parameter": "type",
                        "explain": "类型",
                        "type": "string",
                        "optional": "primary / success / warning / danger / info / text",
                        "default": "—"
                      },
                      {
                        "parameter": "plain",
                        "explain": "朴素按钮",
                        "type": "boolean",
                        "optional": "—",
                        "default": "false"
                      },
                      {
                        "parameter": "round",
                        "explain": "圆角按钮",
                        "type": "boolean",
                        "optional": "—",
                        "default": "false"
                      },
                      {
                        "parameter": "circle",
                        "explain": "是否圆形按钮",
                        "type": "boolean",
                        "optional": "—",
                        "default": "false"
                      },
                      {
                        "parameter": "loading",
                        "explain": "是否加载状态",
                        "type": "boolean",
                        "optional": "—",
                        "default": "false"
                      },
                      {
                        "parameter": "disabled",
                        "explain": "是否禁用状态",
                        "type": "boolean",
                        "optional": "—",
                        "default": "false"
                      },
                      {
                        "parameter": "icon",
                        "explain": "图标类名",
                        "type": "string",
                        "optional": "—",
                        "default": "—"
                      },
                      {
                        "parameter": "autofocus",
                        "explain": "是否默认焦距",
                        "type": "boolean",
                        "optional": "—",
                        "default": "false"
                      },
                      {
                        "parameter": "native-type",
                        "explain": "type属性",
                        "type": "string",
                        "optional": "button / submit / reset",
                        "default": "button"
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
              computed: {
              },
              mounted() {
              	this.scrollDiv = this.$refs.button;
                  this.scrollDiv.addEventListener("scroll", this.scroll);
                this.tableData = this.res.tableData;
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
                },
                clickShow6: function() {
                  this.isShow6 = !this.isShow6;
                },
                cutBtn() {
                  this.isCut = !this.isCut;
                  if (!this.isCut) {
                    this.cutColor = 'blue'
                  } else {
                    this.cutColor = 'red'
                  }
                }
              }	
	    }
	    return data;
    }
})

