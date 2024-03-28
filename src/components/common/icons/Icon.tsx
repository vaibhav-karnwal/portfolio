import { CSSProperties } from "react";
import { RiReactjsFill } from "react-icons/ri";
import { RiFlutterFill } from "react-icons/ri";
import { FaJava, FaPhone } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { DiBootstrap } from "react-icons/di";
import { FaSass } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { DiAndroid } from "react-icons/di";
import { SiVisualstudiocode } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiJest, SiTypescript } from "react-icons/si";
import {
  MdAddCircleOutline,
  MdEmail,
  MdOutlineKeyboardBackspace,
  MdOutlineLocationOn,
} from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { TbDropletFilled } from "react-icons/tb";
import { HiShoppingCart } from "react-icons/hi";
import { AiTwotoneHome } from "react-icons/ai";
import { HiMapPin } from "react-icons/hi2";
import { BsFillPersonFill } from "react-icons/bs";

type IconProps = {
  name: string;
  className?: string;
  style?: CSSProperties;
  fill?: string;
  width?: string;
  height?: string;
  href?: string;
  size?: string;
  onClick?: Function;
};

const Icon = ({
  name,
  fill,
  className,
  style,
  width,
  size,
  height,
  href,
  onClick,
}: IconProps) => {
  switch (name) {
    case "reactjs": {
      return (
        <RiReactjsFill
          fill={fill}
          className={className}
          href={href}
          style={style}
        />
      );
    }
    case "redux": {
      return (
        <TbBrandRedux
          fill={fill}
          className={className}
          href={href}
          style={style}
        />
      );
    }
    case "typescript": {
      return (
        <SiTypescript
          fill={fill}
          className={className}
          href={href}
          style={style}
        />
      );
    }
    case "jest": {
      return (
        <SiJest fill={fill} className={className} href={href} style={style} />
      );
    }
    case "java": {
      return (
        <FaJava fill={fill} className={className} href={href} style={style} />
      );
    }
    case "javascript": {
      return (
        <DiJavascript1
          fill={fill}
          className={className}
          href={href}
          style={style}
        />
      );
    }
    case "html": {
      return (
        <AiFillHtml5
          fill={fill}
          className={className}
          href={href}
          style={style}
        />
      );
    }
    case "nodejs": {
      return (
        <FaNodeJs fill={fill} className={className} href={href} style={style} />
      );
    }
    case "sass": {
      return (
        <FaSass fill={fill} className={className} href={href} style={style} />
      );
    }
    case "bootstrap": {
      return (
        <DiBootstrap
          fill={fill}
          className={className}
          href={href}
          style={style}
        />
      );
    }
    case "github": {
      return (
        <AiFillGithub
          fill={fill}
          className={className}
          href={href}
          style={style}
        />
      );
    }
    case "css": {
      return (
        <FaCss3 fill={fill} className={className} href={href} style={style} />
      );
    }
    case "flutter": {
      return (
        <RiFlutterFill
          fill={fill}
          className={className}
          href={href}
          style={style}
        />
      );
    }
    case "Android": {
      return (
        <DiAndroid
          fill={fill}
          className={className}
          href={href}
          style={style}
        />
      );
    }
    case "Visualstudiocode": {
      return (
        <SiVisualstudiocode
          fill={fill}
          className={className}
          href={href}
          style={style}
        />
      );
    }
    case "FaPhone": {
      return (
        <FaPhone fill={fill} className={className} href={href} style={style} />
      );
    }
    case "TbDropletFilled": {
      return (
        <TbDropletFilled fill={fill} className={className} style={style} />
      );
    }
    case "MdEmail": {
      return (
        <MdEmail fill={fill} href={href} className={className} style={style} />
      );
    }
    case "CiCalendar": {
      return <CiCalendar fill={fill} className={className} style={style} />;
    }
    case "MdOutlineLocationOn": {
      return (
        <MdOutlineLocationOn fill={fill} className={className} style={style} />
      );
    }
    case "HiShoppingCart": {
      return <HiShoppingCart fill={fill} className={className} style={style} />;
    }

    case "BsFillPersonFill": {
      return (
        <BsFillPersonFill fill={fill} className={className} style={style} />
      );
    }
    case "AiTwotoneHome": {
      return <AiTwotoneHome fill={fill} className={className} style={style} />;
    }
    case "HiMapPin": {
      return <HiMapPin fill={fill} className={className} style={style} />;
    }
    case "back": {
      return (
        <MdOutlineKeyboardBackspace
          fill={fill}
          className={className}
          style={style}
        />
      );
    }
    case "home": {
      return (
        <AiTwotoneHome
          fill={fill}
          size={size}
          className={className}
          style={style}
        />
      );
    }
    case "person": {
      return (
        <BsFillPersonFill
          fill={fill}
          className={className}
          size={size}
          style={style}
        />
      );
    }
    case "addRoundButton": {
      return (
        <MdAddCircleOutline
          fill={fill}
          className={className}
          onClick={() => onClick && onClick()}
          style={style}
        />
      );
    }
    default:
      return <></>;
  }
};

export default Icon;
