# Ionic-React

Para ejecutar el proyecto:
1. Ubícate en la carpeta principal en la misma ruta donde se encuentre el archivo package.json (esto lo puedes hacer con cd para navegar en carpetas y ls para verificar los archivos en la carpeta que te encuentras) 
2. Ejecuta el comando npm i
3. Ejecuta el comando ionic serve (Debes tener instalado ionic)
4. El proyecto normalmente se abrirá en un navegador en el puerto indicado en la terminal, en caso que no se ejecute, puedes copiar y pegar esta url en el navegador

Consideraciones:
- Para el proyecto se realizó una arquitectura MVC (Modelo - Vista - Controlador) 
- Para manejar el estado de los productos deseados por el usuario, se hizo inicialmente un hook, el cual contenía toda la lógica y se podía utilizar en diferentes componentes, teniendo así un estado global en la app, sin embargo, no se actualizaba correctamente, por lo tanto, se utilizó useContext de react para tener el estado global. También se puede implementar redux para un mejor manejo de estados globales y así conservar la arquitectura MVC, sin embargo, en este proyecto no se implementó por tiempo y se decidió realizar con hook.
- Se implementaron estilos de css básicos y se utilizaron componentes nativos de ionic para un mejor rendimiento y tener diseños responsive que se ajusten a diferentes pantallas.
