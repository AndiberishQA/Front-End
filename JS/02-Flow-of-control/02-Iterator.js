'use strict';

// Iterator 

let x = 1; 
console.log(x++); // 1 (because it hasn't iterated yet, we print first then iterate)
console.log(x); // 2

let y = 1; 
console.log(++y); // 2 (we iterate first then print)
console.log(y); // 2

for(let i = 0; i<=3;){
    console.log(`i = ${++i}`);
}

for(let j =0; j<=3;){
    console.log(`j = ${j++}`);
}