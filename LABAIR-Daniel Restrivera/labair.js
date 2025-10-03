let rightButtonOne = document.getElementById('rightOne');
let leftButtonOne = document.getElementById('leftOne');

let rightButtonTwo = document.getElementById('rightTwo');
let leftButtonTwo = document.getElementById('leftTwo');

let rightButtonThree = document.getElementById('rightThree');
let leftButtonThree = document.getElementById('leftThree');

let scrollerOne = document.querySelector('.imgslidercontainer1');
let scrollerTwo = document.querySelector('.imgslidercontainer2');
let scrollerThree = document.querySelector('.imgslidercontainer3');

let searchContainer = document.querySelector('.searchbox')
let searchInpunt = document.getElementById('searchtext')

console.log(searchContainer);
console.log(searchInpunt);

let header = document.querySelector('header')

let thirdNavContent = document.querySelectorAll('.third div')
console.log(thirdNavContent);

let searchBar = document.getElementById('searchBar');
console.log(searchBar);

let main = document.querySelector('main');

let mainCover = document.querySelector('.maincover');

let second = document.querySelector('.second ul');



second.onmouseover=function(){
    mainCover.style.display='block';
}

second.onmouseleave=function(){
    mainCover.style.display='none';
}





let timeOut = setInterval(myTimeOut,6000);
console.log(timeOut);

function myTimeOut(){
    console.log('ok');

    thirdNavContent[0].classList.remove('visible');
    thirdNavContent[0].classList.add('hidden1');
    thirdNavContent[1].classList.remove('hidden');
    thirdNavContent[1].classList.add('visible2');

}

setInterval(myInterval,12000);

function myInterval(){
    thirdNavContent[0].classList.remove('hidden1');
    thirdNavContent[0].classList.add('visible');
    thirdNavContent[1].classList.remove('visible2');
    thirdNavContent[1].classList.add('hidden');


}





/*searchInpunt.addEventListener('click', Mysearch);

function Mysearch(){
    let searchTop = document.createElement('div');
    header.appendChild(searchTop)

    searchTop.style.width='100%';
    searchTop.style.padding='50px'
    searchTop.style.border='solid 1px green';
    searchTop.style.position='absolute';
    searchTop.style.top='0';
    searchTop.style.left='0';
    searchTop.style.zIndex='10';
    searchTop.style.background='white';
    searchTop.appendChild(searchInpunt);
}
    */




rightButtonOne.addEventListener('click', rightClick1);

function rightClick1(){
    
    scrollerOne.scrollLeft += 501;
}

leftButtonOne.addEventListener('click', leftClick1);

function leftClick1(){
    scrollerOne.scrollLeft -= 501;
    
}



rightButtonTwo.addEventListener('click', rightClick2);

function rightClick2(){
    
    scrollerTwo.scrollLeft += 501;

}



leftButtonTwo.addEventListener('click', leftClick2);

function leftClick2(){
    scrollerTwo.scrollLeft -= 501;
    
}



rightButtonThree.addEventListener('click', rightClick3);

function rightClick3(){
    
    scrollerThree.scrollLeft += 501;
}

leftButtonThree.addEventListener('click', leftClick3);

function leftClick3(){
    scrollerThree.scrollLeft -= 501;
    
}





searchInpunt.addEventListener('click', searchBarClick);

function searchBarClick(){

    searchBar.style.display='block';
    searchBar.style.width='100%'
    mainCover.style.display='block';

    mainCover.onclick=function(){
        searchBar.style.display='none';
        mainCover.style.display='none';
    }

    

    let close = document.querySelector('#close p');

    close.addEventListener('click', myClose);

    /*if(main.onclick){
        searchBar.style.display='none'
    }*/

    function myClose(){
        searchBar.style.display='none';
        console.log(close);

        mainCover.style.display='none';
    }
    
}







/*main.addEventListener('click', myClick);

function myClick(){
    document.location.reload();}*/
















