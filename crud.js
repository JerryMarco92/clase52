
//Convertir el JSON en un array de objetos:

let productosJSON = `
[
  { "id": 1, "nombre": "Notebook", "precio": 1200, "stock": 5 },
  { "id": 2, "nombre": "Mouse", "precio": 45, "stock": 20 },
  { "id": 3, "nombre": "Teclado", "precio": 90, "stock": 10 }
]`;


let productosArray = JSON.parse(productosJSON);

console.log(productosJSON, "Estos son en JSON");

console.log(productosArray, "Estos son en array");


/*Preguntas orientativas
¿Qué tipo de dato es productosJSON antes de usar JSON.parse()? una cadena de texto, string
¿Qué devuelve JSON.parse()? devuelve un array con objetos
¿Por qué necesitamos convertir el JSON? para poder manipular o iterar el contenido
*/



//Crear una función mostrar productos:


function mostrarProductos(obj) {
    let ul = document.createElement("ul");
    document.body.appendChild(ul);

    for (let item of obj) {

        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = `
        ${item.id} - ${item.nombre} - $${item.precio} - Stock: ${item.stock}

    
    `}
}

mostrarProductos(productosArray);

/*Preguntas orientativas
¿Qué estructura recorremos?recorremos un array con objetos
¿Qué representa cada objeto?cada objeto es un producto y sus caracteristicas 
¿Qué bucle conviene utilizar? el bucle for of permite reutilizar el codigo declarando solo la primera linea
*/


//Crear una función llamada agregar producto:

let boton = document.createElement("button");
document.body.appendChild(boton);
boton.innerText = "agregar";

let eliminar = document.createElement("button");
document.body.appendChild(eliminar);
eliminar.innerText = "eliminar por ID";

let editar = document.createElement("button");
document.body.appendChild(editar);
editar.innerText = "Editar";



boton.addEventListener("click", function () {

    let id = productosArray.length + 1;
    let nombre = prompt("nombre del producto");
    let precio = prompt("A que precio?");
    let stock = prompt("cuantos entran en stock?");

    let productoNuevo =
    {
        id,
        nombre,
        precio,
        stock
    };

    productosArray.push(productoNuevo);
    reseteo();

});


/*Preguntas orientativas
¿Qué método permite agregar elementos a un array ? push()
¿Qué representa el nuevo objeto ? el nuevo objeto es un producto nuevo y puede añadirse al array original
¿Dónde se guarda el nuevo producto ? se construye un objeto
*/

/*Parte 4 — Modificar producto
Crear una función llamada:
modificarProducto()


function(){

    var modificador = prompt("¿Indica que producto quieres modificarProducto, ingresa su ID");
    var itemModificador = prompt("Indica que quieres modificar: nombre, precio o stock?");

    for (let i = 0; i < productosArray.length; i++) {
        if (productosArray[i].id === modificador) {
            productosArray[i].itemModificador = prompt("Introduce el nuevo valor para " + itemModificador);

        }else{
            alert("El ID no coincide con ningun producto, intentelo de vuevo.");
            
        }
}
*/
editar.addEventListener("click", function () {

    let modificador = Number(prompt("Indica que producto quieres modificar, ingresa su ID:"));
    let itemModificador = prompt("Indica que quieres modificar: nombre, precio o stock");
    let valor;

    if (itemModificador === "precio" || itemModificador === "stock"){
        valor = Number(prompt("Introduce el nuevo valor para " + itemModificador));
    }else if(itemModificador === "nombre"){
        valor = prompt("Introduce el nuevo valor para " + itemModificador);
    }else{
        alert("Valor a modificar no encontrado");
        
    };

    for (let i = 0; i < productosArray.length; i++) {
        if (productosArray[i].id === modificador){
            productosArray[i][itemModificador] = valor;
            break;
        };
    
    }
reseteo();
});




   /* for (let i = 0; i < productosArray.length; i++) {
        if (productosArray[i].id === modificador){
            if (itemModificador === "precio" || itemModificador === "stock"){
                productosArray[i][itemModificador] = Number(prompt("Introduce el nuevo valor para " + itemModificador));
            }else{
            productosArray[i][itemModificador] = prompt("Introduce el nuevo valor para " + itemModificador);
            };

            break;

        } else {//esto esta mal
            alert("El ID no coincide con ningun producto, intentelo de nuevo.");

        }
    };

});*/



//Parte 5 — Eliminar producto


eliminar.addEventListener("click", function () {
    let eliminado = Number(prompt("Id del producto a eliminar"));
    let indice;

    for (let i = 0; i < productosArray.length; ++i) {
        if (productosArray[i].id === eliminado) {
            indice = i;
            break;
        }
    }

    productosArray.splice(indice, 1);
    reseteo();
});



/*

quiero que se vacie todo al editar la lista justo antes de pintarla de nuevo:


function mostrarProductos(obj) {
    let ul = document.createElement("ul");
    document.body.appendChild(ul);

    for (let item of obj) {

        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = `
        ${item.id} - ${item.nombre} - $${item.precio} - Stock: ${item.stock}

    
    `}
}

mostrarProductos(productosArray); 
--------------------------------------------------------------------------------


*/

function reseteo(){
    let lista = document.querySelector("ul");
    if(lista){
        lista.remove();
        mostrarProductos(productosArray);
    };
};