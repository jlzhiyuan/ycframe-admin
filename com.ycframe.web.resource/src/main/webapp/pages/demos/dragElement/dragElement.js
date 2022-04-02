document.write("<script language=javascript src='pages/components/WidgetForm/WidgetForm.js'></script>");
document.write("<script language=javascript src='pages/components/PublicDialog/PublicDialog.js'></script>");
document.write("<script language=javascript src='pages/components/GenerateElement/GenerateElement.js'></script>");
document.write("<script language=javascript src='pages/components/attribute/attribute.js'></script>");
var dragElement = moduleinit({
	url:'/demos/dragElement/dragElement.html', 
	el:'#dragElement',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'dragElement',
            components: { 
		    	WidgetForm: WidgetForm,
		    	PublicDialog: PublicDialog,
		    	GenerateElement: GenerateElement,
		    	attribute: attribute
		    },
            data() {
                return {
                	testVar: '',
                	activeName: 'first',
                	basicComponents: [
					  {
					    type: 'form',
					    icon: 'iconcontrol_form',
					    options: {
					    	height: 200
					    },
					    columns: [
							{
								width: '100%',
							    list: []
							}
					    ],
					  },
					  {
					    type: 'formitem',
					    icon: 'iconbd_form_item',
					    columns: [
					      {
					        span: 12,
					        list: []
					      },
					      {
					        span: 12,
					        list: []
					      }
					    ],
					    options: {
					      gutter: 0,
					      justify: 'start',
					      align: 'top'
					    }
					  },
					  {
					    type: 'input',
					    icon: 'icon-input',
					    options: {
					      width: '100%',
					      defaultValue: '请输入内容',
					      required: false,
					      dataType: 'string',
					      pattern: '',
					      placeholder: '',
					      disabled: false,
					      clearable: false
					    }
					  },
					  {
					    type: 'textarea',
					    icon: 'icon-diy-com-textarea',
					    options: {
					      width: '100%',
					      defaultValue: '请输入内容',
					      required: false,
					      disabled: false,
					      rows: '3',
					      pattern: '',
					      placeholder: ''
					    }
					  },
					  {
					    type: 'number',
					    icon: 'icon-number',
					    options: {
					      width: '',
					      required: false,
					      defaultValue: 0,
					      min: '',
					      max: '',
					      step: 1,
					      disabled: false,
					      controlsPosition: ''
					    }
					  },
					  {
					    type: 'radio',
					    icon: 'icon-radio-active',
					    options: {
					      inline: false,
					      defaultValue: '',
					      showLabel: false,
					      options: [
					        {
					          value: 'Option 1',
					          label: 'Option 1'
					        },
					        {
					          value: 'Option 2',
					          label: 'Option 2'
					        },
					        {
					          value: 'Option 3',
					          label: 'Option 3'
					        }
					      ],
					      required: false,
					      width: '',
					      remote: false,
					      remoteOptions: [],
					      props: {
					        value: 'value',
					        label: 'label'
					      },
					      remoteFunc: '',
					      disabled: false,
					    }
					  },
					  {
					    type: 'checkbox',
					    icon: 'icon-check-box',
					    options: {
					      inline: false,
					      defaultValue: [],
					      showLabel: false,
					      options: [
					        {
					          value: 'Option 1'
					        },
					        {
					          value: 'Option 2'
					        },
					        {
					          value: 'Option 3'
					        }
					      ],
					      required: false,
					      width: '',
					      remote: false,
					      remoteOptions: [],
					      props: {
					        value: 'value',
					        label: 'label'
					      },
					      remoteFunc: '',
					      disabled: false,
					    }
					  },
					  {
					    type: 'time',
					    icon: 'iconshijian',
					    options: {
					      defaultValue: '21:19:56',
					      readonly: false,
					      disabled: false,
					      editable: true,
					      clearable: true,
					      placeholder: '选择时间',
					      startPlaceholder: '',
					      endPlaceholder: '',
					      isRange: false,
					      arrowControl: true,
					      format: 'HH:mm:ss',
					      required: false,
					      width: '',
					    }
					  },
					  {
					    type: 'date',
					    icon: 'icon-date',
					    options: {
					      defaultValue: '',
					      readonly: false,
					      disabled: false,
					      editable: true,
					      clearable: true,
					      placeholder: '选择日期',
					      startPlaceholder: '',
					      endPlaceholder: '',
					      type: 'date',
					      format: 'yyyy-MM-dd',
					      timestamp: false,
					      required: false,
					      width: '',
					    }
					  },
					  {
					    type: 'datetime',
					    icon: 'iconriqishijian',
					    options: {
					      defaultValue: '',
					      readonly: false,
					      disabled: false,
					      editable: true,
					      clearable: true,
					      placeholder: '选择日期时间',
					      startPlaceholder: '',
					      endPlaceholder: '',
					      type: 'datetime',
					      format: 'yyyy-MM-dd HH:mm:ss',
					      timestamp: false,
					      required: false,
					      width: '',
					    }
					  },
					  {
					    type: 'rate',
					    icon: 'icon-pingfen1',
					    options: {
					      defaultValue: null,
					      max: 5,
					      disabled: false,
					      allowHalf: false,
					      required: false
					    }
					  },
					  {
					    type: 'color',
					    icon: 'icon-color',
					    options: {
					      defaultValue: '',
					      disabled: false,
					      showAlpha: false,
					      required: false
					    }
					  },
					  {
					    type: 'select',
					    icon: 'icon-select',
					    options: {
					      defaultValue: '',
					      multiple: false,
					      disabled: false,
					      clearable: false,
					      placeholder: '请选择',
					      required: false,
					      showLabel: false,
					      width: '',
					      options: [
					        {
					          value: 'Option 1'
					        },
					        {
					          value: 'Option 2'
					        },{
					          value: 'Option 3'
					        }
					      ],
					      remote: false,
					      filterable: false,
					      remoteOptions: [],
					      props: {
					        value: 'value',
					        label: 'label'
					      },
					      remoteFunc: ''
					    }
					  },
					  {
					    type: 'switch',
					    icon: 'icon-switch',
					    options: {
					      defaultValue: false,
					      required: false,
					      disabled: false,
					    }
					  },
					  {
					    type: 'slider',
					    icon: 'icon-slider',
					    options: {
					      defaultValue: 0,
					      disabled: false,
					      required: false,
					      min: 0,
					      max: 100,
					      step: 1,
					      showInput: false,
					      range: false,
					      width: ''
					    }
					  },
					  {
					    type: 'text',
					    icon: 'icon-wenzishezhi-',
					    options: {
					      defaultValue: 'This is a text',
					      customClass: '',
					    }
					  },
					  {
					    type: 'imgupload',
					    icon: 'icon-tupian',
					    options: {
					      defaultValue: [],
					      size: {
					        width: 100,
					        height: 100,
					      },
					      width: '',
					      tokenFunc: 'funcGetToken',
					      token: '',
					      domain: 'http://pfp81ptt6.bkt.clouddn.com/',
					      disabled: false,
					      length: 8,
					      multiple: false,
					      isQiniu: false,
					      isDelete: false,
					      min: 0,
					      isEdit: false,
					      action: 'https://jsonplaceholder.typicode.com/posts/'
					    }
					  },
					  {
					    type: 'fileupload',
					    icon: 'icon-wenjianshangchuan',
					    options: {
					      defaultValue: [],
					      width: '',
					      tokenFunc: 'funcGetToken',
					      token: '',
					      domain: 'http://pfp81ptt6.bkt.clouddn.com/',
					      disabled: false,
					      length: 8,
					      multiple: false,
					      isQiniu: false,
					      fileList: [],
					      isDelete: false,
					      min: 0,
					      isEdit: false,
					      action: 'https://jsonplaceholder.typicode.com/posts/'
					    }
					  },
					  {
					    type: 'cascader',
					    icon: 'icon-jilianxuanze',
					    options: {
					      defaultValue: [],
					      width: '',
					      placeholder: '',
					      disabled: false,
					      clearable: false,
					      remote: true,
					      remoteOptions: [],
					      props: {
					        value: 'value',
					        label: 'label',
					        children: 'children'
					      },
					      remoteFunc: ''
					    }
					  },
					  {
					    type: 'button',
					    icon: 'iconanniu',
					    options: {
					      disabled: false,
					      defaultValue: '按钮',
					      type: 'primary',
					      size: 'medium',
					      typeoptions: [{
					          value: 'primary',
					          label: 'primary'
					        }, {
					          value: 'success',
					          label: 'success'
					        }, {
					          value: 'warning',
					          label: 'warning'
					        }, {
					          value: 'danger',
					          label: 'danger'
					        }, {
					          value: 'info',
					          label: 'info'
					        }, {
					        	value: 'text',
					        	label: 'text'
					        }],
					      sizeoptions: [{
					          value: 'medium',
					          label: 'medium'
					        }, {
					          value: 'small',
					          label: 'small'
					        }, {
					          value: 'mini',
					          label: 'mini'
					        }]
					    }
					  },
					],
					resetJson: false,
					widgetFormSelect: {
//						columns: [
//		            	    {
//		            	    	list: [],
//		            	    	width: "100%"
//		            	    }
//		            	],
//		            	icon: "iconcontainer",
//		            	key: "1589871411000_80906",
//		            	model: "container_1589871411000_80906",
//		            	name: "container",
//		            	options: {
//		            		disabled: false,
//		            		remoteFunc: "func_1589871411000_80906"
//		            	},
//		            	rules: [],
//		            	type: "container",
					},
					widgetForm: {
			        list: [
//			            {
//			            	columns: [
//			            	    {
//			            	    	list: [],
//			            	    	width: "100%"
//			            	    }
//			            	],
//			            	icon: "iconcontainer",
//			            	key: "1589871411000_80906",
//			            	model: "container_1589871411000_80906",
//			            	name: "container",
//			            	options: {
//			            		disabled: false,
//			            		remoteFunc: "func_1589871411000_80906"
//			            	},
//			            	rules: [],
//			            	type: "container",
//			            }
			        ],
			        config: {
			          labelWidth: 100,
			          labelPosition: 'right',
			          size: 'small'
			        },
			      },
			      layoutComponents: [
					{
					    type: 'container',
					    icon: 'iconcontainer',
					    options: {
					    	disabled: false,
					    	height: 500,
					    	width: 950
					    },
					    columns: [
							{
								width: '100%',
							    list: []
							}
					    ],
					  },
//			      	  {
//					    type: 'container-row',
//					    icon: 'iconlianglie',
//					    columns: [
////					      {
////					      	width: '100%',
////					        list: []
////					      }
//						  {
//				  				width: "250px",
//						        list: []
//						   },
//						   {
//				  				width: "calc(100% - 250px)",
//						        list: []
//						    }
//					    ],
//					  },
					  {
					    type: 'header',
					    icon: 'icondibu',
					    options: {
					    	height: 60
					    },
					    columns: [
					      {
					        list: []
					      }
					    ],
					  },
					  {
					    type: 'main',
					    icon: 'iconmain',
					    options: {
					    	height: 400,
					    	width: 400
					    },
					    columns: [
					      {
					        list: []
					      }
					    ],
					  },
					  {
					    type: 'footer',
					    icon: 'icondibu1',
					    columns: [
					      {
					        list: []
					      }
					    ],
					  },
					  {
					    type: 'aside',
					    icon: 'iconaside',
					    options: {
					    	width: 250,
					    	height: 400
					    },
					    columns: [
					      {
					        list: []
					      }
					    ]
					  },
					  {
					    type: 'grid',
					    icon: 'icongrid',
					    columns: [
					      {
					        span: 12,
					        list: []
					      },
					      {
					        span: 12,
					        list: []
					      }
					    ],
					    options: {
					      gutter: 0,
					      justify: 'start',
					      align: 'top'
					    }
					  },
					  {
					    type: 'div',
					    icon: 'iconcontainer',
					    options: {
					    	width: 200,
					    	height: 200
					    },
					    columns: [
					      {
					        list: []
					      }
					    ]
					  },
					],
					advanceComponents: [
					  {
					    type: 'table',
					    icon: 'icon-table',
				    	tableData: [{
				            date: '2016-05-02',
				            name: '王小虎',
				            address: '上海市普陀区金沙江路 1518 弄'
				          }, {
				            date: '2016-05-04',
				            name: '王小虎',
				            address: '上海市普陀区金沙江路 1517 弄'
				          }, {
				            date: '2016-05-01',
				            name: '王小虎',
				            address: '上海市普陀区金沙江路 1519 弄'
				          }, {
				            date: '2016-05-03',
				            name: '王小虎',
				            address: '上海市普陀区金沙江路 1516 弄'
				        }]
					  },
					  {
					    type: 'tree',
					    icon: 'icontree',
					    data: [{
				          label: '一级 1',
				          children: [{
				            label: '二级 1-1',
				            children: [{
				              label: '三级 1-1-1'
				            }]
				          }]
				        }, {
				          label: '一级 2',
				          children: [{
				            label: '二级 2-1',
				            children: [{
				              label: '三级 2-1-1'
				            }]
				          }, {
				            label: '二级 2-2',
				            children: [{
				              label: '三级 2-2-1'
				            }]
				          }]
				        }, {
				          label: '一级 3',
				          children: [{
				            label: '二级 3-1',
				            children: [{
				              label: '三级 3-1-1'
				            }]
				          }, {
				            label: '二级 3-2',
				            children: [{
				              label: '三级 3-2-1'
				            }]
				          }]
				        }],
				        defaultProps: {
				          children: 'children',
				          label: 'label'
				        }
					  },
					  {
					    type: 'tab',
					    icon: 'icontab'
					  },
					  {
					    type: 'pagination',
					    icon: 'iconfenye',
					    currentPage: 4
					  }
					],
					previewVisible: false,
					codeVisible: false,
					jsVisible: false,
					jsTemplate: '',
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
			      htmlTemplate: '',
			      title: '',
			      dragwidth: '',
			      infoData: null,
			      loading: true,
			      pageName: ''
                }
            },
            watch: {
			    $router: function(route) {
			      console.log('============>',route);
			    },
			    currentId() {
			    	if (this.$route.path == '/dragElement') {
				    	this.loading = true;
				    	var that = this;
				    	var params = {
		            		id: this.currentId
		            	};
		            	DragElementRunserver.getDetail(params.id,function(data){
		        			console.log('data=>',data);
		        			if (data.status == 1) {
		        				that.infoData = data.data.data;
		        				that.pageName = data.data.data.name;
		        				if (data.data.data.elements != '') {
		        					that.widgetForm = data.data.data.elements;
		            				that.widgetFormSelect = data.data.data.elements.list[0];
		            				console.log('that.widgetForm====>',that.widgetForm);
		            				console.log('that.widgetFormSelect==>',that.widgetFormSelect);
		        				}
		        				that.loading = false;
		        			} else {
		        				that.$message.error(data.message);
		        				that.loading = false;
		        			}
		        		})
			    	}	
			    }
			},
            computed: {
            	currentId() {
            		return this.$route.query.id;
            	}
            },
            mounted() {
            	var that = this;
            	this.dragwidth = this.$refs.main.$el.clientWidth;
            	console.log('this.dragwidth=>',this.dragwidth);
            	this._loadComponents();
            	console.log('id=>',this.$route.query.id);
            	var params = {
            		id: this.$route.query.id
            	};
            	DragElementRunserver.getDetail(params.id,function(data){
        			console.log('data=>',data);
        			if (data.status == 1) {
        				that.infoData = data.data.data;
        				that.pageName = data.data.data.name;
        				if (data.data.data.elements != '') {
        					that.widgetForm = data.data.data.elements;
            				that.widgetFormSelect = data.data.data.elements.list[0];
            				console.log('that.widgetForm====>',that.widgetForm);
            				console.log('that.widgetFormSelect==>',that.widgetFormSelect);
        				}
        				that.loading = false;
        			} else {
        				that.$message.error(data.message);
        				that.loading = false;
        			}
        		})
            },
            methods: {
            	_loadComponents () {
			      this.basicComponents = this.basicComponents.map(item => {
			        return {
			          ...item,
			          name: item.type
			        }
			      })
			      this.advanceComponents = this.advanceComponents.map(item => {
			        return {
			          ...item,
			          name: item.type
			        }
			      })
			      this.layoutComponents = this.layoutComponents.map(item => {
			        return {
			          ...item,
			          name: item.type
			        }
			      })
			    },
            	handleMoveEnd (evt) {
			      console.log('end', evt)
			    },
			    handleMoveStart ({oldIndex}) {
			    	console.log('开始移动');
			    },
			    handleMove () {
			      return true
			    },
			    // 导入JSON
			    handleUpload() {},
			    // 保存
			    handleSave() { 
			    	this.loading = true;
			    	var that = this;
			    	var params = {
	        			id: this.infoData.id,
	        			elements: this.widgetForm,
	        			name: this.infoData.name,
	        			createPerson: this.infoData.createperson,
	        			description: this.infoData.description
	        		};
			    	console.log('elements=>',this.widgetForm);
			    	console.log('params====>',params);
			    	DragElementRunserver.saveData(JSON.stringify(params),function(data){
			    		if(data.status == 1) {
			    			that.$store.commit('changeList', that.widgetForm);
			    			that.$message({
					            message: '保存成功!',
					            type: 'success'
					        });
			    			that.loading = false;
			    		} else {
			    			that.$message.error(data.message);
			    			that.loading = false;
			    		}
			    	})
			    	console.log('=========>',this.widgetForm);
			    },
			    // 清空
			    handleClear() {
		            this.$confirm('此操作将清空拖拽布局, 是否继续?', '提示', {
		              confirmButtonText: '确定',
		              cancelButtonText: '取消',
		              type: 'warning'
		            }).then(() => {
		            	this.widgetForm = {
					        list: [],
					        config: {
					          labelWidth: 100,
					          labelPosition: 'right',
					          size: 'small',
					          customClass: ''
					        },
					    }
					    this.widgetFormSelect = {};
		              this.$message({
		                type: 'success',
		                message: '清除成功!'
		              });
		            }).catch(() => {
		              this.$message({
		                type: 'info',
		                message: '已取消'
		              });          
		            });
			    },
			    // 预览
			    handlePreview () {
			      this.previewVisible = true;
			      this.title = '页面预览';
			    },
			    // 生成JSON
			    handleGenerateJson() {},
			    test(x) {
			    	var topArray  = x;
			    	for(var j = 0 ; j < topArray.length ; j++){
			    		//获取顶级元素  递归时候是根据参数
			    		var top = topArray[j];
			    		var topType = (top.type);
			    		
			    		if(topType == 'container'){
			    			console.log('top=>',top);
			    			this.testVar += "<el-container>";
			    		}
			    		if(topType == 'header'){
			    			this.testVar += "<el-header height='" + top.options.height + "px'>";
			    		}
			    		if(topType == 'footer'){
			    			this.testVar += "<el-footer>";
			    		}
			    		if(topType == 'container-row'){
			    			this.testVar += "<el-container>";
			    		}
			    		if(topType == 'main'){
			    			this.testVar += "<el-main>";
			    		}
			    		if(topType == 'button'){
			    			var isdisabled = '';
			    			if (top.options.disabled) {
			    				isdisabled = 'disabled';
			    			} else {
			    				isdisabled = '';
			    			}
			    			this.testVar += "<el-button type='" + top.options.type + "' size='" + top.options.size + "'" +  isdisabled + ">" + top.options.defaultValue;
			    		}
			    		if(topType == 'aside'){
			    			console.log('top-aside=>',top);
			    			this.testVar += "<el-aside width='" + top.options.width +"px'>";
			    		}
			    		if(topType == 'tree'){
			    			this.testVar += "<el-tree :data='data' :props='defaultProps' >";
			    		}
			    		if(topType == 'table'){
			    			this.testVar += "<el-table border :data='tableData'><el-table-column type='index'></el-table-column><el-table-column prop='date' label='日期' width='180'> </el-table-column> <el-table-column prop='name' label='姓名' width='180'> </el-table-column><el-table-column prop='address' label='地址'> </el-table-column>";
			    		}
			    		if(topType == 'tab'){
			    			this.testVar += "<el-tabs type='border-card'><el-tab-pane label='用户管理'>用户管理</el-tab-pane><el-tab-pane label='配置管理'>配置管理</el-tab-pane><el-tab-pane label='角色管理'>角色管理</el-tab-pane><el-tab-pane label='定时任务补偿'>定时任务补偿</el-tab-pane>";
			    		}
			    		if(topType == 'pagination'){
			    			this.testVar += "<el-pagination :current-page='currentPage' :page-sizes='[10,20,30]' :page-size='100' layout='total, sizes, prev, pager, next, jumper' :total='400'>";
			    		}
			    		if(topType == 'form') {
			    			console.log('form:top=>',top);
			    			this.testVar += "<el-form>";
			    		}
			    		if(topType == 'grid'){
			    			this.testVar += "<el-row :guter='" + top.options.gutter + "'>";
			    			for (var i = 0;i < top.columns.length;i++) {
			    				var index = top.columns[i];
			    				this.testVar += "<el-col :span='" + index.span + "'>";
			    				if (index.list && index.list.length >= 1) {
			    						this.test(index.list);
			    				}
			    				this.testVar += "</el-col>";
			    				
			    			}
			    			this.testVar += "</el-row>";
			    			continue;
			    		}
			    		if(topType == 'formitem'){
			    			this.testVar += "<el-row :guter='" + top.options.gutter + "'>";
			    			for (var i = 0;i < top.columns.length;i++) {
			    				var index = top.columns[i];
			    				console.log('index=>',index);
			    				if (index.list.length > 0) {
			    					this.testVar += "<el-col :span='" + index.span + "'><el-form-item label='" + index.list[0].name +"'>";
				    				if (index.list && index.list.length >= 1) {
				    						this.test(index.list);
				    				}
				    				this.testVar += "</el-form-item></el-col>";
			    				}
//			    				this.testVar += "<el-col :span='" + index.span + "'><el-form-item label='" + index.list[0].name +"'>";
//			    				if (index.list && index.list.length >= 1) {
//			    						this.test(index.list);
//			    				}
//			    				this.testVar += "</el-form-item></el-col>";
			    				
			    			}
			    			this.testVar += "</el-row>";
			    			continue;
			    		}
			    		if(topType == 'input'){
			    			var isdisabled = '';
			    			if (top.options.disabled) {
			    				isdisabled = 'disabled';
			    			} else {
			    				isdisabled = '';
			    			}
			    			this.testVar += "<el-input v-model='defaultValue' " + isdisabled + " placeholder='" + top.options.placeholder + "'>";
			    		}
			    		
			    		if(topType == 'textarea'){ 
			    			var isdisabled = '';
			    			if (top.options.disabled) {
			    				isdisabled = 'disabled';
			    			} else {
			    				isdisabled = '';
			    			}
			    			this.testVar += "<el-input v-model='dataModel' type='textarea' :rows='" + top.options.rows + "'" + isdisabled + " placeholder='" + top.options.placeholder + "'>"
			    		}
			    		if(topType == 'number'){ 
			    			var isdisabled = '';
			    			if (top.options.disabled) {
			    				isdisabled = 'disabled';
			    			} else {
			    				isdisabled = '';
			    			}
			    			this.testVar += "<el-input-number v-model='dataModel' " + isdisabled + ":step='" + top.options.step + "' :min='" + top.options.min + "' :max='" + top.options.max +"'>";
			    		}
			    		if(topType == 'radio'){ 
			    			var isdisabled = '';
			    			if (top.options.disabled) {
			    				isdisabled = 'disabled';
			    			} else {
			    				isdisabled = '';
			    			}
			    			this.testVar += "<el-radio-group v-model='dataModel' " + isdisabled + ">";
			    			for (var i = 0;i < top.options.options.length;i++ ) {
			    				var label = top.options.options[i].value;
			    				this.testVar += "<el-radio :label='" + label + "'>" + label + "</el-radio>"
			    			}
			    			this.testVar += "</el-radio-group>"
			    		}
			    		if(topType == 'checkbox'){ 
			    			var isdisabled = '';
			    			if (top.options.disabled) {
			    				isdisabled = 'disabled';
			    			} else {
			    				isdisabled = '';
			    			}
			    			this.testVar += "<el-checkbox-group v-model='dataModel' " + isdisabled + ">";
			    			for (var i = 0;i < top.options.options.length;i++ ) {
			    				var label = top.options.options[i].value;
			    				this.testVar += "<el-checkbox :label='" + label + "'>" + label + "</el-checkbox>"
			    			}
			    			this.testVar += "</el-checkbox-group>"
			    		}
			    		if(topType == 'time'){ 
			    			var isdisabled = '';
			    			var isreadonly = '';
			    			if (top.options.disabled) {
			    				isdisabled = 'disabled';
			    			} else {
			    				isdisabled = '';
			    			}
			    			if (top.options.readonly) {
			    				isreadonly = 'readonly';
			    			} else {
			    				isreadonly = '';
			    			}
			    			this.testVar += "<el-time-picker v-model='dataModel' placeholder='" + top.options.placeholder + "' " + isreadonly + " " + isdisabled + ">";
			    		}
			    		if(topType == 'date'){ 
			    			var isdisabled = '';
			    			var isreadonly = '';
			    			if (top.options.disabled) {
			    				isdisabled = 'disabled';
			    			} else {
			    				isdisabled = '';
			    			}
			    			if (top.options.readonly) {
			    				isreadonly = 'readonly';
			    			} else {
			    				isreadonly = '';
			    			}
			    			this.testVar += "<el-date-picker type='date' v-model='dataModel' placeholder='" + top.options.placeholder + "' " + isreadonly + " " + isdisabled + ">";
			    		}
			    		if(topType == 'datetime'){ 
			    			var isdisabled = '';
			    			var isreadonly = '';
			    			if (top.options.disabled) {
			    				isdisabled = 'disabled';
			    			} else {
			    				isdisabled = '';
			    			}
			    			if (top.options.readonly) {
			    				isreadonly = 'readonly';
			    			} else {
			    				isreadonly = '';
			    			}
			    			this.testVar += "<el-date-picker type='datetime' v-model='dataModel' placeholder='" + top.options.placeholder + "' " + isreadonly + " " + isdisabled + ">";
			    		}
			    		if(topType == 'color'){
			    			var isdisabled = '';
			    			if (top.options.disabled) {
			    				isdisabled = 'disabled';
			    			} else {
			    				isdisabled = '';
			    			}
			    			this.testVar += "<el-color-picker v-model='dataModel' " + isdisabled + ">";
			    		} 
			    		if(topType == 'select'){
			    			var isdisabled = '';
			    			var isclearable = '';
			    			if (top.options.disabled) {
			    				isdisabled = 'disabled';
			    			} else {
			    				isdisabled = '';
			    			}
			    			if (top.options.clearable) {
			    				isclearable = 'clearable';
			    			} else {
			    				isclearable = '';
			    			}
			    			this.testVar += "<el-select v-model='dataModel' " + isdisabled + " " + isclearable + " placeholder='" + top.options.placeholder + "'>";
			    			for (var i = 0;i < top.options.options.length;i++ ) {
			    				var label = top.options.options[i].label;
			    				var value = top.options.options[i].value;
			    				this.testVar += "<el-option :label='" + value + "' :value=' " + value + "'></el-option>"
			    			}
			    			this.testVar += "</el-select>"
			    		}
			    		if(topType == 'switch'){
			    			var isdisabled = '';
			    			if (top.options.disabled) {
			    				isdisabled = 'disabled';
			    			} else {
			    				isdisabled = '';
			    			}
			    			this.testVar += "<el-switch v-model='dataModel' " + isdisabled + ">";
			    		}
			    		if(topType == 'slider'){ 
			    			var isdisabled = '';
			    			if (top.options.disabled) {
			    				isdisabled = 'disabled';
			    			} else {
			    				isdisabled = '';
			    			}
			    			this.testVar += "<el-slider v-model='dataModel' " + isdisabled + " :step='" + top.options.step + "' :min='" + top.options.min + "' :max='" + top.options.max +"'>";
			    		}
			    		if(topType == 'cascader'){
			    			var isdisabled = '';
			    			var isclearable = '';
			    			if (top.options.disabled) {
			    				isdisabled = 'disabled';
			    			} else {
			    				isdisabled = '';
			    			}
			    			if (top.options.clearable) {
			    				isclearable = 'clearable';
			    			} else {
			    				isclearable = '';
			    			}
			    			this.testVar += "<el-cascader v-model='dataModel' " + isdisabled + " " + isclearable + " placeholder='" + top.options.placeholder + "' :options='" + top.options.remoteOptions + "'>"
			    		}
			    		if(topType == 'text'){
			    			this.testVar += "<span style='color:#666;'>" + top.options.defaultValue + "</span>";
			    		}
			    		if(topType == 'imgupload') {
			    			var isdisabled = '';
			    			if (top.options.disabled) {
			    				isdisabled = 'disabled';
			    			} else {
			    				isdisabled = '';
			    			}
			    			this.testVar += "<el-upload :action='" + top.options.action + "' list-type='picture-card' " + isdisabled +" :limit='" + top.options.length +"'><i class='el-icon-plus'></i>";
			    		}
			    		if(topType == 'fileupload') {
			    			var isdisabled = '';
			    			if (top.options.disabled) {
			    				isdisabled = 'disabled';
			    			} else {
			    				isdisabled = '';
			    			}
			    			this.testVar += "<el-upload :action='" + top.options.action + "' multiple :limit='" + top.options.length +"' :file-list='" + top.options.fileList + "' " + isdisabled + "><el-button size='small' type='primary'>点击上传</el-button>";
			    		}
			    		if(topType == 'rate') {
			    			var isdisabled = '';
			    			if (top.options.disabled) {
			    				isdisabled = 'disabled';
			    			} else {
			    				isdisabled = '';
			    			}
			    			this.testVar += "<el-rate v-model='dataModel' :max='" + top.options.max + "' " + isdisabled + " :allow-half='" + top.options.allowHalf + "'>";
			    		}
			    		
				    	var topColumnsArray = top.columns;
				    	//array的length是几 就循环几次
				    	if(typeof(topColumnsArray) != 'undefined' && topColumnsArray.length >= 1 ){
				    		for(var i = 0 ; i <  topColumnsArray.length ; i++){
				    			
				    			//节点  节点中可能包含多个节点
				    			var one = topColumnsArray[i].list;
				    			if(one.length > 0){
				    				this.test(one);
				    			}
					    	}
				    	}else{
				    		//退出
				    	}
				    	if(topType == 'container'){
			    			this.testVar += "</el-container>";
			    		}
				    	if(topType == 'header'){
			    			this.testVar += "</el-header>";
			    		}
				    	if(topType == 'footer'){
			    			this.testVar += "</el-footer>";
			    		}
				    	if(topType == 'container-row'){
			    			this.testVar += "</el-container>";
			    		}
				    	if(topType == 'main'){
			    			this.testVar += "</el-main>";
			    		}
				    	if(topType == 'button'){
			    			this.testVar += "</el-button>";
			    		}
				    	if(topType == 'aside'){
			    			this.testVar += "</el-aside>";
			    		}
				    	if(topType == 'tree'){
			    			this.testVar += "</el-tree>";
			    		}
				    	if(topType == 'table'){
			    			this.testVar += "</el-table>";
			    		}
				    	if(topType == 'tab'){
			    			this.testVar += "</el-tabs>";
			    		}
				    	if(topType == 'pagination'){
			    			this.testVar += "</el-pagination>";
			    		}
				    	if(topType == 'input'){
			    			this.testVar += "</el-input>";
				    	}
				    	if(topType == 'textarea'){
			    			this.testVar += "</el-input>";
				    	}
				    	if(topType == 'number'){ 
			    			this.testVar += "</el-input-number>";
				    	}
				    	if(topType == 'time'){ 
			    			this.testVar += "</el-time-picker>";
				    	}
				    	if(topType == 'date'){ 
			    			this.testVar += "</el-date-picker>";
				    	}
				    	if(topType == 'datetime'){ 
			    			this.testVar += "</el-date-picker>";
				    	}
				    	if(topType == 'color'){
			    			this.testVar += "</el-color-picker>";
				    	}
				    	if(topType == 'switch'){
			    			this.testVar += "</el-switch>";
				    	}
				    	if(topType == 'slider'){ 
			    			this.testVar += "</el-slider>";
				    	}
				    	if(topType == 'cascader'){
			    			this.testVar += "</el-cascader>";
				    	}
				    	if(topType == 'imgupload') {
			    			this.testVar += "</el-upload>";
				    	}
				    	if(topType == 'fileupload') {
			    			this.testVar += "</el-upload>";
				    	}
						if(topType == 'rate') {
							this.testVar += "</el-rate>";
			    		}
						if(topType == 'form') {
			    			this.testVar += "</el-form>";
			    		}
//				    	if(topType == 'grid'){
//				    		this.testVar += "</el-col>";
//			    			this.testVar += "</el-row>";
//				    	}
			    	}
			    },
			    //upload上传列表展示禁止删除
			    //生成脚本
			    handleGeneratejs() {
			    	this.jsVisible = true;
			    	this.title = 'Js';
			    	this.jsTemplate = `var xxx = moduleinit({
	url:'', 
	el:'#',
	dorender:function(content){
	    var data = {
			template: content.template,
	        name: '',
	        data() {
	            return {
	            }
	        },
	        mounted() {
	        	
	        },
	        methods: {
	        }	
		}
		return data;
	}
})
			    	`;
//			    	this.jsTemplate = HTMLFormat(this.jsTemplate);
			    	this.$nextTick(() => {
				      editor = ace.edit("jseditor", {
				            theme: "ace/theme/monokai",
				            mode: "ace/mode/java",
				            wrap: true,
				            autoScrollEditorIntoView: true,
				            enableBasicAutocompletion: true,
				            enableSnippets: true,
				            enableLiveAutocompletion: true
				        });
				      editor.setFontSize(18);
				      editor.setOption("wrap", "free");
				    });
			    },
			    // 生成代码
			    handleGenerateCode() {
			    	this.codeVisible = true;
			    	this.title = 'Html';
			    	console.log('this.widgetForm=====>',this.widgetForm);
			    	this.testVar ="";
			    	var x= this.widgetForm.list;
			    	this.test(x);
			    	
			    	console.log(this.testVar);
			    	
				    //this.htmlTemplate = generateCode(JSON.stringify(this.widgetForm));
//			    	formattedHtml = HTMLFormat('<div><span>xxx</span></div>');
				    this.htmlTemplate = HTMLFormat(this.testVar);
				    this.$nextTick(() => {
				      //var editor = ace.edit('codeeditor');
				      //editor.session.setMode("ace/mode/html");
				      editor = ace.edit("codeeditor", {
				            theme: "ace/theme/monokai",
				            mode: "ace/mode/html",
				            wrap: true,
				            autoScrollEditorIntoView: true,
				            enableBasicAutocompletion: true,
				            enableSnippets: true,
				            enableLiveAutocompletion: true
				        });
				      editor.setFontSize(18);
				      editor.setOption("wrap", "free");
				    });
				    console.log('this.widgetForm=====>',this.widgetForm);
			    },
			    handleDataChange (field, value, data) {
			      console.log(field, value, data);
			    }
            }	
	    }
	    return data;
    }
})