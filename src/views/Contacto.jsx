function Contacto() {
    return(
        <div className="contacto">
            <h1 className="titulo-cont mb-5">Cuéntanos, ¿en qué te podemos ayudar?</h1>
            <placeholder>Correo:</placeholder>
            <input className="input1 form-control mb-5" type="text" placeholder="name@example.com"/>
            <placeholder>Descripción:</placeholder>
            <input className="input2 form-control mb-4" type="text" placeholder="Mensaje"/>
            <input className="input3 btn btn-danger" type="button" value="Enviar"/>
        </div>
)}

export default Contacto;