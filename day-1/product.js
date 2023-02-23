let product = document.getElementById("product-container")



let API = "https://mocki.io/v1/3e454e43-fb44-4078-b385-de45d842e0e3"
fetch(API)
    .then((product) => {
        return product.json();
    })
    .then((data) => {
        console.log(data)
        display(data)



    }).catch((error) => {
        console.log(error)
    })

function display(data) {
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
        product.append(product1);
        product1.append(image, brand, description, type, price, rating, btn)
    });
}