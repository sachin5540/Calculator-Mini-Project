// javascript for calculator 
let input = document.getElementById('inputbox');
// select all button from calculator
let button = document.querySelectorAll('button');
// store in string 
let string = "";
let arr = Array.from(button);
arr.forEach(button =>{
    // inbuilt funcion in javascript to calculate 
    button.addEventListener('click', (e)=>{ 
        if(e.target.innerHTML == '='){ 
            string = eval(string);
            input.value = string;
        }
        // for all clear in calc.
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value= string;
        }
        // for del function in calc.
        else if (e.target.innerHTML =='DEL'){
            string = string.substring(0, string.length-1);
            input.value= string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string ;
        }
   
    })
})