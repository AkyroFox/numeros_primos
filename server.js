const express = require('express');
const app = express();
const port = 3000;



app.get('/primos/:num1', function(request, response) {
  num1 = request.params.num1;
  var primos =[];
  let pagina='<!doctype html><html><head></head><body>';
  primos = numerosPrimos(num1);
  pagina += `${primos} <br>`;
  pagina += '</body></html>';
  response.send(pagina);
  //response.send('<h1>El contacto soy yo</h1>' + result);
})
//numero de entrada
function numerosPrimos(solic1)
{

   //declaracion de variables
   var solic = solic1;
   var j = 1;
   const numerosPrimos = [];

   //se llena el array con numeros
   for (; j <= solic; j++)
   {
       if (primo(j))
       {
           numerosPrimos.push(j);
       }

   }

   //se da vuelta el array lleno y se imprime
   const reversed = numerosPrimos.reverse();
   console.log(reversed);

   return reversed;

   //Función para extraer numeros primos del array
   function primo(numero)
   {
       for (var i = 2; i < numero; i++)
       {
           if (numero % i === 0)
           {
           return false;
           }
       }
       return numero ;
   }
}

//para escuchar el puerto 3000 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})