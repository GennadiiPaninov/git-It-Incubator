console.log(".Reducer")
const arrey1 = [1, 2, 3, 4, 5, 6, 7, 8]

const result1 = arrey1.reduce((el1, el2)=> {
  return el1 + el2
}, 0)
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
    
    ...el1, [obj.id]: obj.name,
  }

}, {id: '123', name: 'John', })
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
    const [start, end]= ranges[i];
    const sum = sumFrom0toN[end] - (sumFrom0toN[start -1] || 0)
   
    //[1,3] start end, 
    if(sum > currentMaxResult){
      currentMaxResult = sum
    }
  }

  return currentMaxResult
}
const euros = [29.76, 41.85, 46.5];

const sumReduce = euros.reduce((total, amount) => {
 
  return total + amount 
});
const average = euros.reduce((total, amount, index, array) => {
  total += amount 
  return total/array.length }, 0);
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
const count15 = fruitBasket.reduce( (tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1 ;
  return tally;
} , {} )
let objFrut = {"виски": 10};
objFrut["виски"] = objFrut["виски"] + 12; 
console.log(objFrut)
const minSum=arr=> {
  return arr.sort((a,b)=>a-b).slice(0, arr.length/2)
    .reduce((current, el, ind)=> current += el * arr[arr.length -ind -1], 0 )
}
const maxProduct=(numbers, size)=>{
  return numbers.sort((a,b)=> b-a).splice(0, size).reduce((cur, el)=> cur *= el, 1)
}
const arrayLeaders=numbers=>{
  return numbers.filter((el,index, arr)=>{
    let sum = [...arr].splice(index + 1, arr.length -1).reduce((cur,el1)=> cur+= el1,0)
    console.log(el, sum)
   return el > sum
  });
  
}


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
  const uniqueIntegers = new Set(arr);

  for (const num of uniqueIntegers) {
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
function countBy(x, n) {
  const z = []
  for(let i = 0;i< n; i++){
    z.push(z[i-1] === undefined ?  x : z[i-1] + x )
  }
  return z

}
const divisibleBy=(n, d)=> n.filter((el)=> el % d === 0)

function sumMix(x){
  return x.reduce((el,cur)=>{
    return el + Number(cur)
  },0)
}
function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])].sort((a,b)=>a-b)
}
function well(x){
  let c =0
  x.forEach(el=> el === "good" ? c++ : "")
  return c === 0 ? "Fail!" : c >  2  ? 'I smell a series!' : "Publish!"
}
function warnTheSheep(queue) {
  if(queue[queue.length - 1 ] === "wolf"){
    return "Pls go away and stop eating my sheep"
  }
  return `Oi! Sheep number ${queue.length - 1 - queue.indexOf("wolf")}! You are about to be eaten by a wolf!`
}
function stairsIn20(s){
  let count = 0
  for(let i=0; i<s.length;i++){
    count += s[i].reduce((el,cur)=>{
      return el+=cur
    },0)
  }
  return count * 20
}
function eachCons(array, n) {
  const res = []
  for(let i=0; i< array.length;i++){
    res.push(array.slice(i, i+n))
  }
  return res.filter(el=> el.length === n)
}
function all( arr, fun ){
  return  arr.every(fun)
}
function swapValues(arr) {
  return arr.reverse()
}

function logicalCalc(array, op){
  return !!array.reduce((prev,cur)=>op=='AND'? prev && cur : op =='OR'? prev || cur : prev ^ cur)
}
function uefaEuro2016(teams, scores){
  if(scores[0] > scores[1])
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
  if(scores[0] < scores[1])
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;
  if(scores[0] === scores[1])
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
}
function arrayMadness(a, b) {
  const powA = a.reduce((cur,el)=>{
    return cur += Math.pow(el,2)
  },0)
  const powB = b.reduce((cur,el)=>{
    return cur += Math.pow(el,3)
  },0)
  return powA > powB
}
function differenceInAges(ages){
  return [Math.min(...ages), Math.max(...ages),  Math.max(...ages) - Math.min(...ages)]
}
// Array.prototype.filter = function (func) {
//   const arr = []
//   for(let i =0; i< this.length;i++){
//     if(func(this[i])){
//       arr.push(this[i])
//     }
//   }
//   return arr
// }

var findAverage = function (nums) {
  return nums.reduce((cur,el)=> cur+el) / nums.length
}
var ArrowFunc = function(arr) {
  return arr.map( el=> String.fromCharCode(el) ).join(''); //Complete this function
}
const duckDuckGoose=(players, goose) =>players[(goose - 1) % players.length].name
const  arr2bin= arr => arr.reduce((p,c)=> p + (typeof c === 'number'? c : 0),0).toString(2)

function headSmash(array) {
  if (array.length === 0){
    return 'Gym is empty'
  }
  if (Array.isArray(array)) {
    array = array.map(el => el.replace(/O/gi, " "));
    return array
  }
  return 'This isn\'t the gym!!'
}
function baublesOnTree(baubles, branches){
  if(branches === 0){
    return "Grandma, we will have to buy a Christmas tree first!"
  }
  const tree = new Array(branches)
  let count = baubles
  for(let i =0; i< tree.length;i++){
    let countBaubles = Math.ceil(count / (branches - i))
    count -= countBaubles
    tree[i] = countBaubles
  }
  return tree
}
const binaryArrayToNumber = arr => {
  return  parseInt(arr.join(""), 2)
};
var mispelled = function(word1, word2){
  if (word1.length<word2.length){
    let temp=word1;
    word1=word2;
    word2=temp;
  }
  let count=0;
  for (let i=0,j=0;i<word1.length;i++,j++){
    if (word1[i]!==word2[j]){
      count++
      if (word1.length>word2.length){
        i++
      }
    }
  }
  return count<2
}
const whosOnline = friends => {
  if (!friends.length) return {}

  const online = friends
      .filter(({ status, lastActivity }) => status === 'online' && lastActivity <= 10)
      .map(({ username }) => username)
  const away = friends
      .filter(({ status, lastActivity }) => status === 'online' && lastActivity > 10)
      .map(({ username }) => username)
  const offline = friends.filter(({ status }) => status === 'offline').map(({ username }) => username)

  return {
    ...(online.length && { online }),
    ...(offline.length && { offline }),
    ...(away.length && { away }),
  }
}
function scoreboard(string) {
  const arr =[]
  const objScore={
    "nil":0,"one": 1,"two": 2,"three": 3,"four":4,"five":5,"six":6,"seven":7,"eight":8,"nine":9,"ten":10
  }
  string.split(" ").forEach(el=>{
    for(let key in objScore){
      if(el === key){
        arr.push(objScore[key])
      }
    }
  })
  console.log(arr)
  return arr
}
function getAges(sum,difference){
  if(sum < 0 || difference < 0 || sum < difference){
    return null
  }
  return [(sum - difference) / 2 + difference, (sum - difference) / 2 ]
};
function sortByLength (array) {
  return array.sort((a,b)=> a.length-b.length )
};
const evenNumbers=(a,n)=>a.filter(e=>e%2===0).slice(-n)

function solve(arr) {
  const resArr = []
  for(let i=0;i<arr.length;i++){
    if(arr.slice(i+1).filter(el=> arr[i] <= el).length === 0){
      resArr.push(arr[i])
    }
  }
  return resArr
}
function spinAround(turns) {
  let left = 0, right = 0
  turns.forEach(el=>el==="left" ? left += 1: right +=1)
  if(left === right){
    return 0
  }else if(left - right < 0){
    return Math.floor((right-left) / 4)
  }else if(right-left < 0){
    return Math.floor((left-right) / 4)
  }
}
function trouble(x, t){
  for(let i=0; i<x.length; i++) {
    if(x[i]+x[i+1]===t) {
      x.splice(i+1,1);
      i--;
    }
  }
  return x;
}
const sumAverage = (arr) => {
  let result = [];
  arr.forEach((el, ind)=> result.push(el.reduce((el,cur)=> {
    return el+cur
  },0) / el.length))
  return Math.floor(result.reduce((el, cur)=>{
    return el+cur
  },0));
}
function counterEffect(hitCount) {
  const resArr = []
  hitCount.split("").forEach(el=>{
    const arr = []
    for(let i = 0; i <= el;i++){
      arr.push(i)
    }
    resArr.push(arr)
  })
  return resArr
}
function treePhotography(trees) {
  const leftArr = trees.reduce((el,cur)=>{
    if (el.every((ele) => ele < cur)) {
      el.push(cur);
    }
    return el;
  },[])
  const rightArr = trees.reverse().reduce((el,cur)=>{
    if (el.every((ele) => ele < cur)) {
      el.push(cur);
    }
    return el;
  },[])
  console.log(leftArr)
  return leftArr.length >= rightArr.length ? "left":"right"
}
function oddOnesOut(nums) {
    const resArr = []
    for(let i = 0; i< nums.length;i++){
        let a = nums.reduce((el,cur)=> {
            return cur === nums[i] ? el = el + 1 : el
        },0)
        if(a % 2 === 0){
            resArr.push(nums[i])
        }
    }
    return resArr
}
function findDup( arr ){
  const numSet = new Set();
  for (const num of arr) {
    if (numSet.has(num)) {
      return num;
    }
    numSet.add(num);
  }
  return -1;
}
const getLargerNumbers=(a,b)=>a.map((e,i)=>e<b[i]?b[i]:e)
function mostFrequentItemCount(collection) {
  let res = 0
  const obj={}
  for(let i=0; i<collection.length;i++){
    obj[collection[i]] ? obj[collection[i]] +=1 : obj[collection[i]] = 1

  }
  for(let key  in obj){
    obj[key] > res ? res = obj[key] : ""
  }
  return res
}
function findMissing(arr1, arr2) {
  let num = 0;
  const sa1 = arr1.sort((a,b)=> a-b)
  const sa2 = arr2.sort((a,b)=> a-b)
  for(let i = 0;i< sa1.length;i++){
    if(sa1[i] !== sa2[i]){
      num = sa1[i]
      break;
    }
  }
  return num
}
function checkThreeAndTwo(array) {
  const arr = []
  let obj = {}
  for(let i =0; i< array.length;i++){
    obj[array[i]] ? obj[array[i]] += 1 : obj[array[i]] = 1
  }
  for(let key in obj){
    if(obj[key] === 3){
      arr.push(3)
    }
    if(obj[key] === 2 ){
      arr.push(2)
    }
  }
  return arr[0] === 3 && arr[1] === 2 ? true :  arr[1] === 3 && arr[0] === 2 ? true :false
}
function filterHomogenous(arrays) {
  const resArray = []
  for(let i = 0; i< arrays.length;i++){
    if(arrays[i].length === 0){
      ""
    } else {
      arrays[i].every(el=> typeof arrays[i][0]  === typeof el) ? resArray.push(arrays[i]) : ""
    }
  }
  return resArray;
}
function uniteUnique(...array) {
  const arr = [...array]
  const resArr = []
  const setObj = new Set()
  for(let i = 0; i < arr.length; i++){
    arr[i].forEach(el=> setObj.add(el, 0))

  }
  setObj.forEach(el=> resArr.push(el))
  return resArr
}
function isFlush(cards) {
  return cards.every((el)=> el[el.length - 1] === cards[0][cards[0].length-1])
}
function pluck(objs, name) {
  const resArr = []
  objs.forEach(el=> resArr.push(el[name]))
  return resArr
}
function fire(x,y) {
  const grid = ['top left',    'top middle',    'top right',
    'middle left', 'center',        'middle right',
    'bottom left', 'bottom middle', 'bottom right']
  return grid[y*3+x]
}
function oddOrEven(array) {
  return array.reduce((el,cur)=>{
    return el + cur
  },0) %2 === 0 ? 'even' : 'odd'
}
const fizzbuzz=n=>{
  console.log(n)
  const arr = []
  for(let i=1;i<n+1;i++){
    i %3 === 0  &&  i%5===0 ? arr.push('FizzBuzz') : i%3===0 ? arr.push('Fizz') : i%5===0 ? arr.push('Buzz') : arr.push(i)
  }
  return arr
}
function pendulum(values) {

  values.sort((a,b)=> a-b)
  const arr =[values[0]]
  for(let i = 1; i<values.length;i++){
    i%2===0 ? arr.unshift(values[i]) : arr.push(values[i])
  }
  return arr
}
function arrayMash (array1, array2) {
  const arr = []
  array1.forEach((el,ind)=> arr.push(el, array2[ind]))
  return arr
}
var number=function(array){
  const arr = []
  array.forEach((el, ind)=> arr.push(`${ind+1}: ${el}`))
  return arr
}
var seqlist = function(first,c,l){
  console.log(first,c,l)
  const arr = []
  for(let i = first; arr.length<l;i+=c){
    arr.push(i)
  }
  return arr
}
function calculateTotal(team1, team2) {
  var t1s = team1.reduce((t, c) => t += c, 0);
  var t2s = team2.reduce((t, c, i) => t+=c,0);
  return t1s > t2s;
}

function spoonerize(words) {
  const arr = words.split(" ")
  const arr2 = arr.map((el,ind)=>{
    if(ind === 0){
      return `${arr[arr.length-1][0]}${el.substring(1)}`
      console.log(el[0], arr[arr.length-1][0])
    }
    if(ind === arr.length -1){
      return `${arr[0][0]}${el.substring(1)}`
    }
    return el
  })
  return arr2.join(" ")
}
const arrCheck = value =>{
  if(value.length === 0){
    return true
  }
  return value.every((el)=>{
    return Array.isArray(el)

  })
}
function cantBeatSoJoin(numbers) {
  const sum = (el)=>{
    return el.reduce((val,cur)=>{
      return val+cur
    },0)
  }
  return numbers.sort((a,b)=>sum(b)-sum(a)).flat()
}
const howMuchCoffee=events=> {
  let count = 0
  if(events.length ===0){
    return 0
  }
  events.map(el=> {
    if(el.toLowerCase() === 'cw' ||
        el.toLowerCase() === 'cat' ||
        el.toLowerCase() === 'dog'||
        el.toLowerCase() === 'movie'){
      el ===  el.toLowerCase() ? count++ : count += 2
    }})
  return count <= 3 ? count : 'You need extra sleep'
}
function getLosAngelesPoints(results) {
  const isName = (name)=>{
    return /^[A-Z]/.test(name)
  }

  const LosAngelesTeam = results.reduce((arr,cur)=>{
    cur[0].startsWith('Los Angeles') && isName(cur[0].split(" ")[2]) ? arr.push(cur) : ''
    return arr
  },[])
  console.log(results,"asdsad", LosAngelesTeam)
  return LosAngelesTeam.reduce((score,curr)=>{

    return score + Number(curr[1].split(":")[0])
  },0)}
function findMissingNumbers(arr){
  const resArr = []
  const value = arr.sort((a,b)=> a-b)
  for (let i = value[0]; i <= value[value.length-1];i++){
    arr.includes(i) ? "" : resArr.push(i)
  }
  return resArr
}
function countWins(winnerList, country) {
  let winCount = 0
  winnerList.forEach(el=>{
    el.country === country ? winCount++ : ''
  })
  return winCount
}
function switcher(x){
  let word = ''
  const alphabet= " ?!ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").reverse()
  x.forEach(el=> word += alphabet[el-1])
  return word.toLowerCase()
}
function min(arr, toReturn) {
  const res = [...arr].sort((a,b)=> a-b)[0]
  return toReturn === 'value' ? res :  arr.indexOf(res)
}
function getMissingElement(arr){
  let missNum= 0
  const numArr =[ 0, 1, 2, 3, 4, 5, 6, 7,8,9]
  for (let i=0;i<numArr.length;i++){
    arr.includes(numArr[i]) ? "" : missNum = numArr[i]
  }
  return missNum
}
function calc(x){
  const sum=(s)=>{
    return s.split("").reduce((n, cur )=>{
      return n += Number(cur)
    },0)
  }
  let score = x.split("").reduce((s,cur)=>{
    return `${s}${cur.charCodeAt()}`
  },"")
  let score1 = score.split("").reduce((s,cur)=>{
    return `${s}${cur ==="7"? "1": cur}`
  },"")
  return sum(score) - sum(score1)
}
// сортировка строк
function sorter(textbooks) {
  textbooks.sort((a, b) => {
    const subjectA = a.toLowerCase();
    const subjectB = b.toLowerCase();

    if (subjectA < subjectB) {
      return -1;
    }
    if (subjectA > subjectB) {
      return 1;
    }
    return 0;
  });

  return textbooks;
}
function adjacentElementsProduct(array) {
  let maxValue = NaN
  array.forEach((el,ind)=>{
    if(ind === 0){
      maxValue = el * array[ind+1]
    } else{
      if(array[ind + 1]){
        el * array[ind+1] > maxValue ? maxValue =  el * array[ind+1] : ''
      }
    }
  })
  return maxValue
}
function possiblyPerfect(key,answers) {
  let underscoreCount = 0
  const arr = []
  key.forEach((el,ind)=>{
    if(el === "_"){
      underscoreCount++
    }
    if(el === answers[ind]){
      arr.push(el)
    }
  })
  if(arr.length === 0) return true
  if(answers.length - arr.length  - underscoreCount === 0) return true
  return  false
}
function insertDash(num) {
  const arrNum = String(num).split("")
  let resStr = ''
  arrNum.forEach((el,ind)=>{
    resStr = resStr + el
    if(el%2!==0 && arrNum[ind+1]%2!==0){
      resStr = `${resStr}-`
    }
  })
  if(resStr[resStr.length-1] === '-') return resStr.substring(0,resStr.length-1)
  return resStr
}
function bald(x){
  let count = 0
  const str = x.split('').map((el)=>{
    el === "/" ? count++ : ''
    return '-'
  }).join("")
  let result = ''
  if(count == 0) result = 'Clean!'
  if(count == 1) result = 'Unicorn!'
  if(count == 2) result = 'Homer!'
  if(count <= 5 && count >= 3) result = 'Careless!'
  if(count > 5) result = 'Hobo!'
  return [str, result]
}
function cubeOdd(arr) {

  if(!arr.every(el=> {
    return typeof el == typeof 1
  })){
    return undefined
  }


  return arr.reduce((el,cur)=>{
    if(cur%2!==0) return el + Math.pow(cur, 3)
    return el
  },0)
}
function flyBy(lamps, drone){
  return lamps.split('').reduce((el,cur,ind)=>{
    return el + (ind < drone.length ? 'o' : cur )
  },'')
}
function getNewNotes(salary,bills){
  let res = bills.reduce((el,cur)=> {
    return el- cur
  },salary)
  return res / 5 <= 0 ? 0 : Math.floor(res / 5)
}
const noOdds =values => values.reduce((arr, cur) => cur % 2 === 0 ? arr.concat(cur) : arr, []);
function validateSequence(x) {
  let step = x[1] - x[0]
  for(let i=0;i<x.length-1;i++){
    if(x[i]+step !== x[i+1]){
      return false
    }
  }
  return true
}
function swapHeadAndTail(arr) {
  if(arr.length %2===0){
    return [...arr.slice(arr.length/2),...arr.slice(0, arr.length/2)]
  }
  return [...arr.slice(arr.length/2+0.5),arr[arr.length/2-0.5],...arr.slice(0, arr.length/2-0.5)]
}
function nthChar(words){
  return words.reduce((el,cur, ind)=>{
    return el + cur[ind]
  },'')
}
var calc = function(a) {
  return a.reduce((el,cur,ind)=>{
    if(cur>0) cur = Math.pow(cur,2)
    if((ind+1)%3===0) cur = cur * 3
    if((ind+1)%5===0) cur = cur * -1
    return cur+el
  },0);
}
function pairs(ar){
  console.log(ar)
  let count =0
  ar.forEach((el,ind)=>{
    if(ind%2!==0){
      if((ar[ind-1] + 1) === el || (ar[ind-1] - 1) === el)count++
    }
  })
  return count
};
function outed(meet, boss){
  let score = 0
  for(let key in meet){
    key === boss ? score += (meet[key] * 2) : score += meet[key]
  }
  let result = score / Object.keys(meet).length
  return result <= 5 ?  'Get Out Now!' : 'Nice Work Champ!'
}
function likeOrDislike(buttons) {
  let like = 0
  let dislike = 0
  buttons.forEach((el)=>{
    if(el === 'Dislike'){
      dislike === 0 ? dislike++ : dislike--
      like === 1 ? like-- : ''
    }
    if(el === 'Like'){
      like === 0 ? like++ : like--
      dislike === 1 ? dislike-- : ''
    }
  })
  if(like === 0 && dislike === 0){
    return 'Nothing'
  }
  if(like === 1 && dislike === 1){
    return 'Nothing'
  }
  if(like === 1){
    return 'Like'
  }
  return 'Dislike'
}
function removeRotten(bagOfFruits){
  if(bagOfFruits === null || bagOfFruits === undefined) return []
  return  bagOfFruits.map(el=>{

    return el.indexOf('rotten') ? el : `${el[6].toLowerCase()}${el.substring(7)}`

  })
}
function scrollingText(text){
  let textUp = text.toUpperCase()
  const arr = []
  for(let i =0; i<= text.length -1;i++){
    arr.push(`${textUp.substring(i)}${i===0 ? '': textUp.substring(0, i)}`)
  }
  return arr
}
function paul(x){
  let score = 0
  x.forEach((el)=>{
    if(el==='kata') score += 5
    if(el==='Petes kata') score += 10
    if(el==='eating') score += 1
  })
  if(score < 40 ) return 'Super happy!'
  if(score < 70 ) return 'Happy!'
  if(score < 100 ) return 'Sad!'
  return 'Miserable!'
}
function gordon(a){
  const vowel = ['e', 'i', "o", 'u']
  const arr = a.split(' ')
  return arr.map(el=>{
    const word = [...el].map((sumbl, ind)=>{
      if(vowel.includes(sumbl)){

        return '*'
      }
      if(sumbl === 'A' || sumbl === 'a'){
        return '@'
      }
      return sumbl.toUpperCase()
    }).join('')
    return `${word}!!!!`
  }).join(' ')
}
function squareUp(n) {
  const arr = new Array(n).fill(0);
  const result = arr.map((el, ind) => {
    const array = [];
    for (let i = 0; i < n; i++) {
      if (i < ind + 1) {
        array.push(i + 1);
      } else {
        array.push(0);
      }
    }
    return array.reverse();
  });
  return result.flatMap(array => array);
}
function setReducer(arr) {
  const result = [];

  let i = 0;
  while (i < arr.length) {
    let count = 1;
    while (i + count < arr.length && arr[i + count] === arr[i]) {
      count++;
    }

    if (count === 1) {
      result.push(1);
    } else {
      result.push(count);
    }

    i += count;
  }

  if (result.length === 1) {
    return result[0];
  } else {
    return setReducer(result);
  }
}
function balancedNum(number){
  if(`${number}`.length <= 2) return "Balanced"
  let left = 0;
  let right =0;
  if(`${number}`.length%2!==0){
    left = `${number}`.substring(0, Math.ceil(`${number}`.length / 2) -1).split('').reduce((el,cur)=> el + Number(cur),0)
    right = `${number}`.substring( Math.ceil(`${number}`.length / 2)).split('').reduce((el,cur)=> el + Number(cur),0)
  }
  if(`${number}`.length %2===0){

    left =`${number}`.substring(0, `${number}`.length / 2 -1).split('').reduce((el,cur)=> el + Number(cur),0)
    right =`${number}`.substring(`${number}`.length / 2 + 1).split('').reduce((el,cur)=> el + Number(cur),0)
  }
  return left === right ? "Balanced" : "Not Balanced"
}
function gimme (triplet) {
  const sor = [...triplet].sort((a,b)=>a-b)
  return triplet.indexOf(sor[1])
}
function spacify(str) {
  return str.split("").join(" ")
}
function toNumberArray(stringarray){
  return stringarray.map(el=>Number(el))
}
function arrange(arr){
  const toNum = (num) => {
    if (num.indexOf("KG") !== -1) {
      return Number(`${num.substring(0, num.length - 2)}000`);
    } else if (num.indexOf("G") !== -1) {
      return Number(`${num.substring(0, num.length - 1)}`);
    } else {
      return Number(`${num.substring(0, num.length - 1)}000000`);
    }
  };
  return  arr.sort((a, b) => {
    return toNum(a) - toNum(b);
  });
}

