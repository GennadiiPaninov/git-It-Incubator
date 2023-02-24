//You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.
const uniTotal = s => {
    let r = 0;
    for (let i=0; i< s.length;i++){
       
    r += s[i].charCodeAt(0)
    }
    console.log(r)
    return r;
  }
  uniTotal("sssD");


function countdown(n){
    console.log(n)
    return n < 1 ? [] : [n].concat(countdown(n - 1));
 }

 countdown(5);

