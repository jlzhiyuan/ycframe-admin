var Loading = moduleinit({
	url:'/demos/loading/loading.html', 
	el:'#loading',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Loading',
            data() {
                return {
              	  scrollDiv: '',
                    scrollHeight: '',
                  isShow: true,
                  isShow1: true,
                  isShow5: true,
                  attributes: [],
                  tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                  }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                  }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                  }],
                  loading: true,
                  loading2: true,
                  fullscreenLoading: false,
                  data: {
                    "attributes": [
                      {
                        "parameter": "target",
                        "explain": "Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点",
                        "type": "object/string",
                        "optional": "—",
                        "default":"document.body"
                      },
                      {
                        "parameter": "body",
                        "explain": "同 v-loading 指令中的 body 修饰符",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "fullscreen",
                        "explain": "同 v-loading 指令中的 fullscreen 修饰符",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "lock",
                        "explain": "同 v-loading 指令中的 lock 修饰符",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "text",
                        "explain": "显示在加载图标下方的加载文案",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "spinner",
                        "explain": "自定义加载图标类名",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "background",
                        "explain": "遮罩背景色",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "customClass",
                        "explain": "Loading 的自定义类名",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
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
              	this.scrollDiv = this.$refs.loading;
                  this.scrollDiv.addEventListener("scroll", this.scroll);
                this.attributes = this.data.attributes;
                // var that = this;
                // $.ajax({
                //   type:'get',
                //   url:'http://loading',
                //   data: {},
                //   dataType:'json',
                //   success:function(data){
                //     that.attributes = data.attributes;
                //   }
                // })
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
                openFullScreen() {
                  this.fullscreenLoading = true;
                  setTimeout(() => {
                    this.fullscreenLoading = false;
                  }, 2000);
                }
              }
	    }
	    return data;
    }
})