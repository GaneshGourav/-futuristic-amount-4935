// ***************Crousal for top****************

let crousal = document.getElementById("crauosal");
// Use the following data for slideshow
var movieImages = [
    "https://images-static.nykaa.com/uploads/d2052bfb-fc68-46ae-a16e-eb0645f19c89.png?tr=w-600,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/25a842ec-b66a-46f3-8c67-dd4e5178d5be.jpg?tr=w-600,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/79c1face-6380-476d-9cef-22bfbc4023cb.gif?tr=w-600,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/9fa1e381-68e0-40ba-b1d3-7d63928dec0c.jpg?tr=w-600,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/8e38f956-76f6-4a96-a250-b69573e66696.jpg?tr=w-600,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/8523b59b-1695-4a5d-bbc5-2f918bac1b05.jpg?tr=w-600,cm-pad_resize"
]


let slideshowEl = document.getElementById("crauosal")
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


    setInterval(change, 3000);

});
// ****************************CrousalEnded********************

var imagearr = ["https://images-static.nykaa.com/uploads/9882cc03-45ed-4d66-b4a7-4d34db83e720.png?tr=w-600,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/97b7c067-686a-4fe9-b32e-924dcbcb1f61.jpg?tr=w-600,cm-pad_resize"
]
let top1 = document.getElementById("top1");
let img = document.createElement("img");
img.setAttribute("src", imagearr[0]);
let img1 = document.createElement("img");
img1.setAttribute("src", imagearr[1]);
top1.append(img, img1)



var img2 = ["https://images-static.nykaa.com/uploads/8aa5e37a-3b29-46da-b782-9ed02a4ec064.jpg?tr=w-1200,cm-pad_resize"]
let top2 = document.getElementById("top2");
let appoffer = document.createElement("h3")
appoffer.textContent = "First Purchase App Offers"
let image1 = document.createElement("img");
image1.setAttribute("src", img2[0])
top2.append(image1)