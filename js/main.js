const dropdown = document.getElementById('dropdown')

const option2 = document.createElement('option')
option2.textContent = 'Inicio'

const option3 = document.createElement('option')
option3.textContent = 'Nosotros'

const option4 = document.createElement('option')
option4.textContent = 'Portafolio'

const option5 = document.createElement('option')
option5.textContent = 'Contactanos'

dropdown.addEventListener('mouseover', () =>{    
    dropdown.appendChild(option2)
    dropdown.appendChild(option3)
    dropdown.appendChild(option4)
    dropdown.appendChild(option5)

    dropdown.setAttribute('size', 5)
    
})


dropdown.addEventListener('mouseout', ()=>{
    dropdown.removeChild(option2)
    dropdown.removeChild(option3)
    dropdown.removeChild(option4)
    dropdown.removeChild(option5)

    dropdown.setAttribute('size', 1)

})


