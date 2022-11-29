const HotelsCard = (props) => {
    return <>
    <div className="flex flex-col justify-center items-center md:w-[80%] w-[90%] p-4 rounded-3xl bg-white shadow-2xl md:mt-24 mt-14 text-justify">
        <h1 className="lg:text-7xl md:text-5xl text-4xl m-4 font-bold">{props.heading}</h1>
        <img src={props.image} className=" lg:w-[40%] md:w-[50%] w-[100%] aspect-video"></img>
        <p className="text-lg font-semibold m-4">{props.content}</p>
        <h3 className=" font-semibold text-red-500">{props.price}</h3>
    </div>

    </>
}
export default HotelsCard;