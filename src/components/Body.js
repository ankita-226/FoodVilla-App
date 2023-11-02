import {restaurantList} from "../config"
import RestaurantCard from "./RestaurantCard"
import {useState, useEffect} from "react"
import Shimmer from "./Shimmer"
import {Link} from "react-router-dom"
import { filterData } from "../utils/helper"
import useOnline from "../utils/useOnline"

const Body = () =>{
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] =useState([])
  const [searchText, setSearchText] =  useState("")
  useEffect(() =>{
    getRestaurants()
  },[])





  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6003092&lng=77.34464609999999&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    console.log(json)
    setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
//conditional rendering
//if restaurant is empty => shimmer ui
//if restaurant has data =>load actual ui

const isOnline = useOnline();
if(!isOnline){
  return <h1> Offline, Please check your internet connection !!</h1>
}

     if(!allRestaurants) return null;
     
    return allRestaurants?.length===0?( <Shimmer/>
    ) : (
      <>
      <div className="search-container p-6 ml-10">
      <input type="text" className="search-input px-4 py-2 rounded-md" placeholder="Search for restaurants and food " value={searchText} onChange = {(e)=>{
        setSearchText(e.target.value)
      }
       }/>
      
      
      <button className="search-btn px-4 py-2 m-3 bg-purple-900 hover:bg-purple-600 text-white rounded-md"
      onClick = {()=>{
        const data = filterData(searchText, allRestaurants)
        setFilteredRestaurants(data)
      }}>Search</button>
      </div>
        <div className="flex flex-wrap">
          {
            filteredRestaurants?.map((restaurant)=>{
              return(
              <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard {...restaurant.info}  /></Link>
            )})
          }
            
            
        </div>
        
    
      </>
    )
      
}

export default Body;