// Code your solution here:
function driversWithRevenueOver(drivers, rev) {
  return drivers.filter(driver => driver.revenue > rev)
}

function driverNamesWithRevenueOver(drivers, rev) {
  return driversWithRevenueOver(drivers,rev).map(driver => driver.name)
}

function exactMatch(drivers, match) {
  let matchKey = Object.keys(match)[0]
  return drivers.filter(driver => match[matchKey] === driver[matchKey])
}

function exactMatchToList(drivers, match) {
  return exactMatch(drivers, match).map(driver => driver.name)
}
