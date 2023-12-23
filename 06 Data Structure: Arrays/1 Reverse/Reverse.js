var str = "Hi, My name is Sriman2602";

function reversestr(str){
    var char_array = [];
    for(var i=0;i<str.length;i++){
        char_array.push(str[i]);
    }
    for(i=0;i<char_array.length/2;i++){
        var temp = char_array[i];
        char_array[i] = char_array[str.length-i];
        char_array[str.length-i] = temp;
    }
    return char_array.join('');
}

var rev_str = reversestr(str);
console.log(rev_str);
