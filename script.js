function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    if (principal == 0 || principal < 0) {
        alert(`You should see an alert "Enter a positive number".`);
        document.getElementById("principal").focus();
    }
    else {
        var d = `<p>If you deposit <label>${principal}</label>,<br/>
        at an interest rate of <label>${rate}</label>.<br/>
        You will receive an amount of <label>${interest}</label>,<br/>
        in the year <label>${year}</label>.</p>`
            document.getElementById("result").innerHTML = d;
        }

}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        