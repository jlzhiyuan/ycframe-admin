var collapse = moduleinit({
	url:'/demos/collapse/collapse.html', 
	el:'#collapse',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'collapse',
            data() {
                return {
              	  scrollDiv: '',
                    scrollHeight: '',
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  activeNames: ['1'],
                  activeName: '1',
                  itemAttributes: [],
                  attributes: [],
                  events: [],
                  data: {
                    "attributes": [
                      {
                        "parameter": "value / v-model",
                        "explain": "当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)",
                        "type": "string / array",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "accordion",
                        "explain": "是否手风琴模式",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      }
                    ],
                    "events": [
                      {
                        "name": "change",
                        "explain": "当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为string，否则为array)",
                        "parameter": "(activeNames: array / string)"
                      }
                    ],
                    "itemAttributes": [
                      {
                        "parameter": "name",
                        "explain": "唯一标志符",
                        "type": "string/number",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "title",
                        "explain": "面板标题",
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
              	 this.scrollDiv = this.$refs.collapse;
                   this.scrollDiv.addEventListener("scroll", this.scroll);
                this.attributes = this.data.attributes;
                this.events = this.data.events;
                this.itemAttributes = this.data.itemAttributes;
                // var that = this;
                // $.ajax({
                //   type:'get',
                //   url:'http://collapse',
                //   data: {},
                //   async: true,
                //   dataType:'json',
                //   success:function(data){
                //     that.attributes = data.attributes;
                //     that.events = data.events;
                //     that.itemAttributes = data.itemAttributes;
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
                clickShow2: function() {
                  this.isShow2 = !this.isShow2;
                },
                handleChange(val) {
                  console.log(val);
                }
              }
	    }
	    return data;
    }
})