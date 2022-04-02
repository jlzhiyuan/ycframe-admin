var attribute = moduleinit({
	url:'/components/attribute/attribute.html',
	el:'#attribute',
    dorender:function(content){
	    var data = {
    	  template: content.template,
          name: 'attribute',
          props: ['data'],
		  data () {
		    return {
		    	value: true,
		    	width: 250,
		    	labelPosition: 'top'
		    }
		  },
		  computed: {
		    show () {
		      if (this.data && Object.keys(this.data).length > 0) {
		        return true
		      }
		      return false
		    },
		  },
		  mounted () {
		  },
		  methods: {
			  handleOptionsRemove (index) {
			      if (this.data.type === 'grid' || this.data.type === 'formitem') {
			        this.data.columns.splice(index, 1)
			      } else {
			        this.data.options.options.splice(index, 1)
			      }
			      
			  },
			  handleAddColumn () {
		        this.data.columns.push({
		          span: '',
		          list: []
		        })
			  },
			  handleAddOption () {
			      if (this.data.options.showLabel) {
			        this.data.options.options.push({
//			          value: this.$t('fm.config.widget.newOption'),
//			          label: this.$t('fm.config.widget.newOption')
			          value: '新选项',
			          label: '新选项'
			        })
			      } else {
			        this.data.options.options.push({
//			          value: this.$t('fm.config.widget.newOption')
			          value: '新选项'
			        })
			      }
			      
			  },
		  },
		  watch: {
		  	value() {
//		  		if (!this.value) {
//		  			this.data.columns.pop();
//		  			console.log('this.data=>',this.data);
//		  			this.data.columns.push({
//		  				width: "250px",
//				        list: []
//				    })
//		  			this.data.columns.push({
//		  				width: "calc(100% - 250px)",
//				        list: []
//				    })
//				    console.log('this.data.columns=>',this.data.columns);
//		  		} else {
//		  			this.data.columns[0].width = '100%';
//		  			this.data.columns.pop();
//		  		}
		  	},
		  	data() {
		  		console.log('data=============================>',this.data);
		  		if (this.data.columns && this.data.columns.length == 1) {
		  			this.value = true;
		  		}
		  		/*if (this.data.columns.length == 1) {
		  			this.value = true;
		  		} else {
		  			this.value = false;
		  		}*/
		  	}
		  }
	    }
	    return data;
    }
})