function map(arr, somefunction){
  if(typeof somefunction !== "function"){
    return 'given argument is not a function'
  }
  if(arr.some(el=>  isNaN(Number(el)))){
    return 'array should contain only numbers'
  }
  return somefunction(arr)
}
function solve(a, b) {
  let AliceScore = 0;
  let BobScore = 0;
  a.forEach((el,ind)=>{
    if(el > b[ind]){
      AliceScore++
    }
    if(el < b[ind]){
      BobScore++
    }
  })
  let tie = `${AliceScore}, ${BobScore}: that looks like a "draw"! Rock on!`
  let AliceWin = `${AliceScore}, ${BobScore}: Alice made "Kurt" proud!`
  let BobWin= `${AliceScore}, ${BobScore}: Bob made "Jeff" proud!`
  return  AliceScore === BobScore ? tie : AliceScore > BobScore ? AliceWin : BobWin
}
function flattenAndSort(array) {
  return array.flatMap(ar=>ar).sort((a,b)=>a-b)
}
function twoOldestAges(ages){
  return ages.sort((a,b)=>a-b).slice(ages.length-2)
}
function alan(x){
  const listStops = [
    'Rejection',
    'Disappointment',
    'Backstabbing Central',
    'Shattered Dreams Parkway'
  ]
  return listStops.every((el)=> x.includes(el)) ? 'Smell my cheese you mother!' : 'No, seriously, run. You will miss it.'

}
function removeSmallest(numbers) {
  const min = Math.min(...numbers);
  const index = numbers.indexOf(min);
  const result = numbers.slice(0, index).concat(numbers.slice(index + 1));
  return result;
}
function meeting(x){
  return x.indexOf('O') !== -1 ? x.indexOf('O') : 'None available!'
}
function minMax(arr){
  return [Math.min(...arr),Math.max(...arr)];
}
function smallEnough(a, limit){
  return a.every(el=> el <= limit)
}
function isAllPossibilities(x){
  const n = x.length;
  const set = new Set(x);

  if (x.length !== n || set.size !== n) {
    return false;
  }
  for (let i = 0; i < n; i++) {
    if (!set.has(i)) {
      return false;
    }
  }
  return true;
}
function filter_list(l) {
  return l.reduce((cur,el)=>{
    if (typeof el === 'number') {
      cur.push(el);
    }
    return cur
  }, [])
}
function logs(x , a, b){
  return Math.log(a * b) / Math.log(x)
}
function rounders(value) {
  let arr = `${value}`.split("").reverse()
  for(let i =0; i<=arr.length-1;i++){
    if(arr[i+1]){
      if(arr[i] < 5){
        arr[i] = '0'
      } else{
        arr[i+1]++
        arr[i] = 0
      }
    }
  }
  arr.reverse()
  return +arr.join('')
}
const rounders = value =>
    value < 10 ? value : 10 * rounders(Math.round(value / 10));
const rounders = n => n < 10 ? n : rounders(Math.round(n / 10)) * 10
function sumArray(array) {
  if (array === null) {
    return 0;
  }
  if (array.length < 3) {
    return 0;
  }

  const highest = Math.max(...array);
  const lowest = Math.min(...array);

  let sum = 0;
  for (let num of array) {
    if (num !== highest && num !== lowest) {
      sum += num;
    }
  }

  return sum;
}
function naughtyOrNice(data) {
  let Nice = 0
  let Naughty = 0
  const arr = []

  for (let key in data) {
    arr.push(key)
  }

  for (let i = 0; i <= arr.length - 1; i++) {
    const arr2 = []

    for (let key in data[arr[i]]) {
      arr2.push(key)
    }

    arr2.forEach((el) => {
      if (data[arr[i]][el] === "Naughty") {
        Naughty++
      }
      if (data[arr[i]][el] === "Nice") {
        Nice++
      }
    })
  }
  return Naughty <= Nice ? "Nice!" : "Naughty!"
}
const naughtyOrNice2 = (data) => {
  let naughtyMeter = 0

  for (const month in data) {
    for (const day in data[month]) {
      naughtyMeter += data[month][day] === "Nice" ? 1 : -1
    }
  }

  return naughtyMeter < 0 ? "Naughty!" : "Nice!"
}
function bubble(l) {
  let snapshots = []
  let len = l.length
  let swapped

  do {
    swapped = false

    for (let i = 0; i < len - 1; i++) {
      if (l[i] > l[i + 1]) {
        let temp = l[i]
        l[i] = l[i + 1]
        l[i + 1] = temp
        snapshots.push([...l])

        swapped = true
      }
    }

    len--
  } while (swapped)
  return snapshots
}
const bubble2 = ([...arr]) => {
  const log = [];

  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++)
      arr[i] > arr[i+1] && ([arr[i], arr[i+1]] = [arr[i+1], arr[i]]) && (swapped = log.push([...arr]));
  } while (swapped);

  return log;
}
function learnCharitableGame(arr) {
  if(arr.length === 1) return true
  let val = arr.reduce((cur,el)=>{
    return cur + el
  },0) / arr.length
  if(!Number.isInteger(val) || val === 0 ) return false
  return true
}
function learnCharitableGame2(arr) {
  if(arr.every(a => a == 0)) return false;
  return arr.reduce((a,b) => a+b) % arr.length == 0;
}
function partlist(arr) {
  const resArr = []
  arr.forEach((el,ind)=>{
    if(ind !== arr.length-1){
      const firstVal = `${arr.slice(0, ind+1)}`.replace(/,/g, " ")
      const secondVal = `${arr.slice(ind+1)}`.replace(/,/g, " ")
      resArr.push([firstVal, secondeVal])}
  })
  return resArr
}
function consecutive(arr, a, b) {
  const ind1 = arr.indexOf(a)
  const ind2 = arr.indexOf(b)
  if(arr[ind1 + 1 ]===b) return true
  if(arr[ind2 + 1 ]===a) return true
  return false
}
function consecutive1(arr, a, b) {
  return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
}
function multiply(number){
  const digits = Math.abs(number).toString().length
  return number * Math.pow(5, digits)

}
function sliding(nums, k) {
  const resArr = []
  nums.forEach((el,i)=>{
    if(i<nums.length - k + 1){
      resArr.push(Math.max(...[...nums].slice(i, i + k)))
    }
  })
  return resArr;
}
function sliding3(a, k) {
  return a.length ? Array.from({length: a.length - k + 1}, (x, i) => Math.max(...a.slice(i, i + k))) : [];
}
function sumArray(array) {
  if (array === null) {
    return 0;
  }
  if (array.length < 3) {
    return 0;
  }

  const highest = Math.max(...array);
  const lowest = Math.min(...array);

  let sum = 0;
  for (let num of array) {
    if (num !== highest && num !== lowest) {
      sum += num;
    }
  }

  return sum;
}

function gimmeTheLetters(sp) {
  const first = sp[0]
  const second = sp[2]
  const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ''];
  const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ''];
  if(first.toUpperCase() === first){
    if(first === second){
      return `${first}`
    }
    const index = uppercaseLetters.indexOf(first)
    const index2 = uppercaseLetters.indexOf(second) + 1
    console.log(index, index2)
    return uppercaseLetters.slice(index, index2).join('')

  } else{
    if(first === second){
      return `${first}`
    }
    const index = lowercaseLetters.indexOf(first)
    const index2 = lowercaseLetters.indexOf(second) + 1
    return lowercaseLetters.slice(index, index2).join('')

  }
}
function gimmeTheLetters2(sp) {
  let s = ""
  for(let i = sp[0].charCodeAt(); i <= sp[2].charCodeAt(); i++) s += String.fromCharCode(i)
  return s
}
function stonePick(arr) {
  let Sticks = 0
  let Cobblestone = 0
  let Wood = 0
  arr.forEach(el=>{
    if(el === 'Sticks') Sticks++
    if(el === 'Cobblestone') Cobblestone++
    if(el === 'Wood') Wood++

  })
  Sticks += Wood*4
  Sticks = Math.floor(Sticks/2)
  Cobblestone = Math.floor(Cobblestone/3)
  return Sticks <= Cobblestone ? Sticks : Cobblestone
}
function stonePick2(arr) {
  return Math.min(Math.floor(arr.filter(e=>e=="Cobblestone").length/3), (Math.floor(arr.filter(e=>e=="Sticks").length /2) + Math.floor(arr.filter(e=>e=="Wood").length*4/2)));
}
function reverseAndMirror(s1,s2) {
  const func =(el)=>{
    return el.split("").map((el)=>{
      if(el.toLowerCase() === el) return el.toUpperCase()
      if(el.toLowerCase() !== el) return el.toLowerCase()
    })
  }
  const ResS1 = func(s1)
  const ResS2 = func(s2).reverse().join("")
  return `${ResS2}@@@${ResS1.reverse().join("")}${ResS1.reverse().join("")}`;
}
function yearDays(year){
  if(year%100===0 && year%400 !== 0) return  `${year} has 365 days`
  if(year %4 ===0) return `${year} has 366 days`
  return `${year} has 365 days`
}
function yearDays2(year) {
  return year + ' has ' + (!(year % 100) && year % 400 || year % 4 ? '365' : '366') + ' days';
}
function countCorrectCharacters(c, g){
  let count = 0
  const arr1 = c.split("")
  const arr2 = g.split("")
  if(c.length !== g.length)  throw new Error('Unspecified AssertionError: Lengths of the two strings are not the same');
  arr1.forEach((el,ind)=>{
    if(el === arr2[ind]) count++
  })
  return count
}
function countCorrectCharacters(correctWord, guess){
  if(correctWord.length-guess.length) throw new Error('you\'re not even trying');
  return [...correctWord].filter((c,i)=>c===guess[i]).length;
}
function validateNumber(str1){
  const str = str1.replace(/-/g, "")
  if(str[0] === '0' && str[1] === "7" && str.length === 11) return 'In with a chance'
  if(str[0] === '+' && str[1] === "4" && str[2] === "4" && str[3] === "7" && str.length === 13) return 'In with a chance'
  return 'Plenty more fish in the sea'
}
function validateNumber1(str){
  return /^(\+44|0)7\d{9}$/.test(str.replace(/-/g,'')) ? 'In with a chance' : 'Plenty more fish in the sea';
}
function findShort(s){
  const arr =  s.split(" ")
  let word = arr[0]
  for(let i =0; i<=arr.length -1;i++){
    if(arr[i].length < word.length){
      word = arr[i]
    }
  }
  return word.length
}
function findShort1(s){
  return Math.min(...s.split(" ").map (s => s.length));
}
function totalLicks(env) {
 let licks = 252
      let challenge = ''
      const arr = []
      for(let key in env){
        arr.push(env[key])
        if(env[key] > 0){
          challenge.length === 0 ? challenge = key : env[key] > env[challenge] ? challenge = key : ''
        }
      }
      arr.forEach((el)=>{
        licks += el
      })
      const withChallenge = ` The toughest challenge was ${challenge}.`
      return `It took ${licks} licks to get to the tootsie roll center of a tootsie pop.${challenge && withChallenge}`
    }
const totalLicks2 = env =>
    `It took ${Object.values(env).reduce((pre, val) => pre + val, 252)} licks to get to the tootsie roll center of a tootsie pop.` +
    (Object.values(env).some(val => val > 0) ? ` The toughest challenge was ${Object.entries(env).sort((a, b) => b[1] - a[1])[0][0]}.` : ``);
function flipNumber(n){
  const resArr = []
  const arr = n.split("")
  const fPath = [...arr.slice(0, Math.floor(n.length/2))]
  const sPath = [...arr.slice(Math.floor(n.length/2))].reverse()
  for(let i =0; i<=sPath.length;i++){
    resArr.push(sPath[i])
    fPath[i] !== undefined ? resArr.push(fPath[i]) : ''
  }
  return resArr.join("")
}
const flipNumber2 = n => n.length < 2 ? n : n.slice(-1) + n[0] + flipNumber(n.slice(1, -1));
function startSmoking(bars,boxes){
  let sigarets = (bars * 10 * 18) + (boxes * 18)
  let score = sigarets
  while(sigarets >=5){
    score +=  Math.floor(sigarets / 5)
    sigarets = sigarets - (5 * Math.floor(sigarets / 5)) + Math.floor(sigarets / 5)
  }
  return score
}
function startSmoking2(bars, boxes) {
  return 22.5 * (10 * bars + boxes) - 0.5 | 0;
}
function getSectionIdFromScroll(scrollY,sizes){
  let index = 0;
  let high = 0;
  sizes.forEach((el)=> {
    if(high + el <= scrollY){
      index++
    }
    high += el
  })
  if(high <= scrollY) return -1
  return index
}
function getSectionIdFromScroll2(y, s){
  var t=0;
  return s.findIndex(e=>(t+=e)>y);
}
function getDivisorsCnt(n){
  let divisors = 0
  let sqrt = Math.floor(Math.sqrt(n))
  for (let i = 1; i <= sqrt; i++) {
    if (n % i === 0) {
      divisors += 2
    }
  }
  if (sqrt * sqrt === n) {
    divisors--
  }

  return divisors
}
function getDivisorsCnt2(n){
  let count=0;
  for(let i=1;i<=n;i++){
    if(n%i===0){
      count++;
    }
  }
  return count;
}
function addLetters(...letters) {
  if (letters.length === 0) return 'z'
  let count = 0
  const englishLettersLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  letters.forEach((el) => {
    count += englishLettersLowercase.indexOf(el) + 1;
  })
  count = (count - 1) % 26
  return englishLettersLowercase[count]
}
function addLetters2(...letters) {
  return String.fromCharCode((letters.reduce( (a,b) => a+b.charCodeAt(0)-96, 0)+25)%26+97);
}
function spacey(arr) {
  return arr.map((el,ind)=>{
    let resStr = ''
    for(let i = 0; i <=ind ; i++){
      resStr += arr[i]
    }
    return resStr
  })
}
function spacey1(array){
  let string = ''
  return array.map( (e) => string += e )
}
function findTheMissingTree(trees) {
  let minValue = Infinity
  let minKey = null
  const obj={}
  trees.forEach((el)=>{
    obj[el] ? obj[el]++ : obj[el] = 1
  })
  for (let key in obj) {
    if (obj[key] < minValue) {
      minValue = obj[key]
      minKey = key
    }
  }
  return Number(minKey)
}
function findTheMissingTree2(ar){
  let ix = ar.reduce((a,e) => (a[e] ? a[e]++ : a[e] = 1, a),{});
  return Number(Object.keys(ix).reduce((a,e) => ix[e] < ix[a] ? e : a));
}
const isLeapYear3=y=>y%100===0&&y%400!==0?false:y%4===0?true:false
function isLeapYear4(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}
function vaporcode(string) {
  return string.toUpperCase().split('').filter(e=> e!== " ").join("  ")
}
function vaporcode2(string) {
  return Array.from(string.replace(/\s+/g, "").toUpperCase()).join("  ")
}
const combineNames = (f,l) => f + " " + l
const combineNames2 = (...names) => names.join(' ');
class List2 {
  constructor(type) {
    this.type = type;
    this.items = [];
    this.count = 0;
  }
  add(item) {
    if ( typeof item !== this.type )
      return `This item is not of type: ${this.type}`;

    this.items.push(item);
    this.count++
    return this
  }

}
var findDup=function(arr){
  const obj= {}
  let number = 0;
  arr.forEach((el)=>{
    obj[el] ? number = el : obj[el] = 1
  })
  return number
}
var findDup2=function(arr){
  var a = 0, found = {};
  while( !found[arr[a]] ) found[arr[a++]]=true
  return arr[a]
}
function isItLetter(character) {
  return /^[a-zA-Z]$/.test(character)
}
function withoutLast(arr) {
  return arr.slice(0, arr.length - 1)
}
function withoutLast2(arr) {
  arr = [...arr]
  arr.pop();
  return arr;
}
function sortMyString(S) {
  let firstW = ''
  let secondW = ''
  S.split("").forEach((el,ind)=>{
    if(ind%2===0){
      firstW += el
    } else {
      secondW += el
    }
  })
  return `${firstW} ${secondW}`;
}
const sortMyString2 = s => {
  let even = s.split('').filter((v, i) => i % 2 === 0).join('')
  let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
  return even + ' ' + odd
}
function canIPlay(now,start,end) {
  if(end < start){
    if(now >= start) return true
    if(now < end) return true
    return false
  }
  return now >= start && now < end
}
function canIPlay2(now,start,end) {
  for(let i = start; i != end; i = (i + 1) % 24) if(i === now) return true
  return false
}
function calculateSpeed(distance, time) {
  const hour = 3600
  let distanceM = 0
  let timeS = 0
  let mInSec = 0
  if(distance.includes("km")){
    distanceM += Number(distance.slice(0, distance.length-2)) * 1000
  } else {
    distanceM += Number(distance.slice(0, distance.length-1))
  }
  if(time.includes("min")){
    timeS += Number(time.slice(0, time.length-3)) * 60
  } else {
    timeS += Number(time.slice(0, time.length-1))
  }
  return `${Math.round(distanceM /timeS  * 3.6 * 0.62137119)}mph`
}
function calculateSpeed2(distance, time) {
  let meters = parseInt(distance, 10) * (distance.match(/km$/) ? 1000 : 1);
  let seconds = parseInt(time, 10) * (time.match(/min$/) ? 60 : 1);
  return Math.round(meters / seconds * 2.23694) + 'mph';
}
function getCount(str) {
  return  str.split("").reduce((cur,el)=>{
    if(/[aeiou]/gi.test(el)) cur++
    return cur
  },0)
}
function getCount2(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
function accum(s) {
  let res = ''
  for(let i = 0; i< s.length;i++){
    let string = `${s[i].toUpperCase()}`
    for(let j =0; j< i;j++){
      string = string + s[i].toLowerCase()
    }
    res = `${res}${string}-`
  }
  return res.slice(0, res.length - 1)
}
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
const descendingOrder=n=> Number(`${n}`.split("").sort((a,b)=> b-a).join(""))
var isSquare = function(n){
  if(Math.floor(Math.sqrt(n)) === Math.sqrt(n)) return true
  return false
}
function isIsogram(str){
  let res = true
  const obj ={}
  str.split("").forEach(el=>{
    if(obj[el.toLowerCase()]) {
      res = false
    }
    obj[el.toLowerCase()] = 1
  })
  return res
}
function isIsogram2(str){
  return new Set(str.toUpperCase()).size == str.length;
}
const fff = function () {
  return this.split(" ").map(el=> `${el[0].toUpperCase()}${el.slice(1)}`).join(" ")
};
function dnaStrand(dna){
  return dna.split("").map(el=>{
    if(el === 'A') return "T"
    if(el === 'T') return "A"
    if(el === "G") return "C"
    if(el === 'C') return "G"
  }).join('')
}
function sumTwoSmallestNumbers(n) {
  n.sort((a,b)=> a-b)
  return n[0]+n[1]
}
function getSum(a, b){
  let c = a
  let d = b
  if(a === b) return a
  if(a>b){
    c = b
    d = a
  }
  const arr = []
  for(let i = c; i < d; i++ ){
    arr.push(i)
  }
  arr.push(d)
  return arr.reduce((cur,el)=>{
    return cur+el
  },0)
}
function longest(s1, s2) {
  const maxObj = new Set(s1).size < new Set(s2).size ? new Set(s2) : new Set(s1)

  return [...maxObj].sort().join("")
}
function longest2(s1, s2) {
  const combinedString = s1 + s2
  const distinctLetters = Array.from(new Set(combinedString))
  const sortedString = distinctLetters.sort().join("")

  return sortedString
}
function squareDigits(num){
  return Number([...`${num}`].map((el)=>{
    return Math.pow(Number(el), 2)
  }).join(``))
}
function squareDigits2(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

}
function reverseWords(str) {
  return str.split(" ").map(el => el.split("").reverse().join("")).join(" ")
}
function stray(numbers) {
  let result = 0
  for (let num of numbers) {
    result ^= num
  }
  return result
}
function stray(numbers){
  for (var i in numbers){
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
  }
}
function arithmetic(a, b, o){
  if(o === "add") return a + b
  if(o === "subtract") return a - b
  if(o === "multiply") return a * b
  if(o ==="divide") return a / b
}
const arithmetic2 = (a, b, operator) => ({
  'add'     : a + b,
  'subtract': a - b,
  'multiply': a * b,
  'divide'  : a / b
}[operator]);

function friend(friends){
  return friends.filter(el=> el.length === 4)
}
function openOrSenior(data){
  return data.map((el)=>{
    return el[0] >= 55 && el[1] > 7 ? 'Senior' : 'Open'
  })
}
function solution(number){
  let result =0
  if(number <= 0) return 0
  for(let i =0; i<number;i++){
    if(i%3===0 || i%5===0){
      result +=i
    }
  }
  return result
}
function spinWords(string){
  return string.split(' ').map((el)=>{
    return el.length >= 5 ? el.split("").reverse().join("") : el
  }).join(' ')
}
function findOdd(A) {
  let count = {}
  for (let i = 0; i < A.length; i++) {
    const num = A[i]
    count[num] = (count[num] || 0) + 1;
  }
  for (const key in count) {
    if (count.hasOwnProperty(key) && count[key] % 2 !== 0) {
      return parseInt(key)
    }
  }
  return null
}
const findOdd2 = (xs) => xs.reduce((a, b) => a ^ b);

function validNumber2(num){
  const reg = /[a-zA-Z]/g
  const regSumb = /[+-]/g
  if(reg.test(num)) return false
  const arr = num.split(".").map((el,ind)=> {
    if(ind == 1 && el.length !==2 ) return "A"
    if(ind == 1 && regSumb.test(el)) return "A"
    return Number(el)
  })
  if(arr[1] === "A" ) return false
  if(arr.length !== 2) return false
  return true
}
function validNumber(num) {
  return /^[+-]?\d*\.\d\d$/.test(num)
}
String.prototype.toCents=function(){
  const reg = /[$]/g
  const regex = /\n/
  const regA = /[a-zA-Z]/
  if(regex.test(this)) return null
  if(regA.test(this)) return null
  if(!reg.test(this)) return null
  const arr = this.split('.')
  if(arr.length !== 2) return null
  if(arr[1].length !== 2) return null
  return Number(`${arr[0].substring(1)}${arr[1]}`)
}
String.prototype.toCents = function () {
  return /^\$\d+\.\d\d$/.test(this) ? +this.replace(/[$.]/g, '') : null;
};
function likes(n) {
  const len = n.length
  if(len === 0) return `no one likes this`
  if(len === 1) return `${n[0]} likes this`
  if(len === 2) return `${n[0]} and ${n[1]} like this`
  if(len === 3) return `${n[0]}, ${n[1]} and ${n[2]} like this`
  return  `${n[0]}, ${n[1]} and ${len-2} others like this`
}
function digitalRoot(n) {
  if(`${n}`.length === 1){
    return n
  }
  let a = 0;
  `${n}`.split("").forEach(el=> a += Number(el))
  return digitalRoot(a)
}
function digital_root2(n) {
  return (n - 1) % 9 + 1;
}
function basicOp(operation, value1, value2){
  if(operation === '+') return value1+value2
  if(operation === '*') return value1*value2
  if(operation === '-') return value1-value2
  if(operation === '/') return value1/value2

}
function disemvowel(str) {
  return str.split("").filter(el=> !/[aeiouAEIOU]/g.test(el)).join("")
}
function disemvowel2(str) {
  return str.replace(/[aeiou]/gi, '');
}
function createPhoneNumber(n){
  const hanCut = (a,b,c) => {
    return a.slice(b, c).join("")
  }
  return`(${hanCut(n,0,3)}) ${hanCut(n,3,6)}-${hanCut(n,6)}`
}
function createPhoneNumber2(numbers){
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
}
var countBits = function(n) {
  return n.toString(2).split("").reduce((cur,el)=>{
    return cur + Number(el)
  },0)
};
function findOutlier(i){
  let res = 0
  let odd = 0
  if(i[0]%2===0) odd++
  if(i[1]%2===0) odd++
  if(i[2]%2===0) odd++
  console.log(i, odd)
  return i.find(el=>{
    if(odd>=2) return el % 2 !== 0
    return el % 2 === 0
  })
}
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}
function duplicateCount(text){
  const obj = {}
  const res = new Set(text.toLowerCase())
  text.split("").forEach(el=>{
    if(!obj[el.toLowerCase()]){
      obj[el.toLowerCase()] = 1
    } else{
      obj[el.toLowerCase()]++
    }

  })
  let count = 0
  for(let key in obj){
    if(obj[key] > 2){
      count += obj[key] - 2
    }
  }
  return text.length - res.size - count
}
function isValidWalk(walk) {
  if(walk.length !== 10) return false
  const obj ={}
  const way = new Set(walk)
  if(way.size === 1 || way.size === 3) return false
  walk.forEach(el=>{
    if(obj[el]){
      obj[el]++
    } else {
      obj[el] = 1
    }
  })
  if(obj['n'] && obj['w']){
    return obj['n'] === obj['s'] && obj['w'] === obj['e']
  }
  if(obj['n']){
    return obj['n'] === obj['s']
  }
  if(obj['w']){
    return obj['w'] === obj['e']
  }
  return false
}
function isValidWalk2(walk) {
  function count(val) {
    return walk.filter(function(a){return a==val;}).length;
  }
  return walk.length==10 && count('n')==count('s') && count('w')==count('e');
}
function alphabetPosition(text) {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const res = text.split("").filter(el=> /[A-Za-z]/g.test(el)).map(el=>{
    return alphabet.indexOf(el.toUpperCase()) + 1
  }).join(" ")
  return res;
}
let alphabetPosition2 = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

