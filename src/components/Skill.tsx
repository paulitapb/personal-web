import { FC, ReactNode } from "react";

interface SkillProps {
    name: string;
}

const Skill: FC<SkillProps> = ({name}) => {
    return (
        <div className="bg-secondary rounded-full p-3 inline-block m-2 flex-auto items-center justify-center">
            <h1 className="text-gray-800 font-bold flex text-sm">{name}</h1>
        </div>
    );
};

export default Skill;