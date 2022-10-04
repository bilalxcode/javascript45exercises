var dinner = ['Dear Methalda, I cordially invite you to the dinner at my residence from 7 pm onwards next Sunday.', 'Dear Bill Gates, I cordially invite you to the dinner at my residence from 7 pm onwards next Sunday.', 'Dear Willy Wonka, I cordially invite you to the dinner at my residence from 7 pm onwards next Sunday.', 'Dear Barack Obama, I cordially invite you to the dinner at my residence from 7 pm onwards next Sunday.', 'Dear Queen Elizabeth, I cordially invite you to the dinner at my residence from 7 pm onwards next Sunday.'];
dinner.push('Dear Warren Buffet, I cordially invite you to the dinner at my residence from 7 pm onwards next Sunday.');


dinner.forEach(function (entry) {
    console.log(entry)
});
console.log("\n");
console.log('you can invite only two people for dinner')
console.log("\n");

dinner.pop();
dinner.pop();
dinner.pop();
dinner.pop();
console.log("Guest still invited");
console.log("\n");

dinner.forEach(function (entry) {
    console.log(entry)
});
console.log("\n");

console.log("It should be an empty list");
dinner.pop();
dinner.pop();
console.log("\n");

dinner.forEach(function (entry) {
    console.log(entry)
});


