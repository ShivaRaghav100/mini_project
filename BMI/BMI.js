const form = document.querySelector('form');
// Select the All Inputs
form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    
    // Using if else else to select the category of body mass index
    if(height ==='' || height <=0 || isNaN(height)){
        result.innerHTML = 'Please give a valid Number in height'
        result.style.background= 'rgb(241, 171, 225)'; 
    }
    else if(weight ==='' || weight <=0 || isNaN(weight)){
        result.innerHTML = 'Please give a valid Number in weight'
        result.style.background= 'rgb(241, 171, 225)'; 
    }
    else {
        const bmi = (weight /((height*height)/10000)) . toFixed(2);
        if(bmi <= 16){
            result.innerHTML = `Severe Thinness: ${bmi}`;
            result.style.background= 'rgb(255,255,100)'; 
        }
        else if(bmi > 16 && bmi <= 17 ){
            result.innerHTML = `Moderate Thinness: ${bmi}`;
            result.style.background= 'rgb(255,255,75)';
        }
        else if(bmi > 17 && bmi <= 18.5){
            result.innerHTML = ` Mild Thinness: ${bmi}`;
            result.style.background= 'rgb(255,255,0)';
        }
        else if(bmi >1.5 && bmi <= 25){
            result.innerHTML = `Normal: ${bmi}`;
            result.style.background= 'rgb(0,255,0)';
        }
        else if(bmi > 25 && bmi <=30){
            result.innerHTML = ` Overweight: ${bmi}`;
            result.style.background= 'rgb(9, 233, 249)';
        }
        else if(bmi > 30 && bmi <=35){
            result.innerHTML = ` Obese Class I: ${bmi}`;
            result.style.background= 'rgb(11, 106, 202)';
        }
        else if(bmi > 35 && bmi <=40){
            result.innerHTML = `Obese Class II: ${bmi}`;
            result.style.background= 'rgb(10, 40, 160)';
        }
        else if(bmi > 40){
            result.innerHTML = `Obese Class III: ${bmi}`;
            result.style.background= 'rgb(1,5,121)';
        }
    }
});