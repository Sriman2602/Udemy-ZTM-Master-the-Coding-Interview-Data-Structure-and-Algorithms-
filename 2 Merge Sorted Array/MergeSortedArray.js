function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  var i=0;
  var j=0;
  while( i < arr1.length && j < arr2.length) {
      if(arr1[i] < arr2[j] || j == arr2.length) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
  }
  return mergedArray;
};


let output = mergeSortedArrays([0,3,4,31], [4,6,30]);
console.log(output);
