const baseUrl =  'https://api.nationalize.io?name='

let input$$ = document.querySelector('input')
let button$$ = document.querySelector('button')

let data = {};

const click = () => {
    
    fetch(baseUrl + input$$.value)
    .then(function (result) {
        return result.json();
    })
    .then(function (datafunction) {
        console.log(datafunction)
        
        data = {...datafunction} //global function
        
        print();
    })
}

button$$.addEventListener('click', click)

const print = () => {
    for (let i = 0; i < data.country.length; i++) {
        const element = data.country[i];
        
console.log(data)

        let country = element.country_id;
        let proof = element.probability * 100;

        let nombre = data.name;

        console.log("El nombre " + nombre + " tiene un " + proof + " por ciento de ser de " + country + ".")
        
        let p$$ = document.createElement("p")
        p$$.textContent = "El nombre " + nombre + " tiene un " + proof + " por ciento de ser de  " + country + "."

        let button$$ = document.createElement("button");
        button$$.textContent = "X"
        
        button$$.addEventListener("click", function xListener(){
            p$$.remove();
        }
        )
        p$$.appendChild(button$$);
        document.body.appendChild(p$$);
        
    }
}