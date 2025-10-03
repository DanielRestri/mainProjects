class hp {

  #hpStatus

  constructor(hp=100){
    this.#hpStatus=hp
  }

  getHp(){
    return this.#hpStatus
  }

  reduceHp(){
      return this.#hpStatus -=10
}

  increaseHp(){
      return this.#hpStatus +=10
}

  maxHp(){
      return this.hp = 100
}

}

  let newHp = new hp(100)

//hp



const alfabeto = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i).toLocaleUpperCase());
console.log(alfabeto);

for(let i=0;i<alfabeto.length;i++){

  let li=document.createElement('li')

  li.innerHTML=alfabeto[i]

  document.querySelector('.lettersContainer ul').appendChild(li)
  }


// creo un'array di dati
const parola = [
  "libro", "cielo", "mare", "notte", "sogno", "tempo", "vento", "luce", "pietra", "fiore",
  "strada", "porta", "casa", "viaggio", "bosco", "fuoco", "neve", "sedia", "ombra", "fiume",
  "luna", "cuore", "gatto", "tigre", "matita", "zaino", "palla", "ruota", "tavolo", "sabbia",
  "colore", "penna", "terra", "finestra", "montagna", "cammino", "stella", "cavallo", "seme",
  "albero", "anima", "ghiaccio", "respiro", "silenzio", "nuvola", "specchio", "pioggia", "voce", "sorriso",
  "vento", "mattina", "soglia", "treno", "lago", "sale", "deserto", "ombra", "speranza", "notizia",
  "profumo", "scoglio", "bicchiere", "scale", "chiave", "carta", "tempo", "passo", "linea", "vista",
  "canto", "zucchero", "letto", "cuscino", "parete", "soffio", "sentiero", "carezza", "fogli", "inchiostro",
  "vento", "giardino", "pensiero", "parola", "viola", "sapone", "lampeggiante", "cielo", "ombrello", "orologio",
  "cassetto", "ricordo", "coltello", "paura", "risata", "abbraccio", "vento", "candela", "nebbia", "battito"
];

const numCasuale = Math.round(Math.random()*99)//genero un numero casuale

console.log(numCasuale)

let scelta = parola[numCasuale].toUpperCase()//Il numero generato dal Math.Random andrà a corrispondere alla numero dell'ordine cronologico dell'array ( es. parola[2])
console.log(scelta)

console.log(scelta)




let btn = document.querySelector('button')


// Qui invece andrò a prelevare il numero di lettere della parola che uscirà; e quel numero di lettere sarà corrispondete al numero di caselle (blanks) => per indovinare la parola lettera per lettera
  for(let i=0; i<scelta.length; i++){

    let blank = document.createElement('li')
    document.querySelector('.blanksContainer ul').appendChild(blank)

      console.log(blank)
  
  }


  //1 per poter prelevare il numero di lettere dentro la parola scelta[i] SENZA DOVER RICORRERE AL CICLO FOR
let lettArr = Array.from(scelta)//prelevo le lettere singolarmente e le inietto dentro un'array

  let allletters = document.querySelectorAll('.lettersContainer ul li')

  let lettera

  for(let i=0; i<allletters.length; i++){

  allletters[i].onclick=function(){
  
    lettera=allletters[i].textContent.toUpperCase()

  allletters[i].style.border="solid 2.5px green"

//----------------------------------------------------------------

//2 il VALORE della lettera cliccata deve rappresentare questa variabile

let risultatoLettera = lettArr.filter((x)=>x===lettera)//utilizzando il metodo filter => x dovrà corrispondere esattamente al volore della LETTERA

//----------------------------------------------------------------

   if(allletters[i].textContent!=risultatoLettera[0]){
    // let span = document.createElement('span')
    // allletters[i].appendChild(span)
    allletters[i].style.display="none"
    
   }

console.log(risultatoLettera)

if(lettera!=risultatoLettera[0]){//3 la variabile che repprensenta la parola => per evitare le dobbie si usa la poisizione a piacere tanto la lettera è quella [0] o [1] ecc ecc
  newHp.reduceHp()
  document.querySelector('.hp').style.width=`${newHp.getHp()}`;

}


    //btn function()
  // btn.onclick=function(){


    document.querySelector('.hp').style.width=`${newHp.getHp()}`+"%"

    allletters[i].style.border="solid 2.5px green"


  if(`${newHp.getHp()}`<=70){
    document.querySelector('.hp').style.background="#b0d02fff"
  }
  
  if(`${newHp.getHp()}`<=40){
    document.querySelector('.hp').style.background="#eacb20ff"
  }
  
  if(`${newHp.getHp()}`<=20){
    document.querySelector('.hp').style.background="red"
  }
  
  if(`${newHp.getHp()}`==0){
    document.querySelector('.hp').style.background="brown"
    alert("Hai perso");
    location.reload()
    
  }



     for(let i=0; i<scelta.length; i++){

     console.log(scelta[i]) 



    let allBlanks = document.querySelectorAll('.blanksContainer ul li')

  for(let i=0; i<allBlanks.length;i++){ // ogni casella (div)
    console.log(allBlanks[i])


    if(lettera===scelta[i]){ //se una lettra dell'input value è giusta ossia che è compresa nella PAROLA
    allBlanks[i].innerHTML=lettera// allora verrà inserita dove risiede quella lettera

    
  }



  }

       }// for scelta[i]

  }//btn(){}


    }//allLetters[i].onclick(){}

  // } //allLetters[i]

  
























/*     for(let i=0; i<scelta.length; i++){

    console.log(scelta[i])

    let allBlanks = document.querySelectorAll('.blanksContainer ul li')

  for(let i=0; i<allBlanks.length;i++){ // ogni casella (div)
    console.log(allBlanks[i])



    if(lettera==scelta[i]){ //se una lettra dell'input value è giusta ossia che è compresa nella PAROLA
    allBlanks[i].innerHTML=lettera// allora verrà inserita dove risiede quella lettera
    
  }


  }

      }
 } */
  

   

/*  


const form = document.querySelector('form')

form.addEventListener('submit', mySub)

function mySub(){

  let input = document.querySelector('form input') // il value dell'input

  for(let i=0; i<scelta.length; i++){

    console.log(scelta[i])

  let allBlanks = document.querySelectorAll('body div')

  for(let i=0; i<allBlanks.length;i++){ // ogni casella (div)
    console.log(allBlanks[i])

    if(input.value==scelta[i]){ //se una lettra dell'input value è giusta ossia che è compresa nella PAROLA
    allBlanks[i].innerHTML=input.value// allora verrà inserita dove risiede quella lettera
  }

  }


  }

} */



/* let arr = document.querySelectorAll('.container div p')

console.log(arr)

for(let i=0;i<arr.length;i++){
  console.log(arr[i])

  if(arr[i].textContent=="bada"){
    console.log(arr[i])

    document.querySelector('h1').innerHTML=arr[i].textContent
  }



} */


