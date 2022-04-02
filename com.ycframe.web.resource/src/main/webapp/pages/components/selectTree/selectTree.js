var SelectTree = function(resolve, reject) {
  $.ajax({
    url:'pages/components/selectTree/selectTree.html',
    type:"GET",
    dataType:"html",
    success:function(result){
      var Obj = $("<code></code>").append($(result));//包装数据
      var $html = $("#select", Obj);
      var value = $html.html();
      resolve({
        template: value,
        name: 'SelectTree',
        props:{
            /* 配置项 */
        	disabled: {
        		type:Boolean,
        		default:()=>{ return false }
        	},
            props:{
              type: Object,
              default:()=>{
                return {
                  value:'id',             // ID字段名
                  label: 'title',         // 显示名称
                  children: 'children'    // 子级字段名
                }
              }
            },
            /* 选项列表数据(树形结构的对象数组) */
            options:{
              type: Array,       
              default: ()=>{ return [] }
            },
            /* 初始值 */
            value:{
              
            },
            /* 可清空选项 */
            clearable:{
              type:Boolean,
              default:()=>{ return true }
            },
            /* 自动收起 */
            accordion:{
              type:Boolean,
              default:()=>{ return false }
            },
            placeholder: {
            	type: String,
            	default:()=>{return '请选择'}
            }
          },
          data() {
            return {
              valueId:'',    // 初始值
              valueTitle:''
            }
          },
          mounted(){
        	  if (this.value) {
        		  this.valueTitle = this.queryTree(this.options, this.value);
        	  }
          },
          methods: {
            // 切换选项
            handleNodeClick(node){
              this.valueTitle = node[this.props.label]
              this.valueId = node[this.props.value]
              this.$emit('getvalue',this.valueId,this.valueTitle)
              this.clearSelected();
              this.$refs.select.blur();
            },
            // 清除选中
            clearHandle(){
              this.valueTitle = ''
              this.valueId = null
              this.clearSelected();
              this.$emit('getvalue',null,null)
            },
            /* 清空选中样式 */
            clearSelected(){
              var allNode = document.querySelectorAll('#tree-option .el-tree-node')
              allNode.forEach((element)=>element.classList.remove('is-current'))
            },
            queryTree(tree, id) {
          	  var stark = [];
        	    stark = stark.concat(tree);
    
        	    while(stark.length) {
        	    	var temp = stark.shift();
        	        if(temp.children) {
        	            // 当前节点有子节点时，将子节点放到当前的栈的前面
        	            stark = temp.children.concat(stark);
        	        }
        	        if (temp[this.props.value] == id) {
        	        	return temp[this.props.label];
        	        }
        	    }
            },
          },
          watch: {
            value(val){
            	this.valueTitle = this.queryTree(this.options, this.value);
            }
          }
      })
    }
  });
};
