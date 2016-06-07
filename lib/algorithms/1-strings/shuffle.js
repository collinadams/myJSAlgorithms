'use strict';

//Code stolen from http://bost.ocks.org/mike/shuffle/
//Was looking for a good example of a Fisher–Yates shuffle

var fisherYatesShuffle = function(array){
  var temp;
  var shufflesLeft = array.length;
  var indToSwap;

  while(shufflesLeft){
    indToSwap = Math.floor(Math.random() * shufflesLeft);
    shufflesLeft--;
    temp = array[indToSwap];
    array[indToSwap] = array[shufflesLeft];
    array[shufflesLeft] = temp;
  }
  return array;
};

var shuffle = fisherYatesShuffle;

module.exports = shuffle;


// var shuffle = function(array) {
//   var m = array.length, t, i;

//   // While there remain elements to shuffle…
//   while (m) {

//     // Pick a remaining element
//     i = Math.floor(Math.random() * m--);

//     // And swap it with the current element.
//     t = array[m];
//     array[m] = array[i];
//     array[i] = t;
//   }

//   return array;
// };