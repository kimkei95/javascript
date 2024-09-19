const carProducts = [
  {
    id: 1,
    name: "ESEMKA SUV 4x4 Hybrid",
    price: null,
    tag: ["Produk Terlaris"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertalite",
      },
      {
        color: "silver",
        transmission: "manual",
        type: "hybrid",
        fuelType: "pertalite",
      },
    ],
    isPreorder: true,
  },
  {
    id: 2,
    name: "BAGATATA Hyper Car V12",
    price: 370000000000,
    tag: ["Produk Terlaris", "Promo"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "engine",
        fuelType: "premium",
      },
      {
        color: "white",
        transmission: "manual",
        type: "engine",
        fuelType: "premium",
      },
    ],
    isPreorder: false,
  },
  {
    id: 3,
    name: "FIRIRIRI F8 Hyper Car Limited Edition",
    price: 4400000000,
    tag: ["Produk Terbaru", "Promo"],
    variant: [
      {
        color: "red",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertalite",
      },
      {
        color: "white",
        transmission: "manual",
        type: "engine",
        fuelType: "pertalite",
      },
    ],
    isPreorder: false,
  },
  {
    id: 4,
    name: "LEMBERGEMBER Revuelto Supercar V12 Plug-In Hybrid",
    price: 7000000000,
    tag: ["Produk Terbaru"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "blue",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "green",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "red",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
    ],
    isPreorder: false,
  },
  {
    id: 5,
    name: "TOYOTA Land Cruiser Prado 4x4",
    price: 250000000,
    tag: ["Produk Terlaris"],
    variant: [
      {
        color: "matte black",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
      {
        color: "army",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
    ],
    isPreorder: false,
  },
  {
    id: 6,
    name: "Wuling YangWang U9 EV",
    price: null,
    tag: ["Produk Terbaru"],
    variant: [
      {
        color: "matte black",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
      {
        color: "navy",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
    ],
    isPreorder: true,
  },
  {
    id: 7,
    name: "Beat Esp 110 Second",
    price: 7500000,
    tag: ["Produk Terlaris", "Bekas"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "navy",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "red",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
    ],
    isPreorder: false,
  },
];

let n = 5;
let string = "";

//1.
console.log("no.1");

const hargaMobil = carProducts.reduce((accumulator, currentValue) =>
  accumulator.price > currentValue.price ? accumulator : currentValue
);
console.log("harga tertinggi: ", hargaMobil);

console.log("\n");

//2.
console.log("no.2");

const cariPromo = carProducts.filter((item) => item.tag.includes("Promo"));
console.log(cariPromo);

//3.
console.log("no. 3");
carProducts.sort((a, b) => b.price - a.price);
console.log("urutan termahal: ", carProducts);
console.log("\n");

//4.
console.log("no.4 ");

function groupCarsByTypeAndShowNames(carProducts) {
  const groupedCars = {
    engine: [],
    hybrid: [],
    electric: [],
  };

  for (const car of carProducts) {
    for (const variant of car.variant) {
      if (variant.type === "engine") {
        groupedCars.engine.push(car.name);
        break;
      } else if (variant.type === "hybrid") {
        groupedCars.hybrid.push(car.name);
        break;
      } else if (variant.type === "electric") {
        groupedCars.electric.push(car.name);
        break;
      }
    }
  }

  return groupedCars;
}

const groupedCarNames = groupCarsByTypeAndShowNames(carProducts);

console.log("Mobil dengan tipe Engine:", groupedCarNames.engine);
console.log("Mobil dengan tipe Hybrid:", groupedCarNames.hybrid);
console.log("Mobil dengan tipe Electric:", groupedCarNames.electric);

//5.
console.log("no.5");
//yang ini saya nyerah soalnya pas make promise malah bentrok sama yang 6 jadi 22nya ga bisa
async function hargaMobilBekas() {
  try {
    const data = await fs.readFile("./carProducts.json", "utf8");
    const carProducts = JSON.parse(data);
    carProducts.sort((a, b) => b.price - a.price);
    await fs.writeFile(
      "carProducts.json",
      JSON.stringify(carProducts, null, 2)
    );
    console.log("data berhasil disimpan");
  } catch (error) {
    console.log("ror erorrr", error);
  }
}
hargaMobilBekas();
//6.
console.log("no. 6");
console.log("bisa cek Json di addNewCarProducts");
console.log("\n");

const fs = require("fs");
const mobils = require("./carProducts.json");
let mobil = {
  id: 8,
  nama: "Jeep Rubicon hasil korupsi mario dandy",
  price: 90000000000,
  tag: ["Produk terlaris", "Bekas", "sitaan KPK"],
  variant: [
    {
      color: "black",
      transmission: "automatic",
      type: "engine",
      fuelType: "pertamax turbo",
    },
    {
      color: "white",
      transmission: "manual",
      type: "engine",
      fuelType: "pertamax turbo",
    },
    {
      color: "red",
      transmission: "automatic",
      type: "engine",
      fuelType: "pertamax turbo",
    },
  ],
  isPreorder: true,
};

mobils.push(mobil);
fs.writeFile("addNewCarProducts.json", JSON.stringify(mobils), (err) => {
  if (err) throw err;
  console.log("done writing");
});
//7.
console.log("no.7");

const hargaMobil2 = carProducts
  .map((cr) => cr.price)
  .filter((price) => price !== null);

if (hargaMobil2.length > 0) {
  const minMobil1 = Math.min(...hargaMobil2);
  const maxMobil1 = Math.max(...hargaMobil2);
  console.log("harga terendah: ", minMobil1);
  console.log("harga tertinggi: ", maxMobil1);
  const perbedaanHarga = maxMobil1 - minMobil1;
  console.log(`selisihnya: ${perbedaanHarga}`);
} else {
  console.log("Tidak ada data harga yang valid.");
}

console.log("\n");

//8
console.log("no.8");

function findCarWithMostColors(carProducts) {
  let carWithMostColors = null;
  let maxColors = 0;

  for (const car of carProducts) {
    const numberOfColors = car.variant.length;

    if (numberOfColors > maxColors) {
      maxColors = numberOfColors;
      carWithMostColors = car;
    }
  }

  return carWithMostColors;
}

const carWithMostColors = findCarWithMostColors(carProducts);

console.log("Mobil dengan varian warna terbanyak:", carWithMostColors);

//9
console.log("no 9.");
const preOrder = carProducts.filter((obj) => obj.isPreorder);
console.log(preOrder);

//10.
console.log("no.10");

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
