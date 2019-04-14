function sortByCharacter (text) {
    // return text.split("").sort().join('');
      //var tampung = text.split('');
      var tampung = []
      for (var i = 0; i < text.length; i++) {
      //    for (var j = 0; j < text[i].length; j++) {
             // if(text[i]!==""){  
                  tampung.push(text[i])
        //      }
          //}
      }
      for(i=0;i<tampung.length-1;i++){//sort manual
        for(j=0;j<tampung.length-1-i;j++){
        //   var count = j + 1
          if(tampung[j] > tampung[j+1]){//h>e
            var temp = tampung[j]//temp = h
            tampung[j] = tampung[j+1]//h=e
            tampung[j+1] = temp//e=h
          }
        }
        // console.log
      }
      var temp=""
      //var array=[];
      for(var i=0;i<tampung.length;i++){
        temp+=tampung[i]
      }
      //array.push(temp);
      return temp
    };
    
    //TEST CASES
    console.log(sortByCharacter('hello')); // 'ehllo'
    console.log(sortByCharacter('truncate')); // 'acenrttu'
    console.log(sortByCharacter('developer')); // 'deeeloprv'
    console.log(sortByCharacter('software')); // 'aeforstw'
    console.log(sortByCharacter('aegis')); // 'aegis'
    