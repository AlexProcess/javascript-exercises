//Usa el siguiente código como base y crea 3 funciones llamadas father, confirmExample, promptExample. La función confirmExample recibirá una variable de tipo string (description) que mostrará como titulo de la ventana y retornará el valor del confirm. La función promptExample hará lo mismo pero con un prompt. La función father recibirá como parámetros description, con el valor del titulo de las ventanas y una función callback (confirmExample o promptExample).

//La función father deberá ejecutar la función que reciba como callback y añadir el valor resultado que retorne la función al array userAnwsers.

//Ejecuta varias veces la función father y haz finalmente un console.log de userAnwsers
const userAnwsers = [];

function confirmExample(desc){
    return(desc)
}

function promptExample(desc){
    return(desc)
}

function father(desc, call){
    userAnwsers.push(call(desc))
}


father('I am a text', confirmExample);

father('I am a text', promptExample);


console.log(userAnwsers);