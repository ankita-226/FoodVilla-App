import {Link} from "react-router-dom"

const Title = () => (
    <a href="/">
    <img
    className="h-24 w-52 p-2"
    alt="logo"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtFXKFKFoihdrJEvX4jBtXqfcO2kJ0KAlIg&usqp=CAU"
    />
    </a>
    ) 
    

    const Header=()=>{
        return(
            <div className=" px-3 flex justify-between bg-white shadow-lg">
                <Title/>
                <div className="pr-5">
                   <ul className="flex py-8">
                   <li className="px-3"><Link to="/">Home</Link></li>
                   <li className="px-3"><Link to="/about">About</Link></li>
                    <li className="px-3"><Link to="/contact">Contact</Link></li>
                    <li className="px-3">Cart</li>
                    </ul> 
                </div>
                
            </div>
        )
    }
 export default Header