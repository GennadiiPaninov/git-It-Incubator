//You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.
const uniTotal = s => {
    let r = 0;
    for (let i=0; i< s.length;i++){
       
    r += s[i].charCodeAt(0)
    }
    console.log(r)
    return r;
  }
  console.log(  uniTotal("sssD"))



function countdown(n){
    console.log(n)
    return n < 1 ? [] : [n].concat(countdown(n - 1));
 }

 countdown(5);

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// округление вверх
const century = year => Math.ceil(year/100)

century(2357);
// деление без остатка
const isDivisible =(n, x, y)=>  n % x == 0 && n % y == 0 ? true : false;
console.log(isDivisible( 60, 5 , 10))


const nearestSq= n => {
  
    let r = Math.sqrt(n)
    let s = Math.trunc(r)// целое число 
    if(n == 2){
      return 1
    }
    if(Number.isInteger(r)){
      return n
    }  else if(r - s < 0.5){
      return Math.pow(Math.floor(r), 2)
      
    } else {
      return Math.pow(Math.ceil(r), 2)
    }
     
  }


console.log(nearestSq(10))
console.log(nearestSq(111))