
let likeElement = document.querySelector(".home-product-item__like")

likeElement.onclick = function () {
    if (this.classList.contains("home-product-item__like--liked")) {
        this.classList.remove("home-product-item__like--liked")
    }
    else {
        this.classList.add("home-product-item__like--liked")
    }
}




