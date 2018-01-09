function driversWithRevenueOver (driverObjs, revenue) {
// It returns an array of `driver` objects that have a `revenue` attribute that's greater than the passed-in `revenue` argument.
  return driverObjs.filter(function (driverObj) {
    return driverObj.revenue > revenue
  })
}

function driverNamesWithRevenueOver(driverObjs, revenue) {
  return driversWithRevenueOver(driverObjs, revenue).map(function (driverObj) {
    return driverObj.name
  })
}

function exactMatch (driverObjs, keyValue) {
  return driverObjs.filter(function(driverObj) {
    return driverObj[Object.keys(keyValue)[0]] === Object.values(keyValue)[0]
  }
)
}
//
// function exactMatchToList(driverObjs, keyValue) {
//   return exactMatch(driverObjs,keyValue).map(function (driverObj) {
//     return driverObj.name
//   })
// }



function exactMatchToList (driverObjs, keyValue) {
  return driverObjs.filter(function(driverObj) {
    return driverObj[Object.keys(keyValue)[0]] === Object.values(keyValue)[0]}
    ).map(function(driverObj) {return driverObj.name})
}
