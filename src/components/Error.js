import {useRouteError} from "react-router-dom"

const Error = () =>{
    const err = useRouteError()
    console.log(err)
    return(
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfar6Q8mBeHp3QPIWk3FTWgQB_d-Htdn6C3A&usqp=CAU" className="error-img"/>
            <h1>Oops!!</h1>
            <h2>Something went wrong</h2>
            <h2>{err.status + " : " +err.statusText}</h2>
        </div>
    )
}
export default Error;