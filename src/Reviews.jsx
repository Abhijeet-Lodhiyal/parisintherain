import { useEffect, useState, useRef } from 'react'
import reviewData from './Data Files/ReviewData.json'
import { CgArrowLeftO, CgArrowRightO } from 'react-icons/cg'

const data = reviewData.map((review) => {
    return <>
        <div className='md:w-[600px] w-[90%] border-2 flex flex-col items-center justify-center p-4 m-4 rounded-lg '>
            <img src={review.img} className="w-[300px] "></img>
            <h1 className='font-bold text-lg'>"{review.heading}"</h1>
            <p className='text-justify'>{review.content}</p>
            <h1 className='font-semibold text-md'>{review.name}</h1>
        </div>
    </>
})
let interval;
let count = 0;

function Reviews() {
    const [arev, setArev] = useState(0)
    const slideRef = useRef();
    useEffect(() => {
        slideRef.current.addEventListener('mouseenter', pauseSlider)
        slideRef.current.addEventListener('mouseleave', startSlider)
        startSlider()
        return (() => {
            pauseSlider();
        })
    }, [])
    const handleNext = () => {
        count = (count + 1) % data.length
        setArev(count)
    }
    const handlePrev = () => {
        count = (count + data.length - 1) % data.length
        setArev(count)
    }
    function startSlider() {
        interval = setInterval(handleNext, 2500);
    }
    function pauseSlider() {
        clearInterval(interval)
    }
    return <>
    
        <div className='flex flex-col items-center mt-14' ref={slideRef}>
            <h1 className='lg:text-7xl font-bold md:text-5xl text-3xl mb-14'>Reviews </h1>
            <div className='flex flex-col justify-center items-center'>
                {
                    data[arev]
                }
            </div>
            <div>
            <button className='relative right-[40%]' onClick={handlePrev}><CgArrowLeftO size={30} /></button>
        <button className='relative right-[-40%] ' onClick={handleNext}><CgArrowRightO size={30} /></button>
        </div>
            </div>
            
    </>
}
export default Reviews