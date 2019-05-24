var submitForm = document.getElementById('form');


function submitButton() {
    var foodCost = submitForm.elements['foodMoney'].value;
    var tipCost = submitForm.elements['tipMoney'].value
    var total = Number(((tipCost / 100) * foodCost)) + Number(foodCost);
    console.log(total);

    var total = document.getElementById('total');
    var cost = document.createElement('div');
    cost.className = 'cost';
    total.appendChild(cost);

}