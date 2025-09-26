const inputOne=document.getElementById("one")
const inputTwo=document.getElementById("two")
const buttonSum=document.getElementById("sum")
const output=document.getElementById("output")

sum.addEventListener('click',(e)=> {
    e.preventDefault()
    const numberOrNan1=Number(inputOne.value)
    const numberOrNan2=Number(inputTwo.value)

    let result=''

    if (isNaN(numberOrNan1) && isNaN(numberOrNan2)){
        result= "Некорректное значение в обоих полях"
    }
    if (!isNaN(numberOrNan1) && isNaN(numberOrNan2)){
        result= "Некорректное значение во 2 поле"
    }
    if (isNaN(numberOrNan1) && !isNaN(numberOrNan2)){
        result= "Некорректное значение в 1 поле"
    }
    if (!isNaN(numberOrNan1) && !isNaN(numberOrNan2)){
        result= `Результат равен  ${numberOrNan1+numberOrNan2}`
    }
    output.innerText = result
})

