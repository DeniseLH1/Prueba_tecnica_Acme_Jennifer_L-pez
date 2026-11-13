export class Empleado{
    constructor(dpi,nombre,apellido,genero,email,telefono,direccion,ciudad,cargo,profesion, salario){
        this.id = crypto.randomUUID()
        this.dpi=dpi;
        this.nombre= nombre;
        this.apellido= apellido;
        this.genero = genero;
        this.email=email;
        this.telefono=telefono;
        this.direccion=direccion;
        this.ciudad=ciudad;
        this.profesion= profesion;
        this.cargo=cargo;
        this.salario=Number(salario);
        this.datosobligatorios();
    }
    datosobligatorios(){
        if (!this.nombre || this.nombre.trim() === '' || !this.apellido || this.apellido.trim() === '') {
            throw new Error('El nombre no puede estar vacío');
        }
        if (!this.apellido || this.apellido.trim() === '') {
            throw new Error('El apellido no puede estar vacío');
        }
        if (!['M','F','O'].includes(this.genero)){
            throw new Error ('Los genéros permitidos son M, F u O');
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
            throw new Error("El email no tiene un formato valido.");
        }
        if (!this.direccion || this.direccion.trim() === '' ){
            throw new Error('La direccion es obligatorio');
        }
        if (!this.ciudad || this.ciudad.trim()=== ''){
            throw new Error('La ciudad es un campo obligatorio')
        }
        if (!this.profesion || this.profesion.trim() === ''){
            throw new Error('La profesion es un campo obligatorio')
        }
        if (!this.cargo || this.cargo.trim() === ''){
            throw new Error('El cargo es un campo obligatorio')
        }
        if (isNaN(this.salario) || this.salario <= 0) {
            throw new Error('El salario debe ser un valor mayor a 0.');
        }
    }
}