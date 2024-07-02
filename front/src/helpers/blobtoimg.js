function blobToImage(blob) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      let url = URL.createObjectURL(blob);
      img.onload = () => {
        URL.revokeObjectURL(url);
        resolve(img);
      };
      img.onerror = reject;
      img.src = url;
    });
  }



