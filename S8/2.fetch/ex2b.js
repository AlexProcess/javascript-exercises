const baseUrl =  'https://api.nationalize.io?name='
const input$$ = document.querySelector('input')

const search = (value)  => {
    
    
    fetch(baseUrl+value) 
    .then((response) => {
        console.log(response);
        return response.json();
    })

    .then((myJson) => {
    console.log(myJson)
    return myJson;
    });

    for (let i = 0; i < myJson.country.length; i++) {
    const p$$ = document.createElement('p')
    p$$.textContent = ("El nombre" + input$$.value+"" +myJson.country[i].probability * 100) + " " +
    "porciento de ser de " + myJson.country[i].country_id + "."

    document.body.appendChild(p$$)
        
    }

    return myJson;
}

const button$$ = document.querySelector('button');
button$$.addEventListener('click', search)
