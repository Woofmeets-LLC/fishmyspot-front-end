const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      if (file) {
        const fileReader = new FileReader();
        fileReader?.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = () => {
          reject();
        };
      }
    });
  };
  
  export const onSelectFile = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
  
    if (base64 instanceof Error) {
      return;
    }
    return { base64, file: file };
  };
  
  export const onSelectMultipleFile = async (file) => {
    // setFileName(e.target.files[0]?.name);
    const base64 = await convertBase64(file);
  
    if (base64 instanceof Error) {
      return;
    }
    return { base64, file: file };
  };
  