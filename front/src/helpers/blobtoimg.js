function base64ToImage(base64) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.onerror = reject;
    img.src = base64;
  });
}


