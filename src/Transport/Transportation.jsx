
import flightData from '../Data Files/FlightsData.json'
import Footer from '../Footer'
import Navbar from '../Navbar'
import TransCard from './TransCard'
import {motion} from 'framer-motion'

const Transportation = ()=> {
    return <>
    <Navbar />
    <motion.div className='flex flex-row flex-wrap justify-center items-center mt-14' initial={{x:'100vw'}} animate={{x:0}} transition={{bounce:0}}>
        {
            flightData.map((flight) => {
                return <TransCard price={flight.price} airline={flight.airline} location={flight.location} departure={flight.departure} arrival={flight.arrival}/>
            })
        }
    </motion.div>
        
    <Footer />
    </>
}
export default Transportation