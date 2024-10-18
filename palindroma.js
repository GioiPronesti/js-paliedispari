console.log("hello console");

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

una parola è palindroma quando si può leggere sia da destra che da sinistra. 
caratteri uguali sia a destra che sinistra 
palindroma
 */

function isPalindrome(word) {

  let userWordReverse = "";
  for (let i = word.length - 1; i >= 0; i--) {
    // string
    let char = word.at(i);
    userWordReverse = userWordReverse + char;
  }

  if (userWordReverse === word) {

    return true
  } else {
    return false
  }

}

const userWord = prompt("scegli una parola ");

const result = isPalindrome(userWord)

if (result === true) {
  console.log(" esito positivo: la parola è palindroma");
} else {
  console.error("esito negativo: la parola non è palidroma");
}

//function isPalindrome(word){
//}
