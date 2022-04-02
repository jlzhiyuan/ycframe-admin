var Badge = moduleinit({
	url:'/demos/badge/badge.html', 
	el:'#badge',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Badge',
            data() {
                return {
                  scrollDiv: '',
                  scrollHeight: '',
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow4: true,
                  isShow5: true,
                  attributes: [],
                  data: {
                    "attributes": [
                      {
                        "parameter": "value",
                        "explain": "显示值",
                        "type": "string, number",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "max",
                        "explain": "最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型",
                        "type": "number",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "is-dot",
                        "explain": "小圆点",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "hidden",
                        "explain": "隐藏 badge",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "type",
                        "explain": "类型",
                        "type": "string",
                        "optional": "primary / success / warning / danger / info",
                        "default":"—"
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
            	  this.scrollDiv = this.$refs.badge;
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
                }
            }	
	    }
	    return data;
    }
})


/*var Badge = function(resolve, reject) {
  $.ajax({
    url:'pages/components/badge/badge.html',
    type:"GET",
    dataType:"html",
    success:function(result){
      var Obj = $("<code></code>").append($(result));//包装数据
      var $html = $("#badge", Obj);
      var value = $html.html();
      resolve({
        template: value,
        name: 'Badge',
        data() {
          return {
        	  scrollDiv: '',
              scrollHeight: '',
            isShow: true,
            isShow1: true,
            isShow2: true,
            isShow4: true,
            isShow5: true,
            attributes: [],
            data: {
              "attributes": [
                {
                  "parameter": "value",
                  "explain": "显示值",
                  "type": "string, number",
                  "optional": "—",
                  "default":"—"
                },
                {
                  "parameter": "max",
                  "explain": "最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型",
                  "type": "number",
                  "optional": "—",
                  "default":"—"
                },
                {
                  "parameter": "is-dot",
                  "explain": "小圆点",
                  "type": "boolean",
                  "optional": "—",
                  "default":"false"
                },
                {
                  "parameter": "hidden",
                  "explain": "隐藏 badge",
                  "type": "boolean",
                  "optional": "—",
                  "default":"false"
                },
                {
                  "parameter": "type",
                  "explain": "类型",
                  "type": "string",
                  "optional": "primary / success / warning / danger / info",
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
        	this.scrollDiv = this.$refs.badge;
            this.scrollDiv.addEventListener("scroll", this.scroll);
          this.attributes = this.data.attributes;
          // var that = this;
          // $.ajax({
          //   type:'get',
          //   url:'http://badge',
          //   data: {},
          //   async: true,
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
          clickShow2: function() {
            this.isShow2 = !this.isShow2;
          },
          clickShow4: function() {
            this.isShow4 = !this.isShow4;
          },
          clickShow5: function() {
            this.isShow5 = !this.isShow5;
          }
        }
      })
    }
  });
};*/
