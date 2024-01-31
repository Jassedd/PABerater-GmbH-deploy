const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
const { onRequest } = require('firebase-functions/v2/https');
const logger = require('firebase-functions/logger');

const transporter = nodemailer.createTransport({
  host: functions.config().smtp.host,
  port: functions.config().smtp.puerto,
  secure: true,
  auth: {
    user: functions.config().correo.usuario,
    pass: functions.config().correo.contraseña,
  },
});

exports.enviarCorreo = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const { nombre, email, mensaje } = req.body;

      // Verificar si los datos requeridos están presentes
      if (!nombre || !email || !mensaje) {
        res.status(400).send('Datos incompletos en la solicitud.');
        return;
      }

      // Detalles del correo electrónico
      const mailOptions = {
        from: functions.config().correo.usuario,
        to: functions.config().correo.destinatario,
        subject: `Nuevo mensaje de ${nombre} (${email})`,
        text: mensaje,
      };

      // Enviar el correo electrónico
      await transporter.sendMail(mailOptions);

      res.status(200).send('Correo enviado correctamente');
    } catch (error) {
      logger.error(error);  // Usar el logger de Firebase Functions
      res.status(500).send(`Error al enviar el correo: ${error}`);
    }
  });
});
