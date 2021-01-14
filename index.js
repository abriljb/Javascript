const OpenChanger = document.querySelector('.icon-container')
const CloseChanger = document.querySelector('#icon')
const MenuContainer = document.querySelector('.hide')
const para = document.querySelector('main')

CloseChanger.addEventListener('click', () =>{
    if(CloseChanger.classList.contains('fa-bars')){
        CloseChanger.classList.remove('fa-bars')
        CloseChanger.classList.add('fa-close')
        MenuContainer.classList.remove('hide')
        MenuContainer.classList.add('show')
    }else{
        CloseChanger.classList.add('fa-bars')
        CloseChanger.classList.remove('fa-close')
        MenuContainer.classList.add('hide')
        MenuContainer.classList.remove ('show')
    }
    
})

const OpenClose = () =>{
    
    document.querySelector('#door').src="img/Opendoor.png";
    document.querySelector('#statusdoor').innerHTML="This is a Opendoor";
}

const CloseOpen = () =>{
    document.querySelector('#door').src="img/Closedoor.png";
    document.querySelector('#statusdoor').innerHTML="This is a Closedoor";

}
const numberuno = document.querySelector('#numone')
const numberpangalawa = document.querySelector('#numtwo')
let pare = 0


const yow = () =>{
    
   pare = Number(numberuno.value) + Number(numberpangalawa.value) 

   alert(pare)
}



