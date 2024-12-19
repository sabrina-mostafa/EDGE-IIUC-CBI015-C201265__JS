// Traditional Way
const age1 = 22 ;
const age2 = 42 ;
const age3 = 59 ;
const maximum = Math.max(age1, age2, age3) ;
console.log(maximum) ;


// Spread Operator
const allAges = [22, 42, 59] ;
const maxAge = Math.max(...allAges) ;
console.log(maxAge) ;