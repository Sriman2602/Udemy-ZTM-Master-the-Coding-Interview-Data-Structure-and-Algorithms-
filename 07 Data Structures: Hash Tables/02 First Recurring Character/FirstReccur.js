//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
  var OBJ={};
  for(var i=0;i<input.length;i++){
    if(!OBJ[input[i]]){
      OBJ[input[i]]=true;
    }else{
      return input[i];
    }
  }
  return undefined;
}
let recur_num = firstRecurringCharacter([2,5,5,2,3,5,1,2,4]);
console.log(recur_num);

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
