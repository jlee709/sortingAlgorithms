

// implement a quick-sort algorithm 
console.log("linked");



function quickSort (list) {
  if (!list.length)
    return arr;

  var pivot = list.splice(0, 1);
  var left = [];
  var right = [];

  arr.forEach(function (element) {
    if (el <= pivot)
      less.push(el);
    else
      greater.push(el);
  });
  
  return quickSort(less).concat(pivot, quickSort(greater));
}

var testArray = [ 1, 7, 3, 6, 8, 9, 10, 45, 23, 54, 4, 3 ];
var testArry2 = [50,55,20,30,10,15,70,80,95,];
var sorted = quickSort(test);

console.log('sorted', sorted);





