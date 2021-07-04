let btnOpen = document.querySelector('#open');
let btnClose = document.querySelector('#close');


let myTab;

myTab = window.open('https://www.google.com', '_blank');
btnOpen.addEventListener('click', (ev)=>{
    myTab = window.open('https://www.google.com', '_blank', 'height=500,width=500');

    setTimeout(() => {
        if(myTab) myTab.close();
    }, 3000);
});


btnClose.addEventListener('click', ()=>{
    if(myTab) myTab.close();
});