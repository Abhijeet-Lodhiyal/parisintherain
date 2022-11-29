
function CuisineCard(props)
{
    return <>
    <div className="flex flex-col items-center md:mr-[20%] md:ml-[20%] ml-4 mr-4 mt-24 mb-24 pt-8 rounded-md text-justify p-2 bg-white shadow-2xl">
    <div className="lg:text-7xl md:text-5xl text-4xl font-semibold mb-8">{props.id}.{props.heading}</div>
        <img src={props.img} className="lg:w-[650px] md:w-[60%] w-[90%] h-[30%] aspect-video"></img>
        <div className="text-lg lg:ml-20 lg:mr-20 ml-4 mr-4 mt-4 mb-4 font-medium">{props.content}</div>
    </div>
        
    </>
}
export default CuisineCard;