import "./dropdwamenities.css"
import React, {useState} from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import DiningIcon from '@mui/icons-material/Dining';
import CoffeeIcon from '@mui/icons-material/Coffee';
export const DropdwAmenities = () => {
    return(
        <div className = "contenedor-amenities" >
           <select class="select" >
               <option value = "petfriendly"> PetFriendly <img src = {PetsIcon}></img></option>
               <option value = "podcast"> Podcast </option>
           </select>
        </div>
    )
}