document.write("<script language=javascript src='ui/js/echarts/echarts.js'></script>");
document.write("<script language=javascript src='pages/components/selectTree/selectTree.js'></script>");
document.write("<script language=javascript src='pages/components/echarts/echarts.js'></script>");
document.write("<script language=javascript src='pages/components/vueOrgTree/vueOrgTree.js'></script>");
document.write("<script language=javascript src='pages/components/vueDraggableResizable/vueDraggableResizable.js'></script>");
var moduleinit = function(params)
{
	var that = this;
	pagesurl="pages";
    var pfunction = function(resolve, reject)
    {
	  var logined = true;
	  logined = ycframe.app.checkLogined();
	  if(logined==false){
		   return;
	  }
	 
	  
      $.ajax({
        url:pagesurl+params.url,
        type:'GET',
        dataType:"html",
        success:function(result,status,xhr){
          var Obj = $("<code></code>").append($(result));
          var $html = $(params.el, Obj);
          var value = $html.html();
          var componentsName = SelectTree;
          var myCharts = myecharts;
          //公共组件option
          var commonComponent = {
        	  treeselect:componentsName,
        	  echarts:myCharts,
        	  VueDraggableResizable:vueDraggableResizable,
        	  vue2OrgTree: vueOrgTree,
          };
          var commonDirectives = {
        		  drag: {
	                  bind(el, binding, vnode) {
	                    const dialogHeaderEl = el.querySelector('.el-dialog__header');
	                    const dragDom = el.querySelector('.el-dialog')
	                    dialogHeaderEl.style.cssText += ';cursor:move;'
	                    dragDom.style.cssText += ';top:0px;'
	                
	                    // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
	                    const getStyle = (function() {
	                      if (window.document.currentStyle) {
	                        return (dom, attr) => dom.currentStyle[attr]
	                      } else {
	                        return (dom, attr) => getComputedStyle(dom, false)[attr]
	                      }
	                    })()
	                
	                    dialogHeaderEl.onmousedown = (e) => {
	                      // 鼠标按下，计算当前元素距离可视区的距离
	                      const disX = e.clientX - dialogHeaderEl.offsetLeft
	                      const disY = e.clientY - dialogHeaderEl.offsetTop
	                
	                      const dragDomWidth = dragDom.offsetWidth
	                      const dragDomHeight = dragDom.offsetHeight
	                
	                      const screenWidth = document.body.clientWidth
	                      const screenHeight = document.body.clientHeight
	                
	                      const minDragDomLeft = dragDom.offsetLeft
	                      const maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth
	                
	                      const minDragDomTop = dragDom.offsetTop
	                      const maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomHeight
	                
	                      // 获取到的值带px 正则匹配替换
	                      var styL = getStyle(dragDom, 'left')
	                      var styT = getStyle(dragDom, 'top')
	                
	                      if (styL.includes('%')) {
	                        styL = +document.body.clientWidth * (+styL.replace(/\%/g, '') / 100)
	                        styT = +document.body.clientHeight * (+styT.replace(/\%/g, '') / 100)
	                      } else {
	                        styL = +styL.replace(/\px/g, '')
	                        styT = +styT.replace(/\px/g, '')
	                      }
	                
	                      document.onmousemove = function(e) {
	                        // 通过事件委托，计算移动的距离
	                        var left = e.clientX - disX
	                        var top = e.clientY - disY
	                
	                        // 边界处理
	                        if (-(left) > minDragDomLeft) {
	                          left = -minDragDomLeft
	                        } else if (left > maxDragDomLeft) {
	                          left = maxDragDomLeft
	                        }
	                
	                        if (-(top) > minDragDomTop) {
	                          top = -minDragDomTop
	                        } else if (top > maxDragDomTop) {
	                          top = maxDragDomTop
	                        }
	                
	                        // 移动当前元素
	                        dragDom.style.cssText += `;left:${left + styL}px;top:${top + styT}px;`
	                
	                        // emit onDrag event
	                        vnode.child.$emit('dragDialog')
	                      }
	               
	                      document.onmouseup = function(e) {
	                        document.onmousemove = null
	                        document.onmouseup = null
	                      }
	                    }
	                  
	                  }
	                } 
          }
          var renddata = params.dorender({pagesurl:pagesurl,template:value});
   
         var extend = {
         };
         
         renddata = $.extend(renddata,extend); 
         //公共组件option  扩展到功能组件
         renddata.components = $.extend(renddata.components,commonComponent);
         renddata.directives = $.extend(renddata.directives,commonDirectives);
         resolve(renddata);
//         console.log('renddata==========>',renddata);
             
      }
      })
    }
  return pfunction;
}