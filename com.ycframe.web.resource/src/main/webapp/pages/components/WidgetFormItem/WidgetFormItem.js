document.write("<script language=javascript src='pages/components/upload/upload.js'></script>");
var WidgetFormItem = moduleinit({
	url:'/components/WidgetFormItem/WidgetFormItem.html',
	el:'#WidgetFormItem',
    dorender:function(content){
	    var data = {
    	  template: content.template,
          name: 'WidgetFormItem',
          props: ['element', 'select', 'index', 'data'],
		  components: {
		    FmUpload: fmupload
		  },
		  data () {
		    return {
		      selectWidget: this.select
		    }
		  },
		  mounted () {
		  },
		  methods: {
		    handleSelectWidget (index) {
		    	console.log('index=>',index)
		      this.selectWidget = this.data.list[index]
		    },
		    handleWidgetDelete (index) {
		      if (this.data.list.length - 1 === index) {
		        if (index === 0) {
		          this.selectWidget = {}
		        } else {
		          this.selectWidget = this.data.list[index - 1]
		        }
		      } else {
		        this.selectWidget = this.data.list[index + 1]
		      }
		
		      this.$nextTick(() => {
		        this.data.list.splice(index, 1)
		      })
		    },
		    handleWidgetClone (index) {
		      let cloneData = {
		        ...this.data.list[index],
		        options: {...this.data.list[index].options},
		        key: Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999)
		      }
		
		      if (this.data.list[index].type === 'radio' || this.data.list[index].type === 'checkbox' || this.data.list[index].type === 'select') {
		
		        cloneData = {
		          ...cloneData,
		          options: {
		            ...cloneData.options,
		            options: cloneData.options.options.map(item => ({...item}))
		          }
		        }
		      }
		
		      this.data.list.splice(index, 0, cloneData)
		
		      this.$nextTick(() => {
		        this.selectWidget = this.data.list[index + 1]
		      })
		    },
		  },
		  watch: {
		    select (val) {
		      this.selectWidget = val
		    },
		    selectWidget: {
		      handler (val) {
		        this.$emit('update:select', val)
		      },
		      deep: true
		    }
		  }
	    }
	    return data;
    }
})

