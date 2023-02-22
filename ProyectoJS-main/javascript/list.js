fetch("http://www.dnd5eapi.co/api/monsters/{index}")
.then(response => response.json())
.then ((json) => {cardsAHtml(json.results);
});

const listaDeMonstruos = cardsAHtml (arrayMonsters)

function cardsAHtml (arrayMonsters) {

    const container = document.querySelector (".container")

    arrayMonsters.forEach( monsters => {
        const card = document.createElement ("div")
        card.className = "card"
        console.log (card)
        card.innerHTML = `
        <div class "container-img">
            <img src = "${monsters.img}" "alt=${monsters.name}"
            </div>
            <h2>
                ${monsters.name}
            </h2>
            <h3>
                Alignment: ${monsters.alignment}
            </h3>
            <h4>
                Armor Class: ${monsters.armorClass}
            </h4>
            <h5>
                Hit Points: ${monsters.hitPoints}
            </h5>
        `
        container.appendChild(card)
    })

}

cardsAHtml (monsters)
