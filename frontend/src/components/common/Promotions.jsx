import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTag, FaPercent, FaGift, FaClock } from 'react-icons/fa';
import './Promotions.css';

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      icon: <FaPercent />,
      title: 'Check-up Premium',
      subtitle: 'Avaliação Facial Completa',
      description: 'Consultoria estética personalizada para identificar o melhor protocolo.',
      badge: 'Exclusivo',
      color: 'primary',
      validUntil: '30/06/2026'
    },
    {
      id: 2,
      icon: <FaGift />,
      title: 'Experiência Farfalla',
      subtitle: 'Pacote de Rejuvenescimento',
      description: 'Sessões combinadas de tratamentos faciais premium para resultados visíveis.',
      badge: 'Pacote',
      color: 'secondary',
      validUntil: '30/06/2026'
    },
    {
      id: 3,
      icon: <FaTag />,
      title: 'Ritual de Beleza',
      subtitle: 'Spa Facial',
      description: 'Cuidado delicado e tecnologicamente avançado para pele luminosa e suave.',
      badge: 'Por Tempo Limitado',
      color: 'accent',
      validUntil: '30/06/2026'
    }
  ];

  return (
    <section className="promotions section">
      <div className="container">
        <div className="section-title">
          <h2>Promoções Especiais</h2>
          <p>
            Aproveite ofertas pensadas para quem busca estética premium, rejuvenescimento e bem-estar.
          </p>
        </div>

        <div className="promotions-grid">
          {promotions.map((promo, index) => (
            <motion.div
              key={promo.id}
              className={`promotion-card promotion-${promo.color}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="promotion-badge">{promo.badge}</div>

              <div className="promotion-icon">{promo.icon}</div>

              <div className="promotion-content">
                <h3 className="promotion-title">{promo.title}</h3>
                <h4 className="promotion-subtitle">{promo.subtitle}</h4>
                <p className="promotion-description">{promo.description}</p>

                <div className="promotion-validity">
                  <FaClock />
                  <span>Válido até {promo.validUntil}</span>
                </div>

                <Link to="/agendamento" className="promotion-btn">
                  Aproveitar Oferta
                </Link>
              </div>

              <div className="promotion-decoration"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="promotions-newsletter"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="newsletter-content">
            <h3>Receba Ofertas Exclusivas</h3>
            <p>Cadastre-se e seja o primeiro a conhecer nossos protocolos premium.</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="newsletter-input"
              required
            />
            <button type="submit" className="btn btn-primary">
              Inscrever-se
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Promotions;
