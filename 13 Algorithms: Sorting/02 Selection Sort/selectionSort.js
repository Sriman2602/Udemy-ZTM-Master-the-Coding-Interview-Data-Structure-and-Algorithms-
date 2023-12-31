const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    //Code Here
    for (let i=0 ; i<array.length ; i++){
        min = i;
        var temp = array[i];
        for(let j=i+1; j<array.length; j++){
            if(array[min] > array[j]){
                min = j;
            }
        }
        array[i] = array[min];
        array[min] =temp;
    }
    return array;
}

console.log(selectionSort(numbers));
