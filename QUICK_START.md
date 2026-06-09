# 🚀 Guia Rápido de Inicialização

## Iniciando o Projeto em 3 Passos

### 1️⃣ Configurar o Backend

```bash
cd C:\Users\StorTech\estetica-site\backend
```

Crie o arquivo `.env` com:
```
PORT=5000
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app-do-gmail
```

Inicie o servidor:
```bash
npm run dev
```

✅ Backend rodando em: `http://localhost:5000`

---

### 2️⃣ Iniciar o Frontend

Abra um **novo terminal** e execute:

```bash
cd C:\Users\StorTech\estetica-site\frontend
npm run dev
```

✅ Frontend rodando em: `http://localhost:5173`

---

### 3️⃣ Acessar o Site

Abra seu navegador e acesse:
**http://localhost:5173**

---

## 📋 O Que Foi Criado

### ✅ Backend Completo
- Sistema de agendamentos com notificação por e-mail
- API de blog com posts pré-cadastrados
- Sistema de contato
- Todas as rotas funcionando

### ✅ Frontend Funcional
- **Header** - Menu responsivo com links
- **Footer** - Informações completas e links
- **Hero** - Seção principal com animações
- **Services** - 6 serviços com cards interativos
- **Promotions** - Seção de promoções com newsletter
- **Design Responsivo** - Funciona em todos os dispositivos

---

## 🎨 Personalização Rápida

### Trocar Cores

Edite `frontend/src/styles/global.css`:

```css
:root {
  --primary-color: #D4A574;  /* Sua cor principal */
  --primary-dark: #B8935F;
  /* ... outras cores */
}
```

### Trocar Informações de Contato

Edite `frontend/src/components/layout/Header.jsx` e `Footer.jsx`:
- Telefone
- E-mail
- Endereço
- Redes sociais

### Adicionar Seus Serviços

Edite `frontend/src/components/common/Services.jsx`:
- Adicione/remova serviços
- Altere preços
- Mude descrições

---

## 🔧 Solução de Problemas Comuns

### Erro: "Cannot find module"
```bash
cd frontend
npm install
```

### Porta já em uso
Altere a porta no `.env` do backend ou feche o processo que está usando a porta 5000.

### E-mail não está enviando
1. Use Gmail
2. Ative verificação em 2 etapas
3. Gere uma "Senha de App"
4. Use essa senha no `.env`

---

## 📱 Próximos Passos Sugeridos

### Prioridade Alta:
1. **Substituir Imagens** - Troque as imagens do Unsplash por fotos reais
2. **Atualizar Textos** - Personalize todos os textos
3. **Configurar E-mail** - Configure o envio de e-mails

### Prioridade Média:
4. **Adicionar Mais Páginas** - Sobre, Serviços completa, Blog
5. **Sistema de Agendamento** - Página de agendamento funcional
6. **SEO** - Adicionar meta tags e otimizar

### Prioridade Baixa:
7. **Analytics** - Google Analytics
8. **Banco de Dados** - MongoDB para persistência
9. **Deploy** - Colocar online

---

## 📞 Testando Funcionalidades

### Testar Agendamento via API

Usando Postman ou Insomnia:

**POST** `http://localhost:5000/api/appointments`

Body (JSON):
```json
{
  "name": "Maria Silva",
  "email": "maria@email.com",
  "phone": "11999999999",
  "service": "Limpeza de Pele",
  "date": "2024-12-15",
  "time": "14:00",
  "notes": "Primeira vez"
}
```

### Testar Blog

**GET** `http://localhost:5000/api/blog`

Retorna todos os posts do blog.

### Testar Contato

**POST** `http://localhost:5000/api/contact`

Body (JSON):
```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "phone": "11988888888",
  "subject": "Dúvida sobre tratamento",
  "message": "Gostaria de saber mais sobre..."
}
```

---

## 🌟 Recursos Incluídos

- ✅ Design moderno e profissional
- ✅ Paleta de cores sofisticada
- ✅ Animações suaves (Framer Motion)
- ✅ Ícones elegantes (React Icons)
- ✅ Responsivo (mobile, tablet, desktop)
- ✅ SEO-friendly
- ✅ Performance otimizada
- ✅ Código limpo e organizado

---

## 📚 Documentação Completa

Para mais detalhes, veja o arquivo `README.md`

---

**Desenvolvido com dedicação** ✨

Qualquer dúvida, consulte a documentação das tecnologias:
- React: https://react.dev
- Vite: https://vitejs.dev
- Express: https://expressjs.com
