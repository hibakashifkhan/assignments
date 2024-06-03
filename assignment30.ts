let usernames: string[] = ["Admin", "Anny", "Anita", "Ali", "Bob"];

for (let username of usernames) {
    if (username === "admin") {
        console.log("Hello Admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again`);
    }
}
