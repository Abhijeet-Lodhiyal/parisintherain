import { motion } from "framer-motion"
const TransCard = (props)=> {
    return <>
    <motion.div className="border-2 m-4 w-[40%] p-8 rounded-xl flex flex-col flex-wrap md:min-w-fit  min-w-[80%] md:max-w-[400px] justify-center md:items-center items-start" whileHover={{scale:1.1}}>
        <h1 className="font-bold text-2xl">{props.airline}</h1>
        <h2 className="text-green-700 font-medium ">{props.price}</h2>
        <p className="font-semibold">{props.location}</p>
        <div>{props.departure}</div>
        <div>{props.arrival}</div>
    </motion.div>
        
    </>
}
export default TransCard