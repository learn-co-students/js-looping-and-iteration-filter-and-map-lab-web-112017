// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  result = []
  drivers.filter(function (driver) {
    if (driver['revenue'] > revenue)
      result.push(driver)
  })
  return result
};

function driverNamesWithRevenueOver(drivers, revenue) {
  const result = []
  drivers.filter(function (driver) {
    if (driver['revenue'] > revenue)
    result.push(driver['name'])
  })
  return result;
};

function exactMatch(drivers, driverObj) {
  const result = []
  drivers.filter(function (driver) {
    if (driver['name'] === driverObj['name'] || driver['revenue'] === driverObj['revenue'])
    result.push(driver)
  });
  return result;
};

function exactMatchToList(drivers, driverObj) {
  return exactMatch(drivers, driverObj).map(function (driver) {
      return driver.name
  });
};
