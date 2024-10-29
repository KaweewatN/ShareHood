import {FaHeadphones, FaTag} from "react-icons/fa6";
import {IoShirtSharp} from "react-icons/io5";
import {MdSubscriptions} from "react-icons/md";
import {FaCar, FaUser} from "react-icons/fa";
import {GiConverseShoe} from "react-icons/gi";

const Icons = {
  headphones: (className?: string) => <FaHeadphones className={className} />,
  Cloth: (className?: string) => <IoShirtSharp className={className} />,
  Subscription: (className?: string) => <MdSubscriptions className={className} />,
  Car: (className?: string) => <FaCar className={className} />,
  Shoes: (className?: string) => <GiConverseShoe className={className} />,
  Users: (className?: string) => <FaUser className={className} />,
  Tag: (className?: string) => <FaTag className={className} />,
};

export default Icons;
