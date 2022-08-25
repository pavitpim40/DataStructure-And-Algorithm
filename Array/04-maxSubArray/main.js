// Sol1 : O(n^2) -- BRUTE FORCE
const maxSubArray = function(nums) {
    let sum = 0;
  	let max = nums[0];
  
  	for(let i = 0 ; i < nums.length ; i++){
			sum = nums[i]
      if(sum > max){
        max = sum;
      }
      for(let j = i + 1; j < nums.length; j++){
        sum += nums[j]
        if(sum > max){
          max = sum;
        }
      }
    }
  return max;
};

// O(n) Kadane's Algorithm
const maxSubArray2 = function (nums){
  let max = -Infinity
  let iterateMax =  0
  for (let item of nums){
    
      iterateMax = iterateMax + item > item ? iterateMax + item: item
    	max = iterateMax > max ? iterateMax : max
  }
  return max
}

// O(n)
const maxSubArray3 = function (nums){
    let max= -Infinity;
     let min= 0;
     let sum=0;
         for(let i=0;i<nums.length;i++){
             sum+=nums[i];  // -2 :: -1
             max=Math.max(max,sum-min); // max(-Infinity,-2) => -2 :: max(-2,1)
             min=Math.min(min,sum); // min(0,2) => -2
         }
       return max;
 }

//  maxSubArray([-2,1,-3,4,-1,2,1,-5,4])