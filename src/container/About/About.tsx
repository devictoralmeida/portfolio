"use client";
import { motion } from "framer-motion";
import "./About.scss";
import AppWrap from "@/wrapper/AppWrap";
import MotionWrap from "@/wrapper/MotionWrap";
import Image from "next/image";
import images from "@/constants";
import { scaleVariants } from "../Header/Header";

const About = () => {
  return (
    <>
      <h2 className="head-text">
        Um pouco sobre a <br />
        <span>minha história</span>
      </h2>

      <div className="story-container">
        <motion.div
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="my-story"
        >
          <h3 className="bold-text">
            Amante da tecnologia e de desenvolvedor de soluções inovadoras.
          </h3>
          <p className="p-text">
            Meu nome é Victor Almeida, tenho 28 anos e sou de Fortaleza-CE. Sou
            pós-graduado na área de nutrição esportiva, onde fui professor de
            pós graduações e ministrei diversas palestras aqui no Ceará.
          </p>
          <p className="p-text">
            Atualmente, estou cursando análise e desenvolvimento de sistemas na
            Estácio e também participo da formação em desenvolvimento web da
            Kenzie Academy. Nessa formação, tenho a oportunidade de trabalhar em
            novos projetos semanalmente. Estou completamente apaixonado por essa
            rotina e tenho me dedicado tanto que fui selecionado como monitor.
          </p>
          <p className="p-text">
            Essas experiências ressaltam algumas características importantes que
            possuo: Curiosidade e bastante vontade de aprender; sou um
            entusiasta do estudo e do desenvolvimento profissional.
          </p>
          <p className="p-text">
            Com essa breve descrição sobre a minha trajetória, você podem ter
            certeza que não medirei esforços para contribuir ao máximo com a
            empresa e gerar resultados satisfatórios.
          </p>
        </motion.div>
        <motion.div
          className="media"
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
        >
          <Image
            src={images.speech}
            alt="Gif animado do victor dando uma palestra sobre nutrição na época em que era professor"
            style={{ width: "250px" }}
            quality={100}
          />
          <Image
            src={images.me}
            alt="Foto do victor com a blusa da kenzie, representando sua nova fase como programador"
            quality={100}
          />
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap({
  Component: MotionWrap(About, "app__about"),
  idName: "sobre",
  classNames: "app__whitebg",
});
