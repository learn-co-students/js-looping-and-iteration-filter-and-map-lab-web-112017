// Code your solution here:
function driversWithRevenueOver(drivers, rev){
  return drivers.filter(driver => driver.revenue > rev);

};

function driverNamesWithRevenueOver(drivers, rev){
  return driversWithRevenueOver(drivers, rev).map(function (driver) {
      return driver.name;
    });
}

function exactMatch (drivers, obj) {
  return drivers.filter(function (driver) {
    let isTrue = false;

    for (const key in obj) {
      isTrue = driver[key] === obj[key];
    }

    return isTrue;
  });
}

function exactMatchToList (drivers, obj) {
  return exactMatch(drivers, obj)
    .map(function (driver) {
      return driver.name;
    });
}
