// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  })
};

function driverNamesWithRevenueOver(drivers,revenue){
  return driversWithRevenueOver(drivers,revenue).map(function(driver){
    return driver.name
  })
};

function exactMatch(drivers, attributes){
  return drivers.filter(function(driver){
    // can also use Object.keys(driver)
    if (attributes.name){
      return driver.name === attributes.name
    }
    else if (attributes.revenue){
      return driver.revenue === attributes.revenue
    } else {
      return false
    }
  });
};

function exactMatchToList(drivers,attributes){
  return exactMatch(drivers,attributes).map(function(driver){
    return driver.name
  })
};
