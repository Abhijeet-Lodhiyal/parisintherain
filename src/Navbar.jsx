import { useState } from 'react';
import paris from './assets/paris.svg'
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImCross} from 'react-icons/im'
import { motion } from 'framer-motion'


function Navbar(props) {
    const [open, setOpen] = useState(false);
    const [widthScreen , setScreenWidth] = useState(window.innerWidth); 
    window.addEventListener('resize',() => {
        setScreenWidth(window.innerWidth)
    });
    const navLinks =
        <motion.ul className={` md:flex lg:space-x-10 md:space-x-2 items-center text-2xl md:flex-row`} initial={{scale:0 , opacity:0}} animate={{scale:1 , opacity:1}} transition={{delay:0.1}}>
            <li><Link to='/contact' className='hover:bg-rose-400 pt-2 pb-2 pl-4 pr-4 rounded-3xl block'>Contact</Link></li>
            <li><Link to='/places' className='hover:bg-rose-400 pt-2 pb-2 pl-4 pr-4 rounded-3xl block'>Places</Link></li>
            <li><Link to='/cuisines' className='hover:bg-rose-400 pt-2 pb-2 pl-4 pr-4 rounded-3xl block'>Cuisines</Link></li>
            <li><Link to='/hotels' className='hover:bg-rose-400 pt-2 pb-2 pl-4 pr-4 rounded-3xl block'>Hotels</Link></li>
            <li><Link to='/transportation' className='hover:bg-rose-400 pt-2 pb-2 pl-4 pr-4 rounded-3xl block'>Transportation</Link></li>
        </motion.ul>

    return (<>
        <div className={` flex flex-row lg:justify-around items-center justify-between ${props.bground !== undefined ? props.bground:"bg-rose-300"}`}>
            <div className='flex flex-row justify-between'>
                <Link to="/"><img src={paris} className='w-24 h-28 pl-8'></img></Link>
            </div>
            <button className={`p-4 mr-10 rounded-lg block md:hidden ${props.bground !== undefined  ? props.bground: "bg-rose-400"}`} onClick={() => {
                setOpen(!open);
            }}>{open ?<ImCross/>:<GiHamburgerMenu/> }</button>
            { widthScreen > 768 ? navLinks:<></>}
        </div>
        <div className={`text-center ${props.bground !== undefined ? props.bground:"bg-rose-300"}`} >
            {open && (widthScreen < 768) ? navLinks : <></>}
        </div>
    </>);
}

export default Navbar;