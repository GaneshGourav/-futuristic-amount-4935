let form = document.querySelector("form");
let Name = document.getElementById("addressname")
let hous = document.getElementById("addresshouse");
let area = document.getElementById("addressarea");
let pin = document.getElementById("addresspin");
let mobile = document.getElementById("addressmobile");
let DataStore = JSON.parse(localStorage.getItem("data")) || []


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = {
        name: Name.value,
        house: hous.value,
        area: area.value,
        pin: pin.value,
        mobile: mobile.value
    }
    DataStore.push(data);
    localStorage.setItem("data", JSON.stringify(DataStore))
    console.log(data)
    alert("your address updated")
    window.location.href = "payment.html";
})


let signupData = JSON.parse(localStorage.getItem("sign")) || []
let customer = document.getElementById("customername")


for (let i = 0; i < signupData.length; i++) {
    customer.textContent = signupData[i].name
}