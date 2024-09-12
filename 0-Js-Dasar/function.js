function penjumlahan(a, b) {
  return a + b;
}
console.log("penjumlahan: ", penjumlahan(10, 5));

const cekAngkaPositif = (angka) => {
  if (angka < 0) {
    return "angka negatif";
  }
  return "Angka positif";
};
console.log(cekAngkaPositif(-10));
console.log(cekAngkaPositif(20));

//function cek karyawan terdaftar
function cekKaryawanAigen(nama, jobDesk, salary) {
  if (nama && jobDesk && salary) {
    //cek kondisi
    return "Anda karyawan"; // kalo semua terpenuhi
  }
  return "Anda pengangguran"; // kalo slah satu tidak terpenuhi
}
console.log(cekKaryawanAigen("akmal", "kang maen kertu", 5000000));
console.log(cekKaryawanAigen(null, "kang gali kubur", null));
console.log(cekKaryawanAigen("roni"));

function cekKaryawan(nama, jobDesk, salary) {
  if (nama || jobDesk || salary) {
    return "Anda karyawan"; //output kalau salah satu kondisi terpenuhi
  }
  return "Anda pengangguran"; //sebaliknya
}
console.log(cekKaryawan("akmal", "kang maen kertu", 5000000));
console.log(cekKaryawan(null, "kang gali kubur", null));
console.log(cekKaryawan("roni"));

function cekBPJS(nama, masaKerja, kepemilikanBpjs, cekGaji) {
  if (nama && masaKerja > 1 && kepemilikanBpjs == 1 && cekGaji < 2500000) {
    return "anda layak dapat bpjs";
  }
  return "gausa sok gamampu";
}
console.log(cekBPJS("akmal", 2, 1, 1000000));
console.log(cekBPJS("yuda", 0, 1, 1500000));
console.log(cekBPJS("andre", 5, 0, 10000000));
console.log(cekBPJS(5, 0, 10000000));
