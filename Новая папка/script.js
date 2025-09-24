let inputOne=document.getElementById("one")
console.log(inputOne.value);
let inputTwo=document.getElementById("two")
console.log(inputTwo.value);
let buttonSum=document.getElementById("sum")
console.log(buttonSum.value);


if (typeof Number.isFinite(inputOne.value) && typeof Number.isFinite(inputTwo.value)) {
    let buttonSum=inputOne.value+inputTwo.value;
    console.log(buttonSum.value);
}
else {
    console.log("Некорректное значение");
}


