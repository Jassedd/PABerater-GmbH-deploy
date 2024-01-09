import dotenv from "dotenv"

import { News } from "../model/News.js";
import { connectSftp, closeSftp, uploadFile, getFirstRemoteImage, getAllRemoteImages, getImageByName } from '../utils/sfptFunctions.js';
import { generateRandomNumberString } from "../utils/ramdomNumbers.js";

dotenv.config()

const sftpConfig = {
    host: process.env.SFTP_HOST,
    port: process.env.SFTP_PORT,
    username: process.env.SFTP_USERNAME,
    password: process.env.SFTP_PASSWORD,
};

export const createNews = async (req, res) => {


    let sftp;

    try {
        sftp = await connectSftp(sftpConfig);
    
        const { base64String, imgName, title, description, Date } = req.body;

        if (!base64String) {
            return res.status(400).json({ error: 'El campo base64String es obligatorio.' });
        }

        const randomNumbers = generateRandomNumberString(5); 
    
        const combinedFileName = `${imgName}_${randomNumbers}`;

        const Noticia =  new News({
            id: randomNumbers,
            img: imgName,
            title,
            description,
            Date
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

export const getNews = async (_req, res) => {
    let sftp;

    try {
        const remoteDirectory = '/TRY/';

        const noticias = await News.findAll();

        sftp = await connectSftp(sftpConfig);

        const noticiasConImagenes = [];

        for (const noticia of noticias) {
            const combinedFileName = `${noticia.img}_${noticia.id}`;
            const imageData = await getImageByName(sftp, remoteDirectory, combinedFileName);

            noticiasConImagenes.push({
                id: noticia.id,
                img: imageData ? imageData.base64Content : null,
                title: noticia.title,
                description: noticia.description,
                Date: noticia.Date,
                createdAt: noticia.createdAt,
                updatedAt: noticia.updatedAt,
            });
        }

        res.json(noticiasConImagenes);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    } finally {
        
        if (sftp) {
            sftp.end();
        }
    }
};

export const getNewsById = async (req, res) => {
    let sftp;

    try {
        const remoteDirectory = '/TRY/';
        const { id } = req.params;

        
        const noticia = await News.findByPk(id);

        
        if (!noticia) {
            return res.status(404).json({
                message: 'Noticia no encontrada',
            });
        }

        sftp = await connectSftp(sftpConfig);

        
        const combinedFileName = `${noticia.img}_${noticia.id}`;

        
        const imageData = await getImageByName(sftp, remoteDirectory, combinedFileName);

        
        const noticiaConImagen = {
            id: noticia.id,
            img: imageData ? imageData.base64Content : null,
            title: noticia.title,
            description: noticia.description,
            Date: noticia.Date,
            createdAt: noticia.createdAt,
            updatedAt: noticia.updatedAt,
        };

        res.json(noticiaConImagen);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    } finally {
        if (sftp) {
            sftp.end();
        }
    }
};



export const updateNews = async (req, res) => {
    const { id } = req.params; 
    const { title, description, Date } = req.body; 

    try {
        
        const newsToUpdate = await News.findByPk(id);

        
        if (!newsToUpdate) {
            return res.status(404).json({
                message: 'Noticia no encontrada',
            });
        }

        newsToUpdate.title = title;
        newsToUpdate.description = description;
        newsToUpdate.Date= Date
        
        await newsToUpdate.save();
        
        return res.status(200).json(newsToUpdate);
    } catch (error) {
        
        return res.status(500).json({
            message: error.message,
        });
    }
};