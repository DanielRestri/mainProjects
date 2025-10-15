let random = Math.floor(Math.random()*100);
console.log(random)

let allInputs = document.querySelectorAll('input');
console.log(allInputs)

let buttons = document.querySelectorAll('.buttons button');
console.log(buttons);

let spanNum = document.querySelector('#numeroTentativi');
console.log(spanNum);

let risultato = document.getElementById('risultato');

let blocca = document.querySelectorAll('.blocca')




buttons[0].onclick=function(){

    spanNum.innerHTML++;

    if(allInputs[1].value.trim() == random){
        risultato.style.display='block';
        risultato.innerHTML='HAI INDOVINATO IN > '+ spanNum.innerHTML + ' TENTATIVI';
        risultato.style.background='green';
        risultato.style.color='lightgreen';
        blocca[2].style.display='block';
        buttons[1].style.background ='rgb(136, 247, 251)';
        buttons[1].style.color='rgb(34, 63, 63)';


    }else if(allInputs[1].value.trim() < random){
        risultato.style.display='block';
        risultato.innerHTML='prova con un numero più grande';
        risultato.style.background='beige';
        setTimeout(piuGrande,5000);


    }else{
        risultato.style.display='block';
        risultato.innerHTML='prova con un numero più piccolo';
        risultato.style.background='beige';
        setTimeout(piuPiccolo,5000);
 
    }

    if(spanNum.innerHTML==allInputs[0].value && allInputs[1].value != random){
        risultato.style.display='block';
        risultato.innerHTML='PARTITA PERSA - IL NUMERO ERA > ' + random;
        risultato.style.background='brown';
        risultato.style.color='rgb(255, 176, 176)';
        buttons[1].style.background ='rgb(136, 247, 251)';
        buttons[1].style.color='rgb(34, 63, 63)';
        
        blocca[0].style.display='block';
        blocca[1].style.display='block';
        blocca[2].style.display='block';


    }else if(allInputs[0].value.trim()== ""|| allInputs[1].value.trim()== "" || isNaN(allInputs[0].value.trim()) || isNaN(allInputs[1].value.trim())){
            risultato.innerHTML='Immissione dati errata';
            risultato.style.display='block';
            spanNum.innerHTML="";
            
}

}


buttons[1].onclick=function(){
    document.location.reload();
}


function piuGrande(){
    risultato.style.display='none';
}


function piuPiccolo(){
    risultato.style.display='none';
}




 
