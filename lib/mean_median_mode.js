var MeanMedianMode = function () {
  //your code here
  var inputData = process.argv.slice(2,process.argv.length).map(Number).sort(function(a, b){return a-b});
  
  //calculate mean
  var mean = inputData.reduce(function(pv, cv) { return pv + cv; }, 0)/inputData.length;
  
  
  //calculate median
  if (inputData.length % 2 == 0){
	  //is even
	  idxMidHigh = Math.floor(inputData.length/2);
	  idxMidLow = Math.floor(inputData.length/2) - 1;
	  median = (inputData[idxMidHigh] + inputData[idxMidLow])/2;
  } else {
	  //is odd
	  idxMid = Math.floor(inputData.length/2);
	  median = inputData[idxMid];
  }
  
  
  //caculate mode
  // var dupLog = {}
  // inputData.reduce(function(pv, cv) {
  // 	  if (cv = pv) {
  // 		  console.log (pv + " ? " + cv);
  // 		  dupLog[pv]++;
  // 		  return cv + 0;
  // 	  }
  // })
  
  
  console.log (inputData);
  console.log (mean);
  console.log (median);
  //console.log (dupLog);
};

var mmm = new MeanMedianMode();
module.exports = mmm;
