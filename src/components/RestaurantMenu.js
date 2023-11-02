import { IMG_CON_URL } from "../config";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"
import useRestaurant from "../utils/useRestaurant";
//how to read dynamic URL params

const RestauarantMenu = () => {
  
  const { resId } = useParams();

const {restaurant,menu} = useRestaurant(resId)
 

  return !restaurant ? (<Shimmer/>) : (
    <div className="menu">
      <div>
        <h1>Restaurant id :{resId}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CON_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.areaName}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} stars</h3>
        <h3>{restaurant.costForTwoMessage}</h3>
      </div>

      <div>
        <h3>Menu</h3>
        <ul>
          {menu.length>0 && menu.map((item) => {
             return <li key={item?.card?.info?.id}>{`${item?.card?.info?.name} - ${item?.card?.info?.price}`}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default RestauarantMenu;
