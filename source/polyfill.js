/**
* Author: João Ribeiro
* Description: If browser not supported Object.entries will read this function with the same name
* @param obj
* @return Array
*/
if (!Object.entries) {
  Object.entries = function (obj) {
    return Array.prototype.map.call(Object.keys(obj), function (item, i) {
      var arr = []
      arr.push(item)
      arr.splice(++i, 0, obj[item])
      return arr
    })
  }
}

/**
* Description: If browser not supported Object.values will read this function with the same name
* @param obj
* @return Array
*/
if (!Object.values) {
  Object.values = function (obj) {
    return Array.prototype.map.call(Object.keys(obj), function (item, i) {
      return obj[item]
    })
  }
}
