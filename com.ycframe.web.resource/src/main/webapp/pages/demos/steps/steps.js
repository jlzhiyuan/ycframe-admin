var Steps = moduleinit({
	url:'/demos/steps/steps.html', 
	el:'#steps',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Steps',
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
                  isShow6: true,
                  attributes: [],
                  slot: [],
                  ItemAttributes: [],
                  active: 0,
                  data: {
                    "attributes": [
                      {
                        "parameter": "space",
                        "explain": "每个 step 的间距，不填写将自适应间距。支持百分比",
                        "type": "number / string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "direction",
                        "explain": "显示方向",
                        "type": "string",
                        "optional": "	vertical/horizontal",
                        "default":"horizontal"
                      },
                      {
                        "parameter": "active",
                        "explain": "设置当前激活步骤",
                        "type": "number",
                        "optional": "—",
                        "default":"0"
                      },
                      {
                        "parameter": "process-status",
                        "explain": "设置当前步骤的状态",
                        "type": "string",
                        "optional": "	wait / process / finish / error / success",
                        "default":"process"
                      },
                      {
                        "parameter": "finish-status",
                        "explain": "设置结束步骤的状态",
                        "type": "string",
                        "optional": "	wait / process / finish / error / success",
                        "default":"finish"
                      },
                      {
                        "parameter": "align-center",
                        "explain": "进行居中对齐",
                        "type": "string",
                        "optional": "	vertical/horizontal",
                        "default":"horizontal"
                      },
                      {
                        "parameter": "simple",
                        "explain": "是否应用节俭风格",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      }
                    ],
                    "ItemAttributes": [
                      {
                        "parameter": "title",
                        "explain": "说明",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "description",
                        "explain": "描述性文字",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "icon",
                        "explain": "图标",
                        "type": "传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入",
                        "optional": "string",
                        "default":"—"
                      },
                      {
                        "parameter": "status",
                        "explain": "设置当前步骤的状态，不设置则根据 steps 确定状态",
                        "type": "wait / process / finish / error / success",
                        "optional": "—",
                        "default":"—"
                      }
                    ],
                    "slot": [
                      {
                        "parameter": "icon",
                        "explain": "自定义图标"
                      },
                      {
                        "parameter": "title",
                        "explain": "自定义标题"
                      },
                      {
                        "parameter": "description",
                        "explain": "自定义描述性文字"
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
              	 this.scrollDiv = this.$refs.steps;
                   this.scrollDiv.addEventListener("scroll", this.scroll);
                this.attributes = this.data.attributes;
                this.ItemAttributes = this.data.ItemAttributes;
                this.slot = this.data.slot;
                // var that = this;
                // $.ajax({
                //   type:'get',
                //   url:'http://steps',
                //   data: {},
                //   dataType:'json',
                //   success:function(data){
                //     that.attributes = data.attributes;
                //     that.ItemAttributes = data.ItemAttributes;
                //     that.slot = data.slot;
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
                next() {
                  if (this.active++ > 2) this.active = 0;
                }
              }
	    }
	    return data;
    }
})