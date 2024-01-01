import Descp from "../components/Descp"
import Education from "../components/Education"
import Title from "../components/Title"

const page = () => {
  return (
    <>
        <Title text="Know More About Me" />
        <Descp paraOne="Seeking a position which will help me enhance my technical skills and apply them to develop new and innovative ideas that would be beneficial to fulfil the predefined objectives of the organization."
            paraTwo="I love to learn new technologies and implementing new ideas into my website. Trying to learn new things and developing new websites."
        />
        <Education/>
    </>
  )
}

export default page