



const adding = () =>{
    let input = document.querySelector('#inputs').value,
     les = document.querySelector('.list-item'),
     linod = document.createElement('li'),
     val = document.createTextNode(input);

     linod.appendChild(val);
     les.appendChild(linod)

}
