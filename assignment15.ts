export{}
let guestArr :string[]=["Hania","Fareeha","Mary"]
console.log(guestArr)
let CanNotCome:string ="Hania"
console.log(CanNotCome+" "+" is unable to come for dinner")

let NewGuest: string = "Hareem"
guestArr[guestArr.indexOf(CanNotCome)]=NewGuest;
console.log(guestArr)
guestArr.map((item) => 
    console.log(`Hi ${item} I would like to invite you to my dinner party,Please Come. `))
