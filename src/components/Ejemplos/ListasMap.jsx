import styles from "./ListasMap.module.css"

function ListasMap() {

    const productos = [
        { id: 1, nombre: 'Camiseta', precio: 19.99, categoria: 'Ropa', stock: 100, imagen: 'https://celadasa.vtexassets.com/arquivos/ids/321383-800-auto?v=638558038660900000&width=800&height=auto&aspect=true' },
        { id: 2, nombre: 'Laptop', precio: 999.99, categoria: 'Electrónica', stock: 25, imagen: "https://i5.walmartimages.com/seo/HP-14-Laptop-Intel-Core-i3-1115G4-4GB-RAM-128G-SSD-Natural-Silver-Windows-11-Home-in-S-mode-14-dq2031wm_d3df6009-cc66-44f8-b45e-16b8cb670e8c.22c4512667d72a24e1a97ba67bd5fc0d.jpeg" },
        { id: 3, nombre: 'Auriculares', precio: 59.99, categoria: 'Accesorios', stock: 50, imagen: "https://static.bidcom.com.ar/publicacionesML/productos/ABLUE108/1000x1000-ABLUE108.jpg" },
        { id: 4, nombre: 'Zapatos deportivos', precio: 49.99, categoria: 'Ropa', stock: 200, imagen: "https://images-cdn.ubuy.com.ar/64a22f03b3ae7769e250b492-zapatos-de-hombre-zapatillas-deportivas.jpg" },
        { id: 5, nombre: 'Cafetera', precio: 89.99, categoria: 'Electrodomésticos', stock: 30, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFg9v01JKKw-32raXRPGdet7RgHhxQphtDJw&s" },
        { id: 6, nombre: 'Mochila', precio: 29.99, categoria: 'Accesorios', stock: 150, imagen: "https://rusty.com.ar/cdn/shop/files/IMG_1132.jpg?v=1705430646" },
        { id: 7, nombre: 'Smartphone', precio: 499.99, categoria: 'Electrónica', stock: 40, imagen: "https://stylewatch.vtexassets.com/arquivos/ids/240775-800-800?v=638319416298200000&width=800&height=800&aspect=true" },
        { id: 8, nombre: 'Silla de oficina', precio: 129.99, categoria: 'Mobiliario', stock: 15, imagen: "https://http2.mlstatic.com/D_NQ_NP_816652-MLA71547458579_092023-O.webp" },
        { id: 9, nombre: 'Libro de programación', precio: 24.99, categoria: 'Libros', stock: 75, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKLafM1kLqV51HdxsRnSag1HnltLe-cD-Og&s" },
        { id: 10, nombre: 'Reloj inteligente', precio: 159.99, categoria: 'Electrónica', stock: 60, imagen: "https://http2.mlstatic.com/D_NQ_NP_804851-MLA45799501759_052021-O.webp" }
    ];


    return (
        <div className={styles.tarjetacontenedor}>
            {productos.map(producto => (
                <div key={producto.id} className={styles.tarjeta}>
                    <img src={producto.imagen} alt="" className={styles.imagentarjeta} />
                    <p>{producto.nombre}</p>
                    <p>${producto.precio}</p>
                    <p className={styles.parrafotarjeta}>stock: {producto.stock}</p>
                    <a href="" className={styles.boton}>Comprar</a>
                </div>
            ))}
        </div>
    )
}

export default ListasMap