// import modul readline dari node js
const readline = require("readline");

//buat interface untuk input ke terminal
const inputNama = readline.createInterface({
  input: process.stdin, //untuk ngambil inputan dari keyboard user
  output: process.stdout, //untuk nampilin output ke terminal
});

// //.question: untuk nampilin pertanyaan ke user
// inputNama.question("masukkan nama: ", (nama) => {
//   console.log("halo", nama);
//   inputNama.close;
// });

//contoh ambil 2 inputan
inputNama.question("masukkan nama: ", (nama) => {
  inputNama.question("masukan umur: ", (age) => {
    console.log(`halo, ${nama} umur ${age}`);
    inputNama.close();
  });
});
