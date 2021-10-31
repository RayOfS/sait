const Income = document.getElementById('income');

const IncomeRange = document.getElementById('income_range');

const FinalTax = document.getElementById('final_tax');

const Personal = document.getElementById('svoya');

const PersonalRange = document.getElementById('svoya_range');

/*Использование всех вводов*/
const InputRange = document.querySelectorAll('.input_range');

const Personal1Range = document.querySelectorAll('.per_range');


const RValue = () => {
    Income.value = IncomeRange.value;
    Personal.value = PersonalRange.value;
}
RValue();


for(let input of InputRange){
    input.addEventListener('input', () => {
        RValue();
        calc(Income.value, Personal.value);
    })
} 

for(let input of Personal1Range){
    input.addEventListener('input', () => {
        RValue();
        calc(Income.value, Personal.value);
    })
} 

const calc = (Income = 0, Personal = 0) => {
    let Rate = Personal; 
    let monthTax = Math.round (Income * (Rate/100));
    FinalTax.innerHTML = `${monthTax} ₽`;
    
}