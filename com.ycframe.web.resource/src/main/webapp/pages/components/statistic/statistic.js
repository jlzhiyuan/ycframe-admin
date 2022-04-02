var Statistic = moduleinit({
	url:'/components/statistic/statistic.html',
	el:'#statistic',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Statistic',
            data() {
                return {
                	
                }
            },
            props: {
                title: {
                  type: String,
                  default: ''
                },
                value: {
                  type: [String, Number],
                  default: ''
                },
                prefix: {
                  type: String,
                  default: ''
                },
                suffix: {
                  type: String,
                  default: ''
                },
                color: {
                  type: String,
                  default: 'rgba(0,0,0,0.65)'
                },
                precision: {
                  type: String,
                  default: '0'
                }
            },
            computed: {
                number() {
                  if (this.value%1 === 0) {
                    return this.value;
                  } else {
                    var b = this.value.split(".");
                    return b[0]
                  }
                },
                decimal() {
                  if (this.value%1 === 0) {
                    if (parseInt(this.precision) > 0) {
                      var s = '';
                      for (var i = 0;i < this.precision;i++) {
                        s += '0'
                      }
                      return '.' + s
                    } else {
                      return ''
                    }
                  } else {
                    var b = this.value.split(".");
                    if (b[1].length > parseInt(this.precision)) {
                      if (parseInt(this.precision) == 0) {
                        return '.' + b[1]
                      } else {
                        return '.' + b[1].substring(0,this.precision);
                      }
                    } else {
                      
                        var rs = this.precision - b[1].length;
                        var s = b[1];
                        for (var i = 0;i < rs;i++) {
                          s += '0'
                        }
                        return '.' + s;
                      
                    }
                  }
                }
            },
            mounted() {
            },
            methods: {
            	
            }	
	    }
	    return data;
    }
})