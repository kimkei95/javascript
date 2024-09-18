/** buat perintah untuk membaca file JSON bernama employee.json
 * yang berisi data array of object dan tampilin hanya nama karyawan
 * menggunakan readfile
 */

const fs = require("fs");
fs.readFile("./employee.json", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const employee = JSON.parse(data);
  employee.map((item) => {
    console.log(item.nama);
  });
});

/**buat perintah untuk nambahin minimal 1 data json ke file employee.json
gunakan readfile dan writefile untuk mereplace data*/
const employee = require("./employee.json");

let user = {
  id: 5,
  nama: "soeharto",
  age: 50,
  jobDesk: [{ title: "diktator", salary: 20000000 }],
  hobby: ["mencari penghianat negara"],
};
employee.push(user);
fs.writeFile("users.json", JSON.stringify(employee), (err) => {
  // Checking for errors
  if (err) throw err;

  console.log("Done writing");
});

/**buat perintah untuk mencari karyawan yang usianya diatas atau sama dengan 26
 * dan simpan datanya kedalam file yang bernama karyawan_tuwir.json
 * gunakan readfile dan write file untuk mereplace data* */
fs.readFile("./employee.json", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("read file: ", data);

  const employee = JSON.parse(data);
  let karyawanTuwir = employee.filter((item) => item.age >= 26);

  fs.writeFile("karyawan_tuwir.json", JSON.stringify(karyawanTuwir), (err) => {
    // Checking for errors
    if (err) throw err;
  });
});

/***buat perintah untuk menghapus karyawan dengan id=1 dari data employee.json
 * lalu simpan perubahannya kedalam file deleted_data.json
 * gunakan readfile dan writefile untuk replace data*/
fs.readFile("./employee.json", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("read file: ", data);
  const employee = JSON.parse(data);
  let KaryawanModar = employee.filter((item) => item.id > 1);

  fs.writeFile(
    "deleted_karyawan.json",
    JSON.stringify(KaryawanModar),
    (err) => {
      if (err) throw err;
    }
  );
});
