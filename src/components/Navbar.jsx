import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div className="container-nav bg-danger">
        <Link className="home-nav" to ="/">🏠 Home </Link>
        <Link className="contacto-nav" to ="./contacto">📒 Contacto</Link>
        <h1 className="torta-nav">Happy Cake 🍰</h1>
        </div>
        
        


    )
}

export default Navbar;
