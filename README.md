# Site de Estética Premium

## 📋 Descrição

Site moderno e profissional para clínica de estética, desenvolvido com React, Node.js e as melhores práticas de desenvolvimento web.

## ✨ Funcionalidades Implementadas

### Backend (Node.js + Express)
- ✅ API REST completa
- ✅ Sistema de agendamentos com envio de e-mail
- ✅ Blog com posts e categorias
- ✅ Formulário de contato
- ✅ Rotas organizadas e modularizadas

### Frontend (React + Vite)
- ✅ Componentes criados:
  - Header com menu responsivo
  - Footer completo
  - Hero section com animações
  - Seção de serviços
  - Componente de promoções
- ✅ Design responsivo
- ✅ Animações com Framer Motion
- ✅ Paleta de cores sofisticada
- ✅ Tipografia moderna (Poppins + Playfair Display)

## 🚀 Como Executar

### Backend

```bash
cd backend
npm install
```

1. Crie um arquivo `.env` baseado no `.env.example`:
```env
PORT=5000
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-app
```

2. Execute o servidor:
```bash
npm run dev
```

O servidor estará rodando em `http://localhost:5000`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

O site estará rodando em `http://localhost:5173`

## 📁 Estrutura do Projeto

```
estetica-site/
├── backend/
│   ├── routes/
│   │   ├── appointments.js  # Rotas de agendamento
│   │   ├── blog.js          # Rotas do blog
│   │   └── contact.js       # Rotas de contato
│   ├── server.js            # Servidor Express
│   ├── package.json
│   └── .env.example
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── layout/
    │   │   │   ├── Header.jsx
    │   │   │   ├── Header.css
    │   │   │   ├── Footer.jsx
    │   │   │   └── Footer.css
    │   │   └── common/
    │   │       ├── Hero.jsx
    │   │       ├── Hero.css
    │   │       ├── Services.jsx
    │   │       ├── Services.css
    │   │       ├── Promotions.jsx
    │   │       └── Promotions.css
    │   ├── pages/          # Criar páginas aqui
    │   ├── styles/
    │   │   └── global.css
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

## 🎨 Paleta de Cores

- **Primary:** #D4A574 (Dourado suave)
- **Primary Dark:** #B8935F
- **Primary Light:** #E8CEB4
- **Secondary:** #8B7355
- **Accent:** #E6B8A2
- **Dark:** #2C2C2C
- **White:** #FFFFFF
- **Background Light:** #FAF8F6

## 📝 Próximos Passos para Completar o Site

### 1. Configurar o App.jsx

Crie o arquivo `frontend/src/App.jsx`:

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
// Importe as outras páginas aqui

import './styles/global.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Adicione as outras rotas aqui */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
```

### 2. Criar Páginas Restantes

#### Home.jsx (src/pages/Home.jsx)
```jsx
import Hero from '../components/common/Hero';
import Services from '../components/common/Services';
import Promotions from '../components/common/Promotions';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Promotions />
    </div>
  );
};

export default Home;
```

#### Services.jsx (Página de Serviços Completa)
- Criar galeria de fotos
- Listar todos os serviços
- Adicionar filtros por categoria

#### Blog.jsx (Listagem de Posts)
- Conectar com a API do backend
- Mostrar posts em grid
- Adicionar paginação
- Sistema de busca

#### BlogPost.jsx (Post Individual)
- Exibir conteúdo completo
- Posts relacionados
- Comentários

#### Contact.jsx (Formulário de Contato)
```jsx
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert('Mensagem enviada com sucesso!');
    } catch (error) {
      alert('Erro ao enviar mensagem');
    }
  };

  return (
    // Adicionar formulário aqui
  );
};
```

#### Appointment.jsx (Sistema de Agendamento)
```jsx
import { useState } from 'react';
import axios from 'axios';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/appointments', formData);
      alert('Agendamento realizado com sucesso!');
    } catch (error) {
      alert('Erro ao agendar');
    }
  };

  return (
    // Adicionar formulário de agendamento
  );
};
```

