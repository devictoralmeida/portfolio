interface INavigationDotsProps {
  active: string;
}

const NavigationDots = ({ active }: INavigationDotsProps) => (
  <div className="app__navigation">
    {["home", "sobre", "experiências", "projetos", "contato"].map(
      (item, index) => (
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
      )
    )}
  </div>
);

export default NavigationDots;
