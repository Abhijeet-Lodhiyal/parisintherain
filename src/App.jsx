
import Explore from "./Explore"
import Footer from "./Footer"
import Intro from "./Intro"
import Message from "./Message"
import Reviews from "./Reviews"


function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Intro />
        <Explore />
        <Footer />
        <Reviews />
        <Message />
        
      </div>

    </>

  )
}

export default App
