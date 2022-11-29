import { Link } from "react-router-dom";
import { motion } from "framer-motion"

function Intro()
{
    return (
        <>
            <motion.div className="flex flex-col bg-[url('https://windows10spotlight.com/wp-content/uploads/2021/09/97894ba424d724ad75ca7cb4681ada01.jpg')] bg-center bg-no-repeat bg-cover w-full h-screen justify-center items-center" initial={{opacity : 0 ,y : '-100vh'}} animate={{opacity:1 , y:0 }} transition={{delay:0.1,type:"spring",bounce:0 }}>
                <motion.h1 className="lg:text-8xl text-white lg:border-8 p-4 flex flex-col content-center md:text-7xl md:border-62 text-4xl border-4" initial={{scale:0.4}} animate={{scale:1}} transition={{delay:0.4  }} >
                    Welcome to Paris!
                </motion.h1>
                <div>
                <a className="text-white font-semibold border-2 mt-10 mr-10 pt-2 pb-2 pl-6 pr-6 rounded-xl hover:text-black hover:bg-white inline-block cursor-pointer transition duration-100 ease-in-out hover:scale-125" href="#explore">Explore</a>
                <Link to="/contact" className="text-white font-semibold border-2 mt-10  pt-2 pb-2 pl-6 pr-6 rounded-xl hover:text-black hover:bg-white inline-block transition duration-100 ease-in-out hover:scale-125" >Contact
                </Link>
                </div>               
            </motion.div>  
        </>
    );
}
export default Intro;