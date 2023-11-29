const dataCards = [
    {
    id: 1,
    titulo: "Canilla de lavatorio",
    imagen: './canilladelavatorio.webp',
    precio: 25000,
    },
    {
    id: 2,
    titulo: "Canilla de mesada",
    imagen: './canillademesada.webp',
    precio: 40000,
    },
    {
    id: 3,
    titulo: "Canilla de pared",
    imagen: './canilladepared.png',
    precio: 35000,
    },
    {
    id: 4,
    titulo: "Lave de paso",
    imagen: './llavedepaso.jpg',
    precio: 20000,
    }
];

const productosContenedor = document.querySelector('.productos');
const productos = document.getElementById("Productos");
const button = document.getElementById('button');
const input = document.getElementById('input');

const renderCard = (articulo) => {
    const {titulo, imagen, precio} = articulo
    return `
        <div class="cardArticulo">
        <img src="${imagen}" alt="${titulo}"/>
        <div class="cardArticulo">
        <div class="cardArticuloInfo">
            <div class="cardArticuloInfoTop">
                <h3>${titulo}</h3>
                </div>
                <div class="descripcion">
                    <p>Descripción: articulo.descripcion</p>
                    <p>Precio: ${precio}</p>
                </div>
            </div>
        </div>
        `
}

// const renderCardOn = () => {productos.innerHTML = renderCard(articulo);}

// const activacionCards = () => {
//     products.addEventListener('click', renderCardOn)
// };

// const articulo = articulos.find(e => (e.id));


const renderProducts = (articulos) => {
    productosContenedor.createElement = articulos.map(articulo => renderCard(articulo))
}

// const init = () => {
//     renderProducts(dataCards);
// }

// init();

// REPASAR ULTIMA CLASE Y SOLUCIONAR RENDERIZADO DE CARDS





// USAR FIND MIN 40 APROX