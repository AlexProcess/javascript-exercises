const input$$ = document.querySelector('input')
function focusInput(e){
    console.log(this.value)

}

input$$.addEventListener("focus", focusInput)