console.log(".Reducer")
const arrey1 = [1, 2, 3, 4, 5, 6, 7, 8]

const result1 = arrey1.reduce((el1, el2)=> {
  return el1 + el2
}, 0)// ноль это значение, в которое будет el2
console.log(result1)
 
const arrey2 = [
  { id: '123', name: 'John' },
  { id: '345', name: 'Anna' },
  { id: '567', name: 'Kate' },
  { id: '789', name: 'Jane' }
]

arrey2.splice(1,1)

const result2 = arrey2.reduce((el1, obj)=>{
  
  return{
    
    ...el1, [obj.id]: obj.name, // копирование оператором spread 
  }

}, {id: '123', name: 'John', })// замыкание на объекте
console.log(result2)










// The maximum sum value of ranges -- Challenge version
const maxsumArrayEl=(arr,ranges)=>{

  const sumFrom0toN =[];

  for(let i=0;i<arr.length;i++){
    sumFrom0toN[i] = (sumFrom0toN[i-1] || 0) + arr[i];// в круглые скобки взяли для разделения и использования Или
    //[ 1, -1, 2, 6, 1, -3, 0, 2, 3 ]
    // не используя push
  }
 let currentMaxResult = -Infinity;

  for(let i = 0; i < ranges.length; i++){
    const [start, end]= ranges[i]; // деструктуризация, создаем срозу две переменные
    const sum = sumFrom0toN[end] - (sumFrom0toN[start -1] || 0) //текущая сумма
   
    //[1,3] start end, 
    if(sum > currentMaxResult){
      currentMaxResult = sum
    }
  }

  return currentMaxResult
}

console.log(maxsumArrayEl([1,-2,3,4,-5,-4,3,2,1], [[1,3],[0,4],[6,8]]))
console.log(maxsumArrayEl([1,-2,3,4,-5,-4,3,2,1], [[1,3]]))
console.log(maxsumArrayEl([1,-2,3,4,-5,-4,3,2,1], [[1,4],[2,5]]))

const euros = [29.76, 41.85, 46.5];

const sumReduce = euros.reduce((total, amount) => {
 
  return total + amount 
}); 
console.log(sumReduce) 
// reducer
const average = euros.reduce((total, amount, index, array) => { 
  console.log(total)
  total += amount 
  return total/array.length }, 0); 
console.log(average)

const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
const count15 = fruitBasket.reduce( (tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1 ;// fruit - ключ tally[fruit] создается ключ = присваевается значение которое уже есть
  return tally;
} , {} )
console.log(count15) // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }
let objFrut = {"виски": 10};
objFrut["виски"] = objFrut["виски"] + 12; 
console.log(objFrut)
// reducer
const minSum=arr=> {
  return arr.sort((a,b)=>a-b).slice(0, arr.length/2)
    .reduce((current, el, ind)=> current += el * arr[arr.length -ind -1], 0 )
}
const maxProduct=(numbers, size)=>{
  return numbers.sort((a,b)=> b-a).splice(0, size).reduce((cur, el)=> cur *= el, 1)
}
// reducer + filter + spred
const arrayLeaders=numbers=>{
  return numbers.filter((el,index, arr)=>{
    let sum = [...arr].splice(index + 1, arr.length -1).reduce((cur,el1)=> cur+= el1,0)
    console.log(el, sum)
   return el > sum
  });
  
}

// reducer, с изменением элемента в массиве, возврат массива умножения числа, без текущего элемента по индексу

