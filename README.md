# Instrucciones iniciales para ejecutar un proyecto con TypeScript
- Se debe tener instalado ```npm i typescript -g```
- Para ejecutar un script de TS y traspilarlo/Compilarlo a JS se ejecuta desde consola el comando ```tsc salida.ts -w```
---
- Si no se desea compilar a JS y ejecutar TS directamente, se puede hacer instalando este paquete: ```npm install --save-dev ts-node typescript```
  -  ```ts-node```: Facilita la ejecución directa de código TypeScript en entornos de desarrollo.
  -  ```typescript```: Compila el código TypeScript en JavaScript para su distribución y ejecución en entornos reales.
- Y en la seccion de scripts del *package.json* se deben agregar los nombres de los archivos que se desea ejecutar, ejemplo:
```
"scripts": {
    "calculator": "ts-node calculator.ts",
    "run:multiplier": "ts-node multiplier.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ```
- Y finalmente desde consola se puede ejecutar con el siguiente comando: ```npm run run:multiplier```
