// Code your solution here:
function driversWithRevenueOver(array, amount) {
  const newArray = array.filter(function (driver) {
    return driver['revenue'] > amount
  })
  return newArray
}

function driverNamesWithRevenueOver(array, amount) {
  const newArray = array.filter(function (driver) {
    return driver['revenue'] > amount
  })
  const nameArray = newArray.map(function (driver) {
    return driver['name']
  })
  return nameArray
}

function exactMatch(array, obj) {
  const newArray = array.filter(function (driver) {
    for (const key in obj) {
      return driver[key] === obj[key];
    }
  })
  return newArray
}

function exactMatchToList(array, obj) {
  const newArray = exactMatch(array, obj)
  const nameArray = newArray.map(function (driver) {
    return driver.name
  })
  return nameArray
}
