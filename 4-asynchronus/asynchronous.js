/** async biasa dipakai untuk memanggil data atau API */
function getDataFromServer() {
  //promise: objek yang mewakili hasil dari operasi asynchronous
  return new Promise(function (resolve, reject) {
    let data = { id: 1, name: "akmal", job: "maen kertu" };
    if (data) {
      resolve(data);
    } else {
      reject("data gak ada");
    }
  });
}
//async: dipake untuk membuat atau menandai kalo fungsi ini dijalanin secara asynchronous
async function fetchData() {
  try {
    //await: kata kunci dalam async buat nunggu hasil dari sebuah promise
    const getData = await getDataFromServer();
    console.log("data yangditerima: ", getData);
  } catch (error) {
    console.log("terjadi kesalahan saat mengambil data", error);
  }
}
fetchData();
