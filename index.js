// Code your solution here:
function driversWithRevenueOver (array, rev) {
  return array.filter (function (obj) {
    return obj.revenue > parseInt(rev, 10);
  })
}

function driverNamesWithRevenueOver (array, rev) {
  return driversWithRevenueOver (array, rev).map (function (obj) {
    return obj.name;
  })
}

function exactMatch (array, object) {
  return array.filter (function (person_obj) {
    return person_obj[Object.keys(object)] === object[Object.keys(object)];
  })
}

function exactMatchToList (array, object) {
  return exactMatch (array, object).map (function (obj) {
    return obj.name;
  })
}
