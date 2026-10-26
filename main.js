javascript
// ENTREGA 6: FUNCIONES DE ORDEN SUPERIOR
// Proyecto: Tienda de ropa y accesorios masculinos


// 1. DEFINIMOS LA CLASE PRODUCTO

class Producto {
    constructor(nombre, precio, categoria, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }
}


// 2. INSTANCIAMOS LOS PRODUCTOS

const reloj = new Producto("Reloj Tressa", 85000, "Relojes", 10);

const gafas = new Producto("Gafas de sol", 35000, "Accesorios", 15);

const remera = new Producto("Remera básica", 22000, "Indumentaria", 20);

const short = new Producto("Short deportivo", 28000, "Indumentaria", 0);


// 3. CREAMOS EL ARRAY DE OBJETOS

const productos = [reloj, gafas, remera, short];


// 4. BUSCAR UN PRODUCTO POR SU NOMBRE CON FIND()

function buscarProducto() {

    const nombreBuscado = prompt("¿Qué producto querés buscar?");

    if (nombreBuscado === null || nombreBuscado.trim() === "") {
        console.log("Búsqueda cancelada o nombre vacío.");
        return;
    }

    // find() devuelve el primer producto que coincide
    const productoEncontrado = productos.find(
        producto => producto.nombre.toLowerCase() === nombreBuscado.trim().toLowerCase()
    );

    if (productoEncontrado) {

        console.log("===== PRODUCTO ENCONTRADO =====");
        console.log(`Nombre: ${productoEncontrado.nombre}`);
        console.log(`Categoría: ${productoEncontrado.categoria}`);
        console.log(`Precio: $${productoEncontrado.precio}`);
        console.log(`Stock: ${productoEncontrado.stock}`);

    } else {

        console.log("No encontramos ese producto en la tienda.");

    }
}


// 5. FILTRAR PRODUCTOS POR CATEGORÍA CON FILTER()

function filtrarPorCategoria() {

    const categoriaBuscada = prompt(
        "¿Qué categoría querés consultar? (Relojes, Accesorios, Indumentaria)"
    );

    if (categoriaBuscada === null || categoriaBuscada.trim() === "") {
        console.log("Consulta cancelada o categoría vacía.");
        return;
    }

    // filter() devuelve un nuevo array con los productos coincidentes
    const productosFiltrados = productos.filter(
        producto => producto.categoria.toLowerCase() === categoriaBuscada.trim().toLowerCase()
    );

    console.log(`===== PRODUCTOS DE ${categoriaBuscada.toUpperCase()} =====`);

    if (productosFiltrados.length > 0) {

        for (const producto of productosFiltrados) {
            console.log(
                `${producto.nombre} - Precio: $${producto.precio} - Stock: ${producto.stock}`
            );
        }

    } else {

        console.log("No hay productos registrados en esa categoría.");

    }
}


// 6. MOSTRAR PRODUCTOS DISPONIBLES CON FILTER()

function mostrarDisponibles() {

    // Filtramos los productos que tienen stock mayor que cero
    const disponibles = productos.filter(
        producto => producto.stock > 0
    );

    console.log("===== PRODUCTOS DISPONIBLES =====");

    if (disponibles.length > 0) {

        disponibles.forEach(producto => {
            console.log(
                `${producto.nombre} - Stock disponible: ${producto.stock}`
            );
        });

    } else {

        console.log("No hay productos disponibles.");

    }
}


// 7. APLICAR UN DESCUENTO CON MAP()

function mostrarPreciosConDescuento() {

    const descuento = Number(
        prompt("¿Qué porcentaje de descuento querés simular?")
    );

    if (!Number.isFinite(descuento) || descuento <= 0 || descuento > 100) {
        console.log("Ingresá un descuento mayor que 0 y menor o igual a 100.");
        return;
    }

    // map() crea un nuevo array con los precios descontados.
    // No modifica los productos originales.
    const productosConDescuento = productos.map(producto => ({
        nombre: producto.nombre,
        precioOriginal: producto.precio,
        precioConDescuento: producto.precio * (1 - descuento / 100),
        categoria: producto.categoria
    }));

    console.log(`===== PRECIOS CON ${descuento}% DE DESCUENTO =====`);

    productosConDescuento.forEach(producto => {
        console.log(
            `${producto.nombre} | Precio original: $${producto.precioOriginal} | ` +
            `Precio con descuento: $${producto.precioConDescuento.toFixed(2)}`
        );
    });

}


// 8. CALCULAR EL VALOR TOTAL DEL INVENTARIO CON REDUCE()

function calcularValorInventario() {

    // Sumamos el precio por la cantidad disponible de cada producto
    const valorTotal = productos.reduce(
        (acumulador, producto) => acumulador + producto.precio * producto.stock,
        0
    );

    console.log("===== VALOR DEL INVENTARIO =====");
    console.log(`Valor total del stock: $${valorTotal.toFixed(2)}`);

}


// 9. MENÚ INTERACTIVO DE LA TIENDA

function iniciarTienda() {

    let opcion;

    do {

        opcion = prompt(
            "TIENDA DE ROPA Y ACCESORIOS\n\n" +
            "1. Buscar un producto por nombre\n" +
            "2. Filtrar productos por categoría\n" +
            "3. Mostrar productos disponibles\n" +
            "4. Consultar precios con descuento\n" +
            "5. Calcular valor total del inventario\n" +
            "0. Salir\n\n" +
            "Ingresá una opción:"
        );

        switch (opcion) {

            case "1":
                buscarProducto();
                break;

            case "2":
                filtrarPorCategoria();
                break;

            case "3":
                mostrarDisponibles();
                break;

            case "4":
                mostrarPreciosConDescuento();
                break;

            case "5":
                calcularValorInventario();
                break;

            case "0":
                console.log("Gracias por visitar nuestra tienda.");
                break;

            case null:
                console.log("Cerraste el menú de la tienda.");
                break;

            default:
                console.log("Opción no válida. Elegí una opción del menú.");
                break;

        }

    } while (opcion !== "0" && opcion !== null);

}


// 10. EJECUTAMOS EL SIMULADOR

iniciarTienda();