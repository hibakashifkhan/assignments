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
//console.log(guestArr)
guestArr.push("Ali")
//console.log(guestArr)
//guestArr.map((item) => 
   // console.log(`Hi ${item} I would like to invite you to my dinner party,Please Come. `))
console.log("I am able to only invite 2 guests to dinner")
while(guestArr.length>2){
    let RemoveGuest = guestArr.pop()
    console.log(`Dear ${RemoveGuest} for some reason i cannot invite you to the dinner,i am sorry`)
}
guestArr.map((item)=>
    console.log(`Dear ${item} I just wanted to let you know that you are still invited to the dinner`))
guestArr.pop()
guestArr.pop()
console.log(guestArr)