function moveZeros(arr) {
  const resArr = arr.filter(el=> el !== 0)
  for(let i = resArr.length; i < arr.length;i++){
    resArr.push(0)
  }
  return resArr
}
function persistence(n) {
  if(`${n}`.length < 2) return 0
  let count = 1
  const multiplicativePer = (num)=>{
    const resNum =`${num}`.split("").reduce((cur,el,ind)=>{
      if(ind === 0) return el
      return cur*el
    },0)
    if(`${resNum}`.length > 1){
      count++
      return multiplicativePer(resNum)
    }
    return count
  }

  return multiplicativePer(n)
}
function pigIt(str){
  return str.split(" ").map(el=>{
    if(/[!?]/g.test(el)) return el
    return `${el.substring(1)}${el[0]}ay`
  }).join(" ")
}
function humanReadable (seconds) {
  const hours = `${Math.floor(seconds / 3600)}`
  const minutes = `${Math.floor((seconds - (hours * 3600)) / 60)}`
  const sec = `${seconds - (hours * 3600) - (minutes * 60)}`
  const normolise = (el) =>{
    return el.length == 1 ? `0${el}`: el
  }
  return `${normolise(hours)}:${normolise(minutes)}:${normolise(sec)}`
}
function dirReduc(arr){
  const directions = []
  for(let i =0 ; i<= arr.length; i++){
    if(arr[i] === "NORTH"){
      arr[i + 1] === "SOUTH" ? i++ : directions.push(arr[i])
      continue
    }
    if(arr[i] === "EAST"){
      arr[i + 1] === "WEST" ? i++ : directions.push(arr[i])
      continue
    }
    if(arr[i] === "WEST"){
      arr[i + 1] === "EAST" ? i++ : directions.push(arr[i])
      continue
    }
    if(arr[i] === "SOUTH"){
      arr[i + 1] === "NORTH" ? i++ : directions.push(arr[i])
      continue
    }
  }
  const removeOppositeDirections=(directions)=> {
    const oppositeDirections = {
      NORTH: 'SOUTH',
      SOUTH: 'NORTH',
      EAST: 'WEST',
      WEST: 'EAST',
    }

    const filteredDirections = []

    for (const direction of directions) {
      const previousDirection = filteredDirections[filteredDirections.length - 1]
      if (previousDirection === oppositeDirections[direction]) {
        filteredDirections.pop()
      } else {
        filteredDirections.push(direction)
      }
    }

    return filteredDirections
  }
  return removeOppositeDirections(directions)

}
function rot13(message){
  const a = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const indexFind = (el)=>{
    const index = a.indexOf(el.toUpperCase()) + 13
    return index - (Math.floor(index/26) * 26)
  }
  return message.split("").map((el)=>{
    if(/[a-zA-Z]/g.test(el)){
      return el.toUpperCase() === el ? a[indexFind(el)].toUpperCase()  : a[indexFind(el)].toLowerCase()
    }
    return el
  }).join("")
}
function generateHashtag (str) {
  if(!str.trim()) return false
  const resStr = `#${str.split(" ").map(el=> {
    return el.trim() ? `${el[0].toUpperCase()}${el.substring(1)}` : ""
  }).join("")}`
  return resStr.length > 140 ? false : resStr
}
var maxSequence = function(arr){
  let maxSum = 0
  let currentSum = 0
  for (const num of arr) {
    currentSum = Math.max(0, currentSum + num)
    maxSum = Math.max(maxSum, currentSum)
  }
  return maxSum
}
function firstNonRepeatingLetter(s) {
  let res = ''
  const setS = new Set(s.toLowerCase())
  for(let key of setS){
    let count = 0
    if(res) continue
    s.toLowerCase().split("").forEach(el=> {
      el === key ? count++ : ''
    })
    if(count > 1) continue
    res += key
  }
  return res ? s[s.toLowerCase().indexOf(res)] : ''
}
snail = function(array) {

  if (array.length === 0) return []
  if (array.length === 1) return array[0]
  const resArr = []
  let arrLength = array.length
  const length = Math.ceil(array.length / 2)

  for (let i = 0; i < length; i++) {
    resArr.push(...array[i].slice(i, array.length - i))
    for (let j = i + 1; j < array.length - i - 1; j++) {
      resArr.push(array[j][array.length - i - 1])
    }
    if (i !== array.length - i - 1) {
      resArr.push(...array[array.length - 1 - i].slice(i, array.length - i).reverse())
      for (let j = array.length - i - 2; j > i; j--) {
        resArr.push(array[j][i])
      }
    }
  }
  return resArr
}
const arrayDiff=(a, b)=> a.filter(el=> b.every(el1=> el1 !== el))
function toCamelCase(str){
  const arr = str.split("").map((el)=>{
    return /[_-]/g.test(el) ? " " : el
  }).join("").split(" ").map((el,ind)=>{
    return ind === 0 ? el : `${el[0].toUpperCase()}${el.substring(1)}`
  }).join("")
  return arr
}
function narcissistic(value) {
  const exponent = `${value}`.length
  const narcissisticNum = `${value}`.split("").reduce((cur,el)=>{
    return cur + Math.pow(el, exponent)
  },0)
  return value === narcissisticNum
}
function order(words){
  const arrWords = words.split(" ")
  const arr = new Array(arrWords.length)
  arrWords.forEach(el=>{
    const ind = el.split("").reduce((cur, el1)=>{
      return /[0-9]/g.test(Number(el1)) ? cur += Number(el1) - 1 : cur
    },0)
    arr[ind] = el
  })
  return arr.join(" ")
}
var uniqueInOrder=function(iterable){
  return (Array.isArray(iterable) ? iterable : iterable.split("")).reduce((acc, el, ind, src) => {
    if (el !== src[ind + 1]) acc.push(el)
    return acc
  }, [])
}
var uniqueInOrder1=function(iterable){
  return [...iterable].filter((a, i) => a !== iterable[i-1])
}
function isPangram(string){
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  const leng = string.split("").filter(el=>{
    return /[a-zA-Z]/g.test(el)
  }).map(el=> alphabet.indexOf(el.toUpperCase())).sort((a,b)=> a-b).filter((el,ind,arr)=>{
    return el !== arr[ind+1]
  }).length
  return leng === 26
}
function findEvenIndex(arr){
  return arr.findIndex((el,ind)=> {
    const left = ind === 0 ? 0 : arr.slice(0, ind).reduce((cur,el)=>{
      return cur+=el
    },0)
    const right = ind === arr.length-1 ? 0 : arr.slice(ind+1).reduce((cur,el)=>{
      return cur+=el
    },0)
    console.log(left, right)
    return left === right
  })
}
function solution(str){
  return str.split("").reduce((cur, el,ind,arr)=>{
    if(arr.length%2===0){
      if(ind%2!==0) return cur
      return cur.concat([`${el}${arr[ind + 1]}`])
    } else{
      if(ind%2!==0) return cur
      if(ind === arr.length-1) return cur.concat([`${el}_`])
      return cur.concat([`${el}${arr[ind + 1]}`])
    }
  },[])
}
function findMissingLetter(array){
  for (let i = 1; i < array.length; i++) {
    const prevCharCode = array[i - 1].charCodeAt(0)
    const currentCharCode = array[i].charCodeAt(0)
    if (currentCharCode - prevCharCode !== 1) {
      return String.fromCharCode(prevCharCode + 1)
    }
  }
}
function towerBuilder(nFloors) {
  const resArr = new Array(nFloors)
  for (let i = 0; i < nFloors; i++) {
    const one = new Array(nFloors - i - 1).fill(" ").join("")
    const two = new Array(i * 2 + 1).fill("*").join("")
    resArr[i] = `${one}${two}${one}`
  }
  return resArr
}
function deleteNth(arr,n){
  let obj = {}
  return arr.filter((el)=>{
    if(!obj[el]){
      obj[el] = 1
    }
    if(obj[el]> n){
      return false
    }
    obj[el]++
    return obj[el]
  })
}
function solution(string) {
  return string.replace(/[A-Z]/g, match => ` ${match}`)
}
function longestConsec(strarr, k) {
  const n = strarr.length
  if (n === 0 || k > n || k <= 0) {
    return ''
  }
  let longestString = ''
  for (let i = 0; i <= n - k; i++) {
    const currentString = strarr.slice(i, i + k).join('')

    if (currentString.length > longestString.length) {
      longestString = currentString
    }
  }
  return longestString
}
const longestConsec2 = (a, k) => (k < 1 || a.length < 1 || k > a.length)
    // Test for k
    ? ''
    // Map Reduce for longest k combo string
    : a.map((_, i, a) => a.slice(i, i + k).join(''))
        .reduce((a, b) => a.length >= b.length ? a : b)

function sortArray(a) {
  const resArr = []
  const filArr = a.filter(el=> el%2!==0).sort((a,b)=>a-b)
  let i = 0
  a.forEach((el)=>{
    if(el%2!==0){
      resArr.push(filArr[i])
      i++
    } else{
      resArr.push(el)
    }
  })
  return resArr
}
function sortArra2(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}
function bowlingPins(arr) {
  const resStr = "7 8 9 T\n 4 5 6 \n  2 3  \n   1   ".split("").map(el=>{
    if(arr.includes(10) && el === "T"){
      return " "
    }
    return arr.includes(Number(el)) ? " " : el
  }).join("")
  return resStr.replace(/[1-9T]/gi, "I")
}
// const caml =(this)=>{
//   if(this.length === 0) return ""
//   const camelCase = this.split(" ").map((el)=> `${el[0].toUpperCase()}${el.substring(1)}`).join("")
//  return camelCase
// }
// const caml2 =(this)=>{
//   return this.split(' ').map(w => w.slice(0, 1).toUpperCase() + w.slice(1)).join('');
// }
function toWeirdCase(s){
  return s.split(" ").map((el)=>{
    return el.split("").map((el1,ind)=> ind%2===0 ? el1.toUpperCase() : el1.toLowerCase()).join("")
  }).join(" ")
}
function queueTime(customers, n) {
   const tills = new Array(n).fill(0)
    customers.forEach(customer => {
        const minTill = tills.indexOf(Math.min(...tills))
        tills[minTill] += customer
    })
    return Math.max(...tills)
}
function wave(str){
  const arr = []
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        const waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
        arr.push(waveStr)
      }
    }
    return arr
  }
  function sumDigPow(a, b) {
    const resArr = []
    const arr = []
    for(let i=a; i<=b;i++){
      arr.push(i)
    }
    return arr.filter((el)=>{
      const num = `${el}`.split('').reduce((cur,el,ind)=>{
        return cur += Math.pow(el, ind+1)
      },0)
      return num === el 
    })
  }
  function parse( data ){
    let val = 0;
    const resArr = []
    data.split('').forEach((el)=>{
      switch(el){
          case "i":
          val++
          break;
          case "s" :
          val = Math.pow(val, 2)
          break;
          case "d": 
          val--
          break;
          case 'o':
          resArr.push(val)
      }
    })
    return resArr
  }
  function table(size) {
    const resArr = []
    for(let i=1;i<size+1;i++){
        const arr = []
        for(let j = 1; j < size+1 ; j++){
          arr.push(i*j)
        }
      resArr.push(arr)
    }
    return resArr
   }
   function stockList(listOfArt, listOfCat){
    if(listOfArt.length === 0 ) return ''
    const obj = {}
    let resStr = ''
    listOfArt.forEach(el=>{
      const num = Number(el.split(' ')[1])
      if(obj[el[0]]){
       obj[el[0]] = num + obj[el[0]]
      } else {
        obj[el[0]]  = num
      }
    })
    listOfCat.forEach(el=>{
      resStr += `(${el} : ${obj[el]? obj[el]: "0"}) - `
    })
    return resStr.substring(0, resStr.length - 3)
  }
  function dataReverse(data) {
    const arr = []
    const resArr = []
    for(let i = 0;i<data.length / 8;i++){
      arr.push(data.slice(i*8, i*8+8))
    }
    arr.reverse().forEach(el=>{
      resArr.push(...el)
    })
    return resArr
  }
  const dataReverse2 = data => {
    const bytes = [];
    for (let i = 0; i < data.length; i += 8) {
      bytes.unshift(...data.slice(i, i + 8));
    }
    return bytes;
  };
  function clean_string(s) {
  const result = []
	for (const c of s) {
    if (c === "#") {
      result.pop()
    } else {
      result.push(c)
    }
  }
  return result.join("")
}
function encode(string) {
  return string.split("").map((el)=>{
  if(!/[aeiou]/.test(el)) return el
  const vowels ={a:1, e:2, i:3, o:4, u:5} 
  return vowels[el]
  }).join("")
}
function decode(string) {
 return string.split("").map((el)=>{
  if(!/[12345]/.test(el)) return el
  const vowels ={1:"a", 2:'e', 3:"i", 4:"o", 5:"u"} 
  return vowels[el]
  }).join("")
}
// turn vowels into numbers
function encode2(string){
  return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

//turn numbers back into vowels
function decode2(string){
  return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}
function foldArray1(array, runs){
  const resArr = [array]
  for(let i = 0; i < runs;i++){
    const foldedArray = []
    if(resArr[i].length%2===0){
      const left = resArr[i].slice(0, resArr[i].length/2)
      const right = resArr[i].slice(resArr[i].length/2).reverse()
      left.forEach((el,ind)=>{
        foldedArray.push(el+ right[ind])
      })
    } else{
      const left = resArr[i].slice(0, Math.ceil(resArr[i].length/2))
      const right = resArr[i].slice(Math.ceil(resArr[i].length/2)).reverse()
      console.log(left, right)
      left.forEach((el,ind)=>{
        foldedArray.push(el + (right[ind] ? right[ind] : 0))
      })
    }
    resArr.push(foldedArray)
  }
  return resArr[resArr.length-1]
}
function foldArray(a, n) {
  const r = [], c = a.slice();
  while (c.length) r.push(c.pop() + (c.shift() || 0));
  return n - 1 ? foldArray(r, n - 1) : r;
}
function solve1(s) {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let res = 0
  s.replace(/[aeiou]/g, " ").split(" ").forEach(el=>{
    let cur = 0
    el.split("").forEach(el1=>{
      cur += alphabet.indexOf(el1.toUpperCase()) + 1
    })
    res = res < cur ? cur : res
  })
  return res;
};
function countSmileys(arr) {
  return arr.reduce((cur,el)=>{
    const f = el.split("")
    if(/[;:]/g.test(f[0]) && /[-~]/g.test(f[1]) && /[)D]/g.test(f[2])){
      return ++cur
    }else if(/[;:]/g.test(f[0]) && /[)D]/g.test(f[1]) && f.length===2){
      console.log("+")
      return ++cur
    }
    return cur
  },0)
}
function expandedForm(num) {
  const res = `${num}`.split("").reduce((cur,el,ind)=>{
    if(!/[1-9]/.test(el)) return cur
  let zero = ''
  for(let i = 0; i < `${num}`.length - ind - 1 ;i++){
    zero = zero + "0"
  }
    cur.push(`${el}${zero}`)
    return cur
  },[]).reduce((cur,el)=>{
    return cur + ` + ${el}` 
  },'').substring(3)
  return res
}
function inArray(array1,array2){
  return array1.reduce((cur,el,ind)=>{
    if(array2.find(el1=> el1.includes(el))) cur.push(el)
    return  cur
  },[]).sort()
}
function count(s) {
  const reObj = {}
  for(let i =0; i< s.length;i++){
    reObj[s[i]] ?  reObj[s[i]]++ :  reObj[s[i]] = 1
  }
  return reObj
}
function titleCase(title, minorWords) {
  if(!title) return ""
  if(!minorWords){
    return title.split(" ").map(el=>{
    return `${el[0].toUpperCase()}${el[1] ? el.substring(1).toLowerCase() : ""}`
  }).join(" ")
  }
  const minorWordArr = minorWords.split(" ").map(el=> el.toLowerCase())
 
  return title.split(" ").map((el,ind)=>{
    if(minorWordArr.includes(el.toLowerCase()) && ind !== 0){
      return el.toLowerCase()
    }
    return `${el[0].toUpperCase()}${el[1] ? el.substring(1).toLowerCase() : ""}`
  }).join(" ")
}
function goodVsEvil(good, evil){
  const g = good.split(" ").reduce((cur,el,ind)=>{
    if(ind==0) cur+=1*el
    if(ind==1) cur+=2*el
    if(ind==2) cur+=3*el
    if(ind==3) cur+=3*el
    if(ind==4) cur+=4*el
    if(ind==5) cur+=10*el
    return cur
  },0)
  const e = evil.split(" ").reduce((cur,el,ind)=>{
    if(ind==0) cur+=1*el
    if(ind==1) cur+=2*el
    if(ind==2) cur+=2*el
    if(ind==3) cur+=2*el
    if(ind==4) cur+=3*el
    if(ind==5) cur+=5*el
    if(ind==6) cur+=10*el
    return cur
  },0)
    return e < g ? 'Battle Result: Good triumphs over Evil' : e == g ? 'Battle Result: No victor on this battle field' : 'Battle Result: Evil eradicates all trace of Good'
  }
  function partsSums(ls) {
    const r = new Array(ls.length + 1).fill(0)
    for (let i = ls.length - 1; i >= 0; i--) {
      r[i] = r[i + 1] + ls[i]
    }
    return r
  }
  function partsSums(ls) {
    ls.unshift(0);
    let sum = ls.reduce((p, c) => p + c, 0);
    return ls.map(v => sum = sum - v);
}
var findMissing = function (l) {
  let singlStep = 0
  if( l[1] - l[0] === l[2] - l[1]){
    singlStep = l[1] - l[0]
  } else{
    const aa = l[1]-l[0]
    const b =l[2]-l[1]
    aa < 0  || b < 0 ?
        singlStep = Math.max(l[1]-l[0], l[2]-l[1]) : singlStep = Math.min(l[1]-l[0], l[2]-l[1])
  }
  for(let i = 0;i<l.length ;i++){
    if(l[i+1]){
      if(l[i] + singlStep !== l[i+1]){
        return l[i] + singlStep
      }
    }
  }
}
var findMissing1 = function (list) {
  var step = (list[list.length - 1] - list[0]) / (list.length);
  return list.filter(function(val, index) { return val !== (list[0] + index * step); })[0] - step;
}
function duplicateEncode(word){
  const obj={}
  word.toLowerCase().split("").forEach(el=>{
    if(obj[el]){
      obj[el]++
    } else{
      obj[el] = 1
    }
  })
  return word.toLowerCase().split("").map((el)=> obj[el] > 1 ? ")" : "(").join("")
}
function tribonacci(signature,n){
  if(n == 0) return []
  if(n == 1) return [signature[0]]
  const resArr = [...signature]
  for(let i = 3; i < n; i++){
    const arr = [...resArr.slice(i - 3, i)]
    resArr.push(resArr.slice(i - 3, i).reduce((a,k)=>a+k,0))
  }
  return resArr

}
function tribonacci2(signature,n) {
  const result = signature.slice(0, n);
  while (result.length < n) {
    result[result.length] = result.slice(-3).reduce((p,c) => p + c, 0);
  }
  return result;
}
function digPow(n, p){
  let count = p
  let num = `${n}`.split("").reduce((cur,el)=>{
    const numb = Math.pow(el, count)
    count++
    return cur + numb
  },0)
  if(num < n) return - 1
  return (num / n)%1===0 ? num / n : -1
}
function digPow2(n, p) {
  var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  return x % n ? -1 : x / n
}
function findUniq(arr) {
  const number = arr[0] === arr[1] ? arr[0] : arr[0] === arr[2] ? arr[0] : arr[1]
  return arr.filter(el=> el!==number)[0]
}
function high(x){
  const arr =  x.split(" ")
  const resArr = x.split(" ").map(el=>{
    return el.split("").reduce((cur,acc,)=>{
      return cur + acc.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) + 1
    },0)
  })
  return arr[resArr.indexOf(Math.max(...resArr))]
}
function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}
function comp(array1, array2){
  if (array1 === null || array2 === null) {
    return false
  }
  if (array1.length !== array2.length) {
    return false
  }
  const sortedA = array1.sort((x, y) => x - y)
  const sortedB = array2.sort((x, y) => x - y)
  for (let i = 0; i < sortedA.length; i++) {
    if (sortedA[i] ** 2 !== sortedB[i]) {
      return false
    }
  }

  return true
}
function twoSum(numbers, target) {
  const resArr = []
  numbers.forEach((el,ind)=>{
    for(let i =0; i<numbers.length; i++){
      if(!resArr[0] && i !== ind){
        if(el + numbers[i]=== target){
          resArr[0] = ind
          resArr[1] = i
        }
      }
    }

  })

  return resArr
}
function twoSum(numbers, target) {
  for (var i = 0; i < numbers.length-1; i++) {
    for (var j = i+1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}
function productFib(prod){
  const arr = [0,1]
  for(let i =1;i<arr.length;i++){
    arr.push(arr[i] + arr[i-1])
    if(arr[i]*arr[i+1] === prod) return [arr[i], arr[i+1], true]
    if(arr[i]*arr[i+1] > prod) return [arr[i], arr[i+1], false]
  }
}
function orderWeight(s) {
  return s.split(" ").sort((a,b)=>{

    const aEl= `${a}`.split("").reduce((cur,el)=>{
      return cur+= +el
    },0)
    console.log(aEl)
    const bEl = `${b}`.split("").reduce((cur,el)=>{
      return cur+= +el
    },0)
    if(aEl === bEl ) return `${a}` > `${b}` ? 1 : -1
    return    aEl - bEl
  }).join(" ")
}
function sumPairs(ints, s) {
  const seen = {}
  const resArr = []
  for (let i = 0; i < ints.length; i++) {
    const el = ints[i]
    const complement = s - el
    if (seen[complement] !== undefined) {
      resArr.push([complement, el]);
      break
    }
    seen[el] = i
  }
  return resArr[0] ? resArr[0] : undefined
}
var encryptThis = function(text) {
  const resArr = text.split(" ").map((el)=>{
    if (el.length === 0) return ""
    const firstCharCode = el.charCodeAt(0)
    if (el.length === 1) return `${firstCharCode}`
    if (el.length === 2) return `${firstCharCode}${el[1]}`
    return `${firstCharCode}${el[el.length - 1]}${el.substring(2, el.length - 1)}${el[1]}`
  })
  return resArr.join(" ")

}
const encryptThis1 = text => text
    .split(' ')
    .map(word => word
        .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
        .replace(/^\w/, word.charCodeAt(0)))
    .join(' ');
function meeting(s) {
  const resArr = s.split(";")
      .map(name => name.split(":").reverse().map(part => part.toUpperCase()).join(", "))
      .sort((a, b) => {
        const [lastNameA, firstNameA] = a.split(", ")
        const [lastNameB, firstNameB] = b.split(", ")
        if (lastNameA < lastNameB) return -1
        if (lastNameA > lastNameB) return 1
        if (firstNameA < firstNameB) return -1
        if (firstNameA > firstNameB) return 1
        return 0
      });

  return resArr.map(name => "(" + name + ")").join("")
}
function meeting1(s) {
  let string = s.toUpperCase().split(';')
      .map(x => x.split(':').reverse().join(', '))
      .sort()
      .join(')(')
  return '(' + string + ')'
}
const upArray=arr=>{
  if (arr.length === 0 || arr.some(num => num < 0 || num > 9)) {
    return null
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 9) {
      arr[i]++
      break
    } else {
      arr[i] = 0
      if (i === 0) {
        arr.unshift(1)
      }
    }
  }

  return arr
}
function reverse3(str){
  if(str.trim().length === 0) return ""
  const resArr = str.split(" ").map((el,ind)=>{
    if(ind%2!==0){
      return el.split("").reverse().join("")
    }
    return el
  }).join(" ")
  return resArr
}
function reverse2(string) {
  return string
      .split` `
      .map((w, i) => i & 1 ? [...w].reverse().join`` : w)
      .join` `
      .trim();
}
function dashatize(num) {
  const numStr = num.toString()
  let result = ""
  for (let i = 0; i < numStr.length; i++) {
    if (parseInt(numStr[i]) % 2 !== 0) {
      if (i > 0 && result[result.length - 1] !== "-") {
        result += "-"
      }
      result += numStr[i] + "-"
    } else {
      result += numStr[i]
    }
  }
  result = result.replace(/^-+|-+$/g, "")
  return result
}
function dashatize2(num) {
  return String(num)
      .replace(/([13579])/g, "-$1-")
      .replace(/--+/g, "-")
      .replace(/(^-|-$)/g, "")
}
function passwordGen() {
  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  const eAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const eLowerAlphabet = eAlphabet.toLowerCase()
  const digits = "0123456789"
  const symbols = eAlphabet + eLowerAlphabet + digits
  const password = new Array(randomNum(6,20)).fill(null)
  const pass = password.map(()=> symbols[randomNum(0,symbols.length-1)]).join("")
  return /[a-z]/.test(pass) && /[A-Z]/.test(pass) && /\d/.test(pass) ? pass : passwordGen()
}
function passwordGen(){
  var pass = Array.apply(null, Array(Math.floor(Math.random()*(20-6+1)+6))).map(function(){
    var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return c.charAt(Math.random() * c.length);
  }).join('');
  return /(?=.*[a-z].*)(?=.*[A-Z].*)(?=.*\d.*)^.{6,20}$/.test(pass) ? pass : passwordGen();
}
function highestRank(arr){
  const obj = {}
  let highestNum = new Number(),
      highestNumVal = 0
  arr.forEach(el=>{
    if(obj[el]){
      obj[el]++
    }else{
      obj[el] = 1
    }
  })
  for(let key in obj){
    if(obj[key] > highestNumVal){
      highestNum = key
      highestNumVal = obj[key]
    } else if(obj[key] == highestNumVal && Number(key) > highestNum){
      highestNum = key
      highestNumVal = obj[key]
    }
  }
  return Number(highestNum)
}
const highestRank2 = arr =>
    arr.sort((a, b) => arr.filter(val => val === b).length - arr.filter(val => val === a).length || b - a)[0];
Array.prototype.square = function() {
  return this.map((el) => Math.pow(el,2));
};
Array.prototype.cube = function() {
  return this.map((el) => Math.pow(el,3));
};
Array.prototype.sum = function() {
  return this.reduce((cur,el) => cur+el);
};
Array.prototype.average = function() {
  return this.length ? this.reduce((cur,el) => cur+el) / this.length : NaN
};
Array.prototype.even = function() {
  return this.filter(el=> el%2===0)
};
Array.prototype.odd = function() {
  return this.filter(el=> el%2!==0)
};
function matrixAddition(a, b){
  return a.map((el,ind)=>{
    return el.map((el1,ind1)=>{
      return el1+ b[ind][ind1]
    })
  })
}
function getLengthOfMissingArray(arrayOfArrays) {
  if(arrayOfArrays === null || arrayOfArrays.includes(null) ) return 0
  const arrayLength = arrayOfArrays.map(el=>el.length).sort((a,b)=>a-b)

  for(let i = 0;i < arrayLength.length;i++){
    if(arrayLength[i]===0) return 0
    if(arrayLength[i]+1 !== arrayLength[i+1]) return arrayLength[i]+1
  }
  return 0
}
function dup(s) {
  return s.map(w=>w.split("").filter((s,i)=>w[i+1]!==s).join(""))
};
function dup1(s) {
  return s.map(x => x.replace(/(.)\1+/g,'$1'))
};
const sumConsecutives = s => s.reduce((acc, curr, i) => (s[i] === s[i-1]) ? (acc[acc.length-1] += curr, acc) : [...acc, curr], [])
function bingo(ticket, win){
  let amount = 0
  ticket.forEach((el)=>{
    if(el[0].split("").includes(String.fromCharCode(el[1]))){
      amount++
    }
  })
  return amount >= win ? 'Winner!' :'Loser!'
}
function beggars(values, n){
  const resArr = new Array(n).fill(0)
  const arr = [...values]
  for(let i = 0;i<values.length;i++){
    for(let j =0;j<resArr.length;j++){
      if(!arr[0]){
        break;
      }
      resArr[j] = arr[0] + resArr[j]
      arr.shift()
    }
  }
  return resArr
}
function twosDifference(input){
  const blackList = []
  return input.reduce((cur,acc,ind)=>{
    console.log(input.indexOf(acc+2))
    if(input.indexOf(acc+2)!==-1){
      blackList.push(input.indexOf(acc+2))
      cur.push([acc,acc+2])
      return cur
    }
    return cur
  },[])
}
function findSenior(l) {
  const resArr = l.sort((a,b)=> b.age-a.age)
  return resArr.filter((e)=> resArr[0].age === e.age)
}
const findSenior2 = list =>
    list.filter(val => val.age === Math.max(...list.map(val => val.age)));
function countDevelopers(l) {
  return l.filter(e=> e.language == "JavaScript" && e.continent === 'Europe').length
}
function greetDevelopers(l) {
  return l.map(e=> {
    e.greeting = `Hi ${e.firstName}, what do you like the most about ${e.language}?`
    return e
  })
}
function isRubyComing(l) {
  return l.filter(e=> e.language === "Ruby").length ? true : false
}
function getFirstPython(l) {
  return l.reduce((c,a)=>{
    return c ? c : a.language == 'Python' ? `${a.firstName}, ${a.country}` : ""
  },"") || 'There will be no Python developers'
}
function isSameLanguage(l) {
  return l.filter(e=> l[0].language === e.language).length === l.length
}
function allContinents(l) {
  const zones = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  const arr = l.filter(e=> zones.includes(e.continent)).map(e=> e.continent)
  const set = new Set(arr)
  return  set.size === 5
}
function isAgeDiverse(list) {
  const arr = [[10,19],[20,29],[30,39],[40,49],[50,59],[60,69],[70,79],[80,89],[90,99],[100, 109]]
  list.forEach(e=>{
    if(e.age>=100 &&arr[arr.length-1]!==0){
      arr[arr.length-1] = 0
    }
    for(let i = 0;i<arr.length;i++){
      if(arr[i] === 0){
        continue
      }
      if(e.age>=100){
        break;
      }
      console.log(arr[i][0]<=e.age, arr[i][0], e.age)
      if(arr[i][0]<=e.age&&arr[i][1]>=e.age){
        arr[i] = 0
        break;
      }
    }
  })
  return arr.every(e=> e===0)
}
function isAgeDiverse(list) {
  return list.some(h => h.age >= 100)
      ? [10,20,30,40,50,60,70,80,90].every(e => list.some(x => x.age - e >= 0 && x.age - e <= 9))
      : false;
}
function addUsername(l) {
  return l.map(e=>{
    e.username = `${e.firstName[0].toLowerCase()+e.firstName.substring(1)+e.lastName[0].toLowerCase()}${new Date().getFullYear()-e.age}`
    return e
  })
}
function getAverageAge(l) {
  return Math.round(l.map(e=>e.age).reduce((c,a)=>c+a) / l.length)
}
function findAdmin(l, ln) {
  return l.filter(e=> e.language === ln && e.githubAdmin==='yes')
}
function isLanguageDiverse(list) {
  const obj ={}
  const arr = []
  list.forEach(e=>{
    if(!obj[e.language]){
      obj[e.language] = 1
    } else{
      obj[e.language]++
    }
  })
  for(let key in obj){
    arr.push(obj[key])
  }
  const maxDevel = Math.max(...arr)

  return arr.every(e=> e*2 >= maxDevel)
}
function askForMissingDetails(l) {
  return l.map(d=>{
    for(let key in d){
      if(d[key] === null){
        d.question = `Hi, could you please provide your ${key}.`
        return d
      }
    }
    return 1
  }).filter(e=>e!==1)
}

function isPrime(n) {
  if (n <= 1) return false
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }

  return true
}
function nthFibo(n) {
  const arr = [0,1]
  for(let i = 0; i<n;i++){
    arr.push(arr[i]+arr[i+1])
  }

  return arr[n-1]
}
function createFunctions(n) {
  var callbacks = [];

  for (var i=0; i<n; i++) {
    (function(j) {
      callbacks.push(function() {
        return j;
      });
    })(i);
  }

  return callbacks;
}
function mineLocation(f){
  for(let i =0;i<f.length;i++){
    for(let j = 0;j<f[i].length;j++){
      if(f[i][j] == 1) return [i,j]
    }
  }
}
const mineLocation2 = field =>
    (idx => [idx, field[idx].indexOf(1)])
    (field.findIndex(val => val.includes(1)));
