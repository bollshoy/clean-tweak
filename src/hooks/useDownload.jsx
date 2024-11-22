import { useCallback } from 'react';

const useDownload = (fileUrl, fileName) => {
    const downloadFile = useCallback(() => {
        const timestamp = new Date().getTime();
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', `${fileName}_${timestamp}.exe`);
        document.body.appendChild(link);
        link.click();
        link.remove();
    }, [fileUrl, fileName]);

    return downloadFile;
};

export default useDownload;
