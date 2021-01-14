
const OpenChanger = document.querySelector('.icon-container')
const CloseChanger = document.querySelector('#icon')
const MenuContainer = document.querySelector('.hide')
const para = document.querySelector('main')

CloseChanger.addEventListener('click', () =>{z
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




const iconTrigger = document.querySelector('#iconTrigger')
const icon = document.querySelector('#icon')
const MenuContainer = document.querySelector('.Navigators')

iconTrigger.addEventListener('click', () =>{
    if(icon.classList.contains('fa-bars')){

        icon.classList.remove('fa-bars')
        icon.classList.add('fa-close')

        // Navigator
        MenuContainer.classList.remove('hide')
        MenuContainer.classList.add('show')

    }else{
        icon.classList.add('fa-bars')
        icon.classList.remove('fa-close')

        // Navigator
       MenuContainer.classList.remove('show')
       MenuContainer.classList.add('hide')

    }

})

