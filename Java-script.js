
function countdown(n){
    console.log(n)
    return n < 1 ? [] : [n].concat(countdown(n - 1));
 }

 countdown(5)