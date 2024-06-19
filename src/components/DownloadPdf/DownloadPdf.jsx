import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import pdf from '../../assets/pdf/SomosPABerater.pdf';

const DownloadPDF = () => {
  useEffect(() => {
    
    const pdfPath = pdf
    
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'SomosPABerater.pdf';

    
    document.body.appendChild(link);
    link.click();


    document.body.removeChild(link);

    window.location.href = '/';

  }, []);

};

export default DownloadPDF;
