const twoSum = (nums,target) => {
    let hashMap = {}
    
    for(let i = 0; i < nums.length ; i++){
     if(hashMap[nums[i]]>= 0){
        return [hashMap[nums[i]],i]
      }
      hashMap[target-nums[i]] = i;  
    }
  }
  
  console.log(twoSum([2,11,11,7],18))