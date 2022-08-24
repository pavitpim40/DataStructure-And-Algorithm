// #### 1
function mergeSortedArray(array1,array2) {
    if(!array1 || array1.length == 0 || !array2 || array2.length == 0)
          return "Invalid Value"
    // const array = array1.concat(array2)
    let map = {}
    for(let num of array1){
      if(num) map[num] = map[num] ? [...map[num],num] : [num];
    }
     for(let num of array2){
       if(num) map[num] = map[num] ? [...map[num],num] : [num];
    }
     return [].concat(...Object.values(map))
    let arr = []
  
  }
  
// #### 2
function mergeSortedArray2(array1,array2){
    if(!array1 || array1.length == 0 || !array2 || array2.length == 0)
          return "Invalid Value"
    const array = array1.concat(array2)
    let map = {}
      for(let num of array){
      if(num && map[num]) { 
          map[num].push(num)
      } else if (num) {
        map[num] = [num]
      }
    }
    let arr = []
      for (let key in map){
      arr = [...arr,...map[key]]
    }
   
    return arr
  }
  
// #### 3
function mergeSortedArray3(array1,array2){
    if(!array1 || array1.length == 0 || !array2 || array2.length == 0)
      return "Invalid argument"
   	return array1.concat(array2).sort((a,b)=> a-b)
  }

// #### 4
function mergeSortedArray4(array1,array2){
    if(!array1 || array1.length === 0)
        return 'Invalid Argument';
    if(!array2 || array2.lenght === 0)
        return array1;
  let i = 0;
  let j = 0;
  let array1Item = array1[0];
  let array2Item = array2[0];
  let mergeArray = []

  while(array1Item || array2Item){
    console.log(array1Item,array2Item) //?
    // ******* BEGIN : Validate Invalid Element ************* 
    if (array1Item && typeof array1Item !== 'number'){
      i++;
      array1Item =  array1[i]
      continue;
    }
     if (array2Item && typeof array2Item !== 'number'){
      j++;
      array2Item =  array1[j]
      continue;
    }
    // ******* END : Validate Invalid Element ************* 
    if(!array2Item ||  array1Item < array2Item){
      mergeArray.push(array1Item)
      i++;
      array1Item =  array1[i]
    } else {
      mergeArray.push(array2Item)
      j++;
      array2Item = array2[j]
    }
  }
  
  return mergeArray
}

console.log(mergeSortedArray4([1,2,2,7],[4,50,72,79,89,null,null,5]))
console.log(mergeSortedArray4([1,2,2,92,100],[4,72])) //?

//   mergeSortedArray([1,92,null,2,4],[1001,4,692])