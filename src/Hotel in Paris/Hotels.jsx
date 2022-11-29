import { CgArrowLeftO, CgArrowRightO } from 'react-icons/cg'
import hotelData from '../Data Files/HotelsData.json'
import HotelsCard from './HotelCard'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useEffect, useState, useRef } from 'react'
import {motion} from 'framer-motion'
let count = 0;
const hotelArray = hotelData.map((hotel) => {
    return <HotelsCard key={hotel.key} heading={hotel.heading} content={hotel.content} price={hotel.price} image={hotel.image} />
})
let interval;

const Hotels = () => {
    const slideRef = useRef();
    const [index, setIndex] = useState(0)
    useEffect(() => {
        slideRef.current.addEventListener('mouseenter', pauseSlider)
        slideRef.current.addEventListener('mouseleave', startSlider)
        startSlider()
        return (() => {
            pauseSlider();
        })
    }, [])
    const handleNext = () => {
        count = (count + 1) % hotelArray.length
        setIndex(count)
    }
    const handlePrev = () => {
        count = (count + hotelArray.length - 1) % hotelArray.length
        setIndex(count)
    }
    function startSlider() {
        interval = setInterval(handleNext, 3000);
    }
    function pauseSlider() {
        clearInterval(interval)
    }


    return <>
        <Navbar />
        <motion.div className='flex flex-col items-center bg-slate-50' ref={slideRef} initial={{x:'100vw'}} animate={{x:0}} transition={{bounce:0}}>
            <button className='absolute md:top-1/2  left-1 m-2' onClick={handlePrev}><CgArrowLeftO size={30} /></button>
            <div className='flex flex-col justify-center items-center'>
                {
                    hotelArray[index]
                }
            </div>
            <button className='absolute md:top-1/2 right-1 m-2 ' onClick={handleNext}><CgArrowRightO size={30} /></button>
        </motion.div>
        <Footer />

    </>
}
export default Hotels