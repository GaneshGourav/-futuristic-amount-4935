let items = JSON.parse(localStorage.getItem("item")) || []
console.log(items)
let cartpage = document.getElementById("cartshow");

display(items)


function display(data) {
    cartpage.innerHTML = ""
    data.forEach(element => {
        let product1 = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src", element.image);
        let brand = document.createElement("p");
        brand.textContent = element.brand;
        let description = document.createElement("p")
        description.textContent = element.description;
        let type = document.createElement("p");
        type.textContent = element.type;
        let price = document.createElement("h4");
        price.textContent = +element.Price;
        let rating = document.createElement("h6")
        rating.textContent = ` Rating: ` + element.rating
        let quantity = document.createElement("span");
        quantity.textContent = element.quantity;
        let incrementbtn = document.createElement("button");
        incrementbtn.textContent = "+";
        let decrementbtn = document.createElement("button");
        decrementbtn.textContent = "-";
        let Removebtn = document.createElement("button");
        Removebtn.textContent = "Remove";

        incrementbtn.addEventListener("click", () => {
            element = element.quantity++
                localStorage.setItem("item", JSON.stringify(data))
        })
        decrementbtn.addEventListener("click", () => {
            if (element.quantity > 1) {
                element = element.quantity--;
                localStorage.setItem("item", JSON.stringify(data))
            }
        })
        Removebtn.addEventListener("click", () => {
            let updated = data.filter((ele) => {
                return element.id != ele.id
            })
            localStorage.setItem("item", JSON.stringify(updated));
            display(updated)
        })



        cartpage.append(product1);
        product1.append(image, brand, type, price, rating, incrementbtn, quantity, decrementbtn, Removebtn)
    });
}

let sum = 0;
let bagprice = document.getElementById("bagprice")
for (let i = 0; i < items.length; i++) {
    sum += items[i].Price * items[i].quantity
}
bagprice.textContent = sum