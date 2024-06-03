"use strict";
// Array of magicians' names
const magicians = ['Harry Houdini', 'David Blaine', 'Dynamo', 'Penn Jillette', 'Teller'];
// Function to print each magician's name
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Function to add "the Great" to each magician's name
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}
// Modify the array of magicians
make_great(magicians);
// Call the function to print the modified array
show_magicians(magicians);
