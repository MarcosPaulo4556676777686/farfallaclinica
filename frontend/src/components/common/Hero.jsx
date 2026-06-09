import { Link } from 'react-router-dom';
import { FaArrowRight, FaWhatsapp, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-video-background">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Clínica Premium de Estética Facial
            </motion.span>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Realce sua beleza com sofisticação e naturalidade
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Um espaço criado para realçar sua beleza e autoestima por meio de tratamentos estéticos personalizados. Acreditamos que cuidar da pele e das unhas é um verdadeiro ato de amor próprio, essencial para o bem-estar e a confiança.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <a
                href="https://wa.me/5547991452455?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Farfalla%20Clínica%20Estética."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg animate-glow shimmer"
              >
                <FaWhatsapp />
                Agendar no WhatsApp
              </a>
              <Link to="/servicos" className="btn btn-secondary btn-lg">
                Nossos Serviços
                <FaArrowRight />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <div className="hero-image-wrapper sparkle">
              <img
                src="/hero-image.jpg"
                alt="Tratamento estético profissional"
              />
              <div className="hero-image-decoration"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-features"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="features-content">
            <div className="features-contact">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Rua Amazonas, 3070, sala 01 - Blumenau/SC</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+5547991452455">(47) 99145-2455</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
