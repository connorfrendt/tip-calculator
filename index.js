var submitForm = document.getElementById('form');

function submitButton() {
    var foodValue = submitForm.elements['foodMoney'].value;
    var tipValue = submitForm.elements['tipMoney'].value
    var tip = Number(((tipValue / 100) * foodValue));
    var total = Number(((tipValue / 100) * foodValue)) + Number(foodValue);

    // toFixed(2)

    console.log(total);

    var totalCalc = document.getElementById('total');
    totalCalc.className = 'cost';

    var div1 = document.createElement('div');
    var div2 = document.createElement('div');

    totalCalc.appendChild(div1);
    totalCalc.appendChild(div2);

    div1.className = 'div';
    div2.className = 'div';

    div1.textContent = 'Tip: $' + tip;
    div2.textContent = 'Total: $' + total;

}