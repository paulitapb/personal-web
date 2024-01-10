

// components
import { Button, LabelInput } from "../components";


const Contact = () => {
  return <div id="contact" className="min-h-screen items-center justify-center relative bg-background"
              style={{backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover"}}>
              <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
                              items-center xl:items-start gap-12 w-full pt-20 pb-20 sm:pb-16 px-12">
                    
                    <div className="flex-1 flex flex-col gap-4">
                      <h2
                        className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
                        font-bold text-textPrimary"
                      >
                       Contact<span className="text-secondary"> me</span>
                      </h2>
                      </div>
                          <div className="flex-1 flex flex-col gap-6 w-full max-w-[696px]">
                          <div className="flex flex-col sm:flex-row items-center gap-6 text-secondary">
                              <LabelInput labelText="Your name" placeholderText="Name" />
                              <LabelInput labelText="Your email" placeholderText="Email" />
                
                          </div>
                          <div className="flex flex-col sm:flex-row items-center gap-6">
                            <LabelInput
                              labelText="Your message"
                              placeholderText="Message"
                              textarea
                            />
                          </div>

                    </div>
         
        </div>
              </div>
};

export default Contact;
