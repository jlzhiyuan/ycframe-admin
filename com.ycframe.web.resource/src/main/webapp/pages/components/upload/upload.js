var fmupload = moduleinit({
	url:'/components/upload/upload.html', 
	el:'#fmupload',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'fmupload',
            props: {
	            value: {
	              type: Array,
	              default: () => []
	            },
	            width: {
	              type: Number,
	              default: 100
	            },
	            height: {
	              type: Number,
	              default: 100
	            },
	            token: {
	              type: String,
	              default: ''
	            },
	            domain: {
	              type: String,
	              default: ''
	            },
	            multiple: {
	              type: Boolean,
	              default: false
	            },
	            length: {
	              type: Number,
	              default: 9
	            },
	            isQiniu: {
	              type: Boolean,
	              default: false
	            },
	            isDelete: {
	              type: Boolean,
	              default: false
	            },
	            min: {
	              type: Number,
	              default: 0
	            },
	            meitu: {
	              type: Boolean,
	              default: false
	            },
	            isEdit: {
	              type: Boolean,
	              default: false
	            },
	            action: {
	              type: String,
	              default: ''
	            },
	            disabled: {
	              type: Boolean,
	              default: false
	            }
	          },
	          data () {
	            return {
	              fileList: this.value.map(item => {
	                return {
	                  key: item.key ? item.key : (new Date().getTime()) + '_' + Math.ceil(Math.random() * 99999),
	                  url: item.url,
	                  percent: item.percent ? item.percent : 100,
	                  status: item.status ? item.status : 'success'
	                }
	              }),
	              viewer: null,
	              uploadId: 'upload_' + new Date().getTime(),
	              editIndex: -1,
	              meituIndex: -1,
	            }
	          },
	          computed: {
	            miniWidth () {
	              if (this.width > this.height) {
	                return this.height
	              } else {
	                return this.width
	              }
	            }
	          },
	          mounted () {
	            this.$emit('input', this.fileList)
	          },
	          methods: {
	            handleChange () {
	              console.log(this.$refs.uploadInput.files)
	              const files = this.$refs.uploadInput.files
	              
	              for (let i = 0; i < files.length; i++) {
	                const file = files[i]
	                const reader = new FileReader()
	                const key = (new Date().getTime()) + '_' + Math.ceil(Math.random() * 99999)
	                reader.readAsDataURL(file)
	                reader.onload = () => {
	                  if (this.editIndex >= 0) {
	
	                    this.$set(this.fileList, this.editIndex, {
	                      key,
	                      url: reader.result,
	                      percent: 0,
	                      status: 'uploading'
	                    })
	
	                    this.editIndex = -1
	                  } else {
	                    this.fileList.push({
	                      key,
	                      url: reader.result,
	                      percent: 0,
	                      status: 'uploading'
	                    })
	                  }
	
	                  this.$nextTick(() => {
	                    if (this.isQiniu) {
	                      this.uplaodAction2(reader.result, file, key)
	                    } else {
	                      this.uplaodAction(reader.result, file, key)
	                    }
	                  })
	                }
	              }
	              this.$refs.uploadInput.value = []
	            }, 
	            uplaodAction (res, file, key) {
	              let changeIndex = this.fileList.findIndex(item => item.key === key)
	              console.log(this.fileList.findIndex(item => item.key === key))
	              const xhr = new XMLHttpRequest()
	              
	              const url = this.action
	              xhr.open('POST', url, true)
	              // xhr.setRequestHeader('Content-Type', 'multipart/form-data')
	
	              let formData = new FormData()
	              formData.append('file', file)
	
	              xhr.send(formData)
	              xhr.onreadystatechange = () => {
	                console.log(xhr)
	                if (xhr.readyState === 4) {
	                  
	                  let resData = JSON.parse(xhr.response)
	                  if (resData && resData.url) {
	                    this.$set(this.fileList, this.fileList.findIndex(item => item.key === key), {
	                      ...this.fileList[this.fileList.findIndex(item => item.key === key)],
	                      url: resData.url,
	                      percent: 100
	                    })
	                    setTimeout(() => {
	                      this.$set(this.fileList, this.fileList.findIndex(item => item.key === key), {
	                        ...this.fileList[this.fileList.findIndex(item => item.key === key)],
	                        status: 'success'
	                      })
	                      this.$emit('input', this.fileList)
	                    }, 200)
	                  } else {
	                    this.$set(this.fileList, this.fileList.findIndex(item => item.key === key), {
	                      ...this.fileList[this.fileList.findIndex(item => item.key === key)],
	                      status: 'error'
	                    })
	                    this.fileList.splice(this.fileList.findIndex(item => item.key === key), 1)
	                  }
	                }
	              }
	              xhr.onprogress = (res) => {
	                console.log('progress', res)
	                if (res.total && res.loaded) {
	                  this.$set(this.fileList[this.fileList.findIndex(item => item.key === key)], 'percent', res.loaded/res.total*100)
	                }
	              }
	            },
	            uplaodAction2 (res, file, key) {
	              const _this = this
	              const observable = qiniu.upload(file, key, this.token, {
	                fname: key,
	                mimeType: []
	              }, {
	                useCdnDomain: true,
	                region: qiniu.region.z2
	              })
	              observable.subscribe({
	                next (res) {
	                  _this.$set(_this.fileList[_this.fileList.findIndex(item => item.key === key)], 'percent', parseInt(res.total.percent))
	                  
	                },
	                error (err) {
	                  _this.$set(_this.fileList, _this.fileList.findIndex(item => item.key === key), {
	                    ..._this.fileList[_this.fileList.findIndex(item => item.key === key)],
	                    status: 'error'
	                  })
	                  _this.fileList.splice(_this.fileList.findIndex(item => item.key === key), 1)
	                },
	                complete (res) {
	                  _this.$set(_this.fileList, _this.fileList.findIndex(item => item.key === key), {
	                    ..._this.fileList[_this.fileList.findIndex(item => item.key === key)],
	                    url: _this.domain + res.key,
	                    percent: 100
	                  })
	                  setTimeout(() => {
	                    _this.$set(_this.fileList, _this.fileList.findIndex(item => item.key === key), {
	                      ..._this.fileList[_this.fileList.findIndex(item => item.key === key)],
	                      status: 'success'
	                    })
	                    _this.$emit('input', _this.fileList)
	                  }, 200)
	                }
	              })
	            },
	            handleRemove (key) {
	              this.fileList.splice(this.fileList.findIndex(item => item.key === key), 1)
	            },
	            handleEdit (key) {
	              
	              this.editIndex = this.fileList.findIndex(item => item.key === key)
	              
	              this.$refs.uploadInput.click()
	            },
	            handleMeitu (key) {
	
	              this.$emit('on-meitu', this.fileList.findIndex(item => item.key === key))
	            },
	            handleAdd () {
	              if (!this.disabled) {
	                this.editIndex = -1
	                this.$refs.uploadInput.click()
	              }
	            },
	            handlePreviewFile (key) {
	              this.viewer && this.viewer.destroy()
	              this.uploadId = 'upload_' + new Date().getTime()
	              
	              console.log(this.viewer)
	              this.$nextTick(() => {
	                this.viewer = new Viewer(document.getElementById(this.uploadId))
	                this.viewer.view(this.fileList.findIndex(item => item.key === key))
	              })
	            }
	          },
	          watch: {
	            'fileList': {
	              deep: true,
	              handler (val) {
	                // this.$emit('input', this.fileList)
	              }
	            }
	          }
	    }
	    return data;
    }
})

