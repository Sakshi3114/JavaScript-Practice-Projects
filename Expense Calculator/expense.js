let amount = document.getElementById('what');
let reason = document.getElementById('why');
let balance = document.getElementById('balance');
let button = document.getElementById('btn');
let box = document.querySelector('.textbox');
let income = document.getElementById('income');
let expense = document.getElementById('expense');

bal= 0;
positive = 0;
negative = 0;

button.addEventListener('click',function (){
    if((amount.value =="")){
        alert("Please fill the below inputs!!");
    }
    else{
        let entry = Number(amount.value);
        bal = Number(bal)+entry;
        balance.innerHTML= `$${bal}`;
        let newel = document.createElement('ul');
        if(entry>0){
            newel.innerHTML = `${reason.value} +${amount.value}`;
            box.appendChild(newel);
        }
        else{
            newel.innerHTML = `${reason.value} ${amount.value}`;
            box.appendChild(newel);
        }
        if(entry>0){
            positive += entry;
            income.innerHTML = `$${positive}`;
            newel.style.color ='rgb(21, 202, 21)';
            newel.style.borderRight = '4px solid rgb(21, 202, 21)';
        }
        else{
            negative+=entry;
            expense.innerHTML=`$${negative}`;
            newel.style.color ='red';
            newel.style.borderRight ='4px solid red';
        }
        amount.value="";
        reason.value="";
}
});