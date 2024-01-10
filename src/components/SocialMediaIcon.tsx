// mui
import { Tooltip } from "@mui/material";

// react
import { FC } from "react";

interface SocialMediaIconProps {
  imgSrc: string;
  title: string;
  profileUrl: string;
}

const SocialMediaIcon: FC<SocialMediaIconProps> = ({ imgSrc, title, profileUrl}) => {
  const onClick = () => {
    window.open(profileUrl, "_blank");
  };
  return(
    <Tooltip title={title} placement="bottom" arrow onClick={onClick}>
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-icons cursor-pointer
        hover:bg-secondary transition-all ease-linear duration-300">
        <img src={imgSrc} alt={title} className="w-8 h-8" />
      </div>
    </Tooltip>
  );
};

export default SocialMediaIcon;
