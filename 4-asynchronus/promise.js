/** promise: objek yang mewakili hasil dari operasi async*/

function getdataFromServer() {
  return new Promise(function (resolve, reject) {
    let data = [1, 2, 3, 4, 5];
    resolve(data);
  });
}

getdataFromServer()
  //.then: untuk menangani hasil ketika promise terpenuhi
  //function(data): fungsi yang dieksekusi dengan nilai yang diberikan dari resolve ketika promise terpenuhi
  .then(function (data) {
    console.log("data yang diterima: ", data);
  })
  //.catch: untuk error handling
  .catch(function (error) {
    console.log("kesalahan berpikir", error);
  });
getdataFromServer();

//memanggil beberapa data atau api sekaligus

console.log("=== paralel promise ===");
//data pertama

function getFirstData() {
  return new Promise((resolve, reject) => {
    resolve("data ke 1");
  });
}
//data kedua
function getSecondData() {
  return new Promise((resolve, reject) => {
    resolve("data ke 2");
  });
}

//ambil data secara paralel
const getDataInParalel = () => {
  return Promise.all([getFirstData(), getSecondData()]);
};

//jalanin fungsi getDataInParalel

getDataInParalel()
  .then((data) => {
    console.log("data:", data);
  })
  .catch((error) => {
    console.log("error: ", error);
  });
getDataInParalel();
