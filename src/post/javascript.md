
<h1 style="font-size: 45px">Tipos de variables Javascript</h1>

<p style="font-size: 12px;">31 de Mayo 2023 Santa Bárbara Chile</p>

## ¿Que tipos de variables existen en Javascript?: 

<p>
En javascript existen 3 tipos de variables las cuales son las siguientes.
</p>

* var.
* let.
* const.

## 1) var:
<p>
Las variables de tipo var se caracterizan por ser accesibles desde todo nuestro codigo osea son variables globales.
</p>
<Code language="javascript">
var holaMundo = "Hola mundo"
</Code>
## 2) let:
<p>
Las variables de tipo let solo seran accesibles dentro de su scope con esto nos referimos a que si nuestra variable se ha definido dentro de una función esta solo sera accesible para esta función si intentamos acceder desde fuera sera como si esta variable nunca haya existido.
</p>
<Code language="javascript">
const function = () => {
    // Accesible solo dentro de la función.
    let saludo = "Hola esto es un saludo"
    console.log(saludo)
}

console.log(saludo) // => no es accesible.
</Code>
## 3) const:
<p>
Las constantes son variables las cuales son constantes ya que perduran en el tiempo y no puede modificarse su valor son inmutables.
</p>
<Code language="javascript">
const saludo = "Hola"
saludo = 123 // no admitido 
</Code>