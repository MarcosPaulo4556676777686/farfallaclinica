const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Configurar transportador de e-mail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Enviar mensagem de contato
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // E-mail para o estabelecimento
    const mailToEstablishment = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Novo contato: ${subject}`,
      html: `
        <h2>Nova Mensagem de Contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `
    };

    // E-mail de confirmação para o cliente
    const mailToClient = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Recebemos sua mensagem!',
      html: `
        <h2>Olá ${name}!</h2>
        <p>Recebemos sua mensagem e entraremos em contato em breve.</p>
        <p>Obrigado pelo interesse em nossos serviços!</p>
        <hr>
        <p><em>Sua mensagem:</em></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailToEstablishment);
    await transporter.sendMail(mailToClient);

    res.status(200).json({
      message: 'Mensagem enviada com sucesso!'
    });
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    res.status(500).json({ message: 'Erro ao enviar mensagem' });
  }
});

module.exports = router;
