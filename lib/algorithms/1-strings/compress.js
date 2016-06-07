'use strict';

//1.5) Implement Basic string compression using # of repeated chars.
//     If compressed string is longer than original, use original.
var compress = function(toCompress) {
  var compressed = '';

  for(var i = 0; i < toCompress.length; i++){
    var count = 1;
    compressed += toCompress[i];
    while(toCompress[i] === toCompress[i + 1]){
      count++;
      i++;
    }
    compressed += count.toString();
  }
  return compressed.length > toCompress.length ? toCompress : compressed;
};

module.exports = compress;

  // var result = [];
  // var current = '^';
  // var numSame = 0;
  // var index = -1;  //index of entry in result

 //  var writeNum = function() {
 //    var count = numSame.toString();
 //    var countSize = count.length;

 //    if((index + countSize + 1) > toCompress.length) {
 //      return false;
 //    }
 //    else
 //    {
 //      for(var i = 0; i < countSize; i++) {
 //        result[index + i] = count[i];
 //      }
 //      return true;
 //    }
 //  };

  // for (var j = 0; j < toCompress.length; j++) {
  //  var letter = toCompress[j];

  //  if (letter !== current) {
  //    index = index + numSame.toString().length;

  //    //reset numSame
  //    numSame = 1;
  //    result[index] = letter;
  //    index++;
  //    current = letter;
  //  } else {
  //    numSame++;
  //  }

  //  if (!writeNum()) {
  //    return toCompress;
  //  }
  // }

  // return result.join('');