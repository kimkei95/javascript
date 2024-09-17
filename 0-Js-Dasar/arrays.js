//array bisas nyimpen banyak data sekaligus,
//baik dengan satu jenis tipe data atau tipe data campuran

const array = [1, 2, 3, 4, 5]; //array biasa
// cara ngambil data array
array[4] = 10; // mengganti nilai dari data dalam array
console.log(array[2]); //indeks tertentu
console.log(array);

//method array

//push: method array untuk nambahin data kedalam baris akhir array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits); //cek array sekarang
fruits.push("Kiwi"); // untuk nambahin data baru ke belakang
console.log(fruits); // cek array yang sudah ditambahin ""kiwi"
console.log("==================================================");

//unshift: kebalikan push
fruits.unshift("duren", "nangka"); //
console.log(fruits); //

//shift: ngapus paling paling depan
fruits.shift();
console.log(fruits);

console.log("data dihapus: ", array.shift());
console.log(array);

//pop: ngapus paling akhir
console.log("data dihapus: ", fruits.pop());
console.log(fruits);

console.log("data dihapus: ", array.pop());
console.log(array);

//splice: untuk nyisipin data ke array
//parameter pertama: buat ambil posisi indeks
//parameter kedua: buat apus data
const fruits2 = ["banana", "orange", "apple", "mango"];
fruits2.splice(2, 2, "Lemon", "Kiwi");
console.log("data di splice: ", fruits2);

//slice: untuk motong data kedalam dalam urutan tertentu(?)
const slicedFruits = fruits2.slice(2);
console.log("data di clice: ", slicedFruits);

//slice 2 argument: method array untuk ngapus dalam urutan tertentu
const fruits3 = [
  "Banana",
  "Orange",
  "Lemon",
  "Apple",
  "Mango",
  "Papaya",
  "Dragonfruit",
];
const slicedUpTo = fruits3.slice(3, 4);
console.log("data slice upto:  ", slicedUpTo);

//sort: method untuk urutin data
const reversedArray = [7, 6, 5, 4, 3, 2, 1];
console.log("sort: ", reversedArray.sort());

//.reverse: method untuk urutin data secara terbalik
console.log("array terbalik: ", array.reverse());

//concat: method array untuk nambahin data dari array lain ke array yang udah ada
let newArray = [1, 2, 3];
let otherArray = [12, 13, 14];
console.log("array gabungan: ", newArray.concat(otherArray));

//foreach(p): method array buat manggil fungsi isi dari setiap elemen array
let printFruit = fruits3.forEach(myFruit);
function myFruit(params) {
  console.log("for each fruit: ", params);
}

//toString: merubah data array jadi string
console.log("array to string: ", newArray.toString());

//tolocalstring:method untuk ngubah nilai array jadi format lokal misalkan rupiah

const price = [1000, 2000, 50000, 200000, 700000];
console.log(
  "Rp.",
  price.toLocaleString({
    style: "currency",
    currency: "IDR",
  })
);

//REDUCE(accumulator,currentvalue): method untuk mengakumulasi nilai dalam aray ke dalam satu hasil akhir
/** accumulator: buat simpen hasil yang udah di totalin dari tiap element sebelumnya
 * currenctvalue: data selanjutnya yang mau ditotalin*/

const totalPrice = price.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); //inisiasi awal nilai 0
console.log("reduced array (price): ", totalPrice);

//array of object
const employee = [
  {
    id: 1,
    nama: "akmal",
    age: 26,
    jobDesk: ["Quality Assurance", "BackEnd", "FrontEnd"],
    hobby: ["membaca", "Menulis"],
    salary: 3000000,
  },
  {
    id: 1,
    nama: "andre",
    age: 28,
    jobDesk: ["Quality Assurance", "BackEnd", "Business analyst"],
    hobby: ["membaca", "Menulis"],
    salary: 4000000,
  },
  {
    id: 1,
    nama: "arfi",
    age: 27,
    jobDesk: ["nunggu mati"],
    hobby: ["membaca"],
    salary: 1000000,
  },
  {
    id: 1,
    nama: "jojo",
    age: 26,
    jobDesk: ["Quality Assurance", "ui ux designer"],
    hobby: ["membaca"],
    salary: 5000000,
  },
];

//exercos foreach
const oldEmployee = employee.forEach((data) => {
  console.log("karyawan bau tanah:", data.nama, data.age > 30);
});

