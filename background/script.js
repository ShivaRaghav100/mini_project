const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
// Select all inputs
button.forEach(function(btn){
    console.log(btn);
    //Create the function on button to change the background
    btn.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.background= e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.background= e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.background= e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.background= e.target.id;
        }
        if(e.target.id === 'red'){
            body.style.background= e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.background= e.target.id;
        }
        if(e.target.id === 'pink'){
            body.style.background= e.target.id;
        }
        if(e.target.id === 'powderblue'){
            body.style.background= e.target.id;
        }
        if(e.target.id === 'aqua'){
            body.style.background= e.target.id;
        }
        if(e.target.id === 'blueviolet'){
            body.style.background= e.target.id;
        }
        if(e.target.id === 'brown'){
            body.style.background= e.target.id;
        }
        if(e.target.id === 'cornflowerblue'){
            body.style.background= e.target.id;
        }
        if(e.target.id === 'orange'){
            body.style.background= e.target.id;
        }
        if(e.target.id === 'gold'){
            body.style.background= e.target.id;
        }
        if(e.target.id === 'greenyellow'){
            body.style.background= e.target.id;
        }
        if(e.target.id === 'violet'){
            body.style.background= e.target.id;
        }
        if(e.target.id === 'purple'){
            body.style.background= e.target.id;
        }
        if(e.target.id === 'palegreen'){
            body.style.background= e.target.id;
        }
    });
});
