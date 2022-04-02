var echartsDemo = moduleinit({
	url:'/demos/echarts/echarts.html', 
	el:'#echarts',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'echartsDemo',
            data() {
                return {
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow3: true,
                  scrollDiv: '',
                  scrollHeight: '',
                  option: {
	              		title: {
	            	    		text: '图表一',
	            	    	},
	            	    	xAxis: {
	              	        data: ['周一','周二','周三','周四']
	              	    },
	              	    series: [
	              	        {	
	              	        	name: '2015',
	              	        	type: 'bar',
	              	        	data: [43.3, 83.1, 86.4, 72.4]
	              	        },
	              	        {	
	              	        	name: '2016',
	              	        	type: 'bar',
	              	        	data: [85.8, 73.4, 65.2, 53.9]
	              	        },
	              	        {
	              	        	name: '2017',
	              	        	type: 'bar',
	              	        	data: [93.7, 55.1, 82.5, 39.1]
	              	        }
	              	    ]
	              	},
	              	option1: {
                	    xAxis: {
                	        data: ['周一','周二','周三','周四','周五','周六','周日'],
                	        axisLabel:{
                	        	margin: 20
                	        }
                	    },
//                	    dataset: {
//                	        source: [
//                	            ['product', '邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎', ],
//                	            ['周一周一周一', 120,220,150,320,820],
//                	            ['周二', 132,182,232,332,932],
//                	            ['周三', 101,191,201,301,901],
//                	            ['周四', 134,234,154,334,934],
//                	            ['周五', 90,290,190,390,1290],
//                	            ['周六', 230,330,330,330,1330],
//                	            ['周日', 210,310,410,320,1320]
//                	        ]
//                	    },
                	    series: [
                	        {
                	            name:'邮件营销',
                	            type:'line',
                	            connectNulls: true,  // 连接空断点
                	            data:[120, 132, '', '', 90, 230, 210]
                	        },
                	        {
                	            name:'联盟广告',
                	            type:'line',
                	            connectNulls: true,  // 连接空断点
                	            data:[220, '', 191, '', 290, 330, 310]
                	        },
                	        {
                	            name:'视频广告',
                	            type:'line',
                	            connectNulls: true,  // 连接空断点
                	            data:[150, 232, 201, 154, 190, 330, 410]
                	        },
                	        {
                	            name:'直接访问',
                	            type:'line',
                	            connectNulls: true,  // 连接空断点
                	            data:[320, 332, 301, 334, 390, 330, 320]
                	        },
                	        {
                	            name:'搜索引擎',
                	            type:'line',
                	            connectNulls: true,  // 连接空断点
                	            data:[820, 932, 901, 934, 1290, 1330, 1320]
                	        }
                	    ],
                	    /*tooltip: {
                	    	formatter: function(params) {
                	    		　　var result = ''
                	    		　　var dotHtml = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;"></span>'
                	    		　　params.forEach(function (item) {
                	    				console.log('item=>',item);
                	    		　　　　result += item.axisValue + "</br>" + dotHtml + item.seriesName + item.value
                	    		　　})
                	    		　　return result
                	    	}
                	    }*/
                	},
                	option2: {
                	    series : [
                	        {
                	            type: 'pie',
                	            data:[
                	                {
                	                    value:1548,
                	                    name: '幽州'
                	                },
                	                {
                	                	value:535, 
                	                	name: '荆州'
                	                },
                	                {
                	                	value:510, 
                	                	name: '兖州'
                	                },
                	                {
                	                	value:634, 
                	                	name: '益州'
                	                },
                	                {
                	                	value:735, 
                	                	name: '西凉'
                	                }
                	            ],
                	        }
                	    ]
                	},
                	option3: {
                		xAxis: {
                			data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                		},
                		yAxis: [
							{
							    type: 'value',
							    name: '蒸发量',
							    min: 0,
							    max: 250,
							    position: 'right',
							    axisLine: {
							        lineStyle: {
							            color: '#f45328'
							        }
							    },
							    axisLabel: {
							        formatter: '{value} ml'
							    }
							},
							{
							    type: 'value',
							    name: '降水量',
							    min: 0,
							    max: 250,
							    position: 'right',
							    offset: 50,
							    axisLine: {
							        lineStyle: {
							            color: '#409eff'
							        }
							    },
							    axisLabel: {
							        formatter: '{value} ml'
							    }
							},
							{
							    type: 'value',
							    name: '温度',
							    min: 0,
							    max: 25,
							    position: 'left',
							    axisLine: {
							        lineStyle: {
							            color: '#c88400'
							        }
							    },
							    axisLabel: {
							        formatter: '{value} °C'
							    }
							}
                		],
                		series: [
							{
							    name:'蒸发量',
							    type:'line',
							    yAxisIndex: 0,
							    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
							},
							{
							    name:'降水量',
							    type:'line',
							    yAxisIndex: 1,
							    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
							},
							{
							    name:'平均温度',
							    type:'line',
							    yAxisIndex: 2,
							    data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
							}
                		]
                	},
                 }
              },
              computed: {},
              watch: {
              	'$route'(to,from){
              		if (to.path == this.$route.path) {
              			this.scrollDiv.scrollTop = this.scrollHeight;
              		} 
              	},
              },
              mounted(){
              	this.scrollDiv = this.$refs.echarts;
                 this.scrollDiv.addEventListener("scroll", this.scroll);
               
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
                 changeData() {
                	 this.option = {
                     		title: {
                   	    		text: '图表二',
                   	    	},
                   	    	xAxis: {
                     	        data: ['喔喔','妮妮','即可','周四']
                     	    },
                     	    series: [
                     	        {	
                     	        	name: '2015',
                     	        	type: 'bar',
                     	        	data: [43.3, 83.1, 86.4, 72.4]
                     	        },
                     	        {	
                     	        	name: '2016',
                     	        	type: 'bar',
                     	        	data: [85.8, 73.4, 65.2, 53.9]
                     	        },
                     	        {
                     	        	name: '2017',
                     	        	type: 'bar',
                     	        	data: [93.7, 55.1, 82.5, 39.1]
                     	        }
                     	    ]
                     	}
                   }
              }
	    }
	    return data;
    }
})
