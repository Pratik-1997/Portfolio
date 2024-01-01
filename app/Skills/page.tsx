import Descp from "../components/Descp"
import Ratings from "../components/Ratings"
import Title from "../components/Title"

const page = () => {
  return (
    <>
        <Title text="My Skills" />
        <Descp paraOne="Demonstrated ability to efficiently navigate and interact with various websites, understanding diverse user interfaces and adapting to different design structures. Proficient in using browsers and familiar with common navigation elements to ensure a seamless and user-friendly experience."/>
        <Ratings/>
    </>
  )
}

export default page