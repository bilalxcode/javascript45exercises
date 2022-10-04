const magicians = ['John', 'Tom', 'Tim', 'David']

function show_magicians(array) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(array[i])

    }
}
function make_great(array) {
    for (let i = 0; i < magicians.length; i++) {
        console.log("Great", array[i])

    }
}
make_great(magicians)