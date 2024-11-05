import {FaHeadphones, FaTag} from "react-icons/fa6";
import {IoShirtSharp} from "react-icons/io5";
import {MdSubscriptions, MdFilterAlt} from "react-icons/md";
import {
  FaCar,
  FaUser,
  FaMobileAlt,
  FaTshirt,
  FaUserTie,
  FaChair,
  FaGifts,
  FaSuitcase,
  FaCamera,
} from "react-icons/fa";
import {GiConverseShoe} from "react-icons/gi";
import {PiHighHeelFill} from "react-icons/pi";

const Icons = {
  headphones: (className?: string) => <FaHeadphones className={className} />,
  Cloth: (className?: string) => <IoShirtSharp className={className} />,
  Subscription: (className?: string) => <MdSubscriptions className={className} />,
  Car: (className?: string) => <FaCar className={className} />,
  Shoes: (className?: string) => <GiConverseShoe className={className} />,
  Users: (className?: string) => <FaUser className={className} />,
  Tag: (className?: string) => <FaTag className={className} />,
  Filter: (className?: string) => <MdFilterAlt className={className} />,
  User: (className?: string) => <FaUser className={className} />,
  Mobile: (className?: string) => <FaMobileAlt className={className} />,
  Tshirt: (className?: string) => <FaTshirt className={className} />,
  Tie: (className?: string) => <FaUserTie className={className} />,
  Chair: (className?: string) => <FaChair className={className} />,
  Gifts: (className?: string) => <FaGifts className={className} />,
  Suitcase: (className?: string) => <FaSuitcase className={className} />,
  HighHeel: (className?: string) => <PiHighHeelFill className={className} />,
  Camera: (className?: string) => <FaCamera className={className} />,
};

export default Icons;
