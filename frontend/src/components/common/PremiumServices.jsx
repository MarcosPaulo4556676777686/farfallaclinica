import { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaClock, FaWhatsapp, FaChevronRight } from 'react-icons/fa';
import { servicesData, categories } from '../../data/services-data';
import './PremiumServices.css';

const PremiumServices = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.9]);

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(service => service.category === activeCategory);

  const regularServices = filteredServices;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section className="premium-services" id="procedimentos">
      {/* Header Premium */}
      <motion.div
        className="premium-header"
        style={{ opacity, scale }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="container">
          <motion.span
            className="premium-header-tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Farfalla Estética
          </motion.span>

          <motion.h2
            className="premium-header-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Nossos Procedimentos
          </motion.h2>

          <motion.p
            className="premium-header-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Tratamentos personalizados para realçar sua beleza natural
            <br className="desktop-only" /> com elegância, sofisticação e naturalidade.
          </motion.p>

          <motion.div
            className="premium-header-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </div>
      </motion.div>

      {/* Filtro de Categorias */}
      <motion.div
        className="category-filter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="container">
          <div className="category-scroll">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              >
                {category.name}
                <span className="category-indicator" />
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Grid de Serviços - Layout Alternado */}
      {regularServices.length > 0 && (
        <motion.div
          className="services-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <div className="container">
            <div className="services-grid">
              <AnimatePresence mode="popLayout">
                {regularServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className={`service-card-wrapper ${
                      index % 2 === 0 ? 'image-left' : 'image-right'
                    }`}
                    variants={itemVariants}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    onMouseEnter={() => setHoveredCard(service.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <motion.div
                      className="editorial-card"
                      whileHover={{ y: -5 }}
                    >
                      <div className="editorial-image">
                        <motion.img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          animate={{
                            scale: hoveredCard === service.id ? 1.05 : 1,
                          }}
                          transition={{ duration: 0.6, ease: 'easeOut' }}
                        />
                        <div className="editorial-image-overlay" />
                      </div>

                      <div className="editorial-content">
                        <div className="editorial-header">
                          <span className="service-category">
                            {categories.find(c => c.id === service.category)?.name}
                          </span>
                          <span className="service-duration-mini">
                            <FaClock /> {service.duration}
                          </span>
                        </div>

                        <h3 className="editorial-title">{service.title}</h3>
                        <p className="editorial-description">{service.description}</p>

                        <div className="editorial-footer">
                          <div className="editorial-price">
                            {service.priceType === 'variacao' && service.priceVariations ? (
                              <div className="price-variations">
                                <span className="price-label">Valor:</span>
                                {service.priceVariations.map((variation, index) => (
                                  <div key={index} className="price-variation">
                                    <span className="variation-name">{variation.name}:</span>
                                    <span className="variation-value">R${variation.value},00</span>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <span className="price-text">{service.price}</span>
                            )}
                          </div>

                          <motion.a
                            href={`https://wa.me/5547991452455?text=Olá! Gostaria de agendar ${service.title}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="editorial-cta"
                            whileHover={{ x: 3 }}
                          >
                            <FaWhatsapp />
                            <span>Agendar</span>
                            <FaChevronRight className="chevron" />
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}

      {/* CTA Final */}
      <motion.div
        className="premium-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="cta-content">
            <motion.div
              className="cta-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3>Dúvidas sobre qual procedimento escolher?</h3>
              <p>
                Nossa equipe de especialistas está pronta para ajudar você a encontrar
                o tratamento ideal para suas necessidades.
              </p>
            </motion.div>

            <motion.a
              href="https://wa.me/5547991452455?text=Olá! Gostaria de uma avaliação personalizada."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaWhatsapp />
              <span>Agendar Avaliação Gratuita</span>
              <FaArrowRight />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Elementos Decorativos */}
      <div className="decorative-elements">
        <div className="decor-circle decor-circle-1" />
        <div className="decor-circle decor-circle-2" />
        <div className="decor-line decor-line-1" />
        <div className="decor-line decor-line-2" />
      </div>
    </section>
  );
};

export default PremiumServices;