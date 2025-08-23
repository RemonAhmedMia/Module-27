document.getElementById("btn-login").addEventListener('click' , function(event){
    event.preventDefault();
    //console.log("LogIn Button Clicked");
    const phoneNumber = document.getElementById("phone-number").value  //sathe value dile shodu matro value ta dhekabe;

    const pinNumber = document.getElementById("pin-number").value
    console.log(phoneNumber , pinNumber);
    
    // This is Temoporary,You Should not use it
    if(phoneNumber === "01318664312" && pinNumber === "1234") {
        console.log("You Are Loged In");
        //
        window.location.href = '/home.html'
    } else {
        alert("Wrong Phone Number Or Pin")
    }
})
