// react
import { FC } from "react";

interface CardProps {
  imgSrc: string;
  title: string;
  description: string | undefined;
  url:string | undefined;

}

const Card: FC<CardProps> = ({ imgSrc, title, description, url }) => {
  return <div className="relative bg-background hover:bg-violet rounded-lg p-4 mb-1 ml-10 mx-10 transition-colors duration-200">
    <h3 className="text-textSecondary font-bold text-lg mb-2">
      {title}
    </h3>
    <p className="text-white text-white mb-2 text-xs">
      {description}
    </p>
    {url && (
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-textSecondary text-xs underline">
        {url}
      </a>
    )}
  </div>
};

export default Card;
