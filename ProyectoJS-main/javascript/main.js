const card = document.querySelector (".card")

card.onclick = (e, card) => {
    console.log (e.target)
    paragraph.style.color = "green"
}

localStorage.setItem("Monsters", "5e")

let foes = ["Aboleth", "Ancient Copper Dragon", "Banshee", "Basilisk", "Chimera", "Flameskull", "Hippogriff", "Vampire", "Werewolf", "Will-O'-the-Wisp"]
localStorage.setItem("ListOfMonsters", foes)

const arrayAJson = JSON.stringify(foes)
localStorage.setItem("ListOfMonsters", arrayAJson)

const verListaMonstruos = (listaDeMonstruos) => {
    let name = '';
    let armorClass;
    let enemy;
    let iniciarBatalla;

    do {
        name = prompt('Ingrese el nombre del monstruo'+ listaDeProductos.join);
        armorClass = parseInt(prompt('Ingrese el AC del monstruo'));

        const listaDeMonstruos = listaDeMonstruos.find( monsters => name.toLowerCase() === name.toLowerCase());

        if (monsters) {
            enemy = false;
            console.log ("Este monstruo no es necesariamente un enemigo")
        } else {
            alert('Este monstruo es un enemigo, preparate para una batalla!');
        }

        iniciarBatalla = confirm('¿Deseas intentar atacar a este monstruo?')
    } while (iniciarBatalla);

    confirmarIniciarBatalla();
};

const batalla = (listaDeMonstruos) =>{

    let armorClass;
    let hitPoints;
    let diceRoll = 20
    let monstruoVencido;

do {
    diceRoll= prompt('Ingrese su número en los dados');
    armorClass = parseInt(prompt('Considerar el Armor Class del monstruo'));
    if (armorClass) {
        armorClass > 15
        alert ("Este monstruo es demasiado poderoso para ganarle con solo una tirada")
    } else {
        alert('¡Este monstruo puede ser vencido con un crit 20!');
    }

    monstruoVencido= confirm('Con un crit 20 le ganás al monstruo, felicitaciones!')
} while (monstruoVencido);

batallaGanada();
};