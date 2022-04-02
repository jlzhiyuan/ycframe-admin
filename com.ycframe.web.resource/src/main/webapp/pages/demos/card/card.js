var Card = moduleinit({
	url:'/demos/card/card.html', 
	el:'#card',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Card',
            data() {
                return {
                	scrollDiv: '',
                    scrollHeight: '',
	                  isShow: true,
	                  isShow1: true,
	                  isShow2: true,
	                  isShow5: true,
	                  attributes: [],
	                  currentDate: new Date(),
	                  data: {
	                    "attributes": [
	                      {
	                        "parameter": "header",
	                        "explain": "设置 header，也可以通过 slot#header 传入 DOM",
	                        "type": "string",
	                        "optional": "—",
	                        "default":"—"
	                      },
	                      {
	                        "parameter": "body-style",
	                        "explain": "设置body的样式",
	                        "type": "object",
	                        "optional": "—",
	                        "default":"{ padding: '20px' }"
	                      },
	                      {
	                        "parameter": "shadow",
	                        "explain": "设置阴影显示时机",
	                        "type": "string",
	                        "optional": "	always / hover / never",
	                        "default":"always"
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
              	}
              },
              computed: {
              },
              mounted() {
            	  this.scrollDiv = this.$refs.card;
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
                clickShow5: function() {
                  this.isShow5 = !this.isShow5;
                }
            }	
	    }
	    return data;
    }
})