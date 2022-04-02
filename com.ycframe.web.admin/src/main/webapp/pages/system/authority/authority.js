var authority = moduleinit({
	url:'/system/authority/authority.html', 
	el:'#authority',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'authority',
            data() {
                return {
              	  tags:['标签一','标签'],
              	jsid:'',
              	gnid:'',
              	data: [],
                  defaultProps: {
                  	value: 'id',
                      label: 'label',
                      children: 'children'
                  },
                  color: {
                    background: '#428bca',
                    color: '#ffffff'
                  },
                  number: 0,
                  TableDate:[
                  ],
                  lists: [],
                  multipleSelection: [],
                  multipleSelection1: [],
                  multipleSelection2: [],
                  text: '',
                  dialogTableVisible: false,
                  btnData: [],
                  currentPage: 1,
                  total:0,
                  pageSize:10,
                  currentRow: null,
                  count: 1,
                  rowId: 60,
                  currtNode: '',
                  name: '',
                  sort: '',
                  isSelected: false,
                  selection: []
                }
              },
      	      mounted() {
      	        	var that = this;
      	        	$$.authority.getZzjgtree({success:function(data){
      	        		if (data.code == 0) {
      	        			console.log('data==>',data.data);
      	        			that.data = data.data;
      	        		} else {
      	        			that.$message({
                                showClose: true,
                                message:  data.message,
                                type: 'error'
                            });
      	        		}
      	        	}});
      	        	$$.authority.getSjqxList({data:{orderCol:that.name,orderType:that.sort,jsid:that.jsid},success:function(data){
      	        		if(data.code == 0){
      	        			that.lists = data.data.tableData;
	               		 }else{
	               			 that.$message({
	                                showClose: true,
	                                message:  data.message,
	                                type: 'error'
	                              });
	               		 }
      	        	}});
					
      	        	$$.authority.getCzqxxx({data:{orderCol:that.name,orderType:that.sort,jsids:that.jsid},success:function(data){
      	        		if(data.code == 0){
      	        			that.TableDate = data.data;
	               		 }else{
	               			 that.$message({
                                showClose: true,
                                message:  data.message,
                                type: 'error'
                              });
	               		 }
      	        	}});
      	        },
      	        methods: {
      	        
      	        	zhuanhuan(val)
      	        	{
      	        		if(val=="0")
      	        		{
      	        			return "菜单";
      	        		}else if(val=="1")
      	        		{
      	        			return "接口";
      	        		}else if(val=="2")
      	        		{
      	        		
      	        			return "功能";
      	        		}else if(val=="3")
      	        		{
      	        			return "按钮";
      	        		}
      	 
      	        	},
      	        	sortChange(data) {
	            		var that = this;
	               		this.name = data.prop;
	               		if (data.order == 'descending') {
	               			this.sort = 'desc';
	               		} else {
	               			this.sort = 'asc';
	               		}
	               		
	               		$$.authority.getCzqxxx({data:{orderCol:that.name,orderType:that.sort,jsids:that.jsid},success:function(data){
      	        		if(data.code == 0){
      	        			that.TableDate = data.data;
	               		 }else{
	               			 that.$message({
                                showClose: true,
                                message:  data.message,
                                type: 'error'
                              });
	               		 }
      	        	}});
	               		$$.authority.getSjqxList({data:{orderCol:that.name,orderType:that.sort,jsid:that.jsid},success:function(data){
      	        		if(data.code == 0){
      	        			that.lists = data.data.tableData;
	               		 }else{
	               			 that.$message({
	                                showClose: true,
	                                message:  data.message,
	                                type: 'error'
	                              });
	               		 }
      	        	}});
					
	               	},
      	    	  handleNodeClick(data) {
      	    		  this.currtNode = data;
      	    		  this.jsid = data.id;
      	    		  var that = this;
					  $$.authority.getSjqxList({data:{orderCol:that.name,orderType:that.sort,jsid:that.jsid},success:function(data){
      	        		if(data.code == 0){
      	        			that.lists = data.data.tableData;
      	    				that.$nextTick(() => {
      		          			for(var i=0;i<that.lists.length;i++){
      			          			if(that.lists[i].acheckbox3 == '1'){
      			          				that.$refs.multipleTable1.toggleRowSelection(that.lists[i]);
      			          			}
      			          		}
      		          			
      	                    })
	               		 }else{
	               			 that.$message({
	                                showClose: true,
	                                message:  data.message,
	                                type: 'error'
	                              });
	               		 }
      	        	}});
					 
      	    		  $$.authority.getCzqxxx({data:{orderCol:that.name,orderType:that.sort,jsids:that.jsid},success:function(data){
      	        		if(data.code == 0){
      	        			that.TableDate = data.data;
	               		 }else{
	               			 that.$message({
                                showClose: true,
                                message:  data.message,
                                type: 'error'
                              });
	               		 }
      	        	}});
      	          },
      	        selectAllll(selection,row) {
      	        	  
//      	        	  if (row.acheckbox == '1') {
//      	        		row.acheckbox == 0;
//      	        	  } else {
//      	        		row.acheckbox == 1;
//      	        	  }
////      	        	  console.log('selection',selection);
//      	        	  console.log('row',row);
      	        	  
      	        	  /*var that = this;
      	        	var stark = [];
	              	    stark = stark.concat(that.TableDate);
	          
	              	    while(stark.length) {
	              	    	var temp = stark.shift();
	              	        if(temp.children) {
	              	            // 当前节点有子节点时，将子节点放到当前的栈的前面
	              	            stark = temp.children.concat(stark);
	              	        }
	              	        console.log('temp=>',temp);
	              	        if (temp.acheckbox == '1' || temp.acheckbox == '0') {
	              	        	that.$refs.multipleTable.toggleRowSelection(temp);
	              	        }
	              	    }*/
      	          },
                selectBtn(index) {
                  this.number = index;
                },
                rowClick(row) {
              	  this.$refs.multipleTable.toggleRowSelection(row);
                },
                rowClass(row){
//      	          if(this.multipleSelection.includes(row.row)){
//      	            return { "background-color": "#ecf5ff" }
//      	          }
                },
                //树型表格选中
                handleSelectionChange(val) {
              	  this.multipleSelection = val;
                },
                rowClick1(row) {
              	  this.$refs.multipleTable1.toggleRowSelection(row);
                },
                rowClass1(row){
      	          if(this.multipleSelection1.includes(row.row)){
      	            return { "background-color": "#ecf5ff" }
      	          }
                },
                //数据权限选中
                handleSelectionChange1(val) {
              	  this.multipleSelection1 = val;
                },
                rowClick2(row) {
              	  this.$refs.multipleTable2.toggleRowSelection(row);
                },
                rowClass2(row){
      	          if(this.multipleSelection2.includes(row.row)){
      	            return { "background-color": "#ecf5ff" }
      	          }
                },
                //按钮表格选中
                handleSelectionChange2(val) {
              	  this.multipleSelection2 = val;
                },
                //编辑
                editorBtn(row) {
              	  if(this.jsid == ''){
              		  this.$message({
      		  		   	    showClose: true,
      			            message: "请先选择角色！",
      			            type: 'error'
      			        });
      	    	   	   return;
              	  }
              	  this.rowId = row.id;
              	  this.currentRow = row;
                },
                //返回
                /*returnBtn (row) {
              	  this.rowId = row.id;
              	  this.isSelect = false;
                },*/
                //每页多少条
                handleSizeChange(val) {
                	this.isSelected = false;
              	  var that = this;
              	that.pageSize = val;
              	  $$.authority.getAnxx({data:{size:that.pageSize,page:that.currentPage,jsid:that.jsid,gnid:gnid},success:function(data){
              		if (data.code == 0) {
              			that.btnData = data.data.rows;
                  		 that.currentPage = data.data.currentPage;
                  		 that.total = data.data.total;
                  		 that.$nextTick(() => {
          	        		 for(var i=0;i<that.btnData.length;i++){
          	          			if(that.btnData[i].acheckbox == '1'){
          	          				that.$refs.multipleTable2.toggleRowSelection(that.btnData[i]);
          	          			}
          	          		 }
          	        		that.isSelected = true;
                  		 })
                  		 that.count = that.count+1;
       				} else {
       				  that.$message({
                        showClose: true,
                        message:  data.message,
                        type: 'error'
                      });
       				}
               	  }});
                },
                //当前页
                handleCurrentChange(val) {
                	this.isSelected = false;
              	  var that = this;
                	that.currentPage = val;
					
					
					$$.authority.getAnxx({data:{size:that.pageSize,page:that.currentPage,jsid:that.jsid,gnid:gnid},success:function(data){
              		if (data.code == 0) {
              			that.btnData = data.data.rows;
                  		 that.currentPage = data.data.currentPage;
                  		 that.total = data.data.total;
                  		 that.$nextTick(() => {
          	        		 for(var i=0;i<that.btnData.length;i++){
          	          			if(that.btnData[i].acheckbox == '1'){
          	          				that.$refs.multipleTable2.toggleRowSelection(that.btnData[i]);
          	          			}
          	          		 }
          	        		that.isSelected = true;
                  		 })
                  		 that.count = that.count+1;
       				} else {
       				  that.$message({
                        showClose: true,
                        message:  data.message,
                        type: 'error'
                      });
       				}
               	  }});
				   
                },
                distinct(a, b) {
                	var arr = a.concat(b)
                    arr = arr.sort()
                    var result = [arr[0]]

                    for (var i=1, len=arr.length; i<len; i++) {
                        arr[i] !== arr[i-1] && result.push(arr[i])
                    }
                    return result
                },
                selectAll(selection) {
//                	if (this.isSelected) {
//                		console.log('selection=>',selection);
//                		console.log('this.selection=>',this.selection);
//                		var that = this;
//                    	var jsid = this.jsid;
//                    	var gnid = this.gnid;
//                    	var result = this.distinct(this.selection,selection);
//                    	console.log('result=>',result);
//                		for (var i = 0;i < result.length;i++) {
//                			Czqxglrunserver.savexzczandata(result[i].id,jsid,gnid,function(rdata){
//              	       		  if(rdata.status== 1){
//              	       			  console.log('111111');
//              	       		  } else {
//              	       			   that.$message({
//                                      showClose: true,
//                                      message:  rdata.message,
//                                      type: 'error'
//                                    });
//              	       		  }
//              	       	  })
//                		}
//                	}
                },
                selected(selection,row) {
                	this.selection  = selection;
                	if (this.isSelected) {
                		console.log('this.isSelected=>',this.isSelected);
                		var that = this;
                    	var jsid = this.jsid;
                    	var gnid = this.gnid;
                    	$$.authority.savexzczandata({data:{checkedvalue:row.id,jsid:jsid,gnid:gnid},success:function(rdata){
        	       		  if(rdata.code == 0){
        	       			that.$message({
        		  		   	    showClose: true,
        			            message: '保存成功！',
        			            type: 'success'
        			        });/**/
        	       			
//        	       			that.btnData = [];
//        	       			that.multipleSelection2 = [];
//        	       			that.dialogTableVisible = false;
//        	       			that.isSelect = false;
        	       		  } else {
        	       			that.$message({
                                showClose: true,
                                message:  rdata.message,
                                type: 'error'
                              });
        	       		  }
						}})
                	}
                },
                //弹框保存
//                keep() {
//              	 var that = this;
//              	 var anArr = this.multipleSelection2;
//              	 var jsid = this.jsid;
//         	  	 var gnid = this.gnid;
//         	  	 var checkedvalue = new Array();
//         	  	 for(var i=0;i<anArr.length;i++){
//         	  		 checkedvalue.push(anArr[i].id);
//         	  	 }
//      	       	  Czqxglrunserver.savexzczandata(JSON.stringify(checkedvalue),JSON.stringify(jsid),JSON.stringify(gnid),function(rdata){
//      	       		  console.log('rdata================',rdata);
//      	       		  if(rdata.code == 0){
//      	       			that.$message({
//      		  		   	    showClose: true,
//      			            message: '保存成功！',
//      			            type: 'success'
//      			        });
//      	       			Czqxglrunserver.getCzqxxx(that.name,that.sort,that.currtNode.id,function(data){
//      	       				if (data.code == 0) {
//      	       					that.TableDate = data.data.rows;
//      	       				} else {
//      	       				  that.$message({
//                                showClose: true,
//                                message:  data.message,
//                                type: 'error'
//                              });
//      	       				}
//      		          	});
//      	       			that.btnData = [];
//      	       			that.multipleSelection2 = [];
//      	       			that.dialogTableVisible = false;
//      	       			that.isSelect = false;
//      	       		  } else {
//      	       			 that.$message({
//                            showClose: true,
//                            message:  rdata.message,
//                            type: 'error'
//                          });
//      	       		  }
//      	       	  })
//                },
                //弹框返回
                cancel() {
                	var that = this;
                	$$.authority.getCzqxxx({data:{orderCol:that.name,orderType:that.sort,jsids:that.jsid},success:function(data){
      	        		if(data.code == 0){
      	        			that.TableDate = data.data;
	               		 }else{
	               			 that.$message({
                                showClose: true,
                                message:  data.message,
                                type: 'error'
                              });
	               		 }
      	        	}});
              	  this.dialogTableVisible = false;
              	  this.currentRow.isSelect = false;
              	  this.isSelected = false;
                },
                divBtn() {},
                btn(rtn) {
                	if(this.jsid == ''){
                		  this.$message({
        		  		   	    showClose: true,
        			            message: "请先选择角色！",
        			            type: 'error'
        			        });
        	    	   	   return;
                	  }
                	  this.rowId = rtn.id;
                	  this.currentRow = rtn;
              	  this.dialogTableVisible = true;
              	  var that = this;
              	  var jsid = this.jsid;
              	  var gnid = rtn.id;
              	  this.gnid = rtn.id;
              	  
				  
				  $$.authority.getAnxx({data:{size:that.pageSize,page:that.currentPage,jsid:that.jsid,gnid:gnid},success:function(data){
              		if (data.code == 0) {
              			that.btnData = data.data.rows;
                  		 that.currentPage = data.data.currentPage;
                  		 that.total = data.data.total;
                  		 that.$nextTick(() => {
          	        		 for(var i=0;i<that.btnData.length;i++){
          	          			if(that.btnData[i].acheckbox == '1'){
          	          				that.$refs.multipleTable2.toggleRowSelection(that.btnData[i]);
          	          			}
          	          		 }
          	        		that.isSelected = true;
                  		 })
                  		 that.count = that.count+1;
       				} else {
       				  that.$message({
                        showClose: true,
                        message:  data.message,
                        type: 'error'
                      });
       				}
               	  }}); 
                },
                totalKeep(){
                	if(this.jsid == ''){
                		  this.$message({
        			            message: "请先选择角色！",
        			            type: 'error'
        			        });
        	    	   	   return;
                	  }
                	var stark = [];
	              	    stark = stark.concat(this.TableDate);
	          
	              	    while(stark.length) {
	              	    	var temp = stark.shift();
	              	        if(temp.children) {
	              	            // 当前节点有子节点时，将子节点放到当前的栈的前面
	              	            stark = temp.children.concat(stark);
	              	        }
	              	        if (temp.acheckbox == true) {
	              	        	this.multipleSelection.push(temp.id);
	              	        }
	              	    }
              	  var that = this;
              	  var dataArr = this.multipleSelection1;
//              	  var gnArr = this.multipleSelection;
               	 	var jsid = this.jsid;
              	  	 var checkedvalueData = new Array();
              	  	 var checkedvaluegn = new Array();
              	  	 for(var i=0;i<dataArr.length;i++){
              	  		checkedvalueData.push(dataArr[i].id);
              	  	 }
//              	  	 for(var i=0;i<gnArr.length;i++){
//              	  		checkedvaluegn.push(gnArr[i].id);
//              	  	 }
              	  $$.authority.savegnids({data:{checkedvalue:that.multipleSelection,jsid:jsid},success:function(rdata){
              		  if(rdata.code == 0){
    	       			that.$message({
    		  		   	    showClose: true,
    			            message: '功能保存成功！',
    			            type: 'success'
    			        });
    	       		  } else {
    	       			that.$message({
    			            message: rdata.message,
    			            type: 'error'
    			        });
    	       		  }
              	  }});
              	$$.authority.savesjqxs({data:{checkedvalue:checkedvalueData,jsid:jsid},success:function(rdata){
              		  if(rdata.code == 0){
      	       			that.$message({
      		  		   	    showClose: true,
      			            message: '数据权限保存成功！',
      			            type: 'success'
      			        });
      	       		  } else {
      	       			that.$message({
    			            message: rdata.message,
    			            type: 'error'
    			        });
      	       		  }
              	  }});
                }
              }
	    }
	    return data;
    }
})
//var Power = function(resolve, reject) {
//  $.ajax({
//    url:'pages/vue/components/power/power.html',
//    type:"GET",
//    dataType:"html",
//    success:function(result){
//      var Obj = $("<code></code>").append($(result));//包装数据
//      // //(需要获取的对应块（如class='aa')
//      var $html = $("#power", Obj);  
//      // //获取对应块中的内容
//      var value = $html.html();
//      //获得内容可以用append插入对应的div中，也可以用html（value）直接添加
//      resolve({
//        template: value,
//        name: 'Power',
//        data() {
//          return {
//        	  tags:['标签一','标签'],
//        	jsid:'',
//        	gnid:'',
//        	data: [],
//            defaultProps: {
//            	value: 'id',
//                label: 'label',
//                children: 'children'
//            },
//            color: {
//              background: '#428bca',
//              color: '#ffffff'
//            },
//            number: 0,
//            TableDate:[
//            ],
//            lists: [],
//            multipleSelection: [],
//            multipleSelection1: [],
//            multipleSelection2: [],
//            text: '',
//            dialogTableVisible: false,
//            btnData: [],
//            currentPage: 1,
//            total:0,
//            pageSize:10,
//            currentRow: null,
//            count: 1,
//            isSelect: false,
//            rowId: 60,
//            currtNode: ''
//          }
//        },
//        directives: {
//            drag: {
//              bind(el, binding, vnode) {
//                const dialogHeaderEl = el.querySelector('.el-dialog__header')
//                const dragDom = el.querySelector('.el-dialog')
//                dialogHeaderEl.style.cssText += ';cursor:move;'
//                dragDom.style.cssText += ';top:0px;'
//            
//                // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
//                const getStyle = (function() {
//                  if (window.document.currentStyle) {
//                    return (dom, attr) => dom.currentStyle[attr]
//                  } else {
//                    return (dom, attr) => getComputedStyle(dom, false)[attr]
//                  }
//                })()
//            
//                dialogHeaderEl.onmousedown = (e) => {
//                  // 鼠标按下，计算当前元素距离可视区的距离
//                  const disX = e.clientX - dialogHeaderEl.offsetLeft
//                  const disY = e.clientY - dialogHeaderEl.offsetTop
//            
//                  const dragDomWidth = dragDom.offsetWidth
//                  const dragDomHeight = dragDom.offsetHeight
//            
//                  const screenWidth = document.body.clientWidth
//                  const screenHeight = document.body.clientHeight
//            
//                  const minDragDomLeft = dragDom.offsetLeft
//                  const maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth
//            
//                  const minDragDomTop = dragDom.offsetTop
//                  const maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomHeight
//            
//                  // 获取到的值带px 正则匹配替换
//                  var styL = getStyle(dragDom, 'left')
//                  var styT = getStyle(dragDom, 'top')
//            
//                  if (styL.includes('%')) {
//                    styL = +document.body.clientWidth * (+styL.replace(/\%/g, '') / 100)
//                    styT = +document.body.clientHeight * (+styT.replace(/\%/g, '') / 100)
//                  } else {
//                    styL = +styL.replace(/\px/g, '')
//                    styT = +styT.replace(/\px/g, '')
//                  }
//            
//                  document.onmousemove = function(e) {
//                    // 通过事件委托，计算移动的距离
//                    var left = e.clientX - disX
//                    var top = e.clientY - disY
//            
//                    // 边界处理
//                    if (-(left) > minDragDomLeft) {
//                      left = -minDragDomLeft
//                    } else if (left > maxDragDomLeft) {
//                      left = maxDragDomLeft
//                    }
//            
//                    if (-(top) > minDragDomTop) {
//                      top = -minDragDomTop
//                    } else if (top > maxDragDomTop) {
//                      top = maxDragDomTop
//                    }
//            
//                    // 移动当前元素
//                    dragDom.style.cssText += `;left:${left + styL}px;top:${top + styT}px;`
//            
//                    // emit onDrag event
//                    vnode.child.$emit('dragDialog')
//                  }
//            
//                  document.onmouseup = function(e) {
//                    document.onmousemove = null
//                    document.onmouseup = null
//                  }
//                }
//              }
//            }
//          },
//        computed: {
//	        height() {
//	          return this.$store.state.watchHeight
//	        },
//	        scrollBox() {
//	          return this.height - 80 - 50 -85 + 'px';
//	        },
//	        heightBox() {
//	          return this.height - 80 - 50 -85;
//	        }
//	      },
//	      mounted() {
//	        	var that = this;
//	        	Czqxglrunserver.getZzjgtree(function(data){
//	        		that.data = data;
//	        	});
//	        	Czqxglrunserver.getSjqxList("",function(data){
//	        		that.lists = data.tableData;
//	        	});
//	        	Czqxglrunserver.getCzqxxx("",function(data){
//	        		that.TableDate = data.rows;
//	        		console.log('TableDate=>',that.TableDate);
//	        	});
//	        },
//	        methods: {
//	    	  handleNodeClick(data) {
//	    		  this.currtNode = data;
//	    		  this.jsid = data.id;
//	    		  var that = this;
//	    		  Czqxglrunserver.getSjqxList(data.id,function(data){
//	          		that.lists = data.tableData;
//	          		console.log('that.lists=>',that.lists);
//	          		that.$nextTick(() => {
//	          			for(var i=0;i<that.lists.length;i++){
//		          			if(that.lists[i].acheckbox3 == '1'){
//		          				that.$refs.multipleTable1.toggleRowSelection(that.lists[i]);
//		          			}
//		          		}
//	          			
//                    })
//	          	  });
//	    		  Czqxglrunserver.getCzqxxx(data.id,function(data){
//		          		that.TableDate = data.rows;
//		          		console.log('that.TableDate=>',that.TableDate);
//		          		that.$nextTick(() => {
//		          			var stark = [];
//		              	    stark = stark.concat(that.TableDate);
//		          
//		              	    while(stark.length) {
//		              	    	var temp = stark.shift();
//		              	        if(temp.children) {
//		              	            // 当前节点有子节点时，将子节点放到当前的栈的前面
//		              	            stark = temp.children.concat(stark);
//		              	        }
//		              	        if (temp.acheckbox == '1') {
//		              	        	that.$refs.multipleTable.toggleRowSelection(temp);
//		              	        }
//		              	    }
////		          			 for(var i=0;i<that.TableDate.length;i++){
////		 	          			if(that.TableDate[i].acheckbox == '1'){
////		 	          				that.$refs.multipleTable.toggleRowSelection(that.TableDate[i]);
////		 	          			}
////		 	          		}
//	                    })
//		          	  });
//	          },
//	      
//          selectBtn(index) {
//            this.number = index;
//          },
//          headColor(row) {
//              if (row.rowIndex === 0) {
//                return 'background-color: #f5f7fa;'
//              }
//          },
//          rowClick(row) {
//        	  this.$refs.multipleTable.toggleRowSelection(row);
//        	 var a = row.name.split(",");
//        	 console.log('a===>',a);
//          },
//          rowClass(row){
//	          if(this.multipleSelection.includes(row.row)){
//	            return { "background-color": "#ecf5ff" }
//	          }
//          },
//          //树型表格选中
//          handleSelectionChange(val) {
//        	  this.multipleSelection = val;
//          },
//          rowClick1(row) {
//        	  this.$refs.multipleTable1.toggleRowSelection(row);
//          },
//          rowClass1(row){
//	          if(this.multipleSelection1.includes(row.row)){
//	            return { "background-color": "#ecf5ff" }
//	          }
//          },
//          //数据权限选中
//          handleSelectionChange1(val) {
//        	  this.multipleSelection1 = val;
//          },
//          rowClick2(row) {
//        	  this.$refs.multipleTable2.toggleRowSelection(row);
//          },
//          rowClass2(row){
//	          if(this.multipleSelection2.includes(row.row)){
//	            return { "background-color": "#ecf5ff" }
//	          }
//          },
//          //按钮表格选中
//          handleSelectionChange2(val) {
//        	  this.multipleSelection2 = val;
//          },
//          //编辑
//          editorBtn(row) {
//        	  if(this.jsid == ''){
//        		  this.$message({
//		  		   	    showClose: true,
//			            message: "请先选择角色！",
//			            type: 'error'
//			        });
//	    	   	   return;
//        	  }
//        	  this.rowId = row.id;
//        	  this.isSelect = true;
////        	  row.isSelect = true;
//        	  console.log('row=>',row);
//        	  this.currentRow = row;
//          },
//          //返回
//          returnBtn (row) {
//        	  this.rowId = row.id;
//        	  this.isSelect = false;
//          },
//          //每页多少条
//          handleSizeChange(val) {
//        	  var that = this;
//        	  Czqxglrunserver.getAnxx(that.pageSize,that.currentPage,jsid,gnid,function(data){
//         		 that.btnData = data.rows;
//         		 that.currentPage = data.currentPage;
//         		 that.total = data.total;
//         		 that.$nextTick(() => {
// 	        		 for(var i=0;i<that.btnData.length;i++){
// 	          			if(that.btnData[i].acheckbox == '1'){
// 	          				that.$refs.multipleTable2.toggleRowSelection(that.btnData[i]);
// 	          			}
// 	          		 }
//         		 })
//         		 that.count = that.count+1;
//         	  });
//          },
//          //当前页
//          handleCurrentChange(val) {
//        	  var that = this;s
//        	  Czqxglrunserver.getAnxx(that.pageSize,that.currentPage,jsid,gnid,function(data){
//         		 that.btnData = data.rows;
//         		 that.currentPage = data.currentPage;
//         		 that.total = data.total;
//         		 that.$nextTick(() => {
// 	        		 for(var i=0;i<that.btnData.length;i++){
// 	          			if(that.btnData[i].acheckbox == '1'){
// 	          				that.$refs.multipleTable2.toggleRowSelection(that.btnData[i]);
// 	          			}
// 	          		 }
//         		 })
//         		 that.count = that.count+1;
//         	  });
//          },
//          //弹框保存
//          keep() {
//        	  var that = this;
//        	 var anArr = this.multipleSelection2;
//        	 var jsid = this.jsid;
//       	  	 var gnid = this.gnid;
//       	  	 var checkedvalue = new Array();
//       	  	 for(var i=0;i<anArr.length;i++){
//       	  		 checkedvalue.push(anArr[i].id);
//       	  	 }
//	       	  Czqxglrunserver.savexzczandata(JSON.stringify(checkedvalue),JSON.stringify(jsid),JSON.stringify(gnid),function(rdata){
//	       		  if(rdata.state == 'success'){
//	       			that.$message({
//		  		   	    showClose: true,
//			            message: '保存成功！',
//			            type: 'success'
//			        });
//	       			Czqxglrunserver.getCzqxxx(that.currtNode.id,function(data){
//		          		that.TableDate = data.rows;
//		          	  });
//	       			that.btnData = [];
//	       			that.multipleSelection2 = [];
//	       			that.dialogTableVisible = false;
//	       			that.isSelect = false;
//	       		  }
//	       	  })
//	       	 
//	       	  
////        	 this.currentRow.isSelect = false; 
//          },
//          //弹框返回
//          cancel() {
//        	  this.dialogTableVisible = false;
//        	  this.currentRow.isSelect = false;
//        	  this.isSelect = false;
//          },
//          divBtn() {},
//          btn(rtn) {
//        	  this.dialogTableVisible = true;
//        	  var that = this;
//        	  var jsid = this.jsid;
//        	  var gnid = rtn.id;
//        	  this.gnid = rtn.id;
//        	  Czqxglrunserver.getAnxx(that.pageSize,that.currentPage,jsid,gnid,function(data){
//        		 that.btnData = data.rows;
//        		 that.currentPage = data.currentPage;
//        		 that.total = data.total;
//        		 that.$nextTick(() => {
//	        		 for(var i=0;i<that.btnData.length;i++){
//	          			if(that.btnData[i].acheckbox == '1'){
//	          				that.$refs.multipleTable2.toggleRowSelection(that.btnData[i]);
//	          			}
//	          		 }
//        		 })
//        		 that.count = that.count+1;
//        	  });
//          },
//          totalKeep(){
//        	  var that = this;
//        	  var dataArr = this.multipleSelection1;
//        	  var gnArr = this.multipleSelection;
//         	 	var jsid = this.jsid;
//        	  	 var checkedvalueData = new Array();
//        	  	 var checkedvaluegn = new Array();
//        	  	 for(var i=0;i<dataArr.length;i++){
//        	  		checkedvalueData.push(dataArr[i].id);
//        	  	 }
//        	  	 for(var i=0;i<gnArr.length;i++){
//        	  		checkedvaluegn.push(gnArr[i].id);
//        	  	 }
//        	  Czqxglrunserver.savegnids(JSON.stringify(checkedvaluegn),JSON.stringify(jsid),function(rdata){
//        		  if(rdata.state == 'success'){
//  	       			that.$message({
//  		  		   	    showClose: true,
//  			            message: '功能保存成功！',
//  			            type: 'success'
//  			        });
//  	       		  }
//        	  });
//        	  Czqxglrunserver.savesjqxs(JSON.stringify(checkedvalueData),JSON.stringify(jsid),function(rdata){
//        		  if(rdata.state == 'success'){
//    	       			that.$message({
//    		  		   	    showClose: true,
//    			            message: '数据权限保存成功！',
//    			            type: 'success'
//    			        });
//    	       		  }
//        	  });
//          }
//        }
//      })
//    }
//  });
//};
