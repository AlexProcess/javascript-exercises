function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        let objeto = array[i];
        if (objeto === text) {
            return i;
        }
        
    }
}
function removeItem(array, text) {
    const index = findArrayIndex(array, text)
    array.splice(index, 1);
    return array;
    
}

const animaaal = removeItem (['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Salamandra'); 
console.log(animaaal)

const diaaaablo = removeItem (['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Caracol');
console.log(diaaaablo) 