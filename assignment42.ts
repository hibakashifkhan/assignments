export{}
// Array of magicians' names
const magicians: string[] = ['Harry Houdini', 'David Blaine', 'Dynamo', 'Penn Jillette', 'Teller'];

// Function to print each magician's name
function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Function to add "the Great" to each magician's name
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

// Modify the array of magicians
make_great(magicians);

// Call the function to print the modified array
show_magicians(magicians);
