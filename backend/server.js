const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
const appointmentRoutes = require('./routes/appointments');
const blogRoutes = require('./routes/blog');
const contactRoutes = require('./routes/contact');

app.use('/api/appointments', appointmentRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/contact', contactRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'API do Site de Estética funcionando!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
