/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var newArr = [],
      obj = {};

  for (var i = 0; i < preferences.length; i++) {
    for (var j = 0; j < preferences.length; j++) {
      for (var k = 0; k < preferences.length; k++) {
        var nI = preferences[i];
        var nJ = preferences[j];
        var nK = preferences[k];
        if ( (nI == j + 1) && (nJ == k + 1) && (nK == i + 1) && (nI != nJ) && (nJ != nK) ) {
            newArr.push([nI, nJ, nK].sort());
        }
      }
    }
  }

  for (var i = 0; i < newArr.length; i++) {
    var tempStr = newArr[i];
    obj[tempStr] = true;
  }

  return ( Object.keys(obj) ).length
};
