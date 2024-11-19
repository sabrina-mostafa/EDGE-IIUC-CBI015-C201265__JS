function checkAge(age) {
    return (age>18) || false ;
}

let output = checkAge(55) ;

if(output==true) {
    console.log('Allowed') ;
}
else {
    console.log('notAllowed') ;
}
