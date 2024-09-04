import "./footer.css";

import LogoAzul from "../../assets/fondoAzul.png";
import Logo from "../../assets/logo.png";
import PlayStore from "../../assets/play-store.png";
import AppStore from "../../assets/app-store.png";
import { Link } from "react-router-dom";

const categories = [
  { name: "Electronica", id: 0, route: "/category/Electronica" },
  { name: "Cocina", id: 1, route: "/category/Cocina" },
  { name: "Otros", id: 2, route: "/category/Otros" },
];
const Footer = () => {
  return (
    <section>
      <div className="section-footer">
        <div className="container-footer">
          <div className="row-footer">
            <div className="footer-col-1">
              <h3>Descarga la app</h3>
              <p>Descargala en Android o iPhone</p>
              <div className="app-logo-footer">
                <img src={PlayStore} alt="" />
                <img src={AppStore} alt="" />
              </div>
              <hr className="hr-footer" />
            </div>
            <div className="footer-col-2">
              <img src={Logo} alt="" />

              <hr className="hr-footer" />
            </div>
            <div className="footer-col-3">
              <h3>Menú</h3>
              <ul>
                {categories.map((category) => (
                  <li className="link-footer" key={category.id}>
                    <Link className="link-footer" to={category.route}>
                      {" "}
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <hr className="hr-footer" />
            </div>
            <div className="footer-col-4">
              <hr className="hr-footer" />
            </div>
          </div>
          <hr className="hr-footer1" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
