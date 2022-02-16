USO DE HERRAMIENTAS PARA CREAR APLICACIONES CON REACT

existen varias, solo se necesita tener instalado NODE.Js para tener accesos a la librería NPM.
- CREATE REACT APP :
Herramienta que ultimamente ya no tiene tanto soporte.

- VITE : 
Herramienta creada por el creador de VueJS, pero soporta react, o angular, y otras herramientas.
Es la que usaremos mas.

- GATSBY.js:
Un poco mas avanzado que create react app, construye sitios web estáticos, es decir, consulta la base de datos y genera html ESTÁTICOS, haciendo que sea menos facil de hackear

- NextJS:
Este es muy bueno también y ha tomado mucha fuerza últimamente. Se puede usar para crear una tienda virtual también

- BlitzJS:

Remix Run

- Hiydrogen:
Es de Shopify, sirve para crear tiendas virtuales en ReactJS

## Empezando con vite:

```bash
 npm create vite@latest
```
- Poner el nombre del proyecto y de package (usualmente es el mismo)
```bash
Project name: ... viteProject
Package name: ... viteProject
```

- Seleccionar el framework (react) y la variante (react)

- Despues se corre el proyecto con:
```bash
npm run dev
```