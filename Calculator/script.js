
let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
const specialChars=["%","*","/","-","+","="] 
let output ="";

// define the function  to calculate  based on the button clicked 

const calculate = (btnValue)=>{
// console.log(btnValue);
if(btnValue === "=" && output !== ""){
    // if output  has % , replace with /100 before  evaluating.
    output = eval(output.replace("%","/100"));
}else if(btnValue === "AC"){
    output = "";
}else if(btnValue === "DEL"){
    // if the del  button is clicked  remove the last character  from the output 
    output = output.toString().slice(0,-1);
} else{
    //  if output is empty  and button  is specialchars then return 
    if(output === "" && specialChars.includes(btnValue)) return;
    output += btnValue; 
}
display.value=output;
};

// console.log(display, buttons)

// add event listener to the  buttons  , call calculate() on click 
buttons.forEach((buttons)=>{
    buttons.addEventListener("click", e =>calculate(e.target.dataset.value))
})