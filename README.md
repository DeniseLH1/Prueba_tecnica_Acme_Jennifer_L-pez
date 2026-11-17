# Sistema de Gestión de Empleados (Empresa ACME)

Aplicación de consola desarrollada en Node.js que permite gestionar la lista de empleados de la empresa. 

##  Estructura del Proyecto

El proyecto está organizado bajo una **Arquitectura en Capas** para separar responsabilidades (Separation of Concerns):

```text
├── src/
│   ├── console/
│   │   └── Employee.console.js   # Capa de presentación (Menú interactivo e interfaz de usuario)
│   ├── models/
│   │   └── Employee.js           # Capa de datos/entidad (Estructura y validación de reglas de negocio)
│   └── services/
│       └── Employee.service.js   # Capa de lógica de negocio (CRUD y gestión del arreglo en memoria)
├── index.js                      # Punto de entrada (Bootstrap) de la aplicación
├── package.json                  # Dependencias y configuración del entorno (ES Modules)
└── README.md                     # Documentación del proyecto
 ```

## Guía de Instalación y Ejecución
​Sigue estos pasos en tu terminal para clonar y poner en marcha la aplicación en tu equipo local:
​1. Clonar el repositorio
​Abre tu terminal y ejecuta el siguiente comando para clonar el proyecto:

```text
git clone 
```
2. Entrar al directorio del proyecto
​Navega a la carpeta recién clonada:
```text
cd Proyecto_Acme_Jennifer_L-pez
```
3. Instalar dependencias
​Instala los paquetes necesarios :
```text
npm install
```
4. Ejecutar la aplicación
​Inicia la consola interactiva ejecutando el punto de entrada principal:
```text
node index.js
```
