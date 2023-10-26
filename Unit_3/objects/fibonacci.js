


var series = [0, 1];

while (series.length < 10) {
 
let endValue = series.pop()        
let startValue = series.pop()
let sum = startValue + endValue
series.push(startValue)
  series.push(endValue)
  series.push(sum)
  };
//console.log(series);

// Print the Fibonacci sequence to the console
console.log(series);
// the first ten numbers should be
// 0 1 1 2 3 5 8 13 21 34
