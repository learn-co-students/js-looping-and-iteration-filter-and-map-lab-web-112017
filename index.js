// Code your solution here:
function driversWithRevenueOver (arr, string) {
  return arr.filter(function(elm) {
    return elm.revenue > string });
}

// function matchName (drivers, string) {
//   return drivers.filter( function (person) { return person.name === string } );
// }

function driverNamesWithRevenueOver(arr, string) {
  return driversWithRevenueOver (arr, string).map( function (elm) {
    return elm.name;
  })
}

function exactMatch(drivers, obj) {
  return drivers.filter( function(driver) {
    let match = false;

    for (const key in obj) {
      match = driver[key] === obj[key];
    }
    return match;
  })
}

function exactMatchToList(arr, obj) {
  return exactMatch(arr, obj).map(function(driver) {
    return driver.name;
  })
}

// exactMatchToList() - This function works the same way as the exactMatch() function, except that instead of returning an array of driver objects, it returns an array of strings with each element in the array corresponding to the matching driver's name. For example, exactMatchToList(drivers, { revenue: 2000 }) will return ['Sammy'], as Sammy is the name of the matching driver object.
