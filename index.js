const fechaHoy = new Date();
const opciones = {day: '2-digit', month: '2-digit', year: 'numeric'}
document.getElementById('fecha').textContent=fechaHoy.toLocaleDateString('es-Es', opciones)

// Misiones
let misiones = JSON.parse(localStorage.getItem('misiones')||[])

function guardarmisiones(){
    localStorage.setItem('misiones', JSON.stringify(misiones))
}

function mostrarmisiones(){
    const lista = document.getElementById('listamisiones')
    lista.innerHTML = '';
    misiones.forEach(mision => {
        const div = document.createElement('div')
        div.className = 'card';
        div.innerHTML = `
        <span>${mision.nombre} - ${mision.objetivo} - Estado: ${mision.estado}</span>
            <div class="actions">
                <button title="editar(${index})"><i class="fa-solid fa-pencil"></i></button>
                <button title="eliminar(${index})"><i class="fa-solid fa-trash"></i></button>
                <button title="cambiarEstado(${index})"><i class="fa-solid fa-rotate"></i></button>
            </div>
        `

        lista.appendChild(div);
    });
}

// Vehículos
let vehiculos = JSON.parse(localStorage.getItem('vehiculos')||[])

function guardarvehiculos(){
    localStorage.setItem('vehiculos', JSON.stringify(vehiculos))
}

function mostrarvehiculos(){
    const lista = document.getElementById('listavehiculos')
    lista.innerHTML = '';
    vehiculos.forEach(vehiculo => {
        const div = document.createElement('div')
        div.className = 'card';
        div.innerHTML = `
        <span>${vehiculo.nombre} - ${vehiculo.tipo} - Matrícula: ${vehiculo.estado}</span>
            <div class="actions">
                <button title="editar(${index})"><i class="fa-solid fa-pencil"></i></button>
                <button title="eliminar(${index})"><i class="fa-solid fa-trash"></i></button>
                <button title="cambiarEstado(${index})"><i class="fa-solid fa-rotate"></i></button>
            </div>
        `

        lista.appendChild(div);
    });
}