import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '5547991452455';
  const message = 'Olá! Gostaria de agendar uma consulta na Farfalla Clínica Estética.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float animate-heartbeat"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-text">Agende Agora!</span>
    </a>
  );
};

export default WhatsAppButton;
