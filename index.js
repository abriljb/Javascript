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