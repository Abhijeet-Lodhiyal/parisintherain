import Menu from "./Menu";
import cardData from './/Data Files/Data.json'
import { useState } from "react";
import { Link } from "react-router-dom";
import {ImCross} from 'react-icons/im'
import {motion} from 'framer-motion'

const cardAnim = {hidden:{x:100 , opacity:0} , visible:{x:0 , opacity:1}}
function Explore() {
    const [hiddenElement, setHiddenElement] = useState([]);
    const [show, setShow] = useState(false);
    function closed() {
        setShow(false);
        document.body.style.overflow = "visible"
    }
    function showCard(key) {
        setShow(true);
        cardData.forEach((card) => {
            if (key === card.key) {
                setHiddenElement(
                        <motion.div className=" flex flex-col w-screen h-screen fixed top-0 bottom-0 left-0 right-0 items-center z-10 bg-amber-100 overflow-x-hidden  text-justify md:p-20 p-4" initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.4 }}>
                            <button onClick={closed} className="absolute right-4 top-4"><ImCross /></button>
                            <img className="lg:mt-[2%] lg:w-1/3 mt-[10%] m-5" src={card.img}></img>
                            <h1 className="lg:text-7xl text-5xl m-5">{card.heading}</h1>
                            <h1 className="text-xl">{card.content}</h1>
                            <Link to={card.url} onClick={() => { closed() }} className="p-4 rounded-lg animate-bounce bg-amber-400 m-8 font-semibold">Go to Page</Link>
                        </motion.div>
                    );
                document.body.style.overflow = "hidden"
            }
        })
    }

    return (
        <motion.div className="text-center m-10"   initial="hidden" whileInView="visible"  variants= {cardAnim} viewport={{ once: true }} transition={{delay:0.4}}>
            <div className="m-10" id="explore">
                <h1 className="text-center lg:text-7xl text-5xl font-semibold">Explore!</h1>
            </div>
            <div className="flex flex-row lg:space-x-14  justify-center flex-wrap">
                {
                cardData.map((card) => {
                    return <Menu heading={card.heading} key={card.key} id={card.key} content={card.content} img={card.img} clickedCard={showCard} />
                }
                )}
            </div>
            <div >
                {show === true ? hiddenElement : <div></div>}
            </div>
        </motion.div>
    );

}
export default Explore;