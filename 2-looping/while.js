/**while: pengulangan yang akan terus dieksekusi selama kondisinya true  */

let test = 1; //varaiable inisiasi kondisi kapan dimulainya while
while (test < 5) {
  //kondisi
  console.log("while loop ke- ", test);
  test++; // increment atau nambahin 1 ke nilai test
}

let password = "1213456";
while (password.length < 8) {
  console.log("password tidak valid");
  password++;
}

// cari bil prima

let n = 20; // nyari bilangan prima dari 1-20

let i = 2; // inisiasi nilai i dengan 2 ataua bil prima yang terkecil

while (i <= n) {
  // selama nilai i kurang dari atau sama dengan n, maka bakal eksekusi blok ini
  let isPrime = true;
  let j = 2;

  while (j < i) {
    // selama j kurang dari i, maka eksekusi blok ini
    if (i % j === 0) {
      // jika i bisa dibagi j maka i bukan prima
      isPrime = false; // rubah is prime menjadi false
      break; //eksekusi kelar, keluar dari while loop
    }
    j++;
  }
  if (isPrime) {
    // jika is prime masi bernilai true, maka i adalah bilangan prima
    console.log("bilangan prima: ", i); // tampilin nilai i
  }
  i++;
}
