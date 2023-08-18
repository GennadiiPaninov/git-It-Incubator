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