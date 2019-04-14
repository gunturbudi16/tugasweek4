var pokemonList2 = [
    {
      name: 'Beedrill',
      status: { attack: 72, hp: 73, defense: 75 },
      type: 'Flying'
    },
    {
      name: 'Gliscor',
      status: { attack: 99, hp: 95, defense: 85 },
      type: 'Flying'
    },
    {
      name: 'Caterpie',
      status: { attack: 30, hp: 45, defense: 55 },
      type: 'Bug'
    }
  ]
  
  function gottaGroupEmAll(list) {
    var result = []
    var temp = {}
    for(var i = 0; i <= pokemonList2.length-1; i++) {
        if(temp[pokemonList2[i].type] === undefined) {
        temp[pokemonList2[i].type] = {
            type: pokemonList2[i].type,
            pokemonList: [],
            highestAttack: {
                name: "",
                attack: 0
            },
            bestStatus: {
                name: "",
                overallStat: 0
            }
        }
        var output = temp[pokemonList2[i].type]
        result.push(output)
       
        }
    }
    for(var i = 0; i <= pokemonList2.length-1; i++) {
        for(var j = 0; j <= result.length-1; j++) {
            if(pokemonList2[i].type === result[j].type) {
                result[j].pokemonList.push(pokemonList2[i].name)
                if(pokemonList2[i].status.attack > result[j].highestAttack.attack) {
                    result[j].highestAttack.attack = pokemonList2[i].status.attack
                    result[j].highestAttack.name = pokemonList2[i].name
                }
                var overallStat = pokemonList2[i].status.attack + pokemonList2[i].status.hp + pokemonList2[i].status.defense
                if( overallStat > result[j].bestStatus.overallStat) {
                    result[j].bestStatus.overallStat = overallStat
                    result[j].bestStatus.name = pokemonList2[i].name
                }
               
            }
          
        }
    }
    console.log(result)
  }
  console.log(gottaGroupEmAll(pokemonList2))
  
  // //output: 
  // // [{
  // //   type: 'Flying',
  // //   pokemonList: ['Beedrill', 'Gliscor'],
  // //   highestAttack: { name: 'Beedrill', attack: 72 },
  // //   bestStatus: { name: 'Gliscor', overallStat: 250 } //overall stat di dapat dari menjumlahkan attack hp dan defense pokemon
  // // },
  // // {
  // //   type: 'Bug',
  // //   pokemonList: ['Caterpie'],
  // //   highestAttack: { name: 'Caterpie', attack: 30 },
  // //   bestStatus: { name: 'Caterpie', overallStat: 130 }
  // // }]