# numeros_primos
 Test numeros primos nodejs
 
 ### Pre-requisitos 📋
 
 _Se requiere la instalacion de node.js previamente para ejecutar comandos en consola_
 _En el caso de linux se requiere la instalacion de docker, nodejs y recuperar la imagen desde "akyro/num-primos:1.0"_


### Modo de ejecución ⚙️

_Dentro de la consola de comandos de windows escribir el siguiente comando_

```
c:\directorio-proyecto>node server.js
```
_En este punto queda corriendo un servicio en segundo plano en el puerto 3000 que recibe numeros en url_

_La manera de ingresar estos numeros en la url es la siguiente:_

```
localhost:3000/primos/[numero a ingresar]
```

### Ejecutando pruebas ⚙️

### Caso 1: numeros naturales

_Ingreso numero 2_

```
localhost:3000/primos/2
```
_Respuesta:_

```
[2,1]
```
_Ingreso numero 7_
```
localhost:3000/primos/7
```
_Respuesta:_

```
[7,5,3,2,1]
```
_Ingreso numero 15_

```
localhost:3000/primos/15
```
_Respuesta:_

```
[13,11,7,5,3,2,1]
```

### Caso 2: numeros decimales

_Ingreso numero 3.4_

```
localhost:3000/primos/3.4
```
_Respuesta:_

```
[3,2,1]
```
_Ingreso numero 6.9_

```
localhost:3000/primos/6.9
```
_Respuesta:_

```
[5,3,2,1]
```
_Ingreso numero 26.7_

```
localhost:3000/primos/26.7
```
_Respuesta:_

```
[23,19,17,13,11,7,5,3,2,1]
```

### Caso 3: Letras

_Ingreso Letra A_

```
localhost:3000/primos/A
```
_Respuesta:_

```
[Vacio]
```
_Ingreso Letras ASDF_

```
localhost:3000/primos/ASDF
```
_Respuesta:_

```
[Vacio]
```

### Caso 4

_Ingreso combinación de letras y numeros_

_Ingreso alfanumerico 2B_

```
localhost:3000/primos/2B
```
_Respuesta:_

```
[Vacio]
```
_Ingreso alfanumerico 34C_

```
localhost:3000/primos/34C
```
_Respuesta:_

```
[Vacio]
```

### Caso 5

_Ingreso URL sin argumento_

```
localhost:3000/primos/
```
_Respuesta:_

```
[Cannot GET /primos/]
```
