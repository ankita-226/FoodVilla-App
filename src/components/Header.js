import {Link} from "react-router-dom"

const Title = () => (
    <a href="/">
    <img
    className="logo"
    alt="logo"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtFXKFKFoihdrJEvX4jBtXqfcO2kJ0KAlIg&usqp=CAU"
    />
    </a>
    ) 
    

    const Header=()=>{
        return(
            <div className="header">
                <Title/>
                <div className="nav-items">
                   <ul>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    </ul> 
                </div>
                
            </div>
        )
    }
 export default Header