document.addEventListener("DOMContentLoaded",()=>{

console.log(somma())
console.log(isPari())
console.log(max())
console.log(contaVocali())
console.log(tabbellina5())
console.log(numMaggiore())
console.log(duplicati())
console.log(contrario())
console.log(fizzBuzz())
console.log(ordineArray())
console.log(sommaArray())
console.log(contaCaratteri())
console.log(provaConta())

}) 

function somma(a,b) {
  a=2
  b=2

  return a+b
}



function isPari(n) {
  // scrivi il codice qui

  n=4


  if(n%2==0){
    return true
  }else{
    return false
  }
}


function max(a, b) {
  // scrivi il codice qui

  a=10
  b=4

  if(a<b){
    return b
  }else{ return a}

}

function contaVocali(str) {
  // scrivi il codice qui
  str = "fruttinvendolo"





  // questo metodo lo utlizzo per contare il NUMERO DI VOCALI

  // let voc = 0


/* 
  let vocali = ["a","e","i","o","u"]



   for(let i=0;i<str.length;i++){

    let stringa = str[i].toLowerCase()

    if(vocali.includes(stringa)){
       
        voc++
    }


   }

      return voc */

     let splittato = str.split("")

     console.log(splittato)

     let vocali = ["a","e","i","o","u"]

     for(let i=0;i<vocali.length;i++){
        let filtrato = splittato.filter((x)=>x==vocali[i])

        console.log(filtrato)
     }

  
}



// Stampa tutti i multipli di 5 fino a 10 usando un CICLO FOR

function tabbellina5(){

  for(let i=0;i<=10;i++){
    console.log(i.length)

    let num = 5

    console.log(num*i)


  }

}


function numMaggiore(){

  let numArr=[1,10,40,20]

  let risultato=0

  console.log(Math.max(...numArr))

  for(let i=0;i<numArr.length;i++){

    if(numArr[i]>risultato){
      risultato=[numArr[i]]
    }

  }

    console.log(risultato)
}


//✍️ Scrivi una funzione che rimuove i duplicati da un array.

function duplicati(){


  let lista = [1,3,3,4,2,7,7,8]



  //Con il filter vado a scartare ciò che non appare per la prima volta
  //Con l'indexOf cerco la posizione

/*   filter() scorre ogni elemento dell’array.

x è il valore corrente.

y è l’indice corrente.

lista.indexOf(x) restituisce l’indice della prima volta in cui x appare nell’array.

Se y === lista.indexOf(x), vuol dire che è la prima volta che vediamo x → lo teniamo.

Se è una ripetizione → lo scarta. */



  return lista.filter((x,y)=>{
   return lista.indexOf(x)===y
  }
  )



  let unici = [...new Set(lista)] // Con il set è più diretto => metodo che serve principalmente per rimuovere i duplicati

  return unici


}

function contrario(uno,due){

  uno = "cane"

 due = uno.split("").reverse().join("")

 console.log(due)

 return uno === due.split("").reverse().join("")



// .join("")
/*   parola.split('')         // trasforma in array di caratteri
.reverse()               // inverte l’array
.join('')                // riunisce i caratteri in una nuova stringa
 */


}


function fizzBuzz(a,b){

  a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,33]


  b=5

  for(let e=1;e<=100;e++){
    console.log(e)

 
      if(e%3===0 && e%5===0){
        console.log("FizzBuzz")
      }if(e%3===0){
        console.log("Fizz")

      }if(e%5===0){
        console.log("Buzz")
      }
    }
  }

  function ordineArray(){
    let arr=[2,10,4,8]

    arr.sort((a,b)=>a-b) // il metodo sort serve per ordinare i numeri in ordine crescente

/*     arr.sort((a, b) => b - a)
    in ordine decrescente */

    return arr

  }


  function sommaArray(a,b,c,d){

/*     a = 1
    b = 2
    c = 3
    d = 4

    let arr = [a+b+c+d]

    return arr */

    let arr=[1,2,3,4]

    let somma = 0

    for(let i = 0 ; i < arr.length ; i ++){

      somma += arr[i] // inietto nella variabile SOMMA il risultato dell'addizione del suo valore (0) += i numeri dell' arr[i] => 0 + 1 + 2 + 3 + 4
      
    }

    return somma


    }


    function contaCaratteri(){

      let parola = "futuro"

      let ri = {} // Servirà principalmente per salvare le frequenze dei caratteri => inietteremo il risultato del For Of

      //Il For OF serve per scorrere ogni CARATTERE della stringa

      for (char of parola){
        console.log(char)

        if(ri[char]){
          ri[char]++
        }else{
          ri[char] = 1
        }

        //ri[char] controlla se quel carattere è già presente nell’oggetto.
/* 
Se sì: aumentiamo il conteggio di 1 (freq[char]++)

Se no: lo aggiungiamo all’oggetto con valore 1 (freq[char] = 1) */

      }

      return ri


      }



      //metodo per contare il numero di elementi sono presenti in un "contenitore" o addirittura i numeri di caratteri presenti in una stringa

      function provaConta(){

        let a = "ciao"
        let aNum = 0

        for(let i = 1 ; i <= a.length ; i++){
          console.log(i)

          aNum = i
   
        }

               console.log(aNum)

        let arr = [1,2,3,4,5,6,7,8,8]  

        let cont = []

        for(num of arr){
          console.log(num)

          if(cont[num]){
            cont[num]++
          }else{
            cont[num]=1
          }

        }

        return cont

      }


      //contare quante volte è presente una determinata parola all'interno di un testo