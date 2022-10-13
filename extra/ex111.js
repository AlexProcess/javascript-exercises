//const frase = 'gracioso-pero-no-gracioso-de-risa-gracioso-de-raro'


//let spaces = text.replace(/-/g," ");

//capitalize = (result) => result[0].toUpperCase() + result.slice(1);
//let resultCaps = espacios.split(' ').map(capitalize).join(' ');

//console.log(resultCaps);


const text = `gracioso-pero-no-gracioso-de-risa-gracioso-de-raro`
let splitText = text.split("-");
let texto = [];
for (let i = 0; i < splitText.length; i++) {
    let element = splitText[i];
    let rS = element.slice(1);
    let pL = element.charAt(0).toUpperCase();
    texto.push(pL + rS);
}
let newText = texto.join(" ");
console.log(texto);