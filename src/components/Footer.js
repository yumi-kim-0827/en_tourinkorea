import logoImg from "../images/logo_main_w.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer_wrap">
        <div className="logo_area">
          <img src={logoImg} alt="TOURinSouthKoreaNow" />
        </div>
        <div className="menu_area">
          <p>MENU</p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/info">Why Visit South Korea?</Link>
            </li>
            <li>
              <Link to="/vidoes">South Korea Trip Videos</Link>
            </li>
            <li>
              <Link to="/review">Leave you comment!</Link>
            </li>
          </ul>
        </div>
        <div className="copy">Copyright© KIM YUMEE</div>
      </div>
    </footer>
  );
}
export default Footer;
