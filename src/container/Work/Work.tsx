/* eslint-disable @next/next/no-img-element */
"use client";
import { client, urlFor } from "@/app/client";
import AppWrap from "@/wrapper/AppWrap";
import MotionWrap from "@/wrapper/MotionWrap";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import "./Work.scss";
import { IProjects } from "./@types";
import { IWorks } from "../Skills/@types";

const Work = () => {
  const [works, setWorks] = useState<IProjects[] | null>(null);
  const [filterWork, setFilterWork] = useState<IProjects[] | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data: IProjects[]) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);

    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setFilterWork(works);
      } else {
        if (works) {
          setFilterWork(works.filter((work) => work.tags.includes(item)));
        }
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text title">
        Meus <span>Projetos</span>
      </h2>
      <div className="app__work-filter">
        {["Front-end", "Back-end", "All"].map((item, index) => (
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
        {filterWork?.map((work, index) => (
          <div className="app__work-item" key={index}>
            <div className="app__work-img app__flex">
              <img
                src={urlFor(work.imgUrl) as unknown as string}
                alt={work.title}
              />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                {work.projectLink && (
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
                )}

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
            <ul className="tags-container">
              {work.tags.map((tag, index) => {
                if (tag !== "Front-end" && tag !== "Back-end") {
                  return (
                    <li className="app__work-tag" key={tag[index]}>
                      <p className="p-text">{tag}</p>
                    </li>
                  );
                }
              })}
            </ul>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
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
