const yogadoresFuchebol = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']


function swap(array, indice, secondIndex) {
    const fuchebolElements = array [indice]
    
    array [indice] = array[secondIndex]
    array[secondIndex] = fuchebolElements;

    return array;
}

const newFuchebolList = swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 0 , 2)

console.log(newFuchebolList)