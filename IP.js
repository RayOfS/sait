const Income = document.getElementById('income');

const IncomeRange = document.getElementById('income_range');

const FinalTax = document.getElementById('final_tax');


/*Использование всех вводов*/
const InputRange = document.querySelectorAll('.input_range');

const TypeIncome = document.querySelectorAll('.type_income1');


const RValue = () => {
    Income.value = IncomeRange.value;
}

RValue();

const choices = [
    {
        name:'STD',
        precents: 13

    },
    {
        name:'PTD',
        precents: 6 
    },
    {
        name:'PTD2',
        precents: 15 
    }
]

let curRate = choices[0].precents;

for(let choice of TypeIncome){
    choice.addEventListener('click', () => {
        for(let item of TypeIncome){
            item.classList.remove('active');
        }
        choice.classList.add('active');
        takeActiveChoice(choice);
    })
}

const takeActiveChoice = curActive => {
    const dataAttrValue = curActive.dataset.name;
    const curChoice = choices.find (choice => choice.name === dataAttrValue);
    curRate = curChoice.precents;
    calc(Income.value);
}

for(let input of InputRange){
    input.addEventListener('input', () => {
        RValue();
        calc(Income.value);
    })
}

const calc = (Income = 0) => {
    let Rate = curRate; 
    let monthTax = Math.round (Income * (Rate/100));
    FinalTax.innerHTML = `${monthTax} ₽`;
    
}