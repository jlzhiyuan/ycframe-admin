var Upload = moduleinit({
	url:'/demos/upload/upload.html',
	el:'#upload',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Upload',
            data() {
            	return {
                    scrollHeight: '',
              	iconLists: '',
                  scrollDiv: '',
                  isShow: true,
                  isShow1: true,
                  isShow2: true,
                  isShow3: true,
                  isShow4: true,
                  isShow5: true,
                  isShow6: true,
                  isShow7: true,
                  imageUrl: '',
                  dialogImageUrl: '',
                  dialogVisible: false,
                  dialogImageUrl1: '',
                  dialogVisible1: false,
                  disabled: false,
                  attributes: [],
                  slot: [],
                  methods: [],
                  data: {
                    "attributes": [
                      {
                        "parameter": "action",
                        "explain": "必选参数，上传的地址",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "headers",
                        "explain": "设置上传的请求头部",
                        "type": "object",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "multiple",
                        "explain": "是否支持多选文件",
                        "type": "boolean",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "data",
                        "explain": "上传时附带的额外参数",
                        "type": "object",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "name",
                        "explain": "上传的文件字段名",
                        "type": "string",
                        "optional": "—",
                        "default":"file"
                      },
                      {
                        "parameter": "with-credentials",
                        "explain": "支持发送 cookie 凭证信息",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "show-file-list",
                        "explain": "是否显示已上传文件列表",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "drag",
                        "explain": "是否启用拖拽上传",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "accept",
                        "explain": "接受上传的文件类型（thumbnail-mode 模式下此参数无效）",
                        "type": "string",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "on-preview",
                        "explain": "点击文件列表中已上传的文件时的钩子",
                        "type": "function(file)",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "on-remove",
                        "explain": "文件列表移除文件时的钩子",
                        "type": "function(file, fileList)",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "on-success",
                        "explain": "文件上传成功时的钩子",
                        "type": "function(response, file, fileList)",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "on-error",
                        "explain": "文件上传失败时的钩子",
                        "type": "function(err, file, fileList)",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "on-progress",
                        "explain": "文件上传时的钩子",
                        "type": "function(event, file, fileList)",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "on-change",
                        "explain": "文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用",
                        "type": "function(file, fileList)",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "before-upload",
                        "explain": "上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。",
                        "type": "function(file)",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "before-remove",
                        "explain": "删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止上传。",
                        "type": "function(file, fileList)",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "list-type",
                        "explain": "文件列表的类型",
                        "type": "string",
                        "optional": "text/picture/picture-card",
                        "default":"text"
                      },
                      {
                        "parameter": "auto-upload",
                        "explain": "是否在选取文件后立即进行上传",
                        "type": "boolean",
                        "optional": "—",
                        "default":"true"
                      },
                      {
                        "parameter": "file-list",
                        "explain": "上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]",
                        "type": "array",
                        "optional": "—",
                        "default":"[]"
                      },
                      {
                        "parameter": "http-request",
                        "explain": "覆盖默认的上传行为，可以自定义上传的实现",
                        "type": "function",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "disabled",
                        "explain": "是否禁用",
                        "type": "boolean",
                        "optional": "—",
                        "default":"false"
                      },
                      {
                        "parameter": "limit",
                        "explain": "最大允许上传个数",
                        "type": "number",
                        "optional": "—",
                        "default":"—"
                      },
                      {
                        "parameter": "on-exceed",
                        "explain": "文件超出个数限制时的钩子",
                        "type": "function(files, fileList)",
                        "optional": "—",
                        "default":"—"
                      }
                    ],
                    "methods": [
                      {
                        "name": "clearFiles",
                        "explain": "	清空已上传的文件列表（该方法不支持在 before-upload 中调用）",
                        "parameter": "—"
                      },
                      {
                        "name": "abort",
                        "explain": "取消上传请求",
                        "parameter": "（ file: fileList 中的 file 对象 ）"
                      },
                      {
                        "name": "submit",
                        "explain": "手动上传文件列表",
                        "parameter": "—"
                      }
                    ],
                    "slot": [
                      {
                        "name": "trigger",
                        "explain": "触发文件选择框的内容"
                      },
                      {
                        "name": "tip",
                        "explain": "提示说明文字"
                      }
                    ]
                  },
                  fileList2: [{
                      name: 'food.jpeg',
                      url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                  }, {
                      name: 'food2.jpeg',
                      url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                  }],
                  fileList1: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
                  fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
                }
            },
            watch: {
            	'$route'(to,from){
            		if (to.path == this.$route.path) {
            			this.scrollDiv.scrollTop = this.scrollHeight;
            			console.log('this.scrollHeight=>',this.scrollHeight);
            		} 
            	},
            },
            mounted(){
            	this.scrollDiv = this.$refs.uploads;
            	this.scrollDiv.addEventListener("scroll", this.scroll);
                this.attributes = this.data.attributes;
                this.methods = this.data.methods;
                this.slot = this.data.slot;
            },
            methods: {
            	clickShow() {
            		this.isShow = !this.isShow;
            	},
            	clickShow1() {
            		this.isShow1 = !this.isShow1;
            	},
            	clickShow2() {
            		this.isShow2 = !this.isShow2;
            	},
            	clickShow3() {
            		this.isShow3 = !this.isShow3;
            	},
            	clickShow4() {
            		this.isShow4 = !this.isShow4;
            	},
            	clickShow5() {
            		this.isShow5 = !this.isShow5;
            	},
            	clickShow6() {
            		this.isShow6 = !this.isShow6;
            	},
            	clickShow7() {
            		this.isShow7 = !this.isShow7;
            	},
            	handleRemove(file, fileList) {
    	        },
    	        handlePreview(file) {
    	        },
    	        handleExceed(files, fileList) {
    	           this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    	        },
    	        beforeRemove(file, fileList) {
    	           return this.$confirm(`确定移除 ${ file.name }？`);
    	        },
    	        handleAvatarSuccess(res, file) {
    	          this.imageUrl = URL.createObjectURL(file.raw);
    	        },
                beforeAvatarUpload(file) {
                  var isJPG = file.type === 'image/jpeg';
                  var isLt2M = file.size / 1024 / 1024 < 2;

                  if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                  }
                  if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                  }
                  return isJPG && isLt2M;
                },
                submitUpload() {
                    this.$refs.upload.submit();
                },
                handlePreview(file) {
                },
                handlePictureCardPreview(file) {
                    this.dialogImageUrl = file.url;
                    this.dialogVisible = true;
                },
                handlePictureCardPreview(file) {
                    this.dialogImageUrl1 = file.url;
                    this.dialogVisible1 = true;
                },
                handleDownload(file) {
                  console.log(file);
                },
                handleChange(file, fileList) {
                   this.fileList2 = fileList.slice(-3);
                }
            }
	    }
	    return data;
    }
})


