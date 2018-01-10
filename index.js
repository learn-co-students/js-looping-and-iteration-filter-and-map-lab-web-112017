// Code your solution here:

function driversWithRevenueOver(drivers, amount){
  return drivers.filter(function(driver){
    return driver.revenue > amount;
  })
}


function driverNamesWithRevenueOver(drivers, amount){
  return drivers.filter(function(driver){
    return driver.revenue > amount;
  }).map(function(driver){
    return driver.name;
    })
}


function exactMatch(drivers, obj){
  return drivers.filter(function(driver){
    return driver.name === obj.name || driver.revenue === obj.revenue;
  })
}


function exactMatchToList(drivers, obj){
  return drivers.filter(function(driver){
    return driver.name === obj.name || driver.revenue === obj.revenue;
  }).map(function(driver){
    return driver.name;
    })
}
