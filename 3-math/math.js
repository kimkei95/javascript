/** math: sebuah objek dalam js yang berisi method  atau operasi matematika*/

//math.randdom(): buat nge hasilin angka acak atau random

let randomNumber = Math.random();
console.log("math random:", randomNumber);

//contoh dari rentang angka tertentu

let min = 5;
let max = 30;
let randomize = Math.floor(Math.random() * (max - min + 1) + min);
console.log("angka acak dari 5-30: ", randomize);

//math.floor: buletin angka kebawah

let angkaBulatKeBawah = Math.floor(2.9);
console.log("math floor: ", angkaBulatKeBawah);

//math ceil: buletin angka keatas
let angkaBulatKeAtas = Math.ceil(2.9);
console.log("math ceil: ", angkaBulatKeAtas);

// math.round: buat buletin angka terdekat

let angkaBulat = Math.round(4.5);
console.log("angka bulat: ", angkaBulat);

let nilaiMax = Math.max(2, 5, 9, 1);
console.log("nilai max: ", nilaiMax);

let nilaiMin = Math.min(2, 5, 9, 1);
console.log("nilai max: ", nilaiMin);

let akarKuadrat = Math.sqrt(16);
console.log("math sqrt: ", akarKuadrat);

let hasilPangkat = Math.pow(2, 3);
console.log("math pow: ", hasilPangkat);

console.log("math pi", Math.PI);
