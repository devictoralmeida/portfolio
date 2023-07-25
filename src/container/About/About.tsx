"use client";
import { motion } from "framer-motion";
import "./About.scss";
import AppWrap from "@/wrapper/AppWrap";
import MotionWrap from "@/wrapper/MotionWrap";
import VideoPlayer from "@/components/Videoplayer/Videoplayer";
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
            Amante da tecnologia e desenvolvedor de soluções inovadoras.
          </h3>
          <p className="p-text">
            Desde que ganhei meu primeiro computador, eu não queria mais saber
            de outra coisa, com ele eu conseguia ter tudo que eu precisava,
            desde momentos de lazer, estudos e ainda me conectar com meus
            amigos. O computador me despertou uma grande curiosidade em entender
            como tudo aquilo funcionava.
          </p>
          <p className="p-text">
            Entretanto a vida me levou para outros caminhos, onde me graduei
            como nutricionista, me tornei professor e criei a minha própria
            escola digital, conquistando mais de 500 alunos, mas essa não era a
            jornada que eu queria seguir.
          </p>
          <p className="p-text">
            Essa experiência me trouxe grandes aprendizados na área do
            empreendedorismo, tecnologia e marketing.
          </p>
          <p className="p-text">
            Mergulhar nesse meio digital reacendeu o meu desejo de entrar para
            da área da tecnologia e desbravar esse mundo que veio pra ficar.
          </p>
          <p className="p-text">
            Atualmente estudo Análise e desenvolvimento de sistemas & Desenvolvimento Web Fullstack na Kenzie Academy
            e sinto que finalmente encontrei o meu caminho.
          </p>
        </motion.div>
        <motion.div
          className="media"
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
        >
          {/* <VideoPlayer /> */}
          <Image
            src={images.speech}
            alt="Gif animado do victor dando uma palestra sobre nutrição na época em que era professor"
            style={{ width: "250px" }}
          />
          <Image
            src={images.me}
            alt="Foto do victor com a blusa da kenzie, representando sua nova fase como programador"
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
