var vueOrgTree = moduleinit({
	url:'/components/vueOrgTree/vueOrgTree.html', 
	el:'#vueOrgTree',
	dorender:function(content){
	    var data = {
			template: content.template,
	        name: 'vueOrgTree',
	        components: {
	            OrgTreeNode: {
	              render:render,
	              functional: true
	            }
	        },
	        props: {
	            data: {
	              type: Object,
	              required: true
	            },
	            props: {
	              type: Object,
	              default: () => ({
	                label: 'label',
	                expand: 'expand',
	                children: 'children'
	              })
	            },
	            horizontal: Boolean,
	            selectedKey: String,
	            collapsable: Boolean,
	            renderContent: Function,
	            labelWidth: [String, Number],
	            labelClassName: [Function, String],
	            selectedClassName: [Function, String]
	        },
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
			    	