const productArray=n=>{
  return n.reduce((cur, el, ind, arr)=>{
    let count = 1
    for(let i =0; i < arr.length; i++){
      if(i !== ind){
        count *= arr[i]
      }
    }
     cur.push(count)
    return cur
  },[])
}
function XO(str) {
  console.log(str)
  let count = 0
  for(let i =0; i<str.length; i++){
    if(str[i].toLowerCase() === "x"){
      count+=1
    } else if(str[i].toLowerCase() === "o"){
      count-=1

    }}
  console.log(count)
  return count == 0 ? true : false
}
function orderFood1(list) {
  let result = {}
  for(let i=0; i<list.length;i++){
    if(list[i].meal === 'vegetarian'){
      result.vegetarian ? result.vegetarian +=1 : result.vegetarian = 1
    } else if(list[i].meal === 'standard'){
      result.standard ? result.standard +=1 : result.standard = 1
    }else if(list[i].meal === 'vegan'){
      result.vegan ? result.vegan +=1 : result.vegan = 1
    }else if(list[i].meal === 'diabetic'){
      result.diabetic ? result.diabetic +=1 : result.diabetic = 1
    }else if(list[i].meal === 'gluten-intolerant'){
      result["gluten-intolerant"] ? result["gluten-intolerant"] +=1 : result["gluten-intolerant"] = 1
    }
  }
  return result

}
function orderFood(list) {
  let result = {}
  list.map(el=>{
    if(!result.hasOwnProperty(el.meal)){
      result[el.meal] = 1
    } else {
      result[el.meal] += 1
    }
  })

  return result

}
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let currentHeight = 0;
  let days = 0;
  while (currentHeight < desiredHeight) {
    days++;
    currentHeight += upSpeed;
    if (currentHeight >= desiredHeight) {
      break;
    }
    currentHeight -= downSpeed;
  }
  return days;
}
function drawStairs(n) {
  let result = ""
  let spase = " "
  if(n === 1){
    return "I"
  }else{
    for(let i=1; i<n+1; i++){
      let spaseArr = new Array(i).join(spase)
      result+=`${spaseArr}I\\n`
    }
  }
  console.log(result.slice(0,-2))

  return result.slice(0,-2)
}
function drawStairs(n) {
  let cnt = 0;
  let result = '';
  while(n > cnt){
    result += ' '.repeat(cnt) + 'I';
    cnt++;
    if(n > cnt) result += '\n';
  }
  return result;
}
function explode(s) {
  return s.split("").map((e) => e.repeat(+e)).join("");
}
const maxDiff=list=>list.length<=1?0:Math.max(...list)-Math.min(...list)


const cookPancakes=(n, m)=>{
  return n < m ? 2 :  Math.ceil(n*2 /m)
}
const pipeFix=numbers=> {
  let arr = [1,2,3]
  console.log(arr.length)
  let result = []
  for(let i =numbers[0]; i < numbers[numbers.length-1] +1; i++){
    result.push(i)
  }
  return result
}
const solution=nums=> nums ? nums.sort((a,b)=> a-b) : []

var capitals = function (word) {
  let result =[]
  for(let i=0; i< word.length ;i++){
    if(word[i].toLowerCase() !== word[i]){
      result.push(i)
    }
  }
  return result
};
function binToDec(bin){ let dec = 0;
  for (let i = 0; i < bin.length; i++) {
    const bit = Number(bin[i]);
    dec += bit * Math.pow(2, bin.length - i - 1);
  }
  return dec;
}
// return masked string
const maskify=cc=>{
  let grid = new Array(cc.length-4).fill("#").join("")

  return `${grid}${grid}`
}
// return masked string
const maskify=cc=>{

  console.log( cc.replace(cc.substring(0, cc.length-4), new Array(cc.length-4).fill("#").join("")))
  return cc > 4 ? cc.toString().replace(cc.substring(0, cc.length-4), new Array(cc.length-4).fill("#").join("")) : cc;
}
const maskify=cc=>{
  if (cc.length <= 4) {
    return cc;
  } else {
    const lastFour = cc.slice(-4);
    const masked = new Array(cc.length - 4).fill("#").join("");
    return masked + lastFour;
  }
}
function removeEveryOther(arr){
  let result= []
  for(let i =0; i<arr.length; i++){
    if(i%2===0){
      result.push(arr[i])
    }
  }
  return result
}
function bingo(a) {
  console.log(a)
  let bingoNumsArr = [2,9,14,7,15]

  for(let i=0; i<bingoNumsArr.length;i++){
    if(a.find(el=> el == bingoNumsArr[i]) === undefined) {
      return "LOSE"
    }
  }
  return "WIN"

}

    function theVar(theVariables) {
      let alphabet = ["0","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
      const first = alphabet.indexOf(theVariables[0])
      const seconde = alphabet.indexOf(theVariables[2])
      return first + seconde;
    }
function greet(name){
  if(name === "Johnny"){
    return "Hello, my love!";}
  return "Hello, " + name + "!";

}
const solution=(a,b)=>a.length>b.length?b+a+b:a+b+a
var filterString = function(value) {
  return parseInt(value.replace(/\D/g, ''))
}
function sayHello( name, city, state ) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
}
function printArray(array){
  return array.join(",")
}

