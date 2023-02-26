let product = document.getElementById("product-container")

let length = document.getElementById("totalproduct")
let cartlogo = document.getElementById("cartlogoitem")

let AllData = []

let API = "https://mocki.io/v1/39da0341-3165-4fa8-b708-c4fef82539d0"
fetch(API)
    .then((product) => {
        return product.json();
    })
    .then((data) => {
        console.log(data)
        display(data)
        AllData = data

        length.textContent = data.length


    }).catch((error) => {
        console.log(error)
    })


let selectEl = document.getElementById("filter1");
selectEl.addEventListener("change", () => {
    if (selectEl.value == "") {
        display(AllData)
    } else {

        let filtered = AllData.filter((elem) => {
            if (elem.brand === selectEl.value) {
                return true
            } else {
                return false
            }
        })
        display(filtered)

    }
})


let selectEl1 = document.getElementById("filter2");
selectEl1.addEventListener("change", () => {
    if (selectEl1.value == "") {
        display(AllData)
    } else {

        let filtered1 = AllData.filter((elem) => {
            if (elem.type === selectEl1.value) {
                return true
            } else {
                return false
            }
        })
        display(filtered1)

    }
})


let sorts = document.getElementById("sort1");
sorts.addEventListener("change", () => {
    if (sorts.value == "Low to high") {
        let sort1 = AllData.sort((a, b) => { return a.Price - b.Price })
        display(sort1)
        console.log(sort1)
    } else if (sorts.value = "High To Low") {
        let sort2 = AllData.sort((a, b) => { return b.Price - a.Price })
        display(sort2)
    }

})

let ratingsort = document.getElementById("sort");
ratingsort.addEventListener("change", () => {
    if (ratingsort.value == "Ascending") {
        let raing1 = AllData.sort((a, b) => { return a.rating - b.rating })
        display(raing1)
    } else if (ratingsort.value == "Descending") {
        let desrating = AllData.sort((a, b) => { return b.rating - a.rating })
        display(desrating)
    }
})














let items = JSON.parse(localStorage.getItem("item")) || []

function display(data) {
    product.innerHTML = ""
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
        price.textContent = `MRP:` + element.Price;
        let rating = document.createElement("h6")
        rating.textContent = ` Rating: ` + element.rating
        let btn = document.createElement("button");
        btn.textContent = "Add To cart"
        btn.addEventListener("click", () => {
            if ((Duplicate(element))) {
                alert("Product Already in cart")
            } else {
                items.push({...element, quantity: 1 });
                localStorage.setItem("item", JSON.stringify(items))
                alert("Product Added to Cart")
                cartlogo.textContent = items.length
            }
        })



        product.append(product1);
        product1.append(image, brand, type, price, rating, btn)
    });
}

function Duplicate(element) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].id == element.id) {
            return true
        }
    }
    return false
}


let postershow = document.getElementById("postershow");
// Use the following data for slideshow
var movieImages = [
    "https://images-static.nykaa.com/uploads/8358a13e-bd79-4365-8dfc-8545beddccf3.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/7eed927f-d04f-4f9c-a6d7-da01f934de48.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/e6866268-c34e-48e0-93e7-44b8f4100eb4.gif?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/0ab0f63c-9dd4-4986-9f28-c4fe90cab3ab.png?tr=w-1200,cm-pad_resize"

]


let slideshowEl = document.getElementById("postershow")
let imageIndex = 0;
let image = document.createElement("img");
image.setAttribute("src", movieImages[imageIndex])

slideshowEl.append(image)



function change() {
    image.setAttribute("src", movieImages[imageIndex])
    imageIndex++;

    if (imageIndex == movieImages.length) {
        imageIndex = 0;
    }
    image.setAttribute("src", movieImages[imageIndex])

}



window.addEventListener("load", function() {


    setInterval(change, 4000);

});
let signupData = JSON.parse(localStorage.getItem("sign")) || []
let customer = document.getElementById("customername")


for (let i = 0; i < signupData.length; i++) {
    customer.textContent = signupData[i].name
}