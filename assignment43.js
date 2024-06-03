"use strict";
// Array of magicians' names
const magicians = ['Harry Houdini', 'David Blaine', 'Dynamo', 'Penn Jillette', 'Teller'];
// Function to print each magician's name
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Function to add "the Great" to each magician's name and return a new array
function make_great(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}
// Create a new array with modified names
const greatMagicians = make_great([...magicians]);
// Call the function to print the original and modified arrays
console.log('Original magicians:');
show_magicians(magicians);
console.log('\nGreat magicians:');
show_magicians(greatMagicians);
