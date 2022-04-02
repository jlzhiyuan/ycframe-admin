var Dynamic = moduleinit({
	url:'/demos/table/dynamicTable.html', 
	el:'#dynamic',
    dorender:function(content){
	    var data = {
	    	template: content.template,
	        name: 'Dynamic',
	        data() {
	        	return {
	        		type: '',
	        		pivot: null,
	        		loading: false,
	        		res: ''
	        	}
	        },
	        computed: {
	        	
	        },
	        watch: {
	        	
	        },
	        mounted() {
//	        	this.$nextTick(function () {
	        		var rtn = $$.demodata.getDemoData();
//		        	this.res = LotsOfDataRunserver.getData();
		    		var yourJSONData = rtn.data.data;
		    		this.type = rtn.data.config.type;
		    		var that = this;
		    		this.pivot = new WebDataRocks({
			            container: "#wdr-component",
			            beforetoolbarcreated: that.customizeToolbar,
			            toolbar: true,
			            width: "100%",
			            height: "100%",
			            report: {
			                "dataSource": {
			    				data: yourJSONData,
			                },
			                "slice": {
			                    "reportFilters": rtn.data.config.reportFilters,
			                    "rows": rtn.data.config.rows,
			                    "columns": rtn.data.config.columns,
			                    "measures": rtn.data.config.measures,
			                    "formats": rtn.data.config.formats,
			                    "expands": rtn.data.config.expands
			                }
			            },
			            global: {localization:'./././ui/js/webdatarocks/en.json'},
		    		}

		    		);
		    		if (this.pivot != null) {
		    			this.loading = false;
		    		}
		    		this.setOption('type', this.type);
//	        	})
//	        	var rtn = LotsOfDataRunserver.getData6();
//	        	this.res = LotsOfDataRunserver.getData6();
//	        	console.log('rtn',rtn);
//	    		var yourJSONData = rtn.data;
//	    		this.type = rtn.config.type;
//	    		var that = this;
//	    		this.pivot = new WebDataRocks({
//		            container: "#wdr-component",
//		            beforetoolbarcreated: that.customizeToolbar,
//		            toolbar: true,
//		            width: "100%",
//		            height: "100%",
//		            report: {
//		                "dataSource": {
//		    				data: yourJSONData,
//		                },
//		                "slice": {
//		                    "reportFilters": rtn.config.reportFilters,
//		                    "rows": rtn.config.rows,
//		                    "columns": rtn.config.columns,
//		                    "measures": rtn.config.measures,
//		                    "formats": rtn.config.formats,
//		                    "expands": rtn.config.expands
//		                }
//		            },
//		            global: {localization:'./././ui/en.json'},
//	    		}
//
//	    		);
//	    		if (this.pivot != null) {
//	    			this.loading = false;
//	    		}
//	    		this.setOption('type', this.type);
	        },
	        methods:{
	        	customizeToolbar(toolbar) {
	        		 var tabs = toolbar.getTabs(); 
	   		      	 toolbar.getTabs = function() {
	   		          delete tabs[0];
	   		          delete tabs[1];
	   		          delete tabs[2];
	   		          delete tabs[3];
	   		          return tabs;
	   		      }
	        	},
	        	setOption(option, value) {
	  		      this.pivot.setOptions({
	  		          grid: {
	  		              [option]: value
	  		          }
	  		      });
	  		      this.pivot.refresh();
	  		  }
	        	
	        }
	    }
	    return data;
    }
})