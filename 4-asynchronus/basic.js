/**
 * bahasa pemrograman bisa di eksekusi dengan dua cara, synchronus dan asyacnchronous
 * synchronus: kode akan di eksekusi secara terurut dari atas sampai bawah
 * asynchronus: kebalikannya, kode ga harus nunggu yang laen dieksekusi
 melainkan bisa dieksekusi secara langsung atau sesuai waktu yang di tentukan.
 * */

console.log("============eksekusi pertama============");
//setTimeout: untuk menunda eksekusi kode
/*setTimeout(fungsi/kode,waktu(milisecond))*/
function printLog() {
  console.log("=== eksekusi kedua===");
}
setTimeout(printLog, 3000);
console.log("===eksekusi ketiga===");
