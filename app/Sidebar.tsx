import Image from "@/node_modules/next/image"
import Link from "@/node_modules/next/link";
import Profile from "./images/100x100.svg";
import Home from "./images/Home.svg";
import About from "./images/AboutMe.svg";
import Projects from "./images/Projects.svg";
import Skills from "./images/Skills.svg";
import Resume from "./images/Folder.svg";
import ContactMe from "./images/Contact.svg";


const Sidebar = () => {
  return (
    <div className="sideBar">
        <div className="container">
            <Image className="profile" src={Profile} alt="logo" height={100} width={100} />
            <p className="profile-name text-center">Pratik Keluskar</p>
            <div className="navigation">
                <nav>
                    <ul>
                        <li>
                            <Link href={"/Home"}>
                               <Image src={Home} alt="Home" width={25} height={25}/> Home
                            </Link>
                        </li>
                        <li>
                            <Link href={"/About"}>
                            <Image src={About} alt="Home" width={25} height={25}/>About
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                            <Image src={Projects} alt="Home" width={25} height={25}/> Projects
                            </Link>
                        </li>
                        <li>
                            <Link href={"/Skills"}>
                            <Image src={Skills} alt="Home" width={25} height={25}/> Skills
                            </Link>
                        </li>
                        <li>
                            <Link href={"/Resume"}>
                            <Image src={Resume} alt="Home" width={25} height={25}/> Resume
                            </Link>
                        </li>
                        <li>
                            <Link href={"/Contact"}>
                            <Image src={ContactMe} alt="Home" width={25} height={25}/>Contact Me
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Sidebar