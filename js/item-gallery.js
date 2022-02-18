const imageBlock = document.querySelector(".product-image-block");

if(imageBlock){
    const mainImageBlock = imageBlock.querySelector(".product-image_main");
    const imageButtons = imageBlock.querySelectorAll(".gallery-button");

    mainImageBlock.querySelector("a").setAttribute("href", imageButtons[0].dataset.imgurl);
    mainImageBlock.querySelector("img").setAttribute("src", imageButtons[0].dataset.imgurl);
    imageButtons[0].classList.add("active")

    imageButtons.forEach(el=>{
        el.addEventListener("click", (e)=>{
            e.preventDefault();
            let imageUrl = el.dataset.imgurl;
            mainImageBlock.querySelector("a").setAttribute("href", imageUrl);
            mainImageBlock.querySelector("img").setAttribute("src", imageUrl);

            imageButtons.forEach(btn=>{
                btn.classList.remove("active");
            })

            el.classList.add("active");
            
        })
    })
}

