"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "L", message = "I love Typescript") {
    console.log(`I'm making a ${size} Tshirt with the text ${message} on it.`);
}
make_shirt();
make_shirt("M");
make_shirt("S");
