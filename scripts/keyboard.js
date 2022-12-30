import {getVerified} from "./listeners.js"

let alphabet = [ 'q' , 'w' , 'e' , 'r' ,'t' , 'y' , 'u' , 'o' ,'p' , 'i' , 'a' , 's' ,'d', 'f' , 'g' , 'h','j' , 'k' , 'l' , 'z' ,'x' , 'c' , 'v' , 'b'  ,'n' , 'm'  ]
let keys = document.querySelectorAll(".key") ;

document.querySelectorAll('form[class="word"]')[0].classList.add("working");

// add even listener for buttons in html
let counting= 0 ;
keys.forEach(element => {
    element.addEventListener('click' , (e)=> {
        // for keyword typing
        if (document.querySelector('form[class="word working"]') != null){
            let ready_input = document.querySelector('form[class="word working"]').querySelectorAll('input[type="text"]') ;
            // target empty inputs
            if(ready_input[counting].value == "" && alphabet.includes(e.target.textContent.toLowerCase())){
                ready_input[counting].setAttribute('value', e.target.textContent)
                counting++ ;

                // reset 
                if (counting == 5){
                    // that mean a word is ready
                    document.querySelector('form[class="word working"]').classList.replace("working" , "ready") ;
                    counting= 0 ;
                }
            }
        }

        // for Enter button
        if(e.target.textContent ==="OK" && document.querySelector('.ready') != null){
            getVerified() ;
        }

        // for remove word
        if(e.target.textContent ==="RM"){
            let target ; 
            if(document.querySelector('form[class="word working"]') != null){
                target = document.querySelector('form[class="word working"]').querySelectorAll('input[value]:not([value=""])') ;
            }else{
                target = document.querySelector(".ready").querySelectorAll('input[value]:not([value=""])') ;
            }
            if(target.length != 0){
                target[target.length - 1].setAttribute("value" , "");
                if (document.querySelector('form[class="word ready"]') != null){
                    document.querySelector('form[class="word ready"]').classList.replace("ready" , "working") ;
                }
                counting = target.length-1 ;
            }
            
        }
    })
}) ;





"// add even listener for buttons in keypress enter not include"

document.body.addEventListener('keypress',  (e)=> {
    if(alphabet.includes(e.key) && document.querySelector('form[class="word working"]') != null){
        let ready_input = document.querySelector('form[class="word working"]').querySelectorAll('input[type="text"]') ;
        // target empty inputs
        if(ready_input[counting].value == "" && alphabet.includes(e.key.toLowerCase())){
            ready_input[counting].setAttribute('value', e.key) ;
            counting++ ;

            // reset
            if (counting == 5){
                document.querySelector('form[class="word working"]').classList.replace("working" , "ready") ;
                counting= 0 ;
            }
        }
        
    }

    // catch content with return  key
    if(e.key ==='Enter' && document.querySelector('.ready') != null){
        // verify that word  includes in the  list  and  call magic  funtion  for  coloring 
        getVerified()
    }
});



// delete button with  laptop keyboard 
document.body.addEventListener('keydown', (e) => {
    if (e.key === "Backspace" || e.key === "Delete") {
        let target ;
        if(document.querySelector('form[class="word working"]') != null){
            target = document.querySelector('form[class="word working"]').querySelectorAll('input[value]:not([value=""])') ;
        }else{
            target = document.querySelector(".ready").querySelectorAll('input[value]:not([value=""])') ;
        }
        if(target.length != 0){
            target[target.length - 1].setAttribute("value" , "") ;
            if (document.querySelector('form[class="word ready"]') != null){
                document.querySelector('form[class="word ready"]').classList.replace("ready" , "working") ;
            }
            counting = target.length-1 ;
        }
    }
});