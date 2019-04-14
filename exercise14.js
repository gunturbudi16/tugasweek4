function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var result =[];
    for(var i=0; i<arrPenumpang.length; i++){
        var obj ={
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: 0
        }
        for(var j=0; j<rute.length; j++){
            if(rute[j]===obj.naikDari){
                var start =j;
            }
            if(rute[j]===obj.tujuan){
                var stop=j
            }
        }
        obj.bayar = Math.abs(start-stop)*2000
        result.push(obj)
    }
    return result
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]