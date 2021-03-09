# numeros_primos
 Test numeros primos nodejs
 
 ### Pre-requisitos 📋
 
 _Se requiere la instalacion de node.js previamente para ejecutar comandos en consola_

### Modo de ejecución ⚙️

_Dentro de la consola de comandos de windows escribir el siguiente comando_

```
c:\directorio-proyecto>node server.js
```
_En este punto queda corriendo un servicio en segundo plano en el puerto 3000 que recibe numeros como argumento en la url_

_La manera de ingresar estos numeros como comando en la url es la siguiente:_

```
curl localhost:3000/primos/[numero a ingresar]
```

### Ejecutando pruebas ⚙️

### Caso 1: numeros naturales

_1.1-Ingreso numero 2_

```
curl localhost:3000/primos/2
```
_Respuesta:_

```
[2,1]
```

_1.2-Ingreso numero 7_

```
curl localhost:3000/primos/7
```

_Respuesta:_

```
[7,5,3,2,1]
```

_1.3-Ingreso numero 15_

```
curl localhost:3000/primos/15
```

_Respuesta:_

```
[13,11,7,5,3,2,1]
```

_1.4-Ingreso numero 0_

```
curl localhost:3000/primos/0
```

_Respuesta:_

```
[Vacio]
```

### Caso 2: numeros decimales

_2.1-Ingreso numero 3.4_

```
curl localhost:3000/primos/3.4
```

_Respuesta:_

```
[3,2,1]
```

_2.2-Ingreso numero 6.9_


```
curl localhost:3000/primos/6.9
```

_Respuesta:_

```
[5,3,2,1]
```

_2.3-Ingreso numero 26.7_

```
curl localhost:3000/primos/26.7
```

_Respuesta:_

```
[23,19,17,13,11,7,5,3,2,1]
```

### Caso 3: Letras

_3.1-Ingreso Letra A_

```
curl localhost:3000/primos/A
```

_Respuesta:_

```
[Vacio]
```

_3.2-Ingreso Letras ASDF_

```
curl localhost:3000/primos/ASDF
```

_Respuesta:_

```
[Vacio]
```

### Caso 4 combinación de letras y numeros

_4.1-Ingreso alfanumerico 2B_

```
curl localhost:3000/primos/2B
```

_Respuesta:_

```
[Vacio]
```

_4.2-Ingreso alfanumerico 34C_

```
curl localhost:3000/primos/34C
```

_Respuesta:_

```
[Vacio]
```

### Caso 5

_5.1-Ingreso URL sin argumento_

```
curl localhost:3000/primos/
```

_Respuesta:_

```
[Cannot GET /primos/]
```


# Docker num_primos

### Pre-requisitos 📋
 
_Se requiere la instalacion de docker, nodejs y recuperar la imagen desde "akyro/num-primos:1.0"_
 
### Subir el contenedor Docker de la aplicación.

_Esta se sube al port 80 del servidor y al port 3000 del contenedor._

 ```
 docker run --name numprimos -d -p 80:3000 num-primos:1.0
 ```
 
_Se verifica que el contenedor está corriendo ingresando a él._
 
```
docker exec -ti numprimos bash
```

```
root@cabda603a2d0:/# ip addr
```

_Respuesta:_

```
root@cabda603a2d0:/# ip addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
14: eth0@if15: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default
    link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 172.17.0.2/16 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:acff:fe11:2/64 scope link
       valid_lft forever preferred_lft forever

```

_Una vez fuera de el contenedor ejecutamos un comando curl con parametros para que nos devuelva numeros primos_

```
[root@control-plane primos]# curl -get localhost/primos/76
```
 
 _Respuesta:_

```
<!doctype html><html><head></head><body>73,71,67,61,59,53,47,43,41,37,31,29,23,19,17,13,11,7,5,3,2,1 <br></body></html>
```
 
 
 
 
 
