import {useState, useEffect} from "react"
const Profile = (props) =>{
    const [count, setCount] =useState(0)
    useEffect(()=>{
    //    console.log("useEffect") 
    })
    return(
        <div>
            <h2>Profile Component</h2>
            <h3>Name: {props.name}</h3>
            <h3>Count:{count}</h3>
            <button onClick={(e)=>setCount(count+1)}>Count</button>
        </div>
    )
}

export default Profile;