const distinct=a=>{

  const result = []
  a.map((e)=>{
    result.find((el)=> el==e) === undefined ? result.push(e) : ""
  })
  return result
}
function tidyNumber(n){
  return n.toString().split("").sort((a,b)=>a-b).join("") === `${n}`
}
function dominator(arr) {
  const n = arr.length;
  const count = {};

  for (let i = 0; i < n; i++) {
    const num = arr[i];
    count[num] = (count[num] || 0) + 1;

    if (count[num] > n / 2) {
      return num;
    }
  }

  return -1;
}
function solve(arr){
  const uniqueIntegers = new Set(arr);// создается объект уникальных значений

  for (const num of uniqueIntegers) { //проверяет естть ли ключ который соответствует
    if (!uniqueIntegers.has(-num)) {
      return num;
    }
  }

  return null;
};
function dropCap(n) {
    return n.replace(/\b\w{3,}\b/g, function(match) {
        return match.charAt(0).toUpperCase() + match.slice(1).toLowerCase();
    });
}
function getMean(arr, x, y) {
  let sum1 = 0
  let sum2 = 0
  if(x<=1 || y<=1 || arr.length < x || arr.length < y){
    return -1
  }
  for(let i =0; i < x;i++){
    sum1+= arr[i]
  }
  for(let i = arr.length-y; i < arr.length;i++){

    sum2+= arr[i]
  }
  console.log(sum1,sum2)
  return ((sum1 / x) + (sum2/y)) /2
}
const flip=(d,a)=>a.sort((b,c)=>d=="R"? b-c:c-b)

function boredom(staff){
  var map = {
    accounts:1,
    finance:2,
    canteen:10,
    regulation:3,
    trading: 6,
    change:6,
    IS:8,
    retail:5,
    cleaning:4,
    'pissing about':25
  };

  var score = Object.keys(staff).reduce(
      function(a,b){
        return a+map[staff[b]]
      },0);

  return score <= 80 ? 'kill me now': score < 100 && score > 80 ? 'i can handle this' : 'party time!!';
}
const xMarksTheSpot = (input) => {
  let score = 0
  const result = []
  for(let i = 0; i < input.length; i ++){
    for(let j =0; j < input[i].length; j++){
      if(input[i][j]==="x"){
        console.log(i, j)
        result.push(i)
        result.push(j)
        score++
      }
    }
  }
  return score === 1 ? result : [];
}
function breakChocolate(n,m) {
  console.log(n,m)
  if(n<1 || m<1){
    return 0
  }
  return n === 1 && m ===1 ? 0 : n*m-1;
}
function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

