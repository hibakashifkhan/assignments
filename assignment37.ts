export{}
function make_shirt (size = "L",message = "I love Typescript"): void{
    console.log(`I'm making a ${size} Tshirt with the text ${message} on it.`)
}
make_shirt();
make_shirt("M")

make_shirt("S")