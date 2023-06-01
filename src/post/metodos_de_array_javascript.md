<h1 style="font-size: 45px">
  🤓  Metodos de array Javascript
</h1>

<p>
Miércoles 31 de Mayo 2023, Santa Barbára Chile
</p>

<h4>Algunos metodos de array para javascript no estan todos</h4>
***

# 1): .map(): —>

El metodo map nos permite recorrer un array para poder devolver un nuevo array y modificar sus valores.

### Ejemplo —> .map():

<Code language="javascript">
const array = [1,2,3,4,5]
array.map((e) => {
    console.log(e + 10) // 10, 12, 13, 14, 15....
})
</Code>

# 2): .filter(): —>

El metodo filter nos permite recorrer un array y retornar un nuevo array con los elementos que pasen por una determinada condición.

### Ejemplo —> .filter():

<Code language="javascript">
const filterArray = [1,10,5,50,30]
const resultArr = filterArray.filter(e => e >= 10)
console.log(resultArr) 
</Code>

# 3):.forEach(): —>

El metodo forEach nos permite recorrer un array el cual recibira un callback con dos parametros el elemento el cual esta iterando y su indice.

### Ejemplo —> .forEach():

<Code language="javascript">
const fruits = ['manzana', 'naranja', 'sandia', 'melón']
fruits.forEach((element, i) => {
    console.log('la fruta'+ element + 'esta en el lugar número' + i)
})
</Code>

# 4):.find(): —>

El metodo find retorna la primara coincidencia que cumpla la condición que se le paso.

### Ejemplo —> .find():

<Code language="javascript">
const numbers = [1,2,3,4,5,6]
const result = numbers.find(e => e === 6)
console.log(result)
</Code>
