var dinner = ['Dear Michael Jackson, I cordially invite you to the dinner at my residence from 7 pm onwards next Sunday.', 'Dear Barack Obama, I cordially invite you to the dinner at my residence from 7 pm onwards next Sunday.', 'Dear Queen Elizabeth, I cordially invite you to the dinner at my residence from 7 pm onwards next Sunday.'];

dinner.forEach(function (entry) {
    console.log(entry)
});

let length = dinner.length;
let message = "Number of people invited to dinner are: ";
console.log('\n', message, length)