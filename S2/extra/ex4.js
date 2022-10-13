function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        let objeto = array[i];
        if (objeto === text) {
            return i;
        }
        
    }
}


const animaaal = findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Salamandra'); 
console.log(animaaal)

const listaAnimales = findArrayIndex (['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'],'Ajolote');
console.log(listaAnimales)