module.exports = function reverse (n) {
    n = String(Math.abs(n));
    let result = "";
    let number;
  
    for (let i = 0; i < n.length; i++) {
     result = n[i] + result;
     number = Number(result);
    }
      return  number;
     
}