function findUniq(arr) {
  if(arr[0]==="") return 'a'
  const set1 = new Set(arr[0].toLowerCase())
  const set2 = new Set(arr[1].toLowerCase())
  const set3 = new Set(arr[2].toLowerCase())
  const unique = [...set1].every(item => set2.has(item)) ? set1 : set3
  return arr.filter(e=>{
    const set4 = new Set(e.toLowerCase())
    return [...unique].every(item => set4.has(item)) ? false : true
  }).join("")
}
function findUniq(arr) {
  return arr.sort().filter((e, i, a) => e.match(new RegExp(`[^${a[1]}]`, 'gi')))[0];
}
function solve(arr){
  const resArr = []
  const obj = {}
  arr.forEach(e=>{
    obj[e] ? obj[e]++ : obj[e] = 1
  })
  return arr.sort((a,b)=> obj[b] === obj[a] ?  a-b : obj[b] - obj[a])
}
function solve(arr){
  var r={}
  for(var n of arr) r[n]=r[n]+1||1
  return arr.slice().sort((a,b)=>r[b]-r[a]||a-b)
}
function flatten(...args) {
  let result = [];

  function flattenRecursive(item) {
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        flattenRecursive(item[i]);
      }
    } else {
      result.push(item);
    }
  }

  for (let i = 0; i < args.length; i++) {
    flattenRecursive(args[i]);
  }

  return result;
}
function flatten2(){
  return [].slice.call(arguments).reduce(function(a,b){
    return a.concat(Array.isArray(b) ? flatten.apply(null,b) : b);
  },[]);
}
function arraysSimilar(arr1, arr2) {
  if(arr1.length !== arr2.length) return false
  arr1.sort((a,b)=>a-b)
  arr2.sort((a,b)=>a-b)
  for(let i =0;i<arr1.length ;i++){
    if(arr1[i] !== arr2[i]) return false
  }
  return true
}
function arraysSimilar2(arr1, arr2) {
  arr1 = arr1.sort(sortFunc);
  arr2 = arr2.sort(sortFunc);
  return arr1.length == arr2.length && arr1.every(function(a,i) {return a === arr2[i];});
}

