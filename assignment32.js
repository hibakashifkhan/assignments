"use strict";
let current_users = ["Alice", "Zain", "Zainab", "Amna", "Maria"];
let new_users = ["John", "AMNA", "Lisa", "Mary", "Maria"];
for (let new_user of new_users) {
    let isAvailable = true;
    for (let current_user of current_users) {
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            console.log(`Username "${new_user}" is already in use .Please try something else`);
            isAvailable = false;
            break;
        }
    }
    if (isAvailable) {
        console.log(`Username "${new_user}" is valid!`);
    }
}
