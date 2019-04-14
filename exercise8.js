function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var big="ABCDEFGHIJKLMNOPQRSTUVWXYZ "
    var small="abcdefghijklmnopqrstuvwxyz "
    var temp =''
    for(var i=0;i<kalimat.length;i++){
        var flag =true;
        for(var j=0;j<big.length;j++){
            if(kalimat[i]===big[j]){
                temp+=big[j]
                flag=false
            }else if(kalimat[i]===small[j]){
                temp+=small[j];
                flag=false
            }
        }
        if(flag){
            temp+=kalimat[i];
        }
    }
    return temp;
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"