var PublicDialog = moduleinit({
	url:'/components/PublicDialog/PublicDialog.html',
	el:'#PublicDialog',
    dorender:function(content){
	    var data = {
    	  template: content.template,
          name: 'PublicDialog',
		  props: {
		    visible: Boolean,
		    loadingText: {
		      type: String,
		      default: ''
		    },
		    title: {
		      type: String,
		      default: ''
		    },
		    width: {
		      type: String,
		      default: '600px'
		    },
		    form: {
		      type: Boolean,
		      default: true
		    },
		    action: {
		      type: Boolean,
		      default: true
		    }
		  },
		  computed: {
		    show () {
		      if (this.form) {
		        return this.showForm
		      } else {
		        return true
		      }
		    }
		  },
		  data () {
		    return {
		      loading: false,
		      dialogVisible: this.visible,
		      id: 'dialog_' + new Date().getTime(),
		      showForm: false
		    }
		  },
		  methods: {
		    close () {
		      this.dialogVisible = false
		    },
		    submit () {
		      this.loading = true
		
		      this.$emit('on-submit')
		    },
		    end () {
		      this.loading = false
		    }
		  },
		  mounted () {
		  },
		  watch: {
		    dialogVisible (val) {
		      if (!val) {
		        this.loading = false
		        this.$emit('on-close')
		        setTimeout(() => {
		          this.showForm = false
		        }, 300)
		      } else {
		        this.showForm = true
		      }
		    },
		    visible (val) {
		      this.dialogVisible = val
		    }
		  }
	    }
	    return data;
    }
})

