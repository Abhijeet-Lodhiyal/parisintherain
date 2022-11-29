function Message()
{
    return <>
        <div className="flex flex-col flex-wrap items-center text-left mt-32 mb-32">
            <form>
                <label className="font-semibold">Your Name</label>
                <br/>
                <input type="text" name="name" className="lg:w-[600px] lg:h-[70px] md:w-[450px] h-[50px] border-2 w-[250px] mt-2 mb-2  rounded-xl p-4 bg-transparent"></input>
                <br/>
                <label className="font-semibold">Your Email</label>
                <br/>   
                <input type="email" name="email" className="lg:w-[600px] lg:h-[70px] h-[50px] md:w-[450px] border-2 w-[250px]  mt-2 mb-2 rounded-xl p-4 bg-transparent"></input>
                <br/>
                <label className="font-semibold">Your message</label>
                <br/>
                <textarea className="lg:w-[600px] md:w-[450px] h-56 border-2 w-[250px] mt-2 mb-2 p-4  rounded-xl bg-transparent" name="message">
                </textarea>
            </form>
           
        </div>
    </>
}
export default Message;