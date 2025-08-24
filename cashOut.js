document.getElementById("btn-cash-out").addEventListener('click' , function(event){
    event.preventDefault();
    const cashOut = document.getElementById("input-cash-out").value;
    const cashOutNumber = parseFloat(cashOut);
    const cashOutPin = document.getElementById("input-cash-out-pin").value;

    if (cashOutPin === "2341") {
        const mainBalance = document.getElementById("account-balance").innerText;
        const mainBalanceNumber = parseFloat(mainBalance);

        const cashOutBalance = mainBalanceNumber - cashOutNumber;
        document.getElementById("account-balance").innerText = cashOutBalance;
    } else{
        alert("Failed To Cash Out")
    }
});

// =========Features Part======
document.getElementById("show-btn-cash-out").addEventListener('click' , function(){
    document.getElementById("cash-out-form").classList.remove('hidden');
    document.getElementById("add-money-form").classList.add("hidden");
});

//Show Add Money Form And Hide Cash Out Form==

document.getElementById("show-btn-add-money").addEventListener('click' , function(){
    document.getElementById("add-money-form").classList.remove("hidden");

    document.getElementById("cash-out-form").classList.add("hidden");
})