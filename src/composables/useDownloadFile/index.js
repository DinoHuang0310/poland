import api from '../../services/api';

export default (fileUrl, fileName) => {

  return new Promise((resolve, reject) => {
    api({
      url: fileUrl,
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      try {
        const fileUrl = window.URL.createObjectURL(new Blob([response]));
        const a = document.createElement('a');
        a.href = fileUrl;
        a.setAttribute('download', fileName);
        document.body.appendChild(a);
        a.click();
        
        window.URL.revokeObjectURL(fileUrl);
        a.remove();

        resolve();
      } catch (error) {
        reject(error);
      }
      
    }).catch((error) => {
      reject(error);
    });
  })

}