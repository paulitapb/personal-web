// assets

import GitHubIcon from "../assets/github-mark-white.svg";
import LinkedinIcon from "../assets/icons8-linkedin.svg";
import ProfilePicture from "../assets/profilePic.jpeg";


import MailIcon from "../assets/mail.svg";
// components
import { SocialMediaIcon} from "../components";


const About = () => {

  return <div id="about" className="flex items-center justify-center min-h-screen relative bg-background"
              style={{backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover"}}>

    <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-15 w-full py-16 px-12">
      <div className="w-full xl:w-fit items-center">
      
      <h2 className="text-4xl md:text-10xl xl:text-6xl font-bold text-white mb-10 mt-10 ">
        About Me
      </h2>

      <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary mt-10 max-w-lg mx-auto">
        I'm a Computer Science student at @ExactasUBA. Currently, I work as a research intern at @LIAA, 
        exploring text-to-image AI models. I also contribute as a teaching assistant in the Computer Science department 
        at UBA. My interests encompass Machine Learning, Data Science, Generative Models, Software Development 
        and FOSS Comunities.
      </p>
          
        <div className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">

          <SocialMediaIcon title= "GitHub" imgSrc={GitHubIcon} profileUrl="https://github.com/paulitapb"/>
          <SocialMediaIcon title= "Linkedin" imgSrc={LinkedinIcon} profileUrl="https://www.linkedin.com/in/paula-perez-bianchi/"/>
          <SocialMediaIcon title= "Mail" imgSrc={MailIcon} profileUrl="mailto:paulaperezbianchi@gmail.com"/>

          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" /></div>
          
        </div>
        <div className="center-items w-1/3 h-auto">
          <div className="w-50 h-50 overflow-hidden rounded-full">
            <img src={ProfilePicture} className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
  </div>
}
export default About;
