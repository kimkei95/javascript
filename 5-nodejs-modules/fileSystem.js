//fileSystem: modul untuk berinteraksi dengan file di javaScript

const fs = require("fs");

//menulis file menggunakan .writeFile("filepath", "isi file",encoding, return)
fs.writeFile(
  "./textFile.txt",
  "Hallo, nama saya mulyono. saya adalah dark system negara",
  "utf8",
  (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("file berhasil disimpan");
  }
);

//.readFile("filepath",encoding,return): membaca data dari sebuah file secara asynchronous

fs.readFile("./textFile.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("read file: ", data);
});

//.readFileSync: ngebaca file seacara synchronus
try {
  const data = fs.readFileSync("./textFile.txt", "utf8");
} catch (error) {
  console.log(error);
}

//.appendFile("filepath", "isi data",encoding,return)

fs.appendFile(
  "./textFile.txt",
  "\n saya adalah ayahnya fufufafa",
  "utf8",
  (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("konten berhasil di tambahkan");
  }
);
//.readFile("filepath",encoding,return): membaca data dari sebuah file secara asynchronous

fs.readFile("./textFile.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("read file: ", data);
});

//.readFileSync: ngebaca file seacara synchronus
try {
  const data = fs.readFileSync("./textFile.txt", "utf8");
} catch (error) {
  console.log(error);
}
//.unlink("filepath",return): buat ngapus file
//buat file dummy bernama delete.txt dalam direktori /folder 5-node-js

fs.unlink("./delete.txt", (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("data berhasil dihapus");
});