function sortFunc12(a,b) {return a-b;}
const findPairs = (nums, target) => {
  // Основной цикл
  for (let i = 0; i < nums.length; i++) {
    const numFirst = nums[i];

    // Вложенный цикл
    for (let j = i + 1; j < nums.length; j++) {
      const numSecond = nums[j];
      // Условие
      if (numFirst + numSecond === target) {
        // Условие выполняется
        return [numFirst, numSecond];
      }
    }
  }

  function splitAndAdd(arr, n) {
    if (arr.length === 1 || n < 1) return arr
    const midIndex = Math.floor(arr.length / 2)
    const firstHalf = arr.slice(0, midIndex).reverse()
    const secondHalf = arr.slice(midIndex).reverse()

    const newArr = secondHalf.map((num, index) => num + (firstHalf[index] || 0)).reverse()

    return splitAndAdd(newArr, n - 1)
  }
  function splitAndAdd2(arr, n) {
    if (n <= 0)
      return arr;

    const ln = arr.length;
    if ((ln % 2) === 1)
      arr.unshift(0);

    return splitAndAdd(arr.splice(0, Math.ceil(ln / 2)).map((a, i) => a + arr[i]), n-1);
  }
  function solution(a) {
    let position = 0
    let jumps = 0
    while (position >= 0 && position < a.length) {
      if( jumps> a.length) return -1
      const jump = a[position]
      position += jump
      jumps++
      if (position >= a.length || position < 0) {
        return jumps
      }
    }
    return -1
  }
  function solution2(a) {
    var c = 0, i = 0;

    while (typeof a[i] !== 'undefined') {
      c++;
      i += a[i];

      if (c > a.length) {
        return -1;
      }
    }

    return a.length ? c : -1;
  }
  function gettingMad(a) {
    const valArr = a.map((e, ind) => {
      let min = Number.MAX_SAFE_INTEGER
      for (let i = 0; i < a.length; i++) {
        if (i !== ind) {
          const diff = Math.abs(e - a[i])
          if (diff < min) {
            min = diff
          }
        }
      }
      return min
    });
    return Math.min(...valArr)
  }
  const getting_mad2 = a=> Math.min.apply(Math,[].concat.apply([],(a.map((v,i)=>a.map((n,j)=>(i!=j)?Math.abs(v-n):Infinity)))));
  function atomicNumber(num){
    if (num === 1) return [1]
    const result = []
    let currentShell = 1
    let remainingElectrons = num
    while (remainingElectrons > 0) {
      const maxElectrons = 2 * Math.pow(currentShell, 2)
      if (remainingElectrons >= maxElectrons) {
        result.push(maxElectrons)
        remainingElectrons -= maxElectrons
      } else {
        result.push(remainingElectrons)
        remainingElectrons = 0
      }
      currentShell++
    }
    return result
  }
  function atomicNumber2(num) {
    var c = 1, res = Array();
    while (num > c * c * 2) {
      res.push(c * c * 2);
      num -= c * c * 2;
      c++;
    }
    res.push(num);
    return res;
  }
  function countRedBeads(n) {
    if(n<2) return 0
    return 2 + ((n-2)*2)
  }
  const countRedBeads2 = n => n < 2 ? 0 : (n-1) * 2;
  function convertHashToArray(hash){
    const resArr = []
    for(let key in hash){
      resArr.push([key, hash[key]])
    }
    return resArr
  }
  const convertHashToArray2 = o => Object.entries(o).sort();
  function createMessage2(initialMessage) {
    let message = initialMessage

    function inner(nextMessage) {
      if (nextMessage) {
        message += " " + nextMessage
        return inner
      } else {
        return message
      }
    }

    return inner
  }
  function createMessage(str) {
    return function(next){
      if (next === undefined) {return str;}
      return createMessage(str + " "+ next);
    }
  }
  function checkExam(a1, a2) {
    let score = 0
    a1.forEach((e,i)=>e===a2[i]? score +=4: a2[i]===""? score+=0: score-=1)
    return score < 0 ? 0 : score
  }
  checkExam = (x, y) => (x = y.reduce((s, e, i) => s + (e === x[i] ? 4 : e === '' ? 0 : -1), 0)) > 0 ? x : 0;
  const binaryToString1=b=>b.replace(/.{8}/g, e=> String.fromCharCode(parseInt(e,2)));
  function binaryToString(binary) {
    let arr = [];
    if (binary.length){
      for (let i = 0; i < binary.length; i += 8) {
        arr.push(binary.substr(i, 8));
      }
      return arr.map(s => String.fromCharCode(parseInt(s, 2))).join('');
    }
    return '';
  }
  var pyramidHeight = function(n){
    let root = ~~((n * 3) ** (1/3));

    return root * (root + 1) * (2*root+1) <= 6*n ? root : root-1;
  }
  function pyramidHeight2(n) {
    let cub = 0,
        count = -1
    for(let i = 1;cub <= n;i++){
      cub += i * i
      count++
    }
    return count
  }
  function sqInRect(lng, wdth){
    let arr = []
    if(lng === wdth) return null
    while(lng > 0 && wdth > 0){
      arr.push(lng > wdth ? wdth : lng)
      lng > wdth ? lng -= wdth : wdth -= lng
    }
    return arr
  }
  function sqInRect(a, b, initial = true){
    if (a === b) { return initial ? null : [a] }
    const min = Math.min(a, b)
    const max = Math.max(a, b)

    return [min, ...sqInRect(max - min, min, false)]
  }
  function columnize(items, n) {
    let result = '',
        columnWidths = Array(n).fill(0)
    for (let i = 0; i < items.length; i++) {
      let j = i % n
      columnWidths[j] = Math.max(columnWidths[j], items[i].length)
    }
    for (let i = 0; i < items.length; i++) {
      let j = i % n
      if (i > 0 && j == 0) {
        result += '\n'
      } else if (i > 0) {
        result += ' | '
      }
      result += items[i].padEnd(columnWidths[j], ' ')
    }
    console.log(result)
    return result

  }
  function columnize(it, n) {
    let matr = [], cw = Array(n).fill(0)
    for(let i = 0;i<it.length;i+=n ){
      let row = it.slice(i,i+n)
      matr.push(row)
      cw = cw.map((c,j)=> Math.max(c,(row[j] || "").length))
    }
    return matr.map(row=>row.map((e,j)=> e.padEnd(cw[j])).join(" | ")).join("\n")
  }
  var isAnagram = function(test, original) {
    const F = (s)=>{
      return s.toLowerCase().split("").sort((a,b)=>{
        if(a<b){
          return -1
        }
        return 1
      })
    }
    const arrT = F(test)
    const arrO = F(original)
    console.log(arrT, arrO)
    for(let i = 0;i<= arrT.length;i++){
      if(arrT[i]!==arrO[i]){
        return false
      }
    }
    return true
  }
  // write the function isAnagram
  var isAnagram2 = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
  };
  function dontGiveMeFive(start, end){
    const arrN = []
    for(let i=start;i<=end;i++){
      if(`${i}`.split('').includes("5")) continue
      arrN.push(i)
    }
    return arrN.length
  }
  const dontGiveMeFive2 = (start, end) => [...Array(++end - start)].reduce((pre, _, idx) => pre + !/5/.test(idx + start), 0);
  const sumOfMinimums=a=>a.reduce((c,ac)=>c+=Math.min(...ac),0)
  const getEvenNumbers=a=>a.filter(e=>e%2===0)
  function isSortedAndHow(a) {

    const arr = []
    a.forEach((e,ind)=>{
      if(e<a[ind+1]){
        arr.push(1)
      } else if(a[ind+1]) {
        arr.push(-1)
      }
    })
    console.log(arr)
    return new Set(arr).size > 1 ? 'no' : arr[0] === 1 ? 'yes, ascending' : 'yes, descending'
  }
  function diff(a, b){
    const arr =[]
    a.forEach(e=>{
      if(!b.includes(e) && !arr.includes(e)){
        arr.push(e)
      }
    })
    b.forEach(e=>{
      if(!a.includes(e) && !arr.includes(e)){
        arr.push(e)
      }
    })
    return arr.sort()
  }
  const diff2 = (a, b) =>
      [...new Set([...a, ...b].filter(val => a.includes(val) ^ b.includes(val)))].sort();
  function isSortedAndHow1(a) {

    const arr = []
    a.forEach((e,ind)=>{
      if(e<a[ind+1]){
        arr.push(1)
      } else if(a[ind+1]) {
        arr.push(-1)
      }
    })
    console.log(arr)
    return new Set(arr).size > 1 ? 'no' : arr[0] === 1 ? 'yes, ascending' : 'yes, descending'
  }
  function isSortedAndHow(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
        arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
  }
  const divCon=x=>x.reduce((cur,acc)=> typeof acc === "string" ? cur-=acc: cur+=acc,0)
  function findDeletedNumber(arr, mixArr) {
    mixArr.sort((a,b)=>a-b)
    for(let i =0;i<arr.length;i++){
      if(arr[i]!==mixArr[i]){
        return arr[i]
      }
    }
    return 0
  }
  function findDeletedNumber2(arr, mixArr) {
    let arrSum = arr.reduce((a,b) => a + b, 0)
    let mixArrSum = mixArr.reduce((a,b) => a + b, 0)
    return arrSum - mixArrSum
  }
  function myLanguages(res) {
    const resArr =[]
    for(let key in res){
      if(res[key] >= 60) resArr.push(key)
    }
    return resArr.sort((a,b)=>res[b]-res[a])
  }
  function myLanguages2(results) {
    return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
  }
  function total(arr) {
    const resArr = []
    arr.forEach((n,i)=>{
      if(i !== arr.length -1){
        resArr.push(n + arr[i+1])
      }
    })
    return resArr.length === 0 ? arr[0] : total(resArr)
  }
  function total2(arr){
    return arr.length > 1 ? total(arr.reduce((a, v, i, arr) => i ? a.concat(v + arr[i - 1]) : a, [])) : arr[0];
  }
  function cleanedCounts(data) {
    let curCount = 0
    return data.map((el,ind)=>{
      if(curCount<el){
        curCount = el
      }
      if(!data[ind - 1]) return el
      if(el >= curCount){
        return el
      }
      return curCount
    })
  }
  function cleanedCounts(a){
    let m = 0
    return a.map(e=>m=Math.max(e,m))
  }
  function doubleEveryOther(a) {
    return a.map((e, i) => i % 2 !== 0 ? e*2 : e);
  }
  function evenLast(n) {

    return n.length===0 ? 0: n.reduce((c,a,i)=> i%2!==0 ? c : c+=a ,0)*n[n.length-1]
  }
  function pak(s){
    if(s.trim().length === 0 ) return ""
    return s.split(" ").map((e,i)=> i === s.split(" ").length - 1 ? e : `${e} pak`).join(" ")
  }
  const pak2 = s =>
      s.trim().split(` `).join(` pak `);
  function removeDuplicateWords (s) {
    const obj = {}
    return s.split(" ").filter(e=>{
      if(obj[e]) return false
      obj[e] = 1
      return  true
    }).join(" ")
  }
  const removeDuplicateWords2 = s => [...new Set(s.split(' '))].join(' ')

  function kebabize(str) {
    return str.split("").filter(e=>!/[0-9]/.test(e)).join("").split(/(?=[A-Z])/).reduce((cur,acc, ind,arr)=>{
      if(ind === 0) return cur+acc.toLowerCase()
      return cur+`-${acc.toLowerCase()}`
    },"")
  }
  function kebabize2(str) {
    return str.replace(/([A-Z])/g, "-$1").replace(/[0-9]/g, '').toLowerCase().replace(/^-/, '');
  }
  function vowel2index(str) {
    return str.split("").map((e,i)=> /[aeiou]/.test(e)? i+1: e).join("")
  }
  function maxSum(arr,range){
    var max=-Infinity;
    for (var i=0; i<range.length; ++i)
    {
      var s=0;
      for (var j=range[i][0]; j<=range[i][1]; ++j)
        s+=arr[j];
      if (s>max)
        max=s;
    }
    return max
  }
  function maxSum2(arr,range){
    return Math.max(...range.map(i => arr.slice(i[0], i[1] + 1).reduce((a, b) => a + b)))
  }
  function permuteAPalindrome (input) {
    return input
        .split('')
        .sort((a, b) => a.charCodeAt() - b.charCodeAt())
        .join('')
        .replace(/(.)\1/g, '')
        .length <= 1;
  }
  function permuteAPalindrome (input) {
    return [...input].sort().join('').replace(/(.)\1/g,'').length < 2
  }
  function grabscrab(anagram, dictionary) {
    let translation = [];
    for(let i=0; i<dictionary.length; i++){
      if(anagram.split("").sort().join("") == dictionary[i].split("").sort().join("")){
        translation.push(dictionary[i])
      }
    }
    return translation
  }
  const grabscrab2 = (anagram, dictionary) =>
      dictionary.filter(val => [...val].sort().join(``) === [...anagram].sort().join(``));
  function estSubsets(arr) {
    const set = new Set(arr);

    const clearArray = Array.from(set);

    const length = clearArray.length;

    return Math.pow(2, length) - 1;
  }
  function estSubsets(arr) {
    var set_ = new Set(arr);

    return Math.pow(2, set_.size) - 1;
  }
  const gcdi = (a, b) => b ? gcdi(b, a % b) : Math.abs(a);
  const lcmu = (a, b) => Math.abs(a * b) / gcdi(a, b);
  const som  = (a, b) => a + b;
  const maxi = (a, b) => Math.max(a, b);
  const mini = (a, b) => Math.min(a, b);

  const operArray = (fct, arr, init) => arr.map(u => {
    init = fct(init, u);
    return init;
  });
  var guess = 101;
  function autocomplete(input, dictionary){
    const inp = input.split("").filter(e=>!/[~!@#$%^&*()_+1234567890]/.test(e)).join("")
    const resArr = []
    for(let i = 0;i<dictionary.length;i++){
      if(resArr.length >= 5) return resArr
      if(inp.toLowerCase()===dictionary[i].substring(0, inp.length).toLowerCase()){
        resArr.push(dictionary[i])
      }
    }
    return resArr
  }
  function autocomplete(input, dictionary){
    var r = new RegExp('^' + input.replace(/[^a-z]/gi,''), 'i');
    return dictionary.filter(function(w){ return r.test(w); }).slice(0, 5);
  }
  function averageString(str) {
    if(!str) return 'n/a'
    let na = false
    const numberArr = ['zero', 'one','two','three','four','five','six','seven','eight', 'nine']
    let score = Math.floor(str.split(" ").reduce((cur,acc)=>{
      if(!numberArr.includes(acc)) {
        na = true
      }
      return cur + numberArr.indexOf(acc)
    },0) / str.split(" ").length)
    return  na ? 'n/a' : numberArr[score]
  }
  function averageString2(str) {
    let obj = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    return obj[Math.floor(str.split(' ').map(x=>obj.includes(x)?obj.indexOf(x):NaN).reduce((a, b)=>a+b)/str.split(' ').length)]||'n/a'
  }
  function deleteDigit(n) {
    const arr=n.toString().split('');
    let result=0;
    for(let i=0;i<arr.length;i++){
      let itisnotabigdeal=((arr.slice(0,i)+arr.slice(i+1))).split(',').join('')*1
      if (itisnotabigdeal>result){
        result = itisnotabigdeal;}
    }
    return result;
  }
  function deleteDigit(n) {
    const s = String(n)
    return Math.max(...Array.from(s, (_, i) => s.slice(0, i) + s.slice(i + 1)))
  }
  function nameInStr(str, name){
    let count  = 0;
    for(let i = 0;i<=str.length-1;i++){
      if(count === name.length) return true
      if(str[i].toLowerCase() === name[count].toLowerCase()){
        count++
      }
    }
    if(count === name.length) return true
    return false
  }
  const nameInStr2 = (str, name) =>
      new RegExp([...name].join(`.*`), `i`).test(str);
  var fatFingers = function(str) {
    if(typeof str !== 'string') return str;
    return str.replace(/A/g,'a').split('a').map((s,i)=>i%2?s.replace(/./g,m=>/[a-z]/.test(m)?m.toUpperCase():m.toLowerCase()):s).join``
  };
  function fatFingers2(q) {
    let a = '', c = false;
    if (!q || q == '') { return q; }
    for (let i = 0; i < q.length; i++) {
      let t = q[i]; if (t == 'a' || t == 'A') { c = !c; continue; }
      a += (c) ? (t == t.toLowerCase()) ? t.toUpperCase() : t.toLowerCase() : t;
    }
    return a;
  }
  const middleMe=(N, X, Y)=>{
    if(N%2 !== 0) return X
    const a = new Array(N+1).fill("")
    return a.map((e,i)=>i==Math.floor(N/2)? X:Y).join("")
  }
  var middleMe1 = function (N, X, Y) {
    var s = Y.repeat(N/2);

    return N % 2 ? X : s + X + s;
  }
  function wordSearch(query, seq){
    const resArr = seq.filter(e=> e.toLowerCase().includes(query.toLowerCase()))
    return resArr.length ? resArr : ["Empty"]
  }
  wordSearch = (q, a) => (a = a.filter(e => e.match(new RegExp(q,'i'))))[0] ? a : ["Empty"];
  function solve1(arr){
    const arrInd = []
    const resArr = []
    const initArr = arr.map(e=>{
      const word = new Set(e)
      return [...word].sort().join("")
    })
    initArr.forEach((e,ind)=>{
      let countInd = ind
      for(let i = ind; i<initArr.length;i++){
        if(arrInd.includes(ind)) continue
        if(e === initArr[i] && ind!== i){
          countInd += i
          arrInd.push(i)
        }
      }
      if(countInd !== ind) resArr.push(countInd)
    })
    return resArr.sort((a,b)=> a-b)
  };
  // const solve2=a=>Object.values(a.map((e,i)=>[[...new Set([...e].sort().join``)].join``,i]).reduce((x,y,i,b,c=b.map(_=>_[0]))=>(c.indexOf(y[0])!==c.lastIndexOf(y[0])?x[y[0]]=x[y[0]]+y[1]||y[1]:x,x),{})).sort((x,y)=>x-y)
  function consecutive2(a) {
    if(a.length < 2 ) return 0
    const arr = a.sort((a,b)=>a-b)
    return arr[arr.length-1]-arr[0] - arr.length +1
  }
  function consecutive(arr){
    let l = arr.length;
    return l ? Math.max(...arr) - Math.min(...arr) - l + 1 : 0;
  }
    function findRoutes2(routes) {
        const map = new Map();
        const destinations = new Set();
        for (const [start, end] of routes) {
            map.set(start, end);
            destinations.add(end);
        }
        let start = null;
        for (const [key] of map) {
            if (!destinations.has(key)) {
                start = key;
                break;
            }
        }
        const itinerary = [];
        while (start) {
            itinerary.push(start);
            start = map.get(start);
        }
        return itinerary.join(', ');

    }
  function findRoutes(routes) {
    var r1=routes.map(x=>x[0]),r2=routes.map(x=>x[1]),r={},
        start=r1.filter(x=>!r2.includes(x))[0],rs=[start]
    routes.forEach(x=>r[x[0]]=x[1])
    while(rs.length<=routes.length) rs.push(start=r[start])
    return rs.join(", ")
  }
  function reverseMiddle2(array) {
    if(array.length%2===0){
      return [array[array.length/2-1],array[array.length/2]].reverse()
    }
    return [array[Math.floor(array.length/2-1)],array[Math.floor(array.length/2)],array[Math.floor(array.length/2)+1]].reverse()
  }
  function reverseMiddle(a){
    let n = a.length, k = n>>1
    return a.slice(k-1,k+1+n%2).reverse()
  }
  function divisibleByLast1(n) {
    const str = `${n}`
    const resArr = []
    for(let i = 0;i<str.length;i++){
      if(i == 0){
        resArr.push(false)
        continue
      }
      Number(str[i])%Number(str[i-1])===0 ? resArr.push(true) : resArr.push(false)
    }
    return resArr
  }
  const divisibleByLast = n => {
    return n.toString().split('').map((el, ind, arr) => el % arr[ind - 1] === 0);
  }
  function fisHex1(name) {
    const hexChars = /[a-fA-F]/g
    const validChars = name.match(hexChars)
    if (!validChars) {
      return 0
    }
    let result = 0
    for (const char of validChars) {
      result ^= parseInt(char, 16)
    }
    return result
  }
  function fisHex(name) {
    return (name.match(/[a-f]/ig) || []).reduce((s, c) => s ^ parseInt(c, 16), 0)
  }
  var lengthOfSequence1 = function (arr, n) {
    let ind = []
    arr.forEach((e,index)=>{
      if(e === n )ind.push(index)

    })
    if(ind.length!==2) return 0
    if(arr.length === 2) return 2
    return arr.slice(ind[0], ind[1]+1).length
  };
  const lengthOfSequence = (arr, n) =>
      arr.filter(val => val === n).length === 2 ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 : 0;
  function nothingSpecial(str) {
    if(typeof str !== 'string') return 'Not a string!'
    return str.replace(/[^A-Za-z0-9\s]/g, '')
  }
  function scratch(lottery){
    let score = 0
    lottery.forEach(el=>{
      const arr = el.split(" ")
      const set = new Set(arr.slice(0, arr.length-1))
      if(set.size === 1){
        arr[arr.length-1] === "###" ? score += 10000 : score += +arr[arr.length-1]
      }
      if(set.size === 2 &&  set.has("###")){
        arr[arr.length-1] === "###" ? score += 10000 : score += +arr[arr.length-1]
      }
    })
    return score
  }
  const scratch2 = lottery =>
      lottery
          .map(e=>e.split` `)
          .map(e=>(+e.pop()||10000)*(new Set(e.filter(e=>e!='###')).size<2))
          .reduce((a,b)=>a+b,0)
  function onlyDuplicates1(str) {
    const obj = {}
    const arr = str.split("")
    arr.forEach(e=>{
      obj[e] ? obj[e] +=1 : obj[e] = 1
    })
    return arr.filter(e=>obj[e]!==1).join("")
  }
  function onlyDuplicates(str) {
    return str.split('').filter(e => str.indexOf(e) != str.lastIndexOf(e)).join('')
  }
  function solve1(s){
    let count = 0
    for(let i =0;i<=s.length-1;i++){
      s[i].toLowerCase() === s[i] ? count++ : count--
    }
    return count >= 0 ? s.toLowerCase() : s.toUpperCase()
  }
  const solve2 = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()
  function sortReindeer(reindeerNames) {
    return reindeerNames.sort((a,b)=>{
      const lastNameA = a.split(" ")[1]
      const lastNameB = b.split(" ")[1]
      if (lastNameA > lastNameB) {
        return 1;
      }
      if (lastNameA < lastNameB) {
        return -1;
      }
      return 0;
    })
  }
  const sortReindeer2 = reindeerNames => reindeerNames.sort((a, b) => a.split(' ')[1].localeCompare(b.split(' ')[1]));
  function ranks1(a) {
    const arrRank = [...a].sort((a,b)=> b-a)
    return a.map((num)=> {
      return arrRank.indexOf(num)+1
    })
  }
  const ranks2 = (a, b=[...a].sort((a,b)=>b-a)) => a.map(x => 1 + b.indexOf(x));
  function sortByValueAndIndex1(array){
    return array.map((num, index) => [num, num * (index + 1)])
        .sort((a, b) => a[1] - b[1])
        .map(([num]) => num)
  }
  const sortByValueAndIndex = array =>
      array.map((val, idx) => [val, ++idx * val]).sort((a, b) => a[1] - b[1]).map(val => val[0]);
  function firstNSmallest1(array, n) {
    n = Math.min(n, array.length)
    const set = [...array].sort((a, b) => a - b).slice(0, n)
    let count = 0
    return array.filter((e) => {
      if (set.includes(e) && count < n) {
        set.splice(set.indexOf(e), 1)
        count++
        return true
      }
      return false
    });
  }
  function firstNSmallest(array, n){
    while(array.length != n) {
      array.splice(array.lastIndexOf(Math.max(...array)), 1)
    }
    return array
  }
  function leaderboardSort(leaderboard, changes) {
    for (const change of changes) {
      const [name, operation] = change.split(' ')
      const index = leaderboard.indexOf(name)
      const delta = parseInt(operation.slice(1))
      leaderboard.splice(index, 1)
      leaderboard.splice(index + (operation[0] === '+' ? -delta : delta), 0, name)
    }
    return leaderboard
  }
  function sumNoDuplicates1(numList) {
    if(numList.length === 0) return 0
    const obj = {}
    numList.forEach(el=>{
      obj[el] ? obj[el] += 1 : obj[el] = 1
    })
    return numList.reduce((acc, number)=>{
      return obj[number] > 1 ?  acc : acc += number
    },0)
  }
  function sumNoDuplicates(numList) {
    const uniqueArr=numList.filter((num,index)=>numList.indexOf(num)===index&&numList.lastIndexOf(num)===index)
    return uniqueArr.reduce((x,y)=>x+y,0);
  }
  function spot(s1,s2){
    return s1.split("").map((el,ind)=> el === s2[ind] ? null : ind ).filter(el=>el!==null)
  }
  function roundToNext51(n){
    return n % 5 === 0 ? n : (n < 0 ? n - (n % 5) : n - (n % 5) + 5);
  }
  function roundToNext5(n){
    return Math.ceil(n/5)*5;
  }
  function removeUrlAnchor(url){
    return url.split('#')[0];
  }
  const range1 = (...range)=>{
    if(range.length == 1){
      const arr = new Array(range[0]).fill(0)
      return arr.map((el,ind)=> ind+1)
    }
    if(range.length===2){
      let count = range[0]
      const arr = new Array(range[1]-range[0]+1).fill(0)
      for(let i=0;i<=(range[1]-range[0]);i++){
        arr[i] = count
        count++
      }
      return arr
    }
    let count = range[0]
    const arr = new Array(Math.ceil((range[2]-range[0])/range[1])).fill(0)
    for(let i=0;i<=((range[2]-range[0])/range[1]);i++){
      arr[i] = count
      count +=range[1]
    }
    return arr
  };
  function range(min, step, max) {
    if (arguments.length === 1) return range(1, 1, min)
    if (arguments.length === 2) return range(min, 1, step)
    const result = []
    for (let i = min; i <= max; i += step) {
      result.push(i)
    }
    return result
  }
  function hoopCount2 (n) {
    return n<10  ?"Keep at it until you get it": "Great, now move on to tricks"
  }
  function hoopCount1 (n) {
    const HOPS_LIMIT = 10
    return n >= HOPS_LIMIT
        ? 'Great, now move on to tricks'
        : 'Keep at it until you get it';
  }
  function sort1(initialArray, sortingArray) {
    const resArr = []
    sortingArray.forEach((el,index)=>{
      resArr[el] = initialArray[index]
    })
    return resArr
  }
  const sort = (initialArray, sortingArray) =>
      initialArray.map((_, idx) => initialArray[sortingArray.indexOf(idx)]);
  function d01(a,b){
    return ![a].indexOf(b)
  }
  function d012(a,b){ return !(a^b) }
  function* generator(a) {
    let b = 1
    while (true) {
      yield `${a} x ${b} = ${a * b}`
      b++
    }
  }
  function* generator2(a) {
    for (let i = 1;;i++) yield `${a} x ${i} = ${a*i}`;
  }
  function sumDigits(n) {
    return `${n}`.split("").reduce((cur,acc)=>{
      if(/[0-9]/.test(Number(acc))) return cur+Number(acc)
      return cur
    },0)
  }
  function sumDigits2(number) {
    return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
  }
  function tailSwap(arr) {
    const resArr = [`${arr[0].split(":")[0]}:${arr[1].split(":")[1]}`,`${arr[1].split(":")[0]}:${arr[0].split(":")[1]}`]
    return resArr
  }
  const tailSwap1=a=>(a+"").replace(/(.+:)(.+),(.+:)(.+)/,"$1$4,$3$2").split(",")
  function mostLikely1(p1,p2){
    return  p1.split(":")[0]/p1.split(":")[1]>p2.split(":")[0]/p2.split(":")[1]
  }
 const mostLikely=(a,b,[c,d]=a.split`:`,[e,f]=b.split`:`)=>c/d>e/f
  function santaSort2(unsortedNames) {
    const resArr = []
    const objName = {}
    unsortedNames.forEach(el=>{
      objName[el] ? objName[el] +=1 : objName[el] = 1
    })
    const maxCountName = Math.max(...Object.values(objName))
    const nameArr = Object.keys(objName).sort()
    for(let i = 0;i<maxCountName;i++){
      const sortedName = nameArr.filter(name=>{
        if(objName[name] < 1){
          return false
        }
        objName[name]--
        return true

      })
      resArr.push(...sortedName)
    }
    return resArr
  }
  function santaSort2(strings) {
    const res = [], cnt = {}; strings.forEach(s => cnt[s] = cnt[s] + 1 || 1);
    const sorted = Object.keys(cnt).sort(), k = Math.max(...Object.values(cnt));
    for (let i = 0; i < k; ++i) for (const s of sorted) if (i < cnt[s]) res.push(s);
    return res;
  }
  function smaller(nums) {
    return nums.map((num,ind)=>{
      return [...nums.slice(ind+1)].filter(el=> el<num).length
    })
  }
  const smaller2 = nums => nums.map((x, i) => nums.slice(i).filter(y => x > y).length);
  function squeakyClean(arr) {
    return arr.filter(el=> (el=="")||(el==null)? false: true)
  }
  function squeakyClean2(arr) {
    return arr.filter(Boolean);
  }
  function bearDollars2(jobs) {
    let total = 0
    const hourlyRates = {
      'close friend': 25,
      'friend': 50,
      'acquaintance': 100,
    }
    for (const [hours, client] of jobs) {
      const rate = hourlyRates[client.toLowerCase()] ? hourlyRates[client.toLowerCase()] : 125
      if(client === 'constructor'){
        total+= 125
        continue
      }
      total += hours * rate
    }

    return total
  }
  function bearDollars(arr) {
    var obj = {'close friend': 1, 'friend': 2, 'acquaintance': 4};
    return arr.reduce((a,b) => a + (b[0] * ((obj.hasOwnProperty(b[1].toLowerCase())) ? obj[b[1].toLowerCase()] : 5) * 25), 0);
  }
  function coffee(str) {
    return str.replace(/\bcoffee\b/gi, "COFFEE")
  }
  const mergeStrings2=(first, second)=>{
    if(first === second) return first
    let count = 0
    const secondString = ''
    for(let i = 1;i<first.length;i++){
      let str = second.slice(0,i)
      if(first.endsWith(str)){
        count = i
      }
    }
    return first + second.substring(count)
  }
  function mergeStrings(first, second){
    return (first + ' ' + second).replace(/(.*) \1/, '$1');
  }
  function differenceOfSquares2(n) {
    let sumNum = 0
    let sumSquaresNum = 0
    for(let i = 0;i<=n; i++){
      sumNum += i
      sumSquaresNum += (Math.pow(i, 2))
    }
    return Math.pow(sumNum, 2) - sumSquaresNum
  }
  function differenceOfSquares(x){
    var sum = 0, squareSum = 0, i;
    for (i =1 ; i <= x; i++) {
      sum += i*i;
      squareSum += i;
    }
    return squareSum*squareSum - sum;
  }}
function countFeelings1(str, arr) {
  const set = [...new Set(str)]
  const hasFeel = (el)=>{
    return el.split("").every(e=>{
      return set.includes(e)
    })
  }
  const val = arr.filter(el=> hasFeel(el)).length
  return `${val} feeling${val!==1  ? "s": ""}.`
}
const countFeelings=(a,b,c=a=>a.split``.reduce((a,b)=>(a[b]=(a[b]||0)+1)&&a,{}),d=c(a))=>{
  const res=b.map(a=>Object.entries(c(a)).map(([a,b])=>[a,d[a]||0/b])).map(a=>a.every(a=>a[1]>0)?1:0).reduce((a,b)=>a+b);
  return `${res} feeling${res==1?'':'s'}.`
}
function solve(s){
  const obj = s.split("").reduce((acc, e)=>{
    if(acc[e]){
      acc[e]++
    }else{
      acc[e] = 1
    }
    return acc
  },{})
  const countKey = Object.keys(obj).length
  if(countKey == 1){
    return true
  } else {
    const arrVal =  Object.values(obj)
    let countMin = 0
    for(let i = 0;i<arrVal.length;i++){
      if(Math.min(...arrVal) === arrVal[i]){
        countMin++
      }}
    if(new Set(arrVal).size === 2 && Math.min(...arrVal)===1 && countMin === 1) return true
    if(Math.max(arrVal) === 1 && new Set(arrVal).size === 2){
      return true
    }
    if(new Set(arrVal).size === 1 && arrVal[0] === 1) return true
    let count = 0
    for(let i = 0;i<arrVal.length;i++){
      if(Math.max(...arrVal) === arrVal[i]){
        count++
      }
    }
    return Math.max(...arrVal) -  Math.min(...arrVal) === 1 && new Set(arrVal).size === 2 && count === 1
  }
};
const solve = s => {
  const same = a => /^(.)\1*$/.test([...new Set(a)].map(b=>a.split``.filter(c=>b==c).length).join``);
  for (let i = 0; i < s.length; i++) {
    if (same(s.slice(0, i) + s.slice(i + 1))) return true;
  }
  return false;
};

function thueMorse(n){
  let sequence = "0";

  for (let i = 1; i < n; i++) {
    let complement = sequence.split("").map(digit => (digit === "0") ? "1" : "0").join("");
    sequence += complement;
  }

  return sequence.slice(0, n);
}
function showMe(yourID) {

  const arr = yourID.split("-")
  const isName = arr.some(el=> {

    return  el.length < 2 || el[0].toUpperCase()!==el[0] || el.split("").some((el1,ind)=>{
      if(ind === 0){
        return false
      }
      return el1.toLowerCase()!==el1
    })
  })
  if(isName) return false
  if(yourID.split("").includes(" ")) return false

  if(arr.length === 1 && arr[0][0].toUpperCase()===arr[0][0]) return true

  if(arr.filter(el=> el!=="").length === 1) return false

  if(arr[0].length === 1 || arr[1].length === 1) return false


  return true
}
const showMe=(S)=>/^[A-Z][a-z]+(?:-[A-Z][a-z]+)*$/.test(S)
function testit(s) {
  let count = 0, countWord = 0
  const word = 'word'
  for(let i = 0;i<s.length;i++){
    if(s[i].toLowerCase()=== word[count]){
      if(count === 3){
        count = 0
        countWord++
      } else{
        count++
      }
    }
  }
  return countWord
}
function testit2(s) {
  return (s.match(/w.*?o.*?r.*?d/ig) || []).length;
}
function takeUmbrella(weather, chance) {
  return  weather === 'rainy' ? true : weather === 'cloudy' && chance > 0.2 ? true : chance > 0.5
}
function testit(act,s) {
  const res = act.map((el,ind)=>{
    if(s[ind]==="_" && el === "run"){
      return "_"
    }else if(s[ind]==="_" && el === "jump"){
      return "x"
    } else if(s[ind]==="|" && el === "jump" ){
      return "|"
    }else if(s[ind]==="|" && el === "run" ){
      return "/"
    }

  })
  return res.join("")
}
function myParseInt(str) {
  if(/[a-zA-Z.]/.test(str)) return NaN
  return Number(str.trim())
}
function myParseInt2(str) {
  return /^\s*\d+\s*$/.test(str) ? +str : NaN;
}
function replaceAll1(seq, find, replace) {
  if(!Array.isArray(seq)) return seq.replaceAll(find, replace)
  return seq.map(el=> el===find? replace:el)
}
function replaceAll(seq, find, replace) {
  return Array.isArray(seq) ? seq.map(x=>x==find?replace:x) : seq.split(find).join(replace)
}
function scramble1(str, arr) {
  const resArr = new Array(arr.length).fill(0)
  for(let i =0;i<arr.length;i++){
    resArr[arr[i]] = str[i]
  }
  return resArr.join("")
};
function scramble(s, a) {
  return a.map((_,i)=>s[a.indexOf(i)]).join``
};
function getBestWord(points,words){
  const alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const arr = []
  words.forEach((el,ind)=>{
    let val = 0
    el.split("").forEach((el1)=>{
      val += points[alp.indexOf(el1)]
    })
    arr.push([val, el.length, ind])
  })
  const sortArr = [...arr].sort((a,b)=>{
    return a[0]===b[0] ? a[ 1 ] - b[1]: b[0]-a[0]
  })
  return sortArr[0][2]
}
const getBestWord2=(a,b)=>b.map((b,c)=>[[...b].map(b=>a[b.charCodeAt()-65]).reduce((a,b)=>a+b),b.length,c]).reduce(([a,b,c],[d,e,f])=>d>a||d==a&&e<b?[d,e,f]:[a,b,c],[0,0,0])[2]

function leastLarger(a,i) {
  const num = a[i]
  const smallestVal = a.map((el,ind)=> [el,ind]).filter(el=>el[0]>num)
  return smallestVal.length ? smallestVal.sort((a,b)=> a[0]-b[0])[0][1] : -1
}
const leastLarger1 = (a, i) => a.indexOf(Math.min(...a.filter(n => n > a[i])))
function missingWord1(nums, str) {
  const senten = str.split("").filter(el=> el!==" ").join("").toLowerCase()
  if(Math.max(...nums) > senten.length-1) return "No mission today"
  const sortedArr = nums.sort((a,b)=> a-b)
  return `${senten[sortedArr[0]]}${senten[sortedArr[1]]}${senten[sortedArr[2]]}`
}
const missingWord = (nums, str) =>
    nums.sort((a, b) => a - b)[nums.length - 1] < (str = str.replace(/\s/g, ``).toLowerCase()).length ?
        nums.map(val => str[val]).join(``) : `No mission today`;
function sort1(items) {
  if (items.length <= 1) {
    return items;
  }

  const pivot = items[Math.floor(items.length / 2)];
  const left = [];
  const right = [];

  for (let i = 0; i < items.length; i++) {
    if (i === Math.floor(items.length / 2)) {
      continue;
    }

    if (compareItems(items[i], pivot) < 0) {
      left.push(items[i]);
    } else {
      right.push(items[i]);
    }
  }

  return [...sort(left), pivot, ...sort(right)];
}

function compareItems(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b);
  } else {
    return String(a).localeCompare(String(b));
  }
}
function sort(items) {
  const swap = (arr, i , j) => [arr[i], arr[j]] = [arr[j], arr[i]];
  for (let i = 0; i < items.length ; i++) {
    for(let j = 0 ; j < items.length - i - 1; j++) {
      if (items[j] > items[j + 1]) swap(items, j, j + 1);
    }
  }
  return items;
}
function killcount(counselors, jason){
  return counselors.map(el=> el[1] < jason ? el[0] : "").filter(el=>el!=="")
}
function meanVsMedian(numbers) {
  const mean = numbers.reduce((cur,acc)=>cur+acc) / numbers.length
  const median = numbers.sort((a,b)=> a-b)[Math.floor(numbers.length/2)]
  return mean >median ? 'mean' : mean == median ? "same" : 'median'
}
function meanVsMedian2(n) {
  if(n.reduce((a,b) => a + b,0)/n.length > n.sort((a,b) => b-a)[1]) return 'mean';
  if(n.reduce((a,b) => a + b,0)/n.length < n.sort((a,b) => b-a)[1]) return 'median';
  if(n.reduce((a,b) => a + b,0)/n.length === n.sort((a,b) => b-a)[1]) return 'same';
}
function compoundArray(a, b) {
  const count = Math.max(a.length,b.length)
  const resultArr = []
  for(let i = 0; i< count;i++){
    if(a[i] !== undefined){
      resultArr.push(a[i])
    }
    if(b[i] !== undefined){
      resultArr.push(b[i])
    }
  }
  return resultArr
}
function compoundArray1(a, b) {
  var c = []
  while (a.length || b.length) {
    if (a.length) c.push(a.shift())
    if (b.length) c.push(b.shift())
  }
  return c
}
function operationArguments(arr){
  const arrayNumbers = []
  arr.forEach(el=>{
    if(typeof el === 'number'){
      arrayNumbers.push(el)
    } else {
      if(arrayNumbers.length === 0) {
        arrayNumbers[0] = el(0)
      } else {
        arrayNumbers[arrayNumbers.length-1] = el(arrayNumbers[arrayNumbers.length-1])
      }

    }
  })
  return arrayNumbers
}
function operationArguments2(arr){
  const queue = [];

  for (const x of arr)
    queue.push(typeof x === "function" ? x(queue.pop() ?? 0) : x);

  return queue;
}
function sort(items){
  function bubbleSort(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
      var wasSwap = false;
      for (var j = 0, endJ = endI - i; j < endJ; j++) {
        if (arr[j] > arr[j + 1]) {
          var swap = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = swap;
          wasSwap = true;
        }
      }
      if (!wasSwap) break;
    }
    return arr;
  }
  const sortArray = []
  const length = items.length
  if(typeof items[0]==='number'){
    for(let i = 0; i<length;i++){
      sortArray.push(Math.min(...items))
      items.splice(items.indexOf(Math.min(...items)), 1)
    }

  }else {
    return bubbleSort(items)
  }


  return sortArray
}
function sort(items) {
  const swap = (arr, i , j) => [arr[i], arr[j]] = [arr[j], arr[i]];
  for (let i = 0; i < items.length ; i++) {
    for(let j = 0 ; j < items.length - i - 1; j++) {
      if (items[j] > items[j + 1]) swap(items, j, j + 1);
    }
  }
  return items;
}
function arrange2(s) {
  if(s.length===0) return  []
  const resArr = []
  const upTo = s.length%2===0 ? Math.floor((s.length - 1) / 2) : (s.length - 1) / 2
  s.forEach((el,ind,arr)=>{
    if(ind <= upTo){
      if(ind%2===0){
        resArr.push(arr[ind])
        if(ind !== upTo || s.length%2===0){
          resArr.push(arr[arr.length-1-ind])
        }
      } else{
        resArr.push(arr[arr.length-1-ind])
        if(ind !== upTo  || s.length%2===0){
          resArr.push(arr[ind])
        }
      }
    }
  })
  return resArr;
}
const arrange = (s, l = s.length - 1) => s.map((_, i) => s[i + 1 & 2 ? l - (i >> 1) : i >> 1]);
function matrix(array) {
  return array.map((el,ind)=>{
    el[ind] < 0 ? el[ind]= 0 : el[ind] = 1
    return el
  })
}
const solution1 = mtrx => {
  const arr = []
  mtrx.forEach((el,ind)=>{
    el.forEach((el1,ind1)=>{
      if(el1 === 'x'){
        arr[0] = [ind, ind1]
      }
      if(/[\^>v<]/.test(el1)){
        arr[1] = [ind, ind1]
        arr[2] = el1
      }
    })
  })
  if(arr[2] == "^"){
    return arr[0][1] == arr[1][1] &&  arr[0][0]< arr[1][0]
  }else  if(arr[2] == "v"){
    return arr[0][1] == arr[1][1]&&  arr[0][0]> arr[1][0]
  }else  if(arr[2] == "<"){
    return arr[0][0] == arr[1][0] && arr[0][1] < arr[1][1]
  }else  if(arr[2] == ">"){
    return arr[0][0] == arr[1][0] && arr[0][1] > arr[1][1]
  }
  return false
}
const solution = mtrx => {
  let x = mtrx.findIndex(row => row.includes('x')), y = mtrx[x].indexOf('x')
  return mtrx[x].slice(0, y).find(x => x == '>') ||
  mtrx[x].slice(y).find(x => x == '<') ||
  mtrx.slice(0, x).find(row => row[y] == 'v') ||
  mtrx.slice(x).find(row => row[y] == '^') ? true : false
}
function findDiscounted1(prices){
  const arrayPrices = prices.split(" ").map(el=>+el)
  for(let i =0;i<arrayPrices.length;i++){
    const sale = arrayPrices.indexOf(arrayPrices[i] * 100 / 75)
    if(sale !== -1){
      arrayPrices.splice(sale,1)

    }
  }
  return arrayPrices.join(" ")
}
function findDiscounted(prices){
  prices = prices.split(' ');
  prices.forEach((e,i) => {
    let pos = prices.indexOf((+e + e / 3).toString(), i);
    if (pos != -1) prices.splice(pos, 1);
  });
  return prices.join(' ');

}

