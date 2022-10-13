const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'},
 {isVisited:false, name: 'Seul'}];

const result = cities.map(city => city.isVisited === true ? city.name + '(Visitado)' : city.name);

console.log(result)