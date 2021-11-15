import PetsIcon from '@mui/icons-material/Pets';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import DiningIcon from '@mui/icons-material/Dining';
import CoffeeIcon from '@mui/icons-material/Coffee';

export const Amenity = (props) => {

    switch (props.type) {
        case "petFriendly":
            return <PetsIcon />
        case "podcast":
            return <PodcastsIcon />
        case "kitchen":
            return <KitchenIcon />
        case "parking":
            return <LocalParkingIcon />
        case "dining":
            return <DiningIcon />
        case "coffee":
            return <CoffeeIcon />
        default:
            return null;
    }
}