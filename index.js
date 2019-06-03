var submitForm = document.getElementById('form');


function submitButton() {
    var foodCost = submitForm.elements['foodMoney'].value;
    var tipCost = submitForm.elements['tipMoney'].value
    var total = Number(((tipCost / 100) * foodCost)) + Number(foodCost);
    console.log(total);

    var totalFFF = document.getElementById('total');
    totalFFF.className = 'cost';
    totalFFF.textContent = total;
}