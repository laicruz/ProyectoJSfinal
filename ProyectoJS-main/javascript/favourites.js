const card = document.querySelector (".card")
console.log (card)
const parr = document.querySelector("p")

card.onclick = () => {
    parr.style.color = "red"
}

const faveCard = () =>{
    if (card.onclick) {
    fave = true;
} else {
    null
}
}