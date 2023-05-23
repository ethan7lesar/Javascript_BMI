


function calculate(){
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let bmi = weight / ((height/100)**2);
   
    //  console.log(answer)
     if (bmi < 16){

// console.log('Severly Underweight '+ bmi)
document.getElementById('outputText').innerHTML = '<h4> You are Severly Underweight, your BMI is </h4>'+ bmi.toFixed(1) 
}
 else if (bmi >= 16 && bmi < 18.5){
    document.getElementById('outputText').innerHTML = '<h4> You are Underweight, your BMI is </h4>'+ bmi.toFixed(1) 
 }
 else if (bmi >= 18.5 && bmi < 25){
    // console.log('Normal '+ bmi)
    document.getElementById('outputText').innerHTML = '<h4> You are Normal Weight, your BMI is </h4>'+ bmi.toFixed(1) 
 }
 else if (bmi >= 25 && bmi < 30){
    // console.log('Overweight '+ bmi)
    document.getElementById('outputText').innerHTML = '<h4> You are Overweight, your BMI is </h4>'+ bmi.toFixed(1) 
 }
 else if (bmi >= 30 && bmi < 35){
    // console.log('Moderately Obese '+ bmi)
    document.getElementById('outputText').innerHTML = '<h4> You are Moderately Obese, your BMI is </h4>'+ bmi.toFixed(1) 
 }
 else if (bmi >= 35 && bmi < 40){
    // console.log('Severely Obese '+ bmi)
    document.getElementById('outputText').innerHTML = '<h4> You are Severely Obese, your BMI is </h4>'+ bmi.toFixed(1) 
 }
 else if (bmi > 40){
    // console.log('Morbidly Obese'+ bmi)
    document.getElementById('outputText').innerHTML = '<h4> You are Morbidly Obese, your BMI is </h4>'+ bmi.toFixed(1) 
 } else {
    document.getElementById('outputText').innerHTML = '<h4> Please enter values </h4>'
 }

 }

 function Clear(){
   document.getElementById('height').value = "";
   document.getElementById('weight').value = "";
   document.getElementById('outputText').innerHTML = "";
 }


 

//  calculate();



