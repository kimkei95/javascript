/** for
 *buat loopingan menghasilkan bilangan ganjil antara 1-20*/
function angkaGanjil(n) {
  let begin = 1;
  const oddNums = [];

  for (let i = 0; i < n; i++) {
    oddNums.push(begin);
    begin += 2;
  }
  return oddNums;
}

/** coding mas danu
 * for(leti=1;i<=20;i++){
 * if(i%2 !==0){
 * console.log(i);
 * }
 * }
 */
console.log(angkaGanjil(10));

/**buat looping menggunakan for untuk mencari nilai tertinggi dari sebuah array menggunakan for loop*/
// const array = [3,7,2,9,5,10];
const array = [3, 7, 2, 9, 5, 10];
let max = array[0];
for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log("angka terbesar: ", max);

/** buat looping
 *
 **
 ***
 ****
 *****
 */

var s = "";

for (var i = 0; i < 5; i++) {
  for (var j = 0; j <= i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);

/**buat fungsi untuk ngitung nilai rata rata dari sebuah data array menggunakan for loop*/
//const nilai= [3,7,2,9,5,10];

const numbers = [3, 7, 2, 9, 5, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

const average = sum / numbers.length;
console.log("rata-rata: ", average);
