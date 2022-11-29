

function Placescard(props) {
    return <>
        <div className="lg:ml-[20%] lg:mr-[20%] md:ml-[10%] md:mr-[10%] m-4 text-justify flex flex-col items-center justify-center rounded-md lg:p-10 p-2 mt-[5%]  shadow-2xl  bg-white">
        <div className="lg:text-6xl text-4xl m-10">{props.id}.{props.heading}</div>
            <img src={props.img} className="aspect-video"></img>
           
            <div className="text-lg m-4">{props.description}</div>
        </div>  
       
    </>
}
export default Placescard;