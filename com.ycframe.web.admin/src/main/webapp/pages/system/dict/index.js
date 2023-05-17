document.write("<script language=javascript src='pages/system/dict/detail.js'></script>");
document.write("<script language=javascript src='pages/system/dict/itemDetail.js'></script>");
var dict = moduleinit({
	url:'/system/dict/index.html', 
	el:'#dict',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'dict',
            components: {
            	DictDetail: dictDetail,
            	DictItemDetail: dictItemDetail
            },
            computed: {
            },
            data() {
              return {
            	  selectedDict:{},
            	  dictQueryForm:{
            		  name:'',
            		  code:'',
            		  state:''
            	  },
            	  dictTable:[
					//{
						/*id:'a',
						rowNum:'1',
						name:'name',
						code:'code',
						memo:'memo',
						createTime:'createTime',
						stateLabel:'正常',
						state:'1'*/
					 //}
                  ],
                  dictCurrentPage:1,
                  dictPageSize:10,
                  dictTotal:1,
                  dictDetailDialogTitle:'',
                  dictDetailDialogShow:false,
                  dictLoading:false,
            	  dictItemQueryForm:{
            		  name:'',
            		  code:'',
            		  state:''
            	  },
            	  dictItemTable:[
	                 //{
	                	/*id:'a',
	                	rowNum:'1',
	                	name:'name',
	                	code:'code',
	                	sort:3,
	                	stateLabel:'正常',
						state:'0',
	                	defaultValLabel:'是',
	                	defaultVal:'0',
                		styleLabel:'文本',
	                	style:'0',
	                	memo:'memo',
	                	dictName:'dictName',
	                	dictCode:'dictCode'*/
	                	
	                 //}
                  ],
                  dictItemCurrentPage:1,
                  dictItemPageSize:10,
                  dictItemTotal:1,
                  dictItemDetailDialogTitle:'',
                  dictItemDetailDialogShow:false,
                  dictItemLoading:false,
            	  stateOptions:[
            	      {
            	    	  val:0,
            	    	  name:'正常'
            	      },
            	      {
            	    	  val:1,
            	    	  name:'禁用'
            	      }
                  ],
                  
                  
              }
            },
            watch: {
            	
            },
            mounted() {
            	this.dictCurrentPage = 1;
            	this.dictQuery();
            },
            methods: {
            	getType(index){
            		switch(index){
	               		case '1':
	            			return "";
	            			break;
	            		case '2':
	            			return "primary";
	            			break;
	            		case '3':
	            			return "success";
	            			break;
	            		case '4':
	            			return "info";
	            			break;
	            		case '5':
	            			return "warning";
	            			break;
	            		case '6':
	            			return "danger";
	            			break;
	            		default:
	            			return "";
            		}
            	},
            	getTypeText(index){
            		switch(index){
	               		case '1':
	            			return "默认";
	            			break;
	            		case '2':
	            			return "主要";
	            			break;
	            		case '3':
	            			return "成功";
	            			break;
	            		case '4':
	            			return "信息";
	            			break;
	            		case '5':
	            			return "警告";
	            			break;
	            		case '6':
	            			return "危险";
	            			break;
	            		default:
	            			return "默认";
            		}
            	},
            	dictQuery(){
            		var that = this;
            		that.selectedDict = {};
            		this.dictLoading = true;
            		$$.dict.dictQuery({
	               		 data:{
	               			 name:that.dictQueryForm.name,
	               			 code:that.dictQueryForm.code,
	               			 state:that.dictQueryForm.state,
	               			 currentPage:that.dictCurrentPage,
	               			 pageSize:that.dictPageSize
	               		 },
	               		 success:function(rtn){
                          	 if (rtn.code == 0) {
                          		 that.dictTotal = rtn.data.total;
                          		 that.dictTable = rtn.data.dictTable;
                          		 that.dictLoading = false;
    	                	 } else {
    	                		 that.dictLoading = false;
    	                		 that.$message({
    	                			 showClose: true,
    	                			 message: rtn.message,
    	                			 type: 'error'
                 		         });
    	                	 }
                         }
	           		 }); 
            	},
            	dictAdd(){
            		this.dictDetailDialogTitle = '数据字典新增';
            		this.dictDetailDialogShow = true;
            	},
            	dictEdit(row){
            		this.dictDetailDialogTitle = '数据字典编辑';
            		this.dictDetailDialogShow = true;
            		this.$nextTick(() => {
                 		 this.$refs.dictDetail.collectDictDetail(row);
             	    })
            	},
            	dictDel(row){
            		var that = this;
            		this.$confirm('删除字典可能会对现有系统内业务数据造成影响，请核对确认是否删除？', '提示', {
            		  closeOnClickModal: false,
        	          confirmButtonText: '确定',
        	          cancelButtonText: '取消',
        	          type: 'warning'
        	        }).then(() => {
        	        	that.dictLoading = true;
                		$$.dict.dictDel({
    	               		 data:{
    	               			 id:row.id
    	               		 },
    	               		 success:function(rtn){
                              	 if (rtn.code == 0) {
                              		 that.dictQuery();
        	                	 } else {
        	                		 that.dictLoading = false;
        	                		 that.$message({
        	                			 showClose: true,
        	                			 message: rtn.message,
        	                			 type: 'error'
                     		         });
        	                	 }
                             }
    	           		 }); 
        	        });
            	},
            	dictPageSizeChange(val){
            		this.dictCurrentPage = 1;
            		this.dictPageSize = val;
            		this.dictQuery();
            	},
            	dictCurrentPageChange(val){
            		this.dictCurrentPage = val;
            		this.dictQuery();
            	},
            	closeDictDialog(){
            		this.dictDetailDialogShow = false;
            	},
            	saveDict(rtn){
        			this.dictDetailDialogShow = false;
        			this.$message({
            	        message: '保存成功！',
            	        type: 'success'
        	        });
        			this.dictQuery();
            	},
            	dictRowClick(row, column, event){
            		this.selectedDict = row;
            		this.dictItemQuery();
            	},
            	dictItemQuery(){
            		var that = this;
            		this.dictItemLoading = true;
            		$$.dict.dictItemQuery({
	               		 data:{
	               			 name:that.dictItemQueryForm.name,
	               			 code:that.dictItemQueryForm.code,
	               			 state:that.dictItemQueryForm.state,
	               			 currentPage:that.dictItemCurrentPage,
	               			 pageSize:that.dictItemPageSize,
	               			 dictId:that.selectedDict.id
	               		 },
	               		 success:function(rtn){
                          	 if (rtn.code == 0) {
                          		 that.dictItemTotal = rtn.data.total;
                          		 that.dictItemTable = rtn.data.dictItemTable;
                          		 that.dictItemLoading = false;
    	                	 } else {
    	                		 that.dictItemLoading = false;
    	                		 that.$message({
    	                			 showClose: true,
    	                			 message: rtn.message,
    	                			 type: 'error'
                 		         });
    	                	 }
                         }
	           		 }); 
            	},
            	dictItemAdd(){
            		this.dictItemDetailDialogTitle = '数据字典项新增';
            		this.dictItemDetailDialogShow = true;
            		this.$nextTick(() => {
                		 this.$refs.dictItemDetail.collectDictNameAndCode(this.selectedDict);
            	    })
            	},
            	dictItemEdit(row){
            		this.dictItemDetailDialogTitle = '数据字典项编辑';
            		this.dictItemDetailDialogShow = true;
            		this.$nextTick(() => {
                 		 this.$refs.dictItemDetail.collectDictItemDetail(this.selectedDict,row);
             	    })
            	},
            	dictItemDel(row){
            		var that = this;
            		this.$confirm('是否删除？', '提示', {
            		  closeOnClickModal: false,
        	          confirmButtonText: '确定',
        	          cancelButtonText: '取消',
        	          type: 'warning'
        	        }).then(() => {
        	        	that.dictItemLoading = true;
                		$$.dict.dictItemDel({
    	               		 data:{
    	               			 id:row.id
    	               		 },
    	               		 success:function(rtn){
                              	 if (rtn.code == 0) {
                              		 that.dictItemQuery();
        	                	 } else {
        	                		 that.dictLoading = false;
        	                		 that.$message({
        	                			 showClose: true,
        	                			 message: rtn.message,
        	                			 type: 'error'
                     		         });
        	                	 }
                             }
    	           		 }); 
        	        });
            	},
            	dictItemPageSizeChange(val){
            		this.dictItemCurrentPage = 1;
            		this.dictItemPageSize = val;
            		this.dictItemQuery();
            	},
            	dictItemCurrentPageChange(val){
            		this.dictItemCurrentPage = val;
            		this.dictItemQuery();
            	},
            	closeDictItemDialog(){
            		this.dictItemDetailDialogShow = false;
            	},
            	saveDictItem(isSuccess){
        			this.dictItemDetailDialogShow = false;
        			this.$message({
            	        message: '保存成功！',
            	        type: 'success'
        	        });
        			this.dictItemQuery();
            	},
            }
	    }
	    return data;
    }
})