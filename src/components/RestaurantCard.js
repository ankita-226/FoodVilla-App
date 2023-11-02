import {IMG_CON_URL} from "../config"

const RestaurantCard = ({name,cuisines,cloudinaryImageId,avgRatingString}) =>{
    
    
    return(
        <div className="card">
            <img src={IMG_CON_URL+cloudinaryImageId}/>
          <div className="card-info">
          <h2>{name}</h2>
          <p>{cuisines.join(", ")}</p>
          <h4>{avgRatingString}</h4>
          </div>
           </div>
    )
}

export default RestaurantCard