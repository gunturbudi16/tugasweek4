// Release 1  => Statis
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