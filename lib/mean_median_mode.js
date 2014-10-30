var MeanMedianMode = function () {
  //your code here
  var inputData = process.argv.slice(2,process.argv.length).map(Number).sort(function(a, b){return a-b;});
  
  
  //calculate mean
  this.mean = function (inputData) {
    return inputData.reduce(function(pv, cv) { return pv + cv; }, 0)/inputData.length;
    // researched .reduce on MDN
  };
  
  
  //calculate median
  this.median = function (inputData) {
    if (inputData.length % 2 === 0){
      //is even
      idxMidHigh = Math.floor(inputData.length/2);
      idxMidLow = Math.floor(inputData.length/2) - 1;
      return (inputData[idxMidHigh] + inputData[idxMidLow])/2;
    } else {
      //is odd
      idxMid = Math.floor(inputData.length/2);
      return inputData[idxMid];
    }
  };
  
  
  //caculate mode
  this.mode = function (inputData) {
    var dupLog = {};
    //check for multiple occurrances of numbers
    inputData.forEach(function(val, idx, arr){
      if (val == arr[idx - 1]) {
        if (dupLog[val]){
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
      var maxOccurVal;
      for (var key in dupLog) {
        if (dupLog[key] > maxCount) {
          multiMode = [];
          multiMode.push(parseInt(key));
          maxCount = dupLog[key];
          maxOccurVal = parseInt(key);
        } else if (dupLog[key] == maxCount) {
          multiMode.push(parseInt(key));
        }
      }
      //if multiple values have the same occurrances then create an array of modes
      if (multiMode.length < 2) {
        return maxOccurVal;
      } else {
        return multiMode;
      }
    } else {
      return inputData;
    }
  };
  
  
  console.log (inputData);
  console.log (this.mean(inputData));
  console.log (this.median(inputData));
  console.log (this.mode(inputData));
};

var mmm = new MeanMedianMode();
module.exports = mmm;
