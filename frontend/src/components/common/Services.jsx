import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaSpa,
  FaMagic,
  FaLeaf,
  FaHeart,
  FaStar,
  FaFire,
  FaArrowRight
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: "radiofrequencia-facial",
      icon: <FaSpa />,
      title: "RADIOFREQUÊNCIA FACIAL",
      description: "Ondas eletromagnéticas que estimulam colágeno e elastina para firmeza da pele.",
      price: "R$130,00",
      duration: "45 min",
      image: "/services/radiofrequencia-facial.jpg"
    },
    {
      id: "microagulhamento-regenerativo",
      icon: <FaStar />,
      title: "MICROAGULHAMENTO REGENERATIVO",
      description: "Evolução tecnológica com PDRN e Exossomos para rejuvenescimento celular.",
      price: "R$480,00",
      duration: "60 min",
      image: "/services/microagulhamento.jpg"
    },
    {
      id: "microagulhamento-nutritivo",
      icon: <FaLeaf />,
      title: "MICROAGULHAMENTO NUTRITIVO",
      description: "Nutrição celular global com 62 ativos incluindo PDRN e fatores de crescimento.",
      price: "R$380,00",
      duration: "60 min",
      image: "/services/microagulhamento.jpg"
    },
    {
      id: "protocolo-regenera-olhar",
      icon: <FaFire />,
      title: "PROTOCOLO REGENERA OLHAR",
      description: "Combinação de fios PDO e microagulhamento de PN para rejuvenescimento dos olhos.",
      price: "R$780,00",
      duration: "60 min",
      image: "/services/fios-de-seda.jpg"
    },
    {
      id: "skinbooster-protocoll-alive",
      icon: <FaHeart />,
      title: "SKINBOOSTER (PROTOCOLL ALIVE)",
      description: "Tratamento regenerativo que estimula 5 tipos de colágeno para pele jovem.",
      price: "R$680,00",
      duration: "60 min",
      image: "/services/skinbooster.jpg"
    },
    {
      id: "lipo-de-papada",
      icon: <FaMagic />,
      title: "LIPO DE PAPADA",
      description: "Lipo enzimática minimamente invasiva para redução de gordura na papada.",
      price: "R$200,00",
      duration: "30-45 min",
      image: "/services/lipo-de-papada.jpg"
    },
    {
      id: "hidratacao-facial-pele-de-seda",
      icon: <FaStar />,
      title: "HIDRATAÇÃO FACIAL PELE DE SEDA",
      description: "Hidratação de choque com fios de seda para pele macia e viçosa.",
      price: "R$120,00",
      duration: "45 min",
      image: "/services/fios-de-seda.jpg"
    },
    {
      id: "spa-facial",
      icon: <FaSpa />,
      title: "SPA FACIAL",
      description: "Protocolo relaxante com argila verde para detox natural da pele.",
      price: "R$140,00",
      duration: "60 min",
      image: "/services/spa-facial.jpg"
    },
    {
      id: "peeling-coreano",
      icon: <FaMagic />,
      title: "PEELING COREANO LHA PEEL ADCOS",
      description: "Peeling químico inspirado no conceito glass skin sem descamação intensa.",
      price: "R$180,00",
      duration: "60 min",
      image: "/services/peeling-coreano.jpg"
    },
    {
      id: "protocolo-nano-lift",
      icon: <FaHeart />,
      title: "PROTOCOLO NANO LIFT",
      description: "Bioestimulação avançada com nanotecnologia para melhoria da qualidade cutânea.",
      price: "R$680,00",
      duration: "75 min",
      image: "/services/nano-lift.webp"
    },
    {
      id: "limpeza-de-pele-ledterapia",
      icon: <FaStar />,
      title: "LIMPEZA DE PELE COM LEDTERAPIA",
      description: "Remove impurezas e estimula colágeno com Ledterapia para pele renovada.",
      price: "R$170,00",
      duration: "60 min",
      image: "/services/limpeza-de-pele.jpg"
    },
    {
      id: "peeling-quimico",
      icon: <FaFire />,
      title: "PEELING QUÍMICO",
      description: "Renovação celular com ácido retinóico para rugas, manchas e acne.",
      price: "R$250,00",
      duration: "45-60 min",
      image: "/services/peeling-quimico.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="services section">
      <div className="container">
        <div className="section-title">
          <h2>Nossos Serviços</h2>
          <p>
            Protocolos premium de estética facial e rejuvenescimento natural,
            com tecnologia moderna e atendimento exclusivo.
          </p>
        </div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="service-image">
                <img src={service.image} alt={`${service.title} premium`} loading="lazy" />
                <div className="service-overlay">
                  <div className="service-icon">{service.icon}</div>
                </div>
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-meta">
                  <span className="service-price">{service.price}</span>
                  <span className="service-duration">{service.duration}</span>
                </div>

                <Link to="/agendamento" className="service-btn">
                  Agendar
                  <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="services-cta">
          <p>Não encontrou o que procura?</p>
          <Link to="/servicos" className="btn btn-primary">
            Ver Todos os Serviços
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
