import {IMG_CON_URL} from "../config"

const RestaurantCard = ({name,cuisines,cloudinaryImageId,avgRatingString}) =>{
    
    
    return(
        <div className="w-56 p-4 m-2 shadow-lg bg-slate-400">
            <img src={IMG_CON_URL+cloudinaryImageId} />
          <div className="card-info">
          <h2 className="font-bold text-xl">{name}</h2>
          <p>{cuisines.join(", ")}</p>
          <h4 className="font-semibold text-sl">{avgRatingString} stars</h4>
          </div>
           </div>
    )
}

export default RestaurantCard