import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import pdf from '../../assets/pdf/SomosPABerater.pdf';
import "./DownloadPDF.css"

const DownloadPDF = () => {
  useEffect(() => {
    const pdfPath = '/pdf/SomosPABerater.pdf';
    
    // Crear un elemento de enlace
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'SomosPABerater.pdf';

    // Agregar el enlace al documento y simular un clic
    document.body.appendChild(link);
    link.click();

    // Eliminar el enlace después de iniciar la descarga
    document.body.removeChild(link);

    window.location.href = '/';

  }, []);

};

export default DownloadPDF;