//var Upload = function(resolve, reject) {
//  $.ajax({
//    url:'pages/components/upload/upload.html',
//    type:"GET",
//    dataType:"html",
//    success:function(result){
//      var Obj = $("<code></code>").append($(result));//包装数据
//      var $html = $("#upload", Obj);
//      var value = $html.html();
//      resolve({
//        template: value,
//        name: 'Upload',
//        data() {
//          return {
//              scrollHeight: '',
//        	iconLists: '',
//            scrollDiv: '',
//            isShow: true,
//            isShow1: true,
//            isShow2: true,
//            imageUrl: '',
//            dialogImageUrl: '',
//            dialogVisible: false,
//            dialogImageUrl1: '',
//            dialogVisible1: false,
//            disabled: false
//            attributes: [],
//            slot: [],
//            methods: [],
//            data: {
//              "attributes": [
//                {
//                  "parameter": "action",
//                  "explain": "必选参数，上传的地址",
//                  "type": "string",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "headers",
//                  "explain": "设置上传的请求头部",
//                  "type": "object",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "multiple",
//                  "explain": "是否支持多选文件",
//                  "type": "boolean",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "data",
//                  "explain": "上传时附带的额外参数",
//                  "type": "object",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "name",
//                  "explain": "上传的文件字段名",
//                  "type": "string",
//                  "optional": "—",
//                  "default":"file"
//                },
//                {
//                  "parameter": "with-credentials",
//                  "explain": "支持发送 cookie 凭证信息",
//                  "type": "boolean",
//                  "optional": "—",
//                  "default":"false"
//                },
//                {
//                  "parameter": "show-file-list",
//                  "explain": "是否显示已上传文件列表",
//                  "type": "boolean",
//                  "optional": "—",
//                  "default":"true"
//                },
//                {
//                  "parameter": "drag",
//                  "explain": "是否启用拖拽上传",
//                  "type": "boolean",
//                  "optional": "—",
//                  "default":"false"
//                },
//                {
//                  "parameter": "accept",
//                  "explain": "接受上传的文件类型（thumbnail-mode 模式下此参数无效）",
//                  "type": "string",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "on-preview",
//                  "explain": "点击文件列表中已上传的文件时的钩子",
//                  "type": "function(file)",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "on-remove",
//                  "explain": "文件列表移除文件时的钩子",
//                  "type": "function(file, fileList)",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "on-success",
//                  "explain": "文件上传成功时的钩子",
//                  "type": "function(response, file, fileList)",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "on-error",
//                  "explain": "文件上传失败时的钩子",
//                  "type": "function(err, file, fileList)",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "on-progress",
//                  "explain": "文件上传时的钩子",
//                  "type": "function(event, file, fileList)",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "on-change",
//                  "explain": "文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用",
//                  "type": "function(file, fileList)",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "before-upload",
//                  "explain": "上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。",
//                  "type": "function(file)",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "before-remove",
//                  "explain": "删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止上传。",
//                  "type": "function(file, fileList)",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "list-type",
//                  "explain": "文件列表的类型",
//                  "type": "string",
//                  "optional": "text/picture/picture-card",
//                  "default":"text"
//                },
//                {
//                  "parameter": "auto-upload",
//                  "explain": "是否在选取文件后立即进行上传",
//                  "type": "boolean",
//                  "optional": "—",
//                  "default":"true"
//                },
//                {
//                  "parameter": "file-list",
//                  "explain": "上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]",
//                  "type": "array",
//                  "optional": "—",
//                  "default":"[]"
//                },
//                {
//                  "parameter": "http-request",
//                  "explain": "覆盖默认的上传行为，可以自定义上传的实现",
//                  "type": "function",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "disabled",
//                  "explain": "是否禁用",
//                  "type": "boolean",
//                  "optional": "—",
//                  "default":"false"
//                },
//                {
//                  "parameter": "limit",
//                  "explain": "最大允许上传个数",
//                  "type": "number",
//                  "optional": "—",
//                  "default":"—"
//                },
//                {
//                  "parameter": "on-exceed",
//                  "explain": "文件超出个数限制时的钩子",
//                  "type": "function(files, fileList)",
//                  "optional": "—",
//                  "default":"—"
//                }
//              ],
//              "methods": [
//                {
//                  "name": "clearFiles",
//                  "explain": "	清空已上传的文件列表（该方法不支持在 before-upload 中调用）",
//                  "parameter": "—"
//                },
//                {
//                  "name": "abort",
//                  "explain": "取消上传请求",
//                  "parameter": "（ file: fileList 中的 file 对象 ）"
//                },
//                {
//                  "name": "submit",
//                  "explain": "手动上传文件列表",
//                  "parameter": "—"
//                }
//              ],
//              "slot": [
//                {
//                  "name": "trigger",
//                  "explain": "触发文件选择框的内容"
//                },
//                {
//                  "name": "tip",
//                  "explain": "提示说明文字"
//                }
//              ]
//            },
//            fileList2: [{
//                name: 'food.jpeg',
//                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
//            }, {
//                name: 'food2.jpeg',
//                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
//            }],
//            fileList1: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
//            fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
//          }
//        },
//        computed: {
//        },
//        watch: {
//        	'$route'(to,from){
//        		if (to.path == this.$route.path) {
//        			this.scrollDiv.scrollTop = this.scrollHeight;
//        			console.log('this.scrollHeight=>',this.scrollHeight);
//        		} 
//        	},
//        },
//        mounted(){
//        	this.scrollDiv = this.$refs.uploads;
//        	this.scrollDiv.addEventListener("scroll", this.scroll);
//            this.attributes = this.data.attributes;
//            this.methods = this.data.methods;
//            this.slot = this.data.slot;
//        },
//        methods: {
//        	clickShow() {
//        		this.isShow = !this.isShow;
//        	},
//        	clickShow1() {
//        		this.isShow1 = !this.isShow1;
//        	},
//        	clickShow2() {
//        		this.isShow2 = !this.isShow2;
//        	},
//        	handleRemove(file, fileList) {
//	        },
//	        handlePreview(file) {
//	        },
//	        handleExceed(files, fileList) {
//	           this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
//	        },
//	        beforeRemove(file, fileList) {
//	           return this.$confirm(`确定移除 ${ file.name }？`);
//	        },
//	        handleAvatarSuccess(res, file) {
//	          this.imageUrl = URL.createObjectURL(file.raw);
//	        },
//            beforeAvatarUpload(file) {
//              var isJPG = file.type === 'image/jpeg';
//              var isLt2M = file.size / 1024 / 1024 < 2;
//
//              if (!isJPG) {
//                this.$message.error('上传头像图片只能是 JPG 格式!');
//              }
//              if (!isLt2M) {
//                this.$message.error('上传头像图片大小不能超过 2MB!');
//              }
//              return isJPG && isLt2M;
//            },
//            submitUpload() {
//                this.$refs.upload.submit();
//            },
//            handlePreview(file) {
//            },
//            handlePictureCardPreview(file) {
//                this.dialogImageUrl = file.url;
//                this.dialogVisible = true;
//            },
//            handlePictureCardPreview(file) {
//                this.dialogImageUrl1 = file.url;
//                this.dialogVisible1 = true;
//            },
//            handleDownload(file) {
//              console.log(file);
//            },
//            handleChange(file, fileList) {
//               this.fileList2 = fileList.slice(-3);
//            }
//        }
//      })
//    }
//  });
//};
