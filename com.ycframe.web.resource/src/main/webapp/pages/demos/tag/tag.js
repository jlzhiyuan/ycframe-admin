var Tag = moduleinit({
	url:'/demos/tag/tag.html', 
	el:'#tag',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Tag',
            data() {
                return {
              	  scrollDiv: '',
                    scrollHeight: '',
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow3: true,
                  isShow5: true,
                  items: [
	                  { type: '', label: '标签一' },
	                  { type: 'success', label: '标签二' },
	                  { type: 'info', label: '标签三' },
	                  { type: 'danger', label: '标签四' },
	                  { type: 'warning', label: '标签五' }
	              ],
                  attributes: [],
                  events: [],
                  tags: [
                    { name: '标签一', type: '' },
                    { name: '标签二', type: 'success' },
                    { name: '标签三', type: 'info' },
                    { name: '标签四', type: 'warning' },
                    { name: '标签五', type: 'danger' }
                  ],
                  dynamicTags: ['标签一', '标签二', '标签三'],
                  inputVisible: false,
                  inputValue: '',
                  data: {
                    "attributes": [
                      {
                        "parameter": "type",
                        "explain": "主题",
                        "type": "string",
                        "optional": "success/info/warning/danger",
                        "default":"—"
                      },
                      {
                        "parameter": "closable",
                        "explain": "是否可关闭",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "disable-transitions",
                        "explain": "是否禁用渐变动画",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "hit",
                        "explain": "是否有边框描边",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "color",
                        "explain": "背景色",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "size",
                        "explain": "尺寸",
                        "type": "string",
                        "optional": "medium / small / mini",
                        "default":"—"
                      }
                    ],
                    "events": [
                      {
                        "name": "click",
                        "explain": "点击 Tag 时触发的事件",
                        "parameter": "—"
                      },
                      {
                        "name": "close",
                        "explain": "关闭 Tag 时触发的事件",
                        "parameter": "—"
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
              	this.scrollDiv = this.$refs.tag;
                  this.scrollDiv.addEventListener("scroll", this.scroll);
                this.attributes = this.data.attributes;
                this.events = this.data.events;
                // var that = this;
                // $.ajax({
                //   type:'get',
                //   url:'http://tag',
                //   data: {},
                //   dataType:'json',
                //   success:function(data){
                //     that.attributes = data.attributes;
                //     that.events = data.events;
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
                clickShow5: function() {
                  this.isShow5 = !this.isShow5;
                },
                handleClose(tag) {
                  this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
                },
                closeTag(tag){
                  this.tags.splice(this.tags.indexOf(tag), 1);
                },
                showInput() {
                  this.inputVisible = true;
                  this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                  });
                },
                handleInputConfirm() {
                  var inputValue = this.inputValue;
                  if (inputValue) {
                    this.dynamicTags.push(inputValue);
                  }
                  this.inputVisible = false;
                  this.inputValue = '';
                }
            }
	    }
	    return data;
    }
})