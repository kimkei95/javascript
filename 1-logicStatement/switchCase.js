/** switch case: logic untuk memilih salah satu dari kondisi yang sudah di tentukan*/

let remoteButton = 4; //variable yang nilainya akan dikirim ke parameter switch case

switch (
  remoteButton // switch case dgn parameter
) {
  case 1:
    console.log("turn on"); //kondisi yang akan di eksekusi
    break; //eksekusi logic jika terpenuhi
  case 2:
    console.log("turn off");
    break;
  case 3:
    console.log("volume up");
    break;
  case 4:
    console.log("volume down");
    break;
  default:
    console.log("input tidak valid"); // kondisi jika semua kondisi diatas tidak terpenuhi
    break;
}
