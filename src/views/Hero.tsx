// assets

import downloadIcon from "../assets/download-btn-icon.svg";
import homeImage from "../assets/home_img.jpeg";
import { skills } from "../data";

// components
import { Button } from "../components";
import Skill from "../components/Skill";

// react-simple-typewriter
import { Typewriter } from "react-simple-typewriter";

// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";
import { fadeIn} from "../utils/variants";

const Hero = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = "../assets/resumePaulaPerezBianchi.pdf";
    link.download = 'resumePaulaPerezBianchi.pdf';
    link.click();
  }

  
  return <div id="home" 
              className="min-h-screen items-center justify-center relative bg-background"
              style= { {backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"}}>

            <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">
              <div className="w-full xl:w-fit">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white">
                  Paula Pérez Bianchi 
                  <br />
                  <span className="text-textSecondary mt-4">
                    <Typewriter words={["Computer Scientist", "Developer", "Researcher"]}
                    cursor
                    cursorStyle="_"
                    typeSpeed={300}
                    deleteSpeed={150}
                    loop/>
                  </span>
                </h1>
                
                

                <div className="my-5 flex-auto flex-col sm:flex-row items-center gap-4 justify-center xl:justify-start mt-10">
                
                  {skills.map((skill, index) => (
                    <Skill name={skill} />
                  ))}
                </div>
                <motion.div
                    variants={fadeIn("up")}
                    transition={transition()}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
                  
                  <Button secondary icon={downloadIcon} onClick={downloadCV}> Download CV </Button>

                </motion.div>
              </div>
              <div className="center-items w-2/5 h-auto">
                <img src={homeImage}/>
                <figcaption className="text-center text-textSecondary">Photo generated with DALLE</figcaption>
              </div>
            </div>
  </div>;
};

export default Hero;