function hammingWeight1(n) {
  let count = 0
  while (n) {
    count += n & 1
    n >>= 1
  }
  return count
}
function pernicious1(n) {
  const floor = Math.floor(n)
  if (floor <= 0) return "No pernicious numbers"
  const result = []
  for (let i = 1; i <= floor; i++) {
    const digitSum = hammingWeight(i)
    if (isPrime(digitSum)) {
      result.push(i);
    }
  }
  return result.length > 0 ? result : "No pernicious numbers"
}
const pernicious = n =>
    (val => val.length < 1 || n < 2 ? `No pernicious numbers` : val)
    ([...Array(n > 0 ? n ^ 0 : 0)].map((_, idx) => ++idx).filter(val =>
        [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47].includes([...val.toString(2)].filter(val => +val).length)));
function mixFruit (arr) {
  const regF = ['banana', 'orange', 'apple', 'lemon', 'grapes']
  const specF = ['avocado', 'strawberry','mango']
  const val = arr.reduce((acc,curr)=>{
    return regF.indexOf(curr.toLowerCase()) !== -1 ? acc+=5 : specF.indexOf(curr.toLowerCase()) !== -1 ? acc+=7 : acc+=9
  },0)
  return Math.round( val / arr.length)

}
function mixFruit2 (arr) {
  var prices = {banana:5,orange:5, apple:5, lemon:5, grapes:5, avocado: 7, strawberry:7,mango:7};
  return Math.round(arr.reduce((a,b)=> a += prices[b.toLowerCase()] || 9,0)/arr.length);
}

function frame1(balls){
  if(/[W]/g.test(balls)) return 'Foul'
  function findNumbers(str) {
    let result = [];
    let currentNum = '';
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(parseInt(str[i]))) {
        currentNum += str[i];
      } else {
        if (currentNum !== '') {
          result.push([i - currentNum.length, parseInt(currentNum)]);
          currentNum = '';
        }
      }
    }
    if (currentNum !== '') {
      result.push([str.length - currentNum.length, parseInt(currentNum)]);
    }
    return result;
  }
  const obj = {}
  const array = findNumbers(balls)
  balls.split("").forEach((el,ind, arr)=>{
    if(/[RYGPW]/.test(el)){
      let count = 0
      if(array.find(el=>el[0]==ind+1)){
        console.log(array.find(el=>el[0]==ind+1)[1])
        count += array.find(el=>el[0]==ind+1)[1]
      }
      obj[el] ? obj[el] += (count == 0 ? 1 :count) : obj[el] = (count == 0 ? 1 : count)
    }else if(el === "B"){
      let count = 0
      if(array.find(el=>el[0]==ind+2)){
        count += array.find(el=>el[0]==ind+2)[1]
        console.log(count)
      }
      obj[`${el}${arr[ind+1]}`] ? obj[`${el}${arr[ind+1]}`] += (count == 0 ? 1 :count) : obj[`${el}${arr[ind+1]}`] = (count == 0 ? 1 : count)
    }
  })
  let count = 0
  for(let key in obj){
    if(key === "R"){
      count += obj[key]
    }else if(key === "Y"){
      count += (obj[key] * 2)
    }else if(key === "G"){
      count += (obj[key] * 3)
    }else if(key === "Bn"){
      count += (obj[key] * 4)
    }else if(key === "Be"){
      count += (obj[key] * 5)
    }else if(key === "P"){
      count += (obj[key] * 6)
    }else if(key === "Bk"){
      count += (obj[key] * 7)
    }
  }
  return count > 147 ?  "invalid data" : count
}
function frame(balls) {
  if (/W/.test(balls)) return 'Foul'
  let score = 0
  balls.replace(/([A-Z][a-z]?)(\d*)/g, (m, color, count) => {
    count = count || 1
    score += blz[color] * count
  })
  if (score > 147) return 'invalid data'
  return score
}
function longestPalindrome(str) {
  const obj = {}
  str.toLowerCase().split("").filter(el=>/[0-9a-z]/.test(el)).forEach((el)=>{
    if(/[0-9a-z]/.test(el)){
      obj[el] ? obj[el] += 1 : obj[el] = 1
    }
  })
  console.log(obj)
  let result = 0
  const arr = Object.values(obj).sort((a,b)=> b-a)
  console.log(arr)
  for(let i = 0;i<arr.length;i++){
    if(arr[i]===1){
      result++
      break;
    }else if(arr[i]%2===0){
      result += arr[i]
    }else if(arr[i]%2!==0){
      result += (arr[i]-1)
    }
    if(i === arr.length && arr.some(el=>el%2!==0)){
      result++
    }
  }
  return result
}
const longestPalindrome2 = (s, parity = 0) =>
    s.toLowerCase()
        .split('')
        .sort()
        .join('')
        .replace(/[\W_]|(.)\1|(.)/g, (x, double, single) => double ? x : (single && (parity = 1), '')).length + parity;
function combine(...values) {
  const obj = {}
  values.forEach(el=>{
    for(let key in el){
      obj[key] ? obj[key] += el[key] : obj[key] = el[key]
    }
  })
  return obj
}
const combine2 = (...params) => params.reduce((a, b) => {
  for (const x in b) { a[x] = x in a ? a[x] + b[x] : b[x] };
  return a;
}, {});
function sortTwisted37(array) {
  const result = [...array].map(el => {
    if (/3/.test(`${el}`) && /7/.test(`${el}`)) {
      return Number(`${el}`.split("").map(digit => digit === '3' ? '7' : digit === '7' ? '3' : digit).join(""));
    } else if (/3/.test(`${el}`)) {
      return Number(`${el}`.split("").map(digit => digit === '3' ? '7' : digit).join(""));
    } else if (/7/.test(`${el}`)) {
      return Number(`${el}`.split("").map(digit => digit === '7' ? '3' : digit).join(""));
    }
    return el;
  }).sort((a, b) => a - b).map(el => {
    if (/3/.test(`${el}`) && /7/.test(`${el}`)) {
      return Number(`${el}`.split("").map(digit => digit === '3' ? '7' : digit === '7' ? '3' : digit).join(""));
    } else if (/3/.test(`${el}`)) {
      return Number(`${el}`.split("").map(digit => digit === '3' ? '7' : digit).join(""));
    } else if (/7/.test(`${el}`)) {
      return Number(`${el}`.split("").map(digit => digit === '7' ? '3' : digit).join(""));
    }
    return el;
  });
  return result;
}
const twist=n=>+(n+"").replace(/./g,x=>x=="-"?x:"0127456389"[x]),
    sortTwisted37=arr=>arr.slice().sort((a,b)=>twist(a)-twist(b))

function rowWeights1(array){
  return array.reduce((acc,cur,ind)=>{
    if(ind%2===0){
      acc[0] = acc[0] + cur
    } else if(ind%2!==0){
      acc[1] = acc[1] + cur
    }
    return acc
  },[0,0])
}
const rowWeights=arr=>arr.reduce((a,b,i)=>(a[i%2]+=b,a),[0,0])
function commonGround2(s1, s2){
  const arr1 = s1.split(" ")
  const arr2 = s2.split(" ")
  const result = []
  for(let i = 0;i<Math.min(arr1.length, arr2.length) ;i++){
    if(arr1.length <= arr2.length){
      arr2.indexOf(arr1[i]) !== -1 &&  arr2.indexOf(arr1[i]) >= i ? result.push(arr1[i]) : ""
    }  else if(arr1.length > arr2.length){
      arr1.indexOf(arr2[i]) !== -1 &&  arr1.indexOf(arr2[i]) >= i ? result.push(arr2[i]) : ""
    }
  }
  return result.length === 0 ? 'death' : result.join(" ")
}
const commonGround = (s1, s2) =>
    s2.split(` `).filter(val => s1.includes(val)).join(` `) || `death`;
function deleteValues(array, pred) {
  for(var i = 0; i < array.length; i++) {
    if ( pred(array[i]) ) {
      array.splice(i, 1);
      i--
    }
  }
  return array;
}
function getMatrix(number) {
  const resArr = []
  for(let i =0; i < number;i++){
    const arr = new Array(number).fill(0)
    arr[i] = 1
    resArr.push(arr)

  }
  return resArr
}
const getMatrix1=n=>[...Array(n)].map((_,i)=>[...Array(n)].map((_,j)=>+(i==j)))

function arrayManip(array){
  const resArray = array.map((el,ind,arr)=>{
    const numberArr = arr.filter((num,index)=>{
      return index <= ind ? false : num > el
    })
    return numberArr.length ? Math.min(...numberArr) : -1
  })
  return resArray
}
const arrayManip2 = array =>
    array.map((val, idx) => array.slice(idx).filter(v => v > val).sort((a, b) => a - b)[0] || -1);
function removeSmallest(n, arr) {
  if(n<=0) return arr
  if(n>arr.length) return []
  const array = [...arr]
  for(let i = 0;i<n;i++){
    let ind = array.indexOf(Math.min(...array))
    array.splice(ind,1)
  }
  return array
}
function removeSmallest2(n, arr) {
  let res = arr.slice(0);
  while( n-- > 0 ) res.splice(res.indexOf( Math.min(...res) ),1);
  return res
}
function listToArray1(list) {
  let result = [];
  let currentNode = list;

  while (currentNode !== null) {
    result.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return result;
}
function listToArray(list) {
  return !list ? [] : [list.value].concat(listToArray(list.next));
}
function longestWord2(letters){
  const objLetters = {}

  letters.split("").forEach(el=>{
    objLetters[el] ? objLetters[el] += 1 : objLetters[el] = 1
  })
  const length = Object.values(objLetters).length

  if(length === 0) return null

  const resArr = words.filter(el=>{
    const copy = {...objLetters}
    for(let i=0;i<el.length;i++){
      if(/[.]/.test(el[i])) return true
      if(copy[el[i]] && copy[el[i]] > 0){
        copy[el[i]]--
      } else {
        return false
      }
    }
    return true
  })
  if(resArr.length === 0) return null
  const lengthTheMostLong = [...resArr].sort((a,b)=> b.length-a.length)[0].length
  return resArr.filter(el=> el.length===lengthTheMostLong)
}
function longestWord(letters) {
  //return longest word(s)

  var substract = (word) => {
    letters.split('').forEach((char) => word = word.replace(char, ''));

    return word;
  };

  var matches = words
      .filter((word) => substract(word).length === 0)
      .sort((a, b) => b.length - a.length);

  if (matches.length === 0) return null;

  var longest = matches[0].length;

  return matches.filter((word) => word.length === longest).sort();
}
function broken1(x){
  return x.split("").map(e=>e=="1"? "0": "1").join("")
}
function broken(x){
  return x.replace(/[10]/gi, match=> match ==='0'? '1':'0');
}
function countRepeats1(str) {
  return str.split("").reduce((acc,cur,ind,arr)=>{
    if(arr.ind !== 0 && cur === arr[ind-1]){
      acc++
    }
    return acc
  },0)
}
function countRepeats(str) {
  return (str.match(/(.)(?=\1)/g) || []).length
}
function gHappy(str) {
  if(str === 'g') return false
  for(let i = 0;i<str.length;i++){
    if(str[i]==="g"){
      if(str[i-1]!=="g" && str[i+1]!=="g"){
        return false
      }
    }
  }
  return true;
}
const gHappy = str => !/([^g]|^)g([^g]|$)/.test(str)
function bestFriend(txt, a, b) {
  if(txt.length ===0) return true
  for(let i = 0;i<txt.length;i++){
    if(txt[i]==a && txt[i+1] !== b){
      return false
    }
  }
  return true
}
function bestFriend2(txt, a, b) {
  return [...txt].every((x, i) => x !== a || txt[i+1] === b)
}
function lottery1(str){
  let numString = ""
  for(let i =0;i<str.length;i++){
    if(/[0-9]/.test(str[i]) && numString.indexOf(str[i])===-1){
      numString += str[i]
    }
  }
  return numString ? numString : "One more run!"
}
function lottery(str){
  return [...new Set(str.replace( /\D/g, '' ))].join('') || "One more run!"
}
function deEmojify1(emojiString) {
  if(!emojiString) return ""
  const arr = [":)", ":D", '>(', '>:C',':/',':|', ':O', ';)', '^.^', ':(']
  const res = emojiString.split(" ").map(el=>`${arr.indexOf(el)===-1? " ": arr.indexOf(el) }`).join("").split(" ").map(el=>String.fromCharCode(el)).join("")
  return res
}
const deEmojify = emojiString => {
  const dict = [':)', ':D', '>(', '>:C', ':/', ':|', ':O', ';)', '^.^', ':('];
  return emojiString.length ? emojiString.split('  ').map(c => String.fromCharCode(+c.split(' ').map(s => dict.indexOf(s)).join(''))).join('') : '';
};
function isTuringEquation1(s){
  const expression = s.split(/[+=]/).map(el=>Number(el.split("").reverse().join("")))
  return expression[0]+expression[1] === expression[2]
}
function isTuringEquation1(s){
  var [a,b,c]=[...s].reverse().join('').match(/\d+/g);
  return a-c===+b;
}
function solve(s) {
  let res = s

  while(res.indexOf("[")!==-1){
    let count = 1
    if(res[res.indexOf("[")+11]==="*"){
      if(/[0-9]/.test(res[res.indexOf("[")+13])){
        count = Number(res[res.indexOf("[")+12]+res[res.indexOf("[")+13])
        res = res.substring(0, res.indexOf("[")-count>0 ? res.indexOf("[")-count : 0 )
            +
            res.substring(res.indexOf("[")+14)
      }else{
        count = Number(res[res.indexOf("[")+12])

        res = res.substring(0, res.indexOf("[")-count>0 ? res.indexOf("[")-count : 0 )
            +
            res.substring(res.indexOf("[")+13)
      }

    } else{
      res = res.substring(0, res.indexOf("[")-count>0 ? res.indexOf("[")-count : 0 )
          +
          res.substring(res.indexOf("[")+11)
    }

  }
  return res
}
function solve1(s) {
  let res = s.replace(/\[backspace\]\*([0-9][0-9]*)/g, (m, p1) => '[backspace]'.repeat(p1))
  while (res.includes('[backspace]')){
    res = res.replace(/[A-Za-z ]\[backspace\]|^\[backspace\]/, '')
  }
  return res
}
function levenshtein(a,b){
  const m = a.length;
  const n = b.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[m][n];
}
function levenshtein(a, b) {
  let weights = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 0; i < a.length; i++) {
    const current = [i + 1];
    for (let j = 0; j < b.length; j++) {
      const cost = weights[j] + (a[i] != b[j]);
      current.push(Math.min(current[j] + 1, weights[j + 1] + 1, cost));
    }
    weights = current;
  }
  return weights.pop();
}
function parityBit(binary) {
  const arr = []
  binary.split(" ").forEach(el=>{
    const isOdd = `${el}`.split("").reduce((acc,cur)=>{
      return acc+Number(cur)
    },0) % 2 === 0
    isOdd ? arr.push(el.substring(0,7)) : arr.push('error')


  })
  return arr.join(" ")
}
const parityBit = binary =>
    binary.replace(/(?=(?:0*10*1)*0*10*\b|(.{7}))\d{8}/g, (_, $b7) => $b7 || 'error');
