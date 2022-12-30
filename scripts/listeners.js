// import module of  words 
import {getWord , checkWord} from "./words.js"

let secret  = [...getWord().toUpperCase()] ;
console.log(secret);
// generate  a  word


export const magic = (word) => {
    
    // start working  with  words module
    let obj = {}
    word = [...word.toUpperCase()]
    console.log(word);

    // be careful with beautiful for loop 
    word.forEach((ele , index) => {
        if(secret.includes(ele) === false){
            obj[index] = "red"
        }else{
            obj[index] = "yellow"
        }
        if(ele == secret[index]){
            obj[index] = "green"
        }
    })

    console.log(obj)
    let inputs = document.querySelector(".ready").querySelectorAll("input")
    inputs.forEach((ele , index) => {
        ele.style.backgroundColor = obj[index] ;
    })

    // change the form class to verifiy that they are not yet targeted to fill inputs
    document.querySelector('.ready').classList.replace("ready","verified");
    
    // if there is not more word to fill stop / all green mean game over
    let gameWin = Object.values(obj)
    let count = gameWin.filter(x => x=="green").length
    console.log(count)
    

    if (document.querySelector('form[class ="word"]') != null && count < 5 ){
        document.querySelectorAll('form[class ="word"]')[0].classList.add('working') ;
    }else{
        console.log('game over')
    }

}

export const getVerified= () => {
    let data = document.querySelector('.ready').querySelectorAll('input[type="text"]');
    let word = "" ;
    data.forEach(ele => {
        word+= ele.value ;
    })

    if(checkWord(word.toLocaleLowerCase()) == true){
        console.log(word , "exist")
        magic(word) ;
    }
}






