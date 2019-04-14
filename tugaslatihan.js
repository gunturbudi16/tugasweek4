var characters =
  [
    { id: 720, name: 'Liebert, Anna', role: 'Main', anime: 'Monster' },
    { id: 721, name: 'Liebert, Johan', role: 'Main', anime: 'Monster' },
    { id: 722, name: 'Tenma, Kenzou', role: 'Main', anime: 'Monster' },
    { id: 723, name: 'Bernhardt, Hugo', role: 'Supporting', anime: 'Monster' },
    { id: 724, name: 'Elric, Edward', role: 'Main', anime: 'FMA' },
    { id: 725, name: 'Elric, Alphonse', role: 'Main', anime: 'FMA' },
    { id: 726, name: 'Wanijima, Agito', role: 'Main', anime: 'Air gear' }
  ]


    function animeReport(arr){
        var obj = {
            Role: {},
            Title: {}
        }

        for(var i = 0; i < arr.length; i++){//template
            if(obj.Role[arr[i].role] == undefined || obj.Title[arr[i].anime] == undefined){
                obj.Role[arr[i].role] = []
                obj.Title[arr[i].anime] = []
            }
        }

        for(var i = 0; i < arr.length; i++){//masukkan data
            obj.Role[arr[i].role].push(arr[i].name)
            obj.Title[arr[i].anime].push({
                id: arr[i].id,
                name: arr[i].name
            })
        }

        return JSON.stringify(obj,null,2)
    }
console.log(animeReport(characters))




// output 

//   {
//     Role: {
//       Main: ['Anna Liebert', 'Johan Liebert', 'Kenzou Tenma', 'Edward Elric', 'Alphonse Elric'],
//       Supporting: ['Hugo Bernhardt', 'Agito Wanijima']
//     },
//     Title: {
//       Monster: [
//         { id: 720, name: 'Liebert, Anna' },
//         { id: 721, name: 'Liebert, Johan' },
//         { id: 722, name: 'Tenma, Kenzou' },
//         { id: 723, name: 'Bernhardt, Hugo' }
//       ],
//       FMA: [
//         { id: 724, name: 'Elric, Edward' },
//         { id: 725, name: 'Elric, Alphonse' },
//       ],
//       "Air Gear": [
//         { id: 726, name: 'Wanijima, Agito' }
//       ]
//     }
//   }