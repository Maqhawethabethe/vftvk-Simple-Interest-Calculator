var slider=document.getElementById("myRange");
var val = document.getElementById("value");

//console.log(slider.value)

slider.addEventListener("input",()=>{
    console.log(slider.value)
    val.innerText = slider.value+"%"
})


var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * myRange /100;
var year = new Date().getFullYear()+parseInt(years);

function compute()
{
   alert("HI");
   
}

function updateRate() 
{
    var rateval = document.getElementById("myRange").value;
    document.getElementById("rate_val").innerText=rateval;
} 