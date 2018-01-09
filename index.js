// Code your solution here:
function driversWithRevenueOver(drivers, money) {
  let newArray = drivers.filter(function (person) {return person.revenue >= money});
  return newArray;
}

function driverNamesWithRevenueOver(drivers, money) {
  let newArray = drivers.filter(function (person) {return person.revenue >= money})
    return newArray.map(function (person) {
      return person.name;
    });
}

function exactMatch(drivers, info) {
  return drivers.filter(function (person) {
    for (const key in info) {
      exactMatches = person[key] === info[key];
    }
    return exactMatches;
  });
}

function exactMatchToList(drivers, info) {
  return exactMatch(drivers, info)
    .map(function (person) {
      return person.name;
    });
}
