import "../App.css";
import WhiteLogo from '../assets/logoblanco.svg';
import FacebookLogo from "../assets/facebook.png"
import InstagramLogo from "../assets/instagram.png";
import TwitterLogo from "../assets/twitter.png"
import PaypalLogo from "../assets/paypal.png"
import MasterCardLogo from "../assets/mastercard.png"
import VisaLogo from "../assets/visa.png"
const Footer = () => {
    return (
        <footer>
            <section>
                <div className="logo-icons">
                <img src={WhiteLogo} alt="logo" />               
                <div className="icon-style">
                    <img src={FacebookLogo} alt="Facebook" />
                    <img src={InstagramLogo} alt="Instagram" />
                    <img src={TwitterLogo} alt="Twitter" />
                </div>
            </div>
            
<table>
  <tr>
    <th>Categorías</th>
    <th>Para niños</th>
    <th>Científicos</th>
    
  </tr>
  <tr>
    <td>Psicología</td>
    <td>Juegos</td>
    <td>Matemáticas</td>
    
  </tr>
  <tr>
    <td>Auto-ayuda</td>
    <td>Comic</td>
    <td>Ciencias naturales</td>
  </tr>
  
  <tr>
    <td>Romance</td>
    <td>Fantasía</td>
    <td>Física</td>
  </tr>
  <tr>
    <td>Misterio</td>
  </tr>
</table>
              
            <div>
                <p className="para-question">¡Si tienes alguna duda en usar nuestros servicios, no dudes en contactar!</p>
                <button>Contáctanos</button>
                <div className="payment-logos">
                    <img src={PaypalLogo} alt="paypal" />
                    <img src={MasterCardLogo} alt="MaserCard" />
                    <img src={VisaLogo} alt="Visa" />
                </div>
            </div>
            </section>
            <div className="line"></div>
            <p>© Ecopaginas. Todos los derechos reservados</p>
        </footer>
    );
};

export default Footer;