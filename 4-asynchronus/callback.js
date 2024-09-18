/*fungsi yang di kirim sebagai argumen atau parameter ke fungsi yang lain*/
function printResult(data) {
  console.log("callback: ", data);
}
function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
printResult(myCalculator(10, 10));
