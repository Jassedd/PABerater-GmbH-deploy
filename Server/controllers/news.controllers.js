import dotenv from "dotenv"

import { News } from "../model/News.js";
import { connectSftp, closeSftp, uploadFile, getFirstRemoteImage } from '../utils/sfptFunctions.js';
import { generateRandomNumberString } from "../utils/ramdomNumbers.js";

dotenv.config()


export const createNews = async (req, res) => {
    const sftpConfig = {
        host: process.env.SFTP_HOST,
        port: process.env.SFTP_PORT,
        username: process.env.SFTP_USERNAME,
        password: process.env.SFTP_PASSWORD,
    };

    let sftp;

    try {
        sftp = await connectSftp(sftpConfig);
    
        const { base64String, imgName } = req.body;

        if (!base64String) {
            return res.status(400).json({ error: 'El campo base64String es obligatorio.' });
        }

        const randomNumbers = generateRandomNumberString(5); 
    
        const combinedFileName = `${imgName}_${randomNumbers}`;

        const Noticia =  new News({
            id: randomNumbers,
            img: imgName,
        })
    
        const remoteDirectory = '/TRY/';
        const remoteFileName = combinedFileName;
    
        await uploadFile(sftp, base64String, remoteDirectory, remoteFileName);
        await Noticia.save()
    
        res.status(200).json({ message: 'Archivo subido exitosamente' });
    } catch (error) {
        console.error('Error al subir el archivo:', error);
        res.status(500).json({ error: 'Error interno del servidor al subir el archivo.' });
    } finally {
        if (sftp) {
            await closeSftp(sftp);
        }
    }
};


export const getNewsImage = async (req, res) => {
    const sftpConfig = {
        host: process.env.SFTP_HOST,
        port: process.env.SFTP_PORT,
        username: process.env.SFTP_USERNAME,
        password: process.env.SFTP_PASSWORD,
    };

    const remoteDirectory = '/TRY/';

    let sftp;

    try {
        sftp = await connectSftp(sftpConfig);

        const base64Content = await getFirstRemoteImage(sftp, remoteDirectory);

        res.send({ base64Content });
        
    } catch (error) {
        console.error('Error al obtener la imagen:', error);
        res.status(500).json({ error: 'Error al obtener la imagen.' });
    } finally {
        if (sftp) {
            await closeSftp(sftp);
        }
    }
};

export const getNews = async(_req, res) => {
    try {
      const Noticias = await News.findAll();
      res.json(Noticias);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }