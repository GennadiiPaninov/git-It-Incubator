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
const caml =(this)=>{
  if(this.length === 0) return ""
  const camelCase = this.split(" ").map((el)=> `${el[0].toUpperCase()}${el.substring(1)}`).join("")
 return camelCase
}
const caml2 =(this)=>{
  return this.split(' ').map(w => w.slice(0, 1).toUpperCase() + w.slice(1)).join('');
}
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