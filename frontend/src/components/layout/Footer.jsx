import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
  FaClock,
  FaHeart
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>Farfalla Clínica Estética</h3>
              <p className="footer-description">
                Estética facial avançada e bem-estar feminino em uma experiência
                premium, moderna e acolhedora.
              </p>
              <div className="social-links">
                <a href="https://www.instagram.com/farfalla.clinica.estetica/?hl=pt-br" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://wa.me/5547991452455" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Links Rápidos</h4>
              <ul className="footer-links">
                <li><Link to="/">Início</Link></li>
                <li><Link to="/servicos">Serviços</Link></li>
                <li><Link to="/sobre">Sobre Nós</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/agendamento">Agendar Consulta</Link></li>
                <li><Link to="/contato">Contato</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Nossos Serviços</h4>
              <ul className="footer-links">
                <li><Link to="/servicos#botox">Botox</Link></li>
                <li><Link to="/servicos#aquapure">Aquapure (limpeza, hidratação e nutrição)</Link></li>
                <li><Link to="/servicos#microagulhamento-regenerativo">Microagulhamento Regenerativo</Link></li>
                <li><Link to="/servicos#skinbooster-protocoll-alive">Skinbooster Regenerativo</Link></li>
                <li><Link to="/servicos#bioestimulador-de-colageno-injetavel">Bioestimulador de colágeno (não injetável)</Link></li>
                <li><Link to="/servicos#peeling-quimico">Peeling Químico</Link></li>
                <li><Link to="/servicos#hidratacao-facial-pele-de-seda">Hidratação facial Pele de Seda</Link></li>
                <li><Link to="/servicos#spa-facial">SPA facial com argila + Ledterapia</Link></li>
                <li><Link to="/servicos#radiofrequencia-facial">Radiofrequência (flacidez e gordura)</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contato</h4>
              <ul className="footer-contact">
                <li>
                  <FaMapMarkerAlt />
                  <span>Rua Amazonas, 3070, sala 01<br />Blumenau/SC</span>
                </li>
                <li>
                  <FaPhone />
                  <a href="tel:+5547991452455">(47) 99145-2455</a>
                </li>
                <li>
                  <FaEnvelope />
                  <a href="mailto:farfallabiomedicinaestetica@gmail.com">farfallabiomedicinaestetica@gmail.com</a>
                </li>
                <li>
                  <FaClock />
                  <span>Seg - Sex: 9h às 19h<br />Sáb: 9h às 14h</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>
              &copy; {currentYear} Farfalla Clínica Estética. Todos os direitos reservados.
            </p>
            <p className="footer-credits">
              Feito com <FaHeart className="heart-icon" /> para você
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
