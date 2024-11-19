
// Traditional Function
function Sum(agr1, agr2) {
    console.log('TraditionalFunc: ' + Number(agr1+agr2) );
}
Sum(2, 10) ;


// Arrow function
// Anonymous function (noName), assignment is must or need to be assigned to other functions as an argument
let summation = (arg1, arg2) => {
    console.log('ArrowFunc: ' + arg1+arg2) ;
}
summation(1, 92) ;