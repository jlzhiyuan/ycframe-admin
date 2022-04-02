document.write("<script language=javascript src='pages/components/WidgetFormItem/WidgetFormItem.js'></script>");
var CommonComponents = moduleinit({
	url:'/components/CommonComponents/CommonComponents.html',
	el:'#CommonComponents',
    dorender:function(content){
	    var data = {
    	  template: content.template,
          name: 'CommonComponents',
          components: {
		    WidgetFormItem: WidgetFormItem
		  },
          props: ['data', 'select','element','containerflex'],
		  data () {
		    return {
		      selectWidget: this.select,
		      width: 500,
		      isflex: false,
		      boxwidth: '',
		      boxheight: ''
		    }
		  },
		  created() {
			  
		  },
		  mounted () {
			  console.log('element=>',this.element);
			  console.log('select=>',this.select);
			  console.log('data=>',this.data);
			  this.width = this.$refs.containerwidth.$el.clientWidth - 20;
			  console.log('this.width===>',this.width);
		    document.body.ondrop = function (event) {
		      let isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1
		      if (isFirefox) {
		        event.preventDefault()
		        event.stopPropagation()
		      }
		    }
		  },
		  methods: {
			deactivated() {
				console.log('99999');
			},
			onResizing(left,top,width,height){
				console.log('width=>',width);
				console.log('height=>',height);
				this.boxwidth = width;
			    this.boxheight = height;
			},
		    handleMoveEnd ({newIndex, oldIndex}) {
		      console.log('index', newIndex, oldIndex)
		    },
		    handleSelectWidget (index) {
		      console.log(index, '#####');
		      console.log('this.data=>',this.data);
		      this.selectWidget = this.data.list[index]
		    },
		    handleWidgetAdd (evt) {
		      console.log('add', evt);
		      console.log('end', evt);
		      console.log('this.data=>',this.data);
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
				console.log('this.data========>',this.data);
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
		    handleWidgetLayoutAdd ($event, row, colIndex) {
		      console.log('coladd', $event, row, colIndex)
		      var newIndex = $event.newIndex
		      var oldIndex = $event.oldIndex
		      var item = $event.item
		
		      // 防止布局元素的嵌套拖拽
		      if (item.className.indexOf('data-grid') >= 0) {
		
		        // 如果是列表中拖拽的元素需要还原到原来位置
		        item.tagName === 'DIV' && this.data.list.splice(oldIndex, 0, row.list[newIndex])
		
		        row.list.splice(newIndex, 1)
		
		        return false
		      }
		
		      console.log('from', item)
		
		      var key = Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999)
		      this.$set(row.list, newIndex, {
		        ...row.list[newIndex],
		        options: {
		          ...row.list[newIndex].options,
		          remoteFunc: 'func_' + key
		        },
		        key,
		        // 绑定键值
		        model: row.list[newIndex].type + '_' + key,
		        rules: []
		      })
		
		      if (row.list[newIndex].type === 'radio' || row.list[newIndex].type === 'checkbox' || row.list[newIndex].type === 'select') {
		        this.$set(row.list, newIndex, {
		          ...row.list[newIndex],
		          options: {
		            ...row.list[newIndex].options,
		            options: row.list[newIndex].options.options.map(item => ({
		              ...item
		            }))
		          }
		        })
		      }
		
		      this.selectWidget = row.list[newIndex]
		      console.log('this.data=>',this.data);
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
		      this.selectWidget = val;
		    },
		    selectWidget: {
		      handler (val) {
		        this.$emit('update:select', val);
		        console.log('val=>',val);
		        if (val.type == 'container') {
		        	 this.isflex = val.options.disabled;
		        }
		      },
		      deep: true
		    },
		    boxwidth() {
		    	console.log('type=>width',this.selectWidget.type);
		    	if (this.selectWidget.type == 'aside' || this.selectWidget.type == 'main') {
		    		this.selectWidget.options.width = this.boxwidth;
		        }
		    	if (this.selectWidget.type == 'div') {
		    		this.selectWidget.options.width = this.boxwidth;
		        }
		    	if (this.selectWidget.type == 'container') {
		    		this.selectWidget.options.width = this.boxwidth;
		        }
		    },
		    boxheight() {
		    	console.log('type=>height',this.selectWidget.type);
		    	if (this.selectWidget.type == 'header' || this.selectWidget.type == 'main' || this.selectWidget.type == 'aside') {
		    		this.selectWidget.options.height = this.boxheight;
		    		console.log('this.selectWidget.options.height=>',this.selectWidget.options.height);
		        }
		    	if (this.selectWidget.type == 'container') {
		    		this.selectWidget.options.height = this.boxheight;
		    		console.log('container=>',this.boxheight);
		        }
		    	if (this.selectWidget.type == 'div') {
		    		this.selectWidget.options.height = this.boxheight;
		        }
		    	if (this.selectWidget.type == 'form') {
		    		this.selectWidget.options.height = this.boxheight;
		        }
		    }
		  }
	    }
	    return data;
    }
})

