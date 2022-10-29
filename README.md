## _Proyecto de Ecommerce_


## Tecnologías

- [ReactJS] - FrontEnd
- [FireBase] - BackEnd

## Librerías

- [react-router-dom] - Navegacion
- [SweetAlert2] - Mensajes de la Aplicación
- [Sass] - Estilizar componentes
- [firebase] - Manejar los datos de la app

## Estructura

| Carpeta | Descripcion |
| ------ | ------ |
| components | Se encuentran todos los componentes que interactuan en la app |
| helpers | Funciones que cumplen tareas especificas |
| context | Informacion que es proveida a todo la app |
| Router | Navegacion de la app |
| Services | Configuracion de la api, y funciones para obtener datos  |
| hooks | Custom Hooks |


## Instalación

1-Clonar Repositorio

```sh
 git clone Link del Repositorio
```

2-Instalar dependencias

```sh
 npm install
```

3-Configuración de firebase

```sh
 copiar las credenciales del proyecto firebase en la raiz del proyecto con extension .env
```

4-Si no tiene acesso a las credenciales, construir su propio proyecto en firebase

```sh
 La estructura del proyecto Es:
 
 1 Tabla products con las siguientes propiedades:
    Id autogenerado,
    category: text,
    descripcion: text,
    img: text,
    name:text,
    price:number,
    stock:number
```
5 - Ejecutar el proyecto

```sh
 npm starrt
```