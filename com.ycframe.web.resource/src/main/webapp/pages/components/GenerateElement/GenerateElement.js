document.write("<script language=javascript src='pages/components/GenetateElementItem/GenetateElementItem.js'></script>");
document.write("<script language=javascript src='pages/components/commonComponentsItem/commonComponentsItem.js'></script>");
var GenerateElement = moduleinit({
	url:'/components/GenerateElement/GenerateElement.html',
	el:'#GenerateElement',
    dorender:function(content){
	    var data = {
    	  template: content.template,
          name: 'GenerateElement',
		  components: {
		    GenetateElementItem: GenetateElementItem,
		    commonComponentsItem: commonComponentsItem
		  },
		  props: ['data', 'remote', 'value', 'insite'],
		  data () {
		    return {
		      models: {},
		      rules: {},
		      widgetForm: {
		        list: [],
		        config: {
		          labelWidth: 100,
		          labelPosition: 'right',
		          size: 'small'
		        },
		      },
		      widgetModels: {},
		      remoteFuncs: {
			        func_test (resolve) {
			          setTimeout(() => {
			            const options = [
			              {id: '1', name: '1111'},
			              {id: '2', name: '2222'},
			              {id: '3', name: '3333'}
			            ]
			
			            resolve(options)
			          }, 2000)
			        },
			        funcGetToken (resolve) {
			          request.get('http://tools-server.xiaoyaoji.cn/api/uptoken').then(res => {
			            resolve(res.uptoken)
			          })
			        },
			        upload_callback (response, file, fileList) {
			          console.log('callback', response, file, fileList)
			        }
			      },
		    }
		  },
		  created () {
		    this.generateModle(this.data.list)
		  },
		  mounted () {
		  },
		  methods: {
		    generateModle (genList) {
		      for (let i = 0; i < genList.length; i++) {
		        if (genList[i].type === 'grid') {
		          genList[i].columns.forEach(item => {
		            this.generateModle(item.list)
		          })
		        } else {
		          if (this.value && Object.keys(this.value).indexOf(genList[i].model) >= 0) {
		            this.models[genList[i].model] = this.value[genList[i].model]
		          } else {
		            if (genList[i].type === 'blank') {
		              this.$set(this.models, genList[i].model, genList[i].options.defaultType === 'String' ? '' : (genList[i].options.defaultType === 'Object' ? {} : []))
		            } else {
		              this.models[genList[i].model] = genList[i].options.defaultValue
		            }      
		          }
		          
		          if (this.rules[genList[i].model]) {
		            
		            this.rules[genList[i].model] = [...this.rules[genList[i].model], ...genList[i].rules.map(item => {
		              if (item.pattern) {
		                return {...item, pattern: eval(item.pattern)}
		              } else {
		                return {...item}
		              }
		            })]
		          } else {
		            
		            this.rules[genList[i].model] = [...genList[i].rules.map(item => {
		              if (item.pattern) {
		                return {...item, pattern: eval(item.pattern)}
		              } else {
		                return {...item}
		              }
		            })]
		          }      
		        }
		      }
		    },
		    getData () {
		      return new Promise((resolve, reject) => {
		        this.$refs.generateForm.validate(valid => {
		          if (valid) {
		            resolve(this.models)
		          } else {
		            reject(new Error(this.$t('fm.message.validError')).message)
		          }
		        })
		      })
		    },
		    reset () {
		      this.$refs.generateForm.resetFields()
		    },
		    onInputChange (value, field) {
		      this.$emit('on-change', field, value, this.models)
		    },
		    refresh () {
		      
		    }
		  },
		  watch: {
		    data: {
		      deep: true,
		      handler (val) {
		        this.generateModle(val.list)
		      }
		    },
		    value: {
		      deep: true,
		      handler (val) {
		        console.log(JSON.stringify(val))
		        this.models = {...this.models, ...val}
		      }
		    }
		  }
	    }
	    return data;
    }
})

