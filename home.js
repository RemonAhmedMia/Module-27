// //Add Money To The Account;

// document.getElementById("btn-add-money").addEventListener('click' , function(event) {
//     event.preventDefault();
//    // console.log("Money Dao Amake");
    
//     // Get Money Addedd To the Accont
//     const addMoneyInput = document.getElementById("add-money-input").value
//     // console.log(addMoneyInput);
    
//     // Get The Pin Number:
//     const inputPinNumber = document.getElementById("input-pin-number").value

//     if (inputPinNumber === "4321") {
//         // console.log("Money Recived");
//         // Get The Current Balance
//         const accountBalance = document.getElementById("account-balance").innerText; //যেহেতু এটা একটা ডিভ সেহেতু আমরা innerText দিয়েছি,Input এর ক্ষেত্রে কেবল . ভ্যালু দিয়ে মান চেক করতে হয়,আর ডিভের ক্ষেত্রে InnerText,যদি এখানে Value দেই তবে আন্ডিফাইন্ড আসবে;

//         //const newBalance = accountBalance + addMoneyInput; evhbabe dile problem dhekabe karon egula string
//         const addMoneyNumber = parseFloat(addMoneyInput);
//         const balanceNumber = parseFloat(accountBalance);
        
//         const newBalance = addMoneyNumber + balanceNumber ;
//         // console.log(newBalance);

//         document.getElementById("account-balance").innerText = newBalance ;
        
        
//     } else {
//         alert("Falied To Recevied Money");
//     }
// })


//Add Money To The Account;

// document.getElementById("btn-add-money").addEventListener('click' ,function(event){
//     event.preventDefault();
//     const addMoneyInput = document.getElementById("add-money-input").value;
//     const inputPinNumber = document.getElementById("input-pin-number").value;

//     if (inputPinNumber === "4321") {
//         const accountBalance = document.getElementById("account-balance").innerText;
//         const addMoneyNumber = parseFloat(addMoneyInput); // jeita amra add korbo seta
//         const balanceNumber = parseFloat(accountBalance); // main balance ta jeta upore thakbe

//         const newBalance = addMoneyNumber + balanceNumber;
//         document.getElementById("account-balance").innerText = newBalance;
//     } else{
//         alert("Failed To Get Add Money")
//     }
// });

// ======================= Practice-02

document.getElementById("btn-add-money").addEventListener('click' , function(event) {
    event.preventDefault();

    const addAmount = document.getElementById("add-money-input").value;
    const addInput = document.getElementById("input-pin-number").value;

    if (addInput === "4321") {
        const accountBalance = document.getElementById("account-balance").innerText;
        const addMoneyNumber = parseFloat(addAmount);
        const accountBalanceNumber = parseFloat(accountBalance);

        const newBalance = addMoneyNumber + accountBalanceNumber;
        document.getElementById("account-balance").innerText = newBalance;
    } else {
        alert("Failed To Add Money")
    }
});

// Last Practice==============