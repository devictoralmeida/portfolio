/* eslint-disable @next/next/no-img-element */
"use client";
import { client, urlFor } from "@/app/client";
import AppWrap from "@/wrapper/AppWrap";
import MotionWrap from "@/wrapper/MotionWrap";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import "./Work.scss";
import Image from "next/image";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data: any) => {
      setWorks(data);
      setFilterWork(data);
      console.log(data)
    });
  }, []);

  const handleWorkFilter = (item: any) => {
    setActiveFilter(item);
    // setAnimateCard([{ y: 100, opacity: 0 }]);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      // setAnimateCard([{ y: 0, opacity: 1 }]);
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work: any) => work.tags.includes(item)));
      }
    }, 500);
  };

  let img
  return (
    <>
      <h2 className="head-text">
        Meus <span>Projetos</span>
      </h2>

      <div className="app__work-filter">
        {[
          "Javascript",
          "Typescript",
          "Styled Components",
          "React JS",
          "All",
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work: any, index) => (
          <div className="app__work-item" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap({
  Component: MotionWrap(Work, "app__works"),
  idName: "projetos",
  classNames: "app__primarybg",
});