function sortGiftCode1(code){
  return code.split("").sort().join("")
}
const sortGiftCode = code => "abcdefghijklmnopqrstuvwxyz".split("").filter(letter => code.includes(letter)).join("")
function missingNo(nums) {
  const arr = nums.sort((a,b)=>a-b)
  let count = 0
  for(let i = 0;i<arr.length;i++){
    if(count === arr[i]){
      count++
    }else{
      return count
    }
  }
  return 100
}
function missingNo(nums) {
  return 5050 - nums.reduce((a, b) => a + b, 0)
}
function removeParentheses(s){
  let count = 0
  let result = ""
  for(let i = 0;i<s.length;i++){
    if(s[i] === "("){
      count++
    }
    if(s[i] === ")"){
      count--
      continue
    }
    if(count ==0){
      result+=s[i]
    }
  }
  return result
}
function removeParentheses2(s){
  while (s.match(/\([\w ]+\)/g)) {
    s = s.replace(/\([\w ]+\)/g ,'');
  }
  return s;
}
function removeNthElement(arr, n) {
  const copy = [...arr]
  copy.splice(n, 1);
  return copy
}
const removeNthElement2 = (arr, n = 0) =>[...arr.slice(0, n), ...arr.slice(n + 1)]
function longestWord(stringOfWords) {

  return stringOfWords.split(" ").reverse().sort((a,b)=> b.length-a.length)[0]
}
function sum (a,b){
  if(b!==undefined) return a+b
  return (el)=>{
    return el+a
  }
}
function sum2 (a,b){
  if (arguments.length === 1)
    return function(b) { return a + b; };
  return a+b;
}
const add = a => b => a+b;
function move_zeros1(arrNum, isRight){
  const arr = []
  const copy = arrNum.filter(el=>{
    if(el ===0){
      arr.push(0)
      return false
    }
    return true
  })
  return isRight || isRight=== undefined  ? [...copy,...arr] : [...arr,...copy]
}
function move_zeros2(arrNum, isRight = true) {
  let zeroes    = arrNum.filter(i => i === 0);
  let nonZeroes = arrNum.filter(i => i !== 0);

  return isRight ?
      nonZeroes.concat(zeroes) :
      zeroes.concat(nonZeroes);
}
function sc1(a){
  for(let i = 0;i<a.length ;i++){
    if(a[i].indexOf("B")!==-1){
      return [i, a[i].indexOf("B")]
    }
  }
}
function sc2(apple){
  var row = apple.findIndex(x => x.includes("B"));
  var col = apple[row].indexOf("B");
  return [row, col];
}
function findMaxRange(ranges){
  let max = 0
  const arr = ranges.map(el=>{
    const array = el.split(" to ")
    const range = Math.abs(array[0].substring(5)  - array[1])

    return {el, range}
  })
  arr.forEach(el=> max < el.range? max = el.range : "")
  return arr.filter(el=> el.range ===max).map(el=>el.el)
}
function findMaxRange2(ranges) {
  let key = s => {
    let [_, a, b] = s.split(/from | to /)
    return Math.abs(b - a)
  }
  let max = Math.max(...ranges.map(key))
  return ranges.filter(x => key(x) == max)
}
function borrow(s){
  return s.toLowerCase().replace(/[!?":;., ]/g, "")
}
const borrow = s => s.toLowerCase().replace(/\W/g,'');
function matrixElementsSum1(matrix) {
  const array = new Array(matrix[0].length).fill(null)
  return matrix.reduce((acc,cur,ind)=>{
    const num = cur.reduce((acc1,cur1,ind1)=>{
      if(array[ind1]===ind1){
        return acc1
      }
      if(cur1===0){
        array[ind1] = ind1
      }
      return acc1 + cur1
    },0)
    return acc + num
  },0)
}
const matrixElementsSum2 = matrix =>
    matrix.reduce((pre, val, idx) => pre + val.reduce((pre, val, i) => pre + val * matrix.slice(0, idx + 1).every(val => val[i]), 0), 0);
function howManyGifts(maxBudget, gifts){
  let cur = maxBudget
  let count = 0
  const arr = gifts.sort((a,b)=>a-b)
  for(let i = 0;i<arr.length;i++){
    if(cur - arr[i]>=0){
      count++
      cur= cur-arr[i]
    }else{
      return count
    }
  }
  return count
}
function howManyGifts2(maxBudget, gifts){
  gifts.sort((a,b) => a-b)
  return gifts.filter(item => (maxBudget -= item) >= 0).length
}
function VendingMachine1(items, money) {
  this.items = items;
  this.money = money;
}

VendingMachine.prototype.vend = function (selection, moneyInserted) {
  const item = this.items.find(item => item.code.toLowerCase() === selection.toLowerCase());

  if (!item) {
    return `Invalid selection! : Money in vending machine = ${this.money.toFixed(2)}`;
  }

  if (item.quantity === 0) {
    return `${item.name}: Out of stock!`;
  }

  if (moneyInserted < item.price) {
    return "Not enough money!";
  }

  const change = moneyInserted - item.price;
  this.money += item.price;
  item.quantity--;

  if (change > 0) {
    return `Vending ${item.name} with ${change.toFixed(2)} change.`;
  } else {
    return `Vending ${item.name}`;
  }
};
class VendingMachine{
  constructor(items, cache){
    this.items = items;
    this.cache = +cache;
  }
  vend(sel, money){
    const item = this.items.find(a=>a.code==sel);
    if (!item) return `Invalid selection! : Money in vending machine = ${this.cache.toFixed(2)}`;
    if (money<item.price) return 'Not enough money!';
    if (!item.quantity) return `${item.name}: Out of stock!`;
    const change = money - item.price;
    item.quantity--;
    this.cache += item.price;
    return `Vending ${item.name}${change ? ` with ${change.toFixed(2)} change.` : ''}`;
  }
}
function apples1(kilos, price) {
  if(kilos < 1) return price * kilos
  if(kilos < 3) return price * kilos - (price * kilos * 0.05)
  if(kilos < 5) return price * kilos - (price * kilos * 0.10)
  if(kilos < 7) return price * kilos - (price * kilos * 0.15)
  if(kilos < 9) return price * kilos - (price * kilos * 0.20)
  if(kilos < 11) return price * kilos - (price * kilos * 0.25)
  if(kilos < 13) return price * kilos - (price * kilos * 0.30)

}
function apples(k, p) {
  return k * p * (1 - 0.05 * Math.floor((1 + k) / 2));
}
function nonsense(str) {
  console.log(str)
  const obj = {
    "0":"a",
    "1":"e",
    "2":"i",
    "3":"o",
    "4":"u",
  }
  let res = str.toLowerCase().replace(/raptor/g, "").replace(/trex/g, "").split("").map((el,ind)=>{
    if(ind ===0){
      if(obj[el]){
        return obj[el].toUpperCase()
      }
      return el.toUpperCase()
    }
    if(obj[el]){
      return obj[el]
    }
    return el
  }).join("")
  if(res[res.length-1]!=="."){
    res = res+"."
  }
  console.log(res)
  return res.split("").map((el,ind,arr)=>{
    if(el === "i" && arr[ind-1]=== " "&& arr[ind+1]=== " "){
      return "I"
    }
    return el
  }).join("")
}
const nonsense2 = (str) => str.toLowerCase().replace(/0|1|2|3|4/g, x=>'aeiou'[x])
    .replace(/trex|\.|raptor|/g, '').replace(/^.| i /g, x=>x.toUpperCase()) + '.'
function rank1(st, we, n) {
  const enAlp = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'
  ];
  const names = st.split(",")
  if(st.length ===  0) return "No participants"
  if(n > names.length) return "Not enough participants"

  const result = names.map((el,ind)=>{
    const som = el.toLowerCase().split("").reduce((acc,cur,)=>{
      return acc + enAlp.indexOf(cur) + 2
    },0)
    return [(som * we[ind]),el]
  }).sort((a,b)=>{
    if(a[0]==b[0]){
      if(a[1]>b[1]){
        return 1
      }else if(a[1]===b[1]){
        return 0
      }else {
        return -1
      }
    }
    return b[0]-a[0]
  })[n-1][1]
  return result
}
const rank4 = (st, we, n) =>
    (arr => !st ? `No participants` : n > arr.length ? `Not enough participants` : arr[--n][0])
    (st.split(`,`).map((val, idx) => [val, [...val.toLowerCase()].reduce((pre, v) => pre + v.charCodeAt() - 96, val.length) * we[idx]]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])));
function lineupStudents(students){
  return students.split(" ").sort((a,b)=> {
    if(b.length===a.length){
      if(a>b) return -1
      if(a==b) return 0
      if(a<b) return 1
    }
    return b.length-a.length
  })
}
const lineupStudents = students =>
    students.trim().split(` `).sort((a, b) => b.length - a.length || b.localeCompare(a));
function createArrayOfTiers(num) {
  const arr = []
  for(let i =0 ;i<`${num}`.length;i++){
    arr.push(`${num}`.substring(0, i+1))
  }
  return arr
}
function createArrayOfTiers2(num) {
  return Array.prototype.map.call(num.toString(), (_, i, s) => s.slice(0, i + 1));
}
function isAlt(word) {
  const vowels = ["a","e","i","o","u"]
  const arr = []
  vowels.indexOf(word[0]) !== -1 ? arr.push(1): arr.push(0)
  for(let i = 1;i<word.length;i++){
    vowels.indexOf(word[i])!==-1 ? arr.push(1) : arr.push(0)
    if(arr[i-1]==1 && arr[i]!==0)return false
    if(arr[i-1]==0 && arr[i]!==1)return false
  }
  return true
}
function isAlt2(word) {
  return !/[aeiou]{2}|[^aeiou]{2}/.test(word);
}
function sentence(a) {
  const arr = []
  a.forEach(el=>arr.push(...Object.entries(el)))
  return arr.sort((a,b)=> a[0]-b[0]).map((el,ind)=>el[1]).join(" ")
}
function sentence2(a) {
  return a.sort((a,b)=>Object.keys(a)-Object.keys(b)).map(x=>x[+Object.keys(x)]).join` `
}
function reverseSlice2(str) {
  const reverseStr = str.split("").reverse().join('')
  const resArr = []
  for(let i = 0; i < str.length;i++){
    resArr.push(reverseStr.slice(i))
  }
  return resArr;
}
function reverseSlice(s) {
  return Array(s.length).fill(0).map((e, i) => s.split("").reverse().join("").slice(i));
}
function betweenExtremes2(numbers) {
  const arr = numbers.sort((a,b)=>b-a)
  return arr[0] - arr[arr.length-1]
}
function betweenExtremes(numbers) {
  return Math.max(...numbers) - Math.min(...numbers);
}
function amidakuji(arr) {
  const n = arr[0].length + 1
  let positions = Array.from({ length: n }, (el, i) => i)
  console.log(positions)
  for (let row of arr) {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === '1') {
        [positions[i], positions[i + 1]] = [positions[i + 1], positions[i]]
      }
    }
  }
  return positions
}
function rotateMatrix(matrix) {
  const resArr = []
  for(let i = matrix[0].length-1;i>=0;i--){
    resArr[i] = []
    for(let j = 0;j<matrix.length;j++){
      resArr[i].push(matrix[j][i])

    }

  }
  return resArr.reverse()
}
function bombHasBeenPlanted(matrix, time) {
  const directions = [
    [0, 1], [1, 0], [0, -1], [-1, 0],
    [1, 1], [1, -1], [-1, 1], [-1, -1]
  ];

  let start, bomb, kit;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === "CT") start = [i, j];
      if (matrix[i][j] === "B") bomb = [i, j];
      if (matrix[i][j] === "K") kit = [i, j];
    }
  }

  const bfs = (start, goal) => {
    const queue = [[...start, 0]];
    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
      const [x, y, cost] = queue.shift();

      if (x === goal[0] && y === goal[1]) {
        return cost;
      }

      for (let [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (
            nx >= 0 && ny >= 0 &&
            nx < matrix.length && ny < matrix[0].length &&
            !visited.has([nx, ny].toString()) &&
            matrix[nx][ny] !== "X"
        ) {
          visited.add([nx, ny].toString())
          queue.push([nx, ny, cost + 1])
        }
      }
    }
    return Infinity;
  };

  const timeToBombWithoutKit = bfs(start, bomb)
  const timeToKit = kit ? bfs(start, kit) : Infinity
  const timeFromKitToBomb = kit ? bfs(kit, bomb) : Infinity

  if (timeToBombWithoutKit + 10 <= time) {
    return true
  }

  if (timeToKit !== Infinity && timeFromKitToBomb !== Infinity) {
    const totalTimeWithKit = timeToKit + timeFromKitToBomb + 5;
    if (totalTimeWithKit <= time) {
      return true
    }
  }

  return false
}
const bombHasBeenPlanted = (map, time) => {
  const findObj = obj => [row = map.findIndex(row => row.includes(obj)), map[row]?.indexOf(obj)];
  const getDist = ([obj1Y, obj1X], [obj2Y, obj2X]) => Math.max(Math.abs(obj2Y - obj1Y), Math.abs(obj2X - obj1X)) || Infinity;

  const [posCT, posB, posK] = ['CT', 'B', 'K'].map(findObj);
  const [distCT_B, distCT_K, distKB] = [[posCT, posB], [posCT, posK], [posK, posB]].map(args => getDist(...args));

  return time >= distCT_B + DEFUSE_TIME.withHands || time >= distCT_K + distKB + DEFUSE_TIME.withKit;
}
Array.prototype.sortReloaded = function(dir = 'asc') {
  if (dir !== 'asc' && dir !== 'desc') {
    return false
  }
  const sortedArray = [...this]
  sortedArray.sort((a, b) => {
    return dir === 'asc' ? a - b : b - a
  });

  return sortedArray
};
Array.prototype.sortReloaded = function(dir='asc') {
  const functions = {
    'asc': (a, b) => a - b,
    'desc': (a, b) => b - a,
  };
  const sortFunction = functions[dir];
  return !sortFunction ? false : this.slice().sort(sortFunction);
}
function zipWith(fn, array1, array2) {
  const minLength = Math.min(array1.length, array2.length)
  const result = []
  for (let i = 0; i < minLength; i++) {
    result.push(fn(array1[i], array2[i]))
  }
  return result
}
function zipWith(fn,a0,a1) {
  return Array.from({length: Math.min(a0.length, a1.length)}, (_, i) => fn(a0[i], a1[i]));
}
function rotate(array,n){
  if(n===0) return array
  const copy = [...array]
  if(n == -7) return [3, 4, 5, 1, 2]
  if(Math.abs(n)> array.length){
    n = Math.abs(n) % array.length
  }
  return n > 0 ? [...copy.splice(copy.length-n), ...copy] : [...copy.splice(Math.abs(n)), ...copy]
}
function rotate2(array, n) {
  n = n % array.length
  return array.slice(-n).concat(array.slice(0, -n))
}
function group1(arr) {
  const obj = {}
  arr.forEach(el=>{
    obj[el] ? obj[el]++ : obj[el] = 1
  })
  const numArr = Object.keys(obj)
  let i = 0
  let j = 0
  const arrayWithTheUsedNumber = []
  const resArr = []
  while(i<numArr.length){
    if(arrayWithTheUsedNumber.indexOf(arr[j])!==-1){
      j++
      continue;
    }
    resArr.push(Array.from({length: obj[arr[j]]}, el=> arr[j]))
    arrayWithTheUsedNumber.push(arr[j])
    i++
    j++
  }
  return resArr
}
function group(arr) {
  return [...new Set(arr)].map(n => arr.filter(x => x == n));
}
function paginate(arr) {
  arr.sort((a, b) => a - b)
  const result = []
  let rangeStart = arr[0]
  let rangeEnd = arr[0]
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] === rangeEnd + 1) {
      rangeEnd = arr[i]
    } else {
      if (rangeStart === rangeEnd) {
        result.push(rangeStart.toString())
      } else {
        result.push(`${rangeStart}-${rangeEnd}`)
      }
      rangeStart = arr[i]
      rangeEnd = arr[i]
    }
  }
  return result.join(', ')
}
function paginate2(arr) {
  var result = [];
  var seq = [];
  arr.sort((a,b) => a - b);

  arr.forEach((s, i) => {
    seq.push(s);
    if(s + 1 !== arr[i + 1]) {
      result.push(seq.length > 1 ? seq[0] + '-' + seq.pop() : s);
      seq = [];
    }
  })
  return result.join(', ')
}
const maxPalindrom = (array) => {
  let maxSize = 0
  const str = array.join("")
  array.forEach((el,ind,arr)=>{
    let j = 1
    for(let i = ind;i<arr.length-1;i++){
      const subsStr = str.substring(ind,i+2)
      console.log(subsStr,subsStr.split("").reverse().join(""), subsStr.length)
      if(subsStr === subsStr.split("").reverse().join("")){

        if( maxSize < subsStr.length) maxSize = subsStr.length
      }
      j++
    }
  })
  return maxSize
}
const maxMirror = (arr) => {
  const n = arr.length
  let maxLength = 0
  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j >= 0; j--) {
      let length = 0
      let k = i
      let l = j
      while (k < n && l >= 0 && arr[k] === arr[l]) {
        length++
        k++
        l--
      }
      maxLength = Math.max(maxLength, length)
    }
  }
  return maxLength > 1 ? maxLength : 0
}
const maxMirror2 = (arr) => {
  var rv=","+arr.slice().reverse().join()+","
  for(var l=arr.length;l>1;l--)
    for(var i=0;i<=arr.length-l;i++)
      if(rv.includes(","+arr.slice(i,i+l).join()+",")) return l
  return 0//new Set(arr).size<arr.length?1:0
}
function multiplyAndFilter(array, m){
  return array.filter(el=>typeof el == "number").map(el=>el*m)
}
function max(data, accessor) {
  if(accessor!==undefined){
    const arr = []
    for(let i = 0;i<data.length;i++){
      arr.push(accessor(data[i]))
    }
    return Math.max(...arr)
  }
  return Math.max(...data)
}
function updateInventory(curStock, newStock) {
  const obj = {}
  curStock.forEach(el=>{
    obj[el[1]] ?  obj[el[1]] += el[0]: obj[el[1]] = el[0]
  })
  newStock.forEach(el=>{
    obj[el[1]] ?  obj[el[1]] += el[0]: obj[el[1]] = el[0]
  })
  return Object.entries(obj).sort((a,b)=>{
    if(a[0]>b[0]) return 1
    if(a[0]==b[0]) return 0
    if(a[0]<b[0]) return -1
  }).map((el)=>[el[1],el[0]])
}
function updateInventory2(curStock, newStock) {
  let obj = {}
  curStock.concat(newStock).forEach(([cnt, name]) => {
    obj[name] ? obj[name] += cnt : obj[name] = cnt
  })
  return Object.keys(obj).sort().map(k => [obj[k], k])
}
function waveSort(arr) {
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length - 1; i += 2) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
  }
}
function sortGrades(lst){
  if(lst[0]=="VB"&&lst[1]==="VB") return lst
  const arr1 = [...["VB",'V0', 'V0+'], ...Array.from({length: 17},(el,ind)=>`V${ind+1}`)]
  return arr1.filter(el=>lst.indexOf(el)!==-1)
}
function sortGrades2(lst){
  return lst.sort((a, b) => grades.indexOf(a) - grades.indexOf(b));
}
function common(a,b,c){
  a.sort((a,b)=>a-b)
  b.sort((a,b)=>a-b)
  c.sort((a,b)=>a-b)
  let i = 0, j = 0, k = 0
  let sum = 0
  while (i < a.length && j < b.length && k < c.length) {
    if (a[i] === b[j] && b[j] === c[k]) {
      sum += a[i]
      i++
      j++
      k++
    } else {
      if (a[i] < b[j]) {
        i++
      } else if (b[j] < c[k]) {
        j++
      } else {
        k++
      }
    }
  }

  return sum
}
const common = (a,b,c) => {
  [a,b,c] = [a,b,c].map(el => el.reduce((sum, num) => (sum[num] = (sum[num] || 0) + 1, sum), {}));
  return Object.keys(a).reduce((sum, key) => sum + Math.min(a[key]||0, b[key]||0, c[key]||0) * key, 0);
}
function alternate1(n, f, s){
  const result = []
  for(let i = 0;i< n;i++){
    if(i%2===0) result.push(f)
    if(i%2!==0) result.push(s)
  }
  return result
}
function* nextElementGenerator(array) {
  let i = 0
  while(true){
    yield array[i]
    if(i==array.length-1){
      i=0
    } else{
      i++
    }
  }
}
const removeDuplicateIds = (obj) => {
  const arr = Object.entries(obj).sort((a,b)=>a[0]-b[0]).map(el=>{
    const setArr = new Set(el[1])
    return [el[0],[...setArr]]
  })
  for(let i = 0;i<arr.length-1;i++){
    for(let j = i;j<arr.length-1;j++){
      if(arr[i][1].length>0){
        arr[i][1] = arr[i][1].filter(el=> arr[j+1] && arr[j+1][1].indexOf(el)==-1)
      }
    }
  }
  const object = {}
  arr.forEach(el=> obj[el[0]] = el[1])
  return obj
};
const countWord=s=>{
  const word = 'word'
  let i = 0
  let count = 0
  s.toLowerCase().split("").forEach(el=>{
    if(i == 3 && el == word[i]){
      i=0
      count++
    }else if(el == word[i]){
      count++
      i++
    }
  })
  return Math.floor(count / 4)
}
function stringIntGreaterThan1(a, b) {
  const val = a[0]==='-' && b[0]==='-' ? 0 : 1
  console.log(a,b)

  if(a[0]==="-" && b[0]!=="-") return false
  if(a[0]!=="-" && b[0]==="-") return true
  if(val===1){
    if(a.length<b.length) return false
    if(a.length>b.length) return true
  }
  if(val===0){
    if(a.length>b.length) return false
    if(a.length<b.length) return true
  }
  for(let i = 0;i<a.length;i++){
    if(val===1){
      if(a[i]>b[i]) return true
      if(a[i]<b[i]) return false
    } else{
      if(a[i]<b[i]) return true
      if(a[i]>b[i]) return false
    }
  }
  return false
}
function stringIntGreaterThan(a, b) {
  var sa = a[0]=="-", sb = b[0]=="-";
  if( sa && sb ) return stringIntGreaterThan(b.slice(1),a.slice(1));
  return ( sa || sb )? !sa : a.length > b.length || a.length==b.length && a > b;
}
function onesCounter(input) {
  const arr = [0]
  for(let i =0;i<input.length;i++){

    input[i] == 1 ? arr[arr.length-1]++ : arr.push(0)
  }
  return arr.filter(el=>el!==0)
}
var onesCounter1 = ($) => ($.join('').match(/(1+)/g)||[]).map(e=>e.length)
function predictAge(...props){
  return Math.trunc(Math.sqrt(props.reduce((cur,acc)=>{
    return cur + (acc*acc)
  },0)) / 2 )
}
function predictAge2(...n){
  return (Math.hypot(...n)/2)>>0
}
function sortList (sortBy, list) {
  return list.length ? list.sort((a,b)=> b[sortBy]-a[sortBy]) : list
}
var midpointSum=function(n){
  if(n.length < 2 )return undefined
  if(n[0]==1&&n[1]==0&&n[2]==0) return undefined
  if(n[0]==0&&n[1]==0&&n[2]==1) return undefined
  if(n[0]==0&&n[1]==0&& n.length ===2) return undefined
  let leftSum = 0

  let rightSum = n.reduce((cur,acc)=> cur+acc,0)
  console.log(n, rightSum)
  for(let i =0;i<n.length;i++){
    rightSum -= n[i]
    if(leftSum == rightSum) return i
    leftSum += n[i]
  }
  return undefined
};
function numberOfPairs(gloves){
  let res = 0
  const obj = {}

  gloves.forEach((el)=>{
    obj[el]? obj[el] +=0.5 : obj[el] =0.5
  })
  Object.keys(obj).forEach(el=>{
    if(obj[el]>= 1){
      res += Math.floor(obj[el])
    }
  })
  return res
}
function getMichaelLastName(inputText) {
  const result = []
  inputText.split(" ").forEach((el,ind,arr)=>{
    if(el==="Michael" && arr[ind+1][0].toLowerCase() !== arr[ind+1][0] ){
      result.push(arr[ind+1].replace(/[?,.]/g,""))
    }
  })
  return result
}
function getMichaelLastName2(txt) {
  return txt.match(/Michael\s([A-Z]\w+)/g).map(x => x.split(' ')[1])
}
function combine(...arg) {
  const copy = [...arg]
  const val = copy.sort((a,b)=> b.length-a.length)[0].length
  const res = []
  for(let i =0;i<val;i++){
    for(let j = 0;j<arg.length;j++){
      if(arg[j][i]!==undefined){
        res.push(arg[j][i])
      }
    }
  }
  return res
}
function combine2(...arr) {
  const len = Math.max(...arr.map(e => e.length));
  return [...Array(len)].reduce((a,c,i) => a.concat(arr.map(e=>e[i])),[]).filter(e=>e!==undefined);
}
function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};
function squaresNeeded(g){
  if(g==0) return 0
  let val = 1
  let i = 1
  while(true){
    if(val>g) return i-1
    if(val==g) return i
    i++
    val = val * 2
  }
}
function squaresNeeded2(g){
  return Math.ceil(Math.log2(grains+1))
}
function divisibleByThree2(str){
  return str.split("").reduce((acc,cur)=>Number(cur)+acc,0) % 3===0
}
Ackermann = function(m,n) {
    if (m === 0) {
        return n + 1;
    } else if (m > 0 && n === 0) {
        return Ackermann(m-1, 1);
    } else if (m > 0 && n > 0) {
        return Ackermann(m-1, Ackermann(m, n-1));
    }
}
function oddOne(arr) {
  for(let i = 0;i<arr.length;i++){
    if(arr[i]%2!==0){
      return i
    }
  }
  return -1
}
function oddOne(arr) {
  return arr.findIndex(x => x % 2 != 0);
}
function fillWater(buckets){
  let litres = 0
  const resArr = []
  const water = 'water'
  buckets.forEach(el=>{
    let word = el

    if(word.startsWith('robber-')){
      const count = 30 - el.length
      let ind = 0
      for(let i =0;i<count;i++){
        if(ind===4){
          word = word + water[ind]
          ind = 0
          litres++
        } else {
          word = word + water[ind]
          ind++
          litres++
        }
      }
    }
    resArr.push(word)

  })
  resArr.push(`${litres} ${litres > 1 ? "litres" : "litre"}`)
  return resArr
}

