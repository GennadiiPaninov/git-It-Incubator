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