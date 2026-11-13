import { Empleado } from '../models/Employee.js';

export class ServicioEmpleados{
    constructor() {
        this.empleados = [];
    }
    //Registra un empleado
    crearEmpleado(datos) {
        const { dpi, nombre, apellido, genero, email, telefono, direccion, ciudad, profesion, cargo, salario } = datos;

        // Valida que no halla otro empleado con el mismo DPI
        const empleadoExistente = this.empleados.find(emp => emp.dpi === dpi);
        if (empleadoExistente) {
            throw new Error(`El DPI: ${dpi} ya ha sido registrado introduzca otro DPI`);
        }

        const nuevoEmpleado = new Empleado(
            dpi, nombre, apellido, genero, email, telefono, direccion, ciudad,profesion, cargo, salario
        );

        this.empleados.push(nuevoEmpleado);
        return nuevoEmpleado;
    }

    // Lista los empleados registrados
    listarEmpleados() {
        return this.empleados;
    }

    // Buscar un empleado por su DPI
    buscarPorDpi(dpi) {
        const empleado = this.empleados.find(emp => emp.dpi === dpi);
        if (!empleado) {
            throw new Error(`No existe ningun empleado con la identificación: ${dpi}`);
        }
        return empleado;
    }

    // Actualizar un empleado por identificador único (id)
    actualizarEmpleado(id, nuevosDatos) {
        const index = this.empleados.findIndex(emp => emp.id === id);
        if (index === -1) {
            throw new Error('No se encontró ningun empleado con ese id');
        }

        const empleadoActual = this.empleados[index];
        const dpi = nuevosDatos.dpi || empleadoActual.dpi;
        const nombre = nuevosDatos.nombre || empleadoActual.nombre;
        const apellido = nuevosDatos.apellido || empleadoActual.apellido;
        const genero = nuevosDatos.genero || empleadoActual.genero;
        const email = nuevosDatos.email || empleadoActual.email;
        const telefono = nuevosDatos.telefono || empleadoActual.telefono;
        const direccion = nuevosDatos.direccion || empleadoActual.direccion;
        const ciudad = nuevosDatos.ciudad || empleadoActual.ciudad;
        const profesion = nuevosDatos.profesion || empleadoActual.profesion;
        const cargo = nuevosDatos.cargo || empleadoActual.cargo;
        const salario = nuevosDatos.salario !== undefined ? nuevosDatos.salario : empleadoActual.salario;

        // Valida los datos actualizados
        const empleadoActualizado = new Empleado(
            dpi, nombre, apellido, genero, email, telefono, direccion, ciudad, profesion, cargo, salario
        );

        empleadoActualizado.id = empleadoActual.id;
        this.empleados[index] = empleadoActualizado;

        return empleadoActualizado;
    }

    // Elimina a un empleado
    eliminarEmpleado(id) {
        const index = this.empleados.findIndex(emp => emp.id === id);
        if (index === -1) {
            throw new Error('No se encontró un empleado con ese id');
        }
        const [empleadoEliminado] = this.empleados.splice(index, 1);
        return empleadoEliminado;
    }
}