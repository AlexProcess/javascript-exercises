fetch ('https://breakingbadapi.com/api/characters')
.then((response) =>{
    return response.json()
})

.then((myJson) => {
    console.log(myJson)
    brCharacters(myJson)
    return myJson;
})

const brCharacters = (characters) =>{
    for (const character of characters) {
        const figure$$ = document.createElement('figure')
        figure$$.innerHTML = '<img src="'+character.img+'" alt=""><figcaption>'+character.name+'</figcaption>'
        document.body.appendChild(figure$$)
    }
}


