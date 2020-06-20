const boton1 = document.getElementById('boton1')
const boton2 = document.getElementById('boton2')
const boton3 = document.getElementById('boton3')

const addItems = (car1,comprasCarrito,content) =>{
    const h4 = document.createElement('h4')
    h4.textContent = content
    
    const p = document.createElement('p')
    p.textContent = 'Agregado'    
    
    const eliminar = document.createElement('button')
    eliminar.textContent = 'x'
    eliminar.addEventListener('click', ()=>{
        comprasCarrito.removeChild(car1)
    })
    
    car1.appendChild(h4)
    car1.appendChild(p)
    car1.appendChild(eliminar)
}



boton1.addEventListener('click', (e) =>{
    e.preventDefault();
    const car1 = document.createElement('div')
    car1.classList.add('car1')
    
    const comprasCarrito = document.getElementById('compras-carrito')
    comprasCarrito.appendChild(car1)

    const content = 'HTML'
        
        addItems(car1,comprasCarrito,content);
        
})

boton2.addEventListener('click', (e) =>{
    e.preventDefault();
    const car1 = document.createElement('div')
        car1.classList.add('car1')
    
    const comprasCarrito = document.getElementById('compras-carrito')
    comprasCarrito.appendChild(car1)
        
    const content = 'CSS'
    
    addItems(car1,comprasCarrito,content);
        
})

boton3.addEventListener('click', (e) =>{
    e.preventDefault();
    const car1 = document.createElement('div')
        car1.classList.add('car1')
    
    const comprasCarrito = document.getElementById('compras-carrito')
    comprasCarrito.appendChild(car1)
        
    const content = 'JS'
    
    addItems(car1,comprasCarrito,content);
        
})


