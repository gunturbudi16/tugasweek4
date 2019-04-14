function shoppingTime(memberId, money) {
    // you can only write your code here!
    if(memberId==="" || memberId === undefined){
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }else if(money<50000){
        return "Mohon maaf, uang tidak cukup"
    }
    var items =[
        {
            name : "Sepatu Stacattu",
            price : 1500000
        },
        {
            name : "Baju Zoro",
            price : 500000
        },
        {
            name : "Baju H&N",
            price : 250000
        },
        {
            name : "Sweater Uniklooh",
            price : 175000
        },
        {
            name : "Casing Handphone",
            price : 50000
        },
    ]
        //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
    var changeMoney=money
    var receipt ={
        member:memberId,
        money:money,
        listPurchased:[],
        changeMoney:changeMoney,
    }
    for(var i=0;i<items.length;i++){
        if(receipt.money >= items[i].price){
            receipt.listPurchased.push(items[i].name)
            changeMoney -= items[i].price
        }
    }
    return receipt
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja