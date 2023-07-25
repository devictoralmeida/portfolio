import { Tooltip as ReactTooltip } from 'react-tooltip'

interface INavigationDotsProps {
  active: string;
}

const NavigationDots = ({ active }: INavigationDotsProps) => (
  <div className="app__navigation">
    {["home", "sobre", "experiências", "projetos", "contato"].map(
      (item, index) => (
        <>
          <a
            href={`#${item}`}
            key={item + index}
            title={`Navegar para a sessão ${item}`}
            content={`Navegar para a sessão ${item}`}
            className="app__navigation-dot"
            style={
              active === item
                ? { backgroundColor: "#313BAC" }
                : { backgroundColor: "null" }
            }
          />
          <ReactTooltip
            data-tooltip-id={`${item}`}
            data-tooltip-content={`Navegar para a sessão ${item}`}
          >
            Navegar para a sessão {item}
          </ReactTooltip>
        </>
      )
    )}
  </div>
);

export default NavigationDots;
