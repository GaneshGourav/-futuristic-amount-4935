let Name = document.getElementById("yours")
let email = document.getElementById("mailupdate")
let pass = document.getElementById("passkey")


let signupData = JSON.parse(localStorage.getItem("sign")) || []
let customer = document.getElementById("customername")


for (let i = 0; i < signupData.length; i++) {
    customer.textContent = signupData[i].name
    Name.textContent = signupData[i].name
    email.textContent = signupData[i].email;
    pass.textContent = signupData[i].pass
}


let DataStore = JSON.parse(localStorage.getItem("data")) || []
let Nameadd = document.getElementById("namefromaddress")
let flatno = document.getElementById("flatnofromaddress");
let pincode = document.getElementById("pincodefromaddress");
let Area = document.getElementById("areaadd")
for (let j = 0; j < DataStore.length; j++) {
    Nameadd.textContent = DataStore[j].name
    flatno.textContent = DataStore[j].house
    pincode.textContent = DataStore[j].pin
    Area.textContent = DataStore[j].area
}