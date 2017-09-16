

// implement a quick-sort algorithm 
console.log("linked");

var list = [50, 55, 20, 30, 10, 15, 70, 80, 95,];

function quickSort (list, leftSort,rightSort) {
  // base case recursion test 
  if (!list.length)
    return list;
// initiates the splice method to isolate the piviot
  var pivot = list.splice(0, 1)[0];
  leftSort = [];
  rightSort = [];
// function that will compare e[spliced.list] your value to be compared and pushed into the proper array  
  list.forEach(function (e){
    if (e <= pivot)
      leftSort.push(e);
    else
      rightSort.push(e);
  });
  
  return quickSort(leftSort).concat(pivot, quickSort(rightSort));
}


console.log(quickSort(list));





