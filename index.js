function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function(driverRevObj) {
    return driverRevObj['revenue'] >= revenue
  })
}

function driverNamesWithRevenueOver(driver, revenue) {
  return driversWithRevenueOver(driver, revenue).map (function(driverObj) {
    return driverObj['name']
  })
}

function exactMatch(driver, obj) {
  let arrayMatches = [];
  let objKey = Object.keys(obj)[0]
  driver.forEach(function(d) {
    Object.keys(d).forEach(function (k) {
      if (k === objKey && d[k] == obj[objKey]) {
        arrayMatches.push(d);
      };
    })
  })
  return arrayMatches;
}

function exactMatchToList(driver, object) {
  return exactMatch(driver, object).map(function(d) {
    return d["name"]
  })
}
