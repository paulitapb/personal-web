import GKBot from "./assets/gkbot.png";

export const skills = [
  "Machine Learning",
  "Data Science",
  "Text-to-Image Generation",
  "Algorithms & Data Structures",
  "Python",
  "C++",
  "FOSS Contributor",
];

export const projects = [
   {
     id: 0,
     img: GKBot,
     category: "Robotics",
     title: "GKBot",
     year: 2016, 
     description: "Gkbot is a robotic system for agricultural management designed to implement Precision Agriculture. It began as a personal project during my high school years, providing me with an opportunity to explore robotics and programming.", 
     url: " ",
     skills: ["Python", "C++", "Arduino", "Raspberry Pi", "Electronics", "Robotics"]
   },
   {
    id: 1,
    category: "Software Development",
    img: GKBot,
    title: "CNNs Implementation with SIMD and ARM NEON",
    year: 2022,
    description: "This project was the final work for Computer Architecture 2 at the University of Buenos Aires. The objective was to implement a Convolutional Neural Network (CNN) utilizing Single Instruction Multiple Data (SIMD) and ARM NEON instructions, with the aim of enhancing the overall running-time performance.",
    url: "https://gitlab.com/fourofclubs001/cnn_prunning"
   }
   //TODO ADD MORE
];

export const workExperience = [
  {
    id: 0,
    title: "Research Intern",
    company: "The Applied Artificial Intelligence Laboratory (AAIL)",
    year: "August 2023 - Present",
    description: "I am currently engaged in a research project that examines the comparison between AI generative models and humans in interpreting prompts. As part of my research, I specialize in fine-tuning and evaluating various text-to-image models.",
    url: "https://liaa.dc.uba.ar/es/inicio/",
  },
  {
    id: 1,
    title: "Teaching Assistant",
    company: "Computer Science Department at Exactas- University of Buenos Aires",
    year: "August 2022 - Present",
    description: "I instructed courses on Algorithms and Data Structures I, Introduction to Programming, and Data Science Lab.",
    url: "https://www.dc.uba.ar/",
  },
  {
    id: 1,
    title: "Intern at NetworkX",
    company: "Outreachy ",
    year: "December 2022 - March 2023",
    description: "As an intern, I contribute to NetworkX Python package. NetworkX is part of the Python Scientific ecosystem and is used to create, manipulate, and study complex networks' structure, dynamics, and functions.",
    url: "https://networkx.org/",
  },
];