// Code your solution here:
// function driversWithRevenueOver(drivers, revenue) {
//   return drivers.filter(function (driver) {return driver.revenue > revenue; });
// }
//
// function driverNamesWithRevenueOver() {
//   let newColl = []
//   drivers.filter(function (driver) {newColl.push(driver.name) if driver.revenue > revenue; });
// }
//
//   return drivers.filter(function (driver) {
//     if driver.revenue > revenue {
//       return driver.name;
//     }
//   });
// }
function driversWithRevenueOver(drivers,revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers,revenue) {
  let arr = drivers.filter(function (driver) {
    return driver.revenue > revenue
  })
  return arr.map(function(el) {return el.name})
}

function exactMatch(drivers,obj) {
  return drivers.filter(function (driver) {
    for (const key in obj) {
      return driver[key] === obj[key] ? true : false
    }
  })
}

function exactMatchToList(drivers,obj) {
  return exactMatch(drivers,obj).map(function(el) {return el.name})
}
