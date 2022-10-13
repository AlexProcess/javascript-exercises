async function getCharacters () {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    console.log(character)
    const character = await res.json()
     
}

getCharacters();