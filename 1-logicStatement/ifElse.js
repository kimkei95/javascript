/**if else : logic untuk memilih satu atau beberapa kondisi skaligus*/

//if
let nilaiSiswa = 100;

if (nilaiSiswa === 100) {
  console.log("selamat anda mendapatkan nilai sempurna");
}
//if else
const bootcampStatus = "active";
if (bootcampStatus === "active") {
  console.log("bootcamp masuk");
} else {
  console.log("bootcamp libur");
}

//if else if
const classStatus = "close";
const minuteRemaining = 5;
if (classStatus === "open") {
  console.log("kelas sedang berjalan");
} else if (minuteRemaining <= 5) {
  console.log("kelas bootcamp sisa 5 menit");
} else {
  console.log("kelas sudah selesai");
}

//nested if

const nilai = 92;
if (nilai > 70) {
  if (nilai >= 90) {
    console.log("Nilai A");
  } else {
    console.log("nilai B");
  }
} else {
  console.log("nilai C");
}

//ternary operator
const statusSiswa = "siswa";
let hasil = nilai >= 70 && statusSiswa === "siswa" ? "lulus" : "Bukan Siswa";
console.log("hasil: ", hasil);

//ternary operator if else if
const result =
  nilai >= 90
    ? "Nilai A"
    : nilai >= 80
    ? "Nilai B"
    : nilai >= 70
    ? "nilai C"
    : "nilai D";
