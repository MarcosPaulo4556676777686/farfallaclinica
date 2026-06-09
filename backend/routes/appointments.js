const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Armazenamento temporário (em produção, usar banco de dados)
let appointments = [];

// Configurar transportador de e-mail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Criar novo agendamento
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service, date, time, notes } = req.body;

    const appointment = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      service,
      date,
      time,
      notes,
      status: 'pending',
      createdAt: new Date()
    };

    appointments.push(appointment);

    // Enviar e-mail de confirmação
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirmação de Agendamento - Estética',
      html: `
        <h2>Olá ${name}!</h2>
        <p>Seu agendamento foi recebido com sucesso!</p>
        <h3>Detalhes do Agendamento:</h3>
        <ul>
          <li><strong>Serviço:</strong> ${service}</li>
          <li><strong>Data:</strong> ${date}</li>
          <li><strong>Horário:</strong> ${time}</li>
        </ul>
        <p>Em breve entraremos em contato para confirmar seu horário.</p>
        <p>Obrigado!</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: 'Agendamento criado com sucesso!',
      appointment
    });
  } catch (error) {
    console.error('Erro ao criar agendamento:', error);
    res.status(500).json({ message: 'Erro ao criar agendamento' });
  }
});

// Listar todos os agendamentos
router.get('/', (req, res) => {
  res.json(appointments);
});

// Buscar agendamento por ID
router.get('/:id', (req, res) => {
  const appointment = appointments.find(a => a.id === req.params.id);
  if (!appointment) {
    return res.status(404).json({ message: 'Agendamento não encontrado' });
  }
  res.json(appointment);
});

// Atualizar status do agendamento
router.patch('/:id', (req, res) => {
  const { status } = req.body;
  const index = appointments.findIndex(a => a.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: 'Agendamento não encontrado' });
  }

  appointments[index].status = status;
  res.json(appointments[index]);
});

// Deletar agendamento
router.delete('/:id', (req, res) => {
  const index = appointments.findIndex(a => a.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: 'Agendamento não encontrado' });
  }

  appointments.splice(index, 1);
  res.json({ message: 'Agendamento deletado com sucesso' });
});

module.exports = router;
