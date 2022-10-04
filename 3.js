var name = 'Bilal';


console.log(name.toLowerCase());
console.log(name.toUpperCase());


function capitalize(name) {
    const loweredCase = name.toLowerCase();
    return name[0].toUpperCase() + loweredCase.slice(1);
}

console.log(capitalize(name))