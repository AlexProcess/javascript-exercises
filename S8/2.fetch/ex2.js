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
}

const button$$ = document.querySelector('button');
button$$.addEventListener('click', search)

//const button$$ = document.querySelector('button');
//button$$.addEventListener(click, () => search(input$$.value)
//Con arrow function