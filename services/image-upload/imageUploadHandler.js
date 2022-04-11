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
  const files = e.target.files;
  const base64s = [];
  for (let i = 0; i < files.length; i++) {
    base64s.push(await convertBase64(files[i]));
  }

  if (base64s instanceof Error) {
    return;
  }
  return { files, base64s };
};
