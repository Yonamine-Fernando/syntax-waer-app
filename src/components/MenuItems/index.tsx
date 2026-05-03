interface MenusProps {
  title: string;
  items: string[];
}
const menus = [
  { title: "Masuculino", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
  { title: "Feminino", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
  { title: "Nossas Lojas", items: ["Loja fisíca", "Loja online"] },
  { title: "Outlet", items: ["Masculino", "Feminino"] },
  { title: "Sobre", items: ["Quem Somos", "Missão"] },
];

export const MenuItems = () => {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-5 sm:gap-2 mb-5 ">
      {menus.map(({ title, items }: MenusProps) => (
        <nav key={title}>
          <ul className="flex flex-col gap-4">
            <li>
              <p className="font-normal text-surface-alt text-xl">{title}</p>
            </li>
            {items.map((item) => (
              <li key={item}>
                <a className="font-medium hover:text-text-tertiary transition-colors" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
};
