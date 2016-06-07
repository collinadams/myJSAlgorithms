/*jshint maxparams:false */
'use strict';

var mergeSort = function(array){
  if(array.length === 1){
    return array;
  }
  var center = Math.floor(array.length/2);
  var left = array.slice(0, center);
  var right = array.slice(center);
  
  return merge(mergeSort(left), mergeSort(right));
};

var merge = function(arr1, arr2){
  var result = [];
  
  var i = 0;
  var j = 0;
  
  while(i < arr1.length && j < arr2.length){
    if(arr1[i] <= arr2[j]){
      result.push(arr1[i++]);
    }else{
      result.push(arr2[j++]);
    }
  }
  return result.concat(i < j ? arr1.slice(i) : arr2.slice(j));
};



module.exports = mergeSort;


// var merge = function(arrayToSort, low, middle, high) {
//   var helper = [arrayToSort.length],
//       helperLeft = low,
//       helperRight = middle + 1,
//       current = low;

//   for (var i = low; i <= high; i++) {
//     helper[i] = arrayToSort[i];
//   }

//   while ((helperLeft <= middle) && (helperRight <= high)) {
//     if (helper[helperLeft] <= helper[helperRight]) {
//       arrayToSort[current] = helper[helperLeft];
//       helperLeft++;
//     } else {
//       arrayToSort[current] = helper[helperRight];
//       helperRight++;
//     }
//     current++;
//   }

//   var remaining = middle - helperLeft;
//   for (var j = 0; j <= remaining; j++) {
//     arrayToSort[current + j] = helper[helperLeft + j];
//   }
// };

// var mergeSort = function(arrayToSort, low, high) {
//   if (low < high) {
//     var middle = Math.floor((low + high) / 2);
//     mergeSort(arrayToSort, low, middle);
//     mergeSort(arrayToSort, middle + 1, high);
//     merge(arrayToSort, low, middle, high);
//   }
// };