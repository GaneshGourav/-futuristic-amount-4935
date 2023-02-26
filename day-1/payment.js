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
    window.location.href = "suceesful.html"
})

btn.addEventListener("click", () => {
    let number = generateOTP()
    console.log(number)
    alert("Are you sure to make payment")

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
let signupData = JSON.parse(localStorage.getItem("sign")) || []
let customer = document.getElementById("customername")


for (let i = 0; i < signupData.length; i++) {
    customer.textContent = signupData[i].name
}