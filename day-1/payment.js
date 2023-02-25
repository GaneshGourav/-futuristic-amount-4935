let form = document.querySelector("form");
let Name = document.getElementById("nameoncard")
let card = document.getElementById("cardnumber")
let cvv = document.getElementById("cvvnumber")
let date = document.getElementById("expirydate")
let btn = document.getElementById("cardpaymentbtn")
let payment1 = JSON.parse(localStorage.getItem("payment")) || []
form.addEventListener("submit", (e) => {
    e.preventDefault()

    let data = {
        name: Name.value,
        card: card.value,
        cvv: cvv.value,
        date: date.value

    }
    payment1.push(data);
    localStorage.setItem("payment", JSON.stringify(payment1))
})

btn.addEventListener("click", () => {
    let number = generateOTP()
    console.log(number)
    alert("otp send to your number")

})

function generateOTP() {

    // Declare a string variable 
    // which stores all string
    var string = "0123456789abcdefghijklmnopqrs tuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let OTP = '';

    // Find the length of string
    var len = string.length;
    for (let i = 0; i < 6; i++) {
        OTP += string[Math.floor(Math.random() * len)];
    }
    return OTP;
}