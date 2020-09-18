let arr = [1,2,3,4,8];
let arr2 = [];
let x = 5;
function insertShiftArray(x) {
  for(let i = 0; i <= arr.length ; i++){
    if(arr[i] < x ){
      arr2[i] = arr[i];
    } else if ( arr[i] == x){
      arr2[i] = x;
    }
    else {
      for (let y = 0 ;y <= (arr.length - i); y++){
        arr2[i] = arr[i];
      }
    }
  } 
  return arr2;
}
insertShiftArray();