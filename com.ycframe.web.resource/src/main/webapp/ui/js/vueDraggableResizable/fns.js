function isFunction (func) {
  return (typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]')
}

function snapToGrid (grid, pendingX, pendingY,scale) {
  scale = 1;
  var x = Math.round((pendingX / scale) / grid[0]) * grid[0]
  var y = Math.round((pendingY / scale) / grid[1]) * grid[1]

  return [x, y]
}

function getSize (el) {
  var rect = el.getBoundingClientRect()

  return [
    parseInt(rect.width),
    parseInt(rect.height)
  ]
}

function computeWidth (parentWidth, left, right) {
  return parentWidth - left - right
}

function computeHeight (parentHeight, top, bottom) {
  return parentHeight - top - bottom
}

function restrictToBounds (value, min, max) {
  if (min !== null && value < min) {
    return min
  }

  if (max !== null && max < value) {
    return max
  }

  return value
}