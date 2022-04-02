// 判断是否叶子节点
var isLeaf = function (data, prop) {
  return !(Array.isArray(data[prop]) && data[prop].length > 0)
}

// 创建 node 节点
var renderNode = function (h, data, context) {
	var { props } = context
	var cls = ['org-tree-node']
	var childNodes = []
	var children = data[props.props.children]

  if (isLeaf(data, props.props.children)) {
    cls.push('is-leaf')
  } else if (props.collapsable && !data[props.props.expand]) {
    cls.push('collapsed')
  }

  childNodes.push(renderLabel(h, data, context))

  if (!props.collapsable || data[props.props.expand]) {
    childNodes.push(renderChildren(h, children, context))
  }

  return h('div', {
    domProps: {
      className: cls.join(' ')
    }
  }, childNodes)
}

// 创建展开折叠按钮
var renderBtn = (h, data, { props, listeners }) => {
	var expandHandler = listeners['on-expand']

  let cls = ['org-tree-node-btn']

  if (data[props.props.expand]) {
    cls.push('expanded')
  }

  return h('span', {
    domProps: {
      className: cls.join(' ')
    },
    on: {
      click: e => expandHandler && expandHandler(e,data)
    }
  })
}

// 创建 label 节点
var renderLabel = (h, data, context) => {
	var { props, listeners } = context
	var label = data[props.props.label]
	var renderContent = props.renderContent

  // event handlers
	var clickHandler = listeners['on-node-click']
	var mouseOverHandler = listeners['on-node-mouseover']
	var mouseOutHandler = listeners['on-node-mouseout']

	var childNodes = []
  if (typeof renderContent === 'function') {
    let vnode = renderContent(h, data)

    vnode && childNodes.push(vnode)
  } else {
    childNodes.push(label)
  }

  if (props.collapsable && !isLeaf(data, props.props.children)) {
    childNodes.push(renderBtn(h, data, context))
  }

  var cls = ['org-tree-node-label-inner']
  let { labelWidth, labelClassName, selectedClassName, selectedKey } = props

  if (typeof labelWidth === 'number') {
    labelWidth += 'px'
  }

  if (typeof labelClassName === 'function') {
    labelClassName = labelClassName(data)
  }

  labelClassName && cls.push(labelClassName)

  // add selected class and key from props
  if (typeof selectedClassName === 'function') {
    selectedClassName = selectedClassName(data)
  }

  selectedClassName && selectedKey && data[selectedKey] && cls.push(selectedClassName)

  return h('div', {
    domProps: {
      className: 'org-tree-node-label'
    }
  }, [h('div', {
    domProps: {
      className: cls.join(' ')
    },
    style: { width: labelWidth },
    on: {
      'click': e => clickHandler && clickHandler(e, data),
      'mouseover': e => mouseOverHandler && mouseOverHandler(e, data),
      'mouseout': e => mouseOutHandler && mouseOutHandler(e, data)
    }
  }, childNodes)])
}

// 创建 node 子节点
var renderChildren = (h, list, context) => {
  if (Array.isArray(list) && list.length) {
	  var children = list.map(item => {
      return renderNode(h, item, context)
    })

    return h('div', {
      domProps: {
        className: 'org-tree-node-children'
      }
    }, children)
  }
  return ''
}

var render = (h, context) => {
	var {props} = context

  console.log(context.listeners)
  return renderNode(h, props.data, context)
}