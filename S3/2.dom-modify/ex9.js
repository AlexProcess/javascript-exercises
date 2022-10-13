const div$$ = document.querySelectorAll('.fn-insert-here');

for (let i = 0; i < div$$.length; i++) {
    const myDivs = div$$[i];

    const p$$ = document.createElement('p');
    p$$.textContent = 'Voy dentro!'
    myDivs.appendChild(p$$);
    
}
