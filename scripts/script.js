const closeBtn = document.querySelector("header nav div button")
const openBtn = document.querySelector("header section:nth-of-type(2) ul button")
const nav = document.querySelector("header nav")

console.log(nav)

openBtn.addEventListener("click", openMenu )
closeBtn.addEventListener("click", closeMenu )

function openMenu() {
nav.classList.add("active")
}

function closeMenu() {
nav.classList.remove("active")
}



