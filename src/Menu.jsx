import { motion } from 'framer-motion'


function Menu(props) {
   return (
        <>
            <div className='p-4 mt-14 m-4 rounded-lg shadow-xl lg:w-[700px] md:w-[400px]  text-justify flex flex-col justify-center items-center'>
            <h1 className="text-5xl font-medium">{props.heading}</h1>
                <img src={props.img} className="m-4 aspect-video"></img>
                <h1 className="text-semibold text-xl">{props.content.substring(0,130)+" "}<button className="text-blue-500" onClick={() => {
                    props.clickedCard(props.id)
                }}> ...Read More</button></h1>
            </div>
        </>)


}
export default Menu;