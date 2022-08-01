import "./footer.css";
import LogoBlanco from "../../assets/logoBlanco.png";
import LogoAzul from "../../assets/fondoAzul.png";
import PlayStore from "../../assets/play-store.png";
import AppStore from "../../assets/app-store.png";
import { Link } from "react-router-dom";

const categories = [
  { name: "Electronica", id: 0, route: "/category/Electronica" },
  { name: "Joyas", id: 1, route: "/category/Joyas" },
  { name: "Hombre", id: 2, route: "/category/Hombre" },
  { name: "Mujer", id: 3, route: "/category/Mujer" },
];
const Footer = () => {
  return (
    <section className="footer-fixed">
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col-1">
              <h3>Descarga la app</h3>
              <p>Descargala en Android o iPhone</p>
              <div class="app-logo">
                <img src={PlayStore} alt="" />
                <img src={AppStore} alt="" />
              </div>
              <hr className="hr-footer" />
            </div>
            <div class="footer-col-2">
              <img src={LogoAzul} alt="" />
              <p>
                AllStore, el eCommerce por departamento con los mejores
                productos.
              </p>
              <hr className="hr-footer" />
            </div>
            <div class="footer-col-3">
              <h3>Menú</h3>
              <ul>
                {categories.map((category) => (
                  <li className="colorLinks" key={category.id}>
                    <Link className="aNav" to={category.route}>
                      {" "}
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <hr className="hr-footer" />
            </div>
            <div class="footer-col-4">
              <h3>Siguenos</h3>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>
                  <a href="#"></a>
                  Instagram
                </li>
                <li>Youtube</li>
              </ul>
              <hr className="hr-footer" />
            </div>
          </div>
          <hr className="hr-footer1" />
          <p  class="coderhouse">
            Trabajo final para la carrera frontEnd en Coderhouse (2022)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
