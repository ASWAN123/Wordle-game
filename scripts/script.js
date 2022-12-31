const alphabet = [ 'q' , 'w' , 'e' , 'r' ,'t' , 'y' , 'u' , 'o' ,'p' , 'i' , 'a' , 's' ,'d', 'f' , 'g' , 'h','j' , 'k' , 'l' , 'z' ,'x' , 'c' , 'v' , 'b' ,'Del' ,'n' , 'm'  , 'Enter' ]

const colors = [
    {
        bg: '#8b966e',
        light: '#c4d0a3',
        dark: '#1f1f1f',
        accent: '#5d6942',
    },
    {
        bg: '#966d8c',
        light: '#d1a3bd',
        dark: '#210317',
        accent: '#773863',
    },
    {
        bg: '#5e7a9e',
        light: '#a3b3d1',
        dark: '#020a21',
        accent: '#0052bf',
    },
    {
        bg: '#9e775d',
        light: '#e2c29c',
        dark: '#211201',
        accent: '#bf6200',
    },
    ];
// local  storage  for  the  themes
let styleIndex  = 0 ;
if(localStorage.getItem("styleIndex") == null){
    localStorage.setItem("styleIndex" , styleIndex.toString()) ;
}else{
    styleIndex = localStorage.getItem("styleIndex") ;
}






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
    let string = `<li class="key" value = "${element.toUpperCase()}" id="${index}">${element.toUpperCase()}</li>` ;
    content+= string ;
}) ;
keyboard.innerHTML = content ;
container2.appendChild(keyboard) ;

// controlling the  view  things
// play page
document.querySelector('.play').addEventListener("click" , ()=> {
    document.querySelector(".starter").style.display = "none" ;
    document.querySelector(".theme").style.display = "block" ;
})

// how to play page
document.querySelector('.howto').addEventListener("click" , ()=> {
    document.querySelector(".details").style.display = "flex" ;
    document.querySelector(".starter").style.display = "none" ;
    document.querySelector(".theme").style.display = "none" ;
    document.querySelector(".home").style.display = "block" ;

})

//  back to home
document.querySelector('.home').addEventListener("click" , ()=> {
    document.querySelector(".details").style.display = "none" ;
    document.querySelector(".starter").style.display = "flex" ;
    document.querySelector(".home").style.display = "none" ;
})


// themes container 


let j = 0 ;
while (j < 4){
    let themes = document.querySelector('.colors') ;
    let mystyle  = document.createElement('div') ;
    mystyle.className = "mystyle" ;
    mystyle.innerHTML = `
    <div></div><p> background color </p>
    <div></div><p>light color</p>
    <div></div><p>dark color</p>
    <div></div><p>accent color</p>`
    mystyle.setAttribute("index" , j);
    themes.appendChild(mystyle) ;
    let styles = document.querySelectorAll('.mystyle')[j].querySelectorAll('div') ;
    let k = 0 ;
    let s = ['bg' ,'light','dark' ,'accent']
    styles.forEach((div) => {
        let nm = s[k];
        div.style.backgroundColor = colors[j][nm] ;
        k++
    })
    j++ ;
}



document.querySelector('.theme').addEventListener("click" , ()=> {
    document.querySelector(".themes").style.display = "flex" ;
})

document.querySelector('.close').addEventListener("click" , ()=> {
    document.querySelector(".themes").style.display = "none" ;
})

// local  storage  for  the  themes 
// default variables 
let root = document.querySelector(":root")
root.style.setProperty("--background" , colors[styleIndex]['bg'])
root.style.setProperty("--light" , colors[styleIndex]['light'])
root.style.setProperty("--dark" , colors[styleIndex]['dark'])
root.style.setProperty("--accent" , colors[styleIndex]['accent'])




// changing  default colors
document.querySelector('.themes').addEventListener("click" , (e)=> {
    if(e.target.className =="mystyle"){
        let  index  =  e.target.getAttribute("index") ;
        localStorage.setItem("styleIndex" , index) ;
        root.style.setProperty("--background" , colors[index]['bg'])
        root.style.setProperty("--light" , colors[index]['light'])
        root.style.setProperty("--dark" , colors[index]['dark'])
        root.style.setProperty("--accent" , colors[index]['accent'])
    }
})
