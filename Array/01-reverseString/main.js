// #### 1
function reverse(str){
	const strArr = str.split("")
  let tmp,mirrorIdx;
  for (let i = 0; i < strArr.length/2; i++){
    mirrorIdx = strArr.length-1-i;
    tmp = strArr[i];
    strArr[i] = strArr[mirrorIdx];
    strArr[mirrorIdx] = tmp;
  }
  return strArr.join("")
}

// #### 2
function reverse2(str){
  if(!str || str.length < 2 || typeof str != 'string')
    	return "Invalid Input";
  const backwards = new Array(str.length)
  let mirrorIdx;
  for(let i = 0; i < str.length/2; i++){
    mirrorIdx = str.length-1-i
    backwards[i] = str[mirrorIdx];
    backwards[mirrorIdx] = str[i];
  }
return backwards.join("");
}

// ##### 3
const reverse3 = (str) => str.split("").reverse().join("")
// console.log(reverse("TIVAP EMAN SI YM IH"));