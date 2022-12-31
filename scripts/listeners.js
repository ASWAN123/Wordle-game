// import module of  words 
import {getWord , checkWord} from "./words.js"

let secret  = [...getWord().toUpperCase()] ;
// let this console work for win testing only ;
console.log(secret) ;
// generate  a  word
let styleIndex  = 0 ;
if(localStorage.getItem("styleIndex") == null){
    localStorage.setItem("styleIndex" , styleIndex.toString()) ;
}else{
    styleIndex = localStorage.getItem("styleIndex") ;
}

export const magic = (word) => {
    
    // start working  with  words module
    let obj = {}
    word = [...word.toUpperCase()]
    // console.log(word);

    // be careful with beautiful for loop 
    word.forEach((ele , index) => {
        if(secret.includes(ele) === false){
            obj[index] = "wrong"
        }else{
            obj[index] = "maybe"
        }
        if(ele == secret[index]){
            obj[index] = "confirm"
        }
    })

    // console.log(obj)
    let inputs = document.querySelector(".ready").querySelectorAll("input")
    inputs.forEach((ele , index) => {
        ele.classList.add(obj[index]) ;
        let op = word[index] ;
        // console.log(op)
        let key = document.querySelector(".keyboard").querySelectorAll(`li[value="${op}"]`)[0] ;
        if(obj[index] =="wrong"){
            key.style.border = "none" ;
        }else{
            key.classList.add(obj[index]) ;
        }
        
        
    })



    // change the form class to verifiy that they are not yet targeted to fill inputs
    document.querySelector('.ready').classList.replace("ready","verified");
    
    // if there is not more word to fill stop / all green mean game over
    let gameWin = Object.values(obj)
    let count = gameWin.filter(x => x=="confirm").length
    
    

    // if  count  is  5  mean  you win  , 
    if(count == 5 ){
        // console.log("win")
        let x = document.querySelectorAll('form[class ="word"]') ;
        x.forEach((ele) => {
            ele.classList.replace("word" , "gameover") ;
        })
        // say you will 
        let notifyme = document.querySelector(".notification") ;
        notifyme.textContent = "Congratulations , you won!" ;
        notifyme.style.display = "block"
        setTimeout(()=>{
            notifyme.style.display = "none"
        } , 10000)

    }else{
        if (document.querySelector('form[class ="word"]') != null && count != 5 ){
        document.querySelectorAll('form[class ="word"]')[0].classList.add('working') ;
        }else{
            let notifyme = document.querySelector(".notification") ;
            notifyme.textContent = "Good luck next time" ;
            notifyme.style.display = "block"
            setTimeout(()=>{
                notifyme.style.display = "none"
            } , 3000)
        }
    }

}

export const getVerified= () => {
    let data = document.querySelector('.ready').querySelectorAll('input[type="text"]');
    let word = "" ;
    data.forEach(ele => {
        word+= ele.value ;
    })

    if(checkWord(word.toLocaleLowerCase()) == true){
        // console.log(word , "exist")
        magic(word) ;
    }else{
        let notifyme = document.querySelector(".notification") ;
        notifyme.textContent = "Please write correct word" ;
        notifyme.style.display = "block"
        setTimeout(()=>{
            notifyme.style.display = "none"
        } , 3000)


        
    }
}






