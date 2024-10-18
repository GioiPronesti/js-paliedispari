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

 */
const userWord = prompt("scegli una parola ");

palindromeWord = false;

for (i = 0; i < userWord.length; i++) {
  // string

  let char = userWord.at(-i - 1);

  console.log(i, char);

  if (userWord === char) {
    palindromeWord = true;
  }
}

if (palindromeWord) {
  message = consol.log(" esito positivo: la parola è palindroma");
} else {
  message = console.error("esito negativo: la parola non è palidroma");
} 

console.log(message);

//function isPalindrome(word){
//}

