const btnToClick = document.createElement('button');
btn$$.setAttribute("id", "btnToClick");
btn$$.textContent = 'PULSAME'
document.body.appendChild(btn$$)

function click (event){
    console.log(event)
}

btn$$.addEventListener("click", "clickMe")
