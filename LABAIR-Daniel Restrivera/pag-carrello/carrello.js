let plus = document.querySelectorAll('#plus');
console.log(plus)
let minus = document.querySelectorAll('#minus');
console.log(plus)

let input = document.querySelectorAll('#buttons input');
console.log(input)

let quantity = document.querySelectorAll('#buttons p');
console.log(quantity)

let prezzoUno = document.querySelector('.prezzoUno');
let prezzoDue = document.querySelector('.prezzoDue');
console.log(prezzoDue);
console.log(prezzoUno);

let subTotale = document.querySelector('#subtotale span');
console.log(subTotale);

let final = document.querySelector('.final');

let price = 119.99 + 119.99; //Ho scritto il prezzo totale in questo modo perchè ho preso in considerazione che venissero inviati dei dati (json) nel carrello, associati ai prezzi di ogni singolo prodotto, e anche perchè scrivendo  "let price = parseFloat(prezzoUno.innerText) + parseFloat(prezzoDue.innerText)", arrondota il prezzo totale per difetto. 


subTotale.innerHTML = price.toFixed(2) + " €";
final.innerHTML = price.toFixed(2) + " €";




plus[0].onclick = function(){




    quantity[0].innerHTML++;

    let tot = 119.99  * parseFloat(quantity[0].innerText);

    prezzoUno.innerHTML = tot.toFixed(2) + " €";

    if(quantity[0].innerText!=1){
        minus[0].innerHTML='-'}


         let totPrice = parseFloat(prezzoUno.innerText) + parseFloat(prezzoDue.innerHTML);

         subTotale.innerHTML = totPrice.toFixed(2) + " €";
        final.innerHTML = totPrice.toFixed(2) + " €";


        if(quantity[1].innerText==0){
            subTotale.innerHTML= tot.toFixed(2) + " €";
            final.innerHTML= tot.toFixed(2) + " €";
        }





}


minus[0].onclick = function(){
    
    quantity[0].innerHTML -=1;

    let sottrazione = parseFloat(prezzoUno.innerText) - 119.99;

    prezzoUno.innerHTML = sottrazione.toFixed(2) + " €";


    let totPrice = parseFloat(prezzoUno.innerText) + parseFloat(prezzoDue.innerHTML);

    subTotale.innerHTML = totPrice.toFixed(2) + " €";
    final.innerHTML = totPrice.toFixed(2) + " €";


    if(quantity[0].innerText==1){
        minus[0].innerHTML='T';
    }else if(quantity[0].innerText==0){
        document.getElementById('one').style.display='none';
        subTotale.innerHTML = parseFloat(prezzoDue.innerText)+ " €";
        final.innerHTML = parseFloat(prezzoDue.innerText)+ " €";
        prezzoUno.innerHTML='-';

    }


    if(quantity[1].innerText==0){
        subTotale.innerHTML= sottrazione.toFixed(2) + " €";
        final.innerHTML= sottrazione.toFixed(2) + " €";
    }


    if(quantity[0].innerText==0 && quantity[1].innerText==0){
        subTotale.innerHTML='-';
        final.innerHTML='-';
        document.getElementById('vuoto').innerHTML='Nel tuo carrello non sono presenti articoli.'

    }





}





plus[1].onclick = function(){

   
    quantity[1].innerHTML++;

    let tot = 119.99 * parseFloat(quantity[1].innerText);

    prezzoDue.innerHTML = tot.toFixed(2) +" €";

    let totPrice = parseFloat(prezzoUno.innerText) + parseFloat(prezzoDue.innerText);

    subTotale.innerHTML = totPrice.toFixed(2) + " €";
    final.innerHTML = totPrice.toFixed(2) + " €";




    if(quantity[1].innerText!=1){
        minus[1].innerHTML='-';
    }

    
    if(quantity[0].innerText==0){
        subTotale.innerHTML= tot.toFixed(2) + " €";
        final.innerHTML= tot.toFixed(2) + " €";
    }




    
}


minus[1].onclick = function(){


    quantity[1].innerHTML-=1;

    let sottrazione = parseFloat(prezzoDue.innerText) - 119.99;

    prezzoDue.innerHTML = sottrazione.toFixed(2)  + " €";




    let totPrice = parseFloat(prezzoUno.innerText) + parseFloat(prezzoDue.innerHTML);

    subTotale.innerHTML = totPrice.toFixed(2) + " €";
    final.innerHTML = totPrice.toFixed(2) + " €";


    if(quantity[1].innerText==1){
        minus[1].innerHTML='T';
    }else if(quantity[1].innerText==0){
        document.getElementById('two').style.display='none';
        subTotale.innerHTML = parseFloat(prezzoUno.innerText)+ " €";
        final.innerHTML = parseFloat(prezzoUno.innerText)+ " €";
        prezzoDue.innerHTML='-';
    }


    
    if(quantity[0].innerText==0){
        subTotale.innerHTML= sottrazione.toFixed(2) + " €";
        final.innerHTML= sottrazione.toFixed(2) + " €";
    }


    
    if(quantity[0].innerText==0 && quantity[1].innerText==0){
        subTotale.innerHTML='-';
        final.innerHTML='-';
        document.getElementById('vuoto').innerHTML='Nel tuo carrello non sono presenti articoli.';
    }





}










    


    












