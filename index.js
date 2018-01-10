// Code your solution here:
function driversWithRevenueOver(drivers, amount){
  return drivers.filter(function(driver){
    return driver.revenue > amount;
  })
}

function driverNamesWithRevenueOver(drivers, amount){
    return drivers.filter(function(d){
      return d.revenue > amount;
    }).map(function(driver){
      return driver.name
    })
}

function exactMatch(drivers, matcher){
  return  drivers.filter(function(driver){
    return driver[Object.keys(matcher)[0]] === matcher[Object.keys(matcher)[0]]
  })
}

function exactMatchToList(drivers, matcher){
  return  drivers.filter(function(driver){
    return driver[Object.keys(matcher)[0]] === matcher[Object.keys(matcher)[0]]
  }).map(function(driver){
    return driver.name
  })
}
