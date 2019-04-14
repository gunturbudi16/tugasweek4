function changeMe(arr) {
    // you can only write your code here!
    var hasil=[]
    for(var i=0;i<arr.length;i++){
        var result={
            firstName : arr[i][0],
            lastName : arr[i][1],
            gender : arr[i][2],
            age : 2019-arr[i][3],
        }
        if(arr[i][3]===undefined || arr[i][3]>2019 || arr[i][3]<0){
            result.age ="Invalid Birth Year"
        }
        hasil.push(result);
    }return hasil
  }
  
  // TEST CASES
  console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""