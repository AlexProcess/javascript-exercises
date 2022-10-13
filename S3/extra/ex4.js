const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];


const ul$$ = document.createElement ('ul')
for (i = 0; i < countries.length; i++) {
    const div$$ = document.createElement('div')
    const h4$$ = document.createElement ('h4');
    const imgUrl$$ = document.createElement ('img')
    h4$$.textContent = countries[i].title;
    imgUrl$$.textContent = countries[i].imgUrl;
    div$$.appendChild (h4$$)
    div$$.appendChild (imgUrl$$)
    ul$$.appendChild (div$$)
}

document.body.appendChild (ul$$);