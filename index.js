// Code your solution here:
function driversWithRevenueOver (collection, revenue) {
  newCollection = []
  for (const driver of collection) {
    if (driver.revenue > revenue) {
      console.log('driversWithRevenueOver: ' + driver.name);
      newCollection.push(driver);
    }
  }
  return newCollection;
}

function driverNamesWithRevenueOver (collection, revenue) {
  newCollection = [];
  for (const driver of collection) {
    if (driver.revenue > revenue) {
      console.log('driverNamesWithRevenueOver: ' + driver.name);
      newCollection.push(driver.name);
    }
  }
  return newCollection;
}

function exactMatch (collection, baseDriver) {
  newCollection = [];
  for (const driver of collection){
    if (baseDriver.name === driver.name || baseDriver.revenue === driver.revenue) {
      console.log('exactMatch: ' + driver.name);
      newCollection.push(driver);
    }
  }
  return newCollection;
}

function exactMatchToList (collection, baseDriver) {
  newCollection = [];
  key = Object.keys(baseDriver)[0]

  for (const driver of collection) {
    if (baseDriver[key] === driver[key]) {
      console.log('exactMatchToList: ' + driver[key]);
      newCollection.push(driver.name);
    }
  }
  return newCollection;
}
