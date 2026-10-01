import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import type { LinkData } from "../types/LinkData";

export default function Navbar() {
  const { t } = useTranslation();

  const links: LinkData[] = [
    {
      text: t("nav.home"),
      url: "/",
    },
    {
      text: t("nav.about"),
      url: "/about",
    },
  ];

  return (
    <nav className="navbar bg-base-100 shadow">
      <div className="navbar-start">
        <p>{t("nav.brand")}</p>
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
