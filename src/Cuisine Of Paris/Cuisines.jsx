import foodData from "../Data Files/CuisineData.json"
import Footer from "../Footer"
import Navbar from "../Navbar"
import CuisineCard from "./CuisineCard"
import { motion } from 'framer-motion'
function Cuisines()
{
    return <>
    
    <motion.div className="bg-slate-50" initial={{x:'-100vw'}} animate={{x:0}} transition={{bounce:0}}>
    <Navbar />
        {
           
            foodData.map((food) => {
                return <CuisineCard key={food.key} id={food.id} heading={food.heading} content={food.content} img={food.img}/>
            })
        }
        <Footer />
    </motion.div>
   
     
    
    </>
}
export default Cuisines;