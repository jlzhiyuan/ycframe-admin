var Form = moduleinit({
	url:'/demos/form/form.html', 
	el:'#form',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Form',
            data() {
                var checkAge = (rule, value, callback) => {
                  if (!value) {
                    return callback(new Error('年龄不能为空'));
                  }
                  setTimeout(() => {
                    if (!Number.isInteger(value)) {
                      callback(new Error('请输入数字值'));
                    } else {
                      if (value < 18) {
                        callback(new Error('必须年满18岁'));
                      } else {
                        callback();
                      }
                    }
                  }, 1000);
                };
                var validatePass = (rule, value, callback) => {
                  if (value === '') {
                    callback(new Error('请输入密码'));
                  } else {
                    if (this.ruleForm2.checkPass !== '') {
                      this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                  }
                };
                var validatePass2 = (rule, value, callback) => {
                  if (value === '') {
                    callback(new Error('请再次输入密码'));
                  } else if (value !== this.ruleForm2.pass) {
                    callback(new Error('两次输入密码不一致!'));
                  } else {
                    callback();
                  }
                };
                var checkAge1 = (rule, value, callback) => {
                    //console.log(rule.max_age)
                    if (!value) {
                       return callback(new Error('年龄不能为空'));
                     }
                     if (!Number.isInteger(value)) {
                         callback(new Error('请输入数字值'));
                      } else {
                        if (value < rule.max_age) {
                          callback(new Error('必须年满18岁'));
                        } else {
                          callback();
                        }
                      }
                  };
                return {
                	scrollDiv: '',
                    scrollHeight: '',
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow3: true,
                  isShow4: true,
                  isShow5: true,
                  isShow6: true,
                  dynamicValidateForm: {
	                  domains: [{
	                    value: ''
	                  }],
	                  email: ''
	              },
                  form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                    pageData: ''
                  },
                  formInline: {
                    user: '',
                    region: ''
                  },
                  labelPosition: 'right',
                  formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                  },
                  ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                  },
                  rules: {
                    name: [
                      { required: true, message: '请输入活动名称', trigger: 'blur' },
                      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                      { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                      { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                      { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                      { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                      { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                      { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                  },
                  ruleForm2: {
                    pass: '',
                    checkPass: '',
                    age: '',
                    count: ''
                  },
                  rules2: {
                    pass: [
                      { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                      { validator: validatePass2, trigger: 'blur' }
                    ],
                    age: [
                      { validator: checkAge, trigger: 'blur' }
                    ],
                    count: [
                      { required: true, message: '请输入活动名称', trigger: 'blur' },
                      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ]
                  },
                  ruleForm1: {
                      name: '',
                      age:''
                    },
                    rules1: {
                      name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                      ],
                      age: [
                        {max_age: 18, validator: checkAge1, trigger: 'blur' }
                      ]
                    },
                  attributes: [],
                  methods: [],
                  events: [],
                  itemAttributes: [],
                  itemSlot: [],
                  scopedSlot: [],
                  itemMethods: [],
                  data: {
                    "attributes": [
                      {
                        "parameter": "model",
                        "explain": "表单数据对象",
                        "type": "object",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "rules",
                        "explain": "表单验证规则",
                        "type": "object",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "inline",
                        "explain": "行内表单模式",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "label-position",
                        "explain": "表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width",
                        "type": "string",
                        "optional": "right/left/top",
                        "default":"right"
                      },
                      {
                        "parameter": "label-width",
                        "explain": "表单域标签的宽度，作为 Form 直接子元素的 form-item 会继承该值",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "label-suffix",
                        "explain": "表单域标签的后缀",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "hide-required-asterisk",
                        "explain": "是否显示必填字段的标签旁边的红色星号",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "show-message",
                        "explain": "是否显示校验错误信息",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "inline-message",
                        "explain": "是否以行内形式展示校验信息",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                    {
                        "parameter": "status-icon",
                        "explain": "是否在输入框中显示校验结果反馈图标",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "validate-on-rule-change",
                        "explain": "是否在 rules 属性改变后立即触发一次验证",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "size",
                        "explain": "用于控制该表单内组件的尺寸",
                        "type": "string",
                        "optional": "medium / small / mini",
                        "default":"—"
                      },
                      {
                        "parameter": "disabled",
                        "explain": "是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      }
                    ],
                    "methods": [
                      {
                        "name": "validate",
                        "explain": "对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise",
                        "parameter": "Function(callback: Function(boolean, object))"
                      },
                      {
                        "name": "validateField",
                        "explain": "对部分表单字段进行校验的方法",
                        "parameter": "Function(props: array)"
                      },
                      {
                        "name": "resetFields",
                        "explain": "对整个表单进行重置，将所有字段值重置为初始值并移除校验结果",
                        "parameter": "—"
                      },
                      {
                        "name": "clearValidate",
                        "explain": "移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果",
                        "parameter": "Function(props: array)"
                      }
                    ],
                    "events": [
                      {
                        "name": 'validate',
                        "explain": '任一表单项被校验后触发',
                        "parameter": '被校验的表单项 prop 值，校验是否通过，错误消息（如果存在）'
                      }
                    ],
                    "itemAttributes": [
                      {
                        "parameter": "prop",
                        "explain": "表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的",
                        "type": "string",
                        "optional": "传入 Form 组件的 model 中的字段",
                        "default":"—"
                      },
                      {
                        "parameter": "label",
                        "explain": "标签文本",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "label-width",
                        "explain": "表单域标签的的宽度，例如 '50px'",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "required",
                        "explain": "是否必填，如不设置，则会根据校验规则自动生成",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "rules",
                        "explain": "表单验证规则",
                        "type": "object",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "error",
                        "explain": "表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "show-message",
                        "explain": "是否显示校验错误信息",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "inline-message",
                        "explain": "是否以行内形式展示校验信息",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "size",
                        "explain": "用于控制该表单域下组件的尺寸",
                        "type": "string",
                        "optional": "medium / small / mini",
                        "default":"—"
                      }
                    ],
                    "itemSlot": [
                      {
                        "name": "—",
                        "explain": "Form Item 的内容"
                      },
                      {
                        "name": "label",
                        "explain": "标签文本的内容"
                      }
                    ],
                    "scopedSlot": [
                      {
                        "name": "error",
                        "explain": "自定义表单校验信息的显示方式，参数为 { error }"
                      }
                    ],
                    "itemMethods": [
                      {
                        "name": "resetField",
                        "explain": "对该表单项进行重置，将其值重置为初始值并移除校验结果",
                        "parameter": "—"
                      },
                      {
                        "name": "clearValidate",
                        "explain": "移除该表单项的校验结果",
                        "parameter": "—"
                      }
                    ]
                  }
                }
              },
              computed: {
              },
              watch: {
              	'$route'(to,from){
              		if (to.path == this.$route.path) {
              			this.scrollDiv.scrollTop = this.scrollHeight;
              			console.log('this.scrollHeight=>',this.scrollHeight);
              		} 
              	},
              },
              mounted() {
            	  this.scrollDiv = this.$refs.form;
                  this.scrollDiv.addEventListener("scroll", this.scroll);
                this.attributes = this.data.attributes;
                this.itemAttributes = this.data.itemAttributes;
                this.events = this.data.events;
                this.itemSlot = this.data.itemSlot;
                this.scopedSlot = this.data.scopedSlot;
                this.methods = this.data.methods;
                this.itemMethods = this.data.itemMethods;
                // var that = this;
                // $.ajax({
                //   type:'get',
                //   url:'http://form',
                //   data: {},
                //   dataType:'json',
                //   success:function(data){
                //     that.attributes = data.attributes;
                //     that.itemAttributes = data.itemAttributes;
                //     that.events = data.events;
                //     that.itemSlot = data.itemSlot;
                //     that.scopedSlot = data.scopedSlot;
                //     that.methods = data.methods;
                //     that.itemMethods = data.itemMethods;
                //   }
                // })
              },
              methods: {
	        	  submitForm(formName) {
	        	        this.$refs[formName].validate((valid) => {
	        	          if (valid) {
	        	            alert('submit!');
	        	          } else {
	        	            console.log('error submit!!');
	        	            return false;
	        	          }
	        	        });
	        	      },
	        	      resetForm(formName) {
	        	        this.$refs[formName].resetFields();
	        	      },
	        	      removeDomain(item) {
	        	        var index = this.dynamicValidateForm.domains.indexOf(item)
	        	        if (index !== -1) {
	        	          this.dynamicValidateForm.domains.splice(index, 1)
	        	        }
	        	      },
	        	      addDomain() {
	        	        this.dynamicValidateForm.domains.push({
	        	          value: '',
	        	          key: Date.now()
	        	        });
	        	      },
            	  scroll() {
              		this.scrollHeight = this.scrollDiv.scrollTop;
    	            },
                onSubmit() {
                  console.log('submit!');
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
                clickShow5: function() {
                  this.isShow5 = !this.isShow5;
                },
                clickShow6: function() {
                    this.isShow6 = !this.isShow6;
                },
                clickShow4: function() {
                    this.isShow4 = !this.isShow4;
                  },
                submitForm(formName) {
                  this.$refs[formName].validate((valid) => {
                    if (valid) {
                      alert('submit!');
                    } else {
                      console.log('error submit!!');
                      return false;
                    }
                  });
                },
                resetForm(formName) {
                  this.$refs[formName].resetFields();
                },
                submitForm(formName) {
                  this.$refs[formName].validate((valid) => {
                    if (valid) {
                      alert('submit!');
                    } else {
                      console.log('error submit!!');
                      return false;
                    }
                  });
                },
                resetForm(formName) {
                  this.$refs[formName].resetFields();
                },
                submitForm1(formName) {
                    this.$refs[formName].validate((valid) => {
                      if (valid) {
                        alert('submit!');
                      } else {
                        console.log('error submit!!')
                      }
                    });
                  },
                  resetForm1(formName) {
                    this.$refs[formName].resetFields();
                  }
              }
	    }
	    return data;
    }
})