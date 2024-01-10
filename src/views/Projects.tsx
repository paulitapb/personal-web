
// components
import {Card} from "../components";

// data
import { projects } from "../data";


const Projects = () => {
  
  return <div id="projects" 
              className="min-h-screen relative bg-background"
              style={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}>
          <div className="max-w-screen-2xl w-full py-16 px-12 mx-auto">
              <div className="flex-1 flex flex-col gap-4">
                
                  <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
                    font-bold text-textPrimary">
                    My recent <span className="text-secondary"> projects</span>
                  </h2>
              </div>
           </div>
           <div className="gap-12 mt-12 flex-wrap justify-center">
            {projects.map((item) => (
              <Card imgSrc={item.img} title={item.title} description={item.description} url={item.url}/>
            ))}
          </div>
  </div>
};

export default Projects;
