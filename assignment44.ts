// Function to print a summary of the sandwich being ordered
function make_sandwich(...items: string[]): void {
    console.log('Sandwich with the following items:');
    for (const item of items) {
        console.log(`- ${item}`);
    }
    console.log('\n');
}

// Call the function three times with different numbers of arguments
make_sandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
make_sandwich('Turkey', 'Bacon', 'Avocado');
make_sandwich('Peanut Butter', 'Jelly');
