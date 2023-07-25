import { BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/devictoralmeida" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/victoralmeida-dev" target="_blank">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
