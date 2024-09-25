/** hitung luas lingkaran method pi*/
let jariJari = Math.random();
console.log("luas lingkaran: ", Math.PI * jariJari * jariJari);
/**cari nilai tertinggi dari 5 siswa*/

let nilaiSiswa = Math.max(80, 100, 60, 95, 78);
console.log("nilai tertinggi:", nilaiSiswa);

/*** BUAT PERHITUNGAN HARGA DISKON DIBULETIN KEBAWAH*/

let hargaBarang = 98000;
let persentaseDiskon = 30;

// Hitung total harga setelah diskon
const totalHarga = hargaBarang - (hargaBarang * persentaseDiskon) / 100;

// Fungsi untuk membulatkan ke kelipatan terdekat ke bawah
function floorToNearest(value, multiple) {
  return Math.floor(value / multiple) * multiple;
}

// Membulatkan ke kelipatan 1000 ke bawah
const totalHargaDibulatkan = floorToNearest(totalHarga, 1000);

console.log(
  "Total harga setelah diskon (dibulatkan ke bawah): ",
  totalHargaDibulatkan
);

// cari selisih gaji karyawana tertinggi dan terendah
const employee = [
  {
    id: 1,
    nama: "Danu",
    age: 25,
    jobDesk: [{ title: "frontend", salary: 12000000 }],
    hobby: ["membaca", "menulis"],
  },
  {
    id: 1,
    nama: "Dinda",
    age: 26,
    jobDesk: [{ title: "frontend", salary: 2000000 }],
    hobby: ["membaca", "menulis"],
  },
  {
    id: 1,
    nama: "Fatma",
    age: 27,
    jobDesk: [{ title: "backend", salary: 3000000 }],
    hobby: ["membaca"],
  },
  {
    id: 1,
    nama: "Akmal",
    age: 28,
    jobDesk: [{ title: "backend", salary: 4000000 }],
    hobby: ["membaca"],
  },
];
// Mengumpulkan semua gaji dari employee
const salaries = employee.map((emp) => emp.jobDesk[0].salary);

// Menemukan gaji terendah dan tertinggi
const minSalary = Math.min(...salaries);
const maxSalary = Math.max(...salaries);

console.log("gaji terkecil: ", minSalary);
console.log("gaji terbesarL ", maxSalary);

// Menghitung selisih antara gaji tertinggi dan terendah
const salaryDifference = maxSalary - minSalary;

console.log(`Selisih gaji terendah dan tertinggi: ${salaryDifference}`);
