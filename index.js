const fechaHoy = new Date();
const opciones = { day: '2-digit', month: '2-digit', year: 'numeric' };
document.getElementById('fecha').textContent = fechaHoy.toLocaleDateString('es-ES', opciones);

// MISIONES
let misiones = JSON.parse(localStorage.getItem('misiones')) || [];

function guardarMisiones() {
    localStorage.setItem('misiones', JSON.stringify(misiones));
}

function mostrarMisiones() {
    const lista = document.getElementById('listamisiones');
    lista.innerHTML = '';
    misiones.forEach((mision, index) => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <span>${mision.nombre} - ${mision.objetivo} - Estado: ${mision.estado}</span>
            <div class="actions">
                <button onclick="editarMision(${index})"><i class="fa-solid fa-pencil"></i></button>
                <button onclick="eliminarMision(${index})"><i class="fa-solid fa-trash"></i></button>
                <button onclick="cambiarEstado(${index})"><i class="fa-solid fa-rotate"></i></button>
            </div>
        `;
        lista.appendChild(div);
    });
}

function agregarMision() {
    const nombre = document.getElementById('nombreMision').value.trim();
    const objetivo = document.getElementById('objetivoMision').value.trim();

    if (nombre && objetivo) {
        misiones.push({nombre, objetivo, estado: 'Pendiente' });
        guardarMisiones();
        mostrarMisiones();
        document.getElementById('nombreMision').value = "";
        document.getElementById('objetivoMision').value = "";
    }
}

function editarMision(index) {
    const mision = misiones[index];
    const nuevoNombre = prompt('Nuevo nombre de la misión:', mision.nombre);
    const nuevoObjetivo = prompt('Nuevo objetivo:', mision.objetivo);

    if (nuevoNombre && nuevoObjetivo) {
        misiones[index].nombre = nuevoNombre;
        misiones[index].objetivo = nuevoObjetivo;
        guardarMisiones();
        mostrarMisiones();
    }
}

function eliminarMision(index) {
    if (confirm('Desea eliminar esta misión?')) {
        misiones.splice(index, 1);
        guardarMisiones();
        mostrarMisiones();
    }
}

function cambiarEstado(index) {
    const estados = ['No iniciada', 'En curso', 'Completada'];
    const estadoActual = misiones[index].estado;
    const nuevoEstado = estados[(estados.indexOf(estadoActual) + 1) % estados.length];
    misiones[index].estado = nuevoEstado;
    guardarMisiones();
    mostrarMisiones();
}

// VEHÍCULOS
let vehiculos = JSON.parse(localStorage.getItem('vehiculos')) || [];

function guardarVehiculos() {
    localStorage.setItem('vehiculos', JSON.stringify(vehiculos));
}

function mostrarVehiculos() {
    const lista = document.getElementById('listavehiculos');
    lista.innerHTML = '';

    vehiculos.forEach((vehiculo, index) => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <span>${vehiculo.nombre} - ${vehiculo.tipo} - Estado: ${vehiculo.estado}</span>
            <div class="actions">
                <button onclick="editarVehiculo(${index})"><i class="fa-solid fa-pencil"></i></button>
                <button onclick="eliminarVehiculo(${index})"><i class="fa-solid fa-trash"></i></button>
                <button onclick="cambiarEstadoVehiculo(${index})"><i class="fa-solid fa-rotate"></i></button>
            </div>
        `;
        lista.appendChild(div);
    });
}

function agregarVehiculo() {
    const nombreV = document.getElementById('nombreVehiculo').value.trim();
    const tipoV = document.getElementById('tipoVehiculo').value.trim();

    if (nombreV && tipoV) {
        vehiculos.push({ nombre: nombreV, tipo: tipoV, estado: 'Activo' });
        guardarVehiculos();
        mostrarVehiculos();
        document.getElementById('nombreVehiculo').value = "";
        document.getElementById('tipoVehiculo').value = "";
    }
}

function editarVehiculo(index) {
    const vehiculo = vehiculos[index];
    const nuevoNombre = prompt('Nuevo nombre del vehículo:', vehiculo.nombre);
    const nuevoTipo = prompt('Nuevo tipo:', vehiculo.tipo);

    if (nuevoNombre && nuevoTipo) {
        vehiculos[index].nombre = nuevoNombre;
        vehiculos[index].tipo = nuevoTipo;
        guardarVehiculos();
        mostrarVehiculos();
    }
}

function eliminarVehiculo(index) {
    if (confirm('Desea eliminar este vehículo?')) {
        vehiculos.splice(index, 1);
        guardarVehiculos();
        mostrarVehiculos();
    }
}

function cambiarEstadoVehiculo(index) {
    const estados = ['Activo', 'En mantenimiento', 'Retirado'];
    const estadoActual = vehiculos[index].estado;
    const nuevoEstado = estados[(estados.indexOf(estadoActual) + 1) % estados.length];
    vehiculos[index].estado = nuevoEstado;
    guardarVehiculos();
    mostrarVehiculos();
}
