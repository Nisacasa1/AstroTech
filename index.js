const fechaHoy = new Date();
const opciones = {day: '2-digit', month: '2-digit', year: 'numeric'}
document.getElementById('fecha').textContent=fechaHoy.toLocaleDateString('es-Es', opciones)

let vuelos = JSON.parse(localStorage.getItem('vuelos')||[])

function guardarVuelos(){
    localStorage.setItem('vuelos', JSON.stringify(vuelos))
}

function mostrarVuelos(){
    const lista = document.getElementById('listaVuelos')
    lista.innerHTML = '';
    vuelos.forEach(vuelo => {
        const div = document.createElement('div')
        div.className = 'card';
        div.innerHTML = `
        <span> Numero :${vuelo.numero} - Destino : ${vuelo.destino} -Estado: ${vuelo.estado}
        <div class="actions">
                <button onClick="editarVuelo(${index})"><i class="fa-solid fa-pencil"></i></button>
                <button onClick="eliminarVuelo(${index})"><i class="fa-solid fa-trash"></i></button>
                <button onClick="cambiarEstado(${index})"><i class="fa-solid fa-rotate"></i></button>
        </div>
        `

        lista.appendChild(div);
    });
}