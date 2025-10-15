
document.addEventListener("DOMContentLoaded",function(){


let finalScore = document.getElementById('fine');
let bottone = document.getElementById('new');

numeroClick = document.querySelector('#fine p span');
numeroClick.innerHTML='0';

let container = document.querySelector('ul');


let bombRandom = Math.floor(Math.random() * 16);
console.log(bombRandom);




for(let i=0; i<=15;i++){

    let quadro=document.createElement('li');
    container.appendChild(quadro);

}


let tuttiQuadri = document.querySelectorAll('li');
console.log(tuttiQuadri);

for(let i = 0; i<tuttiQuadri.length;i++){
    tuttiQuadri[i].addEventListener('click',myClick);

    function myClick(){
        numeroClick.innerHTML++;

        tuttiQuadri[i].style.backgroundImage='url(immagini/rainbow.png)';

            
        if(bombRandom==1){
            tuttiQuadri[1].onclick = function(){
                 tuttiQuadri[1].style.backgroundImage='url(immagini/bomb.png)';
                 finalScore.style.display='block';
                 document.querySelector('#gioco span').classList.add('bloccaGioco');}
            }


            
        if(bombRandom==2){
            tuttiQuadri[2].onclick = function(){
                 tuttiQuadri[2].style.backgroundImage='url(immagini/bomb.png)';
                 finalScore.style.display='block';
                 document.querySelector('#gioco span').classList.add('bloccaGioco');}
            }

            
        if(bombRandom==3){
            tuttiQuadri[3].onclick = function(){
                 tuttiQuadri[3].style.backgroundImage='url(immagini/bomb.png)';
                 finalScore.style.display='block';
                 document.querySelector('#gioco span').classList.add('bloccaGioco');}
            }

            
        if(bombRandom==4){
            tuttiQuadri[4].onclick = function(){
                 tuttiQuadri[4].style.backgroundImage='url(immagini/bomb.png)';
                 finalScore.style.display='block';
                 document.querySelector('#gioco span').classList.add('bloccaGioco');}
            }

            
        if(bombRandom==5){
            tuttiQuadri[5].onclick = function(){
                 tuttiQuadri[5].style.backgroundImage='url(immagini/bomb.png)';
                 finalScore.style.display='block';
                 document.querySelector('#gioco span').classList.add('bloccaGioco');}
            }

            
        if(bombRandom==6){
            tuttiQuadri[6].onclick = function(){
                 tuttiQuadri[6].style.backgroundImage='url(immagini/bomb.png)';
                 finalScore.style.display='block';
                 document.querySelector('#gioco span').classList.add('bloccaGioco');}
            }

            
        if(bombRandom==7){
            tuttiQuadri[7].onclick = function(){
                 tuttiQuadri[7].style.backgroundImage='url(immagini/bomb.png)';
                 finalScore.style.display='block';
                 document.querySelector('#gioco span').classList.add('bloccaGioco');}
            }

            
        if(bombRandom==8){
            tuttiQuadri[8].onclick = function(){
                 tuttiQuadri[8].style.backgroundImage='url(immagini/bomb.png)';
                 finalScore.style.display='block';
                 document.querySelector('#gioco span').classList.add('bloccaGioco');}
            }

            
        if(bombRandom==9){
            tuttiQuadri[9].onclick = function(){
                 tuttiQuadri[9].style.backgroundImage='url(immagini/bomb.png)';
                 finalScore.style.display='block';
                 document.querySelector('#gioco span').classList.add('bloccaGioco');}
            }

            
        if(bombRandom==10){
            tuttiQuadri[10].onclick = function(){
                 tuttiQuadri[10].style.backgroundImage='url(immagini/bomb.png)';
                 finalScore.style.display='block';
                 document.querySelector('#gioco span').classList.add('bloccaGioco');}
            }

            
        if(bombRandom==11){
            tuttiQuadri[11].onclick = function(){
                 tuttiQuadri[11].style.backgroundImage='url(immagini/bomb.png)';
                 finalScore.style.display='block';
                 document.querySelector('#gioco span').classList.add('bloccaGioco');}
            }


            
        if(bombRandom==12){
            tuttiQuadri[12].onclick = function(){
                 tuttiQuadri[12].style.backgroundImage='url(immagini/bomb.png)';
                 finalScore.style.display='block';
                 document.querySelector('#gioco span').classList.add('bloccaGioco');}
            }



            
        if(bombRandom==13){
            tuttiQuadri[13].onclick = function(){
                 tuttiQuadri[13].style.backgroundImage='url(immagini/bomb.png)';
                 finalScore.style.display='block';
                 document.querySelector('#gioco span').classList.add('bloccaGioco');}
            }



            
        if(bombRandom==14){
            tuttiQuadri[14].onclick = function(){
                 tuttiQuadri[14].style.backgroundImage='url(immagini/bomb.png)';
                 finalScore.style.display='block';
                 document.querySelector('#gioco span').classList.add('bloccaGioco');}
            }


            
        if(bombRandom==15){
            tuttiQuadri[15].onclick = function(){
                 tuttiQuadri[15].style.backgroundImage='url(immagini/bomb.png)';
                 finalScore.style.display='block';
                 document.querySelector('#gioco span').classList.add('bloccaGioco');}
            }


            
        if(bombRandom==16){
            tuttiQuadri[16].onclick = function(){
                 tuttiQuadri[16].style.backgroundImage='url(immagini/bomb.png)';
                 finalScore.style.display='block';
                 document.querySelector('#gioco span').classList.add('bloccaGioco');}
            }



    }
}

bottone.addEventListener('click',Myreset);

function Myreset(){
    document.location.reload();}



    console.log('ciaone');


























/*let myArray;

    for(let i=0 ;i < 16; i++){

    let contenitore = document.querySelector('ul');

    let quadrato = document.createElement('li');
    contenitore.appendChild(quadrato);

    myArray=document.querySelectorAll('li');
    console.log(myArray);


    document.querySelector('li').classList.add('bomba');  
    let bomb = document.querySelector('.bomba');

    bomb.classList.remove('bomba');


    quadrato.addEventListener('click', myRainbows);
    function myRainbows(){

        numeroClick.innerHTML++;

        if(quadrato==bomb){

            bomb.style.backgroundImage='url(immagini/bomb.png)';
            finalScore.style.display='block';
            document.querySelector('#gioco span').classList.add('bloccaGioco');
        }else {
            quadrato.style.backgroundImage='url(immagini/rainbow.png)';
        }

        if(bombRandom==1){

            myArray[1].classList.add('bomba');
        
        }

            



    bottone.addEventListener('click',Myreset);

    function Myreset(){
        document.location.reload();
        document.querySelector('li').classList.remove;

        }

    }

} */ 

    } 




);//DOMContentLoaded