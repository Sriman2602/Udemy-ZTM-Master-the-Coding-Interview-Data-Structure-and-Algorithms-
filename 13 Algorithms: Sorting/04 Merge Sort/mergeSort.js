const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  var left = [];
  var right = [];
  // Split Array in into right and left
  for(var i=0;i<array.length;i++){
      if(i<array.length/2){
          left.push(array[i]);
      }
      else{
          right.push(array[i]);
      }
  }
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
    var answer =[];
    let i = 0,j = 0;
    while(i<left.length || j<right.length){
       if(i<left.length && j<right.length){
           if(left[i]<right[j]){
               answer.push(left[i]);
               i++;
           } else {
               answer.push(right[j]);
               j++; 
           }
       }
       else if(i<left.length){
           answer.push(left[i]);
           i++;
      }
      else if(j<right.length){
          answer.push(right[j]);
          j++;
      }
    }
  return answer;
}


const answer = mergeSort(numbers);
console.log(answer);
