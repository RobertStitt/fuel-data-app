import { NavLink } from "react-router";

type NavItem = {
  name: string;
  path: string;
};

const navItems: NavItem[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Species Gallery",
    path: "/species-gallery",
  },
  {
    name: "Favorites",
    path: "/favorites",
  },
  {
    name: "About",
    path: "/about",
  },
];

const AppSidebar: React.FC = () => {
  return (
    <aside>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AppSidebar;
