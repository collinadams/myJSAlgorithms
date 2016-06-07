'use strict';

var quickSort = function(arrToSort, low, high){
  var pivot = swapHighsAndLows(arrToSort, low, high);

  if(low < pivot - 1){
    quickSort(arrToSort, low, pivot - 1);
  }
  if(pivot < high){
    quickSort(arrToSort, pivot, high);
  }
};

var swapHighsAndLows = function(arrToSort, low, high){
  var centerVal = arrToSort[Math.floor((low + high) / 2)];

  while(low <= high){
    while(arrToSort[low] < centerVal){
      low++;
    }
    while(arrToSort[high] > centerVal){
      high--;
    }
    if(low <= high){
      swap(arrToSort, low, high);
      low++;
      high--;
    }
  }
  return low;
};

var swap = function(arrToSort, low, high){
  var temp = arrToSort[low];
  arrToSort[low] = arrToSort[high];
  arrToSort[high] = temp;
};

module.exports = quickSort;

// var swap = function(arrayToSort, low, high) {
//   var lowValue = arrayToSort[low];
//   arrayToSort[low] = arrayToSort[high];
//   arrayToSort[high] = lowValue;
// };

// var partition = function(arrayToSort, low, high) {
//   var pivot = arrayToSort[Math.floor((low + high) / 2)];

//   while (low <= high){
//     while (arrayToSort[low] < pivot) { low++; }
//     while (arrayToSort[high] > pivot) { high--; }

//     if (low <= high) {
//       swap(arrayToSort, low, high);
//       low++;
//       high--;
//     }
//   }
//   return low;
// };

// var quickSort = function(arrayToSort, low, high) {
//   var index = partition(arrayToSort, low, high);

//   if (low < index -1) {
//     quickSort(arrayToSort, low, index - 1);
//   }
//   if (index < high) {
//     quickSort(arrayToSort, index, high);
//   }
// };