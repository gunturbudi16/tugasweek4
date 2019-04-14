// function ubahHuruf(kata) {
//     // you can only write your code here!
//     var abjad="abcdefghijklmnopqrstuvwxyz"
//     var kataa=""
//     for(var i=0;i<kata.length;i++){
//         for(var j=0;j<abjad.length;j++){
//             if(kata[i]==abjad[j]){
//                 kataa+=abjad[j+1];
//             }
//         }
//     }
//     return kataa;
//   }
  
//   // TEST CASES
//   console.log(ubahHuruf('wow')); // xpx
//   console.log(ubahHuruf('developer')); // efwfmpqfs
//   console.log(ubahHuruf('javascript')); // kbwbtdsjqu
//   console.log(ubahHuruf('keren')); // lfsfo
//   console.log(ubahHuruf('semangat')); // tfnbohbu
function wordToArrayReverse(str) {
    // your code here 
    var array=[]
    var string=""
    for(var i=0;i<str.length;i++){
        string+=str[i]
        if(str[i]===" "){
            array.push(string)
            string=""
        }
        if(i===str.length-1){
            array.push(string);
        }
    }
    console.log(array)
    var strin=""
    for(var j=array.length-1;j>=0;j--){
        strin+=array[j]
    }
    console.log(strin);
}

wordToArrayReverse("Hello my name is Dimas")
//["Dimas","is","name","my","Hello"]

wordToArrayReverse("Lorem ipsum sit dolor amet")
//["amet","dolor","sit","ipsum","Lorem"]