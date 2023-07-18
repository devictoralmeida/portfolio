import NavigationDots from "@/components/NavigationDots/NavigationDots";
import SocialMedia from "@/components/SocialMedia/SocialMedia";

interface IAppWrapProps {
  Component: () => JSX.Element;
  idName: string;
  classNames?: string;
}

const AppWrap = ({ Component, idName, classNames }: IAppWrapProps) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">&#169; 2023 victor almeida</p>
            <p className="p-text">Todos os direitos reservados</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