// //buat foreach untuk ngecek karyawan yang jobdesk]
// const jobEmployee = employee.forEach((data) => {
//   console.log("anak QA: ", data.nama, data.jobDesk);
// });

/**map: method array untuk merubah setiap elemen dalam array jadi nilai baru
 *dalam contoh ini mengubah data array karyawan menjadi data namanya saja
 sehingga data array to objek karyawan sebelumnya berubah menjadi data array yang hanya berisi nama saja */

const mappingEmployee = employee.map((item) => {
  const jartap = {
    nama: item.nama,
    job: item.jobDesk.find((item) => item === "Quality Assurance"),
  };
  return jartap;
});
console.log("mapping data karyawan: ", mappingEmployee);

//find: untuk mencari data dalam sebuah array

console.log(
  fruits3.find((item) => {
    return item === "Apple";
  })
);

//findindex: untuk nyari index data suatu elemen dalam array
const findName = employee.findIndex((item) => {
  return item.nama === "akmal";
});
console.log("find index: ", findName);

//filter: untuk filter data dalam array

const filterQualityAssurance = employee.filter((item) => {
  return item.jobDesk[0] === "Quality Assurance";
});
console.log("filter quality assurance: ", filterQualityAssurance);

//length: untuk ngitung panjang ata ujumlah data dalam array

console.log("jumlah karyawan: ", employee.length);

//includes: method array yang ngebalikin true/false jika suatu data yang dicek dalam array

const fruits4 = [
  "Banana",
  "Orange",
  "Lemon",
  "Apple",
  "Mango",
  "Papaya",
  "Dragonfruit",
];
//basic
console.log("array isi jeruk: ", fruits4.includes("Orange"));
//argumen pertama = data yang cek, argumen kedua = awal mula pengecekan
console.log(
  "cek array isi pisang dimulai dari urutan ketiga: ",
  fruits4.includes("Banana", 3)
);

//every: method untuk ngecek apakah semua elemen dalam array memiliki kriteria tertentu
const cekUmurKaryawan = employee.every((item) => {
  return item.age <= 28;
});
console.log("karyawan dibawah 28: ", cekUmurKaryawan);

//SOAL
//1 ==================================================================
// const orangNgantor = employee.find((item) => {
//   return item.hobby[1] === "Menulis";
// });
const result = employee.find(
  (emp) => emp.hobby.includes("Menulis") && emp.age > 25
);

console.log(
  "Karyawan yang memiliki hobi 'Menulis' dan usia di atas 25 tahun:",
  result
);

//2 ==================================================================
const filterBackend = employee.filter((item) => {
  return item.jobDesk.some((job) => job === "BackEnd" && item.salary > 3000000);
});
console.log("filter backend: ", filterBackend);
//3 ====================================================================
const filterHobi = employee
  .filter((item) => item.hobby.length === 1)
  .map((item) => {
    return item.nama;
  });

console.log("filter hobi: ", filterHobi);
console.log("jumlah hobi:", filterHobi.length);

//4. ==================================================================
//filter nyari data karyawan frontend, cari data gaji pake some,
//bandingin pake reduce(salary) cara dapet salary dr reduce pake find

const frontEndEmployeeNames = employee
  .filter((emp) => emp.jobDesk.includes("FrontEnd"))
  .reduce((names, emp) => {
    names.push(emp.nama);
    return names;
  }, []);

const hasFrontEndJob = employee.some((emp) => emp.jobDesk.includes("FrontEnd"));

const firstFrontEndEmployee = employee.find((emp) =>
  emp.jobDesk.includes("FrontEnd")
);
console.log(
  "Nama-nama karyawan dengan job desk FrontEnd:",
  frontEndEmployeeNames
);
console.log("Ada karyawan dengan job desk FrontEnd:", hasFrontEndJob);
console.log(
  "Nama karyawan pertama dengan job desk FrontEnd:",
  firstFrontEndEmployee ? firstFrontEndEmployee.nama : "Tidak ada"
);

//cara simple

// const frontEndEmployee = employee.filter((item) =>
//   item.jobDesk
//     .some((item) => item.title === "FrontEnd")
//     .reduce((acc, cur) =>
//       acc.jobDesk[0].salary > cur.jobDesk[0].salary ? acc : cur
//     )
// );
// console.log(frontEndEmployee.nama);
