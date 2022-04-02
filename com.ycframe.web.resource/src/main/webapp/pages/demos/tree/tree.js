var Tree = moduleinit({
	url:'/demos/tree/tree.html',
	el:'#tree',
    dorender:function(content){
	    var data = {
    		template: content.template,
            name: 'Tree',
            data() {
            	var id = 1000;
                return {
                	scrollDiv: '',
                    scrollHeight: '',
                    isShow6: true,
                    isShow: true,
                    isShow1: true,
                    isShow2: true,
                    isShow3: true,
                    isShow4: true,
                    isShow5: true,
                    isShow7: true,
                    isShow8: true,
                    isShow9: true,
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
                    data1: [{
                        id: 1,
                        label: '一级 1',
                        children: [{
                          id: 4,
                          label: '二级 1-1',
                          children: [{
                            id: 9,
                            label: '三级 1-1-1'
                          }, {
                            id: 10,
                            label: '三级 1-1-2'
                          }]
                        }]
                      }, {
                        id: 2,
                        label: '一级 2',
                        children: [{
                          id: 5,
                          label: '二级 2-1'
                        }, {
                          id: 6,
                          label: '二级 2-2'
                        }]
                      }, {
                        id: 3,
                        label: '一级 3',
                        children: [{
                          id: 7,
                          label: '二级 3-1'
                        }, {
                          id: 8,
                          label: '二级 3-2'
                        }]
                      }],
                      data2: [{
                          id: 1,
                          label: '一级 2',
                          children: [{
                            id: 3,
                            label: '二级 2-1',
                            children: [{
                              id: 4,
                              label: '三级 3-1-1'
                            }, {
                              id: 5,
                              label: '三级 3-1-2',
                              disabled: true
                            }]
                          }, {
                            id: 2,
                            label: '二级 2-2',
                            disabled: true,
                            children: [{
                              id: 6,
                              label: '三级 3-2-1'
                            }, {
                              id: 7,
                              label: '三级 3-2-2',
                              disabled: true
                            }]
                          }]
                        }],
                    filterText: '',
                    defaultProps: {
                      children: 'children',
                      label: 'label'
                    },
                    props1: {
                      label: 'name',
                      children: 'zones',
                      isLeaf: 'leaf'
                    },
                    props2: {
                        label: 'name',
                        children: 'zones'
                    },
                    count: 1,
                    attributes: [],
                    props: [],
                    events: [],
                    methods: [],
                    slot: [],
                    res: {
                      "attributes": [
                        {
                          "parameter": "data",
                          "explain": "展示数据",
                          "type": "array",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "empty-text",
                          "explain": "内容为空的时候展示的文本",
                          "type": "string",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "node-key",
                          "explain": "每个树节点用来作为唯一标识的属性，整棵树应该是唯一的",
                          "type": "string",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "props",
                          "explain": "配置选项，具体看下表",
                          "type": "object",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "render-after-expand",
                          "explain": "是否在第一次展开某个树节点后才渲染其子节点",
                          "type": "boolean",
                          "optional": "—",
                          "default":"true"
                        },
                        {
                          "parameter": "load",
                          "explain": "加载子树数据的方法，仅当 lazy 属性为true 时生效",
                          "type": "function(node, resolve)",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "render-content",
                          "explain": "树节点的内容区的渲染 Function",
                          "type": "Function(h, { node, data, store }",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "highlight-current",
                          "explain": "是否高亮当前选中节点，默认值是 false。",
                          "type": "boolean",
                          "optional": "—",
                          "default":"false"
                        },
                        {
                          "parameter": "default-expand-all",
                          "explain": "是否默认展开所有节点",
                          "type": "boolean",
                          "optional": "—",
                          "default":"false"
                        },
                        {
                          "parameter": "expand-on-click-node",
                          "explain": "是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点",
                          "type": "boolean",
                          "optional": "—",
                          "default":"true"
                        },
                        {
                          "parameter": "check-on-click-node",
                          "explain": "是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。",
                          "type": "boolean",
                          "optional": "—",
                          "default":"true"
                        },
                        {
                          "parameter": "auto-expand-parent",
                          "explain": "展开子节点的时候是否自动展开父节点",
                          "type": "boolean",
                          "optional": "—",
                          "default":"true"
                        },
                        {
                          "parameter": "default-expanded-keys",
                          "explain": "默认展开的节点的 key 的数组",
                          "type": "array",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "show-checkbox",
                          "explain": "节点是否可被选择",
                          "type": "boolean",
                          "optional": "—",
                          "default":"false"
                        },
                        {
                          "parameter": "check-strictly",
                          "explain": "在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false",
                          "type": "boolean",
                          "optional": "—",
                          "default":"true"
                        },
                        {
                          "parameter": "default-checked-keys",
                          "explain": "默认勾选的节点的 key 的数组",
                          "type": "array",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "current-node-key",
                          "explain": "当前选中的节点",
                          "type": "string, number",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "filter-node-method",
                          "explain": "对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏",
                          "type": "Function(value, data, node)",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "accordion",
                          "explain": "是否每次只打开一个同级树节点展开",
                          "type": "boolean",
                          "optional": "—",
                          "default":"false"
                        },
                        {
                          "parameter": "indent",
                          "explain": "相邻级节点间的水平缩进，单位为像素",
                          "type": "number",
                          "optional": "—",
                          "default":"16"
                        },
                        {
                          "parameter": "icon-class",
                          "explain": "自定义树节点的图标",
                          "type": "string",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "lazy",
                          "explain": "是否懒加载子节点，需与 load 方法结合使用",
                          "type": "boolean",
                          "optional": "—",
                          "default":"false"
                        },
                        {
                          "parameter": "draggable",
                          "explain": "是否开启拖拽节点功能",
                          "type": "boolean",
                          "optional": "—",
                          "default":"false"
                        },
                        {
                          "parameter": "allow-drag",
                          "explain": "判断节点能否被拖拽",
                          "type": "Function(node)",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "allow-drop",
                          "explain": "拖拽时判定目标节点能否被放置。type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后",
                          "type": "Function(draggingNode, dropNode, type)",
                          "optional": "—",
                          "default":"—"
                        }
                      ],
                      "props": [
                        {
                          "parameter": "label",
                          "explain": "指定节点标签为节点对象的某个属性值",
                          "type": "string, function(data, node)",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "children",
                          "explain": "指定子树为节点对象的某个属性值",
                          "type": "string",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "disabled",
                          "explain": "指定节点选择框是否禁用为节点对象的某个属性值",
                          "type": "boolean, function(data, node)",
                          "optional": "—",
                          "default":"—"
                        },
                        {
                          "parameter": "isLeaf",
                          "explain": "指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效",
                          "type": "boolean, function(data, node)",
                          "optional": "—",
                          "default":"—"
                        }
                      ],
                      "methods": [
                        {
                          "name": "filter",
                          "explain": "对树节点进行筛选操作",
                          "parameter": "接收一个任意类型的参数，该参数会在 filter-node-method 中作为第一个参数"
                        },
                        {
                          "name": "updateKeyChildren",
                          "explain": "通过 keys 设置节点子元素，使用此方法必须设置 node-key 属性",
                          "parameter": "(key, data) 接收两个参数，1. 节点 key 2. 节点数据的数组"
                        },
                        {
                          "name": "getCheckedNodes",
                          "explain": "若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点所组成的数组",
                          "parameter": "(leafOnly, includeHalfChecked) 接收两个 boolean 类型的参数，1. 是否只是叶子节点，默认值为 false 2. 是否包含半选节点，默认值为 false"
                        },
                        {
                          "name": "setCheckedNodes",
                          "explain": "设置目前勾选的节点，使用此方法必须设置 node-key 属性",
                          "parameter": "(nodes) 接收勾选节点数据的数组"
                        },
                        {
                          "name": "getCheckedKeys",
                          "explain": "若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点的 key 所组成的数组",
                          "parameter": "(leafOnly) 接收一个 boolean 类型的参数，若为 true 则仅返回被选中的叶子节点的 keys，默认值为 false"
                        },
                        {
                          "name": "setCheckedKeys",
                          "explain": "通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性",
                          "parameter": "(keys, leafOnly) 接收两个参数，1. 勾选节点的 key 的数组 2. boolean 类型的参数，若为 true 则仅设置叶子节点的选中状态，默认值为 false"
                        },
                        {
                          "name": "setChecked",
                          "explain": "通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性",
                          "parameter": "(key/data, checked, deep) 接收三个参数，1. 勾选节点的 key 或者 data 2. boolean 类型，节点是否选中 3. boolean 类型，是否设置子节点 ，默认为 false"
                        },
                        {
                          "name": "getHalfCheckedNodes",
                          "explain": "若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点所组成的数组",
                          "parameter": "—"
                        },
                        {
                          "name": "getHalfCheckedKeys",
                          "explain": "若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点的 key 所组成的数组",
                          "parameter": "—"
                        },
                        {
                          "name": "getCurrentKey",
                          "explain": "获取当前被选中节点的 key，使用此方法必须设置 node-key 属性，若没有节点被选中则返回 null",
                          "parameter": "—"
                        },
                        {
                          "name": "getCurrentNode",
                          "explain": "获取当前被选中节点的 data，若没有节点被选中则返回 null",
                          "parameter": "—"
                        },
                        {
                          "name": "setCurrentKey",
                          "explain": "通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性",
                          "parameter": "(key) 待被选节点的 key，若为 null 则取消当前高亮的节点"
                        },
                        {
                          "name": "setCurrentNode",
                          "explain": "通过 node 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性",
                          "parameter": "(node) 待被选节点的 node"
                        },
                        {
                          "name": "getNode",
                          "explain": "根据 data 或者 key 拿到 Tree 组件中的 node",
                          "parameter": "(data) 要获得 node 的 key 或者 data"
                        },
                        {
                          "name": "remove",
                          "explain": "删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性",
                          "parameter": "(data) 要删除的节点的 data 或者 node"
                        },
                        {
                          "name": "append",
                          "explain": "为 Tree 中的一个节点追加一个子节点",
                          "parameter": "(data, parentNode) 接收两个参数，1. 要追加的子节点的 data 2. 子节点的 parent 的 data、key 或者 node"
                        },
                        {
                          "name": "insertBefore",
                          "explain": "	为 Tree 的一个节点的前面增加一个节点",
                          "parameter": "(data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的后一个节点的 data、key 或者 node"
                        },
                        {
                          "name": "insertAfter",
                          "explain": "为 Tree 的一个节点的后面增加一个节点",
                          "parameter": "(data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的前一个节点的 data、key 或者 node"
                        }
                      ],
                      "events": [
                        {
                          "name": "node-click",
                          "explain": "节点被点击时的回调",
                          "parameter": "共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。"
                        },
                        {
                          "name": "node-contextmenu",
                          "explain": "当某一节点被鼠标右键点击时会触发该事件",
                          "parameter": "共四个参数，依次为：event、传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。"
                        },
                        {
                          "name": "check-change",
                          "explain": "节点选中状态发生变化时的回调",
                          "parameter": "共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点"
                        },
                        {
                          "name": "check",
                          "explain": "当复选框被点击的时候触发",
                          "parameter": "共两个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性"
                        },
                        {
                          "name": "current-change",
                          "explain": "当前选中节点变化时触发的事件",
                          "parameter": "共两个参数，依次为：当前节点的数据，当前节点的 Node 对象"
                        },
                        {
                          "name": "node-expand",
                          "explain": "节点被展开时触发的事件",
                          "parameter": "共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身"
                        },
                        {
                          "name": "node-collapse",
                          "explain": "节点被关闭时触发的事件",
                          "parameter": "共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身"
                        },
                        {
                          "name": "node-drag-start",
                          "explain": "节点开始拖拽时触发的事件",
                          "parameter": "共两个参数，依次为：被拖拽节点对应的 Node、event"
                        },
                        {
                          "name": "node-drag-enter",
                          "explain": "拖拽进入其他节点时触发的事件",
                          "parameter": "共三个参数，依次为：被拖拽节点对应的 Node、所进入节点对应的 Node、event"
                        },
                        {
                          "name": "node-drag-leave",
                          "explain": "拖拽离开某个节点时触发的事件",
                          "parameter": "共三个参数，依次为：被拖拽节点对应的 Node、所离开节点对应的 Node、event"
                        },
                        {
                          "name": "node-drag-over",
                          "explain": "在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）",
                          "parameter": "共三个参数，依次为：被拖拽节点对应的 Node、当前进入节点对应的 Node、event"
                        },
                        {
                          "name": "node-drag-end",
                          "explain": "拖拽结束时（可能未成功）触发的事件",
                          "parameter": "共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点（可能为空）、被拖拽节点的放置位置（before、after、inner）、event"
                        },
                        {
                          "name": "node-drop",
                          "explain": "拖拽成功完成时触发的事件",
                          "parameter": "共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点、被拖拽节点的放置位置（before、after、inner）、event"
                        }
                      ],
                      "slot": [
                        {
                          "name": "—",
                          "explain": "自定义树节点的内容，参数为 { node, data }"
                        }
                      ],
                    }
                }
            },
            watch: {
            	'$route'(to,from){
            		if (to.path == this.$route.path) {
            			this.scrollDiv.scrollTop = this.scrollHeight;
            		} 
            	},
            	filterText(val) {
                    this.$refs.tree2.filter(val);
                }
            },
            mounted() {
            	this.scrollDiv = this.$refs.trees;
                this.attributes = this.res.attributes;
                this.events = this.res.events;
                this.props = this.res.props;
                this.methods = this.res.methods;
                this.slot = this.res.slot;
            },
            methods: {
            	scroll() {
                    this.scrollHeight = this.scrollDiv.scrollTop;
                  },
                  filterNode(value, data) {
                    if (!value) return true;
                    return data.label.indexOf(value) !== -1;
                  },
                  handleNodeClick(data) {
                    console.log(data);
                  },
                  clickShow6: function() {
                    this.isShow6 = !this.isShow6;
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
                  clickShow4: function() {
                    this.isShow4 = !this.isShow4;
                  },
                  clickShow5: function() {
                    this.isShow5 = !this.isShow5;
                  },
                  clickShow7: function() {
                      this.isShow7 = !this.isShow7;
                  },
                  clickShow8: function() {
                      this.isShow8 = !this.isShow8;
                  },
                  clickShow9: function() {
                      this.isShow9 = !this.isShow9;
                  },
                  handleCheckChange(data, checked, indeterminate) {
                      console.log(data, checked, indeterminate);
                  },
                  loadNode(node, resolve) {
                  if (node.level === 0) {
                    return resolve([{ name: 'region1' }, { name: 'region2' }]);
                  }
                  if (node.level > 3) return resolve([]);

                  var hasChild;
                  if (node.data.name === 'region1') {
                    hasChild = true;
                  } else if (node.data.name === 'region2') {
                    hasChild = false;
                  } else {
                    hasChild = Math.random() > 0.5;
                  }

                  setTimeout(() => {
                    var data;
                    if (hasChild) {
                      data = [{
                        name: 'zone' + this.count++
                      }, {
                        name: 'zone' + this.count++
                      }];
                    } else {
                      data = [];
                    }
                    console.log('data=>',data);
                    resolve(data);
                  }, 500);
                },
                loadNode1(node, resolve) {
                    if (node.level === 0) {
                      return resolve([{ name: 'region' }]);
                    }
                    if (node.level > 1) return resolve([]);

                    setTimeout(() => {
                      const data = [{
                        name: 'leaf',
                        leaf: true
                      }, {
                        name: 'zone'
                      }];

                      resolve(data);
                    }, 500);
                },
                getCheckedNodes() {
                    console.log(this.$refs.tree.getCheckedNodes());
                  },
                  getCheckedKeys() {
                    console.log(this.$refs.tree.getCheckedKeys());
                  },
                  setCheckedNodes() {
                    this.$refs.tree.setCheckedNodes([{
                      id: 5,
                      label: '二级 2-1'
                    }, {
                      id: 9,
                      label: '三级 1-1-1'
                    }]);
                  },
                  setCheckedKeys() {
                    this.$refs.tree.setCheckedKeys([3]);
                  },
                  resetChecked() {
                    this.$refs.tree.setCheckedKeys([]);
                 },
                 handleDragStart(node, ev) {
                     console.log('drag start', node);
                   },
                   handleDragEnter(draggingNode, dropNode, ev) {
                     console.log('tree drag enter: ', dropNode.label);
                   },
                   handleDragLeave(draggingNode, dropNode, ev) {
                     console.log('tree drag leave: ', dropNode.label);
                   },
                   handleDragOver(draggingNode, dropNode, ev) {
                     console.log('tree drag over: ', dropNode.label);
                   },
                   handleDragEnd(draggingNode, dropNode, dropType, ev) {
                     console.log('tree drag end: ', dropNode && dropNode.label, dropType);
                   },
                   handleDrop(draggingNode, dropNode, dropType, ev) {
                     console.log('tree drop: ', dropNode.label, dropType);
                  },
                  allowDrop(draggingNode, dropNode, type) {
                     if (dropNode.data.label === '二级 3-1') {
                       return type !== 'inner';
                     } else {
                       return true;
                     }
                 },
                 allowDrag(draggingNode) {
                     return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
                 },
                 append(data) {
                     var newChild = { id: id++, label: 'testtest', children: [] };
                     if (!data.children) {
                       this.$set(data, 'children', []);
                     }
                     data.children.push(newChild);
                   },

                   remove(node, data) {
                	   var parent = node.parent;
                	   var children = parent.data.children || parent.data;
                	   var index = children.findIndex(d => d.id === data.id);
                     children.splice(index, 1);
                   },

                   renderContent(h, { node, data, store }) {
                     /*return (
                       <span class="custom-tree-node">
                         <span>{node.label}</span>
                         <span>
                           <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
                           <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
                         </span>
                       </span>);*/
                   }
            }	
	    }
	    return data;
    }
})


/*var Tree = function(resolve, reject) {
  $.ajax({
    url:'pages/components/tree/tree.html',
    type:"GET",
    dataType:"html",
    success:function(result){
      var Obj = $("<code></code>").append($(result));//包装数据
      // //(需要获取的对应块（如class='aa')
      var $html = $("#tree", Obj);  
      // console.log($html.html());
      // //获取对应块中的内容
      var value = $html.html();
      // Array.prototype.removeByValue = function(val) {
      //   //对数组原型添加删除指定项的方法
      //   for(var i=0; i<this.length; i++) {
      //       if(this[i] == val) {
      //           this.splice(i, 1);
      //           break;
      //       }
      //   }
      // };
      resolve({
        template: value,
        name: 'Tree',
        data() {
          return {
        	scrollDiv: '',
            scrollHeight: '',
            isShow6: true,
            isShow: true,
            isShow1: true,
            isShow2: true,
            isShow3: true,
            isShow4: true,
            isShow5: true,
            isShow7: true,
            isShow8: true,
            isShow9: true,
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
            data1: [{
                id: 1,
                label: '一级 1',
                children: [{
                  id: 4,
                  label: '二级 1-1',
                  children: [{
                    id: 9,
                    label: '三级 1-1-1'
                  }, {
                    id: 10,
                    label: '三级 1-1-2'
                  }]
                }]
              }, {
                id: 2,
                label: '一级 2',
                children: [{
                  id: 5,
                  label: '二级 2-1'
                }, {
                  id: 6,
                  label: '二级 2-2'
                }]
              }, {
                id: 3,
                label: '一级 3',
                children: [{
                  id: 7,
                  label: '二级 3-1'
                }, {
                  id: 8,
                  label: '二级 3-2'
                }]
              }],
              data2: [{
                  id: 1,
                  label: '一级 2',
                  children: [{
                    id: 3,
                    label: '二级 2-1',
                    children: [{
                      id: 4,
                      label: '三级 3-1-1'
                    }, {
                      id: 5,
                      label: '三级 3-1-2',
                      disabled: true
                    }]
                  }, {
                    id: 2,
                    label: '二级 2-2',
                    disabled: true,
                    children: [{
                      id: 6,
                      label: '三级 3-2-1'
                    }, {
                      id: 7,
                      label: '三级 3-2-2',
                      disabled: true
                    }]
                  }]
                }],
            filterText: '',
            defaultProps: {
              children: 'children',
              label: 'label'
            },
            props1: {
              label: 'name',
              children: 'zones',
              isLeaf: 'leaf'
            },
            count: 1,
            attributes: [],
            props: [],
            events: [],
            methods: [],
            slot: [],
            res: {
              "attributes": [
                {
                  "parameter": "data",
                  "explain": "展示数据",
                  "type": "array",
                  "optional": "—",
                  "default":"—"
                },
                {
                  "parameter": "empty-text",
                  "explain": "内容为空的时候展示的文本",
                  "type": "string",
                  "optional": "—",
                  "default":"—"
                },
                {
                  "parameter": "node-key",
                  "explain": "每个树节点用来作为唯一标识的属性，整棵树应该是唯一的",
                  "type": "string",
                  "optional": "—",
                  "default":"—"
                },
                {
                  "parameter": "props",
                  "explain": "配置选项，具体看下表",
                  "type": "object",
                  "optional": "—",
                  "default":"—"
                },
                {
                  "parameter": "render-after-expand",
                  "explain": "是否在第一次展开某个树节点后才渲染其子节点",
                  "type": "boolean",
                  "optional": "—",
                  "default":"true"
                },
                {
                  "parameter": "load",
                  "explain": "加载子树数据的方法，仅当 lazy 属性为true 时生效",
                  "type": "function(node, resolve)",
                  "optional": "—",
                  "default":"—"
                },
                {
                  "parameter": "render-content",
                  "explain": "树节点的内容区的渲染 Function",
                  "type": "Function(h, { node, data, store }",
                  "optional": "—",
                  "default":"—"
                },
                {
                  "parameter": "highlight-current",
                  "explain": "是否高亮当前选中节点，默认值是 false。",
                  "type": "boolean",
                  "optional": "—",
                  "default":"false"
                },
                {
                  "parameter": "default-expand-all",
                  "explain": "是否默认展开所有节点",
                  "type": "boolean",
                  "optional": "—",
                  "default":"false"
                },
                {
                  "parameter": "expand-on-click-node",
                  "explain": "是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点",
                  "type": "boolean",
                  "optional": "—",
                  "default":"true"
                },
                {
                  "parameter": "check-on-click-node",
                  "explain": "是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。",
                  "type": "boolean",
                  "optional": "—",
                  "default":"true"
                },
                {
                  "parameter": "auto-expand-parent",
                  "explain": "展开子节点的时候是否自动展开父节点",
                  "type": "boolean",
                  "optional": "—",
                  "default":"true"
                },
                {
                  "parameter": "default-expanded-keys",
                  "explain": "默认展开的节点的 key 的数组",
                  "type": "array",
                  "optional": "—",
                  "default":"—"
                },
                {
                  "parameter": "show-checkbox",
                  "explain": "节点是否可被选择",
                  "type": "boolean",
                  "optional": "—",
                  "default":"false"
                },
                {
                  "parameter": "check-strictly",
                  "explain": "在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false",
                  "type": "boolean",
                  "optional": "—",
                  "default":"true"
                },
                {
                  "parameter": "default-checked-keys",
                  "explain": "默认勾选的节点的 key 的数组",
                  "type": "array",
                  "optional": "—",
                  "default":"—"
                },
                {
                  "parameter": "current-node-key",
                  "explain": "当前选中的节点",
                  "type": "string, number",
                  "optional": "—",
                  "default":"—"
                },
                {
                  "parameter": "filter-node-method",
                  "explain": "对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏",
                  "type": "Function(value, data, node)",
                  "optional": "—",
                  "default":"—"
                },
                {
                  "parameter": "accordion",
                  "explain": "是否每次只打开一个同级树节点展开",
                  "type": "boolean",
                  "optional": "—",
                  "default":"false"
                },
                {
                  "parameter": "indent",
                  "explain": "相邻级节点间的水平缩进，单位为像素",
                  "type": "number",
                  "optional": "—",
                  "default":"16"
                },
                {
                  "parameter": "icon-class",
                  "explain": "自定义树节点的图标",
                  "type": "string",
                  "optional": "—",
                  "default":"—"
                },
                {
                  "parameter": "lazy",
                  "explain": "是否懒加载子节点，需与 load 方法结合使用",
                  "type": "boolean",
                  "optional": "—",
                  "default":"false"
                },
                {
                  "parameter": "draggable",
                  "explain": "是否开启拖拽节点功能",
                  "type": "boolean",
                  "optional": "—",
                  "default":"false"
                },
                {
                  "parameter": "allow-drag",
                  "explain": "判断节点能否被拖拽",
                  "type": "Function(node)",
                  "optional": "—",
                  "default":"—"
                },
                {
                  "parameter": "allow-drop",
                  "explain": "拖拽时判定目标节点能否被放置。type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后",
                  "type": "Function(draggingNode, dropNode, type)",
                  "optional": "—",
                  "default":"—"
                }
              ],
              "props": [
                {
                  "parameter": "label",
                  "explain": "指定节点标签为节点对象的某个属性值",
                  "type": "string, function(data, node)",
                  "optional": "—",
                  "default":"—"
                },
                {
                  "parameter": "children",
                  "explain": "指定子树为节点对象的某个属性值",
                  "type": "string",
                  "optional": "—",
                  "default":"—"
                },
                {
                  "parameter": "disabled",
                  "explain": "指定节点选择框是否禁用为节点对象的某个属性值",
                  "type": "boolean, function(data, node)",
                  "optional": "—",
                  "default":"—"
                },
                {
                  "parameter": "isLeaf",
                  "explain": "指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效",
                  "type": "boolean, function(data, node)",
                  "optional": "—",
                  "default":"—"
                }
              ],
              "methods": [
                {
                  "name": "filter",
                  "explain": "对树节点进行筛选操作",
                  "parameter": "接收一个任意类型的参数，该参数会在 filter-node-method 中作为第一个参数"
                },
                {
                  "name": "updateKeyChildren",
                  "explain": "通过 keys 设置节点子元素，使用此方法必须设置 node-key 属性",
                  "parameter": "(key, data) 接收两个参数，1. 节点 key 2. 节点数据的数组"
                },
                {
                  "name": "getCheckedNodes",
                  "explain": "若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点所组成的数组",
                  "parameter": "(leafOnly, includeHalfChecked) 接收两个 boolean 类型的参数，1. 是否只是叶子节点，默认值为 false 2. 是否包含半选节点，默认值为 false"
                },
                {
                  "name": "setCheckedNodes",
                  "explain": "设置目前勾选的节点，使用此方法必须设置 node-key 属性",
                  "parameter": "(nodes) 接收勾选节点数据的数组"
                },
                {
                  "name": "getCheckedKeys",
                  "explain": "若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点的 key 所组成的数组",
                  "parameter": "(leafOnly) 接收一个 boolean 类型的参数，若为 true 则仅返回被选中的叶子节点的 keys，默认值为 false"
                },
                {
                  "name": "setCheckedKeys",
                  "explain": "通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性",
                  "parameter": "(keys, leafOnly) 接收两个参数，1. 勾选节点的 key 的数组 2. boolean 类型的参数，若为 true 则仅设置叶子节点的选中状态，默认值为 false"
                },
                {
                  "name": "setChecked",
                  "explain": "通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性",
                  "parameter": "(key/data, checked, deep) 接收三个参数，1. 勾选节点的 key 或者 data 2. boolean 类型，节点是否选中 3. boolean 类型，是否设置子节点 ，默认为 false"
                },
                {
                  "name": "getHalfCheckedNodes",
                  "explain": "若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点所组成的数组",
                  "parameter": "—"
                },
                {
                  "name": "getHalfCheckedKeys",
                  "explain": "若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点的 key 所组成的数组",
                  "parameter": "—"
                },
                {
                  "name": "getCurrentKey",
                  "explain": "获取当前被选中节点的 key，使用此方法必须设置 node-key 属性，若没有节点被选中则返回 null",
                  "parameter": "—"
                },
                {
                  "name": "getCurrentNode",
                  "explain": "获取当前被选中节点的 data，若没有节点被选中则返回 null",
                  "parameter": "—"
                },
                {
                  "name": "setCurrentKey",
                  "explain": "通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性",
                  "parameter": "(key) 待被选节点的 key，若为 null 则取消当前高亮的节点"
                },
                {
                  "name": "setCurrentNode",
                  "explain": "通过 node 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性",
                  "parameter": "(node) 待被选节点的 node"
                },
                {
                  "name": "getNode",
                  "explain": "根据 data 或者 key 拿到 Tree 组件中的 node",
                  "parameter": "(data) 要获得 node 的 key 或者 data"
                },
                {
                  "name": "remove",
                  "explain": "删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性",
                  "parameter": "(data) 要删除的节点的 data 或者 node"
                },
                {
                  "name": "append",
                  "explain": "为 Tree 中的一个节点追加一个子节点",
                  "parameter": "(data, parentNode) 接收两个参数，1. 要追加的子节点的 data 2. 子节点的 parent 的 data、key 或者 node"
                },
                {
                  "name": "insertBefore",
                  "explain": "	为 Tree 的一个节点的前面增加一个节点",
                  "parameter": "(data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的后一个节点的 data、key 或者 node"
                },
                {
                  "name": "insertAfter",
                  "explain": "为 Tree 的一个节点的后面增加一个节点",
                  "parameter": "(data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的前一个节点的 data、key 或者 node"
                }
              ],
              "events": [
                {
                  "name": "node-click",
                  "explain": "节点被点击时的回调",
                  "parameter": "共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。"
                },
                {
                  "name": "node-contextmenu",
                  "explain": "当某一节点被鼠标右键点击时会触发该事件",
                  "parameter": "共四个参数，依次为：event、传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。"
                },
                {
                  "name": "check-change",
                  "explain": "节点选中状态发生变化时的回调",
                  "parameter": "共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点"
                },
                {
                  "name": "check",
                  "explain": "当复选框被点击的时候触发",
                  "parameter": "共两个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性"
                },
                {
                  "name": "current-change",
                  "explain": "当前选中节点变化时触发的事件",
                  "parameter": "共两个参数，依次为：当前节点的数据，当前节点的 Node 对象"
                },
                {
                  "name": "node-expand",
                  "explain": "节点被展开时触发的事件",
                  "parameter": "共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身"
                },
                {
                  "name": "node-collapse",
                  "explain": "节点被关闭时触发的事件",
                  "parameter": "共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身"
                },
                {
                  "name": "node-drag-start",
                  "explain": "节点开始拖拽时触发的事件",
                  "parameter": "共两个参数，依次为：被拖拽节点对应的 Node、event"
                },
                {
                  "name": "node-drag-enter",
                  "explain": "拖拽进入其他节点时触发的事件",
                  "parameter": "共三个参数，依次为：被拖拽节点对应的 Node、所进入节点对应的 Node、event"
                },
                {
                  "name": "node-drag-leave",
                  "explain": "拖拽离开某个节点时触发的事件",
                  "parameter": "共三个参数，依次为：被拖拽节点对应的 Node、所离开节点对应的 Node、event"
                },
                {
                  "name": "node-drag-over",
                  "explain": "在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）",
                  "parameter": "共三个参数，依次为：被拖拽节点对应的 Node、当前进入节点对应的 Node、event"
                },
                {
                  "name": "node-drag-end",
                  "explain": "拖拽结束时（可能未成功）触发的事件",
                  "parameter": "共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点（可能为空）、被拖拽节点的放置位置（before、after、inner）、event"
                },
                {
                  "name": "node-drop",
                  "explain": "拖拽成功完成时触发的事件",
                  "parameter": "共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点、被拖拽节点的放置位置（before、after、inner）、event"
                }
              ],
              "slot": [
                {
                  "name": "—",
                  "explain": "自定义树节点的内容，参数为 { node, data }"
                }
              ],
            }
          }
        },
        computed: {
        },
        watch: {
        	'$route'(to,from){
        		if (to.path == this.$route.path) {
        			this.scrollDiv.scrollTop = this.scrollHeight;
        		} 
        	},
        	filterText(val) {
                this.$refs.tree2.filter(val);
              }
        },
        mounted() {
          this.scrollDiv = this.$refs.trees;
          this.attributes = this.res.attributes;
          this.events = this.res.events;
          this.props = this.res.props;
          this.methods = this.res.methods;
          this.slot = this.res.slot;
        },
        methods: {
          scroll() {
            this.scrollHeight = this.scrollDiv.scrollTop;
          },
          filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
          },
          handleNodeClick(data) {
            console.log(data);
          },
          clickShow6: function() {
            this.isShow6 = !this.isShow6;
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
          clickShow4: function() {
            this.isShow4 = !this.isShow4;
          },
          clickShow5: function() {
            this.isShow5 = !this.isShow5;
          },
          clickShow7: function() {
              this.isShow7 = !this.isShow7;
          },
          clickShow8: function() {
              this.isShow8 = !this.isShow8;
          },
          clickShow9: function() {
              this.isShow9 = !this.isShow9;
          },
          handleCheckChange(data, checked, indeterminate) {
              console.log(data, checked, indeterminate);
          },
          loadNode(node, resolve) {
              if (node.level === 0) {
                return resolve([{ name: 'region1' }, { name: 'region2' }]);
              }
              if (node.level > 3) return resolve([]);

              var hasChild;
              if (node.data.name === 'region1') {
                hasChild = true;
              } else if (node.data.name === 'region2') {
                hasChild = false;
              } else {
                hasChild = Math.random() > 0.5;
              }

              setTimeout(() => {
                var data;
                if (hasChild) {
                  data = [{
                    name: 'zone' + this.count++
                  }, {
                    name: 'zone' + this.count++
                  }];
                } else {
                  data = [];
                }
                console.log('data=>',data);
                resolve(data);
              }, 500);
            },
            loadNode1(node, resolve) {
                if (node.level === 0) {
                  return resolve([{ name: 'region' }]);
                }
                if (node.level > 1) return resolve([]);

                setTimeout(() => {
                  const data = [{
                    name: 'leaf',
                    leaf: true
                  }, {
                    name: 'zone'
                  }];

                  resolve(data);
                }, 500);
            },
            getCheckedNodes() {
                console.log(this.$refs.tree.getCheckedNodes());
              },
              getCheckedKeys() {
                console.log(this.$refs.tree.getCheckedKeys());
              },
              setCheckedNodes() {
                this.$refs.tree.setCheckedNodes([{
                  id: 5,
                  label: '二级 2-1'
                }, {
                  id: 9,
                  label: '三级 1-1-1'
                }]);
              },
              setCheckedKeys() {
                this.$refs.tree.setCheckedKeys([3]);
              },
              resetChecked() {
                this.$refs.tree.setCheckedKeys([]);
             },
             handleDragStart(node, ev) {
                 console.log('drag start', node);
               },
               handleDragEnter(draggingNode, dropNode, ev) {
                 console.log('tree drag enter: ', dropNode.label);
               },
               handleDragLeave(draggingNode, dropNode, ev) {
                 console.log('tree drag leave: ', dropNode.label);
               },
               handleDragOver(draggingNode, dropNode, ev) {
                 console.log('tree drag over: ', dropNode.label);
               },
               handleDragEnd(draggingNode, dropNode, dropType, ev) {
                 console.log('tree drag end: ', dropNode && dropNode.label, dropType);
               },
               handleDrop(draggingNode, dropNode, dropType, ev) {
                 console.log('tree drop: ', dropNode.label, dropType);
              },
              allowDrop(draggingNode, dropNode, type) {
                 if (dropNode.data.label === '二级 3-1') {
                   return type !== 'inner';
                 } else {
                   return true;
                 }
             },
             allowDrag(draggingNode) {
                 return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
             }
          }
      })
    }
  });
};
*/