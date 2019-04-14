function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var arr=[]
    var dpm=""
    for(var i=0 ; i<=angka; i++){
        for(var j=0; j<=angka; j++){
            if(i*j===angka){
                dpm+=i+"X"+j
                arr.push(dpm.length-1)
                dpm=""
            }
        }
    }
    //console.log(arr)
    var result=arr[0]
    for(var k=0; k<arr.length;k++){
        if(arr[k]<result){
            result=arr[k]
        }
    }
    return result
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2