const trueOrFalse=val=> {
  console.log(val)
  if(val === true){
    return "true"
  } else if(val > 0){
    return "true"
  }else if(val === 0){
    return "false"
  }else if(val=== null){
    return "false"
  }
  else if(val === undefined){
    return "false"
  }else if(val.length >= 1){
    return "true"
  }


  return val === true ? "true" : "false"

}
function howManydays(month){
  const a = 31;
  const b = 30;
  const c = 28;
  switch (month){
    case 1:
      return a
    case 2:
      return c
    case 3:
      return a
    case 4:
      return b
    case 5:
      return a
    case 6:
      return b
    case 7:
      return a
    case 8:
      return a
    case 9:
      return b
    case 10:
      return a
    case 11:
      return b
    case 12:
      return a
      break;
  }

}
function padIt(str,n){
  let res = `${str}`
  let count = 0
  while(count <= n-1){
    if(count%2 === 0){
      res = "*" + res
    } else{
      res = res + "*"
    }
    count++
  }
  return res
}
function pickIt(arr){
  var odd=[],even=[];
  for(let i = 0; i< arr.length;i++){
    if(arr[i] % 2 === 0){
      even.push(arr[i])
    } else{
      odd.push(arr[i])
    }
  }


  return [odd,even];
}
function grabDoll(dolls){
  var bag=[];
  for(let i =0; i<dolls.length; i++){
    if(dolls[i]==="Hello Kitty" || dolls[i]==="Barbie doll" ){
      bag.push(dolls[i])

    }
    if(bag.length < 3) continue
    if(bag.length === 3) break;
  }
  return bag;
}
function giveMeFive(obj){
  const result = []
  for(let key in obj){
    if(key.length === 5){
      result.push(key)

    }
    if(obj[key].length === 5){
      result.push(obj[key])
    }
  }
  return result
}
function whatNumberIsIt(n){
  return `Input number is ${n == Number.POSITIVE_INFINITY ? 'Number.POSITIVE_INFINITY':
      n == Number.NEGATIVE_INFINITY ? 'Number.NEGATIVE_INFINITY':
          n == Number.MAX_VALUE ? 'Number.MAX_VALUE':
              n == Number.MIN_VALUE ? 'Number.MIN_VALUE':
                  Number.isNaN(n) ? 'Number.NaN': n}`
}
function colorOf(r,g,b){
  let red = r.toString(16);
  let green = g.toString(16);
  let blue = b.toString(16);

  red = red.length < 2 ? '0' + red : red;
  green = green.length < 2 ? '0' + green : green;
  blue = blue.length < 2 ? '0' + blue : blue;

  let color = '#' + red + green + blue;
  return color

}

const howManySmaller=(arr,n)=> arr.filter(el=>+el.toFixed(2)<n).length

function cutIt(arr){
  let count = arr[0].length
  for(let i = 0 ; i<= arr.length-1; i++){
    if(count > arr[i].length){
      count = arr[i].length
    }
  }
  return arr.reduce((resArr, cur)=> {
    resArr.push(cur.slice(0, count))
    return resArr
  },[])
}
function firstToLast(str,c){
  const firstIndex = str.indexOf(c);
  const lastIndex = str.lastIndexOf(c);

  if (firstIndex === -1) {
    return -1; // If there is no occurrence of 'c' in the string
  } else if (firstIndex === lastIndex) {
    return 0; // If there is only one occurrence of 'c' in the string
  } else {
    return lastIndex - firstIndex; // Difference between the last and first occurrence of 'c'
  }}
