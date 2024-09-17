/**for loop: mirip while, sama sama perulangan
 * tapi for dipake kalo udah tau kapan perulangan tersebut harus diberentikan*/

/** let i =0 = inisiasi nilai awal perulangan dengan nilai 0
 * i<5 = kondisi yang nentuin kapan perulangan akan berenti dalam kasus ini
 * i++ = increment untuk berentiin looping*/
for (let i = 0; i < 5; i++) {
  console.log("looping ke -", i);
}

let array = [1, 2, 3];
let tambah = 0;
let kali = 2;
for (let i = 0; i < array.length; i++) {
  tambah += array[i];
  kali *= array[i];
}
console.log("tambah: ", tambah);
console.log("kali: ", kali);
