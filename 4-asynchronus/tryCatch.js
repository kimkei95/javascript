/**tryCatch: untuk menangani error saat data gagal di proses*/

const pembagian = (numb1, numb2) => {
  try {
    if (numb2 === 0 || numb1 < numb2) {
      throw "gabisa dibagi 0 ";
    }
    return numb1 / numb2;
  } catch (error) {
    console.log("berotak dongo", error);
  }
};
console.log("success:", pembagian(10, 2));
console.log("failed:", pembagian(10, 0));
