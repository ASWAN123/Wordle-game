const alphabet = [ 'q' , 'w' , 'e' , 'r' ,'t' , 'y' , 'u' , 'o' ,'p' , 'i' , 'a' , 's' ,'d', 'f' , 'g' , 'h','j' , 'k' , 'l' , 'z' ,'x' , 'c' , 'v' , 'b' ,'rm' ,'n' , 'm'  , 'ok' ]

// insert 25 inputs
let i = 0 ;
while (i < 5){
    let container1 = document.querySelector('.container1') ;
    let word  = document.createElement('form') ;
    word.className = "word" ;
    word.innerHTML = `
    <input class="chracter" type="text" maxlength="1">
    <input class="chracter" type="text" maxlength="1">
    <input class="chracter" type="text" maxlength="1">
    <input class="chracter" type="text" maxlength="1">
    <input class="chracter" type="text" maxlength="1">`
    container1.appendChild(word) ;
    i++ ;
}

// create keyboard
let container2 = document.querySelector(".container2") ;
let  keyboard = document.createElement("ul") ;
keyboard.className = "keyboard" ;
let  content = ""
alphabet.forEach((element , index) => {
    let string = `<li class="key" id="${index}">${element.toUpperCase()}</li>` ;
    content+= string ;
}) ;
keyboard.innerHTML = content ;
container2.appendChild(keyboard) ;




