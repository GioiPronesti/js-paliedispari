console.log('hello console')

/*
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/ 
/*
 Descrizione del problema

 Utente inserisce una parola 
 creare una funzione che determini se la parola inserita è palindroma. es "osso, anna "

 // const text = isPalindromword(word)
    return result /boolean    true/false

dichiaro variabile userWord dal prompt 

poi creo dichiaro funzione è una parola palindroma ? 
gli passo la stinga scelta dall'utente

e mi ritorna l'esito del controllo vero o falso

 */
const userWord = prompt("scegli una parola ")

    for ( i=0; i < userWord.length; i++ ){  // string

        word = userWord[i]

        console.log(i,word)
    }

    


//function isPalindrome(word){ 
//}