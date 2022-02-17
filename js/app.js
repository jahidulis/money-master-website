// handle calculate by event
document.getElementById('calculate-button').addEventListener('click',function() {
    // get the ammount of income
    const incomeInput = document.getElementById('income-value');
    const incomeAmmount = incomeInput.value;
    console.log(incomeAmmount);
    // Total Balance Left
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = incomeAmmount;
    // total expenses
    // food cost
    const foodCostInput = document.getElementById('food-cost');
    const totalFoodCost = foodCostInput.value;
    console.log(totalFoodCost);
    // rent cost
    const rentCostInput = document.getElementById('rent-cost');
    const totalRentCost = rentCostInput.value;
    console.log(totalRentCost);
    // clothes cost
    const coltheCostInput = document.getElementById('clothes-cost');
    const totalClothesCost = coltheCostInput.value;
    console.log(totalClothesCost);
    // total Expenses
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = parseFloat(totalFoodCost) + parseFloat(totalRentCost) + parseFloat(totalClothesCost);
})