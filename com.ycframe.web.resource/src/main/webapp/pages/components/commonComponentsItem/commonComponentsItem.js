var commonComponentsItem = moduleinit({
	url:'/components/commonComponentsItem/commonComponentsItem.html',
	el:'#commonComponentsItem',
    dorender:function(content){
	    var data = {
    	  template: content.template,
          name: 'commonComponentsItem',
          components: {
		    GenetateElementItem: GenetateElementItem
		  },
		  props: ['widget', 'models', 'rules', 'remote'],
		  components: {
		    //FmUpload
		  },
		  data () {
		    return {
		      dataModel: this.models[this.widget.model]
		    }
		  },
		  created () {
		    if (this.widget.options.remote && this.remote[this.widget.options.remoteFunc]) {
		      this.remote[this.widget.options.remoteFunc]((data) => {
		        this.widget.options.remoteOptions = data.map(item => {
		          return {
		            value: item[this.widget.options.props.value],
		            label: item[this.widget.options.props.label],
		            children: item[this.widget.options.props.children]
		          }
		        })
		      })
		    }
		
		    if (this.widget.type === 'imgupload' && this.widget.options.isQiniu) {
		      this.remote[this.widget.options.tokenFunc]((data) => {
		        this.widget.options.token = data
		      })
		    }
		  },
		  methods: {
		  },
		  watch: {
		    dataModel: {
		      deep: true,
		      handler (val) {
		        this.models[this.widget.model] = val
		        this.$emit('update:models', {
		          ...this.models,
		          [this.widget.model]: val
		        })
		        this.$emit('input-change', val, this.widget.model)
		      }
		    },
		    models: {
		      deep: true,
		      handler (val) {
		        this.dataModel = val[this.widget.model]
		      }
		    }
		  }
	    }
	    return data;
    }
})

