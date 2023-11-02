import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (resId) =>{
    const [menu, setMenu] = useState([]);
const[restaurant, setRestaurant] = useState(null)
useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId );
    const json = await data.json();
    console.log(json);
   setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards);

      
  }
  return {restaurant,menu}
}
export default useRestaurant