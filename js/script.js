// // page 73

// // Ex. N-4

// let n = Math.abs(+prompt("num n", ""));
// let x = +prompt("num x", "");
// let s = 0;

// for (let i = 1; i <= n; i++) {
//     s += Math.sin(i) * x ;   
// }

// console.log(s);



// ________________________________________________




// // Ex. N-8

// let n = Math.abs(+prompt("num n", ""));
// let x = +prompt("num x", "");
// let y = 0;
// let iFactorial = 1 ;


// for (let i = 1; i <= n; i++) {
//     iFactorial *= i;
//     y += Math.cos(i * x) / (Math.pow(2 , i) * iFactorial);
// }

// console.log(y);



// ______________________________________________________________________



//  // Ex. N-9

// let n = Math.abs(+prompt("num n", ""));
// let y = 1;

// for (let i = 1; i <= n; i++) {
//     if (n % 2 == 0) {
//         y *= (i + i);
//     }else{
//         y *= (i + i + 1);
//     }
// }

// console.log(y);



// ____________________________________________________________________________




// // Ex. N-10

// let a = +prompt("num n", "");
// let i = 0;
// let c = Math.pow(4 ,i);

// while (c < a) {
//     i++
//     c = Math.pow(4 ,i);
// }

// console.log(i);



// ______________________________________________________________




// // Ex. N-12



// let n = +prompt("num n", "");
// let sum = 0;
// let a = 0;

// while (n) {   
//     a = n % 10;
//     sum += a;
//     n = Math.floor(n / 10 ); 
// }

// console.log(sum);
