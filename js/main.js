const dropdown = document.getElementById('dropdown')

window.addEventListener('load', () =>{    
    
    const option2 = document.createElement('option')
    option2.textContent = 'Inicio'

    const option3 = document.createElement('option')
    option3.textContent = 'Nosotros'

    const option4 = document.createElement('option')
    option4.textContent = 'Portafolio'

    const option5 = document.createElement('option')
    option5.textContent = 'Contactanos'

    dropdown.appendChild(option2)
    dropdown.appendChild(option3)
    dropdown.appendChild(option4)
    dropdown.appendChild(option5)
    
})


dropdown.addEventListener('mouseenter', ()=>{
    
})


