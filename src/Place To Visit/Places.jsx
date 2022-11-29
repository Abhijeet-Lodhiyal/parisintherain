import Footer from "../Footer";
import Navbar from "../Navbar";
import Placescard from "./Placescard";
import places from "../Data Files/PlacesData.json"
import { motion } from 'framer-motion'
function Places()
{
    return (<>   
    <motion.div className=" bg-stone-50" initial={{x:'-100vw'}} animate={{x:0}} transition={{bounce:0}}>
    <Navbar/>
        {
            places.map((place) =>{
                return <Placescard heading={place.heading} description={place.description} img={place.img} id={place.id}/>
            })
        }  
        <Footer/>
        </motion.div>    
    </>);
}

export default Places;