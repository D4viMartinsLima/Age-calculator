'use strict'

const btnEl = document.getElementById('btn');
const birthdayEl = document.getElementById('birthday');
const resultEL = document.getElementById('result');

resultEL.style.display = 'none'

function calcAge(){
    const birthdayValue = birthdayEl.value;
    console.log(birthdayValue);

    if(birthdayValue === ''){
        alert('Please enter your birthday')
    }else{
        const age = getAge(birthdayValue)
        resultEL.textContent = `Your age is ${age}`
        resultEL.style.display = 'block';


    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue)
    console.log(currentDate.getFullYear());
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    if(month < 0 || (month === 0 && currentDate.getDate() <  birthdayDate.getDate())){
        age--;
    }
    return age;
} 

btnEl.addEventListener('click',calcAge )