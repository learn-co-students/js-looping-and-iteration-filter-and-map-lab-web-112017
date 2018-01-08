// Code your solution here:
function driversWithRevenueOver(drivers, minRevenue) {
  return drivers.filter(
    function (driver) {
      return driver.revenue >= minRevenue;
    }
  )
}

function driverNamesWithRevenueOver(drivers, minRevenue) {
  let matchingDrivers = driversWithRevenueOver(drivers, minRevenue)
  return matchingDrivers.map(
    function (driver) {
      return driver.name;
    }
  )

}

function exactMatch(drivers, attributePair) {
  return drivers.filter(
    function (driver) {
      let matches = false;

      for (const key in attributePair) {
        matches = driver[key] === attributePair[key];
      }

      return matches;
    }
  )
}

function exactMatchToList(drivers, attributePair) {
  let list = exactMatch(drivers, attributePair);
  return list.map(
    function (driver) {
      return driver.name;
    }
  )

}
