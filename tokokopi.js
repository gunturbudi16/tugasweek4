/*
=============
Toko Kopinyaa
=============

[INSTRUCTIONS]
Toko Kopinyaa adalah kedai kopi yang melayani pelanggannya sesuai menu andalan yang dimilikinya.
Adapun menu yang tersedia di kedai kopinyaa adalah:
Coldbrew, Coffeenyaa, Javachino

Menu di atas harus menggunakan recipe andalan rahasiannya, sebagai berikut (ssst ini rahasia ya):
<menu: recipe1, recipe2, harga>
- Coldbrew: 2 sugar, 2 kopi, 30000
- Coffeenyaa: 1 sugar, 3 kopi, 50000
- Javachino: 3 sugar, 1 kopi, 40000

setiap harinya, tokoKopinya selalu re-stock bahannya:
30 sugar dan 30 kopi

Kita diminta untuk membuat aplikasi laporan penjualannya setiap harinya

Function akan menerima array yang berisikan object pembeli (waktu pembelian, menu yang ingin dibeli dan jumlah menu yang dibelinya). Jika stock recipe kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli menu tersebut.

Function profitCalculator akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek menu dari toko Kopinyaa: 
info nama menu, waktu pembelian, total profit, total berapa kopi yang dibeli

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!
*/


// // Release 1  => Statis
// function profitCalculator1(buyer) {
//   // stock sugar and kopi
//   var stock = [30, 30]

//   // list menu, sugar, kopi, harga
//   var listMenu = [
//     ['Coldbrew', 2, 2, 30000],
//     ['Coffeenyaa', 1, 3, 50000],
//     ['Javachino', 3, 1, 40000]
//   ];

//   if (buyer.length === 0) {
//     return [];
//   }

//   var resultZ =
//     [{ menu: 'Coldbrew', time: [], profit: 0, total: 0 },
//     { menu: 'Coffeenyaa', time: [], profit: 0, total: 0 },
//     { menu: 'Javachino', time: [], profit: 0, total: 0 }]

//   // Karena INPUT sudah urut, maka boleh
//   for (var i = 0; i < resultZ.length; i++) {
//     for (var j = 0; j < buyer.length; j++) {
//       if (resultZ[i].menu === buyer[j].menu && stock[0] >= listMenu[i][1] * buyer[j].amount && stock[1] >= listMenu[i][2] * buyer[j].amount) {
//         resultZ[i].time.push(buyer[j].waktu);
//         resultZ[i].profit += listMenu[i][3] * buyer[j].amount;
//         resultZ[i].total += buyer[j].amount;
//         // Update Stock;
//         stock[0] -= listMenu[i][1] * buyer[j].amount;
//         stock[1] -= listMenu[i][2] * buyer[j].amount;
//       }
//     }
//   }

//   return resultZ;
// }


// Release 2  => Dinamis
function profitCalculator(buyer) {
  // stock sugar and kopi
  var stock = [30, 30]

  // list menu, sugar, kopi, harga
  var listMenu = [
    ['Coldbrew', 2, 2, 30000],
    ['Coffeenyaa', 1, 3, 50000],
    ['Javachino', 3, 1, 40000]
  ];
  

  if (buyer.length === 0) {
    return [];
  }

  var resultZ = []
  // Karena INPUT sudah urut, maka boleh
  for (var i = 0; i < listMenu.length; i++) {
    var temp = { menu: listMenu[i][0], time: [], profit: 0, total: 0 }
    for (var j = 0; j < buyer.length; j++) {
      if (listMenu[i][0] === buyer[j].menu && stock[0] >= buyer[j].amount * listMenu[i][1] && stock[1] >= buyer[j].amount * listMenu[i][2]) {
        temp.time.push(buyer[j].waktu);
        temp.profit += buyer[j].amount * listMenu[i][3];
        temp.total+=buyer[j].amount;
        stock[0] -= listMenu[i][1] * buyer[j].amount;
        stock[1] -= listMenu[i][2] * buyer[j].amount;
      }
    }
    resultZ.push(temp);
  }

  return resultZ;
}

// TEST CASES
console.log(profitCalculator([{ waktu: '08:00', menu: 'Coldbrew', amount: 2 }, { waktu: '09:00', menu: 'Coffeenyaa', amount: 5 }, { waktu: '15:00', menu: 'Javachino', amount: 2 }]));
// [ { menu: 'Coldbrew', time: [ '08:00' ], profit: 60000, total: 2 },
//   { menu: 'Coffeenyaa', time: [ '09:00' ], profit: 250000, total: 5 },
//   { menu: 'Javachino', time: [ '15:00' ], profit: 80000, total: 2 } ]

console.log();
console.log(profitCalculator([{ waktu: '08:00', menu: 'Coldbrew', amount: 3 }, { waktu: '09:00', menu: 'Coldbrew', amount: 5 }, { waktu: '10;00', menu: 'Coffeenyaa', amount: 1 }, { waktu: '12:00', menu: 'Coffeenyaa', amount: 10 }, { waktu: '15:00', menu: 'Javachino', amount: 1 }]));
// [ { menu: 'Coldbrew', time: [ '08:00', '09:00' ], profit: 240000, total: 8 },
//   { menu: 'Coffeenyaa', time: [ '10;00' ], profit: 50000, total: 1 },
//   { menu: 'Javachino', time: [ '15:00' ], profit: 40000, total: 1 } ]

console.log();
console.log(profitCalculator([{ waktu: '14:00', menu: 'Coffeenyaa', amount: 100 }]));
// [ { menu: 'Coldbrew', time: [], profit: 0, total: 0 },
//   { menu: 'Coffeenyaa', time: [], profit: 0, total: 0 },
//   { menu: 'Javachino', time: [], profit: 0, total: 0 } ]

console.log();
console.log(profitCalculator([]));
//[]