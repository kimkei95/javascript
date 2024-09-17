/** buat logic switch case untuk nampilin nama hari (b.inggris) berdasarkan input angka 1-7
 * jika angka yang dimasukin diluar dari 1-7, makaa tampilin pesan "input tidak valid"
 */
let aDayInAWeek = 1; //variable yang nilainya akan dikirim ke parameter switch case

switch (
  aDayInAWeek // switch case dgn parameter
) {
  case 1:
    console.log("sunday"); //kondisi yang akan di eksekusi
    break; //eksekusi logic jika terpenuhi
  case 2:
    console.log("monday");
    break;
  case 3:
    console.log("tuesday");
    break;
  case 4:
    console.log("wednesday");
    break;
  case 5:
    console.log("thursday");
    break;
  case 6:
    console.log("friday");
    break;
  case 7:
    console.log("saturday");
    break;
  default:
    console.log("input not valid"); // kondisi jika semua kondisi diatas tidak terpenuhi
    break;
}

/**buat logic if else untuk nentuin kelulusan orang berdasarkan nilai yang di dapat
 * jika nilai >=80, maka status lulusnya "lulus dengan sangat baik"
 * jika nilai >=70 dan <80 maka status lulusnya "lulus dengan baik"
 * jika nilai >=60 dan <70 maka status lulus "yhaaa ga lulus"
 */

const nilaiKelulusan = 60;

if (nilaiKelulusan >= 80) {
  console.log("lulus dengan sangat baik");
} else if (
  nilaiKelulusan >= 70 &&
  nilaiKelulusan < 80 &&
  nilaiKelulusan === 70
) {
  console.log("lulus dengan baik");
} else {
  console.log("yhaaa ga lulus");
}

/** buat nested if untuk nentuin nilai rata rata siswa dengan ngitung nilai rata-rata dari 3 pelajaran (mtk,fisika,kimia)
 * jika nilai yang dimasukkan ga valid(diluar rentang 0-100), maka tampilin pesan "nilai tidak valid"
 * jika nilai rata rata >=80 maka tampilin "selamat anda lulus dengan baik"
 * jika nilai rata rata <80 & >=60 maka tampilin pesan "anda lulus"
 * jika nilai rata-rata lebih kecil dari 60 maka tampilin "andaa tidak lulus "
 */

// const validasi = 100;
// if (validasi > 100 || validasi < 1) {
//   console.log("tidak valid");
// } else {
//   console.log("valid");
// }

const nilaiMtk = 100;
const nilaiKimia = 90;
const nilaiFisika = 60;

const NilaiGabungan = nilaiFisika + nilaiMtk + nilaiKimia;
console.log("nilai rata-rata anda: ", NilaiGabungan / 3);

if (
  (nilaiMtk && nilaiKimia && nilaiFisika > 100) ||
  (nilaiMtk && nilaiKimia && nilaiFisika < 1)
) {
  console.log("masukkan angka yang valid");
} else {
  if (NilaiGabungan >= 80) {
    console.log("lulus dengan baik");
    if (NilaiGabungan < 80 && NilaiGabungan === 60) {
      console.log("anda lulus");
    }
  } else {
    console.log("yhaa ga lulus");
  }
}

/** buat nested if untuk menghitung total pembelian barang
 * jika total harga = 0 maka tampilin pesan "tidak valid"
 * jika total pembelian >1juta maka dikasih diskon 10%
 * sedangkan jika total pembelian >500rb, maka akan dikasih diskon 5%, jika kurang dari 500rb, maka ga dapet diskon.
 * cek jika dapat dikson maka tampilin pesan "selamat anda mendapatkan diskon sebesar <diskon>%. total harga sebelum diskon: <totalHarga>
 * jika ga dapet diskon maka tampilin pesan "maaf, anda ga dapet diskon". total harga adalah <hargaSetelahDiskon>*/

const harga1 = 250000;
const harga2 = 250000;
const totalHarga = harga1 + harga2;
console.log(totalHarga);

if (harga1 && harga2 === 0) {
  console.log("pembelian tidak valid");
} else {
  if (totalHarga >= 1000000) {
    console.log("diskon yang di dapat oleh pembeli: ", totalHarga * 0.1);
    console.log("harga setelah diskon: ", totalHarga - totalHarga * 0.1);
    console.log("selamat anda mendapatkan diskon sebesar 10%");
  } else if (totalHarga > 500000) {
    console.log("diskon yang didapatkan oleh pembeli: ", totalHarga * 0.05);
    console.log("harga setelah diskon :", totalHarga - totalHarga * 0.05);
    console.log("selamat anda mendapatkan diskon sebesar 5%");
  } else {
    console.log(
      "maaf anda tidak mendapatkan diskon, total belanjaan anda ",
      totalHarga
    );
  }
}
