"use client";

import { motion } from "framer-motion";
import "./Header.scss";
import images from "@/constants";
import Image from "next/image";
import AppWrap from "@/wrapper/AppWrap";
import Background from "@/components/Background/Background";
import Avatar from "@/components/Avatar/Avatar";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <Background />
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Olá, eu me chamo</p>
              <h1 className="head-text">Victor</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Desenvolvedor Frontend</p>
          </div>
        </div>
      </motion.div>

      <Avatar/>
      
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.typescript, images.react, images.styled].map(
          (circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <Image src={circle} alt="circle" />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default AppWrap({
  Component: Header,
  idName: "home",
});
