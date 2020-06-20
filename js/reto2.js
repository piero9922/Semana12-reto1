const contenido = document.getElementById('contenido')
const lectura1 = document.getElementById('lec1') 
const lectura2 = document.getElementById('lec2') 
const lectura3 = document.getElementById('lec3') 
const p = document.createElement('p')


lectura1.addEventListener('click', ()=>{
    
    if(p.textContent !== ''){
        // contenido.removeChild(p)
        p.textContent = ''
    }else{
        p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitmagni, libero adipisci reiciendis exercitationem officia, necessitatibus neque eum id, dolorem alias doloribus dignissimos commodi iusto placeat architecto ipsam culpa nihil0'

    }
    contenido.appendChild(p)

})

lectura2.addEventListener('click', ()=>{

    if(p.textContent !== ''){
        // contenido.removeChild(p)
        p.textContent = ''
    }else{
        p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitmagni, libero adipisci reiciendis exercitationem officia, necessitatibus neque eum id, dolorem alias doloribus dignissimos commodi iusto placeat architecto ipsam culpa nihil0'

    }
    contenido2.appendChild(p)})

lectura3.addEventListener('click', ()=>{  

    if(p.textContent !== ''){
        // contenido.removeChild(p)
        p.textContent = ''
    }else{
        p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitmagni, libero adipisci reiciendis exercitationem officia, necessitatibus neque eum id, dolorem alias doloribus dignissimos commodi iusto placeat architecto ipsam culpa nihil0'

    }
    contenido3.appendChild(p)})
  
