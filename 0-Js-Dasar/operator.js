const a = 100;
const b = 170;

const add = a + b;
console.log("jumlah korupsi: ", add);
console.log("pengurangan: ", a - b);
console.log("perkalian: ", a * b);
console.log("pembagian: ", a / b);
console.log("modulus: ", a % b);
console.log("jumlah dan kali: ", (a + b) * b);
// operator perbandingan
console.log("=== equal===");
console.log(a == 100); //true
console.log(a == 20); //false

let sifat = "rajin";
console.log("=== not equal===");
console.log(sifat != "nakal"); //true
console.log(sifat != "Rajin"); //true

console.log("=== Strict equal==="); // sama dengan variable dan tipe datanya
console.log(a === 100); //true
console.log(a === "100"); //false

console.log("=== Strict not equal==="); // tidak sama dengan variable dan tipe datanya
console.log(a !== "100"); //true
console.log(a !== 100); //false

console.log("=== kurang/lebih dari  atau sama dengan ===");
console.log(a < 100); //false
console.log(a > 100); //false
console.log(a <= 100); //true
console.log(a >= 100); //true

//operator kondisional OR (true kalau ada salah satu nilai yang true)
console.log("true or true : ", true || true);
console.log("false or true : ", false || true);
console.log("false or false :", false || false);
console.log("false or true or false : ", false || true || false);
console.log("false or false : ", false || false || true || true || false);
console.log(true || false || true || false);

//operator kondisional and (false kalau ada salah satu nilai yang false)
console.log("true and true : ", true && true);
console.log("false and true : ", false && true);
console.log("false and false :", false && false);
console.log("false and true and false : ", false && true && false);
console.log("false and false : ", false && false && true && true && false);
console.log(true && false && true && false);
