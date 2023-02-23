let form = document.querySelector("form");
let Name = document.getElementById("name");
let email = document.getElementById("email");
let pass = document.getElementById("pass")
let signupData = JSON.parse(localStorage.getItem("sign")) || []
form.addEventListener("submit", (e) => {
    e.preventDefault()

    let data = {
        name: Name.value,
        email: email.value,
        pass: pass.value,
    }
    signupData.push(data);
    console.log(data)
    localStorage.setItem("sign", JSON.stringify(signupData))
    
    window.location.href = "product.html";

})