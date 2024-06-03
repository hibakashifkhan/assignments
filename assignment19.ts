export{}
let guestArr :string[]=["Hania","Fareeha","Mary"]
let CanNotCome = "Hania"
let NewGuest: string = "Hareem"
guestArr[guestArr.indexOf(CanNotCome)]=NewGuest
let guestBegin :string= "Ifrah"
guestArr.unshift(guestBegin)
let middleGuest = "Ayesha"
let middleIndex = guestArr.length/2
guestArr.splice(middleIndex,0,middleGuest)
guestArr.push("Ali")
console.log(guestArr.length+" "+ "peoples"+"" +"are still invited to dinner")