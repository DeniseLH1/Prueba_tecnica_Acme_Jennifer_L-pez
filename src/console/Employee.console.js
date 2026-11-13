import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { ServicioEmpleados} from '../services/Employee.service.js';

export class ConsoleUI {
    constructor() {
        this.manager = new ServicioEmpleados();
        this.rl = readline.createInterface({ input, output });
    }

    async iniciar() {
        let salir = false;
        while (!salir) {
            console.log('\n=============================================');
            console.log('      BIENVENIDO AL SISTEMA DE GESTIÓN DE EMPLEADOS       ');
            console.log('=============================================');
            console.log('1. Registrar empleado');
            console.log('2. Listar empleados');
            console.log('3. Buscar empleado por DPI');
            console.log('4. Actualizar empleado por ID único');
            console.log('5. Eliminar empleado por ID único');
            console.log('6. Salir');
            console.log('---------------------------------------------');

            const opcion = await this.rl.question('Seleccione una opción: ');

            try {
                switch (opcion.trim()) {
                    case '1':
                        await this.menuRegistrar();
                        break;
                    case '2':
                        this.menuListar();
                        break;
                    case '3':
                        await this.menuBuscar();
                        break;
                    case '4':
                        await this.menuActualizar();
                        break;
                    case '5':
                        await this.menuEliminar();
                        break;
                    case '6':
                        console.log('\n¡Gracias por usar el sistema!');
                        salir = true;
                        break;
                    default:
                        console.log('\nOpción no válida.');
                }
            } catch (error) {
                console.log(`\n Error: ${error.message}`);
            }
        }
        this.rl.close();
    }

    async menuRegistrar() {
        console.log('\n--- Registrar Nuevo Empleado ---');
        const dpi = await this.rl.question('Identificación (DPI): ');
        const nombre = await this.rl.question('Nombres: ');
        const apellido = await this.rl.question('Apellidos: ');
        const genero = await this.rl.question('Género (M/F/O): ');
        const email = await this.rl.question('Email: ');
        const telefono = await this.rl.question('Teléfono: ');
        const direccion = await this.rl.question('Dirección: ');
        const ciudad = await this.rl.question('Ciudad de residencia: ');
        const profesion =  await this.rl.question('Profesion: ');
        const cargo = await this.rl.question('Cargo: ');
        const salario = await this.rl.question('Salario: ');

        const nuevo = this.manager.crearEmpleado({
            dpi, nombre, apellido, genero, email, telefono, direccion, ciudad, cargo, salario
        });

        console.log(`\n ¡Empleado registrado con éxito! ID Único: ${nuevo.id}`);
    }

    menuListar() {
        console.log('\n--- Lista de Empleados Registrados ---');
        const empleados = this.manager.listarEmpleados();
        if (empleados.length === 0) {
            console.log('No hay empleados registrados');
            return;
        }

        empleados.forEach((emp, index) => {
            console.log(`\n[${index + 1}] ID Único: ${emp.id}`);
            console.log(`    DPI: ${emp.dpi} | Nombre: ${emp.nombre} ${emp.apellido} (${emp.genero})`);
            console.log(`    Contacto: ${emp.email} - Tel: ${emp.telefono}`);
            console.log(`    Ubicación: ${emp.ciudad}, ${emp.direccion}`);
            console.log(`    Puesto: ${emp.profesion} | Cargo: ${emp.cargo} | Salario: $${emp.salario}`);
        });
    }

    async menuBuscar() {
        console.log('\n--- Buscar Empleado por DPI ---');
        const dpi = await this.rl.question('Ingrese el DPI a buscar: ');
        const emp = this.manager.buscarPorDpi(dpi);

        console.log('\n Empleado encontrado:');
        console.log(`- ID Único: ${emp.id}`);
        console.log(`- DPI: ${emp.dpi}`);
        console.log(`- Nombre Completo: ${emp.nombre} ${emp.apellido}`);
        console.log(`- Género: ${emp.genero}`);
        console.log(`- Contacto: ${emp.email} | Tel: ${emp.telefono}`);
        console.log(`- Dirección: ${emp.ciudad} - ${emp.direccion}`);
        console.log(`- Profesión/Cargo: ${emp.profesion} / ${emp.cargo}`);
        console.log(`- Salario: $${emp.salario}`);
    }

    async menuActualizar() {
        console.log('\n--- Actualizar Empleado por ID ---');
        const id = await this.rl.question('Ingrese el ID del empleado: ');
        
        console.log('Presione Enter en los campos que nO desee modificar');
        const dpi = await this.rl.question('Nueva Identificación (DPI): ');
        const nombre = await this.rl.question('Nuevo Nombre: ');
        const apellido = await this.rl.question('Nuevo Apellido: ');
        const genero = await this.rl.question('Nuevo Género (M/F/O): ');
        const email = await this.rl.question('Nuevo Email: ');
        const telefono = await this.rl.question('Nuevo Teléfono: ');
        const direccion = await this.rl.question('Nueva Dirección: ');
        const ciudad = await this.rl.question('Nueva Ciudad: ');
        const profesion = await this.rl.question('Nueva Profesión: ');
        const cargo = await this.rl.question('Nuevo Cargo: ');
        const salario = await this.rl.question('Nuevo Salario: ');

        const actualizado = this.manager.actualizarEmpleado(id, {
            dpi, nombre, apellido, genero, email, telefono, direccion, ciudad, profesion, cargo, salario
        });

        console.log(`\n¡Empleado con ID ${actualizado.id} actualizado exitosamente!`);
    }

    async menuEliminar() {
        console.log('\n--- Eliminar Empleado por ID Único ---');
        const id = await this.rl.question('Ingrese el ID Único del empleado a eliminar: ');
        const eliminado = this.manager.eliminarEmpleado(id);
        console.log(`\nEmpleado ${eliminado.nombre} ${eliminado.apellido} eliminado correctamente.`);
    }
}