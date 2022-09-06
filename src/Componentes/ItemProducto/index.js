import './style.css'

const Producto = () =>{
    return(
        <div className="contenedor-principal" >
            <img src="https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:good/gr/images/product-images/img_large/00000000004130L.jpg" alt="" />
            <div className="contenedor-secundario">
                <div className="head">
                    <p className="descripcion-producto" >Descripcion Producto</p>
                </div>
                <div className="body">
                    <p className="marca-producto">Marca Producto</p>
                    <p className="precio-producto">Precio Producto</p>
                </div>
            </div>
        </div>
    )
}

export default Producto