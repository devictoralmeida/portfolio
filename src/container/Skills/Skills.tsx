/* eslint-disable @next/next/no-img-element */
"use client";
import { client, urlFor } from "@/app/client";
import AppWrap from "@/wrapper/AppWrap";
import MotionWrap from "@/wrapper/MotionWrap";
import { motion } from "framer-motion";
import { produce } from "immer";
import { useState, useEffect } from "react";
import "./Skills.scss";
import { IExperiences, ISkills } from "./@types";

const Skills = () => {
  const [experience, setExperience] = useState<IExperiences[] | null>(null);
  const [skills, setSkills] = useState<ISkills[] | null>(null);

  function reorderArrayByUpdatedAt(array: IExperiences[]) {
    return produce(array, (draft) => {
      draft.sort((a, b) => {
        const dateA: any = new Date(a._createdAt);
        const dateB: any = new Date(b._createdAt);
        return dateB - dateA;
      });
    });
  }

  useEffect(() => {
    const loadData = async () => {
      const query = '*[_type == "experiences"]';
      const skillsQuery = '*[_type == "skills"]';

      await client.fetch(query).then((data: IExperiences[]) => {
        const updatedExperiences = reorderArrayByUpdatedAt(data);
        setExperience(updatedExperiences);
      });

      await client.fetch(skillsQuery).then((data) => {
        setSkills(data);
      });
    };
    loadData();
  }, []);

  return (
    <>
      <h2 className="head-text">
        Tecnologias & <span>Experiências</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name + index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img
                  src={urlFor(skill.icon) as unknown as string}
                  alt={skill.name}
                />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experience?.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year + experience}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>

              <motion.div
                className="app__skills-exp-works"
                key="animated container"
              >
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                      <p className="p-text work-description">{work.desc}</p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap({
  Component: MotionWrap(Skills, "app__skills"),
  idName: "experiências",
  classNames: "app__whitebg",
});
