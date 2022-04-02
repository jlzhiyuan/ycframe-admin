document.write("<script language=javascript src='pages/components/WidgetFormItem/WidgetFormItem.js'></script>");
document.write("<script language=javascript src='pages/components/CommonComponents/CommonComponents.js'></script>");
var WidgetForm = moduleinit({
	url:'/components/WidgetForm/WidgetForm.html',
	el:'#WidgetForm',
    dorender:function(content){
	    var data = {
    	  template: content.template,
          name: 'WidgetForm',
          components: {
		    WidgetFormItem: WidgetFormItem,
		    CommonComponents: CommonComponents
		  },
          props: ['data', 'select'],
		  data () {
		    return {
		      selectWidget: this.select,
		      resetJson: false,
		    }
		  },
		  mounted () {
			console.log('============',this.data);
		    document.body.ondrop = function (event) {
		      let isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1
		      if (isFirefox) {
		        event.preventDefault()
		        event.stopPropagation()
		      }
		    }
		  },
		  methods: {
		    handleMoveEnd ({newIndex, oldIndex}) {
		      console.log('index', newIndex, oldIndex)
		    },
		    handleSelectWidget (index) {
		      console.log('index=====================',index);
		      console.log('this.data=>',this.data);
		      this.selectWidget = this.data.list[index]
		    },
		    handleWidgetAdd (evt) {
		      console.log('add', evt)
		      console.log('end', evt)
		      const newIndex = evt.newIndex
		      const to = evt.to
		      console.log(to)
		      
		      //为拖拽到容器的元素添加唯一 key
		      console.log('this.data===>',this.data);
		      console.log('newIndex===>',newIndex);
		      const key = Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999)
		      this.$set(this.data.list, newIndex, {
		        ...this.data.list[newIndex],
		        options: {
		          ...this.data.list[newIndex].options,
		          remoteFunc: 'func_' + key
		        },
		        key,
		        // 绑定键值
		        model: this.data.list[newIndex].type + '_' + key,
		        rules: []
		      })
			  console.log('==============================>',this.data.list[newIndex]);
		      if (this.data.list[newIndex].type === 'radio' || this.data.list[newIndex].type === 'checkbox' || this.data.list[newIndex].type === 'select') {
		        this.$set(this.data.list, newIndex, {
		          ...this.data.list[newIndex],
		          options: {
		            ...this.data.list[newIndex].options,
		            options: this.data.list[newIndex].options.options.map(item => ({
		              ...item
		            }))
		          }
		        })
		      }
		
		      if (this.data.list[newIndex].type === 'grid') {
		        this.$set(this.data.list, newIndex, {
		          ...this.data.list[newIndex],
		          columns: this.data.list[newIndex].columns.map(item => ({...item}))
		        })
		      }
		      if (this.data.list[newIndex].type === 'form') {	
		        this.$set(this.data.list, newIndex, {
		          ...this.data.list[newIndex],
		          columns: this.data.list[newIndex].columns.map(item => ({...item}))
		        })
		      }
		      if (this.data.list[newIndex].type === 'formitem') {	
		        this.$set(this.data.list, newIndex, {
		          ...this.data.list[newIndex],
		          columns: this.data.list[newIndex].columns.map(item => ({...item}))
		        })
		      }
			  if (this.data.list[newIndex].type === 'header') {
		        this.$set(this.data.list, newIndex, {
		          ...this.data.list[newIndex],
		          columns: this.data.list[newIndex].columns.map(item => ({...item}))
		        })
		      }
		      if (this.data.list[newIndex].type === 'footer') {
		        this.$set(this.data.list, newIndex, {
		          ...this.data.list[newIndex],
		          columns: this.data.list[newIndex].columns.map(item => ({...item}))
		        })
		      }
		      if (this.data.list[newIndex].type === 'main') {
		        this.$set(this.data.list, newIndex, {
		          ...this.data.list[newIndex],
		          columns: this.data.list[newIndex].columns.map(item => ({...item}))
		        })
		      }
		      if (this.data.list[newIndex].type === 'container') {
		        this.$set(this.data.list, newIndex, {
		          ...this.data.list[newIndex],
		          columns: this.data.list[newIndex].columns.map(item => ({...item}))
		        })
		      }
		      if (this.data.list[newIndex].type === 'container-row') {
		        this.$set(this.data.list, newIndex, {
		          ...this.data.list[newIndex],
		          columns: this.data.list[newIndex].columns.map(item => ({...item}))
		        })
		      }
		      if (this.data.list[newIndex].type === 'aside') {
		        this.$set(this.data.list, newIndex, {
		          ...this.data.list[newIndex],
		          columns: this.data.list[newIndex].columns.map(item => ({...item}))
		        })
		      }
		      if (this.data.list[newIndex].type === 'div') {
		        this.$set(this.data.list, newIndex, {
		          ...this.data.list[newIndex],
		          columns: this.data.list[newIndex].columns.map(item => ({...item}))
		        })
		      }
		      this.selectWidget = this.data.list[newIndex]
		    },
		    handleWidgetColAdd ($event, row, colIndex) {
		      console.log('coladd', $event, row, colIndex)
		      const newIndex = $event.newIndex
		      const oldIndex = $event.oldIndex
		      const item = $event.item
		
		      // 防止布局元素的嵌套拖拽
		      console.log('item.className=>',item.className);
		      if (item.className.indexOf('data-grid') >= 0) {
		
		        // 如果是列表中拖拽的元素需要还原到原来位置
		        item.tagName === 'DIV' && this.data.list.splice(oldIndex, 0, row.columns[colIndex].list[newIndex])
		
		        row.columns[colIndex].list.splice(newIndex, 1)
		
		        return false
		      }
		
		      console.log('from', item)
		
		      const key = Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999)
		      this.$set(row.columns[colIndex].list, newIndex, {
		        ...row.columns[colIndex].list[newIndex],
		        options: {
		          ...row.columns[colIndex].list[newIndex].options,
		          remoteFunc: 'func_' + key
		        },
		        key,
		        // 绑定键值
		        model: row.columns[colIndex].list[newIndex].type + '_' + key,
		        rules: []
		      })
		
		      if (row.columns[colIndex].list[newIndex].type === 'radio' || row.columns[colIndex].list[newIndex].type === 'checkbox' || row.columns[colIndex].list[newIndex].type === 'select') {
		        this.$set(row.columns[colIndex].list, newIndex, {
		          ...row.columns[colIndex].list[newIndex],
		          options: {
		            ...row.columns[colIndex].list[newIndex].options,
		            options: row.columns[colIndex].list[newIndex].options.options.map(item => ({
		              ...item
		            }))
		          }
		        })
		      }
		
		      this.selectWidget = row.columns[colIndex].list[newIndex]
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

