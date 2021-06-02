function compute()
{
    var principal = document.getElementById("principal").value;
    //to confirm a principal amount greater than 0.
    if(principal<=0) {
        alert("Enter a positive number.");
        principal.focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //Calculate the interest and year
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    //to show the result on the web-application
    document.getElementById("result").innerHTML="If you deposit <span class='highlight'>"+principal+"</span>, <br/>at an interest rate of <span class='highlight'>"+rate+"% </span>, <br/>You will recieve an amount of <span class='highlight'>"+interest+"</span>, <br/>in the year <span class='highlight'>"+year+"</span> <br/>";
}

function updateRate() {
    //to show the value at which the slider is currently at
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        