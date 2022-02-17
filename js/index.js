//variable

let incomeAmount = 0
let balance = 0

//validity Check

function isValid(id){
    const inputId = document.getElementById(id + "-text")
    let text = inputId.value
    if(text == ''){
        id = id.toUpperCase()
        alert(`Please enter ${id} amount`);
    }
    else{
        //Type Check
        if(isNaN(text) == true){
            id = id.toUpperCase()
            alert(`Please Enter a valid amount in ${id} field`)            
            inputId.value = ''
        }
        else{
            //Negative Check
            if(text < 0 ){
                id = id.toUpperCase()
                alert(`Please Enter a Positive amount in ${id} field`)                
                inputId.value = ''
            }
            else{
                return parseFloat(text)
            }
        }
    }
}
//default value function

function defaultValue(){
    for( let input of arguments){
        document.getElementById(input + "-text").value = 0
    }
    document.getElementById('balance').innerText = 0
}

//calculation
function calculation(){
    incomeAmount = isValid('income')
    const foodAmount = isValid('food')
    const rentAmount = isValid('rent')
    const clothAmount = isValid('cloth')
    if(isNaN(foodAmount) == false && isNaN(rentAmount) == false &&isNaN(clothAmount) == false && isNaN(incomeAmount) == false){
        const totalExpenses = parseFloat(foodAmount + rentAmount + clothAmount)
        if(totalExpenses <= incomeAmount){
            document.getElementById('total-expenses').innerText = totalExpenses
            balance = parseFloat(incomeAmount - totalExpenses)
            document.getElementById('balance').innerText = balance
        }
        else{
            alert("You can't spent more than your Income or you will be in debt")
            defaultValue('income', 'food', 'rent', 'cloth' , 'save')
        }
    }
}
//default value set
defaultValue('food', 'rent', 'cloth' , 'save')

document.getElementById('calculation').addEventListener('click',function(){    
    calculation()
    document.getElementById('rest-balance').innerText = balance  
})
document.getElementById('save-button').addEventListener('click',function(){
    calculation()   
    const savePercent = isValid('save')
    if(savePercent > 100){
        alert("You can't Save more than your Income")
        defaultValue('save')
    }else{    
        const savingAmount = incomeAmount * (savePercent / 100)
        if(balance >= savingAmount){
            document.getElementById('saving-amount').innerText = savingAmount
            document.getElementById('rest-balance').innerText = balance - savingAmount
        }else{
            alert(`Insufficient balance to save ${savePercent}% of your income`);
        }
    }    
}) 