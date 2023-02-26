let items = JSON.parse(localStorage.getItem("item")) || []
console.log(items)
let cartpage = document.getElementById("cartshow");
let yourbag = document.getElementById("Yourbag")
yourbag.textContent = items.length

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
            display(data)
        })
        decrementbtn.addEventListener("click", () => {
            if (element.quantity > 1) {
                element = element.quantity--;
                localStorage.setItem("item", JSON.stringify(data))
                display(data)
            }
        })
        Removebtn.addEventListener("click", () => {
            let updated = data.filter((ele) => {
                return element.id != ele.id
            })
            alert("Are you sure to remove the item?")
            localStorage.setItem("item", JSON.stringify(updated));
            display(updated)
                // alert("Are you sure to remove the item?")
        })



        cartpage.append(product1);
        product1.append(image, brand, type, price, rating, incrementbtn, quantity, decrementbtn, Removebtn)
    });
    // }

    let sum = 0;
    let ourpay = document.getElementById("ourpay")
    let discountAmount = 0;
    let shippingAmount = 0;
    let shippingCharge = document.getElementById("shipping")
    let discount = document.getElementById("discount")
    let bagprice = document.getElementById("bagprice")
    let freeshipping = document.getElementById("freeshipping")
    let youpay = document.getElementById("yourpay")

    let te = ""
    for (let i = 0; i < items.length; i++) {
        sum += items[i].Price * items[i].quantity
        if (sum <= 500) {
            shippingAmount = 50;
            freeshipping.textContent = shippingAmount
        } else {
            shippingAmount = 0
            te = "FREE"
            freeshipping.textContent = te
        }
        shippingCharge.textContent = shippingAmount;


        if (sum >= 1000 && sum <= 2000) {
            discountAmount = Math.floor(sum * .1);

        } else if (sum >= 2001 && sum <= 5000) {
            discountAmount = Math.floor(sum * .2);

        } else if (sum >= 5001) {
            discountAmount = Math.floor(sum * .3);

        } else {
            discountAmount = 0

        }

    }

    let total = 0

    total = (sum + shippingAmount - discountAmount);


    console.log(total)

    youpay.textContent = total
    bagprice.textContent = sum
    discount.textContent = discountAmount
    ourpay.textContent = sum
    console.log(sum)


}
let signupData = JSON.parse(localStorage.getItem("sign")) || []
let customer = document.getElementById("customername")


for (let i = 0; i < signupData.length; i++) {
    customer.textContent = signupData[i].name
}