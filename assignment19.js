"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestArr = ["Hania", "Fareeha", "Mary"];
let CanNotCome = "Hania";
let NewGuest = "Hareem";
guestArr[guestArr.indexOf(CanNotCome)] = NewGuest;
let guestBegin = "Ifrah";
guestArr.unshift(guestBegin);
let middleGuest = "Ayesha";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
guestArr.push("Ali");
console.log(guestArr.length + " " + "peoples" + "" + "are still invited to dinner");
