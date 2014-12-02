'use strict';

var MeanMedianMode = function() {

  //calculate mean
  this.mean = function(inputData) {
    return inputData.reduce(function(pv, cv) { return pv + cv; }, 0) / inputData.length;
  };

  //calculate median
  this.median = function(inputData) {
    inputData.map(Number).sort(function(a, b) {return a - b;});
    if (inputData.length % 2 === 0) {
      //is even
      var idxMidHigh = Math.floor(inputData.length / 2);
      var idxMidLow = Math.floor(inputData.length / 2) - 1;
      return (inputData[idxMidHigh] + inputData[idxMidLow]) / 2;
    } else {
      //is odd
      var idxMid = Math.floor(inputData.length / 2);
      return inputData[idxMid];
    }
  };

  //caculate mode
  this.mode = function(inputData) {
    var dupLog = {};
    //check for multiple occurrances of numbers
    inputData.forEach(function(val, idx, arr) {
      if (val == arr[idx - 1]) {
        if (dupLog[val]) {
          dupLog[val] += 1;
        } else {
          dupLog[val] = 2;
        }
      }
    });
    //if there are multiple occurances
    if (dupLog) {
      //find max occurances and get original value that reoccured (key)
      var maxCount = 0;
      var multiMode = [];
      var maxOccurVal = inputData;
      for (var key in dupLog) {
        if (dupLog[key] > maxCount) {
          multiMode = [];
          multiMode.push(Number(key));
          maxCount = dupLog[key];
          maxOccurVal = Number(key);
        } else if (dupLog[key] == maxCount) {
          multiMode.push(Number(key));
        }
      }
      //if multiple values have the same occurrences then create an array of modes
      if (multiMode.length < 2) {
        return maxOccurVal;
      } else {
        return multiMode;
      }
    } else {
      return inputData;
    }
  };
};

var mmm = new MeanMedianMode();
module.exports = mmm;
