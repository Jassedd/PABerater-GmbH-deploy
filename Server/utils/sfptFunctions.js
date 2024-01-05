
import SftpClient from 'ssh2-sftp-client';

export const connectSftp = async (config) => {
    const sftp = new SftpClient();
    await sftp.connect(config);
    return sftp;
};

export const closeSftp = async (sftp) => {
    await sftp.end();
};

export const uploadFile = async (sftp, base64String, remoteDirectory, remoteFileName) => {
    const remoteFilePath = `${remoteDirectory}/${remoteFileName}`;
    await sftp.put(Buffer.from(base64String, 'base64'), remoteFilePath);
};

export const getFirstRemoteImage = async (sftp, remoteDirectory) => {

    const fileList = await sftp.list(remoteDirectory);

    const imageFiles = fileList.filter(file => /\.(png|jpg|jpeg|gif)$/i.test(file.name));

    if (imageFiles.length > 0) {

        const firstImageFile = imageFiles[0];
        const remoteFilePath = `${remoteDirectory}/${firstImageFile.name}`;
        const remoteFileData = await sftp.get(remoteFilePath);
        const base64Content = remoteFileData.toString('base64');

        return base64Content;
    } else {

        throw new Error('No se encontraron archivos de imagen en el directorio remoto.');

    }
};
