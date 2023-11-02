import React from "react";


class ProfileClass extends React.Component{
    constructor(props){
     super(props)
     //create state
     this.state = {
      userInfo:{
        name:"dummy name",
        location:"dummy location",

      },
    } 
     console.log(" child-constructor" +this.props.name)
     

    }
   async ComponentDidMount(){
      // this is the place where we call api call
      const data = await fetch('https://api.github.com/users/USERNAME')
      
      const json = await data.json()
      console.log(json)
      this.setState({
       userInfo:json,
      
      })
      console.log(" child - componentt did mount" +this.props.name)
     }
     componentDidUpdate(){
      console.log("component did update")
     }
     componentWillUnmount(){
      console.log("componentWillUnmount")
     }
    render(){
     console.log(" child- render"+this.props.name)
        
      return(
        <div>
            <h1>Profile class component</h1>
            <h3>Name: {this.state.userInfo.name}
            <img src = {this.state?.userInfo?.avatar_url}/>
            </h3>
            <h3>location: {this?.state?.userInfo?.location}</h3>
            
            

            

        
        </div>
      )  
    }
}
export default ProfileClass