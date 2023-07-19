import { motion } from "framer-motion";
import "./Avatar.scss";
import images from "@/constants";
import Image from "next/image";

const Avatar = () => {
  return (
    <>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <Image src={images.circle} alt="Profile_bg" className="circle" />
        <Image src={images.perfil4} alt="Profile_bg" className="profile" />
      </motion.div>
    </>
  );
};

export default Avatar;
