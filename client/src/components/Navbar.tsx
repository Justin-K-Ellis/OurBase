import { Link } from "react-router";
import type { LinkData } from "../types/LinkData";

export default function Navbar() {
  const links: LinkData[] = [
    {
      text: "Home",
      url: "/",
    },
  ];

  return (
    <nav className="navbar bg-base-100 shadow">
      <div className="navbar-start">
        <p>Navbar</p>
      </div>
      <div className="navbar-end gap-2">
        {links.map((link) => (
          <Link to={link.url} key={link.url}>
            {link.text}
          </Link>
        ))}
      </div>
    </nav>
  );
}