### 3. Implementar SEO

Instale o React Helmet:
```bash
npm install react-helmet-async
```

Use em cada página:
```jsx
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Estética Premium - Cuidados Estéticos de Excelência</title>
        <meta name="description" content="Tratamentos estéticos com tecnologia de ponta..." />
        <meta property="og:title" content="Estética Premium" />
        <meta property="og:description" content="Cuidados estéticos..." />
      </Helmet>
      {/* Conteúdo da página */}
    </>
  );
};
```

### 4. Adicionar Componentes Extras

#### Testimonials (Depoimentos)
#### Gallery (Galeria de Fotos)
#### BeforeAfter (Antes e Depois)
#### FAQ (Perguntas Frequentes)

### 5. Integrações de Redes Sociais

- Adicionar botões de compartilhamento
- Feed do Instagram (usando API)
- Pixel do Facebook para anúncios

### 6. Otimizações

- Lazy loading de imagens
- Code splitting
- Compressão de assets
- PWA (Progressive Web App)

### 7. Deploy

#### Backend
- Heroku, Railway, ou Render
- Configurar variáveis de ambiente
- Conectar banco de dados (MongoDB Atlas)

#### Frontend
- Vercel, Netlify, ou GitHub Pages
- Configurar variáveis de ambiente
- Otimizar build

## 🔧 Configurações Importantes

### E-mail (Nodemailer)

Para usar o Gmail, você precisa:
1. Ativar "Verificação em duas etapas"
2. Gerar uma "Senha de app"
3. Usar essa senha no `.env`

### Banco de Dados (Opcional)

Para produção, recomendo usar MongoDB:

```bash
npm install mongodb
```

Conectar no `server.js`:
```javascript
const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
```

## 📱 Recursos Mobile

O site já está otimizado para mobile com:
- Menu hamburger
- Grid responsivo
- Imagens adaptáveis
- Touch-friendly buttons

## 🎯 Features Avançadas (Futuro)

- [ ] Dashboard administrativo
- [ ] Sistema de login
- [ ] Pagamentos online
- [ ] Chat em tempo real
- [ ] Notificações push
- [ ] Programa de fidelidade
- [ ] Cupons de desconto
- [ ] Avaliações de clientes
- [ ] Agendamento com Google Calendar
- [ ] Lembretes automáticos por SMS/WhatsApp

## 📚 Tecnologias Utilizadas

- **Frontend:** React 18, Vite, React Router, Framer Motion, React Icons
- **Backend:** Node.js, Express, Nodemailer, CORS
- **Estilização:** CSS3 com variáveis customizadas
- **Tipografia:** Google Fonts (Poppins, Playfair Display)
- **Imagens:** Unsplash (placeholder - substituir por imagens próprias)

## 🤝 Contribuindo

Para adicionar novos recursos:
1. Crie componentes reutilizáveis
2. Mantenha a consistência de estilo
3. Use as variáveis CSS definidas em `global.css`
4. Adicione animações sutis com Framer Motion
5. Teste em diferentes dispositivos

## 📄 Licença

Este projeto foi criado para uso pessoal/comercial.

## 💡 Dicas

1. **Imagens:** Substitua as imagens do Unsplash por fotos profissionais do estabelecimento
2. **Conteúdo:** Personalize todos os textos com informações reais
3. **Contatos:** Atualize telefones, e-mails e endereço
4. **Redes Sociais:** Adicione links reais das redes sociais
5. **Serviços:** Ajuste a lista de serviços conforme oferecido
6. **Preços:** Atualize os valores dos tratamentos
7. **Horários:** Configure horários reais de funcionamento

## 🆘 Suporte

Para dúvidas sobre:
- **React:** https://react.dev
- **Vite:** https://vitejs.dev
- **Express:** https://expressjs.com
- **Framer Motion:** https://www.framer.com/motion

---

**Desenvolvido com dedicação para Estética Premium** ✨
