/*data type: jenis nilai yang disimpan dalam variable
    - primitif(tipe data simple atau sederhana)
    - non primitif(tipe data abstrak(?) memiliki lebih dari satu nilai)
*/
// tipe data string

let mobil = "pajero";
// integer: khusus angka
let nomor = 1234;
// boolean: nilai kebenaran
const isFlying = false;
// array: buat nyimpen lebih dari 1 data

const buah = ["anggur", "jeruk", "mangga"];
console.log("buah-buahan: " + buah);

//object: template data
const student = {
  nama: "akmal",
  umur: 25,
  jobDesk: "kang maen kertu",
  salary: 5000000,
};
console.log("karyawan: ", student);

//null: ini tuh kopong kek----
let duit = null;

//undefinded: belom dikasi nilai/ isi
let dompet;

let nomorString = "123";
console.log(parseInt(nomorString)); // buat ubah string ke int
console.log(nomor.toString()); //buat ubah integer ke string
console.log(JSON.stringify(student)); // buat ubah objek biasa ke json
// console.log(JSON.parse(student)); //buat ubah data json ke objek biasa

//function: untuk membuat fungsi tertentu

function printAnything() {
  console.log("mulyonosaurus si omnivora");
}
printAnything(); //manggil fungsi

const whoIam = (name) => {
  return name;
};
console.log(whoIam("mulyonosaurus si omnivora"));
