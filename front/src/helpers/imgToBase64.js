async function imageToBase64(image) {


  const response = await fetch(image);
  const blob = await response.blob();


  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}


/*

async function imageToBlob(image) {
  const response = await fetch(image, {
    headers: {
      'Content-Type': 'image/png'
    }
  });
  return await response.blob();
}


*/




/*
document.getElementById('fileInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = function() {
    const dataUrl = reader.result;
    const blob = dataURLToBlob(dataUrl);
    console.log(blob);
  };
  reader.readAsDataURL(file);
});

function dataURLToBlob(dataUrl) {
  const arr = dataUrl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

*/