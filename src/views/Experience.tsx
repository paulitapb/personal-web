
import { Escalator } from "@mui/icons-material";
import ExperienceCard from "../components/ExperienceCard";
import { workExperience } from "../data";

const Experience = () => {
    return <div id="experience" 
                className="min-h-screen relative bg-background"
                style={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                }}>
                    <div className="max-w-screen-2xl w-full py-10 px-10 mx-auto">
                        <div className="flex-1 flex flex-col gap-4">
                            
                            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
                                font-bold text-textPrimary">
                                Experience
                            </h2>
                        </div>
                    </div>
                    <div className="center mx-4">
                        {workExperience.map((item) => {
                            return (
                                <ExperienceCard title={item.title} period={item.year} description={item.description} url={item.url}/>
                            );
                        })}
                    </div>

            </div>;
}

export default Experience;