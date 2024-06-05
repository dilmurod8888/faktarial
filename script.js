let a = +prompt(" Istalgan faktarial son kiriting.");
let factorial = 1;
while (isNaN(a) || a / 1 === 0) {
    a = +prompt('Son kiriting !')
}
for (let i = 1; i < a; i++) {
   factorial = factorial * (i + 1);
   console.log(factorial);
}