function alienLanguage(str){
  const result = str.split(" ")
  return result.reduce((arr, curVal)=>{
    arr.push(curVal.substring(0, curVal.length -1).toUpperCase() + curVal[curVal.length -1].toLowerCase())
    return arr
  },[]).join(" ")
}
function shuffleIt(arr,...restProps){
  for(let i =0; i< restProps.length;i++){
    let num1 = arr[restProps[i][0]]
    let num2 = arr[restProps[i][1]]
    arr[restProps[i][0]] = num2
    arr[restProps[i][1]] = num1
  }
  return arr
}
function infiniteLoop(arr,d,n){
  for (let i = 1; i <= n; i++){
    if (d === "left"){
      arr[2].push(arr[0].shift());
      arr[1].push(arr[2].shift());
      arr[0].push(arr[1].shift());
    }
    if (d === "right"){
      arr[0].unshift(arr[2].pop());
      arr[1].unshift(arr[0].pop());
      arr[2].unshift(arr[1].pop());
    }
  }
  return arr;

}
function threeInOne(arr){
  let resArr = []
  for(let i = 1; i< arr.length + 1 ; i++){
    if(i % 3 ===0){
      resArr.push( arr[i-1]+ arr[i-2]+arr[i-3])
    }
  }
  return resArr
}
function sortIt(arr){
  return arr.slice().sort((a,b)=>{
    let countA = arr.filter(v=>v===a).length
    let countB = arr.filter(v=>v===b).length
    if (countA===countB){ return b-a}
    else if (countA>countB) {return 1}
    else { return -1}
  })

}
function isolateIt(arr){
  return arr.map((el)=>{
    if(el.length %2===0){
      return el.slice(0, el.length/2  ) + "|"  +el.slice(el.length/2)
    }
    else{
      return el.slice(0, el.length/2 -0.5 ) + "|"  +el.slice(el.length/2+0.5)
    }
  })
}
function isolateIt(arr){
  return arr.map((el)=>{
    if(el.length %2===0){
      return el.slice(0, el.length/2  ) + "|"  +el.slice(el.length/2)
    }
    else{
      return el.slice(0, el.length/2 -0.5 ) + "|"  +el.slice(el.length/2+0.5)
    }
  })
}
function countGrade(s) {
  let res = {S: 0, A: 0, B: 0, C: 0, D: 0, X: 0}
  for (let i = 0; i < s.length; i++) {
    let a = s[i]
    if (a === -1) {
      res.X++
    } else if (a < 60 && a >= 0) {
      res.D++
    } else if (a < 80 && a >= 60) {
      res.C++
    } else if (a < 90 && a >= 80) {
      res.B++
    } else if (a < 100 && a >= 90) {
      res.A++
    } else if (a === 100) {
      res.S++
    }
  }
  return res
}
function mirrorImage(arr){

  const resArr = []
  for(let i = 0; i< arr.length-1; i++){

    if(`${arr[i]}`.split("").reverse().join("") === `${arr[i+1]}`){
      resArr.push(arr[i])
      resArr.push(arr[i+1])
    }
  }
  return resArr.length ===0 ? [-1,-1] : [resArr[0], resArr[1]]
}
const fakeBin=x=> x.split("").map(el=>{ return el < 5 ? 0 : 1 }).join("")
const findNeedle=h=> {
  let ind = h.indexOf("needle")
  return ind === -1 ? "Your function didn't return anything" : `found the needle at position ${ind}`
}
function arrayPlusArray(arr1, arr2) {

  return arr1.reduce((el,cur)=>{
    return el+cur
  },0)  + arr2.reduce((el,cur)=>{
    return el+cur
  },0)
}
function points(games) {
  return games.reduce((el,cur)=>{
    if(cur[0]<cur[2]){
      return el
    } else if(cur[0]>cur[2]){
      return el + 3
    } else{
      return el +1
    }
  },0)
}
const  digitize=n=> `${n}`.split("").map(el=> Number(el)).reverse()
function toCsvText(array) {
  return array.join("\n")
}
function isVow(a){
  return a.map(el=> /[aeiou]/.test(String.fromCharCode(el))? String.fromCharCode(el): el)
}
function countPositivesSumNegatives(input) {
  let positiveNums = 0;
  let negativeNums = 0;
  if (input === null || input.length === 0) {
    return [];
  } else {
    input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num);
  }
  return [positiveNums , negativeNums];
}
function sumOfDifferences(arr) {
  const resArr = []

  if(arr.length === 0 || arr.length === 1){
    return 0
  }
  arr.sort((a,b)=> b-a)
  for(let i = 0; i<arr.length -1; i++){
    resArr.push(arr[i] - arr[i+1])
  }

  return resArr.reduce((val,cur)=> {
    return val + cur},0)
}
function mergeArrays(a, b) {
  const Arr = [...a,...b].sort((el1,el2)=> el1-el2)
  const resArr = []
  for(let i = 0;i< Arr.length;i++){
    if(!resArr.includes(Arr[i])){
      resArr.push(Arr[i])
    }
  }
  return resArr
}
function squareOrSquareRoot(array) {
  return  array.map((el)=>{
    return  Number.isInteger(Math.sqrt(el)) ? Math.sqrt(el) : el**2

  });
}
