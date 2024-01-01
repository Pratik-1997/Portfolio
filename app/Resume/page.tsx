import Descp from "../components/Descp"
import Title from "../components/Title"


const Page = () => {
  return (
    <>
        <Title text="Interested ?" />
        <Descp paraOne="What sets me apart? Download now to find out."/>
        <div className="resume-downloaded">
            <p className="descp"></p>
            <a href="" target="_blank" className="download-btn">Download Now</a>
        </div>
    </>
  )
}

export default Page