const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const selectInput = document.querySelector('input')


selectInput.addEventListener('keyup',() =>{
    if (selectInput.value.length === 0) return 

    const filterLetters = streamers.filter(streamer =>streamer.name.includes(selectInput.value) )

    console.log(filterLetters, selectInput.value)
})