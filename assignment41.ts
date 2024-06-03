// Array of magicians' names
const magicians: string[] = ['Harry Houdini', 'David Blaine', 'Dynamo', 'Penn Jillette', 'Teller'];

// Function to print each magician's name
function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Call the function with the array of magicians
show_magicians(magicians);
