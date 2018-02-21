module.exports = function getZerosCount(number) {
  var n = number;
  var res = 0;
  var count = 0; 
  while (Math.floor(n/5) >= 1) {   
    res = Math.floor(n/5); 
    count = count + res;
    n = res; 
    }
    return count;
}
