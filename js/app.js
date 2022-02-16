// handle calculate by event
document.getElementById('calculate-button').addEventListener('click',function() {
    // get the ammount of income
    const incomeInput = document.getElementById('income-value');
    const incomeAmmount = incomeInput.value;
    console.log(incomeAmmount);
})