let btOpenSearch = document.querySelector("#page-home main a")
let modal = document.querySelector("#modal")
let btCloseSearch = document.querySelector("#modal .content .header a")

btOpenSearch.addEventListener("click", event => {
    modal.classList.remove("hide")
})

btCloseSearch.addEventListener("click", event =>{
    modal.classList.add("hide")
})