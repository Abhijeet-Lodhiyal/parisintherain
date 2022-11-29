import Footer from "./Footer";
import Navbar from "./Navbar";
import { motion } from "framer-motion"

function ContactUs()
{
    return (
    <motion.div className="w-screen h-screen justify-center items-center bg-[url('https://cdn.pixabay.com/photo/2017/10/19/23/35/paris-2869657_960_720.jpg')] bg-cover bg-no-repeat overflow-x-hidden" initial={{y:'100vh'}} animate={{y:0}} transition={{bounce:0}}>
     <Navbar bground="bg-transparent"/>
        <div className="flex flex-col flex-wrap items-center text-left mt-32">
            <form>
                <label className="font-semibold">Your Name</label>
                <br/>
                <input type="text" name="name" className="lg:w-[600px] lg:h-[70px] md:w-[450px] h-[50px] border-2 w-[250px] border-black mt-2 mb-2  rounded-xl p-4 bg-transparent"></input>
                <br/>
                <label className="font-semibold">Your Email</label>
                <br/>   
                <input type="email" name="email" className="lg:w-[600px] lg:h-[70px] h-[50px] md:w-[450px] border-2 w-[250px]  mt-2 mb-2 rounded-xl p-4 bg-transparent border-black"></input>
                <br/>
                <label className="font-semibold">Your message</label>
                <br/>
                <textarea className="lg:w-[600px] md:w-[450px] h-56 border-2 w-[250px] mt-2 mb-2 p-4  rounded-xl bg-transparent border-black" name="message">
                </textarea>
            </form>
           
        </div>
        <Footer/>  
    </motion.div>);
}
export default ContactUs;