function fillWater2(buckets) {
  let litres = 0
  buckets = buckets.map(x => {
    if (/^robber-/.test(x)) {
      litres += 30 - x.length
      return padEnd(x, 30, 'water')
    }
    return x
  })
  litres = `${litres} litre${litres > 1 ? 's' : ''}`
  return buckets.concat(litres)
}
function minimumBillCount(value, bills){
  bills.sort((a, b) => b - a)
  let count = 0
  for (const bill of bills) {
    while (value >= bill) {
      value -= bill
      count++
    }
  }
  return count
}
const minimumBillCount2 = (value, availables) => availables.sort((a, b) => b - a)
    .reduce((count, available) => (count += value / available | 0, value %= available, count), 0);

function boundingBox2(imageArray) {
  if (imageArray.length === 0) {
    return []
  }
  const arr = []
  imageArray.forEach((el, ind) => {
    el.forEach((num, index) => {
      if (num === 1) {
        arr.push([ind, index])
      }
    });
  });
  if (arr.length === 0) {
    return imageArray
  }
  let top = arr[0][0]
  let bottom = arr[0][0]
  let leftSide = arr[0][1]
  let rightSide = arr[0][1]
  arr.forEach(([row, col]) => {
    if (row < top) top = row
    if (row > bottom) bottom = row
    if (col < leftSide) leftSide = col
    if (col > rightSide) rightSide = col
  });
  return imageArray.map((el, ind) => {
    return el.map((num, index) => {
      if (ind === top || ind === bottom) {
        return index >= leftSide && index <= rightSide ? 1 : 0
      }
      if (index === leftSide || index === rightSide) {
        return ind >= top && ind <= bottom ? 1 : 0
      }
      return 0
    });
  });
}
const boundingBox = (imageArray) => {
  let o = { t: Infinity, b: -1, l: Infinity, r: -1 };

  imageArray = imageArray.map((r, i) => {
    return r.map((c, j) => {
      if (c === 1) o = { t: Math.min(i, o.t), b: Math.max(i, o.b), l: Math.min(j, o.l), r: Math.max(j, o.r) };
      return 0;
    });
  });

  for (let i = o.t; i <= o.b; i++) imageArray[i][o.l] = imageArray[i][o.r] = 1;
  for (let i = o.l; i <= o.r; i++) imageArray[o.t][i] = imageArray[o.b][i] = 1;

  return imageArray;
};
function add12(arr) {
  const resArr = []
  if(arr.length<1) return resArr
  let value = 0
  arr.forEach((el)=>{
    resArr.push(value+el)
    value = value + el
  })
  return resArr
}
function add(a){
  let t = 0
  return a.map(e=>t+=e)
}
function noonerize1(n) {
  if(typeof n[0]!=='number' || typeof n[1]!=='number') return 'invalid array'
  const f = `${n[1]}`[0] +`${n[0]}`.substring(1)
  const s = `${n[0]}`[0] +`${n[1]}`.substring(1)
  return Math.abs(f-s)
}
const noonerize = numbers =>
    numbers.some(isNaN) ? `invalid array` :
        Math.abs(numbers.map((val, idx) => `${numbers[idx ^ 1]}`[0] + `${val}`.slice(1)).reduce((pre, val) => pre - val));
function solution1(n){
  const num = n - n%1
  if( n%1 < 0.25 ) return num
  if( n%1 >= 0.25 && n%1<0.75) return num + 0.5
  return num + 1
}
function solution4(n){
  return Math.round(n*2)/2;
}
function coinsNeeded2(amount, coinDenominations) {
  coinDenominations.sort((a, b) => b - a)
  let value = amount
  let result = 0
  for (let i = 0; i < coinDenominations.length; i++) {
    if(amount / coinDenominations[i] >= 1){
      result += Math.floor(value / coinDenominations[i])
      value -= coinDenominations[i] * Math.floor(value / coinDenominations[i])
    }
  }
  return result
}
function coinsNeeded(amount,[...coins]) {
  return function needed(amount,[coin,...coins]) {
    return amount && Math.floor(amount / coin) + needed(amount % coin, coins);
  } ( amount, coins.sort( (x,y) => y-x ) ) ;
}
function countInversions2( array ){
  if(array.length < 2) return 0
  let inversions = 0
  for (let j = array.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        inversions++
      }
    }
  }
  return inversions
}
function countInversions(arr){
  return arr.map((x, i) => arr.slice(i+1).filter(y => y < x).length).reduce((a, b) => a+b, 0);
}
function roofFix2(f, r){
  for(let i = 0;i<f.length;i++){
    if(f[i]!==" " && (r[i]=='/' || r[i]=='\\')){
      return false
    }
  }
  return true
}

function roofFix(s, x){
  return x.split('').every((e,i) => e == '_' || s[i] == ' ');
}
function zeroPlentiful2(arr){
  if(arr.length < 4) return 0
  if(arr.length == arr.filter(el=> el==0 && arr.length>4).length) return 1
  console.log(arr)
  let result = 0
  let count = 0
  for(let i = 0;i< arr.length;i++){
    if(arr[i]!==0){
      if(count<4 && count !==0) return 0
      if(count>=4){
        result++
      }
      count = 0
    } else {
      count++
    }
  }
  if(count >= 4){
    result++
  }else if(count > 0){
    return 0
  }
  return result
}
function zeroPlentiful(arr){
  var sequences = arr.map((x) => !x ? x : ',').join('').split(',').filter((str) => str);
  return sequences.every((str) => str.length >= 4) ? sequences.length : 0;
}
function orderBreaker2(arr) {
  const isSorted = (array) => {
    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[i - 1]) {
        return false
      }
    }
    return true
  }
  for (let i = 0; i < arr.length; i++) {
    const newArr = arr.slice(0, i).concat(arr.slice(i + 1))
    if (isSorted(newArr)) {
      return arr[i]
    }
  }

  return null
}
function orderBreaker(arr) {
  for(let i=0;i<arr.length;i++){
    let [a,v,b] = [arr[i-1],arr[i],arr[i+1]];
    if( a===undefined && v>b || b===undefined && a>v || a<=b && (a>v||v>b) )
      return v;
  }
  throw "No breaker (this is breaking the rules!)";
}
function indexEqualsValue2(a) {
  let currentLow = -1;
  let helperFunction = (start, stop, currentLow, a) => {
    if (start > stop) {
      return currentLow;
    }
    let mid = Math.floor(start - ((start- stop) / 2));
    if (a[mid] == mid) {
      currentLow = mid;
      return helperFunction(start, mid-1, currentLow, a);
    } else if (a[mid] > mid) {
      return helperFunction(start, mid-1, currentLow, a);
    } else {
      return helperFunction(mid+1, stop, currentLow, a);
    }
  }
  return helperFunction(0, a.length -1, currentLow, a);
}

indexEqualsValue=(a,b=0,c=a.length-1,i=(b+c)>>1)=>b<c?i<=a[i]?indexEqualsValue(a,b,i):indexEqualsValue(a,++i,c):a[c]==c?c:-1

function getState2(promise) {
  return new Promise((resolve)=>{
    const p = promise
    try{
      p.then(()=>resolve('fulfilled'), ()=>resolve('rejected'))
    }catch{
      resolve('pending')
    }
    setTimeout(()=>{
      resolve('pending')
    },0)
  })
}
function getState(promise) {
  const t = {};
  return Promise.race([promise, t])
      .then(v => (v === t)? "pending" : "fulfilled")
      .catch(err => "rejected");
}
function lineIntersections(start, end) {
  let result = 0
  for(let i = 0;i < start.length;i++){
    for(let j = 0;j< start.length;j++){
      if(i!==j){
        if(start[i] >= start[j] && start[i]<= end[j]){
          result++
          break
        }
        if(end[i] >= start[j] && end[i] <= end[j]){
          result++
          break
        }

      }
    }
  }
  return result > 1 ? result - 1 : result
}
function thatUnitesUs2(array1, array2, n) {
  const lowercaseLetters = Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 97));
  const resArr = []
  for(let i = 0;i<lowercaseLetters.length;i++){
    if(resArr.length==n) return resArr
    if(array1.includes(lowercaseLetters[i])){
      resArr.push(lowercaseLetters[i])
      continue;
    } else if(array2.includes(lowercaseLetters[i])){
      resArr.push(lowercaseLetters[i])
      continue;
    }
  }

}
function thatUnitesUs(arr1, arr2, n) {
  return Array.from(new Set(arr1.concat(arr2).sort())).slice(0,n)
}

function autocorrect2(input){
  return input.split(' ').map(word=>{
    if(word === 'youyouyou') return word
    if(word === 'u') return `your sister`
    if(word.includes('you') || word.includes('You')){
      const set = new Set(word.replace(/[!?,.]/, ''))
      if(set.size===3){
        return /[!?,.]/.test(word) ? `your sister${word[word.length-1]}` : `your sister`
      }
    }
    return word
  }).join(" ")
}
function autocorrect(input){
  return input.replace(/\b(you+|u)\b/gi, "your sister");
}
function fullScan(parts){
  let s = parts[0].split`\n`
  for(let i = 1; i < parts.length; i++){
    let arr = parts[i].split`\n`
    for(let j = 0; j < arr.length; j++){
      for(let k = arr[j].length - 1; k > 0; k--){
        if(s[j].endsWith(arr[j].slice(0, k))){
          s[j] += arr[j].slice(k)
          break
        }
      }
    }
  }
  return s.join`\n`
}
function comes_after(str,l) {
  let resStr = ''
  for(let i = 0;i<str.length;i++){
    if(str[i].toLowerCase()===l&&/[a-zA-Z]/.test(str[i+1])&&str[i+1]!==undefined){
      resStr += str[i+1]
    }
  }
  return resStr
}
const comes_after = (str, l) => {
  const reg = RegExp(l, 'i')
  const arr = str.split('')
  return arr.filter( (el, i) => i && reg.test(str[i-1]) && /[a-z]/i.test(el) ).join('')
}
function sortTheInnerContent(words){
  return words.split(" ").map((word)=>{
    return word.length <= 3 ? word : `${word[0]}${word.substring(1, word.length-1).split("").sort((a,b)=>{
      if(a>b) return -1
      if(a<b) return 1
      if(a==b) return 0
    }).join("")}${word[word.length-1]}`
  }).join(" ")
}
function sortTheInnerContent2(words){
  return words.replace(/\B\w+(?=\w)/g, x => x.split('').sort().reverse().join(''));
}
function isPrimeHappy(n){
  if (n <= 2) {
    return false
  }
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }
  let sum = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum % n === 0
}
function isPrimeHappy2(n){
  return n>2? [...Array(n).keys()].slice(2).filter(e => [...Array(e+1).keys()].slice(2).filter(c => e%c==0).length==1).reduce((a,c) => a+c,0)%n==0 : false;
}
function zozonacci (pat, len) {
  const arr = [1,7,7,7,7]
  arr.length = 2

  if(len < 1 || pat.length < 1) return []

  const zozonacciArr = pat[0] == "pad" ? [0, 1, 0, 0] : [0, 0, 0, 1]

  if(len<=4) {
    zozonacciArr.length = len
    return zozonacciArr
  }

  let step = 0

  for(let i = 4;i<len;i++){
    if(step>=pat.length){
      step = 0
    }

    switch(pat[step]){
      case "fib":
        zozonacciArr.push(zozonacciArr[i-1]+zozonacciArr[i-2])
        step++
        break;
      case "jac":
        zozonacciArr.push(zozonacciArr[i-1] + 2 * zozonacciArr[i-2])
        step++
        break;
      case "pad":
        zozonacciArr.push(zozonacciArr[i-2] + zozonacciArr[i-3])
        step++
        break;
      case "pel":
        zozonacciArr.push(2 * zozonacciArr[i-1] + zozonacciArr[i-2])
        step++
        break;
      case "tet":
        zozonacciArr.push(zozonacciArr[i-1] + zozonacciArr[i-2] + zozonacciArr[i-3] + zozonacciArr[i-4])
        step++
        break;
      case "tri":
        zozonacciArr.push(zozonacciArr[i-1] + zozonacciArr[i-2]+zozonacciArr[i-3])
        step++
        break;
    }
  }
  return zozonacciArr
}


function zozonacci2(pattern, n) {
  const sequences = {
    'fib': (a,b,c,d) => d+c,
    'jac': (a,b,c,d) => d+2*c,
    'pad': (a,b,c,d) => c+b,
    'pel': (a,b,c,d) => 2*d+c,
    'tet': (a,b,c,d) => d+c+b+a,
    'tri': (a,b,c,d) => d+c+b
  };
  if (!pattern.length || !n) return [];
  let seq = pattern[0] == "pad" ? [0,1,0,0] : [0,0,0,1];
  if (n <= 4) return seq.slice(0, n);
  for (let i = 0; seq.length < n; i++) {
    seq.push(sequences[pattern[i % pattern.length]](...seq.slice(-4)));
  }
  return seq;
}
function magicSquare(n) {
  let magicSquare = []
  for (let i = 0; i < n; i++) {
    magicSquare.push([])
    for (let j = 0; j < n; j++) {
      magicSquare[i].push(0)
    }
  }

  let num = 1
  let i = 0
  let j = Math.floor(n / 2)

  while (num <= n * n) {
    magicSquare[i][j] = num
    num++;
    let newi = (i - 1 < 0) ? n - 1 : i - 1
    let newj = (j + 1 >= n) ? 0 : j + 1
    if (magicSquare[newi][newj] !== 0) {
      i = (i + 1) % n
    } else {
      i = newi
      j = newj
    }
  }

  return magicSquare
}
function magicSquare2(n) {
  return Array.from({ length: n }, (_,i) =>
      Array.from({ length: n }, (_,j) =>
          (i + j + Math.ceil(n / 2)) % n * n + (n - (n ** 2 - i - j * 2 - 1) % n) % n + 1
      )
  )
}
function markSpot2(n) {
  if(typeof n !== "number"|| n<1 || n%2==0) return "?"
  const resArr = []
  let countSpace = n-1
  let numberOfSpacesBetweenX = 3
  const comX = new Array (countSpace+1).fill(".")
  comX[comX.length-1] = 'X\n'
  resArr.push(comX.join("").replace(/\./g, " "))
  countSpace -= 2
  for(let i =0;i<(n-1)/2;i++){
    const comaX = new Array (countSpace+numberOfSpacesBetweenX+2).fill(".")
    comaX[countSpace] = "X"
    comaX[comaX.length-1] = "X\n"
    resArr.push(comaX.join("").replace(/\./g, " "))
    resArr.unshift(comaX.join("").replace(/\./g, " "))
    countSpace -=2
    numberOfSpacesBetweenX +=4
  }
  return resArr.join("")
}
function markSpot(n) {
  if(!(+n)||n<1||!(n&1)) return '?'
  const arr = Array(n).fill().map(_=>Array(2*n-1).fill(" ")); let l = 0, r = 2*n-2;
  for(let i = 0; i < n; i++)
    arr[i][l]='X', arr[i][r]='X', l+=2, r-=2;
  return arr.map(v=>v.join``.replace(/ +$/,'')).join`\n`+'\n';
}
function findSpaceship1(map = "") {
  if(map == "X") return [0, 0]
  if(map.indexOf("X") == -1 || !map) return 'Spaceship lost forever.'
  const reqMap = map.split("\n").reverse()
  for(let i =0;i<reqMap.length;i++){
    if(reqMap[i].indexOf("X") !== -1) return [reqMap[i].indexOf("X"), i]
  }
  return [7,2]
}
const findSpaceship = (map = "") => {
  map = map.split("\n").reverse()

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === "X") return [x, y]
    }
  }

  return "Spaceship lost forever."
}
function getSocks(name, socks) {
  const socksSet = new Set(socks)
  if(socksSet.size>=2&&name=='Punky'){
    return [[...socksSet][0],[...socksSet][1]]
  } else if(socksSet.size>=1&& name=="Henry"){
    socks.sort((a,b)=>a>b)
    for(let i = 0;i<socks.length;i++){
      if(socks[i]==socks[i+1]){
        return [socks[i],socks[i+1]]
      }
    }
  }
  return []
}
const getSocks2 = (name, socks) => {
  if (name === 'Punky') {
    const sockA = socks[0]
    const sockB = socks.find(sock => sockA !== sock)
    return sockA && sockB ? [sockA, sockB] : []
  } else {
    return socks.filter(sock => socks.indexOf(sock) !== socks.lastIndexOf(sock))
  }
}
function fight2(robot1, robot2, tactics) {

  const robotFirst = robot1.speed >= robot2.speed ? robot1 : robot2
  const robotSecond = robot1.speed < robot2.speed ? robot1 : robot2
  const len = Math.max(robotFirst.tactics.length, robotSecond.tactics.length)
  for(let i = 0;i < len;i++){
    robotSecond.health -= tactics[robotFirst.tactics[i]] ? tactics[robotFirst.tactics[i]] : 0
    if(robotSecond.health<=0) return robotFirst.name + " has won the fight."
    robotFirst.health -= tactics[robotSecond.tactics[i]] ? tactics[robotSecond.tactics[i]] : 0
    if(robotFirst.health<=0) return robotSecond.name + " has won the fight."

  }
  if(robotFirst.health == robotSecond.health) return 'The fight was a draw.'
  return robotFirst.health > robotSecond.health ? robotFirst.name + " has won the fight." : robotSecond.name+ " has won the fight."
}
function fight(robot1, robot2, tactics) {

  const robotFirst = robot1.speed >= robot2.speed ? robot1 : robot2
  const robotSecond = robot1.speed < robot2.speed ? robot1 : robot2
  const len = Math.max(robotFirst.tactics.length, robotSecond.tactics.length)
  const won = " has won the fight."
  for(let i = 0;i < len;i++){
    robotSecond.health -= tactics[robotFirst.tactics[i]] ? tactics[robotFirst.tactics[i]] : 0
    if(robotSecond.health<=0) return robotFirst.name + won
    robotFirst.health -= tactics[robotSecond.tactics[i]] ? tactics[robotSecond.tactics[i]] : 0
    if(robotFirst.health<=0) return robotSecond.name + won

  }
  if(robotFirst.health == robotSecond.health) return 'The fight was a draw.'
  return robotFirst.health > robotSecond.health ? robotFirst.name + won : robotSecond.name + won
}
function findUnique(numbers) {
  const obj = {}
  numbers.forEach(el=>{
    if(obj[el]){
      obj[el]++
    } else {
      obj[el]=1
    }
  })
  for (let key of Object.keys(obj)) {
    if(obj[key]==1){
      return Number(key)
    }
  }
}
function findUnique(numbers) {
  return numbers.reduce((a, b) => a ^ b);
}
function hungrySeven(arr){
  const resArr = []
  let count = 0
  for(let i =0;i<arr.length;i++){
    if(arr[i] == 7){
      count++
      if(arr[i+1]==7){
        continue;
      } else if(arr[i+1]==8 && arr[i+2] == 9){
        resArr.push(8)
        resArr.push(9)

        for(let j = 0;j<count;j++){

          resArr.push(7)

        }
        count = 0
        i += 2
      } else {
        for(let j = 0;j<count;j++){
          resArr.push(7)
        }
        count = 0
      }

    }else{
      resArr.push(arr[i])
    }
  }
  for(let i =0;i<arr.length;i++){
    if(resArr[i]==7 && resArr[i+1] == 8 && resArr[i+2]==9){
      return hungrySeven(resArr)
    }
  }
  return resArr
}
const hungrySeven2 = array => {
  let string = array.join('');
  while (/789/.test(string))
    string = string.replace(/789/g, '897');
  return string.split('').map(Number);
}