var dynamicTable = moduleinit({
	url:'/components/dynamicTable/dynamictable.html', 
	el:'#dynamicTable',
	dorender:function(content){
	    var data = {
			template: content.template,
	        name: 'dynamicTable',
	        props: {
	        	tableData: {
	        		type: Array,
	        		default: function() {
	        			return [];
	        		}
	        	},
	        	selectList: {
	        		type: Array,
		        	default: function() {
	        			return [];
	        		}
	        	},
	        	show: {
	        		type: Boolean,
	        		default: function() {
	        			return false
	        		}
	        	}
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