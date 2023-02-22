const listaDeMonstruos = [
        {
            id: 1,
            name: "Aboleth",
            alignment: "Lawful evil",
            description: "Large aberration",
            armorClass: 17,
            hitPoints: 135,
            enemy: true,
        },
    
        {
            id: 2,
            name: "Banshee",
            alignment: "Chaotic evil",
            descripton: "Medium undead",
            armorClass: 12,
            hitPoints: 58,
            enemy: true,
        },
    
        {
            id: 3,
            name: "Chimera",
            alignment: "Chaotic evil",
            description: "Large monstrosity",
            armorClass: 14,
            hitPoints: 114,
            enemy: true,
        },
    
        {
            id: 4,
            name: "Ancient Copper Dragon",
            alignment: "Chaotic good",
            description: "Gargantuan dragon",
            armorClass: 21,
            hitPoints: 350,
            enemy: false,
        },
    
        {
            id: 5,
            name: "Flameskull",
            alignment: "Neutral evil",
            description: "Tiny undead",
            armorClass: 13,
            hitPoints: 40,
            enemy: true,
        },
    
        {
            id: 6,
            name: "Hippogriff",
            alignment: "Unaligned",
            description: "Large monstrosity",
            armorClass: 11,
            hitPoints: 19,
            enemy: false,
        },
    
        {
            id: 7,
            name: "Werewolf",
            alignment: "Chaotic evil",
            description: "Medium humanoid (human shapeshifter)",
            armorClass: 12,
            hitPoints: 58,
            enemy: true,
        },
    
        {
            id: 8,
            name: "Vampire",
            alignment: "Lawful evil",
            description: "Medium undead (shapechanger)",
            armorClass: 16,
            hitPoints: 144,
            enemy: true,
        },

        {
            id: 9,
            name: "Drow",
            alignment: "Neutral evil",
            description: "Medium humanoid (elf)",
            armorClass: 15,
            hitPoints: 13,
            enemy: true,
        },

        {
            id: 10,
            name: "Gas spore",
            alignment: "Unaligned",
            description: "Large plant",
            armorClass: 5,
            hitPoints: 1,
            enemy: false,
        },

        {
            id: 11,
            name: "Homunculus",
            alignment: "Neutral",
            description: "Tiny construct",
            armorClass: 13,
            hitPoints: 5,
            enemy: false,
        },

        {
            id: 12,
            name: "Flesh golem",
            alignment: "Neutral",
            description: "Medium construct",
            armorClass: 9,
            hitPoints: 93,
            enemy: true,
        },

        {
            id: 13,
            name: "Lich",
            alignment: "Evil (any evil alignment)",
            description: "Medium undead",
            armorClass: 17,
            hitPoints: 135,
            enemy: true,
        },

        {
            id: 14,
            name: "Medusa",
            alignment: "Lawful evil",
            description: "Medium monstrosity",
            armorClass: 15,
            hitPoints: 127,
            enemy: true,
        },
    
        {
            id: 15,
            name: "Scarecrow",
            alignment: "Chaotic evil",
            description: "Medium construct",
            armorClass: 11,
            hitPoints: 36,
            enemy: true,
        },

    ]

const numerosId = [ 1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15]

const numerosOrdenados = [...numerosId].sort ((a, b) => {
    return a - b
})

const numeroBuscado = numerosId.find ( (element) => {
    return element === 4
})
console.log (numeroBuscado)

const arrFiltrado = numerosId.filter ((curr) => {
    return curr % 2 === 0
})
console.log (arrFiltrado)

console.log (listaDeMonstruos.some ((elemento) => {
    return elemento.armorClass > 15
}))

const nuevoArray = arrFiltrado

listaDeMonstruos.sort ((a, b) => {
    if (a < b){
        return 1
    } else if (a > b) {
        return -1
    } else {
        return 0
    }
})