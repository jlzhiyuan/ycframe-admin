var myecharts = moduleinit({
	url:'/components/echarts/echarts.html',
	el:'#echarts',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'myecharts',
            data() {
                return {
                	myCharts: null
                }
            },
            props: {
            	option: {            		
            	},
            	isresize: {
            		type: Boolean
            	}
            },
            watch: {
            	isresize() {
            		this.myCharts.resize();
            	},
            	option: {
    				handler(cval, oval) {
    					console.log('--------');
    					console.log(cval, oval);
    					console.log('this.option=>',this.option);
                		var that = this;
                		var setOption = {
              	    			grid: {
              	    		        right: '20%'
              	    		    },
              	    			title: {
                      	    		text: '',
                      	    		subtext: ''
                      	    	},
              	    			xAxis: {
                        	    	type: 'category',
                        	    	boundaryGap: that.option.series[0].type == 'line' ? false : true,
                	    			axisLabel : {
                                        interval : 0,
                                        formatter : function(params){
                                            var newParamsName = "";
                                            var paramsNameNumber = params.length;
                                            var provideNumber = 5;
                                            var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                                            if (paramsNameNumber > provideNumber) {
                                                for (var p = 0; p < rowNumber; p++) {
                                                    var tempStr = "";
                                                    var start = p * provideNumber;
                                                    var end = start + provideNumber;
                                                    if (p == rowNumber - 1) {
                                                        tempStr = params.substring(start, paramsNameNumber);
                                                    } else {
                                                        tempStr = params.substring(start, end) + "\n";
                                                    }
                                                    newParamsName += tempStr;
                                                }

                                            } else {
                                                newParamsName = params;
                                            }
                                            return newParamsName
                                        }

                                    }
                        	    },
                        	    yAxis: {},
                      	    	tooltip: {
                      	    		trigger: that.option.series[0].type == 'line' ? 'axis' : 'item'
                      	        },
                      	    	legend: {
                      	    	},
//                         	    dataset: {},
                         	    series: [],
                         	   color: ['#f45328','#409eff', '#c88400', '#dd6b66', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
                          	}
                  	    	$.extend( true, setOption,that.option );
                  	    	this.myCharts.setOption(setOption,true);
    				},
    				deep: true
    			}
            },
//            watch: {
//            	option() {
//           j 		console.log('this.option=>',this.option);
//            		var that = this;
//            		var setOption = {
//          	    			grid: {
//          	    		        right: '20%'
//          	    		    },
//          	    			title: {
//                  	    		text: '',
//                  	    		subtext: ''
//                  	    	},
//          	    			xAxis: {
//                    	    	type: 'category',
//                    	    	boundaryGap: that.option.series[0].type == 'line' ? false : true,
//            	    			axisLabel : {
//                                    interval : 0,
//                                    formatter : function(params){
//                                        var newParamsName = "";
//                                        var paramsNameNumber = params.length;
//                                        var provideNumber = 5;
//                                        var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
//                                        if (paramsNameNumber > provideNumber) {
//                                            for (var p = 0; p < rowNumber; p++) {
//                                                var tempStr = "";
//                                                var start = p * provideNumber;
//                                                var end = start + provideNumber;
//                                                if (p == rowNumber - 1) {
//                                                    tempStr = params.substring(start, paramsNameNumber);
//                                                } else {
//                                                    tempStr = params.substring(start, end) + "\n";
//                                                }
//                                                newParamsName += tempStr;
//                                            }
//
//                                        } else {
//                                            newParamsName = params;
//                                        }
//                                        return newParamsName
//                                    }
//
//                                }
//                    	    },
//                    	    yAxis: {},
//                  	    	tooltip: {
//                  	    		trigger: that.option.series[0].type == 'line' ? 'axis' : 'item'
//                  	        },
//                  	    	legend: {
//                  	    	},
////                     	    dataset: {},
//                     	    series: [],
//                     	   color: ['#f45328','#409eff', '#c88400', '#dd6b66', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
//                      	}
//              	    	$.extend( true, setOption,that.option );
//              	    	this.myCharts.setOption(setOption,true);
//            	}
//            },
            computed: {
            	myChart() {
            		return 'myChart' + Math.random()*100000
            	}
            },
            mounted() {
            	console.log('this.option=>',this.option);
            	this.initData();
            },
            methods: {
              	initData() {
              		var that = this;
                    that.$nextTick(function(){
                  	    this.myCharts = echarts.init(document.getElementById(that.myChart));
                  	    if (that.option.series[0].type == 'pie') {
                  	    	var setOption = {
              	    			title: {},
            		          	tooltip : {
            		      	        trigger: 'item',
            		      	        formatter: "{a} <br/>{b} : {c} ({d}%)"
            		      	    },
                      	    	legend: {
                      	    		bottom: 10,
                        	        left: 'center',
                      	    	},
                         	   dataset: {},
                         	   series: [
                         	       {
                         	    	  type: 'pie',
            						  radius : '65%',
            						  center: ['50%', '50%'],
            						  selectedMode: 'single',
            						  data: [],
            						  itemStyle: {
                      	                emphasis: {
                      	                    shadowBlur: 10,
                      	                    shadowOffsetX: 0,
                      	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                      	                }
                      	            }
                         	   	   }
                         	   ],
                         	   color: ['#f45328','#409eff', '#c88400', '#dd6b66', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
                  	    	}
                  	    	$.extend( true, setOption, that.option );
                  	    	console.log('that.option=>',that.option);
                  	    	this.myCharts.setOption(setOption);
                  	    } else {
                  	    	var setOption = {
              	    			grid: {
              	    		        right: '20%'
              	    		    },
              	    			title: {
                      	    		text: '',
                      	    		subtext: ''
                      	    	},
              	    			xAxis: {
                        	    	type: 'category',
                        	    	boundaryGap: that.option.series[0].type == 'line' ? false : true,
                	    			axisLabel : {
                                        interval : 0,
                                        formatter : function(params){
                                            var newParamsName = "";
                                            var paramsNameNumber = params.length;
                                            var provideNumber = 5;
                                            var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                                            if (paramsNameNumber > provideNumber) {
                                                for (var p = 0; p < rowNumber; p++) {
                                                    var tempStr = "";
                                                    var start = p * provideNumber;
                                                    var end = start + provideNumber;
                                                    if (p == rowNumber - 1) {
                                                        tempStr = params.substring(start, paramsNameNumber);
                                                    } else {
                                                        tempStr = params.substring(start, end) + "\n";
                                                    }
                                                    newParamsName += tempStr;
                                                }

                                            } else {
                                                newParamsName = params;
                                            }
                                            return newParamsName
                                        }

                                    }
                        	    },
                        	    yAxis: {},
                      	    	tooltip: {
                      	    		trigger: that.option.series[0].type == 'line' ? 'axis' : 'item'
                      	        },
                      	    	legend: {
                      	    	},
//                         	    dataset: {},
                         	    series: [],
                         	   color: ['#f45328','#409eff', '#c88400', '#dd6b66', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
                          	}
                  	    	$.extend( true, setOption,that.option );
                  	    	console.log('that.option=====>',that.option);
                  	    	this.myCharts.setOption(setOption,true);
                  	    }

                    })
              	}
            }	
	    }
	    return data;
    }
})

