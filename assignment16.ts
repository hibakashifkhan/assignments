export{}
let guestArr :string[]=["Hania","Fareeha","Mary"]
let CanNotCome = "Hania"
let NewGuest: string = "Hareem"
guestArr[guestArr.indexOf(CanNotCome)]=NewGuest
//console.log(guestArr)
//guestArr.map((item)=>(
 //   console.log(`Dear ${item}, I've now arranged a bigger dinner table.`)
//))
let guestBegin :string= "Ifrah"
guestArr.unshift(guestBegin)
//console.log(guestArr)
let middleGuest = "Ayesha"
let middleIndex = guestArr.length/2
guestArr.splice(middleIndex,0,middleGuest)
//console.log(guestArr)
guestArr.push("Ali")
console.log(guestArr)
guestArr.map((item) => 
    console.log(`Hi ${item} I would like to invite you to my dinner party,Please Come. `))
