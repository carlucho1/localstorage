// Pongo un item en el local storage caracterizado por una clave ('pollo') y un valor ('picante')
// NOTA: siempre el valor de la llave debe ser un string, por lo tanto si el valor es un objeto deberá expresarse como un JSON
localStorage.setItem('pollo', 'picante')

// Obtengo el valor del elemento cuya clave es 'pollo' en el localstorage
let pollo = localStorage.getItem('pollo');
console.log(pollo); // Devuelve ===> 'picante'

// Repito pero para un objeto (este objeto representa un producto por ejemplo, que luego almacenaremos en un carrito)
let auto = {
    marca: "Fiat",
    color: "rojo",
    precio: 19000,
    año: 2024
}

localStorage.setItem('carrito', JSON.stringify(auto)) //con el método stringify lo convierto a texto

let carrito = localStorage.getItem('carrito')
console.log(carrito) // Imprime el JSON del objeto auto 

//Otro ejemplo

let Argentina = {
    capital: 'Buenos Aires',
    moneda: 'peso argentino',
    religion: 'catolica',
    superficie: 4205723,
    gobierno: 'democracia'
}

localStorage.setItem('pais', JSON.stringify(Argentina))
let pais = localStorage.getItem('pais')
console.log(JSON.parse(pais))

// Borrado de un item del localstorage
localStorage.removeItem('pollo')
let nuevoPollo= localStorage.getItem('pollo')
console.log(nuevoPollo)